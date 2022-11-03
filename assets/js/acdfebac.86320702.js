"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[637],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:8,title:"Terraform AKS Authentication"},l=void 0,s={unversionedId:"authentication/service-accounts-for-azure",id:"authentication/service-accounts-for-azure",title:"Terraform AKS Authentication",description:"If you're using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on Azure, you can use a  pod managed identity to do the authentication and permissions between the pod and the Azure account where the resources will be created.",source:"@site/docs/authentication/service-accounts-for-azure.md",sourceDirName:"authentication",slug:"/authentication/service-accounts-for-azure",permalink:"/authentication/service-accounts-for-azure",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/authentication/service-accounts-for-azure.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Terraform AKS Authentication"},sidebar:"torqueSidebar",previous:{title:"Terraform EKS Authentication",permalink:"/authentication/service-accounts-for-aws"},next:{title:"Terraform GKE Authentication",permalink:"/authentication/service-accounts-for-gcp"}},u={},c=[{value:"Configure the pod managed identity",id:"configure-the-pod-managed-identity",level:2},{value:"Configure Torque&#39;s Terraform authentication on AKS",id:"configure-torques-terraform-authentication-on-aks",level:2}],d={toc:c};function m(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on Azure, you can use a  pod managed identity to do the authentication and permissions between the pod and the Azure account where the resources will be created."),(0,i.kt)("p",null,"The basic process is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-pod-managed-identity"},"Configure the pod managed identity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configure-torques-terraform-authentication-on-aks"},"Configure Torque's Terraform authentication on AKS"))),(0,i.kt)("h2",{id:"configure-the-pod-managed-identity"},"Configure the pod managed identity"),(0,i.kt)("p",null,"In this procedure, you will attach a Torque Terraform runner pod to a managed identity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure CLI installed locally or use Azure CLI in Azure portal")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To configure the pod managed identity"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Uprade Azure cli:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az upgrade\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Register the EnablePodIdentityPreview feature: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az feature register --name EnablePodIdentityPreview --namespace Microsoft.ContainerService\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the aks-preview Azure CLI:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az extension add --name aks-preview\naz extension update --name aks-preview\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add Azure Container Networking Interface (CNI) to AKS."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you don\u2019t have AKS, create one with azure CNI:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az group create --name myResourceGroup --location eastus\naz aks create -g myResourceGroup -n myAKSCluster --enable-pod-identity --network-plugin azure\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have an existing AKS, update it with Azure CNI:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az aks update -g $MY_RESOURCE_GROUP -n $MY_CLUSTER --enable-pod-identity\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create identity:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'az group create --name myIdentityResourceGroup --location eastus\nexport IDENTITY_RESOURCE_GROUP="myIdentityResourceGroup"\nexport IDENTITY_NAME="application-identity"\naz identity create --resource-group ${IDENTITY_RESOURCE_GROUP} --name ${IDENTITY_NAME}\nexport IDENTITY_CLIENT_ID="$(az identity show -g ${IDENTITY_RESOURCE_GROUP} -n ${IDENTITY_NAME} --query clientId -otsv)"\nexport IDENTITY_RESOURCE_ID="$(az identity show -g ${IDENTITY_RESOURCE_GROUP} -n ${IDENTITY_NAME} --query id -otsv)"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add contributor permissions to the managed identity at the subscription level using azure portal (or the required permissions for TF to deploy the resources in azure):"),(0,i.kt)("p",{parentName:"li"},"a. Go to the ",(0,i.kt)("strong",{parentName:"p"},"Subscriptions")," page (type in the search box \u201csubscriptions\u201d)."),(0,i.kt)("p",{parentName:"li"},"b. Click the appropriate subscription."),(0,i.kt)("p",{parentName:"li"},"c. Select ",(0,i.kt)("strong",{parentName:"p"},"Access Control (IAM)"),"."),(0,i.kt)("p",{parentName:"li"},"d. Click ",(0,i.kt)("strong",{parentName:"p"},"+ Add")," and select ",(0,i.kt)("strong",{parentName:"p"},"Add role assignment"),"."),(0,i.kt)("p",{parentName:"li"},"e. Select ",(0,i.kt)("strong",{parentName:"p"},"Contributor")," and click ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."),(0,i.kt)("p",{parentName:"li"},"f. In the ",(0,i.kt)("strong",{parentName:"p"},"Members")," page, select the ",(0,i.kt)("strong",{parentName:"p"},"User, group or service principle")," option and click the ",(0,i.kt)("strong",{parentName:"p"},"+ Select members")," link."),(0,i.kt)("p",{parentName:"li"},"g. Use the search bar to find and select the managed identity. Then, click ",(0,i.kt)("strong",{parentName:"p"},"Select"),"."),(0,i.kt)("p",{parentName:"li"},"h. Click ",(0,i.kt)("strong",{parentName:"p"},"Create")," to create the role assignment.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a pod identity in the sandbox namespace. If you don\u2019t have one, choose/create a namespace for the sandboxes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'export POD_IDENTITY_NAME="my-pod-identity"\nexport POD_IDENTITY_NAMESPACE="<sandbox_namespace>"\naz aks pod-identity add --resource-group myResourceGroup --cluster-name myAKSCluster --namespace ${POD_IDENTITY_NAMESPACE}  --name ${POD_IDENTITY_NAME} --identity-resource-id ${IDENTITY_RESOURCE_ID}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the pod identity is created, Azure will create an AzureIdentity resource in your cluster. This resource represents the identity in Azure, and an AzureIdentityBinding resource, which connects the AzureIdentity to a selector. You can view these resources with the following commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl get azureidentity -n $POD_IDENTITY_NAMESPACE\nkubectl get azureidentitybinding -n $POD_IDENTITY_NAMESPACE\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the aadpodidbinding pod label, which is needed to support Terraform authentication on AKS: "),(0,i.kt)("p",{parentName:"li"},"To use AAD pod-managed identity, the pod needs an aadpodidbinding label with a value that matches a selector from a AzureIdentityBinding. By default, the selector matches the name of the pod identity, but you can also set it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--binding-selector")," option when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"az aks pod-identity add"),"."))),(0,i.kt)("h2",{id:"configure-torques-terraform-authentication-on-aks"},"Configure Torque's Terraform authentication on AKS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Subscription ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tenant ID (displayed in the ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory > Overview"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Managed identity ID \u2013 ID of the managed identity configured with pod managed identity (click ",(0,i.kt)("strong",{parentName:"p"},"Managed Identities >")," the name of the managed identity ",(0,i.kt)("strong",{parentName:"p"},"> Client ID"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Azure identity binding selector \u2013 The selector value of the AzureIdentityBinding entity. This value will be used as a label for the Terraform runner pod, thus creating the binding between the pod and the managed identity. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"To find the identity binding selector:")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"In Azure CLI, run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get azureidentitybinding -o json -n <azure_identity_namespace>")," (if you don't know the namespace name, omit ",(0,i.kt)("inlineCode",{parentName:"li"},"-n <azure_identity_namespace>"),"). "),(0,i.kt)("li",{parentName:"ol"},'Select the appropriate azureidentitybinding, located under  "spec" -> "azureIdentity" of the azureidentitybinding - look for the one that has your azure identity name. '),(0,i.kt)("li",{parentName:"ol"},"Once you find the appropriate azureidentitybinding, in json output, you will find the Azure identity binding selector value under ",(0,i.kt)("strong",{parentName:"li"},"spec > selector"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(8862).Z,width:"652",height:"523"}))))))),(0,i.kt)("p",null,"There are 2 ways to provide these details:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adding AKS: When adding a new AKS, the Azure user can provide these details under ",(0,i.kt)("strong",{parentName:"p"},"Default credentials"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Blueprint: The Torque user can override the default credentials defined in the AKS, or create one no credentials were supplied."),(0,i.kt)("p",{parentName:"li"}," a. Under ",(0,i.kt)("inlineCode",{parentName:"p"},"env-vars")," of the Terraform grain add the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"ARM_USE_MSI: true\nARM_SUBSCRIPTION_ID: <Subscription_ID>\nARM_TENANT_ID: <Tenant_ID>\nARM_CLIENT_ID: <Client_ID>\n")),(0,i.kt)("p",{parentName:"li"}," b. In the Terraform grain, specify the selector value of the Azure identity binding under ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"  spec:\n    source:\n      ...\n    namespace:\n    host:\n      kubernetes:\n        pod-labels:\n        - aadpodidbinding: <pod-identity-name>\n")),(0,i.kt)("p",{parentName:"li"}," As you can see, we added a new section called \u201ckubernetes\u201d for all Kubernetes configurations, which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-labels"),". Any values provided under ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-labels")," will be used as labels for the Terraform runner pod. See the following blueprint YAML as an example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""}," spec_version: 2\n\n description: Azure RG.\n\n inputs:\n   host_name:\n     type: string\n     display-style: normal\n\n grains:\n   azure_resource_group:\n     kind: terraform\n     spec:\n       source:\n         store: terraform_repo\n         path: terraform/azure-RG\n       host:\n         name: '{{ .inputs.host_name }}'\n         kubernetes:\n           pod-labels:\n           - aadpodidbinding: my-pod-identity\n       env-vars: \n       - ARM_USE_MSI: true\n       - ARM_SUBSCRIPTION_ID: 0d266a1e-f6w3-4ec5-96a1-061539f16j32\n       - ARM_TENANT_ID: a2526a87-7777-4f7c-95gt-4f0f57136553\n       - ARM_CLIENT_ID: 108e6546-da2c-46ab-b00a-4fe987d33657\n       tf-version: 1.2.3\n")))))}m.isMDXComponent=!0},8862:function(e,t,n){t.Z=n.p+"assets/images/managed-identity-43038bea8028fd62d99d5b90d3e6497d.png"}}]);