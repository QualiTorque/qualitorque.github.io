---
sidebar_position: 1
---

# Blueprints Design
Torque's blueprints are reusable components designed to model a required environment from the infrastructure level to the application level. **Blueprint designers** will use Torque's VSCode plugin or the Torque's UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users.

Common example will be a platform team or a DevOps team building Dev, Test and staging environments for their development, QA and product teams. With Torque, the DevOps team can focus on desgin, best practices, and security for environment, while their end users are being self-served from the torque UI, API or eco-system integrations based on governance and policies without having the 'keys-to-the-cloud'.

GitOps - a few word about that, with refferance to the GitOps article.

## Torque's Blueprint YAML
The Torque's YAML is a the main specification for blueprint designers to build blueprints out of grains and expose environments to end-users in the Torque's catalog. 

### spec_version
The spec_version determines the blueprint YAML type. Currently, Torque supports spec_version:2 as the default and recommended version. With time, new preview releases and official feature releases will bring more and more features and users will be able to use other spec versions.

```yaml"
spec_version: 2
```

### description
The blueprint’s description is an optional file but recommended. Blueprint description will be presented in the Torque's UI and API so users consuming environment will have more information about the blueprints to batter match their business need to the available set of blueprints published in the account catalog.


```yaml"
spec_version: 2
description: Performance testing deployment based on RDS, EKS and Lambda

```

### inputs
Blueprint designers can expose blueprint inputs to their end-users to add flexibility while launching a new sandbox from the blueprints - without altering the blueprint code itself. Inputs data can be later used in the blueprint to control orchestration, pass information to automation process and more.

```yaml"
inputs:
  app_version:
    type: string
    default: "0.9.9"
    description: "The version of the application to be deployed on the EKS cluster"
```

### outputs
Outputs make data about your newly deployed sandbox available for other automation processes and the sandbox consumer. Outputs will usually be available at the end of the sandbox initialization.

```yaml"
outputs:
  WebsiteUrl:
    value: 'application-name-{{ sandboxid | downcase }}.testquali.click:8080'
    kind: link
  DB_Hostname:
    value: '{{ .grains.mySqlDB.outputs.hostname }}'
```

:::info
The example above includes some of the Torque's YAML templating engine capabilities allowing the bluerpint designer more flexibility and leads to less code that will require maintnance. More examples for templating will be described HERE LINK
:::

### Grains
Grains are the basic building blocks of a blueprint utilizing infrastructure as code (IaC) assets or automation processes to orchestrate the desired environment. In many organization, the blueprint designers will have a predefined set of grains he can use in the newly created blueprint provided by the IT/Ops/DevOps or platform team. 
