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

__AWS__ 
* Ensure you have an IAM user that has access to billing data. For details, see this official AWS help page: [IAM tutorial: Delegate access to the billing console](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_billing.html?icmpid=docs_iam_console#tutorial-billing-step1).
* Perform the following steps : [AWS Cost setup](#aws-cost-setup)
* Get the following information:
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

##### __AWS Cost setup__

1. Enable billing retrieval via the IAM user:
   1. In AWS, login as your root user.
   2. In the top toolbar, click your __username__ and then select __My Account__.
   3. Select the __IAM User & Role Access to Billing Information__ checkbox.

2. Verify your IAM user has access to Billing:
   1. In AWS, login as your root user.
   2. In the top toolbar, select __Services__. 
   3. Search for __Billing__ and select it from the result list.
     The __Billing and Cost Management Dashboard__ displays.

   If you do not have access to the dashboard, follow these steps:

   4. In AWS, login as your root user.
   5. From the top toolbar, select __Services__.
   6. Select __IAM__.
   7. From the left toolbar, select __Users__ and select the __IAM user__ requiring the service permission.
   8. Select __Add Permissions__.
   9. Select __Attach existing policies directly__.
   10. Search for __PowerUserAccess__ and __Add__ the policy to the IAM user.

3. To configure Torque’s Cost Allocation Tags:
   1. In AWS, login as the __IAM user__ role name.
   2. In the top toolbar, select __Services__.
   3. Search for __Billing__ and select it from the result list. This was enabled during the previous steps.
   4. Select __Cost Allocation Tags__.
   5. Search for the following tags: __torque-blueprint-name__, __torque-cloud-account-id__, __torque-environment-id__.
   6. Select the box to the left of each tag and select __Activate__.

:::tip Note: In order to see the tags noted in the steps below, first launch a sandbox via Torque.
:::



__Azure__

1. Create an application and register it in Azure AD. 
2. Assign the "Cost Management Reader" (or, "Cost Management Contributor") Role to the application.

Get the following information for the application:
  * __Subscription Id__
  * __Tennant Id__
  * __Application Id__
  * __Application Secret__ 
   
__Kubernetes__

K8S cost data is collected by Torque using Kubecost. Please perform this procedure to enable K8s cost collection.

1. Deploy Kubecost in your cluster.
   * For deployment instructions, see: https://www.kubecost.com/install.html#show-instructions
   * Make sure the kubecost default namespace is used (Namespace kubecost)


__To validate the setup:__
1. Wait at least 24 hours after configuration and then log in to your Torque account.
2. Select __Cost__ to see your values. The data will show you the costs for the last 24 hours.
3. If there are any errors, begin troubleshooting this procedure.


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
   * __External Id__ 
   * __ARN key__
5. Click __Finish__.
6. Click the cost collection target's 3 dot menu and select __Validate__ to make sure it works (i.e. cost data can be collected).
   * If validation fails, see [KubeCost deployment](#kubecost-deployment).   

## Accuracy and incurred costs
* For CloudFormation grains, which are deployed directly on the cloud account, Torque syncs cost data once a day at 3:00 AM UTC time against the cloud provider.
* For all other grains, Torque collects the data from Kubecost on an hourly basis.

Torque calls your cloud provider's API to query the cost. This operation might incur additional charges from your cloud provider.


## Troubleshooting
   
1. Verify that Kubecost is deployed in the cluster. 
2. In Torque, try to re-enable the K8S cost collection target and validate that it works.
3. If the error still exists, run the ```Get agent deployment file``` API call with the following body: 
    ```jsx title=
    {
        "service_type": "k8s",
        "service_name": "[the name of the execution host using the k8s agent]",
        "details": {
            "include_agent_deployment": false,
            "enable_kubecost": true
        }
    }
    ```
4. Save the output to a deployment file.
5. Run the following command on the cluster:
    ```jsx title=
    kubectl apply -f “[generated deployment file]”
    ```
6. Try to re-validate the cost collection target.
7. If the error still exists, call Torque support.


