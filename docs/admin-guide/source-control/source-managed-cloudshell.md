---
sidebar_position: 10
title: Self-Managed Quali CloudShell
---

Torque supports connecting Quali CloudShell as an asset repository. CloudShell blueprints are treated as assets in Torque and can be referenced using the 'CloudShell' grain type.

## Prerequisites

1. CloudShell user with at least "External Extended" permissions in the CloudShell Domains that you want to use.
2. A self-hosted Torque agent that can reach the Sandbox Api of your CloudShell instance.
3. CloudShell version 2021.2 and higher.

## Configuration

1. Register CloudShell as a Repository Provider via Torque REST API. If the API call is successful it will return a GUID representing the ID of the new repository provider. Save this ID for the next step.
  
```jsx
curl -L 'https://portal.qtorque.io/api/settings/repository_providers' \
-H 'Authorization: Bearer <TOKEN>' \
-H 'Content-Type: application/json' \
-d '{
    "name": "<PROVIDER_NAME>",
    "type": "CloudShell",
    "details": {        
        "base_url": "<CLOUDSHELL_SERVER_URL>:<SANDBOX_API_PORT>",
        "username": "<CLOUDSHELL_USER>",
        "password": "<CLOUDSHELL_PASSWORD>",
        "domain": "<CLOUDSHELL_DOMAIN>",
        "token_ttl": 300
    },
    "repos": []
}'
```

  * Replace __&lt;TOKEN&gt;__ with a valid Torque token with Torque Admin permissions
  * Replace __&lt;PROVIDER_NAME&gt;__ with a display name for the CloudShell instance. Example: "CloudShell_Dev"
  * Replace __&lt;CLOUDSHELL_SERVER_URL&gt;__ with the IP or DNS of your CloudShell instance. The CloudShell instance needs to be reachable from at least one of your self-hosted Torque agents. Torque will automatically select an agent for communicating with CloudShell
  * Replace __&lt;SANDBOX_API_PORT&gt;__ with the port of the CloudShell Sandbox API. The default port is 82
  * Replace __&lt;CLOUDSHELL_USER&gt;__ and __&lt;CLOUDSHELL_PASSWORD&gt;__ with a valid CloudShell username and password
  * Replace __&lt;CLOUDSHELL_DOMAIN&gt;__ with the CloudShell Domain that will be used as the default Domain. If needed you can later set a different Domain per each space
  * [Optional] You can also set a value for the "token_ttl", this property defines the expiration in seconds of the token received from the CloudShell Sandbox API . Default: 300 sec
  
2. Connect the repository as an asset repository to a space.

```jsx
curl -L 'https://portal.qtorque.io/api/spaces/<SPACE_NAME>/repositories/cloudshell' \
-H 'Authorization: Bearer <TOKEN>' \
-H 'Content-Type: application/json' \
-d '{
    "provider_id": "<PROVIDER_ID>", 
    "repository_url": "<CLOUDSHELL_SERVER_URL>:<SANDBOX_API_PORT>",
    "repository_name": "<REPOSITORY_NAME>",
    "branch": "<CLOUDSHELL_DOMAIN>"
}'
```

  * Replace __&lt;SPACE_NAME&gt;__ with the relevant Torque space 
  * Replace __&lt;TOKEN&gt;__ with a valid Torque token with Torque Admin permissions
  * Replace __&lt;PROVIDER_ID&gt;__ with the GUID received from the API in step #1 
  * Replace __&lt;CLOUDSHELL_SERVER_URL&gt;__ with the IP or DNS of your CloudShell instance.
  * Replace __&lt;SANDBOX_API_PORT>&gt;__ with the port of the CloudShell Sandbox API. The default port is 82
  * Replace __&lt;REPOSITORY_NAME&gt;__ with the name you would like to assign to this repository. This name will be used in Torque Blueprints to reference this repo
  * [Optional] Replace __&lt;CLOUDSHELL_DOMAIN&gt;__ with the domain name to use for this repository. If omitted, the default Domain name provided in step #1 will be used. 
    __Note__: The user provided in step #1 must have correct access to the provided Domain.

3. Discover suitable assets. For details, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets). 
