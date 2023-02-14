---
sidebar_position: 11
title: Terraform GKE Authentication
---

If you're using an GKE cluster as your agent, and you want to run Terraform that deploys resources on GCP, you can use *Workload Identity* to do the authentication and permissions between the pod and the GCP account where the resources will be created.

The process is described in details [here](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#gcloud_3).

