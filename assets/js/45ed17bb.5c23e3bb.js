"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2544],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=c(t),p=n,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return t?a.createElement(f,o(o({ref:r},l),{},{components:t})):a.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var m={};for(var s in r)hasOwnProperty.call(r,s)&&(m[s]=r[s]);m.originalType=e,m[d]="string"==typeof e?e:n,o[1]=m;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1381:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var a=t(7462),n=(t(7294),t(4137));const i={sidebar_position:1},o="Example mermaid diagrams",m={unversionedId:"diagrams/mermaid-diagram",id:"diagrams/mermaid-diagram",title:"Example mermaid diagrams",description:"Testing a Mermaid sequence diagram",source:"@site/docs/diagrams/mermaid-diagram.md",sourceDirName:"diagrams",slug:"/diagrams/mermaid-diagram",permalink:"/apistds-docusaurus/docs/next/diagrams/mermaid-diagram",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Diagrams",permalink:"/apistds-docusaurus/docs/next/category/diagrams"},next:{title:"Example PUML Diagrams",permalink:"/apistds-docusaurus/docs/next/diagrams/plantuml-diagram"}},s={},c=[],l={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"example-mermaid-diagrams"},"Example mermaid diagrams"),(0,n.kt)("p",null,"Testing a Mermaid sequence diagram"),(0,n.kt)("mermaid",{value:"sequenceDiagram\n    Alice->>John: Hello John, how are you?\n    John--\x3e>Alice: Great!\n    Alice-)John: See you later!"}))}u.isMDXComponent=!0}}]);