"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},l="Telemetry",i={unversionedId:"guides-and-concepts/telemetry/telemetry",id:"guides-and-concepts/telemetry/telemetry",title:"Telemetry",description:"Summary",source:"@site/docs/guides-and-concepts/telemetry/telemetry.md",sourceDirName:"guides-and-concepts/telemetry",slug:"/guides-and-concepts/telemetry/",permalink:"/docs/guides-and-concepts/telemetry/",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/telemetry/telemetry.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1659956870,formattedLastUpdatedAt:"8/8/2022",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"Sign in with Ethereum Web3 Wallet",permalink:"/docs/guides-and-concepts/web3/ethereum-signin"},next:{title:"Ant Design",permalink:"/docs/examples/tutorial/antd-tutorial"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2},{value:"What is collected?",id:"what-is-collected",level:2},{value:"How to opt-out?",id:"how-to-opt-out",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," implements a ",(0,a.kt)("strong",{parentName:"p"},"simple")," and ",(0,a.kt)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,a.kt)("strong",{parentName:"p"},"very limited scope"),". "),(0,a.kt)("p",null,"Tracking is totally ",(0,a.kt)("strong",{parentName:"p"},"secure")," and ",(0,a.kt)("strong",{parentName:"p"},"anonymous"),". It includes no personally identifiable Information and ",(0,a.kt)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,a.kt)("strong",{parentName:"p"},"opt-out"),"."),(0,a.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,a.kt)("p",null,"We try to answer the question ",(0,a.kt)("strong",{parentName:"p"},"how many users are actively using the Refine framework"),". This information is critical for open-source projects like Refine to better understand their communities and measure their growth metrics."),(0,a.kt)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,a.kt)("p",null,"The tracking happens when a Refine application is loaded on the user's browser. On application init, a single HTTP request is sent to ",(0,a.kt)("a",{parentName:"p",href:"https://telemetry.refine.dev"},"https://telemetry.refine.dev"),". The request body is encrypted with JSON Web Encryption (JWE) standard  (",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7516"},"ietf.org/doc/html/rfc7516"),") to be decrypted securely on Refine servers."),(0,a.kt)("p",null,"There are no consequent requests on that session, as we do NOT collect any behavioral information such as ",(0,a.kt)("em",{parentName:"p"},"page views"),", ",(0,a.kt)("em",{parentName:"p"},"button clicks"),", etc."),(0,a.kt)("h2",{id:"what-is-collected"},"What is collected?"),(0,a.kt)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"providers"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean[]"),(0,a.kt)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Version of the refine package.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceCount"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,a.kt)("p",null,"Additionaly following information is extracted and collected from the HTTP header:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Browser"),(0,a.kt)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OS"),(0,a.kt)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,a.kt)("h2",{id:"how-to-opt-out"},"How to opt-out?"),(0,a.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."))}c.isMDXComponent=!0}}]);