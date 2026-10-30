# Connect via MCP Server Config

<!-- REVIEW (2026-10-30): the AI Integrations panel in next still downloads Stack Automation-named files (stack-automation-mcp.json, stack-automation-mcp-codex.sh, stack-automation-skills.zip, stack-automation.vsix), registers the MCP server as `stack-automation`, exports SA_TOKEN, and links to stackautomation.cisco.com docs. Bug filed for Yaniv; this page uses the Torque names the fix is expected to produce. Re-check the panel before cutover. -->

Use this option to connect **any MCP-compatible client** to Torque — including
**Claude Code (CLI)**, the **Claude Code config file**, **Cursor**, **Windsurf**, and other
tools that support MCP servers. It's the most flexible path: one server definition that you
either apply with a single command or merge into your client's config.

## Prerequisites

- An MCP-compatible client installed.
- A Torque **API token**

## Install

1. In the **MCP Server Config** panel, click **Download `torque-mcp.json`**. This
   file contains the ready-to-use server definition.

2. **For Claude Code (CLI)** — add the server with one command (replace the token):

   ```bash
   claude mcp add --transport http torque https://portal.qtorque.io/mcp \
     -H "Authorization: Bearer <YOUR_TORQUE_TOKEN>"
   ```

   **For the Claude Code config file (`~/.claude.json`), Cursor, Windsurf, or other
   clients** — merge the downloaded JSON into the `mcpServers` section of your client
   config. It looks like this:

   ```json
   {
     "mcpServers": {
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

   > Use the exact `url` from your **MCP Server Config** panel; the MCP endpoint can differ
   > per environment.

3. Verify the connection in your MCP client by asking: *"List my Torque spaces."*

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

Once the server is registered, your client can call Torque tools from any chat.

**Verify the connection:**

> List my Torque spaces.

**Everyday examples:**

- "Launch the `terraform-vpc` blueprint in the `staging` space."
- "List my running environments and their costs."
- "Show why environment `d-8842` failed."
- "Extend the lease on environment `pr-1423-preview` by 4 hours."

## Client notes

- **Claude Code (CLI):** after `claude mcp add`, run `claude mcp list` to confirm
  `torque` is registered.
- **Cursor / Windsurf:** add the block to the client's MCP settings file, then reload the
  window so the server is picked up.
- **Other clients:** any client that reads an `mcpServers` map and supports the `http`
  transport with bearer auth will work with the same block.

## Troubleshooting

- **Server not listed.** Confirm the JSON was merged into the correct `mcpServers` object
  (not nested elsewhere) and restart the client.
- **Unauthorized.** Check the `Authorization` header is `Bearer <token>` with a valid,
  current token.
- **Endpoint unreachable.** Verify the `url` matches the one shown in your panel and that
  your network allows outbound HTTPS to it.

## Related

- [AI Integrations overview](index.md)
- [Claude Cowork](claude-cowork.md)
- [Skills Pack](skills-pack.md)
