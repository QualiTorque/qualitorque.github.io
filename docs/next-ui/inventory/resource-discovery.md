---
sidebar_position: 5
title: Resource Discovery and Collections
description: Browsing a provider's discovered resources, IaC status, and turning resources into a Collection to codify or curate them.
---

# Resource Discovery and Collections

For providers with a Discovery capability, **View Resources** (from the row menu or the Discovery tooltip) opens the provider's resource view: **Inventory > &lt;Provider Name&gt;**. The page lists every resource discovered under the provider and lets you select resources into a **Collection**.

<!-- SCREENSHOT: https://next.qtorque.io/admin/resources_inventory (provider drill-down) — the discovered resources table of a provider with IaC Status badges and the Collection button -->

## Resource list

| Column | Description |
|---|---|
| **Resource Name** | The resource's name in the provider. |
| **Type** | The provider's resource type, for example `Microsoft.Compute/virtualMachines`. |
| **IaC Status** | **Managed**: created and managed by Torque. **Codified**: managed by your own IaC. **Unmanaged**: created manually, outside IaC. |
| **Location** | The region or data center of the resource. |
| **Last Modified** | When the resource last changed. Click the header to sort. |
| **External link** | Opens the resource in the provider's console, when a link is available. |

Use **Search by keyword** to find resources by name and **Filters** to narrow the list by type, status, or location.

## Collections

Select resources with the row checkboxes and click **Collection** to open your collection. After adding at least one resource you can either **Codify** it into a Terraform file or **Curate** it as a live environment.

### Codify

**Codify** generates a Terraform configuration and state file for the selected resources, so that manually created resources can be brought under Infrastructure as Code.

1. In the collection, click **Codify**.
2. Review the **Codify Summary**. Torque creates a ZIP file that contains a single Terraform file with state for the listed resources.
3. Confirm. Codification runs in the background and can take up to a minute. You can close the dialog and follow progress in **Recent Collections**.
4. When the codification is ready, download the ZIP from **Recent Collections**.

For how to use the generated files, see [Using the downloaded IaC artifacts](/getting-started/Resources-Inventory/cloud-resources#using-the-downloaded-iac-artifacts).

### Curate as Environment

**Curate as Environment** imports the selected resources into a managed Torque environment.

1. In the collection, click **Curate as Environment**.
2. Fill in the **Environment Details**: the environment name, the space that will own it, the agent, and the repository and branch where Torque stores the generated files.
3. Click **Approve & Curate**. Torque generates the Terraform files, commits them to the repository, and launches the environment.
4. Follow the curation in **Recent Collections**, then click **Go to Environment** when it is ready.

Once curated, the resources show **Managed** as their IaC status. For the manual version of this flow, see [Import Cloud Resources](/getting-started/import-cloud-resources).

## Recent Collections

**Recent Collections**, at the top of the Providers tab, opens a drawer with every previous collection:

- **Codifications** lists each codification job with its number of resources and creation time, its status, and a download icon for the ZIP.
- **Curations** lists each curation with the generated assets and a **Go to Environment** link.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory with Recent Collections open — the drawer showing the Codifications tab with a downloadable job -->
