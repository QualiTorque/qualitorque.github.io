"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[4761],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:5,title:"Audit Log Usage"},u=void 0,p={unversionedId:"audit-log/audit-log-usage",id:"audit-log/audit-log-usage",title:"Audit Log Usage",description:"Torque audit data is presented in json format. It includes events and with the following information:",source:"@site/docs/audit-log/audit-log-usage.md",sourceDirName:"audit-log",slug:"/audit-log/audit-log-usage",permalink:"/audit-log/audit-log-usage",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/audit-log/audit-log-usage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Audit Log Usage"},sidebar:"torqueSidebar",previous:{title:"Audit Log Configuration",permalink:"/audit-log/audit-log-configuration"},next:{title:"Terraform EKS Authentication",permalink:"/authentication/service-accounts-for-aws"}},c={},d=[{value:"Data retention",id:"data-retention",level:2},{value:"Events",id:"events",level:2}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Torque audit data is presented in json format. It includes events and with the following information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Timestamp (UTC)"),(0,l.kt)("li",{parentName:"ul"},"Event Type"),(0,l.kt)("li",{parentName:"ul"},"Event Name"),(0,l.kt)("li",{parentName:"ul"},"Actor (User/Automation/Torque)"),(0,l.kt)("li",{parentName:"ul"},"Scope (Account/Space/Environment)"),(0,l.kt)("li",{parentName:"ul"},"Result (Success/Failure)"),(0,l.kt)("li",{parentName:"ul"},"Error (in case of failure)"),(0,l.kt)("li",{parentName:"ul"},"Event-specific Data")),(0,l.kt)("h2",{id:"data-retention"},"Data retention"),(0,l.kt)("p",null,"Audit data is streamed to the configured log management tool and retained according to the tool's data retention policy."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The following events are captured and streamed:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Environments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Environment Launch Started"),(0,l.kt)("li",{parentName:"ul"},"Environment Launch Completed"),(0,l.kt)("li",{parentName:"ul"},"Drift Detected"),(0,l.kt)("li",{parentName:"ul"},"Drift Reconcile Started"),(0,l.kt)("li",{parentName:"ul"},"Drift Reconcile Completed"),(0,l.kt)("li",{parentName:"ul"},"Drift Dismissed"),(0,l.kt)("li",{parentName:"ul"},"Updates Detected"),(0,l.kt)("li",{parentName:"ul"},"Update started"),(0,l.kt)("li",{parentName:"ul"},"Update Complete"),(0,l.kt)("li",{parentName:"ul"},"Update Dismissed"),(0,l.kt)("li",{parentName:"ul"},"Terminate Started"),(0,l.kt)("li",{parentName:"ul"},"Terminate completed"),(0,l.kt)("li",{parentName:"ul"},"Force terminate")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Account")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Created"),(0,l.kt)("li",{parentName:"ul"},"Deleted")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Space")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create"),(0,l.kt)("li",{parentName:"ul"},"Modify"),(0,l.kt)("li",{parentName:"ul"},"Delete")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"User")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Invited"),(0,l.kt)("li",{parentName:"ul"},"Invitation Cancelled"),(0,l.kt)("li",{parentName:"ul"},"Joined"),(0,l.kt)("li",{parentName:"ul"},"Modified"),(0,l.kt)("li",{parentName:"ul"},"Deleted"),(0,l.kt)("li",{parentName:"ul"},"Login"),(0,l.kt)("li",{parentName:"ul"},"Logout"),(0,l.kt)("li",{parentName:"ul"},"Reset Password"),(0,l.kt)("li",{parentName:"ul"},"Forgot Password"),(0,l.kt)("li",{parentName:"ul"},"User Added to Space")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Host/Agent")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Created"),(0,l.kt)("li",{parentName:"ul"},"Deleted "),(0,l.kt)("li",{parentName:"ul"},"Deleted"),(0,l.kt)("li",{parentName:"ul"},"Added to Space"),(0,l.kt)("li",{parentName:"ul"},"Removed From Space"),(0,l.kt)("li",{parentName:"ul"},"Renamed")))}m.isMDXComponent=!0}}]);