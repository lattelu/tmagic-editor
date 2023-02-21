var ut=Object.defineProperty;var ct=(e,n,t)=>n in e?ut(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var y=(e,n,t)=>(ct(e,typeof n!="symbol"?n+"":n,t),t);function _r(){import("data:text/javascript,")}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const ft="modulepreload",lt=function(e){return"/static/vue3/runtime/playground/"+e},be={},we=function(n,t,r){return!t||t.length===0?n():Promise.all(t.map(i=>{if(i=lt(i),i in be)return;be[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ft,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((f,v)=>{a.addEventListener("load",f),a.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())};var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ue={exports:{}},K=typeof Reflect=="object"?Reflect:null,Oe=K&&typeof K.apply=="function"?K.apply:function(n,t,r){return Function.prototype.apply.call(n,t,r)},se;K&&typeof K.ownKeys=="function"?se=K.ownKeys:Object.getOwnPropertySymbols?se=function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:se=function(n){return Object.getOwnPropertyNames(n)};function dt(e){console&&console.warn&&console.warn(e)}var Ve=Number.isNaN||function(n){return n!==n};function w(){w.init.call(this)}ue.exports=w;ue.exports.once=mt;w.EventEmitter=w;w.prototype._events=void 0;w.prototype._eventsCount=0;w.prototype._maxListeners=void 0;var Te=10;function ce(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(w,"defaultMaxListeners",{enumerable:!0,get:function(){return Te},set:function(e){if(typeof e!="number"||e<0||Ve(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");Te=e}});w.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};w.prototype.setMaxListeners=function(n){if(typeof n!="number"||n<0||Ve(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this};function Be(e){return e._maxListeners===void 0?w.defaultMaxListeners:e._maxListeners}w.prototype.getMaxListeners=function(){return Be(this)};w.prototype.emit=function(n){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i=n==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var f=o[n];if(f===void 0)return!1;if(typeof f=="function")Oe(f,this,t);else for(var v=f.length,$=ze(f,v),r=0;r<v;++r)Oe($[r],this,t);return!0};function Ue(e,n,t,r){var i,o,s;if(ce(t),o=e._events,o===void 0?(o=e._events=Object.create(null),e._eventsCount=0):(o.newListener!==void 0&&(e.emit("newListener",n,t.listener?t.listener:t),o=e._events),s=o[n]),s===void 0)s=o[n]=t,++e._eventsCount;else if(typeof s=="function"?s=o[n]=r?[t,s]:[s,t]:r?s.unshift(t):s.push(t),i=Be(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(n)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=n,a.count=s.length,dt(a)}return e}w.prototype.addListener=function(n,t){return Ue(this,n,t,!1)};w.prototype.on=w.prototype.addListener;w.prototype.prependListener=function(n,t){return Ue(this,n,t,!0)};function ht(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function He(e,n,t){var r={fired:!1,wrapFn:void 0,target:e,type:n,listener:t},i=ht.bind(r);return i.listener=t,r.wrapFn=i,i}w.prototype.once=function(n,t){return ce(t),this.on(n,He(this,n,t)),this};w.prototype.prependOnceListener=function(n,t){return ce(t),this.prependListener(n,He(this,n,t)),this};w.prototype.removeListener=function(n,t){var r,i,o,s,a;if(ce(t),i=this._events,i===void 0)return this;if(r=i[n],r===void 0)return this;if(r===t||r.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[n],i.removeListener&&this.emit("removeListener",n,r.listener||t));else if(typeof r!="function"){for(o=-1,s=r.length-1;s>=0;s--)if(r[s]===t||r[s].listener===t){a=r[s].listener,o=s;break}if(o<0)return this;o===0?r.shift():pt(r,o),r.length===1&&(i[n]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",n,a||t)}return this};w.prototype.off=w.prototype.removeListener;w.prototype.removeAllListeners=function(n){var t,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[n]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[n]),this;if(arguments.length===0){var o=Object.keys(r),s;for(i=0;i<o.length;++i)s=o[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=r[n],typeof t=="function")this.removeListener(n,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(n,t[i]);return this};function Fe(e,n,t){var r=e._events;if(r===void 0)return[];var i=r[n];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?gt(i):ze(i,i.length)}w.prototype.listeners=function(n){return Fe(this,n,!0)};w.prototype.rawListeners=function(n){return Fe(this,n,!1)};w.listenerCount=function(e,n){return typeof e.listenerCount=="function"?e.listenerCount(n):Ye.call(e,n)};w.prototype.listenerCount=Ye;function Ye(e){var n=this._events;if(n!==void 0){var t=n[e];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}w.prototype.eventNames=function(){return this._eventsCount>0?se(this._events):[]};function ze(e,n){for(var t=new Array(n),r=0;r<n;++r)t[r]=e[r];return t}function pt(e,n){for(;n+1<e.length;n++)e[n]=e[n+1];e.pop()}function gt(e){for(var n=new Array(e.length),t=0;t<n.length;++t)n[t]=e[t].listener||e[t];return n}function mt(e,n){return new Promise(function(t,r){function i(s){e.removeListener(n,o),r(s)}function o(){typeof e.removeListener=="function"&&e.removeListener("error",i),t([].slice.call(arguments))}qe(e,n,o,{once:!0}),n!=="error"&&vt(e,i,{once:!0})})}function vt(e,n,t){typeof e.on=="function"&&qe(e,"error",n,t)}function qe(e,n,t,r){if(typeof e.on=="function")r.once?e.once(n,t):e.on(n,t);else if(typeof e.addEventListener=="function")e.addEventListener(n,function i(o){r.once&&e.removeEventListener(n,i),t(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}var yt=typeof global=="object"&&global&&global.Object===Object&&global;const Ke=yt;var $t=typeof self=="object"&&self&&self.Object===Object&&self,bt=Ke||$t||Function("return this")();const V=bt;var wt=V.Symbol;const ae=wt;var Qe=Object.prototype,Ot=Qe.hasOwnProperty,Tt=Qe.toString,J=ae?ae.toStringTag:void 0;function Et(e){var n=Ot.call(e,J),t=e[J];try{e[J]=void 0;var r=!0}catch(o){}var i=Tt.call(e);return r&&(n?e[J]=t:delete e[J]),i}var Mt=Object.prototype,_t=Mt.toString;function jt(e){return _t.call(e)}var St="[object Null]",Lt="[object Undefined]",Ee=ae?ae.toStringTag:void 0;function ee(e){return e==null?e===void 0?Lt:St:Ee&&Ee in Object(e)?Et(e):jt(e)}function ye(e){return e!=null&&typeof e=="object"}var Ct=Array.isArray;const xt=Ct;function Ge(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var Dt="[object AsyncFunction]",At="[object Function]",Pt="[object GeneratorFunction]",It="[object Proxy]";function Je(e){if(!Ge(e))return!1;var n=ee(e);return n==At||n==Pt||n==Dt||n==It}var Nt=V["__core-js_shared__"];const le=Nt;var Me=function(){var e=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function kt(e){return!!Me&&Me in e}var Wt=Function.prototype,Rt=Wt.toString;function Y(e){if(e!=null){try{return Rt.call(e)}catch(n){}try{return e+""}catch(n){}}return""}var Vt=/[\\^$.*+?()[\]{}|]/g,Bt=/^\[object .+?Constructor\]$/,Ut=Function.prototype,Ht=Object.prototype,Ft=Ut.toString,Yt=Ht.hasOwnProperty,zt=RegExp("^"+Ft.call(Yt).replace(Vt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function qt(e){if(!Ge(e)||kt(e))return!1;var n=Je(e)?zt:Bt;return n.test(Y(e))}function Kt(e,n){return e==null?void 0:e[n]}function te(e,n){var t=Kt(e,n);return qt(t)?t:void 0}var Qt=te(V,"WeakMap");const he=Qt;var Gt=9007199254740991;function Ze(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Gt}function Jt(e){return e!=null&&Ze(e.length)&&!Je(e)}var Zt=Object.prototype;function Xe(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||Zt;return e===t}var Xt="[object Arguments]";function _e(e){return ye(e)&&ee(e)==Xt}var et=Object.prototype,en=et.hasOwnProperty,tn=et.propertyIsEnumerable,nn=_e(function(){return arguments}())?_e:function(e){return ye(e)&&en.call(e,"callee")&&!tn.call(e,"callee")};const rn=nn;function on(){return!1}var tt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,je=tt&&typeof module=="object"&&module&&!module.nodeType&&module,sn=je&&je.exports===tt,Se=sn?V.Buffer:void 0,an=Se?Se.isBuffer:void 0,un=an||on;const cn=un;var fn="[object Arguments]",ln="[object Array]",dn="[object Boolean]",hn="[object Date]",pn="[object Error]",gn="[object Function]",mn="[object Map]",vn="[object Number]",yn="[object Object]",$n="[object RegExp]",bn="[object Set]",wn="[object String]",On="[object WeakMap]",Tn="[object ArrayBuffer]",En="[object DataView]",Mn="[object Float32Array]",_n="[object Float64Array]",jn="[object Int8Array]",Sn="[object Int16Array]",Ln="[object Int32Array]",Cn="[object Uint8Array]",xn="[object Uint8ClampedArray]",Dn="[object Uint16Array]",An="[object Uint32Array]",T={};T[Mn]=T[_n]=T[jn]=T[Sn]=T[Ln]=T[Cn]=T[xn]=T[Dn]=T[An]=!0;T[fn]=T[ln]=T[Tn]=T[dn]=T[En]=T[hn]=T[pn]=T[gn]=T[mn]=T[vn]=T[yn]=T[$n]=T[bn]=T[wn]=T[On]=!1;function Pn(e){return ye(e)&&Ze(e.length)&&!!T[ee(e)]}function In(e){return function(n){return e(n)}}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,X=nt&&typeof module=="object"&&module&&!module.nodeType&&module,Nn=X&&X.exports===nt,de=Nn&&Ke.process,kn=function(){try{var e=X&&X.require&&X.require("util").types;return e||de&&de.binding&&de.binding("util")}catch(n){}}();const Le=kn;var Ce=Le&&Le.isTypedArray,Wn=Ce?In(Ce):Pn;const Rn=Wn;function Vn(e,n){return function(t){return e(n(t))}}var Bn=Vn(Object.keys,Object);const Un=Bn;var Hn=Object.prototype,Fn=Hn.hasOwnProperty;function Yn(e){if(!Xe(e))return Un(e);var n=[];for(var t in Object(e))Fn.call(e,t)&&t!="constructor"&&n.push(t);return n}var zn=te(V,"Map");const pe=zn;var qn=te(V,"DataView");const ge=qn;var Kn=te(V,"Promise");const me=Kn;var Qn=te(V,"Set");const ve=Qn;var xe="[object Map]",Gn="[object Object]",De="[object Promise]",Ae="[object Set]",Pe="[object WeakMap]",Ie="[object DataView]",Jn=Y(ge),Zn=Y(pe),Xn=Y(me),er=Y(ve),tr=Y(he),F=ee;(ge&&F(new ge(new ArrayBuffer(1)))!=Ie||pe&&F(new pe)!=xe||me&&F(me.resolve())!=De||ve&&F(new ve)!=Ae||he&&F(new he)!=Pe)&&(F=function(e){var n=ee(e),t=n==Gn?e.constructor:void 0,r=t?Y(t):"";if(r)switch(r){case Jn:return Ie;case Zn:return xe;case Xn:return De;case er:return Ae;case tr:return Pe}return n});const nr=F;var rr="[object Map]",ir="[object Set]",or=Object.prototype,sr=or.hasOwnProperty;function ar(e){if(e==null)return!0;if(Jt(e)&&(xt(e)||typeof e=="string"||typeof e.splice=="function"||cn(e)||Rn(e)||rn(e)))return!e.length;var n=nr(e);if(n==rr||n==ir)return!e.size;if(Xe(e))return!Yn(e).length;for(var t in e)if(sr.call(e,t))return!1;return!0}var rt=(e=>(e.CODE="code",e))(rt||{});class ur{constructor(n=globalThis.navigator.userAgent,t={}){y(this,"isIos",!1);y(this,"isIphone",!1);y(this,"isIpad",!1);y(this,"isAndroid",!1);y(this,"isAndroidPad",!1);y(this,"isMac",!1);y(this,"isWin",!1);y(this,"isMqq",!1);y(this,"isWechat",!1);y(this,"isWeb",!1);this.isIphone=n.indexOf("iPhone")>=0,this.isIpad=/(iPad).*OS\s([\d_]+)/.test(n),this.isIos=this.isIphone||this.isIpad,this.isAndroid=n.indexOf("Android")>=0,this.isAndroidPad=this.isAndroid&&n.indexOf("Mobile")<0,this.isMac=n.indexOf("Macintosh")>=0,this.isWin=n.indexOf("Windows")>=0,this.isMqq=/QQ\/([\d.]+)/.test(n),this.isWechat=n.indexOf("MicroMessenger")>=0&&n.indexOf("wxwork")<0,this.isWeb=!this.isIos&&!this.isAndroid&&!/(WebOS|BlackBerry)/.test(n),Object.entries(t).forEach(([r,i])=>{this[r]=i})}}const Ne="magic:common:events:",it="magic:common:actions:",oe={SHOW:"show",HIDE:"hide",SCROLL_TO_VIEW:"scrollIntoView",SCROLL_TO_TOP:"scrollToTop"},cr=e=>e.startsWith(Ne)?e:`${Ne}${e}`,fr=e=>e.startsWith(it),ot=(e,n)=>{var r;if(!e)return!1;if(!e.id)return ot(e.parentElement,n);const t=(r=n.page)==null?void 0:r.getNode(e.id);return t||!1},ke=(e,n,t)=>{const r=ot(t.target,e);r&&e.emit(cr(n),r)},lr=e=>{window.document.body.addEventListener("click",n=>{ke(e,"click",n)}),window.document.body.addEventListener("click",n=>{ke(e,"click:capture",n)},!0)},dr=(e,n)=>{const{instance:t}=n;switch(e.replace(it,"")){case oe.SHOW:t.show();break;case oe.HIDE:t.hide();break;case oe.SCROLL_TO_VIEW:t.$el.scrollIntoView({behavior:"smooth"});break;case oe.SCROLL_TO_TOP:window.scrollTo({top:0,behavior:"smooth"});break}};class hr{constructor(){y(this,"data",{})}set(n,t){this.data[n]=t}get(n){return this.data[n]}}class We extends ue.exports.EventEmitter{constructor(t){super();y(this,"data");y(this,"style");y(this,"events");y(this,"instance");y(this,"page");y(this,"parent");y(this,"app");y(this,"store",new hr);this.page=t.page,this.parent=t.parent,this.app=t.app;const{events:r}=t.config;this.data=t.config,this.events=r,this.listenLifeSafe(),this.once("destroy",()=>{this.instance=null,typeof this.data.destroy=="function"&&this.data.destroy(this),this.listenLifeSafe()})}listenLifeSafe(){this.once("created",async t=>{this.instance=t,await this.runCodeBlock("created")}),this.once("mounted",async t=>{this.instance=t;const r=this.app.eventQueueMap[t.config.id]||[];for(let i=r.shift();i;i=r.shift())this.app.eventHandler(i.eventConfig,i.fromCpt,i.args);await this.runCodeBlock("mounted")})}async runCodeBlock(t){var r,i,o,s;if(typeof this.data[t]=="function"){await this.data[t](this);return}if(!(((r=this.data[t])==null?void 0:r.hookType)!==rt.CODE||!this.app.codeDsl||ar((i=this.app)==null?void 0:i.codeDsl)))for(const a of this.data[t].hookData){const{codeId:f,params:v={}}=a;this.app.codeDsl[f]&&typeof((s=(o=this.app)==null?void 0:o.codeDsl[f])==null?void 0:s.content)=="function"&&await this.app.codeDsl[f].content({app:this.app,params:v})}}}class pr extends We{constructor(t){super(t);y(this,"nodes",new Map);this.setNode(t.config.id,this),this.initNode(t.config,this)}initNode(t,r){var o;const i=new We({config:t,parent:r,page:this,app:this.app});this.setNode(t.id,i),(o=t.items)==null||o.forEach(s=>{this.initNode(s,i)})}getNode(t){return this.nodes.get(t)}setNode(t,r){this.nodes.set(t,r)}deleteNode(t){this.nodes.delete(t)}}const gr=e=>{if(typeof e!="string")return e;const n={};return e.split(";").forEach(t=>{if(!t)return;const r=t.split(":");let i=r.shift(),o=r.join(":");!i||(i=i.replace(/^\s*/,"").replace(/\s*$/,""),o=o.replace(/^\s*/,"").replace(/\s*$/,""),i=i.split("-").map((s,a)=>a>0?`${s[0].toUpperCase()}${s.substr(1)}`:s).join(""),n[i]=o)}),n},mr=e=>e&&!/^url/.test(e)&&!/^linear-gradient/.test(e)?`url(${e})`:e,vr=e=>/^(-?\d+)(\.\d+)?$/.test(e);class yr extends ue.exports.EventEmitter{constructor(t){var r;super();y(this,"env");y(this,"codeDsl");y(this,"pages",new Map);y(this,"page");y(this,"platform","mobile");y(this,"jsEngine","browser");y(this,"designWidth",375);y(this,"components",new Map);y(this,"eventQueueMap",{});if(this.env=new ur(t.ua),this.codeDsl=(r=t.config)==null?void 0:r.codeBlocks,t.platform&&(this.platform=t.platform),t.jsEngine&&(this.jsEngine=t.jsEngine),t.designWidth&&(this.designWidth=t.designWidth),this.platform==="mobile"||this.platform==="editor"){const i=()=>{const{width:o}=document.documentElement.getBoundingClientRect(),s=o/(this.designWidth/100);document.documentElement.style.fontSize=`${s}px`};i(),document.body.style.fontSize="14px",globalThis.addEventListener("resize",i)}t.transformStyle&&(this.transformStyle=t.transformStyle),t.config&&this.setConfig(t.config,t.curPage),lr(this)}transformStyle(t){if(!t)return{};let r={};const i={};typeof t=="string"?r=gr(t):r={...t};const o=["zIndex","opacity","fontWeight"];return Object.entries(r).forEach(([s,a])=>{if(s==="backgroundImage")a&&(i[s]=mr(a));else if(s==="transform"&&typeof a!="string"){const f=Object.entries(a).map(([v,$])=>$.trim()?(v==="rotate"&&vr($)&&($=`${$}deg`),`${v}(${$})`):"").join(" ");i[s]=f.trim()?f:"none"}else!o.includes(s)&&a&&/^[-]?[0-9]*[.]?[0-9]*$/.test(a)?i[s]=`${a/100}rem`:i[s]=a}),i}setConfig(t,r){var i,o,s;this.codeDsl=t.codeBlocks,this.pages=new Map,(i=t.items)==null||i.forEach(a=>{this.pages.set(a.id,new pr({config:a,app:this}))}),this.setPage(r||((s=(o=this.page)==null?void 0:o.data)==null?void 0:s.id))}setPage(t){let r;t&&(r=this.pages.get(t)),r||(r=this.pages.get(this.pages.keys().next().value)),this.page=r,this.platform!=="magic"&&this.bindEvents()}registerComponent(t,r){this.components.set(t,r)}unregisterComponent(t){this.components.delete(t)}resolveComponent(t){return this.components.get(t)}bindEvents(){var t;if(!!this.page){this.removeAllListeners();for(const[,r]of this.page.nodes)(t=r.events)==null||t.forEach(i=>this.bindEvent(i,`${r.data.id}`))}}bindEvent(t,r){const{name:i}=t;this.on(`${i}_${r}`,(o,...s)=>{this.eventHandler(t,o,s)})}emit(t,r,...i){var o;return(o=r==null?void 0:r.data)!=null&&o.id?super.emit(`${String(t)}_${r.data.id}`,r,...i):super.emit(t,r,...i)}eventHandler(t,r,i){if(!this.page)throw new Error("\u5F53\u524D\u6CA1\u6709\u9875\u9762");const{method:o,to:s}=t,a=this.page.getNode(s);if(!a)throw`ID\u4E3A${s}\u7684\u7EC4\u4EF6\u4E0D\u5B58\u5728`;if(fr(o))return dr(o,a);a.instance?typeof a.instance[o]=="function"&&a.instance[o](r,...i):this.addEventToMap({eventConfig:t,fromCpt:r,args:i})}destroy(){this.removeAllListeners(),this.pages.clear()}addEventToMap(t){this.eventQueueMap[t.eventConfig.to]?this.eventQueueMap[t.eventConfig.to].push(t):this.eventQueueMap[t.eventConfig.to]=[t]}}var st={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Re,function(){var t=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",f="hour",v="day",$="week",E="month",x="quarter",S="year",P="date",d="Invalid Date",D=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},A=function(m,l,u){var h=String(m);return!h||h.length>=l?m:""+Array(l+1-h.length).join(u)+m},ne={s:A,z:function(m){var l=-m.utcOffset(),u=Math.abs(l),h=Math.floor(u/60),c=u%60;return(l<=0?"+":"-")+A(h,2,"0")+":"+A(c,2,"0")},m:function m(l,u){if(l.date()<u.date())return-m(u,l);var h=12*(u.year()-l.year())+(u.month()-l.month()),c=l.clone().add(h,E),g=u-c<0,p=l.clone().add(h+(g?-1:1),E);return+(-(h+(u-c)/(g?c-p:p-c))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:E,y:S,w:$,d:v,D:P,h:f,m:a,s,ms:o,Q:x}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},N="en",I={};I[N]=U;var H=function(m){return m instanceof re},z=function m(l,u,h){var c;if(!l)return N;if(typeof l=="string"){var g=l.toLowerCase();I[g]&&(c=g),u&&(I[g]=u,c=g);var p=l.split("-");if(!c&&p.length>1)return m(p[0])}else{var b=l.name;I[b]=l,c=b}return!h&&c&&(N=c),c||!h&&N},M=function(m,l){if(H(m))return m.clone();var u=typeof l=="object"?l:{};return u.date=m,u.args=arguments,new re(u)},O=ne;O.l=z,O.i=H,O.w=function(m,l){return M(m,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var re=function(){function m(u){this.$L=z(u.locale,null,!0),this.parse(u)}var l=m.prototype;return l.parse=function(u){this.$d=function(h){var c=h.date,g=h.utc;if(c===null)return new Date(NaN);if(O.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var p=c.match(D);if(p){var b=p[2]-1||0,j=(p[7]||"0").substring(0,3);return g?new Date(Date.UTC(p[1],b,p[3]||1,p[4]||0,p[5]||0,p[6]||0,j)):new Date(p[1],b,p[3]||1,p[4]||0,p[5]||0,p[6]||0,j)}}return new Date(c)}(u),this.$x=u.x||{},this.init()},l.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},l.$utils=function(){return O},l.isValid=function(){return this.$d.toString()!==d},l.isSame=function(u,h){var c=M(u);return this.startOf(h)<=c&&c<=this.endOf(h)},l.isAfter=function(u,h){return M(u)<this.startOf(h)},l.isBefore=function(u,h){return this.endOf(h)<M(u)},l.$g=function(u,h,c){return O.u(u)?this[h]:this.set(c,u)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(u,h){var c=this,g=!!O.u(h)||h,p=O.p(u),b=function(q,C){var R=O.w(c.$u?Date.UTC(c.$y,C,q):new Date(c.$y,C,q),c);return g?R:R.endOf(v)},j=function(q,C){return O.w(c.toDate()[q].apply(c.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(C)),c)},_=this.$W,L=this.$M,W=this.$D,k="set"+(this.$u?"UTC":"");switch(p){case S:return g?b(1,0):b(31,11);case E:return g?b(1,L):b(0,L+1);case $:var Q=this.$locale().weekStart||0,G=(_<Q?_+7:_)-Q;return b(g?W-G:W+(6-G),L);case v:case P:return j(k+"Hours",0);case f:return j(k+"Minutes",1);case a:return j(k+"Seconds",2);case s:return j(k+"Milliseconds",3);default:return this.clone()}},l.endOf=function(u){return this.startOf(u,!1)},l.$set=function(u,h){var c,g=O.p(u),p="set"+(this.$u?"UTC":""),b=(c={},c[v]=p+"Date",c[P]=p+"Date",c[E]=p+"Month",c[S]=p+"FullYear",c[f]=p+"Hours",c[a]=p+"Minutes",c[s]=p+"Seconds",c[o]=p+"Milliseconds",c)[g],j=g===v?this.$D+(h-this.$W):h;if(g===E||g===S){var _=this.clone().set(P,1);_.$d[b](j),_.init(),this.$d=_.set(P,Math.min(this.$D,_.daysInMonth())).$d}else b&&this.$d[b](j);return this.init(),this},l.set=function(u,h){return this.clone().$set(u,h)},l.get=function(u){return this[O.p(u)]()},l.add=function(u,h){var c,g=this;u=Number(u);var p=O.p(h),b=function(L){var W=M(g);return O.w(W.date(W.date()+Math.round(L*u)),g)};if(p===E)return this.set(E,this.$M+u);if(p===S)return this.set(S,this.$y+u);if(p===v)return b(1);if(p===$)return b(7);var j=(c={},c[a]=r,c[f]=i,c[s]=t,c)[p]||1,_=this.$d.getTime()+u*j;return O.w(_,this)},l.subtract=function(u,h){return this.add(-1*u,h)},l.format=function(u){var h=this,c=this.$locale();if(!this.isValid())return c.invalidDate||d;var g=u||"YYYY-MM-DDTHH:mm:ssZ",p=O.z(this),b=this.$H,j=this.$m,_=this.$M,L=c.weekdays,W=c.months,k=function(C,R,fe,ie){return C&&(C[R]||C(h,g))||fe[R].slice(0,ie)},Q=function(C){return O.s(b%12||12,C,"0")},G=c.meridiem||function(C,R,fe){var ie=C<12?"AM":"PM";return fe?ie.toLowerCase():ie},q={YY:String(this.$y).slice(-2),YYYY:this.$y,M:_+1,MM:O.s(_+1,2,"0"),MMM:k(c.monthsShort,_,W,3),MMMM:k(W,_),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:k(c.weekdaysMin,this.$W,L,2),ddd:k(c.weekdaysShort,this.$W,L,3),dddd:L[this.$W],H:String(b),HH:O.s(b,2,"0"),h:Q(1),hh:Q(2),a:G(b,j,!0),A:G(b,j,!1),m:String(j),mm:O.s(j,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:p};return g.replace(B,function(C,R){return R||q[C]||p.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(u,h,c){var g,p=O.p(h),b=M(u),j=(b.utcOffset()-this.utcOffset())*r,_=this-b,L=O.m(this,b);return L=(g={},g[S]=L/12,g[E]=L,g[x]=L/3,g[$]=(_-j)/6048e5,g[v]=(_-j)/864e5,g[f]=_/i,g[a]=_/r,g[s]=_/t,g)[p]||_,c?L:O.a(L)},l.daysInMonth=function(){return this.endOf(E).$D},l.$locale=function(){return I[this.$L]},l.locale=function(u,h){if(!u)return this.$L;var c=this.clone(),g=z(u,h,!0);return g&&(c.$L=g),c},l.clone=function(){return O.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},m}(),$e=re.prototype;return M.prototype=$e,[["$ms",o],["$s",s],["$m",a],["$H",f],["$W",v],["$M",E],["$y",S],["$D",P]].forEach(function(m){$e[m[1]]=function(l){return this.$g(l,m[0],m[1])}}),M.extend=function(m,l){return m.$i||(m(l,re,M),m.$i=!0),M},M.locale=z,M.isDayjs=H,M.unix=function(m){return M(1e3*m)},M.en=I[N],M.Ls=I,M.p={},M})})(st);const $r=st.exports;var at={exports:{}};(function(e,n){(function(t,r){e.exports=r()})(Re,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(o,s,a){var f=s.prototype;a.utc=function(d){var D={date:d,utc:!0,args:arguments};return new s(D)},f.utc=function(d){var D=a(this.toDate(),{locale:this.$L,utc:!0});return d?D.add(this.utcOffset(),t):D},f.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var v=f.parse;f.parse=function(d){d.utc&&(this.$u=!0),this.$utils().u(d.$offset)||(this.$offset=d.$offset),v.call(this,d)};var $=f.init;f.init=function(){if(this.$u){var d=this.$d;this.$y=d.getUTCFullYear(),this.$M=d.getUTCMonth(),this.$D=d.getUTCDate(),this.$W=d.getUTCDay(),this.$H=d.getUTCHours(),this.$m=d.getUTCMinutes(),this.$s=d.getUTCSeconds(),this.$ms=d.getUTCMilliseconds()}else $.call(this)};var E=f.utcOffset;f.utcOffset=function(d,D){var B=this.$utils().u;if(B(d))return this.$u?0:B(this.$offset)?E.call(this):this.$offset;if(typeof d=="string"&&(d=function(N){N===void 0&&(N="");var I=N.match(r);if(!I)return null;var H=(""+I[0]).match(i)||["-",0,0],z=H[0],M=60*+H[1]+ +H[2];return M===0?0:z==="+"?M:-M}(d),d===null))return this;var U=Math.abs(d)<=16?60*d:d,A=this;if(D)return A.$offset=U,A.$u=d===0,A;if(d!==0){var ne=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(A=this.local().add(U+ne,t)).$offset=U,A.$x.$localOffset=ne}else A=this.utc();return A};var x=f.format;f.format=function(d){var D=d||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return x.call(this,D)},f.valueOf=function(){var d=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*d},f.isUTC=function(){return!!this.$u},f.toISOString=function(){return this.toDate().toISOString()},f.toString=function(){return this.toDate().toUTCString()};var S=f.toDate;f.toDate=function(d){return d==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var P=f.diff;f.diff=function(d,D,B){if(d&&this.$u===d.$u)return P.call(this,d,D,B);var U=this.local(),A=a(d).local();return P.call(U,A,D,B)}}})})(at);const br=at.exports;$r.extend(br);const jr=(e="")=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),Z=(e,n=[])=>{const t=[],r=function(i,o){if(!Array.isArray(o))return null;for(let s=0,a=o.length;s<a;s++){const f=o[s];if(t.push(f),`${f.id}`==`${i}`)return f;if(f.items){const v=r(i,f.items);if(v)return v}t.pop()}return null};return r(e,n),t},wr=Vue.defineComponent({setup(){var s;const e=Vue.ref(),n=Vue.ref(),t=Vue.ref(),r=Vue.computed(()=>{var a,f,v,$;return((f=(a=e.value)==null?void 0:a.items)==null?void 0:f.find(E=>E.id===n.value))||(($=(v=e.value)==null?void 0:v.items)==null?void 0:$[0])}),i=document.documentElement.getBoundingClientRect().width,o=new yr({designWidth:i,config:e.value,platform:"editor"});return globalThis.appInstance=o,Vue.provide("app",o),Vue.watch(r,async()=>{await Vue.nextTick();const a=document.querySelector(".magic-ui-page");a&&window.magic.onPageElUpdate(a)}),(s=window.magic)==null||s.onRuntimeReady({getApp(){return o},updateRootConfig(a){console.log("update config",a),e.value=a,o==null||o.setConfig(a,n.value)},updatePageId(a){console.log("update page id",a),n.value=a,o==null||o.setPage(a)},select(a){console.log("select config",a),t.value=a;const f=document.getElementById(`${a}`);return f||Vue.nextTick().then(()=>document.getElementById(`${a}`))},add({config:a,parentId:f}){var $,E,x;if(console.log("add config",a),!e.value)throw new Error("error");if(!t.value)throw new Error("error");if(!f)throw new Error("error");const v=Z(f,[e.value]).pop();if(!v)throw new Error("\u672A\u627E\u5230\u7236\u8282\u70B9");if(v.id!==t.value){const S=($=v.items)==null?void 0:$.findIndex(P=>P.id===t.value);(E=v.items)==null||E.splice(S+1,0,a)}else(x=v.items)==null||x.push(a)},update({config:a,parentId:f}){var x;if(console.log("update config",a),!e.value)throw new Error("error");const v=Z(a.id,[e.value]).pop();if(!f)throw new Error("error");const $=Z(f,[e.value]).pop();if(!v)throw new Error("\u672A\u627E\u5230\u76EE\u6807\u8282\u70B9");if(!$)throw new Error("\u672A\u627E\u5230\u7236\u8282\u70B9");const E=(x=$.items)==null?void 0:x.findIndex(S=>S.id===v.id);$.items.splice(E,1,Vue.reactive(a))},remove({id:a,parentId:f}){var x;if(!e.value)throw new Error("error");const v=Z(a,[e.value]).pop();if(!v)throw new Error("\u672A\u627E\u5230\u76EE\u6807\u5143\u7D20");const $=Z(f,[e.value]).pop();if(!$)throw new Error("\u672A\u627E\u5230\u7236\u5143\u7D20");const E=(x=$.items)==null?void 0:x.findIndex(S=>S.id===v.id);$.items.splice(E,1)}}),{pageConfig:r}}}),Or=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t};function Tr(e,n,t,r,i,o){const s=Vue.resolveComponent("magic-ui-page");return e.pageConfig?(Vue.openBlock(),Vue.createBlock(s,{key:0,config:e.pageConfig},null,8,["config"])):Vue.createCommentVNode("v-if",!0)}const Er=Or(wr,[["render",Tr],["__file","/parisma/github/tmagic-editor/runtime/vue3/playground/App.vue"]]);Promise.all([we(()=>import("./comp-entry.12facb0c.js"),[]),we(()=>import("./plugin-entry.b765d2c2.js"),[])]).then(([e,n])=>{const t=Vue.createApp(Er);Object.entries(e.default).forEach(([r,i])=>{t.component(`magic-ui-${r}`,i)}),Object.values(n.default).forEach(r=>{t.use(r)}),t.mount("#app")});export{Or as _,_r as __vite_legacy_guard,jr as t};
//# sourceMappingURL=index.6b44beaf.js.map