---
sidebar_position: 4
title: BitBucket Source Control
---

<ProductName /> supports connecting asset/blueprint repositories on BitBucket out of the box. However, to connect a repository, you must have access to the repository and grant <ProductName /> permission to the repository's organization, as explained below. For details about connecting a repository, see [Discover Your Assets](/getting-started/asset-discovery). You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.

**This article refers to the SAAS version of BitBucket. If you're using self-hosted BitBucket, check [here](/admin-guide/source-control/Self%20Hosted%20Repositories/overview)**.

When connecting a repository, <ProductName />’s OAuth app (QTorque Portal) asks for permissions to access repositories on your organization. 
If <ProductName /> doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the [Bitbucket Applications](https://bitbucket.org/account/settings/app-authorizations/) page.

1.	In <ProductName />, go to the space's Settings > Repositories area and connect the repository.
2.	Authorize the organization Quali <ProductName />

    > ![Locale Dropdown](/img/bitbucket-repo-grant.png)

3.	Go to Azure Applications (see above) and make sure the <ProductName /> application has been authorized.

    > ![Locale Dropdown](/img/bitbucket-repo-grant-2.png)
 
At this point, the <ProductName /> app was given the necessary permissions to the organization.

4.	Return to <ProductName /> and continue setting up the connection.
