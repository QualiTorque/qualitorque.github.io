"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:21,title:"The Shell Grain"},s=void 0,o={unversionedId:"blueprint-designer-guide/blueprints/shell-grain",id:"blueprint-designer-guide/blueprints/shell-grain",title:"The Shell Grain",description:'The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment\u2019s launch and/or teardown. It\u2019s useful if you need to prepare or clean up your environment\u2019s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain\u2019s asset, or perhaps back up/clone a DB before environment deployment.',source:"@site/docs/blueprint-designer-guide/blueprints/shell-grain.md",sourceDirName:"blueprint-designer-guide/blueprints",slug:"/blueprint-designer-guide/blueprints/shell-grain",permalink:"/blueprint-designer-guide/blueprints/shell-grain",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprints/shell-grain.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"The Shell Grain"},sidebar:"torqueSidebar",previous:{title:"The Kubernetes Grain\u200b",permalink:"/blueprint-designer-guide/blueprints/kubernetes-grain"},next:{title:"The Ansible Grain",permalink:"/blueprint-designer-guide/blueprints/ansible-grain"}},p={},l=[{value:"agent",id:"agent",level:3},{value:"Tools and Technologies",id:"tools-and-technologies",level:3},{value:"inputs",id:"inputs",level:3},{value:"outputs",id:"outputs",level:3},{value:"commands",id:"commands",level:3}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment\u2019s launch and/or teardown. It\u2019s useful if you need to prepare or clean up your environment\u2019s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain\u2019s asset, or perhaps back up/clone a DB before environment deployment.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Complete example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: Run a simple shell grain with inputs and outputs\n\ninputs:\n  script_input1:\n    type: string\n    default: 'input1'\n  agent:\n    type: agent\n\noutputs:\n  output_script_1:\n    value: '{{ .grains.run_shell_grain.activities.deploy.commands.my_script.outputs.output_script_1 }}'\n  output_script_2:\n    value: '{{ .grains.run_shell_grain.activities.deploy.commands.my_script.outputs.output_script_2 }}'  \n\ngrains:\n  run_shell_grain:\n    kind: shell\n    spec:\n      agent:\n        name: '{{ .inputs.agent }}'\n      files:\n        - source: my_scripts_repo\n          path: scripts/script.sh\n      activities:\n        deploy:\n          commands:\n            - name: my_script\n              command:  'source script.sh {{ .inputs.script_input1 }}'\n              outputs:\n                - output_script_1\n                - output_script_2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"script.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'input_1=$1\necho "input_1=$input_1"\n\n# run some cmds..\ncmd1_output=$(jq --arg ResourceId "..." \'.resources[] | .attributes | .instance_state\' $input_1)\ncmd2_output=$(jq --arg ResourceId "..." \'.resources[] | .attributes | .instance_state\' $input_1)\n\n# capture the outputs \nexport output_script_1=$cmd1_output\nexport output_script_2=$cmd2_output\n')),(0,r.kt)("h3",{id:"agent"},"agent"),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent"},"the grain agent")," for more details."),(0,r.kt)("h3",{id:"tools-and-technologies"},"Tools and Technologies"),(0,r.kt)("p",null,"The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dotnet"),(0,r.kt)("li",{parentName:"ul"},"python3"),(0,r.kt)("li",{parentName:"ul"},"pip"),(0,r.kt)("li",{parentName:"ul"},"curl"),(0,r.kt)("li",{parentName:"ul"},"wget"),(0,r.kt)("li",{parentName:"ul"},"jq"),(0,r.kt)("li",{parentName:"ul"},"git"),(0,r.kt)("li",{parentName:"ul"},"zip"),(0,r.kt)("li",{parentName:"ul"},"unzip"),(0,r.kt)("li",{parentName:"ul"},"kubectl"),(0,r.kt)("li",{parentName:"ul"},"awscli")),(0,r.kt)("h3",{id:"inputs"},"inputs"),(0,r.kt)("p",null,"Inputs provided to the shell grain are used when launching the shell. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("strong",{parentName:"h5"},"note"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unlike other grains, in the shell grain, inputs are used inside the ",(0,r.kt)("strong",{parentName:"p"},"commands")," section, wrapped in double curly brackets - ",(0,r.kt)("inlineCode",{parentName:"p"},'"{{ .inputs.repoUrl }}"'),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'grains:\n  validate:\n    kind: shell\n    spec:\n      agent:\n        name: \'{{ .inputs.agent }}\'\n      activities:\n        deploy:\n          commands:\n            - "apt-get -y install git unzip curl"\n            - "git clone {{ .inputs.repoUrl }}"\n')),(0,r.kt)("h3",{id:"outputs"},"outputs"),(0,r.kt)("p",null,"The shell grain output can be captured during the shell execution by exporting named env_var and than be used as the blueprint output or as input for another grain. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outputs:\n  output_script:\n    value: '{{ .grains.run_shell_grain.activities.deploy.commands.my_script.outputs.output_script }}'\n\ngrains:\n  run_shell_grain:\n    kind: shell\n    spec:\n      agent:\n        name: '{{ .inputs.agent }}'\n      files:\n        - source: my_scripts_repo\n          path: scripts/script.sh\n          branch: my-branch # optional\n          commit: d39c5737f2fa999c20f12d09c5b46a4f67f47b98 # optional\n      activities:\n        deploy:\n          commands:\n            - name: my_script\n              command:  'source script.sh'\n              outputs:\n                - output_script\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"script.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# run some cmds..\ncmd_output=$(...)\n\n# capture the outputs \nexport output_script=$cmd_output\n")),(0,r.kt)("h3",{id:"commands"},"commands"),(0,r.kt)("p",null,"The commands section allows to execute bash/python3 code or files stored in one of the space's repositories as part of the launch and/or end of the environment. The Shell grain has two command types - ",(0,r.kt)("strong",{parentName:"p"},"deploy")," for running code at the launch of the environment, and ",(0,r.kt)("strong",{parentName:"p"},"destroy")," for running code as part of the environment\u2019s teardown. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'grains:\n  validate:\n    kind: shell\n    spec:\n      agent:\n        name: kubernetes-testing1\n      activities:\n        deploy:\n          commands:\n            - "apt-get -y install git unzip curl"\n            - "git clone {{ .inputs.repoUrl }}"\n            - "curl https://get.datree.io | /bin/bash"\n            - "datree test {{.inputs.repoName}}/{{.inputs.filePath}}"\n        destroy:\n          commands:\n            - "https://gist.githubusercontent.com/.../check.py"\n            - "python3 check.py"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Warning"),"\nEach command new line from the above example is segregated in its own shell, so running these commands:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'     activities:\n       deploy:\n         commands:\n           - "cd /home"\n           - "cat file.txt"\n'))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Is not as running it like:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'     activities:\n       deploy:\n         commands:\n           - "cd /home; cat file.txt"\n')),(0,r.kt)("p",{parentName:"blockquote"},"Another option would be to have a script file and call it directly only on one line. ")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("strong",{parentName:"h5"},"note"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note"),": only the ",(0,r.kt)("strong",{parentName:"p"},"last command or script")," provided is evaluated for a successful exit code, all previous commands or scripts will still be ran regardless of failures."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("strong",{parentName:"h5"},"note"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can specify the code to be run as free text bash/python3 commands or by referencing a file (any file type can be run, not just bash or python3). "),(0,r.kt)("p",{parentName:"div"},"To run a file, specify the file and its repo in the ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," section and the file name and extension under ",(0,r.kt)("inlineCode",{parentName:"p"},"commands"),'. For example, file "post-install-script.sh":'),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=",title:""},'grains:\n  validate:\n    kind: shell\n    spec:\n      agent:\n        name: ...\n      files:\n        - path: "scripts/post-install-script.sh"\n          source: my-repo\n      activities:\n        deploy:\n          commands:\n            - "apt-get -y install git unzip curl"\n            - "git clone {{ .inputs.repoUrl }}"\n            - "curl https://get.datree.io | /bin/bash"\n            - "./post-install-script.sh"\n            - name: generate_report\n              command: "datree test {{.inputs.repoName}}/{{.inputs.filePath}}"\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",3:!0,className:"language-yaml",metastring:'title="Python 3 example:"',title:'"Python','example:"':!0},'commands\n  - "apt-get -y install wget"\n  - "wget https://.../check.py"\n  - "python3 check.py"\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Bash example:"',title:'"Bash','example:"':!0},'commands\n  - "apt-get -y install wget"\n  - "wget https://.../simple.sh"\n  - "/bin/bash simple.sh"\n')))))}m.isMDXComponent=!0}}]);