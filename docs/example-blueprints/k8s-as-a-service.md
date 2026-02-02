---
sidebar_position: 2
title: Kubernetes as a Service
---

As Kubernetes continues to dominate as the preferred orchestrator for modern applications, IT and DevOps teams are encountering a growing demand for "certified" Kubernetes clusters. These certified clusters can encompass various offerings, such as PaaS-based solutions provided by cloud providers, OpenShift clusters, and even on-premises deployments on vCenter or bare-metal infrastructure. However, regardless of the deployment method, these clusters need to adhere to standardized and approved configurations while being pre-installed with essential prerequisites for running organizational applications. Inclusion of common tools like Kiali and Istio, along with their respective configurations, is crucial for ensuring the proper functioning of modern applications.

In the following example, Terraform is utilized to orchestrate a GKE (Google Cloud managed Kubernetes cluster) cluster, while Kubernetes manifests (YAML files) are used to orchestrate an application. The capability to deploy ephemeral Kubernetes clusters on-demand, with the application already installed and configured to meet specific requirements, empowers IT and DevOps teams to enhance customer service. Moreover, this approach ensures strong oversight of environment usage and enables optimization of both cloud resources and operational costs.

> ![GKE Environment](/img/gke-cluster.png)

The following blueprint is build out of two grains dependent on one another. The application will be deployed only once the GKE cluster will be fully up and running including all required networking, storage and compute elements. Part of the GKE orchestration includes saving the kube config file available for the <ProductName /> agent, so __the application can be installed without a <ProductName /> agent in the newly created cluster__. The <ProductName /> agent, will use the kube-config file to authenticate into the GKE cluster and execute the application.

```yaml
spec_version: 2
description: e-commerce application deployed on a GKE cluster

outputs:
  Application Access:
    value: http://{{ .grains.portal.scripts.post-kubernetes-install.outputs.frontend }}
    kind: link
grains:
  gke-cluster:
    kind: terraform
    ....
   
  portal:
    kind: kubernetes
    depends-on: gke-cluster
    spec:
      agent:
        kubernetes:
          permissions:
            destination-context-name: '{{ .grains.gke-cluster.outputs.kubernetes_cluster_name }}'
            secret-name: '{{ .grains.gke-cluster.outputs.secret-name }}'
            secret-namespace: '{{ .grains.gke-cluster.outputs.secret-namespace }}'
    ....
        post-kubernetes-install:
          source:
            store: assets
            path: scripts/get-external-frontend.sh
          outputs:
            - frontend


```

The application frontend URL, exposed through GCP load balancer is published as an blueprint output for the end-user to use. 

The environment consumer can also download the kube-config file directly from the environment introspection data to later connect to the cluster.
> ![GKE Access token](/img/gke-auth.png)