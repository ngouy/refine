"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4996],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93429:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n.p+"assets/images/emailFieldMui-3598ced6ff308b84b4c9ed55116358f3.png",o=["components"],s={id:"email",title:"Email"},m=void 0,p={unversionedId:"ui-frameworks/mui/components/fields/email",id:"ui-frameworks/mui/components/fields/email",isDocsHomePage:!1,title:"Email",description:"This field is used to display email values. It uses the ` component of ` from Material UI.",source:"@site/docs/ui-frameworks/mui/components/fields/email.md",sourceDirName:"ui-frameworks/mui/components/fields",slug:"/ui-frameworks/mui/components/fields/email",permalink:"/docs/ui-frameworks/mui/components/fields/email",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/fields/email.md",tags:[],version:"current",lastUpdatedBy:"Melih \xd6zkalay",lastUpdatedAt:1654779882,formattedLastUpdatedAt:"6/9/2022",frontMatter:{id:"email",title:"Email"},sidebar:"someSidebar",previous:{title:"Date",permalink:"/docs/ui-frameworks/mui/components/fields/date"},next:{title:"File",permalink:"/docs/ui-frameworks/mui/components/fields/file"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This field is used to display email values. It uses the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},(0,i.kt)("inlineCode",{parentName:"a"},"<Link>"))," component of ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},(0,i.kt)("inlineCode",{parentName:"a"},"<Typography>"))," from Material UI."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's see how we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"<EmailField>")," with the example in the user list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\nimport {\n    Table,\n    TableBody,\n    TableCell,\n    TableHead,\n    TableRow,\n    List,\n    // highlight-next-line\n    EmailField,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IUser>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>First Name</TableCell>\n                        <TableCell>Last Name</TableCell>\n                        <TableCell>Email</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell component="th" scope="row">\n                                {row.firstName}\n                            </TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.lastName}\n                            </TableCell>\n                            <TableCell>\n                                // highlight-next-line\n                                <EmailField value={row.email} />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\nexport interface IUser {\n    id: number;\n    firstName: string;\n    lastName: string;\n    email: string;\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"<EmailField>"),' uses "mailto:" in the href prop of the ',(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},(0,i.kt)("inlineCode",{parentName:"a"},"<Link>"))," component. For this reason, clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"<EmailField>")," opens your device's default mail application."))),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l,alt:"EmailField"})),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"Email value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},"Refer to the documentation for the rest of Link properties. ","\u2192")))}d.isMDXComponent=!0}}]);