"use strict";(self.webpackChunkflexysearch_docs=self.webpackChunkflexysearch_docs||[]).push([[918],{7255:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7896),l=a(2784),r=a(6277),o=a(211),s=a(2267),c=a(7661),i=a(9817),d=a(1077),m=a(77);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbHomeIcon:"breadcrumbHomeIcon_JFrk"};function p(){var e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}const b={breadcrumbsContainer:"breadcrumbsContainer_zCmv"};function h(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?l.createElement("span",{className:n,itemProp:"name"},t):a?l.createElement(i.Z,{className:n,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:n},t)}function E(e){var t=e.children,a=e.active,o=e.index,s=e.addMicrodata;return l.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function g(){var e=(0,s.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(p,null),e.map((function(t,a){var n=a===e.length-1;return l.createElement(E,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},864:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(2784),l=a(328),r=a(3364),o=n.createContext(null);function s(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(o.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){var e,t=c(),a=t.metadata,r=t.frontMatter,o=t.assets;return n.createElement(l.d,{title:a.title,description:a.description,keywords:r.keywords,image:null!=(e=o.image)?e:r.image})}var d=a(6277),m=a(7963),u=a(301);function v(){var e=c().metadata;return n.createElement(u.Z,{previous:e.previous,next:e.next})}var p=a(2269),b=a(8541),h=a(211),E=a(1077);function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(E.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(E.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:h.k.common.lastUpdated},n.createElement(E.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(7896),N=a(1461);const k={iconEdit:"iconEdit_UohW"};var C=["className"];function L(e){var t=e.className,a=(0,N.Z)(e,C);return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(k.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.k.common.editThisPage},n.createElement(L,null),n.createElement(E.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var U=a(9817);const x={tag:"tag_qE9H",tagRegular:"tagRegular_aHXt",tagWithCount:"tagWithCount_UC8q"};function w(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(U.Z,{href:t,className:(0,d.Z)(x.tag,l?x.tagWithCount:x.tagRegular)},a,l&&n.createElement("span",null,l))}const y={tags:"tags_q74f",tag:"tag_lSC7"};function A(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(E.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(y.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:y.tag},n.createElement(w,{label:t,permalink:a}))}))))}const B={lastUpdated:"lastUpdated_T23F"};function M(e){return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(A,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",B.lastUpdated)},(a||l)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function H(){var e=c().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,o=e.tags,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(M,{tags:o}),i&&n.createElement(I,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=a(8698),S=a(6986);const V={tocCollapsibleButton:"tocCollapsibleButton_htYj",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_pAh7"};var D=["collapsed"];function R(e){var t=e.collapsed,a=(0,N.Z)(e,D);return n.createElement("button",(0,_.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,a.className)}),n.createElement(E.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const F={tocCollapsible:"tocCollapsible_O_Qc",tocCollapsibleContent:"tocCollapsibleContent_SlnY",tocCollapsibleExpanded:"tocCollapsibleExpanded_klrc"};function z(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,o=(0,P.u)({initialState:!0}),s=o.collapsed,c=o.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(F.tocCollapsible,!s&&F.tocCollapsibleExpanded,a)},n.createElement(R,{collapsed:s,onClick:c}),n.createElement(P.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:s},n.createElement(S.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const q={tocMobile:"tocMobile_tjDr"};function O(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,q.tocMobile)})}var J=a(8188);function W(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(J.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var Y=a(3851),j=a(7061);function G(e){var t,a,l,r,o=e.children,s=(t=c(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},s&&n.createElement("header",null,n.createElement(Y.Z,{as:"h1"},s)),n.createElement(j.Z,null,o))}var Q=a(7255);const X={docItemContainer:"docItemContainer_Rv5Z",docItemCol:"docItemCol_YAwJ"};function K(e){var t,a,l,r,o,s,i=e.children,u=(t=c(),a=t.frontMatter,l=t.toc,r=(0,m.i)(),o=a.hide_table_of_contents,s=!o&&l.length>0,{hidden:o,mobile:s?n.createElement(O,null):void 0,desktop:!s||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(W,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&X.docItemCol)},n.createElement(p.Z,null),n.createElement("div",{className:X.docItemContainer},n.createElement("article",null,n.createElement(Q.Z,null),n.createElement(b.Z,null),u.mobile,n.createElement(G,null,i),n.createElement(H,null)),n.createElement(v,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function $(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(K,null,n.createElement(a,null))))}},301:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7896),l=a(2784),r=a(1077),o=a(6277),s=a(9817);function c(e){var t=e.permalink,a=e.title,n=e.subLabel,r=e.isNext;return l.createElement(s.Z,{className:(0,o.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(c,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},8541:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(2784),l=a(6277),r=a(1077),o=a(211),s=a(5663);function c(e){var t=e.className,a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},2269:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(2784),l=a(6277),r=a(7614),o=a(9817),s=a(1077),c=a(1215),i=a(211),d=a(7949),m=a(5663);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,o=e.versionMetadata,s=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,d.J)(m).savePreferredVersionName,b=(0,c.Jo)(m),h=b.latestDocSuggestion,E=b.latestVersionSuggestion,g=null!=h?h:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:o})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:E.label,to:g.path,onClick:function(){return u(E.name)}})))}function h(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}}}]);