"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,title:"The Activity Report"},a=void 0,s={unversionedId:"reports/activity-and-adoption",id:"reports/activity-and-adoption",title:"The Activity Report",description:"The activity report furnishes comprehensive details regarding the usage and adoption of your Torque account.",source:"@site/docs/reports/activity-and-adoption.md",sourceDirName:"reports",slug:"/reports/activity-and-adoption",permalink:"/reports/activity-and-adoption",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/reports/activity-and-adoption.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"The Activity Report"},sidebar:"torqueSidebar",previous:{title:"Using Torque Reports",permalink:"/reports/using-reports"},next:{title:"Cloud Efficiency Reports",permalink:"/reports/cloud-efficiency"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The activity report furnishes comprehensive details regarding the usage and adoption of your Torque account."),(0,i.kt)("p",null,"Here are examples of insights obtainable from this report:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trend in environment launches"),(0,i.kt)("li",{parentName:"ul"},"Trend in active users (Note: A user is deemed active if they have launched at least one environment within the defined timeframe)"),(0,i.kt)("li",{parentName:"ul"},"Holistic view of environment statuses, including those requiring immediate attention"),(0,i.kt)("li",{parentName:"ul"},"Segmentation of environments based on space and blueprint"),(0,i.kt)("li",{parentName:"ul"},"Identification of the most active users"),(0,i.kt)("li",{parentName:"ul"},"Evaluation of the most and least used blueprints"),(0,i.kt)("li",{parentName:"ul"},"Assessment of environments running for the longest durations")),(0,i.kt)("p",null,"Let's examine a real-life application of the activity report:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(8692).Z,width:"552",height:"406"}))),(0,i.kt)("p",null,'Observing the "Environment Status" chart, we note that there are presently five environments (1.9% of the total environments) for which termination failed. Since their cloud resources may still be operational and consuming cloud budget, investigating this matter is advisable.\nIf we ',(0,i.kt)("a",{parentName:"p",href:"/reports/using-reports#cross-filtering"},"cross-filter")," by these environments, we get all the report filtered by environments which failed to terminate properly. "),(0,i.kt)("p",null,"We can discern the launch dates of these environments: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(477).Z,width:"911",height:"395"}))),(0,i.kt)("p",null,"Additionally, we can identify the spaces where these environments were launched:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(8156).Z,width:"595",height:"253"}))),(0,i.kt)("p",null,"As well as who launched it, and from what blueprints. "),(0,i.kt)("p",null,"This data enables us to identify anomalies or issues in specific spaces, users, or blueprints. For instance, if a substantial number of environments which failed to terminate were launched from a single blueprint, we can further cross-filter based on the specific blueprint."),(0,i.kt)("p",null,"To delve deeper, we can view the environments directly in the environments table:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(6879).Z,width:"1858",height:"375"}))),(0,i.kt)("p",null,"Clicking on the link will redirect us to the environment itself, facilitating analysis and decision-making regarding the next steps."))}d.isMDXComponent=!0},8692:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reports-activity-1-02bed5af357d7ce86ea0f19c6acde873.png"},477:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reports-activity-2-8b8f58d4a2b167f92e00b4e2062fe1cf.png"},8156:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reports-activity-3-38f4c6c344a6e221aba2b9ec2f7d9659.png"},6879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reports-activity-4-2bf7af075000f6c84dc3f0ce49fb148b.png"}}]);