"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=o,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",slug:"temporal-date-api",authors:"muhammed_arslan",tags:["javascript","date","temporal-api","time"],image:"/img/blog/2022-08-19-temporal-api/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/temporal-date-api",source:"@site/blog/2022-08-19-temporal-api.md",title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",date:"2022-08-19T00:00:00.000Z",formattedDate:"August 19, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"date",permalink:"/blog/tags/date"},{label:"temporal-api",permalink:"/blog/tags/temporal-api"},{label:"time",permalink:"/blog/tags/time"}],readingTime:7.46,hasTruncateMarker:!1,authors:[{name:"Muhammed Arslan Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQHKaAhTXytlEw/profile-displayphoto-shrink_800_800/0/1643978601436?e=1666224000&v=beta&t=vM0ajc7YqtkLTEhxsLs-cIcc1bGnYwl8-Ct1bsCoUL0",key:"muhammed_arslan"}],frontMatter:{title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",slug:"temporal-date-api",authors:"muhammed_arslan",tags:["javascript","date","temporal-api","time"],image:"/img/blog/2022-08-19-temporal-api/social.png",hide_table_of_contents:!1},prevItem:{title:"Neumorphism with CSS - A new design trend",permalink:"/blog/neumorphic-css"},nextItem:{title:"NextAuth - Google And GitHub Authentications for Nextjs",permalink:"/blog/nextauth-google-github-authentication-nextjs"},relatedPosts:[{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.62,date:"2022-02-21T00:00:00.000Z"},{title:"How to Become A Production Hero as Developer with Refine in 2022",permalink:"/blog/how-to-become-a-production-hero-refine-2022",formattedDate:"February 21, 2022",authors:[{name:"Melih \xd6zkalay",title:"Frontend Developer",url:"https://github.com/ozkalai",imageURL:"https://github.com/ozkalai.png",key:"ozkalai"}],readingTime:2.04,date:"2022-02-21T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:17.495,date:"2022-07-21T00:00:00.000Z"}],authorPosts:[{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox",formattedDate:"August 30, 2022",authors:[{name:"Muhammed Arslan Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQHKaAhTXytlEw/profile-displayphoto-shrink_800_800/0/1643978601436?e=1666224000&v=beta&t=vM0ajc7YqtkLTEhxsLs-cIcc1bGnYwl8-Ct1bsCoUL0",key:"muhammed_arslan"}],readingTime:7.575,date:"2022-08-30T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"What Is The Temporal API?",id:"what-is-the-temporal-api",level:2},{value:"Project setup",id:"project-setup",level:2},{value:"Temporal API Data Types",id:"temporal-api-data-types",level:2},{value:"Temporal.Now",id:"temporalnow",level:3},{value:"Temporal.PlainDate",id:"temporalplaindate",level:3},{value:"Temporal.Duration",id:"temporalduration",level:3},{value:"Temporal.TimeZone",id:"temporaltimezone",level:3},{value:"Browser Support for Temporal API",id:"browser-support-for-temporal-api",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Date object is the least-fun thing and a long-standing pain point in JavaScript. That's why there're other libraries like moment.js and date-fns. Developers use these to make sense of Date object. Implementation of Date object was directly copied from Java. Java scrapped it, but it remained in JavaScript for backward compatibility. It was written a long-time ago and not updated. There're some basic issues with the current Date implementation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports only UTC and user's local time zone"),(0,o.kt)("li",{parentName:"ul"},"The Date object is mutable: a date will change as methods are applied"),(0,o.kt)("li",{parentName:"ul"},"Parsing dates from strings is unreliable"),(0,o.kt)("li",{parentName:"ul"},"No support for non-Gregorian calendars"),(0,o.kt)("li",{parentName:"ul"},"Computation APIs are clunky")),(0,o.kt)("p",null,"Steps we\u2019ll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-the-temporal-api"},"What Is The Temporal API?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#project-setup"},"Project setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#temporal-api-data-types"},"Temporal API Data Types"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#temporalnow"},"Temporal.Now")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#temporalplaindate"},"Temporal.PlainDate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#temporalduration"},"Temporal.Duration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#temporaltimezone"},"Temporal.TimeZone")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-support-for-temporal-api"},"Browser Support for Temporal API"))),(0,o.kt)("h2",{id:"what-is-the-temporal-api"},"What Is The Temporal API?"),(0,o.kt)("p",null,"Temporal API, a better replacement for Date object. Temporal presents standard data types and methods for working with dates and times. It allows you to have an easy-to-use API for date and time computations. It gives support for all time zones without having to reach for another library like date-fns. It\u2019s a way to have a better date/time API in JavaScript. It provides PlainDate, PlainTime, and PlainDateTime objects which don\u2019t have an association with a time zone. There\u2019s also a way to grab time associated with time zone. It supplies tools to work with time zones or without them. So, basically, Temporal provides data types that are being split into plain and zoned."),(0,o.kt)("p",null,"Temporal handles these issues by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First-class support for all time zones"),(0,o.kt)("li",{parentName:"ul"},"Handling objects available with fixed dates and times"),(0,o.kt)("li",{parentName:"ul"},"Providing reliability through parsing a strict string format"),(0,o.kt)("li",{parentName:"ul"},"Support for non-Gregorian calendars"),(0,o.kt)("li",{parentName:"ul"},"Date and time computations by providing simple APIs")),(0,o.kt)("p",null,"There\u2019re several data types and methods available with Temporal and we'll get to explore most of them in this guide."),(0,o.kt)("h2",{id:"project-setup"},"Project setup"),(0,o.kt)("p",null,"We'll create a very basic project."),(0,o.kt)("p",null,"Create an empty directory for your new ",(0,o.kt)("strong",{parentName:"p"},"Temporal API")," project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir temporal-api\ncd temporal-api\n")),(0,o.kt)("p",null,"To start working with ",(0,o.kt)("strong",{parentName:"p"},"Temporal API"),", you need to install the following package first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm init\nnpm install @js-temporal/polyfill\n")),(0,o.kt)("p",null,"Make sure you add ",(0,o.kt)("inlineCode",{parentName:"p"},"Snowpack")," as a dev dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev snowpack\n")),(0,o.kt)("p",null,"Create a temporal.js file and include it as a source in the index.html file to test the Temporal API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Temporal API</title>\n        <script src="temporal.js" type="module"><\/script>\n    </head>\n    <body> \n    </body>\n</html>\n')),(0,o.kt)("p",null,"Import the following package in the ",(0,o.kt)("inlineCode",{parentName:"p"},"temporal.js")," file, and you're ready to start working with ",(0,o.kt)("inlineCode",{parentName:"p"},"Temporal API"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="temporal.js"',title:'"temporal.js"'},"import { Temporal } from '@js-temporal/polyfill';\n")),(0,o.kt)("p",null,"Now, we are able to inspect the browser console when testing the following cases."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://github.com/pankod/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,o.kt)("h2",{id:"temporal-api-data-types"},"Temporal API Data Types"),(0,o.kt)("h3",{id:"temporalnow"},"Temporal.Now"),(0,o.kt)("p",null,"It'll give you a bunch of different methods that allow you to essentially get an object for the current time. Let's say you want to get a plain date and time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.plainDateTimeISO()\nconsole.log(now.toString())\n// 2022-08-15T17:26:43.63340363\n")),(0,o.kt)("p",null,"This is the exact time all the way down to micro and nono-seconds. It's very specific, which you can't do with a normal Date object. If you want to get the date and time separately, you can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const nowDate = Temporal.Now.plainDateISO()\nconst nowTime = Temporal.Now.plainTimeISO()\n\nconsole.log(nowDate.toString())\n// 2022-08-15\nconsole.log(nowTime.toString())\n// 17:27:51.688660566\n")),(0,o.kt)("p",null,"Adding date, month, or year using the old Date methods is a huge pain. It's very simple to do this in ",(0,o.kt)("inlineCode",{parentName:"p"},"Temporal"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.plainDateISO()\n\nconsole.log(now.add({ days: 1, months: 1, years: 1 }).toString())\n// 2023-09-16\n")),(0,o.kt)("p",null,"You can also do subtraction like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.plainDateISO()\nconsole.log(now.subtract({ days: 1, months: 1, years: 1 }).toString())\n// 2021-07-14\n")),(0,o.kt)("p",null,"These methods return a new date instead of modifying the date you're working on. This was implemented badly in the normal Date object. Because it returns a modified object rather than a new object, if you want to compare two dates, you can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.plainDateISO()\nconst now2 = Temporal.Now.plainDateISO()\n\nconsole.log(now.equals(now2))\n// true\n")),(0,o.kt)("p",null,"If you want to calculate duration between two dates, you can do this in following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.plainDateISO()\nconst now2 = new Temporal.PlainDate(2022,1,1)\n\nconsole.log(now.since(now2).toString())\n// P226D\nconsole.log(now.until(now2).toString())\n// -P226D\n")),(0,o.kt)("p",null,"Both helper methods ",(0,o.kt)("inlineCode",{parentName:"p"},"since")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"until")," help in finding the duration between two dates. Helper method ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," allows you to set a specific value. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.plainDateISO()\n\nconsole.log(now.with({ year: 2021 }).toString())\n// 2021-08-15\n")),(0,o.kt)("p",null,"If you want to go into details of helper methods, you can check ",(0,o.kt)("a",{parentName:"p",href:"https://tc39.es/proposal-temporal/docs/"},"Temporal Docs"),"."),(0,o.kt)("p",null,"So, based on these different types of planeDate, plainTime and plainDateTime, you can get very specific information. Also, if you care about time zones, You can do the following for a specific time zone of your choice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.Now.zonedDateTimeISO()\n\nconsole.log(now.toString())\n// 2022-08-15T17:37:00.986020984+05:00[Asia/Karachi]\n")),(0,o.kt)("p",null,"It puts the time zone at the end to show time with your current time zone. It's something you can't do very easily with a normal Date object. Conversion between time zones and non-time zones was very difficult to achieve. So, this ",(0,o.kt)("inlineCode",{parentName:"p"},"Temporal.Now"),"\nthe object has functions for getting the current date time, whatever you're looking for."),(0,o.kt)("h3",{id:"temporalplaindate"},"Temporal.PlainDate"),(0,o.kt)("p",null,"If you want to get the exact date without time, You can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = new Temporal.PlainDate(2022,8,8)\n\nconsole.log(now.toString())\n// 2022-08-08\n")),(0,o.kt)("p",null,"Another way to get a date is by calling a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const now = Temporal.PlainDate.from("2022-08-08")\n\nconsole.log(now.toString())\n// 2022-08-08\n\n')),(0,o.kt)("p",null,"You can also pass an object in the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," method. You'll get the exact same result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.PlainDate.from({\n    year: 2022,\n    month: 8,\n    day: 8\n})\n\nconsole.log(now.toString())\n// 2022-08-08\n")),(0,o.kt)("p",null,"All of these allow you to define the date, time, or whatever. It's possible for all different time zones as well. You can do a zoned date-time like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const now = Temporal.ZonedDateTime.from({\n    year: 2022,\n    month: 8,\n    day: 8,\n    timeZone: Temporal.Now.timeZone()\n})\n\nconsole.log(now.toString())\n// 2022-08-08T00:00:00+05:00[Asia/Karachi]\n")),(0,o.kt)("p",null,"You'll get year, month, and day in your specific time zone because you mentioned it. Those are part of the main data types you're going to use. If you want to sort dates, you can do like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const today = Temporal.Now.plainDateISO()\nconst yesterday = today.subtract({ days: 1})\nconst tomorrow = today.add({ days: 1})\nconst days = [today, yesterday, tomorrow]\nconst sortedDays = days.sort(Temporal.PlainDate.compare)\n\nconsole.log(sortedDays.map(d => d.toString()))\n// \xa0['2022-08-14', '2022-08-15', '2022-08-16']\n")),(0,o.kt)("h3",{id:"temporalduration"},"Temporal.Duration"),(0,o.kt)("p",null,"This data type conveys the length or duration of time. This helps in dealing with the comparison of dates. You can build a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Duration")," with the constructor or ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const duration = Temporal.Duration.from({ days: 2, months: 8 })\n\nconsole.log(duration.toString())\n// P8M2D\n\n")),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"round"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"with"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subtract")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," helper methods on ",(0,o.kt)("inlineCode",{parentName:"p"},"Duration"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," helper method calculates the whole duration in a specific unit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const duration = Temporal.Duration.from({ hours: 12, minutes: 30 })\n\nconsole.log(duration.total("minutes"))\n// 750\n\n')),(0,o.kt)("h3",{id:"temporaltimezone"},"Temporal.TimeZone"),(0,o.kt)("p",null,"This data type is used to show a specific time zone. You can use this in the following two ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const timeZone = Temporal.TimeZone.from('America/Chicago')\n\nconsole.log(timeZone.toString())\n// America/Chicago\n\nconst localTimeZone = Temporal.Now.timeZone()\n\nconsole.log(localTimeZone.toString())\n// Asia/Karachi\n")),(0,o.kt)("p",null,"There're various data types and helper methods available with ",(0,o.kt)("inlineCode",{parentName:"p"},"Temporal"),". If you want to explore them, you can do it through ",(0,o.kt)("a",{parentName:"p",href:"https://tc39.es/proposal-temporal/docs/"},"Temporal Docs"),"."),(0,o.kt)("h2",{id:"browser-support-for-temporal-api"},"Browser Support for Temporal API"),(0,o.kt)("p",null,"Now, after reading all this, you may get excited to start trying out the ",(0,o.kt)("inlineCode",{parentName:"p"},"Temporal API"),". This API isn't available yet as the proposal for this API is at stage 3. No browser supports this API at the moment, but you can use polyfill if you want to try this API. Several polyfills are available for this API, but ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@js-temporal/polyfill"},"@js-temporal/polyfill")," is quite useful. You can immediately use this API, once you install this library."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Dates in JavaScript include multiple issues with the implementation. Temporal API solves this problem with easy-to-use APIs. JavaScript developers will find it helpful once browsers start supporting this API."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,o.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),", if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://github.com/pankod/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is a React-based framework for building CRUD applications ",(0,o.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,o.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,o.kt)("strong",{parentName:"p"},"styling"),", ",(0,o.kt)("strong",{parentName:"p"},"customization")," and ",(0,o.kt)("strong",{parentName:"p"},"project workflow.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,o.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials and example projects."))}u.isMDXComponent=!0}}]);