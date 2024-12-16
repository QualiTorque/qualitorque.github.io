"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,title:"Input Sources"},o="Input Sources",u={unversionedId:"admin-guide/input-sources",id:"admin-guide/input-sources",title:"Input Sources",description:"Overview",source:"@site/docs/admin-guide/input-sources.md",sourceDirName:"admin-guide",slug:"/admin-guide/input-sources",permalink:"/admin-guide/input-sources",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/input-sources.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Input Sources"},sidebar:"torqueSidebar",previous:{title:"Parameters",permalink:"/admin-guide/params"},next:{title:"Credentials",permalink:"/admin-guide/credentials"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Key Benefits",id:"key-benefits",level:2},{value:"Supported External Sources",id:"supported-external-sources",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Creating an Input Source",id:"creating-an-input-source",level:3},{value:"Using an Input Source in Blueprints",id:"using-an-input-source-in-blueprints",level:3},{value:"Additional Considerations",id:"additional-considerations",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input-sources"},"Input Sources"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Input Sources")," feature is a significant enhancement for Torque users, providing a more dynamic and flexible way to retrieve and manage input values from external data sources. Whether you're dealing with multiple S3 buckets or preparing for future integrations with other external sources, this feature streamlines your workflow and ensures your configurations are always up-to-date.\nDuring the launch environment process, this feature simplifies the handling of multiple data sources by using a single configuration template, and allowing real-time listing of S3 bucket objects."),(0,a.kt)("h2",{id:"key-benefits"},"Key Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Real-Time Data Access:")," Retrieve up-to-date values from external sources such as S3 buckets, ensuring that your configurations are always in sync with the latest data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexible Source Management:")," Define and reuse input sources across different blueprints, making it easier to manage and update configurations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enhanced User Experience:")," Simplifies the process of selecting input values by dynamically generating options based on real-time data from external sources.")),(0,a.kt)("h2",{id:"supported-external-sources"},"Supported External Sources"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"S3 Buckets:")," The initial implementation supports listing objects within S3 buckets, such as S3-object and S3-object-contents. Future updates may include additional external sources like Git repositories."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("h3",{id:"creating-an-input-source"},"Creating an Input Source"),(0,a.kt)("p",null,"Torque role: Account admin"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,a.kt)("strong",{parentName:"h5"},"Important"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Modifying or deleting an Input Source may cause blueprints that use the Input Source to fail."))),(0,a.kt)("p",null,"To create an Input Source:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Navigate to Input Sources:")," Access the Input Sources section in your Torque Account Settings.\n",(0,a.kt)("strong",{parentName:"p"},"2. Add New Source:"),' Click on the "Connect a new Input Source" button.\n',(0,a.kt)("strong",{parentName:"p"},"3. Select preferred provider:")," Click on the AWS S3 bucket and button.\n",(0,a.kt)("strong",{parentName:"p"},"4. Input Source Details:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source Name:")," Name your Input Source"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description (Optional):")," Shortly describe what is the purpose of use of this Input Source. Adding a description is recommended, for better usability by other Space members."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shared Spaces:")," select the shared Spaces you want this Input Source to be available for. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Input Source Setup:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Credentials:")," Select AWS credentials for access."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bucket Name:")," Enter the name of the S3 bucket.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"You can check the 'Allow overrides' checkbox if you want to enable overriding the bucket name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source Type:")," Choose 's3-object' or 's3-object-content' as the source type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Define Source Type Parameters"),": Depending on your selection, define and specify the filters you'd like to use for narrowing-down the list of results.\nIf you've selected 's3-object-content', you need to define these parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"object_key:")," Enter the object",(0,a.kt)("em",{parentName:"li"},"key for your list",(0,a.kt)("br",{parentName:"em"}),"_You can check the 'Allow overrides' checkbox if you want to enable overriding the object_key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File Format:")," Currently we support only JSON"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"json_path:")," Enter the JSONPath for extracting the desired values",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"You can check the 'Allow overrides' checkbox if you want to enable overriding the JSONPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"display_json_path (optional):")," Enter the JSONPath for extracting the corresponding display values",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"You can check the 'Allow overrides' checkbox if you want to enable overriding the display_json_path"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6. Advanced Filters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"path_prefix (optional):")," For s3-object type only, you can Define a path prefix to filter objects.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"You can check the 'Allow overrides' checkbox if you want to enable overriding the path_prefix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"regex_filter (optional):")," For both S3 source types, you can apply a regex filter to refine the list of returned objects.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"You can check the 'Allow overrides' checkbox if you want to enable overriding the regex_filter"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Preview and Save:"),' Click the "Preview Results" button to verify that your setup retrieves the correct data.\nWhen your satisfied, click Save & Apply to finalize your new Input Source creation.'),(0,a.kt)("h3",{id:"using-an-input-source-in-blueprints"},"Using an Input Source in Blueprints"),(0,a.kt)("p",null,"Torque role: Space Developer"),(0,a.kt)("p",null,"To use an input source in a blueprint:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Define the Input:")," In your blueprint YAML, define an input with the type input-source."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Reference the Source:")," Use the source-name attribute to reference the created input source."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Specify Dependencies (if any):")," Use the depends-on and overrides attributes to manage dynamic dependencies, such as bucket names or object keys."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Retrieve and Use Values:")," The blueprint will now dynamically retrieve and display the values from the specified input source when launching the environment.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example YAML snippet")," - in this example the blueprint input ",(0,a.kt)("inlineCode",{parentName:"p"},"bucket")," is used to dynamically set the source bucket from which the ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," input's allowed values list will be populated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'inputs:\n  bucket:\n    type: string\n  object:\n    # set the object input to be an input-source type input\n    type: input-source\n    # define which input source to use\n    source-name: bucket-objects-source\n    # create a dependency on the "bucket" input to allow its value to be used to set the input source\'s source bucket\n    depends-on:\n    - bucket\n    # because "bucket-objects-source" allows overriding of the "bucket_name" attribute, we can define its new value in the blueprint yaml\n    overrides:\n    - bucket_name: \'{{ .inputs.bucket }}\'\n\n')),(0,a.kt)("h2",{id:"additional-considerations"},"Additional Considerations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JIT Data:")," To ensure that the data is up-to-date (Real-Time Data Access), the input source values are retrieved just-in-time (JIT). "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max Result Limit:")," A maximum of 1000 results can be returned to help manage performance and usability."))}d.isMDXComponent=!0}}]);