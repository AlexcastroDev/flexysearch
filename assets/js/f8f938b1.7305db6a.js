"use strict";(self.webpackChunkflexysearch_docs=self.webpackChunkflexysearch_docs||[]).push([[362],{4944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>C,default:()=>S,frontMatter:()=>v,metadata:()=>x,toc:()=>D});var r=a(7896),l=a(1461),n=a(2784),i=a(876),o=a(132),s=a(189),c=a(5553),d=a(6466),u=function(e){return e[e.SET_DATA_ACTION=0]="SET_DATA_ACTION",e[e.SET_FILTERED_DATA_ACTION=1]="SET_FILTERED_DATA_ACTION",e[e.UPDATE_GLOBAL_SEARCH_ACTION=2]="UPDATE_GLOBAL_SEARCH_ACTION",e}({});const f=function(e,t){switch(t.kind){case u.SET_DATA_ACTION:return Object.assign({},e,{data:t.payload});case u.SET_FILTERED_DATA_ACTION:return Object.assign({},e,{filtered_data:t.payload});case u.UPDATE_GLOBAL_SEARCH_ACTION:return Object.assign({},e,{search_term:t.payload});default:return Object.assign({},e)}};const p={data:[],filtered_data:[],search_term:""};var m=n.createContext({});function h(e){var t=e.children,a=n.useReducer(f,p),r=a[0],l=a[1];return n.createElement(m.Provider,{value:{state:r,dispatch:l}},t)}var _=function(){return n.useContext(m)},g=a(1182);function T(e){var t=_(),a=t.state,r=t.dispatch,l=n.useState([]),i=l[0],o=l[1],s=n.useCallback((function(e,t){var a=e;t&&(a=e.filter((function(e){var a=Object.values(e).join(" ").toLowerCase();return new RegExp(t.toLowerCase()).test(a)}))),r({kind:u.SET_FILTERED_DATA_ACTION,payload:a})}),[r]),c=n.useMemo((function(){var e=new g.ZP(a.data);return(a.filtered_data.length||!a.filtered_data.length&&a.search_term)&&(e=new g.ZP(a.filtered_data)),i&&0!==i.length&&e.search(i),e}),[a.filtered_data,a.data,a.search_term,i]),d=function(e){return r({kind:u.SET_DATA_ACTION,payload:e})};return n.useEffect((function(){(null==e?void 0:e.data)&&d(null==e?void 0:e.data)}),[null==e?void 0:e.data]),{data:a.data,filtered_data:c.all,setData:d,updateGlobalSearch:function(e){r({kind:u.UPDATE_GLOBAL_SEARCH_ACTION,payload:e}),s(a.data,e)},updateFilterRules:function(e){return o(e)}}}var E=[{name:"Testing",mass:100}];function A(){return n.createElement(h,null,n.createElement(y,null))}function y(){var e=T({data:E}),t=e.filtered_data,a=e.updateGlobalSearch,r=t.map((function(e,t){return n.createElement("tr",{key:t},n.createElement("td",null,e.name),n.createElement("td",null,e.mass))}));return n.createElement(o.Z,null,n.createElement(s.r,null,n.createElement(s.r.Col,{span:6},n.createElement(c.I,{placeholder:"Search...",onChange:function(e){var t=e.currentTarget.value;a(t)}}))),n.createElement(d.i,{striped:!0,withBorder:!0,mt:"lg"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",{style:{width:"100%"}},"Mass"))),n.createElement("tbody",null,r)))}var b=["components"],v={sidebar_position:2},C="Global filter",x={unversionedId:"guide/example-global-filter",id:"guide/example-global-filter",title:"Global filter",description:"Create your first React Page",source:"@site/docs/guide/example-global-filter.md",sourceDirName:"guide",slug:"/guide/example-global-filter",permalink:"/flexysearch/docs/guide/example-global-filter",draft:!1,editUrl:"https://github.com/AlexcastroDev/flexysearch/docs/guide/example-global-filter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/flexysearch/docs/guide/installation"},next:{title:"Deploy your site",permalink:"/flexysearch/docs/guide/contribution"}},k={},D=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Code",id:"code",level:2}],O={toc:D},I="wrapper";function S(e){var t=e.components,a=(0,l.Z)(e,b);return(0,i.kt)(I,(0,r.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"global-filter"},"Global filter"),(0,i.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,i.kt)("p",null,"Create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,i.kt)(A,{mdxType:"TableWithGlobalFilter"}),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("a",{target:"_blank",alt:"project-link",href:"https://stackblitz.com/edit/react-ts-s8gvyy?file=App.tsx"},"Show full code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.tsx"',title:'"src/pages/my-react-page.tsx"'},"import React from 'react';\nimport { useFlexysearch, FlexysearchProvider } from 'flexysearch-react'\n\nconst data = [\n  { name: 'Testing', mass: 100 },\n]\n\n// Each Table should have the FlexysearchProvider\nexport default function Module() {\n  return (\n    <FlexysearchProvider>\n      <TableWithGlobalFilter />\n    </FlexysearchProvider>\n  );\n}\n")))}S.isMDXComponent=!0}}]);