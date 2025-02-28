# CDK ECS Fargate Task FIS

A CDK construct library that helps update Amazon ECS Fargate Task definitions with all the prerequisites required for AWS Fault Injection Simulator (FIS) experiments.

## Installation

```bash
npm install cdk-ecs-fargate-task-fis

```

## Usage
```typescript
import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { EcsFargateTaskFis } from 'cdk-ecs-fargate-task-fis';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

// Create your ECS Fargate Task Definition
const taskDefinition = new ecs.FargateTaskDefinition(stack, 'TaskDef', {
  memoryLimitMiB: 512,
  cpu: 256,
});

// Add your container
taskDefinition.addContainer('web', {
  image: ecs.ContainerImage.fromRegistry('nginx'),
  portMappings: [{ containerPort: 80 }],
});

// Apply FIS prerequisites to your task definition
new EcsFargateTaskFis(stack, 'FisConfig', {
  taskDefinition,
  faultInjectionTypes: [
    FaultInjectionActionType.NETWORK_BLACKHOLE,
    FaultInjectionActionType.NETWORK_LATENCY,
    FaultInjectionActionType.NETWORK_PACKET_LOSS,
  ]
});
```

## Features
* Automatically configures ECS Task Definition for FIS experiments

* Adds necessary IAM permissions for FIS

* Sets up required container configurations

* Ensures compatibility with AWS Fault Injection Simulator


## Related Projects
AWS CDK

AWS Fault Injection Simulator