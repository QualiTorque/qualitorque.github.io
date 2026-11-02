---
sidebar_position: 2
title: AWS Setup
---

### Prerequisites

- An `AWS Account`.
- Enable `AWS Resource Explorer`

Steps to Enable `AWS Resource Explorer` Service:
1. Navigate to the `AWS Management Console`
2. Click the `Turn on Resource Explorer` button on the right of the screen, go to step 3 if already enabled
3. Follow the steps and select an `Aggregator index Region`, take note of the region
4. Go to the `Views` tab under `Explore Resources` on the left side
5. Create a new view or use the existing `all-resources` view
6. Get the ARN of the view, it should look like the ARN below for the "all-resources" view `arn:aws:resource-explorer-2:"your-region":"your-account":view/all-resources/"some-guid"`

:::info
The Resource Explorer indexing process, once turned on, can take up to 72 hours to complete. If a resource does not show up in Resource Explorer, it will not show up in the Torque inventory.
:::


7. Create an `IAM User`
   - Create an `IAM User` under the IAM Service
   - Give a `Permission Policy` to that user. Minimum policy is `AWSResourceExplorerReadOnlyAccess`. Ideal policy is `ReadOnlyAccess` explained under [Minimal Permissions Required](#minimal-permissions-required)
   - Create `Access Keys` under `Security credentials` and take note of the `Access and Secret Keys` values

:::info
Currently the only authentication method supported is IAM Users with an Access and Secret Keys, additional authentications are coming in the near future
:::

---
### Minimal Permissions Required

Torque Resources Inventory requires read-only access to inventory and manage cloud resources. The following permissions are required:

- `AWSResourceExplorerReadOnlyAccess` assigned to the IAM User. This only gives you the ability to see resources in the inventory.
- For the ability to convert resources in Terraform or manage environments, `ReadOnlyAccess` is recommended so all resource types can be used.
---
### Adding Your AWS Account

AWS accounts are connected as Providers with the Discovery capability:

1. Go to **Resources → Inventory**, open the **Providers** tab, and click **Add Provider**.
2. In **Provider Details**, select the **AWS** tile, enter a **Provider Alias Name**, choose the **Connected Space(s)**, optionally add **Labels**, and click **Next**.
3. In **All Capabilities**, enable **Discovery** and, under **Integration and Permissions**, provide the read-only credentials you prepared: the `Account Number`, `Access Key`, `Secret Key`, and the `View Arn` of your Resource Explorer view. Select the agent that will run the discovery.
4. Save the provider. Once the Discovery capability shows as healthy, Torque begins scanning and discovering your cloud resources.

For the wizard details, see [Adding a Provider](/getting-started/Resources-Inventory/adding-a-provider).
