---
sidebar_position: 7
title: Using the Quali hosted agent
---

The Quali hosted agent is a built-in agent in the systme which you can use without any prerequisites. 

It can be used to provision environments with the following limitations:
- Only a single environment can be provisioned using the Quali hosted agent
- The environment must have only a single asset (=grain), which is a terraform module
- At this point, the Quali hosted agent can only provision environments in __AWS__ using __terraform modules__ by using the terraform __AWS provider__. Support for other providers as well as other deployment technologies (such as helm) and clouds will be added gradually.
- In you wish to provision environments using other terraform providers, please install your own hosted agent which supports any cloud and any provider. See [Install and connect a self hosted agent](/getting-started/Install-and-connect-self-hosted-agent) .


**Authentication to AWS:** 
The Quali hosted agent will need AWS credentials in order to provision the environment on your AWS account.

To provide the credentials, please edit your blueprint as follows:
You will have to modify the **inputs** and **env-vars** sections.


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
  AWS_SESSION_TOKEN:
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
        - AWS_SESSION_TOKEN: '{{ .inputs.AWS_SESSION_TOKEN }}'
      
      outputs: []

```
