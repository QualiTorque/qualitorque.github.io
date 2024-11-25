"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,title:"Resources Inventory"},i=void 0,s={unversionedId:"getting-started/Resources Inventory",id:"getting-started/Resources Inventory",title:"Resources Inventory",description:"Introduction",source:"@site/docs/getting-started/Resources Inventory.md",sourceDirName:"getting-started",slug:"/getting-started/Resources Inventory",permalink:"/getting-started/Resources Inventory",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/getting-started/Resources Inventory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Resources Inventory"},sidebar:"torqueSidebar",previous:{title:"Contacting Quali Support",permalink:"/overview/contacting-support"},next:{title:"Provision Terraform",permalink:"/getting-started/Getting starting with terraform"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Adding a Cloud Account",id:"adding-a-cloud-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Minimal Permissions Required",id:"minimal-permissions-required",level:3},{value:"Adding Your Azure Account",id:"adding-your-azure-account",level:3},{value:"Cloud Resources Inventory",id:"cloud-resources-inventory",level:2},{value:"Resource Details View",id:"resource-details-view",level:3},{value:"Curating Resources and Downloading Artifacts",id:"curating-resources-and-downloading-artifacts",level:2},{value:"Steps to Curate Resources",id:"steps-to-curate-resources",level:3},{value:"Downloading the Artifacts",id:"downloading-the-artifacts",level:3},{value:"Using the Cart",id:"using-the-cart",level:3},{value:"What Can Be Done with the Downloaded Terraform Files",id:"what-can-be-done-with-the-downloaded-terraform-files",level:3},{value:"Best Practices for Using Torque Resources Inventory",id:"best-practices-for-using-torque-resources-inventory",level:2},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:2},{value:"What Cloud Providers Are Supported?",id:"what-cloud-providers-are-supported",level:3},{value:"What Permissions Are Required for Torque Resources Inventory?",id:"what-permissions-are-required-for-torque-resources-inventory",level:3},{value:"Can I Edit the Generated Terraform Files?",id:"can-i-edit-the-generated-terraform-files",level:3},{value:"How Often Should I Scan My Cloud Account?",id:"how-often-should-i-scan-my-cloud-account",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Unable to Connect to Azure Account",id:"unable-to-connect-to-azure-account",level:3},{value:"Terraform Generation Failed",id:"terraform-generation-failed",level:3},{value:"Support",id:"support",level:2},{value:"Glossary",id:"glossary",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to Torque Resources Inventory, an advanced solution designed to facilitate comprehensive visibility and governance over your cloud infrastructure. Torque Resources Inventory connects to your cloud accounts with read-only permissions, allowing for in-depth discovery, categorization, and curation of cloud resources. Users can filter their resources based on type, location, or Infrastructure as Code (IaC) status, providing fine-grained control over their cloud estate."),(0,o.kt)("p",null,"Torque Resources Inventory classifies resources by their IaC status as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unmanaged"),": Resources that have been created manually and are not governed by IaC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codified"),": Resources that are integrated with and managed by your existing IaC practices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managed"),": Resources that are managed under Quali's governance framework.")),(0,o.kt)("p",null,"Torque Resources Inventory allows users to curate selected resources into a cart, transforming them into Terraform configuration files and state files. These artifacts are readily available for download, enabling seamless integration into Infrastructure as Code workflows."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"resource-inventory",src:r(6605).Z,width:"2204",height:"1216"}))),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("p",null,"Torque Resources Inventory offers a suite of features to help you manage your cloud infrastructure effectively:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud Resource Discovery"),": Automatically discovers and inventories all resources within your Azure subscription, providing a holistic view of your cloud environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Filtering"),": Offers advanced filtering capabilities, allowing resources to be categorized by type, geographical region, and IaC status for efficient management."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IaC Integration"),": Facilitates the generation of Terraform files and state for unmanaged resources, simplifying the transition of manually provisioned resources into IaC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Curate and Export"),": Enables the selection of specific resources to generate Terraform artifacts, which can then be downloaded for future use or integration into existing workflows.")),(0,o.kt)("h2",{id:"adding-a-cloud-account"},"Adding a Cloud Account"),(0,o.kt)("p",null,"To begin using Torque Resources Inventory, you must connect your cloud account. Currently, AWS and Azure clouds are supported. Follow these steps to add your Azure subscription:"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Azure subscription."),(0,o.kt)("li",{parentName:"ul"},"Steps to create and register an application in Azure Active Directory (AD):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Navigate to "App Registrations" in Azure AD and click New Registration. Follow the prompts (you only need to provide the name of the application). Note the Tenant ID and Application ID as these are required later.'),(0,o.kt)("li",{parentName:"ul"},"Go to Certificates & Secrets and create a new client secret. Note the Secret Value for use in the application configuration."),(0,o.kt)("li",{parentName:"ul"},"Assign the Reader role to the application:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigate to Subscriptions and select the appropriate subscription."),(0,o.kt)("li",{parentName:"ul"},"Under Access Control (IAM), click Role assignments and select Add role assignment."),(0,o.kt)("li",{parentName:"ul"},"In the Roles tab, search for the Reader role, and click Next."),(0,o.kt)("li",{parentName:"ul"},"On the Members tab, select User, group, or service principal and search for the registered application."),(0,o.kt)("li",{parentName:"ul"},"Click Select, then Review and Assign to complete the setup.")))))),(0,o.kt)("h3",{id:"minimal-permissions-required"},"Minimal Permissions Required"),(0,o.kt)("p",null,"Torque Resources Inventory requires read-only access to inventory and manage cloud resources. The following permissions are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reader role assigned to the Azure subscription."),(0,o.kt)("li",{parentName:"ul"},"The ability to list resources, read metadata, and access resource details for all resources within the subscription.")),(0,o.kt)("h3",{id:"adding-your-azure-account"},"Adding Your Azure Account"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accout Center"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Under the ",(0,o.kt)("inlineCode",{parentName:"li"},"Curate"),", go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources Inventory")," in the sidebar."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connect a New Cloud Account"),"."),(0,o.kt)("li",{parentName:"ol"},"Select Azure as the cloud provider."),(0,o.kt)("li",{parentName:"ol"},"Provide the necessary details, including ",(0,o.kt)("inlineCode",{parentName:"li"},"Subscription ID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Tenant ID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Application ID"),", and the ",(0,o.kt)("inlineCode",{parentName:"li"},"Application Secret")," with read-only permissions."),(0,o.kt)("li",{parentName:"ol"},"Click Connect."),(0,o.kt)("li",{parentName:"ol"},"Once connected, Torque Resources Inventory will begin scanning and discovering your cloud resources.")),(0,o.kt)("h2",{id:"cloud-resources-inventory"},"Cloud Resources Inventory"),(0,o.kt)("p",null,"Upon connecting your account, Torque Resources Inventory will automatically perform a full scan and inventory all resources in your subscription. The Cloud Resources Inventory page presents a comprehensive view of your resources, which can be filtered by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Type"),": Categories such as virtual machines, databases, and networking components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Location"),": Filter resources by their geographical deployment region."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IaC Status"),": Indicate whether resources are unmanaged, codified, or managed.")),(0,o.kt)("p",null,"Torque Resources Inventory provides insights into which resources are under IaC management and highlights unmanaged resources that may need to be incorporated into governance frameworks."),(0,o.kt)("h3",{id:"resource-details-view"},"Resource Details View"),(0,o.kt)("p",null,"Clicking on a specific resource in the inventory will open a detailed view, which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Metadata"),": Key details such as resource name, type, region, and associated tags."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IaC Status"),": The current management status of the resource, including any associated Terraform configurations.")),(0,o.kt)("h2",{id:"curating-resources-and-downloading-artifacts"},"Curating Resources and Downloading Artifacts"),(0,o.kt)("p",null,"Curate your cloud resources with ease and transform them into Terraform configuration files and state files. This helps to standardize your infrastructure management through Infrastructure as Code. Here is how you can proceed:"),(0,o.kt)("h3",{id:"steps-to-curate-resources"},"Steps to Curate Resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Cloud Resources Inventory page."),(0,o.kt)("li",{parentName:"ol"},"Use the filters to locate the resources you wish to curate."),(0,o.kt)("li",{parentName:"ol"},"Select the resources to curate by clicking on them. There are two methods to add resources to the curate cart:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multi-Select Method"),": Hold down the control key (or command key on Mac) to select multiple resources simultaneously, then click Add to Curate Cart to add all selected resources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Individual Add Method"),": Click the plus icon next to each resource to add it individually to the cart."))),(0,o.kt)("li",{parentName:"ol"},"Review the items in your cart to ensure all desired resources are included."),(0,o.kt)("li",{parentName:"ol"},"Click Curate. A summary dialog will appear, allowing you to confirm your selection. Click Approve & Curate to proceed."),(0,o.kt)("li",{parentName:"ol"},"Torque Resources Inventory will generate a Terraform configuration and state file for the curated resources. The curation process may take a few minutes."),(0,o.kt)("li",{parentName:"ol"},"Once completed, the generated artifacts will be available for download.")),(0,o.kt)("h3",{id:"downloading-the-artifacts"},"Downloading the Artifacts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upon generation, both the Terraform configuration file and state file will be available for download."),(0,o.kt)("li",{parentName:"ul"},"Click the Download button to download the artifacts as a compressed package.")),(0,o.kt)("h3",{id:"using-the-cart"},"Using the Cart"),(0,o.kt)("p",null,"The Cart feature allows you to select and curate multiple resources before generating Terraform artifacts. You can add or remove resources from the cart as needed and proceed to artifact generation when ready."),(0,o.kt)("h3",{id:"what-can-be-done-with-the-downloaded-terraform-files"},"What Can Be Done with the Downloaded Terraform Files"),(0,o.kt)("p",null,"The Terraform configuration and state files generated by Torque Resources Inventory can be used to manage your cloud resources through Infrastructure as Code. Possible actions include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integration with Existing IaC Projects"),": Incorporate the generated Terraform files into existing IaC projects to maintain consistency in infrastructure management."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Manage Resources via Terraform"),": Utilize the generated files to manage manually provisioned resources, simplifying their incorporation into existing IaC frameworks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Deployment and Modification"),": With Terraform, apply, modify, or destroy cloud resources, granting precise control over curated infrastructure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Version Control"),": Store the Terraform files in a version control system such as Git, enabling collaborative management, change tracking, and versioning of infrastructure.")),(0,o.kt)("h2",{id:"best-practices-for-using-torque-resources-inventory"},"Best Practices for Using Torque Resources Inventory"),(0,o.kt)("p",null,"To maximize the benefits of Torque Resources Inventory, consider the following best practices:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tag Resources Consistently"),": Ensure that all cloud resources are tagged appropriately for easier filtering and curation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Frequent Scans"),": Regularly scan your cloud accounts to maintain up-to-date visibility of resources and changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CI/CD Integration"),": Integrate downloaded Terraform files into CI/CD pipelines to automate infrastructure deployment and management processes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Periodic IaC Status Review"),": Regularly review the IaC status of resources to identify unmanaged entities and bring them under proper governance.")),(0,o.kt)("h2",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,o.kt)("h3",{id:"what-cloud-providers-are-supported"},"What Cloud Providers Are Supported?"),(0,o.kt)("p",null,"Currently, Torque Resources Inventory supports only Azure and AWS clouds. Support for other cloud providers, such as Google Cloud, is planned for future releases."),(0,o.kt)("h3",{id:"what-permissions-are-required-for-torque-resources-inventory"},"What Permissions Are Required for Torque Resources Inventory?"),(0,o.kt)("p",null,"Torque Resources Inventory requires read-only permissions to your Azure subscription, specifically the Reader role, to perform resource discovery and inventory."),(0,o.kt)("h3",{id:"can-i-edit-the-generated-terraform-files"},"Can I Edit the Generated Terraform Files?"),(0,o.kt)("p",null,"Yes, you can modify the generated Terraform files to suit your specific requirements before utilizing them in your IaC workflows."),(0,o.kt)("h3",{id:"how-often-should-i-scan-my-cloud-account"},"How Often Should I Scan My Cloud Account?"),(0,o.kt)("p",null,"It is recommended to scan your cloud account at least weekly to ensure that your resource inventory remains up-to-date."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"unable-to-connect-to-azure-account"},"Unable to Connect to Azure Account"),(0,o.kt)("p",null,"If you are experiencing issues while connecting your Azure account to Torque Resources Inventory, verify the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The provided credentials have read-only permissions."),(0,o.kt)("li",{parentName:"ul"},"The subscription ID is accurate."),(0,o.kt)("li",{parentName:"ul"},"There are no network or firewall settings preventing Torque Resources Inventory from accessing Azure.")),(0,o.kt)("h3",{id:"terraform-generation-failed"},"Terraform Generation Failed"),(0,o.kt)("p",null,"If Terraform generation fails:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify that all selected resources have the necessary metadata available."),(0,o.kt)("li",{parentName:"ul"},"Ensure there are no permission issues preventing Torque Resources Inventory from accessing resource details."),(0,o.kt)("li",{parentName:"ul"},"Contact Torque Resources Inventory support if the issue persists.")),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"For further assistance, please contact the Torque Resources Inventory support team at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@quali.com"},"support@quali.com")," or visit our ",(0,o.kt)("a",{parentName:"p",href:"https://support.quali.com"},"support page"),"."),(0,o.kt)("h2",{id:"glossary"},"Glossary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IaC (Infrastructure as Code)"),": The practice of managing and provisioning computing infrastructure through machine-readable configuration files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terraform"),": An open-source IaC tool that allows users to define and provision infrastructure using a declarative configuration language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reader Role"),": A built-in Azure role that provides read-only access to cloud resources.")),(0,o.kt)("p",null,"Torque Resources Inventory provides an effective mechanism to address cloud sprawl, enabling you to transition unmanaged resources into managed, codified infrastructure seamlessly integrated into your IaC strategy."))}p.isMDXComponent=!0},6605:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resource-inventory-5e62b74224994dbce6482c6168cfc896.png"}}]);