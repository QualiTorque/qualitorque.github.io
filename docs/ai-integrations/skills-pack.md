# Install the Skills Pack

<!-- REVIEW (2026-10-30): the AI Integrations panel in next still downloads Stack Automation-named files (stack-automation-mcp.json, stack-automation-mcp-codex.sh, stack-automation-skills.zip, stack-automation.vsix), registers the MCP server as `stack-automation`, exports SA_TOKEN, and links to stackautomation.cisco.com docs. Bug filed for Yaniv; this page uses the Torque names the fix is expected to produce. Re-check the panel before cutover. -->

The **Skills Pack** adds ready-made **blueprint and Infrastructure-as-Code (IaC) skills**
to your AI agents. Where the MCP server gives an agent the *ability to act* on Stack
Automation, the Skills Pack gives it the *know-how*: reusable instructions and patterns for
authoring blueprints, writing Terraform/IaC, and following your organization's conventions
— so the agent produces higher-quality, on-standard results with less prompting.

> **Note:** Skills are packaged instructions that ride alongside the MCP server. Install the
> Skills Pack **in addition to** connecting a tool via one of the other integrations — the
> MCP connection lets the agent act; the Skills Pack teaches it how to do so well.

## Prerequisites

- A connected AI tool — set one up first via
  [Claude Cowork](claude-cowork.md), [OpenAI Codex](openai-codex.md),
  [VS Code + Copilot](vscode-copilot.md), or [MCP Server Config](mcp-server-config.md).
- A Torque **API token**

## Install

1. Click **AI Integrations** on the top bar, expand the **Skills Pack** panel, and click
   **Download `torque-skills.zip`**.
2. Follow the steps shown in the panel to add the Skills Pack to your agent. The exact
   steps depend on the client:
   - **Claude Cowork:** the Torque plugin already bundles the skills, so they are
     available once the plugin is added. See [Connect Claude Cowork](claude-cowork.md).
   - **Codex / VS Code / other MCP clients:** add the Skills Pack alongside the
     `torque` MCP server as directed in the panel.
3. Start a new session in your agent so the new skills are loaded.

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## What you get

- **Blueprint authoring skills** — guidance for structuring single- and multi-asset
  blueprints, inputs, outputs, and dependencies.
- **IaC skills** — patterns for writing and wiring Terraform and other IaC so it deploys
  cleanly as a Torque blueprint.
- **Convention-aware output** — the agent follows the naming, tagging, and structure
  conventions the pack encodes, reducing review cycles.

## Operate

With the Skills Pack installed, ask your agent to *create* or *improve* infrastructure, and
it will apply the packaged expertise automatically:

- "Author a Torque blueprint for a three-tier web app with a managed database."
- "Turn the Terraform in this repo into a Torque blueprint following our
  conventions."
- "Review this blueprint and suggest improvements for reusability."
- "Scaffold an IaC module for an EKS cluster and deploy it as a blueprint."

## Client setup examples

Use these examples to add the `torque` MCP server in common clients.

### Claude Code (CLI)

Run:

```bash
claude mcp add --transport http torque https://portal.qtorque.io/mcp \
  -H "Authorization: Bearer <your-token>"
```

Then start a new Claude session so the updated MCP configuration and skills are loaded.

### VS Code

If your VS Code MCP client supports adding servers from the Command Palette:

1. Open **Command Palette**.
2. Run **MCP: Add Server** (or the equivalent command in your MCP extension).
3. Choose **HTTP** transport.
4. Set server name to `torque`.
5. Set URL to `https://portal.qtorque.io/mcp`.
6. Add header `Authorization: Bearer <your-token>`.
7. Restart the agent/chat session in VS Code.

If your MCP client uses a JSON config file, add an entry equivalent to:

```json
{
  "mcpServers": {
    "torque": {
      "transport": "http",
      "url": "https://portal.qtorque.io/mcp",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}
```

## Troubleshooting

- **Skills don't seem to apply.** Start a fresh agent session after installing, and confirm
  the pack shows as connected in the panel.
- **Agent can author but can't deploy.** Authoring comes from the Skills Pack; deploying
  requires an active MCP connection — verify your MCP integration is connected.

## Related

- [AI Integrations overview](index.md)
- [Claude Cowork](claude-cowork.md)
- [MCP Server Config](mcp-server-config.md)
