(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[155],{20549:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},51928:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20549),i={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=i},86061:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(20549),i=n(7845);function o(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return o(i.INLINES,e.nodeType)},t.isBlock=function(e){return o(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},86437:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var u=n(20549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}});var l=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return l.INLINES}});var s=n(31376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return c(s).default}}),o(n(97951),t),o(n(80167),t),o(n(11911),t);var _=n(51928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return c(_).default}});var E=a(n(86061));t.helpers=E},7845:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},31376:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},11911:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},97951:function(e,t,n){"use strict";var r,i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var a=n(20549),c=n(7845),u=o(n(31376));t.TOP_LEVEL_BLOCKS=[a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET,a.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[a.BLOCKS.TABLE,a.BLOCKS.TABLE_ROW,a.BLOCKS.TABLE_CELL,a.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[a.BLOCKS.HR,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[a.BLOCKS.OL_LIST]=[a.BLOCKS.LIST_ITEM],r[a.BLOCKS.UL_LIST]=[a.BLOCKS.LIST_ITEM],r[a.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[a.BLOCKS.QUOTE]=[a.BLOCKS.PARAGRAPH],r[a.BLOCKS.TABLE]=[a.BLOCKS.TABLE_ROW],r[a.BLOCKS.TABLE_ROW]=[a.BLOCKS.TABLE_CELL,a.BLOCKS.TABLE_HEADER_CELL],r[a.BLOCKS.TABLE_CELL]=[a.BLOCKS.PARAGRAPH],r[a.BLOCKS.TABLE_HEADER_CELL]=[a.BLOCKS.PARAGRAPH],r),t.HEADINGS=[a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=i([a.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[a.BLOCKS.DOCUMENT,a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.LIST_ITEM,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET,c.INLINES.HYPERLINK,c.INLINES.ENTRY_HYPERLINK,c.INLINES.ASSET_HYPERLINK,c.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[u.default.BOLD,u.default.CODE,u.default.ITALIC,u.default.UNDERLINE]},80167:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},66410:function(e,t,n){"use strict";var r,i,o=n(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}t.Z=function(e){return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),r||(r=o.createElement("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,clipPath:"url(#download_inline_svg__a)"},o.createElement("path",{d:"M15 11v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2m4-3 3 3 3-3m-3 2V1"}))),i||(i=o.createElement("defs",null,o.createElement("clipPath",{id:"download_inline_svg__a"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}},65729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r,i=n(67294),o=n(27361),a=n.n(o),c=n(59700),u=n(94184),l=n.n(u),s=n(50308),_=n.n(s),E=n(18872),f=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.58866 3.66897C6.95812 3.25846 6.92484 2.62617 6.51433 2.25671C6.10382 1.88726 5.47153 1.92053 5.10207 2.33104L0 8.00001L5.10207 13.669C5.47153 14.0795 6.10382 14.1128 6.51433 13.7433C6.92484 13.3738 6.95812 12.7416 6.58866 12.331L3.59072 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H3.59073L6.58866 3.66897Z",fill:"white"}))},d=n(25602),p=n(66410),L=n(22135),h=n(59780),O=n(86437),S=n(39693),v=n.n(S),B=(0,d.WP)(["case-page"]),C={renderNode:(r={},r[O.BLOCKS.PARAGRAPH]=function(e,t){var n=i.Children.toArray(t);return v()(n).length?i.createElement("p",{className:B("__column--description")},t):null},r[O.BLOCKS.LIST_ITEM]=function(e,t){return t.map((function(e,t){return i.createElement("li",{className:B("__column--list--item"),key:t},e)}))},r[O.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target,n=t.url,r=t.description;return i.createElement("img",{className:B("__column--image"),src:n,alt:r})},r[O.BLOCKS.HEADING_4]=function(e,t){return i.createElement("h4",{className:B("__column--title")},t)},r[O.BLOCKS.HEADING_6]=function(e,t){return i.createElement("h6",{className:B("__column--intro")},t)},r[O.BLOCKS.TABLE]=function(e,t){return i.createElement("table",{className:B("__column--table")},i.createElement("tbody",null,t))},r)},A=(0,d.WP)(["case-page"]),N=function(e){var t=e.title,n=e.industry,r=e.challenges,o=e.highlights,a=e.benefitsResults;return(0,i.useEffect)((function(){function e(){var e=Array.from(document.querySelectorAll("table")).reverse();if(e.length)if(window.matchMedia("(min-width: 768px)").matches){var t=0;e.forEach((function(e,n){var r=e.previousElementSibling.getBoundingClientRect().height;e.style.height=r+"px",e.style.bottom=0===n?"0px":t+"px",t+=r}))}else e.forEach((function(e){e.style.height="initial"}))}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),i.createElement(i.Fragment,null,i.createElement("div",{className:A()},i.createElement("div",{className:A("__hero")},i.createElement("div",{className:l()(A("__head"),"container")},i.createElement("div",{className:A("__titles")},i.createElement("p",{className:A("__industry")},n),i.createElement("h1",{className:A("__title")},t)),i.createElement("div",{className:A("__button-group")},i.createElement(L.r,{className:l()("btn btn--white btn--large",A("__back-to-list")),to:"/case-studies"},i.createElement(f,null),"Back to Case Studies"),i.createElement("a",{className:l()("btn btn--white btn--large temporary-hide",A("__download-pdf")),download:!0,onClick:_()},i.createElement(p.Z,null),"Download PDF version")))),i.createElement("div",{className:l()(A("__case-body"),"container")},i.createElement("div",{className:A("__case-columns")},i.createElement("div",{className:A("__challenges")},i.createElement("div",{className:A("__challenges--body")},(null==r?void 0:r.raw)&&(0,E.Z)(r,C))),i.createElement("div",{className:A("__highlights")},i.createElement("div",{className:A("__highlights--body")},(null==o?void 0:o.raw)&&(0,E.Z)(o,C)),(null==a?void 0:a.raw)&&i.createElement("div",{className:A("__benefitsResults")},i.createElement("div",{className:A("__benefitsResults--body")},(0,E.Z)(a,C))))))),i.createElement(h.r,null))},I=function(e){var t=a()(e,"data.contentfulCaseStudy"),n=t.title,r=t.industry,o=t.challenges,u=t.highlights,l=t.benefitsResults;return i.createElement(c.Ar,null,i.createElement(N,{title:n,industry:r,challenges:o,highlights:u,benefitsResults:l}))}},1989:function(e,t,n){var r=n(51789),i=n(80401),o=n(57667),a=n(21327),c=n(81866);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=c,e.exports=u},38407:function(e,t,n){var r=n(27040),i=n(14125),o=n(82117),a=n(67518),c=n(13399);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=c,e.exports=u},57071:function(e,t,n){var r=n(10852)(n(55639),"Map");e.exports=r},83369:function(e,t,n){var r=n(24785),i=n(11285),o=n(96e3),a=n(49916),c=n(95265);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=c,e.exports=u},18470:function(e,t,n){var r=n(77813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},97786:function(e,t,n){var r=n(71811),i=n(40327);e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])];return n&&n==o?e:void 0}},28458:function(e,t,n){var r=n(23560),i=n(15346),o=n(13218),a=n(80346),c=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,s=u.toString,_=l.hasOwnProperty,E=RegExp("^"+s.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||i(e))&&(r(e)?E:c).test(a(e))}},71811:function(e,t,n){var r=n(1469),i=n(15403),o=n(55514),a=n(79833);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(a(e))}},14429:function(e,t,n){var r=n(55639)["__core-js_shared__"];e.exports=r},45050:function(e,t,n){var r=n(37019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},10852:function(e,t,n){var r=n(28458),i=n(47801);e.exports=function(e,t){var n=i(e,t);return r(n)?n:void 0}},47801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},51789:function(e,t,n){var r=n(94536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},80401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},57667:function(e,t,n){var r=n(94536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(t,e)?t[e]:void 0}},21327:function(e,t,n){var r=n(94536),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:i.call(t,e)}},81866:function(e,t,n){var r=n(94536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},15403:function(e,t,n){var r=n(1469),i=n(33448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(a.test(e)||!o.test(e)||null!=t&&e in Object(t))}},37019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},15346:function(e,t,n){var r,i=n(14429),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!o&&o in e}},27040:function(e){e.exports=function(){this.__data__=[],this.size=0}},14125:function(e,t,n){var r=n(18470),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)}},82117:function(e,t,n){var r=n(18470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},67518:function(e,t,n){var r=n(18470);e.exports=function(e){return r(this.__data__,e)>-1}},13399:function(e,t,n){var r=n(18470);e.exports=function(e,t){var n=this.__data__,i=r(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},24785:function(e,t,n){var r=n(1989),i=n(38407),o=n(57071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},11285:function(e,t,n){var r=n(45050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},96e3:function(e,t,n){var r=n(45050);e.exports=function(e){return r(this,e).get(e)}},49916:function(e,t,n){var r=n(45050);e.exports=function(e){return r(this,e).has(e)}},95265:function(e,t,n){var r=n(45050);e.exports=function(e,t){var n=r(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}},24523:function(e,t,n){var r=n(15644);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},94536:function(e,t,n){var r=n(10852)(Object,"create");e.exports=r},55514:function(e,t,n){var r=n(24523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}));e.exports=a},40327:function(e,t,n){var r=n(33448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},80346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},39693:function(e){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i}},27361:function(e,t,n){var r=n(97786);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},15644:function(e,t,n){var r=n(83369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},50308:function(e){e.exports=function(){}}}]);
//# sourceMappingURL=component---src-templates-case-study-case-study-jsx-753306c9f35c3774b1fb.js.map