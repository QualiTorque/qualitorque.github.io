---
sidebar_position: 88
title: Terraform Provider
---

The Terraform Provider for Quali's Torque is a plugin for Terraform that allows you to interact with Torque and control Torque behavior and presentation. The terraform provider is developed as a open source project that relies on Torque public APIs.

* Torque opensource provider code: https://github.com/QualiTorque/terraform-provider-torque
* The Torque provder in the Terraform registry: https://registry.terraform.io/providers/QualiTorque/torque/latest
* Torque provider documentation: https://registry.terraform.io/providers/QualiTorque/torque/latest/docs

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


### Example use for the Torque Terraform provider
Many of our customers are automating infrastrcuture that is not neccesarily created as part of the enviornment orchestration. In such situations, the Torque Terraform provider can help with representation on the required resources in the resource catalog for users ease-of-use.
Here is a code snippet from a terraform module that will generate a "torque_introspection_resource" resource - that will be recognized and presented by Torque so end-users of the enviornment will be able to see it in the Torque UI or use it in automation using the Torque API.


```jsx
resource "torque_introspection_resource" "example" {
    display_name = "My Resource"
    image = "https://portal.qtorque.io/static/media/networking.dc1b7fb73182de0136d059a1eb00af4f.svg"
    introspection_data = {size = "large", mode = "party"}
}
```
The complete terrafrom example can be found here: https://github.com/QualiTorque/terraform-provider-torque/blob/main/examples/provider-install-verification/main.tf

Once deployed, Torque will represent the "torque_introspection_resource" resource in the resource catalog.
> ![Resource Catalog](/img/tf-intro-provider.png)


