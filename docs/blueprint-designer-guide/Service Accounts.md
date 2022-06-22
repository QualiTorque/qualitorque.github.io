---
sidebar_position: 4
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
        serivce-account : <service-account-name>
      ...
```     

### Helm charts
When you're deploying resources in the cluster using a Helm chart, the service account you use should have sufficient permissions to create all the resources which the chart will deploy. For details, see [Kubernetes' ServiceAccount permissions](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions)

### Terraform modules

#### AWS
If you're using an EKS cluster as your execution host, and you want to deploy resources to an AWS account, you can use service account to do the authentication and permissions between the pod and the AWS account where the resources will be created.

##### Steps

1. Create an IAM OIDC provider for your cluster ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)).
2. Create the IAM role to be used by the service account. ([Instructions](https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html)).
3. Associate the IAM role to a service account on your cluster ([Instructions​](https://docs.aws.amazon.com/eks/latest/userguide/specify-service-account-role.html)).  
If the Terraform resources are to be created in a different AWS account than the one hosting the EKS cluster which is our execution host, you'll need to perform steps (1) and (2) on the target account. See [AWS' Technical overview](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html).
