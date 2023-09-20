---
sidebar_position: 15
title: Environment Annotations
---

## __Environment Annotations: What They Are and How you can leverage them to optimize processes__

Environment annotations are labels or metadata that can be added to environments to provide additional information about them. Annotations can be used to define the purpose, status, or configuration of an environment, as well as to track changes or updates.

Annotations in Torque are key-value pairs that can be added to an environment or resource using a specific syntax or format. They can be used to add descriptive information, such as the description of an environment, or to provide dynamic updates, such as the current status of a deployment or the results of a test.

Annotations can help teams manage and organize environments in Torque by providing an easy way to track and communicate important information about them. For example, annotations can be used to indicate the power-state status of virtual machines in the environment. 

Environment annotations are a powerful tool for managing and organizing environments, and can help teams streamline their software development and testing processes by providing clear and concise information about the resources they are working with.

> ![Locale Dropdown](/img/annotations.png)

## __To create an environment annotation:__

Since environment annotations are __dynamic__ attributes of the environments, Torque uses __rego__ files and the policy engine to evaluate the annotation upon any chance in the environment. 

**Step 1: Create a rego file**

1. In your git repository, create a rego file with __torque.annotation__ package name.
2. The __input__ to the rego evaluation is the __introspection__ data from the environment. i.e a list of all the environment resources and their attributes, as a json object. The object will vary depending on the exact environment resources, but its overall structure will be as follows:
  ```jsx title=introspection.json
  {
  "introspection_resources": [
    {
      "attributes": {
        "att1": "att1",
        "att2":  "{\"key\": \"value\"}"
        ...
      }
    },
    {
      "attributes": {
        ...
      }
    },
    {
      // more resources
    }
  ]
  }
  ```
3. Using the introspection input, create your rule for the annotation and return an object named "set_annotations" with the following structure:
  ```jsx
    "set_annotations" = ["key" : "key1", "value" : "value1"]
  ```

Let's take a look at a full example of how this rego file would look. In this evaluation file, we are evaluating the power state of virtual machines inside the environment. If there is even one virtual machine which is running, we will annotate the environment with "Power:On" annotation. If all of the virtual machines are stopped, the annotation will be "Power:Off".

```jsx title=power_state.rego
package torque.annotations  // Use this as the first line to signal to Torque this file is for evaluating environment annotations.

default set_annotations = [{"key": "power", "value": "off"}] // Unless we will find at least one running VM, we will return this default annotation of "Power:Off". 

set_annotations = [{"key": "power", "value": "on"}] { 

  resources_with_power_state_running = {r | r = input.introspection_resources[_]; r.attributes.power_state == "running"} // In this case, every virtual machine has an attribute named "power_state" which can be either "running" or "stopped". We are iterating all power_state attribute values which equal to "running".
  count(resources_with_power_state_running) > 0 // If there is at least 1, we return "Power:On".

}
```
:::tip__Note__
Currently the only supported annotations are "power:on" and "power:off". We will add more annotations and open it for custom annotations soon.
:::

**Step 2: Import the rego file into Torque **

1. If the git repository where the relevant rego file resides was not yet connected to Torque, perform the following :
   1. Go to __Administration > Policy Repositories__ and click __Add a Repository__.
   2. Select the git repository, specify the repository's URL, and give it a name.
   > ![Locale Dropdown](/img/repository-information.png)
   3. Click __Connect__. Provide authorization credentials if the repository is private.

    A green checkmark next to the repository's URL indicates that the repository has been added successfully.
      > ![Locale Dropdown](/img/repository-connection.png)
2. On the added (or existing) repository where the file resides, Click __Discover Policies__.
3. Select the policies you want to import into Torque, and click __Generate Policies__.
   > ![Locale Dropdown](/img/policy-import.png)

    The policies are displayed in the __Policies__ page.
   > ![Locale Dropdown](/img/new-custom-policies.png)    
4. Click a generated policy and edit the details.

   a. Optionally change the __Name__, and provide a __Description__.

   b. In __Spaces__, set the scope of the policy - __All spaces__ or specific ones.
   
5. Click __Save__.
6. __Enable__ the policy.
   > ![Locale Dropdown](/img/enable-custom-policy.png)    