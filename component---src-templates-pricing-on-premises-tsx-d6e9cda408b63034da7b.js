(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[154],{12226:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var a=n(67294),o=n(94184),r=n.n(o);const i=e=>{let{type:t,value:n,text:o,benefit:i,progressNumber:s}=e;return a.createElement("div",{className:r()("icon-block",t,{[t+"-"+s]:s})},a.createElement("span",{className:r()("icon-block__number",{"icon-block__number--only":!(o&&i)})},n),a.createElement("span",{className:"icon-block__text"},o),a.createElement("span",{className:"icon-block__benefit"},i))}},37703:function(e,t,n){"use strict";n.d(t,{y:function(){return O}});var a,o=n(67294),r=n(94184),i=n.n(r),s=n(38071),l=n(62920),c=n(29646),m=n(97662),p=n(37687),u=n(67453),d=n(70631),h=n(3452),f=n(33964);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}var v=function(e){return o.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none"},e),a||(a=o.createElement("path",{fill:"#009DBB",d:"M14 2a12 12 0 1 0 12 12A12.013 12.013 0 0 0 14 2Zm0 22.154A10.154 10.154 0 1 1 24.154 14 10.165 10.165 0 0 1 14 24.154Zm1.846-4.616a.923.923 0 0 1-.923.924 1.846 1.846 0 0 1-1.846-1.847V14a.923.923 0 0 1 0-1.846A1.846 1.846 0 0 1 14.923 14v4.615a.923.923 0 0 1 .923.924ZM12.154 8.923a1.385 1.385 0 1 1 2.77 0 1.385 1.385 0 0 1-2.77 0Z"})))};const y=(0,s.WP)(["time-scale"]),b=e=>{let{data:t,isShifted:n=!1}=e;return o.createElement("div",{className:i()(y("__wrapper"),{[y("__wrapper-shifted")]:n})},o.createElement("div",{className:i()(y("__periods-wrapper"),{[y("__periods-wrapper--shifted")]:n})},t.map((e=>o.createElement("div",{className:y("__period"),key:e.time},o.createElement("span",null,e.time)," hours")))),o.createElement("div",{className:i()(y("__items-wrapper"),{[y("__items-wrapper--shifted")]:n})},t.map((e=>o.createElement("ul",{className:y("__list"),key:e.time},e.items.map((e=>o.createElement("li",{key:e},e))))))))};var k=n(12226);const E=(0,s.WP)(["pentagon-card"]),w=e=>{let{hours:t,discount:n,pricing:{currency:a,period:r,prices:l},contactLink:c,progressNumber:m}=e;const p=t?{value:t,text:"Professional",benefit:"Service Points"}:{value:"Open Source"};return o.createElement("div",{className:E("__wrapper")},o.createElement(k.H,Object.assign({type:"pentagon",progressNumber:m},p)),o.createElement("div",{className:E("__price")},t?o.createElement(o.Fragment,null,a,(0,s.pw)(l["package"+t][n])," ",o.createElement("span",null,"/ ",r)):l.openSource),o.createElement(u.r,{to:c},o.createElement("button",{type:"button",className:i()(E("__contact-button"),"btn","btn--"+(t?"primary":"outline"),"btn--large")},t?"Contact us":"Start now")))},P={"on-premises":"/installation",d4j:"https://drill4j.github.io/how-to-start/",hlm:"https://github.com/healenium/healenium-web/blob/master/README.md",qasp:"https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server"},_={openSource:"Open source",package25:"Package 25",package60:"Package 60",package160:"Package 160"},S={[_.openSource]:"Open\nsource",[_.package25]:"Pack.\n25",[_.package60]:"Pack.\n60",[_.package160]:"Pack.\n160"},C=[0,25,60,160];var N=n(39693),q=n.n(N);const F=e=>[{btn:"Start now",href:P[e],mode:"outline"},{btn:"Contact us",href:"/contact-us/"+e+"/compare/package-25",compareLink:"/contact-us/on-premises/compare/package-25/",mode:"outline"},{btn:"Contact us",href:"/contact-us/"+e+"/compare/package-60",compareLink:"/contact-us/on-premises/compare/package-60/",mode:"outline"},{btn:"Contact us",href:"/contact-us/"+e+"/compare/package-160",compareLink:"/contact-us/on-premises/compare/package-160/",mode:"outline"}],D=e=>q()([{feature:"Professional Service Points",description:"A Professional Service Point is a blended hour included into your subscription plan, which may consist of the time of various specialists, whether it is the time of a business analyst, architect, lead automation engineer, DevOps (System Engineer) or performance engineer. \n\nIt can be used for various purposes related to ReportPortal installation, configuration, integration, customization, feature implementation, TAF updates, test case implementation, etc.",openSource:!1,package25:"25 points",package60:"60 points",package160:"160 points"},{feature:"Minimum commitment",description:"Minimum commitment of time for use of a certain subscription package.",openSource:!1,package25:"6 months",package60:"6 months",package160:"3 months"},"on-premises"===e&&{feature:"Premium features",description:"Advanced features which come on top of Free Open Source edition. See the *List of features* and description.",openSource:!1,package25:!1,package60:!0,package160:!0,href:s.WU+"/terms-and-conditions/PremiumFeatures/"},{footer:!0}]),A=(0,s.WP)(["offer-page-wrapper"]),O=e=>{let{hero:{title:t,subtitle:n,description:a,offerType:r},page:s,pagePath:g,timeScaleData:y,faqData:k,contactUsLink:E,utilizationDescription:N,faqLink:q,isScaleShifted:O=!1,pricing:I}=e;const{buttons:L,isDiscount:W,toggleDiscount:x}=(0,l.J)(s);return o.createElement(o.Fragment,null,o.createElement(d.y,{title:t,subtitle:n,buttons:L,activeButton:r,offerType:r,description:a,switcherProps:{isDiscount:W,toggleDiscount:x,messageInactive:"Quarterly",messageActive:"Yearly (Save 5%)"}}),o.createElement("div",{className:A("__pentagons")},(e=>[P[e],"/contact-us/"+e+"/package-25","/contact-us/"+e+"/package-60","/contact-us/"+e+"/package-160"])(g).map(((e,t)=>{const n=C[t],a=W?"yearly":"quarterly",r="on-premises"===g&&C[t]?e+"/"+a:e;return o.createElement(w,{key:n,pricing:I,hours:n,discount:a,progressNumber:t+1,contactLink:r})}))),o.createElement("div",{className:A("__utilization")},o.createElement("h2",null,"Indicative Professional Service Point utilization"),o.createElement("div",{className:A("__utilization-subtitle")},N),o.createElement(b,{data:y,isShifted:O}),o.createElement("div",{className:A("__subscription-info")},o.createElement(v,null),o.createElement("div",null,"Subscription plan Professional Service Points are accumulated monthly and last depending on the plan selected.",o.createElement(u.r,{to:"#faq"},"More details in FAQ")))),o.createElement(h.N2,{dataPlans:D(g),columns:_,footerButtons:F(g),isCollapsibleOnMobile:!1,mobileColumns:S}),"pricing"===s&&o.createElement("div",{className:i()(A("__trusted-organizations-container"),"container")},o.createElement(m.v,null)),o.createElement("div",{className:A("__faq-container")},o.createElement(f.B,{items:k,titleId:"faq",documentationLink:q,showMoreInfoLink:"qasp"!==g})),o.createElement(c.Bp,null,o.createElement(p.j,{title:"Do you still have questions?",linkTitle:"Contact us",link:E})))}},2716:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(67294),o=n(29646),r=n(37703);const i=[{time:"1+",items:["ReportPortal training","Simple query resolved"]},{time:"20+",items:["Simple deployment on AWS with DB","Configuration of performance monitoring","Support of an existing Test Framework"]},{time:"120+",items:["Plugin implementation","Integration with a new Test Framework"]}],s=[{key:1,label:"What is the validity period for Professional Service Points?",children:a.createElement("div",null,"The Professional Service Points included into the subscription plan are accumulated on a monthly basis and are valid for the payment term only. If quarterly payment option is chosen, no more than 3 monthly amounts of Professional Service Points can be accumulated or used prospectively; if yearly payment option is chosen, up to 12 monthly amounts of Professional Service Points can be accumulated or used prospectively.")},{key:2,label:"How is my subscription charged?",children:a.createElement("div",null,"Company will pay a fixed fee, in advance, based on the service level elected in the Order Form.")},{key:3,label:"Can I pay monthly?",children:a.createElement(a.Fragment,null,a.createElement("div",null,"Unfortunately, not for now."),a.createElement("div",null,"But we work to make it possible. Currently we do semi-manual invoice processing which requires effort of the operations and accounting teams."),a.createElement("div",null,"Monthly payments will be available as soon as we add online payment capabilities. This is our highest priority at the moment."))},{key:4,label:"What payment methods do you accept?",children:a.createElement("div",null,"As for now, the payment can be made via bank transfer (ACH, Wire) or check. Later on, we plan to provide alternative forms of payment.")},{key:5,label:"Can I change billing plans at any time?",children:a.createElement(a.Fragment,null,a.createElement("div",null,"Unfortunately, no."),a.createElement("div",null,"You can't downgrade your billing plan at any time."),a.createElement("div",null,'However, if you need more Professional Service Points, we can discuss the plan upgrade. For that, please, press "Get a Quote" in the upper right corner of our landing page. We\'ll be happy to help you to find the most suitable plan for your team and provide a quote.'))},{key:6,label:"What if I overuse or underuse my monthly limit?",children:a.createElement(a.Fragment,null,a.createElement("div",null,"If Company seeks to consume more Professional Service Points than have been contracted for according to the Order, overage fees of 25% on a per Professional Service Point basis will apply."),a.createElement("div",null,"Professional Service Points may be used for the duration of the payment term, and expire at that time. For example, annual upfront payment entitles Company to use the contracted monthly service points at any point in the year. For a quarterly upfront payment, service points must be used within three months."))},{key:7,label:"What are the business hours of the service team?",children:a.createElement("div",null,"Unless otherwise agreed in writing, ReportPortal service personnel are located in the CET time zone (UTC +1). Commercially reasonable efforts will be made to find overlap times where synchronous communication with a Company is required. For purposes of finding overlap times, the Company agrees to make its personnel available between 8 AM and 6 PM when synchronous communication is required.")},{key:8,label:"I need a quote. How can I request one?",children:a.createElement(a.Fragment,null,a.createElement("div",null,'Just press "Get a Quote" in the upper right corner of our landing page.'),a.createElement("div",null,"We'll be happy to help you to find the most suitable plan for your team and provide a quote."))}],l=e=>a.createElement(r.y,{hero:{title:"ReportPortal services pricing",subtitle:"Flexible options for small teams to global enterprises",description:"ReportPortal instance deployed on-premise behind your firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured.",offerType:"On-Premises"},page:"pricing",pagePath:"on-premises",timeScaleData:i,faqData:s,pricing:e,contactUsLink:"/contact-us/general",utilizationDescription:"Professional Service Point is the minimum for any support request. Unless otherwise noted, a Professional Service Point is equal to an hour of work or fraction thereof"});var c=n(38071);var m=e=>{let{pageContext:t}=e;return a.createElement(o.Ar,{seoData:c.bv.onPremises,className:"offer-page-wrapper"},a.createElement(l,t))}},39693:function(e){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,a=0,o=[];++t<n;){var r=e[t];r&&(o[a++]=r)}return o}}}]);
//# sourceMappingURL=component---src-templates-pricing-on-premises-tsx-d6e9cda408b63034da7b.js.map