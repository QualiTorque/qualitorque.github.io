---
sidebar_position: 2
title: Connect OpenAI Codex
---

# Connect OpenAI Codex

**OpenAI Codex** is a terminal-based coding agent, available as a CLI and as an IDE extension. Connecting it to Torque registers the Torque MCP server as a tool Codex can call, so you can query and drive your environments from the same terminal where you write code.

Setup is a short install script plus one environment variable for your key.

## Prerequisites

- The **Codex CLI** installed and working (`codex --version`).
- A Torque **API key**, pasted into the AI Integrations panel. See [AI Integrations](index.md#get-your-api-key-into-the-panel).
- A POSIX shell (`zsh` or `bash`).

## Install

Open the **OpenAI Codex** panel under **Native Plugins** in the AI Integrations panel and follow its steps:

1. **Download the install script** with the panel's download button.
2. **Run it in your terminal.** Copy the command from the panel; it makes the script executable and runs it from the download location, for example:

   ```bash
   chmod +x <script-name>.sh && ./<script-name>.sh
   ```

   The script registers the Torque MCP server with your Codex configuration. If the Codex CLI is not found, it writes the server entry to the Codex config file instead.

3. **Add the key to your shell profile** (`~/.zshrc` or `~/.bashrc`) so Codex can authenticate. Copy the `export` line from the panel; it uses the environment variable name the script expects and is pre-filled with your key:

   ```bash
   export <TOKEN_VARIABLE>="<YOUR_TORQUE_API_KEY>"
   ```

   Reload your shell (`source ~/.zshrc`) or open a new terminal so the variable takes effect.

4. **Verify the connection.** The Torque server should appear in the list:

   ```bash
   codex mcp list
   ```

When you are done, tick **I've completed the setup — mark as connected** in the panel.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the AI Integrations panel open and OpenAI Codex expanded — the download button and the three command boxes -->

## Operate

Start a Codex session and ask for Torque actions in natural language. Codex routes them to the Torque MCP server.

**Verify the connection:**

> List my Torque spaces.

**Everyday examples:**

- "Launch the `terraform-vpc` blueprint in the `staging` space."
- "Show the outputs of my most recent environment."
- "End the environment named `pr-1423-preview`."
- "Generate a Terraform module and then deploy it as a blueprint in Torque."

Combining Codex's code generation with Torque lets you go from Infrastructure as Code to a running environment in a single conversation.

## Troubleshooting

- **The server is not shown in `codex mcp list`.** Re-run the install script, confirm it completed without errors, then restart your terminal.
- **Auth errors or empty results.** Confirm the key variable is exported in the current shell (`echo $<TOKEN_VARIABLE>`) and that the value matches a valid key that has not been revoked.
- **Command not found.** Ensure the Codex CLI is on your `PATH`.

## Related

- [AI Integrations overview](index.md)
- [VS Code](vscode-copilot.md) for agent mode inside your editor
- [MCP Server Config](mcp-server-config.md) for generic MCP client setup
