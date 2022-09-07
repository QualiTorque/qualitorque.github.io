"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[192],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:9,title:"Connect a Kubernetes Cluster"},c=void 0,l={unversionedId:"getting-started/Connect a Kubernetes Cluster",id:"getting-started/Connect a Kubernetes Cluster",title:"Connect a Kubernetes Cluster",description:"Prerequisites",source:"@site/docs/getting-started/Connect a Kubernetes Cluster.md",sourceDirName:"getting-started",slug:"/getting-started/Connect a Kubernetes Cluster",permalink:"/getting-started/Connect a Kubernetes Cluster",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/getting-started/Connect a Kubernetes Cluster.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Connect a Kubernetes Cluster"},sidebar:"torqueSidebar",previous:{title:"Connect an Execution Host",permalink:"/getting-started/Connect an Execution Host"},next:{title:"Launch Your Blueprint",permalink:"/getting-started/Launch-environment"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kuberentes cluster - can be any cluster, including on your on-premise network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Command-line with ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl installed")," connected to your cluster.\nTo connect to the cluster use : "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl config use-context <your-cluster>\n")),(0,o.kt)("p",{parentName:"li"},"For further reading on connecting to clusters hosted on your cloud, check these links: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"},"EKS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-get-credentials"},"AKS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials"},"GKE"),".\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"One or more target namespaces on the cluster where the Torque agent will create resources.\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Authentication and permissions - The execution host will need sufficient permissions to create the environment's cloud resources. There are a couple of ways to provide the permissions, depending on where the environment resources will be created. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you intend to create K8s resources (Pods, services, secrets... etc.) using K8s manifests or helm charts, create a service account with sufficient permissions to create the K8s resources.\nFor Example:"),(0,o.kt)("p",{parentName:"li"},'Let\'s say that you would like to deploy your environments into a namespace called "my-ns".\nUse the below commands (change to your real namespace name) to create the appropriate service-account:'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl create serviceaccount my-ns-edit-sa --namespace=my-ns\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl create rolebinding my-sa-edit-rb --clusterrole=edit --serviceaccount=my-ns:my-ns-edit-sa --namespace=my-ns\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you intend to create resources on your cloud using Terraform:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if your cluster is an ",(0,o.kt)("strong",{parentName:"li"},"EKS")," (resources will be created on AWS):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(Recommended) Create a designated ",(0,o.kt)("strong",{parentName:"li"},"service account")," annotated with an AWS role. See ",(0,o.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/service-accounts-for-aws"},"Terraform Authentication on EKS")," for details. Or,"),(0,o.kt)("li",{parentName:"ul"},"Ensure that the Cluster service role has sufficient permissions to create the environment."))),(0,o.kt)("li",{parentName:"ul"},"if your cluster is an ",(0,o.kt)("strong",{parentName:"li"},"AKS")," (resources will be created on Azure): Provide the account's authentication credentials when creating the execution host in Torque. For details, see ",(0,o.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/service-accounts-for-azure"},"Terraform Authentication on AKS"),"."),(0,o.kt)("li",{parentName:"ul"},"For other types of clusters, or if you want to connect to your AWS/Azure with your basic credentials, there is no built-in authentication with Torque so there are no pre-requisites related to authentication and permissions. You can store your cloud credentials in the Torque secret store and use them for your TF deployment.")))))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In Torque's ",(0,o.kt)("strong",{parentName:"li"},"Admin Console")," page, open the ",(0,o.kt)("strong",{parentName:"li"},"Cloud Accounts")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Cloud Account")," and complete the wizard with the information you collected before. ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(9805).Z,width:"842",height:"637"})))),(0,o.kt)("li",{parentName:"ol"},"Fill in the information and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),". "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Generate")," and copy the command that is displayed"),(0,o.kt)("li",{parentName:"ol"},"Paste the command in your command-line window to deploy the agent to your cluster. For example:     ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl apply -f https://portal.qtorque.io/api/settings/executionhosts/deployment/k***roi/deployment.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Check Connectivity")," to verify that the agent can sucessfully communicate with Torque. "),(0,o.kt)("li",{parentName:"ol"},"Once verified, click continue to connect the host to a space, and provide the details you obtained in the prerequisites section.")))}d.isMDXComponent=!0},9805:function(e,t,n){t.Z=n.p+"assets/images/add-k8s-wizard-d28fee2f76bad06ff3fe8338c848a880.png"}}]);