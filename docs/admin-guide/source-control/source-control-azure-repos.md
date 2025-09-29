---
sidebar_position: 3
title: Azure Repos Source Control
---

Torque supports connecting asset/blueprint repositories on Azure Repos out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see [Discover Your Assets](/getting-started/asset-discovery). You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.

**This article refers to the SAAS version of Azure Repos. If you're using Azure Repos behind your firewall, check [here](/admin-guide/source-control/Self%20Hosted%20Repositories/overview)**.


When connecting a repository, Torque’s OAuth app (**QTorque Portal**) asks for permissions to access repositories on your organization. 
If Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the Azure Applications page (https://dev.azure.com/{you_org}/_usersSettings/authorizations).

1. In Torque, go to the space's Settings > Repositories area and connect the repository. Note that the repository URL should be in the correct format: https://dev.azure.com/{org_name}/{project_name}/_git/{repo_name}

2. Authorize the organization.

    > ![Locale Dropdown](/img/azure-repo-grant.png)

3.	Go to Azure Applications (see above) and make sure the Torque application has been authorized.

    > ![Locale Dropdown](/img/azure-grant-2.png)
 
At this point, the Torque app was given the necessary permissions to the organization.
4.	Return to Torque and continue setting up the connection.

#### Troubleshooting
In some cases, repository access might be restricted or limited due to several seasons. Following the below steps and retry to onboard your repository once you apply the changes.

1. Make sure your Azure DevOps instance is open for accepting external communication - make sure no security/networking rule is applied between Torque and Azure DevOps.
2. In the Azure DevOps security organization settings - make sure that "Third-party application access via OAuth" is enabled
    > ![Troubleshooting](/img/ado_access.png)

3. In the Azure DevOps security organization settings - make sure that "IP conditional access" is turned off.
    > ![Troubleshooting](/img/ado_access2.png)