"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[8332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,title:"Provision Terraform"},i=void 0,s={unversionedId:"getting-started/Getting starting with terraform",id:"getting-started/Getting starting with terraform",title:"Provision Terraform",description:"Torque Control Plane offers centralized orchestration and management for Terraform and other IaC tools. In this guide, we will go over some of Torque basic features allowing quick onboarding of Terraform modules into the platform, standardization of Terraform automation using blueprints and securing deployment process using tagging, policies and RBAC.",source:"@site/docs/getting-started/Getting starting with terraform.md",sourceDirName:"getting-started",slug:"/getting-started/Getting starting with terraform",permalink:"/getting-started/Getting starting with terraform",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/getting-started/Getting starting with terraform.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Provision Terraform"},sidebar:"torqueSidebar",previous:{title:"Resources Inventory",permalink:"/getting-started/Resources Inventory"},next:{title:"Install Torque Agent",permalink:"/getting-started/Getting starting with kubernetes"}},l={},p=[{value:"Step #1: Create a space",id:"step-1-create-a-space",level:2},{value:"Step #2: Connect a repository",id:"step-2-connect-a-repository",level:2},{value:"Step #3: Set Quali Agent",id:"step-3-set-quali-agent",level:2},{value:"AWS authentication",id:"aws-authentication",level:3},{value:"Azure authentication",id:"azure-authentication",level:3},{value:"Step #4: Launch an Environment",id:"step-4-launch-an-environment",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Torque Control Plane")," offers centralized orchestration and management for Terraform and other IaC tools. In this guide, we will go over some of Torque basic features allowing quick onboarding of Terraform modules into the platform, standardization of Terraform automation using blueprints and securing deployment process using tagging, policies and RBAC."),(0,o.kt)("p",null,"In this quick-start guide, we will cover the following topics:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Torque Space"),(0,o.kt)("li",{parentName:"ol"},"Onboard a GitHub repository and discover the automation assets in it"),(0,o.kt)("li",{parentName:"ol"},"Generate your first blueprint and modify it to include deployment credentials"),(0,o.kt)("li",{parentName:"ol"},"Launch a blueprint and get access to the deployed resource in the newly created environment")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: This guide will focus on AWS and Azure Terraform workloads, ",(0,o.kt)("a",{parentName:"p",href:"/overview/supported-platforms"},"click here")," for more information about Torque supported platform.")),(0,o.kt)("h2",{id:"step-1-create-a-space"},"Step #1: Create a space"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Spaces")," are logically separate area that contains an association to one or more agents, asset and blueprint repositories and set of permitted users. Spaces can be used to logically separate between teams, projects, or even development lifecycle stages and allow the relevant end-users, administrators and blueprint designers to access only the relevant blueprints and environments."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a new space, use one of the following methods: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Administration" section and open the "Spaces" tab. This is the account space management section where you will be able to create, edit and delete spaces. '),(0,o.kt)("li",{parentName:"ul"},'In the spaces dropdown, located in the left side-menu, click on "Create new space"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Set the space name, image and color.\nSpace name, image and color can always be changes in the "Administration" are under the "Spaces" tab'),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Create Space",src:n(9457).Z,width:"1254",height:"939"}))))),(0,o.kt)("h2",{id:"step-2-connect-a-repository"},"Step #2: Connect a repository"),(0,o.kt)("p",null,"Now, that you have a new space configured, we will associate a repository to the space and generate blueprints using the automation-assets that will be discovered by Torque in that repository. We recommend using your-own repository hosted in one of the supported Git Providers. For using on-prem/hosted versions of one of the supported (Version Control System)) providers, see ",(0,o.kt)("a",{parentName:"p",href:"/admin-guide/source-control/source-control-github"},"Repository Setup"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"repository onboarding"),' wizard, choose your VCS provider, provide the repository URL and click "Connect". Torque will open a new windows where you will be requested to authenticate to the VSC provider. VCS providers work differently, but usually, a token will be generated for your user and Torque will use that for any communication with that VCS. '),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note: you can always use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/QualiTorque/Sample-Terraform"},"this")," example repository with some pre-existing automation assets."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Discover Assets" to initiate the ',(0,o.kt)("strong",{parentName:"p"},"Torque asset discovery process")," that will go over the repository and highlight the automation assets Torque discovered.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ",(0,o.kt)("strong",{parentName:"p"},"generate a blueprint"),' from one of the discovered assets, check the blueprint in the list and click on "Generate Blueprints"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on "Connect an Agent"'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Onboard Repository",src:n(7081).Z,width:"1252",height:"936"}))),(0,o.kt)("h2",{id:"step-3-set-quali-agent"},"Step #3: Set Quali Agent"),(0,o.kt)("p",null,'In this step, we will configure our newly created blueprint (Created in step #2) to use "Quali Hosted Agent"'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Quali Hosted Agent"),' is a free pre-configured agent hosted by Quali allowing you to execute automation without the need to install, configure and maintain a "self hosted agent". In case you wish to use your own agent, follow the steps in ',(0,o.kt)("a",{parentName:"p",href:"/torque-agent/Install-and-connect-self-hosted-agent"},"this")," article and continue to step #4 in this article once you fully configured your agent."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In the "Connect an agent" dialog, select the ',(0,o.kt)("strong",{parentName:"li"},'"Quali Hosted Agent"'),'. This will associate the "Quali Hosted Agent" with the newly created space allowing automation in the space to be execute on it.'),(0,o.kt)("li",{parentName:"ol"},'Open one of the generated blueprints generated in the previous steps by clicking on it\'s name in the "blueprints name". You will see the blueprint YAML generated for the automation asset. The YAML contains all the inputs and outputs of the Terraform module alongside  some additional information about the location of the automation asset in the VCS repository.'),(0,o.kt)("li",{parentName:"ol"},"In the following step, we will modify the blueprint using the ",(0,o.kt)("strong",{parentName:"li"},"YAML editor")," adding authentication information for AWS or Azure so our Terraform module will be executed on them. This section is AWS or Azure specific, so make sure to follow the section matching your cloud provider.")),(0,o.kt)("h3",{id:"aws-authentication"},"AWS authentication"),(0,o.kt)("p",null,"The Quali-hosted agent needs your ",(0,o.kt)("strong",{parentName:"p"},"AWS credentials"),' to provision the environment on your AWS account. We will edit the blueprint to add the AWS credentials as environment variables, and expose them as inputs so it will be easier to provide them upon launch of a new environment. Editing the blueprint in the blueprint editor provides syntax highlighting, auto-correcting and live validation of the YAML and data provided. Make sure to click on "Save Changes" when updating the YAML to make sure the blueprint is saved in Torque.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the following inputs under the input section of the blueprint:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"inputs:\n  AWS_ACCESS_KEY:\n    type: string\n  AWS_SECRET_KEY:\n    type: string\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the following environment variables under the env-var section of the blueprint. For more information about generating AWS credentials, see the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"AWS documentation"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      env-vars: \n        - AWS_ACCESS_KEY: '{{ .inputs.AWS_ACCESS_KEY }}'\n        - AWS_SECRET_KEY: '{{ .inputs.AWS_SECRET_KEY }}'\n")),(0,o.kt)("h3",{id:"azure-authentication"},"Azure authentication"),(0,o.kt)("p",null,"The Quali-hosted agent needs your ",(0,o.kt)("strong",{parentName:"p"},"Azure credentials"),' to provision the environment on your Azure account. We will edit the blueprint to add the Azure credentials as environment variables, and expose them as inputs so it will be easier to provide them upon launch of a new environment. Editing the blueprint in the blueprint editor provides syntax highlighting, auto-correcting and live validation of the YAML and data provided. Make sure to click on "Save Changes" when updating the YAML to make sure the blueprint is saved in Torque.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the following inputs under the input section of the blueprint:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"inputs:\n  ARM_CLIENT_ID:\n    type: string\n  ARM_CLIENT_SECRET:\n    type: string\n  ARM_SUBSCRIPTION_ID:\n    type: string\n  ARM_TENANT_ID:\n    type: string\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the following environment variables under the env-var section of the blueprint. For more information about generating Azure credentials, see the ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/developer/terraform/authenticate-to-azure"},"Azure documentation"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      env-vars: \n        - ARM_CLIENT_ID: '{{ .inputs.ARM_CLIENT_ID }}'\n        - ARM_CLIENT_SECRET: '{{ .inputs.ARM_CLIENT_SECRET }}'\n        - ARM_SUBSCRIPTION_ID: '{{ .inputs.ARM_SUBSCRIPTION_ID }}'\n        - ARM_TENANT_ID: '{{ .inputs.ARM_TENANT_ID }}'        \n")),(0,o.kt)("h2",{id:"step-4-launch-an-environment"},"Step #4: Launch an Environment"),(0,o.kt)("p",null,"At this point, you have done the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Created a new space")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connected an asset repository and auto-generated blueprints out of some assets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Associated an agent that will handle the deployment and teardown of the environments"),(0,o.kt)("p",{parentName:"li"},"\ud83d\ude80\ud83d\ude80 You are finally now ready to launch your first environment!  \ud83d\ude80\ud83d\ude80"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To expose the new blueprint into the ",(0,o.kt)("strong",{parentName:"li"},"Space catalog"),", navigate into the ",(0,o.kt)("strong",{parentName:"li"},"Blueprints")," page and toggle the  ",(0,o.kt)("strong",{parentName:"li"},"Publish")," option."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Catalog")," and click the ",(0,o.kt)("strong",{parentName:"li"},"Launch")," button on the blueprint card."),(0,o.kt)("li",{parentName:"ol"},"Specify the environment's name, duration, tags and inputs - note that some of the inputs may be the authentication information required for AWS or Azure as describes in step #3."),(0,o.kt)("li",{parentName:"ol"},'Optionally assign collaborators to the environment. While everyone in the space has "read" permission to its environments, only the environment\'s owner and collaborators can perform actions that change the environment: extend end the environment, reconcile or update resource changes, etc. When launching the environment, the new owner/collaborators will receive a notification email if you have ',(0,o.kt)("a",{parentName:"li",href:"/admin-guide/notifications"},"Notifications")," configured in the space."),(0,o.kt)("li",{parentName:"ol"},"Finally, click ",(0,o.kt)("strong",{parentName:"li"},"Launch"),"."),(0,o.kt)("li",{parentName:"ol"},"Wait until the environment is active and use as needed. URLs to the environment's applications are typically provided as outputs - these can be found in the environment's ",(0,o.kt)("strong",{parentName:"li"},"Quicklinks")," on the right pane."),(0,o.kt)("li",{parentName:"ol"},"Check out the ",(0,o.kt)("strong",{parentName:"li"},"Resources")," pane to get details about your environment's resources. Use this tab to understand what assets each grain spun up, get connection details to specific resources, and more.")))}d.isMDXComponent=!0},7081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting-repository-ongoarding-e0b2f7a09d4957deac3f93bed302491d.gif"},9457:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting-space-fc021ef58dcb3547f77353707f86685c.png"}}]);