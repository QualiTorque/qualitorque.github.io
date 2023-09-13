"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:15,title:"The CloudFormation Grain"},i=void 0,u={unversionedId:"blueprint-designer-guide/blueprints/cloudformation-grain",id:"blueprint-designer-guide/blueprints/cloudformation-grain",title:"The CloudFormation Grain",description:"Note that the Torque CloudFormation grain is currently in Beta.",source:"@site/docs/blueprint-designer-guide/blueprints/cloudformation-grain.md",sourceDirName:"blueprint-designer-guide/blueprints",slug:"/blueprint-designer-guide/blueprints/cloudformation-grain",permalink:"/blueprint-designer-guide/blueprints/cloudformation-grain",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprints/cloudformation-grain.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"The CloudFormation Grain"},sidebar:"torqueSidebar",previous:{title:"The Helm Grain",permalink:"/blueprint-designer-guide/blueprints/helm-grain"},next:{title:"The Kubernetes Grain\u200b",permalink:"/blueprint-designer-guide/blueprints/kubernetes-grain"}},l={},s=[{value:"source",id:"source",level:3},{value:"agent",id:"agent",level:3},{value:"authentication",id:"authentication",level:3},{value:"inputs\u200b",id:"inputs",level:3},{value:"tags\u200b",id:"tags",level:3},{value:"outputs\u200b",id:"outputs",level:3},{value:"Example",id:"example",level:3}],p={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that the Torque CloudFormation grain is currently in ",(0,a.kt)("strong",{parentName:"p"},"Beta"),".\nWe will be happy to get your feedback using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/QualiTorque/discussions/new/choose"},"Torque community")))),(0,a.kt)("p",null,"The CloudFormation grain is Torque's native support for AWS CloudFormation templates. Torque allows designers to use CloudFormation features to easily orchestrate self-developer and community CloudFormation modules in a standard way and share them with others as building blocks. For the full blueprint yaml example, see ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprint-quickstart-guide#example-2-webgame-on-s3-using-cloudformation-and-terraform"},"Example 2: Webgame on S3 (using CloudFormation and Terraform)"),"."),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source"},"the grain source")," for more details."),(0,a.kt)("h3",{id:"agent"},"agent"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"agent")," is not required or supported by CloudFormation Grain. Instead, this grain uses direct authentication to the AWS cloud account, as explained below."),(0,a.kt)("h3",{id:"authentication"},"authentication"),(0,a.kt)("p",null,"To enable Torque to connect to the AWS account and deploy the CloudFormation template, you must supply the Role Arn and external ID in the CloudFormation grain's ",(0,a.kt)("inlineCode",{parentName:"p"},"authentication")," section. This is done by referencing a ",(0,a.kt)("a",{parentName:"p",href:"/admin-guide/credentials"},"credential")," that contains these authentication details. There are two ways to specify the credential, literally by name or using an input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: cloudformation\n    spec:\n      source:\n        path: github.com/org/repo.git//cloudformation/rds\n        ...\n      authentication:\n        - credential_name or {{.inputs.credentials_input_name}}\n")),(0,a.kt)("h3",{id:"inputs"},"inputs\u200b"),(0,a.kt)("p",null,"Similar to blueprint inputs, CloudFormation grain inputs allow you to reuse the same CloudFormation module in different ways. Inputs provided to the CloudFormation grain are used when launching the CloudFormation module."),(0,a.kt)("h3",{id:"tags"},"tags\u200b"),(0,a.kt)("p",null,"Whenever a CloudFormation grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags."),(0,a.kt)("h3",{id:"outputs"},"outputs\u200b"),(0,a.kt)("p",null,"Outputs are strings generated by CloudFormation during the deployment process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: cloudformation\n    spec:\n      source:\n        path: github.com/org/repo.git//cloudformation/rds\n        ...\n      authentication:\n        ...\n      outputs:\n        - agent_name\n        - connection_string\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  CFN-S3-Bucket:\n    kind: cloudformation\n    spec: \n      source:\n        # store: autogen_repo_sandbox_4235f76y\n        path: https://.../AWSS3Bucket.yaml\n      region: '{{ .inputs.[\"AWS Region\"] }}'\n      authentication:\n        - aws-auth\n      inputs:\n        - AccessControl: '{{ .inputs.[\"Access Control\"] }}'\n        - BucketName: '{{ .inputs.[\"Bucket Name\"] }}-{{ sandboxid | downcase }}'\n      outputs:\n         - Arn\n         - DomainName\n")))}c.isMDXComponent=!0}}]);