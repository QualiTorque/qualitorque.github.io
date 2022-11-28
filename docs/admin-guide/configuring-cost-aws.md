---
sidebar_position: 4
title: Configuring Cost for AWS
---

## Prerequisites

1. Ensure your IAM user that has full access to billing data (including adding cost allocation tags). For details, see this official AWS help page: [IAM tutorial: Delegate access to the billing console](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_billing.html?icmpid=docs_iam_console#tutorial-billing-step1).
2. Configure cost allocation tags in your AWS account. See the next section [AWS Cost setup](#aws-cost-setup).
3. Create a role to be used by Torque to gather the cost information and obtain the following information :
     * __External Id__
     * __Role ARN__
   
   See [Get Role ARN and external ID](#get-role-arn-and-external-id).

#### __AWS Cost setup:__

To configure Torque’s Cost Allocation Tags:
   1. Launch a sandbox via Torque OR add tags called __torque-account-id__ and __torque-environment-id__ to any resource in your AWS account.
   2. Login to your AWS management console and in the top toolbar, select __Services__.
   3. Search for __Billing__ and select it from the result list.
   4. Select __Cost Allocation Tags__.
   5. Search for the following tags: __torque-account-id__, __torque-environment-id__.
   6. Select the box to the left of each tag and select __Activate__.


#### __Get Role ARN and external ID:__

1. In your AWS Management Console, open the IAM console at https://console.aws.amazon.com/iam/.
2. In the navigation pane of the IAM console, select __Policies__, and then click __Create Policy__.
   1. Select the Cost Explorer Service
   2. Select the GetCostAndUsage Action
   3. Choose a name for your policy and save it.

3. In the navigation pane of the IAM console, select __Roles__, and then click __Create Role__.
   1. From __Select trusted entity__, choose __AWS Account__.
   2. Under An AWS account ID, select __An AWS account__ and enter 833621130516.
   3. Select __Require external ID__.
   4. Enter an __External ID__ of your choosing. The External Id will be used to validate the Consumer of the ARN Role. __Keep note of the external ID as you will need it later in the configuration step__. 
   5. In __Next:Permissions__, select the policy you have just created in step 1 for cost exploration permission.
   6. Click __Next__.
   7. Enter a __Role Rame__ or role name suffix to help you identify the purpose of this role or use AWS defined Name.
   8.  Click __Create Role__.
   9.  (Optional) Enter a __Description__ for the new role.
   10. Review the role and then click __Create role__. Keep note of the role ARN as you will need it later in the configuration step.


## Configuration

1. __Create an AWS cost collection target:__
   1. Go to __Administration > Cloud Accounts > Cost Collection Target__.
   2. Click __Add Cost Collection Target__.
   3. Select __AWS__.
   4. Specify the cloud account's details (see [Prerequisites](#prerequisites)):
      * __External Id__ 
      * __Role ARN__
   5. Click __Finish__.
   6. Click the cost collection target's 3 dot menu and select __Validate__ to make sure it works (i.e. cost data can be collected).
      * If validation fails, it means there is a problem with the Role or external ID. Review them and correct as necessary. 

2. __Enable the cost collection target for your AWS account:__
   1. Go to __Administration > Cloud Accounts > Cost Collection Target__.
   2. Click the desired cost collection target's __Enabled__ toggle.

     > ![Locale Dropdown](/img/enable-cost-target.png)


## Troubleshooting

What can be done if you don't see cost in Torque's cost dashboard?

1. Cost collection happens only once a day and takes time. Make sure at least *48 hours passed* since you configured cost and you have environments running during that timeframe.
2. Choose one of the environemnts that should have cost associated with them in your AWS cloud, and do the following:
   1. Obtain the environment id - it appears in the URL of the environment page:
   > ![Locale Dropdown](/img/environment-id.png)
   2. In your AWS console, navigate to the billing service (e.g. https://us-east-1.console.aws.amazon.com/billing/home?region=us-east-1#/) and on the left panel select __Cost Expolorer > Daily Spend View__.
   3. On the __Filters__ panel on the right, select __Tag__ and search for __torque-environment-id__.
   4. Click on the __>__ sign and select the environment id that you found via the Torque URL.
   5. If the environment id doesn't have cost associated with it, it means that the cost allocation tags are not configured correctly. Review [AWS Cost setup](#aws-cost-setup) again.
   6. If you see costs associated with this tag, test your credentials: navigate to __Administration > Cloud Accounts > Cost Collection Target > Choose your cloud > In the three dot menu click on validate__.


