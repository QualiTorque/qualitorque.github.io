---
sidebar_position: 12
title: Policies
---

Torque role: Account admin

Torque policies are triggered as part of the environment deployment pipeline for specific environment lifecycle events (launch, extend environment for example) or during the deployment of environments (e.g. when evaluating a Terraform module included in the environment). Torque policies are powered by OPA (Open Policy Agent). For a step-by-step tutorial, see [Video: Torque policies (end-to-end)](#video-torque-policies-end-to-end-tutorial).



In this article:
- [How policies work](#how-policies-work)
- [Policy labels](#policy-labels)
- [Torque built-in policies](#torque-built-in-policies)
- [Custom policies](#custom-policies)
  - [Developing policies](#developing-your-own-policies)
    - [__Developing Torque policies__](#developing-torque-policies)
    - [__Inputs__](#inputs)
    - [__data__](#data)
    - [__Rego restricted functions__](#rego-restricted-functions)
- [Approval policies](#approval-policies)
- [How to set up a policy](#how-to-set-up-a-policy)
- [Duplicate a policy](#duplicate-a-policy)
- [Video: Torque policies (end-to-end tutorial)](#video-torque-policies-end-to-end-tutorial)


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

### Developing your own policies

#### __Developing Torque policies__

1. __Package__: for Torque to recognize and be able to execute your policy, you need to use the torque packages. The packages that are currently available are torque.environment and torque.terraform_plan. So your first line of the rego file which is the package name should be one of these packages.
2. __terraform_plan__ policies need at least one __deny__ rule to be valid.
For example, a __terraform_plan__ policy can look like this:

```jsx

package torque.terraform_plan

deny[reason] {
    all := resources["aws_iam"]
    count(all) > 0
    reason:= "Deployment contains IAM changes"
}

```

3. __environment__ policies need to return at least one __result__ object with a __decision__ element in it. The decision value can be one of "Denied", "Manual" or "Approved". In addition to the __decision__ element, you can optionally add a __reason__ element that explains the reason for the decision.
For example, an __environment__ policy can look like this:

```jsx

package torque.environment

result = { "decision": "Denied", "reason": "Environment duration exceeds 5 hours" } if {
   input.duration_minutes > 300

} 
```
 

#### __Inputs__

Based on the policy type (__environment__ or __terraform_plan__) Torque will provide *input* to OPA once the policy is injected.
For terraform_plan policies, the input is the terraform plan output. 
For __environment__ policies, the input is the following json object:

   ```jsx 
{
    "blueprint": {
        "name": "my-bp-name",
        "repository": "my-repo",
        "labels": [],
        "url": "https://github.com/...",
        "last_modified": "0001-01-01T00:00:00",
        "grains": [
            {
                "kind": "terraform",
                "name": "helloTF"
            }
        ]
    },
    "inputs": [
        {
            "name": "input_name",
            "type": "string",
            "value": "input_value",
            "sensitive": false, // true|false
            "description": null
        }
    ],
    "workflows": [
        {
            "name": "<workflow_name>",
            "schedules": [
                "* * * * *",
                "0 * * * *" //null in schedules means the schedule was disabled
            ],
            "inputs": {
                "<input_name_1>": "<input_value_1>",
                "<input_name_2>": "<input_value_2>"
            }
        }
    ],
    "timezone": "Asia/Jerusalem",
    "duration_minutes": 100, // in launch, the requested duration. In extend, the total duration before the extention
    "extend_duration_minutes": 100, // null if the action is "launch""blueprint_avg_hourly_cost": null,
    "space_name": "my_space",
    "user_space_role": null, // options are: "Space Admin""Space Developer""Space Member"
    "user_account_role": "Admin", // options are: "Admin", "Member" . If "Admin", user_space_role is null.
    "user_email": "me.l@mycorp.com",
    "entity_name": "my-env", //environment name
    "action_identifier": {
        "entity_type": "Environment",
        "entity_id": null,
        "action_type": "Launch" // options: "Launch", "Extend"
    }
}
```

Usage example:

```jsx title="A policy that denies environments with a requested duration over 3 hours:"
result = { "decision": "Denied", "reason": "Requested environment duration exceeds 180 minutes" } if {
   input.duration_minutes > 180
} 
```

#### __data__

The *data* object is the user-defined inputs that will also be passed to OPA for evaluation. The data object structure is defined by the policy writer, and the values are provided through the Torque UI.

For example, the policy can look like this:

```jsx title="A policy that denies environments with a requested duration that is longer than defined in the *data* object:"
result = { "decision": "Denied", "reason": "Environemtn duration exceeds the configured max duration" } if {
   input.duration_minutes > data.max_duration_minutes
} 
```

In this case, the policy expects a data object with one key: ```max_duration_minutes```.

In Torque, it would look like this:

![Locale Dropdown](/img/policy_data.png)

So you can enter whichever value you want as the maximum duration to be enforced on environments.

#### __Rego restricted functions__

Torque supports all rego built-in functions, except the following list:
- "http.send";
- "opa.runtime";
- "rego.parse_module"; 
- "time.now_ns";
- "trace";


For more details on how to develop policies, see [OPA documentation](https://www.openpolicyagent.org/docs/latest/) and [OPA playground](https://play.openpolicyagent.org/).

:::tip Notes
* For example custom policies, see [Quali Torque built-in OPA policy templates](https://github.com/QualiTorque/opa).
* Note that Torque points to a specific commit. Therefore, to introduce a new version of a custom policy, develop, test and pass the policy through your regular git flow. Once you are done, update the commit version in Torque by clicking "Update Rego".
:::

## Approval policies

Torque allows you to configure your policy with conditions that will trigger manual approval of an environment request by a set of designated approvers via multiple optional channels: email, Microsoft Teams or Slack channels, ServiceNow and more. 

For example, you could have an approval policy that sets the max_duration for environments at 3 hours, so attempting to launch an environment with a duration that is longer than 3 hours will require approval.

:::tip Notes
Approvers are defined in the __[Approval Channels](/governance/approval-channels)__ administration page.
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

## Video: Torque policies (end-to-end tutorial)

<video controls width="75%">
  <source src="/img/policies-full.mp4"/>
</video>
