"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[7571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6,title:"Azure DevOps Plugin"},a=void 0,l={unversionedId:"eco-system/ci-cd-tooling/azure-devops",id:"eco-system/ci-cd-tooling/azure-devops",title:"Azure DevOps Plugin",description:"The Azure DevOps plugin lets developers trigger application environments on-demand directly from their Azure DevOps pipelines. Azure DevOps users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing the Torque orb\u2019s pre-defined commands.",source:"@site/docs/eco-system/ci-cd-tooling/azure-devops.md",sourceDirName:"eco-system/ci-cd-tooling",slug:"/eco-system/ci-cd-tooling/azure-devops",permalink:"/eco-system/ci-cd-tooling/azure-devops",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/eco-system/ci-cd-tooling/azure-devops.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Azure DevOps Plugin"},sidebar:"torqueSidebar",previous:{title:"Torque VSCode plugin",permalink:"/eco-system/dev-tools/vs-plugin"},next:{title:"Jenkins Plugin",permalink:"/eco-system/ci-cd-tooling/jenkins"}},s={},p=[{value:"1. Install",id:"1-install",level:2},{value:"2. Configure",id:"2-configure",level:2},{value:"3. Verify and launch",id:"3-verify-and-launch",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Azure DevOps plugin lets developers trigger application environments on-demand directly from their Azure DevOps pipelines. Azure DevOps users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing the Torque orb\u2019s pre-defined commands.\nTo integrate Torque with the Azure DevOps plugin, make sure to complete the next few steps."),(0,o.kt)("h2",{id:"1-install"},"1. Install"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Admin permissions on the plugin\u2019s intended Azure DevOps organization. If you are not the organization\u2019s admin, you may send a request to the admin to install the plugin for you."),(0,o.kt)("li",{parentName:"ul"},"Azure DevOps organization that will use the Torque plugin")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To Install the plugin:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to ",(0,o.kt)("a",{parentName:"li",href:"http://visualstudio.com"},"VisualStudio.com")," and select the organization that will use this plugin."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Organization settings"),"."),(0,o.kt)("li",{parentName:"ol"},"From the left pane, select ",(0,o.kt)("strong",{parentName:"li"},"Extensions")," and then click ",(0,o.kt)("strong",{parentName:"li"},"Browse Marketplace"),"."),(0,o.kt)("li",{parentName:"ol"},"Search for \u201ctorque\u201d, click the Torque plugin and then ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("h2",{id:"2-configure"},"2. Configure"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To set your Torque account information:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Project Settings > Service connections"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New service connection"),", select ",(0,o.kt)("strong",{parentName:"li"},"Torque"),", and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify the server url (",(0,o.kt)("a",{parentName:"li",href:"https://portal.qtorque.io"},"https://portal.qtorque.io"),")."),(0,o.kt)("li",{parentName:"ol"},"Specify the ",(0,o.kt)("strong",{parentName:"li"},"Torque Long Token")," with the one generated below:"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Generate New Token")," in the plugin's instructions pane."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Verify")," and make sure the connection succeeds."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Service Connection Name")," field, enter 'Torque connection'."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Verify")," and save.")),(0,o.kt)("h2",{id:"3-verify-and-launch"},"3. Verify and launch"),(0,o.kt)("p",null,"Use Torque's environments in your Azure DevOps Build\nUse the available build steps to create an environment from any blueprint, retrieve its details, start your tests and end the environment when it's no longer needed.\nLearn more ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Quali.build-release-task-torque"},"here"),"."))}m.isMDXComponent=!0}}]);