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
When you're deploying resources in the cluster using a Helm chart, the service account you use should have sufficient permissions to create all the resources which the chart will deploy. For details, see [Kubernetes' Service Account permissions](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions)

## Terraform modules

If you're using an EKS cluster as your execution host, and you want to deploy resources to an AWS account, you need to grant the appropriate AWS permissions to the cluster. 

There are two ways to do this. 
1. The easy way is to attach the appropriate policy to the cluster's IAM role Arn, but this grants permissions to the entire cluster. 
2. The second option is to use a service account, which grants the permissions to the pod responsible for spinning up the environment, and once the environment is fully deployed, the pod and delegated permissions are removed. For details, see [Terraform Authentication on EKS](/blueprint-designer-guide/service-accounts-for-aws).
