const t=window.App.h;class e{render(){return t("main",null,t("stencil-router",null,t("stencil-route-switch",{scrollTopOffset:0},t("stencil-route",{url:"/",component:"app-home",exact:!0}))))}static get is(){return"app-root"}static get encapsulation(){return"shadow"}static get style(){return"header.sc-app-root{background:#5851ff;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1.sc-app-root, header.sc-app-root{color:#fff}h1.sc-app-root{font-size:1.4rem;font-weight:500;padding:0 12px}"}}var n="/",o="./",r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function i(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function a(t){return t&&t.sensitive?"":"i"}function c(t,e,l){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(c(t[r],e,n).source);return new RegExp("(?:"+o.join("|")+")",a(n))}(t,e,l):function(t,e,c){return function(t,e,r){for(var s=(r=r||{}).strict,c=!1!==r.end,l=i(r.delimiter||n),h=r.delimiters||o,u=[].concat(r.endsWith||[]).map(i).concat("$").join("|"),p="",f=!1,d=0;d<t.length;d++){var y=t[d];if("string"==typeof y)p+=i(y),f=d===t.length-1&&h.indexOf(y[y.length-1])>-1;else{var g=i(y.prefix||""),m=y.repeat?"(?:"+y.pattern+")(?:"+g+"(?:"+y.pattern+"))*":y.pattern;e&&e.push(y),p+=y.optional?y.partial?g+"("+m+")?":"(?:"+g+"("+m+"))?":g+"("+m+")"}}return c?(s||(p+="(?:"+l+")?"),p+="$"===u?"$":"(?="+u+")"):(s||(p+="(?:"+l+"(?="+u+"))?"),f||(p+="(?="+l+"|"+u+")")),new RegExp("^"+p,a(r))}(function(t,e){for(var a,c=[],l=0,h=0,u="",p=e&&e.delimiter||n,f=e&&e.delimiters||o,d=!1;null!==(a=r.exec(t));){var y=a[0],g=a[1],m=a.index;if(u+=t.slice(h,m),h=m+y.length,g)u+=g[1],d=!0;else{var w="",v=t[h],b=a[2],x=a[3],O=a[4],T=a[5];if(!d&&u.length){var P=u.length-1;f.indexOf(u[P])>-1&&(w=u[P],u=u.slice(0,P))}u&&(c.push(u),u="",d=!1);var A=w||p,S=x||O;c.push({name:b||l++,prefix:w,delimiter:A,optional:"?"===T||"*"===T,repeat:"+"===T||"*"===T,partial:""!==w&&void 0!==v&&v!==w,pattern:S?s(S):"[^"+i(A)+"]+?"})}}return(u||h<t.length)&&c.push(u+t.substr(h)),c}(t,c),e,c)}(t,e,l)}function l(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function h(t,e){return l(t,e)?t.substr(e.length):t}function u(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function p(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function d(t){const{pathname:e,search:n,hash:o}=t;let r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:`?${n}`),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:`#${o}`),r}function y(t){return"/"===t.charAt(0)}function g(t){return Math.random().toString(36).substr(2,t)}function m(t,e){for(let n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function w(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return w(t,e[n])});const n=typeof t;if(n!==typeof e)return!1;if("object"===n){const n=t.valueOf(),o=e.valueOf();if(n!==t||o!==e)return w(n,o);const r=Object.keys(t),i=Object.keys(e);return r.length===i.length&&r.every(function(n){return w(t[n],e[n])})}return!1}function v(t,e,n,o){let r;"string"==typeof t?void 0!==(r=function(t){let e=t||"/",n="",o="";const r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));const i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o,query:{},key:""}}(t)).state&&(r.state=e):((r=Object.assign({pathname:""},t)).search&&"?"!==r.search.charAt(0)&&(r.search="?"+r.search),r.hash&&"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash),void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var i;return r.key=n,o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=function(t,e=""){const n=t&&t.split("/")||[];let o=e&&e.split("/")||[];const r=t&&y(t),i=e&&y(e),s=r||i;if(t&&y(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";let a;if(o.length){const t=o[o.length-1];a="."===t||".."===t||""===t}else a=!1;let c=0;for(let t=o.length;t>=0;t--){const e=o[t];"."===e?m(o,t):".."===e?(m(o,t),c++):c&&(m(o,t),c--)}if(!s)for(;c--;c)o.unshift("..");!s||""===o[0]||o[0]&&y(o[0])||o.unshift("");let l=o.join("/");return a&&"/"!==l.substr(-1)&&(l+="/"),l}(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r.query=(i=r.search||"")?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce((t,e)=>{let[n,o]=e.split("=");return t[n]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{},r}const b={},x=1e4;let O=0;function T(t,e={}){"string"==typeof e&&(e={path:e});const{path:n="/",exact:o=!1,strict:r=!1}=e,{re:i,keys:s}=function(t,e){const n=`${e.end}${e.strict}`,o=b[n]||(b[n]={}),r=JSON.stringify(t);if(o[r])return o[r];const i=[],s={re:c(t,i,e),keys:i};return O<x&&(o[r]=s,O+=1),s}(n,{end:o,strict:r}),a=i.exec(t);if(!a)return null;const[l,...h]=a,u=t===l;return o&&!u?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:u,params:s.reduce((t,e,n)=>(t[e.name]=h[n],t),{})}}function P(t,e){for(var n,o,r=null,i=!1,s=!1,a=arguments.length;a-- >2;)S.push(arguments[a]);for(;S.length>0;){var c=S.pop();if(c&&void 0!==c.pop)for(a=c.length;a--;)S.push(c[a]);else"boolean"==typeof c&&(c=null),(s="function"!=typeof t)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(s=!1)),s&&i?r[r.length-1].vtext+=c:null===r?r=[s?{vtext:c}:c]:r.push(s?{vtext:c}:c),i=s}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(a in e.class)e.class[a]&&S.push(a);e.class=S.join(" "),S.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,r||[],k):{vtag:t,vchildren:r,vtext:void 0,vattrs:e,vkey:n,vname:o,w:void 0,g:!1}}function A(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}Object.setPrototypeOf||Array;var S=[],k={forEach:function(t,e){t.forEach(function(t,n,o){return e(A(t),n,o)})},map:function(t,e){return t.map(function(t,n,o){return function(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}(e(A(t),n,o))})}};function E(t,e){return P("context-consumer",{subscribe:t,renderer:e})}var U=function(t,e){void 0===e&&(e=E);var n=new Map,o={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:()=>{}};function r(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=o[t]}):e[t]=Object.assign({},o),e.forceUpdate()}function i(t){return function(e){n.has(e)||(n.set(e,t),r(t,e))}}function s(t,e){return i(e)(t),function(){n.delete(t)}}return{Provider:function(t,e){return o=t.state,n.forEach(r),e},Consumer:function(t,n){return e(s,n[0])},wrapConsumer:function(t,e){var n=t.is;return function(t){var o=t.children,r=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n}(t,["children"]);return P(n,Object.assign({ref:i(e)},r),o)}},injectProps:function(t,e){var n=null,o=Object.keys(t.properties).find(function(e){return 1==t.properties[e].elementRef});if(null==o)throw new Error("Please ensure that your Component "+t.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var r=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=s(this[o],e),r)return r.bind(this)()};var i=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),i)return i.bind(this)()}}}}(),R=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};class j{constructor(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=T(t.pathname,{path:this.url,exact:this.exact,strict:!0})}loadCompleted(){return R(this,void 0,void 0,function*(){let t={};var e,n;this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):!this.match||(n=this.previousMatch,null==(e=this.match)&&null==n||null!=n&&e&&n&&e.path===n.path&&e.url===n.url&&w(e.params,n.params))||!this.routeViewsUpdated||this.routeViewsUpdated(t)})}componentDidUpdate(){return R(this,void 0,void 0,function*(){yield this.loadCompleted()})}componentDidLoad(){return R(this,void 0,void 0,function*(){yield this.loadCompleted()})}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}U.injectProps(j,["location","history","historyType","routeViewsUpdated"]);var L=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};function C(t){return"stencil-route"===t.tagName.toLowerCase()}class I{constructor(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[]}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}regenerateSubscribers(t){return L(this,void 0,void 0,function*(){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(C).map((n,o)=>{const r=function(e,o,r){return T(t.pathname,{path:n.url,exact:n.exact,strict:!0})}();return r&&-1===e&&(e=o),{el:n,match:r}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const n=this.subscribers[this.activeIndex];this.scrollTopOffset&&(n.el.scrollTopOffset=this.scrollTopOffset),n.el.group=this.group,n.el.match=n.match,n.el.componentUpdated=(t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))})})}render(){return t("slot",null)}static get is(){return"stencil-route-switch"}static get properties(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}}}function M(t,...e){t||console.error(...e)}function H(t,...e){t||console.warn(...e)}U.injectProps(I,["location","routeViewsUpdated"]);const V=()=>{let t,e=[];return{setPrompt:e=>(H(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,n,o,r)=>{if(null!=t){const i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(H(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:t=>{let n=!0;const o=(...e)=>{n&&t(...e)};return e.push(o),()=>{n=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},N=!("undefined"==typeof window||!window.document||!window.document.createElement),$=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),q=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),D=(t,e)=>e(window.confirm(t)),_=t=>{var e=window[t],n="__storage_test__";try{return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}},B=(t="scrollPositions")=>{let e=new Map;if(_("sessionStorage")){const n=window.sessionStorage.getItem(t);e=n?new Map(JSON.parse(n)):e}function n(t,n){if(e.set(t,n),_("sessionStorage")){const t=[];e.forEach((e,n)=>{t.push([n,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:n,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){n(t,[window.scrollX,window.scrollY])}}},W=()=>{try{return window.history.state||{}}catch(t){return{}}},Y={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+f(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:f,decodePath:p},slash:{encodePath:p,decodePath:p}},F=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},J=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var Q=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};function X(t,e){const n=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})}const z={browser:(t={})=>{M(N,"Browser history needs a DOM");const e=window.history,n=(()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history})(),o=!(()=>-1===window.navigator.userAgent.indexOf("Trident"))(),r=B(),i=null!=t.forceRefresh&&t.forceRefresh,s=null!=t.getUserConfirmation?t.getUserConfirmation:D,a=null!=t.keyLength?t.keyLength:6,c=t.basename?u(p(t.basename)):"",f=t=>{t=t||{};const{key:e,state:n}=t,{pathname:o,search:r,hash:i}=window.location;let s=o+r+i;return H(!c||l(s,c),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+s+'" to begin with "'+c+'".'),c&&(s=h(s,c)),v(s,n,e||g(a))},y=V(),m=t=>{r.capture(j.location.key),Object.assign(j,t),j.location.scrollPosition=r.get(j.location.key),j.length=e.length,y.notifyListeners(j.location,j.action)},w=t=>{(t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"))(t)||O(f(t.state))},b=()=>{O(f(W()))};let x=!1;const O=t=>{if(x)x=!1,m();else{const e="POP";y.confirmTransitionTo(t,e,s,n=>{n?m({action:e,location:t}):T(t)})}},T=t=>{let e=A.indexOf(j.location.key);-1===e&&(e=0);let n=A.indexOf(t.key);-1===n&&(n=0);const o=e-n;o&&(x=!0,k(o))},P=f(W());let A=[P.key];const S=t=>c+d(t),k=t=>{e.go(t)};let E=0;const U=t=>{1===(E+=t)?($(window,"popstate",w),o&&$(window,"hashchange",b)):0===E&&(q(window,"popstate",w),o&&q(window,"hashchange",b))};let R=!1;const j={length:e.length,action:"POP",location:P,createHref:S,push:(t,o)=>{H(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const r=v(t,o,g(a),j.location);y.confirmTransitionTo(r,"PUSH",s,t=>{if(!t)return;const o=S(r),{key:s,state:a}=r;if(n)if(e.pushState({key:s,state:a},void 0,o),i)window.location.href=o;else{const t=A.indexOf(j.location.key),e=A.slice(0,-1===t?0:t+1);e.push(r.key),A=e,m({action:"PUSH",location:r})}else H(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o})},replace:(t,o)=>{H(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const r=v(t,o,g(a),j.location);y.confirmTransitionTo(r,"REPLACE",s,t=>{if(!t)return;const o=S(r),{key:s,state:a}=r;if(n)if(e.replaceState({key:s,state:a},void 0,o),i)window.location.replace(o);else{const t=A.indexOf(j.location.key);-1!==t&&(A[t]=r.key),m({action:"REPLACE",location:r})}else H(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)})},go:k,goBack:()=>k(-1),goForward:()=>k(1),block:(t="")=>{const e=y.setPrompt(t);return R||(U(1),R=!0),()=>(R&&(R=!1,U(-1)),e())},listen:t=>{const e=y.appendListener(t);return U(1),()=>{U(-1),e()}}};return j},hash:(t={})=>{M(N,"Hash history needs a DOM");const e=window.history,n=(()=>-1===window.navigator.userAgent.indexOf("Firefox"))(),o=null!=t.keyLength?t.keyLength:6,{getUserConfirmation:r=D,hashType:i="slash"}=t,s=t.basename?u(p(t.basename)):"",{encodePath:a,decodePath:c}=Y[i],f=()=>{let t=c(F());return H(!s||l(t,s),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+s+'".'),s&&(t=h(t,s)),v(t,void 0,g(o))},y=V(),m=t=>{Object.assign(C,t),C.length=e.length,y.notifyListeners(C.location,C.action)};let b=!1,x=null;const O=()=>{const t=F(),e=a(t);if(t!==e)J(e);else{const t=f(),e=C.location;if(!b&&function(n,o){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&w(e.state,t.state)}())return;if(x===d(t))return;x=null,T(t)}},T=t=>{if(b)b=!1,m();else{const e="POP";y.confirmTransitionTo(t,e,r,n=>{n?m({action:e,location:t}):P(t)})}},P=t=>{let e=E.lastIndexOf(d(C.location));-1===e&&(e=0);let n=E.lastIndexOf(d(t));-1===n&&(n=0);const o=e-n;o&&(b=!0,U(o))},A=F(),S=a(A);A!==S&&J(S);const k=f();let E=[d(k)];const U=t=>{H(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let R=0;const j=t=>{1===(R+=t)?$(window,"hashchange",O):0===R&&q(window,"hashchange",O)};let L=!1;const C={length:e.length,action:"POP",location:k,createHref:t=>"#"+a(s+d(t)),push:(t,e)=>{H(void 0===e,"Hash history cannot push state; it is ignored");const n=v(t,void 0,g(o),C.location);y.confirmTransitionTo(n,"PUSH",r,t=>{if(!t)return;const e=d(n),o=a(s+e);if(F()!==o){x=e,(t=>window.location.hash=t)(o);const t=E.lastIndexOf(d(C.location)),r=E.slice(0,-1===t?0:t+1);r.push(e),E=r,m({action:"PUSH",location:n})}else H(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),m()})},replace:(t,e)=>{H(void 0===e,"Hash history cannot replace state; it is ignored");const n=v(t,void 0,g(o),C.location);y.confirmTransitionTo(n,"REPLACE",r,t=>{if(!t)return;const e=d(n),o=a(s+e);F()!==o&&(x=e,J(o));const r=E.indexOf(d(C.location));-1!==r&&(E[r]=e),m({action:"REPLACE",location:n})})},go:U,goBack:()=>U(-1),goForward:()=>U(1),block:(t="")=>{const e=y.setPrompt(t);return L||(j(1),L=!0),()=>(L&&(L=!1,j(-1)),e())},listen:t=>{const e=y.appendListener(t);return j(1),()=>{j(-1),e()}}};return C}};class G{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=((t={})=>{if(t.scrollToId&&"browser"===this.historyType){const e=document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)})}componentWillLoad(){this.history=z[this.historyType](),this.history.listen(t=>Q(this,void 0,void 0,function*(){t=X(t,this.root),this.location=t})),this.location=X(this.history.location,this.root)}scrollTo(t){if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(()=>{this.history&&this.history.location&&Array.isArray(this.history.location.scrollPosition)&&window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,t)})}render(){if(this.location&&this.history)return t(U.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{e as AppRoot,j as StencilRoute,I as StencilRouteSwitch,G as StencilRouter};