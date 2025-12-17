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

<ProductName /> Resources Inventory requires read-only access to inventory and manage cloud resources. The following permissions are required:

- Reader role assigned to the Azure subscription.
- The ability to list resources, read metadata, and access resource details for all resources within the subscription.

---

### Adding Your Azure Account

Navigate to the `Account Center`.

1. Under the `Curate` tab, go to `Resources Inventory` in the sidebar.
2. Click on `Connect a New Cloud Account`.
3. Select Azure as the cloud provider.
4. Provide the necessary details, including `Subscription ID`, `Tenant ID`, `Application ID`, and the `Application Secret` with read-only permissions.
5. Click Connect.
6. Once connected, <ProductName /> Resources Inventory will begin scanning and discovering your cloud resources.