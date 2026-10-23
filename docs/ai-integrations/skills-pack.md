---
sidebar_position: 5
title: Install the Skills Pack
---

# Install the Skills Pack

The **Skills Pack** adds ready-made **blueprint and Infrastructure-as-Code (IaC) skills** to your AI agents. Where the MCP server gives an agent the *ability to act* on Torque, the Skills Pack gives it the *know-how*: reusable instructions and patterns for authoring blueprints, writing Terraform and other IaC, and following your organization's conventions, so the agent produces higher-quality, on-standard results with less prompting.

:::note
Skills are packaged instructions that ride alongside the MCP server. Install the Skills Pack **in addition to** connecting a tool through one of the other integrations. The MCP connection lets the agent act; the Skills Pack teaches it how to do so well.
:::

## Prerequisites

- A connected AI tool. Set one up first via [Claude Cowork](claude-cowork.md), [OpenAI Codex](openai-codex.md), [VS Code](vscode-copilot.md), or [MCP Server Config](mcp-server-config.md).

## Install

1. Open the **Skills Pack** panel under **Skills & MCP** in the AI Integrations panel and click its download button to get the skills archive.
2. Add the skills to your agent. The steps depend on the client:
   - **Claude Cowork.** The Torque plugin already bundles the skills, so they are available once the plugin is added. See [Connect Claude Cowork](claude-cowork.md).
   - **Codex, VS Code, and other MCP clients.** Extract the archive and add the skills next to the Torque MCP server, following your client's instructions for loading skills or custom instructions.
3. Start a new session in your agent so the new skills are loaded.

When you are done, tick **I've completed the setup — mark as connected** in the panel.

## What you get

- **Blueprint authoring skills.** Guidance for structuring single-asset and multi-asset blueprints, inputs, outputs, and dependencies.
- **IaC skills.** Patterns for writing and wiring Terraform and other IaC so it deploys cleanly as a Torque blueprint.
- **Convention-aware output.** The agent follows the naming, tagging, and structure conventions the pack encodes, reducing review cycles.

## Operate

With the Skills Pack installed, ask your agent to *create* or *improve* infrastructure, and it applies the packaged expertise automatically:

- "Author a Torque blueprint for a three-tier web app with a managed database."
- "Turn the Terraform in this repo into a Torque blueprint following our conventions."
- "Review this blueprint and suggest how to make it easier to reuse."
- "Scaffold an IaC module for an EKS cluster and deploy it as a blueprint."

## Troubleshooting

- **Skills don't seem to apply.** Start a fresh agent session after installing, and confirm the pack shows as connected in the panel.
- **The agent can author but can't deploy.** Authoring comes from the Skills Pack; deploying requires an active MCP connection. Verify your MCP integration is connected.

## Related

- [AI Integrations overview](index.md)
- [Claude Cowork](claude-cowork.md)
- [MCP Server Config](mcp-server-config.md)
