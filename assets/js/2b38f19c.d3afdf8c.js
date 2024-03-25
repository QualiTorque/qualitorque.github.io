"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[8731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:16,title:"Workflows"},l=void 0,i={unversionedId:"governance/workflows",id:"governance/workflows",title:"Workflows",description:"Torque role: Account admin",source:"@site/docs/governance/workflows.md",sourceDirName:"governance",slug:"/governance/workflows",permalink:"/governance/workflows",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/governance/workflows.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"Workflows"},sidebar:"torqueSidebar",previous:{title:"Policies",permalink:"/governance/policies"},next:{title:"Appearance, Rebranding and Announcements",permalink:"/admin-guide/appearance"}},s={},p=[{value:"How to add a workflow",id:"how-to-add-a-workflow",level:2},{value:"Workflow Yaml Syntax",id:"workflow-yaml-syntax",level:2},{value:"Job Context",id:"job-context",level:2},{value:"Step Context",id:"step-context",level:2},{value:"Examples",id:"examples",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque role: Account admin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Workflows")," allow you to schedule actions on all resources of a certain cloud provider (AWS or Azure) in the relevant environment. For example, to power off all VMs daily at the end of the work day. Each workflow is triggered at its scheduled time and can also be executed manually by the end-user from the ",(0,a.kt)("strong",{parentName:"p"},"Workflows")," tab of the environment's resource."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Workflows are supported only for VMs, Database servers and K8s clusters."))),(0,a.kt)("h2",{id:"how-to-add-a-workflow"},"How to add a workflow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Workflows"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Workflow"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Name"),": Workflow name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Display name"),': Provide an informative one as this will be the Workflow\'s display name in the environment. For example, "Power off all Azure VMs EOD". ')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Action")," to be performed in the environment. Workflows support all resource actions (",(0,a.kt)("strong",{parentName:"p"},"Power on"),", ",(0,a.kt)("strong",{parentName:"p"},"Power off"),", ",(0,a.kt)("strong",{parentName:"p"},"Restart"),", ",(0,a.kt)("strong",{parentName:"p"},"Connect"),") as well as ",(0,a.kt)("strong",{parentName:"p"},"Terminate"),", which ends the environment. For details about resource actions, see ","[Run Day 2 Actions on Your Environment]","(/environment-services/Actions and workflows).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Spaces"),": Toggle blue to apply the workflow to all spaces or select specific ones.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Schedule"),": Workflow's scheduled execution time. You can specify the time and day(s) using the editor, or toggle ",(0,a.kt)("strong",{parentName:"p"},"Custom CRON")," to specify the schedule in CRON format.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Allow overriding schedule on launch"),": Toggle blue to enable the environment's end-user to manually run the workflow from the resource's ",(0,a.kt)("strong",{parentName:"p"},"Workflows")," tab."),(0,a.kt)("p",{parentName:"li"}," For example:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(3922).Z,width:"605",height:"937"})))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,'Once you click "Save" a yaml file describing the workflow is automatically created. You can edit and customize this file according to your specific needs by clicking ',(0,a.kt)("strong",{parentName:"p"},"Edit Yaml"),"."),(0,a.kt)("h2",{id:"workflow-yaml-syntax"},"Workflow Yaml Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=workflow.yml",title:"workflow.yml"},'on:  // Optional. If this section is not present, the workflow will be run manually only and not automatically on schedule.\n  overridable: true // set to true to allow the person launching environments to override the schedule during launch time. Defaults to false. \n  scheduler:\n  - * * * * * // CRON expression, when to trigger the workflow. Multiple expressions are supported.\ninputs:  // Optional\n  input_name:\n    default: "default value"\n    overridable: true // set to true to allow end users to override the value of the input during launch time.\njobs:   // only a single job is currently supported\n  job_title:\n    name: job_name\n    if: "liquid expression"\n    steps:                  // Multiple steps are supported. They will be executed sequentially. \n    - name: step_name\n      uses: action_name\n      if: "liquid expression"\n')),(0,a.kt)("p",null,"You can write the liquid expression using ",(0,a.kt)("strong",{parentName:"p"},"context")," which is provided automatically by Torque."),(0,a.kt)("p",null,"There are 2 types of contexts: one for the job, and one for the step."),(0,a.kt)("h2",{id:"job-context"},"Job Context"),(0,a.kt)("p",null,"The job context contains the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"BlueprintName"),(0,a.kt)("li",{parentName:"ol"},"Inputs (the inputs which the environment was launched with)"),(0,a.kt)("li",{parentName:"ol"},"Duration (Duration of the environment)"),(0,a.kt)("li",{parentName:"ol"},"LastAccessTime (The time when this environment was launched last)"),(0,a.kt)("li",{parentName:"ol"},"BlueprintAvgHourlyCost (Blueprint hourly cost)")),(0,a.kt)("h2",{id:"step-context"},"Step Context"),(0,a.kt)("p",null,"The step context contains a list of all the resources in the environment.\nFor each resource the context contains:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"name (Resource name)"),(0,a.kt)("li",{parentName:"ol"},"type (Resource type)"),(0,a.kt)("li",{parentName:"ol"},"identifier (Resource identifier)"),(0,a.kt)("li",{parentName:"ol"},"attributes (A list of the resource attributes)")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=job-condition-example",title:"job-condition-example"},"on:\n  scheduler:\n  - 0 9 * * *  // automatically trigger this workflow every day at 9AM\ninputs:\n  inactive_hours:\n    default: 24     // we define an environment is inactive if it wasn't used in the last 24 hours\njobs:\n  power-on-except-inactive:\n    name: power on every day except inactive environments \n    if: >-\n      {% capture last_accessed_sec %}{{ context.env.LastAccessTime | date: '%s' | minus: 0 }}{% endcapture -%}  // calculate the last time this env was accessed from job context\n      {% capture inactive_sec %}{{ inputs.inactive_hours | times: 3600 }}{% endcapture -%} // calculate what is defined as inactivity period from the workflow inputs\n      {% assign now = 'now' | date: '%s' | times: 1 -%}\n      {% assign result = now | minus: last_accessed_sec -%}\n      {% if result > inactive_sec -%}\n          false\n      {% else -%}\n          true\n      {% endif -%}\n    steps:    \n    - name: power-on-vm\n      uses: power-on-vm\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=step-condition-example",title:"step-condition-example"},'...\njobs:\n  power-off-steps:\n    name: Power Off Except NetApp\n    steps:\n     - name: power-off-vm\n       uses: power-off-vm\n      if: "{% if context.resource.attributes.name == \\"netapp\\" -%}\\n  true \\n{% else -%}\\n  false\\n{% endif -%}"\n')))}m.isMDXComponent=!0},3922:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow-1-134e6a512c1894caecced859e28db408.png"}}]);