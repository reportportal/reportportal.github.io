"use strict";(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[410],{59734:function(e,t,a){a.d(t,{p:function(){return b}});var l,r=a(67294),n=a(41609),s=a.n(n),c=a(9719),i=a(14160),o=a(51595),m=a(18872);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var d=function(e){return r.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none"},e),l||(l=r.createElement("path",{stroke:"#8791AB",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.33 14.265V12.93a2.667 2.667 0 0 0-2.666-2.666H5.331a2.667 2.667 0 0 0-2.667 2.666v1.334M8.003 7.598a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"})))};const p=(0,c.WP)(["article-author"]),E=e=>{let{authorName:t}=e;return r.createElement("p",{className:p()},r.createElement("span",{className:p("__icon")},r.createElement(d,null)),t)},_=(0,c.WP)(["article-preview-item"]),g=e=>{var t;let{post:a}=e;return r.createElement("li",{className:_()},r.createElement(i.rU,{to:"/blog/"+a.slug,className:_("__link")},r.createElement("div",{className:_("__featured-image")},r.createElement("img",{alt:a.featuredImage.description,src:a.featuredImage.file.url})),r.createElement("div",{className:_("__content")},r.createElement("p",{className:_("__category")},a.category),r.createElement("h2",{className:_("__title")},a.title.title),(null===(t=a.description)||void 0===t?void 0:t.raw)&&r.createElement("div",null,(0,m.Z)(a.description)),r.createElement("div",{className:_("__meta")},r.createElement("span",{className:"meta"},a.publishDate)),r.createElement(o.default.Paragraph,{ellipsis:{rows:5},className:_("__excerpt")},a.leadParagraph.leadParagraph),r.createElement(E,{authorName:a.author}))))},v=(0,c.WP)(["article-preview-list"]),b=e=>{let{posts:t}=e;return s()(t)?null:r.createElement("ul",{className:v()},t.map((e=>r.createElement(g,{key:e.id,post:e}))))}},37687:function(e,t,a){a.d(t,{j:function(){return s}});var l=a(67294),r=a(67453);const n=(0,a(9719).WP)(["banner"]),s=e=>{let{title:t,subtitle:a,link:s,linkTitle:c,dataGtm:i,children:o}=e;return l.createElement("div",{className:n()},l.createElement("div",{className:n("__wrapper")},l.createElement("div",{className:n("__inner")},l.createElement("div",{className:n("__titles")},l.createElement("div",{className:n("__title")},t),a&&l.createElement("div",{className:n("__subtitle")},a)),s&&l.createElement("div",{className:n("__btn-wrapper")},l.createElement(r.r,Object.assign({className:"btn btn--primary btn--large",to:s},i&&{"data-gtm":i}),c)),o)))}},82352:function(e,t,a){a.d(t,{r:function(){return l}});a(67294),a(29646),a(28604),a(37687);(0,a(9719).WP)(["subscription-banner"]);const l=()=>null},96551:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(67294),r=a(29646),n=a(59734),s=a(82352),c=a(9719);const i=(0,c.WP)(["blog"]),o=e=>{let{visiblePosts:t,allPosts:a,loadMorePosts:r}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:i()},l.createElement("div",{className:"container"},l.createElement("h1",{className:i("__title")},"Blog"),l.createElement("p",{className:i("__subtitle")},"Product updates, news and technology articles"),l.createElement(n.p,{posts:t}),t.length<a.length&&l.createElement("div",{className:i("__footer")},l.createElement("button",{className:"btn btn--outline btn--large",onClick:r},"Load more")))),l.createElement(s.r,null))};var m=e=>{let{data:{allContentfulBlogPost:t}}=e;const{nodes:a}=t,{0:n,1:s}=(0,l.useState)(a.slice(0,9)),i=(0,l.useCallback)((()=>s((e=>a.slice(0,e.length+9)))),[a]);return l.createElement(r.Ar,{seoData:c.bv.blog},l.createElement(o,{visiblePosts:n,allPosts:a,loadMorePosts:i}))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-0e5f75990bd92352b34c.js.map