"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[525],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4895:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:9,title:"Policies"},p=void 0,s={unversionedId:"admin-guide/governance/policies",id:"admin-guide/governance/policies",title:"Policies",description:"Torque role: Account admin",source:"@site/docs/admin-guide/governance/policies.md",sourceDirName:"admin-guide/governance",slug:"/admin-guide/governance/policies",permalink:"/admin-guide/governance/policies",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/governance/policies.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Policies"},sidebar:"torqueSidebar",previous:{title:"Tags",permalink:"/admin-guide/governance/tags"},next:{title:"Approval Channels",permalink:"/admin-guide/governance/approval-channels"}},c={},u=[{value:"How policies work",id:"how-policies-work",level:2},{value:"Policy labels",id:"policy-labels",level:2},{value:"Torque built-in policies",id:"torque-built-in-policies",level:2},{value:"Custom policies",id:"custom-policies",level:2},{value:"Developing policies",id:"developing-policies",level:3},{value:"<strong>Inputs</strong>",id:"inputs",level:4},{value:"<strong>data</strong>",id:"data",level:4},{value:"<strong>Rego restricted functions</strong>",id:"rego-restricted-functions",level:4},{value:"Approval policies",id:"approval-policies",level:2},{value:"How to set up a policy",id:"how-to-set-up-a-policy",level:2},{value:"Duplicate a policy",id:"duplicate-a-policy",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque role: Account admin"),(0,o.kt)("p",null,"Torque policies are triggered as part of the environment deployment pipeline for specific environment lifecycle events (launch, extend environment for example) or during the deployment of environments (e.g. when evaluating a Terraform module included in the environment). Torque policies are powered by OPA (Open Policy Agent). "),(0,o.kt)("p",null,"In this article:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-policies-work"},"How policies work")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#policy-labels"},"Policy labels")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#torque-built-in-policies"},"Torque built-in policies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-policies"},"Custom policies"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#developing-policies"},"Developing policies"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inputs"},(0,o.kt)("strong",{parentName:"a"},"Inputs"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#data"},(0,o.kt)("strong",{parentName:"a"},"data"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rego-restricted-functions"},(0,o.kt)("strong",{parentName:"a"},"Rego restricted functions"))))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#approval-policies"},"Approval policies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-set-up-a-policy"},"How to set up a policy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#duplicate-a-policy"},"Duplicate a policy"))),(0,o.kt)("h2",{id:"how-policies-work"},"How policies work"),(0,o.kt)("p",null,'Policies are based on two basic elements: trigger and context. Trigger determines when the policy is activated, and context is the data the policy needs to get ("input" in OPA terms). The context is provided automatically by Torque. Users can also define user data ("data" in OPA terms) in the Torque policy. The context (or input) is the actual environment data the end user is trying to deploy, and the user data sets values to the limitations imposed by the admin who set up the policy.'),(0,o.kt)("p",null,"Torque supports two types of triggers, which are defined by the package being used in the policy's .rego file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Environment lifecycle policies (triggered on launch/extend). To define an environment lifecycle policy, the ".rego" file must use the package name ',(0,o.kt)("strong",{parentName:"li"},"torque.environment")),(0,o.kt)("li",{parentName:"ul"},'Terraform evaluation policies (triggered on terraform plan for terraform grains). To define a terraform plan evaluation policy, the ".rego" file must use the package name ',(0,o.kt)("strong",{parentName:"li"},"torque.terraform_plan"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Policies are applied on the space or account level, as explained in ",(0,o.kt)("a",{parentName:"p",href:"#how-to-set-up-a-policy"},"How to set up a policy"),"."))),(0,o.kt)("h2",{id:"policy-labels"},"Policy labels"),(0,o.kt)("p",null,"There are 4 labels that will be automatically applied to policies in Torque, in the ",(0,o.kt)("strong",{parentName:"p"},"Policies")," administration page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Built-in")," label is assigned to policies that come out of the box with Torque. For details about the policies, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/opa"},"https://github.com/QualiTorque/opa")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terraform")," label is assigned to policies that evaluate the Terraform plan on the environment's Terraform grain. These policies are triggered when Torque deploys the Terraform grain's plan during the environment's initialization"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Environment")," label is assigned to policies that are triggered when the environment is launched or extended"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Approval")," label is assigned to policies that could require approval to launch the environment")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(1738).Z,width:"1152",height:"570"}))),(0,o.kt)("h2",{id:"torque-built-in-policies"},"Torque built-in policies"),(0,o.kt)("p",null,"Torque provides many built-in policies, both for environment lifecycle and Terraform plan evaluation, which represent some of the more common use cases when deploying environments. Some examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow only specific AWS instance types to be used"),(0,o.kt)("li",{parentName:"ul"},"Allow deploying only to specific Azure locations"),(0,o.kt)("li",{parentName:"ul"},"Allow only environments with expected cost of < 10$")),(0,o.kt)("h2",{id:"custom-policies"},"Custom policies"),(0,o.kt)("p",null,"There may come a time when you will need to go beyond the common use case and write your own policies and rules. This is possible using custom policies. Custom policies are .rego files that reside in your git repository. When you add the policy repository to Torque, Torque automatically discovers the repository and identifies its .rego files as policies, allowing you to choose which policies to import into Torque. Same as with built-in policies, you select where to apply the policy (on the entire account or specific teams), and configure the relevant data. "),(0,o.kt)("h3",{id:"developing-policies"},"Developing policies"),(0,o.kt)("h4",{id:"inputs"},(0,o.kt)("strong",{parentName:"h4"},"Inputs")),(0,o.kt)("p",null,"Based on the policy type (environment or terraform_plan) Torque will provide ",(0,o.kt)("em",{parentName:"p"},"input")," to OPA once the policy is injected.\nFor terraform_plan policies, the input is the terraform plan output.\nFor ",(0,o.kt)("strong",{parentName:"p"},"environment")," policies, the input is the following json object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n"blueprint": {\n   "name": "example_blueprint_name",\n   "repository": "example_repository",\n   "labels": "label1"\n   "url": "www.exampleurl"\n   "last_modified": "0001-01-01T00:00:00"\n  },\n"inputs": [\n   {\n      "name": "example input1",\n      "type": "string",\n      "value": "example value1",\n      "sensitive": false,\n      "description": null\n   },\n   {\n      "name": "example input2",\n      "type": "string",\n      "value": "example value2",\n      "sensitive": false,\n      "description": null\n   }\n\n],\n"duration_minutes": 119,\n"blueprint_avg_hourly_cost": 0.5,\n"user_name": "example user",\n"user_space_role": "space_member", //options are : \n"user_account_role": "Member",     // options are: Admin, Member  \n"user_email": "example@myorg.com",\n"action_name": "launch"            // options are: launch, extend\n}\n')),(0,o.kt)("p",null,"An example of usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",3:!0,className:"language-jsx",metastring:'title="A policy to deny any environment where the requested duration is more than 3 hours:"',title:'"A',policy:!0,to:!0,deny:!0,any:!0,environment:!0,where:!0,the:!0,requested:!0,duration:!0,is:!0,more:!0,than:!0,'hours:"':!0},'result = { "decision": "Denied", "reason": "Requested environment duration exceeds 180 minutes" } if {\n   input.duration_minutes > 180\n} \n')),(0,o.kt)("h4",{id:"data"},(0,o.kt)("strong",{parentName:"h4"},"data")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"data")," object is the user defined inputs that will also be passed to OPA for evaluation. The data object structure is defined by the policy writer, and the values are provided through the Torque UI."),(0,o.kt)("p",null,"For example, the policy can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="A policy to deny any environment where the requested duration is more than what\'s defined in the *data* object:"',title:'"A',policy:!0,to:!0,deny:!0,any:!0,environment:!0,where:!0,the:!0,requested:!0,duration:!0,is:!0,more:!0,than:!0,"what's":!0,defined:!0,in:!0,"*data*":!0,'object:"':!0},'result = { "decision": "Denied", "reason": "Environemtn duration exceeds the configured max duration" } if {\n   input.duration_minutes > data.max_duration_minutes\n} \n')),(0,o.kt)("p",null,"In this case, the policy expects a data object with one key : max_duration_minutes."),(0,o.kt)("p",null,"In Toruqe it would look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:a(9076).Z,width:"908",height:"501"})),(0,o.kt)("p",null,"So you can enter whatever value you want as the maximal duration to be enforced on environments."),(0,o.kt)("h4",{id:"rego-restricted-functions"},(0,o.kt)("strong",{parentName:"h4"},"Rego restricted functions")),(0,o.kt)("p",null,"Torque supports all rego built in functions, except the following list:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"http.send";'),(0,o.kt)("li",{parentName:"ul"},'"opa.runtime";'),(0,o.kt)("li",{parentName:"ul"},'"rego.parse_module"; '),(0,o.kt)("li",{parentName:"ul"},'"time.now_ns";'),(0,o.kt)("li",{parentName:"ul"},'"trace";')),(0,o.kt)("p",null,"For more details on how to develop policies, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/"},"OPA documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"https://play.openpolicyagent.org/"},"OPA playground"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"For example custom policies, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/opa"},"Quali Torque built-in OPA policy templates"),"."),(0,o.kt)("li",{parentName:"ul"},'Note that Torque points to a specific commit. Therefore, to introduce a new version of a custom policy, develop, test and pass the policy through your regular git flow. Once you are done, update the commit version in Torque by clicking "Update Rego".')))),(0,o.kt)("h2",{id:"approval-policies"},"Approval policies"),(0,o.kt)("p",null,"Torque allows you to configure your policy with conditions that will trigger manual approval of an environment request by a set of designated approvers via multiple optional channels: email, Microsoft Teams or Slack channels, ServiceNow and more. "),(0,o.kt)("p",null,"For example, you could have an approval policy that sets the max_duration for environments at 3 hours, so attempting to launch an environment with a duration that is longer than 3 hours will require approval."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Approvers are defined in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/admin-guide/governance/approval-channels"},"Approval Channels"))," administration page."))),(0,o.kt)("h2",{id:"how-to-set-up-a-policy"},"How to set up a policy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Administration > Policy Repositories")," and click ",(0,o.kt)("strong",{parentName:"p"},"Add a Repository"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the git repository, specify the repository's URL, and give it a name."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(2517).Z,width:"839",height:"563"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Connect"),". Provide authorization credentials if the repository is private."),(0,o.kt)("p",{parentName:"li"},"A green checkmark next to the repository's URL indicates that the repository has been added successfully."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(986).Z,width:"843",height:"569"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Discover Policies"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the policies you want to import into Torque, and click ",(0,o.kt)("strong",{parentName:"p"},"Generate Policies"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(4069).Z,width:"870",height:"687"}))),(0,o.kt)("p",{parentName:"li"}," The policies are displayed in the ",(0,o.kt)("strong",{parentName:"p"},"Policies")," page."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(489).Z,width:"1228",height:"527"}),"    "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click a generated policy and edit the details."),(0,o.kt)("p",{parentName:"li"},"a. Optionally change the ",(0,o.kt)("strong",{parentName:"p"},"Name"),", and provide a ",(0,o.kt)("strong",{parentName:"p"},"Description"),"."),(0,o.kt)("p",{parentName:"li"},"b. In ",(0,o.kt)("strong",{parentName:"p"},"Spaces"),", set the scope of the policy - ",(0,o.kt)("strong",{parentName:"p"},"All spaces")," or specific ones."),(0,o.kt)("p",{parentName:"li"},"c. In ",(0,o.kt)("strong",{parentName:"p"},"Data"),", set the policy's limitations.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enable")," the policy."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(7534).Z,width:"653",height:"530"}),"    ")))),(0,o.kt)("h2",{id:"duplicate-a-policy"},"Duplicate a policy"),(0,o.kt)("p",null,'You can also duplicate any built-in or custom policy to create a similar version with different user data. For example, You could have a policy that allows the use of cloud region "us-east-1" for the US team, and another one for the EU team that allows region "eu-west-1".'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:a(2306).Z,width:"447",height:"259"}))))}d.isMDXComponent=!0},2306:function(e,t,a){t.Z=a.p+"assets/images/duplicate-policy-f481f9bd1ba58a6abd0c778eda00e4ea.png"},7534:function(e,t,a){t.Z=a.p+"assets/images/enable-custom-policy-bd8f5f27af9c7e3ed0ff6f938ab68c54.png"},489:function(e,t,a){t.Z=a.p+"assets/images/new-custom-policies-ee1862d853e954b3ca643024e4053ac4.png"},4069:function(e,t,a){t.Z=a.p+"assets/images/policy-import-1e534f31272a694d47469d21a25fa9f8.png"},1738:function(e,t,a){t.Z=a.p+"assets/images/policy-labels-2fbcf9e766e3ef9dbea1da876dd1f679.png"},9076:function(e,t,a){t.Z=a.p+"assets/images/policy_data-74a838065b78bcc67e7ca249db684e06.png"},986:function(e,t,a){t.Z=a.p+"assets/images/repository-connection-350b4cf7d2439d64b07f6e7e57da6e1a.png"},2517:function(e,t,a){t.Z=a.p+"assets/images/repository-information-9d0853511f5bfb488af46cef399abf96.png"}}]);