---
sidebar_position: 3
title: Agents on AWS
---

If you're using a Torque K8s agent that runs on an EKS cluster, and you want to deploy AWS resources using Infrastructure as Code (IaC) tools such as Terraform, CloudFormation, CDK, OpenTofu, Ansible, or others, you need to configure `authentication` and `permissions` between the Runner pod and the AWS account where the resources will be created. This is done by a service account, which contains these permissions, to the container. The permissions are defined in an IAM role that needs to be associated to the service account.

This authentication setup is required for any IaC tool that provisions AWS resources. While we'll use Terraform as the primary example throughout this guide, the same authentication mechanism applies to all AWS IaC tools.

The basic process is as follows:
- [Prerequisites](#prerequisites)
- [Associate your cluster to the cluster account](#associate-your-cluster-to-the-cluster-account)
- [Create an IAM role for the service account with the required policy](#create-an-iam-role-for-the-service-account-with-the-required-policy)
- [Create a service account in the cluster’s namespace](#create-a-service-account-in-the-clusters-namespace)
- [For additional details, see these AWS docs:](#for-additional-details-see-these-aws-docs)

For brevity, the term "__cluster account__" refers to the account hosting the EKS, and "__target accounts__" is where the rest of the AWS resources are created.
## Prerequisites

*	[IAM OIDC provider](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) on the cluster’s account, to recognize the cluster on the account
*	[kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) connected to the cluster
*	[AWS CLI](https://aws.amazon.com/cli/) on your computer

## Associate your cluster to the cluster account

__To associate the cluster to the account__:
1.	In AWS CLI, find the cluster’s OIDC provider by running:
    ```bash
    aws eks describe-cluster --name my-cluster --query "cluster.identity.oidc.issuer" --output text
    ```
    Where __my-cluster__ is the name of the cluster.

    The output looks something like this:
    ```jsx
    https://oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE
    ```
    Where __EXAMPLED539D4633E53DE1B71EXAMPLE__ is the cluster's OIDC provider
:::info
Make sure to perform steps 2 and 3 on every target account in which the cluster will perform actions.   
:::
2.	Check if the OIDC provider from the cluster's account exists in the target accounts:
    ```bash
    aws iam list-open-id-connect-providers | grep my-cluster-oidc-provider
    ```
    The IAM OIDC provider is displayed:
    ```jsx
    "Arn": "arn:aws:iam::111122223333:oidc-provider/oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
    ```
3.	If the IAM OIDC provider is nonexistent, do the following to create it:
  
    a.	Install __eksctl__ on your computer.
    
    b.	Run the following to create the IAM OIDC provider and associate it to your cluster:      
        ```bash
        eksctl utils associate-iam-oidc-provider --cluster my-cluster --approve
        ```

    c.	In AWS CLI, run the following to get the Arn for IAM OIDC provider you created:
        ```bash
        aws iam list-open-id-connect-providers | grep my-cluster-oidc-provider
        ```
        You will need this for step 3 in the following procedure.

## Create an IAM role for the service account with the required policy
As we explained before, the service account delegates permissions to the container to perform IaC operations (Terraform, CloudFormation, CDK, OpenTofu, Ansible, etc.). The permissions are defined as a policy in an IAM role that is associated to the service account.
Perform these steps on every target account that will be used by your cluster.

__Prerequisites__
*	IAM policy with the desired permissions for your IaC tool(s). The specific permissions will depend on the AWS resources you plan to provision (EC2, S3, RDS, Lambda, etc.).

__To create the IAM role for the service account__:
1.	In your AWS Console, go to __IAM > Role__.
2.	Click __Create role__, select __Web identity__.
3.	From the __Identity__ provider dropdown list, select the IAM OIDC that was generated in step 3-c of the above procedure.
4.	From the __Audience__ dropdown list, select __sts.amazonaws.com__.
5.	Click __Next__.
6.	Select the __IAM policy__ you wish to associate to the IAM role, and click __Next__.
7.	Specify a __Role name__.
8.	Scroll down and click __Create role__.
9.	Copy the ARN for this role. You will need in the next step.

## Create a service account in the cluster’s namespace
Create the service account in the cluster's namespace you plan on using as the environment namespace, and associate its IAM role to the IAM role you just created.

__To create the service account__:

1. Save the following as an __SA.yaml__ file. 
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
        annotations:
          eks.amazonaws.com/role-arn: <enter your role arn here>
        name: <service account name>
        namespace: <environment namespace name>
    ```
2. From AWS CLI, run the following command:
    ```bash
    kubectl apply -f SA.yaml
    ```
You're done. All that's left to do is specify the service account name in the blueprint YAML. This authentication method works seamlessly with all AWS IaC tools including Terraform, CloudFormation, CDK, OpenTofu, Ansible, and others. For details on configuring the service account in your blueprint, see [Agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent).

## For additional details, see these AWS docs:

1. Create an IAM OIDC provider for your cluster ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)).
2. Create the IAM role to be used by the service account. ([Instructions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html)).
3. Associate the IAM role to a service account on your cluster ([Instructions​](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html)).  
If the AWS resources are to be created in a different AWS account than the one hosting the EKS cluster (your agent), you'll need to perform steps (1) and (2) on the target account. See [AWS' Technical overview](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).
