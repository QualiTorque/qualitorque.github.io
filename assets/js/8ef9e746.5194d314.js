"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[6713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:12,title:"The Helm Grain"},s=void 0,o={unversionedId:"blueprint-designer-guide/blueprints/helm-grain",id:"blueprint-designer-guide/blueprints/helm-grain",title:"The Helm Grain",description:"The HELM Grain",source:"@site/docs/blueprint-designer-guide/blueprints/helm-grain.md",sourceDirName:"blueprint-designer-guide/blueprints",slug:"/blueprint-designer-guide/blueprints/helm-grain",permalink:"/blueprint-designer-guide/blueprints/helm-grain",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprints/helm-grain.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"The Helm Grain"},sidebar:"torqueSidebar",previous:{title:"The Terraform Grain",permalink:"/blueprint-designer-guide/blueprints/terraform-grain"},next:{title:"The CloudFormation Grain",permalink:"/blueprint-designer-guide/blueprints/cloudformation-grain"}},l={},p=[{value:"The HELM Grain",id:"the-helm-grain",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Tools and technologies",id:"tools-and-technologies",level:3},{value:"source",id:"source",level:3},{value:"agent",id:"agent",level:3},{value:"inputs",id:"inputs",level:3},{value:"outputs",id:"outputs",level:3},{value:"commands",id:"commands",level:3},{value:"scripts",id:"scripts",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-helm-grain"},"The HELM Grain"),(0,r.kt)("p",null,"The HELM grain is Torque's native support for HELM v3 charts. Torque allows designers to use HELM specific features to easily orchestrate self-developer and community charts in a standard way and share them with others as building blocks. For a full blueprint yaml example, see ",(0,r.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprint-quickstart-guide#example-1-helm-application-with-mysql-and-s3-deployed-by-terraform"},"Example 1: Helm Application with MySQL and S3 Deployed by Terraform"),"."),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"Torque will install the helm release in the namespace referred to in ",(0,r.kt)("em",{parentName:"p"},"target-namespace"),". The target namespace must exist in the cluster prior to the deployment. It must not be equal to the namespaces used by Torque for agent deployments. Make sure the service account has enough permissions to create/read/delete everything in the helm chart and also create/read/delete secrets and volumes."),(0,r.kt)("p",null,"In your blueprint YAML, configure the following configuration for Helm grains"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"helloHelm:\n  kind: helm\n  spec:\n    source:\n      store: my-repo\n      path: folder/my-app\n    target-namespace: '{{ .inputs.namespace }}'  # This is the namespace which is passed along to the helm installation.\n    agent:\n      name: '{{.inputs.agent}}'\n      service-account: '{{ .inputs.service_account }}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It's also possible to use parameters for the service-account name. Note that when service account is not provided in the grain, the default service account provided on the agent will be used.\n",(0,r.kt)("img",{alt:"Catalog cost",src:n(2637).Z,width:"529",height:"433"}))),(0,r.kt)("h3",{id:"tools-and-technologies"},"Tools and technologies"),(0,r.kt)("p",null,"The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dotnet"),(0,r.kt)("li",{parentName:"ul"},"curl"),(0,r.kt)("li",{parentName:"ul"},"tar"),(0,r.kt)("li",{parentName:"ul"},"unzip"),(0,r.kt)("li",{parentName:"ul"},"kubectl"),(0,r.kt)("li",{parentName:"ul"},"kustomize"),(0,r.kt)("li",{parentName:"ul"},"helm"),(0,r.kt)("li",{parentName:"ul"},"awscli")),(0,r.kt)("h3",{id:"source"},"source"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source"},"the grain source")," for more details."),(0,r.kt)("h3",{id:"agent"},"agent"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent"},"the grain agent")," for more details."),(0,r.kt)("h3",{id:"inputs"},"inputs"),(0,r.kt)("p",null,"Similar to blueprint inputs and Terraform inputs, the HELM grain inputs allow you to reuse the same HELM chart in different ways using different values overrides. Inputs provided to the HELM grain are used when launching the HELM chart. We recommend using Torque's auto-discovery capability to quickly model your HELM chart within Torque including all defined inputs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  nginx:\n    kind: helm\n    spec:\n      source:\n        store: my-repo \n        path: my-asset     \n      agent:\n      ...\n      inputs:\n        - replicaCount: '{{ .inputs.replicaCount }}'\n        - service.image: '{{ .inputs.image }}'\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that in the above example, blueprint input is used as the value of the HELM grain input, so the environment's owner is able to choose the replicaCount required for his need. The information provided by the user will be passed to HELM chart as values and affect the deployment process."))),(0,r.kt)("h3",{id:"outputs"},"outputs"),(0,r.kt)("p",null,"Helm does not natively expose outputs. However, this can be done using a ",(0,r.kt)("inlineCode",{parentName:"p"},"post-helm-install")," script that assigns environment variables after the grain's deployment. The script must be referenced, along with the names of the environment variables in the grain's ",(0,r.kt)("a",{parentName:"p",href:"#scripts"},"scripts"),". To expose the outputs to the environment, the names of the environment variables must be referenced in the blueprint's ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," section."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("strong",{parentName:"h5"},"tip"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For illustration purposes, here's a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orel-h/test-spec2-public/blob/master/blueprints/helm-outputs-demo.yaml"},"Helm chart")," that declares a ",(0,r.kt)("strong",{parentName:"p"},"URL")," environment variable and references the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orel-h/test-spec2-public/blob/master/scripts/orel_helm_script_args_demo.sh"},"post-install script")," that publishes that environment variable as an output."))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: \n  ...\n\ninputs:\n  ...\n\noutputs:\n  output1:\n    kind: regular\n    value: '{{.grains.<grain name>.scripts.post-helm-install.outputs.<output name>}}'\n  output2:\n    kind: regular\n    value: '{{.grains.<grain name>.scripts.post-helm-install.outputs.<output name>}}'\n")),(0,r.kt)("h3",{id:"commands"},"commands"),(0,r.kt)("p",null,"The commands section allows to execute CLI code prior to the HELM chart deployment to make sure all dependencies are met to ensure a successful deployment. Common use for commands is to execute HELM dependencies update to collect all the sub-charts required for the deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  nginx:\n    kind: helm\n    spec:\n      source:\n        store: my-repo \n        path: my-asset     \n      agent:\n        name: aws-demo\n      inputs:\n        - replicaCount: '{{ .inputs.replicaCount }}'\n      commands:\n        - dep up bitnami/nginx\n")),(0,r.kt)("h3",{id:"scripts"},"scripts"),(0,r.kt)("p",null,"Torque provides the ability to execute custom code after Torque executes the Helm chart. This is useful for generating and using outputs, as explained in ",(0,r.kt)("a",{parentName:"p",href:"#outputs"},"helm outputs"),"."),(0,r.kt)("p",null,'For example - grain with a post-install script and outputs "test1" and "test2":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'grains:\n  nginx:\n    kind: helm\n    spec:\n      source:\n        path: ...\n      agent:\n        name: ...\n        service-account: ...\n      inputs:\n        - replicaCount: ...\n      commands:\n        - dep up bitnami/nginx\n      scripts:\n        post-helm-install:\n        source:\n          store: my-repo \n          path: my-asset     \n        arguments: "{{.inputs.ACCOUNT_ID}},{{.inputs.ID2}},3"\n        outputs:\n          - test1\n          - test2\n')))}m.isMDXComponent=!0},2637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/helm-auth-f36c8138be16cc5867f902f25e7a046a.png"}}]);