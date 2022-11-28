---
sidebar_position: 7
title: Using the Quali-hosted agent
---

The Quali-hosted agent is a built-in agent in the system that can be used without any prerequisites. 

## Limitations
It can provision environments with the following limitations:
- Only a single environment can be provisioned using the Quali-hosted agent
- The environment must have only a single asset (grain), which is a terraform module
- At this point, the Quali-hosted agent can only provision environments in __AWS__ using __terraform modules__ by using the terraform __AWS provider__. Support for other providers as well as other deployment technologies (such as helm) and clouds will be added gradually.
- To provision environments using other terraform providers, please install your own hosted agent, which supports the suitable cloud and provider. See [Install and connect a self-hosted agent](/getting-started/Install-and-connect-self-hosted-agent) .


## AWS authentication 
The Quali-hosted agent needs AWS credentials to provision the environment on your AWS account.

To provide the credentials, modify your blueprint's **inputs** and **env-vars** sections, as follows:


```yaml
spec_version: 2
description: Auto generated blueprint for terraform module s3-create

inputs:
  BUCKET_NAME:
    type: string
  
  AWS_ACCESS_KEY:
    type: string
  AWS_SECRET_KEY:
    type: string

  host_name:
    type: execution-host

outputs: {}

grains:
  s3-create:
    kind: terraform
    spec:
      source:
        store: terraform
        path: s3-create
      host:
        name: '{{ .inputs.host_name }}'

      inputs:
      - BUCKET_NAME: '{{ .inputs.BUCKET_NAME }}'
      
      env-vars: 
        - AWS_ACCESS_KEY: '{{ .inputs.AWS_ACCESS_KEY }}'
        - AWS_SECRET_KEY: '{{ .inputs.AWS_SECRET_KEY }}'
      
      outputs: []

```

## Azure authentication 
The Quali-hosted agent needs Azure credentials to provision the environment on your Azure account.

To provide the credentials, modify your blueprint's **inputs** and **env-vars** sections, as follows:


```yaml
spec_version: 2
description: Auto generated blueprint for terraform module 

inputs:
  
  ARM_CLIENT_ID:
    type: string
  ARM_CLIENT_SECRET:
    type: string
  ARM_SUBSCRIPTION_ID:
    type: string
  ARM_TENANT_ID:
    type: string

  host_name:
    type: execution-host

outputs: {}

grains:
  azure-storage-create:
    kind: terraform
    spec:
      source:
        store: terraform
        path: azure-storag-create
      host:
        name: '{{ .inputs.host_name }}'
      
      env-vars: 
        - ARM_CLIENT_ID: '{{ .inputs.ARM_CLIENT_ID }}'
        - ARM_CLIENT_SECRET: '{{ .inputs.ARM_CLIENT_SECRET }}'
        - ARM_SUBSCRIPTION_ID: '{{ .inputs.ARM_SUBSCRIPTION_ID }}'
        - ARM_TENANT_ID: '{{ .inputs.ARM_TENANT_ID }}'        
      
      outputs: []

```
