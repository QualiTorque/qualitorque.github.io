---
sidebar_position: 88
title: Terraform Provider
---

The Terraform Provider for Quali's <ProductName /> is a plugin for Terraform that allows you to interact with <ProductName /> and control <ProductName /> behavior and presentation. The terraform provider is developed as a open source project that relies on <ProductName /> public APIs.

* <ProductName /> open-source provider code: https://github.com/QualiTorque/terraform-provider-torque
* The <ProductName /> provider in the Terraform registry: https://registry.terraform.io/providers/QualiTorque/torque/latest
* <ProductName /> provider documentation: https://registry.terraform.io/providers/QualiTorque/torque/latest/docs

To install this provider, copy and paste this code into your Terraform configuration. Then, run terraform init.

```jsx
terraform {
  required_providers {
    torque = {
      source = "QualiTorque/torque"
      # version = "0.0.2" 
    }
  }
}

provider "torque" {
  # Configuration options
}
```


### Example use for the <ProductName /> Terraform provider
Many of our customers are automating Infrastructure that is not necessarily created as part of the environment orchestration. In such situations, the <ProductName /> Terraform provider can help with representation on the required resources in the resource catalog for users ease-of-use.
Here is a code snippet from a terraform module that will generate a "torque_introspection_resource" resource - that will be recognized and presented by <ProductName /> so end-users of the environment will be able to see it in the <ProductName /> UI or use it in automation using the <ProductName /> API.


```jsx
resource "torque_introspection_resource" "example" {
    display_name = "My Resource"
    image = "https://portal.qtorque.io/static/media/networking.dc1b7fb73182de0136d059a1eb00af4f.svg"
    introspection_data = {size = "large", mode = "party"}
}
```
The complete terraform example can be found here: https://github.com/QualiTorque/terraform-provider-torque/blob/main/examples/provider-install-verification/main.tf

Once deployed, <ProductName /> will represent the "torque_introspection_resource" resource in the resource catalog.
> ![Resource Catalog](/img/tf-intro-provider.png)


