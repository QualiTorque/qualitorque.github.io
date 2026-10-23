---
sidebar_position: 3
title: Connect VS Code
---

# Connect VS Code

AI agents in **Visual Studio Code**, such as GitHub Copilot in agent mode, can call MCP servers. Connecting Torque gives your editor's AI chat the ability to manage your spaces, blueprints, and environments while you stay in your editor.

Setup is: install the Torque VS Code extension, which configures the MCP server for you, then start the server.

## Prerequisites

- **Visual Studio Code** with an AI chat that supports agent mode and MCP servers, for example **GitHub Copilot Chat**.
- A Torque **API key**, pasted into the AI Integrations panel. See [AI Integrations](index.md#get-your-api-key-into-the-panel).

## Install

Open the **VS Code** panel under **Native Plugins** in the AI Integrations panel and follow its steps:

1. **Download the Torque VS Code extension** (`torque-ai.vsix`) with the panel's download button.
2. **Install the extension** via the Command Palette (**Extensions: Install from VSIX…**) or from a terminal:

   ```bash
   code --install-extension torque-ai.vsix
   ```

3. **The extension configures MCP automatically.** For a manual installation, open the Command Palette, run **MCP: Open User Configuration**, and merge the snippet shown in the panel into your `mcp.json`. The snippet is pre-filled with your key and looks like this:

   ```json
   {
     "servers": {
       "torque": {
         "type": "http",
         "url": "<MCP_SERVER_URL>",
         "headers": {
           "Authorization": "Bearer <YOUR_TORQUE_API_KEY>"
         }
       }
     }
   }
   ```

   Use the exact `url` shown in your panel.

4. Click **Start** next to the server config in VS Code, open your AI chat in **Agent mode**, and try: *"List my Torque environments."*

When you are done, tick **I've completed the setup — mark as connected** in the panel.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the AI Integrations panel open and VS Code expanded — the download button, the install command, and the mcp.json snippet -->

## Operate

In your AI chat (agent mode), ask for Torque actions in plain language. The chat calls the `torque` server and may ask you to confirm tool calls.

**Verify the connection:**

> List my Torque environments.

**Everyday examples:**

- "Launch the `aws-eks-sandbox` blueprint in the `dev` space."
- "Show me the status and endpoints of my running environments."
- "Open the blueprint definition for `terraform-vpc` so I can edit it."
- "Deploy the module in this repo as a Torque blueprint."

## Troubleshooting

- **Server won't start.** Re-check the `mcp.json` snippet for valid JSON and confirm the `url` matches your panel. Then click **Start** again.
- **401 / unauthorized.** The `Authorization` header must read `Bearer <key>` with a valid, current key. Generate a new one on the [API Keys](/next-ui/api-keys) page if needed and update `mcp.json`.
- **The chat doesn't call the tool.** Make sure you are in **Agent mode** (not Ask mode) and that the `torque` server shows as running.

## Related

- [AI Integrations overview](index.md)
- [OpenAI Codex](openai-codex.md) for a terminal agent
- [MCP Server Config](mcp-server-config.md) for Cursor, Windsurf, and other clients
