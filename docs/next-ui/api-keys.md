---
sidebar_position: 7
title: API Keys
description: Generating, renaming, and revoking Torque API keys on the Admin > API Keys page in next.qtorque.io.
---

# API Keys

**Admin > API Keys** is where you generate and manage the API keys that authenticate programmatic access to Torque: REST API calls, CI/CD integrations, and the [AI Integrations](/ai-integrations). In the classic portal, tokens are generated from an integration's **Connect** panel; see [Torque API Tokens](/rest-api/torque_api_tokens). The next UI centralizes them on one page.

The page is available to account admins. Other users can reach their own keys through **API Keys** in the user menu, subject to their role.

<!-- SCREENSHOT: https://next.qtorque.io/admin/api-keys — the API Keys table with the Generate and API Docs buttons -->

## Key list

| Column | Description |
|---|---|
| **Description** | The name given when the key was generated. Keys created by AI integrations may carry an auto-generated description. |
| **Type** | **User** for a key that acts as the user who created it, or **Service Account**. |
| **User** | The user or service account the key belongs to. |
| **Key** | The last characters of the key, for identification only. The full key is shown once, at creation. |
| **Created** | When the key was generated. |
| **Expiration** | **Never expires**, the days left until expiration, or **Expired**. |

Use **Search by description, user or key** and **Filters** (by type or user) to find a key. **API Docs** opens the REST API reference.

## Generating a key

1. Click **Generate**.
2. Enter a **Key Description** that tells you later what the key is used for.
3. Choose the **Key Type**: **User** or **Service Account**. For a service account key, select the service account.
4. Choose the **Expiration**: **30 days**, **60 days**, **90 days**, or **Never expires**.
5. Click **Generate**, then copy the key and store it somewhere safe.

:::warning
The key is shown only once. After you close the dialog you cannot retrieve it again; generate a new key instead.
:::

## Renaming and revoking

- The **pencil** icon on a row renames the key's description.
- The **trash** icon revokes the key immediately. Revoking cannot be undone. Any integration that used the key stops working until you configure it with a new key.

## Using a key

- **REST API.** Send the key as a bearer token in the `Authorization` header. See [REST API](/rest-api).
- **AI Integrations.** Paste the key into the AI Integrations panel. The panel keeps the key in your browser only and fills it into the setup steps for each tool. See [AI Integrations](/ai-integrations).
