---
sidebar_position: 4
title: Connect via MCP Server Config
---

# Connect via MCP Server Config

Use this option to connect **any MCP-compatible client** to Torque, including **Claude Code**, **Cursor**, **Windsurf**, and other tools that support MCP servers. It is the most flexible path: one server definition that you either apply with a single command or merge into your client's configuration.

## Prerequisites

- An MCP-compatible client installed.
- A Torque **API key**, pasted into the AI Integrations panel. See [AI Integrations](index.md#get-your-api-key-into-the-panel).

## Install

1. Open the **MCP Server Config** panel under **Skills & MCP** in the AI Integrations panel and click its download button. The JSON file contains the ready-to-use server definition, pre-filled with the MCP endpoint and your key.

2. **For Claude Code (CLI)**, add the server with one command, using the `url` from the downloaded file:

   ```bash
   claude mcp add --transport http torque <MCP_SERVER_URL> \
     -H "Authorization: Bearer <YOUR_TORQUE_API_KEY>"
   ```

   **For the Claude Code config file (`~/.claude.json`), Cursor, Windsurf, or other clients**, merge the downloaded JSON into the `mcpServers` section of your client config. It looks like this:

   ```json
   {
     "mcpServers": {
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

   Use the exact `url` from the downloaded file.

3. Verify the connection in your MCP client by asking: *"List my Torque spaces."*

When you are done, tick **I've completed the setup — mark as connected** in the panel.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the AI Integrations panel open and MCP Server Config expanded — the download button for the MCP server configuration -->

## Operate

Once the server is registered, your client can call Torque tools from any chat.

**Verify the connection:**

> List my Torque spaces.

**Everyday examples:**

- "Launch the `terraform-vpc` blueprint in the `staging` space."
- "List my running environments and their costs."
- "Show why environment `d-8842` failed."
- "Extend the environment `pr-1423-preview` by 4 hours."

## Client notes

- **Claude Code (CLI).** After `claude mcp add`, run `claude mcp list` to confirm the server is registered.
- **Cursor and Windsurf.** Add the block to the client's MCP settings file, then reload the window so the server is picked up.
- **Other clients.** Any client that reads an `mcpServers` map and supports the `http` transport with bearer authentication works with the same block.

## Troubleshooting

- **Server not listed.** Confirm the JSON was merged into the correct `mcpServers` object (not nested elsewhere) and restart the client.
- **Unauthorized.** Check that the `Authorization` header is `Bearer <key>` with a valid, current key.
- **Endpoint unreachable.** Verify the `url` matches the one in the downloaded file and that your network allows outbound HTTPS to it.

## Related

- [AI Integrations overview](index.md)
- [Claude Cowork](claude-cowork.md)
- [Skills Pack](skills-pack.md)
