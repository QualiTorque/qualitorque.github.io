"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1033],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var p=2;p<i;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],a={sidebar_position:5,title:"Autogenerated Blueprints"},l=void 0,p={unversionedId:"blueprint-designer-guide/Autogenerated Blueprints",id:"blueprint-designer-guide/Autogenerated Blueprints",title:"Autogenerated Blueprints",description:"Torque autogenerated blueprints",source:"@site/docs/blueprint-designer-guide/Autogenerated Blueprints.md",sourceDirName:"blueprint-designer-guide",slug:"/blueprint-designer-guide/Autogenerated Blueprints",permalink:"/blueprint-designer-guide/Autogenerated Blueprints",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/Autogenerated Blueprints.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Autogenerated Blueprints"},sidebar:"torqueSidebar",previous:{title:"Getting Started with Designing Blueprints",permalink:"/blueprint-designer-guide/blueprint-quickstart-guide"},next:{title:"Blueprint YAML Overview",permalink:"/blueprint-designer-guide/blueprints/blueprints-overview"}},s={},d=[{value:"Torque autogenerated blueprints",id:"torque-autogenerated-blueprints",level:2},{value:"Common fields",id:"common-fields",level:3},{value:"Terraform-specific fields",id:"terraform-specific-fields",level:3},{value:"agent",id:"agent",level:3},{value:"Helm autogenerated blueprints",id:"helm-autogenerated-blueprints",level:3}],m={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"torque-autogenerated-blueprints"},"Torque autogenerated blueprints"),(0,i.kt)("p",null,"Torque autogenerates blueprints based on your assets (Terraform modules, Helm Charts). However, you may need to adjust these blueprints to your specific needs. You can modify autogenerated blueprints directly in Torque or in your preferred editor. For details, see ",(0,i.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/customize-blueprints"},"Customizing Autogenerated Blueprints"),"."),(0,i.kt)("h3",{id:"common-fields"},"Common fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"spec_version")," should not be changed. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description")," may be changed to a better description for your blueprint."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inputs"),": Torque generates the inputs based on the inputs in your module. The blueprint inputs are presented to the end user when they launch the blueprint, so they can fill out the inputs and/or override any defaults. These inputs will be the module's inputs upon deployment.\nRemove any inputs you don't want to expose in the deployed environment.")),(0,i.kt)("h3",{id:"terraform-specific-fields"},"Terraform-specific fields"),(0,i.kt)("p",null,'Torque currently supports only simple types as blueprint inputs for Terraform (string, boolean and numbers). The inputs that have been autogenerated for you are all "simple type" inputs from your module.'),(0,i.kt)("h3",{id:"agent"},"agent"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"agent"),": The kubernetes execution agent that will deploy the environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"outputs"),": Torque generates the outputs based on the outputs of your module. The blueprint's outputs are presented to the end user when they are ready (in the deployed environment).\nRemove any outputs you don't want to expose when the environment is deployed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"tf-version"),": The terraform version to be used to deploy the module. Change it according to your needs. "))),(0,i.kt)("h3",{id:"helm-autogenerated-blueprints"},"Helm autogenerated blueprints"),(0,i.kt)("p",null,'Torque currently supports only simple types as blueprint inputs for Helm (string, boolean and numbers). The inputs that have been autogenerated for you are all "simple type" inputs from your Helm chart.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"commands"),': A list of Helm commands to run before installing the chart.\nNo need to specify the Helm command itself.\ne.g, for the command "helm plugin install ',"[options]"," <path|url>... ","[flags]",' " type "plugin install ',"[options]"," <path|url>... ","[flags]",'".\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="For example:"',title:'"For','example:"':!0},"inputs:\n    obj.replicaCount:\n        type: ''\n        display-style: normal\n        default: 1\n")),(0,i.kt)("p",null,"The commands run from the root directory of the repository."),(0,i.kt)("p",null,"You can reference the default ",(0,i.kt)("strong",{parentName:"p"},"values.yaml")," file as ",(0,i.kt)("inlineCode",{parentName:"p"},"{CHART_ROOT_PATH}/values.yaml"),".\nand the ",(0,i.kt)("strong",{parentName:"p"},"override values.yaml")," configured for the blueprints as ",(0,i.kt)("inlineCode",{parentName:"p"},"../values.yaml"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"({CHART_ROOT_PATH}")," is the location of the chart files within the repo. If it's in the root, just use ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),")."),(0,i.kt)("p",null,"If you have dependencies, add the command ",(0,i.kt)("inlineCode",{parentName:"p"},"dep up"),"."))}c.isMDXComponent=!0}}]);