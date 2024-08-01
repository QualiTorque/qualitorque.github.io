"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[6815],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(o),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return o?n.createElement(h,i(i({ref:t},m),{},{components:o})):n.createElement(h,i({ref:t},m))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8392:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:5,title:"CodeCommit Source Control"},i=void 0,l={unversionedId:"admin-guide/source-control/source-control-codecommit",id:"admin-guide/source-control/source-control-codecommit",title:"CodeCommit Source Control",description:"Torque supports connecting assets, blueprints and policies repositories on CodeCommit out of the box. To connect a repository, you need to grant Torque access to your repository of interest. Torque will access the repo (read only) both from the Torque SAAS application on AWS as well as from the runners on your cluster.",source:"@site/docs/admin-guide/source-control/source-control-codecommit.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-control-codecommit",permalink:"/admin-guide/source-control/source-control-codecommit",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-control-codecommit.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"CodeCommit Source Control"},sidebar:"torqueSidebar",previous:{title:"BitBucket Source Control",permalink:"/admin-guide/source-control/source-control-bitbucket"},next:{title:"Self-Managed Quali CloudShell",permalink:"/admin-guide/source-control/source-managed-cloudshell"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting a CodeCommit Repository to Torque",id:"connecting-a-codecommit-repository-to-torque",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Torque supports connecting assets, blueprints and policies repositories on CodeCommit out of the box. To connect a repository, you need to grant Torque access to your repository of interest. Torque will access the repo (read only) both from the Torque SAAS application on AWS as well as from the runners on your cluster. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a role for Torque to use which has permissions to connect to CodeCommit. To do that, follow the instructions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Sign in to the AWS Management Console and open the IAM console at ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/"),"."),(0,r.kt)("li",{parentName:"ol"},'In the IAM console, in the navigation pane, choose "Roles", and then choose "Create Role".'),(0,r.kt)("li",{parentName:"ol"},'In Select trusted entities, choose "AWS account", and select "Another AWS account".'),(0,r.kt)("li",{parentName:"ol"},"In the account ID text box, type 349148204654. Check the Require external id checkbox and enter and ID of your choice.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Take note of the external ID string")),".\ud83d\udcdd"))),(0,r.kt)("li",{parentName:"ol"},"In Add permissions, search for AWSCodeCommitReadOnly and select it."),(0,r.kt)("li",{parentName:"ol"},"Name your role and optionally create a description."),(0,r.kt)("li",{parentName:"ol"},'Click on "Create Role" and complete the process.'),(0,r.kt)("li",{parentName:"ol"},"Search for your new role, ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\ud83d\udcdd",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"take note of its ARN")),".\ud83d\udcdd"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an IAM user with the same policy:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Sign in to the AWS Management Console and open the IAM console at ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/"),"."),(0,r.kt)("li",{parentName:"ol"},"In the IAM console, in the navigation pane, choose Users, and then choose Create User."),(0,r.kt)("li",{parentName:"ol"},"On the Permissions tab, choose Add Permissions."),(0,r.kt)("li",{parentName:"ol"},"In Grant permissions, choose Attach existing policies directly."),(0,r.kt)("li",{parentName:"ol"},"From the list of policies, select AWSCodeCommitReadOnly"),(0,r.kt)("li",{parentName:"ol"},"Choose Next: Review and complete the process. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create Git Credentials:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Follow the steps in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html#setting-up-gc-iam"},"AWS article"),", Step 3 only."),(0,r.kt)("li",{parentName:"ol"},"\ud83d\udcdd",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Take note of the the user name and password")),".\ud83d\udcdd"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize your CodeCommit Repository"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"CodeCommit does not have default files or a default branch until a file is committed, blocking Torque from adding this repo",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(2342).Z,width:"1843",height:"452"}),"\n",(0,r.kt)("img",{alt:"Locale Dropdown",src:o(8039).Z,width:"1868",height:"490"})))),(0,r.kt)("li",{parentName:"ol"},'We recommend making a "blueprints" folder at the root of the repo with a single dummy yaml file. Please note the file extensions in the image below.',(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(5970).Z,width:"1853",height:"731"})))),(0,r.kt)("li",{parentName:"ol"},"Now we will verify the file is there and that the main branch has created. ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(7624).Z,width:"1881",height:"414"}),"\n",(0,r.kt)("img",{alt:"Locale Dropdown",src:o(5403).Z,width:"1872",height:"411"})))),(0,r.kt)("li",{parentName:"ol"},"Finally we can now onboard the repo into Torque!")))),(0,r.kt)("h2",{id:"connecting-a-codecommit-repository-to-torque"},"Connecting a CodeCommit Repository to Torque"),(0,r.kt)("p",null,'In your space, navigate to "Repositories" and click on "Add Repositories".\nChoose the CodeCommit icon and fill in the requested details from the pre-requisites. For region, use the region where the CodeCommit hosting this repo is.'))}u.isMDXComponent=!0},5970:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/code-commit-make-commit-0e3beba40929edf4a53f58852602727a.png"},2342:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/code-commit-uninit-branch-30c16699448dc118545a1f5ce65cbfda.png"},8039:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/code-commit-uninit-code-41f3ffb39d3fa4983d29b596f6e0d552.png"},5403:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/code-commit-verify-branch-d1491290fdf0befdab902635c41c475e.png"},7624:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/code-commit-verify-code-eb174eaed671ab3b8eadf4e170f6ea0c.png"}}]);