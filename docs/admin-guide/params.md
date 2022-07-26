---
sidebar_position: 5
title: Parameters
---

The Torque parameter store is an account-level repository of key-value pairs, which can be used and reused in blueprint YAMLs across all spaces in Torque. As such, the parameter store is typically used to store data that applies to multiple spaces. 

Torque role: Account admin

:::tip __Important__
Modifying or deleting a parameter may cause blueprints that use the parameter to fail.
:::

__To add a parameter:__

1. Open the __Admin Console__ and click __Parameters__.
2. Click __Add Parameter__ in the top right corner of the page.
3. Fill in the details:
   * __Parameter Name__: Display name for the parameter.
     * Parameter Name is case-insensitive.
     * Parameter Name may only contain URL-supported characters including letters, digits, underscores, dashes, etc.
   * __Value__: Parameter’s value
   * __Description__: Informative description of the parameter or value it contains
4. Click __Apply__.
   The parameter is stored in the parameter store and can be used in your blueprint YAMLs in the format: ```{{.params.param-name}}```. For details, see [Parameters](/blueprint-designer-guide/blueprints#parameters).