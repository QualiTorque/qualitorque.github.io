"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[8861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:21,title:"CircleCI Plugin"},a=void 0,l={unversionedId:"eco-system/ci-cd-tooling/circle-ci",id:"eco-system/ci-cd-tooling/circle-ci",title:"CircleCI Plugin",description:"The Quali Torque plugin lets developers trigger application environments on-demand directly from their CircleCI pipelines. CircleCI users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing by utilizing the Torque orb\u2019s pre-defined commands.",source:"@site/docs/eco-system/ci-cd-tooling/circle-ci.md",sourceDirName:"eco-system/ci-cd-tooling",slug:"/eco-system/ci-cd-tooling/circle-ci",permalink:"/eco-system/ci-cd-tooling/circle-ci",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/eco-system/ci-cd-tooling/circle-ci.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"CircleCI Plugin"},sidebar:"torqueSidebar",previous:{title:"TeamCity Plugin",permalink:"/eco-system/ci-cd-tooling/teamcity"},next:{title:"Issue Trackers",permalink:"/eco-system/issue-trackers"}},c={},s=[{value:"1. Install",id:"1-install",level:2},{value:"2. Configure",id:"2-configure",level:2},{value:"3. Verify and launch",id:"3-verify-and-launch",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/quali/torque"},"Quali Torque plugin")," lets developers trigger application environments on-demand directly from their CircleCI pipelines. CircleCI users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing by utilizing the Torque orb\u2019s pre-defined commands."),(0,o.kt)("p",null,"To integrate Torque with the CircleCI plugin, make sure to complete the next few steps."),(0,o.kt)("h2",{id:"1-install"},"1. Install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the CircleCI web app, navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Projects")," section and select ",(0,o.kt)("strong",{parentName:"p"},"Project Settings")," from the menu next to your repository. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Environment Variables")," page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following three variables:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TORQUE_SERVER"),": The URL of your Torque server (",(0,o.kt)("a",{parentName:"li",href:"https://portal.qtorque.io"},"https://portal.qtorque.io"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TORQUE_SPACE"),": The name of your space in Torque."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TORQUE_TOKEN"),": Use the token you generate below"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Generate New Token")," button in the plugin's instructions pane."))),(0,o.kt)("h2",{id:"2-configure"},"2. Configure"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using the torque orb in your config file")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In your repository, edit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},".circleci/config.yml"))," file and add torque to the orbs list. Example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"orbs:\ntorque: quali/torque@1.1.0\n")))),(0,o.kt)("p",null,"It is recommended to use the ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/quali/torque"},"latest release version"),"."),(0,o.kt)("h2",{id:"3-verify-and-launch"},"3. Verify and launch"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Torque's tasks in your CircleCI workflow")),(0,o.kt)("p",null,"Add the ",(0,o.kt)("strong",{parentName:"p"},"torque/start-sandbox")," and ",(0,o.kt)("strong",{parentName:"p"},"torque/end-sandbox")," commands to start and stop the environment in Torque. Review examples ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/quali/torque#usage-examples"},"here"),".\nSee the parameters list for orb behavior command customization ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/quali/torque#jobs"},"here"),"."))}m.isMDXComponent=!0}}]);