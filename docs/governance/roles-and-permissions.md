---
sidebar_position: 3
title: Users, Groups, Roles and Permissions
---

Now that you understand how Torque works, it's time to understand how groups, roles and permissions work, and invite other members of your team to your Torque account and spaces. 

In this article:

- [Groups in Torque](#groups-in-torque)
- [Roles in Torque](#roles-in-torque)
- [Invite Users to Torque](#invite-users-to-torque)
- [Add Existing Users to Your Space](#add-existing-users-to-your-space)
- [Adding Users Without Invitation](#adding-users-without-invitation)

## Groups in Torque

Groups are an efficient way to manage multiple users together.
A Torque group consists of:
- The group permissions
- The group users

A user can be a member of multiple groups. Torque will calculate the super-set of all the permissions that the user has in the platform (those that were given them explicitly and those which they inherited from the set of groups they belong to). 

A group can be assigned multiple roles in multiple spaces and a single account level role. 

Group management is performed from the "Account Settings" menu. 

If your Torque account is configured to use SSO for authentication, the assignment of SSO users to groups in Torque can be synchronized automatically from the IdP assignments (currently supported in Okta and Azure active directory).

For detailed instructions on how to map Torque user groups to your IdP groups, click [here](/admin-guide/sso#mapping-torque-user-groups-to-idp-groups).

## Roles in Torque

As Account Admin, you can invite users to your Torque account and add them to spaces, while Space Admins can only add existing Torque users to the spaces they administer. 

There are two account-level roles: Account Admins and Account Members. Account Admins have full administrative permissions across the entire account and all spaces. Account Members also have a space role assigned to them for each space, which determines their permissions in that space. As such, the same user can have different roles in different spaces.

As such, there are 4 roles in Torque:
* **Account Admin** has full permissions in all Torque spaces, and can access the Administration area, which is not accessible to space admins. The account admin is responsible for setting up Torque for the first time, general supervision and ongoing maintenance. This includes account-level responsibilities, like inviting users to the Torque account, creating spaces, and adding cloud account and Kubernetes compute services, general supervision and ongoing maintenance, and must be able to operate as a space administrator.
* **Space Admin** has admin access to specific space(s). This user performs space-level administration, like managing the space's users and their roles, linking the blueprint repository, managing the space policies and tags, and viewing cost data. 
* **Space Developer** tracks the space's usage and cost. As such, this user also manages the tags that are attached to each cloud resource launched as part of the space's environments.
* **Space Member** is the end-user of the environment. This user browses the blueprint catalog and launches the environment they need. Typical examples of a space member include a developer who is tasked with creating the blueprint, and a QA specialist who needs to run validation tests before pushing the updates to production.

| Permission      | Description |Account admin | Space admin | Space developer   | Space member |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Manage account	   |1. Config audit log target.<br />2. Delete the account.<br />3. View account usage and cost.| ![Locale Dropdown](/img/green-dot.png)      |||||
| [Manage agents](/torque-agent/Install-and-connect-self-hosted-agent)	   |Install new Torque agents (requires K8s cluster or Vcenter access), delete agents, edit agents properties.| ![Locale Dropdown](/img/green-dot.png)      |||||
| [Manage cloud accounts for cost collection](/governance/cost-tracking/cost)	   |Add/remove cloud accounts for Torque to collect environment cost from.| ![Locale Dropdown](/img/green-dot.png)      |||||
| [Manage spaces](/getting-started/Getting starting with terraform)	   |1. Create/delete/rename spaces.<br />2. Associate/remove agents to/from spaces.| ![Locale Dropdown](/img/green-dot.png)        |||||
| [Manage users](#invite-users-to-torque)	   |Invite users to Torque, cancel users invitations, add users to space, change users roles.| ![Locale Dropdown](/img/green-dot.png)        ||||
| [Manage account parameters](/admin-guide/params)	   |Create/update/delete names and values of parameters, which are available across the account.| ![Locale Dropdown](/img/green-dot.png)        |||||
| [Manage credentials](/admin-guide/credentials)	   |Create/update/delete credentials to cloud accounts, which can later be used for infra provisioning, cost or actions.| ![Locale Dropdown](/img/green-dot.png)        |||||
| [Manage account tags](/governance/tags)	   |Create custom tags definitions to be applied across the account.| ![Locale Dropdown](/img/green-dot.png)        |||||
| [Manage policies](/governance/policies)	   |Create/update/delete policies to control security and cost across the account.| ![Locale Dropdown](/img/green-dot.png)        |||||
| [Manage space notifications](/admin-guide/notifications)	   |Create/delete/modify target for Torque notifications for space events.| ![Locale Dropdown](/img/green-dot.png)       |![Locale Dropdown](/img/green-dot.png)||||
| [Manage space tags](/governance/tags)	   |Set space specific values to Tags defined by the account admin for the "space" scope.| ![Locale Dropdown](/img/green-dot.png)       |![Locale Dropdown](/img/green-dot.png)||||
| [Manage space parameters](/admin-guide/params)	   |Create/update/delete names and values of parameters which are available across the space.| ![Locale Dropdown](/img/green-dot.png)       |![Locale Dropdown](/img/green-dot.png)||||
| [Customize space color and icon](/getting-started/Getting%20starting%20with%20terraform)	   || ![Locale Dropdown](/img/green-dot.png)       |![Locale Dropdown](/img/green-dot.png)||||
| [Publish blueprints](/blueprint-designer-guide/blueprint-quickstart-guide)	   |Add/remove blueprints from the catalog.| ![Locale Dropdown](/img/green-dot.png)       |![Locale Dropdown](/img/green-dot.png)||||
| [Manage space repositories](/getting-started/Discover%20Your%20Assets)	  |1. Add/remove git repositories containing Torque blueprints or IaC assets to a space.<br />2. Run discovery on the repositories to find and add assets to Torque (as auto-generated blueprints). | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|||
| [Manage space users and roles](#add-existing-users-to-your-space)	   |Add Torque users to a space and set their role in the space.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|||
| [Manage space blueprints](/blueprint-designer-guide/blueprint-quickstart-guide)	   |1. Modify the contents of a blueprint that resides in Torque (not in source control) or delete it.<br />2. Edit blueprint metadata (labels, icons).| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)||
| [Manage blueprint tags](/governance/tags)	   |Set blueprint-specific values for tags defined by the account admin for the "blueprint" scope.| ![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)||
| Force terminate environment    |Terminate a blueprint that failed normal termination while ignoring previous errors.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)||
| View agents	   |View the list of Torque agents connected to an account.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| View space users	   |View the list of users in a space.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| View space repositories	   |View the list of repositories in a space.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| View space notifications	   |View the list of notification targets and configuration of a space.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| View account tags	   |View the list of tags in the account.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| View account parameters	   |View the list of parameters in the account.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| View space cost dashboard	   |View the cost dashboard of a space.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| Update Grains (Iac Assets)	   |Update the IaC code to a different version.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
| [View Catalog](/getting-started/Getting starting with terraform)   |View the list of published blueprints in the blueprint catalog. | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| [Launch environments](/getting-started/Getting starting with terraform)   |Provision an environment from a blueprint. | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| Extend environments   |Extend the duration of an environment. | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| Terminate environments   |End the environment before the scheduled end time. | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| [Manage environment drift](/getting-started/Getting starting with terraform)   |View the diff between the plan (blueprint) and the reality (resources in the cloud) and revert the cloud status to the plan. | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| [Run API calls](/rest-api)   |Use Torque's REST API to perform different operations (based on permissions). | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| View environment cost data	   |View expected cost of the environment at launch time and the actual cost of an environment on the environment page.| ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|

## Invite Users to Torque

Torque role: Account admin

1. Open the **Administration** page.
2. Select **Users**.
3. Click the **Invite User** button.
4. Enter a user's email address and press the **[ENTER]** key. Repeat to add additional users.
5. Select the space settings to apply to the users. For details about each role's permissions, see the **Roles** tab in the **Administration** page.
6. Click **Send Invitation**.
  The users will get a "Welcome to Torque" invitation email, prompting them to login to the space. Once they log in, they will be granted the space role and permissions you specified.

## Add Existing Users to Your Space

Torque role: Account admin, space admin

1. In the suitable Torque space, select **Settings** from the left menu.
2. Click the **Users** tab.
3. Click the **Add Users** button.
4. Select the Torque user you wish to add to this space. Repeat to add additional users.
5. Click **Done**.
   By default, new users are assigned the **Space Member** role. 
6. Change the roles as needed.

## Adding Users Without Invitation

In some situations, the account admin may want to add users to the Torque account without sending invitations to the users. 
This can be done via an API call only. Check the API documentation in *Governance -> Add Users to Account without invitation* for details.