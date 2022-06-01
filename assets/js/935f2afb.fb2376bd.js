"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"torqueSidebar":[{"type":"link","label":"Welcome to Torque!","href":"/torque-docs/","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Torque Terminology","href":"/torque-docs/getting-started/The Torque Terminology","docId":"getting-started/The Torque Terminology"},{"type":"link","label":"The Sample Space","href":"/torque-docs/getting-started/The Sample Space","docId":"getting-started/The Sample Space"},{"type":"link","label":"Running Your First Workload in Torque","href":"/torque-docs/getting-started/Running your first workload","docId":"getting-started/Running your first workload"},{"type":"link","label":"Create Your Space","href":"/torque-docs/getting-started/Create your space","docId":"getting-started/Create your space"},{"type":"link","label":"Connect Your Asset Repository","href":"/torque-docs/getting-started/Connect your asset repository","docId":"getting-started/Connect your asset repository"},{"type":"link","label":"Edit the Blueprint","href":"/torque-docs/getting-started/Edit the blueprint","docId":"getting-started/Edit the blueprint"},{"type":"link","label":"Connect an Execution Host","href":"/torque-docs/getting-started/Connect an Execution Host","docId":"getting-started/Connect an Execution Host"},{"type":"link","label":"Connect a Kubernetes Cluster","href":"/torque-docs/getting-started/Connect a Kubernetes Cluster","docId":"getting-started/Connect a Kubernetes Cluster"},{"type":"link","label":"Service Accounts","href":"/torque-docs/getting-started/Service Accounts","docId":"getting-started/Service Accounts"}]},{"type":"category","label":"Blueprint Designer Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Blueprint YAML","href":"/torque-docs/blueprint-designer-guide/blueprints","docId":"blueprint-designer-guide/blueprints"}]},{"type":"link","label":"Roles & Permissions","href":"/torque-docs/roles-and-permissions/","docId":"roles-and-permissions/roles-and-permissions"},{"type":"category","label":"Policies & Governance","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Blueprint Policies","href":"/torque-docs/policies-and-governance/Policies","docId":"policies-and-governance/Policies"}]},{"type":"link","label":"Cost Tracking","href":"/torque-docs/cost/","docId":"cost/cost"},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cloud Account","href":"/torque-docs/admin-guide/cloud-account","docId":"admin-guide/cloud-account"}]},{"type":"category","label":"Deployment Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/torque-docs/deployment-architecture/Architecture","docId":"deployment-architecture/Architecture"}]},{"type":"category","label":"Ecosystem & Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Torque Integrations","href":"/torque-docs/eco-system/integrations-overview","docId":"eco-system/integrations-overview"},{"type":"link","label":"Slack","href":"/torque-docs/eco-system/slack","docId":"eco-system/slack"},{"type":"link","label":"Microsoft Teams","href":"/torque-docs/eco-system/teams","docId":"eco-system/teams"},{"type":"link","label":"Circle CI","href":"/torque-docs/eco-system/circle-ci","docId":"eco-system/circle-ci"},{"type":"link","label":"Jenkins CI","href":"/torque-docs/eco-system/jenkins","docId":"eco-system/jenkins"}]},{"type":"link","label":"Tags","href":"/torque-docs/tags/","docId":"tags/tags"}]},"docs":{"admin-guide/cloud-account":{"id":"admin-guide/cloud-account","title":"Cloud Account","description":"The Cloud Account is a Torque component that acts as an interface between Torque and the cloud provider. It grants Torque the permission to access the cloud provider and perform different actions in the context of the Torque environment. These include creating a slim management layer that keeps your data safe, creating and managing the environment\'s cloud resources, and relaying information about the environment\'s resources from the cloud provider to Torque.","sidebar":"torqueSidebar"},"blueprint-designer-guide/blueprints":{"id":"blueprint-designer-guide/blueprints","title":"Blueprint YAML","description":"Torque\'s blueprints are reusable components designed to model a required environment from the infrastructure to the application. Blueprint designers utilize Torque\'s VSCode plugin or the Torque\'s self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users.","sidebar":"torqueSidebar"},"cost/cost":{"id":"cost/cost","title":"Cost","description":"Let\'s translate docs/intro.md to French.","sidebar":"torqueSidebar"},"deployment-architecture/Architecture":{"id":"deployment-architecture/Architecture","title":"Architecture","description":"Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications.","sidebar":"torqueSidebar"},"eco-system/circle-ci":{"id":"eco-system/circle-ci","title":"Circle CI","description":"Let\'s translate docs/intro.md to French.","sidebar":"torqueSidebar"},"eco-system/integrations-overview":{"id":"eco-system/integrations-overview","title":"Torque Integrations","description":"Torque supports integration with various 3rd party tools, including CI/CD tools such as Azure DevOps, Jenkins and Circle CI, and Torque\'s very own Torque CLI and Torque VSCode plugin development tools. Integrations are configured on the space level, so you could have different integrations for each space, as needed.","sidebar":"torqueSidebar"},"eco-system/jenkins":{"id":"eco-system/jenkins","title":"Jenkins CI","description":"Let\'s translate docs/intro.md to French.","sidebar":"torqueSidebar"},"eco-system/slack":{"id":"eco-system/slack","title":"Slack","description":"Let\'s translate docs/intro.md to French.","sidebar":"torqueSidebar"},"eco-system/teams":{"id":"eco-system/teams","title":"Microsoft Teams","description":"Let\'s translate docs/intro.md to French.","sidebar":"torqueSidebar"},"getting-started/Connect a Kubernetes Cluster":{"id":"getting-started/Connect a Kubernetes Cluster","title":"Connect a Kubernetes Cluster","description":"Kubernetes host architecture","sidebar":"torqueSidebar"},"getting-started/Connect an Execution Host":{"id":"getting-started/Connect an Execution Host","title":"Connect an Execution Host","description":"Next, let\'s connect an execution host to Torque. The execution host is the platform on which the asset will be executed. For example, a Kubernetes cluster can be used as an execution host, and the commands such as terraform apply or helm install would be run from the cluster.","sidebar":"torqueSidebar"},"getting-started/Connect your asset repository":{"id":"getting-started/Connect your asset repository","title":"Connect Your Asset Repository","description":"Torque needs access to your relevant git repositories to read your Terraform modules or Helm charts.","sidebar":"torqueSidebar"},"getting-started/Create your space":{"id":"getting-started/Create your space","title":"Create Your Space","description":"As we discussed in The Sample Space, the space is your work area and here you work with your team on a project. It will contain the team members, repositories, assets, and clouds.","sidebar":"torqueSidebar"},"getting-started/Edit the blueprint":{"id":"getting-started/Edit the blueprint","title":"Edit the Blueprint","description":"Torque autogenerated blueprints","sidebar":"torqueSidebar"},"getting-started/Running your first workload":{"id":"getting-started/Running your first workload","title":"Running Your First Workload in Torque","description":"First time?","sidebar":"torqueSidebar"},"getting-started/Service Accounts":{"id":"getting-started/Service Accounts","title":"Service Accounts","description":"A kubernetes service account provides an identity for processes that run in a pod. We recommend using service accounts if you are using a Kubernetes cluster as your execution host.","sidebar":"torqueSidebar"},"getting-started/The Sample Space":{"id":"getting-started/The Sample Space","title":"The Sample Space","description":"Torque comes out of the box with a single space - the Sample space. This space contains several example blueprints for you to play with and get familiarized with the product.","sidebar":"torqueSidebar"},"getting-started/The Torque Terminology":{"id":"getting-started/The Torque Terminology","title":"Torque Terminology","description":"Blueprint - An offline plan (template) of an environment. A blueprint contains grains. Each grain represents a specific workload (for example, a Rerraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. Blueprints are defined in source-controlled YAML files.","sidebar":"torqueSidebar"},"intro":{"id":"intro","title":"Welcome to Torque!","description":"APPLICATION ENVIRONMENTS - Anytime. Anywhere.","sidebar":"torqueSidebar"},"policies-and-governance/Policies":{"id":"policies-and-governance/Policies","title":"Blueprint Policies","description":"As the blueprint designer, you can define the blueprint\'s max duration or allow it to run indefinitely, to support scenarios that deploy a sandbox that must be always online, or delivers a static cloud resource.","sidebar":"torqueSidebar"},"roles-and-permissions/roles-and-permissions":{"id":"roles-and-permissions/roles-and-permissions","title":"Invite Users to Your Torque Account","description":"Now that you understand how Torque works, it\'s time to invite other members of your team to your Torque account. As Account Admin, you can invite users to your Torque account and add them to spaces, while Space Admins can only add existing Torque users to the spaces they administer.","sidebar":"torqueSidebar"},"tags/tags":{"id":"tags/tags","title":"Tags","description":"The cloud providers cost management pillars provide tools to cover many aspect of your cloud spending, like billing isolation, specific service limits and cost alerts. 3rd party tools also exist which provide enhanced functionality, such as inventory visibility, rightsizing recommendations, idle resources detection etc.","sidebar":"torqueSidebar"}}}')}}]);