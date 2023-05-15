"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1541],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:15,title:"Torque Agent on Azure VMSS"},u=void 0,l={unversionedId:"admin-guide/authentication/torque-agent-on-azure-vmss",id:"admin-guide/authentication/torque-agent-on-azure-vmss",title:"Torque Agent on Azure VMSS",description:"Torque agent can be hosted in various ways, one of them is Virtual Machine Scale Sets (VMSS). Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, and the number of VM instances can automatically increase or decrease in response to demand or a defined schedule. Instead of using Torque Kubernetes agent, Azure VMSS will utilize Torque Docker.",source:"@site/docs/admin-guide/authentication/torque-agent-on-azure-vmss.md",sourceDirName:"admin-guide/authentication",slug:"/admin-guide/authentication/torque-agent-on-azure-vmss",permalink:"/admin-guide/authentication/torque-agent-on-azure-vmss",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/authentication/torque-agent-on-azure-vmss.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Torque Agent on Azure VMSS"},sidebar:"torqueSidebar",previous:{title:"Outbound Ports for Self-hosted Agents",permalink:"/admin-guide/authentication/torque-outbound-ports"},next:{title:"GitHub Source Control",permalink:"/admin-guide/source-control/source-control-github"}},c={},d=[{value:"Torque Agent prerequisites for VMSS",id:"torque-agent-prerequisites-for-vmss",level:4},{value:"Creating an VMSS in Azure",id:"creating-an-vmss-in-azure",level:4},{value:"Validating the installation",id:"validating-the-installation",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4}],p={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque agent can be hosted in various ways, one of them is Virtual Machine Scale Sets (VMSS). Azure Virtual Machine Scale Sets let you create and manage a group of load balanced VMs, and the number of VM instances can automatically increase or decrease in response to demand or a defined schedule. Instead of using Torque Kubernetes agent, Azure VMSS will utilize Torque Docker."),(0,o.kt)("h4",{id:"torque-agent-prerequisites-for-vmss"},"Torque Agent prerequisites for VMSS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Torque Agent installation ZIP",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Open Toruqe self-service web interface as an admin user"),(0,o.kt)("li",{parentName:"ol"},'Navigate to the "Administration" section and open the "Agents" tab'),(0,o.kt)("li",{parentName:"ol"},"Add a New Agent in the top right corner"),(0,o.kt)("li",{parentName:"ol"},'Select vCenter, then "Docker" and provide a name for the new agent (',(0,o.kt)("strong",{parentName:"li"},"copy the name aside")," as we'll use it later on in the configuration process)"),(0,o.kt)("li",{parentName:"ol"},'Click "skip for now" '))),(0,o.kt)("li",{parentName:"ol"},"Torque API long token - Toruqe long token allows API access without the need to refresh token once it's expires. It's possible to use the API references or the Torque self-service web interface  to generate such a token.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Long token generation",src:n(8779).Z,width:"800",height:"518"})),(0,o.kt)("h4",{id:"creating-an-vmss-in-azure"},"Creating an VMSS in Azure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"portal.azure.com")," and search for VMSS.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'click on "Create"\n',(0,o.kt)("img",{src:n(2070).Z,width:"765",height:"363"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a base image for you VMSS while making sure the image ships with docker pre-installed or supports docker execution. Here is an example for an Ubuntu based image shipped with pre-installed Docker."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6886).Z,width:"817",height:"337"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Change to the "Advanced" tab, and use the following installation code ',(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/QualiTorque/torque-agent-vmss/main/agent-install.sh"},"script")," in the ",(0,o.kt)("strong",{parentName:"li"},"Custom data")," section under Custom data and cloud init. The following code will use the Torque API to install, execute and register the new agent on the VMSS machines once they are launched.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7877).Z,width:"799",height:"271"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Make sure to replace the ",(0,o.kt)("em",{parentName:"li"},"TOKEN")," with the token you generated earlier in Toruqe API or self-service, and the ",(0,o.kt)("em",{parentName:"li"},"AGENT")," with the name of the torque agent you wish to create. "),(0,o.kt)("li",{parentName:"ol"},"Finish the VMSS creation wizard and wait for the VMS to be created.")),(0,o.kt)("h4",{id:"validating-the-installation"},"Validating the installation"),(0,o.kt)("p",null,"To validate that a new Torque agent was launched following VMSS creation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"log into the newly created machine (we used ssh in this example) and run the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo docker ps -a\n")),(0,o.kt)("p",null,"In case the installation process ended successfully, you should see two docker containers running on the VM:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5135).Z,width:"1143",height:"117"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Login into the Torque web-interface and make sure the new agent is marked as "Active" in the Toruqe administration/agents tab.')),(0,o.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"In case an error occurred or the Torque agent is not presented as Active, make sure to go over the cloud-init logs for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo cat /var/log/cloud-init-output.log\n")))}m.isMDXComponent=!0},5135:function(e,t,n){t.Z=n.p+"assets/images/vmss-containers-fc88bdbc3af2d6c93ac216b2e1e35cb0.png"},2070:function(e,t,n){t.Z=n.p+"assets/images/vmss-create-7384501fd09eb30cd6c7a0e5ea8bbcf9.png"},7877:function(e,t,n){t.Z=n.p+"assets/images/vmss-customdata-7bbc9b0538c886eb8972a7b6201b0bd2.png"},6886:function(e,t,n){t.Z=n.p+"assets/images/vmss-image-e4b51e06c1086dda3b494b76cdc1c721.png"},8779:function(e,t,n){t.Z=n.p+"assets/images/vmss-token-e416a506773fb1e1652d25baf52f48f0.gif"}}]);