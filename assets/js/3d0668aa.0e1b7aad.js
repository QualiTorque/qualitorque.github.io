"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3337],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9478:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:18,title:"FAQ",hide_table_of_contents:!0},i=void 0,l={unversionedId:"overview/FAQ",id:"overview/FAQ",title:"FAQ",description:"Why should I use Torque if I can manage my application deployments directly on the cloud or through my CI/CD tool?",source:"@site/docs/overview/FAQ.md",sourceDirName:"overview",slug:"/overview/FAQ",permalink:"/overview/FAQ",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/overview/FAQ.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"FAQ",hide_table_of_contents:!0},sidebar:"torqueSidebar",previous:{title:"Supported Platforms",permalink:"/overview/supported-platforms"},next:{title:"Getting Started with Terraform",permalink:"/getting-started/Getting starting with terraform"}},s={},u=[{value:"Why should I use Torque if I can manage my application deployments directly on the cloud or through my CI/CD tool?",id:"why-should-i-use-torque-if-i-can-manage-my-application-deployments-directly-on-the-cloud-or-through-my-cicd-tool",level:3},{value:"Where are the applications deployed?",id:"where-are-the-applications-deployed",level:3},{value:"Can I automate the deployment of Torque blueprints through a CI/CD process?",id:"can-i-automate-the-deployment-of-torque-blueprints-through-a-cicd-process",level:3},{value:"How do you protect my access credentials?",id:"how-do-you-protect-my-access-credentials",level:3},{value:"What happens when I no longer need the environment?",id:"what-happens-when-i-no-longer-need-the-environment",level:3},{value:"Can I limit the duration of environments?",id:"can-i-limit-the-duration-of-environments",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"why-should-i-use-torque-if-i-can-manage-my-application-deployments-directly-on-the-cloud-or-through-my-cicd-tool"},"Why should I use Torque if I can manage my application deployments directly on the cloud or through my CI/CD tool?"),(0,r.kt)("p",null,"To answer this question, we'll focus on 3 basic factors: security, collaboration and cost-savings. There are additional factors like governance, policies, and more, but we can save those for later."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Security"),": To develop cloud applications, your developers first access the cloud with your admin credentials. These are highly valuable details that must be protected at all costs, and should not be shared liberally. With Torque, the admin feeds these credentials to Torque and they are safeguarded from your application developers and end-users, who only need to access Torque in order to launch their cloud environments, with Torque handling the authentication behind the scenes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Collaboration"),": Torque allows you to cultivate team projects in spaces, where all the team's members have access to their cloud assets, and can work together on different environments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cost-savings"),": Whenever you work on the cloud, you run the risk of forgetting to clean up the cloud resources when you're done. This is a major spend for all cloud-savvy organizations, which are forced to use business mapping solutions to find and remove those long-forgotten assets. This is not the case with Torque, which completely deletes all of the environment's cloud infrastructure when the environment is no longer needed. In addition, Torque attaches different tags to each and every cloud resource it deploys, providing you with powerful monitoring capabilities and a comprehensive cost dashboard to help you analyze your current and forecasted cloud spend. The cost data is preserved even after the environments have ended and their cloud resources deleted."))),(0,r.kt)("h3",{id:"where-are-the-applications-deployed"},"Where are the applications deployed?"),(0,r.kt)("p",null,"For security and performance reasons, we designed Torque to deploy applications on Kubernetes (EKS on AWS EC2 and AKS on Azure). Support for additional cloud providers is currently in development and will be released soon."),(0,r.kt)("h3",{id:"can-i-automate-the-deployment-of-torque-blueprints-through-a-cicd-process"},"Can I automate the deployment of Torque blueprints through a CI/CD process?"),(0,r.kt)("p",null,"Absolutely, Torque supports integration with some of the leading CI/CD tools out there, including Jenkins, Bamboo, CircleCI, TeamCity, GitHub Actions, and more. Click ",(0,r.kt)("a",{parentName:"p",href:"/overview/supported-platforms#cicd-tooling"},"here")," and follow our documentation to set up your pipelines and start seeing value."),(0,r.kt)("h3",{id:"how-do-you-protect-my-access-credentials"},"How do you protect my access credentials?"),(0,r.kt)("p",null,"It's no secret that working with the cloud requires the use of very powerful admin credentials, which can cause some serious damage if they fall in the wrong hands. In Torque, your admin credentials are safely tucked away in the system, within what we call Torque agents, which allow Torque to access and use the Kubernetes cluster on the cloud. The blueprints reference the agents but otherwise cannot access the credentials. Same goes for the end-user and CI/CD tool, the end-users who launch the environments don't have access to the to the actual Azure keys from the token."),(0,r.kt)("h3",{id:"what-happens-when-i-no-longer-need-the-environment"},"What happens when I no longer need the environment?"),(0,r.kt)("p",null,"Torque environments have a duration period, which automatically ends the environment, deleting all the environment's cloud artifacts from the cluster. In addition, Torque allows you to manually end the environment at any time directly from the Torque application. The bottom line is that nothing from the environment is left on the cloud."),(0,r.kt)("h3",{id:"can-i-limit-the-duration-of-environments"},"Can I limit the duration of environments?"),(0,r.kt)("p",null,"Of course. The blueprint designer reserves the right to set a duration policy, per blueprint, which sets the maximum duration for that particular blueprint. So you can limit the blueprint to a certain time frame, which is especially useful for high-cost blueprints, or let it run indefinitely for environments that need to be online at all times."))}h.isMDXComponent=!0}}]);