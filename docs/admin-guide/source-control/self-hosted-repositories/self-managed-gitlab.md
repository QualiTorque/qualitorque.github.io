---
sidebar_position: 3
title: Self-Managed GitLab
---

Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository. 
There are 2 options to connect your gitlab repositories to Torque:
1. With a single repository provider 
2. With a separate token for each repository

## Prerequisites

For a single repository provider you will need:

* GitLab access token with no expiration date and __read.api__ and __read.repository__ permission scopes.
  > ![Locale Dropdown](/img/gitlab-reqs.png)

For separate token for each repository, you will need a token for each repository which you connect with read access.   

## Configuration

For a single provider only:

1. Create Provider via Torque REST API.

   POST http://portal.qtorque.io/api/settings/repository_providers

  ```jsx
  {
    "name":"gitlab-1",
    "type":"gitLabEnterprise",
    "details": {
      "token":"NzcmESA2NjQ4MjU*********XL9TbHeWpeZO3p3GS9",
      "base_url": "http://private.mygitlab.org/"
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
    "name":"gitlab-1",  
    "type":"gitLabEnterprise",
    "details": {    
      "token":"NzcmESA2NjQ4MjU*********XL9TbHeWpeZO3p3GS9",    
      "base_url": "http://private.mygitlab.org/" 
    }, 
    "repos": [] }'

  ```

   * __name__: Display name of the provider
   * __type__: Value representing the type of repository provider (__gitlabEnterprise__ in this case)
   * __token__: Private access token (see [Prerequisites](#prerequisites))
   * __base_url__: __Schema://Host:Port/ of the GitLab server (include port if required)

For both methods: 

2. Connect the repository as an asset repository to the space and discover the suitable assets. Make sure to check the "self-managed" checkbox.
  The repository's URL must be in the base URL of the configured provider.  
  For details regarding asset discovery, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets). 
3. If you didn't connect a provider, copy the repository token to the "token" field.   



