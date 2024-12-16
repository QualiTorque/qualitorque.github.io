"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9491],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,c=p["".concat(m,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4242:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,title:"Actions and workflows"},i=void 0,o={unversionedId:"environment-services/Actions and workflows",id:"environment-services/Actions and workflows",title:"Actions and workflows",description:"Resource  and Workflows",source:"@site/docs/environment-services/Actions and workflows.md",sourceDirName:"environment-services",slug:"/environment-services/Actions and workflows",permalink:"/environment-services/Actions and workflows",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/environment-services/Actions and workflows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Actions and workflows"},sidebar:"torqueSidebar",previous:{title:"Drift & Update",permalink:"/environment-services/drift-and-update"},next:{title:"Cost tracking",permalink:"/environment-services/Cost"}},m={},u=[{value:"Resource  and Workflows",id:"resource--and-workflows",level:2},{value:"Overview",id:"overview",level:3},{value:"<strong>Actions</strong>",id:"actions",level:4},{value:"<strong>Workflows</strong>",id:"workflows",level:4},{value:"<strong>Invoke actions and workflows in the environment</strong>",id:"invoke-actions-and-workflows-in-the-environment",level:4}],s={toc:u},p="wrapper";function d(t){let{components:e,...l}=t;return(0,r.kt)(p,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"resource--and-workflows"},"Resource  and Workflows"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"actions"},(0,r.kt)("strong",{parentName:"h4"},"Actions")),(0,r.kt)("p",null,"Stopping cloud resources when they are not in use is a prudent practice that offers several benefits. First and foremost, it helps to optimize costs by preventing unnecessary expenditure on computing resources. Cloud services are typically billed on a pay-as-you-go model, so keeping instances running when they are idle contributes to higher expenses. Additionally, stopping unused resources promotes environmental sustainability by reducing overall energy consumption and the carbon footprint associated with data centers. From a security standpoint, inactive resources can be potential targets for unauthorized access or attacks, and shutting them down mitigates these risks. Moreover, resource termination enhances overall system performance by freeing up valuable computing resources for other critical tasks. In essence, the proactive management of cloud resources aligns with efficiency, cost-effectiveness, and environmental responsibility in the dynamic landscape of cloud computing."),(0,r.kt)("p",null,"Torque provides a built-in set of ",(0,r.kt)("strong",{parentName:"p"},"actions")," you can run on specific cloud resources in the environment to stop them and gain the aforementioned benefits. The built-in actions currently available out of the box by Torque are:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Power on"),(0,r.kt)("li",{parentName:"ul"},"Power off"),(0,r.kt)("li",{parentName:"ul"},"Restart"),(0,r.kt)("li",{parentName:"ul"},"Connect - a special kind of action which creates an RDP or SSH connection to the VM directly from Torque, allowing environment users to access env vms directly.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Database Servers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stop"),(0,r.kt)("li",{parentName:"ul"},"Start")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kubernetes Clusters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pause"),(0,r.kt)("li",{parentName:"ul"},"Resume")),(0,r.kt)("p",null,"Please see the below table for additional details."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource   Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Action Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Cloud"),(0,r.kt)("th",{parentName:"tr",align:null},"Grain technology"),(0,r.kt)("th",{parentName:"tr",align:null},"Resource type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Limitations"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Virtual Machines"),(0,r.kt)("td",{parentName:"tr",align:null},"Power On VM"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Start an EC2 instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"CloudFormation"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS::EC2::Instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_virtual_machine"),(0,r.kt)("td",{parentName:"tr",align:null},"Start an Azure VM"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Power Off VM"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop an EC2 instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"CloudFormation"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS::EC2::Instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"CloudFormation"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_virtual_machine"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop and Deallocate an Azure VM"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Restart VM"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Restart an EC2 instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Cloudformation"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS::EC2::Instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_virtual_machine"),(0,r.kt)("td",{parentName:"tr",align:null},"Restart an Azure VM"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Connect to a VM"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"a special kind of action which creates an RDP or SSH connection to the VM directly from Torque, allowing environment users to access env vms directly."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloudformation"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS::EC2::Instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_virtual_machine"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databases"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop   RDS instance"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Temporarily stop an RDS instance"),(0,r.kt)("td",{parentName:"tr",align:null},"The RDS will be restarted after   7 days if the action will not be repeated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"CloudFormation"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming Soon"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Start RDS instance"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a stopped RDS instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"CloudFormation"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming Soon"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Delete RDS instance"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"aws_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete an RDS instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Stop Database Server"),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"MySql -   azurerm_mysql_server MySql Flexible - azurerm_mysql_flexible_server MariaDB - azurerm_mariadb_server Postgres flexible - azurerm_postgresql_flexible_server"),(0,r.kt)("td",{parentName:"tr",align:null},"Temporarily stop a DB server"),(0,r.kt)("td",{parentName:"tr",align:null},"The DB server will be restarted   after a period of time (dependent on the engine type) if the action will not   be repeated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Start Database Server"),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"MySql -   azurerm_mysql_server MySql Flexible - azurerm_mysql_flexible_server MariaDB - azurerm_mariadb_server Postgres flexible - azurerm_postgresql_flexible_server"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a stopped DB server"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Delete database"),(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_mysql_database azurerm_mariadb_database azurerm_postgresql_database azurerm_mssql_database azurerm_mysql_flexible_database azurerm_postgresql_flexible_server_database"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes Clusters"),(0,r.kt)("td",{parentName:"tr",align:null},"Pause"),(0,r.kt)("td",{parentName:"tr",align:null},"Azure (AKS)"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_kubernetes_cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Reduce the number of agents   (VMs) in all node pools in the cluster to 1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AWS   (EKS)"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming Soon"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Resume"),(0,r.kt)("td",{parentName:"tr",align:null},"Azure (AKS)"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"azurerm_kubernetes_cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Increase the number of agents   (VMs) in all node pools in the cluster to the original number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AWS   (EKS)"),(0,r.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,r.kt)("td",{parentName:"tr",align:null},"Coming Soon"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debugging Actions")," "),(0,r.kt)("p",null,"If you need verbose output from the actions in order to debug them, you can add a parameter like so:\nSYSTEM_ACTIONS_VERBOSE_MODE=true (or false) in the account level."),(0,r.kt)("h4",{id:"workflows"},(0,r.kt)("strong",{parentName:"h4"},"Workflows")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Workflows")," take actions another step forward. They are scheduled automations that run on all resources from the same type in the environment.\nExamples of workflows include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Power-off all VMs in the environment every day at 6PM"),(0,r.kt)("li",{parentName:"ul"},"Pause (scale to minimum) the dev K8s cluster every weekend")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To learn how to create workflows in your Torque account, click ",(0,r.kt)("a",{parentName:"p",href:"/workflows/workflows-overview"},"here"),"."))),(0,r.kt)("h4",{id:"invoke-actions-and-workflows-in-the-environment"},(0,r.kt)("strong",{parentName:"h4"},"Invoke actions and workflows in the environment")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch to ",(0,r.kt)("strong",{parentName:"p"},"Resources")," view."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:n(9090).Z,width:"1002",height:"500"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click a resource tile."),(0,r.kt)("p",{parentName:"li"},"The resource's ",(0,r.kt)("strong",{parentName:"p"},"actions")," as well as attributes and tags are displayed in the left pane.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hover over the relevant action and click ",(0,r.kt)("strong",{parentName:"p"},"Run"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:n(4854).Z,width:"1693",height:"372"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the action's name to see its progress.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Workflows")," to see which workflows apply to your environment. Note that you can also manually run the workflows ahead of their scheduled run time."))))}d.isMDXComponent=!0},4854:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/resource-actions-233366e8471855c6fccf941f75fdb898.png"},9090:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/resources-view-a6e2ce615f9300df70bf9afa25888f11.png"}}]);