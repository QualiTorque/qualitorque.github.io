---
sidebar_position: 5
title: Cost
---

Torque's __Cost__ dashboard provides you with actionable insights into the costs of your space's environments. Cost data is collected using a __toque_environment_id__ tag that is assigned (with a unique value) to every new environment's resources.

## Supported cloud providers
* AWS
* Azure
* Kubernetes (EKS/AKS)

## Prerequisites
* __External Id__: To grant Cost Collection permission to Torque, use the AssumeRole API. __External Id__ is one of the parameters of the AssumeRole API that can be used to delegate access from your account to Torque. The combination of this value and the ARN key ensure that only Torque can access the role. 
* __ARN key__: Make sure the ARN role includes a cost exploration permission.
   
__How to get External ID and ARN Role:__

1. Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.
2. In the navigation pane of the IAM console, select __Roles__, and then click __Create role__.
3. From __Select trusted entity__, choose __AWS service__.
4. Select __Require external ID__.
5. Enter an __External ID__ of your choosing. The External Id will be used to validate the Consumer of the ARN Role.
6. In __Next:Permissions__, select __aws-portal:ViewBilling__ for cost exploration permission.
7. Click __Next__.
8. Enter a __Role Rame__ or role name suffix to help you identify the purpose of this role or use AWS defined Name.
9. Click __Create Role__.
10. (Optional) Enter a __Description__ for the new role.
11. Review the role and then click __Create role__.

## Configuration
Torque collects cost data using cost collection targets, which are managed in the __Administration__ page's __Cost__ page.
* Torque automatically creates a cost collection target for every Kubernetes execution host. The admin needs to enable the cost collection target so Torque can begin collecting cost data. However, Torque collects cost data directly from the pods using a 3<sup>rd</sup>-party tool called Kubecost, which must be [installed on clusters](https://www.kubecost.com/install.html#show-instructions) you wish to monitor.
* For grains deploying directly on AWS (such as CloudFormation), you need to manually create a cost collection target. By nature, CloudFormation grains are deployed directly on the AWS cloud account and therefore don't require the use of a Kubernetes execution host.

__To enable a cost collection target:__
1. Go to __Administration > Cloud Accounts > Cost Collection Target__.
2. Click the desired cost collection target's __Enabled__ toggle.
  > ![Locale Dropdown](/img/enable-cost-target.png)

__To create a cost collection target:__
1. Go to __Administration > Cloud Accounts > Cost Collection Target__.
2. Click __Add Cost Collection Target__.
3. Select the cloud account.
4. Specify the cloud account's details (see [Prerequisites](#prerequisites)):
   * __External Id__: 
   * __ARN key__
5. Click __Finish__.
6. Click the cost collection target's 3 dot menu and select __Validate__ to make sure it works (i.e. cost data can be collected).
   * If validation fails, see [KubeCost deployment](/misc/kubecost-deployment).   

## Accuracy and incurred costs
* For CloudFormation grains, which are deployed directly on the cloud account, Torque syncs cost data once a day at 3:00 AM UTC time against the cloud provider.
* For all other grains, Torque collects the data from Kubecost on an hourly basis.

Torque calls your cloud provider's API to query the cost. This operation might incur additional charges from your cloud provider.

