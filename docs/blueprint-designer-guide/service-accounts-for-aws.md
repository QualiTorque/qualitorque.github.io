---
sidebar_position: 7
title: Service Account Configuration for AWS
---

If you're using an EKS cluster as your execution host, and you want to deploy resources to an AWS account, you can use service account to do the authentication and permissions between the pod and the AWS account where the resources will be created. This is done by connecting a service account, which contains these permissions, to the container. The permissions are defined in an IAM role that needs to be associated to the service account.

The basic process is as follows:
* [Associate your cluster to the AWS account](#associate-your-cluster-to-the-aws-account)
* [Create an IAM role for the service account with the required policy](#create-an-iam-role-for-the-service-account-with-the-required-policy)
* [Create a service account in the cluster’s namespace](#create-a-service-account-in-the-clusters-namespace)

## Prerequisites

*	IAM OIDC provider on the cluster’s account, to recognize the cluster on the account
*	kubectl on the cluster
*	AWS CLI on your computer

## Associate your cluster to the AWS account

Make sure to perform the following steps on every AWS account in which the cluster will perform actions.

__To associate the cluster to the account__:
1.	In AWS CLI, find the cluster’s OIDC provider by running:
  ```jsx title=
  aws eks describe-cluster --name my-cluster --query "cluster.identity.oidc.issuer" --output text
  ```
  Where __my-cluster__ is the name of the cluster.

  The output looks something like this:
  ```jsx title=
  https://oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE
  ```
  Where __EXAMPLED539D4633E53DE1B71EXAMPLE__ is the cluster's OIDC provider
2.	On the account to be used by the cluster, list an IAM OIDC provider in the account that is associated to the cluster’s OIDC provider:
  ```jsx title=
  aws iam list-open-id-connect-providers | grep my-cluster-oidc-provider
  ```
  The IAM OIDC provider is displayed:
  ```
  "Arn": "arn:aws:iam::111122223333:oidc-provider/oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"
  ```
3.	If the IAM OIDC provider is nonexistent, do the following to create it:
  
  a.	Install __eksctl__ on your computer.
  
  b.	Run the following to create the IAM OIDC provider and associate it to your cluster:
  ```jsx title=
  eksctl utils associate-iam-oidc-provider --cluster my-cluster –approve
  ```

  c.	In AWS CLI, run the following to get the IAM OIDC provider you created:
    ```jsx title=
    aws iam list-open-id-connect-providers | grep my-cluster-oidc-provider
    ```

## Create an IAM role for the service account with the required policy
As we explained before, the service account delegates permissions to the container to perform the Terraform actions. The permissions are defined as a policy in an IAM role that is associated to the service account.
Perform these steps on every account that will be used by your cluster.

__Prerequisites__
*	IAM policy with the desired permissions

__To create the IAM role for the service account__:
1.	In your AWS Console, go to __IAM > Role__.
2.	Click __Create role__, select __Web identity__.
3.	From the __Identity__ provider dropdown list, select your cluster’s OIDC provider.
4.	From the __Audience__ dropdown list, select __sts.amazonaws.com__.
5.	Click __Next__.
6.	Select the __IAM policy__ you wish to associate to the IAM role, and click __Next__.
7.	Specify a __Role name__.
8.	Scroll down and click __Create role__.
9.	Copy the ARN for this role. You will need in the next step.

## Create a service account in the cluster’s namespace
Create the service account and associate its IAM role to the IAM role you just created.

__To create the service account__:

1. Save the following as an __SA.yaml__ file. 
  ```jsx title=
apiVersion: v1
kind: ServiceAccount
metadata:
    annotations:
      eks.amazonaws.com/role-arn: <enter your role arn here>
    name: <enter the service account name here>
    namespace: <enter the namespace name here>  
2. From AWS CLI, run the following command:
  ```jsx title=
  kubectl apply -f SA.yaml
  ```
You're done. All that's left to do is specify the service account name in the blueprint YAML. For details, see [Service Accounts](/blueprint-designer-guide/Service%20Accounts).
