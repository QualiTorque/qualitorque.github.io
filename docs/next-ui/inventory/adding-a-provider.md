---
sidebar_position: 3
title: Adding a Provider
description: "The two-step Add Provider wizard in next.qtorque.io: provider details, connected spaces, labels, credential sets, and capabilities."
---

# Adding a Provider

Click **Add Provider** at the top right of **Resources > Inventory** to start the wizard. The wizard has two steps: **Provider Details** and **All Capabilities**.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory (Add Provider, step 1) — the Provider Details step with the provider tiles and the Samples tile -->

## Step 1: Provider Details

1. **Choose a provider.** Select one of the tiles: **Azure**, **AWS**, **vCenter**, **Kubernetes**, **OpenShift**, or **RKE2**. Tiles marked **Coming soon** are not available yet. The **Samples** tile adds a sample provider so that you can explore the inventory without connecting your own account; only one sample provider can exist per account.
2. **Provider Alias Name.** Enter a unique name for the provider. The name may contain letters, digits, hyphens, and underscores, and it appears wherever the provider is listed or selected as a target.
3. **Provider-specific fields.** Depending on the type, the step asks for additional details such as a namespace for OpenShift or a location.
4. **Connected Space(s).** Turn on **Share with all spaces**, or select the spaces that may use the provider. Any blueprint in a connected space can use the provider's content.
5. **Labels** (optional). Add existing labels or create new `key:value` labels to organize and filter providers.
6. **Advanced Permission Options.** Choose how credentials are scoped:
   - **Single Credentials Set** uses the same credential set for the Discovery and Deploy capabilities.
   - **Multiple Credentials Set** uses a different credential set for each capability, for least-privilege separation.

Click **Next**. The button stays disabled until all required fields are filled.

## Step 2: All Capabilities

The second step configures the capabilities the chosen provider type supports. With **Multiple Credentials Set**, the step is split into **Deploy Capability** and **Discovery Capability**.

- **Integration and Permissions.** Select the cloud credentials the capability uses, or create new ones. The credentials must have the permissions the capability needs: read access for Discovery, and permission to create resources for Deploy. The dropdown warns you if a credential's type does not match the provider.
- **Agent.** Select the agent that will run discovery scans and deployments for this provider. Agents that are not connected are flagged in the dropdown. See [Torque Agent](/torque-agent/Torque-Agent-Intro).
- **Kubernetes, OpenShift, and RKE2 providers** also ask for a **Service Account Name** and a **Namespace**. Under **Advanced - Runner Management** you can set the **Default Runners Namespace** and **Default Runners Service Account**. Runners are the containers Torque creates in your cluster to run provisioning jobs; a dedicated namespace keeps automation isolated from your workloads, and the service account determines the permissions runners have in the cluster.

You can **Skip for now** to add the provider with the capabilities configured so far and complete the rest later from the provider's details panel. Click **Cancel** at any point to leave the wizard without saving.

<!-- SCREENSHOT: https://next.qtorque.io/<space>/resources_inventory (Add Provider, step 2) — the All Capabilities step showing the credentials and agent selectors for a cloud provider -->

## After adding a provider

The new provider appears in the list with its capability icons. Discovery starts automatically once its credentials and agent validate; the icon turns green when the first scan completes. If a capability shows red, open the provider's details panel to check the error and edit the credentials. See [Providers Inventory](./providers-inventory.md#reading-capability-status).

:::tip
To make a provider available for selection in launch forms, give it a **Deploy** capability and publish a `target` input in the blueprint. See [Provider Capabilities](./provider-capabilities.md#deploy).
:::
