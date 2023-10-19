"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[4409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:37,title:"Self-Managed GitHub"},a=void 0,s={unversionedId:"admin-guide/source-control/self-hosted-repositories/self-managed-github",id:"admin-guide/source-control/self-hosted-repositories/self-managed-github",title:"Self-Managed GitHub",description:"Torque supports connecting asset/blueprint repositories residing in a self-managed GitHub repository.",source:"@site/docs/admin-guide/source-control/self-hosted-repositories/self-managed-github.md",sourceDirName:"admin-guide/source-control/self-hosted-repositories",slug:"/admin-guide/source-control/self-hosted-repositories/self-managed-github",permalink:"/admin-guide/source-control/self-hosted-repositories/self-managed-github",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/self-hosted-repositories/self-managed-github.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,title:"Self-Managed GitHub"},sidebar:"torqueSidebar",previous:{title:"Self-Managed GitLab",permalink:"/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab"},next:{title:"SSO Configuration",permalink:"/admin-guide/sso"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque supports connecting asset/blueprint repositories residing in a self-managed GitHub repository. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub personal access token with read access for repositories in the server")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create Provider via Torque REST API."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'POST http://portal.qtorque.io/api/settings/repository_providers\n{\n  "name":"github-enterprise", \n  "type":"githubEnterprise",\n  "details": {\n      "token":"<Personal access token>",\n      "base_url": "https://my-github-enterprise.my-org.net/"\n  },\n  "repos": []\n}\n')),(0,o.kt)("p",{parentName:"li"},"Or with a curl command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\   --url https://portal.qtorque.io/api/settings/repository_providers \\  \n--header \'Authorization: Bearer <Torque API toke>\' \\  \n--header \'Content-Type: application/json\' \\  \n--data \'{  \n  "name":"github-enterprise",  \n  "type":"githubEnterprise",\n  "details": {    \n    "token":"<Personal access token>",    \n    "base_url": "https://github-enterprise.qualilabs.net/"  \n  }, \n  "repos": [] }\'\n\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": Display name of the provider"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": Value representing the type of repository provider (",(0,o.kt)("strong",{parentName:"li"},"githubEnterprise")," in this case)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token"),": The personal access token (see ",(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"base_url"),": __Schema://Host:Port/ of the GitHub server (include port if required)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Connect the repository as an asset repository to the space and discover the suitable assets. Make sure to check the "self-managed" checkbox.\nThe repository\'s URL must be in the base URL of the configured provider.',(0,o.kt)("br",{parentName:"p"}),"\n","For details regarding asset discovery, see ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),"."))))}d.isMDXComponent=!0}}]);