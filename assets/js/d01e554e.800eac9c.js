"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[5271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:11,title:"Configuring Cost for Azure"},s=void 0,c={unversionedId:"admin-guide/cost-tracking/configuring-cost-azure",id:"admin-guide/cost-tracking/configuring-cost-azure",title:"Configuring Cost for Azure",description:"Prerequisites",source:"@site/docs/admin-guide/cost-tracking/configuring-cost-azure.md",sourceDirName:"admin-guide/cost-tracking",slug:"/admin-guide/cost-tracking/configuring-cost-azure",permalink:"/admin-guide/cost-tracking/configuring-cost-azure",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/cost-tracking/configuring-cost-azure.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Configuring Cost for Azure"},sidebar:"torqueSidebar",previous:{title:"Configuring Cost for AWS",permalink:"/admin-guide/cost-tracking/configuring-cost-aws"},next:{title:"Configuring Cost for Kubernetes",permalink:"/admin-guide/cost-tracking/configuring-cost-k8s"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:u};function g(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Create an application and register it in Azure AD. To do so, navigate to "App Registrations" and click on ',(0,o.kt)("strong",{parentName:"li"},"New Registration"),". Follow the steps (no need to provide redirect URl, just the name will do). Take a not of the  ",(0,o.kt)("strong",{parentName:"li"},"Tennant Id")," and  ",(0,o.kt)("strong",{parentName:"li"},"Application Id")," as they will be needed later in the process. "),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add a Certificate or Secret --\x3e New client secret")," --\x3e ",(0,o.kt)("strong",{parentName:"li"},"Add"),", and take a note of the created ",(0,o.kt)("strong",{parentName:"li"},"Value")," (it will be used later in the application secret configuration)"),(0,o.kt)("li",{parentName:"ol"},"Assign the ",(0,o.kt)("strong",{parentName:"li"},"Cost Management Reader")," (or, ",(0,o.kt)("strong",{parentName:"li"},"Cost Management Contributor"),") Role to the application:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Subscriptions")," and click on the subscription where you would like Torque to collect the cost"),(0,o.kt)("li",{parentName:"ol"},"On the left side panel select ",(0,o.kt)("strong",{parentName:"li"},"Access control (IAM)")),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Role assignments")," tab"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add")," > ",(0,o.kt)("strong",{parentName:"li"},"Add role assignment"),". If you don't have permissions to assign roles, the Add role assignment option will be disabled, in this case contact your Azure administrator for help."),(0,o.kt)("li",{parentName:"ol"},"On the Roles tab, search for ",(0,o.kt)("strong",{parentName:"li"},"Cost Management Reader")," (or, ",(0,o.kt)("strong",{parentName:"li"},"Cost Management Contributor"),") and Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Members tab, select ",(0,o.kt)("strong",{parentName:"li"},"User, group, or service principal"),"  and Click ",(0,o.kt)("strong",{parentName:"li"},"Select members"),"."),(0,o.kt)("li",{parentName:"ol"},"In the search box, search for your created application from step 1."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Select")," and then ",(0,o.kt)("strong",{parentName:"li"},"Review and Assign")," to finish the procedure. ")))),(0,o.kt)("p",null,"Make sure you have all the following information for the application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Subscription Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tennant Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Secret")," ")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create an Azure cost collection target:")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Administration > Cloud Accounts > Cost Collection Target"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Cost Collection Target"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Azure"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify the cloud account's details (see ",(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Subscription Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tennant Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Secret")," "))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Finish"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the cost collection target's 3 dot menu and select ",(0,o.kt)("strong",{parentName:"li"},"Validate")," to make sure it works (i.e. cost data can be collected).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If validation fails, it means there is a problem with one or more of the provided parameters. Return to the prerequisites section and correct them as required."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enable a cost collection target for your Azure account:")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Administration > Cloud Accounts > Cost Collection Target"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the desired cost collection target's ",(0,o.kt)("strong",{parentName:"p"},"Enabled")," toggle."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(6280).Z,width:"1122",height:"420"}))))))))}g.isMDXComponent=!0},6280:function(e,t,n){t.Z=n.p+"assets/images/enable-cost-target-eea58f1186ba7c84fa9ad4c19b937f70.png"}}]);