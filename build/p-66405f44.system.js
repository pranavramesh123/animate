var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,o){function s(e){try{l(n.next(e))}catch(r){o(r)}}function i(e){try{l(n["throw"](e))}catch(r){o(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,i)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1];o=s;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(s);break}if(o[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(i){s=[6,i];a=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n={allRenderFn:true,cmpDidLoad:false,cmpShouldUpdate:false,cmpDidUnload:true,cmpDidUpdate:true,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:true,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:true,hasRenderFn:true,lifecycle:true,asyncLoading:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:true,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:true,reflect:true,scoped:false,shadowDom:false,slot:true,slotRelocation:true,state:false,style:false,svg:false,updatable:true,vdomAttribute:false,vdomXlink:false,vdomClass:false,vdomFunctional:false,vdomKey:false,vdomListener:false,vdomRef:false,vdomRender:true,vdomStyle:false,vdomText:false,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,initializeNextTick:true,hydrateClientSide:false,isDebug:false,isDev:false,devTools:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="animatable-component";var o=0;var s=false;var i;var l;var f;var u=false;var c=false;var $=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=false;var p=new WeakMap;var g=function(e){return p.get(e)};var b=e("r",(function(e,r){return p.set(r.$lazyInstance$=e,r)}));var y=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return p.set(e,r)};var w=function(e){return console.error(e)};var R=new Map;var _=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var o=e.$lazyBundleIds$;var s=R.get(o);if(s){return s[a]}return r.import("./"+o+".entry.js"+"").then((function(e){{R.set(o,e)}return e[a]}),w)};var S=[];var T=[];var N=[];var C=function(e,r){return function(t){e.push(t);if(!s){s=true;if(r&&h.$flags$&4){j(E)}else{h.raf(E)}}}};var L=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){w(t)}}e.length=0};var x=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){w(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var E=function(){o++;L(S);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(o*(1/22)):Infinity;x(T,e);x(N,e);if(T.length>0){N.push.apply(N,T);T.length=0}if(s=S.length+T.length+N.length>0){h.raf(E)}else{o=0}};var j=function(e){return Promise.resolve().then(e)};var U=C(T,true);var k=function(e){e=typeof e;return e==="object"||e==="function"};var P=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var O=function(e,r){if(r===void 0){r=""}{return function(){return}}};var A=function(e,r){{return function(){return}}};var I=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var B=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,n,o,s;return __generator(this,(function(i){switch(i.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+a+"(\\.esm)?\\.js($|\\?|#)");n=Array.from(d.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===a}));o=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},o),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,v.location.href));D(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:i.sent();i.label=3;case 3:return[2,Object.assign(Object.assign({},o),{resourcesUrl:s.href})]}}))}))}));var D=function(e){var r=P(a);try{v[r]=new Function("w","return import(w);//"+Math.random())}catch(n){var t=new Map;v[r]=function(n){var a=new URL(n,e).href;var o=t.get(a);if(!o){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){s.onload=function(){e(v[r].m);s.remove()}}));t.set(a,o);d.head.appendChild(s)}return o}}};var M=function(e,r){if(e!=null&&!k(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var z="hydrated";var W=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var o=null;var s=false;var i=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!k(a)){a=String(a)}if(s&&i){l[l.length-1].$text$+=a}else{l.push(s?F(null,a):a)}i=s}}};f(t);if(r){if(r.name){o=r.name}}var u=F(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}{u.$name$=o}return u}));var F=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$name$=null}return t};var V={};var H=function(e){return e&&e.$tag$===V};var q=function(e,r,t,n){var a=r.$children$[t];var o=0;var s;var c;var v;if(!u){$=true;if(a.$tag$==="slot"){if(i){n.classList.add(i+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$flags$&1){s=a.$elm$=d.createTextNode("")}else{s=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);if(a.$children$){for(o=0;o<a.$children$.length;++o){c=q(e,a,o,s);if(c){s.appendChild(c)}}}}{s["s-hn"]=f;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=l;s["s-sn"]=a.$name$||"";v=e&&e.$children$&&e.$children$[t];if(v&&v.$tag$===a.$tag$&&e.$elm$){Q(e.$elm$,false)}}}return s};var Q=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==f&&a["s-ol"]){Z(a).insertBefore(a,Y(a));a["s-ol"].remove();a["s-ol"]=undefined;$=true}if(r){Q(a,r)}}h.$flags$&=~1};var G=function(e,r,t,n,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var i;for(;a<=o;++a){if(n[a]){i=q(null,t,a,e);if(i){n[a].$elm$=i;s.insertBefore(i,Y(r))}}}};var K=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;{c=true;if(a["s-ol"]){a["s-ol"].remove()}else{Q(a,true)}}a.remove()}}};var X=function(e,r,t,n){var a=0;var o=0;var s=r.length-1;var i=r[0];var l=r[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&o<=f){if(i==null){i=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++o]}else if(c==null){c=n[--f]}else if(J(i,u)){ee(i,u);i=r[++a];u=n[++o]}else if(J(l,c)){ee(l,c);l=r[--s];c=n[--f]}else if(J(i,c)){if(i.$tag$==="slot"||c.$tag$==="slot"){Q(i.$elm$.parentNode,false)}ee(i,c);e.insertBefore(i.$elm$,l.$elm$.nextSibling);i=r[++a];c=n[--f]}else if(J(l,u)){if(i.$tag$==="slot"||c.$tag$==="slot"){Q(l.$elm$.parentNode,false)}ee(l,u);e.insertBefore(l.$elm$,i.$elm$);l=r[--s];u=n[++o]}else{{$=q(r&&r[o],t,o,e);u=n[++o]}if($){{Z(i.$elm$).insertBefore($,Y(i.$elm$))}}}}if(a>s){G(e,n[f+1]==null?null:n[f+1].$elm$,t,n,o,f)}else if(o>f){K(r,a,s)}};var J=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var Y=function(e){return e&&e["s-ol"]||e};var Z=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ee=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;{if(n!==null&&a!==null){X(t,n,r,a)}else if(a!==null){G(t,null,r,a,0,a.length-1)}else if(n!==null){K(n,0,n.length-1)}}};var re=function(e){var r=e.childNodes;var t;var n;var a;var o;var s;var i;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(o=0;o<a;o++){if(r[o]["s-hn"]!==t["s-hn"]){i=r[o].nodeType;if(s!==""){if(i===1&&s===r[o].getAttribute("slot")){t.hidden=true;break}}else{if(i===1||i===3&&r[o].textContent.trim()!==""){t.hidden=true;break}}}}}re(t)}}};var te=[];var ne=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var o=0;var s;var i;var l;var f;for(t=r.length;n<t;n++){s=r[n];if(s["s-sr"]&&(i=s["s-cr"])){l=i.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){i=l[a];if(!i["s-cn"]&&!i["s-nr"]&&i["s-hn"]!==s["s-hn"]){o=i.nodeType;if((o===3||o===8)&&f===""||o===1&&i.getAttribute("slot")===null&&f===""||o===1&&i.getAttribute("slot")===f){if(!te.some((function(e){return e.$nodeToRelocate$===i}))){c=true;i["s-sn"]=f;te.push({$slotRefNode$:s,$nodeToRelocate$:i})}}}}}if(s.nodeType===1){ne(s)}}};var ae=function(e,r,t,n){f=e.tagName;var a=r.$vnode$||F(null,null);var o=H(n)?n:W(null,null,n);if(t.$attrsToReflect$){o.$attrs$=o.$attrs$||{};t.$attrsToReflect$.forEach((function(r){var t=r[0],n=r[1];return o.$attrs$[n]=e[t]}))}o.$tag$=null;o.$flags$|=4;r.$vnode$=o;o.$elm$=a.$elm$=e;{l=e["s-cr"];u=m;$=c=false}ee(a,o);{if($){ne(o.$elm$);for(var s=0;s<te.length;s++){var i=te[s];if(!i.$nodeToRelocate$["s-ol"]){var v=d.createTextNode("");v["s-nr"]=i.$nodeToRelocate$;i.$nodeToRelocate$.parentNode.insertBefore(i.$nodeToRelocate$["s-ol"]=v,i.$nodeToRelocate$)}}h.$flags$|=1;for(var s=0;s<te.length;s++){var i=te[s];var p=i.$slotRefNode$.parentNode;var g=i.$slotRefNode$.nextSibling;var v=i.$nodeToRelocate$["s-ol"];while(v=v.previousSibling){var b=v["s-nr"];if(b&&b["s-sn"]===i.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){g=b;break}}}if(!g&&p!==i.$nodeToRelocate$.parentNode||i.$nodeToRelocate$.nextSibling!==g){if(i.$nodeToRelocate$!==g){p.insertBefore(i.$nodeToRelocate$,g)}}}h.$flags$&=~1}if(c){re(o.$elm$)}te.length=0}};var oe=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var se=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=O("scheduleUpdate",t.$tagName$);var o=r.$ancestorComponent$;var s=r.$lazyInstance$;var i=function(){return ie(e,r,t,s)};oe(r,o);var l;if(n){{l=ce(s,"componentWillLoad")}}else{{l=ce(s,"componentWillUpdate")}}a();return $e(l,(function(){return U(i)}))};var ie=function(e,r,t,n,a){var o=O("update",t.$tagName$);var s=e["s-rc"];var i=O("render",t.$tagName$);{{try{ae(e,r,t,n.render())}catch(u){w(u)}}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}i();o();{var l=e["s-p"];var f=function(){return le(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var le=function(e,r,t){var n=O("postUpdate",t.$tagName$);var a=r.$lazyInstance$;var o=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(z)}n();{r.$onReadyResolve$(e);if(!o){ue()}}}else{{ce(a,"componentDidUpdate")}n()}{r.$onInstanceResolve$(e)}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){j((function(){return se(e,r,t,false)}))}r.$flags$&=~(4|512)}};var fe=function(e,r){{var t=g(e);if((t.$flags$&(2|16))===2){se(e,t,r,false)}}};var ue=function(e){{d.documentElement.classList.add(z)}{h.$flags$|=2}};var ce=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){w(n)}}return undefined};var $e=function(e,r){return e&&e.then?e.then(r):r()};var ve=function(e,r){return g(e).$instanceValues$.get(r)};var de=function(e,r,t,n){var a=g(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(r);var i=a.$flags$;var l=a.$lazyInstance$;t=M(t,n.$members$[r][0]);if(t!==s&&(!(i&8)||s===undefined)){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&i&128){var f=n.$watchers$[r];if(f){f.forEach((function(e){try{l[e](t,s,r)}catch(n){w(n)}}))}}if((i&(2|16))===2){se(o,a,n,false)}}}};var he=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],o=e[1][0];if(o&31||t&2&&o&32){Object.defineProperty(a,n,{get:function(){return ve(this,n)},set:function(e){de(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&o&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=g(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var o=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=o.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;o.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var me=function(e,r,n,a,o){return __awaiter(t,void 0,void 0,(function(){var t,a,s,i;return __generator(this,(function(l){switch(l.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;o=_(n);if(!o.then)return[3,2];t=A();return[4,o];case 1:o=l.sent();t();l.label=2;case 2:if(!o.isProxied){{n.$watchers$=o.watchers}he(o,n,2);o.isProxied=true}a=O("createInstance",n.$tagName$);{r.$flags$|=8}try{new o(r)}catch(f){w(f)}{r.$flags$&=~8}{r.$flags$|=128}a();l.label=3;case 3:s=r.$ancestorComponent$;i=function(){return se(e,r,n,true)};if(s&&s["s-rc"]){s["s-rc"].push(i)}else{i()}return[2]}}))}))};var pe=function(e,r){if((h.$flags$&1)===0){var t=O("connectedCallback",r.$tagName$);var a=g(e);if(!(a.$flags$&1)){a.$flags$|=1;var o=void 0;if(!o){if(r.$flags$&4||n.shadowDom){ge(e)}}{var s=e;while(s=s.parentNode||s.host){if(s["s-p"]){oe(a,a.$ancestorComponent$=s);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{j((function(){return me(e,a,r)}))}}t()}};var ge=function(e){var r="";var t=e["s-cr"]=d.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var be=function(e){if((h.$flags$&1)===0){var r=g(e);var t=r.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{ce(t,"componentDidUnload")}}};var ye=e("b",(function(e,r){if(r===void 0){r={}}var t=O();var n=[];var a=r.exclude||[];var o=d.head;var s=v.customElements;var i=o.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var u;var c=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;if(r.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$attrsToReflect$=[]}{t.$watchers$={}}var o=t.$tagName$;var i=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;y(r);return t}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){f.push(this)}else{h.jmp((function(){return pe(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return be(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){fe(this,t)};r.prototype.componentOnReady=function(){return g(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(o)&&!s.get(o)){n.push(o);s.define(o,he(i,t,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");o.insertBefore(l,i?i.nextSibling:o.firstChild);c=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return u=setTimeout(ue,30,"timeout")}))}t()}));var we=e("c",(function(e,r,t){var n=Re(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e}))}}}));var Re=e("g",(function(e){return g(e).$hostElement$}))}}}));