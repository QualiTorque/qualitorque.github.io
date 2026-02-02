---
sidebar_position: 3
title: Actions and Workflows
---

# Actions and Workflows

## Quick Navigation & Useful Links

- [Workflows Overview](/workflows/workflows-overview) - Learn how to create scheduled automations
- [Workflows Use Cases](/workflows/workflows-use-cases) - Explore common workflow scenarios
- [Blueprint Designer Guide](/blueprint-designer-guide/blueprint-quickstart-guide) - Creating blueprints

---

## Overview

Managing cloud resources efficiently is critical for modern organizations. Leaving resources running when not in use can lead to significant waste and security risks. <ProductName />'s Actions and Workflows provide automated solutions to optimize your cloud infrastructure.

### Why Resource Management Matters

**💰 Cost Optimization**
- Prevent unnecessary expenditure with pay-as-you-go billing models
- Reduce cloud spend by up to 60% through automated resource scheduling
- Eliminate forgotten resources that continue accruing costs

**🌱 Environmental Sustainability**
- Reduce energy consumption and carbon footprint
- Support corporate sustainability goals
- Minimize unnecessary data center resource usage

**🔒 Security Enhancement**
- Reduce attack surface by stopping unused resources
- Mitigate risks from unauthorized access to idle systems
- Implement security-by-default practices

**⚡ Performance Improvement**
- Free up valuable computing resources for critical workloads
- Improve overall system performance and responsiveness
- Optimize resource allocation across your infrastructure

### <ProductName />'s Solution

<ProductName /> provides comprehensive resource management through two complementary approaches:

- **🎯 Actions** - Execute immediate operations on specific resources (power on/off, restart, connect)
- **⏰ Workflows** - Schedule automated operations across resource groups (daily shutdowns, weekend scaling)

This combination enables both reactive management and proactive automation, ensuring your infrastructure runs efficiently while reducing operational overhead.

## Actions

<ProductName /> provides a built-in set of **actions** you can run on specific cloud resources in the environment to optimize resource usage and achieve cost savings, security improvements, and performance benefits.

## Workflows

**Workflows** take actions to the next level by providing scheduled automations that run on all resources of the same type in an environment.

### Common Workflow Examples

- **Daily Shutdowns**: Power-off all VMs in the environment every day at 6PM
- **Weekend Scaling**: Pause (scale to minimum) development Kubernetes clusters every weekend
- **Cost Optimization**: Automatically stop database instances during non-business hours
- **Maintenance Windows**: Schedule restarts during low-usage periods

:::info
**Learn More About Workflows**
To learn how to create and manage workflows in your <ProductName /> account, visit our [Workflows Overview](/workflows/workflows-overview) guide.
:::

## How to Execute Actions and Workflows

### Running Actions on Individual Resources

1. **Switch to Resources View** in your environment

import pic2 from '/img/action-and-workflows-2.png';

<img src={pic2} style={{width: 700}} />

2. **Click a resource tile** to select the resource you want to manage

3. **Hover over the relevant action** and click **Run**

4. **Click the action's name** to monitor its progress and view execution details

import pic1 from '/img/action-and-workflows-1.png';

<img src={pic1} style={{width: 700}} />

### Alternative: Running Actions from Orchestration View

:::note
**Grain-Level Actions**
You can also execute actions from the orchestration (grain) view by:
1. Clicking on the grain's options menu (three dots)
2. Selecting the action you want to run

import pic3 from '/img/action-and-workflows-3.png';

<img src={pic3} style={{width: 700}} />

:::

## Built-in Actions

Learn how to create scheduled automations with [built-in actions](/workflows/workflows-overview#built-in-workflows).

### Supported Actions by Resource Type

<ProductName /> provides the following built-in actions that you can run on specific cloud resources:

**Virtual Machines:**
- **Power On** - Start instances
- **Power Off** - Stop instances  
- **Restart** - Reboot instances
- **Connect** - Create RDP/SSH connections directly from <ProductName /> UI

**Database Servers:**
- **Stop** - Temporarily stop database instances
- **Start** - Start stopped database instances
- **Delete** - Remove database instances

**Kubernetes Clusters:**
- **Pause** - Scale down to minimum resources
- **Resume** - Scale back to original capacity

### Debugging Actions

For verbose output to debug actions, add this parameter at the account level:
```
SYSTEM_ACTIONS_VERBOSE_MODE=true
```

### Detailed Action Support Matrix

For technical implementation details, refer to the comprehensive action support matrix below:

| Resource Type | Action Name | Cloud | Grain Technology | Resource Type | Description | Limitations |
|---|---|---|---|---|---|---|
| **Virtual Machines** | Power On VM | AWS | Terraform | `aws_instance` | Start an EC2 instance | - |
|  |  |  | CloudFormation | `AWS::EC2::Instance` |  |  |
|  |  | Azure | Terraform | `azurerm_virtual_machine` | Start an Azure VM | - |
|  | Power Off VM | AWS | Terraform | `aws_instance` | Stop an EC2 instance | - |
|  |  |  | CloudFormation | `AWS::EC2::Instance` |  |  |
|  |  | Azure | Terraform | `azurerm_virtual_machine` | Stop and Deallocate an Azure VM | - |
|  | Restart VM | AWS | Terraform | `aws_instance` | Restart an EC2 instance | - |
|  |  |  | CloudFormation | `AWS::EC2::Instance` |  |  |
|  |  | Azure | Terraform | `azurerm_virtual_machine` | Restart an Azure VM | - |
|  | Connect to VM | AWS | Terraform | `aws_instance` | Creates RDP/SSH connection directly from <ProductName /> UI | - |
|  |  | AWS | CloudFormation | `AWS::EC2::Instance` |  |  |
|  |  | Azure | Terraform | `azurerm_virtual_machine` |  |  |
| **Databases** | Stop RDS Instance | AWS | Terraform | `aws_db_instance` | Temporarily stop an RDS instance | RDS restarts after 7 days if not repeated |
|  |  |  | CloudFormation | Coming Soon | - | - |
|  | Start RDS Instance | AWS | Terraform | `aws_db_instance` | Start a stopped RDS instance | - |
|  |  |  | CloudFormation | Coming Soon | - | - |
|  | Delete RDS Instance | AWS | Terraform | `aws_db_instance` | Delete an RDS instance | - |
|  | Stop Database Server | Azure | Terraform | Multiple types:<br/>• `azurerm_mysql_server`<br/>• `azurerm_mysql_flexible_server`<br/>• `azurerm_mariadb_server`<br/>• `azurerm_postgresql_flexible_server` | Temporarily stop database server | DB restarts after engine-specific period if not repeated |
|  | Start Database Server | Azure | Terraform | Multiple types:<br/>• `azurerm_mysql_server`<br/>• `azurerm_mysql_flexible_server`<br/>• `azurerm_mariadb_server`<br/>• `azurerm_postgresql_flexible_server` | Start a stopped database server | - |
|  | Delete Database | Azure | Terraform | Multiple types:<br/>• `azurerm_mysql_database`<br/>• `azurerm_mariadb_database`<br/>• `azurerm_postgresql_database`<br/>• `azurerm_mssql_database`<br/>• `azurerm_mysql_flexible_database`<br/>• `azurerm_postgresql_flexible_server_database` | Delete a database | - |
| **Kubernetes Clusters** | Pause | Azure (AKS) | Terraform | `azurerm_kubernetes_cluster` | Reduce node pool agents to 1 VM | - |
|  |  | AWS (EKS) | Terraform | Coming Soon | - | - |
|  | Resume | Azure (AKS) | Terraform | `azurerm_kubernetes_cluster` | Restore original node pool size | - |
|  |  | AWS (EKS) | Terraform | Coming Soon | - | - |

## Related Documentation

- [Environment Publishing](/environment-services/environment-publishing) - Learn about publishing and managing environments
- [Remote Access](/environment-services/remote-access) - Set up direct access to environment resources
- [Cost Management](/environment-services/Cost) - Optimize your cloud spending
- [Drift Detection](/environment-services/drift-and-update) - Handle configuration drift
- [Scheduled Environments](/environment-services/scheduled-environments) - Automate environment lifecycle