---
sidebar_position: 15
title: Blueprint Publishing
---

Publishing Blueprints is a fundamental part of providing self-service access to infrastructure and applications. 

We would recommend the following process when publishing a Blueprint.
1. Head to the `Blueprints` page under `Design` and click on the Blueprint you would like to publish.
2. Catalog Design, in which you can specify:
   1. __Display Name__: This name can be different than the Blueprint file name from git.
   2. __Icon__: Choose from a list of default icons or upload your own. Notice the icon needs to be in SVG format.
   3. __Labels__: These are an important part of additional data designer can add to a Blueprint in order to assist consumers when selecting a Blueprint from the catalog. In order to create a new label click on Manage Space Labels. In the dialog click on Create New, specify the label name and color then click save. Now in the Blueprint labels area the new label will be available.
<!-- > ![img](/img/labels.png) -->
<!-- > ![img](/img/labels-mgmt.png) -->
   4. __Instructions__: When adding instructions to the Blueprint [(see link)](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#instructions) this is where you can see the end user view of the instructions.
<!-- > ![img](/img/instructions.png) -->
   5. __Policies__: Set the Blueprint consumption policies according to the description [here](/blueprint-designer-guide/blueprint-consumption-policies). 

You can now go ahead and publish your Blueprint by clicking on the `Publish` button (eye icon) on the top bar. 
<!-- > ![img](/img/publish-bp.png) -->

Notice it is now available in the catalog for consumption.

:::info
Note: The entire process and publishing data is in the scope of the space.
:::