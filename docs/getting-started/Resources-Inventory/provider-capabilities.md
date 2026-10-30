---
title: Provider Capabilities
sidebar_label: Provider Capabilities
sidebar_position: 2
description: Discovery and Deploy capabilities, how they differ per provider type, and capability health.
---

# Provider Capabilities

Capabilities define what a provider can do. They are configured during creation and surfaced both per-row (Capabilities column) and in aggregate (Capabilities Health card).

## Discovery

When **Discovery** is enabled, Torque scans the provider and inventories the resources it manages. Discovered resources become browsable by drilling into the provider from the inventory list. Discovery typically requires read-level credentials.

- Enumerates resources managed by the provider (e.g., VMs, Kubernetes workloads, cloud objects).
- Captures resource metadata such as name, type, model, and location.
- Powers the resource list and usage metrics on the provider [drill-down page](./resource-discovery).

## Deploy

When **Deploy** is enabled, the provider can serve as a target for deploying blueprints and launching environments. Deploy generally requires write-level credentials and may use a separate credential set when **Multiple Credentials Set** is selected.

## Capability health

Each enabled capability is health-checked. The **Capabilities Health** card rolls these checks up into percentages so operators can see, for example, that Discovery is healthy on 52% of providers while Deploy is healthy on 86%. Unhealthy capabilities appear as red icons in the provider row, making it easy to locate connections that need attention.

<!-- ![Capabilities Health card with Discovery and Deploy progress bars](./images/capabilities-health.png) -->
