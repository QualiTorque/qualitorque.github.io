---
sidebar_position: 5
title: CodeCommit Source Control
---

Torque supports connecting assets, blueprints and policies repositories on CodeCommit out of the box. To connect a repository, you need to grant Torque access to your repository of interest. Torque will access the repo (read only) both from the Torque SAAS application on AWS as well as from the runners on your cluster. 

## Prerequisites

1. Create a role for Torque to use which has permissions to connect to CodeCommit. To do that, follow the instructions:
   1. Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.
   2. In the IAM console, in the navigation pane, choose "Roles", and then choose "Create Role".
   3. In Select trusted entities, choose "AWS account", and select "Another AWS account".
   4. In the account ID text box, type 349148204654. Check the Require external id checkbox and enter and ID of your choice.
      1. 📝 ***Take note of the external ID string***.📝
   5. In Add permissions, search for AWSCodeCommitReadOnly and select it.
   6. Name your role and optionally create a description.
   7. Click on "Create Role" and complete the process.
   8. Search for your new role, 
      1. 📝***take note of its ARN***.📝

2.  Create an IAM user with the same policy:
    1.  Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.
    2.  In the IAM console, in the navigation pane, choose Users, and then choose Create User.
    3.  On the Permissions tab, choose Add Permissions.
    4.  In Grant permissions, choose Attach existing policies directly.
    5.  From the list of policies, select AWSCodeCommitReadOnly
    6.  Choose Next: Review and complete the process. 
   
3.  Create Git Credentials:
    1.  Follow the steps in [AWS article](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html#setting-up-gc-iam), Step 3 only.
    2.  📝***Take note of the the user name and password***.📝

4.  Initialize your CodeCommit Repository
    1.  CodeCommit does not have default files or a default branch until a file is committed, blocking Torque from adding this repo
    > ![Locale Dropdown](/img/code-commit/code-commit-uninit-branch.png)
    > ![Locale Dropdown](/img/code-commit/code-commit-uninit-code.png)
    2.  We recommend making a "blueprints" folder at the root of the repo with a single dummy yaml file. Please note the file extensions in the image below.
    > ![Locale Dropdown](/img/code-commit/code-commit-make-commit.png)
    3.  Now we will verify the file is there and that the main branch has created. 
    > ![Locale Dropdown](/img/code-commit/code-commit-verify-code.png)
    > ![Locale Dropdown](/img/code-commit/code-commit-verify-branch.png)
    4.  Finally we can now onboard the repo into Torque!

## Connecting a CodeCommit Repository to Torque

In your space, navigate to "Repositories" and click on "Add Repositories".
Choose the CodeCommit icon and fill in the requested details from the pre-requisites. For region, use the region where the CodeCommit hosting this repo is.


