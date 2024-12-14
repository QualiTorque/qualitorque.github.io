---
sidebar_position: 3
title: AWS Setup
---

### Prerequisites

- An `AWS Account`.
- Steps to enable `AWS Resource Explorer`
    - Navigate to `AWS Resource Explorer` Service
      1. Click the `Turn on Resource Explorer` button on the right of the screen, go to step 3 if already enabled
      2. Follow the steps and select an `Aggregator index Region`, take note of the region
      3. Go to the `Views` tab under `Explore Resources` on the left side
      4. Create a new view or use the existing `all-resources` view
      5. Get the ARN of the view, should look like the ARN below for the "all-resources" view

         `arn:aws:resource-explorer-2:"your-region":"your-account":view/all-resources/"some-guid"`

:::info
The Resource Explorer indexing process, once turned on, can take 72 hours to complete. If a resource does not show up in Resource Explorer, it will not show up in Cloud Curate.
:::


- Create an `IAM User`
    - Create an `IAM User` under the IAM Service
    - Give a `Permission Policy` to that user. Minimum policy is `AWSResourceExplorerReadOnlyAccess`. Ideal policy is `ReadOnlyAccess` explained under [Minimal Permissions Required](/getting-started/Resources-Inventory/AWS-Setup#Minimal-Permissions-Required)
    - Create `Access Keys` under `Security credentials` and take note of the `Access and Secret Keys`

:::info
Currently only IAM Users with an Access and Secret Key authentication is supported, additional authentications are coming in the near future
:::

---
### Minimal Permissions Required

Torque Resources Inventory requires read-only access to inventory and manage cloud resources. The following permissions are required:

- `AWSResourceExplorerReadOnlyAccess` assigned to the IAM User. This only gives you the ability to see resources in Cloud Curate.
- For the ability to convert resources in Terraform or manage environments, `ReadOnlyAccess` is recommended so all resource types can be used.
---
### Adding Your AWS Account

Navigate to the `Account Center`.

1. Under the `Curate`, go to `Resources Inventory` in the sidebar.
2. Click on the `Connect a New Cloud Account`.
3. Select `AWS` as the cloud provider.
4. Provide the necessary details, including `Account Number`, `Access Key`, `Secret Key`, and the `View Arn`. `Cloud Account Name` can be anything as its your identifier.
5. Click Save.
6. Once connected, Torque Resources Inventory will begin scanning and discovering your cloud resources.

### [Continue Setup](/getting-started/Resources-Inventory/Resources-Inventory#Cloud-Resources-Inventory)