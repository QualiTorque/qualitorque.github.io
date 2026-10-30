---
sidebar_position: 3
title: API Tokens
---

For programmatic access to Torque, such as the REST API, CI/CD and ITSM integrations, and the AI integrations, you need a **Torque API key** (also called an API token). API keys are generated and managed on the **API Keys** page.

<!-- SCREENSHOT: https://portal.qtorque.io/admin/api-keys — the API Keys page with the key list and the Generate and API Docs buttons -->

### Generate an API key

1. Open Torque and go to **Admin > API Keys**, or click your name in the top bar and choose **API Keys**.
2. Click **Generate**.
3. Choose the **Key Type**: **User** creates a key that acts with your own permissions, and **Service Account** creates a key for a service account.
4. Enter a **Key Description** that tells you later what the key is used for, for example the pipeline or tool that will use it.
5. Choose the **Expiration**: **30 days**, **60 days**, **90 days**, or **Never expires**.
6. Click **Generate**, then copy the key and store it somewhere safe.

:::warning Important
The key is shown **only once**. After you close the dialog you cannot retrieve it again; if you lose it, generate a new key. Treat the key like a password: it grants the same access as the user or service account it belongs to. Do not commit it to source control or share it in plain text. If a key is exposed, revoke it immediately and generate a new one.
:::

### Manage API keys

The **API Keys** page lists the keys in the account:

| Column | Description |
|---|---|
| **Description** | The description entered when the key was generated. |
| **Type** | **User** or **Service Account**. |
| **User** | The user or service account the key belongs to. |
| **Key** | The last characters of the key, for identification. The full key is never shown again. |
| **Created** | When the key was generated. |
| **Expiration** | **Never expires**, the expiration date, or **Expired**. |

- Use **Search by description, user or key** and **Filters** to find a key.
- Click the **pencil** icon to change a key's description.
- Click the **trash** icon to revoke a key. Revoking takes effect immediately and cannot be undone. Any integration that uses the key stops working until you configure it with a new key.
- **API Docs** opens the REST API reference.

### Use the key

- **REST API**: send the key as a bearer token in the `Authorization` header, for example `Authorization: Bearer <YOUR_TORQUE_TOKEN>`. See [REST API](/rest-api).
- **AI integrations**: paste the key into the **AI Integrations** panel. The panel keeps the key in your browser only and fills it into the setup steps for each tool. See [AI Integrations](/ai-integrations).
- **Other integrations**: provide the key wherever an integration asks for a Torque API token.
