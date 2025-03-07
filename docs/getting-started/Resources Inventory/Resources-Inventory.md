---
sidebar_position: 1
title: Resources Inventory
---

## Introduction

Welcome to Torque Resources Inventory, an advanced solution designed to facilitate comprehensive visibility and governance over your cloud infrastructure. Torque Resources Inventory connects to your cloud accounts with read-only permissions, allowing for in-depth discovery, categorization, and curation of cloud resources. Users can filter their resources based on type, location, or Infrastructure as Code (IaC) status, providing fine-grained control over their cloud estate.

Torque Resources Inventory classifies resources by their IaC status as follows:

- **Unmanaged**: Resources that have been created manually and are not governed by IaC.
- **Codified**: Resources that are integrated with and managed by your existing IaC practices.
- **Managed**: Resources that are managed under Quali's governance framework.

Torque Resources Inventory allows users to curate selected resources into a cart, transforming them into Terraform configuration files and state files. These artifacts are readily available for download, enabling seamless integration into Infrastructure as Code workflows.

> ![resource-inventory](/img/resource-inventory.png)

## Key Features

Torque Resources Inventory offers a suite of features to help you manage your cloud infrastructure effectively:

- **Cloud Resource Discovery**: Automatically discovers and inventories all resources within your Azure subscription, providing a holistic view of your cloud environment.
- **Resource Filtering**: Offers advanced filtering capabilities, allowing resources to be categorized by type, geographical region, and IaC status for efficient management.
- **IaC Integration**: Facilitates the generation of Terraform files and state for unmanaged resources, simplifying the transition of manually provisioned resources into IaC.
- **Curate and Export**: Enables the selection of specific resources to generate Terraform artifacts, which can then be downloaded for future use or integration into existing workflows.

## Adding a Cloud Account

To begin using Torque Resources Inventory, you must connect your cloud account. Currently, AWS and Azure clouds are supported.

### Supported cloud providers
* [AWS](/getting-started/Resources%20Inventory/AWS-Setup)
* [Azure](/getting-started/Resources%20Inventory/Azure-Setup)

## Cloud Resources Inventory

Upon connecting your account, Torque Resources Inventory will automatically perform a full scan and inventory all resources in your subscription. The Cloud Resources Inventory page presents a comprehensive view of your resources, which can be filtered by:

- **Resource Type**: Categories such as virtual machines, databases, and networking components.
- **Location**: Filter resources by their geographical deployment region.
- **IaC Status**: Indicate whether resources are unmanaged, codified, or managed.

Torque Resources Inventory provides insights into which resources are under IaC management and highlights unmanaged resources that may need to be incorporated into governance frameworks.

### Resource Details View

Clicking on a specific resource in the inventory will open a detailed view, which includes:

- **Resource Metadata**: Key details such as resource name, type, region, and associated tags.
- **IaC Status**: The current management status of the resource, including any associated Terraform configurations.

## Curating Resources and Downloading Artifacts

Curate your cloud resources with ease and transform them into Terraform configuration files and state files. This helps to standardize your infrastructure management through Infrastructure as Code. Here is how you can proceed:

### Steps to Curate Resources

1. Navigate to the Cloud Resources Inventory page.
2. Use the filters to locate the resources you wish to curate.
3. Select the resources to curate by clicking on them. There are two methods to add resources to the curate cart:
   - **Multi-Select Method**: Hold down the control key (or command key on Mac) to select multiple resources simultaneously, then click Add to Curate Cart to add all selected resources.
   - **Individual Add Method**: Click the plus icon next to each resource to add it individually to the cart.
4. Review the items in your cart to ensure all desired resources are included.
5. Click Curate. A summary dialog will appear, allowing you to confirm your selection. Click Approve & Curate to proceed.
6. Torque Resources Inventory will generate a Terraform configuration and state file for the curated resources. The curation process may take a few minutes.
7. Once completed, the generated artifacts will be available for download.

### Downloading the Artifacts

- Upon generation, both the Terraform configuration file and state file will be available for download.
- Click the Download button to download the artifacts as a compressed package.

### Using the Cart

The Cart feature allows you to select and curate multiple resources before generating Terraform artifacts. You can add or remove resources from the cart as needed and proceed to artifact generation when ready.

### What Can Be Done with the Downloaded Terraform Files

The Terraform configuration and state files generated by Torque Resources Inventory can be used to manage your cloud resources through Infrastructure as Code. Possible actions include:

- **Integration with Existing IaC Projects**: Incorporate the generated Terraform files into existing IaC projects to maintain consistency in infrastructure management.
- **Manage Resources via Terraform**: Utilize the generated files to manage manually provisioned resources, simplifying their incorporation into existing IaC frameworks.
- **Resource Deployment and Modification**: With Terraform, apply, modify, or destroy cloud resources, granting precise control over curated infrastructure.
- **Version Control**: Store the Terraform files in a version control system such as Git, enabling collaborative management, change tracking, and versioning of infrastructure.

## Best Practices for Using Torque Resources Inventory

To maximize the benefits of Torque Resources Inventory, consider the following best practices:

- **Tag Resources Consistently**: Ensure that all cloud resources are tagged appropriately for easier filtering and curation.
- **Frequent Scans**: Regularly scan your cloud accounts to maintain up-to-date visibility of resources and changes.
- **CI/CD Integration**: Integrate downloaded Terraform files into CI/CD pipelines to automate infrastructure deployment and management processes.
- **Periodic IaC Status Review**: Regularly review the IaC status of resources to identify unmanaged entities and bring them under proper governance.

## Frequently Asked Questions (FAQ)

### What Cloud Providers Are Supported?

Currently, Torque Resources Inventory supports only Azure and AWS clouds. Support for other cloud providers, such as Google Cloud, is planned for future releases.

### What Permissions Are Required for Torque Resources Inventory?

Torque Resources Inventory requires read-only permissions to your Azure subscription, specifically the Reader role, to perform resource discovery and inventory.

### Can I Edit the Generated Terraform Files?

Yes, you can modify the generated Terraform files to suit your specific requirements before utilizing them in your IaC workflows.

### How Often Should I Scan My Cloud Account?

It is recommended to scan your cloud account at least weekly to ensure that your resource inventory remains up-to-date.

## Troubleshooting

### Unable to Connect to Azure Account

If you are experiencing issues while connecting your Azure account to Torque Resources Inventory, verify the following:

- The provided credentials have read-only permissions.
- The subscription ID is accurate.
- There are no network or firewall settings preventing Torque Resources Inventory from accessing Azure.

### Terraform Generation Failed

If Terraform generation fails:

- Verify that all selected resources have the necessary metadata available.
- Ensure there are no permission issues preventing Torque Resources Inventory from accessing resource details.
- Contact Torque Resources Inventory support if the issue persists.

## Support

For further assistance, please contact the Torque Resources Inventory support team at [support@quali.com](mailto:support@quali.com) or visit our [support page](https://support.quali.com).

## Glossary

- **IaC (Infrastructure as Code)**: The practice of managing and provisioning computing infrastructure through machine-readable configuration files.
- **Terraform**: An open-source IaC tool that allows users to define and provision infrastructure using a declarative configuration language.
- **Reader Role**: A built-in Azure role that provides read-only access to cloud resources.

Torque Resources Inventory provides an effective mechanism to address cloud sprawl, enabling you to transition unmanaged resources into managed, codified infrastructure seamlessly integrated into your IaC strategy.