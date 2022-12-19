---
sidebar_position: 21
title: Credentials
---

The Torque __Credentials__ store allows your CloudFormation and Terraform grains to securely access your cloud authentication details from a single location. Credentials are similar to [Parameters](/admin-guide/params), but unlike parameters which are single-value parameters, credentials are classes that contain multiple parameters. Credentials can hold public key certificates, secrets, tokens, username and password combinations, and more. Torque credentials are supported on AWS and Azure.

__High-level process:__
1. Add a credential in Torque.
2. Reference the credential in the grain.


__To add a credential:__

1. Go to __Administration > Credentials__.
2. Click __Add Credentials__.
  > ![Locale Dropdown](/img/credentials.png)
3. Select the cloud provider (AWS / Azure).
4. Enter the provider's authentication details.
   * For an AWS Role Arn credential type, make sure you have a Role Arn that allows Torque access. 
5. In the __Credential details__ section, give the credential a name and optionally a description.
6. Click __Apply__.
7. Reference the credential in the grain's ```authentication``` section.
  > ![Locale Dropdown](/img/credential-reference.png)
