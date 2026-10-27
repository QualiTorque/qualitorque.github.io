---
sidebar_position: 1
title: Blueprint Design
---

## What is a Torque blueprint?
A blueprint is a template for provisioning an environment that contains references to different IaC Components ("Grains") that together define the applications, cloud infrastructure, networking and policies that make up a specific environment. Blueprints are stored as source-controlled YAML files, and each grain in a blueprint is a reference to one IaC or automation file (for example, a Terraform module or a Helm chart) that will be deployed as part of the environment, and the component's designated inputs, outputs and execution information. 

A blueprint also contains the orchestration between the grains (provisioning order and dependencies, shared parameter storage, environment duration policies, tag values, etc.), and when launched, deploys a whole stack, from the infrastructure layer to the application itself. 

There are three ways to end up with a blueprint in Torque: let Torque wrap a discovered IaC asset for you behind the scenes (Option A), author a multi-grain blueprint YAML yourself in your source control repository (Option B), or build one visually using the Designer Canvas (Option C).

## Option A: Let Torque wrap your assets for self-service
Once a repository is connected and its assets are discovered (see [Discover Your Assets](/getting-started/asset-discovery)), each discovered IaC asset appears in your space's **Automation Inventory** page. From there, you can make any asset (or an existing blueprint) available for self-service consumption with two independent toggles:

- **Self-Service**: makes the item visible in the Self-Service catalog so other users in the space can launch it.
- **Building Block**: makes the item available as a reusable component inside the visual blueprint designer (see [Option C](#option-c-build-a-blueprint-visually-in-the-designer-canvas) below).

Enabling either toggle on a raw IaC asset wraps it in a blueprint behind the scenes. You don't see or edit that generated blueprint's YAML directly — instead, you customize the asset's display name, icon, and labels through its own **Catalog Design** screen. If you enable the same toggles directly on a full blueprint (one created via Option B or C), you get the complete set of blueprint-level controls: Instructions, consumption Policies, Labels, and Tags, in addition to Display Name and Icon.

1. In your space, go to **Automation > Automation Inventory** and open the **IaC Assets** tab to see everything discovered from your connected repositories.
2. Toggle **Self-Service** for any asset you want end-users to be able to launch from the catalog, and/or toggle **Building Block** for any asset you want to make reusable when building blueprints visually.
3. Click into the asset to open its **Catalog Design** screen, where you can set its Display Name, Category Icon, and Labels, and preview how it will appear as a catalog card.

You and your space's users can now launch environments from these items via the **Self-Service** catalog.

## Option B: Create a multi-asset blueprint in your source control repository
So far, we've learned how self-service wrapping works for single-asset items. But what if you want to create an application-stack environment? This is easily done by having multiple grains in a single blueprint or nesting an existing blueprint within a master blueprint as a grain. To create such a blueprint, you will need an IDE environment that has access to a clone of your repository, in which you can create the new blueprint's YAML file and edit it, and then commit it into your repository and push the changes to the remote repository from which Torque will automatically synchronize the new blueprint.

By enforcing usage of a source control repository, each blueprint in Torque will have:
* A full history of tracked changes
* The ability to identify which developer authored those changes
* The ability to retrieve or rollback to the contents of previous versions of the blueprint file

:::tip __Tips__
* If you are using VS Code to create and edit your blueprint file, we recommend using our official VS Code extension. For other IDEs, you can download our [official JSON schema](https://github.com/QualiTorque/torque-vs-code-extensions/blob/master/client/schemas/blueprint-spec2-schema.json) for the blueprint YAML and enforce it with your plugin of choice. 
* When connecting a repository containing blueprint files to Torque, it is possible to reference a branch of the repository and not its main, allowing designers the ability to test changes to blueprints before pushing them to the main/master branch and affecting the production catalog. 
:::

__To create a multi-asset blueprint:__
1. For each grain, do one of the following:
   * Copy an example of that grain from a generated blueprint or from the documentation.
   * Use the sample structure for that grain type in the corresponding page in [The Blueprint YAML](/blueprint-designer-guide/blueprints/blueprints-overview).
2. If grains depend on each other, add a ```depends-on``` section to the grain (in the top level, next to ```kind:``` and ```spec:```) and provide the names of the dependent grains in a comma-separated list. 
3. Once a grain depends on another grain, the output values from that grain can be used as values for any of the grain's inputs or attributes using the syntax ```{{ .grains.grain_name.outputs.output_name}}```, see the examples below. 
4. Customize the ```inputs``` and ```outputs``` sections of the blueprint to contain only the relevant inputs that the entire environment needs, and to reflect the outputs from the grains that you would like to make available to the environment's end-user.

## Option C: Build a blueprint visually in the Designer Canvas
Beyond hand-writing YAML, Torque also provides a visual, drag-and-drop way to build multi-grain blueprints: the **Designer Canvas**.

1. Mark the IaC assets you want to reuse as **Building Block** components first (see [Option A](#option-a-let-torque-wrap-your-assets-for-self-service)) — only assets with this toggle enabled can be dragged onto the canvas.
2. Go to **Automation > Automation Inventory > Blueprints** and click **New Blueprint**.
3. Choose **Custom Blueprint** to start from a blank canvas, or pick one of the pre-built infrastructure pattern templates if your space has any configured.
4. Give the blueprint a name, an optional description, and a default agent (used to automatically populate every grain's agent input), then click **Create**.
5. On the **Custom Layout** tab (the designer canvas), click the **Add Grains** button to open the Building Block Library, then add your Building-Block-marked assets onto the canvas as grains, connect them to define dependencies, and configure each grain's inputs and outputs directly in the UI.
6. Switch to the **Yaml** tab at any time to view the underlying YAML — since this blueprint is backend-stored (not yet pushed to a repository), you can also edit the YAML directly here.
7. Use the **Overview**, **Instructions**, **Tags**, and **Policies** tabs of the blueprint panel to configure its Self-Service and Building Block visibility, end-user instructions, tag values, and consumption policies.

## Removing a blueprint
As mentioned above, there are two types of blueprints, blueprints stored in Torque (whether wrapped automatically via Option A or built visually via Option C) and source-controlled blueprints (stored in your repository, per Option B). 

* To delete a stored-in-Torque Blueprint, in the **Blueprints** tab, click on the Blueprint and then click the __Delete__ button on the top right corner.
* To delete a "repository" Blueprint, simply delete the blueprint file from the repository's branch that the Torque space is connected to.

## Example multi-grain blueprint 1: Helm Application with MySQL and S3 Deployed by Terraform
This blueprint is available in the __Sample__ space [here](https://portal.qtorque.io/Sample/blueprints/[Sample]Helm%20Application%20with%20MySql%20and%20S3%20Deployed%20by%20Terraform), which deploys 2 Terraform modules and a Helm chart:

```yaml
spec_version: 2
description: Robotshop microservices application deployed on K8S with Helm and RDS deployed with TF

outputs:
  WebsiteUrl:
    kind: link
    value: 'https://portal.qtorque.io/static/demo-quick-links/stans-robot-shop.html'


grains:
  mySqlDB:
    kind: terraform
    spec:
      source:
        path: github.com/QualiTorque/samples.git//terraform/rds
      agent:
        name: eks-demo
      inputs:
        - sandbox_id: '{{ envId | downcase }}'
        - size: small 
        - allocated_storage: 20
        - db_name: demo_db
        - engine_version: 8.0.26
        - engine: MySQL
        - username: adminuser
        - vpc_id: vpc-02e3bca90b081cd0f
        - region: us-east-1
      outputs:
        - hostname
        - connection_string

  s3Bucket:
    kind: terraform
    spec: 
      source:
        path: github.com/QualiTorque/samples.git//terraform/s3
      agent:
        name: eks-demo
      inputs:
        - region: eu-west-1
        - acl: public-read
        - name: 'robotshop-s3-{{ envId | downcase }}'
      outputs:
        - s3_bucket_arn

  robotShopMicroservices:
    kind: helm
    depends-on: mySqlDB, s3Bucket
    spec:
      source:
        path: https://github.com/QualiTorque/samples.git//helm/robotshop
      agent:
        name: eks-demo
      inputs:
        - hostname: 'robotshop-{{ envId | downcase }}'
        - version: 0.4.3
        - connectionString: '{{ .grains.mySqlDB.outputs.connection_string }}'
        - objectStore.s3BucketArn: '{{ .grains.s3Bucket.outputs.s3_bucket_arn }}'
        - redis.storageClassName: gp2
```

## Example multi-grain blueprint 2: Web-game on S3 (using CloudFormation and Terraform)

```yaml
spec_version: 2
description: "S3 Bucket creation with Input and Output parameters"

inputs:
   Access Control:
      type: string
      description: >
        Type of access to configure on Bucket objects: Private, PublicRead, PublicReadWrite, AuthenticatedRead,
        LogDeliveryWrite, BucketOwnerRead, BucketOwnerFullControl, or AwsExecRead
      default: "PublicRead"
      allowed-values: ["Private", "PublicRead", "PublicReadWrite"]
   Bucket Name:
      type: string
      default: my-bucket-test
   AWS Region:
      description: "The name of the AWS Region to use"
      default: "us-west-1"
      allowed-values: ["us-west-1", "us-west-2", "eu-west-1"]
    
outputs:
   S3 Bucket ARN:
        value: '{{ .grains.my-S3-Bucket.outputs.Arn }}'
   S3 Bucket Domain Name:
        value: '{{ .grains.my-S3-Bucket.outputs.DomainName }}'
        kind: link
   Webgame Link:
        value: '{{ .grains.S3-Upload-Webapp-File.outputs.website_link }}'
        kind: link

grains:
  CFN-S3-Bucket:
    kind: cloudformation
    spec: 
      source:
        store: assets
        path: assets/cfn/s3/AWSS3Bucket.yaml
      region: '{{ .inputs.["AWS Region"] }}'
      agent:
        name: demo-prod
        service-account: app-sa
      inputs:
        - AccessControl: '{{ .inputs.["Access Control"] }}'
        - BucketName: '{{ .inputs.["Bucket Name"] }}-{{ envId | downcase }}'
      outputs:
         - Arn
         - DomainName
  
  S3-Upload-Webapp-File:
    kind: terraform
    depends-on: CFN-S3-Bucket
    spec:
      source:
        store: assets
        path: assets/terraform/s3-deploy-webapp
      agent:
        name: demo-prod
        service-account: app-sa
      inputs:
      - bucket_name: '{{ .inputs.["Bucket Name"] }}-{{ envId | downcase }}'
      - region: '{{ .inputs.["AWS Region"] }}'
      outputs:
      - website_link
```
