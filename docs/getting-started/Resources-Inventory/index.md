---
title: Overview
sidebar_label: Overview
sidebar_position: 2
description: The Torque provider-and-capability model and key inventory concepts.
---

# Overview

Torque Resources Inventory gives you a single, governed view of every infrastructure and cloud endpoint your organization connects to. Each entry in the inventory is a **provider** — a connection to a cloud account, virtualization platform, Kubernetes cluster, or infrastructure controller — that doubles as a **target** for discovery and deployment operations. In practice, a provider pairs an agent with the credentials for its Discovery and Deploy capabilities, and blueprint YAML references the provider through the [`target`](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#target-input-type) input type.

Providers are typed on creation (for example AWS, Azure, vCenter, Kubernetes, OpenShift, RKE2, GCP, or Custom). A provider's type determines which **capabilities** it can offer. The two core capabilities are:

- **Discovery** — the provider can be scanned to enumerate the resources it manages (for example virtual machines, Kubernetes workloads, or cloud objects), which are then browsable inside the inventory.
- **Deploy** — the provider can be used as a target for deploying blueprints and launching environments.

The inventory surface aggregates health and distribution metrics across all providers so operators can quickly assess coverage, spot unhealthy connections, and understand which capabilities are active across the estate.

The **Resources → Inventory** page has two tabs:

| Tab | Content |
|-----|---------|
| **Providers** | Health and capability metrics, the provider list, **Recent Collections**, and **Add Provider**. See [Providers Inventory](/getting-started/Resources-Inventory/providers-inventory). |
| **Custom Resources** | Resource types and instances that you define and that blueprints can reserve. See [Custom Resources](/getting-started/Resources-Inventory/custom-resources). |

<!-- ![Resources > Inventory — full inventory page with metrics cards and provider list](./images/inventory-overview.png) -->

---

## Key concepts

| Term | Description |
|------|-------------|
| **Provider** | A connection to an external system (cloud, virtualization, Kubernetes, infrastructure controller). Each provider is also a deployment target. |
| **Provider Type** | The category selected at creation (AWS, Azure, vCenter, Kubernetes, OpenShift, RKE2, GCP, Custom). Determines available capabilities. |
| **Capability** | A function a provider exposes — primarily Discovery and Deploy. Availability depends on provider type and configuration. |
| **Resource** | An individual item discovered under a provider (e.g., a VM, a Kubernetes workload, or a cloud object). |
| **Spaces** | The space(s) a provider is shared with; controls which blueprints can use the provider's content. |
| **Capability Health** | A rolled-up indicator of how many providers have a working Discovery or Deploy capability. |
| **Credential set** | The cloud credentials a capability uses. A provider can use one set for both capabilities or a separate set for each. See [Credential sets](/getting-started/Resources-Inventory/provider-capabilities#credential-sets). |
| **Collection** | A set of discovered resources that you codify into Terraform or curate into a live environment. See [Codifying and Curating Resources](/getting-started/Resources-Inventory/cloud-resources#codifying-and-curating-resources). |
| **Custom resource** | An instance of a resource type that you define, which blueprints can reserve at launch. See [Custom Resources](/getting-started/Resources-Inventory/custom-resources). |

---

## Enabling the inventory

The inventory is controlled per account in **Admin > Configurations > Resources Inventory**, which has two toggles:

- **Cloud Resources** enables provider discovery, so that you can codify unmanaged resources and curate selected resources into managed Torque environments.
- **Custom Resources** enables the **Custom Resources** tab, with resource types and instances that blueprints can reserve.

If both are turned off, the Inventory page asks you to enable the inventory from the Configurations page. See [Resources Inventory](/admin-guide/configurations#8-resources-inventory).
