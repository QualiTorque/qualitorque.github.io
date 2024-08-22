---
sidebar_position: 3
title: Input Sources
---

# Input Sources

## Overview
The **Input Sources** feature is a significant enhancement for Torque users, providing a more dynamic and flexible way to retrieve and manage input values from external data sources. Whether you're dealing with multiple S3 buckets or preparing for future integrations with other external sources, this feature streamlines your workflow and ensures your configurations are always up-to-date.
During the launch environment process, this feature simplifies the handling of multiple data sources by using a single configuration template, and allowing real-time listing of S3 bucket objects.


## Key Benefits
* **Real-Time Data Access:** Retrieve up-to-date values from external sources such as S3 buckets, ensuring that your configurations are always in sync with the latest data.
* **Flexible Source Management:** Define and reuse input sources across different blueprints, making it easier to manage and update configurations.
* **Enhanced User Experience:** Simplifies the process of selecting input values by dynamically generating options based on real-time data from external sources.

## Supported External Sources
**S3 Buckets:** The initial implementation supports listing objects within S3 buckets, such as S3-object and S3-object-contents. Future updates may include additional external sources like Git repositories.

## How It Works
### Creating an Input Source
Torque role: Account admin

:::tip __Important__
Modifying or deleting an Input Source may cause blueprints that use the Input Source to fail.
:::


To create an Input Source:

**1. Navigate to Input Sources:** Access the Input Sources section in your Torque Account Settings.
**2. Add New Source:** Click on the "Connect a new Input Source" button.
**3. Select preferred provider:** Click on the AWS S3 bucket and button. 
**4. Input Source Details:**
* __Source Name:__ Name your Input Source
* __Description (Optional):__ Shortly describe what is the purpose of use of this Input Source. Adding a description is recommended, for better usability by other Space members.
* __Shared Spaces:__ select the shared Spaces you want this Input Source to be available for. 


**4. Input Source Setup:**
* __Credentials:__ Select AWS credentials for access.
* __Bucket Name:__ Enter the name of the S3 bucket.  
_You can check the 'Allow overrides' checkbox if you want to enable overriding the bucket name_
* __Source Type:__ Choose 's3-object' or 's3-object-content' as the source type.

**5. Define Source Type Parameters**: Depending on your selection, define and specify the filters you'd like to use for narrowing-down the list of results.
If you've selected 's3-object-content', you need to define these parameters:
* __object_key:__ Enter the object_key for your list  
_You can check the 'Allow overrides' checkbox if you want to enable overriding the object_key_
* __File Format:__ Currently we support only JSON
* __json_path:__ Enter the JSONPath for extracting the desired values  
_You can check the 'Allow overrides' checkbox if you want to enable overriding the JSONPath_
* __display_json_path (optional):__ Enter the JSONPath for extracting the corresponding display values  
_You can check the 'Allow overrides' checkbox if you want to enable overriding the display_json_path_

**6. Advanced Filters:**
* __path_prefix (optional):__ For s3-object type only, you can Define a path prefix to filter objects.  
_You can check the 'Allow overrides' checkbox if you want to enable overriding the path_prefix_
* __regex_filter (optional):__ For both S3 source types, you can apply a regex filter to refine the list of returned objects.  
_You can check the 'Allow overrides' checkbox if you want to enable overriding the regex_filter_

**5. Preview and Save:** Click the "Preview Results" button to verify that your setup retrieves the correct data.
When your satisfied, click Save & Apply to finalize your new Input Source creation.



### Using an Input Source in Blueprints
Torque role: Space Developer


To use an input source in a blueprint:

**1. Define the Input:** In your blueprint YAML, define an input with the type input-source.
**2. Reference the Source:** Use the source-name attribute to reference the created input source.
**3. Specify Dependencies (if any):** Use the depends-on and overrides attributes to manage dynamic dependencies, such as bucket names or object keys.
**4. Retrieve and Use Values:** The blueprint will now dynamically retrieve and display the values from the specified input source when launching the environment.
Example YAML snippet:
```yaml

inputs:
  bucket:
    type: string
  object:
    type: input-source
    source-name: bucket-objects-source
    depends-on:
    - bucket
    overrides:
    - bucket_name: '{{ .inputs.bucket }}'

```

## Additional Considerations
**JIT Data:** To ensure that the data is up-to-date (Real-Time Data Access), the input source values are retrieved just-in-time (JIT). 

**Max Result Limit:** A maximum of 1000 results can be returned to help manage performance and usability.
