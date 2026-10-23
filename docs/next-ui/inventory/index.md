---
sidebar_position: 1
title: Inventory Overview
sidebar_label: Overview
description: The provider-and-capability model behind Resources > Inventory in next.qtorque.io, and how to enable it.
---

# Inventory Overview

**Resources > Inventory** gives you a single, governed view of every cloud account, virtualization platform, and Kubernetes cluster that your Torque account connects to, together with the resources discovered in them and the custom resources you define yourself.

Each connection is a **provider**. A provider is typed on creation, and its type determines which **capabilities** it can offer:

- **Discovery** lets Torque scan the provider and list the resources it manages. You can browse discovered resources from the provider's drill-down page.
- **Deploy** lets the provider serve as a target for launching environments. A provider with a Deploy capability can be selected directly in a launch form through the `target` input type.

The Inventory page has two tabs:

| Tab | Content |
|---|---|
| **Providers** | Health and capability metrics, the provider list, the **Add Provider** wizard, and **Recent Collections**. See [Providers Inventory](./providers-inventory.md). |
| **Custom Resources** | Logical or physical resources that you define and that blueprints can reserve. See [Custom Resources](./custom-resources.md). |

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory — the Inventory page on the Providers tab, with the three metric cards and the provider list -->

## Key concepts

| Term | Description |
|---|---|
| **Provider** | A connection to an external system: a cloud account (AWS, Azure), a virtualization platform (vCenter), or a Kubernetes-based cluster (Kubernetes, OpenShift, RKE2). Each provider can also be a deployment target. |
| **Provider type** | The category chosen when the provider is added. It determines the available capabilities and the fields in the wizard. |
| **Capability** | A function the provider exposes: **Discovery** or **Deploy**. Each enabled capability has its own health status. See [Provider Capabilities](./provider-capabilities.md). |
| **Credential set** | The cloud credentials a capability uses. A provider can use one set for both capabilities or separate sets for least-privilege separation. |
| **Connected spaces** | The spaces a provider is shared with. Blueprints in those spaces can use the provider as a target. |
| **Resource** | An item discovered under a provider, with its type, IaC status, and location. See [Resource Discovery](./resource-discovery.md). |
| **Collection** | A set of discovered resources that you codify into Terraform or curate into a live environment. |
| **Custom resource** | A resource instance of a type you define, which blueprints can reserve at launch. See [Custom Resources](./custom-resources.md). |

## Enabling the inventory

The inventory is controlled per account in **Admin > Configurations > Resources Inventory**, which has two toggles:

- **Cloud Resources** enables provider discovery, so that you can codify unmanaged resources and curate selected resources into managed Torque environments.
- **Custom Resources** enables resource types and instances that blueprints can reserve.

If the inventory is disabled, the Inventory page asks you to enable it from the Configurations page. See [Configurations](/admin-guide/configurations).

## How this relates to the classic portal

In the classic portal, **Account Center > Curate > Resources Inventory** lists cloud resources with a provider filter, and **Settings > Agents** manages cloud accounts. In the next UI, providers are first-class objects: you add them in the Inventory, see their health and capabilities, drill into their resources, and reference them from blueprints. The **Codify** and **Curate** flows, and the Terraform artifacts they produce, are unchanged. For how to use those artifacts, see [Cloud Resources](/getting-started/Resources-Inventory/cloud-resources) and [Import Cloud Resources](/getting-started/import-cloud-resources).
