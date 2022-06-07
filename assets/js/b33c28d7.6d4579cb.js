"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2495],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5680:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1,title:"Torque Terminology"},l=void 0,c={unversionedId:"getting-started/The Torque Terminology",id:"getting-started/The Torque Terminology",title:"Torque Terminology",description:"Blueprint - An offline plan (template) of an environment. A blueprint contains grains. Each grain represents a specific workload (for example, a Rerraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. Blueprints are defined in source-controlled YAML files.",source:"@site/docs/getting-started/The Torque Terminology.md",sourceDirName:"getting-started",slug:"/getting-started/The Torque Terminology",permalink:"/getting-started/The Torque Terminology",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/getting-started/The Torque Terminology.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Torque Terminology"},sidebar:"torqueSidebar",previous:{title:"Welcome to Torque!",permalink:"/"},next:{title:"The Sample Space",permalink:"/getting-started/The Sample Space"}},u={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Blueprint")," - An offline plan (template) of an environment. A blueprint contains ",(0,a.kt)("em",{parentName:"p"},"grains"),". Each grain represents a specific workload (for example, a Rerraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. Blueprints are defined in source-controlled YAML files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Grain")," - The Torque representation of an asset (Terraform module or Helm chart). Each grain contains all the information required to deploy the asset such as inputs, versions, etc, as well as a reference to the location of the asset's code (repository)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Environment")," - The cloud infrastructure and application(s) that were deployed from a blueprint."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Space")," - A work area for a team to work on a specific project. In includes the team's members, assets (Terraform modules and/or Helm charts), the blueprints and the cloud accounts where the team's applications and cloud infrastructure will be deployed. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tag")," - Torque deploys infrastructure and applications to the cloud. It automatically tags any resource created in the cloud with the cloud provider tags. There are 2 types of tags: System tags and custom tags. System tags are tags that are defined by Torque (for example, environment id, space name, etc) while custom tags are defined by the users according to their needs. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Execution Host"),' - A system or location where the blueprint is launched from. For example, a kubernetes cluster can be an execution host, and the IaC commands such as "terraform apply" or "helm install" would be run from the cluster.'))}d.isMDXComponent=!0}}]);