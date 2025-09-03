---
sidebar_position: 3
title: Input Sources
---

# Input Sources

## Overview
The **Input Sources** feature is a significant enhancement for Torque users, providing a more dynamic and flexible way to retrieve and manage input values from external data sources. Whether you're dealing with multiple S3 buckets or preparing for future integrations with other external sources, this feature streamlines your workflow and ensures your configurations are always up-to-date.  
During the launch environment process, this feature simplifies the handling of multiple data sources by using a single configuration template, and allowing real-time listing of S3 bucket objects.

## Key Benefits
* **Real-Time Data Access:** Retrieve up-to-date values from external sources such as S3 buckets or HTTP servers, ensuring that your configurations are always in sync with the latest data.
* **Flexible Source Management:** Define and reuse input sources across different blueprints, making it easier to manage and update configurations.
* **Enhanced User Experience:** Simplifies the process of selecting input values by dynamically generating options based on real-time data from external sources.

## Supported External Sources

### `S3 Buckets`

The S3 input source supports listing objects within S3 buckets, such as `s3-object` and `s3-object-contents`.

**Configuration Fields:**

| Field                | Description                                                                 | Allow Overrides |
|----------------------|-----------------------------------------------------------------------------|-----------------|
| Credentials          | AWS credentials for access                                                  | No              |
| Bucket Name          | Name of the S3 bucket                                                       | Yes             |
| Source Type          | `s3-object` or `s3-object-content`                                          | No              |
| object_key           | (For `s3-object-content`) Object key to list                                | Yes             |
| json_path            | JSONPath for extracting desired values                                      | Yes             |
| display_json_path    | (Optional) JSONPath for display values                                      | Yes             |
| path_prefix          | (Optional, `s3-object` only) Path prefix to filter objects                  | Yes             |
| regex_filter         | (Optional) Regex filter to refine results                                   | Yes             |

---

### `Azure Blob Storage`

The Azure input source supports listing blobs within Azure Blob Storage containers, with types `azure-blob` and `azure-blob-contents`.

**Configuration Fields:**

| Field                  | Description                                                                 | Allow Overrides |
|------------------------|-----------------------------------------------------------------------------|-----------------|
| Credentials            | Azure credentials for access                                                | No              |
| Storage Account Name   | Name of the Azure Storage Account                                           | Yes             |
| Container Name         | Name of the Blob Container                                                  | Yes             |
| Source Type            | `azure-blob` or `azure-blob-content`                                       | No              |
| blob_name              | (For `azure-blob-content`) Blob name to list                               | Yes             |
| json_path              | JSONPath for extracting desired values                                     | Yes             |
| display_json_path      | (Optional) JSONPath for display values                                     | Yes             |
| path_prefix            | (Optional, `azure-blob` only) Path prefix to filter blobs                  | Yes             |
| regex_filter           | (Optional) Regex filter to refine results                                  | Yes             |

---

### `HTTP Server`

:::info
This feature is available in currently in general beta.
:::

The HTTP Server input source is a powerful feature that allows you to connect to your own HTTP server to retrieve dynamic data. This is particularly useful for populating combo boxes on the launch form with values computed by user-defined code running on your server.



#### Example Architecture Diagram

Below is an example SVG diagram illustrating the architecture for using an HTTP Server as an input source:

![HTTP Server Input Source Architecture](/img/http-input-source.svg)


**Configuration Fields:**

| Field                | Description                                                                 | Allow Overrides |
|----------------------|-----------------------------------------------------------------------------|-----------------|
| Agent                | Agent to proxy all calls through                                            | No              |
| Authority            | URL of your HTTP server (protocol & hostname)                               | No              |
| Path                 | (Optional) API path of your HTTP server                                     | No              |
| Query                | (Optional) Query string for your HTTP server                                | No              |
| Headers Dictionary   | (Optional) Custom headers                                                   | No              |
| Skip SSL Verification| Skip SSL certificate verification                                           | No              |
| Timeout              | Maximal timeout for the HTTP server                                         | No              |
| json_path            | JSONPath for extracting desired values                                      | Yes             |
| display_json_path    | (Optional) JSONPath for display values                                      | Yes             |
| regex_filter         | (Optional) Regex filter to refine results                                   | Yes             |

---

## How It Works

### Creating an Input Source

Torque role: Account admin

:::tip __Important__
Modifying or deleting an Input Source may cause blueprints that use the Input Source to fail.
:::

#### General Steps

1. **Navigate to Input Sources:** Access the Input Sources section in your Torque Account Settings.  
2. **Add New Source:** Click on the "Connect a new Input Source" button.  
3. **Select preferred provider:** Choose between AWS S3 bucket, Azure Blob Storage, or HTTP Server.

#### S3 Input Source

1. **Input Source Details:**  
   - Source Name  
   - Description (Optional)  
   - Shared Spaces  

2. **S3 Input Source Setup:**  
   - Credentials  
   - Bucket Name  
   - Source Type  

3. **Source Type Parameters:**  
   - object_key (for `s3-object-content`)  
   - json_path  
   - display_json_path (optional)  

4. **Advanced Filters:**  
   - path_prefix (optional, `s3-object` only)  
   - regex_filter (optional)  

#### Azure Blob Storage Input Source

1. **Input Source Details:**  
   - Source Name  
   - Description (Optional)  
   - Shared Spaces  

2. **Azure Blob Storage Input Source Setup:**  
   - Credentials  
   - Storage Account Name  
   - Container Name  
   - Source Type  

3. **Source Type Parameters:**  
   - blob_name (for `azure-blob-content`)  
   - json_path  
   - display_json_path (optional)  

4. **Advanced Filters:**  
   - path_prefix (optional, `azure-blob` only)  
   - regex_filter (optional)  

#### HTTP Server Input Source

1. **Input Source Details:**  
   - Source Name  
   - Description (Optional)  
   - Shared Spaces  

2. **HTTP Server Input Source Setup:**  
   - Agent  
   - Authority  
   - Path (optional)  
   - Query (optional)  
   - Headers Dictionary (optional)  
   - Skip SSL Verification  
   - Timeout  
   - json_path  
   - display_json_path (optional)  
   - regex_filter (optional)  

3. **Preview and Save:** Click the "Preview Results" button to verify that your setup retrieves the correct data.  
   When you're satisfied, click Save & Apply to finalize your new Input Source creation.

---

### Using an Input Source in Blueprints

Torque role: Space Developer

To use an input source in a blueprint:

1. **Define the Input:** In your blueprint YAML, define an input with the type `input-source`.
2. **Reference the Source:** Use the `source-name` attribute to reference the created input source.
3. **Specify Dependencies (if any):** Use the `depends-on` and `overrides` attributes to manage dynamic dependencies, such as bucket names or object keys.
4. **Retrieve and Use Values:** The blueprint will now dynamically retrieve and display the values from the specified input source when launching the environment.

**Example YAML snippet** (S3):

```yaml
inputs:
  bucket:
    type: string

  object:
    type: input-source
    source-name: bucket-objects-source
    depends-on: bucket
    overrides:
    - bucket_name: '{{ .inputs.bucket }}'
```

**Example YAML snippet** (HTTP Server):

```yaml
inputs:
  region:
    type: string

  resource:
    type: input-source
    source-name: http-server-resource-list
    depends-on: region
    overrides:
    - query: 'region={{ .inputs.region }}'
```

More usage examples can be found [here](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#inputs).

---

## Examples & Deployment

### HTTP Server Example: AWS Resource Listing Server

This example demonstrates how to list S3 buckets and RDS instances per account in AWS using a simple Flask server.

**Notes:**
1. The example is built for demo purposes with some hard-coded values and is meant to be deployed in playground environments.
2. A service account with the proper AWS role is pre-created for assuming roles in other accounts, passed in the `role_arn` query parameter to the server.

**Deployment Details:**
- If deployed in a namespace called `input-sources`, the service FQDN is:  
  `http://aws-input-source-service.input-sources.svc.cluster.local`
- Service name: `aws-input-source-service`
- Namespace: `input-sources`
- Cluster domain: `svc.cluster.local`

**Attached Example Files:**
1. `server.py` - Simple Flask server implementation.
2. `Dockerfile` - Container build file for the server.
3. `aws-input-source.yaml` - Kubernetes manifest with deployment and service.
4. `aws-input-source-server.yaml` - Blueprint that deploys the server.


:::note
To obtain the example files (`server.py`, `Dockerfile`, `aws-input-source.yaml`, `aws-input-source-server.yaml`), please contact your account manager.
:::

---

## Additional Considerations

- **JIT Data:** To ensure that the data is up-to-date (Real-Time Data Access), the input source values are retrieved just-in-time (JIT).
- **Max Result Limit:** A maximum of 1000 results can be returned to help manage performance and usability.
