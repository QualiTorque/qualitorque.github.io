---
title: Custom Roles
description: How to define and use custom roles in Torque for advanced governance and access control.
sidebar_position: 4
---

# Custom Roles

Custom roles allow you to define your own roles for specific usage in your organization (for example, a FinOps role, security auditor, or a limited-access operator). Once defined, custom roles can be associated with users and/or groups, providing fine-grained control over permissions.

> ![custom-rbac](/img/custom-rbac.png)


## Defining a New Role

When defining a new custom role, you will need to provide the following details:

- **Name**: The name of the custom role (e.g., "FinOps Analyst").
- **Description**: A short description of the role's purpose.
- **Role Template**: Decide whether the new role will be an account-level or space-level role, and select an existing role as a base template for the new role's permissions.


import pic1 from '/img/custom-rbac-create-new.png';
import pic2 from '/img/custom-rbac-premissions.png';
import pic3 from '/img/custom-rbac-compare-roles.png';

> <img src={pic1} alt="custom-rbac" style={{width: 700}} />

After selecting a template, you can customize the set of permissions for the new role. Custom roles can be edited at any time if permissions need to be modified.


> <img src={pic2} alt="custom-rbac" style={{width: 700}} />

## Comparing Role Permissions

In the main Roles screen, you can also compare role permissions to identify differences between roles.

> <img src={pic3} alt="custom-rbac" style={{width: 700}} />

## Use Case Examples

### Example 1: FinOps Role
A FinOps role can be created to allow users to view cost dashboards and reports, but not to launch or terminate environments.

- **Name**: FinOps Analyst
- **Description**: Can view cost data and reports, but cannot modify environments.
- **Permissions**: View cost dashboard, view reports, view environments (read-only).

### Example 2: Security Auditor
A Security Auditor role can be created to allow users to view environment configurations and audit logs, but not to make any changes.

- **Name**: Security Auditor
- **Description**: Can view all environment configurations and audit logs.
- **Permissions**: View environments, view audit logs, view blueprints (read-only).

### Example 3: Limited Operator
A Limited Operator role can be created to allow users to launch and terminate environments, but not to modify blueprints or manage users.

- **Name**: Limited Operator
- **Description**: Can launch and terminate environments only.
- **Permissions**: Launch environments, terminate environments.

## Managing Custom Roles

- Custom roles can be assigned to individual users or to groups.
- You can edit custom roles at any time to update their permissions.
- Use the role comparison feature to review and compare permissions between roles for governance and compliance.

For more information on managing users, groups, and permissions, see the [Roles and Permissions](./roles-and-permissions.md) page.
