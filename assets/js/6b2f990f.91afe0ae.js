"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9561],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="The Torque Termonilogy",c={unversionedId:"cost/the-torque-terminology",id:"cost/the-torque-terminology",title:"The Torque Termonilogy",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/cost/the-torque-terminology.md",sourceDirName:"cost",slug:"/cost/the-torque-terminology",permalink:"/torque-docs/cost/the-torque-terminology",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cost/the-torque-terminology.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"torqueSidebar",previous:{title:"Policies",permalink:"/torque-docs/policies-and-governance/Policies"},next:{title:"Torque's Samples Space",permalink:"/torque-docs/cost/torque-sample-space"}},u={},p=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-torque-termonilogy"},"The Torque Termonilogy"),(0,i.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,i.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,i.kt)("p",null,"Release a version 1.0 of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,i.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,i.kt)("p",null,"Your docs now have 2 versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,i.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,i.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,i.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,i.kt)("p",null,"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,i.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docs Version Dropdown",src:n(6609).Z,width:"494",height:"276"})),(0,i.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,i.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}m.isMDXComponent=!0},6609:function(e,t,n){t.Z=n.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);