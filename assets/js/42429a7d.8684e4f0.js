"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[31],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,title:"REST API"},i=void 0,s={unversionedId:"rest-api/rest-api",id:"rest-api/rest-api",title:"REST API",description:"The Torque REST API allows client applications to perform some of the actions you can perform in Torque's web UI application and automate the consumption of Torque environments as part of a CI/CD process. Available actions include:",source:"@site/docs/rest-api/rest-api.md",sourceDirName:"rest-api",slug:"/rest-api/",permalink:"/rest-api/",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/rest-api/rest-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"REST API"},sidebar:"torqueSidebar",previous:{title:"Cloud Efficiency Reports",permalink:"/reports/cloud-efficiency"},next:{title:"Torque API Tokens",permalink:"/rest-api/torque_api_tokens"}},p={},l=[{value:"Using the REST API",id:"using-the-rest-api",level:2}],c={toc:l},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Torque REST API allows client applications to perform some of the actions you can perform in Torque's web UI application and automate the consumption of Torque environments as part of a CI/CD process. Available actions include: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get/validate/publish blueprints"),(0,o.kt)("li",{parentName:"ul"},"Update/delete editable blueprints"),(0,o.kt)("li",{parentName:"ul"},"Manage blueprint policy"),(0,o.kt)("li",{parentName:"ul"},"Launch/manage environments"),(0,o.kt)("li",{parentName:"ul"},"Get/create agents"),(0,o.kt)("li",{parentName:"ul"},"Manage account security policies"),(0,o.kt)("li",{parentName:"ul"},"Manage Torque settings*")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:r(707).Z,width:"1280",height:"720"})),(0,o.kt)("h2",{id:"using-the-rest-api"},"Using the REST API"),(0,o.kt)("p",null,"To test the API methods, you will need an access token to be set in the ",(0,o.kt)("strong",{parentName:"p"},"Authorize")," section. If you got to this page from your Torque account, we already made it available for you, but you can switch to a different token as needed."),(0,o.kt)("p",null,"To get a different token, use the ",(0,o.kt)("strong",{parentName:"p"},"Get token")," function available under the ",(0,o.kt)("strong",{parentName:"p"},"Access Tokens")," section. After running the method, copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," you get in the response and set it in the Authorize ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer access_token")," field's. For example: Bearer fqSWuw72BbUVFn8AbokF77GJ0r5KEn9MiZjLXF8kBwI."))}f.isMDXComponent=!0},707:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rest-api-9e95dfc2637be68822e1d100aeb54185.gif"}}]);