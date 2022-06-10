"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43954],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22440:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n.p+"assets/images/save-mui-b3dfd091b1665e3a5f50b4d364ab13fa.png",l=["components"],s={id:"save-button",title:"Save"},u=void 0,p={unversionedId:"ui-frameworks/mui/components/buttons/save-button",id:"ui-frameworks/mui/components/buttons/save-button",isDocsHomePage:!1,title:"Save",description:"` uses Material UI ` component. It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.",source:"@site/docs/ui-frameworks/mui/components/buttons/save.md",sourceDirName:"ui-frameworks/mui/components/buttons",slug:"/ui-frameworks/mui/components/buttons/save-button",permalink:"/docs/ui-frameworks/mui/components/buttons/save-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/buttons/save.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1654689249,formattedLastUpdatedAt:"6/8/2022",frontMatter:{id:"save-button",title:"Save"},sidebar:"someSidebar",previous:{title:"Refresh",permalink:"/docs/ui-frameworks/mui/components/buttons/refresh-button"},next:{title:"Show",permalink:"/docs/ui-frameworks/mui/components/buttons/show-button"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>hideText</code>",id:"hidetext",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that ",(0,o.kt)("strong",{parentName:"p"},"refine")," has adds features to this button."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"For example, let's add logic to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/useForm"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// highlight-next-line\nimport { useForm } from "@pankod/refine-react-hook-form";\nimport { Edit, Box, TextField } from "@pankod/refine-mui";\n\nexport const PostEdit: React.FC = () => {\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n        formState: { errors },\n    } = useForm<ICategory>();\n\n    return (\n        <Edit\n            isLoading={formLoading}\n            saveButtonProps={{ onClick: handleSubmit(onFinish) }}\n        >\n            <Box component="form">\n                <TextField\n                    {...register("title", { required: true })}\n                    error={!!errors?.title}\n                    helperText={errors?.title?.message}\n                    margin="normal"\n                    required\n                    fullWidth\n                    id="title"\n                    label="Title"\n                    name="title"\n                    defaultValue={" "}\n                />\n            </Box>\n        </Edit>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("p",null,"Will look like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i,alt:"Default save button"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," to be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component which includes submitting the form action, button loading, and disable states."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SaveButton } from "@pankod/refine-mui";\n\nexport const MySaveComponent = () => {\n    return <SaveButton hideText />;\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"props"),(0,o.kt)("td",{parentName:"tr",align:null},"Material UI button props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"ButtonProps"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hideText"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"children"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Save"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"startIcon"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/material-icons/?theme=Outlined&query=save&selected=SaveOutlined"},(0,o.kt)("inlineCode",{parentName:"a"},"<SaveOutlinedIcon />")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"svgIconProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows to set icon props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/svg-icon/#props"},(0,o.kt)("inlineCode",{parentName:"a"},"SvgIconProps"))),(0,o.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);