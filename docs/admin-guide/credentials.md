---
sidebar_position: 6
title: Credentials
---

The Torque __Credentials__ store is a built-in mechanism for securely persisting authentication details, enabling automation assets to retrieve and use them at runtime. Credentials function similarly to [Parameters](/admin-guide/params) in terms of consumption, but they differ structurally: parameters are simple key-value pairs, whereas credentials are typed objects composed of multiple fields whose schema varies according to the credential type.

Credentials are used for:

* **Cloud providers** such as AWS and Azure - accessed by Terraform, CloudFormation, and other IaC grains through the grain's `authentication` section.
* **Git providers** (GitHub, GitLab, Bitbucket, Azure DevOps, CodeCommit, CloudShell) - used to connect repositories. The **Add Repository** wizard saves the credentials you provide there into the store automatically.
* **Hypervisors** (VMware vCenter), **network management** (Nexus Dashboard), and **licensing subscriptions** (NVAIE, RedHat) - used by the corresponding integrations.

## The Credentials page

Go to **Automation > Credentials**. The **Integrations** page opens on its **Credentials** tab (the other tabs are **Parameters** and **Input Sources**). The table lists each credential's **Name**, **Description**, **Provider**, **Spaces**, **Created By**, and **Last Modified**. Use the search box and the **Provider** filter to find credentials, and click a credential to view or edit its details.

## Add a credential

1. In **Automation > Credentials**, click **Add Credentials**. The **Add Credential** wizard opens.
2. In the **Credential Type** step, select the provider tile. Tiles are grouped into **Cloud Providers**, **Git Providers**, **Hypervisors**, **Network Management**, and **Licensing & Subscriptions**; use the **Credential Type** filter to show or hide groups. Click **Next**.
3. In the **Authentication** step, enter the **Provider details** for the selected type (see the table below) and click **Next**.
4. In the **Summary** step, enter a **Credentials Name**, optionally a **Description**, and select the **Spaces** that may use the credential (or keep **All spaces**).
5. Click **Apply**.

| Credential type | Provider details |
|:---|:---|
| AWS | Choose the access type: **Basic** (**Account Number**, **Access Key**, **Secret Key**) or **Role ARN** (**Role Arn** and **External ID**). For the role option, see [Get Role ARN and external ID](#get-role-arn-and-external-id) below. |
| Azure | **Tenant ID**, **Subscription ID**, **App ID**, **App Secret** of a service principal. |
| GitHub, Bitbucket, Azure DevOps | **Personal Access Token** with read access to the repositories. |
| GitLab | **Access Token Type** and **Personal Access Token**. |
| CodeCommit | **Role ARN**, **AWS Region**, **External ID**, and the **User Name** and **Password** of the IAM user's HTTPS Git credentials. |
| CloudShell | **Server Address**, **Token TTL** (optional), **User Name**, **Password**. |
| Nexus Dashboard | **URL** (with an optional **Validate Certificate** checkbox), **Username**, **API Key**. |
| VMware vCenter, NVAIE, RedHat | The connection details requested by the wizard for that integration. |

:::note
Field names in the table are taken from the **Add Credential** wizard. The exact set of fields may differ slightly between account types; follow the wizard.
:::

## Edit or remove a credential

Click a credential in the table to open the **Edit Credentials** drawer. You can change the **Description**, the **Spaces** the credential is shared with, and the **Provider details**, then click **Apply**. The **Credentials Name** cannot be changed.

:::tip __Important__
Modifying or deleting a credential may cause the repositories, blueprints, and integrations that use it to fail.
:::

## Use a credential in a blueprint

Once created, you can reference the credential in the grain's ```authentication``` section.
> ![Locale Dropdown](/img/credential-reference.png)

### __Get Role ARN and external ID__

1. In your AWS Management Console, open the IAM console at https://console.aws.amazon.com/iam/.
2. In the navigation pane of the IAM console, create a permissions policy to be associated with the role.
   1. Select __Policies__, and then click __Create Policy__. For information and assistance on generating an AWS IAM Policy, you can use the official [AWS Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html).
   2. Assign the permissions as appropriate.
   3. Choose a name for your policy and save it.

3. In the navigation pane of the IAM console, select __Roles__, and then click __Create Role__.
   1. From __Select trusted entity__, choose __AWS Account__.
   2. Under An AWS account ID, select __An AWS account__ and enter 349148204654. (This is the Torque AWS account that will assume the role).
   3. Select __Require external ID__.
   4. Enter an __External ID__ of your choosing. The External Id will be used to validate the Consumer of the ARN Role. __Keep note of the external ID as you will need it later in the configuration step__. 
   5. In __Next:Permissions__, select the policy you have just created in step 2.
   6. Click __Next__.
   7. Enter a __Role Name__ or role name suffix to help you identify the purpose of this role or use AWS defined Name.
   8.  Click __Create Role__.
   9.  (Optional) Enter a __Description__ for the new role.
   10. Review the role and then click __Create role__. Keep note of the role ARN as you will need it later in the configuration step.
