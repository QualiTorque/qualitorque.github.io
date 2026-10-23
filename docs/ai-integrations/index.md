---
title: AI Integrations
sidebar_label: 🤖 AI Integrations
sidebar_position: 8
description: Connect AI agents such as Claude Cowork, OpenAI Codex, VS Code, and any MCP-compatible client to Torque through the AI Integrations panel.
---

# AI Integrations

Connect your AI tools to Torque.

Torque exposes a **Model Context Protocol (MCP) server** so that AI agents and assistants can work with your spaces, blueprints, and environments in natural language. Instead of switching to the Torque UI, your team can list spaces, launch blueprints, inspect running environments, and troubleshoot failures from the AI tools they already use: Claude, OpenAI Codex, GitHub Copilot in VS Code, or any other MCP-compatible client.

The **AI Integrations** panel in the top bar of [next.qtorque.io](/next-ui) walks you through connecting each supported tool. Each setup takes a couple of minutes.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the AI Integrations panel open — the API Key section, the Native Plugins list, and the Skills & MCP list -->

:::info
AI Integrations are enabled on every Torque account. Whether a user sees the **AI Integrations** icon depends on the user's role and permissions; account admins always have it. The panel is part of the next UI and is not available in the classic portal.
:::

## Why connect an AI agent?

- **Self-service in the tools you already use.** Developers ask for environments and launch blueprints from their editor, terminal, or desktop assistant.
- **Natural-language operations.** "List my Torque spaces", "launch the `aws-eks-sandbox` blueprint in the `dev` space", or "show me why my last environment failed" all work without learning the REST API.
- **Guardrails stay in place.** The agent acts through your Torque API key, so every action is bound to your roles, permissions, and policies. Agents can only do what you can do.
- **Consistent actions.** The MCP server exposes the same operations the UI and API use.
- **One server, many clients.** Anything that speaks MCP can connect the same way.

## How it works

Every integration authenticates with a **Torque API key**. You generate the key on the **Admin > API Keys** page, paste it into the AI Integrations panel, and the panel fills the key into the setup steps and downloads for each tool. Under the hood, all clients talk to the same hosted MCP endpoint over HTTP and send the key as a bearer credential.

```
AI tool  ──(MCP over HTTP, Bearer <API key>)──▶  Torque MCP Server  ──▶  Spaces · Blueprints · Environments
```

### Get your API key into the panel

1. Click **AI Integrations** in the top bar.
2. If you do not have a key yet, click **Go to API Keys** and generate one. See [API Keys](/next-ui/api-keys).
3. Paste the key into **Paste your API key** and click **Use key**. The panel shows **Using key** with the last characters of the key, and the integration panels become available.

The key is kept in this browser only. On another device, or after you click **Clear**, paste it again. The panel remembers the last characters of the key you used so you can tell which one it was.

:::warning Important
Treat the key like a password. It grants the same access you have in Torque. Do not commit it to source control or share it in plain text. If a key is exposed, revoke it on the API Keys page and generate a new one.
:::

In the guides in this section, the key is written as `<YOUR_TORQUE_API_KEY>` and the MCP endpoint as `<MCP_SERVER_URL>`. Replace both with the values shown in your panel.

## Choose your integration

The panel has two sections. **Native Plugins** cover the standard agents; **Skills & MCP** cover custom setups.

| Integration | Section | Best for | Setup guide |
|---|---|---|---|
| **Claude Cowork** | Native Plugins | Desktop AI agent for knowledge work | [Connect Claude Cowork](claude-cowork.md) |
| **OpenAI Codex** | Native Plugins | Terminal coding agent (CLI and IDE extension) | [Connect OpenAI Codex](openai-codex.md) |
| **VS Code** | Native Plugins | AI agent mode in Visual Studio Code | [Connect VS Code](vscode-copilot.md) |
| **MCP Server Config** | Skills & MCP | Any MCP-compatible client (Claude Code, Cursor, Windsurf, and others) | [Connect via MCP config](mcp-server-config.md) |
| **Skills Pack** | Skills & MCP | Blueprint and IaC skills for your AI agents | [Install the Skills Pack](skills-pack.md) |

Each panel lists the exact steps, the file to download or the command to copy, and a link to its guide. When you finish a tool's setup, tick **I've completed the setup — mark as connected**. The panel then shows the tool as **Connected**, and the AI Integrations icon in the top bar shows the number of connected tools.

## Verify a connection

Every integration exposes the same operations, so the quickest check is a read-only question:

- "List my Torque spaces."
- "List my Torque environments."
- "Show the blueprints available in the `dev` space."

If the agent returns your real spaces or environments, the connection works.

## Next steps

- Pick a tool above and follow its guide.
- Once connected, try launching a blueprint or inspecting an environment by asking the agent in plain language.
- Add the [Skills Pack](skills-pack.md) to give your agent ready-made blueprint and Infrastructure-as-Code know-how.
