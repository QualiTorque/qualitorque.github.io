---
sidebar_position: 1
title: Examples & Use-cases
---

This example demonstrates a simple workflow that includes shell grains with dependencies.

## Complete examples

### 1. Extract VM power state

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

### 2. Attach an EBS volume to an EC2 instance

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

### 3. Detach an EBS volume from an EC2 instance

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

---

## Data related workflows

### 1. Reset Database Data

**Motivation:** Quickly restore databases to a known state for testing or development.

**Benefits:**
- Ensures consistent starting points for tests
- Simplifies development environment management
- Reduces manual effort in data cleanup

### 2. Drop Tables

**Motivation:** Efficiently remove unnecessary or outdated tables from databases.

**Benefits:**
- Improves database performance
- Reduces storage costs
- Simplifies schema management

### 3. Create Table

**Motivation:** Automate the creation of new database tables for schema updates or initial setup.

**Benefits:**
- Ensures consistency in table creation across environments
- Reduces human error in table schema definition
- Speeds up database schema evolution

### 4. Create Index

**Motivation:** Optimize database performance by automating index creation.

**Benefits:**
- Improves query performance
- Reduces manual DBA workload
- Ensures consistency in index creation across environments

---

## AI related workflows

### 1. Adversarial Robustness Testing

**Motivation:** Evaluate and improve the resilience of AI models against adversarial attacks.

**Benefits:**
- Enhances model security and reliability
- Identifies potential vulnerabilities in AI systems
- Improves overall model performance in real-world scenarios

### 2. Data Quality Assurance

**Motivation:** Ensure the integrity and quality of data used for AI model training and inference.

**Benefits:**
- Improves model accuracy and reliability
- Reduces errors caused by poor quality data
- Enhances trust in AI-driven decisions

### 3. Model Drift Monitoring

**Motivation:** Detect and respond to changes in model performance over time due to evolving data patterns.

**Benefits:**
- Maintains model accuracy in production environments
- Enables proactive model updates and retraining
- Ensures consistent AI performance over time

### 4. Model Explainability and Interpretability

**Motivation:** Provide insights into AI model decision-making processes for transparency and compliance.

**Benefits:**
- Increases trust in AI systems
- Aids in regulatory compliance (e.g., GDPR)
- Facilitates debugging and improvement of AI models

### 5. Monitor Inference Accuracy

**Motivation:** Continuously assess the accuracy of AI model predictions in production environments.

**Benefits:**
- Enables early detection of performance degradation
- Facilitates timely model updates or retraining
- Ensures consistent quality of AI-driven services

### 6. Resource Utilization Monitoring

**Motivation:** Optimize computational resources used by AI applications for cost-efficiency and performance.

**Benefits:**
- Reduces operational costs of AI systems
- Improves overall system performance
- Enables efficient scaling of AI applications

---

## Day2 workflows

### 1. Reboot Instance

**Motivation:** Safely restart cloud instances for maintenance or troubleshooting.

**Benefits:**
- Simplifies instance management
- Enables automated recovery procedures
- Ensures consistent reboot processes across environments

### 2. Generate Temporary Token

**Motivation:** Create secure, time-limited access tokens for various services.

**Benefits:**
- Enhances security by limiting the lifespan of access tokens
- Simplifies temporary access management
- Reduces risk of unauthorized access

### 3. Service Health Check

**Motivation:** Proactively monitor and maintain service health.

**Benefits:**
- Early detection of service issues
- Reduces downtime through prompt alerts
- Enables automated remediation actions

### 4. Secret Rotation

**Motivation:** Enhance security by regularly updating secrets and credentials.

**Benefits:**
- Reduces risk of compromised credentials
- Ensures compliance with security best practices
- Automates a typically manual and error-prone process

### 5. Add Tags to Cloud Resource

**Motivation:** Improve organization and management of cloud resources.

**Benefits:**
- Enhances resource tracking and cost allocation
- Simplifies resource management at scale
- Ensures consistent tagging across the organization

---

## Kubernetes related workflows

### 1. Retrieve Pod Logs

**Motivation:** Simplify debugging and monitoring of Kubernetes applications.

**Benefits:**
- Speeds up troubleshooting processes
- Enables proactive monitoring
- Simplifies log collection for analysis

### 2. Get ConfigMap Values

**Motivation:** Easily access and verify configuration data in Kubernetes.

**Benefits:**
- Simplifies configuration audits
- Aids in troubleshooting configuration-related issues
- Enables quick verification of deployed configurations

### 3. Get Secrets

**Motivation:** Securely retrieve and use Kubernetes secrets when needed.

**Benefits:**
- Enhances security by limiting direct access to secrets
- Simplifies secret management in automated processes
- Enables auditing of secret access

### 4. Create Secret

**Motivation:** Automate the process of creating and managing Kubernetes secrets.

**Benefits:**
- Reduces manual errors in secret creation
- Enhances security by automating secret management
- Simplifies secret creation in CI/CD pipelines

### 5. Delete Pod

**Motivation:** Efficiently manage Kubernetes resources and troubleshoot issues.

**Benefits:**
- Facilitates pod lifecycle management
- Aids in resolving pod-related issues
- Enables automated pod management in various scenarios

### 6. Create Temporary .kubeconfig

**Motivation:** Provide secure, time-limited access to Kubernetes clusters.

**Benefits:**
- Enhances cluster security
- Simplifies access management for temporary users or processes
- Reduces risk of long-lived credentials

### 7 Resize Autoscaling Group

**Motivation:** Dynamically adjust cloud resources to meet changing demands.

**Benefits:**
- Optimizes resource utilization and costs
- Improves application performance during peak times
- Automates capacity management




### 8. Argo CD Sync Application

**Motivation:** Maintain consistency between Git repositories and deployed applications.

**Benefits:**
- Ensures GitOps best practices
- Reduces manual intervention in deployment processes
- Simplifies application updates and rollbacks

---

## Torque Built-in Workflows

:::info
Usage example can be found [here](workflows-overview#torque-built-in-workflows)
:::

### 1. AWS EC2 Power Management

**Workflows:**
- AWS EC2 Power On
- AWS EC2 Power Off
- AWS EC2 Restart

**Motivation:** Efficiently manage EC2 instance power states in Terraform-provisioned AWS environments.

**Benefits:**
- Optimizes resource utilization and costs
- Enables scheduled maintenance windows
- Facilitates quick recovery from issues through restarts

### 2. Azure VM Power Management

**Workflows:**
- Azure VM Power On
- Azure VM Power Off
- Azure VM Restart

**Motivation:** Control power states of Terraform-provisioned Azure virtual machines.

**Benefits:**
- Reduces operational costs during off-hours
- Simplifies maintenance procedures
- Improves resource management in Azure environments

### 3. NetApp Volumes Azure Management

**Workflows:**
- NetApp CVO Azure VM Power On
- NetApp CVO Azure VM Deallocate
- NetApp CVO Azure VM Restart

**Motivation:** Manage NetApp Cloud Volumes ONTAP VMs in Azure provisioned via Terraform.

**Benefits:**
- Optimizes storage costs and performance
- Enables efficient maintenance of NetApp CVO systems
- Improves control over specialized storage solutions

### 4. AWS RDS Management

**Workflows:**
- AWS RDS Temporary Stop
- AWS RDS Delete
- AWS RDS Start

**Motivation:** Control and maintain RDS instances in AWS provisioned through Terraform.

**Benefits:**
- Reduces database costs during non-operational hours
- Facilitates database lifecycle management
- Enables quick resumption of database services

### 5. Azure Database Management

**Workflows:**
- Azure MariaDB Delete
- Azure MySQL Delete
- Azure PostgreSQL Delete
- Azure Flexible MySQL Delete
- Azure Flexible PostgreSQL Delete
- Azure MSSQL Delete

**Motivation:** Manage lifecycle of various database services in Azure provisioned via Terraform.

**Benefits:**
- Streamlines database resource cleanup
- Ensures compliance with data retention policies
- Simplifies database environment management

### 6. Azure Database Power Management

**Workflows:**
- Azure MySQL Server Start/Stop
- Azure MariaDB Server Start/Stop
- Azure Flexible PostgreSQL Server Start/Stop
- Azure Flexible MySQL Server Start/Stop

**Motivation:** Control operational state of various Azure database services provisioned through Terraform.

**Benefits:**
- Optimizes database operational costs
- Enables scheduled maintenance windows
- Improves overall database resource management

### 7. Azure Database Restart Operations

**Workflows:**
- Azure MariaDB Server Restart
- Azure MySQL Server Restart
- Azure Flexible MySQL Server Restart
- Azure Flexible PostgreSQL Server Restart
- Azure PostgreSQL Server Restart

**Motivation:** Perform controlled restarts of Azure database services provisioned via Terraform.

**Benefits:**
- Facilitates quick recovery from database issues
- Enables application of updates requiring restarts
- Improves database service reliability

### 8. AWS EC2 and RDS Management

**Workflows:**
- AWS EC2 Power On
- AWS EC2 Power Off
- AWS EC2 Restart
- AWS RDS Temporary Stop
- AWS RDS Start

**Motivation:** Manage EC2 and RDS resources in AWS provisioned through CloudFormation.

**Benefits:**
- Provides consistent management across different provisioning methods
- Enables power and cost optimization for CloudFormation-deployed resources
- Simplifies operational management of AWS resources

### 9. Kubernetes Cluster Management

**Workflows:**
- Azure AKS Pause/Resume
- AWS EKS Pause/Resume

**Motivation:** Control operational state of Kubernetes clusters in Azure (AKS) and AWS (EKS) provisioned via Terraform.

**Benefits:**
- Optimizes costs by pausing clusters during non-operational hours
- Facilitates maintenance and upgrades of Kubernetes environments
- Improves overall management of containerized applications