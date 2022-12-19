---
sidebar_position: 36
title: Self-managed Source Control
---

Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository. 

## Prerequisites

* GitLab access token with no expiration date and __read.api__ and __read.repository__ permission scopes.
  > ![Locale Dropdown](/img/gitlab-reqs.png)

## Configuration

1. Create Provider via Torque REST API.

   Post: http://portal.qtorque.io/api/settings/repository_providers

  ```{
  "name":"gitlab-1,
  "type":"gitLabEnterprise",
  "details": {
      "token":"NzcmESA2NjQ4MjUzOiCO87F2eTXL9TbHeWpeZO3p3GS9",
      "base_url": http://private.mygitlab.org/,
  },
  "repos": []
}
  ```

   * __name__: Display name of repository
   * __type__: Value representing the type of repository provider (__gitlabEnterprise__ in this case)
   * __token__: Private access token (see [Prerequisites](#prerequisites))
   * __base_url__: __Schema://Host:Port/ of the GitLab server (include port if required)
   * __username__: Owner of the token username. (Not required for GitLab)
  
2. Connect the repository as an asset repository to the space and discover the suitable assets. For details, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets). 



