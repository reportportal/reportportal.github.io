(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[619],{59734:function(t,e,i){"use strict";i.d(e,{p:function(){return b}});var a,l=i(67294),n=i(41609),r=i.n(n),o=i(23338),s=i(14160),c=i(51595),m=i(18872);function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},u.apply(this,arguments)}var d=function(t){return l.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none"},t),a||(a=l.createElement("path",{stroke:"#8791AB",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.33 14.265V12.93a2.667 2.667 0 0 0-2.666-2.666H5.331a2.667 2.667 0 0 0-2.667 2.666v1.334M8.003 7.598a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"})))};const h=(0,o.WP)(["article-author"]),g=t=>{let{authorName:e}=t;return l.createElement("p",{className:h()},l.createElement("span",{className:h("__icon")},l.createElement(d,null)),e)},p=(0,o.WP)(["article-preview-item"]),v=t=>{var e;let{post:i}=t;return l.createElement("li",{className:p()},l.createElement(s.rU,{to:"/blog/"+i.slug,className:p("__link")},l.createElement("div",{className:p("__featured-image")},l.createElement("img",{alt:i.featuredImage.description,src:i.featuredImage.file.url})),l.createElement("div",{className:p("__content")},l.createElement("p",{className:p("__category")},i.category),l.createElement("h2",{className:p("__title")},i.title.title),(null===(e=i.description)||void 0===e?void 0:e.raw)&&l.createElement("div",null,(0,m.Z)(i.description)),l.createElement("div",{className:p("__meta")},l.createElement("span",{className:"meta"},i.publishDate)),l.createElement(c.default.Paragraph,{ellipsis:{rows:5},className:p("__excerpt")},i.leadParagraph.leadParagraph),l.createElement(g,{authorName:i.author}))))},w=(0,o.WP)(["article-preview-list"]),b=t=>{let{posts:e}=t;return r()(e)?null:l.createElement("ul",{className:w()},e.map((t=>l.createElement(v,{key:t.id,post:t}))))}},46559:function(t,e,i){"use strict";i.d(e,{e:function(){return m}});var a=i(67294),l=i(94184),n=i.n(l),r=i(68004),o=i(23338),s=i(18665);const c=(0,o.WP)(["linked-card-block"]),m=t=>{let{children:e,title:i,subtitle:l,cardsInfo:o,largePadding:m}=t;return a.createElement("div",{className:n()(c(),{[c("--large-padding")]:m})},a.createElement("div",{className:"container"},a.createElement(s.E,{title:i,subtitle:l}),a.createElement("div",{className:c("__cards")},o.map((t=>{let{itemTitle:e,description:i,link:l,linkText:n,icon:o}=t;return a.createElement(r.Z,{key:e,itemTitle:e,description:i,link:l,linkText:n,icon:o})}))),e))}},41991:function(t,e,i){"use strict";i.d(e,{J:function(){return c}});var a=i(67294),l=i(94184),n=i.n(l),r=i(67453),o=i(23338);const s=(0,o.WP)(["start-testing-with-report-portal"]),c=t=>{let{startFreeTrialUrl:e="/contact-us/general"}=t;return a.createElement("section",{className:n()(s(),"container")},a.createElement("div",{className:s("__leading")},a.createElement("div",{className:s("__leading-heading")},a.createElement("h2",null,"Start testing with ReportPortal"),a.createElement("h3",null,"Ready to get the most of ReportPortal features? Start your ",a.createElement("b",null,"30-day free trial")," or get in touch with us to learn more about our offer.")),a.createElement("div",{className:s("__leading-button-group")},a.createElement(r.r,{className:"btn btn--primary btn--large",to:e,"data-gtm":"start_free_trial"},"Start free trial"),a.createElement(r.r,{className:"btn btn--outline btn--large temporary-hide",to:"/contact-us/general","data-gtm":"get_a_quote"},"Get a quote"))),a.createElement("div",{className:s("__trailing")},a.createElement("img",{src:o.mH.subscription,alt:""})))}},23285:function(t,e,i){"use strict";i.d(e,{A:function(){return l}});var a=i(67294);const l=t=>{let{statistics:e}=t;return a.createElement("ul",{className:"statistic-list"},e.map((t=>{let{quantity:e,entities:i,achievement:l}=t;return a.createElement("li",{key:e,className:"white-border"},a.createElement("strong",null,e),a.createElement("strong",null,i),l&&a.createElement("span",null,l))})))}},18665:function(t,e,i){"use strict";i.d(e,{E:function(){return n}});var a=i(67294);const l=(0,i(23338).WP)(["title-block"]),n=t=>{let{title:e,subtitle:i}=t;return a.createElement(a.Fragment,null,a.createElement("div",{className:l("__title")},e),a.createElement("div",{className:l("__subtitle")},i))}},3269:function(t,e,i){"use strict";i.d(e,{G:function(){return u}});var a=i(67294),l=i(94184),n=i.n(l),r=i(59734),o=i(67453),s=i(23338),c=i(14160);const m=(0,s.WP)(["latest-from-our-blog"]),u=t=>{let{isViewAll:e}=t;const i=(()=>{const{allContentfulBlogPost:{nodes:t}}=(0,c.K2)("1800307753");return t})();return a.createElement("section",{className:n()(m(),"container")},a.createElement("h2",{className:m("__title")},"Latest from our blog"),a.createElement("div",{className:m("__latest-post")},a.createElement(r.p,{posts:i})),e&&a.createElement(o.r,{className:"btn btn--outline btn--large latest-from-our-blog__button",to:"/blog"},"View all"))}},79785:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Y}});var a=i(67294),l=i(29646),n=i(41991),r=i(67453),o=i(46559),s=i(82352),c=i(23338),m=i(23285),u=i(29297);const d=[{quantity:"2,0M+",entities:"Downloads"},{quantity:"6,5M",entities:"Active sessions per year "},{quantity:"8,705",entities:"Slack channel members"},{entities:"Stars on GitHub"}],h=(0,c.WP)(["hero"]),g=()=>{const t=(0,a.useMemo)((()=>d.map((t=>"Stars on GitHub"===t.entities?{...t,quantity:u.e.rW}:t))),[]);return a.createElement("div",{className:h()},a.createElement("div",{className:"container"},a.createElement("h1",{className:h("__title","__title--width")},"Join the ReportPortal community"),a.createElement("div",{className:h("__subtitle")},"Connect, learn, and collaborate with testing enthusiasts"),a.createElement(m.A,{statistics:t})))};var p=i(94184),v=i.n(p),w=i.p+"static/code-of-conduct-1c447d662d1a1fd3a0f3edcb7c1c7bac.svg";const b=(0,c.WP)(["code-of-conduct"]),f=()=>a.createElement("div",{className:b()},a.createElement("img",{className:b("__image"),src:w,alt:""}),a.createElement("div",null,a.createElement("strong",{className:b("__title")},"Code of conduct"),a.createElement("p",{className:b("__description")},"Learn about our guidelines for fostering an inclusive and respectful environment within the ReportPortal community.")),a.createElement(r.r,{className:v()(b("__button"),"btn btn--outline btn--small"),to:"https://github.com/reportportal/reportportal/wiki/Contribution"},"Open on GitHub"));var y=i(18665);const E=(0,c.WP)(["join-our-community"]),_=()=>a.createElement("div",{className:E()},a.createElement(y.E,{title:"Join our Slack community",subtitle:"Unlock a world of insights, collaborate, and learn together — join our vibrant Slack community of 8700+ members"}),a.createElement(r.r,{className:v()(E("__button"),"btn btn--primary btn--large"),to:"https://slack.epmrpp.reportportal.io"},"Join our Slack")),I=(0,c.WP)(["sponsors"]),M=()=>a.createElement("div",{className:I()},a.createElement("div",{className:v()(I("__content"),"container")},a.createElement("div",null,a.createElement("div",{className:I("__title")},"Fuel innovation and open-source progress"),a.createElement("div",{className:I("__description")},"Join us as a Sponsor on GitHub and support our quest for excellence in software testing")),a.createElement(r.r,{className:v()(I("__button"),"btn btn--pink btn--large"),to:"/sponsorship-program/business"},"Become Sponsor"))),N=(0,c.WP)(["style-meets"]),j=()=>a.createElement("div",{className:N()},a.createElement("div",{className:v()(N("__content"),"container")},a.createElement("div",{className:N("__info")},a.createElement("div",{className:N("__title")},"Style meets QA passion"),a.createElement("div",{className:N("__description")},a.createElement("p",null,"Elevate your style with unique merchandise from the ReportPortal Merch Store! Our wide range of stylish offerings is the perfect way to show your support and stay connected with our network of professionals."),a.createElement("p",null,"Explore the collection and add a dash of ReportPortal to your wardrobe today!")),a.createElement(r.r,{className:v()(N("__button"),"btn btn--secondary-2 btn--large"),to:"https://merch.reportportal.io"},"Shop now")),a.createElement("div",{className:N("__images")})));var A=i(1852),k=i(8400),P=i.n(k),x=i(43467),T=i(24979),R=i(51595),S=i(52353),q=i.n(S);const W=["year","month","day","hour","minute"],D=t=>{const e=Math.trunc(t),i=t.toFixed(1);return"0"===i.split(".")[1]?e:i},C=t=>parseInt(t||"0",10).toString().padStart(2,"0"),H=(0,c.WP)(["slide"]),Z=t=>{let{openEmbedVideo:e,imageSrc:i,publishedAt:l,viewCount:n,duration:r,title:o}=t;return a.createElement("div",{className:H("__item"),onClick:e},a.createElement("div",{className:H("__image-wrapper")},a.createElement("img",{src:i,alt:"",className:H("__image")}),a.createElement("div",{className:H("__duration")},(t=>{const e=t.match(/PT(?:(\d+)H)?((\d+)M)?((\d+)S)?/);if(e){const t=C(e[1]);return("00"===t?"":t+":")+C(e[3])+":"+C(e[5])}return"00:00"})(r))),a.createElement(R.default.Paragraph,{ellipsis:{rows:2},className:H("__title")},o),a.createElement("div",{className:H("__info")},a.createElement("span",{className:H("__info--views")},(t=>t<1e3?t+" views":t<1e6?D(t/1e3)+"K views":D(t/1e6)+"M views")(n)),a.createElement("span",{className:H("__info--published")},(t=>{const e=new Date(t),i=new Date,a=Math.floor((i-e)/1e3),l=Math.floor(a/60),n=Math.floor(l/60),r=Math.floor(n/24),o=Math.floor(r/30),s=[Math.floor(o/12),o,r,n,l],c=s.find((t=>t>0));if(q()(c))return"just now";const m=s.findIndex((t=>t===c));return c+" "+W[m]+(c>1?"s":"")+" ago"})(l))))};var U=JSON.parse('[{"id":"UdeRKqFVcuU","title":"Integrating Playwright with ReportPortal","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/UdeRKqFVcuU/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/UdeRKqFVcuU/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/UdeRKqFVcuU/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/UdeRKqFVcuU/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/UdeRKqFVcuU/sddefault.jpg","width":640}},"duration":"PT17M9S","published_at":"2024-04-29T16:15:15Z","statistics":{"comment_count":2,"like_count":11,"view_count":253}},{"id":"sg3u2R8jFbg","title":"Revolutionizing Testing: Merkle\'s Journey to Success with ReportPortal","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/sg3u2R8jFbg/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/sg3u2R8jFbg/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/sg3u2R8jFbg/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/sg3u2R8jFbg/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/sg3u2R8jFbg/sddefault.jpg","width":640}},"duration":"PT36M9S","published_at":"2023-06-28T14:11:39Z","statistics":{"comment_count":8,"like_count":25,"view_count":1001}},{"id":"AKA_O8lcIdc","title":"Discover the Power of ReportPortal: A Quick Overview","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/AKA_O8lcIdc/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/AKA_O8lcIdc/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/AKA_O8lcIdc/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/AKA_O8lcIdc/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/AKA_O8lcIdc/sddefault.jpg","width":640}},"duration":"PT3M56S","published_at":"2023-04-14T15:08:01Z","statistics":{"like_count":15,"view_count":947}},{"id":"MqRixlqeA_U","title":"ML-Analyzer improvements in 5.6 ReportPortal","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/MqRixlqeA_U/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/MqRixlqeA_U/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/MqRixlqeA_U/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/MqRixlqeA_U/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/MqRixlqeA_U/sddefault.jpg","width":640}},"duration":"PT11M28S","published_at":"2021-12-02T17:02:38Z","statistics":{"comment_count":3,"like_count":12,"view_count":1130}},{"id":"iXHQEROwyJg","title":"ReportPortal.io - 5.4 and 5.5 Presentation #reportportal #AI #testautomation","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/iXHQEROwyJg/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/iXHQEROwyJg/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/iXHQEROwyJg/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/iXHQEROwyJg/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/iXHQEROwyJg/sddefault.jpg","width":640}},"duration":"PT11M6S","published_at":"2021-08-24T07:54:14Z","statistics":{"comment_count":4,"like_count":13,"view_count":1515}},{"id":"0kh-hPRJAs4","title":"ML-Analyzer improvements in 5.4.","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/0kh-hPRJAs4/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/0kh-hPRJAs4/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/0kh-hPRJAs4/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/0kh-hPRJAs4/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/0kh-hPRJAs4/sddefault.jpg","width":640}},"duration":"PT11M20S","published_at":"2021-06-30T13:40:26Z","statistics":{"comment_count":1,"like_count":11,"view_count":654}},{"id":"Xci19TAiO50","title":"What is ReportPortal in 3 minutes?","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/Xci19TAiO50/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/Xci19TAiO50/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/Xci19TAiO50/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/Xci19TAiO50/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/Xci19TAiO50/sddefault.jpg","width":640}},"duration":"PT3M49S","published_at":"2021-04-22T12:59:53Z","statistics":{"comment_count":10,"like_count":82,"view_count":33262}},{"id":"HUNvNv-q1XE","title":"[EN] New ML-based Analyzer in ReporPortal 5.1+ for fail categorization.","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/HUNvNv-q1XE/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/HUNvNv-q1XE/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/HUNvNv-q1XE/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/HUNvNv-q1XE/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/HUNvNv-q1XE/sddefault.jpg","width":640}},"duration":"PT12M1S","published_at":"2020-05-22T12:38:05Z","statistics":{"comment_count":1,"like_count":21,"view_count":2150}},{"id":"uclswtBgmaw","title":"4.1-4.2 features in ReportPortal.io","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/uclswtBgmaw/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/uclswtBgmaw/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/uclswtBgmaw/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/uclswtBgmaw/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/uclswtBgmaw/sddefault.jpg","width":640}},"duration":"PT10M","published_at":"2018-10-02T19:07:41Z","statistics":{"comment_count":3,"like_count":30,"view_count":3731}},{"id":"v4G2vofPTUs","title":"4.0 RC - ReportPortal.io Community Meet-up #7","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/v4G2vofPTUs/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/v4G2vofPTUs/hqdefault.jpg","width":480},"medium":{"height":180,"url":"https://i.ytimg.com/vi/v4G2vofPTUs/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/v4G2vofPTUs/sddefault.jpg","width":640}},"duration":"PT35M25S","published_at":"2017-12-26T16:47:37Z","statistics":{"comment_count":2,"like_count":24,"view_count":1687}},{"id":"2eXKqHOPgWA","title":"[EN] Machine Learning helps to work with your test automation by Dzmitry Humianiuk, Vilnius 2017","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/2eXKqHOPgWA/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/2eXKqHOPgWA/hqdefault.jpg","width":480},"medium":{"height":180,"url":"https://i.ytimg.com/vi/2eXKqHOPgWA/mqdefault.jpg","width":320}},"duration":"PT39M53S","published_at":"2017-11-11T15:56:12Z","statistics":{"comment_count":1,"like_count":18,"view_count":3033}},{"id":"d2ekWI2exZ4","title":"[EN] ReportPortal + Machine Learning details","thumbnail":{"default":{"height":90,"url":"https://i.ytimg.com/vi/d2ekWI2exZ4/default.jpg","width":120},"high":{"height":360,"url":"https://i.ytimg.com/vi/d2ekWI2exZ4/hqdefault.jpg","width":480},"maxres":{"height":720,"url":"https://i.ytimg.com/vi/d2ekWI2exZ4/maxresdefault.jpg","width":1280},"medium":{"height":180,"url":"https://i.ytimg.com/vi/d2ekWI2exZ4/mqdefault.jpg","width":320},"standard":{"height":480,"url":"https://i.ytimg.com/vi/d2ekWI2exZ4/sddefault.jpg","width":640}},"duration":"PT1H39M23S","published_at":"2017-11-06T21:07:55Z","statistics":{"comment_count":14,"like_count":102,"view_count":15250}}]');const O=(0,c.WP)(["youtube"]),L=()=>{var t;const{0:e,1:i}=(0,a.useState)(!1),{0:l,1:n}=(0,a.useState)(null),o=(0,A.useMediaQuery)({query:c.Z0}),s=(0,a.useMemo)((()=>(t=>t.map((t=>{var e,i;let{id:a,title:l,duration:n,published_at:r,statistics:o,thumbnail:s}=t;return{id:a,title:l,duration:n,publishedAt:r,viewCount:o.view_count,imageSrc:(null===(e=s.maxres)||void 0===e?void 0:e.url)||(null===(i=s.medium)||void 0===i?void 0:i.url)}})))(U)),[]),m=(0,a.useCallback)((t=>()=>{n(t),i(!0)}),[]),u=(0,a.useCallback)((()=>{n(null),i(!1)}),[]);return a.createElement("div",{className:O()},a.createElement("div",{className:"container"},a.createElement(y.E,{title:"Explore ReportPortal on YouTube",subtitle:"Your source for tutorials, event recordings, and documentation guides"}),o?a.createElement(x.l,{buttonColor:"black",autoplay:!1},null===(t=P()(s,4))||void 0===t?void 0:t.map(((t,e)=>a.createElement("div",{key:e,className:"slide"},t.map((t=>a.createElement(Z,Object.assign({key:t.id,openEmbedVideo:m(t.id)},t)))))))):a.createElement("div",{className:O("__video-block")},s.map((t=>a.createElement(Z,Object.assign({key:t.id,openEmbedVideo:m(t.id)},t))))),a.createElement(T.B,{isOpen:e,embedId:l,onClick:u}),a.createElement(r.r,{className:v()(O("__button"),"btn btn--outline btn--large"),to:"https://www.youtube.com/@ReportPortal"},"Watch more on YouTube")))};var G=i(3269),B=i.p+"static/improve-core-609d950bcc5510197e3cb12804965e89.svg",J=i.p+"static/boost-agents-5f1aadfec532503c7eabe4aed85655a3.svg",z=i.p+"static/enhance-integrations-76b5189b9d0ff99a089cadd01d6ccbb7.svg",F=i.p+"static/release-notes-c0057f601e4af71662d78257b698b981.svg";const X=[{itemTitle:"Improve the core",description:"Enhance the ReportPortal application directly. Share your skills to make the platform better.",link:"https://github.com/reportportal/reportportal/wiki/Contribution",linkText:"Learn more",icon:B},{itemTitle:"Boost agents",description:"Make testing smoother by improving agents. Help us maintain compatibility and add features.",link:"https://github.com/reportportal/reportportal/wiki/Contribution",linkText:"Learn more",icon:J},{itemTitle:"Enhance integrations",description:"Streamline workflows by enhancing integrations. Contribute to connect ReportPortal with other tools.",link:"https://github.com/reportportal/reportportal/wiki/Contribution",linkText:"Learn more",icon:z}],V=[{itemTitle:"Installation guides",description:"Your roadmap to successfully setting up ReportPortal. Learn how to install, configure, and optimize our platform for your specific needs.",link:c.WU+"/category/installation-steps",linkText:"Open in Documentation",icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjN0I2OEVFIiBmaWxsLW9wYWNpdHk9Ii4xIiByeD0iMzAiLz48cGF0aCBmaWxsPSIjNTdGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMSAyMGExIDEgMCAwIDAtMiAwdjcuMTcybC0yLjAyNi0yLjAyNmExIDEgMCAwIDAtMS40MTQgMS40MTRMMzAgMzFsNC40NC00LjQ0YTEgMSAwIDEgMC0xLjQxMy0xLjQxNUwzMSAyNy4xNzJWMjBaTTIxIDM1aDE4djRIMjF2LTRabS0yIDBhMiAyIDAgMCAxIDItMmgxOGEyIDIgMCAwIDEgMiAydjRhMiAyIDAgMCAxLTIgMkgyMWEyIDIgMCAwIDEtMi0ydi00WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"},{itemTitle:"Developer’s guide",description:"In-depth documentation tailored to developers, offering insights into ReportPortal's architecture, APIs, and customization options to maximize its potential.",link:c.WU+"/category/developers-guides",linkText:"Open in Documentation",icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjkwIiBmaWxsLW9wYWNpdHk9Ii4xNSIgcng9IjMwIi8+PHBhdGggZmlsbD0iI0Y5MCIgZD0iTTIzIDM2YTEgMSAwIDAgMSAxLTFoOGExIDEgMCAxIDEgMCAyaC04YTEgMSAwIDAgMS0xLTFabTEtNWExIDEgMCAxIDAgMCAyaDVhMSAxIDAgMSAwIDAtMmgtNVoiLz48cGF0aCBmaWxsPSIjRjkwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMSA0MmEyIDIgMCAwIDEtMi0yVjIwYTIgMiAwIDAgMSAyLTJoMThhMiAyIDAgMCAxIDIgMnYyMGEyIDIgMCAwIDEtMiAySDIxWm0wLTJWMjBoMTR2MjBIMjFabTE2LTIwaDJ2MjBoLTJWMjBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="},{itemTitle:"Release notes",description:"Stay informed about the latest updates with our detailed release notes. Discover the newest features and improvements in each ReportPortal version.",link:c.WU+"/category/releases",linkText:"Open in Documentation",icon:F}],Q=()=>a.createElement("div",{className:"community"},a.createElement(g,null),a.createElement(o.e,{title:"GitHub contribution",subtitle:"Explore our GitHub activities and become a contributor to pull ReportPortal on a new level of test automation",cardsInfo:X},a.createElement(f,null)),a.createElement(_,null),a.createElement(M,null),a.createElement(o.e,{title:"Documentation and resources",subtitle:"Explore our guides, tutorials and other materials",cardsInfo:V,largePadding:!0},a.createElement(r.r,{className:"btn btn--outline btn--small go-to-documentation-button",to:c.WU},"Go to Documentation")),a.createElement(j,null),a.createElement(L,null),a.createElement(n.J,{startFreeTrialUrl:"/contact-us/community"}),a.createElement(G.G,{isViewAll:!0}),a.createElement(s.r,null));var Y=()=>a.createElement(l.Ar,{seoData:c.bv.community},a.createElement(Q,null))},52353:function(t){t.exports=function(t){return void 0===t}}}]);
//# sourceMappingURL=component---src-pages-community-tsx-fe74a22c5a360cead5c1.js.map