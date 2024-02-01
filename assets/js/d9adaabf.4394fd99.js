"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3,title:"Self-Managed GitLab"},i=void 0,s={unversionedId:"admin-guide/source-control/self-hosted-repositories/self-managed-gitlab",id:"admin-guide/source-control/self-hosted-repositories/self-managed-gitlab",title:"Self-Managed GitLab",description:"Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository.",source:"@site/docs/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab.md",sourceDirName:"admin-guide/source-control/self-hosted-repositories",slug:"/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab",permalink:"/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/self-hosted-repositories/self-managed-gitlab.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Self-Managed GitLab"},sidebar:"torqueSidebar",previous:{title:"Self-Managed GitHub",permalink:"/admin-guide/source-control/self-hosted-repositories/self-managed-github"},next:{title:"SSO Configuration",permalink:"/admin-guide/sso"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository.\nThere are 2 options to connect your gitlab repositories to Torque:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"With a single repository provider "),(0,n.kt)("li",{parentName:"ol"},"With a separate token for each repository")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For a single repository provider you will need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitLab access token with no expiration date and ",(0,n.kt)("strong",{parentName:"li"},"read.api")," and ",(0,n.kt)("strong",{parentName:"li"},"read.repository")," permission scopes.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"Locale Dropdown",src:r(3113).Z,width:"1235",height:"746"}))))),(0,n.kt)("p",null,"For separate token for each repository, you will need a token for each repository which you connect with read access.   "),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"For a single provider only:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create Provider via Torque REST API."),(0,n.kt)("p",{parentName:"li"}," POST ",(0,n.kt)("a",{parentName:"p",href:"http://portal.qtorque.io/api/settings/repository_providers"},"http://portal.qtorque.io/api/settings/repository_providers")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  "name":"gitlab-1",\n  "type":"gitLabEnterprise",\n  "details": {\n    "token":"NzcmESA2NjQ4MjU*********XL9TbHeWpeZO3p3GS9",\n    "base_url": "http://private.mygitlab.org/"\n  },\n  "repos": []\n}\n')),(0,n.kt)("p",{parentName:"li"},"Or with a curl command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\   --url https://portal.qtorque.io/api/settings/repository_providers \\  \n--header \'Authorization: Bearer <Torque API toke>\' \\  \n--header \'Content-Type: application/json\' \\  \n--data \'{  \n  "name":"gitlab-1",  \n  "type":"gitLabEnterprise",\n  "details": {    \n    "token":"NzcmESA2NjQ4MjU*********XL9TbHeWpeZO3p3GS9",    \n    "base_url": "http://private.mygitlab.org/" \n  }, \n  "repos": [] }\'\n\n')),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name"),": Display name of the provider"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type"),": Value representing the type of repository provider (",(0,n.kt)("strong",{parentName:"li"},"gitlabEnterprise")," in this case)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"token"),": Private access token (see ",(0,n.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"base_url"),": __Schema://Host:Port/ of the GitLab server (include port if required)")))),(0,n.kt)("p",null,"For both methods: "),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},'Connect the repository as an asset repository to the space and discover the suitable assets. Make sure to check the "self-managed" checkbox.\nThe repository\'s URL must be in the base URL of the configured provider.',(0,n.kt)("br",{parentName:"li"}),"For details regarding asset discovery, see ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),". "),(0,n.kt)("li",{parentName:"ol"},'If you didn\'t connect a provider, copy the repository token to the "token" field.')))}d.isMDXComponent=!0},3113:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/gitlab-reqs-255706ef30d1f1857947e118b28f0c1f.png"}}]);