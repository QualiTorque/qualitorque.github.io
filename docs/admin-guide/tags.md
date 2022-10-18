---
sidebar_position: 19
title: Tags
---

The cloud providers cost management pillars provide tools that cover many aspect of your cloud spending, like billing isolation, specific service limits and cost alerts. There are also 3<sup>rd</sup> party tools out there that provide enhanced functionality, such as inventory visibility, rightsizing recommendations, idle resources detection etc. 

All of these are great tools. However, to get valuable insights, this is simply not enough. The key to really understanding where your budget is spent requires the use of accurate tagging.

> ![Locale Dropdown](/img/tags-quote.png)

(https://aws.amazon.com/blogs/apn/how-to-optimize-your-aws-workload-cost-with-capgemini-and-virtana/)

Properl and consistent resource tagging is difficult, especially since some resources are automatically created, and others manually, by different teams, in different geographic locations, through different stages of the development pipeline. 

The solution is to do it the Torque way. In other words, tag *environments* rather than single *resources*. A whole environment is what makes the business sense and helps you to really understand the data.

Using Torque tagging capabilities, you can be sure you are covered, enforce your own tagging policy, and make sure any launched environment is tagged correctly, with the tags that you need.

There are 3 types of tags in Torque:

## System Tags
  
  Torque creates several tags out of the box to help with your cloud book keeping:
  - *sandbox-name* : the name that was given to the environment
  - *blueprint-name* : the template which the environment was built from
  - *space-name* : the name of the space 
  - *owner-email* : email of the user who deployed the environment 

  Torque will automatically tag all cloud resources with these tags as the name and will also populate the tag value.

## Built-in Tags
  
  These tags will be created by Torque, but the user who deploys the environments sets the tag's *value*.
  Currently, Torque supports the following built-in tags:
  - activity_type : the purpose for launching this environemt. It allows the environment's end-user to indicate the purpose of the environment. The end-user can choose from a list of pre-defined values such as dev, test, demo... etc. while the account admin can also edit this list and add more buisness activities to this tag.

  **To customize the activity_type tag:**

    1. Open **Administration** and click **Tags**.
    2. Edit the **activity_type** tag.

    > ![Locale Dropdown](/img/edit-activity-type.png)

    3. You can change the default value, possible values and description.

    4. Click **Apply**.


## Custom Tags

Custom tags are tags that are completely defined by you according to your policy and needs. You will define both the tag *name* and *value*. The Torque account admin creates the custom tags, and defines their name, default value, and **scope**. The scope determines who will define their final value, and when. 

Torque defines 4 scopes for custom tags: account, space, blueprint, and sandbox. 

- *account* scope: The tag's value is set once during the tag's creation by the account admin. The tag's value will be identical for all resources in all environments. 
- *space* scope: The tag's default value is set during the tag's creation, but it can be overrided with separate value on each space by the space admin. All resources created by all environments in the same space will have the same tag value.
- *blueprint* scope: The tag's default value is set during the tag's creation, but it can be overrided with separate value on each blueprint by the blueprint developer. All resources created by environments using this blueprint will have the same tag value.
- *sandbox* scope : The tag's default value is set during the tag's creation, but it can be overrided with separate value by the end user when they deploy an environment.

:::tip Notes

- Any custom tag will be applied to all resources created in all environments in this Torque account. If its value was not overriden in its defined scope it will be deployed with the default value.
- Torque supports a maximum of 20 custom tags.
:::

### Possible Values for custom tags

As the account admin, when you create a custom tag you can limit the allowed values which the other users will be able to use to a closed list of possible values. When the user would override the tag's value they will see a dropdown list of the possible values that the account admin defined, and will only be able to select one of these values.

### Creating a custom tag

1. Open **Administration** and click **Tags**.
2. click **+ New Tag** and follow the instructions.

### Overriding a custom tag's default value

1. Space Scope: Go to the space settings page --> Tags and select the tag value which you wish to override.
2. Blueprint Scope: Go to the blueprints page, and click on the ... menu for the blueprint you which to override the tag. Click on Manage Tags.
3. Sandbox Scope: When you launch an environment, you will see in the tags section the Sandbox scope tags and you will be able to override it.