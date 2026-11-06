---
title: Adding a Provider
sidebar_label: Adding a Provider
sidebar_position: 1
description: The two-step Add Provider wizard — provider details, connected spaces, labels, credential options, and capabilities.
---

# Adding a Provider

Use **+ Add Provider** (top right of the inventory) to launch the two-step Add Provider wizard.

## Step 1 — Provider Details

Select the **provider type** and supply core identity and sharing settings.

1. **Choose a provider type.** Select from Azure, AWS, vCenter, Kubernetes, OpenShift, RKE2, GCP, or Custom. Tiles marked **Coming soon** are not available yet. The selected type determines which capabilities become available in Step 2. The **Samples** tile adds a sample provider so that you can explore the inventory without connecting your own account; an account can have only one sample provider.
2. **Provider Alias Name.** Enter a unique, human-readable name. It may contain letters, digits, hyphens, and underscores. This alias appears in the inventory list and wherever the provider is referenced as a target.
3. **Connected Space(s).** Toggle **Share with all spaces**, or select specific spaces. Any blueprint in a connected space can use this provider's content.
4. **Labels (optional).** Add or create `key:value` labels to organize and later filter providers.
5. **Advanced Permission Options.** Choose how credentials are scoped:
   - **Single Credentials Set** — use the same credential set for both Discovery and Deploy capabilities.
   - **Multiple Credentials Set** — use different credential sets for Discovery and Deploy, for least-privilege separation.

Click **Next**. The button stays disabled until the required fields are filled.

<!-- ![Add Provider — Step 1 Provider Details (type selector, alias, connected spaces, labels, credential options)](./images/add-provider-step1.png) -->

## Step 2 — All Capabilities

Configure the capabilities the chosen provider type supports. With **Multiple Credentials Set**, this step is split into a **Deploy Capability** step and a **Discovery Capability** step.

- **Integration and Permissions** — select the cloud credentials the capability uses. The credentials must have the permissions the capability needs: read access for Discovery, and permission to create resources for Deploy.
- **Agent** — select the agent that runs discovery scans and deployments for this provider. See [What is an Agent?](/agent/Agent-Intro)
- **Kubernetes, OpenShift, and RKE2** providers also ask for a **Service Account Name** and a **Namespace**. Under **Advanced - Runner Management**, you can set the **Default Runners Namespace** and **Default Runners Service Account**. Runners are the containers Torque creates in your cluster to run provisioning jobs; a dedicated namespace keeps automation isolated from your workloads, and the service account determines the permissions the runners have in the cluster.

Click **Skip for now** to skip a capability step; on the last step, **Skip and Done** finishes the wizard without it. You can add a skipped capability later from the provider's details panel. Click **Cancel** to leave the wizard without saving.

<!-- REVIEW (2026-11-06): Step 2 was not opened live (it needs a typed alias name); its fields and the Skip for now / Skip and Done buttons are taken from the frontend bundle. Confirm with Yaniv, or walk it by hand. -->

<!-- ![Add Provider — Step 2 All Capabilities (Discovery and Deploy configuration)](./images/add-provider-step2.png) -->

## After adding a provider

The new provider appears in the provider list with its capability icons. If a capability shows red, hover over its icon to see the error, and use **Edit Credentials** or **Discovery Details** to fix it. See [Reading capability status at a glance](./providers-inventory#reading-capability-status-at-a-glance).

To let end users pick the provider when they launch an environment, give it a **Deploy** capability and add a `target` input to the blueprint. See [Provider Capabilities](./provider-capabilities#deploy).

## Provider type reference

Available capabilities differ by provider type. The matrix below shows typical support; the wizard reflects the exact options for each selection.

| Provider Type | Discovery | Deploy | Typical Resources |
|---------------|-----------|--------|-------------------|
| AWS | Yes | Yes | Cloud objects (compute, storage, networking) |
| Azure | Yes | Yes | Cloud objects (compute, storage, networking) |
| GCP | Yes | Yes | Cloud objects (compute, storage, networking) |
| vCenter | Yes | Yes | Virtual machines, datastores, networks |
| Kubernetes, OpenShift, RKE2 | Yes | Yes | Clusters, namespaces, workloads |
| Custom | Varies | Varies | Defined by the custom integration |
