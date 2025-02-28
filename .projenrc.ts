import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Sunil Govindankutty",
  authorAddress: "sunilkumarg@yahoo.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.7.0",
  name: "cdk-ecs-fargate-task-fis",
  projenrcTs: true,
  repositoryUrl: "https://github.com/govisun/cdk-ecs-fargate-task-fis.git",

  deps: ["aws-cdk-lib", "@aws-cdk/integ-tests-alpha"],
  description:
    "Helps update the ECS Task definition will all the prerequisites for fault injection with FIS",
  keywords: ["fis", "ecs fargate", "fault injection"],
  license: "Apache-2.0"
});
project.synth();
