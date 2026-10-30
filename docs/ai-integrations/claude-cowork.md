# Connect Claude Cowork

<!-- REVIEW (2026-10-30): the AI Integrations panel in next still downloads Stack Automation-named files (stack-automation-mcp.json, stack-automation-mcp-codex.sh, stack-automation-skills.zip, stack-automation.vsix), registers the MCP server as `stack-automation`, exports SA_TOKEN, and links to stackautomation.cisco.com docs. Bug filed for Yaniv; this page uses the Torque names the fix is expected to produce. Re-check the panel before cutover. -->

**Claude Cowork** is the desktop AI agent from Anthropic for knowledge work. Connecting it to
Torque lets you manage spaces, launch blueprints, and inspect environments in
plain language from the Cowork desktop experience — no terminal or editor required.

Torque ships a ready-made **plugin** (bundled MCP server + skills) that you add
through a Cowork marketplace, so there's nothing to configure by hand.

## Prerequisites

- The Claude desktop app with **Cowork** enabled.
- A Torque **API token**

## Install

1. In the **Cowork** tab, go to **Customize**, click **Add a Plugin**, then choose **Create Plugin → Add Marketplace**.
2. Paste the marketplace GitHub URL shown in the **Claude Cowork** panel when prompted.

   > Copy the full URL from the panel — it is the source of truth if the marketplace location changes.

3. Once the marketplace loads, find the **Torque** plugin and click its **Add** button.
4. Go back to the **Cowork** tab and **start a new task**. The plugin's tools are now
   available to the agent.
5. Configure credentials (one time): run `/torque-quickstart` after installing the plugin, and Claude walks you through pasting your API token.

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

With the plugin added, just describe what you want in a Cowork task. The agent selects the
right Torque tools automatically.

**Verify the connection:**

> List my Torque environments.

**Everyday examples:**

- "Show me all spaces I have access to in Torque."
- "Launch the `aws-eks-sandbox` blueprint in the `dev` space and tell me when it's ready."
- "Which of my environments are still running, and how long have they been up?"
- "My last environment failed — pull the error and summarize the likely cause."

Because the agent acts through your API token, every action respects your Torque
roles and policies.

## Troubleshooting

- **The plugin doesn't appear after adding the marketplace.** Re-open **Customize** and
  confirm the marketplace URL matches the one in the panel exactly, then reload.
- **The agent can't see your data.** Make sure the key you pasted into the AI Integrations
  pane is valid and has not been revoked. If in doubt, generate a new key on the API Keys
  page, paste it into the pane, and re-run the task.
- **Actions are denied.** The token inherits your permissions — confirm your Stack
  Automation user has access to the space or blueprint you're targeting.

## Related

- [AI Integrations overview](index.md)
- [MCP Server Config](mcp-server-config.md) — connect other MCP clients
- [Skills Pack](skills-pack.md) — add blueprint & IaC skills


