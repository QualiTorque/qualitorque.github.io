---
sidebar_position: 1
title: GitHub Source Control
---

Torque supports connecting asset/blueprint repositories on GitHub out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository using a PAT (Personal Access Token), as explained below. For details about adding your assets to Torque, see [Discover Your Assets](/getting-started/asset-discovery). You should be able to sign in with an account on any one of these online services and immediately get going by connecting asset repositories and launching environments.

**In this article:**
- [Ensure your account is added to the GitHub organization you're connecting](#ensure-your-account-is-added-to-the-github-organization-youre-connecting)
- [What is a Personal Access Token?](#what-is-a-personal-access-token)
- [Connect a repository using a Personal Access Token](#connect-a-repository-using-a-personal-access-token)
- [Token expiration and revocation](#token-expiration-and-revocation)
<!-- - [Ensure your organization has granted access to Torque](#ensure-your-organization-has-granted-access-to-torque) -->

**This article refers to the SAAS version of GitHub (github.com). If you're using self hosted GitHub Enterprise, check [here](/admin-guide/source-control/Self%20Hosted%20Repositories/overview)**.


## Ensure your account is added to the GitHub organization you're connecting

1. Go to [https://github.com/orgs/\{YOUR_ORG\}/people](https://github.com/orgs/\{YOUR_ORG\}/people).
2. Make sure your user is listed in the organization. If not, make sure the user is added as a member with global read access.

## What is a Personal Access Token?

A Personal Access Token (PAT) is a credential you generate on GitHub that Torque uses in place of a password to authenticate and access your repositories. GitHub offers two types of PATs:

- __Classic tokens__ — grant access based on broad, predefined scopes (e.g., `repo`, `read:org`).
- __Fine-grained tokens__ — grant access to specific repositories with more granular permissions, offering tighter control over what Torque can access.

Either type works with Torque. For instructions on generating one, see GitHub's [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) documentation.

## Connect a repository using a Personal Access Token

Torque connects to GitHub using a Personal Access Token (PAT). Both classic and fine-grained tokens are supported.

1. In Torque, go to the space's __Settings > Repositories__ area and click __Add a Repository__.
   > ![Add a Repository](/img/torque-repository.png)
2. Select __GitHub__ as the repository provider.
   > ![Select a repository provider](/img/torque-pat-github-provider.png)
3. Fill in the __Repository URL__, __Repository Name__, and optionally a __Branch__.
4. Under __Credentials__, start typing to create a new credential set, or select an existing one from the list.
   > ![Connection details and credentials](/img/torque-pat-github-connection.png)
5. Give the new credential set a name, then enter your __Personal Access Token__ in the field that appears.
   > ![Enter your Personal Access Token](/img/torque-pat-github-token.png)
   :::info
   Click the __Auto-Track Environment Files__ option if you want to automatically discover and track Environment Files from this repository.
   :::
6. Leave __Self Managed Repository__ unchecked — that option is only for self-hosted GitHub Enterprise. See [Self-Managed GitHub](/admin-guide/source-control/Self%20Hosted%20Repositories/self-managed-github) for that flow.
7. Click __Connect__.

<!-- :::info TODO
Document the required token scopes/permissions for classic vs. fine-grained PATs once confirmed.
::: -->

<!-- ## Ensure your organization has granted access to Torque

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
  6. Return to Torque and continue setting up the connection. -->

## Token expiration and revocation

GitHub imposes a limit on the number of tokens an application can create for the same user, and will revoke the oldest one once this limit is passed. For details, see [GitHub token expiration and revocation policy](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation#token-revoked-due-to-excess-of-tokens-for-an-oauth-app-with-the-same-scope).
