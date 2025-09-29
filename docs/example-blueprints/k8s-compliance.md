---
sidebar_position: 3
title: Kubernetes Compliance
---

Securing and ensuring compliance for deployments across various business processes can present challenges, particularly when organizations doesn't use a centralized approach for self-service, CI/CD, and other deployment methods. Implementing a Torque blueprint that includes deployment validations offers a recommended approach to orchestrate, track changes, and maintain consistency, thus establishing a best practice for secure deployments.

The following environment was orchestrated form a blueprint with multiple grains. The initial deployment process downloads the latest deployment files and validate them through a set of open-source tools - [Datree.io](https://www.datree.io/) and [Kubescape](https://github.com/kubescape/kubescape). Once only the validation is done and the score meets the criteria, the application deployment will take place.

> ![Environment Validations](/img/env-shell.png)

Note that in some cases, it might take time for Kubernetes deployment in the cloud to be fully exposed to external communication. In this case, we've added a "health-check" grain that will wait for the externally ingress to be fully reachable and additional validation to make sure the application is up and running.

Here is an example of how we execute [Datree.io](https://www.datree.io/) in the above environment using the Shell grain:
```yaml
grains:
  validate-datree:
    kind: shell
    spec:
      files:
        - source: microservices-boutique-demo
          path: release/kubernetes-manifests.yaml
      agent:
        name: '{{ inputs.host }}'
      activities:
        deploy:
          commands:
            - "apt-get -y install git unzip curl"
            - "curl https://get.datree.io | /bin/bash"
            - "datree config set token <personal token>"
            - "datree test ./kubernetes-manifests.yaml -o simple --ignore-missing-schemas"
```

