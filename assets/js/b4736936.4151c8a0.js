"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[84],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1372:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:12,title:"Terraform Authentication on EKS"},c=void 0,l={unversionedId:"blueprint-designer-guide/service-accounts-for-aws",id:"blueprint-designer-guide/service-accounts-for-aws",title:"Terraform Authentication on EKS",description:"If you're using an EKS cluster as your execution host, and you want to run Terraform that deploys resources on AWS, you can use a service account to do the authentication and permissions between the pod and the AWS account where the resources will be created. This is done by connecting a service account, which contains these permissions, to the container. The permissions are defined in an IAM role that needs to be associated to the service account.",source:"@site/docs/blueprint-designer-guide/service-accounts-for-aws.md",sourceDirName:"blueprint-designer-guide",slug:"/blueprint-designer-guide/service-accounts-for-aws",permalink:"/blueprint-designer-guide/service-accounts-for-aws",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/service-accounts-for-aws.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Terraform Authentication on EKS"},sidebar:"torqueSidebar",previous:{title:"Service Accounts",permalink:"/blueprint-designer-guide/Service Accounts"},next:{title:"Terraform Authentication on AKS",permalink:"/blueprint-designer-guide/service-accounts-for-azure"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Associate your cluster to the cluster account",id:"associate-your-cluster-to-the-cluster-account",level:2},{value:"Create an IAM role for the service account with the required policy",id:"create-an-iam-role-for-the-service-account-with-the-required-policy",level:2},{value:"Create a service account in the cluster\u2019s namespace",id:"create-a-service-account-in-the-clusters-namespace",level:2},{value:"For additional details, see these AWS docs:",id:"for-additional-details-see-these-aws-docs",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're using an EKS cluster as your execution host, and you want to run Terraform that deploys resources on AWS, you can use a service account to do the authentication and permissions between the pod and the AWS account where the resources will be created. This is done by connecting a service account, which contains these permissions, to the container. The permissions are defined in an IAM role that needs to be associated to the service account."),(0,o.kt)("p",null,"The basic process is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#associate-your-cluster-to-the-aws-account"},"Associate your cluster to the AWS account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-an-iam-role-for-the-service-account-with-the-required-policy"},"Create an IAM role for the service account with the required policy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-service-account-in-the-clusters-namespace"},"Create a service account in the cluster\u2019s namespace"))),(0,o.kt)("p",null,'For brevity, the term "',(0,o.kt)("strong",{parentName:"p"},"cluster account"),'" refers to the account hosting the EKS, and "',(0,o.kt)("strong",{parentName:"p"},"target accounts"),'" is where the rest of the AWS resources are created.'),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html"},"IAM OIDC provider")," on the cluster\u2019s account, to recognize the cluster on the account"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html"},"kubectl")," connected to the cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS CLI")," on your computer")),(0,o.kt)("h2",{id:"associate-your-cluster-to-the-cluster-account"},"Associate your cluster to the cluster account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To associate the cluster to the account"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In AWS CLI, find the cluster\u2019s OIDC provider by running:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'aws eks describe-cluster --name my-cluster --query "cluster.identity.oidc.issuer" --output text\n')),(0,o.kt)("p",{parentName:"li"},"  Where ",(0,o.kt)("strong",{parentName:"p"},"my-cluster")," is the name of the cluster."),(0,o.kt)("p",{parentName:"li"},"  The output looks something like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"https://oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE\n")),(0,o.kt)("p",{parentName:"li"},"  Where ",(0,o.kt)("strong",{parentName:"p"},"EXAMPLED539D4633E53DE1B71EXAMPLE")," is the cluster's OIDC provider"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to perform steps 2 and 3 on every target account in which the cluster will perform actions.   ")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the OIDC provider from the cluster's account exists in the target accounts:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"aws iam list-open-id-connect-providers | grep my-cluster-oidc-provider\n")),(0,o.kt)("p",{parentName:"li"},"The IAM OIDC provider is displayed:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"Arn": "arn:aws:iam::111122223333:oidc-provider/oidc.eks.region-code.amazonaws.com/id/EXAMPLED539D4633E53DE1B71EXAMPLE"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the IAM OIDC provider is nonexistent, do the following to create it:"),(0,o.kt)("p",{parentName:"li"},"a.\tInstall ",(0,o.kt)("strong",{parentName:"p"},"eksctl")," on your computer."),(0,o.kt)("p",{parentName:"li"},"b.\tRun the following to create the IAM OIDC provider and associate it to your cluster:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"eksctl utils associate-iam-oidc-provider --cluster my-cluster \u2013approve\n")),(0,o.kt)("p",{parentName:"li"},"c.\tIn AWS CLI, run the following to get the IAM OIDC provider you created:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"aws iam list-open-id-connect-providers | grep my-cluster-oidc-provider\n")),(0,o.kt)("p",{parentName:"li"},"  You will need this for step 3 in the following procedure."))),(0,o.kt)("h2",{id:"create-an-iam-role-for-the-service-account-with-the-required-policy"},"Create an IAM role for the service account with the required policy"),(0,o.kt)("p",null,"As we explained before, the service account delegates permissions to the container to perform the Terraform actions. The permissions are defined as a policy in an IAM role that is associated to the service account.\nPerform these steps on every target account that will be used by your cluster."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IAM policy with the desired permissions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To create the IAM role for the service account"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your AWS Console, go to ",(0,o.kt)("strong",{parentName:"li"},"IAM > Role"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create role"),", select ",(0,o.kt)("strong",{parentName:"li"},"Web identity"),"."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Identity")," provider dropdown list, select the IAM OIDC that was generated in step 3-c of the above procedure."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Audience")," dropdown list, select ",(0,o.kt)("strong",{parentName:"li"},"sts.amazonaws.com"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"IAM policy")," you wish to associate to the IAM role, and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify a ",(0,o.kt)("strong",{parentName:"li"},"Role name"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll down and click ",(0,o.kt)("strong",{parentName:"li"},"Create role"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the ARN for this role. You will need in the next step.")),(0,o.kt)("h2",{id:"create-a-service-account-in-the-clusters-namespace"},"Create a service account in the cluster\u2019s namespace"),(0,o.kt)("p",null,"Create the service account in the cluster's namespace you plan on using as the sandbox namespace, and associate its IAM role to the IAM role you just created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To create the service account"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Save the following as an ",(0,o.kt)("strong",{parentName:"li"},"SA.yaml")," file. ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  annotations:\n    eks.amazonaws.com/role-arn: <enter your role arn here>\n  name: <service account name>\n  namespace: <sandbox namespace name>  \n"))),(0,o.kt)("li",{parentName:"ol"},"From AWS CLI, run the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl apply -f SA.yaml\n")),"You're done. All that's left to do is specify the service account name in the blueprint YAML. For details, see ",(0,o.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/Service%20Accounts"},"Service Accounts"),".")),(0,o.kt)("h2",{id:"for-additional-details-see-these-aws-docs"},"For additional details, see these AWS docs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an IAM OIDC provider for your cluster (",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html"},"Instructions"),")."),(0,o.kt)("li",{parentName:"ol"},"Create the IAM role to be used by the service account. (",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html"},"Instructions"),")."),(0,o.kt)("li",{parentName:"ol"},"Associate the IAM role to a service account on your cluster (",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/specify-service-account-role.html"},"Instructions\u200b"),").",(0,o.kt)("br",{parentName:"li"}),"If the Terraform resources are to be created in a different AWS account than the one hosting the EKS cluster which is our execution host, you'll need to perform steps (1) and (2) on the target account. See ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html"},"AWS' Technical overview"),".")))}d.isMDXComponent=!0}}]);