"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5922],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const a={},i=void 0,s={unversionedId:"api-design-development/HTTPVerbs",id:"version-1.3.0/api-design-development/HTTPVerbs",title:"HTTPVerbs",description:"HTTP Verbs",source:"@site/versioned_docs/version-1.3.0/api-design-development/4-HTTPVerbs.md",sourceDirName:"api-design-development",slug:"/api-design-development/HTTPVerbs",permalink:"/apistds-docusaurus/docs/1.3.0/api-design-development/HTTPVerbs",draft:!1,tags:[],version:"1.3.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecturaland Deployment Patterns",permalink:"/apistds-docusaurus/docs/1.3.0/api-design-development/Architecturaland Deployment Patterns"},next:{title:"URIConstruction",permalink:"/apistds-docusaurus/docs/1.3.0/api-design-development/URIConstruction"}},c={},p=[{value:"HTTP Verbs",id:"http-verbs",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"http-verbs"},"HTTP Verbs"),(0,o.kt)("p",null,"Access to REST APIs must be via the standard HTTP verbs: GET, PUT, POST,\nDELETE in line with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/2001/tag/doc/whenToUseGet.html"},"[W3C\nStandard]{.underline}"),"\nnamely:"),(0,o.kt)("p",null,"+-------------+--------------------------------------------------------+\n| ",(0,o.kt)("strong",{parentName:"p"},"Verb"),"    | ",(0,o.kt)("strong",{parentName:"p"},"Common Usage"),"                                       |\n+=============+========================================================+\n| GET         | For retrieval of information                           |\n|             |                                                        |\n|             | If the interaction is more like a question\xa0(i.e. it is |\n|             | a safe operation such as a query)                      |\n+-------------+--------------------------------------------------------+\n| POST        | To create a piece of information or resource item      |\n|             |                                                        |\n|             | To spawn an action\xa0                                    |\n|             |                                                        |\n|             | If the interaction is like placing an order            |\n|             |                                                        |\n|             | If the interaction changes the state of the resource   |\n|             | in a way that the user would perceive (e.g. a          |\n|             | subscription to a service)                             |\n|             |                                                        |\n|             | If the user be held accountable for the results of the |\n|             | interaction                                            |\n+-------------+--------------------------------------------------------+\n| PUT         | To update an existing resource item                    |\n|             |                                                        |\n|             | To replace an existing resource item                   |\n+-------------+--------------------------------------------------------+\n| DELETE      | To delete a resource item                              |\n+-------------+--------------------------------------------------------+\n| OPTIONS     | To retrieve information about what the consumer is     |\n|             | allowed to do with the resource                        |\n+-------------+--------------------------------------------------------+\n| PATCH       | Not recommended due to complexity                      |\n+-------------+--------------------------------------------------------+\n| HEAD        | Rarely used, but used to retrieve metadata about a     |\n|             | resource                                               |\n+-------------+--------------------------------------------------------+"),(0,o.kt)("p",null,"[]{#_heading=h.2981zbj .anchor}Table 22: HTTP Verbs"))}d.isMDXComponent=!0}}]);