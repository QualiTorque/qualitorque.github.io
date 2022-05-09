---
sidebar_position: 3
---

# Running your first workload in Torque

To run your first workload in Torque you need to complete the following steps:

1. Connect your asset repositories to Torque. Torque will automatically discover your assets (Terraform modules and helm charts) and will let you choose the assets which will be used in the blueprints. After you chose the relevant assets, Torque will automatically generate initial blueprints from your assets.
2. Connect a cloud account - a cloud account is where the deployment will be executed - for example the terraform plan and apply commands, and the helm install command. 
3. Edit your blueprint to better 