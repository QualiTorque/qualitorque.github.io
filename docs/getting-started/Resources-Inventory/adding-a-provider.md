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

1. **Choose a provider type.** Select from Azure, AWS, vCenter, Kubernetes, OpenShift, RKE2, GCP, or Custom. You can also start from a Sample. The selected type determines which capabilities become available in Step 2.
2. **Provider Alias Name.** Enter a unique, human-readable name. This alias appears in the inventory list and wherever the provider is referenced as a target.
3. **Connected Space(s).** Toggle **Share with all spaces**, or select specific spaces. Any blueprint in a connected space can use this provider's content.
4. **Labels (optional).** Add or create `key:value` labels to organize and later filter providers.
5. **Advanced Permission Options.** Choose how credentials are scoped:
   - **Single Credentials Set** — use the same credential set for both Discovery and Deploy capabilities.
   - **Multiple Credentials Set** — use different credential sets for Discovery and Deploy, for least-privilege separation.

<!-- ![Add Provider — Step 1 Provider Details (type selector, alias, connected spaces, labels, credential options)](./images/add-provider-step1.png) -->

## Step 2 — All Capabilities

Configure the capabilities the chosen provider type supports. Depending on the type, this includes enabling **Discovery** and/or **Deploy**, supplying endpoint and credential details, and optionally validating connectivity before saving.

- Enable the capabilities you want this provider to expose.
- Provide the credentials required by each enabled capability (one set, or separate sets, per the Step 1 choice).
- Test connectivity to confirm the provider is reachable and the credentials are valid.
- Save to add the provider to the inventory.

<!-- ![Add Provider — Step 2 All Capabilities (Discovery and Deploy configuration)](./images/add-provider-step2.png) -->

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
