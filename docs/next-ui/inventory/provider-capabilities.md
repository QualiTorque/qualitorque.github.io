---
sidebar_position: 4
title: Provider Capabilities
description: The Discovery and Deploy capabilities of a provider, their health status, credential sets, and how Deploy connects to the blueprint target input.
---

# Provider Capabilities

Capabilities define what a provider can do. They are configured when the provider is added and can be changed later from the provider's details panel. Each capability has its own credentials, agent, and health status.

## Discovery

With **Discovery** enabled, Torque scans the provider and inventories the resources it manages. Discovery needs read-level credentials and an agent that can reach the provider.

- Discovered resources are listed on the provider's drill-down page with their type, IaC status, and location. See [Resource Discovery](./resource-discovery.md).
- Discovery runs periodically. Use **Sync** from the Discovery tooltip in the provider list to scan again on demand.
- Discovery powers the **Collection** flows that codify resources into Terraform or curate them into environments.

## Deploy

With **Deploy** enabled, the provider can host environments. Deploy needs credentials that are allowed to create resources, and an agent that runs the provisioning.

A provider with a Deploy capability becomes a **target**. Blueprint designers publish a `target` input, and the launch form shows a dropdown of matching providers. Selecting one supplies both the agent and the credentials for the grain, so separate `agent` and `credentials` inputs are no longer needed. Use `target-filters` in the blueprint to limit the dropdown to specific provider types or labels. See [Target input type](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#target-input-type).

If a published blueprint requires a provider that is not connected to the space, its **Launch** button is disabled and the tooltip offers to add one. See [Self-Service Catalog](../self-service-catalog.md#when-launch-is-unavailable).

## Capability health

Each enabled capability is health-checked. The result shows in three places:

- The capability icons in the provider list: green when ready, red when failing, grey when not added. See [Reading capability status](./providers-inventory.md#reading-capability-status).
- The **Capability Status** section on the **Deploy** and **Discovery** tabs of the provider's details panel.
- The **Capabilities Health** card above the list, which rolls the checks up into a ready percentage per capability.

A red capability usually means invalid or expired credentials, a disconnected agent, or missing permissions. Open the capability tab, click **Edit Credentials** or change the **Selected Agent**, and the check runs again.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory with a provider selected — the Discovery tab of the details panel showing Capability Status, Edit Credentials, and the Selected Agent -->

## Adding or removing a capability

From the provider's details panel:

- **Add Deploy Capability** or **Add Discovery Capability** appears on the tab of a capability the provider does not have yet. It asks for the credentials and agent, as in the wizard.
- **Remove Deploy Capability** or **Remove Discovery Capability** disables the capability. Removing Deploy makes the provider unavailable as a target; removing Discovery stops scans and hides the provider's discovered resources.

## Credential sets

The **Advanced Permission Options** of the wizard decide whether both capabilities share one credential set or use separate ones:

| Option | Use when |
|---|---|
| **Single Credentials Set** | One credential has all the permissions you need for both scanning and provisioning. |
| **Multiple Credentials Set** | You want Discovery to use read-only credentials and Deploy to use credentials that can create resources. |

Credentials themselves are managed in **Automation > Credentials**. See [Credentials](/admin-guide/credentials).

## Cost collection

Cost collection is not a provider capability. It is configured per cloud account in **Admin > Cost Configurations**, where each cloud can be enabled, validated, or disabled. See [Cost](/governance/cost-tracking/cost).
