---
sidebar_position: 3
title: Actions and workflows
---

## Resource  and Workflows

### Overview

#### **Actions** 

Stopping cloud resources when they are not in use is a prudent practice that offers several benefits. First and foremost, it helps to optimize costs by preventing unnecessary expenditure on computing resources. Cloud services are typically billed on a pay-as-you-go model, so keeping instances running when they are idle contributes to higher expenses. Additionally, stopping unused resources promotes environmental sustainability by reducing overall energy consumption and the carbon footprint associated with data centers. From a security standpoint, inactive resources can be potential targets for unauthorized access or attacks, and shutting them down mitigates these risks. Moreover, resource termination enhances overall system performance by freeing up valuable computing resources for other critical tasks. In essence, the proactive management of cloud resources aligns with efficiency, cost-effectiveness, and environmental responsibility in the dynamic landscape of cloud computing.

Torque provides a built-in set of __actions__ you can run on specific cloud resources in the environment to stop them and gain the aforementioned benefits. The built-in actions currently available out of the box by Torque are:

**Virtual Machines**
- Power on
- Power off
- Restart
- Connect - a special kind of action which creates an RDP or SSH connection to the VM directly from Torque, allowing environment users to access env vms directly.

**Database Servers**
- Stop
- Start

**Kubernetes Clusters**
- Pause
- Resume

Please see the below table for additional details.

| Resource   Type | Action Name | Cloud | Grain technology | Resource type | Description | Limitations |
|---|---|---|---|---|---|---|
| Virtual Machines | Power On VM | AWS | Terraform | aws_instance | Start an EC2 instance |   |
|  |  |  | CloudFormation | AWS::EC2::Instance |  |  |
|  |  | Azure | Terraform | azurerm_virtual_machine | Start an Azure VM |  |
|  | Power Off VM | AWS | Terraform | aws_instance | Stop an EC2 instance  |  |
|  |  |  | CloudFormation | AWS::EC2::Instance |  |  |
|  |  | Azure | CloudFormation | azurerm_virtual_machine | Stop and Deallocate an Azure VM |  |
|  | Restart VM | AWS | Terraform | aws_instance | Restart an EC2 instance |  |
|  |  |  | Cloudformation | AWS::EC2::Instance |  |  |
|  |  | Azure | Terraform | azurerm_virtual_machine | Restart an Azure VM |  |
|  | Connect to a VM | AWS | Terraform | aws_instance | a special kind of action which creates an RDP or SSH connection to the VM directly from Torque, allowing environment users to access env vms directly. |  |
|  |  | AWS | Cloudformation | AWS::EC2::Instance |  |  |
|  |  | Azure | Terraform | azurerm_virtual_machine |  |  |
| Databases | Stop   RDS instance | AWS | Terraform | aws_db_instance | Temporarily stop an RDS instance | The RDS will be restarted after   7 days if the action will not be repeated. |
|  |  |  | CloudFormation | Coming Soon |   |   |
|  | Start RDS instance | AWS | Terraform | aws_db_instance | Start a stopped RDS instance |  |
|  |  |  | CloudFormation | Coming Soon |   |  |
|  | Delete RDS instance | AWS | Terraform | aws_db_instance | Delete an RDS instance |  |
|  | Stop Database Server | Azure | Terraform | MySql -   azurerm_mysql_server MySql Flexible - azurerm_mysql_flexible_server MariaDB - azurerm_mariadb_server Postgres flexible - azurerm_postgresql_flexible_server | Temporarily stop a DB server | The DB server will be restarted   after a period of time (dependent on the engine type) if the action will not   be repeated. |
|  | Start Database Server | Azure | Terraform | MySql -   azurerm_mysql_server MySql Flexible - azurerm_mysql_flexible_server MariaDB - azurerm_mariadb_server Postgres flexible - azurerm_postgresql_flexible_server | Start a stopped DB server |   |
|  | Delete database | Azure | Terraform | azurerm_mysql_database azurerm_mariadb_database azurerm_postgresql_database azurerm_mssql_database azurerm_mysql_flexible_database azurerm_postgresql_flexible_server_database | Delete a database |   |
| Kubernetes Clusters | Pause | Azure (AKS) | Terraform | azurerm_kubernetes_cluster | Reduce the number of agents   (VMs) in all node pools in the cluster to 1 |   |
|  |  | AWS   (EKS) | Terraform | Coming Soon |   |   |
|  | Resume | Azure (AKS) | Terraform | azurerm_kubernetes_cluster | Increase the number of agents   (VMs) in all node pools in the cluster to the original number |   |
|  |  | AWS   (EKS) | Terraform | Coming Soon |   |   |    |

**Debugging Actions** 
                                               	
If you need verbose output from the actions in order to debug them, you can add a parameter like so:
SYSTEM_ACTIONS_VERBOSE_MODE=true (or false) in the account level.

#### **Workflows**

__Workflows__ take actions another step forward. They are scheduled automations that run on all resources from the same type in the environment. 
Examples of workflows include:

- Power-off all VMs in the environment every day at 6PM
- Pause (scale to minimum) the dev K8s cluster every weekend

To learn how to create workflows in your Torque account, click [here](governance/workflows.md).

#### **Invoke actions and workflows in the environment**

1. Switch to __Resources__ view.
   > ![Locale Dropdown](/img/resources-view.png)

2. Click a resource tile.

   The resource's __actions__ as well as attributes and tags are displayed in the left pane.
3. Hover over the relevant action and click __Run__.
   > ![Locale Dropdown](/img/resource-actions.png)
4. Click the action's name to see its progress.
5. Click __Workflows__ to see which workflows apply to your environment. Note that you can also manually run the workflows ahead of their scheduled run time. 