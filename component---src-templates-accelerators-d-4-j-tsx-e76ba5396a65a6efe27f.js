"use strict";(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[34],{12226:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(67294),i=a(94184),r=a.n(i);const l=e=>{var t;let{type:a,title:i,description:l,progressNumber:o}=e;const[s,c]=null!==(t=null==l?void 0:l.split("\\n"))&&void 0!==t?t:[];return n.createElement("div",{className:r()("icon-block",a,{[a+"-"+o]:o})},n.createElement("span",{className:r()("icon-block__number",{"icon-block__number--only":!l})},i),s&&n.createElement("span",{className:"icon-block__text"},s),c&&n.createElement("span",{className:"icon-block__benefit"},c))}},47494:function(e,t,a){a.d(t,{y:function(){return T}});var n,i=a(67294),r=a(30255),l=a(94184),o=a.n(l),s=a(95761),c=a(62920),p=a(29646),m=a(97662),u=a(37687),d=a(67453),h=a(987),f=a(72463),y=a(33964),v=a(93931);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}var b=function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none"},e),n||(n=i.createElement("path",{fill:"#009DBB",d:"M14 2a12 12 0 1 0 12 12A12.013 12.013 0 0 0 14 2Zm0 22.154A10.154 10.154 0 1 1 24.154 14 10.165 10.165 0 0 1 14 24.154Zm1.846-4.616a.923.923 0 0 1-.923.924 1.846 1.846 0 0 1-1.846-1.847V14a.923.923 0 0 1 0-1.846A1.846 1.846 0 0 1 14.923 14v4.615a.923.923 0 0 1 .923.924ZM12.154 8.923a1.385 1.385 0 1 1 2.77 0 1.385 1.385 0 0 1-2.77 0Z"})))},E=a(75349),w=a(5503),k=a(85868),P=a(12226);const _=(0,s.WP)(["pentagon-card"]),S=e=>{var t,a,n;let{plan:r,contactLink:l,progressNumber:c,pricingValue:p}=e;return i.createElement("div",{className:_("__wrapper")},i.createElement(P.H,{title:r.title,description:r.description,type:"pentagon",progressNumber:c}),i.createElement("div",{className:_("__price")},null!==(t=r.pricingInfo)&&void 0!==t?t:i.createElement(i.Fragment,null,null===(a=r.price)||void 0===a?void 0:a.currency,(0,s.pw)(p)," ",i.createElement("span",null,"/ ",null===(n=r.price)||void 0===n?void 0:n.period))),i.createElement(d.r,{to:l},i.createElement("button",{type:"button",className:o()(_("__contact-button"),"btn","btn--"+r.cta.type,"btn--large")},r.cta.link.title)))},C=(0,s.WP)(["time-scale"]),D=e=>{let{data:t,isShifted:a=!1}=e;return i.createElement("div",{className:o()(C("__wrapper"),{[C("__wrapper-shifted")]:a})},i.createElement("div",{className:o()(C("__periods-wrapper"),{[C("__periods-wrapper--shifted")]:a})},t.map((e=>i.createElement("div",{className:C("__period"),key:e.time},i.createElement("span",null,e.time)," hours")))),i.createElement("div",{className:o()(C("__items-wrapper"),{[C("__items-wrapper--shifted")]:a})},t.map((e=>i.createElement("ul",{className:C("__list"),key:e.time},e.items.map((e=>i.createElement("li",{key:e},e))))))))},N=(0,s.WP)(["offer-page-wrapper"]),T=e=>{let{hero:{title:t,subtitle:a,description:n,offerType:l},page:g,pagePath:P,timeScaleData:_,plans:C,comparePlans:T,faqData:q,contactUsLink:A,utilizationDescription:I,faqLink:F,isScaleShifted:H=!1}=e;const{buttons:L,isYearlyPlanType:W,togglePlanType:x}=(0,c.J)(g),[O,z]=(0,E.Y)(),U=(0,k.F)(),M=W?"yearly":"quarterly",Q="pricing"===g,j=(0,w.k)(s.pP,U);return i.createElement(i.Fragment,null,i.createElement(h.y,{title:t,subtitle:a,buttons:L,activeButton:l,offerType:l,description:n,switcherProps:{isYearlyPlanType:W,togglePlanType:x,messageInactive:"Quarterly",messageActive:"Yearly (Save 5%)"},isAnimationEnabled:U}),i.createElement(r.E.div,Object.assign({className:N("__pentagons"),ref:O},j({isInView:z,delay:.6,additionalEffects:{hiddenAdditional:{y:50},enterAdditional:{y:0}}})),C.items.map(((e,t)=>{var a;const n=null===(a=e.price)||void 0===a?void 0:a[M],r=e.cta.link.url,l=e.isContactUsURLEndsWithPlanType?r+"/"+M:r;return i.createElement(S,{plan:e,key:e.title,progressNumber:t+1,pricingValue:n,contactLink:l})}))),i.createElement("div",{className:N("__utilization")},i.createElement("h2",null,"Indicative Professional Service Point utilization"),i.createElement("div",{className:N("__utilization-subtitle")},I),i.createElement(D,{data:_,isShifted:H}),i.createElement("div",{className:N("__subscription-info")},i.createElement(b,null),i.createElement("div",null,"Subscription plan Professional Service Points are accumulated monthly and last depending on the plan selected.",i.createElement(d.r,{to:"#faq"},"More details in FAQ")))),i.createElement(f.N2,{plans:T,isCollapsibleOnMobile:!1}),Q&&i.createElement(i.Fragment,null,i.createElement("div",{className:o()(N("__trusted-organizations-container"),"container")},i.createElement(m.v,null)),i.createElement("div",{className:o()(N("__certificates-container"),"container")},i.createElement(v.k,{subtitle:"Ensuring the highest security standards",shouldDisplayLink:!0}))),i.createElement("div",{className:N("__faq-container")},i.createElement(y.B,{items:q,titleId:"faq",documentationLink:F,showMoreInfoLink:"qasp"!==P})),i.createElement(p.Bp,null,i.createElement(u.j,{title:"Do you still have questions?",linkTitle:"Contact us",link:A})))}},61998:function(e,t,a){a.d(t,{Dx:function(){return h},FO:function(){return d},uG:function(){return p}});var n=a(67294),i=a(47494),r=a(95761),l=a(14160);const o=[{time:20,items:["Deploy and configure Drill4J services"]},{time:40,items:["Setup Drill4J Application Agent(s)","Setup Drill4J Automated Testing Agent(s)","Support"]},{time:80,items:["Data gather dry-run","Create integration plan"]}],s=[{key:1,label:"What is the validity period for Professional Service Points?",children:n.createElement("div",null,"The Professional Service Points included into the subscription plan are accumulated on a monthly basis and are valid for the payment term only. If quarterly payment option is chosen, no more than 3 monthly amounts of Professional Service Points can be accumulated or used prospectively; if yearly payment option is chosen, up to 12 monthly amounts of Professional Service Points can be accumulated or used prospectively.")},{key:2,label:"How is my subscription charged?",children:n.createElement("div",null,"Company will pay a fixed fee, in advance, based on the service level elected in the Order Form.")},{key:3,label:"Can I pay monthly?",children:n.createElement(n.Fragment,null,n.createElement("div",null,"Unfortunately, not for now."),n.createElement("div",null,"But we work to make it possible. Currently we do semi-manual invoice processing which requires effort of the operations and accounting teams."),n.createElement("div",null,"Monthly payments will be available as soon as we add online payment capabilities. This is our highest priority at the moment."))},{key:4,label:"What payment methods do you accept?",children:n.createElement("div",null,"As for now, the payment can be made via bank transfer (ACH, Wire) or check. Later on, we plan to provide alternative forms of payment.")},{key:5,label:"Can I change billing plans at any time?",children:n.createElement(n.Fragment,null,n.createElement("div",null,"Unfortunately, no."),n.createElement("div",null,"You can't downgrade your billing plan at any time."),n.createElement("div",null,'However, if you need more Professional Service Points, we can discuss the plan upgrade. For that, please, press "Get a Quote" in the upper right corner of our landing page. We\'ll be happy to help you to find the most suitable plan for your team and provide a quote.'))},{key:6,label:"What if I overuse or underuse my monthly limit?",children:n.createElement(n.Fragment,null,n.createElement("div",null,"If Company seeks to consume more Professional Service Points than have been contracted for according to the Order, overage fees of 25% on a per Professional Service Point basis will apply."),n.createElement("div",null,"Professional Service Points may be used for the duration of the payment term, and expire at that time. For example, annual upfront payment entitles Company to use the contracted monthly service points at any point in the year. For a quarterly upfront payment, service points must be used within three months."))},{key:7,label:"What are the business hours of the service team?",children:n.createElement("div",null,"Unless otherwise agreed in writing, ReportPortal service personnel are located in the CET time zone (UTC +1). Commercially reasonable efforts will be made to find overlap times where synchronous communication with a Company is required. For purposes of finding overlap times, the Company agrees to make its personnel available between 8 AM and 6 PM when synchronous communication is required.")}],c=[{time:"4+",items:["Maintenance and Monitoring of Existing QaSpace plugin installation","Team Training and Webinars"]},{time:"15+",items:["Prioritized Bug Fixing"]},{time:"200+",items:["QaSpace plugin Custom Development Services"]}],p=()=>{const{plans:e,comparePlans:t}=(0,r.Ng)((0,l.K2)("2900297292"));return n.createElement(i.y,{hero:{title:"Explore pricing packages for our accelerators",description:"is a Jira plugin with an easy-to-use interface which specializes on QA activities, making testing as a seamless part of your Jira-based workflow.",offerType:"QaSpace"},page:"accelerators",pagePath:"qasp",timeScaleData:c,contactUsLink:"/contact-us/qasp",plans:e,comparePlans:t,faqData:s,utilizationDescription:"Our team will provide services in support of Client's use of QaSpace plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide."})},m=[{time:8,items:[n.createElement(n.Fragment,null,"Responding to Healenium support Questions")]},{time:56,items:["Updating of Healenium and supporting libraries","Integration of Healenium with CI/CD Pipelines","Team Training and Webinars"]},{time:112,items:["Healenium Custom Development Services"]}],u=[{key:1,label:"What is the validity period for Professional Service Points?",children:n.createElement("div",null,"The Professional Service Points included into the subscription plan are accumulated on a monthly basis and are valid for the payment term only. If quarterly payment option is chosen, no more than 3 monthly amounts of Professional Service Points can be accumulated or used prospectively; if yearly payment option is chosen, up to 12 monthly amounts of Professional Service Points can be accumulated or used prospectively.")},{key:2,label:"Will Healenium work with my test automation framework?",children:n.createElement("div",null,"Healenium will work with any kind of Java + Selenium-based test automation framework.")},{key:3,label:"How can I try to use the product?",children:n.createElement("div",null,"Follow installation instructions on GitHub.")},{key:4,label:"Can I use it for mobile automation?",children:n.createElement("div",null,"Yes, there is an adapter that supports Appium-based testing solutions.")}],d=()=>{const{plans:e,comparePlans:t}=(0,r.Ng)((0,l.K2)("1242552881"));return n.createElement(i.y,{hero:{title:"Explore pricing packages for our accelerators",description:"is a language agnostic proxy solution which enables self-healing capabilities by means of ML for selenium-based test cases aimed at minimization of UI fluctuations",offerType:"Healenium"},page:"accelerators",pagePath:"hlm",timeScaleData:m,plans:e,comparePlans:t,faqData:u,contactUsLink:"/contact-us/hlm",utilizationDescription:"Our team will provide services in support of Client's use of Healenium plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide",faqLink:"https://healenium.io/#rec639241711",isScaleShifted:!0})},h=()=>{const{plans:e,comparePlans:t}=(0,r.Ng)((0,l.K2)("2373911194"));return n.createElement(i.y,{hero:{title:"Explore pricing packages for our accelerators",description:"is a tool to identify testing gaps and reduce time spent on regression testing. It provides a straight path to incorporate Test Gap Analysis and Test Impact Analysis into SDLC. It makes testing efforts observable, quantifiable and measurable.",offerType:"Drill4J"},page:"accelerators",pagePath:"d4j",timeScaleData:o,plans:e,comparePlans:t,faqData:s,contactUsLink:"/contact-us/d4j",utilizationDescription:"Our team will provide services in support of Client's use of Drill4J plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide",faqLink:"https://drill4j.github.io/docs/faq",isScaleShifted:!0})}},21897:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(67294),i=a(29646),r=a(61998),l=a(95761);t.default=()=>n.createElement(i.Ar,{className:"offer-page-wrapper"},n.createElement(r.Dx,null));const o=()=>{const{title:e,description:t}=l.SEO_DATA.d4j;return n.createElement(i.pQ,{title:e,description:t})}}}]);
//# sourceMappingURL=component---src-templates-accelerators-d-4-j-tsx-e76ba5396a65a6efe27f.js.map