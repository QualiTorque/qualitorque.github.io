---
sidebar_position: 12
title: Configuring Cost for Azure
---

## Prerequisites 

1. Create an application and register it in Azure AD. To do so, navigate to "App Registrations" and click on __New Registration__. Follow the steps (no need to provide redirect URl, just the name will do). Take a note of the  __Tenant Id__ and  __Application Id__ as they will be needed later in the process. 
2. Click on __Add a Certificate or Secret --> New client secret__ --> __Add__, and take a note of the created __Value__ (it will be used later in the application secret configuration)
3. Assign the __Cost Management Reader__ (or, __Cost Management Contributor__) Role to the application:
   1. Navigate to __Subscriptions__ and click on the subscription where you would like Torque to collect the cost
   2. On the left side panel select __Access control (IAM)__
   3. Click the __Role assignments__ tab
   4. Click __Add__ > __Add role assignment__. If you don't have permissions to assign roles, the Add role assignment option will be disabled, in this case contact your Azure administrator for help.
   5. On the Roles tab, search for __Cost Management Reader__ (or, __Cost Management Contributor__) and Click __Next__.
   6. On the Members tab, select __User, group, or service principal__  and Click __Select members__.
   7. In the search box, search for your created application from step 1.
   8. Click __Select__ and then __Review and Assign__ to finish the procedure. 

Make sure you have all the following information for the application:
  * __Subscription Id__
  * __Tenant Id__
  * __Application Id__
  * __Application Secret__ 

## Configuration

1. __Create an Azure cost collection target:__
   1. Go to __Administration > Cloud Accounts > Cost Collection Target__.
   2. Click __Add Cost Collection Target__.
   3. Select __Azure__.
   4. Specify the cloud account's details (see [Prerequisites](#prerequisites)):
      * __Subscription Id__
      * __Tenant Id__
      * __Application Id__
      * __Application Secret__ 
   5. Click __Finish__.
   6. Click the cost collection target's 3 dot menu and select __Validate__ to make sure it works (i.e. cost data can be collected).
      * If validation fails, it means there is a problem with one or more of the provided parameters. Return to the prerequisites section and correct them as required.

2. __Enable a cost collection target for your Azure account:__
   1. Go to __Administration > Cloud Accounts > Cost Collection Target__.
   2. Click the desired cost collection target's __Enabled__ toggle.

     > ![Locale Dropdown](/img/enable-cost-target.png)
