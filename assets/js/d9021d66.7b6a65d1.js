"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[7270],{3905:(e,A,t)=>{t.d(A,{Zo:()=>a,kt:()=>d});var r=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function o(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?o(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function i(e,A){if(null==e)return{};var t,r,n=function(e,A){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),c=function(e){var A=r.useContext(u),t=A;return e&&(t="function"==typeof e?e(A):s(s({},A),e)),t},a=function(e){var A=c(e.components);return r.createElement(u.Provider,{value:A},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},p=r.forwardRef((function(e,A){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),l=c(t),p=n,d=l["".concat(u,".").concat(p)]||l[p]||f[p]||o;return t?r.createElement(d,s(s({ref:A},a),{},{components:t})):r.createElement(d,s({ref:A},a))}));function d(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var u in A)hasOwnProperty.call(A,u)&&(i[u]=A[u]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3810:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:4,title:"BitBucket Source Control"},s=void 0,i={unversionedId:"admin-guide/source-control/source-control-bitbucket",id:"admin-guide/source-control/source-control-bitbucket",title:"BitBucket Source Control",description:"Torque supports connecting asset/blueprint repositories on BitBucket out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see Discover Your Assets. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.",source:"@site/docs/admin-guide/source-control/source-control-bitbucket.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-control-bitbucket",permalink:"/admin-guide/source-control/source-control-bitbucket",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-control-bitbucket.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"BitBucket Source Control"},sidebar:"torqueSidebar",previous:{title:"Azure Repos Source Control",permalink:"/admin-guide/source-control/source-control-azure-repos"},next:{title:"CodeCommit Source Control",permalink:"/admin-guide/source-control/source-control-codecommit"}},u={},c=[],a={toc:c},l="wrapper";function f(e){let{components:A,...o}=e;return(0,n.kt)(l,(0,r.Z)({},a,o,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Torque supports connecting asset/blueprint repositories on BitBucket out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),". You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This article refers to the SAAS version of BitBucket. If you're using self-hosted BitBucket, check ",(0,n.kt)("a",{parentName:"strong",href:"/admin-guide/source-control/self-hosted-repositories/Overview"},"here")),"."),(0,n.kt)("p",null,"When connecting a repository, Torque\u2019s OAuth app (QTorque Portal) asks for permissions to access repositories on your organization.\nIf Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/account/settings/app-authorizations/"},"Bitbucket Applications")," page."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In Torque, go to the space's Settings > Repositories area and connect the repository."),(0,n.kt)("li",{parentName:"ol"},"Authorize the organization Quali Torque")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"Locale Dropdown",src:t(455).Z,width:"623",height:"370"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Go to Azure Applications (see above) and make sure the Torque application has been authorized.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"Locale Dropdown",src:t(5448).Z,width:"738",height:"145"}))),(0,n.kt)("p",null,"At this point, the Torque app was given the necessary permissions to the organization.\n4.\tReturn to Torque and continue setting up the connection."))}f.isMDXComponent=!0},5448:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,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"},455:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/bitbucket-repo-grant-24907e158c979dfab1cc06477d7507c7.png"}}]);