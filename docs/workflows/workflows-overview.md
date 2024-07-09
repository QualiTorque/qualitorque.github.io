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

// highlight-start
workflow:
  scope: env
// highlight-end

grains: ...
```

The `scope` field in a Torque workflow determines where the workflow is available. There are two possible values for the `scope` field:

1. `env`: Workflows with this scope are available at the environment level. This means that they can be triggered and executed for the entire environment. These workflows can be used to automate and orchestrate processes that involve multiple resources within the environment.

2. `env_resource`: Workflows with this scope are available at the resource level. The availability of these workflows is based on the resource type defined in the `label-selector` field. Only resources that match the specified resource type will have access to these workflows. This allows for more granular control and customization of workflows based on specific resource types.
For example:
```yaml showLineNumbers
spec_version: 2
description: This Resource Workflow will ...

// highlight-start
workflow:
  scope: env_resource
  label-selector: aws_instance
// highlight-end


grains: ...
```

By specifying the appropriate scope for your workflows, you can ensure that they are available and applicable to the desired level of your infrastructure. Whether you need to automate processes at the environment level or target specific resources, Torque workflows provide the flexibility to meet your automation needs.

### Bindings

In a workflow, you can define bindings to access environment and resource information. Bindings are automatic variables that provide context to the workflow. The available bindings depend on the scope of the workflow.

For workflows with scope `env`, the following automatic variables are available:
- `bindings.environment_id`

For workflows with scope `env_resource`, the following automatic variables are available:
- `bindings.environment_id`
- `bindings.grain_path`
- `bindings.resource_id`

The binding variables will provide the relevant context to access the relevant resource introspection data in the `contract` object available in the workflow.

### Environment `contract` Object

When a workflow is executed with a specific scope, the environment **context** JSON object is provided in a file called `contract.json`. This file is accessible from the Runner and contains information about the environment, such as its ID, name, owner email, inputs and all grains introspection data.

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

### Triggers

Workflows can be triggered by various types of events or schedules:
1. `cron`: Schedules based on cron expressions.
   - `overridable`: Optional field to allow end-users to override the cron
2. `manual`: Manually triggered workflows, optionally restricted to specific user groups.
   -  `groups`: Optional field to allow only users in the specified groups to run the workflow
3. `env-event`: Environment events can be events such as drift detected, updates detected, approval requests, and more. The events include:
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

// highlight-start
  triggers:
    - type: env-event
      events:
        - 'Approval Request Approved'
        - 'Approval Request Cancelled'

    - type: cron 
      cron: '0 22 * * *' # every day at 22:00
      overridable: true # Allow end-users to override the cron

    - type: manual 
      groups: # Optional, allow only users in the "Admin" group to run the workflow
        - 'Admins' 
// highlight-end
   
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
  label-selector: azurerm_linux_virtual_machine
  
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
  label-selector: eks_cluster
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
// highlight-start
      built-in: true
      source:
        path: https://github.com/QualiTorque/torque-actions.git//resource/aws-pause-eks-tf.yaml
// highlight-end
      agent:
        name: '{{ .inputs.agent }}'
``` 

:::note
- Only one grain with *built-in* action may be present in workflow blueprint
- One action will be ran per one introspection resource. 
:::


## Use-Cases and Examples

This example demonstrates a simple workflow that includes shell grains with dependencies.

### Example 1: Extract VM power state

Simple Workflow example to extract Azure VM power state

- Gather information about the current power state of Azure VM resources. 
- This information can be useful for various purposes, such as monitoring, troubleshooting, or automation tasks. By extracting the power state, you can determine whether a VM is running, stopped, or in any other power state, and use this information to make informed decisions or trigger further actions based on the VM's power state. 
- This workflow provides a convenient way to extract the power state of Azure VM resources and make it available as an output for further processing or integration with other systems.

```yaml
spec_version: 2
description: Workflow with extract Azure VM power state

workflow:
  scope: env_resource
  label-selector: azurerm_linux_virtual_machine # will be available for all azure VM resources type
  
inputs:
  agent:
    type: agent
    default: azure-agent

outputs:
  resource_state:
    value: '{{ .grains.power-state.activities.deploy.commands.print.outputs.state }}'  
  
grains:
  power-state:
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
                - state
```

**Shell script:**

```shell
resource_id=$1
grain_path=$2
contract_path=$CONTRACT_FILE_PATH

# will print the attribute "power_state" of the resource
state_str=$(jq --arg ResourceId "$resource_id" --arg GrainPath "$grain_path" '.resources[] | select(.identifier == $ResourceId and .grain_path == $GrainPath) | .attributes | .power_state' $contract_path)

export state=`echo -n $state_tr | tr -d '"'`

echo ""
echo "extracted values:"
echo "------------------"
echo "state: $state"
echo "------------------"
echo ""

cat $CONTRACT_FILE_PATH
echo $state_tr
export $state_tr
```

### Example 2: Attach an EBS volume to an EC2 instance

Workflow that attach an EBS volume to an EC2 instance using Ansible grain

Running the "Attach volume to EC2" workflow enables you to enhance the storage capabilities of your EC2 instances, improve data management, and optimize performance, ultimately leading to a more efficient and reliable infrastructure. It provides several benefits:

1. **Scalability**: By attaching additional EBS volumes to your EC2 instances, you can increase the storage capacity available to your applications. This allows you to handle larger amounts of data and accommodate growing workloads.
2. **Flexibility**: Attaching EBS volumes gives you the flexibility to store different types of data separately. For example, you can attach a volume specifically for database storage or one for log files. This separation improves organization and makes it easier to manage and troubleshoot your resources.
3. **Data Persistence**: EBS volumes are persistent storage devices, meaning that the data stored on them remains intact even if the EC2 instance is stopped or terminated. This ensures that your valuable data is preserved and can be accessed whenever needed.
4. **High Availability**: By attaching multiple EBS volumes to your EC2 instances, you can distribute your data across different volumes. This improves fault tolerance and ensures that your applications remain available even if one volume fails.
5. **Performance Optimization**: EBS volumes offer different performance characteristics based on their volume types. By attaching volumes with the appropriate performance characteristics, you can optimize the storage performance of your EC2 instances and improve the overall responsiveness of your applications.

```yaml
spec_version: 2
description: Attach an EBS volume to an EC2 instance using Ansible grain

workflow:
  scope: env_resource
  label-selector: aws_instance # will be available for all aws ec2 resources type

inputs:
  ebs_volume_size:
    type: string
    default: 1
  device_name:
    type: string
    default: /dev/sdf
  volume_type:
    type: string
    default: gp3

outputs:
  volume_id:
    value: '{{ .grains.attach_volume.outputs.volume_id }}'
    quick: true
  volume_name:
    value: '{{ .grains.attach_volume.outputs.volume_name }}'
    quick: true
  volume_operation_data:
    value: '{{ .grains.attach_volume.outputs.volume_operation_data }}'
    quick: true

grains:
  helper:
    kind: shell
    spec:
      agent:
        name: cloud-agent
      files:
        - source: blueprints
          path: blueprints/workflows/scripts/attach-detach-helper.sh
      activities:
        deploy:
          commands:
            - name: get-outputs
              command:  'source attach-detach-helper.sh {{ .bindings.resource_id }} {{ .bindings.grain_path }}'
              outputs:
                - id
                - region
                - availability_zone

  attach_volume:
    depends-on: helper
    kind: ansible
    spec:
      source:
        store: ansible
        path: attach_volume/attach_volume.yml
      agent:
        name: cloud-agent
      inputs:
      - ec2_instance_id: '{{ .grains.helper.activities.deploy.commands.get-outputs.outputs.id }}'
      - aws_region: '{{ .grains.helper.activities.deploy.commands.get-outputs.outputs.region }}'
      - availability_zone: '{{ .grains.helper.activities.deploy.commands.get-outputs.outputs.availability_zone }}'
      - ebs_volume_size: '{{ .inputs.ebs_volume_size }}'
      - device_name: '{{ .inputs.device_name }}'
      - volume_type: '{{ .inputs.volume_type }}'
      - env_id: '{{ envId }}'
      - volume_name: 'ebs-volume-{{ envId }}'
      env-vars: []
      outputs:
      - volume_operation_data
      - volume_name
      - volume_id

      inventory-file:
        localhost:
          hosts:
            127.0.0.1:
              ansible_connection: local
```

**Ansible playbook:**

```yaml
---
- hosts: localhost
  connection: local
  gather_facts: false

  tasks:
    - name: Install boto3 python package
      pip:
        name: boto3
        
    # Create new volume using SSD storage
    - name: Create and attach new EBS volume
      amazon.aws.ec2_vol:
        instance: "{{ ec2_instance_id | replace('\n', '') }}"
        region: "{{ aws_region | replace('\n', '') }}"
        zone: "{{ availability_zone | replace('\n', '') }}"
        volume_size: "{{ ebs_volume_size | replace('\n', '') }}"
        device_name: "{{ device_name | replace('\n', '') }}"
        volume_type: "{{ volume_type | replace('\n', '') }}"
        delete_on_termination: true # The volume will be deleted upon instance termination.
      register: attached_volume

    - name: Ensure tags are present on a resource
      amazon.aws.ec2_tag:
        region: "{{ aws_region | replace('\n', '') }}"
        resource: "{{ attached_volume.volume_id }}"
        state: present
        tags:
          Name: "{{ volume_name | replace('\n', '') }}"
          env: prod
    
    - name: Export outputs
      torque.collections.export_torque_outputs:
        outputs:
          volume_name: "{{ volume_name | replace('\n', '') }}"
          volume_id: "{{ attached_volume.volume_id }}"
          volume_operation_data: "{{ attached_volume }}"
```

### Example 3: Detach an EBS volume from an EC2 instance

Workflow that detach an EBS volume from an EC2 instance using Ansible grain

Running the "Detach an EBS volume from an EC2 instance" workflow helps you optimize costs, manage resources efficiently, enhance data security, and perform maintenance and troubleshooting tasks effectively. It provides several benefits:

1. **Cost Optimization**: By detaching unused or unnecessary EBS volumes from EC2 instances, you can reduce storage costs. Detaching volumes that are no longer needed helps to eliminate unnecessary charges and optimize your cloud infrastructure expenses.
2. **Resource Management**: Detaching EBS volumes allows you to efficiently manage your storage resources. By detaching volumes that are not actively being used, you can free up storage capacity and allocate it to other instances or applications that require it. This helps to ensure that your resources are utilized effectively and avoids unnecessary resource wastage.
3. **Data Security**: Detaching EBS volumes from EC2 instances can enhance data security. By detaching volumes before terminating or decommissioning instances, you can ensure that sensitive data stored on those volumes is not accessible to unauthorized users. This helps to protect your data and maintain compliance with security and privacy regulations.
4. **Maintenance and Troubleshooting**: Detaching EBS volumes can be useful for maintenance and troubleshooting purposes. By detaching volumes, you can perform maintenance tasks such as resizing, snapshotting, or modifying volume attributes without impacting the running instances. It also allows you to troubleshoot issues related to specific volumes without affecting the overall availability of your EC2 instances.

```yaml
spec_version: 2
description: Detach an EBS volume from an EC2 instance

workflow:
  scope: env_resource
  label-selector: aws_instance

inputs:
  volume_id:
    type: string

grains:
  helper:
    kind: shell
    spec:
      agent:
        name: cloud-agent
      files:
        - source: blueprints
          path: blueprints/workflows/scripts/attach-detach-helper.sh
      activities:
        deploy:
          commands:
            - name: get-outputs
              command:  'source attach-detach-helper.sh {{ .bindings.resource_id }} {{ .bindings.grain_path }}'
              outputs:
                - id
                - region
                - availability_zone

  detach_volume:
    depends-on: helper
    kind: ansible
    spec:
      source:
        store: ansible
        path: detach_volume/detach_volume.yml
      agent:
        name: cloud-agent
      inputs:
      - aws_region: '{{ .grains.helper.activities.deploy.commands.get-outputs.outputs.region }}'
      - volume_id: '{{ .inputs.volume_id }}'
      env-vars: []
      inventory-file:
        localhost:
          hosts:
            127.0.0.1:
              ansible_connection: local

```

**Ansible playbook:**
```yaml
---
- hosts: localhost
  connection: local
  gather_facts: false

  tasks:
    - name: Install boto3 python package
      pip:
        name: boto3
    # Detach a volume
    - name: Detach a volume
      amazon.aws.ec2_vol:
        region: "{{ aws_region | replace('\n', '') }}"
        id: "{{ volume_id | replace('\n', '') }}"
        instance: None
```