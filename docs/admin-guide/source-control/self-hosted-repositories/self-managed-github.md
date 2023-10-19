---
sidebar_position: 37
title: Self-Managed GitHub
---

Torque supports connecting asset/blueprint repositories residing in a self-managed GitHub repository. 

## Prerequisites

* GitHub personal access token with read access for repositories in the server

## Configuration

1. Create Provider via Torque REST API.

   
  ```jsx
  POST http://portal.qtorque.io/api/settings/repository_providers
  {
    "name":"github-enterprise", 
    "type":"githubEnterprise",
    "details": {
        "token":"<Personal access token>",
        "base_url": "https://my-github-enterprise.my-org.net/"
    },
    "repos": []
  }
  ```

  Or with a curl command:
  ```bash
  curl --request POST \   --url https://portal.qtorque.io/api/settings/repository_providers \  
  --header 'Authorization: Bearer <Torque API toke>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
    "name":"github-enterprise",  
    "type":"githubEnterprise",
    "details": {    
      "token":"<Personal access token>",    
      "base_url": "https://github-enterprise.qualilabs.net/"  
    }, 
    "repos": [] }'

  ```

   * __name__: Display name of the provider
   * __type__: Value representing the type of repository provider (__githubEnterprise__ in this case)
   * __token__: The personal access token (see [Prerequisites](#prerequisites))
   * __base_url__: __Schema://Host:Port/ of the GitHub server (include port if required)
  
2. Connect the repository as an asset repository to the space and discover the suitable assets. Make sure to check the "self-managed" checkbox.
  The repository's URL must be in the base URL of the configured provider.  
  For details regarding asset discovery, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets). 

