"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3368],{4137:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),c=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(m.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(t),u=n,f=l["".concat(m,".").concat(u)]||l[u]||p[u]||i;return t?a.createElement(f,o(o({ref:r},d),{},{components:t})):a.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s[l]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4717:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(4137));const i={sidebar_position:1},o="Example mermaid diagrams",s={unversionedId:"diagrams/mermaid-diagram",id:"version-1.4.0/diagrams/mermaid-diagram",title:"Example mermaid diagrams",description:"Testing a Mermaid sequence diagram",source:"@site/versioned_docs/version-1.4.0/diagrams/mermaid-diagram.md",sourceDirName:"diagrams",slug:"/diagrams/mermaid-diagram",permalink:"/apistds-docusaurus/docs/diagrams/mermaid-diagram",draft:!1,tags:[],version:"1.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Diagrams",permalink:"/apistds-docusaurus/docs/category/diagrams"},next:{title:"Example PUML Diagrams",permalink:"/apistds-docusaurus/docs/diagrams/plantuml-diagram"}},m={},c=[],d={toc:c},l="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"example-mermaid-diagrams"},"Example mermaid diagrams"),(0,n.kt)("p",null,"Testing a Mermaid sequence diagram"),(0,n.kt)("mermaid",{value:"sequenceDiagram\n    Alice->>John: Hello John, how are you?\n    John--\x3e>Alice: Great!\n    Alice-)John: See you later!"}))}p.isMDXComponent=!0}}]);