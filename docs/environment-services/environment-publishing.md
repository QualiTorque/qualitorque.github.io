---
sidebar_position: 17
title: Environment Publishing
---

## Overview

The Environment Publishing feature provides infrastructure teams with the capability to share environments across projects or spaces that possess distinct lifecycles. This functionality facilitates the seamless dissemination of environments for consumption by other environments, thereby optimizing resource utilization and enhancing dependency management.

## Concept

Environment Publishing establishes a mechanism to designate an environment as "published," thereby rendering it accessible for reuse across different spaces or within the same space. Published environments can function as foundational inputs for the deployment of other environments, thus promoting a cohesive integration among interdependent environments.

### Key Concepts
- **Lifecycle Management**: While published environments retain independent lifecycle governance, they remain accessible as inputs for use in other environments, supporting a structured approach to lifecycle dependencies.
- **Publishing State**: Environments can be toggled between "published" and "unpublished" states, indicating their availability for cross-space consumption.
- **Visibility Control**: The scope of visibility for a published environment can be explicitly defined to include either all spaces or a subset of specified spaces.
- **Blueprint Design**: Blueprints may declare references to published environments, facilitating the integration of shared resources during environment instantiation.
- **Environment Reuse**: Published environments are referenceable and reusable across multiple environments, thereby mitigating redundancy and reducing complexities in dependency management.

## Usage

### Publishing an Environment

To publish an environment:

1. Utilize the API or the user interface (UI) to designate an environment as published.
2. Configure the accessibility scope:
   - **All Spaces**: Grants access to the environment across all spaces within the account.
   - **Specific Spaces**: Restricts access solely to the designated spaces.
3. Optionally, rename the environment to ensure uniqueness across all published environments. While uniqueness is not strictly mandated, it is considered a best practice to avoid naming collisions.
4. Ensure that the environment is in either the "Active" or "Updating" state before publishing, as only environments in these states can be published.

:::info
When an environment is published, it is automatically available within its source space. Additional spaces may be specified as required.
:::

import pic1 from '/img/env-pub-usage.png';

> <img src={pic1} alt="env-pub-usage" style={{width: 400}} />

### Unpublishing an Environment

- Utilize the dedicated API or UI to unpublish an environment.
- If the environment maintains active connections to other environments, a warning will be issued; however, the unpublishing operation will still proceed.
- Environments are automatically unpublished upon their termination.

## Referencing Published Environments

Published environments may be employed as inputs within blueprints through the definition of environment references in the blueprint YAML. Such references allow the consuming environment to dynamically establish links to the published environment.

Optionally, the environment reference may include label-based filters to restrict selection to environments meeting specific criteria (e.g., specifying a "cluster" label to select a Kubernetes cluster).

import pic2 from '/img/env-pub-blueprint.png';

> <img src={pic2} alt="env-pub-blueprint" style={{width: 700}} />

### Blueprint example
```yaml
spec_version: 2

description: |
  'Provisions a web server on EC2 instance using provided inputs, such as operating system, application version, etc. 
  The instance serves dynamic content reflecting the specified inputs.'

env_references:
  VPC:
    labels-selector: 'VPC'

inputs:
  Region:
    type: 'string'
    allowed-values:
      - 'eu-west-1'
      - 'eu-central-1'
      - 'us-east-1'
    description: 'The name of the AWS Region to use'
  VM Name:
    type: 'string'
    default: 'Webapp'
    pattern: '^[a-zA-Z0-9._-]{1,256}$'
    validation-description: 'VM name must have between 1 and 256 alphanumeric characters, hypens, underscores and dashes only.'
    description: 'The name of the underlying EC2 instance in AWS'
  Size:
    type: 'parameter'
    parameter-name: 'size'
    description: 'The EC2 instance type'
  OS:
    type: 'string'
    allowed-values:
      - 'Windows Server 2016'
      - 'RHEL 7'
      - 'RHEL 8'
      - 'RHEL 9'
      - 'Ubuntu 20.04'
      - 'Ubuntu 22.04'
    description: 'The type of operating system and corresponding AMI to use in the EC2 instance'
  Version:
    depends-on: 'OS'
    type: 'input-source'
    source-name: 's3'
    overrides:
      - json_path: '$.{{ .inputs.OS | split: " " | first % }}[*]'
    description: 'Application Version'
outputs:
  Address:
    value: 'https://{{ .grains.webapp.outputs.instance_public_ip}}'
    quick: true
  VPC_ID:
    value: '{{ .env_references.VPC.outputs.vpc_id }}'

grains:
  webapp:
    kind: 'terraform'
    spec:
      source:
        store: 'infra-portal'
        path: 'assets/terraform/aws/webapp'
      agent:
        name: 'demo-prod'
        service-account: 'app-sa'
      inputs:
        - vpc: '{{ .env_references.VPC.outputs.vpc_id }}'
        - region: '{{ .inputs.Region }}'
        - size: '{{ .inputs.Size }}'
        - name: '{{ .inputs.["VM Name"] }}'
        - os: '{{ .inputs.OS }}'
        - app_version: '{{ .inputs.Version }}'
        - env_id: '{{ envId | downcase }}'
      outputs:
        - 'instance_public_ip'
```

## API Support

A range of APIs is available to support the following operations:

- Retrieval, publication, unpublication, and update of publishing details.
- Validation of environment name uniqueness among published environments.
- Filtering of environments based on their publishing state.
- Retrieval of outputs from published environments for reference.

## System Label for Published State

The **Published** property is available as a system label, facilitating the filtering and tracking of published environments.

## Handling Visibility in Spaces

Environments are implicitly published within their originating space, with additional spaces optionally specified for broader visibility.

UI and API-based validations mitigate the risks of publishing conflicts and issue warnings in the event of potential naming collisions.

## Best Practices

- **Unique Naming**: Assign unique names to published environments to prevent conflicts and enhance clarity in resource identification.
- **Use Labels**: Utilize labels to categorize environments effectively, thereby enabling dynamic selection during blueprint execution.
- **Regular Cleanup**: Unpublish environments that are no longer active or required to minimize clutter and maintain efficient resource management.

## API Reference

- **Publish Environment**: `POST /environments/{id}/publish`
- **Unpublish Environment**: `POST /environments/{id}/unpublish`
- **Get Published Environments**: `GET /environments?filter=isPublished:true`
- **Update Publishing Info**: `PATCH /environments/{id}/publish-info`
- **Retrieve Outputs**: `GET /environments/{id}/outputs`
