"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[6102],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=a,g=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5703:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:12,title:"Supported Platforms"},i=void 0,o={unversionedId:"overview/supported-platforms",id:"overview/supported-platforms",title:"Supported Platforms",description:"Cloud and Infrastructure Providers",source:"@site/docs/overview/supported-platforms.md",sourceDirName:"overview",slug:"/overview/supported-platforms",permalink:"/overview/supported-platforms",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/overview/supported-platforms.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Supported Platforms"},sidebar:"torqueSidebar",previous:{title:"Main Features and Capabilities",permalink:"/overview/features"},next:{title:"FAQ",permalink:"/overview/FAQ"}},u={},p=[{value:"Cloud and Infrastructure Providers",id:"cloud-and-infrastructure-providers",level:2},{value:"Infrastructure as Code Frameworks",id:"infrastructure-as-code-frameworks",level:2},{value:"CI/CD Tooling",id:"cicd-tooling",level:2}],m={toc:p},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cloud-and-infrastructure-providers"},"Cloud and Infrastructure Providers"),(0,a.kt)("p",null,"Torque supports installation of an agent over the following platforms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Azure via ",(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/kubernetes-service"},"Azure Kubernetes Service")," (AKS) "),(0,a.kt)("li",{parentName:"ul"},"Amazon Web Services (AWS) via ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks/"},"Elastic Kubernetes Service")," (EKS)"),(0,a.kt)("li",{parentName:"ul"},"Google Cloud Platform (GCP) via ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GCP Kubernetes Engine")," (GKE)"),(0,a.kt)("li",{parentName:"ul"},"Oracle Cloud Infrastructure (OCI) via ",(0,a.kt)("a",{parentName:"li",href:"https://www.oracle.com/cloud/cloud-native/container-engine-kubernetes/"},"OCI Kubernetes Engine")," (OKE)"),(0,a.kt)("li",{parentName:"ul"},"Self-managed Kubernetes Cluster"),(0,a.kt)("li",{parentName:"ul"},"Docker-based agent on VMWare vCenter")),(0,a.kt)("h2",{id:"infrastructure-as-code-frameworks"},"Infrastructure as Code Frameworks"),(0,a.kt)("p",null,"Torque provides native support for IaC assets residing in a git repository. When connecting an IaC asset repository to Torque, Torque maps your repository's assets, prompts you to select the ones you would like to use in Torque, and auto-creates working blueprints out of the selected assets. Additionally, Torque allows you to insert custom Linux-script based automation as a component of a blueprint."),(0,a.kt)("p",null,"Torque supports the following IaC frameworks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/terraform-grain"},"Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/kubernetes-grain"},"Kubernetes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/helm-grain"},"Helm")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/cloudformation-grain"},"AWS CloudFormation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/ansible-grain"},"Ansible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/cloudshell-grain"},"CloudShell")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/shell-grain"},"Shell")," - (asset-agnostic grain that allows you to run bash/python3 commands as part of your environment\u2019s launch and/or teardown)")),(0,a.kt)("p",null,"This table lists the capabilities supported for each IaC or container technology. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Terraform"),(0,a.kt)("th",{parentName:"tr",align:null},"Helm"),(0,a.kt)("th",{parentName:"tr",align:null},"K8S native"),(0,a.kt)("th",{parentName:"tr",align:null},"CloudFormation"),(0,a.kt)("th",{parentName:"tr",align:null},"Ansible"),(0,a.kt)("th",{parentName:"tr",align:null},"OpenTofu"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Inputs/Outputs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tags"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Update"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Drift"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f*"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Technology specific Policies"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Consumption Policies"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Logs/infra"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Introspection"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scripts (extensibility)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Day-2"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Secret management"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-overview"},"Blueprint YAML"),"."),(0,a.kt)("p",null,"*"," Cloudformation drift reconciliation is in beta "),(0,a.kt)("h2",{id:"cicd-tooling"},"CI/CD Tooling"),(0,a.kt)("p",null,"Torque enables you to integrate with various leading CI/CD tools such as Bamboo, Jenkins and TeamCity, to facilitate your application development activities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eco-system/ci-cd-tooling/azure-devops"},"Azure DevOps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eco-system/ci-cd-tooling/circle-ci"},"CircleCI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eco-system/ci-cd-tooling/github-actions"},"GitHub Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eco-system/ci-cd-tooling/spinnaker"},"Spinnaker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eco-system/ci-cd-tooling/teamcity"},"TeamCity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/eco-system/ci-cd-tooling/jenkins"},"Jenkins")),(0,a.kt)("li",{parentName:"ul"},"Bamboo (coming soon)"),(0,a.kt)("li",{parentName:"ul"},"Jira (coming soon)")))}d.isMDXComponent=!0}}]);