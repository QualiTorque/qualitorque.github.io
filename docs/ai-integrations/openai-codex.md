# Connect OpenAI Codex

<!-- REVIEW (2026-10-30): the AI Integrations panel in next still downloads Stack Automation-named files (stack-automation-mcp.json, stack-automation-mcp-codex.sh, stack-automation-skills.zip, stack-automation.vsix), registers the MCP server as `stack-automation`, exports SA_TOKEN, and links to stackautomation.cisco.com docs. Bug filed for Yaniv; this page uses the Torque names the fix is expected to produce. Re-check the panel before cutover. -->

**OpenAI Codex** is a terminal-based coding agent (available as a CLI and an IDE
extension). Connecting it to Torque registers the Torque MCP server as
a tool Codex can call, so you can query and drive your environments from the same terminal
where you write code.

Setup is a short install script plus one environment variable for your token.

## Prerequisites

- The **Codex CLI** installed and working (`codex --version`).
- A Torque **API token**
- A POSIX shell (`zsh` or `bash`).

## Install

1. In the **OpenAI Codex** panel, click **Download `torque-mcp-codex.sh`**.

2. Make it executable and run it from the download location:

   ```bash
   chmod +x torque-mcp-codex.sh && ./torque-mcp-codex.sh
   ```

   The script registers the `torque` MCP server with your Codex configuration.

3. Add your token to your shell profile (`~/.zshrc` or `~/.bashrc`) so Codex can
   authenticate:

   ```bash
   export TORQUE_TOKEN="<YOUR_TORQUE_TOKEN>"
   ```

   Reload your shell (`source ~/.zshrc`) or open a new terminal so the variable takes
   effect.

4. Verify the connection — you should see `torque` in the list:

   ```bash
   codex mcp list
   ```

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

Start a Codex session and ask for Torque actions in natural language; Codex
routes them to the `torque` MCP server.

**Verify the connection:**

> List my Torque spaces.

**Everyday examples:**

- "Launch the `terraform-vpc` blueprint in the `staging` space."
- "Show the outputs of my most recent environment."
- "Tear down the environment named `pr-1423-preview`."
- "Generate a Terraform module and then deploy it as a blueprint in Torque."

Combining Codex's code generation with Torque environment lets you go from
Infrastructure-as-Code to a running environment in a single conversation.

## Troubleshooting

- **`torque` not shown in `codex mcp list`.** Re-run the install script and
  confirm it completed without errors, then restart your terminal.
- **Auth errors / empty results.** Confirm `TORQUE_TOKEN` is exported in the current shell
  (`echo $TORQUE_TOKEN`) and that the value matches a valid, non-regenerated token.
- **Command not found.** Ensure the Codex CLI is on your `PATH`.

## Related

- [AI Integrations overview](index.md)
- [VS Code + Copilot](vscode-copilot.md) — agent mode inside your editor
- [MCP Server Config](mcp-server-config.md) — generic MCP client setup
