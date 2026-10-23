---
sidebar_position: 3
title: Working with Spaces
description: Switching between spaces, the All Spaces view, and the Admin > Spaces page in next.qtorque.io.
---

# Working with Spaces

Spaces work the same way as in the classic portal: they isolate blueprints, environments, users, and settings for different teams or projects. What changed in the next UI is how you move between them and where you manage them. For the concepts, see [Roles and Permissions](/governance/roles-and-permissions).

## Switching spaces

The **space selector** sits in the top bar next to the Torque logo. Click it to open the space list.

- Type in **Search a space** to filter the list.
- Select a space to switch to it. The sidebar and the top bar color update to the selected space.
- Select **All Spaces** to work on account-wide pages. See [All Spaces](#all-spaces).
- Click **Create a new Space** to add a space. The option appears only if your role allows managing spaces.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the space selector open — the dropdown showing the search box, the All Spaces entry, the space list, and the Create a new Space link -->

:::note
Some pages exist only inside a space, for example Automation Inventory and Notifications. If you open one of them from the All Spaces view, the sidebar asks you to select a space first.
:::

## All Spaces

**All Spaces** is the account-wide view, available to account admins and to users whose role grants account-level permissions. In this view:

- **Self-Service** and **Environments** list items from every space.
- **Governance** shows the account-level pages: Policies, Policy Repositories, Approval Channels, Approval Requests, and Tags.
- **Admin** pages open here. Opening any Admin page from inside a space switches the selector to All Spaces automatically.

Page URLs in this view start with `/admin/`.

## Admin > Spaces

**Admin > Spaces** lists every space in the account.

| Column or action | Description |
|---|---|
| **Space Name** | The space's icon, color, and name. |
| **Users** | Number of users with access to the space. |
| **Groups** | Number of groups assigned to the space. |
| **Go to Space** | Switches to the space. |
| **Row menu (⋮)** | **Edit Space** opens the space's settings. **Remove** deletes the space. |
| **Search by space name** | Filters the list. |
| **Create Space** | Opens the form for a new space. |

<!-- SCREENSHOT: https://next.qtorque.io/admin/spaces — the Spaces table with the Create Space button and one row menu open -->

:::caution
Removing a space cannot be undone. Make sure the space no longer contains environments, blueprints, or settings that you need before you remove it.
:::

## Space-level settings

Inside a space, the settings that used to live under the classic portal's **Settings** and **Governance** groups are split between two sidebar groups:

- **Automation**: Automation Inventory, Credentials, and Repositories.
- **Governance**: Policies, Approval Requests, Notifications, Users, and Tags.

See [Navigating the Next UI](./navigation.md#where-classic-portal-pages-moved) for the full mapping.
