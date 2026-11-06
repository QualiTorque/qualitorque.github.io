---
sidebar_position: 4
title: Spaces
description: Switch between spaces, work in the All Spaces view, and create, edit, and remove spaces from Admin > Spaces.
---

# Working with Spaces

**Spaces** are logically separate areas of a Torque account. Each space is associated with its own agents, asset and blueprint repositories, and permitted users, and has its own catalog and environments. Use spaces to separate teams, projects, or development lifecycle stages. For what each role can do in a space, see [Roles and Permissions](/governance/roles-and-permissions).

## Switching spaces

The space selector sits in the top bar, next to the Torque logo. It shows the current space, or **All Spaces** when you work on account-level pages. Click it to open the **Select Space** list:

- Type in **Search a space** to filter the list.
- Select a space to switch to it. The top bar takes on the color of the selected space.
- Select **All Spaces** to work on account-level pages. See [All Spaces](#all-spaces).
- Click **Create a new Space** to add a space. The option is shown only to users who can manage spaces. See [Creating a space](#creating-a-space).

The current space is listed first and the other spaces alphabetically, unless you change the order in [Admin > Spaces](#admin--spaces).

<!-- SCREENSHOT: portal.qtorque.io/<space> with the space selector open — the Select Space list with the search box, Create a new Space, All Spaces, and the space list -->

<!-- REVIEW (2026-11-06): the space selector did not open under browser automation (the trigger reports aria-expanded=true but no list is rendered), so the Select Space header, the Search a space box, the All Spaces item, and the list order are taken from the frontend bundle. Recheck by hand. -->

:::note
Some pages work only inside a space. In the **All Spaces** view, **Automation Inventory** and **Notifications** are disabled in the sidebar, and each shows a tooltip that asks you to select a space.
:::

## All Spaces

**All Spaces** is the account-level view. It is shown in the space selector to users with access to the account administration pages. In this view:

- **Self-Service** shows the items that are published in all spaces. See [Self-Service Catalog](/getting-started/self-service-catalog).
- **Governance** shows the account-level pages: **Policies**, **Policy Repositories**, **Approval Channels**, **Approval Requests**, and **Tags**.
- The **Admin** pages open in this view. Opening an Admin page from inside a space switches the selector to **All Spaces**.

The URLs of account-level pages start with `/admin/`, and the URLs of space pages start with the space name.

## Creating a space

1. In **Admin > Spaces**, click **Create Space**, or open the space selector and click **Create a new Space**.
2. In the **Create your Space** dialog, enter the **Space Name**, and choose a **Space Color** and a **Space Icon**. Click **Create**.

Torque switches to the new space and opens the **Connect a repository** dialog. For the rest of the onboarding flow, see [Provision Terraform](/getting-started/getting-started-with-terraform#step-1-create-a-space).

## Admin > Spaces

**Admin > Spaces** lists the spaces in the account.

| Column or control | Description |
|---|---|
| **Search by space name** | Filters the list. |
| **Create Space** | Opens the **Create your Space** dialog. See [Creating a space](#creating-a-space). |
| **Space Name** | The space icon, color, and name. |
| **Users** | The number of users in the space. |
| **Groups** | The number of groups assigned to the space. |
| **Go to Space** | Switches to the space and opens its **Automation Inventory**. |
| **⋮** | **Edit Space** and **Remove**. |
| Drag handle | Drag a row to change the order of the spaces in the space selector. The order is saved in your browser. |

<!-- SCREENSHOT: portal.qtorque.io/admin/spaces — the Spaces table with the Create Space button and one row menu open -->

### Editing a space

Select **Edit Space** in the row menu. The **Edit '&lt;space&gt;' Space** panel lets you change the **Space Name**, **Space Icon**, and **Space Color**. Click **Apply Changes** to save, or **Dismiss** to close the panel without saving. The panel also has a **Remove Space** button.

### Removing a space

Select **Remove** in the row menu, or click **Remove Space** in the edit panel. In the **Remove '&lt;space&gt;' Space** dialog, type the space name to confirm.

- A space with active environments cannot be removed. The dialog offers **Go to Active Environments**, which opens the space's environments filtered to the active ones so that you can end them first.
- Removing a space disconnects all the agents associated with it.

:::caution
Removing a space cannot be undone.
:::
