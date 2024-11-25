"use strict";(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[45],{87864:function(e,t,a){a.d(t,{w:function(){return p}});var l=a(67294),n=a(94184),r=a.n(n),i=a(18872),o=a(67453),c=a(95761),s=a(71345);const u=(0,c.WP)(["pricing-card"]),p=e=>{var t,a,n,p,d;let{plan:m,listItems:y,planType:h,isFullWidth:f,dataGtm:b,isDiamond:v=!1}=e;const g=m.cta.link.url,E=null===(t=m.price)||void 0===t||null===(a=t[h+"Description"])||void 0===a?void 0:a.replace("{{currency}}",m.price.currency);return l.createElement("div",{className:r()(u(),{[u("--full-width")]:f})},l.createElement("div",null,m.isPopular&&l.createElement("div",{className:u("__popular")},"Most popular"),v&&l.createElement("div",{className:u("__diamond")}),l.createElement("div",{className:u("__title")},m.title),m.description&&l.createElement("div",{className:u("__description")},(0,c.K9)(m.description)),y&&l.createElement("ul",null,y.map((e=>l.createElement("li",{key:e},e)))),m.features&&(0,i.Z)(m.features)),l.createElement("div",{className:u("__bottom-panel")},l.createElement("div",{className:u("__price")},m.pricingInfo?l.createElement("span",{className:u("__price-value")},m.pricingInfo):l.createElement(l.Fragment,null,l.createElement("span",{className:u("__price-value")},null===(n=m.price)||void 0===n?void 0:n.currency," ",(0,c.pw)(null===(p=m.price)||void 0===p?void 0:p[h]),v&&"+"),"/ ",null===(d=m.price)||void 0===d?void 0:d.period),l.createElement("div",{className:u("__price-description")},E)),l.createElement(o.r,Object.assign({className:r()("btn","btn--"+m.cta.type,"btn--large"),to:m.isContactUsURLEndsWithPlanType?g+"/"+h:g},b&&{"data-gtm":b}),m.cta.link.title,(0,c.We)(g)&&l.createElement(s.Z,null))))}},65641:function(e,t,a){a.r(t),a.d(t,{Head:function(){return I},default:function(){return A}});var l=a(67294),n=a(29646),r=a(14160),i=a(94184),o=a.n(i),c=a(97662),s=a(72463),u=a(33964),p=a(37687),d=a(987),m=a(62920),y=a(95761),h=a(93931),f=a(85868),b=a(30255),v=a(87864),g=a(75349),E=a(5503);const w=(0,y.WP)(["pricing-cards"]),_=e=>{let{plans:t,isYearlyPlanType:a,isAnimationEnabled:n}=e;const r=a?"yearly":"quarterly",[i,o]=(0,g.Y)(),c=(0,E.k)(y.pP,n);return l.createElement(b.E.div,Object.assign({className:w(),ref:i},c({isInView:o,delay:.6,additionalEffects:{hiddenAdditional:{y:50},enterAdditional:{y:0}}})),t.items.map((e=>l.createElement(v.w,{key:e.title,plan:e,planType:r}))))},k=[{key:1,label:"How does the free trial work?",children:l.createElement(l.Fragment,null,l.createElement("div",null,"As soon as you sign up and sign in, your free trial is considered to be activated."),l.createElement("div",null,"Your free trial lasts for 30 days and gives users access to all of the features of ReportPortal. As the free trial is associated with the Startup tier, all the limitations of the Startup tier (data storage, data retention policy) are applicable to the free trial period."),l.createElement("div",null,"*applies only to the Startup tier"))},{key:2,label:"How many times can I get the free trial?",children:l.createElement(l.Fragment,null,l.createElement("div",null,"ReportPortal customers are eligible for one free trial only."),l.createElement("div",null,"Also, the free trial is only available for your first project (you won't be able to get the free trial if you've already created a project or if you've been invited to other projects before)."),l.createElement("div",null,"*applies only to the Startup tier"))},{key:3,label:"Do I need to provide credit card details to get the free trial?",children:l.createElement(l.Fragment,null,l.createElement("div",null,"No, the free trial doesn't require your card details."),l.createElement("div",null,"It is absolutely free and you are not obliged to keep using ReportPortal after the free trial. But in order to continue the usage of the application, you should accomplish the payment for the next term."),l.createElement("div",null,"*applies only to the Startup tier"))},{key:4,label:"What happens when the free trial period ends?",children:l.createElement(l.Fragment,null,l.createElement("div",null,"In case you purchase a subscription on the day of the end of the free trial or before it, you will be able to proceed using ReportPortal. All the data reported during the free trial period will stay safe and remain on your project."),l.createElement("div",null,"If you do not purchase a subscription to one of the billing plans by the end of the trial or earlier, your project will be switched to read-only mode until you activate the subscription. Read-only mode means that during the next month after the end of the free trial, you will be able to use all the features except reporting functionality — you won't be able to report any new data into ReportPortal."),l.createElement("div",null,"If the subscription is still not activated during the month after the end of the free trial, all your project data will be erased."),l.createElement("div",null,"*applies only to Startup tier"))},{key:5,label:"How is my subscription charged?",children:l.createElement(l.Fragment,null,l.createElement("div",null,"You will be charged at the beginning of each billing period."),l.createElement("div",null,"If you opt for a monthly plan, your minimum commitment is 3 months. Thus, you will be charged on the first day of the new quarterly billing cycle."),l.createElement("div",null,"If you are on a yearly plan, you will be charged on the first day of the new yearly cycle - either quarterly or annually in advance / bi-annually."))},{key:6,label:"Can I change the billing plan at any time?",children:l.createElement("div",null,l.createElement("div",null,"You may change your subscription plan at any time."),l.createElement("div",null,"Just reach out to us via email available on the Contact tab in Billing Settings of your Project."))},{key:7,label:"What happens when a subscription expires?",children:l.createElement(l.Fragment,null,l.createElement("div",null,'In case of no payment, the project will be switched to "read-only" mode on the first day of the next billing cycle. During the next month, you\'ll be able to use all the features of the application except reporting functionality.'),l.createElement("div",null,"After one month, all your project data will be erased."))}],P=(0,y.WP)(["offer-page-wrapper"]),N=()=>{const{buttons:e,isYearlyPlanType:t,togglePlanType:a}=(0,m.J)("pricing"),i=(0,f.F)(),{plans:b,comparePlans:v}=(0,y.Ng)((0,r.K2)("2583339827"));return l.createElement(l.Fragment,null,l.createElement(d.y,{title:"ReportPortal services pricing",subtitle:"Flexible options for small teams to global enterprises",buttons:e,activeButton:"SaaS",offerType:"SaaS",description:"An instance of ReportPortal application is hosted for you. ReportPortal team takes care about infrastructure, availability, backups, monitoring and version updates and provides support by request.",switcherProps:{togglePlanType:a,isYearlyPlanType:t,messageInactive:"Quarterly",messageActive:"Yearly (Save 5%)"},isAnimationEnabled:i}),l.createElement(_,{plans:b,isYearlyPlanType:t,isAnimationEnabled:i}),l.createElement(s.N2,{plans:v}),l.createElement("div",{className:o()(P("__trusted-organizations-container"),"container")},l.createElement(c.v,null)),l.createElement("div",{className:o()(P("__certificates-container"),"container")},l.createElement(h.k,{subtitle:"Ensuring the highest security standards",shouldDisplayLink:!0})),l.createElement("div",{className:P("__faq-container")},l.createElement(u.B,{items:k})),l.createElement(n.Bp,null,l.createElement(p.j,{title:"Do you still have questions?",linkTitle:"Contact us",link:"/contact-us/general"})))};var A=()=>l.createElement(n.Ar,{className:"offer-page-wrapper saas-page-wrapper"},l.createElement(N,null));const I=()=>{const{title:e,description:t}=y.SEO_DATA.saas;return l.createElement(n.pQ,{title:e,description:t})}}}]);
//# sourceMappingURL=component---src-templates-pricing-saas-tsx-43b6323e93b7c16c4d1b.js.map