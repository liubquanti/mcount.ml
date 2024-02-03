"use strict";(self.webpackChunkdiscord_resource_wiki=self.webpackChunkdiscord_resource_wiki||[]).push([[912],{5788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>f});var n=r(1504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3920:(e,t,r)=>{r(1504)},5040:(e,t,r)=>{r.d(t,{c:()=>l});var n=r(1504);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function o(e){let{children:t,onClickOutside:r}=e;const a=(0,n.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&r(e)}return(0,n.useEffect)((()=>(document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o))),[]),n.createElement("span",{ref:a},t)}var s=r(6528);function i(e){let{children:t,title:r,mode:i="hover"}=e;const[c,l]=(0,n.useState)(!1),{isDarkTheme:p}=(0,s.U)();return n.createElement(o,{onClickOutside:()=>l(!1)},n.createElement("span",{className:`${a.container} ${"hover"===i?a.containerHover:""}`},n.createElement("span",{onClick:()=>l(!c),className:a.children},t),n.createElement("span",{className:a.popup,style:{display:"click"===i&&c?"block":"none"}},n.createElement("span",{className:a.popupText,style:{backgroundColor:p?"#dadae0":"#2f3136",color:p?"#000":"#fff"}},r),n.createElement("span",{className:a.popupTriangle,style:{borderTopColor:p?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:t}=e;const{isDarkTheme:r}=(0,s.U)();return n.createElement(i,{title:n.createElement("span",null,n.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),n.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},n.createElement("span",{className:c.container},n.createElement("span",{className:c.widget,style:{backgroundColor:r?"#2f3136":"#dadae0"}},n.createElement("img",{src:t.avatarUrl,alt:"",className:c.userAvatar}),n.createElement("span",{className:c.userTag},"discord"===t.type?n.createElement(n.Fragment,null,n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name),n.createElement("span",{className:c.userDiscriminator},t.discriminator&&!["0","0000"].includes(t.discriminator)?"#"+t.discriminator:"")):n.createElement("span",{className:c.userUsername,style:{color:r?"#fff":"#000"}},t.name)))))}},7776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(5072),a=(r(1504),r(5788));r(5040),r(3920);const o={title:"\u2b50 \u2507 To The Pole",sidebar_position:4,description:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0435\u0440\u0432\u0435\u0440."},s="\u0421\u0435\u0437\u043e\u043d 4 - To The Pole \u2b50",i={unversionedId:"past-seasons/To The Pole",id:"past-seasons/To The Pole",title:"\u2b50 \u2507 To The Pole",description:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0435\u0440\u0432\u0435\u0440.",source:"@site/wiki/past-seasons/To The Pole.md",sourceDirName:"past-seasons",slug:"/past-seasons/To The Pole",permalink:"/past-seasons/To The Pole",draft:!1,editUrl:"https://github.com/liubquanti-dev/mcount.fun/edit/main/wiki/past-seasons/To The Pole.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u2b50 \u2507 To The Pole",sidebar_position:4,description:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0435\u0440\u0432\u0435\u0440."},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0a \u2507 Warm Ocean",permalink:"/past-seasons/Warm Ocean"},next:{title:"\u2744\ufe0f \u2507 Infinite Winter",permalink:"/past-seasons/Infinite Winter"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u0441\u0435\u0437\u043e\u043d-4---to-the-pole-"},"\u0421\u0435\u0437\u043e\u043d 4 - To The Pole \u2b50"))}m.isMDXComponent=!0}}]);