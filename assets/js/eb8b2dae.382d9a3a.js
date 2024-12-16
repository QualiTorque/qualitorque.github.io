"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3,title:"Azure Setup"},a=void 0,l={unversionedId:"getting-started/Resources Inventory/Azure-Setup",id:"getting-started/Resources Inventory/Azure-Setup",title:"Azure Setup",description:"Prerequisites",source:"@site/docs/getting-started/Resources Inventory/Azure-Setup.md",sourceDirName:"getting-started/Resources Inventory",slug:"/getting-started/Resources Inventory/Azure-Setup",permalink:"/getting-started/Resources Inventory/Azure-Setup",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/getting-started/Resources Inventory/Azure-Setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Azure Setup"},sidebar:"torqueSidebar",previous:{title:"AWS Setup",permalink:"/getting-started/Resources Inventory/AWS-Setup"},next:{title:"Provision Terraform",permalink:"/getting-started/Getting starting with terraform"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Minimal Permissions Required",id:"minimal-permissions-required",level:3},{value:"Adding Your Azure Account",id:"adding-your-azure-account",level:3},{value:"Continue Setup",id:"continue-setup",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An Azure subscription."),(0,i.kt)("li",{parentName:"ul"},"Steps to create and register an application in Azure Active Directory (AD):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Navigate to "App Registrations" in Azure AD and click New Registration. Follow the prompts (you only need to provide the name of the application). Note the Tenant ID and Application ID as these are required later.'),(0,i.kt)("li",{parentName:"ul"},"Go to Certificates & Secrets and create a new client secret. Note the Secret Value for use in the application configuration."),(0,i.kt)("li",{parentName:"ul"},"Assign the Reader role to the application:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Navigate to Subscriptions and select the appropriate subscription."),(0,i.kt)("li",{parentName:"ul"},"Under Access Control (IAM), click Role assignments and select Add role assignment."),(0,i.kt)("li",{parentName:"ul"},"In the Roles tab, search for the Reader role, and click Next."),(0,i.kt)("li",{parentName:"ul"},"On the Members tab, select User, group, or service principal and search for the registered application."),(0,i.kt)("li",{parentName:"ul"},"Click Select, then Review and Assign to complete the setup.")))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minimal-permissions-required"},"Minimal Permissions Required"),(0,i.kt)("p",null,"Torque Resources Inventory requires read-only access to inventory and manage cloud resources. The following permissions are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reader role assigned to the Azure subscription."),(0,i.kt)("li",{parentName:"ul"},"The ability to list resources, read metadata, and access resource details for all resources within the subscription.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"adding-your-azure-account"},"Adding Your Azure Account"),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Account Center"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Curate")," tab, go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources Inventory")," in the sidebar."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect a New Cloud Account"),"."),(0,i.kt)("li",{parentName:"ol"},"Select Azure as the cloud provider."),(0,i.kt)("li",{parentName:"ol"},"Provide the necessary details, including ",(0,i.kt)("inlineCode",{parentName:"li"},"Subscription ID"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant ID"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Application ID"),", and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Secret")," with read-only permissions."),(0,i.kt)("li",{parentName:"ol"},"Click Connect."),(0,i.kt)("li",{parentName:"ol"},"Once connected, Torque Resources Inventory will begin scanning and discovering your cloud resources.")),(0,i.kt)("h3",{id:"continue-setup"},(0,i.kt)("a",{parentName:"h3",href:"/getting-started/Resources%20Inventory/Resources-Inventory"},"Continue Setup")))}d.isMDXComponent=!0}}]);