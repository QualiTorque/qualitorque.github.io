"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3608],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:18,title:"The Kubernetes Grain\u200b"},u=void 0,l={unversionedId:"blueprint-designer-guide/blueprints/kubernetes-grain",id:"blueprint-designer-guide/blueprints/kubernetes-grain",title:"The Kubernetes Grain\u200b",description:"The Kubernetes grain allows you to use native Kubernetes manifests, manifest catalogs in a given user's repository. Currently, it is not possible to launch multiple concurrent environments from the same blueprint on the same namespace (because the manifest resources are static and their names are not unique).",source:"@site/docs/blueprint-designer-guide/blueprints/kubernetes-grain.md",sourceDirName:"blueprint-designer-guide/blueprints",slug:"/blueprint-designer-guide/blueprints/kubernetes-grain",permalink:"/blueprint-designer-guide/blueprints/kubernetes-grain",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprints/kubernetes-grain.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"The Kubernetes Grain\u200b"},sidebar:"torqueSidebar",previous:{title:"The CloudFormation Grain",permalink:"/blueprint-designer-guide/blueprints/cloudformation-grain"},next:{title:"The Shell Grain",permalink:"/blueprint-designer-guide/blueprints/shell-grain"}},p={},c=[{value:"Tools and technologies",id:"tools-and-technologies",level:3},{value:"source",id:"source",level:3},{value:"agent",id:"agent",level:3},{value:"tags\u200b",id:"tags",level:3},{value:"namespace",id:"namespace",level:3},{value:"scripts (outputs)",id:"scripts-outputs",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Kubernetes grain allows you to use native Kubernetes manifests, manifest catalogs in a given user's repository. Currently, it is not possible to launch multiple concurrent environments from the same blueprint on the same namespace (because the manifest resources are static and their names are not unique)."),(0,s.kt)("h3",{id:"tools-and-technologies"},"Tools and technologies"),(0,s.kt)("p",null,"The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"dotnet"),(0,s.kt)("li",{parentName:"ul"},"curl"),(0,s.kt)("li",{parentName:"ul"},"kubectl"),(0,s.kt)("li",{parentName:"ul"},"jq")),(0,s.kt)("h3",{id:"source"},"source"),(0,s.kt)("p",null,"Please see ",(0,s.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source"},"the grain source")," for more details."),(0,s.kt)("h3",{id:"agent"},"agent"),(0,s.kt)("p",null,"Please see ",(0,s.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent"},"the grain agent")," for more details."),(0,s.kt)("h3",{id:"tags"},"tags\u200b"),(0,s.kt)("p",null,"Whenever a Kubernetes grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags. If you wish to disable tagging for all resources in a specific Kubernetes grain, use the following syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: kubernetes\n    spec:\n      tags:\n        auto-tag: false\n")),(0,s.kt)("h3",{id:"namespace"},"namespace"),(0,s.kt)("p",null,"The deployment namespace must exist in the cluster prior to the deployment. It must not be equal to the namespaces used by Torque for agent deployments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  web-client:\n    kind: kubernetes\n    spec:\n      sources:\n        ...\n      namespace: '{{ .inputs.namespace }}'\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,s.kt)("strong",{parentName:"h5"},"Note"),":")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Launching concurrent environments with a Kubernetes grain is not supported for the same namespace. "),(0,s.kt)("li",{parentName:"ul"},"Make sure the Torque agent has permissions to use those namespaces.")))),(0,s.kt)("h3",{id:"scripts-outputs"},"scripts (outputs)"),(0,s.kt)("p",null,"Kubernetes does not natively support outputs. Using Torque, you can overcome this and provide outputs from the manifest installation process using scripts. In this approach, the script must export environment variables. These environment variables can later be declared also as outputs.\nThe script is defined in the blueprint and executed after the grain's installation."),(0,s.kt)("p",null,"For example, script named ",(0,s.kt)("strong",{parentName:"p"},"post-install-script.sh")," that generates two outputs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"outputs:\n  output1:\n    kind: regular\n    value: '{{.grains.nginx.scripts.post-kubernetes-install.outputs.output1}}'\n  output2:\n    kind: regular\n    value: '{{.grains.nginx.scripts.post-kubernetes-install.outputs.output2}}'\n\ngrains:\n  nginx:\n    kind: kubernetes\n    spec:\n      source:\n        ...\n      namespace:\n      agent:\n        ...\n      scripts:\n        post-kubernetes-install:\n          source:\n            store: Torque-Spec2-Demos\n            path: scripts/post-install-script.sh\n          outputs:\n            - output1\n            - output2\n")))}m.isMDXComponent=!0}}]);