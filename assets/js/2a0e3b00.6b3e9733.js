"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[410],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(4137));const r={},i=void 0,s={unversionedId:"api-design-development/APIVersion Control",id:"version-1.3.0/api-design-development/APIVersion Control",title:"APIVersion Control",description:"API Version Control",source:"@site/versioned_docs/version-1.3.0/api-design-development/10-APIVersion Control.md",sourceDirName:"api-design-development",slug:"/api-design-development/APIVersion Control",permalink:"/apistds-docusaurus/docs/api-design-development/APIVersion Control",draft:!1,tags:[],version:"1.3.0",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchHandling & Transactions",permalink:"/apistds-docusaurus/docs/api-design-development/BatchHandling & Transactions"},next:{title:"API Security",permalink:"/apistds-docusaurus/docs/category/api-security"}},p={},l=[{value:"API Version Control",id:"api-version-control",level:2},{value:"API Version Control Methods",id:"api-version-control-methods",level:3},{value:"Accept Header Versioning",id:"accept-header-versioning",level:4},{value:"URI (Path) Versioning",id:"uri-path-versioning",level:4},{value:"When to Version",id:"when-to-version",level:3},{value:"Breaking Changes",id:"breaking-changes",level:4},{value:"Non-Breaking Changes",id:"non-breaking-changes",level:4},{value:"Software Configuration Management",id:"software-configuration-management",level:3}],c={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-version-control"},"API Version Control"),(0,o.kt)("h3",{id:"api-version-control-methods"},"API Version Control Methods"),(0,o.kt)("p",null,'There are two main API versioning methodologies commonly used. There are\npositives and negatives to both approaches and a large amount of debate\nover which is the most "RESTful". Rather than stipulate a methodology to\nuse in this standard, below is a description of each methodology in\norder of preference. Both, however, are acceptable. What is more\nimportant is that APIs are versioned and that there is an understanding\nof when and why to version an API.'),(0,o.kt)("h4",{id:"accept-header-versioning"},"Accept Header Versioning"),(0,o.kt)("p",null,'This is usually considered the most RESTful way to version APIs because\nthe resource path remains "pure" and it is possible to provide more\nversion flexibility for clients. It is, however, technically more\ndifficult to implement, and in many cases commercial API\nmanagement/gateway products do not support or work well with this\napproach.'),(0,o.kt)("p",null,"Header based versioning should be performed using the Accept header\nwhere a consuming application requests an API version as defined in an\nAccept header. Wildcards (","*",") are used by the consuming application to\nindicate acceptance of the latest major or minor version of an API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"#Get details for provider id 123435 -- latest minor version of the API"),(0,o.kt)("p",{parentName:"blockquote"},"GET ",(0,o.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/providers/12345"},"https://api.example.govt.nz/providers/12345")),(0,o.kt)("p",{parentName:"blockquote"},"Accept: application/json, version=1.","*"),(0,o.kt)("p",{parentName:"blockquote"},"Host: api.example.govt.nz"),(0,o.kt)("p",{parentName:"blockquote"},"#Get details for provider id 123435 --version 1.1 of the API"),(0,o.kt)("p",{parentName:"blockquote"},"GET ",(0,o.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/providers/12345"},"https://api.example.govt.nz/providers/12345")),(0,o.kt)("p",{parentName:"blockquote"},"Accept: application/json, version=1.1"),(0,o.kt)("p",{parentName:"blockquote"},"Host: api.example.govt.nz"),(0,o.kt)("p",{parentName:"blockquote"},"#Get details for provider id 123435 -- latest version of the API"),(0,o.kt)("p",{parentName:"blockquote"},"GET ",(0,o.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/providers/12345"},"https://api.example.govt.nz/providers/12345")),(0,o.kt)("p",{parentName:"blockquote"},"Accept: application/json, version=","*"),(0,o.kt)("p",{parentName:"blockquote"},"Host: api.example.govt.nz")),(0,o.kt)("p",null,"The response should include the version of the API that responded to the\nclient request in the ",(0,o.kt)("strong",{parentName:"p"},"Content-Type")," header."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Content-Type: application/json,version=1.2")),(0,o.kt)("h4",{id:"uri-path-versioning"},"URI (Path) Versioning"),(0,o.kt)("p",null,"URL-based versioning is a viable alternative, as the version number in\nthe URL should only change when major revisions have been made and the\ninterface has changed\xa0substantially\xa0without backwards\xa0compatibility. For\nURL-based versioning the URI should include /vN with the major version\n(N) and v as a prefix. Agencies should not include minor version numbers\nwhen using version numbers in the API paths."),(0,o.kt)("p",null,"This is probably the easiest method to implement, but a number of REST\npurists feel that it compromises the URI and does not offer enough\nflexibility to consumers. If there is a requirement to support a large\nnumber of historical versions of APIs it can mean that there is\ncomplexity introduced with the number of URIs to maintain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"#Query version of version 1 of the search API"),(0,o.kt)("p",{parentName:"blockquote"},"GET\n",(0,o.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/customers/v1/search?first-name=John&last-name=Smith&page-size=10"},"[https://api.example.govt.nz/customers/v1/search?first-name=John&last-name=Smith&page-size=10]{.underline}")),(0,o.kt)("p",{parentName:"blockquote"},"#Query version 2 of the search API"),(0,o.kt)("p",{parentName:"blockquote"},"GET\n",(0,o.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/customers/v2/search?first-name=John&last-name=Smith&page-size=10"},"https://api.example.govt.nz/customers/v2/search?first-name=John&last-name=Smith&page-size=10"))),(0,o.kt)("p",null,"The response should still indicate the version of the API that was\ncalled. This can be done as above, using the ",(0,o.kt)("strong",{parentName:"p"},"Content-Type")," header or\nin the ",(0,o.kt)("strong",{parentName:"p"},"Location")," header, as the version in the path indicates the API\nthat was called."),(0,o.kt)("h3",{id:"when-to-version"},"When to Version"),(0,o.kt)("p",null,"Simply put, an API should be versioned when a change is considered\nbreaking. One of the benefits of an API is that, if it is well designed,\nthere should be fewer breaking changes. In government however, there are\nlikely to be situations where legislative changes enforce a new version\nof an API and deprecation of all previous versions."),(0,o.kt)("h4",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("p",null,"A change is a breaking change if any consuming application requires\nchanges to work with the new version. i.e. the new version will not\nsuccessfully process messages provided by existing consumers. A breaking\nchange should be considered as a major version change e.g. 1.3 to 2.0."),(0,o.kt)("p",null,"Examples of breaking changes include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The removal of any property from the response representation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The change of datatype for an existing property, or a change from\noptional to required")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The removal of any resource, or HTTP Verb support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A change to the way errors are handled")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any change to existing resource URIs"))),(0,o.kt)("h4",{id:"non-breaking-changes"},"Non-Breaking Changes"),(0,o.kt)("p",null,"A change is non-breaking if any message that would have been processed\nby the previous version will be successfully processed by the new\nversion (i.e. backwards compatible). This will enable an existing\nconsumer of the previous version to work with the new version without\nrequiring modification. A non-breaking change should be considered as a\nminor version change e.g. 1.1 to 1.2."),(0,o.kt)("p",null,"Such changes include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The addition of new properties to the JSON representation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The addition of new resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The addition of support for new HTTP Verbs (new operations) on\nexisting resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support for new custom headers, e.g. for request tracing"))),(0,o.kt)("h3",{id:"software-configuration-management"},"Software Configuration Management"),(0,o.kt)("p",null,"It is important to remember that version control is more than just\nversioning the resource. An API will inherently have associated code and\nartefacts. Consider what comprises an API and include these as a logical\nartefact stored and managed in a software configuration management (SCM)\nsystem. It is a good idea to try and capture all components in a format\nthat can be controlled by SCM. A good example of this is UML diagrams;\nthese cannot be version controlled unless captured in a text like\nformat. See\n",(0,o.kt)("a",{parentName:"p",href:"http://www.planttext.com/planttext"},"[http://www.planttext.com/planttext]{.underline}"),"\nor\n",(0,o.kt)("a",{parentName:"p",href:"https://www.websequencediagrams.com"},"[https://www.websequencediagrams.com]{.underline}"),"\nfor examples of textual UML modelling."),(0,o.kt)("p",null,"An API artefact should, where possible, comprise the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any API code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API specification (OpenAPI)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unit test scripts such as\n",(0,o.kt)("a",{parentName:"p",href:"http://junit.org/junit5/"},"[JUnit]{.underline}")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"[Mocha]{.underline}"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Continuous integration support files such as grunt.js or Ant\nscripts."))))}u.isMDXComponent=!0}}]);