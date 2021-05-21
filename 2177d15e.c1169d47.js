(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:r},u),{},{components:t})):a.a.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),o=(t(0),t(182)),i={id:"exceptions",title:"Exceptions and Partial Data"},c={unversionedId:"schema-generator/execution/exceptions",id:"schema-generator/execution/exceptions",isDocsHomePage:!1,title:"Exceptions and Partial Data",description:"Returning GraphQL Errors",source:"@site/docs/schema-generator/execution/exceptions.md",slug:"/schema-generator/execution/exceptions",permalink:"/graphql-kotlin/docs/schema-generator/execution/exceptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/exceptions.md",version:"current",lastUpdatedBy:"WonChul Heo",lastUpdatedAt:1621569203,sidebar:"docs",previous:{title:"Async Models",permalink:"/graphql-kotlin/docs/schema-generator/execution/async-models"},next:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"}},l=[{value:"Returning GraphQL Errors",id:"returning-graphql-errors",children:[]},{value:"Returning Data and Errors",id:"returning-data-and-errors",children:[]}],u={toc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"returning-graphql-errors"},"Returning GraphQL Errors"),Object(o.b)("p",null,"Exceptions thrown during execution of an operation will result in an empty data response and a GraphQLError that is added to a list of errors of the result.\nSee ",Object(o.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/execution/"},"graphql-java documentation")," for more details on how to customize your exception handling."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'fun getRandomNumberOrError(): Int {\n    val num = Random().nextInt(100)\n    return if (num <= 50) num else throw Exception("number is greater than 50")\n}\n')),Object(o.b)("h2",{id:"returning-data-and-errors"},"Returning Data and Errors"),Object(o.b)("p",null,"GraphQL allows you to return both data and errors in a single response, as long as the data returned still matches the schema. Depending on the criticality of the encountered error, instead of throwing an exception, you may want to return\ndefault data or use a nullable field, but still include more information in the ",Object(o.b)("inlineCode",{parentName:"p"},"errors")," block. In Kotlin, functions return only a single value, which means that in order to return both data\nand errors you have to explicitly return them wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"DataFetcherResult")," object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"class DataAndErrorsQuery {\n  fun returnDataAndErrors(): DataFetcherResult<String?> {\n    val data: String? = getData()\n    val error = if (data == null) MyError() else null\n\n    return DataFetcherResult.newResult<String?>()\n      .data(data)\n      .error(error)\n      .build()\n  }\n}\n")),Object(o.b)("p",null,"An example of a query returning partial data is available in our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/DataAndErrorsQuery.kt"},"spring example app"),"."))}s.isMDXComponent=!0}}]);