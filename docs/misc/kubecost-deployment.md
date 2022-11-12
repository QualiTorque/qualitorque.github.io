---
sidebar_position: 6
title: KubeCost deployment
---

K8S cost data is collected by Torque using Kubecost. Please perform this procedure if your Cost Collection Target failed validation.

1. Verify that Kubecost is deployed in the cluster.
   * For deployment instructions, see: https://www.kubecost.com/install.html#show-instructions
   * Make sure the kubecost default namespace is used (Namespace kubecost)
2. In Torque, try to re-enable the K8S cost collection target and validate that it works.
3. If the error still exists, run the ```Get agent deployment file``` API call with the following body: 
    ```jsx title=
    {
        "service_type": "k8s",
        "service_name": "[the name of the execution host using the k8s agent]",
        "details": {
            "include_agent_deployment": false,
            "enable_kubecost": true
        }
    }
    ```
4. Save the output to a deployment file.
5. Run the following command on the cluster:
    ```jsx title=
    kubectl apply -f “[generated deployment file]”
    ```
6. Try to re-validate the cost collection target.
7. If the error still exists, call Torque support.