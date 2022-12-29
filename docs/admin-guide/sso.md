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
      * (Optiona) __timezone__ : The user's timezone in IANA format (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
3. Save the application.
4. Copy the relevant details from the application. These may change depending on your IdP - see this Okta help article for details. For example, these are the details for SAML 2.0:
   * IdP Issuer URI
   * IdP Single Sign-On URL
   * IdP Signature Certificate
5. Go to Quali’s Support Center and add a new ticket, requesting SSO integration:
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
