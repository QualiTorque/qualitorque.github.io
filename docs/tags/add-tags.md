---
sidebar_position: 3
title: Add Tags
---

Tags are extremely useful for tracking cloud spend and activity. They are attached to the Torque environment's cloud resources during the deployment of the sandbox. There are two types of tags you can create the **activity_type** tag and custom tags.

## The activity_type tag

**activity_type** is defined by the account admin and is attached to all Torque environments. It allows the sandbox end-user to indicate the purpose of the sandbox. For example: "development", "manual-testing", "staging", etc. This tag comes out of the box with Torque and cannot be deleted.

**To customize the activity_type tag:**

1. Switch to **Admin Console** and click **Tags**.
2. Edit the **activity_type** tag.

  > ![Locale Dropdown](/img/edit-activity-type.png)

3. You can change the default value, possible values and description.

4. Click **Apply**.

## Custom tags

Custom tags are tags that come in 4 scopes: account, space, blueprint, and sandbox. Each scope defines the Torque user who can set the tag's value. For example, space-level tags can be set by space admins while blueprint-level tags can be set by blueprint designers. All higher roles can also set these tags. For example, a blueprint-level tag can be set by the blueprint designer, space admin and account admin.

**To create a custom tag:**

1. Switch to **Admin Console** and click **Tags**.
2. click **+ New Tag**.
3. Provide a name for the tag and define the scope.
    * Account
    * Space
    * Blueprint
    * Sandbox

4. Specify the tag's **Default Value**.
5. For non-Account scopes, you can specify the **Possible Values**, which appears as a drop-down list to the user.
6. Click **Apply**.