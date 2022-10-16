---
sidebar_position: 2
title: Roles and Permissions
---

Now that you understand how Torque works, it's time to understand how roles and permissions work, and invite other members of your team to your Torque account and spaces. 

In this article:

* [Roles in Torque](#roles-in-torque)
* [Invite Users to Torque](#invite-users-to-torque)
* [Add Existing Users to Your Space](#add-existing-users-to-your-space)

## Roles in Torque

As Account Admin, you can invite users to your Torque account and add them to spaces, while Space Admins can only add existing Torque users to the spaces they administer. 

There are two account-level roles: Account Admins and Account Members. Account Admins have full administrative permissions across the entire account and all spaces. Account Members also have a space role assigned to them for each space, which determines their permissions in that space. As such, the same user can have different roles in different spaces.

As such, there are 4 roles in Torque:
* **Account Admin** has full permissions in all Torque spacesspaces, and can access the Adminstration area, which is not accessible to space admins. The account admin is responsible for setting up Torque for the first time, general supervision and ongoing maintenance. This includes account-level responsibilities, like inviting users to the Torque account, creating spaces, and adding cloud account and Kubernetes compute services, general supervision and ongoing maintenance, and must be able to operate as a space administrator.
* **Space Admin** has admin access to specific space(s). This user performs space-level administration, like managing the space's users and their roles, linking the bluperint repository, managing the space policies and tags, and viewing cost data. 
* **Space Developer** tracks the space's usage and cost. As such, this user also manages the tags that are attached to each cloud resource luanched as part of the space's environmnents.
* **Space Member** is the end-user of the environment. This user browses the blueprint catalog and launches the environment they need. Typical examples of a space member include a developer who is tasked with creating the blueprint, and a QA specialist who needs to run validation tests before pushing the updates to production.

| Permission      | Account admin | Space admin | Space developer   | Space member |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Add / Remove Cloud Accounts	   | ![Locale Dropdown](/img/green-dot.png)      |||||
| Create Spaces	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Integrate IDP	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Create Roles	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Full access to all spaces	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Invite new account admins	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Manage account tags	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Launch sandboxes   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| Publish blueprints	   | ![Locale Dropdown](/img/green-dot.png)       |![Locale Dropdown](/img/green-dot.png)||||
| Manage production environments	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)||
| Setup blueprint repositories	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|||
| Manage space users & roles	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|||
| Get information on Cloud Account	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)||
| View cost data	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|
| Manage space tags	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)||||
| Manage space policies	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)||||
| Manage blueprint tags	   | ![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)||

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