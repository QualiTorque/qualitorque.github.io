# Connect VS Code + Copilot

<!-- REVIEW (2026-10-30): the AI Integrations panel in next still downloads Stack Automation-named files (stack-automation-mcp.json, stack-automation-mcp-codex.sh, stack-automation-skills.zip, stack-automation.vsix), registers the MCP server as `stack-automation`, exports SA_TOKEN, and links to stackautomation.cisco.com docs. Bug filed for Yaniv; this page uses the Torque names the fix is expected to produce. Re-check the panel before cutover. -->

**GitHub Copilot in Visual Studio Code** supports *agent mode*, where Copilot can call MCP
servers. Connecting Torque gives Copilot Chat the ability to manage your spaces,
blueprints, and environments while you stay in your editor.

Setup is: install the Torque VS Code extension, add one MCP server entry to your
`mcp.json`, and start the server.

## Prerequisites

- **Visual Studio Code** with **GitHub Copilot** and **Copilot Chat** (agent mode).
- A Torque **API token**

## Install

1. In the **VS Code + Copilot** panel, click **Download `torque.vsix`**.

2. Install the extension via the Command Palette (**Extensions: Install from VSIX…**) or
   from a terminal:

   ```bash
   code --install-extension torque.vsix
   ```

3. The extension configures MCP automatically. For a manual installation, open the Command Palette and run **MCP: Open User Configuration**, then merge the
   snippet below into your `mcp.json`. Replace the token with your own:

   ```json
   {
     "servers": {
       "torque": {
         "type": "http",
         "url": "https://portal.qtorque.io/mcp",
         "headers": {
           "Authorization": "Bearer <YOUR_TORQUE_TOKEN>"
         }
       }
     }
   }
   ```

   > Use the exact `url` shown in your **VS Code + Copilot** panel — the MCP endpoint can
   > differ per environment.

4. Click **Start** next to the server config in VS Code, open **Copilot Chat in Agent
   mode**, and try: *"List my Torque environments."*

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

In Copilot Chat (agent mode), ask for Torque actions in plain language. Copilot
will call the `torque` server and may ask you to confirm tool calls.

**Verify the connection:**

> List my Torque environments.

**Everyday examples:**

- "Launch the `aws-eks-sandbox` blueprint in the `dev` space."
- "Show me the status and endpoints of my running environments."
- "Open the blueprint definition for `terraform-vpc` so I can edit it."
- "Deploy the module in this repo as a Torque blueprint."

## Troubleshooting

- **Server won't start.** Re-check the `mcp.json` snippet for valid JSON and confirm the
  `url` matches your panel. Then click **Start** again.
- **401 / unauthorized.** The `Authorization` header must read `Bearer <token>` with a
  valid, current key. Generate a new key on the API Keys page if needed and update `mcp.json`.
- **Copilot doesn't call the tool.** Make sure you're in **Agent mode** (not Ask mode) and
  that the `torque` server shows as *running*.

## Related

- [AI Integrations overview](index.md)
- [OpenAI Codex](openai-codex.md) — terminal agent
- [MCP Server Config](mcp-server-config.md) — Cursor, Windsurf, and other clients
