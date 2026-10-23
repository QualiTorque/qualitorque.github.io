---
sidebar_position: 4
title: Self-Service Catalog
description: Finding and launching blueprints and workflows in the refreshed Self-Service catalog of next.qtorque.io.
---

# Self-Service Catalog

The **Self-Service** page is the catalog of blueprints and workflows that have been published in the selected space. It is the landing page of the next UI. Publishing itself has not changed; see [Blueprint Publishing](/blueprint-designer-guide/blueprint-publishing).

<!-- SCREENSHOT: https://next.qtorque.io/<space> — the catalog with the filter panel on the left, quick-filter pills, Group by and sort controls, and a mix of blueprint and workflow cards -->

## Page layout

| Area | Description |
|---|---|
| **Filters panel** | On the left. Contains the quick filters, the **Favorites** toggle, and one section per label key with the label values and the number of matching items. Use the panel button in its header to hide it. |
| **Search** | Filters cards by name. |
| **Quick filter pills** | One pill per quick-filter label, with the number of matching items. Click a pill to apply it. |
| **Group by** | Groups the cards by one of the label keys used in the space, for example `cloud` or `Technology`. Select **None** to remove the grouping. Items without the selected label appear under **Other Blueprints**. |
| **Sort** | **Alphabetically**, **Last update time**, or **Favorites**. |
| **Cards** | One card per published blueprint, blueprint family, or workflow. |

## Filtering

The filter panel lists the label keys of the published items. Select one or more values to narrow the catalog. Counts next to each value show how many items carry it. Sections can be collapsed, and long sections offer **Show More** and **Show Less**. **Clear Filters** resets the panel.

### Quick filters

Quick filters are labels that a space admin promotes so that users can apply them with one click. They appear as pills above the cards and under **Quick Filters** in the panel.

To change them, click the pencil icon next to **Quick Filters**. This opens **Manage Space Labels**, where the **Quick Filters** column marks the labels to promote. A space can have up to five quick-filter labels. For label management in general, see [Blueprint Publishing](/blueprint-designer-guide/blueprint-publishing).

### Favorites

Click the star on a card to mark it as a favorite. Turn on the **Favorites** toggle in the filter panel to show favorites only, or sort by **Favorites** to list them first.

### Validated and Experimental

If blueprints in the space carry a **Validated** or **Experimental** marking, matching filters appear in the panel so that you can show only validated items or only experimental ones.

## Cards

Each card shows the item's icon, display name, labels, and description. The actions depend on the item type:

| Item | Actions |
|---|---|
| **Blueprint** | **Launch** opens the launch form. **Clone** copies the blueprint into a space you choose so that you can adapt it. |
| **Workflow** | **Execute** starts the workflow. See [Workflows](/workflows/workflows-overview). |
| **Blueprint family** | Marked with a **Multiple Blueprints** ribbon. **Launch** opens a dialog where you choose one member blueprint. Members can be tagged **Cheapest**, **Fastest**, or **Most popular**. See [Blueprint Families](/blueprint-designer-guide/blueprint-families). |

Opening a card shows more information about the item: who modified it, the estimated cost, the maximum duration, the repository and branch, and a preview of the blueprint graph.

<!-- SCREENSHOT: https://next.qtorque.io/<space> — a blueprint card with the Clone and Launch buttons visible, next to a workflow card with Execute -->

### When Launch is unavailable

A disabled **Launch** button shows a tooltip with the reason. Common reasons:

- The blueprint needs a provider or credentials that are not available in the space. The tooltip offers **Add provider** or **Add credentials**. See [Inventory](./inventory/index.md).
- The blueprint is a template and cannot be launched directly.
- The blueprint reached its maximum number of concurrent environments. See [Blueprint Consumption Policies](/blueprint-designer-guide/blueprint-consumption-policies).
- The space is in maintenance mode, which disables launches. See [Announcements](/admin-guide/configurations#2-announcements).
- A blueprint under maintenance shows an **Under Maintenance** ribbon.

## Launching

**Launch** opens the same launch form as in the classic portal. If **Quick Launch** is enabled in **Admin > Configurations**, the review step is skipped. See [Quick Launch](/admin-guide/configurations#8quick-launch).

Blueprints that publish a `target` input let you pick a provider from the Inventory instead of choosing an agent and credentials separately. See [Provider Capabilities](./inventory/provider-capabilities.md).
