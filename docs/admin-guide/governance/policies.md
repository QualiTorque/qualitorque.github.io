---
sidebar_position: 9
title: Policies
---

Torque role: Account admin

Torque policies are triggered as part of the environment deployment pipeline for specific environment lifecycle events (launch, extend environment for example) or during the deployment of environments (e.g. when evaluating a Terraform module included in the environment). Torque policies are powered by OPA (Open Policy Agent). 

In this article:
* [How policies work](#how-policies-work)
* [Policy labels](#policy-labels)
* [Torque built-in policies](#torque-built-in-policies)
* [Custom policies](#custom-policies)
* [Approval policies](#approval-policies)
* [How to set up a policy](#how-to-set-up-a-policy)
* [Duplicate a policy](#duplicate-a-policy)

## How policies work
Policies are based on two basic elements: trigger and context. Trigger determines when the policy is activated, and context is the data the policy needs to get ("input" in OPA terms). The context is provided automatically by Torque. Users can also define user data ("data" in OPA terms) in the Torque policy. The context (or input) is the actual environment data the end user is trying to deploy, and the user data sets values to the limitations imposed by the admin who set up the policy.

Torque supports two types of triggers, which are defined by the package being used in the policy's .rego file:
-	Environment lifecycle policies (triggered on launch/extend). To define an environment lifecycle policy, the ".rego" file must use the package name __torque.environment__
-	Terraform evaluation policies (triggered on terraform plan for terraform grains). To define a terraform plan evaluation policy, the ".rego" file must use the package name __torque.terraform_plan__

:::tip Note
Policies are applied on the space or account level, as explained in [How to set up a policy](#how-to-set-up-a-policy).
:::

## Policy labels
There are 4 labels that will be automatically applied to policies in Torque, in the __Policies__ administration page:

* __Built-in__ label is assigned to policies that come out of the box with Torque. For details about the policies, see [https://github.com/QualiTorque/opa](https://github.com/QualiTorque/opa)
* __Terraform__ label is assigned to policies that evaluate the Terraform plan on the environment's Terraform grain. These policies are triggered when Torque deploys the Terraform grain's plan during the environment's initialization
* __Environment__ label is assigned to policies that are triggered when the environment is launched or extended
* __Approval__ label is assigned to policies that could require approval to launch the environment

> ![Locale Dropdown](/img/policy-labels.png)

## Torque built-in policies 
Torque provides many built-in policies, both for environment lifecycle and Terraform plan evaluation, which represent some of the more common use cases when deploying environments. Some examples include:
* Allow only specific AWS instance types to be used
* Allow deploying only to specific Azure locations
* Allow only environments with expected cost of < 10$

## Custom policies

There may come a time when you will need to go beyond the common use case and write your own policies and rules. This is possible using custom policies. Custom policies are .rego files that reside in your git repository. When you add the policy repository to Torque, Torque automatically discovers the repository and identifies its .rego files as policies, allowing you to choose which policies to import into Torque. Same as with built-in policies, you select where to apply the policy (on the entire account or specific teams), and configure the relevant data. 

For details on how to develop policies, see [OPA documentation](https://www.openpolicyagent.org/docs/latest/) and [OPA playground](https://play.openpolicyagent.org/).

:::tip Notes
* For example custom policies, see [Quali Torque built-in OPA policy templates](https://github.com/QualiTorque/opa).
* Note that Torque points to a specific commit. Therefore, to introduce a new version of a custom policy, develop, test and pass the policy through your regular git flow. Once you are done, update the commit version in Torque.
:::

## Approval policies

Torque allows you to configure your policy with conditions that will trigger manual approval of an environment request by a set of designated approvers via multiple optional channels: email, Microsoft Teams or Slack channels, ServiceNow and more. 

For example, you could have an approval policy that sets the max_duration for environments at 3 hours, so attempting to launch an environment with a duration that is longer than 3 hours will require approval.

:::tip Notes
Approvers are defined in the __[Approval Channels](/admin-guide/governance/approval-channels)__ administration page.
:::

## How to set up a policy

1. Go to __Administration > Policy Repositories__ and click __Add a Repository__.
2. Select the git repository, specify the repository's URL, and give it a name.
   > ![Locale Dropdown](/img/repository-information.png)
3. Click __Connect__. Provide authorization credentials if the repository is private.

   A green checkmark next to the repository's URL indicates that the repository has been added successfully.
      > ![Locale Dropdown](/img/repository-connection.png)
4. Click __Discover Policies__.
5. Select the policies you want to import into Torque, and click __Generate Policies__.
   > ![Locale Dropdown](/img/policy-import.png)

    The policies are displayed in the __Policies__ page.
   > ![Locale Dropdown](/img/new-custom-policies.png)    
6. Click a generated policy and edit the details.

   a. Optionally change the __Name__, and provide a __Description__.

   b. In __Spaces__, set the scope of the policy - __All spaces__ or specific ones.

   c. In __Data__, set the policy's limitations.
7. Click __Save__.
8. __Enable__ the policy.
   > ![Locale Dropdown](/img/enable-custom-policy.png)    

## Duplicate a policy

You can also duplicate any built-in or custom policy to create a similar version with different user data. For example, You could have a policy that allows the use of cloud region "us-east-1" for the US team, and another one for the EU team that allows region "eu-west-1".
> ![Locale Dropdown](/img/duplicate-policy.png)
