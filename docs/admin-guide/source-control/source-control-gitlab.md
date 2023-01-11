---
sidebar_position: 33
title: GitLab Source Control
---

Torque supports connecting asset/blueprint repositories on GitLab out of the box. To connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets). You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.

## Ensure the Torque application was added to the GitLab organization you're connecting

1. Go to [https://gitlab.com/-/profile/applications](https://gitlab.com/-/profile/applications).
2. Scroll down to the __Authorized application__ section and make sure __Qtorque.io-Social__ has the __openid profile email read_user__ scope.

## Ensure your organization has granted access to Torque

When connecting a repository, Torque installs an OAuth app called __Qtorque__ on the organization. This app provides Torque with the necessary permissions to the organization's repositories. If Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the [GitLab Applications](https://gitlab.com/-/profile/applications) page. 

  1. In Torque, go to the space's __Settings > Repositories__ area and connect the repository.
  2. Authorize the organization. 
  > ![Locale Dropdown](/img/gitlab-1.png)
  3. Go to [GitLab Applications](https://gitlab.com/-/profile/applications) and make sure the Torque application has been authorized.
  > ![Locale Dropdown](/img/gitlab-2.png) 
    
    At this point, the Torque app is installed in the organization with the necessary permissions. 

     * If you're not an administrator in the organization, ask the administrator to grant access to the app in the [GitLab Applications](https://gitlab.com/-/profile/applications) page. 
     * If you already authorized the __Qtorque__ app without also granting access to a group with repositories you want to connect, make sure your GitLab user is added to that group (__Guest__ role is enough).
  
  6. Return to Torque and continue setting up the connection.


