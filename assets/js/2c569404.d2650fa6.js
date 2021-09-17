"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[946],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"authenticated",title:"<Authenticated>"},u=void 0,p={unversionedId:"api-references/components/auth/authenticated",id:"api-references/components/auth/authenticated",isDocsHomePage:!1,title:"<Authenticated>",description:"` is the component form of useAuthenticated. It internally uses useAuthenticated` to provide it's functionality.",source:"@site/docs/api-references/components/auth/authenticated.md",sourceDirName:"api-references/components/auth",slug:"/api-references/components/auth/authenticated",permalink:"/docs/api-references/components/auth/authenticated",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/components/auth/authenticated.md",version:"current",lastUpdatedBy:"Umut \xd6zdemir",lastUpdatedAt:1627558583,formattedLastUpdatedAt:"7/29/2021",frontMatter:{id:"authenticated",title:"<Authenticated>"},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-references/components/basic-views/edit"},next:{title:"List",permalink:"/docs/api-references/components/buttons/list-button"}},l=[{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[]}]}],s={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Authenticated>")," is the component form of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/auth/useAuthenticated"},(0,o.kt)("inlineCode",{parentName:"a"},"useAuthenticated")),". It internally uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/auth/useAuthenticated"},(0,o.kt)("inlineCode",{parentName:"a"},"useAuthenticated"))," to provide it's functionality."),(0,o.kt)("p",null,"For an example use, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/customPages"},"Custom Pages Example")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/custom-pages#authenticated-custom-pages"},"it's explanation"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fallback"),(0,o.kt)("td",{parentName:"tr",align:null},"Content to show if user is not logged in. If undefined, routes to ",(0,o.kt)("inlineCode",{parentName:"td"},"/")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"loading"),(0,o.kt)("td",{parentName:"tr",align:null},"Content to show while checking whether user is logged in"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);