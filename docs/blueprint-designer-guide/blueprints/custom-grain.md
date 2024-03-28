---
sidebar_position: 40
title: Custom Grain
---

Torque allows you to use your custom grain. To do so, you can specify the binary executable file which you would like to use.

For example:

```yaml
grains:
  hello_world:
    kind: terraform
    spec:
      binary: https://releases.hashicorp.com/terraform/1.5.5/terraform_1.5.5_linux_amd64.zip
      source:
        store: terraform
        path: hello
      ...
```

:::info
- The only platform supported for binaries is linux_amd64.
- The executable must be in zip archive format.
- Torque will get the execuable using and http get command which will be executed from the runner (i.e from the cluster where the agent is running). You have to make sure that the URL is accessible from the cluster without further authentication.
- Please also note that no validation will be done on the binary link, it is the responsibility of the user.
:::
