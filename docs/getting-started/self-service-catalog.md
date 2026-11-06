---
sidebar_position: 5
title: Self-Service Catalog
description: Find, filter, and launch the blueprints and workflows published in a space.
---

# Self-Service Catalog

The **Self-Service** page is the catalog of blueprints and workflows that have been published in the selected space. It is the first page you see when you open a space. To publish an item to the catalog, see [Publishing to the Self-Service Catalog](/blueprint-designer-guide/blueprint-publishing).

When **All Spaces** is selected in the space selector, the catalog shows the items that are published across all the spaces of the account.

<!-- SCREENSHOT: portal.qtorque.io/<space> — the Self-Service Catalog with the Filters panel on the left, quick filters next to the search box, the Group by and sort controls, and a mix of blueprint and workflow cards -->

## Page layout

| Area | Description |
|---|---|
| **Filters** panel | On the left. Starts with the **Quick Filters** section, which holds the **Favorites** toggle, followed by one section per label with its values and the number of matching items. Click the **Hide filters** icon in the panel header to hide the panel. |
| **Search** | Filters the cards by name. |
| Quick filters | Next to the search box. One button per quick-filter label, with the number of matching items. Click a quick filter to apply it. |
| **Group by** | Groups the cards by the key of a `key:value` label, for example `Technology`. Items without that label appear under **Other Blueprints**. Clear the selection to remove the grouping. |
| Sort | **Alphabetically**, **Last update time**, or **Favorites**. |
| Cards | One card per published blueprint, blueprint family, or workflow. |

## Filtering

Select one or more label values in the **Filters** panel to narrow the catalog. Each selected value appears as a chip under the search box; click the chip's **x** to remove it. Sections can be collapsed, and long sections offer **Show More** and **Show Less**.

### Quick filters

Quick filters are labels that are promoted so that users can apply them with one click. To choose them, click the pencil icon next to **Quick Filters** in the panel. This opens **Manage Space Labels**, where the **Quick Filters** column marks the labels to promote. You can choose up to five quick-filter labels. The pencil icon is shown inside a space to users who can manage the space labels. For label management in general, see [Publishing to the Self-Service Catalog](/blueprint-designer-guide/blueprint-publishing).

### Favorites

Hover over a card and click its star to mark the item as a favorite. Turn on the **Favorites** toggle in the panel to show only your favorites, or sort by **Favorites** to list them first.

### Validated and Experimental

If items in the catalog carry a `Validated` or `Experimental` label, matching **Validated** and **Experimental** toggles appear in the **Quick Filters** section, so that you can show only validated items or only experimental ones.

## Cards

Each card shows the item's icon, display name, labels, and description. Hover over a card to see its actions:

| Item | Actions |
|---|---|
| **Blueprint** | **Launch** opens the launch form. **Clone** creates a copy of the blueprint that is stored in Torque and opens it in the blueprint designer, so that you can adapt it without changing the original. If you have access to more than one space, the **Choose a space** dialog asks which space to clone it into. |
| **Workflow** | **Execute** runs the workflow. See [Workflows](/workflows/workflows-overview). |
| **Blueprint family** | **Launch** opens the **Choose a blueprint to launch** dialog, where you select one of the family's blueprints. Blueprints in the dialog can be tagged **Cheapest**, **Fastest**, or **Most popular**. See [Blueprint Families](/blueprint-designer-guide/blueprint-families). |

**Clone** is not available for workflows, blueprint families, and sample blueprints.

<!-- REVIEW (2026-11-06): the Clone behavior (copy stored in Torque, opened in the blueprint designer, "Choose a space" when the user has several spaces) and the "Choose a blueprint to launch" dialog with its Cheapest / Fastest / Most popular tags are taken from the frontend bundle; neither was clicked live (Clone and Launch create things). Confirm with Yaniv. -->

<!-- SCREENSHOT: portal.qtorque.io/<space> — a blueprint card on hover with the star, Clone, and Launch, next to a workflow card with Execute -->

### Details panel

Click a blueprint card to open its details panel:

- **Instructions**: the blueprint's instructions for operating the deployed environment.
- **Details**: the description and labels, a **Blueprint Link** to the blueprint page, a preview of the blueprint graph, the **Estimated Launching Time**, the blueprint's **Activity** (**Your Launches**, **Total Launches**, **Last Deployed**, **Current Launches**), and its **Policies** (**Default Duration**, **Max Duration**, **Permitted Extend**, **Active environment limit**).

For a blueprint family, the panel shows a **Multiple Blueprints** ribbon, and the **Details** tab lists the family's blueprints with their **Cost**, **Setup Time**, **Total Launches**, and **Last Deployed**.

The panel footer holds the favorite star and the **Clone** and **Launch** buttons.

<!-- SCREENSHOT: portal.qtorque.io/<space>/catalog/<blueprint> — the details panel on the Details tab, scrolled to Activity and Policies -->

### When Launch is unavailable

A disabled **Launch** button shows a tooltip with the reason. Common reasons:

- You don't have permission to launch the blueprint.
- The blueprint has an error.
- The blueprint needs a provider or credentials that are not available in the space. Depending on your role, the tooltip offers **Add provider** or **Add credentials**, or asks you to contact your admin. See [Adding a Provider](/getting-started/Resources-Inventory/adding-a-provider) and [Credentials](/admin-guide/credentials).
- The blueprint is a template. Create a blueprint from the template instead. See [Blueprint Templates](/blueprint-designer-guide/blueprint-templates).
- The blueprint reached its maximum number of concurrent environments. See [Blueprint Consumption Policies](/blueprint-designer-guide/blueprint-consumption-policies).
- The space is in maintenance mode, which disables launches. See [Announcements](/admin-guide/configurations#2-announcements).
- The blueprint is under maintenance. Its card shows an **Under Maintenance** ribbon.

## Launching

**Launch** opens the launch form, where you set the environment's name, duration, inputs, tags, and collaborators. If **Quick Launch** is turned on in **Admin > Configurations**, the form shows only the **Launch** button and skips the review summary. See [Quick Launch](/admin-guide/configurations#9-quick-launch).

Blueprints with a `target` input let you choose a provider from the Inventory instead of choosing an agent and credentials separately. See [Target Input Type](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#target-input-type) and [Provider Capabilities](/getting-started/Resources-Inventory/provider-capabilities).
