---
sidebar_position: 10
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

### AWS
If you're using an EKS cluster as your execution host, and you want to deploy resources to an AWS account, you can use service account to do the authentication and permissions between the pod and the AWS account where the resources will be created.

#### Steps

1. Create an IAM OIDC provider for your cluster ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)).
2. Create the IAM role to be used by the service account. ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html)).
3. Associate the IAM role to a service account on your cluster ([Instructions​](https://docs.aws.amazon.com/eks/latest/userguide/specify-service-account-role.html)).  
If the Terraform resources are to be created in a different AWS account than the one hosting the EKS cluster which is our execution host, you'll need to perform steps (1) and (2) on the target account. See [AWS' Technical overview](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).



#### Steps

1. Create an IAM [OIDC provider](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) for your source EKS cluster account.

  The OIDC provider should be displayed in your cluster's __Details__ page.
     > ![Locale Dropdown](/img/source-eks-oidc-provider.png)
2. Create an IAM [OIDC provider](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) for your target EKS account.

3. Add the source OIDC provider to the Identity provider.

    a. In the __IAM__ dashboard, select __Identity providers__ from the left menu and click __Add provider__.
     > ![Locale Dropdown](/img/add-oidc-to-idp.png)

    b. Click __OpenID Connect__ and specify your source cluster's OIDC provider URL.
     > ![Locale Dropdown](/img/add-oidc-to-idp-2.png)
4. Create the [IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html) and policy on the target account for your source service account.
  
    There are several ways to create a new IAM permission policy. One way is to copy a complete AWS managed policy that already does some of what you're looking for and then customize it to your specific requirements. Check out the [Role definition examples](#role-definition-examples) at the bottom of this procedure.

    a. In the __Roles__ page, specify the source EKS cluster's IAM OIDC provider. For example:
    
     > ![Locale Dropdown](/img/iam-role-for-service-account.png)

       
    b. In the __Policies__ page, 

5. Create an IAM role for your Kubernetes service accounts to use before you associate it with a service account. The trust relationship is scoped to your cluster and service account __so that each cluster and service account combination requires its own role__. You can then attach a specific IAM policy to the role that gives the containers in your pods the permissions you desire.

    ```
    kubectl apply –f app-sa.yaml


  ```jsx title="app-sa.yaml:"
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::XXX:role/YYY
  name: app-sa
  namespace: quali
automountServiceAccountToken: true

```

5. Create a service account on your source EKS cluster with the Role ARN you created on the target account.


### Role definition examples

```jsx title="Example 1:"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<source EKS cluster IAM OIDC provider>"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.eks.eu-west-1.amazonaws.com/id/C5BASAB7D85CFECA473C4FG7E3BBD57B:sub": "system:serviceaccount:my-service-account:test-terraform-sa",
          "oidc.eks.eu-west-1.amazonaws.com/id/C5BASAB7D85CFECA473C4FG7E3BBD57B:aud": "sts.amazonaws.com"
        }
      }
    }
  ]
}
```

:::info
The above example, make sure to specify the source EKS cluster's IAM OIDC provider and service account.
:::

```jsx title="Example 2:"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "c828ad4376724afe992ed4670d339cde",
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::101105463363:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/28522D8BF95AE6F20147BFCADFB81F0F"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "ForAnyValue:StringLike": {
                    "oidc.eks.us-east-1.amazonaws.com/id/28522D8BF95AE6F20147BFCADFB81F0F:sub": [
                        "system:serviceaccount:torque-review1-sb:*",
                        "system:serviceaccount:torque-sb:torque-services-sa-*"
                    ],
                    "oidc.eks.us-east-1.amazonaws.com/id/28522D8BF95AE6F20147BFCADFB81F0F:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}

```

:::info
The above example, configures a role for any service account that starts with ..
:::