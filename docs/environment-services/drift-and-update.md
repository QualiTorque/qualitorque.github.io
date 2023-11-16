---
sidebar_position: 2
title: Drift & Update
---

## Environment Updates

In the realm of infrastructure automation, Torque streamlines the setup and provisioning phases. However, in order to achieve true operational excellence, it is crucial to address the ongoing maintenance and management of provisioned environments. With the updates feature, Torque takes a significant leap forward, enabling DevOps teams to efficiently handle day-2 operations and effortlessly maintain the reliability, adaptability, and performance of their environments. By offering seamless redeployment options for IaC components with new code or updated input values, Updates empowers organizations to excel in the maintenance and management of provisioned infrastructures.

### Example use cases

1. Streamlined Development, Testing, and Debugging of IaC Changes:

The Updates feature in Quali Torque significantly accelerates the development and testing phase by offering a streamlined process for implementing and validating IaC changes. DevOps engineers can leverage this feature to seamlessly redeploy specific IaC components with new code, sourced directly from git commits. This capability eliminates the need to restart the entire environment from scratch, saving valuable time and effort.

By using Updates, DevOps engineers can make the necessary code adjustments, such as bug fixes or feature enhancements, and redeploy the affected components. This allows them to continue the environment deployment from the point of failure or modification, without wasting time on unnecessary repetitions. Engineers can focus on the specific issue at hand, analyze logs, and determine if there are problems with the IaC code.

2. Efficient Customization and Adaptation:
   
The ability to customize provisioned environments according to evolving requirements is critical for organizations. Updates facilitates this customization by enabling DevOps engineers to modify input parameters associated with IaC components. By redeploying components with updated input values, engineers can easily adapt the environment to meet changing needs without making code changes. This flexibility enhances agility, ensures optimal resource utilization, and enables organizations to respond swiftly to evolving business demands.

3. Seamless Deployment of IaC Code Changes:
   
Keeping infrastructure up-to-date with the latest enhancements and bug fixes is vital for maintaining performance and security. The Updates feature simplifies the deployment of IaC code changes by automatically detecting new commits in associated git repositories. DevOps teams can effortlessly introduce the latest improvements, ensuring that users benefit from an environment built on the most recent codebase. This streamlined process minimizes disruptions, eliminates compatibility concerns, and enhances the overall stability and reliability of provisioned infrastructures.

### Environment Updates

Environment updates are initiated manually by users, specifically those with expertise in infrastructure (such as DevOps), rather than end-users or consumers.
An update is initiated for a specific grain and can encompass the following changes:
  - Uploading a new version of Infrastructure as Code (IaC) from the Git repository.
  - Providing new values for the grain's inputs.
  - Triggering a restart of the grain (essentially redeploying it) without making any alterations.

Torque applies a smart rolling update mechanism that calculates which grains are affected by the updated one and ensures they are updated as well. This keeps the environment up-to-date while minimizing the impact. 
Users can choose to update the code version, inputs, both, or none during the same update operation.

To enhance user awareness and control, the user will see a "review" pop-up that summarizes the impending changes to the environment. This allows users to review the proposed modifications and either acknowledge or cancel them.

### Tracking code changes

Torque incorporates advanced tracking capabilities to monitor new commits in your IaC repository, ensuring that your environment remains up-to-date and aligned with your desired configuration. The tracking mechanism is based on the specifications outlined in your blueprint for the source of each grain. 
Please see the blueprint spec [here](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source).

Here's how Torque handles tracking based on different scenarios:

1. Default Branch Tracking:
  - If you haven't specified a particular branch, tag, or commit for a grain, Torque will deploy the grain from the default branch specified in your blueprint. Additionally, Torque will continuously track the default branch for new commits, allowing you to seamlessly benefit from any updates or changes.

2. Branch-based Tracking:
  - In cases where you have specified a branch name for a grain, Torque will deploy the grain from that specific branch. Furthermore, Torque actively monitors the specified branch, enabling it to promptly detect and incorporate new commits into the deployment process.

3. Tag-based Tracking:
  - When you have specified a tag name for a grain, Torque deploys the grain using the code associated with that particular tag. Subsequently, if the tag is applied to a different commit in the future, Torque will detect this change and notify you, ensuring that you stay informed about modifications and their potential impact.

4. Specific Commit Deployment:
  - If you have explicitly specified a specific commit for a grain, Torque will deploy the grain using the code associated with that exact commit. In this case, Torque does not actively track changes, as it is locked to the specified commit. It ensures that the deployed grain remains consistent and unaffected by subsequent commits.

By intelligently tracking your IaC repository based on your blueprint specifications, Torque ensures that your environment remains synchronized with the latest changes while providing the flexibility to tailor the tracking behavior to your specific requirements.

When Torque detects a change (new commits), it will alert you visually. You can then choose to accept the new code and redeploy the grain with the new code , or dismiss this change. If you dismiss, the alert will be gone but you can always come back and update it.
If at any point in time a new change is committed, you will be alerted again.


### Auto-Retry failed deployments
In some situations, environment deployment may fail with transient errors - ones that if you just retried, will deploy successfully. 
Torque comes with out-of-the-box knowledge of such errors, and will automatically retry to deploy failed grains in case the failure matches one of the transient error signatures.
This capability currently applies only to terraform grains. 
If you encounter such a failure which Torque did not recognize as transient, yet you believe should be auto-retried, please send us an email to torque-feedback@quali.com, or leave a post in our [community](https://github.com/orgs/QualiTorque/discussions).

#### Disabling the auto-retry mechanism
In some specific cases, you may wish to exclude a specific grain from the auto-retry mechanism.
To achieve this, see [Disabling auto-retry](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#disabling-auto-retry).



## Drift detection 
Torque continuously monitors the environment as well will notify you via the Drift tab if someone makes changes to the environment's cloud resources while the environment is running. Click the Drift tab to view and resolve the changes. 


