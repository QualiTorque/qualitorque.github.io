---
sidebar_position: 1
title: Torque Workflows
---

## Workflow

Workflows are a powerful way to automate and orchestrate complex processes. They allow you to define a series of actions and steps that are executed in a specific order. Workflows can be triggered by events or scheduled to run at specific times.

Workflow discovery is done in the same way of Blueprints. The yaml needs to be under the `blueprints/` directory in the repository.

The Workflow YAML standard is similar to the Blueprint standard. The only addition to the Workflow specification is the the `workflow` block.

```yaml
spec_version: 2
description: This Workflow will ...

workflow:
  # scope possible values are: space, env or env_resource
  scope: env

grains: ...
```

### scope

The `scope` field in a Torque workflow determines where the workflow is available. There are two possible values for the `scope` field:

1. `space`: Workflows with this scope are available at the space level, and can be triggered and executed without any dependencies.
2. `env`: Workflows with this scope are available at the environment level. This means that they can be triggered and executed for the entire environment. These workflows can be used to automate and orchestrate processes that involve multiple resources within the environment.
3. `env_resource`: Workflows with this scope will be available at the resource level (e.g. for a VM or DB). The type of resource for which the workflow will be available is defined by the `resource-types` field. Only resources that match the specified resource types will have access to these workflows. This allows for more granular control and customization of workflows based on specific resource types.

### resource-types

When scoping a the workflow to an `env_resource`, the `resource-types` field allow to attach that workflow to the specified resource types.

In this example, we scope this workflow only AWS EC2 instances resources:

```yaml 
spec_version: 2
description: This Resource Workflow will ...

workflow:
  scope: env_resource
  # note: more than one resource type can be specified in CSV format.
  resource-types: aws_instance

grains: ...
```

By specifying the appropriate scope for your workflows, you can ensure that they are available and applicable to the desired level of your infrastructure. Whether you need to automate processes at the environment level or target specific resources, Torque workflows provide the flexibility to meet your automation needs.

### labels-selector

The `labels-selector` field can be used to "attach" workflows to `Blueprints` or running `Environments` that have matching labels.

In case `labels-selector` field is not defined, the workflow will be available to all of the `Blueprints` and running `Environments`.

The `labels-selector` supports two types of conditions:
1. **`and` condition**: Use the `and` operator between labels to specify that all labels must match.
2. **`or` condition**: Use a comma `,` between labels to specify that any of the labels can match.

:::info
You can only choose one type of condition (`and` or `,`) and cannot mix them in the same `labels-selector`.
:::

```yaml 
spec_version: 2
description: This Workflow will ...

workflow:
  scope: env
  # example of 'and' condition: all labels must match
  labels-selector: label1:value1 and label2
  # example of 'or' condition: any label can match
  # labels-selector: label1:value1, label2

grains: ...
```

### bindings

In a workflow, you can define bindings to access environment and resource information. Bindings are automatic variables that provide context to the workflow. The available bindings depend on the scope of the workflow.

For both `env` and `env_resource` scope workflows, accessing the env ("bound entity") inputs and outputs, will be as follow:
* `{{ .bindings.inputs.<the env input name> }}`
* `{{ .bindings.outputs.<the env output name> }}`

For `env` scoped workflow, the env `introspection` can be access like so:
* `{{ bindings.resource_type.<the resource type>.attributes.<the attribute>}}`

:::info
If more then 1 resource type like this exist in this env then we take the first one)
:::

For `env_resource` scoped workflow, the env `introspection` can be access like so:
* `{{ bindings.attributes.<the attribute>}}`


**Bindings example**

```yaml 
spec_version: 2
description: workflow with "env" scope example

workflow:
  scope: env
  triggers:
    - type: manual
 
inputs:
  agent:
    type: agent
    default: prod

grains:
  shell_grain:
    kind: shell
    spec:
      agent:
        name: '{{.inputs.agent}}'
      activities:
        deploy:
          commands:
            - 'echo "another thing - {{.bindings.resource_type.random_string.attributes.result}}"'
            - 'echo "another thing - {{.bindings.resource_type.random_id.attributes.hex}}"'
            - 'echo "another thing - {{.bindings.resource_type.null_resource.attributes.id}}"'
```
```yaml 
spec_version: 2
description: workflow with "env_resource" scope example

workflow:
  scope: env_resource
  resource-selector: aws_s3_bucket
  triggers:
    - type: manual
 
inputs:
  agent:
    type: agent
grains:
  shell_me:
    kind: shell
    spec:
      agent:
        name: '{{.inputs.agent}}'
      activities:
        deploy:
          commands:
            - 'echo "--->> {{.bindings.attributes.arn}}"'
```

### environment `contract.json`


When a workflow is executed with a specific scope, the environment **context** JSON object is provided in a file called `contract.json`. This file is accessible from the Runner and contains information about the environment, such as its ID, name, owner email, inputs and all grains introspection data.

For workflows with scope `env`, the following automatic variables are available:
- `bindings.environment_id`

For workflows with scope `env_resource`, the following automatic variables are available:
- `bindings.environment_id`
- `bindings.grain_path`
- `bindings.resource_id`

The binding variables will provide the relevant context to access the relevant resource introspection data in the `contract` object available in the workflow.

Here is an example of a `contract.json` file:

```json
{
  "id": "kuzxqUlGSM4C",
  "name": "EC2",
  "owner_email": "dev@quali.com",
  "last_used": "2023-10-07T11:57:18.6865654Z",
  "inputs": [
    {
      "name": "instance_name",
      "type": "string",
      "value": "EC2",
      "sensitive": false,
      "description": "Name for the EC2 instance"
    },
    {
      "name": "aws_region",
      "type": "string",
      "value": "eu-west-1",
      "sensitive": false,
      "description": "AWS region to create resources in"
    },
    {
      "name": "instance_ami",
      "type": "string",
      "value": "ami-016587dea5af03adb",
      "sensitive": false,
      "description": "AMI ID for the EC2 instance"
    },
    {
      "name": "instance_type",
      "type": "string",
      "value": "t2.micro",
      "sensitive": false,
      "description": "Instance type for the EC2 instance"
    },
    {
      "name": "key_pair_name",
      "type": "string",
      "value": "key-pair",
      "sensitive": false,
      "description": "Name of the key pair"
    },
    {
      "name": "agent",
      "type": "agent",
      "value": "cloud-agent",
      "sensitive": false,
      "description": null
    }
  ],
  "grains": {
    "ec2": {
      "kind": "terraform",
      "path": "ec2",
      "outputs": {
        "instance_availability_zone": "eu-west-1c",
        "instance_id": "i-044264d8ee1c50f3d",
        "instance_private_ip": "172.31.28.188",
        "instance_public_ip": "18.203.238.11",
        "instance_subnet_id": "subnet-0c1abbaed3cdbdb66"
      }
    },
    "root_blueprint": {
      "kind": "blueprint",
      "path": "root_blueprint",
      "outputs": {
        "ec2_instance_availability_zone": "eu-west-1c",
        "ec2_instance_id": "i-044264d8ee1c50f3d",
        "ec2_instance_private_ip": "172.31.28.188",
        "ec2_instance_public_ip": "18.203.238.11",
        "ec2_instance_subnet_id": "subnet-0c1abbaed3cdbdb66",
        "ec2_instance_vpc_id": ""
      }
    }
  },
  "resources": [
    {
      "grain_path": "ec2",
      "resource_name": "my_ec2_instance",
      "resource_type": "aws_instance",
      "identifier": "aws_instance.my_ec2_instance",
      "attributes": {
        "id": "i-044264d8ee1c50f3d",
        "ami": "ami-016587dea5af03adb",
        "arn": "arn:aws:ec2:eu-west-1:<accout-id>:instance/i-044264d8ee1c50f3d",
        "tags": "..",
        "host_id": "",
        "tenancy": "default",
        "key_name": "key-pair",
        "tags_all": "..",
        "timeouts": "",
        "public_ip": "18.203.238.11",
        "subnet_id": "subnet-0c1abbaed3cdbdb66",
        "user_data": "",
        "monitoring": "False",
        "private_ip": "172.31.28.188",
        "public_dns": "ec2-18-203-238-11.eu-west-1.compute.amazonaws.com",
        "cpu_options": "[\n  {\n    \"amd_sev_snp\": \"\",\n    \"core_count\": 1,\n    \"threads_per_core\": 1\n  }\n]",
        "hibernation": "False",
        "outpost_arn": "",
        "private_dns": "ip-172-31-28-188.eu-west-1.compute.internal",
        "volume_tags": "",
        "ebs_optimized": "False",
        "instance_type": "t2.micro",
        "******_data": "",
        "cpu_core_count": "1",
        "instance_state": "running",
        "ipv6_addresses": "[]",
        "enclave_options": "[\n  {\n    \"enabled\": false\n  }\n]",
        "launch_template": "[]",
        "placement_group": "",
        "security_groups": "[\n  \"default\"\n]",
        "disable_api_stop": "False",
        "ebs_block_device": "[]",
        "metadata_options": "[\n  {\n    \"http_endpoint\": \"enabled\",\n    \"http_protocol_ipv6\": \"disabled\",\n    \"http_put_response_hop_limit\": 1,\n    \"http_tokens\": \"optional\",\n    \"instance_metadata_tags\": \"disabled\"\n  }\n]",
        "user_data_base64": "",
        "availability_zone": "eu-west-1c",
        "get_******_data": "False",
        "network_interface": "[]",
        "root_block_device": "[\n  {\n    \"delete_on_termination\": true,\n    \"device_name\": \"/dev/sda1\",\n    \"encrypted\": false,\n    \"iops\": 100,\n    \"kms_key_id\": \"\",\n    \"tags\": {},\n    \"tags_all\": {},\n    \"throughput\": 0,\n    \"volume_id\": \"vol-00160f2bba38f64ea\",\n    \"volume_size\": 8,\n    \"volume_type\": \"gp2\"\n  }\n]",
        "source_dest_check": "True",
        "instance_lifecycle": "",
        "ipv6_address_count": "0",
        "maintenance_options": "[\n  {\n    \"auto_recovery\": \"default\"\n  }\n]",
        "cpu_threads_per_core": "1",
        "credit_specification": "[\n  {\n    \"cpu_credits\": \"standard\"\n  }\n]",
        "iam_instance_profile": "",
        "secondary_private_ips": "[]",
        "ephemeral_block_device": "[]",
        "vpc_security_group_ids": "[\n  \"sg-085399a72b47e21e3\"\n]",
        "disable_api_termination": "False",
        "host_resource_group_arn": "",
        "instance_market_options": "[]",
        "private_dns_name_options": "[\n  {\n    \"enable_resource_name_dns_a_record\": false,\n    \"enable_resource_name_dns_aaaa_record\": false,\n    \"hostname_type\": \"ip-name\"\n  }\n]",
        "spot_instance_request_id": "",
        "placement_partition_number": "0",
        "associate_public_ip_address": "True",
        "user_data_replace_on_change": "False",
        "primary_network_interface_id": "eni-03e8445441f4ddb2e",
        "capacity_reservation_specification": "[\n  {\n    \"capacity_reservation_preference\": \"open\",\n    \"capacity_reservation_target\": []\n  }\n]",
        "instance_initiated_shutdown_behavior": "stop"
      }
    }
  ]
}
```

### triggers

Workflows can be triggered by various types of events or schedules:
1. `cron`: Schedules based on cron expressions.
   - `overridable`: Optional field to allow end-users to override the cron
2. `manual`: Manually triggered workflows, optionally restricted to specific user groups.
   -  `groups`: Optional field to allow only users in the specified groups to run the workflow
3. `event`: Environment events can be events such as drift detected, updates detected, approval requests, and more. The events include:
   - `Drift Detected`
   - `Updates Detected`
   - `Approval Request Approved`
   - `Approval Request Denied`
   - `Approval Request Cancelled`
   - `Environment Ended`
   - `Environment Launched`
   - `Environment Active With Error`
   - `Environment Ending Failed`
   - `Environment Force Ended`
   - `Environment Extended`
   - `Collaborator Added`
   - `Environment Idle`

```yaml
spec_version: 2
description: ...

workflow:
  scope: env

  triggers:
    - type: event
      event:
        - 'Approval Request Approved'
        - 'Approval Request Cancelled'

    - type: cron 
      cron: '0 22 * * *' # every day at 22:00
      overridable: true # Allow end-users to override the cron

    - type: manual 
      groups: # Optional, allow only users in the "Admin" group to run the workflow
        - 'Admins'
   
inputs: ...
outputs: ...
grains: ...
```

### YAML 

Simple example running shell script in a Workflow

```yaml
spec_version: 2
description: Workflow with shell grains

workflow:
  scope: env_resource
  # note: more than one resource type can be specified in CSV format.
  resource-types: aws_instance,azurerm_linux_virtual_machine
  # note: more than one label can be specified in CSV format.
  labels-selector: VMs

inputs:
  input1:
    type: string
    default: 'in1'
  input2:
    type: string
  agent:
    type: agent

outputs:
  resource_state:
    value: '{{ .grains.helper.activities.deploy.commands.print.outputs.state_tr }}'  
  input1:
    value: '{{ .inputs.input1 }}'  
  
grains:
  helper:
    kind: shell
    spec:
      agent:
          name: '{{ .inputs.agent }}'
      files:
        - source: scripts
          path: scripts/print-resource-2.sh
      activities:
        deploy:
          commands:
            - name: print
              command:  'source print-resource-2.sh {{ .bindings.resource_id }} {{ .bindings.grain_path }}'
              outputs:
                - state_tr

  job2:
    kind: shell
    depends-on: helper
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      activities:
        deploy:
          commands:
            - name: print                  
              command:  'echo "{{ .grains.helper.activities.deploy.commands.print.outputs.state_tr }}"'
```

**Shell script:**

```shell
resource_id=$1
grain_path=$2
contract_path=$CONTRACT_FILE_PATH

# will print the attribute "power_state" of the resource
state=$(jq --arg ResourceId "$resource_id" --arg GrainPath "$grain_path" '.resources[] | select(.identifier == $ResourceId and .grain_path == $GrainPath) | .attributes | .power_state' $contract_path)

export state_tr=`echo -n $state | tr -d '"'`

echo ""
echo "extracted values:"
echo "------------------"
echo "state_tr: $state_tr"
echo "------------------"
echo ""

cat $CONTRACT_FILE_PATH
echo $state_tr
export $state_tr
```

## Torque `built-in` Workflows

### `built-in` workflows

Torque provides some out-of-the-box workflows for you to use.

:::note
All the built-in workflows are `Ansible` based and available here: https://github.com/QualiTorque/torque-actions
:::

:::info
- In ***built-in*** workflows (with *env_resource* scope), only one grain is allowed to be specified.
- One action will be ran per one introspection resource.
:::

In order to use the built-in workflows, a `built-in` field is required and under source.path you need to point to the relevant action. E.g.:
```yaml
      built-in: true
      source:
        path: https://github.com/QualiTorque/torque-actions.git//resource/<action>.yaml
```

**The list of the available actions:**
- `aws-power-on-ec2-tf`: This workflow is used to power on an EC2 instance in AWS that was provisioned using Terraform.
- `aws-power-off-ec2-tf`: This workflow is used to power off an EC2 instance in AWS that was provisioned using Terraform.
- `aws-restart-ec2-tf`: This workflow is used to restart an EC2 instance in AWS that was provisioned using Terraform.
- `azure-power-on-vm-tf`: This workflow is used to power on a virtual machine in Azure that was provisioned using Terraform.
- `azure-power-off-vm-tf`: This workflow is used to power off a virtual machine in Azure that was provisioned using Terraform.
- `azure-restart-vm-tf`: This workflow is used to restart a virtual machine in Azure that was provisioned using Terraform.
- `netapp-cvo-azure-power-on-vm-tf`: This workflow is used to power on a NetApp Cloud Volumes ONTAP virtual machine in Azure that was provisioned using Terraform.
- `netapp-cvo-azure-deallocate-vm-tf`: This workflow is used to deallocate a NetApp Cloud Volumes ONTAP virtual machine in Azure that was provisioned using Terraform.
- `netapp-cvo-azure-restart-vm-tf`: This workflow is used to restart a NetApp Cloud Volumes ONTAP virtual machine in Azure that was provisioned using Terraform.
- `aws-temp-stop-rds-tf`: This workflow is used to temporarily stop an RDS instance in AWS that was provisioned using Terraform.
- `aws-delete-rds-tf`: This workflow is used to delete an RDS instance in AWS that was provisioned using Terraform.
- `azure-delete-mariadb-tf`: This workflow is used to delete a MariaDB server in Azure that was provisioned using Terraform.
- `azure-delete-mysql-tf`: This workflow is used to delete a MySQL server in Azure that was provisioned using Terraform.
- `azure-delete-postgresql-tf`: This workflow is used to delete a PostgreSQL server in Azure that was provisioned using Terraform.
- `azure-delete-flexible-mysql-tf`: This workflow is used to delete a flexible MySQL server in Azure that was provisioned using Terraform.
- `azure-delete-flexible-postgresql-tf`: This workflow is used to delete a flexible PostgreSQL server in Azure that was provisioned using Terraform.
- `azure-delete-mssql-tf`: This workflow is used to delete an MSSQL server in Azure that was provisioned using Terraform.
- `azure-stop-mysql-server-tf`: This workflow is used to stop a MySQL server in Azure that was provisioned using Terraform.
- `azure-start-mysql-server-tf`: This workflow is used to start a MySQL server in Azure that was provisioned using Terraform.
- `azure-stop-mariadb-server-tf`: This workflow is used to stop a MariaDB server in Azure that was provisioned using Terraform.
- `azure-start-mariadb-server-tf`: This workflow is used to start a MariaDB server in Azure that was provisioned using Terraform.
- `azure-stop-flexible-postgresql-server-tf`: This workflow is used to stop a flexible PostgreSQL server in Azure that was provisioned using Terraform.
- `azure-start-flexible-postgresql-server-tf`: This workflow is used to start a flexible PostgreSQL server in Azure that was provisioned using Terraform.
- `azure-stop-flexible-mysql-server-tf`: This workflow is used to stop a flexible MySQL server in Azure that was provisioned using Terraform.
- `azure-start-flexible-mysql-server-tf`: This workflow is used to start a flexible MySQL server in Azure that was provisioned using Terraform.
- `azure-restart-mariadb-server-tf`: This workflow is used to restart a MariaDB server in Azure that was provisioned using Terraform.
- `azure-restart-mysql-server-tf`: This workflow is used to restart a MySQL server in Azure that was provisioned using Terraform.
- `azure-restart-flexible-mysql-server-tf`: This workflow is used to restart a flexible MySQL server in Azure that was provisioned using Terraform.
- `azure-restart-flexible-postgresql-server-tf`: This workflow is used to restart a flexible PostgreSQL server in Azure that was provisioned using Terraform.
- `azure-restart-postgresql-server-tf`: This workflow is used to restart a PostgreSQL server in Azure that was provisioned using Terraform.
- `aws-start-rds-tf`: This workflow is used to start an RDS instance in AWS that was provisioned using Terraform.
- `aws-power-on-ec2-cfn`: This workflow is used to power on an EC2 instance in AWS that was provisioned using CloudFormation..
- `aws-power-off-ec2-cfn`: This workflow is used to power off an EC2 instance in AWS that was provisioned using CloudFormation..
- `aws-restart-ec2-cfn`: This workflow is used to restart an EC2 instance in AWS that was provisioned using CloudFormation..
- `aws-temp-stop-rds-cfn`: This workflow is used to temporarily stop an RDS instance in AWS that was provisioned using CloudFormation..
- `aws-start-rds-cfn`: This workflow is used to start an RDS instance in AWS that was provisioned using CloudFormation..
- `azure-pause-aks-tf`: This workflow is used to pause an AKS cluster in Azure that was provisioned using Terraform.
- `azure-resume-aks-tf`: This workflow is used to resume an AKS cluster in Azure that was provisioned using Terraform.
- `aws-pause-eks-tf`: This workflow is used to pause an EKS cluster in AWS that was provisioned using Terraform.
- `aws-resume-eks-tf`: This workflow is used to resume an EKS cluster in AWS that was provisioned using Terraform.

**Example of `built-in` workflow:**

```yaml
spec_version: 2
description: This workflow pauses an EKS cluster on-demand

workflow:
  scope: env
  resource-types: eks_cluster
  triggers:
    - type: manual

inputs:
  agent:
    type: agent
    default: cloud-agent

grains:
  pause_eks:
    kind: ansible
    spec:
      built-in: true
      source:
        path: https://github.com/QualiTorque/torque-actions.git//resource/aws-pause-eks-tf.yaml
      agent:
        name: '{{ .inputs.agent }}'
``` 

## Explore Use-cases

To explore the different use-cases [click here](workflows-use-cases)
