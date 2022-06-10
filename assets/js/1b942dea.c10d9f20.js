"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33887],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80667:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n.p+"assets/images/edit-mui-999d669862495fec0126eaee4868bbac.png",l=["components"],d={id:"edit-button",title:"Edit"},p=void 0,s={unversionedId:"ui-frameworks/mui/components/buttons/edit-button",id:"ui-frameworks/mui/components/buttons/edit-button",isDocsHomePage:!1,title:"Edit",description:"` uses Material UI  component. It uses the edit method from useNavigation` under the hood. It can be useful to redirect the app to the edit page route of resource.",source:"@site/docs/ui-frameworks/mui/components/buttons/edit.md",sourceDirName:"ui-frameworks/mui/components/buttons",slug:"/ui-frameworks/mui/components/buttons/edit-button",permalink:"/docs/ui-frameworks/mui/components/buttons/edit-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/buttons/edit.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1654689249,formattedLastUpdatedAt:"6/8/2022",frontMatter:{id:"edit-button",title:"Edit"},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/ui-frameworks/mui/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/ui-frameworks/mui/components/buttons/export-button"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",children:[],level:3},{value:"<code>hideText</code>",id:"hidetext",children:[],level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the edit page route of resource."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    EditButton,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Action</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                // highlight-next-line\n                                <EditButton recordItemId={row.id} />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,o.kt)("p",null,"Will look like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i,alt:"Default edit button"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,"It is used to redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit")," defined by the name property of resource object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mui";\n\nexport const MyEditComponent = () => {\n    return <EditButton resourceNameOrRouteName="posts" recordItemId="2" />;\n};\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/edit/2"),"."),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mui";\n\nexport const MyEditComponent = () => {\n    return <EditButton hideText />;\n};\n')),(0,o.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,o.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-mui";\n\nexport const MyListComponent = () => {\n    return <EditButton ignoreAccessControlProvider />;\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"props"),(0,o.kt)("td",{parentName:"tr",align:null},"Material UI button props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"ButtonProps"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resourceNameOrRouteName"),(0,o.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for redirection"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hideText"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ignoreAccessControlProvider"),(0,o.kt)("td",{parentName:"tr",align:null},"Skip access control"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"children"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Edit"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"startIcon"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/material-icons/?query=edit&theme=Outlined&selected=EditOutlined"},(0,o.kt)("inlineCode",{parentName:"a"},"<EditOutlinedIcon />")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"svgIconProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows to set icon props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/svg-icon/#props"},(0,o.kt)("inlineCode",{parentName:"a"},"SvgIconProps"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onClick"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the handler to handle click event"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(event) => void")),(0,o.kt)("td",{parentName:"tr",align:null},"Triggers navigation for redirect to the edit page of resource")))))}m.isMDXComponent=!0}}]);