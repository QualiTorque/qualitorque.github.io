---
sidebar_position: 9
title: GitHub Source Control
---

Torque supports connecting asset/blueprint repositories on GitHub, GitLab and BitBucket out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see [Connect Your Asset Repository](/getting-started/Connect%20your%20asset%20repository). You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.

For illustration purposes, we will use GitHub.

## Ensure your account is added to the GitHub organization you're connecting

1. Go to [https://github.com/orgs/{YOUR_ORG}/people](https://github.com/orgs/{YOUR_ORG}/people).
2. Make sure your user is listed in the organization. If not, make sure the user is added as a member with global read access.

## Ensure your organization has granted access to Torque

When connecting a repository, Torque installs an OAuth app called __Torque Control Plane__ on the organization. This app provides Torque with the necessary permissions to the organization's repositories. If Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the [GitHub Applications](https://github.com/settings/applications) page. 

  1. Go to [GitHub Applications](https://github.com/settings/applications).
  2. Revoke any existing access to the __Quali Torque__ app.
    > ![Locale Dropdown](/img/revoke-access.png)
  3. In Torque, go to the space's __Settings > Repositories__ area and connect the repository.
  4. Authorize the organization. 
  > ![Locale Dropdown](/img/torque-access.png)
  
  At this point, the Torque app is installed in the organization without permissions. 
  5. Enter your account's password and confirm the action. 
     * If you're not an administrator in the organization, ask the administrator to grant access to the app in the [GitHub Applications](https://github.com/settings/applications) page. 
     * If you already authorized the __Torque Control Plane__ app without also granting access to an organization with repositories you want to connect, click the app's name in the GitHub Applications page, and in the __Organization access__ section, click the organization's __Request__ button.
  > ![Locale Dropdown](/img/request-org-access.png)
  
  The Torque app is granted the necessary permissions and the repository is connected.
  6. Return to Torque and continue setting up the connection.


