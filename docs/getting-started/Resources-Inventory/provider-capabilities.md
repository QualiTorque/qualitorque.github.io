---
title: Provider Capabilities
sidebar_label: Provider Capabilities
sidebar_position: 2
description: Discovery and Deploy capabilities, how they differ per provider type, and capability health.
---

# Provider Capabilities

Capabilities define what a provider can do. They are configured during creation, can be changed later from the provider's details panel, and are surfaced both per-row (Capabilities column) and in aggregate (Capabilities Health card). Each capability has its own credentials and health status.

## Discovery

When **Discovery** is enabled, Torque scans the provider and inventories the resources it manages. Discovered resources become browsable by drilling into the provider from the inventory list. Discovery typically requires read-level credentials.

- Enumerates resources managed by the provider (e.g., VMs, Kubernetes workloads, cloud objects).
- Captures resource metadata such as name, type, model, and location.
- Powers the resource list and usage metrics on the provider [drill-down page](./resource-discovery).
- Powers the Collection flows that codify resources into Terraform or curate them into environments. See [Codifying and Curating Resources](./cloud-resources#codifying-and-curating-resources).

To scan again on demand, hover over the Discovery icon in the provider list and click **Sync**.

## Deploy

When **Deploy** is enabled, the provider can serve as a target for deploying blueprints and launching environments. Deploy generally requires write-level credentials and may use a separate credential set when **Multiple Credentials Set** is selected.

Blueprints reference a Deploy provider through the [`target`](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#target-input-type) input type: the launch form lists the matching providers, and the selected provider supplies the agent and credentials for the grain. If a published blueprint needs a provider that is not available in the space, its **Launch** button is disabled. See [Self-Service Catalog](/getting-started/self-service-catalog#when-launch-is-unavailable).

## Capability health

Each enabled capability is health-checked. The **Capabilities Health** card rolls these checks up into percentages so operators can see, for example, that Discovery is healthy on 52% of providers while Deploy is healthy on 86%. Unhealthy capabilities appear as red icons in the provider row, making it easy to locate connections that need attention.

<!-- ![Capabilities Health card with Discovery and Deploy progress bars](./images/capabilities-health.png) -->

## Adding or removing a capability

Open the provider's details panel (hover over the Discovery icon and click **Discovery Details**; see [Provider details](./providers-inventory#provider-details)), then select the **Deploy** or **Discovery** tab:

- **Add Deploy Capability** or **Add Discovery Capability** appears on the tab of a capability the provider does not have yet.
- **Remove Deploy Capability** or **Remove Discovery Capability** removes a configured capability. Without Deploy, the provider can no longer be used as a target; without Discovery, Torque stops scanning the provider.

Click **Apply changes** to save.

## Credential sets

The **Advanced Permission Options** of the Add Provider wizard decide whether both capabilities share one credential set:

| Option | Use when |
|--------|----------|
| **Single Credentials Set** | One credential has all the permissions needed for both scanning and provisioning. |
| **Multiple Credentials Set** | You want Discovery to use read-only credentials and Deploy to use credentials that can create resources. |

The credentials themselves are managed in **Automation > Credentials**. See [Credentials](/admin-guide/credentials).

## Cost collection

Cost collection is not a provider capability. It is configured per cloud account in **Admin > Cost Configurations**. See [Cost](/governance/cost-tracking/cost).
