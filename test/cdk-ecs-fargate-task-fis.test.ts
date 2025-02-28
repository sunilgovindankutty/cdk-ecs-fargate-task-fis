import * as cdk from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import * as ecs from "aws-cdk-lib/aws-ecs";
import {
  FargateTaskDefinitionFaultInjection,
  FaultInjectionActionType,
} from "../src/index";

describe("FargateTaskDefinitionFaultInjection", () => {
  let app: cdk.App;
  let stack: cdk.Stack;
  let taskDefinition: ecs.FargateTaskDefinition;

  beforeEach(() => {
    // Create a fresh app, stack, and task definition for each test
    app = new cdk.App();
    stack = new cdk.Stack(app, "TestStack");
    taskDefinition = new ecs.FargateTaskDefinition(stack, "TestTaskDef", {
      memoryLimitMiB: 512,
      cpu: 256,
    });

    // Add a container to the task definition
    taskDefinition.addContainer("web", {
      image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
      memoryLimitMiB: 256,
      cpu: 128,
    });
  });

  test("Fault Injection Container Added", () => {
    // WHEN
    new FargateTaskDefinitionFaultInjection(stack, "FaultInjection", {
      taskDefinition: taskDefinition,
      faultInjectionTypes: [
        FaultInjectionActionType.CPU_STRESS,
        FaultInjectionActionType.NETWORK_LATENCY,
      ],
    });

    // THEN
    const template = Template.fromStack(stack);

    // Verify task definition properties
    template.hasResourceProperties("AWS::ECS::TaskDefinition", {
      RequiresCompatibilities: ["FARGATE"],
      PidMode: "task",
      EnableFaultInjection: true,
    });

    // Verify SSM agent container is added
    template.hasResourceProperties("AWS::ECS::TaskDefinition", {
      ContainerDefinitions: Match.arrayWith([
        Match.objectLike({
          Name: "amazon-ssm-agent",
          Image: Match.stringLikeRegexp(
            "public.ecr.aws/amazon-ssm-agent/amazon-ssm-agent",
          ),
          Essential: false,
        }),
      ]),
    });
  });

  test("SSM Role Created", () => {
    // WHEN
    new FargateTaskDefinitionFaultInjection(stack, "FaultInjection", {
      taskDefinition: taskDefinition,
      faultInjectionTypes: [FaultInjectionActionType.CPU_STRESS],
    });

    // THEN
    const template = Template.fromStack(stack);

    // Updated to match actual role structure
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Principal: {
              Service: "ssm.amazonaws.com",
            },
          },
        ],
      },
      Description: "Role used by SSM agent for ECS Fault Injection",
      ManagedPolicyArns: Match.arrayWith([
        {
          "Fn::Join": Match.anyValue(),
        },
      ]),
    });
  });
});
