---
sidebar_position: 2
title: REST API
---

The Torque REST API allows client applications to perform some of the actions you can perform in Torque's web UI application and automate the consumption of Torque environments as part of a CI/CD process. Available actions include: 
* Get/validate/publish blueprints
* Update/delete editable blueprints
* Manage blueprint policy
* Launch/manage environments
* Get/create agents
* Manage account security policies
* Manage Torque settings*

![Locale Dropdown](/img/rest-api.gif)

## Using the REST API
To test the API methods, you will need an access token to be set in the __Authorize__ section. If you got to this page from your Torque account, we already made it available for you, but you can switch to a different token as needed.

To get a different token, use the __Get token__ function available under the __Access Tokens__ section. After running the method, copy the ```access_token``` you get in the response and set it in the Authorize ```Bearer access_token``` field's. For example: Bearer fqSWuw72BbUVFn8AbokF77GJ0r5KEn9MiZjLXF8kBwI.