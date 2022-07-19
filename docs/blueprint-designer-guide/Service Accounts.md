---
sidebar_position: 6
title: Service Accounts
---

A kubernetes service account provides an identity for processes that run in a pod. We recommend using service accounts if you are using a Kubernetes cluster as your execution host. 
The service account is specified in the __grains__ section of the blueprint, in the __hosts__ node:

```jsx title="Blueprint yaml:"
...
grains:
  my-grain-name:
    kind : terraform 
    spec:
      ...
      host:
        name : <execution-host-name>
        service-account : <service-account-name>
      ...
```     

## Helm charts
When you're deploying resources in the cluster using a Helm chart, the service account you use should have sufficient permissions to create all the resources which the chart will deploy. For details, see [Kubernetes' ServiceAccount permissions](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions)

## Terraform modules

### Service account configuration for AWS
If you're using an EKS cluster as your execution host, and you want to deploy resources to an AWS account, you can use service account to do the authentication and permissions between the pod and the AWS account where the resources will be created. This is done by connecting a service account, which contains these permissions, to the container. The permissions are defined in an IAM role that needs to be associated to the service account.

__Prerequisites__

*	IAM OIDC provider on the cluster’s account, to recognize the cluster on the account
*	kubectl on the cluster
*	AWS CLI on your computer


### Associate your cluster to the AWS account

Make sure to perform the following steps on every AWS account in which the cluster will perform actions.

__To associate the cluster to the account__:
1.	In AWS CLI, find the cluster’s OIDC provider by running:
  ```jsx title=
  aws eks describe-cluster --name my-cluster --query "cluster.identity.oidc.issuer" --output text
  ```

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

### Create an IAM role for the service account with the required policy
As we explained before, the service account delegates permissions to the container to perform the Terraform actions. The permissions are defined as a policy in an IAM role that is associated to the service account.
Perform these steps on every account that will be used by your cluster.

__Prerequisites:__
*	IAM policy with the desired permissions

__To create the IAM role for the service account__:
1.	In your AWS Console, go to IAM > Role.
2.	Click Create role, select Web identity.
3.	From the Identity provider dropdown list, select your cluster’s OIDC provider.
4.	From the Audience dropdown list, select sts.amazonaws.com.
5.	Click Next.
6.	Select the IAM policy you wish to associate to the IAM role, and click Next.
7.	Specify a Role name.
8.	Scroll down and click Create role.
9.	Get the ARN for this role.



#### For additional details, see these AWS docs:

1. Create an IAM OIDC provider for your cluster ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)).
2. Create the IAM role to be used by the service account. ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html)).
3. Associate the IAM role to a service account on your cluster ([Instructions​](https://docs.aws.amazon.com/eks/latest/userguide/specify-service-account-role.html)).  
If the Terraform resources are to be created in a different AWS account than the one hosting the EKS cluster which is our execution host, you'll need to perform steps (1) and (2) on the target account. See [AWS' Technical overview](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).