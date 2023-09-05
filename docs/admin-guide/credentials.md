---
sidebar_position: 6
title: Credentials
---

The Torque __Credentials__ store is a built-in capability for Torque to securely store your Public Cloud authentication details in order for CloudFormation and Terraform type grains to securely access them. Credentials are similar in usage to [Parameters](/admin-guide/params), but unlike parameters which are single-value, credentials are specialized objects that contain multiple values with different structure depending on the credential type. Torque Credentials are supported for AWS (role based and access key based) and Azure (secret based) authentication.

__To add a credential:__

1. Go to __Administration > Credentials__.
2. Click __Add Credentials__.
  > ![Locale Dropdown](/img/credentials.png)
1. Give the credential a name and optionally a description.
2. Select the cloud provider (AWS / Azure).
3. Select the credential type and enter the authentication details. 
    * For AWS, role assumption and access key credentials are supported. Make sure you have a Role Arn that allows Torque access. For details, see the [Get Role ARN and external ID](#get-role-arn-and-external-id) section below. 
    > ![Locale Dropdown](/img/aws-provider-details.png)
    * For Azure, only Service Principle Client ID and Secret are supported.
    > ![Locale Dropdown](/img/azure-provider-details.png)
4. Click __Apply__.
5. Reference the credential in the grain's ```authentication``` section.
  > ![Locale Dropdown](/img/credential-reference.png)



### __Get Role ARN and external ID__

1. In your AWS Management Console, open the IAM console at https://console.aws.amazon.com/iam/.
2. In the navigation pane of the IAM console, create a permissions policy to be associated with the role.
   1. Select __Policies__, and then click __Create Policy__. For information and assistance on generating an AWS IAM Policy, you can use the official [AWS Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html).
   2. Assign the permissions as appropriate.
   3. Choose a name for your policy and save it.

3. In the navigation pane of the IAM console, select __Roles__, and then click __Create Role__.
   1. From __Select trusted entity__, choose __AWS Account__.
   2. Under An AWS account ID, select __An AWS account__ and enter 349148204654. (This is the Torque AWS account from which we will query the cost).
   3. Select __Require external ID__.
   4. Enter an __External ID__ of your choosing. The External Id will be used to validate the Consumer of the ARN Role. __Keep note of the external ID as you will need it later in the configuration step__. 
   5. In __Next:Permissions__, select the policy you have just created in step 1 for cost exploration permission.
   6. Click __Next__.
   7. Enter a __Role Rame__ or role name suffix to help you identify the purpose of this role or use AWS defined Name.
   8.  Click __Create Role__.
   9.  (Optional) Enter a __Description__ for the new role.
   10. Review the role and then click __Create role__. Keep note of the role ARN as you will need it later in the configuration step.
