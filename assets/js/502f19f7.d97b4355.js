"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[440],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(g,s(s({ref:t},u),{},{components:o})):n.createElement(g,s({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},666:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:3,title:"Cost tracking"},s=void 0,i={unversionedId:"environment-services/Cost",id:"environment-services/Cost",title:"Cost tracking",description:"Torque lets you get proactive about cloud cost optimization. With automatic tags apply to all deployed resources your teams can aggregates cost data based on team, project, or other custom parameters so you can understand ROI and address cost anomalies before you receive the cloud bill.",source:"@site/docs/environment-services/Cost.md",sourceDirName:"environment-services",slug:"/environment-services/Cost",permalink:"/environment-services/Cost",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/environment-services/Cost.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Cost tracking"},sidebar:"torqueSidebar",previous:{title:"Actions and workflows",permalink:"/environment-services/Actions and workflows"},next:{title:"Resource Introspection & Layouts",permalink:"/environment-services/Introspection and layouts"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Torque lets you get proactive about cloud cost optimization. With automatic tags apply to all deployed resources your teams can aggregates cost data based on team, project, or other custom parameters so you can understand ROI and address cost anomalies before you receive the cloud bill."),(0,r.kt)("p",null,"While tagging is a common practice for adding metadata for deployed infrastructure, it's usually hard to maintain a consistence tagging methodology and ownership. Torque allows centralized control for tags, so administrator can configure the organization tagging methodology in Torque, allowing teams, projects and individuals the flexibility to use tags within that methodology."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"AWS Tagging",src:o(1099).Z,width:"993",height:"452"}))),(0,r.kt)("p",null,"Tags added by Torque are business context that will be attached to any of the deployed resources in an environment regardless of the automation framework so cloud resources will be consistent and cost information will be aligned between teams, projects, environments and even between cloud account and cloud providers. Torque will also help you to address the differences between the cloud providers - for example, CP does not allow case-sensitive tagging and Torque will help you with standardizing that by providing best practices from the get go."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Torque tags",src:o(8691).Z,width:"929",height:"554"}))),(0,r.kt)("p",null,"Tags are key-value pairing that are set by Torque to all of the resources and infrastructure entities provisioned by an environment (example: Owner = ",(0,r.kt)("a",{parentName:"p",href:"mailto:John.D@somecompany.com"},"John.D@somecompany.com"),") There are 2 types of tags: System tags and custom tags. System tags are tags that are defined by Torque (for example, environment id, space name, etc) while the users define the custom tags according to their needs."),(0,r.kt)("p",null,"For every launch of the blueprint, Torque will track the the overall cost information based on the tagging and the cloud provider cost. This is using the ",(0,r.kt)("strong",{parentName:"p"},"actual cost")," you are paying the cloud provider and not an estimation. After several launches, the hourly cost will be presented both in the catalog on the blueprint and when an environment is running, the estimation will be presented in the environment page. Cost information can be used for policies and approval flows as well as it's captured and passed to Torque OPA integration."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Catalog cost",src:o(3544).Z,width:"596",height:"342"}))))}p.isMDXComponent=!0},8691:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/env-tags-d67f61304821e8043e0d7027f5ddfa1d.png"},3544:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/est-cost-bd365123dbea58f6d540bfe15d3666e6.png"},1099:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/tags-aws-dea7ab2690ec5d75bf7f15dceafec920.png"}}]);