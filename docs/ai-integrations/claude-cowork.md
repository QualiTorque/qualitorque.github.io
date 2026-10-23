---
sidebar_position: 1
title: Connect Claude Cowork
---

# Connect Claude Cowork

**Claude Cowork** is the desktop AI agent for knowledge work from Anthropic. Connecting it to Torque lets you manage spaces, launch blueprints, and inspect environments in plain language from the Cowork desktop experience, with no terminal or editor required.

Torque ships a ready-made **plugin** (a bundled MCP server plus skills) that you add through a Cowork marketplace, so there is nothing to configure by hand.

## Prerequisites

- The Claude desktop app with **Cowork** enabled.
- A Torque **API key**, pasted into the AI Integrations panel. See [AI Integrations](index.md#get-your-api-key-into-the-panel).

## Install

Open the **Claude Cowork** panel under **Native Plugins** in the AI Integrations panel and follow its steps:

1. In the **Cowork** tab, go to **Customize**, click **Add a Plugin**, then choose **Create Plugin → Add Marketplace**.
2. Paste the marketplace GitHub URL shown in the panel. Use the panel's copy button; the panel is the source of truth if the marketplace location changes.
3. Once the marketplace loads, find the **Torque** plugin and click its **Add** button.
4. Go back to the **Cowork** tab and start a new task. The plugin's tools are now available to the agent.
5. If you have not pasted a key into the panel, a fifth step tells you to run the plugin's quickstart command in Cowork after installing it. Claude then walks you through configuring your credentials once.

When you are done, tick **I've completed the setup — mark as connected** in the panel.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the AI Integrations panel open and Claude Cowork expanded — the four numbered steps and the marketplace URL copy box -->

## Operate

With the plugin added, describe what you want in a Cowork task. The agent selects the right Torque tools automatically.

**Verify the connection:**

> List my Torque environments.

**Everyday examples:**

- "Show me all spaces I have access to in Torque."
- "Launch the `aws-eks-sandbox` blueprint in the `dev` space and tell me when it's ready."
- "Which of my environments are still running, and how long have they been up?"
- "My last environment failed. Pull the error and summarize the likely cause."

Because the agent acts through your API key, every action respects your Torque roles and policies.

## Troubleshooting

- **The plugin doesn't appear after adding the marketplace.** Re-open **Customize** and confirm the marketplace URL matches the one in the panel exactly, then reload.
- **The agent can't see your data.** Make sure the key you configured is valid and not revoked. If in doubt, generate a new key on the [API Keys](/next-ui/api-keys) page and run the quickstart again.
- **Actions are denied.** The key inherits your permissions. Confirm your Torque user has access to the space or blueprint you are targeting.

## Related

- [AI Integrations overview](index.md)
- [MCP Server Config](mcp-server-config.md) to connect other MCP clients
- [Skills Pack](skills-pack.md) to add blueprint and IaC skills
