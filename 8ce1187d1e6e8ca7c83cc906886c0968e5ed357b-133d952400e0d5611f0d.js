/*! For license information please see 8ce1187d1e6e8ca7c83cc906886c0968e5ed357b-133d952400e0d5611f0d.js.LICENSE.txt */
(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[408],{51223:function(e,t,n){var r=n(5112),a=n(70030),i=n(3070).f,o=r("unscopables"),l=Array.prototype;null==l[o]&&i(l,o,{configurable:!0,value:a(null)}),e.exports=function(e){l[o][e]=!0}},77475:function(e,t,n){var r=n(43157),a=n(4411),i=n(70111),o=n(5112)("species"),l=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(a(t)&&(t===l||r(t.prototype))||i(t)&&null===(t=t[o]))&&(t=void 0)),void 0===t?l:t}},65417:function(e,t,n){var r=n(77475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},70648:function(e,t,n){var r=n(51694),a=n(60614),i=n(84326),o=n(5112)("toStringTag"),l=Object,c="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=l(e),o))?n:c?i(t):"Object"==(r=i(t))&&a(t.callee)?"Arguments":r}},7207:function(e){var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},6790:function(e,t,n){"use strict";var r=n(43157),a=n(26244),i=n(7207),o=n(49974),l=function(e,t,n,c,s,u,f,d){for(var p,v,m=s,h=0,g=!!f&&o(f,d);h<c;)h in n&&(p=g?g(n[h],h,t):n[h],u>0&&r(p)?(v=a(p),m=l(e,t,p,v,m,u-1)-1):(i(m+1),e[m]=p),m++),h++;return m};e.exports=l},49974:function(e,t,n){var r=n(21470),a=n(19662),i=n(34374),o=r(r.bind);e.exports=function(e,t){return a(e),void 0===t?e:i?o(e,t):function(){return e.apply(t,arguments)}}},21470:function(e,t,n){var r=n(84326),a=n(1702);e.exports=function(e){if("Function"===r(e))return a(e)}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},43157:function(e,t,n){var r=n(84326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),a=n(47293),i=n(60614),o=n(70648),l=n(35005),c=n(42788),s=function(){},u=[],f=l("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=r(d.exec),v=!d.exec(s),m=function(e){if(!i(e))return!1;try{return f(s,u,e),!0}catch(t){return!1}},h=function(e){if(!i(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!p(d,c(e))}catch(t){return!0}};h.sham=!0,e.exports=!f||a((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?h:m},70030:function(e,t,n){var r,a=n(19670),i=n(36048),o=n(80748),l=n(3501),c=n(60490),s=n(80317),u=n(6200),f=u("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"</"+"script>"},v=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},m=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t;m="undefined"!=typeof document?document.domain&&r?v(r):((t=s("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):v(r);for(var n=o.length;n--;)delete m.prototype[o[n]];return m()};l[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=a(e),n=new d,d.prototype=null,n[f]=e):n=m(),void 0===t?n:i.f(n,t)}},36048:function(e,t,n){var r=n(19781),a=n(3353),i=n(3070),o=n(19670),l=n(45656),c=n(81956);t.f=r&&!a?Object.defineProperties:function(e,t){o(e);for(var n,r=l(t),a=c(t),s=a.length,u=0;s>u;)i.f(e,n=a[u++],r[n]);return e}},81956:function(e,t,n){var r=n(16324),a=n(80748);e.exports=Object.keys||function(e){return r(e,a)}},51694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},84944:function(e,t,n){"use strict";var r=n(82109),a=n(6790),i=n(47908),o=n(26244),l=n(19303),c=n(65417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=o(t),r=c(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:l(e)),r}})},33792:function(e,t,n){n(51223)("flat")},64808:function(e,t,n){"use strict";n.d(t,{a:function(){return K}});n(84944),n(33792);var r,a=n(67294),i=n(97005),o=n(25602),l=n(70759),c=n(22135);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u,f,d,p,v=function(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),r||(r=a.createElement("path",{fill:"#E1251B",d:"M12.638 39.418a20.405 20.405 0 0 1-1.376-7.445 20.839 20.839 0 0 1 6.173-14.703 20.82 20.82 0 0 1 14.757-6.026c.98.004 1.96.072 2.93.204l-2.345 2.374h-.637a18.205 18.205 0 0 0-14.535 7.234 18.238 18.238 0 0 0-2.996 15.965h15.953l-6.778 12.468 16.055-16.267H17.92L42.614 8.695A25.319 25.319 0 0 0 32.04 6.4a25.658 25.658 0 0 0-15.48 5.217 25.691 25.691 0 0 0-8.389 29.83 25.676 25.676 0 0 0 10.49 12.53l7.645-14.457-13.667-.102Zm32.78-29.347-7.645 14.458h13.685a20.792 20.792 0 0 1-9.723 25.836 20.763 20.763 0 0 1-9.67 2.39 23.92 23.92 0 0 1-3.033-.205l2.32-2.346h.72c4.833 0 9.467-1.92 12.885-5.339a18.233 18.233 0 0 0 5.336-12.89 19.975 19.975 0 0 0-.688-4.948h-15.96l6.651-12.57-16.36 16.292h21.968L21.49 55.378a25.654 25.654 0 0 0 18.829.813 25.67 25.67 0 0 0 14.307-12.273 25.691 25.691 0 0 0-9.207-33.846l-.001-.001Z"})))};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var h,g=function(e){return a.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),u||(u=a.createElement("path",{fill:"url(#microsoft_inline_svg__a)",d:"M6.857 16A9.143 9.143 0 0 1 16 6.857h32A9.143 9.143 0 0 1 57.143 16v32A9.143 9.143 0 0 1 48 57.143H16A9.143 9.143 0 0 1 6.857 48V16Z"})),f||(f=a.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M18.286 20.571A2.286 2.286 0 0 0 16 22.857v18.286a2.286 2.286 0 0 0 2.286 2.286h27.428A2.286 2.286 0 0 0 48 41.143V22.857a2.286 2.286 0 0 0-2.286-2.286H18.286ZM32 33.934l13.714-9.494V24c0-.631-.511-1.143-1.143-1.143H19.43c-.632 0-1.143.512-1.143 1.143v.44L32 33.933Z",clipRule:"evenodd"})),d||(d=a.createElement("path",{fill:"#000",d:"M45.712 43.427 16 22.857a2.286 2.286 0 0 1 2.286-2.285h6.204l21.222 22.855Z",opacity:.07})),p||(p=a.createElement("defs",null,a.createElement("linearGradient",{id:"microsoft_inline_svg__a",x1:32,x2:32,y1:6.857,y2:57.143,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#00B9FF"}),a.createElement("stop",{offset:.797,stopColor:"#0082FF"})))))};function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var E,w,b=function(e){return a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),h||(h=a.createElement("path",{fill:"#CB3939",fillRule:"evenodd",d:"M33.586 44.395c-7.68.955-23.576 2.635-27.186.243 0-2.45 4.36-11.622 7.688-18.409 2.508-5.114 5.944-9.74 8.99-13.842a202.62 202.62 0 0 0 2.817-3.854c-5.242 7.797-14.633 25.02-11.431 30.819 1.473 3.688 14.366 5.567 19.122 5.043Zm2.853-34.57c-3.897 1.89-10.538 16.43-13.624 23.527 1.969-4.36 10.147-14.503 14.071-13.895 6.622.194 16.67 17.042 20.714 25.522-.616-1.371-1.236-2.846-1.884-4.386-1.981-4.71-4.215-10.021-7.341-14.783-4.149-6.318-9.828-14.738-11.936-15.985Zm16.91 44.072c.411-4.311-8.553-17.544-13.01-23.871 2.7 3.949 7.11 16.209 4.55 19.245-3.61 5.555-23.225 5.375-32.571 4.42 1.491.187 3.074.424 4.726.672 5.053.757 10.751 1.61 16.444 1.416 7.554-.257 17.7-.73 19.861-1.882Z",clipRule:"evenodd"})))};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}var O,x=function(e){return a.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),E||(E=a.createElement("path",{fill:"url(#azuredo_inline_svg__a)",d:"M57.6 15.988v31.129L44.8 57.6l-19.84-7.223v7.159l-11.232-14.67 32.736 2.557V17.394L57.6 15.988Zm-10.912 1.566L28.32 6.4v7.319l-16.864 4.954L6.4 25.16v14.734l7.232 3.196V24.202l33.056-6.648Z"})),w||(w=a.createElement("defs",null,a.createElement("linearGradient",{id:"azuredo_inline_svg__a",x1:32,x2:32,y1:57.44,y2:6.496,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#0078D4"}),a.createElement("stop",{offset:.16,stopColor:"#1380DA"}),a.createElement("stop",{offset:.53,stopColor:"#3C91E5"}),a.createElement("stop",{offset:.82,stopColor:"#559CEC"}),a.createElement("stop",{offset:1,stopColor:"#5EA0EF"})))))};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var C,Z,F,A,N=function(e){return a.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),O||(O=a.createElement("path",{fill:"#E53E4B",fillRule:"evenodd",d:"M30.396 6.896c-.299.019-.876.073-1.284.12-7.37.862-13.965 4.942-18.109 11.2-3.16 4.776-4.6 10.6-4.02 16.27.687 6.734 4.047 12.89 9.36 17.15a25.257 25.257 0 0 0 9.979 4.854 24.945 24.945 0 0 0 16.959-2.044 25.19 25.19 0 0 0 11.218-11.284 22.525 22.525 0 0 0 1.355-3.275 24.895 24.895 0 0 0 .704-13.265c-1.285-5.852-4.672-11.095-9.524-14.745a25.068 25.068 0 0 0-13.532-4.984 32.386 32.386 0 0 0-3.106.003Zm3.857 5.603c2.36.295 4.325.875 6.318 1.863 3.846 1.908 7.12 5.18 9.044 9.033 1.127 2.26 1.745 4.543 1.947 7.19.063.83.027 2.819-.065 3.608-.525 4.49-2.424 8.382-5.676 11.635a20.24 20.24 0 0 1-3.207 2.631c-.774.512-1.261.79-2.19 1.249-2.014.994-3.942 1.55-6.317 1.82-.628.071-2.883.097-3.67.042-4.143-.289-7.714-1.718-10.78-4.315-.556-.47-1.962-1.89-2.538-2.563-2.631-3.07-4.149-6.523-4.614-10.499-.148-1.268-.127-3.38.048-4.755.686-5.39 3.674-10.25 8.345-13.57 2.58-1.835 5.68-3.01 8.872-3.363.896-.099.867-.098 2.44-.087 1.082.008 1.631.03 2.043.082Zm-2.96 2.176c-.68.058-1.52.163-2.002.25-2.874.52-5.456 1.686-7.673 3.465a21.839 21.839 0 0 0-2.25 2.164c-4.006 4.637-5.276 11.309-3.274 17.206.736 2.168 1.812 4.018 3.37 5.793.455.518 1.822 1.862 2.279 2.24.457.377.69.549.645.474l-.21-.331a11.17 11.17 0 0 1-1.689-4.855c-.064-.636-.028-2.146.064-2.737.662-4.242 3.35-7.657 7.302-9.276 2.708-1.11 5.994-1.118 8.74-.023a11.83 11.83 0 0 1 6.21 5.69c.594 1.182.926 2.22 1.145 3.588.09.566.128 2.168.065 2.78-.178 1.721-.856 3.62-1.77 4.958l-.128.188.206-.18c.114-.1.489-.419.833-.709 1.165-.983 1.945-1.803 2.763-2.905 1.963-2.646 3.139-5.861 3.387-9.263.284-3.896-.867-8.206-3.117-11.68a25.31 25.31 0 0 0-1.247-1.701c-.19-.227-.832-.826-1.327-1.238-2.565-2.132-5.562-3.395-9.07-3.82-.533-.065-2.775-.118-3.253-.078Zm-.022 15.642a9.554 9.554 0 0 0-6.412 3.752 9.46 9.46 0 0 0-1.421 8.663 9.459 9.459 0 0 0 3.733 4.872c.44.291 1.244.74 1.244.695 0-.01-.076-.11-.168-.22-.404-.49-.681-1.246-.744-2.033-.07-.88.057-1.608.411-2.352a5.151 5.151 0 0 1 2.478-2.475c1.47-.689 3.322-.492 4.667.496 1.63 1.197 2.352 3.267 1.76 5.04-.153.455-.34.852-.609 1.291-.195.319-.196.319.357.062 1.282-.596 2.52-1.7 3.399-3.031 1.47-2.226 1.941-5.012 1.306-7.713-.656-2.788-2.438-5.083-4.85-6.244a9.189 9.189 0 0 0-2.724-.806c-.604-.077-1.848-.076-2.427.003Z",clipRule:"evenodd"})))};function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}var M,P,S,L,k=function(e){return a.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),C||(C=a.createElement("path",{fill:"#2684FF",d:"m56.987 31.386-22.78-22.78L31.999 6.4 7.013 31.386a2.097 2.097 0 0 0 0 2.963l15.666 15.666L32 59.337l24.988-24.988a2.096 2.096 0 0 0 0-2.963Zm-24.988 9.307-7.825-7.825L32 25.042l7.826 7.826L32 40.694Z"})),Z||(Z=a.createElement("path",{fill:"url(#jira1_inline_svg__a)",d:"M31.999 25.041c-5.123-5.125-5.149-13.425-.054-18.58L14.818 23.58l9.322 9.322 7.859-7.862Z"})),F||(F=a.createElement("path",{fill:"url(#jira1_inline_svg__b)",d:"m39.847 32.846-7.849 7.847a13.178 13.178 0 0 1 0 18.644l17.168-17.169-9.32-9.322Z"})),A||(A=a.createElement("defs",null,a.createElement("linearGradient",{id:"jira1_inline_svg__a",x1:28.636,x2:19.674,y1:19.092,y2:28.052,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#0052CC"}),a.createElement("stop",{offset:1,stopColor:"#2684FF"})),a.createElement("linearGradient",{id:"jira1_inline_svg__b",x1:35.459,x2:44.403,y1:46.557,y2:37.613,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#0052CC"}),a.createElement("stop",{offset:1,stopColor:"#2684FF"})))))};function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}var H,q=function(e){return a.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),M||(M=a.createElement("path",{fill:"#2684FF",d:"M55.46 6.4H30.806a11.13 11.13 0 0 0 11.13 11.13h4.542v4.385c.004 6.141 4.981 11.119 11.123 11.123v-24.5a2.14 2.14 0 0 0-2.14-2.138Z"})),P||(P=a.createElement("path",{fill:"url(#jira2_inline_svg__a)",d:"M43.262 18.684H18.607c.004 6.142 4.981 11.12 11.123 11.123h4.542v4.4c.007 6.14 4.988 11.115 11.13 11.115V20.824a2.14 2.14 0 0 0-2.14-2.14Z"})),S||(S=a.createElement("path",{fill:"url(#jira2_inline_svg__b)",d:"M31.055 30.962H6.4c0 6.147 4.983 11.13 11.13 11.13h4.556v4.385c.004 6.136 4.973 11.111 11.109 11.123V33.1a2.14 2.14 0 0 0-2.14-2.139Z"})),L||(L=a.createElement("defs",null,a.createElement("linearGradient",{id:"jira2_inline_svg__a",x1:44.874,x2:34.45,y1:18.727,y2:29.605,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:.18,stopColor:"#0052CC"}),a.createElement("stop",{offset:1,stopColor:"#2684FF"})),a.createElement("linearGradient",{id:"jira2_inline_svg__b",x1:33.373,x2:21.314,y1:31.083,y2:42.947,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:.18,stopColor:"#0052CC"}),a.createElement("stop",{offset:1,stopColor:"#2684FF"})))))};function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}var z,V,D,W,B=function(e){return a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),H||(H=a.createElement("path",{fill:"#0089D6",d:"M43.007 46.623c-.068.014-5.954 1.048-13.08 2.299L16.97 51.195l21.382.002 21.381.003-.087-.152-11.526-19.84c-6.72-11.566-11.447-19.672-11.46-19.65-.04.068-6.986 19.067-6.986 19.106 0 .02 3.027 3.614 6.728 7.985l6.727 7.948-.122.026Zm-31.696-12.27a4881.29 4881.29 0 0 0-7.044 12.145c0 .011 2.865.017 6.366.012L17 46.502l8.756-18.649 8.915-18.99c.087-.187.146-.335.132-.33-.015.006-3.722 3.09-8.237 6.853l-8.21 6.842-7.045 12.125Z"})))};function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var T=function(e){return a.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),z||(z=a.createElement("path",{fill:"#007DC1",d:"M23.408 34.898c-.448-.475-1.216-.153-1.216.526h-.016v4.938a.666.666 0 0 1-.688.645H18.8c-.32 0-.704-.136-.704-.628V18.897c0-.289.224-.611.688-.611h2.688c.304 0 .688.186.688.678v9.69c0 .695.8 1.035 1.248.526 1.257-1.425 3.111-3.543 3.905-4.45l.002-.002v-.001l.381-.434c.048-.068.128-.136.32-.204.096-.034.192-.034.32-.034h3.296c.672 0 .864.78.56 1.188l-4.768 5.65c-.784.883-.864 1.222-.176 2.088l.32.34 6.016 6.532c.304.407.112 1.205-.544 1.205h-3.632c-.144 0-.272 0-.352-.034a.535.535 0 0 1-.265-.178.611.611 0 0 0-.023-.026l-.091-.102c-.549-.613-3.445-3.855-5.269-5.82Z"})),V||(V=a.createElement("path",{fill:"#007DC1",fillRule:"evenodd",d:"M0 32.556c0-4.717 3.6-8.535 8.048-8.535s8.048 3.818 8.048 8.535c0 4.718-3.6 8.536-8.048 8.536S0 37.274 0 32.557Zm4.016 0c0 2.36 1.808 4.277 4.032 4.277s4.032-1.918 4.032-4.276c0-2.36-1.808-4.277-4.032-4.277s-4.032 1.918-4.032 4.276Z",clipRule:"evenodd"})),D||(D=a.createElement("path",{fill:"#007DC1",d:"m44.144 40.277-.288-2.85a.645.645 0 0 0-.752-.594 3.86 3.86 0 0 1-.624.05c-2.144 0-3.888-1.781-4.016-4.038v-3.733c0-.458.32-.832.752-.832h3.6c.256 0 .64-.237.64-.73v-2.697c0-.526-.32-.798-.608-.798h-3.632c-.416 0-.752-.322-.768-.764v-4.327c0-.271-.192-.678-.688-.678h-2.672c-.336 0-.656.22-.656.661v13.898c.112 4.616 3.68 8.298 8.048 8.298.368 0 .72-.034 1.072-.085a.685.685 0 0 0 .592-.78Z"})),W||(W=a.createElement("path",{fill:"#007DC1",fillRule:"evenodd",d:"M60.912 32.59c0 3.241.352 4.107 2.624 4.107.272 0 .464.288.464.543v3.037c0 .817-1.54.803-1.981.798h-.067c-1.904-.017-3.12-.832-3.872-2.053-1.408 1.272-3.232 2.053-5.232 2.053-4.448 0-8.048-3.818-8.048-8.536 0-4.717 3.6-8.535 8.048-8.535a7.6 7.6 0 0 1 3.968 1.12v-.356c0-.441.368-.73.704-.73h2.688c.512 0 .704.458.704.73v7.822Zm-12.08-.034c0 2.36 1.808 4.277 4.032 4.277 2.208 0 4.016-1.918 4.032-4.276 0-2.36-1.808-4.277-4.032-4.277s-4.032 1.918-4.032 4.276Z",clipRule:"evenodd"})))},X=(0,o.WP)(["process-integration"]),J=[{icon:a.createElement(v,null)},{icon:a.createElement(g,null)},{icon:a.createElement(b,null)},{icon:a.createElement(x,null)},{icon:a.createElement(N,null)},{icon:a.createElement(k,null)},{icon:a.createElement(q,null)},{icon:a.createElement(B,null)},{icon:a.createElement(T,null)}],K=(0,a.forwardRef)((function(e,t){return a.createElement("section",{className:X(),ref:t},a.createElement("div",{className:"container"},a.createElement("h2",null,"Integrate with your existing test automation process"),a.createElement("h3",null,"Integrate ReportPortal with frameworks, bug tracking systems, infrastructure providers you already use and others so as to streamline the development and testing processes"),a.createElement("div",{className:X("__link-container")},a.createElement(c.r,{className:"btn btn--outline btn--large",to:l.W+"/category/plugins/"},"See all integrations"))),a.createElement("div",{className:X("__carousel")},a.createElement(i.Z,{className:X("__carousel-marquee"),speed:25,gradientWidth:"19.27%"},[J,J].flat().map((function(e,t){return a.createElement("div",{className:X("__carousel-logo"),key:t},e.icon)})))))}));K.displayName="ProcessIntegration"},75149:function(e,t,n){"use strict";n.d(t,{J:function(){return u}});var r=n(67294),a=n(94184),i=n.n(a),o=n(25602),l=n(64627),c=n(22135),s=(0,o.WP)(["start-testing-with-report-portal"]),u=function(){return r.createElement("section",{className:i()(s(),"container")},r.createElement("div",{className:s("__leading")},r.createElement("div",{className:s("__leading-heading")},r.createElement("h2",null,"Start testing with ReportPortal"),r.createElement("h3",null,"Ready to get the most of ReportPortal features? Start your ",r.createElement("b",null,"30-day free trial")," or get in touch with us to learn more about our offer.")),r.createElement("div",{className:s("__leading-button-group")},r.createElement(c.r,{className:"btn btn--primary btn--large",to:"/contact-us/general","data-gtm":"start_free_trial"},"Start free trial"),r.createElement(c.r,{className:"btn btn--outline btn--large temporary-hide",to:"/contact-us/general","data-gtm":"get_a_quote"},"Get a quote"))),r.createElement("div",{className:s("__trailing")},r.createElement("img",{src:l.mH.subscription,alt:""})))}},97005:function(e,t,n){var r=n(67294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(r),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};!function(e){if(!e||"undefined"==typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');t.Z=function(e){var t,n,a,l,c=e.style,s=void 0===c?{}:c,u=e.className,f=void 0===u?"":u,d=e.play,p=void 0===d||d,v=e.pauseOnHover,m=void 0!==v&&v,h=e.pauseOnClick,g=void 0!==h&&h,y=e.direction,E=void 0===y?"left":y,w=e.speed,b=void 0===w?20:w,_=e.delay,O=void 0===_?0:_,x=e.loop,j=void 0===x?0:x,C=e.gradient,Z=void 0===C||C,F=e.gradientColor,A=void 0===F?[255,255,255]:F,N=e.gradientWidth,R=void 0===N?200:N,M=e.onFinish,P=e.onCycleComplete,S=e.children,L=r.useState(0),k=L[0],U=L[1],H=r.useState(0),q=H[0],G=H[1],z=r.useState(!1),V=z[0],D=z[1],W=r.useRef(null),B=r.useRef(null);r.useEffect((function(){if(V){var e=function(){B.current&&W.current&&(U(W.current.getBoundingClientRect().width),G(B.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[V]),r.useEffect((function(){D(!0)}),[]);var I="rgba("+A[0]+", "+A[1]+", "+A[2],T=q<k?k/b:q/b;return i.default.createElement(r.Fragment,null,V?i.default.createElement("div",{ref:W,style:o(o({},s),(t={},t["--pause-on-hover"]=!p||m?"paused":"running",t["--pause-on-click"]=!p||m&&!g||g?"paused":"running",t)),className:f+" marquee-container"},Z&&i.default.createElement("div",{style:(n={},n["--gradient-color"]=I+", 1), "+I+", 0)",n["--gradient-width"]="number"==typeof R?R+"px":R,n),className:"overlay"}),i.default.createElement("div",{ref:B,style:(a={},a["--play"]=p?"running":"paused",a["--direction"]="left"===E?"normal":"reverse",a["--duration"]=T+"s",a["--delay"]=O+"s",a["--iteration-count"]=j?""+j:"infinite",a),className:"marquee",onAnimationIteration:P,onAnimationEnd:M},S),i.default.createElement("div",{style:(l={},l["--play"]=p?"running":"paused",l["--direction"]="left"===E?"normal":"reverse",l["--duration"]=T+"s",l["--delay"]=O+"s",l["--iteration-count"]=j?""+j:"infinite",l),className:"marquee","aria-hidden":"true"},S)):null)}}}]);
//# sourceMappingURL=8ce1187d1e6e8ca7c83cc906886c0968e5ed357b-133d952400e0d5611f0d.js.map