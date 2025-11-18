# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FargateTaskDefinitionFaultInjection <a name="FargateTaskDefinitionFaultInjection" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection"></a>

Adds fault injection capability to a Fargate task definition.

This enables the ability to run fault injection experiments using AWS Fault Injection Service (FIS).

#### Initializers <a name="Initializers" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer"></a>

```typescript
import { FargateTaskDefinitionFaultInjection } from 'cdk-ecs-fargate-task-fis'

new FargateTaskDefinitionFaultInjection(scope: Construct, id: string, props: FargateTaskDefinitionFaultInjectionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps">FargateTaskDefinitionFaultInjectionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps">FargateTaskDefinitionFaultInjectionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.isConstruct"></a>

```typescript
import { FargateTaskDefinitionFaultInjection } from 'cdk-ecs-fargate-task-fis'

FargateTaskDefinitionFaultInjection.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group used by the SSM agent container. |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.property.ssmRole">ssmRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The SSM role used by the fault injection agent. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group used by the SSM agent container.

---

##### `ssmRole`<sup>Required</sup> <a name="ssmRole" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjection.property.ssmRole"></a>

```typescript
public readonly ssmRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The SSM role used by the fault injection agent.

---


## Structs <a name="Structs" id="Structs"></a>

### FargateTaskDefinitionFaultInjectionProps <a name="FargateTaskDefinitionFaultInjectionProps" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps"></a>

Configuration for adding fault injection capability to a Fargate task definition.

#### Initializer <a name="Initializer" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.Initializer"></a>

```typescript
import { FargateTaskDefinitionFaultInjectionProps } from 'cdk-ecs-fargate-task-fis'

const fargateTaskDefinitionFaultInjectionProps: FargateTaskDefinitionFaultInjectionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The task definition to enable fault injection on. |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.faultInjectionTypes">faultInjectionTypes</a></code> | <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType">FaultInjectionActionType</a>[]</code> | The types of fault injection actions that will be used This helps configure the task definition appropriately. |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | Optional custom log group for the SSM agent container. |
| <code><a href="#cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.ssmRole">ssmRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | Optional external SSM role to use for fault injection. |

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The task definition to enable fault injection on.

---

##### `faultInjectionTypes`<sup>Optional</sup> <a name="faultInjectionTypes" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.faultInjectionTypes"></a>

```typescript
public readonly faultInjectionTypes: FaultInjectionActionType[];
```

- *Type:* <a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType">FaultInjectionActionType</a>[]
- *Default:* All fault injection types enabled

The types of fault injection actions that will be used This helps configure the task definition appropriately.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* A new log group will be created

Optional custom log group for the SSM agent container.

---

##### `ssmRole`<sup>Optional</sup> <a name="ssmRole" id="cdk-ecs-fargate-task-fis.FargateTaskDefinitionFaultInjectionProps.property.ssmRole"></a>

```typescript
public readonly ssmRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new SSM role will be created

Optional external SSM role to use for fault injection.

---



## Enums <a name="Enums" id="Enums"></a>

### FaultInjectionActionType <a name="FaultInjectionActionType" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType"></a>

Types of fault injection actions that can be performed.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType.CPU_STRESS">CPU_STRESS</a></code> | CPU stress test. |
| <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType.IO_STRESS">IO_STRESS</a></code> | IO stress test. |
| <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType.KILL_PROCESS">KILL_PROCESS</a></code> | Process termination. |
| <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType.NETWORK_BLACKHOLE">NETWORK_BLACKHOLE</a></code> | Network black hole. |
| <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType.NETWORK_LATENCY">NETWORK_LATENCY</a></code> | Network latency. |
| <code><a href="#cdk-ecs-fargate-task-fis.FaultInjectionActionType.NETWORK_PACKET_LOSS">NETWORK_PACKET_LOSS</a></code> | Network packet loss. |

---

##### `CPU_STRESS` <a name="CPU_STRESS" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType.CPU_STRESS"></a>

CPU stress test.

---


##### `IO_STRESS` <a name="IO_STRESS" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType.IO_STRESS"></a>

IO stress test.

---


##### `KILL_PROCESS` <a name="KILL_PROCESS" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType.KILL_PROCESS"></a>

Process termination.

---


##### `NETWORK_BLACKHOLE` <a name="NETWORK_BLACKHOLE" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType.NETWORK_BLACKHOLE"></a>

Network black hole.

---


##### `NETWORK_LATENCY` <a name="NETWORK_LATENCY" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType.NETWORK_LATENCY"></a>

Network latency.

---


##### `NETWORK_PACKET_LOSS` <a name="NETWORK_PACKET_LOSS" id="cdk-ecs-fargate-task-fis.FaultInjectionActionType.NETWORK_PACKET_LOSS"></a>

Network packet loss.

---

