"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9977],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,m=s["".concat(l,".").concat(g)]||s[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={sidebar_position:3,title:"Audit Log Configuration"},l=void 0,c={unversionedId:"admin-guide/governance/audit-log/audit-log-configuration",id:"admin-guide/governance/audit-log/audit-log-configuration",title:"Audit Log Configuration",description:"Prerequisites",source:"@site/docs/admin-guide/governance/audit-log/audit-log-configuration.md",sourceDirName:"admin-guide/governance/audit-log",slug:"/admin-guide/governance/audit-log/audit-log-configuration",permalink:"/admin-guide/governance/audit-log/audit-log-configuration",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/governance/audit-log/audit-log-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Audit Log Configuration"},sidebar:"torqueSidebar",previous:{title:"Audit Log Overview",permalink:"/admin-guide/governance/audit-log/audit-log-overview"},next:{title:"Audit Log Event Structure and Contents",permalink:"/admin-guide/governance/audit-log/audit-log-usage"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:d};function g(e){var t=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Working Elastic Stack server with internet access")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Administration > Audit Log"),", and click ",(0,i.kt)("strong",{parentName:"p"},"Add audit target"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"elasticsearch")," and fill in the details. "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(7183).Z,width:"925",height:"687"})),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination URL")," of the elastic server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username/Password")," of the elastic Stack admin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Certificate"),": You can optionally configure SSL connection by specifying the http ca ",(0,i.kt)("strong",{parentName:"li"},"Certificate"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Send a test event"),", and click ",(0,i.kt)("strong",{parentName:"p"},"Save"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Kibana, go to ",(0,i.kt)("strong",{parentName:"p"},"Management >  Stack Management > Index Management")," and make sure you see the ",(0,i.kt)("strong",{parentName:"p"},"quali")," index."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(6766).Z,width:"968",height:"545"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Management >  Stack Management > Index Patterns"),' and create a "quali" index pattern.'),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(3191).Z,width:"758",height:"681"}))),(0,i.kt)("p",{parentName:"li"},"  Congratulations! Audit Log is configured and collecting Torque events."))))}g.isMDXComponent=!0},7183:function(e,t,n){t.Z=n.p+"assets/images/add-audit-target-0b7fc7573615d65390d415d45d6ef618.png"},3191:function(e,t,n){t.Z=n.p+"assets/images/quali-index-pattern-fd6806973480a546012dedb2869a731a.png"},6766:function(e,t,n){t.Z=n.p+"assets/images/quali-index-2356dcfe31f0496b5ce4cc862b74c2e3.png"}}]);