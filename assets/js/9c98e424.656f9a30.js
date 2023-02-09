"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2176],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3282:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:13,title:"Audit Log Event Examples"},s=void 0,u={unversionedId:"admin-guide/governance/audit-log/audit-log-json-example",id:"admin-guide/governance/audit-log/audit-log-json-example",title:"Audit Log Event Examples",description:"Environment Termination Started",source:"@site/docs/admin-guide/governance/audit-log/audit-log-json-example.md",sourceDirName:"admin-guide/governance/audit-log",slug:"/admin-guide/governance/audit-log/audit-log-json-example",permalink:"/admin-guide/governance/audit-log/audit-log-json-example",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/governance/audit-log/audit-log-json-example.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Audit Log Event Examples"},sidebar:"torqueSidebar",previous:{title:"Audit Log Data Retention",permalink:"/admin-guide/governance/audit-log/data-retention"},next:{title:"Workflows",permalink:"/admin-guide/governance/workflows"}},l={},d=[{value:"Environment Termination Started",id:"environment-termination-started",level:2},{value:"Modify Space",id:"modify-space",level:2},{value:"Send User Invitation",id:"send-user-invitation",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"environment-termination-started"},"Environment Termination Started"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'inputs:\n    {\n  "_index": "quali",\n  "_type": "_doc",\n  "_id": "E_TV54QBoWVq8-70aD22",\n  "_score": 1,\n  "_source": {\n    "name": "EnvironmentTerminationStarted",\n    "event_type": "environment",\n    "event_status": "success",\n    "scope": {\n      "environment": "u9FQhalUq6yh",\n      "space": "shai",\n      "account": "trial-e1a4eb56d"\n    },\n    "actor": {\n      "actor_type": "user",\n      "details": {\n        "user_email": shai.p@quali.com\n      }\n    },\n    "timestamp": "2022-12-06T14:27:08.6804874Z",\n    "traceId": "bc208caa38fd248f89dfcd87a7b5f8f1",\n    "data": {\n      "isForced": "False"\n    },\n    "errors": []\n  }\n')),(0,i.kt)("h2",{id:"modify-space"},"Modify Space"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'{\n  "_index": "quali",\n  "_type": "_doc",\n  "_id": "gvTP54QBoWVq8-70Wjbt",\n  "_score": 1,\n  "_source": {\n    "name": "ModifySpace",\n    "event_type": "space",\n    "event_status": "success",\n    "scope": {\n      "space": "shai",\n      "account": "trial-e1a4eb56d"\n    },\n    "actor": {\n      "actor_type": "user",\n      "details": {\n        "user_email": shai.p@quali.com\n      }\n    },\n    "timestamp": "2022-12-06T14:20:31.9277719Z",\n    "traceId": "0HMMNHE1FKRSJ:00000002",\n    "data": {\n      "oldProperties": "name: shai, color: blueGrey, icon: string",\n      "newProperties": "name: shai, color: mediumBlue, icon: string"\n    },\n    "errors": []\n  }\n')),(0,i.kt)("h2",{id:"send-user-invitation"},"Send User Invitation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'{\n  "_index": "quali",\n  "_type": "_doc",\n  "_id": "UPTM54QBoWVq8-70hTND",\n  "_score": 1,\n  "_source": {\n    "name": "SendUserInvitations",\n    "event_type": "user",\n    "event_status": "success",\n    "scope": {\n      "account": "trial-e1a4eb56d"\n    },\n    "actor": {\n      "actor_type": "user",\n      "details": {\n        "user_email": shai.p@quali.com\n      }\n    },\n    "timestamp": "2022-12-06T14:17:25.9601823Z",\n    "traceId": "0HMMNHE1FKRNB:00000002",\n    "data": {\n      "emails": ghrt@gmail.com,\n      "reason": "TeamMemberJoinSpace",\n      "spaceName": "Sample",\n      "givenSpaceRole": "Space Member"\n    },\n    "errors": []\n  }\n')))}m.isMDXComponent=!0}}]);