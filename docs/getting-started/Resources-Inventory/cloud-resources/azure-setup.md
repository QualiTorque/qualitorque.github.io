---
sidebar_position: 3
title: Azure Setup
---

### Prerequisites

- An Azure subscription.
- Steps to create and register an application in Azure Active Directory (AD):
  - Navigate to "App Registrations" in Azure AD and click New Registration. Follow the prompts (you only need to provide the name of the application). Note the Tenant ID and Application ID as these are required later.
  - Go to Certificates & Secrets and create a new client secret. Note the Secret Value for use in the application configuration.
  - Assign the Reader role to the application:
    - Navigate to Subscriptions and select the appropriate subscription.
    - Under Access Control (IAM), click Role assignments and select Add role assignment.
    - In the Roles tab, search for the Reader role, and click Next.
    - On the Members tab, select User, group, or service principal and search for the registered application.
    - Click Select, then Review and Assign to complete the setup.

---

### Minimal Permissions Required

Torque Resources Inventory requires read-only access to inventory and manage cloud resources. The following permissions are required:

- Reader role assigned to the Azure subscription.
- The ability to list resources, read metadata, and access resource details for all resources within the subscription.

---

### Adding Your Azure Account

Azure subscriptions are connected as Providers with the Discovery capability:

1. Go to **Resources → Inventory**, open the **Providers** tab, and click **Add Provider**.
2. In **Provider Details**, select the **Azure** tile, enter a **Provider Alias Name**, choose the **Connected Space(s)**, optionally add **Labels**, and click **Next**.
3. In **All Capabilities**, enable **Discovery** and, under **Integration and Permissions**, provide the `Subscription ID`, `Tenant ID`, `Application ID`, and `Application Secret` of the application you registered with read-only permissions. Select the agent that will run the discovery.
4. Save the provider. Once the Discovery capability shows as healthy, Torque begins scanning and discovering your cloud resources.

For the wizard details, see [Adding a Provider](/getting-started/Resources-Inventory/adding-a-provider).
