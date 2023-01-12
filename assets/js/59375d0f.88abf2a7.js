"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1283],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(g,i(i({ref:e},u),{},{components:n})):o.createElement(g,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6792:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:12,title:"Configuring Cost for Kubernetes"},s=void 0,c={unversionedId:"admin-guide/cost-tracking/configuring-cost-k8s",id:"admin-guide/cost-tracking/configuring-cost-k8s",title:"Configuring Cost for Kubernetes",description:"Torque collects cost data using cost collection targets, which are managed in the Administration page's Cloud Accounts tab. For AWS and Azure clouds, you must first add a cost collection target, however for K8s, Torque automatically creates a cost collection target when an agent is installed on the cluster.",source:"@site/docs/admin-guide/cost-tracking/configuring-cost-k8s.md",sourceDirName:"admin-guide/cost-tracking",slug:"/admin-guide/cost-tracking/configuring-cost-k8s",permalink:"/admin-guide/cost-tracking/configuring-cost-k8s",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/cost-tracking/configuring-cost-k8s.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Configuring Cost for Kubernetes"},sidebar:"torqueSidebar",previous:{title:"Configuring Cost for Azure",permalink:"/admin-guide/cost-tracking/configuring-cost-azure"},next:{title:"Notifications",permalink:"/admin-guide/notifications"}},u={},p=[{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:p};function d(t){var e=t.components,l=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque collects cost data using cost collection targets, which are managed in the ",(0,a.kt)("strong",{parentName:"p"},"Administration")," page's ",(0,a.kt)("strong",{parentName:"p"},"Cloud Accounts")," tab. For AWS and Azure clouds, you must first add a cost collection target, however for K8s, Torque automatically creates a cost collection target when an agent is installed on the cluster. "),(0,a.kt)("p",null,"Follow the next steps to start collecting cost on your K8s cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Kubecost: "),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Torque collects cost data directly from the pods using a 3",(0,a.kt)("sup",null,"rd"),"-party tool called Kubecost. To start collecting costs from your cluster, deploy Kubecost in your cluster.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For deployment instructions, see: ",(0,a.kt)("a",{parentName:"li",href:"https://www.kubecost.com/install.html#show-instructions"},"https://www.kubecost.com/install.html#show-instructions")),(0,a.kt)("li",{parentName:"ul"},"Make sure the kubecost default namespace is used (Namespace kubecost)"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Validate the relevant cost collection target:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Identifiy the relevant cost collection target. Its name will be the same name as the agent installed on the cluster. "),(0,a.kt)("li",{parentName:"ol"},"Click the cost collection target's 3 dot menu and select ",(0,a.kt)("strong",{parentName:"li"},"Validate")," to make sure it works (i.e. cost data can be collected).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If validation fails, perform the procedure described in ",(0,a.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"),"."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable the relevant cost collection target:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Cloud Accounts > Cost Collection Target"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the desired cost collection target's ",(0,a.kt)("strong",{parentName:"p"},"Enabled")," toggle."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(6280).Z,width:"1122",height:"420"}))))))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Verify that Kubecost is deployed in the cluster. ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Navigate your browser to http://localhost:9090/. If you can see kubecost data, it means it's working. If you can't, see ",(0,a.kt)("a",{parentName:"li",href:"https://docs.kubecost.com/troubleshooting/troubleshoot-install"},"this guide")," for help."))),(0,a.kt)("li",{parentName:"ol"},"In Torque, try to re-enable the K8S cost collection target and validate that it works."),(0,a.kt)("li",{parentName:"ol"},"If the error still exists, run the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.qtorque.io/api_reference/#/paths/api-settings-computeservices-deployment/post"},"Get agent deployment file")," API call with the following body: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'{\n    "service_type": "k8s",\n    "service_name": "[the name of the agent]",\n    "details": {\n        "include_agent_deployment": false,\n        "enable_kubecost": true\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ol"},"Save the output to a deployment file."),(0,a.kt)("li",{parentName:"ol"},"Run the following command on the cluster:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl apply -f \u201c[generated deployment file]\u201d\n"))),(0,a.kt)("li",{parentName:"ol"},"Try to re-validate the cost collection target."),(0,a.kt)("li",{parentName:"ol"},"If the error still exists, call Torque support.")))}d.isMDXComponent=!0},6280:function(t,e,n){e.Z=n.p+"assets/images/enable-cost-target-eea58f1186ba7c84fa9ad4c19b937f70.png"}}]);