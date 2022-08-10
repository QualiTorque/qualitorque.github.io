---
sidebar_position: 11
title: Launch Your Blueprint
---

At this point, you have done the following:
* Created a space
* Connected an asset repository and autogenerated blueprints out of some assets
* Created an execution host that will handle the deployment and teardown of the environments in the Kubernetes cluster

You are now ready to launch your first environment.

1. Open your space.
2. In the __Blueprints__ page, __Publish__ a suitable autogenerated blueprint.
3. __Launch__ the blueprint.
4. Provide the name of the Kubernetes cluster namespace and execution host to use. Later on, you will want to add these details to the autogenerated blueprint, as explained in [Customizing Autogenerated Blueprints](/blueprint-designer-guide/customize-blueprints). 
4. Wait until the environment is active and use as needed. URLs to the environment's applications are typically provided as outputs - these can be found in the environment's __Quicklinks__ on the left, or in the __Outputs__ tab.

   > ![Locale Dropdown](/img/outputs.png)

:::tip __Tip__:

If someone makes changes to the blueprint's asset or the environment's cloud resources while the environment is running, you will see an __Updates Available__ link in the environment page. Click it to view and resolve the changes. It has two sections: 
* __Updates__ shows changes made to the asset's definition file, allowing you to optionally update the environment
* __Drift Detection__ shows any of the environment's resources that were modified externally. Click the error to see the modifications, and __Reconcile__ to revert a resource back to its original state.

   > ![Locale Dropdown](/img/updates-available.png)

:::