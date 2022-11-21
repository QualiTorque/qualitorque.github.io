"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[4495],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},835:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:2,title:"Roles and Permissions"},s=void 0,d={unversionedId:"admin-guide/roles-and-permissions",id:"admin-guide/roles-and-permissions",title:"Roles and Permissions",description:"Now that you understand how Torque works, it's time to understand how roles and permissions work, and invite other members of your team to your Torque account and spaces.",source:"@site/docs/admin-guide/roles-and-permissions.md",sourceDirName:"admin-guide",slug:"/admin-guide/roles-and-permissions",permalink:"/admin-guide/roles-and-permissions",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/roles-and-permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Roles and Permissions"},sidebar:"torqueSidebar",previous:{title:"REST API",permalink:"/rest-api/"},next:{title:"Cost",permalink:"/admin-guide/cost"}},p={},u=[{value:"Roles in Torque",id:"roles-in-torque",level:2},{value:"Invite Users to Torque",id:"invite-users-to-torque",level:2},{value:"Add Existing Users to Your Space",id:"add-existing-users-to-your-space",level:2}],m={toc:u};function c(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Now that you understand how Torque works, it's time to understand how roles and permissions work, and invite other members of your team to your Torque account and spaces. "),(0,l.kt)("p",null,"In this article:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#roles-in-torque"},"Roles in Torque")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#invite-users-to-torque"},"Invite Users to Torque")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#add-existing-users-to-your-space"},"Add Existing Users to Your Space"))),(0,l.kt)("h2",{id:"roles-in-torque"},"Roles in Torque"),(0,l.kt)("p",null,"As Account Admin, you can invite users to your Torque account and add them to spaces, while Space Admins can only add existing Torque users to the spaces they administer. "),(0,l.kt)("p",null,"There are two account-level roles: Account Admins and Account Members. Account Admins have full administrative permissions across the entire account and all spaces. Account Members also have a space role assigned to them for each space, which determines their permissions in that space. As such, the same user can have different roles in different spaces."),(0,l.kt)("p",null,"As such, there are 4 roles in Torque:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Account Admin")," has full permissions in all Torque spacesspaces, and can access the Adminstration area, which is not accessible to space admins. The account admin is responsible for setting up Torque for the first time, general supervision and ongoing maintenance. This includes account-level responsibilities, like inviting users to the Torque account, creating spaces, and adding cloud account and Kubernetes compute services, general supervision and ongoing maintenance, and must be able to operate as a space administrator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Space Admin")," has admin access to specific space(s). This user performs space-level administration, like managing the space's users and their roles, linking the bluperint repository, managing the space policies and tags, and viewing cost data. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Space Developer")," tracks the space's usage and cost. As such, this user also manages the tags that are attached to each cloud resource luanched as part of the space's environmnents."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Space Member")," is the end-user of the environment. This user browses the blueprint catalog and launches the environment they need. Typical examples of a space member include a developer who is tasked with creating the blueprint, and a QA specialist who needs to run validation tests before pushing the updates to production.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Permission"),(0,l.kt)("th",{parentName:"tr",align:null},"Account admin"),(0,l.kt)("th",{parentName:"tr",align:null},"Space admin"),(0,l.kt)("th",{parentName:"tr",align:null},"Space developer"),(0,l.kt)("th",{parentName:"tr",align:null},"Space member"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add / Remove Cloud Accounts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create Spaces"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Integrate IDP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create Roles"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Full access to all spaces"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invite new account admins"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage account tags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch sandboxes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Publish blueprints"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage production environments"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Setup blueprint repositories"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage space users & roles"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get information on Cloud Account"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View cost data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage space tags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage space policies"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage blueprint tags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"Locale Dropdown",src:n(3982).Z,width:"8",height:"9"})),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"invite-users-to-torque"},"Invite Users to Torque"),(0,l.kt)("p",null,"Torque role: Account admin"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"Administration")," page."),(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Users"),"."),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Invite User")," button."),(0,l.kt)("li",{parentName:"ol"},"Enter a user's email address and press the ",(0,l.kt)("strong",{parentName:"li"},"[ENTER]")," key. Repeat to add additional users."),(0,l.kt)("li",{parentName:"ol"},"Select the space settings to apply to the users. For details about each role's permissions, see the ",(0,l.kt)("strong",{parentName:"li"},"Roles")," tab in the ",(0,l.kt)("strong",{parentName:"li"},"Administration")," page."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Invitation"),'.\nThe users will get a "Welcome to Torque" invitation email, prompting them to login to the space. Once they log in, they will be granted the space role and permissions you specified.')),(0,l.kt)("h2",{id:"add-existing-users-to-your-space"},"Add Existing Users to Your Space"),(0,l.kt)("p",null,"Torque role: Account admin, space admin"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the suitable Torque space, select ",(0,l.kt)("strong",{parentName:"li"},"Settings")," from the left menu."),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Users")," tab."),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"Add Users")," button."),(0,l.kt)("li",{parentName:"ol"},"Select the Torque user you wish to add to this space. Repeat to add additional users."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Done"),".\nBy default, new users are assigned the ",(0,l.kt)("strong",{parentName:"li"},"Space Member")," role. "),(0,l.kt)("li",{parentName:"ol"},"Change the roles as needed.")))}c.isMDXComponent=!0},3982:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAIAAACAMfp5AAAAXElEQVR42mP8////hc8Pu+9v2ffuGgMDg5OQVqmijwGvPOP5Tw88z3b9+PebAQY4mFi3G5cxRl2csu3NRQZU4CWizyixPwtZOVwTo8DeVAZsALcOnHbgdBUufwAA10Y8eGQSu9cAAAAASUVORK5CYII="}}]);