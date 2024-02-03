"use strict";(self.webpackChunkdiscord_resource_wiki=self.webpackChunkdiscord_resource_wiki||[]).push([[430],{9496:(e,t,a)=>{a.d(t,{c:()=>h});var l=a(1504),r=a(4971),n=a(6920),o=a(1432),s=a(6016),c=a(4357);const i={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.c)(i.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.c)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.c)(i.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(s.c,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))}var u=a(5168);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Mx,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.U)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,c=t&&t.items.length>0;return l.createElement(n.c,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.c)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},7792:(e,t,a)=>{a.d(t,{c:()=>M});var l=a(1504),r=a(4971),n=a(3152),o=a(964);function s(e){let{children:t,className:a}=e;const{frontMatter:r,assets:s,metadata:{description:c}}=(0,n.g)(),{withBaseUrl:i}=(0,o.E)(),m=s.image??r.image,u=r.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"description",content:c}),m&&l.createElement("link",{itemProp:"image",href:i(m,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var c=a(6016);const i={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.g)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,r.c)(i.title,t),itemProp:"headline"},o?m:l.createElement(c.c,{itemProp:"url",to:s},m))}var u=a(4357),d=a(5944);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.A)();return t=>{const a=Math.ceil(t);return e(a,(0,u.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,n.g)(),{date:o,formattedDate:s,readingTime:c}=a;return l.createElement("div",{className:(0,r.c)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==c&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:c})))}function f(e){return e.href?l.createElement(c.c,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:c,email:i}=t,m=s||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:(0,r.c)("avatar margin-bottom--sm",a)},c&&l.createElement(f,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:n,itemProp:"image"})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.g)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.c)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.c)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(m,null),l.createElement(b,null),l.createElement(N,null))}var k=a(5684),w=a(6812);function I(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.g)();return l.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,r.c)("markdown",a),itemProp:"articleBody"},l.createElement(w.c,null,t))}var y=a(7790),T=a(1096),F=a(5072);function A(){return l.createElement("b",null,l.createElement(u.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.c,(0,F.c)({"aria-label":(0,u.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(A,null))}const B={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function C(){const{metadata:e,isBlogPostPage:t}=(0,n.g)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:c}=e,i=!t&&c,m=a.length>0;return m||i||s?l.createElement("footer",{className:(0,r.c)("row docusaurus-mt-lg",t&&B.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,r.c)("col",{"col--9":i})},l.createElement(T.c,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.c,{editUrl:s})),i&&l.createElement("div",{className:(0,r.c)("col text--right",{"col--3":m})},l.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function M(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.g)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,r.c)(o,a)},l.createElement(_,null),l.createElement(I,null,t),l.createElement(C,null))}},3152:(e,t,a)=>{a.d(t,{E:()=>o,g:()=>s});var l=a(1504),r=a(1100);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.AH("BlogPostProvider");return e}},5944:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(1504),r=a(8264);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.c)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function i(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);