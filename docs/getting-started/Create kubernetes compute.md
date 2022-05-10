---
sidebar_position: 7
title: Create a Kubernetes Compute Service
---

Now that we have a cloud account, we need to create a compute service that will define the Kubernetes cluster that will host the environment. Torque supports both EKS (AWS) and AKS (Azure).

**To create a Kubernetes compute service:**

1. Make sure you are in **Admin Console** page, in the **Cloud Accounts** tab.

2. Open your cloud account's **Manage** page.

  > ![Locale Dropdown](/img/manage-cloud-account.png)

3. Click **Add Kubernetes Cluster** and complete the wizard.

   * **Kubernetes compute service name**: Display name for the Kubernetes compute service.

   * **Agent namespace**: The Kubernetes agent’s namespace.

   * **Sandbox namespaces**: Any of the cluster’s namespaces that should be available for sandbox/production deployments. When you associate the Kubernetes compute service to a space, you will decide which of these namespaces will be used in that space.

   (For EKS only) You can optionally specify a Kubernetes ingress to load balance application traffic using the Application Load Balancer that is deployed by Torque for the environment. To do so: 
    1. Select **Configure Ingress**.

    2. Specify the **Ingress Controller Type**. “alb” is currently supported.

    3. In the **Ingress Class** field, specify the --ingress-class value of the application load balancer’s ingress controller in the Kubernetes cluster. You can find this value in the Kubernetes deployment YAML of the ALB Controller with the following command:

      ```kubectl -n <namespace> get deployment <resource Name> -o yaml```

      Where **namespace** is the namespace name where the ALB controller was deployed, and **resource Name** is the deployment name of the ALB controller

4. Click **Create**. 