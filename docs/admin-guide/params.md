---
sidebar_position: 2
title: Parameters
---

The Torque parameter store is a repository of key-value pairs, which can be used and reused in blueprint YAMLs across all spaces in Torque. Two types of parameters are supported: 
* Account-level parameters are defined by the Torque account admin and can be used across all spaces. As such, these parameters are typically used to store data that applies to multiple spaces.
* Space-level parameters are defined by space admins and apply to specific spaces. 

## Creating Account-level parameters

Torque role: Account admin

:::tip __Important__
Modifying or deleting a parameter may cause blueprints that use the parameter to fail.
:::

__To add an account-level parameter:__

1. Open the __Administration__ and click __Parameters__.
2. Click __Add Parameter__ in the top right corner of the page.
3. Fill in the details:
   * __Parameter Name__: Display name for the parameter.
     * Parameter Name is case-insensitive.
     * Parameter Name may only contain URL-supported characters including letters, digits, underscores, dashes, etc.
   * __Is Sensitive?__: Determines whether this parameter value is sensitive and should be hidden from users
   * __Value__: Parameter’s value
   * __Description__: Informative description of the parameter or value it contains
4. Click __Apply__.
   The parameter is stored in the parameter store and can be used in your blueprint YAMLs in the format: ```{{.params.param-name}}```. For details, see [Parameters](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#parameters).

## Creating space-level parameters

Torque role: Space admin

__To add a space-level parameter:__

1. Open your space, and click __Parameters__ in the left pane. On this page, you can view all the account-level parameters that were defined by the account admin, and add space-specific parameters. 
2. Click the __Add Parameter__ button to add a new space-level parameter.
3. Fill in the details:
   * __Parameter Name__: Display name for the parameter.
     * Parameter Name is case-insensitive.
     * Parameter Name may only contain URL-supported characters including letters, digits, underscores, dashes, etc.
   * __Is Sensitive?__: Determines whether this parameter value is sensitive and should be hidden from users
   * __Value__: Parameter’s value
   * __Description__: Informative description of the parameter or value it contains
4. Click __Apply__.
   The parameter is stored in the parameter store and can be used in your blueprint YAMLs in the format: ```{{.params.param-name}}```. For details, see [Parameters](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#parameters).

:::tip 
A space-level parameter will take precedence over an account-level parameter with the same name
:::

## SYSTEM Parameters

SYSTEM parameters provide account-wide control and configuration from the parameter store. 

Below is a list of supported SYSTEM parameters:

| Parameter Name                     | Parameter Values                                      | Description                                                                                     |
|------------------------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| SYSTEM_DISABLE_LOGS_SHIPPING       | `true`/`false`                                           | Disables logs shipping in Runner                                                        |
| SYSTEM_ENVIRONMENT_AUTO_UPDATE     | `true`/`false`                                           | Account or space-level parameter. Parameter flag for "force" update on any grain code-changes detection for all of the environments in the space. Auto updates the grain when changes are found in the sources defined in the workspace-directories. It should take up to 3 minutes to see the changes and initiate the automatic update. |
| SYSTEM_TF_FORCE_PROVIDERS_UPGRADE  | `true`/`false`                                           | `true` ⇒ Terraform init will run with `--upgrade` flag                                         |
| SYSTEM_ACTIONS_OPTIONAL_AWS_ROLE_ARN | `Role ARN`                                           | ARN of target role to use for Ansible built-in actions in this space                           |
| SYSTEM_IMAGE_PULL_SECRET_NAME      | `string`                                               | Name of secret that needs to be used to pull images                                            |
| SYSTEM_HELM_RUNNER_IMAGE           | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for Helm grain runner                                               |
| SYSTEM_K8S_RUNNER_IMAGE            | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for K8s grain runner                                                |
| SYSTEM_SHELL_RUNNER_IMAGE          | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for Shell grain runner                                              |
| SYSTEM_CFN_RUNNER_IMAGE            | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for CloudFormation grain runner                                     |
| SYSTEM_ANSIBLE_RUNNER_IMAGE        | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for Ansible grain runner                                            |
| SYSTEM_ANSIBLE_ACTION_RUNNER_IMAGE | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for Ansible built-in Actions runner                                 |
| SYSTEM_ARGOCD_RUNNER_IMAGE         | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for ArgoCD grain runner                                             |
| SYSTEM_TERRAFORM_RUNNER_IMAGE      | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for Terraform grain runner                                           |
| SYSTEM_TERRAGRUNT_RUNNER_IMAGE     | `<image_registry_address>/<image_name>:<image_tag>`  | Non-default image location for Terragrunt grain runner                                         |


