"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3720],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={},s=void 0,i={unversionedId:"api-design-development/URIConstruction",id:"api-design-development/URIConstruction",title:"URIConstruction",description:"URI Construction",source:"@site/docs/api-design-development/5-URIConstruction.md",sourceDirName:"api-design-development",slug:"/api-design-development/URIConstruction",permalink:"/apistds-docusaurus/docs/next/api-design-development/URIConstruction",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTPVerbs",permalink:"/apistds-docusaurus/docs/next/api-design-development/HTTPVerbs"},next:{title:"HTTPHeaders",permalink:"/apistds-docusaurus/docs/next/api-design-development/HTTPHeaders"}},l={},p=[{value:"URI Construction",id:"uri-construction",level:2},{value:"API Offering",id:"api-offering",level:3},{value:"Version",id:"version",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Resources and Sub-resources",id:"resources-and-sub-resources",level:3},{value:"Word Separation",id:"word-separation",level:3},{value:"Query Arguments",id:"query-arguments",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"uri-construction"},"URI Construction"),(0,r.kt)("p",null,"URI construction is important in that it is the door through which\nconsumers enter to obtain agency resources. It should be intuitive and\neasy to guess what an endpoint does just by looking at the URI and HTTP\nverb, without needing to see a query string. As basic guidance, endpoint\nURLs should advertise resources, and\xa0avoid verbs."),(0,r.kt)("p",null,"In some situations an implemented standard may define the URI structure\nfor you. A good example of this is Fast Health Interoperability\nResources (FHIR)\n",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/resource.html"},"[https://www.hl7.org/fhir/resource.html]{.underline}")),(0,r.kt)("h3",{id:"api-offering"},"API Offering"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Recommended]","{.smallcaps}")),(0,r.kt)("p",null,"Is it recommended that agencies make it clear in the URL that their\noffering is an API:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"https://",(0,r.kt)("strong",{parentName:"p"},"api"),".example.govt.nz")),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,"APIs should have a clear indication of the version, so that application\ndevelopers can ensure they are using the appropriate version for their\nconsuming application."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Recommended]","{.smallcaps}")),(0,r.kt)("p",null,"Header-based versioning is recommended (see section ",(0,r.kt)("a",{parentName:"p",href:"#api-version-control"},"[2.10, API Version\nControl]{.underline}"),"); however, it is recognised\nthat some API infrastructure does not readily support header-based\nversioning.\xa0"),(0,r.kt)("p",null,"URL-based versioning is a viable alternative, as the version number in\nthe URL should only change when major revisions have been made and the\ninterface has changed substantially without backwards\xa0compatibility. For\nURL-based versioning the URI should include /vN with the major version\n(N) and v as a prefix. Agencies should not include minor version numbers\nwhen using version numbers in the API paths."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/v{version}/\xa0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"#Get details for provider id 123435 -- version 1 of the API"),(0,r.kt)("p",{parentName:"blockquote"},"GET ",(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v1/providers/12345"},"https://api.example.govt.nz/v1/providers/12345")),(0,r.kt)("p",{parentName:"blockquote"},"Accept: application/json"),(0,r.kt)("p",{parentName:"blockquote"},"Host: api.example.govt.nz"),(0,r.kt)("p",{parentName:"blockquote"},"#Get details for provider id 123435 -- version 2 of the API"),(0,r.kt)("p",{parentName:"blockquote"},"GET ",(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v2/providers/12345"},"https://api.example.govt.nz/v2/providers/12345")),(0,r.kt)("p",{parentName:"blockquote"},"Accept: application/json"),(0,r.kt)("p",{parentName:"blockquote"},"Host: api.example.govt.nz")),(0,r.kt)("h3",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,'For APIs where an agency holds multiple\xa0responsibilities which may\nresult in overlapping resource naming (for example MBIE could have the\nresource \\"accommodation\\" in two contexts: tenancy/contracts,\ntourism/contracts) it is recommended that namespaces be used to avoid\nany ambiguity. The namespace would be the first noun in the URI and\nshould reflect the function of government being offered by this API.\nNamespaces\xa0may be singular or plural, depending on the situation.\xa0'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/{version}/{namespace}/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/v1/biosecurity/")),(0,r.kt)("h3",{id:"resources-and-sub-resources"},"Resources and Sub-resources"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Recommended]","{.smallcaps}")),(0,r.kt)("p",null,"Resource names should be noun-based, and collection resource names\nshould be plural nouns, e.g.\xa0/passengers in lower case. Resource naming\nshould be short, simple and clearly understandable. It should also be\nhuman-guessable, avoiding technical or specialist terms where possible."),(0,r.kt)("p",null,"Sub-resources must appear under the resource they relate to, but should\ngo no more than three deep i.e.\n/resource/id/sub-resource/id/sub-sub-resource. If you reach a third\nlevel of granularity (sub-sub-resource), it may be worth reviewing your\nresource construction to see if it is actually a combination of multiple\nfirst or second level resources."),(0,r.kt)("p",null,"The URI references for resources should consistently use the same path\nstructure to refer to resources. Sub-namespace or sub-folders should be\navoided, to maintain path consistency. This allows application\ndevelopers to have a predictable experience in case they are building\nURIs in code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\xa0Template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/{version}/{namespace}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}"),(0,r.kt)("p",{parentName:"blockquote"},"/{version}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v2/biosecurity/trusted-travellers/33245/arrivals/P100782"},"https://api.example.govt.nz/v2/biosecurity/trusted-travellers/33245/arrivals/P100782")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v2/learners/43265/achievements/7281"},"https://api.example.govt.nz/v2/learners/43265/achievements/7281"))),(0,r.kt)("h3",{id:"word-separation"},"Word Separation"),(0,r.kt)("p",null,"Hyphens have traditionally been used as word separators in URLs, as\nsearch engines (particularly Google) prefer a hyphen to split words\nbecause a hyphen is not a word character (as defined in regular\nexpression language). This has led to hyphens, or kebab-case, being the\nde facto standard in the interests of readability and Search Engine\nOptimization (SEO)."),(0,r.kt)("p",null,"Therefore, in order to keep URLs consistently formatted, path and query\nstring parameters should be lower case with hyphen separators for\nmultiword names."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v1/example-service/search?sort-order=asc"},"https://api.example.govt.nz/v1/example-service/search?sort-order=asc"))),(0,r.kt)("h3",{id:"query-arguments"},"Query Arguments"),(0,r.kt)("p",null,"Query arguments should be used to filter a response i.e. modify a\nreturning result set.\xa0"),(0,r.kt)("p",null,"The general rule is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it changes the behaviour of the result set then it should be a\nquery argument\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it changes the behaviour of the API then it should be in the path"))),(0,r.kt)("p",null,"Query arguments are generally used for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sorting or ordering the result set - e.g. sort-order=ascending")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pagination - pagination is a query argument because it effectively\nacts as a filter and limits the result set returned. This is\nparticularly useful with large response data sets. When using\npagination it is a good idea to inform the consumer where they can\nfind previous and subsequent result sets using hypermedia as\ndiscussed in ",(0,r.kt)("a",{parentName:"p",href:"#hateoas"},"[section 2.7.7]{.underline}")," of this\ndocument."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\\"',"_",'links\\": ',"["),(0,r.kt)("p",{parentName:"blockquote"},"{"),(0,r.kt)("p",{parentName:"blockquote"},'\\"rel\\": \\"next\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"href\\":\n\\"',(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v1/example-service/search?limit=5&start=5%5C%22"},'https://api.example.govt.nz/v1/example-service/search?limit=5&start=5\\"')),(0,r.kt)("p",{parentName:"blockquote"},"},"),(0,r.kt)("p",{parentName:"blockquote"},"{"),(0,r.kt)("p",{parentName:"blockquote"},'\\"rel\\": \\"prev\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"href\\":\n\\"',(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v1/example-service/search?limit=5&start=0%5C%22"},'https://api.example.govt.nz/v1/example-service/search?limit=5&start=0\\"')),(0,r.kt)("p",{parentName:"blockquote"},"},"),(0,r.kt)("p",{parentName:"blockquote"},"{"),(0,r.kt)("p",{parentName:"blockquote"},'\\"rel\\": \\"self\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"href\\": \\"',(0,r.kt)("a",{parentName:"p",href:"http://api.example.govt.nz/v1/example-service/search%5C%22"},'http://api.example.govt.nz/v1/example-service/search\\"')),(0,r.kt)("p",{parentName:"blockquote"},"}"),(0,r.kt)("p",{parentName:"blockquote"},"]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Limiting the result set -\xa0e.g. by specifying which fields to return.\nThis approach can be complicated and is often a decision based on\nfunctionality vs complexity. For example, it may be desirable to be\nable to filter a result set to a specific set of objects. Whilst\nthis is possible, it is not a recommended approach. If this kind of\nflexibility is required in an API it could be a good time to\nconsider the use of ",(0,r.kt)("a",{parentName:"p",href:"http://www.odata.org/"},"Open Data Protocol\n(OData"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In cases where response filtering is used, providers should ensure\nthat they use a JSON schema by default so that consumers have the\nability to understand the entire resource and do not need to query\nthe resource for the message structure."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"#Get a filtered result set for a learner"),(0,r.kt)("p",{parentName:"blockquote"},"GET\n",(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v2/learners/33245?fields=firstName,lastName,dateOfBirth"},"https://api.example.govt.nz/v2/learners/33245?fields=firstName,lastName,dateOfBirth")),(0,r.kt)("p",{parentName:"blockquote"},"{"),(0,r.kt)("p",{parentName:"blockquote"},'\\"firstName\\": \\"Mary\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"lastName\\": \\"Contrary\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"dateOfBirth\\": \\"12-01-1974\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"',"_",'links\\": ',"["),(0,r.kt)("p",{parentName:"blockquote"},"{"),(0,r.kt)("p",{parentName:"blockquote"},'\\"rel\\": \\"self\\",'),(0,r.kt)("p",{parentName:"blockquote"},'\\"href\\":\n\\"',(0,r.kt)("a",{parentName:"p",href:"https://api.example.govt.nz/v2/learners/33245?fields=firstName,lastName,dateOfBirth%5C%22"},'https://api.example.govt.nz/v2/learners/33245?fields=firstName,lastName,dateOfBirth\\"')),(0,r.kt)("p",{parentName:"blockquote"},"}"),(0,r.kt)("p",{parentName:"blockquote"},"]"),(0,r.kt)("p",{parentName:"blockquote"},"}")))}m.isMDXComponent=!0}}]);