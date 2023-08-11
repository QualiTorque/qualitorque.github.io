---
sidebar_position: 8
title: Existing Environment Import
---

## Import

Torque lets you import your existing environments. Once the environment is imported it becomes a fully mananged environment in Torque. This allows you to gain visibility of all the environments that were created outside of Torque and use Torque environment services like drift detection, updates, cost tracking & introspection with the imported environments.

### Import without a blueprint

The import flow supports auto-generating a blueprint as part of the import request. This is usefull in case you need to import an environment with a single grain and you don't have a corresponding blueprint yet. 

Example of a basic API request:
```jsx
curl -L 'https://portal.qtorque.io/api/spaces/<SPACE_NAME>/environments/import' \
-H 'Authorization: Bearer <TOKEN>' \
-H 'Content-Type: application/json' \
-d '{
    "environment_name": "<ENV_NAME>",
    "inputs": {        
        "agent": "<AGENT_NAME>"
        // additional inputs as needed
    },
    "grains": [
        {
            "kind": "terraform",          
            "source": {
                "store": "<REPO_NAME>",
                "path": "<PATH_TO_TERRAFORM_MODULE>"
            },
            "credentials": ["<CLOUD_CREDENTIALS>"],
            "backend": {
                "type": "s3",  // s3|azurerm|gcs|http
                "bucket": "<BUCKET_NAME>",
                "region": "<REGION_NAME>",
                "key": "<PATH_TO_TF_STATE_FILE>"
            }
        }
    ]
}'
```

Full API reference is available [here](https://portal.qtorque.io/api_reference/#/paths/api-spaces-space_name--environments-import/post).

* It's important to note that the backend section is mandatory and must reference a *.tfstate file in a supported backend (s3/azurerm/gcs/http). Also, the input values that are provided as part of the import request must be the same values that were used to provision the terraform module. If there's a missmatch in the input values then Torque will detect a drift and fail the import.


### Import using existing blueprint

The import feature also supports using an existing blueprint. It's usefull in case where you need to import an environment with multiple grains or in case that you need to import multiple environments that were created from the same configurations. Full API reference is available [here](https://portal.qtorque.io/api_reference/#/paths/api-spaces-space_name--environments-import_using_blueprint/post).


### Limitations

* Import is currently supported only for environments created with Terraform. 
* The import flow with auto-generated blueprint supports only a single grain.


## Release

The release flow allows to end a Torque environment without destroying the underlying resources. This feature is currently available only using an [API call](https://portal.qtorque.io/api_reference/#/paths/api-spaces-space_name--environments--environment_id--release/delete).
