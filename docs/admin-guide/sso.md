---
sidebar_position: 39
title: SSO Configuration
---

With just a few simple steps, your organization’s employees can log into Torque with their corporate accounts using SSO. 

SSO integration provides enhanced security and significant cost-savings as you no longer need to manage your user accounts in Torque and your employees don’t need to remember another set of credentials. Quick, easy and hassle-free.

This is done by integrating your organization's identity provider with Torque's identity management system. Torque uses Okta for identity management and supports integration with all identity providers (IdPs).
In this article:
* [How this works](/admin-guide/sso#how-this-works)
* [Integrating your IdP with Torque](/admin-guide/sso#integrating-your-idp-with-torque)
* [Associating a user to multiple spaces](/admin-guide/sso#associating-a-user-to-multiple-spaces)
* [Mapping Torque user groups to IdP groups](/admin-guide/sso#mapping-torque-user-groups-to-idp-groups)

## How this works
1. Your Idp admin creates an application on your IdP that defines the relevant users, as explained in the section below.
2. We map your IdP's client application to Torque's identity management and provide you with an SSO-enabled account.
3. A member of your organization uses this account to log in.
4. The user is redirected to Torque's Corporate Account SSO (Single Sign On) login page.
5. The user enters their corporate email address and password.
6. We authenticate the user against your IdP and grant access to Torque.

## Integrating your IdP with Torque

1. On your IdP, create a new client application.
2. In the application, do the following:
   1. Include the users that will access Torque.
   2. For each user, specify the following:
      * __space_name__: Torque Space in which the user will operate.
      * __space_role__: User's role in that space, as defined in __Administration > Roles > Space Roles__. To add a user to multiple spaces, see Associating a user to multiple spaces section below.
      * (Optional) __timezone__ : The user's timezone in IANA format (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
3. Save the application.
4. Copy the relevant details from the application. These may change depending on your IdP - see this Okta help article for details. For example, these are the details for SAML 2.0:
   * IdP Issuer URI
   * IdP Single Sign-On URL
   * IdP Signature Certificate
5. Go to the Quali Support Center and add a new ticket, requesting SSO integration:
   1. Click __+ Add__ in the top left corner.
   2. From the __Requester__ drop-down list, select __Torque__.
   3. From the __Form__ drop-down list, select __Torque Support Request__.
   4. Enter a __Subject__. For example: "SSO integration for Quali", and in the description, request SSO integration, and provide the names of the custom user attributes and the application details.
   5. Click __Submit__.

   Once SSO integration is set up, the application’s users will be able to use your SSO-enabled account to log in to Torque, as explained in Login to Torque.

NOTE: When the user first logs in via SSO, Torque sets up the user's profile, including contact details, space associations and space/account role settings. However, it is possible to update the user's profile on subsequent SSO logins as well. For details, contact Torque Support.

## Associating a user to multiple spaces
You can also add a user to multiple spaces, each with a different role. To do so, provide comma-separated values of the space names and corresponding space roles. For example, you could add a user as Space Member to the Trial space and Space Developer to the DevOps space.

__Points to consider:__

* If there are multiple spaces and only one role, reuse that role in all specified spaces.
* If there are multiple roles for the same space, use the first valid one. 
* If the role name is invalid (unknown value in Torque), assign the Space Member role.
* If there are more spaces than roles, assign Space Member to the extra spaces.
* If there are more roles than spaces, ignore those extra roles.
* If the space name is invalid (unknown value in Torque), ignore that space and its corresponding role.

## Mapping Torque user groups to IdP groups

Each group in Torque as an ‘IdP identifier’ field. For SSO users to be assigned to the group automatically, the field must contain the same identifier (usually a GUID) as the group in the IdP (the groups don’t have to have the exact same name)

In Torque, this is can be set by editing a group in the ‘Groups’ page under account settings.

> ![Locale Dropdown](/img/groups-1.png)

Finding the group identifier in the IdP is specific for each IdP, in the case of Azure active directory, this is the ‘Object Id’ field of a group:

> ![Locale Dropdown](/img/groups-2.png)

For groups that have this field set, users are assigned and unassigned automatically with each login based on the groups they belong to in the IdP.

Users that do not come from an IdP (have a password) or come from an unsupported IdP (all but Okta and Azure AD) can still be added and removed manually from mapped groups.

### Configuring Azure active directory to include group information.

Assuming a working AAD SSO setup, the app in Azure needs to be configured to include the groups additional claim.
In ‘App registration’ find the relevant app and go to Token configuration.
Add the groups claim (using the default settings)

> ![Locale Dropdown](/img/groups-3.png)

On the next login, users should be assigned automatically to groups they belong to in Azure and are mapped in Torque (note it sometimes takes a short time before the claims start being sent by AAD after this change)

### Troubleshooting

If this doesn't work, it is possible to debug the SSO flow from the browser of an authenticated user.
open the network tab in the development tools of the browser, check the ‘Preserve log’ option or equivalent and perform an SSO login.
one of the calls will be to ‘idp-callback’, inspect the payload of this call.

> ![Locale Dropdown](/img/groups-4.png)

The call should contain an id_token field, the contents is a JWT token containing all the claims (user information) sent from the IdP to Torque (through the browser).
Copy the entire contents of this field (without the field name) and paste it into a JWT token decoder (e.d., on https://jwt.io) to view the contents.

> ![Locale Dropdown](/img/groups-5.png)

Verify that group information is being included in a format similar to the above or update the app settings in AAD if it’s missing.

You can also look for log entries 'Valid login through AzureAD Idp detected' that should include information about group Ids received from the IdP.

### Configuring Okta to include group information.

Assuming a working Okta configuration, to get group sync working we need to have group information passed to Okta from the IdP and forwarded from it to Torque with each user login.

This document will show how this is done when the IdP behind Okta happens to be Azure AD (in a SAML 2 configuration and not the OIDC/JWT flow as above), but it is probably similar for other IdPs.

When configuring Azure AD to Okta, you usually set custom attribute in the profile editor to match claim coming from the IDP:

> ![Locale Dropdown](/img/groups-6.png)

Each custom attribute has an ‘external name’:

> ![Locale Dropdown](/img/groups-7.png)

Then click ‘edit on ‘attributes & Claims’
The long URLs (claim names) are what you need to set as ‘external name’ in the attribute in Okta.

> ![Locale Dropdown](/img/groups-8.png)

On this screen you are also able to have Azure AD send group related information
Click the “+Add a group clam” button and use the default setting.

In Okta, create a new attribute in the profile editor for groups (note the type is string array), the external name might be different from the example below.

> ![Locale Dropdown](/img/groups-9.png)

Next, we need to map the groups attribute we just created (that will be filled with group data on login) to a ‘Groups’ field in the user profile that is sent to Torque. Open the ‘mappings’ screen:

> ![Locale Dropdown](/img/groups-10.png)

The mapping should include a ‘groups’ field, map to it the attribute we just added (appuser.groups)

> ![Locale Dropdown](/img/groups-11.png)

### Troubleshooting

If groups still don’t get sync automatically after this is done, it is possible to inspect the information sent from a browser of an authenticated user using a SAML inspection addon.

This shows what to expect when using SAML-tracer:

> ![Locale Dropdown](/img/groups-12.png)