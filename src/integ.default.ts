import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import {
  FargateTaskDefinitionFaultInjection,
  FaultInjectionActionType,
} from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'integ-ecs-fargate-task-fis');

// Create a Fargate Task Definition
const taskDefinition = new ecs.FargateTaskDefinition(stack, 'TaskDef', {
  memoryLimitMiB: 512,
  cpu: 256,
});

taskDefinition.addContainer('web', {
  image: ecs.ContainerImage.fromRegistry('nginx'),
  portMappings: [{ containerPort: 80 }],
});

// Apply your construct to the task definition
new FargateTaskDefinitionFaultInjection(stack, 'TestConstruct', {
  taskDefinition,
  faultInjectionTypes: [
    FaultInjectionActionType.NETWORK_BLACKHOLE,
    FaultInjectionActionType.NETWORK_LATENCY,
    FaultInjectionActionType.NETWORK_PACKET_LOSS,
  ],
});

// Create the IntegTest
new IntegTest(app, 'IntegTest', {
  testCases: [stack],
  // Optional: Configure test options
  // diffAssets: true,
  // stackUpdateWorkflow: true,
});

app.synth();
