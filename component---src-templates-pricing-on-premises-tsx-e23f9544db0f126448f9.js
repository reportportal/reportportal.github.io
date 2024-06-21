"use strict";(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[154],{12226:function(e,t,n){n.d(t,{H:function(){return l}});var a=n(67294),r=n(94184),i=n.n(r);const l=e=>{var t;let{type:n,title:r,description:l,progressNumber:o}=e;const[s,c]=null!==(t=null==l?void 0:l.split("\\n"))&&void 0!==t?t:[];return a.createElement("div",{className:i()("icon-block",n,{[n+"-"+o]:o})},a.createElement("span",{className:i()("icon-block__number",{"icon-block__number--only":!l})},r),s&&a.createElement("span",{className:"icon-block__text"},s),c&&a.createElement("span",{className:"icon-block__benefit"},c))}},47494:function(e,t,n){n.d(t,{y:function(){return k}});var a,r=n(67294),i=n(94184),l=n.n(i),o=n(9719),s=n(62920),c=n(29646),m=n(97662),p=n(37687),u=n(67453),d=n(70631),h=n(89072),f=n(33964);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}var y=function(e){return r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none"},e),a||(a=r.createElement("path",{fill:"#009DBB",d:"M14 2a12 12 0 1 0 12 12A12.013 12.013 0 0 0 14 2Zm0 22.154A10.154 10.154 0 1 1 24.154 14 10.165 10.165 0 0 1 14 24.154Zm1.846-4.616a.923.923 0 0 1-.923.924 1.846 1.846 0 0 1-1.846-1.847V14a.923.923 0 0 1 0-1.846A1.846 1.846 0 0 1 14.923 14v4.615a.923.923 0 0 1 .923.924ZM12.154 8.923a1.385 1.385 0 1 1 2.77 0 1.385 1.385 0 0 1-2.77 0Z"})))};const b=(0,o.WP)(["time-scale"]),g=e=>{let{data:t,isShifted:n=!1}=e;return r.createElement("div",{className:l()(b("__wrapper"),{[b("__wrapper-shifted")]:n})},r.createElement("div",{className:l()(b("__periods-wrapper"),{[b("__periods-wrapper--shifted")]:n})},t.map((e=>r.createElement("div",{className:b("__period"),key:e.time},r.createElement("span",null,e.time)," hours")))),r.createElement("div",{className:l()(b("__items-wrapper"),{[b("__items-wrapper--shifted")]:n})},t.map((e=>r.createElement("ul",{className:b("__list"),key:e.time},e.items.map((e=>r.createElement("li",{key:e},e))))))))};var E=n(12226);const w=(0,o.WP)(["pentagon-card"]),_=e=>{var t,n,a;let{plan:i,contactLink:s,progressNumber:c,pricingValue:m}=e;return r.createElement("div",{className:w("__wrapper")},r.createElement(E.H,{title:i.title,description:i.description,type:"pentagon",progressNumber:c}),r.createElement("div",{className:w("__price")},null!==(t=i.pricingInfo)&&void 0!==t?t:r.createElement(r.Fragment,null,null===(n=i.price)||void 0===n?void 0:n.currency,(0,o.pw)(m)," ",r.createElement("span",null,"/ ",null===(a=i.price)||void 0===a?void 0:a.period))),r.createElement(u.r,{to:s},r.createElement("button",{type:"button",className:l()(w("__contact-button"),"btn","btn--"+i.cta.type,"btn--large")},i.cta.link.title)))},P=(0,o.WP)(["offer-page-wrapper"]),k=e=>{let{hero:{title:t,subtitle:n,description:a,offerType:i},page:o,pagePath:v,timeScaleData:b,plans:E,comparePlans:w,faqData:k,contactUsLink:N,utilizationDescription:S,faqLink:q,isScaleShifted:C=!1,isAccelerator:F=!1}=e;const{buttons:D,isDiscount:I,toggleDiscount:A}=(0,s.J)(o),W=I?"yearly":"quarterly";return r.createElement(r.Fragment,null,r.createElement(d.y,{title:t,subtitle:n,buttons:D,activeButton:i,offerType:i,description:a,switcherProps:{isDiscount:I,toggleDiscount:A,messageInactive:"Quarterly",messageActive:"Yearly (Save 5%)"}}),r.createElement("div",{className:P("__pentagons")},E.items.map(((e,t)=>{var n;const a=null===(n=e.price)||void 0===n?void 0:n[W],i=e.cta.link.url,l=!F&&a?i+"/"+W:i;return r.createElement(_,{plan:e,key:e.title,progressNumber:t+1,pricingValue:a,contactLink:l})}))),r.createElement("div",{className:P("__utilization")},r.createElement("h2",null,"Indicative Professional Service Point utilization"),r.createElement("div",{className:P("__utilization-subtitle")},S),r.createElement(g,{data:b,isShifted:C}),r.createElement("div",{className:P("__subscription-info")},r.createElement(y,null),r.createElement("div",null,"Subscription plan Professional Service Points are accumulated monthly and last depending on the plan selected.",r.createElement(u.r,{to:"#faq"},"More details in FAQ")))),r.createElement(h.N2,{plans:w,isCollapsibleOnMobile:!1}),"pricing"===o&&r.createElement("div",{className:l()(P("__trusted-organizations-container"),"container")},r.createElement(m.v,null)),r.createElement("div",{className:P("__faq-container")},r.createElement(f.B,{items:k,titleId:"faq",documentationLink:q,showMoreInfoLink:"qasp"!==v})),r.createElement(c.Bp,null,r.createElement(p.j,{title:"Do you still have questions?",linkTitle:"Contact us",link:N})))}},2716:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(29646),i=n(14160),l=n(47494),o=n(9719);const s=[{time:"1+",items:["ReportPortal training","Simple query resolved"]},{time:"20+",items:["Simple deployment on AWS with DB","Configuration of performance monitoring","Support of an existing Test Framework"]},{time:"120+",items:["Plugin implementation","Integration with a new Test Framework"]}],c=[{key:1,label:"What is the validity period for Professional Service Points?",children:a.createElement("div",null,"The Professional Service Points included into the subscription plan are accumulated on a monthly basis and are valid for the payment term only. If quarterly payment option is chosen, no more than 3 monthly amounts of Professional Service Points can be accumulated or used prospectively; if yearly payment option is chosen, up to 12 monthly amounts of Professional Service Points can be accumulated or used prospectively.")},{key:2,label:"How is my subscription charged?",children:a.createElement("div",null,"Company will pay a fixed fee, in advance, based on the service level elected in the Order Form.")},{key:3,label:"Can I pay monthly?",children:a.createElement(a.Fragment,null,a.createElement("div",null,"Unfortunately, not for now."),a.createElement("div",null,"But we work to make it possible. Currently we do semi-manual invoice processing which requires effort of the operations and accounting teams."),a.createElement("div",null,"Monthly payments will be available as soon as we add online payment capabilities. This is our highest priority at the moment."))},{key:4,label:"What payment methods do you accept?",children:a.createElement("div",null,"As for now, the payment can be made via bank transfer (ACH, Wire) or check. Later on, we plan to provide alternative forms of payment.")},{key:5,label:"Can I change billing plans at any time?",children:a.createElement(a.Fragment,null,a.createElement("div",null,"Unfortunately, no."),a.createElement("div",null,"You can't downgrade your billing plan at any time."),a.createElement("div",null,'However, if you need more Professional Service Points, we can discuss the plan upgrade. For that, please, press "Get a Quote" in the upper right corner of our landing page. We\'ll be happy to help you to find the most suitable plan for your team and provide a quote.'))},{key:6,label:"What if I overuse or underuse my monthly limit?",children:a.createElement(a.Fragment,null,a.createElement("div",null,"If Company seeks to consume more Professional Service Points than have been contracted for according to the Order, overage fees of 25% on a per Professional Service Point basis will apply."),a.createElement("div",null,"Professional Service Points may be used for the duration of the payment term, and expire at that time. For example, annual upfront payment entitles Company to use the contracted monthly service points at any point in the year. For a quarterly upfront payment, service points must be used within three months."))},{key:7,label:"What are the business hours of the service team?",children:a.createElement("div",null,"Unless otherwise agreed in writing, ReportPortal service personnel are located in the CET time zone (UTC +1). Commercially reasonable efforts will be made to find overlap times where synchronous communication with a Company is required. For purposes of finding overlap times, the Company agrees to make its personnel available between 8 AM and 6 PM when synchronous communication is required.")},{key:8,label:"I need a quote. How can I request one?",children:a.createElement(a.Fragment,null,a.createElement("div",null,'Just press "Get a Quote" in the upper right corner of our landing page.'),a.createElement("div",null,"We'll be happy to help you to find the most suitable plan for your team and provide a quote."))}],m=()=>{const{plans:e,comparePlans:t}=(0,o.Ng)((0,i.K2)("1844561584"));return a.createElement(l.y,{hero:{title:"ReportPortal services pricing",subtitle:"Flexible options for small teams to global enterprises",description:"ReportPortal instance deployed on-premise behind your firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured.",offerType:"On-Premises"},page:"pricing",pagePath:"on-premises",timeScaleData:s,plans:e,comparePlans:t,faqData:c,contactUsLink:"/contact-us/general",utilizationDescription:"Professional Service Point is the minimum for any support request. Unless otherwise noted, a Professional Service Point is equal to an hour of work or fraction thereof"})};var p=()=>a.createElement(r.Ar,{seoData:o.bv.onPremises,className:"offer-page-wrapper"},a.createElement(m,null))}}]);
//# sourceMappingURL=component---src-templates-pricing-on-premises-tsx-e23f9544db0f126448f9.js.map