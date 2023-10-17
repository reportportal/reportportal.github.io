"use strict";(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[993],{4746:function(e,t,a){a.d(t,{B:function(){return f}});var i=a(67294),n=a(38005),r=a(94184),s=a.n(r),l=a(71345),o=a(64627),c=a(70759),u=a(25602),d=a(22135),m=(0,u.WP)(["faq"]),f=function(e){var t=e.items,a=e.titleId,r=e.documentationLink,u=void 0===r?c.W+"/FAQ/":r,f=e.showMoreInfoLink,p=void 0===f||f;return i.createElement(i.Fragment,null,i.createElement("div",{className:s()("container",m())},i.createElement("div",{className:m("__heading")},i.createElement("h1",{id:a},"Frequently asked questions")),i.createElement("div",{className:m("__content")},i.createElement(n.Z,{items:t,defaultActiveKey:["1"],size:"large",expandIconPosition:"end",expandIcon:function(e){var t,a=e.isActive;return i.createElement("img",{className:s()(m("__expand-icon"),(t={},t[m("__expand-icon--active")]=a,t)),src:o.mH.arrowLight,alt:a?"Collapse":"Expand"})}})),p&&i.createElement("div",{className:m("__link")},i.createElement("p",null,"More information on the link to our",i.createElement(d.r,{className:m("__link-documentation"),to:u},"Documentation",i.createElement(l.Z,null))))))}},96215:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var i=a(67294),n=a(59700),r=a(87896),s=a(13690),l=a(94184),o=a.n(l),c=a(1852),u=a(386),d=a(64627),m=a(70759),f=a(25602),p=a(22135),h=a(64808),g=a(96148),v=a(32395),y=a(19530),E=a(75149),k=a(4746),_=[{id:1,name:"Single-entry point for test reporting",link:"#single-entry"},{id:2,name:"Categorisation of failures",link:"#categorisation"},{id:3,name:"AI-based failure reason detection",link:"#ai-based"},{id:4,name:"Rich artifacts in test reports",link:"#rich-artifacts-in-test-reports"},{id:5,name:"Real-time reporting",link:"#real-time-reporting"},{id:6,name:"Data visualisation",link:"#visualisation-of-tests"},{id:7,name:"REST API",link:"#rest-api"},{id:8,name:"Quality Gates",link:"#quality-gates"}],b=[{title:"Single-entry point and unified test reporting ",description:"Use a single-entry point to aggregate the results of all the automated tests in a unified way. It will help you to improve the efficiency and consistency of the testing process, enhance traceability and collaboration between the development team and stakeholders as all test results can be accessed, reviewed, and analyzed in one place.",image:d.R2.feature1,id:"single-entry",link:m.W+"/features/UnifiedTestReporting"},{title:"Categorisation of failures based on issue roots",description:"Get a better understanding of the underlying causes of the failures and set the appropriate Defect types to them: Product bug, Auto Bug, System Issue or custom type. Having all the failures categorized, you will be able to understand the failures context better, prioritize the issues and ensure that the most critical issues are addressed first.",image:d.R2.feature2,id:"categorisation",link:m.W+"/features/CategorisationOfFailures"},{title:"AI-based failure reason detection",description:"Reduce the time and resources by automating the process of identifying the root cause of test failures. By automating failure triaging process, your team will be able to focus on addressing the identified issues, increasing the coverage, rather than spending time on manual analysis.",image:d.R2.feature3,id:"ai-based",link:m.W+"/features/AIFailureReasonDetection"},{title:"Rich artifacts in test reports",description:"Get additional information beyond the basic test results, such as logs, screenshots, video recordings and network traffic (payloads and requests). This information will help you to speed up results analysis and categorization by providing more details about the test results and will make it easier to replicate and debug issues.",image:d.R2.feature4,id:"rich-artifacts-in-test-reports",link:m.W+"/features/RichArtifactsInTestReports"},{title:"Real-time reporting",description:"Access and view test results as soon as they are generated. No need to wait for the moment when test execution is completed. It will help you to speed up the process of addressing issues and save a significant amount of time in the long run.",image:d.R2.feature5,id:"real-time-reporting",link:m.W+"/features/RealTimeReporting"},{title:"Visualisation of test results",description:"Get a better understanding of the overall status of the testing process and product health, identify areas that need improvement and make data-driven decisions on product release.",image:d.R2.feature6,id:"visualisation-of-tests",link:m.W+"/features/VisualisationOfTestResults"},{title:"REST API",description:"Access and manipulate test results in a programmatic way in order to automate the process of sending test results, integrate with other tools, create custom reports, generate alerts or notifications and trigger certain actions like re-running of test cases, or triggering a build in a CI/CD pipeline.",image:d.R2.feature7,id:"rest-api",link:m.W+"/features/RESTAPI"},{title:"Quality Gates",description:"Use as an objective means of evaluating the quality of a software release, as opposed to subjective opinions or guesses. This will help to ensure that the software is of high quality and is free of major defects or issues, which can improve customer satisfaction and reduce the risk of software failures.",image:d.R2.feature8,id:"quality-gates",link:m.W+"/features/QualityGates",isPremium:!0}],w=(0,f.WP)(["features-page"]),R=function(){var e,t=(0,r.useLocation)(),a=(0,i.useState)(!1),n=a[0],l=a[1],R=(0,i.useState)(t.hash),N=R[0],I=R[1],P=(0,i.useRef)(null),S=(0,u.C7)({callbackFn:function(){for(var e=document.querySelectorAll("."+w("__features-list-item-container")),t=null,a=e.length-1;a>=0;a--){var i=e[a].getBoundingClientRect();if(Math.abs(Math.round(i.top))<=50){t=a;break}}if(null!==t){var n=_[t].link;n!==N&&(I(n),T(n))}},isMenuOpen:null}),A=(0,s.Z)(),W=(0,c.useMediaQuery)({query:f.Y}),x=null!==(e=null==A?void 0:A.top)&&void 0!==e?e:0,C=w("__features-navigation-item--active"),q=w("__features-navigation-item"),T=function(e){return window.history.replaceState(null,"","/features/"+e)};(0,i.useEffect)((function(){var e=P.current.getBoundingClientRect().top;n!==("up"===S?e-76-100:e-100)>0&&l(!n)}),[A,S,n]);var F=[{key:1,label:'What is meant by "Premium feature"?',children:i.createElement(i.Fragment,null,i.createElement("p",null,'Premium feature is an advanced feature which comes on top of Free Open Source edition. It comes at no cost with SaaS offering and included into the "160" Managed Services package.'),i.createElement("p",null,"See the"," ",i.createElement(p.r,{to:m.W+"/terms-and-conditions/PremiumFeatures",className:"link"},"List of features")," ","and their description."))},{key:2,label:"What capabilities does Rest API provide?",children:i.createElement("p",null,"REST API enables users to easily integrate any testing framework or third-party tool with ReportPortal so as to report data into ReportPortal, call analyze action, add attributes, merge/update/finish launches. Besides, you can pull the data from ReportPortal in order to update the statuses in the pipeline, generate custom reports and many more.")}];return i.createElement("div",{className:w()},i.createElement("div",{className:w("__hero")},i.createElement("div",{className:"container"},i.createElement("div",{className:w("__hero-heading")},i.createElement("h1",null,"Features"),i.createElement("h2",null,"Empower your testing process with ReportPortal")),i.createElement("div",{className:w("__hero-dashboard")},i.createElement("img",{src:d.mH.dashboard,alt:""})))),i.createElement("div",{className:w("__features-explorer"),style:{position:W&&n?"sticky":"relative",top:"up"===S?"-50px":"-126px"}},i.createElement("h2",{className:w("__features-heading"),style:{visibility:x>1200?"hidden":"visible"}},"Explore ReportPortal features"),i.createElement("div",{className:w("__features-navigation")},i.createElement("div",{className:w("__features-navigation-container")},_.map((function(e){var t,a=e.id,n=e.name,r=e.link;return i.createElement(p.r,{className:o()(q,(t={},t[C]=r===N,t)),to:r,key:n,onClick:function(e){return function(e,t){e.preventDefault();var a=document.getElementById(t.slice(1));a&&a.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}(e,r)}},i.createElement("span",null,a),i.createElement("span",null,n))}))))),i.createElement("div",{className:w("__features-list")},b.map((function(e){var t=e.id,a=e.link,n=e.title,r=e.description,s=e.image,l=e.isPremium;return i.createElement("div",{className:w("__features-list-item-container"),key:t,id:t},i.createElement("div",{className:o()(w("__features-list-item"),"container"),key:n},i.createElement("div",{className:w("__features-list-item-leading")},l&&i.createElement("span",{className:w("__features-list-item-premium")},"Premium feature"),i.createElement("h3",null,n),i.createElement("p",null,r),i.createElement(v.I,{mode:"primary",to:a,text:"Learn more"})),i.createElement("div",{className:w("__features-list-item-trailing")},i.createElement("img",{src:s,alt:""}))))}))),i.createElement(h.a,{ref:P}),i.createElement("div",{className:w("__frameworks")},i.createElement("div",{className:"container"},i.createElement("h2",null,"Supported frameworks"),i.createElement("h3",null,"Explore supported frameworks by language")),i.createElement(g.g,null)),i.createElement(E.J,null),i.createElement("div",{className:o()(w("__faq"),"container")},i.createElement(k.B,{items:F,showMoreInfoLink:!1})),i.createElement("div",{className:w("__banner")},i.createElement(y.j,{title:"Still have questions about our features?",linkTitle:"Contact us",link:"/contact-us/general"})))},N=function(){return i.createElement(n.Ar,{className:"features-page-layout"},i.createElement(R,null))}}}]);
//# sourceMappingURL=component---src-pages-features-jsx-0c7822bd0c2d3cd69a0b.js.map