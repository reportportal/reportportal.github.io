(self.webpackChunkreportportal_github_io=self.webpackChunkreportportal_github_io||[]).push([[621],{74129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(67294),o=(r=u)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e},i.apply(this,arguments)},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e,t){return e(t={exports:{}},t.exports),t.exports}var f=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));c(f);f.BLOCKS;var E=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));c(E);E.INLINES;var s=l((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));c(s);var L=l((function(e,t){var n,r=a&&a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,u=0,o=t.length;u<o;u++)!r&&u in t||(r||(r=Array.prototype.slice.call(t,0,u)),r[u]=t[u]);return e.concat(r||Array.prototype.slice.call(t))},u=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=u(s);t.TOP_LEVEL_BLOCKS=[f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET,f.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[f.BLOCKS.TABLE,f.BLOCKS.TABLE_ROW,f.BLOCKS.TABLE_CELL,f.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[f.BLOCKS.HR,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[f.BLOCKS.OL_LIST]=[f.BLOCKS.LIST_ITEM],n[f.BLOCKS.UL_LIST]=[f.BLOCKS.LIST_ITEM],n[f.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[f.BLOCKS.QUOTE]=[f.BLOCKS.PARAGRAPH],n[f.BLOCKS.TABLE]=[f.BLOCKS.TABLE_ROW],n[f.BLOCKS.TABLE_ROW]=[f.BLOCKS.TABLE_CELL,f.BLOCKS.TABLE_HEADER_CELL],n[f.BLOCKS.TABLE_CELL]=[f.BLOCKS.PARAGRAPH],n[f.BLOCKS.TABLE_HEADER_CELL]=[f.BLOCKS.PARAGRAPH],n),t.HEADINGS=[f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([f.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[f.BLOCKS.DOCUMENT,f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.LIST_ITEM,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[o.default.BOLD,o.default.CODE,o.default.ITALIC,o.default.UNDERLINE]}));c(L);L.V1_MARKS,L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var _=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(_);var d=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(d);var S=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:f.BLOCKS.DOCUMENT,data:{},content:[{nodeType:f.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));c(S);var O=l((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(E.INLINES,e.nodeType)},t.isBlock=function(e){return n(f.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));c(O);O.isText,O.isBlock,O.isInline;var p=l((function(e,t){var n=a&&a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var u=Object.getOwnPropertyDescriptor(t,n);u&&!("get"in u?!t.__esModule:u.writable||u.configurable)||(u={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,u)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=a&&a.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)"default"!==u&&Object.prototype.hasOwnProperty.call(e,u)&&n(t,e,u);return r(t,e),t},i=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return f.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(s).default}}),u(L,t),u(_,t),u(d,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(S).default}});var c=o(O);t.helpers=c}));c(p);var y,B,T=p.helpers,I=(p.EMPTY_DOCUMENT,p.MARKS),A=p.INLINES,C=p.BLOCKS;function N(e,t){return e.map((function(e,n){return r=D(e,t),o=n,u.isValidElement(r)&&null===r.key?u.cloneElement(r,{key:o}):r;var r,o}))}function D(e,t){var n=t.renderNode,r=t.renderMark,u=t.renderText;if(T.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),u?u(e.value):e.value);var i=N(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):o.createElement(o.Fragment,null,i)}var v=((y={})[C.DOCUMENT]=function(e,t){return t},y[C.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},y[C.HEADING_1]=function(e,t){return o.createElement("h1",null,t)},y[C.HEADING_2]=function(e,t){return o.createElement("h2",null,t)},y[C.HEADING_3]=function(e,t){return o.createElement("h3",null,t)},y[C.HEADING_4]=function(e,t){return o.createElement("h4",null,t)},y[C.HEADING_5]=function(e,t){return o.createElement("h5",null,t)},y[C.HEADING_6]=function(e,t){return o.createElement("h6",null,t)},y[C.EMBEDDED_ENTRY]=function(e,t){return o.createElement("div",null,t)},y[C.UL_LIST]=function(e,t){return o.createElement("ul",null,t)},y[C.OL_LIST]=function(e,t){return o.createElement("ol",null,t)},y[C.LIST_ITEM]=function(e,t){return o.createElement("li",null,t)},y[C.QUOTE]=function(e,t){return o.createElement("blockquote",null,t)},y[C.HR]=function(){return o.createElement("hr",null)},y[C.TABLE]=function(e,t){return o.createElement("table",null,o.createElement("tbody",null,t))},y[C.TABLE_ROW]=function(e,t){return o.createElement("tr",null,t)},y[C.TABLE_HEADER_CELL]=function(e,t){return o.createElement("th",null,t)},y[C.TABLE_CELL]=function(e,t){return o.createElement("td",null,t)},y[A.ASSET_HYPERLINK]=function(e){return K(A.ASSET_HYPERLINK,e)},y[A.ENTRY_HYPERLINK]=function(e){return K(A.ENTRY_HYPERLINK,e)},y[A.EMBEDDED_ENTRY]=function(e){return K(A.EMBEDDED_ENTRY,e)},y[A.HYPERLINK]=function(e,t){return o.createElement("a",{href:e.data.uri},t)},y),m=((B={})[I.BOLD]=function(e){return o.createElement("b",null,e)},B[I.ITALIC]=function(e){return o.createElement("i",null,e)},B[I.UNDERLINE]=function(e){return o.createElement("u",null,e)},B[I.CODE]=function(e){return o.createElement("code",null,e)},B[I.SUPERSCRIPT]=function(e){return o.createElement("sup",null,e)},B[I.SUBSCRIPT]=function(e){return o.createElement("sub",null,e)},B);function K(e,t){return o.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?D(e,{renderNode:i(i({},v),t.renderNode),renderMark:i(i({},m),t.renderMark),renderText:t.renderText}):null}},13903:function(e,t,n){"use strict";n.r(t);var r=n(53346),u=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a={},c=function(e,t){var n=t.entryId,r=t.linkType,u=t.spaceId;return u?e.get(u+"!"+r+"!"+n):e.get(r+"!"+n)},l=function e(t,n,r,u){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":o(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,u));u&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==a}));for(var t in e)e[t]===a&&delete e[t];return e}(t))}return t},f=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.type,u=n.linkType;if("ResourceLink"===r){var o=t.sys.urn,i=/.*:spaces\/(?<spaceId>[A-Za-z0-9]*)\/entries\/(?<entryId>[A-Za-z0-9]*)/;if(!i.test(o))return a;var l=o.match(i).groups,f=l.spaceId,E=l.entryId,s=u.split(":")[1];return c(e,{linkType:s,entryId:E,spaceId:f})||a}var L=t.sys.id;return c(e,{linkType:u,entryId:L})||a}(e,t);return r===a?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=u()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),o=[].concat(i(n.items),i(r)),a=new Map(o.reduce((function(e,t){var n,r=(n=t.sys,n.space?[n.type+"!"+n.id,n.space.sys.id+"!"+n.type+"!"+n.id]:[n.type+"!"+n.id]).map((function(e){return[e,t]}));return e.push.apply(e,i(r)),e}),[]));return o.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,l(n,(function(e){return(t=e)&&t.sys&&"Link"===t.sys.type||function(e){return e&&e.sys&&"ResourceLink"===e.sys.type}(e);var t}),(function(e){return f(a,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},53346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,c=Object.prototype,l=c.hasOwnProperty,f=c.propertyIsEnumerable,E="function"==typeof i,s="function"==typeof WeakMap,L=function(){if(s)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),_=function(n,r){var u=n.__proto__||a(n);if(!u)return t(null);var o=u.constructor;if(o===r.Object)return u===r.Object.prototype?{}:t(u);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(c){}return t(u)},d=function(e,t,n,r){var u=_(e,t);for(var o in r.set(e,u),e)l.call(e,o)&&(u[o]=n(e[o],r));if(E)for(var a=i(e),c=0,s=a.length,L=void 0;c<s;++c)L=a[c],f.call(e,L)&&(u[L]=n(e[L],r));return u},S=function(e,t,n,a){var c=_(e,t);a.set(e,c);for(var l=E?o(e).concat(i(e)):o(e),f=0,s=l.length,L=void 0,d=void 0;f<s;++f)if("callee"!==(L=l[f])&&"caller"!==L)if(d=u(e,L)){d.get||d.set||(d.value=n(e[L],a));try{r(c,L,d)}catch(S){c[L]=d.value}}else c[L]=n(e[L],a);return c},O=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},p=Array.isArray,y=Object.getPrototypeOf,B=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function T(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||B,u=n?S:d,o=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var i,a=e.__proto__||y(e),c=a&&a.constructor;if(!c||c===r.Object)return u(e,r,o,t);if(p(e)){if(n)return S(e,r,o,t);i=new c,t.set(e,i);for(var l=0,f=e.length;l<f;++l)i[l]=o(e[l],t);return i}if(e instanceof r.Date)return new c(e.getTime());if(e instanceof r.RegExp)return(i=new c(e.source,e.flags||O(e))).lastIndex=e.lastIndex,i;if(r.Map&&e instanceof r.Map)return i=new c,t.set(e,i),e.forEach((function(e,n){i.set(n,o(e,t))})),i;if(r.Set&&e instanceof r.Set)return i=new c,t.set(e,i),e.forEach((function(e){i.add(o(e,t))})),i;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new c(e.length),t.set(e,i),e.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return i=new c(e.buffer.slice(0)),t.set(e,i),i;if(e instanceof r.ArrayBuffer)return i=e.slice(0),t.set(e,i),i}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:u(e,r,o,t)};return o(e,L())}return T.default=T,T.strict=function(e,t){return T(e,{isStrict:!0,realm:t?t.realm:void 0})},T}()},18872:function(e,t,n){"use strict";var r=n(64836);t.Z=function(e,t){let{raw:n,references:r}=e;void 0===t&&(t={});const i=JSON.parse(n);if(!r||!r.length)return(0,u.documentToReactComponents)(i,t);const a={items:[{sys:{type:"Entry"},richText:i}],includes:{Entry:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"!==t})).map((e=>({...e,sys:{type:"Entry",id:e.contentful_id}}))),Asset:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"===t})).map((e=>({...e,sys:{type:"Asset",id:e.contentful_id}})))}},c=(0,o.default)(a,{removeUnresolved:!0});return(0,u.documentToReactComponents)(c[0].richText,t)};var u=n(74129),o=r(n(13903))},19530:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});var r=n(67294),u=n(94184),o=n.n(u),i=n(25602),a=n(22135),c=(0,i.WP)(["banner"]),l=function(e){var t=e.title,n=e.subtitle,u=e.link,i=e.linkTitle,l=e.children;return r.createElement("div",{className:c()},r.createElement("div",{className:c("__bg")}),r.createElement("div",{className:"container"},r.createElement("div",{className:c("__wrapper")},r.createElement("div",{className:c("__inner")},r.createElement("div",{className:c("__titles")},r.createElement("div",{className:c("__title")},t),n&&r.createElement("div",{className:c("__subtitle")},n)),u&&r.createElement("div",{className:c("__btn-wrapper")},r.createElement(a.r,{className:o()("btn","btn--primary","btn--large"),to:u},i)),l))))}},59780:function(e,t,n){"use strict";n.d(t,{r:function(){return f}});var r=n(67294),u=n(94184),o=n.n(u),i=n(25602),a=n(39453),c=n(19530),l=(0,i.WP)(["subscription-banner"]),f=function(){var e=(0,r.useState)({isSubmitted:!1,isAlreadySubscribed:!1}),t=e[0],n=e[1];return r.createElement("div",{className:o()(l(),"temporary-hide")},r.createElement(c.j,{title:"Stay in the know",subtitle:"Get the latest ReportPortal news, product updates and articles via email"},r.createElement(a.o,{subscriptionFormState:t,setSubscriptionFormState:n})))}}}]);
//# sourceMappingURL=101a4d92b523474d709693a2f076afb8afee8421-ecbf444a0bf2712763f2.js.map