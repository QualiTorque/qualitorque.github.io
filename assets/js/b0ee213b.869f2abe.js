"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[7565],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9415:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={sidebar_position:1},u="Architecture",s={unversionedId:"deployment-architecture/Architecture",id:"deployment-architecture/Architecture",title:"Architecture",description:"Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications.",source:"@site/docs/deployment-architecture/Architecture.md",sourceDirName:"deployment-architecture",slug:"/deployment-architecture/Architecture",permalink:"/torque-docs/deployment-architecture/Architecture",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployment-architecture/Architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"torqueSidebar",previous:{title:"Cloud Account",permalink:"/torque-docs/admin-guide/cloud-account"},next:{title:"Slack",permalink:"/torque-docs/eco-system/slack"}},l={},p=[],d={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"architecture"},"Architecture"),(0,c.kt)("p",null,"Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications."),(0,c.kt)("p",null,"It deploys environments in the cloud using a Torque compute service. The Torque compute service stores the cloud provider's access credentials and defines the Kubernetes cluster and namespaces in which the environment's cloud resources will be deployed. This applies to AWS and Azure. However, for vCenter, the Torque compute service must be linked to a Torque vCenter agent, which contains the vCenter admin credentials."),(0,c.kt)("p",null,"When a new environment is launched in Torque, the Torque compute service connects to the appropriate Kubernetes cluster or vCenter Server and provisions the environment's cloud infrastructure based on the blueprint's YAML definition file, including cloud networks, subents, VMs, accessibility rules, peering connections, and more. Different environments can be deployed to different namespaces, depending on the Torque compute service, and multiple environments can live in the same namespace simultaneously."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("img",{alt:"Locale Dropdown",src:r(7313).Z,width:"1275",height:"723"}))))}f.isMDXComponent=!0},7313:function(e,t,r){t.Z=r.p+"assets/images/architecture-140fa99509c18d70e4e56d7e93ccb50f.png"}}]);