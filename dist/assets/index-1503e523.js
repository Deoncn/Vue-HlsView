(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const p of o)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const p={};return o.integrity&&(p.integrity=o.integrity),o.referrerpolicy&&(p.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?p.credentials="include":o.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(o){if(o.ep)return;o.ep=!0;const p=t(o);fetch(o.href,p)}})();function fo(e,n){const t=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)t[a[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}function Ao(e){if(ne(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],o=ke(a)?Fs(a):Ao(a);if(o)for(const p in o)n[p]=o[p]}return n}else{if(ke(e))return e;if(be(e))return e}}const Ms=/;(?![^(]*\))/g,js=/:([^]+)/,Us=/\/\*.*?\*\//gs;function Fs(e){const n={};return e.replace(Us,"").split(Ms).forEach(t=>{if(t){const a=t.split(js);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function yo(e){let n="";if(ke(e))n=e;else if(ne(e))for(let t=0;t<e.length;t++){const a=yo(e[t]);a&&(n+=a+" ")}else if(be(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Ys="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ns=fo(Ys);function Ga(e){return!!e||e===""}const fe={},Gn=[],Ge=()=>{},Hs=()=>!1,Ws=/^on[^a-z]/,hr=e=>Ws.test(e),ho=e=>e.startsWith("onUpdate:"),Ie=Object.assign,mo=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ks=Object.prototype.hasOwnProperty,ae=(e,n)=>Ks.call(e,n),ne=Array.isArray,Ot=e=>mr(e)==="[object Map]",Qs=e=>mr(e)==="[object Set]",te=e=>typeof e=="function",ke=e=>typeof e=="string",bo=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",ei=e=>be(e)&&te(e.then)&&te(e.catch),Zs=Object.prototype.toString,mr=e=>Zs.call(e),Vs=e=>mr(e).slice(8,-1),Js=e=>mr(e)==="[object Object]",go=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,or=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Xs=/-(\w)/g,cn=br(e=>e.replace(Xs,(n,t)=>t?t.toUpperCase():"")),$s=/\B([A-Z])/g,rt=br(e=>e.replace($s,"-$1").toLowerCase()),gr=br(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yr=br(e=>e?`on${gr(e)}`:""),pr=(e,n)=>!Object.is(e,n),ar=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},dr=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},cr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Aa;const Gs=()=>Aa||(Aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let an;class ep{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=an,!n&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}run(n){if(this.active){const t=an;try{return an=this,n()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(n){if(this.active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function np(e,n=an){n&&n.active&&n.effects.push(e)}const vo=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ni=e=>(e.w&Tn)>0,ti=e=>(e.n&Tn)>0,tp=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Tn},rp=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const o=n[a];ni(o)&&!ti(o)?o.delete(e):n[t++]=o,o.w&=~Tn,o.n&=~Tn}n.length=t}},Xr=new WeakMap;let _t=0,Tn=1;const $r=30;let Xe;const Fn=Symbol(""),Gr=Symbol("");class xo{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,np(this,a)}run(){if(!this.active)return this.fn();let n=Xe,t=Sn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Xe,Xe=this,Sn=!0,Tn=1<<++_t,_t<=$r?tp(this):ya(this),this.fn()}finally{_t<=$r&&rp(this),Tn=1<<--_t,Xe=this.parent,Sn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xe===this?this.deferStop=!0:this.active&&(ya(this),this.onStop&&this.onStop(),this.active=!1)}}function ya(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Sn=!0;const ri=[];function ot(){ri.push(Sn),Sn=!1}function at(){const e=ri.pop();Sn=e===void 0?!0:e}function Fe(e,n,t){if(Sn&&Xe){let a=Xr.get(e);a||Xr.set(e,a=new Map);let o=a.get(t);o||a.set(t,o=vo()),oi(o)}}function oi(e,n){let t=!1;_t<=$r?ti(e)||(e.n|=Tn,t=!ni(e)):t=!e.has(Xe),t&&(e.add(Xe),Xe.deps.push(e))}function mn(e,n,t,a,o,p){const u=Xr.get(e);if(!u)return;let h=[];if(n==="clear")h=[...u.values()];else if(t==="length"&&ne(e)){const b=cr(a);u.forEach((g,f)=>{(f==="length"||f>=b)&&h.push(g)})}else switch(t!==void 0&&h.push(u.get(t)),n){case"add":ne(e)?go(t)&&h.push(u.get("length")):(h.push(u.get(Fn)),Ot(e)&&h.push(u.get(Gr)));break;case"delete":ne(e)||(h.push(u.get(Fn)),Ot(e)&&h.push(u.get(Gr)));break;case"set":Ot(e)&&h.push(u.get(Fn));break}if(h.length===1)h[0]&&eo(h[0]);else{const b=[];for(const g of h)g&&b.push(...g);eo(vo(b))}}function eo(e,n){const t=ne(e)?e:[...e];for(const a of t)a.computed&&ha(a);for(const a of t)a.computed||ha(a)}function ha(e,n){(e!==Xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const op=fo("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bo)),ap=Eo(),ip=Eo(!1,!0),lp=Eo(!0),ma=sp();function sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=ce(this);for(let p=0,u=this.length;p<u;p++)Fe(a,"get",p+"");const o=a[n](...t);return o===-1||o===!1?a[n](...t.map(ce)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){ot();const a=ce(this)[n].apply(this,t);return at(),a}}),e}function Eo(e=!1,n=!1){return function(a,o,p){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&p===(e?n?Cp:di:n?pi:si).get(a))return a;const u=ne(a);if(!e&&u&&ae(ma,o))return Reflect.get(ma,o,p);const h=Reflect.get(a,o,p);return(bo(o)?ai.has(o):op(o))||(e||Fe(a,"get",o),n)?h:_e(h)?u&&go(o)?h:h.value:be(h)?e?ci(h):ko(h):h}}const pp=ii(),dp=ii(!0);function ii(e=!1){return function(t,a,o,p){let u=t[a];if(zt(u)&&_e(u)&&!_e(o))return!1;if(!e&&(!no(o)&&!zt(o)&&(u=ce(u),o=ce(o)),!ne(t)&&_e(u)&&!_e(o)))return u.value=o,!0;const h=ne(t)&&go(a)?Number(a)<t.length:ae(t,a),b=Reflect.set(t,a,o,p);return t===ce(p)&&(h?pr(o,u)&&mn(t,"set",a,o):mn(t,"add",a,o)),b}}function cp(e,n){const t=ae(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&mn(e,"delete",n,void 0),a}function up(e,n){const t=Reflect.has(e,n);return(!bo(n)||!ai.has(n))&&Fe(e,"has",n),t}function fp(e){return Fe(e,"iterate",ne(e)?"length":Fn),Reflect.ownKeys(e)}const li={get:ap,set:pp,deleteProperty:cp,has:up,ownKeys:fp},Ap={get:lp,set(e,n){return!0},deleteProperty(e,n){return!0}},yp=Ie({},li,{get:ip,set:dp}),wo=e=>e,vr=e=>Reflect.getPrototypeOf(e);function Vt(e,n,t=!1,a=!1){e=e.__v_raw;const o=ce(e),p=ce(n);t||(n!==p&&Fe(o,"get",n),Fe(o,"get",p));const{has:u}=vr(o),h=a?wo:t?Io:So;if(u.call(o,n))return h(e.get(n));if(u.call(o,p))return h(e.get(p));e!==o&&e.get(n)}function Jt(e,n=!1){const t=this.__v_raw,a=ce(t),o=ce(e);return n||(e!==o&&Fe(a,"has",e),Fe(a,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function Xt(e,n=!1){return e=e.__v_raw,!n&&Fe(ce(e),"iterate",Fn),Reflect.get(e,"size",e)}function ba(e){e=ce(e);const n=ce(this);return vr(n).has.call(n,e)||(n.add(e),mn(n,"add",e,e)),this}function ga(e,n){n=ce(n);const t=ce(this),{has:a,get:o}=vr(t);let p=a.call(t,e);p||(e=ce(e),p=a.call(t,e));const u=o.call(t,e);return t.set(e,n),p?pr(n,u)&&mn(t,"set",e,n):mn(t,"add",e,n),this}function va(e){const n=ce(this),{has:t,get:a}=vr(n);let o=t.call(n,e);o||(e=ce(e),o=t.call(n,e)),a&&a.call(n,e);const p=n.delete(e);return o&&mn(n,"delete",e,void 0),p}function xa(){const e=ce(this),n=e.size!==0,t=e.clear();return n&&mn(e,"clear",void 0,void 0),t}function $t(e,n){return function(a,o){const p=this,u=p.__v_raw,h=ce(u),b=n?wo:e?Io:So;return!e&&Fe(h,"iterate",Fn),u.forEach((g,f)=>a.call(o,b(g),b(f),p))}}function Gt(e,n,t){return function(...a){const o=this.__v_raw,p=ce(o),u=Ot(p),h=e==="entries"||e===Symbol.iterator&&u,b=e==="keys"&&u,g=o[e](...a),f=t?wo:n?Io:So;return!n&&Fe(p,"iterate",b?Gr:Fn),{next(){const{value:C,done:B}=g.next();return B?{value:C,done:B}:{value:h?[f(C[0]),f(C[1])]:f(C),done:B}},[Symbol.iterator](){return this}}}}function kn(e){return function(...n){return e==="delete"?!1:this}}function hp(){const e={get(p){return Vt(this,p)},get size(){return Xt(this)},has:Jt,add:ba,set:ga,delete:va,clear:xa,forEach:$t(!1,!1)},n={get(p){return Vt(this,p,!1,!0)},get size(){return Xt(this)},has:Jt,add:ba,set:ga,delete:va,clear:xa,forEach:$t(!1,!0)},t={get(p){return Vt(this,p,!0)},get size(){return Xt(this,!0)},has(p){return Jt.call(this,p,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:$t(!0,!1)},a={get(p){return Vt(this,p,!0,!0)},get size(){return Xt(this,!0)},has(p){return Jt.call(this,p,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:$t(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(p=>{e[p]=Gt(p,!1,!1),t[p]=Gt(p,!0,!1),n[p]=Gt(p,!1,!0),a[p]=Gt(p,!0,!0)}),[e,t,n,a]}const[mp,bp,gp,vp]=hp();function Co(e,n){const t=n?e?vp:gp:e?bp:mp;return(a,o,p)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(ae(t,o)&&o in a?t:a,o,p)}const xp={get:Co(!1,!1)},Ep={get:Co(!1,!0)},wp={get:Co(!0,!1)},si=new WeakMap,pi=new WeakMap,di=new WeakMap,Cp=new WeakMap;function kp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bp(e){return e.__v_skip||!Object.isExtensible(e)?0:kp(Vs(e))}function ko(e){return zt(e)?e:Bo(e,!1,li,xp,si)}function Sp(e){return Bo(e,!1,yp,Ep,pi)}function ci(e){return Bo(e,!0,Ap,wp,di)}function Bo(e,n,t,a,o){if(!be(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const p=o.get(e);if(p)return p;const u=Bp(e);if(u===0)return e;const h=new Proxy(e,u===2?a:t);return o.set(e,h),h}function et(e){return zt(e)?et(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function no(e){return!!(e&&e.__v_isShallow)}function ui(e){return et(e)||zt(e)}function ce(e){const n=e&&e.__v_raw;return n?ce(n):e}function fi(e){return dr(e,"__v_skip",!0),e}const So=e=>be(e)?ko(e):e,Io=e=>be(e)?ci(e):e;function Ip(e){Sn&&Xe&&(e=ce(e),oi(e.dep||(e.dep=vo())))}function Lp(e,n){e=ce(e),e.dep&&eo(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function Tp(e){return _e(e)?e.value:e}const _p={get:(e,n,t)=>Tp(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const o=e[n];return _e(o)&&!_e(t)?(o.value=t,!0):Reflect.set(e,n,t,a)}};function Ai(e){return et(e)?e:new Proxy(e,_p)}var yi;class Op{constructor(n,t,a,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[yi]=!1,this._dirty=!0,this.effect=new xo(n,()=>{this._dirty||(this._dirty=!0,Lp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const n=ce(this);return Ip(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}yi="__v_isReadonly";function Pp(e,n,t=!1){let a,o;const p=te(e);return p?(a=e,o=Ge):(a=e.get,o=e.set),new Op(a,o,p||!o,t)}function In(e,n,t,a){let o;try{o=a?e(...a):e()}catch(p){xr(p,n,t)}return o}function We(e,n,t,a){if(te(e)){const p=In(e,n,t,a);return p&&ei(p)&&p.catch(u=>{xr(u,n,t)}),p}const o=[];for(let p=0;p<e.length;p++)o.push(We(e[p],n,t,a));return o}function xr(e,n,t,a=!0){const o=n?n.vnode:null;if(n){let p=n.parent;const u=n.proxy,h=t;for(;p;){const g=p.ec;if(g){for(let f=0;f<g.length;f++)if(g[f](e,u,h)===!1)return}p=p.parent}const b=n.appContext.config.errorHandler;if(b){In(b,null,10,[e,u,h]);return}}Rp(e,t,o,a)}function Rp(e,n,t,a=!0){console.error(e)}let qt=!1,to=!1;const Se=[];let sn=0;const nt=[];let An=null,Dn=0;const hi=Promise.resolve();let Lo=null;function zp(e){const n=Lo||hi;return e?n.then(this?e.bind(this):e):n}function qp(e){let n=sn+1,t=Se.length;for(;n<t;){const a=n+t>>>1;Dt(Se[a])<e?n=a+1:t=a}return n}function To(e){(!Se.length||!Se.includes(e,qt&&e.allowRecurse?sn+1:sn))&&(e.id==null?Se.push(e):Se.splice(qp(e.id),0,e),mi())}function mi(){!qt&&!to&&(to=!0,Lo=hi.then(gi))}function Dp(e){const n=Se.indexOf(e);n>sn&&Se.splice(n,1)}function Mp(e){ne(e)?nt.push(...e):(!An||!An.includes(e,e.allowRecurse?Dn+1:Dn))&&nt.push(e),mi()}function Ea(e,n=qt?sn+1:0){for(;n<Se.length;n++){const t=Se[n];t&&t.pre&&(Se.splice(n,1),n--,t())}}function bi(e){if(nt.length){const n=[...new Set(nt)];if(nt.length=0,An){An.push(...n);return}for(An=n,An.sort((t,a)=>Dt(t)-Dt(a)),Dn=0;Dn<An.length;Dn++)An[Dn]();An=null,Dn=0}}const Dt=e=>e.id==null?1/0:e.id,jp=(e,n)=>{const t=Dt(e)-Dt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function gi(e){to=!1,qt=!0,Se.sort(jp);const n=Ge;try{for(sn=0;sn<Se.length;sn++){const t=Se[sn];t&&t.active!==!1&&In(t,null,14)}}finally{sn=0,Se.length=0,bi(),qt=!1,Lo=null,(Se.length||nt.length)&&gi()}}function Up(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||fe;let o=t;const p=n.startsWith("update:"),u=p&&n.slice(7);if(u&&u in a){const f=`${u==="modelValue"?"model":u}Modifiers`,{number:C,trim:B}=a[f]||fe;B&&(o=t.map(k=>ke(k)?k.trim():k)),C&&(o=t.map(cr))}let h,b=a[h=Yr(n)]||a[h=Yr(cn(n))];!b&&p&&(b=a[h=Yr(rt(n))]),b&&We(b,e,6,o);const g=a[h+"Once"];if(g){if(!e.emitted)e.emitted={};else if(e.emitted[h])return;e.emitted[h]=!0,We(g,e,6,o)}}function vi(e,n,t=!1){const a=n.emitsCache,o=a.get(e);if(o!==void 0)return o;const p=e.emits;let u={},h=!1;if(!te(e)){const b=g=>{const f=vi(g,n,!0);f&&(h=!0,Ie(u,f))};!t&&n.mixins.length&&n.mixins.forEach(b),e.extends&&b(e.extends),e.mixins&&e.mixins.forEach(b)}return!p&&!h?(be(e)&&a.set(e,null),null):(ne(p)?p.forEach(b=>u[b]=null):Ie(u,p),be(e)&&a.set(e,u),u)}function Er(e,n){return!e||!hr(n)?!1:(n=n.slice(2).replace(/Once$/,""),ae(e,n[0].toLowerCase()+n.slice(1))||ae(e,rt(n))||ae(e,n))}let Ue=null,xi=null;function ur(e){const n=Ue;return Ue=e,xi=e&&e.type.__scopeId||null,n}function Fp(e,n=Ue,t){if(!n||e._n)return e;const a=(...o)=>{a._d&&Oa(-1);const p=ur(n);let u;try{u=e(...o)}finally{ur(p),a._d&&Oa(1)}return u};return a._n=!0,a._c=!0,a._d=!0,a}function Nr(e){const{type:n,vnode:t,proxy:a,withProxy:o,props:p,propsOptions:[u],slots:h,attrs:b,emit:g,render:f,renderCache:C,data:B,setupState:k,ctx:R,inheritAttrs:L}=e;let q,Q;const X=ur(e);try{if(t.shapeFlag&4){const le=o||a;q=ln(f.call(le,le,C,p,k,B,R)),Q=b}else{const le=n;q=ln(le.length>1?le(p,{attrs:b,slots:h,emit:g}):le(p,null)),Q=n.props?b:Yp(b)}}catch(le){Rt.length=0,xr(le,e,1),q=Ln(hn)}let $=q;if(Q&&L!==!1){const le=Object.keys(Q),{shapeFlag:xe}=$;le.length&&xe&7&&(u&&le.some(ho)&&(Q=Np(Q,u)),$=_n($,Q))}return t.dirs&&($=_n($),$.dirs=$.dirs?$.dirs.concat(t.dirs):t.dirs),t.transition&&($.transition=t.transition),q=$,ur(X),q}const Yp=e=>{let n;for(const t in e)(t==="class"||t==="style"||hr(t))&&((n||(n={}))[t]=e[t]);return n},Np=(e,n)=>{const t={};for(const a in e)(!ho(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function Hp(e,n,t){const{props:a,children:o,component:p}=e,{props:u,children:h,patchFlag:b}=n,g=p.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&b>=0){if(b&1024)return!0;if(b&16)return a?wa(a,u,g):!!u;if(b&8){const f=n.dynamicProps;for(let C=0;C<f.length;C++){const B=f[C];if(u[B]!==a[B]&&!Er(g,B))return!0}}}else return(o||h)&&(!h||!h.$stable)?!0:a===u?!1:a?u?wa(a,u,g):!0:!!u;return!1}function wa(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const p=a[o];if(n[p]!==e[p]&&!Er(t,p))return!0}return!1}function Wp({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Kp=e=>e.__isSuspense;function Qp(e,n){n&&n.pendingBranch?ne(e)?n.effects.push(...e):n.effects.push(e):Mp(e)}function Zp(e,n){if(Ce){let t=Ce.provides;const a=Ce.parent&&Ce.parent.provides;a===t&&(t=Ce.provides=Object.create(a)),t[e]=n}}function ir(e,n,t=!1){const a=Ce||Ue;if(a){const o=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&te(n)?n.call(a.proxy):n}}const er={};function Hr(e,n,t){return Ei(e,n,t)}function Ei(e,n,{immediate:t,deep:a,flush:o,onTrack:p,onTrigger:u}=fe){const h=Ce;let b,g=!1,f=!1;if(_e(e)?(b=()=>e.value,g=no(e)):et(e)?(b=()=>e,a=!0):ne(e)?(f=!0,g=e.some($=>et($)||no($)),b=()=>e.map($=>{if(_e($))return $.value;if(et($))return Un($);if(te($))return In($,h,2)})):te(e)?n?b=()=>In(e,h,2):b=()=>{if(!(h&&h.isUnmounted))return C&&C(),We(e,h,3,[B])}:b=Ge,n&&a){const $=b;b=()=>Un($())}let C,B=$=>{C=Q.onStop=()=>{In($,h,4)}},k;if(jt)if(B=Ge,n?t&&We(n,h,3,[b(),f?[]:void 0,B]):b(),o==="sync"){const $=Zd();k=$.__watcherHandles||($.__watcherHandles=[])}else return Ge;let R=f?new Array(e.length).fill(er):er;const L=()=>{if(Q.active)if(n){const $=Q.run();(a||g||(f?$.some((le,xe)=>pr(le,R[xe])):pr($,R)))&&(C&&C(),We(n,h,3,[$,R===er?void 0:f&&R[0]===er?[]:R,B]),R=$)}else Q.run()};L.allowRecurse=!!n;let q;o==="sync"?q=L:o==="post"?q=()=>De(L,h&&h.suspense):(L.pre=!0,h&&(L.id=h.uid),q=()=>To(L));const Q=new xo(b,q);n?t?L():R=Q.run():o==="post"?De(Q.run.bind(Q),h&&h.suspense):Q.run();const X=()=>{Q.stop(),h&&h.scope&&mo(h.scope.effects,Q)};return k&&k.push(X),X}function Vp(e,n,t){const a=this.proxy,o=ke(e)?e.includes(".")?wi(a,e):()=>a[e]:e.bind(a,a);let p;te(n)?p=n:(p=n.handler,t=n);const u=Ce;tt(this);const h=Ei(o,p.bind(a),t);return u?tt(u):Yn(),h}function wi(e,n){const t=n.split(".");return()=>{let a=e;for(let o=0;o<t.length&&a;o++)a=a[t[o]];return a}}function Un(e,n){if(!be(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),_e(e))Un(e.value,n);else if(ne(e))for(let t=0;t<e.length;t++)Un(e[t],n);else if(Qs(e)||Ot(e))e.forEach(t=>{Un(t,n)});else if(Js(e))for(const t in e)Un(e[t],n);return e}function Jp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Si(()=>{e.isMounted=!0}),Ii(()=>{e.isUnmounting=!0}),e}const Ne=[Function,Array],Xp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},setup(e,{slots:n}){const t=jd(),a=Jp();let o;return()=>{const p=n.default&&ki(n.default(),!0);if(!p||!p.length)return;let u=p[0];if(p.length>1){for(const L of p)if(L.type!==hn){u=L;break}}const h=ce(e),{mode:b}=h;if(a.isLeaving)return Wr(u);const g=Ca(u);if(!g)return Wr(u);const f=ro(g,h,a,t);oo(g,f);const C=t.subTree,B=C&&Ca(C);let k=!1;const{getTransitionKey:R}=g.type;if(R){const L=R();o===void 0?o=L:L!==o&&(o=L,k=!0)}if(B&&B.type!==hn&&(!Mn(g,B)||k)){const L=ro(B,h,a,t);if(oo(B,L),b==="out-in")return a.isLeaving=!0,L.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&t.update()},Wr(u);b==="in-out"&&g.type!==hn&&(L.delayLeave=(q,Q,X)=>{const $=Ci(a,B);$[String(B.key)]=B,q._leaveCb=()=>{Q(),q._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=X})}return u}}},$p=Xp;function Ci(e,n){const{leavingVNodes:t}=e;let a=t.get(n.type);return a||(a=Object.create(null),t.set(n.type,a)),a}function ro(e,n,t,a){const{appear:o,mode:p,persisted:u=!1,onBeforeEnter:h,onEnter:b,onAfterEnter:g,onEnterCancelled:f,onBeforeLeave:C,onLeave:B,onAfterLeave:k,onLeaveCancelled:R,onBeforeAppear:L,onAppear:q,onAfterAppear:Q,onAppearCancelled:X}=n,$=String(e.key),le=Ci(t,e),xe=(K,ye)=>{K&&We(K,a,9,ye)},un=(K,ye)=>{const ue=ye[1];xe(K,ye),ne(K)?K.every(ge=>ge.length<=1)&&ue():K.length<=1&&ue()},en={mode:p,persisted:u,beforeEnter(K){let ye=h;if(!t.isMounted)if(o)ye=L||h;else return;K._leaveCb&&K._leaveCb(!0);const ue=le[$];ue&&Mn(e,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),xe(ye,[K])},enter(K){let ye=b,ue=g,ge=f;if(!t.isMounted)if(o)ye=q||b,ue=Q||g,ge=X||f;else return;let Pe=!1;const Ke=K._enterCb=gn=>{Pe||(Pe=!0,gn?xe(ge,[K]):xe(ue,[K]),en.delayedLeave&&en.delayedLeave(),K._enterCb=void 0)};ye?un(ye,[K,Ke]):Ke()},leave(K,ye){const ue=String(e.key);if(K._enterCb&&K._enterCb(!0),t.isUnmounting)return ye();xe(C,[K]);let ge=!1;const Pe=K._leaveCb=Ke=>{ge||(ge=!0,ye(),Ke?xe(R,[K]):xe(k,[K]),K._leaveCb=void 0,le[ue]===e&&delete le[ue])};le[ue]=e,B?un(B,[K,Pe]):Pe()},clone(K){return ro(K,n,t,a)}};return en}function Wr(e){if(wr(e))return e=_n(e),e.children=null,e}function Ca(e){return wr(e)?e.children?e.children[0]:void 0:e}function oo(e,n){e.shapeFlag&6&&e.component?oo(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ki(e,n=!1,t){let a=[],o=0;for(let p=0;p<e.length;p++){let u=e[p];const h=t==null?u.key:String(t)+String(u.key!=null?u.key:p);u.type===Je?(u.patchFlag&128&&o++,a=a.concat(ki(u.children,n,h))):(n||u.type!==hn)&&a.push(h!=null?_n(u,{key:h}):u)}if(o>1)for(let p=0;p<a.length;p++)a[p].patchFlag=-2;return a}const lr=e=>!!e.type.__asyncLoader,wr=e=>e.type.__isKeepAlive;function Gp(e,n){Bi(e,"a",n)}function ed(e,n){Bi(e,"da",n)}function Bi(e,n,t=Ce){const a=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Cr(n,a,t),t){let o=t.parent;for(;o&&o.parent;)wr(o.parent.vnode)&&nd(a,n,t,o),o=o.parent}}function nd(e,n,t,a){const o=Cr(n,e,a,!0);Li(()=>{mo(a[n],o)},t)}function Cr(e,n,t=Ce,a=!1){if(t){const o=t[e]||(t[e]=[]),p=n.__weh||(n.__weh=(...u)=>{if(t.isUnmounted)return;ot(),tt(t);const h=We(n,t,e,u);return Yn(),at(),h});return a?o.unshift(p):o.push(p),p}}const bn=e=>(n,t=Ce)=>(!jt||e==="sp")&&Cr(e,(...a)=>n(...a),t),td=bn("bm"),Si=bn("m"),rd=bn("bu"),od=bn("u"),Ii=bn("bum"),Li=bn("um"),ad=bn("sp"),id=bn("rtg"),ld=bn("rtc");function sd(e,n=Ce){Cr("ec",e,n)}function pd(e,n){const t=Ue;if(t===null)return e;const a=Ir(t)||t.proxy,o=e.dirs||(e.dirs=[]);for(let p=0;p<n.length;p++){let[u,h,b,g=fe]=n[p];u&&(te(u)&&(u={mounted:u,updated:u}),u.deep&&Un(h),o.push({dir:u,instance:a,value:h,oldValue:void 0,arg:b,modifiers:g}))}return e}function Pn(e,n,t,a){const o=e.dirs,p=n&&n.dirs;for(let u=0;u<o.length;u++){const h=o[u];p&&(h.oldValue=p[u].value);let b=h.dir[a];b&&(ot(),We(b,t,8,[e.el,h,e,n]),at())}}const Ti="components";function dd(e,n){return ud(Ti,e,!0,n)||e}const cd=Symbol();function ud(e,n,t=!0,a=!1){const o=Ue||Ce;if(o){const p=o.type;if(e===Ti){const h=Hd(p,!1);if(h&&(h===n||h===cn(n)||h===gr(cn(n))))return p}const u=ka(o[e]||p[e],n)||ka(o.appContext[e],n);return!u&&a?p:u}}function ka(e,n){return e&&(e[n]||e[cn(n)]||e[gr(cn(n))])}const ao=e=>e?Yi(e)?Ir(e)||e.proxy:ao(e.parent):null,Pt=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ao(e.parent),$root:e=>ao(e.root),$emit:e=>e.emit,$options:e=>_o(e),$forceUpdate:e=>e.f||(e.f=()=>To(e.update)),$nextTick:e=>e.n||(e.n=zp.bind(e.proxy)),$watch:e=>Vp.bind(e)}),Kr=(e,n)=>e!==fe&&!e.__isScriptSetup&&ae(e,n),fd={get({_:e},n){const{ctx:t,setupState:a,data:o,props:p,accessCache:u,type:h,appContext:b}=e;let g;if(n[0]!=="$"){const k=u[n];if(k!==void 0)switch(k){case 1:return a[n];case 2:return o[n];case 4:return t[n];case 3:return p[n]}else{if(Kr(a,n))return u[n]=1,a[n];if(o!==fe&&ae(o,n))return u[n]=2,o[n];if((g=e.propsOptions[0])&&ae(g,n))return u[n]=3,p[n];if(t!==fe&&ae(t,n))return u[n]=4,t[n];io&&(u[n]=0)}}const f=Pt[n];let C,B;if(f)return n==="$attrs"&&Fe(e,"get",n),f(e);if((C=h.__cssModules)&&(C=C[n]))return C;if(t!==fe&&ae(t,n))return u[n]=4,t[n];if(B=b.config.globalProperties,ae(B,n))return B[n]},set({_:e},n,t){const{data:a,setupState:o,ctx:p}=e;return Kr(o,n)?(o[n]=t,!0):a!==fe&&ae(a,n)?(a[n]=t,!0):ae(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(p[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:o,propsOptions:p}},u){let h;return!!t[u]||e!==fe&&ae(e,u)||Kr(n,u)||(h=p[0])&&ae(h,u)||ae(a,u)||ae(Pt,u)||ae(o.config.globalProperties,u)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ae(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let io=!0;function Ad(e){const n=_o(e),t=e.proxy,a=e.ctx;io=!1,n.beforeCreate&&Ba(n.beforeCreate,e,"bc");const{data:o,computed:p,methods:u,watch:h,provide:b,inject:g,created:f,beforeMount:C,mounted:B,beforeUpdate:k,updated:R,activated:L,deactivated:q,beforeDestroy:Q,beforeUnmount:X,destroyed:$,unmounted:le,render:xe,renderTracked:un,renderTriggered:en,errorCaptured:K,serverPrefetch:ye,expose:ue,inheritAttrs:ge,components:Pe,directives:Ke,filters:gn}=n;if(g&&yd(g,a,null,e.appContext.config.unwrapInjectedRef),u)for(const F in u){const pe=u[F];te(pe)&&(a[F]=pe.bind(t))}if(o){const F=o.call(t,t);be(F)&&(e.data=ko(F))}if(io=!0,p)for(const F in p){const pe=p[F],Me=te(pe)?pe.bind(t,t):te(pe.get)?pe.get.bind(t,t):Ge,vn=!te(pe)&&te(pe.set)?pe.set.bind(t):Ge,nn=Kd({get:Me,set:vn});Object.defineProperty(a,F,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Re=>nn.value=Re})}if(h)for(const F in h)_i(h[F],a,t,F);if(b){const F=te(b)?b.call(t):b;Reflect.ownKeys(F).forEach(pe=>{Zp(pe,F[pe])})}f&&Ba(f,e,"c");function me(F,pe){ne(pe)?pe.forEach(Me=>F(Me.bind(t))):pe&&F(pe.bind(t))}if(me(td,C),me(Si,B),me(rd,k),me(od,R),me(Gp,L),me(ed,q),me(sd,K),me(ld,un),me(id,en),me(Ii,X),me(Li,le),me(ad,ye),ne(ue))if(ue.length){const F=e.exposed||(e.exposed={});ue.forEach(pe=>{Object.defineProperty(F,pe,{get:()=>t[pe],set:Me=>t[pe]=Me})})}else e.exposed||(e.exposed={});xe&&e.render===Ge&&(e.render=xe),ge!=null&&(e.inheritAttrs=ge),Pe&&(e.components=Pe),Ke&&(e.directives=Ke)}function yd(e,n,t=Ge,a=!1){ne(e)&&(e=lo(e));for(const o in e){const p=e[o];let u;be(p)?"default"in p?u=ir(p.from||o,p.default,!0):u=ir(p.from||o):u=ir(p),_e(u)&&a?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>u.value,set:h=>u.value=h}):n[o]=u}}function Ba(e,n,t){We(ne(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function _i(e,n,t,a){const o=a.includes(".")?wi(t,a):()=>t[a];if(ke(e)){const p=n[e];te(p)&&Hr(o,p)}else if(te(e))Hr(o,e.bind(t));else if(be(e))if(ne(e))e.forEach(p=>_i(p,n,t,a));else{const p=te(e.handler)?e.handler.bind(t):n[e.handler];te(p)&&Hr(o,p,e)}}function _o(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:o,optionsCache:p,config:{optionMergeStrategies:u}}=e.appContext,h=p.get(n);let b;return h?b=h:!o.length&&!t&&!a?b=n:(b={},o.length&&o.forEach(g=>fr(b,g,u,!0)),fr(b,n,u)),be(n)&&p.set(n,b),b}function fr(e,n,t,a=!1){const{mixins:o,extends:p}=n;p&&fr(e,p,t,!0),o&&o.forEach(u=>fr(e,u,t,!0));for(const u in n)if(!(a&&u==="expose")){const h=hd[u]||t&&t[u];e[u]=h?h(e[u],n[u]):n[u]}return e}const hd={data:Sa,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:qn,directives:qn,watch:bd,provide:Sa,inject:md};function Sa(e,n){return n?e?function(){return Ie(te(e)?e.call(this,this):e,te(n)?n.call(this,this):n)}:n:e}function md(e,n){return qn(lo(e),lo(n))}function lo(e){if(ne(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Te(e,n){return e?[...new Set([].concat(e,n))]:n}function qn(e,n){return e?Ie(Ie(Object.create(null),e),n):n}function bd(e,n){if(!e)return n;if(!n)return e;const t=Ie(Object.create(null),e);for(const a in n)t[a]=Te(e[a],n[a]);return t}function gd(e,n,t,a=!1){const o={},p={};dr(p,Br,1),e.propsDefaults=Object.create(null),Oi(e,n,o,p);for(const u in e.propsOptions[0])u in o||(o[u]=void 0);t?e.props=a?o:Sp(o):e.type.props?e.props=o:e.props=p,e.attrs=p}function vd(e,n,t,a){const{props:o,attrs:p,vnode:{patchFlag:u}}=e,h=ce(o),[b]=e.propsOptions;let g=!1;if((a||u>0)&&!(u&16)){if(u&8){const f=e.vnode.dynamicProps;for(let C=0;C<f.length;C++){let B=f[C];if(Er(e.emitsOptions,B))continue;const k=n[B];if(b)if(ae(p,B))k!==p[B]&&(p[B]=k,g=!0);else{const R=cn(B);o[R]=so(b,h,R,k,e,!1)}else k!==p[B]&&(p[B]=k,g=!0)}}}else{Oi(e,n,o,p)&&(g=!0);let f;for(const C in h)(!n||!ae(n,C)&&((f=rt(C))===C||!ae(n,f)))&&(b?t&&(t[C]!==void 0||t[f]!==void 0)&&(o[C]=so(b,h,C,void 0,e,!0)):delete o[C]);if(p!==h)for(const C in p)(!n||!ae(n,C))&&(delete p[C],g=!0)}g&&mn(e,"set","$attrs")}function Oi(e,n,t,a){const[o,p]=e.propsOptions;let u=!1,h;if(n)for(let b in n){if(or(b))continue;const g=n[b];let f;o&&ae(o,f=cn(b))?!p||!p.includes(f)?t[f]=g:(h||(h={}))[f]=g:Er(e.emitsOptions,b)||(!(b in a)||g!==a[b])&&(a[b]=g,u=!0)}if(p){const b=ce(t),g=h||fe;for(let f=0;f<p.length;f++){const C=p[f];t[C]=so(o,b,C,g[C],e,!ae(g,C))}}return u}function so(e,n,t,a,o,p){const u=e[t];if(u!=null){const h=ae(u,"default");if(h&&a===void 0){const b=u.default;if(u.type!==Function&&te(b)){const{propsDefaults:g}=o;t in g?a=g[t]:(tt(o),a=g[t]=b.call(null,n),Yn())}else a=b}u[0]&&(p&&!h?a=!1:u[1]&&(a===""||a===rt(t))&&(a=!0))}return a}function Pi(e,n,t=!1){const a=n.propsCache,o=a.get(e);if(o)return o;const p=e.props,u={},h=[];let b=!1;if(!te(e)){const f=C=>{b=!0;const[B,k]=Pi(C,n,!0);Ie(u,B),k&&h.push(...k)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!p&&!b)return be(e)&&a.set(e,Gn),Gn;if(ne(p))for(let f=0;f<p.length;f++){const C=cn(p[f]);Ia(C)&&(u[C]=fe)}else if(p)for(const f in p){const C=cn(f);if(Ia(C)){const B=p[f],k=u[C]=ne(B)||te(B)?{type:B}:Object.assign({},B);if(k){const R=_a(Boolean,k.type),L=_a(String,k.type);k[0]=R>-1,k[1]=L<0||R<L,(R>-1||ae(k,"default"))&&h.push(C)}}}const g=[u,h];return be(e)&&a.set(e,g),g}function Ia(e){return e[0]!=="$"}function La(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Ta(e,n){return La(e)===La(n)}function _a(e,n){return ne(n)?n.findIndex(t=>Ta(t,e)):te(n)&&Ta(n,e)?0:-1}const Ri=e=>e[0]==="_"||e==="$stable",Oo=e=>ne(e)?e.map(ln):[ln(e)],xd=(e,n,t)=>{if(n._n)return n;const a=Fp((...o)=>Oo(n(...o)),t);return a._c=!1,a},zi=(e,n,t)=>{const a=e._ctx;for(const o in e){if(Ri(o))continue;const p=e[o];if(te(p))n[o]=xd(o,p,a);else if(p!=null){const u=Oo(p);n[o]=()=>u}}},qi=(e,n)=>{const t=Oo(n);e.slots.default=()=>t},Ed=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ce(n),dr(n,"_",t)):zi(n,e.slots={})}else e.slots={},n&&qi(e,n);dr(e.slots,Br,1)},wd=(e,n,t)=>{const{vnode:a,slots:o}=e;let p=!0,u=fe;if(a.shapeFlag&32){const h=n._;h?t&&h===1?p=!1:(Ie(o,n),!t&&h===1&&delete o._):(p=!n.$stable,zi(n,o)),u=n}else n&&(qi(e,n),u={default:1});if(p)for(const h in o)!Ri(h)&&!(h in u)&&delete o[h]};function Di(){return{app:null,config:{isNativeTag:Hs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cd=0;function kd(e,n){return function(a,o=null){te(a)||(a=Object.assign({},a)),o!=null&&!be(o)&&(o=null);const p=Di(),u=new Set;let h=!1;const b=p.app={_uid:Cd++,_component:a,_props:o,_container:null,_context:p,_instance:null,version:Vd,get config(){return p.config},set config(g){},use(g,...f){return u.has(g)||(g&&te(g.install)?(u.add(g),g.install(b,...f)):te(g)&&(u.add(g),g(b,...f))),b},mixin(g){return p.mixins.includes(g)||p.mixins.push(g),b},component(g,f){return f?(p.components[g]=f,b):p.components[g]},directive(g,f){return f?(p.directives[g]=f,b):p.directives[g]},mount(g,f,C){if(!h){const B=Ln(a,o);return B.appContext=p,f&&n?n(B,g):e(B,g,C),h=!0,b._container=g,g.__vue_app__=b,Ir(B.component)||B.component.proxy}},unmount(){h&&(e(null,b._container),delete b._container.__vue_app__)},provide(g,f){return p.provides[g]=f,b}};return b}}function po(e,n,t,a,o=!1){if(ne(e)){e.forEach((B,k)=>po(B,n&&(ne(n)?n[k]:n),t,a,o));return}if(lr(a)&&!o)return;const p=a.shapeFlag&4?Ir(a.component)||a.component.proxy:a.el,u=o?null:p,{i:h,r:b}=e,g=n&&n.r,f=h.refs===fe?h.refs={}:h.refs,C=h.setupState;if(g!=null&&g!==b&&(ke(g)?(f[g]=null,ae(C,g)&&(C[g]=null)):_e(g)&&(g.value=null)),te(b))In(b,h,12,[u,f]);else{const B=ke(b),k=_e(b);if(B||k){const R=()=>{if(e.f){const L=B?ae(C,b)?C[b]:f[b]:b.value;o?ne(L)&&mo(L,p):ne(L)?L.includes(p)||L.push(p):B?(f[b]=[p],ae(C,b)&&(C[b]=f[b])):(b.value=[p],e.k&&(f[e.k]=b.value))}else B?(f[b]=u,ae(C,b)&&(C[b]=u)):k&&(b.value=u,e.k&&(f[e.k]=u))};u?(R.id=-1,De(R,t)):R()}}}const De=Qp;function Bd(e){return Sd(e)}function Sd(e,n){const t=Gs();t.__VUE__=!0;const{insert:a,remove:o,patchProp:p,createElement:u,createText:h,createComment:b,setText:g,setElementText:f,parentNode:C,nextSibling:B,setScopeId:k=Ge,insertStaticContent:R}=e,L=(v,E,I,_=null,T=null,D=null,Y=!1,z=null,M=!!E.dynamicChildren)=>{if(v===E)return;v&&!Mn(v,E)&&(_=tn(v),Re(v,T,D,!0),v=null),E.patchFlag===-2&&(M=!1,E.dynamicChildren=null);const{type:P,ref:V,shapeFlag:W}=E;switch(P){case kr:q(v,E,I,_);break;case hn:Q(v,E,I,_);break;case Qr:v==null&&X(E,I,_,Y);break;case Je:Pe(v,E,I,_,T,D,Y,z,M);break;default:W&1?xe(v,E,I,_,T,D,Y,z,M):W&6?Ke(v,E,I,_,T,D,Y,z,M):(W&64||W&128)&&P.process(v,E,I,_,T,D,Y,z,M,xn)}V!=null&&T&&po(V,v&&v.ref,D,E||v,!E)},q=(v,E,I,_)=>{if(v==null)a(E.el=h(E.children),I,_);else{const T=E.el=v.el;E.children!==v.children&&g(T,E.children)}},Q=(v,E,I,_)=>{v==null?a(E.el=b(E.children||""),I,_):E.el=v.el},X=(v,E,I,_)=>{[v.el,v.anchor]=R(v.children,E,I,_,v.el,v.anchor)},$=({el:v,anchor:E},I,_)=>{let T;for(;v&&v!==E;)T=B(v),a(v,I,_),v=T;a(E,I,_)},le=({el:v,anchor:E})=>{let I;for(;v&&v!==E;)I=B(v),o(v),v=I;o(E)},xe=(v,E,I,_,T,D,Y,z,M)=>{Y=Y||E.type==="svg",v==null?un(E,I,_,T,D,Y,z,M):ye(v,E,T,D,Y,z,M)},un=(v,E,I,_,T,D,Y,z)=>{let M,P;const{type:V,props:W,shapeFlag:J,transition:G,dirs:re}=v;if(M=v.el=u(v.type,D,W&&W.is,W),J&8?f(M,v.children):J&16&&K(v.children,M,null,_,T,D&&V!=="foreignObject",Y,z),re&&Pn(v,null,_,"created"),W){for(const se in W)se!=="value"&&!or(se)&&p(M,se,null,W[se],D,v.children,_,T,Be);"value"in W&&p(M,"value",null,W.value),(P=W.onVnodeBeforeMount)&&on(P,_,v)}en(M,v,v.scopeId,Y,_),re&&Pn(v,null,_,"beforeMount");const de=(!T||T&&!T.pendingBranch)&&G&&!G.persisted;de&&G.beforeEnter(M),a(M,E,I),((P=W&&W.onVnodeMounted)||de||re)&&De(()=>{P&&on(P,_,v),de&&G.enter(M),re&&Pn(v,null,_,"mounted")},T)},en=(v,E,I,_,T)=>{if(I&&k(v,I),_)for(let D=0;D<_.length;D++)k(v,_[D]);if(T){let D=T.subTree;if(E===D){const Y=T.vnode;en(v,Y,Y.scopeId,Y.slotScopeIds,T.parent)}}},K=(v,E,I,_,T,D,Y,z,M=0)=>{for(let P=M;P<v.length;P++){const V=v[P]=z?Bn(v[P]):ln(v[P]);L(null,V,E,I,_,T,D,Y,z)}},ye=(v,E,I,_,T,D,Y)=>{const z=E.el=v.el;let{patchFlag:M,dynamicChildren:P,dirs:V}=E;M|=v.patchFlag&16;const W=v.props||fe,J=E.props||fe;let G;I&&Rn(I,!1),(G=J.onVnodeBeforeUpdate)&&on(G,I,E,v),V&&Pn(E,v,I,"beforeUpdate"),I&&Rn(I,!0);const re=T&&E.type!=="foreignObject";if(P?ue(v.dynamicChildren,P,z,I,_,re,D):Y||pe(v,E,z,null,I,_,re,D,!1),M>0){if(M&16)ge(z,E,W,J,I,_,T);else if(M&2&&W.class!==J.class&&p(z,"class",null,J.class,T),M&4&&p(z,"style",W.style,J.style,T),M&8){const de=E.dynamicProps;for(let se=0;se<de.length;se++){const Ae=de[se],S=W[Ae],je=J[Ae];(je!==S||Ae==="value")&&p(z,Ae,S,je,T,v.children,I,_,Be)}}M&1&&v.children!==E.children&&f(z,E.children)}else!Y&&P==null&&ge(z,E,W,J,I,_,T);((G=J.onVnodeUpdated)||V)&&De(()=>{G&&on(G,I,E,v),V&&Pn(E,v,I,"updated")},_)},ue=(v,E,I,_,T,D,Y)=>{for(let z=0;z<E.length;z++){const M=v[z],P=E[z],V=M.el&&(M.type===Je||!Mn(M,P)||M.shapeFlag&70)?C(M.el):I;L(M,P,V,null,_,T,D,Y,!0)}},ge=(v,E,I,_,T,D,Y)=>{if(I!==_){if(I!==fe)for(const z in I)!or(z)&&!(z in _)&&p(v,z,I[z],null,Y,E.children,T,D,Be);for(const z in _){if(or(z))continue;const M=_[z],P=I[z];M!==P&&z!=="value"&&p(v,z,P,M,Y,E.children,T,D,Be)}"value"in _&&p(v,"value",I.value,_.value)}},Pe=(v,E,I,_,T,D,Y,z,M)=>{const P=E.el=v?v.el:h(""),V=E.anchor=v?v.anchor:h("");let{patchFlag:W,dynamicChildren:J,slotScopeIds:G}=E;G&&(z=z?z.concat(G):G),v==null?(a(P,I,_),a(V,I,_),K(E.children,I,V,T,D,Y,z,M)):W>0&&W&64&&J&&v.dynamicChildren?(ue(v.dynamicChildren,J,I,T,D,Y,z),(E.key!=null||T&&E===T.subTree)&&Mi(v,E,!0)):pe(v,E,I,V,T,D,Y,z,M)},Ke=(v,E,I,_,T,D,Y,z,M)=>{E.slotScopeIds=z,v==null?E.shapeFlag&512?T.ctx.activate(E,I,_,Y,M):gn(E,I,_,T,D,Y,M):Ut(v,E,M)},gn=(v,E,I,_,T,D,Y)=>{const z=v.component=Md(v,_,T);if(wr(v)&&(z.ctx.renderer=xn),Ud(z),z.asyncDep){if(T&&T.registerDep(z,me),!v.el){const M=z.subTree=Ln(hn);Q(null,M,E,I)}return}me(z,v,E,I,T,D,Y)},Ut=(v,E,I)=>{const _=E.component=v.component;if(Hp(v,E,I))if(_.asyncDep&&!_.asyncResolved){F(_,E,I);return}else _.next=E,Dp(_.update),_.update();else E.el=v.el,_.vnode=E},me=(v,E,I,_,T,D,Y)=>{const z=()=>{if(v.isMounted){let{next:V,bu:W,u:J,parent:G,vnode:re}=v,de=V,se;Rn(v,!1),V?(V.el=re.el,F(v,V,Y)):V=re,W&&ar(W),(se=V.props&&V.props.onVnodeBeforeUpdate)&&on(se,G,V,re),Rn(v,!0);const Ae=Nr(v),S=v.subTree;v.subTree=Ae,L(S,Ae,C(S.el),tn(S),v,T,D),V.el=Ae.el,de===null&&Wp(v,Ae.el),J&&De(J,T),(se=V.props&&V.props.onVnodeUpdated)&&De(()=>on(se,G,V,re),T)}else{let V;const{el:W,props:J}=E,{bm:G,m:re,parent:de}=v,se=lr(E);if(Rn(v,!1),G&&ar(G),!se&&(V=J&&J.onVnodeBeforeMount)&&on(V,de,E),Rn(v,!0),W&&Wn){const Ae=()=>{v.subTree=Nr(v),Wn(W,v.subTree,v,T,null)};se?E.type.__asyncLoader().then(()=>!v.isUnmounted&&Ae()):Ae()}else{const Ae=v.subTree=Nr(v);L(null,Ae,I,_,v,T,D),E.el=Ae.el}if(re&&De(re,T),!se&&(V=J&&J.onVnodeMounted)){const Ae=E;De(()=>on(V,de,Ae),T)}(E.shapeFlag&256||de&&lr(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&De(v.a,T),v.isMounted=!0,E=I=_=null}},M=v.effect=new xo(z,()=>To(P),v.scope),P=v.update=()=>M.run();P.id=v.uid,Rn(v,!0),P()},F=(v,E,I)=>{E.component=v;const _=v.vnode.props;v.vnode=E,v.next=null,vd(v,E.props,_,I),wd(v,E.children,I),ot(),Ea(),at()},pe=(v,E,I,_,T,D,Y,z,M=!1)=>{const P=v&&v.children,V=v?v.shapeFlag:0,W=E.children,{patchFlag:J,shapeFlag:G}=E;if(J>0){if(J&128){vn(P,W,I,_,T,D,Y,z,M);return}else if(J&256){Me(P,W,I,_,T,D,Y,z,M);return}}G&8?(V&16&&Be(P,T,D),W!==P&&f(I,W)):V&16?G&16?vn(P,W,I,_,T,D,Y,z,M):Be(P,T,D,!0):(V&8&&f(I,""),G&16&&K(W,I,_,T,D,Y,z,M))},Me=(v,E,I,_,T,D,Y,z,M)=>{v=v||Gn,E=E||Gn;const P=v.length,V=E.length,W=Math.min(P,V);let J;for(J=0;J<W;J++){const G=E[J]=M?Bn(E[J]):ln(E[J]);L(v[J],G,I,null,T,D,Y,z,M)}P>V?Be(v,T,D,!0,!1,W):K(E,I,_,T,D,Y,z,M,W)},vn=(v,E,I,_,T,D,Y,z,M)=>{let P=0;const V=E.length;let W=v.length-1,J=V-1;for(;P<=W&&P<=J;){const G=v[P],re=E[P]=M?Bn(E[P]):ln(E[P]);if(Mn(G,re))L(G,re,I,null,T,D,Y,z,M);else break;P++}for(;P<=W&&P<=J;){const G=v[W],re=E[J]=M?Bn(E[J]):ln(E[J]);if(Mn(G,re))L(G,re,I,null,T,D,Y,z,M);else break;W--,J--}if(P>W){if(P<=J){const G=J+1,re=G<V?E[G].el:_;for(;P<=J;)L(null,E[P]=M?Bn(E[P]):ln(E[P]),I,re,T,D,Y,z,M),P++}}else if(P>J)for(;P<=W;)Re(v[P],T,D,!0),P++;else{const G=P,re=P,de=new Map;for(P=re;P<=J;P++){const Le=E[P]=M?Bn(E[P]):ln(E[P]);Le.key!=null&&de.set(Le.key,P)}let se,Ae=0;const S=J-re+1;let je=!1,lt=0;const En=new Array(S);for(P=0;P<S;P++)En[P]=0;for(P=G;P<=W;P++){const Le=v[P];if(Ae>=S){Re(Le,T,D,!0);continue}let ze;if(Le.key!=null)ze=de.get(Le.key);else for(se=re;se<=J;se++)if(En[se-re]===0&&Mn(Le,E[se])){ze=se;break}ze===void 0?Re(Le,T,D,!0):(En[ze-re]=P+1,ze>=lt?lt=ze:je=!0,L(Le,E[ze],I,null,T,D,Y,z,M),Ae++)}const ie=je?Id(En):Gn;for(se=ie.length-1,P=S-1;P>=0;P--){const Le=re+P,ze=E[Le],Kn=Le+1<V?E[Le+1].el:_;En[P]===0?L(null,ze,I,Kn,T,D,Y,z,M):je&&(se<0||P!==ie[se]?nn(ze,I,Kn,2):se--)}}},nn=(v,E,I,_,T=null)=>{const{el:D,type:Y,transition:z,children:M,shapeFlag:P}=v;if(P&6){nn(v.component.subTree,E,I,_);return}if(P&128){v.suspense.move(E,I,_);return}if(P&64){Y.move(v,E,I,xn);return}if(Y===Je){a(D,E,I);for(let W=0;W<M.length;W++)nn(M[W],E,I,_);a(v.anchor,E,I);return}if(Y===Qr){$(v,E,I);return}if(_!==2&&P&1&&z)if(_===0)z.beforeEnter(D),a(D,E,I),De(()=>z.enter(D),T);else{const{leave:W,delayLeave:J,afterLeave:G}=z,re=()=>a(D,E,I),de=()=>{W(D,()=>{re(),G&&G()})};J?J(D,re,de):de()}else a(D,E,I)},Re=(v,E,I,_=!1,T=!1)=>{const{type:D,props:Y,ref:z,children:M,dynamicChildren:P,shapeFlag:V,patchFlag:W,dirs:J}=v;if(z!=null&&po(z,null,I,v,!0),V&256){E.ctx.deactivate(v);return}const G=V&1&&J,re=!lr(v);let de;if(re&&(de=Y&&Y.onVnodeBeforeUnmount)&&on(de,E,v),V&6)Hn(v.component,I,_);else{if(V&128){v.suspense.unmount(I,_);return}G&&Pn(v,null,E,"beforeUnmount"),V&64?v.type.remove(v,E,I,T,xn,_):P&&(D!==Je||W>0&&W&64)?Be(P,E,I,!1,!0):(D===Je&&W&384||!T&&V&16)&&Be(M,E,I),_&&Nn(v)}(re&&(de=Y&&Y.onVnodeUnmounted)||G)&&De(()=>{de&&on(de,E,v),G&&Pn(v,null,E,"unmounted")},I)},Nn=v=>{const{type:E,el:I,anchor:_,transition:T}=v;if(E===Je){Qe(I,_);return}if(E===Qr){le(v);return}const D=()=>{o(I),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(v.shapeFlag&1&&T&&!T.persisted){const{leave:Y,delayLeave:z}=T,M=()=>Y(I,D);z?z(v.el,D,M):M()}else D()},Qe=(v,E)=>{let I;for(;v!==E;)I=B(v),o(v),v=I;o(E)},Hn=(v,E,I)=>{const{bum:_,scope:T,update:D,subTree:Y,um:z}=v;_&&ar(_),T.stop(),D&&(D.active=!1,Re(Y,v,E,I)),z&&De(z,E),De(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Be=(v,E,I,_=!1,T=!1,D=0)=>{for(let Y=D;Y<v.length;Y++)Re(v[Y],E,I,_,T)},tn=v=>v.shapeFlag&6?tn(v.component.subTree):v.shapeFlag&128?v.suspense.next():B(v.anchor||v.el),it=(v,E,I)=>{v==null?E._vnode&&Re(E._vnode,null,null,!0):L(E._vnode||null,v,E,null,null,null,I),Ea(),bi(),E._vnode=v},xn={p:L,um:Re,m:nn,r:Nn,mt:gn,mc:K,pc:pe,pbc:ue,n:tn,o:e};let Ze,Wn;return n&&([Ze,Wn]=n(xn)),{render:it,hydrate:Ze,createApp:kd(it,Ze)}}function Rn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Mi(e,n,t=!1){const a=e.children,o=n.children;if(ne(a)&&ne(o))for(let p=0;p<a.length;p++){const u=a[p];let h=o[p];h.shapeFlag&1&&!h.dynamicChildren&&((h.patchFlag<=0||h.patchFlag===32)&&(h=o[p]=Bn(o[p]),h.el=u.el),t||Mi(u,h)),h.type===kr&&(h.el=u.el)}}function Id(e){const n=e.slice(),t=[0];let a,o,p,u,h;const b=e.length;for(a=0;a<b;a++){const g=e[a];if(g!==0){if(o=t[t.length-1],e[o]<g){n[a]=o,t.push(a);continue}for(p=0,u=t.length-1;p<u;)h=p+u>>1,e[t[h]]<g?p=h+1:u=h;g<e[t[p]]&&(p>0&&(n[a]=t[p-1]),t[p]=a)}}for(p=t.length,u=t[p-1];p-- >0;)t[p]=u,u=n[u];return t}const Ld=e=>e.__isTeleport,Je=Symbol(void 0),kr=Symbol(void 0),hn=Symbol(void 0),Qr=Symbol(void 0),Rt=[];let $e=null;function ji(e=!1){Rt.push($e=e?null:[])}function Td(){Rt.pop(),$e=Rt[Rt.length-1]||null}let Mt=1;function Oa(e){Mt+=e}function _d(e){return e.dynamicChildren=Mt>0?$e||Gn:null,Td(),Mt>0&&$e&&$e.push(e),e}function Ui(e,n,t,a,o,p){return _d(Oe(e,n,t,a,o,p,!0))}function Od(e){return e?e.__v_isVNode===!0:!1}function Mn(e,n){return e.type===n.type&&e.key===n.key}const Br="__vInternal",Fi=({key:e})=>e??null,sr=({ref:e,ref_key:n,ref_for:t})=>e!=null?ke(e)||_e(e)||te(e)?{i:Ue,r:e,k:n,f:!!t}:e:null;function Oe(e,n=null,t=null,a=0,o=null,p=e===Je?0:1,u=!1,h=!1){const b={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Fi(n),ref:n&&sr(n),scopeId:xi,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:p,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ue};return h?(Po(b,t),p&128&&e.normalize(b)):t&&(b.shapeFlag|=ke(t)?8:16),Mt>0&&!u&&$e&&(b.patchFlag>0||p&6)&&b.patchFlag!==32&&$e.push(b),b}const Ln=Pd;function Pd(e,n=null,t=null,a=0,o=null,p=!1){if((!e||e===cd)&&(e=hn),Od(e)){const h=_n(e,n,!0);return t&&Po(h,t),Mt>0&&!p&&$e&&(h.shapeFlag&6?$e[$e.indexOf(e)]=h:$e.push(h)),h.patchFlag|=-2,h}if(Wd(e)&&(e=e.__vccOpts),n){n=Rd(n);let{class:h,style:b}=n;h&&!ke(h)&&(n.class=yo(h)),be(b)&&(ui(b)&&!ne(b)&&(b=Ie({},b)),n.style=Ao(b))}const u=ke(e)?1:Kp(e)?128:Ld(e)?64:be(e)?4:te(e)?2:0;return Oe(e,n,t,a,o,u,p,!0)}function Rd(e){return e?ui(e)||Br in e?Ie({},e):e:null}function _n(e,n,t=!1){const{props:a,ref:o,patchFlag:p,children:u}=e,h=n?zd(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Fi(h),ref:n&&n.ref?t&&o?ne(o)?o.concat(sr(n)):[o,sr(n)]:sr(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:u,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Je?p===-1?16:p|16:p,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_n(e.ssContent),ssFallback:e.ssFallback&&_n(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Sr(e=" ",n=0){return Ln(kr,null,e,n)}function ln(e){return e==null||typeof e=="boolean"?Ln(hn):ne(e)?Ln(Je,null,e.slice()):typeof e=="object"?Bn(e):Ln(kr,null,String(e))}function Bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_n(e)}function Po(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(ne(n))t=16;else if(typeof n=="object")if(a&65){const o=n.default;o&&(o._c&&(o._d=!1),Po(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(Br in n)?n._ctx=Ue:o===3&&Ue&&(Ue.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else te(n)?(n={default:n,_ctx:Ue},t=32):(n=String(n),a&64?(t=16,n=[Sr(n)]):t=8);e.children=n,e.shapeFlag|=t}function zd(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const o in a)if(o==="class")n.class!==a.class&&(n.class=yo([n.class,a.class]));else if(o==="style")n.style=Ao([n.style,a.style]);else if(hr(o)){const p=n[o],u=a[o];u&&p!==u&&!(ne(p)&&p.includes(u))&&(n[o]=p?[].concat(p,u):u)}else o!==""&&(n[o]=a[o])}return n}function on(e,n,t,a=null){We(e,n,7,[t,a])}const qd=Di();let Dd=0;function Md(e,n,t){const a=e.type,o=(n?n.appContext:e.appContext)||qd,p={uid:Dd++,vnode:e,type:a,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pi(a,o),emitsOptions:vi(a,o),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:a.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return p.ctx={_:p},p.root=n?n.root:p,p.emit=Up.bind(null,p),e.ce&&e.ce(p),p}let Ce=null;const jd=()=>Ce||Ue,tt=e=>{Ce=e,e.scope.on()},Yn=()=>{Ce&&Ce.scope.off(),Ce=null};function Yi(e){return e.vnode.shapeFlag&4}let jt=!1;function Ud(e,n=!1){jt=n;const{props:t,children:a}=e.vnode,o=Yi(e);gd(e,t,o,n),Ed(e,a);const p=o?Fd(e,n):void 0;return jt=!1,p}function Fd(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=fi(new Proxy(e.ctx,fd));const{setup:a}=t;if(a){const o=e.setupContext=a.length>1?Nd(e):null;tt(e),ot();const p=In(a,e,0,[e.props,o]);if(at(),Yn(),ei(p)){if(p.then(Yn,Yn),n)return p.then(u=>{Pa(e,u,n)}).catch(u=>{xr(u,e,0)});e.asyncDep=p}else Pa(e,p,n)}else Ni(e,n)}function Pa(e,n,t){te(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:be(n)&&(e.setupState=Ai(n)),Ni(e,t)}let Ra;function Ni(e,n,t){const a=e.type;if(!e.render){if(!n&&Ra&&!a.render){const o=a.template||_o(e).template;if(o){const{isCustomElement:p,compilerOptions:u}=e.appContext.config,{delimiters:h,compilerOptions:b}=a,g=Ie(Ie({isCustomElement:p,delimiters:h},u),b);a.render=Ra(o,g)}}e.render=a.render||Ge}tt(e),ot(),Ad(e),at(),Yn()}function Yd(e){return new Proxy(e.attrs,{get(n,t){return Fe(e,"get","$attrs"),n[t]}})}function Nd(e){const n=a=>{e.exposed=a||{}};let t;return{get attrs(){return t||(t=Yd(e))},slots:e.slots,emit:e.emit,expose:n}}function Ir(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ai(fi(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Pt)return Pt[t](e)},has(n,t){return t in n||t in Pt}}))}function Hd(e,n=!0){return te(e)?e.displayName||e.name:e.name||n&&e.__name}function Wd(e){return te(e)&&"__vccOpts"in e}const Kd=(e,n)=>Pp(e,n,jt),Qd=Symbol(""),Zd=()=>ir(Qd),Vd="3.2.45",Jd="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,za=jn&&jn.createElement("template"),Xd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const o=n?jn.createElementNS(Jd,e):jn.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>jn.createTextNode(e),createComment:e=>jn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,o,p){const u=t?t.previousSibling:n.lastChild;if(o&&(o===p||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===p||!(o=o.nextSibling)););else{za.innerHTML=a?`<svg>${e}</svg>`:e;const h=za.content;if(a){const b=h.firstChild;for(;b.firstChild;)h.appendChild(b.firstChild);h.removeChild(b)}n.insertBefore(h,t)}return[u?u.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function $d(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function Gd(e,n,t){const a=e.style,o=ke(t);if(t&&!o){for(const p in t)co(a,p,t[p]);if(n&&!ke(n))for(const p in n)t[p]==null&&co(a,p,"")}else{const p=a.display;o?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=p)}}const qa=/\s*!important$/;function co(e,n,t){if(ne(t))t.forEach(a=>co(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=ec(e,n);qa.test(t)?e.setProperty(rt(a),t.replace(qa,""),"important"):e[a]=t}}const Da=["Webkit","Moz","ms"],Zr={};function ec(e,n){const t=Zr[n];if(t)return t;let a=cn(n);if(a!=="filter"&&a in e)return Zr[n]=a;a=gr(a);for(let o=0;o<Da.length;o++){const p=Da[o]+a;if(p in e)return Zr[n]=p}return n}const Ma="http://www.w3.org/1999/xlink";function nc(e,n,t,a,o){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Ma,n.slice(6,n.length)):e.setAttributeNS(Ma,n,t);else{const p=Ns(n);t==null||p&&!Ga(t)?e.removeAttribute(n):e.setAttribute(n,p?"":t)}}function tc(e,n,t,a,o,p,u){if(n==="innerHTML"||n==="textContent"){a&&u(a,o,p),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const b=t??"";(e.value!==b||e.tagName==="OPTION")&&(e.value=b),t==null&&e.removeAttribute(n);return}let h=!1;if(t===""||t==null){const b=typeof e[n];b==="boolean"?t=Ga(t):t==null&&b==="string"?(t="",h=!0):b==="number"&&(t=0,h=!0)}try{e[n]=t}catch{}h&&e.removeAttribute(n)}function $n(e,n,t,a){e.addEventListener(n,t,a)}function rc(e,n,t,a){e.removeEventListener(n,t,a)}function oc(e,n,t,a,o=null){const p=e._vei||(e._vei={}),u=p[n];if(a&&u)u.value=a;else{const[h,b]=ac(n);if(a){const g=p[n]=sc(a,o);$n(e,h,g,b)}else u&&(rc(e,h,u,b),p[n]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function ac(e){let n;if(ja.test(e)){n={};let a;for(;a=e.match(ja);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),n]}let Vr=0;const ic=Promise.resolve(),lc=()=>Vr||(ic.then(()=>Vr=0),Vr=Date.now());function sc(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;We(pc(a,t.value),n,5,[a])};return t.value=e,t.attached=lc(),t}function pc(e,n){if(ne(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>o=>!o._stopped&&a&&a(o))}else return n}const Ua=/^on[a-z]/,dc=(e,n,t,a,o=!1,p,u,h,b)=>{n==="class"?$d(e,a,o):n==="style"?Gd(e,t,a):hr(n)?ho(n)||oc(e,n,t,a,u):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):cc(e,n,a,o))?tc(e,n,a,p,u,h,b):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),nc(e,n,a,o))};function cc(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&Ua.test(n)&&te(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Ua.test(n)&&ke(t)?!1:n in e}const uc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$p.props;const Fa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ne(n)?t=>ar(n,t):n};function fc(e){e.target.composing=!0}function Ya(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Ac={created(e,{modifiers:{lazy:n,trim:t,number:a}},o){e._assign=Fa(o);const p=a||o.props&&o.props.type==="number";$n(e,n?"change":"input",u=>{if(u.target.composing)return;let h=e.value;t&&(h=h.trim()),p&&(h=cr(h)),e._assign(h)}),t&&$n(e,"change",()=>{e.value=e.value.trim()}),n||($n(e,"compositionstart",fc),$n(e,"compositionend",Ya),$n(e,"change",Ya))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:o}},p){if(e._assign=Fa(p),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(o||e.type==="number")&&cr(e.value)===n))return;const u=n??"";e.value!==u&&(e.value=u)}},yc=Ie({patchProp:dc},Xd);let Na;function hc(){return Na||(Na=Bd(yc))}const mc=(...e)=>{const n=hc().createApp(...e),{mount:t}=n;return n.mount=a=>{const o=bc(a);if(!o)return;const p=n._component;!te(p)&&!p.render&&!p.template&&(p.template=o.innerHTML),o.innerHTML="";const u=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),u},n};function bc(e){return ke(e)?document.querySelector(e):e}var Ha=typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{},pn=[],He=[],gc=typeof Uint8Array<"u"?Uint8Array:Array,Ro=!1;function Hi(){Ro=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0;n<64;++n)pn[n]=e[n],He[e.charCodeAt(n)]=n;He["-".charCodeAt(0)]=62,He["_".charCodeAt(0)]=63}function vc(e,n,t){for(var a,o,p=[],u=n;u<t;u+=3)a=(e[u]<<16)+(e[u+1]<<8)+e[u+2],p.push(pn[(o=a)>>18&63]+pn[o>>12&63]+pn[o>>6&63]+pn[63&o]);return p.join("")}function Wa(e){var n;Ro||Hi();for(var t=e.length,a=t%3,o="",p=[],u=16383,h=0,b=t-a;h<b;h+=u)p.push(vc(e,h,h+u>b?b:h+u));return a===1?(n=e[t-1],o+=pn[n>>2],o+=pn[n<<4&63],o+="=="):a===2&&(n=(e[t-2]<<8)+e[t-1],o+=pn[n>>10],o+=pn[n>>4&63],o+=pn[n<<2&63],o+="="),p.push(o),p.join("")}function nr(e,n,t,a,o){var p,u,h=8*o-a-1,b=(1<<h)-1,g=b>>1,f=-7,C=t?o-1:0,B=t?-1:1,k=e[n+C];for(C+=B,p=k&(1<<-f)-1,k>>=-f,f+=h;f>0;p=256*p+e[n+C],C+=B,f-=8);for(u=p&(1<<-f)-1,p>>=-f,f+=a;f>0;u=256*u+e[n+C],C+=B,f-=8);if(p===0)p=1-g;else{if(p===b)return u?NaN:1/0*(k?-1:1);u+=Math.pow(2,a),p-=g}return(k?-1:1)*u*Math.pow(2,p-a)}function Wi(e,n,t,a,o,p){var u,h,b,g=8*p-o-1,f=(1<<g)-1,C=f>>1,B=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=a?0:p-1,R=a?1:-1,L=n<0||n===0&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(h=isNaN(n)?1:0,u=f):(u=Math.floor(Math.log(n)/Math.LN2),n*(b=Math.pow(2,-u))<1&&(u--,b*=2),(n+=u+C>=1?B/b:B*Math.pow(2,1-C))*b>=2&&(u++,b/=2),u+C>=f?(h=0,u=f):u+C>=1?(h=(n*b-1)*Math.pow(2,o),u+=C):(h=n*Math.pow(2,C-1)*Math.pow(2,o),u=0));o>=8;e[t+k]=255&h,k+=R,h/=256,o-=8);for(u=u<<o|h,g+=o;g>0;e[t+k]=255&u,k+=R,u/=256,g-=8);e[t+k-R]|=128*L}var xc={}.toString,Ki=Array.isArray||function(e){return xc.call(e)=="[object Array]"};function Ar(){return O.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function yn(e,n){if(Ar()<n)throw new RangeError("Invalid typed array length");return O.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(n)).__proto__=O.prototype:(e===null&&(e=new O(n)),e.length=n),e}function O(e,n,t){if(!(O.TYPED_ARRAY_SUPPORT||this instanceof O))return new O(e,n,t);if(typeof e=="number"){if(typeof n=="string")throw new Error("If encoding is specified then the first argument must be a string");return uo(this,e)}return Qi(this,e,n,t)}function Qi(e,n,t,a){if(typeof n=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer?function(o,p,u,h){if(p.byteLength,u<0||p.byteLength<u)throw new RangeError("'offset' is out of bounds");if(p.byteLength<u+(h||0))throw new RangeError("'length' is out of bounds");return p=u===void 0&&h===void 0?new Uint8Array(p):h===void 0?new Uint8Array(p,u):new Uint8Array(p,u,h),O.TYPED_ARRAY_SUPPORT?(o=p).__proto__=O.prototype:o=Jr(o,p),o}(e,n,t,a):typeof n=="string"?function(o,p,u){if(typeof u=="string"&&u!==""||(u="utf8"),!O.isEncoding(u))throw new TypeError('"encoding" must be a valid string encoding');var h=0|Vi(p,u);o=yn(o,h);var b=o.write(p,u);return b!==h&&(o=o.slice(0,b)),o}(e,n,t):function(o,p){if(dn(p)){var u=0|zo(p.length);return(o=yn(o,u)).length===0||p.copy(o,0,0,u),o}if(p){if(typeof ArrayBuffer<"u"&&p.buffer instanceof ArrayBuffer||"length"in p)return typeof p.length!="number"||(h=p.length)!=h?yn(o,0):Jr(o,p);if(p.type==="Buffer"&&Ki(p.data))return Jr(o,p.data)}var h;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,n)}function Zi(e){if(typeof e!="number")throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function uo(e,n){if(Zi(n),e=yn(e,n<0?0:0|zo(n)),!O.TYPED_ARRAY_SUPPORT)for(var t=0;t<n;++t)e[t]=0;return e}function Jr(e,n){var t=n.length<0?0:0|zo(n.length);e=yn(e,t);for(var a=0;a<t;a+=1)e[a]=255&n[a];return e}function zo(e){if(e>=Ar())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ar().toString(16)+" bytes");return 0|e}function dn(e){return!(e==null||!e._isBuffer)}function Vi(e,n){if(dn(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;if(t===0)return 0;for(var a=!1;;)switch(n){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":case void 0:return yr(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*t;case"hex":return t>>>1;case"base64":return Gi(e).length;default:if(a)return yr(e).length;n=(""+n).toLowerCase(),a=!0}}function Ec(e,n,t){var a=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0)<=(n>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _c(this,n,t);case"utf8":case"utf-8":return Xi(this,n,t);case"ascii":return Lc(this,n,t);case"latin1":case"binary":return Tc(this,n,t);case"base64":return Ic(this,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oc(this,n,t);default:if(a)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function zn(e,n,t){var a=e[n];e[n]=e[t],e[t]=a}function Ka(e,n,t,a,o){if(e.length===0)return-1;if(typeof t=="string"?(a=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,isNaN(t)&&(t=o?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(o)return-1;t=e.length-1}else if(t<0){if(!o)return-1;t=0}if(typeof n=="string"&&(n=O.from(n,a)),dn(n))return n.length===0?-1:Qa(e,n,t,a,o);if(typeof n=="number")return n&=255,O.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(e,n,t):Uint8Array.prototype.lastIndexOf.call(e,n,t):Qa(e,[n],t,a,o);throw new TypeError("val must be string, number or Buffer")}function Qa(e,n,t,a,o){var p,u=1,h=e.length,b=n.length;if(a!==void 0&&((a=String(a).toLowerCase())==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(e.length<2||n.length<2)return-1;u=2,h/=2,b/=2,t/=2}function g(k,R){return u===1?k[R]:k.readUInt16BE(R*u)}if(o){var f=-1;for(p=t;p<h;p++)if(g(e,p)===g(n,f===-1?0:p-f)){if(f===-1&&(f=p),p-f+1===b)return f*u}else f!==-1&&(p-=p-f),f=-1}else for(t+b>h&&(t=h-b),p=t;p>=0;p--){for(var C=!0,B=0;B<b;B++)if(g(e,p+B)!==g(n,B)){C=!1;break}if(C)return p}return-1}function wc(e,n,t,a){t=Number(t)||0;var o=e.length-t;a?(a=Number(a))>o&&(a=o):a=o;var p=n.length;if(p%2!=0)throw new TypeError("Invalid hex string");a>p/2&&(a=p/2);for(var u=0;u<a;++u){var h=parseInt(n.substr(2*u,2),16);if(isNaN(h))return u;e[t+u]=h}return u}function Cc(e,n,t,a){return Lr(yr(n,e.length-t),e,t,a)}function Ji(e,n,t,a){return Lr(function(o){for(var p=[],u=0;u<o.length;++u)p.push(255&o.charCodeAt(u));return p}(n),e,t,a)}function kc(e,n,t,a){return Ji(e,n,t,a)}function Bc(e,n,t,a){return Lr(Gi(n),e,t,a)}function Sc(e,n,t,a){return Lr(function(o,p){for(var u,h,b,g=[],f=0;f<o.length&&!((p-=2)<0);++f)h=(u=o.charCodeAt(f))>>8,b=u%256,g.push(b),g.push(h);return g}(n,e.length-t),e,t,a)}function Ic(e,n,t){return n===0&&t===e.length?Wa(e):Wa(e.slice(n,t))}function Xi(e,n,t){t=Math.min(e.length,t);for(var a=[],o=n;o<t;){var p,u,h,b,g=e[o],f=null,C=g>239?4:g>223?3:g>191?2:1;if(o+C<=t)switch(C){case 1:g<128&&(f=g);break;case 2:(192&(p=e[o+1]))==128&&(b=(31&g)<<6|63&p)>127&&(f=b);break;case 3:p=e[o+1],u=e[o+2],(192&p)==128&&(192&u)==128&&(b=(15&g)<<12|(63&p)<<6|63&u)>2047&&(b<55296||b>57343)&&(f=b);break;case 4:p=e[o+1],u=e[o+2],h=e[o+3],(192&p)==128&&(192&u)==128&&(192&h)==128&&(b=(15&g)<<18|(63&p)<<12|(63&u)<<6|63&h)>65535&&b<1114112&&(f=b)}f===null?(f=65533,C=1):f>65535&&(f-=65536,a.push(f>>>10&1023|55296),f=56320|1023&f),a.push(f),o+=C}return function(B){var k=B.length;if(k<=Za)return String.fromCharCode.apply(String,B);for(var R="",L=0;L<k;)R+=String.fromCharCode.apply(String,B.slice(L,L+=Za));return R}(a)}O.TYPED_ARRAY_SUPPORT=Ha.TYPED_ARRAY_SUPPORT===void 0||Ha.TYPED_ARRAY_SUPPORT,Ar(),O.poolSize=8192,O._augment=function(e){return e.__proto__=O.prototype,e},O.from=function(e,n,t){return Qi(null,e,n,t)},O.TYPED_ARRAY_SUPPORT&&(O.prototype.__proto__=Uint8Array.prototype,O.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&O[Symbol.species]),O.alloc=function(e,n,t){return function(a,o,p,u){return Zi(o),o<=0?yn(a,o):p!==void 0?typeof u=="string"?yn(a,o).fill(p,u):yn(a,o).fill(p):yn(a,o)}(null,e,n,t)},O.allocUnsafe=function(e){return uo(null,e)},O.allocUnsafeSlow=function(e){return uo(null,e)},O.isBuffer=function(e){return e!=null&&(!!e._isBuffer||Xa(e)||function(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&Xa(n.slice(0,0))}(e))},O.compare=function(e,n){if(!dn(e)||!dn(n))throw new TypeError("Arguments must be Buffers");if(e===n)return 0;for(var t=e.length,a=n.length,o=0,p=Math.min(t,a);o<p;++o)if(e[o]!==n[o]){t=e[o],a=n[o];break}return t<a?-1:a<t?1:0},O.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},O.concat=function(e,n){if(!Ki(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return O.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<e.length;++t)n+=e[t].length;var a=O.allocUnsafe(n),o=0;for(t=0;t<e.length;++t){var p=e[t];if(!dn(p))throw new TypeError('"list" argument must be an Array of Buffers');p.copy(a,o),o+=p.length}return a},O.byteLength=Vi,O.prototype._isBuffer=!0,O.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)zn(this,n,n+1);return this},O.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)zn(this,n,n+3),zn(this,n+1,n+2);return this},O.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)zn(this,n,n+7),zn(this,n+1,n+6),zn(this,n+2,n+5),zn(this,n+3,n+4);return this},O.prototype.toString=function(){var e=0|this.length;return e===0?"":arguments.length===0?Xi(this,0,e):Ec.apply(this,arguments)},O.prototype.equals=function(e){if(!dn(e))throw new TypeError("Argument must be a Buffer");return this===e||O.compare(this,e)===0},O.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">"},O.prototype.compare=function(e,n,t,a,o){if(!dn(e))throw new TypeError("Argument must be a Buffer");if(n===void 0&&(n=0),t===void 0&&(t=e?e.length:0),a===void 0&&(a=0),o===void 0&&(o=this.length),n<0||t>e.length||a<0||o>this.length)throw new RangeError("out of range index");if(a>=o&&n>=t)return 0;if(a>=o)return-1;if(n>=t)return 1;if(this===e)return 0;for(var p=(o>>>=0)-(a>>>=0),u=(t>>>=0)-(n>>>=0),h=Math.min(p,u),b=this.slice(a,o),g=e.slice(n,t),f=0;f<h;++f)if(b[f]!==g[f]){p=b[f],u=g[f];break}return p<u?-1:u<p?1:0},O.prototype.includes=function(e,n,t){return this.indexOf(e,n,t)!==-1},O.prototype.indexOf=function(e,n,t){return Ka(this,e,n,t,!0)},O.prototype.lastIndexOf=function(e,n,t){return Ka(this,e,n,t,!1)},O.prototype.write=function(e,n,t,a){if(n===void 0)a="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")a=n,t=this.length,n=0;else{if(!isFinite(n))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");n|=0,isFinite(t)?(t|=0,a===void 0&&(a="utf8")):(a=t,t=void 0)}var o=this.length-n;if((t===void 0||t>o)&&(t=o),e.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var p=!1;;)switch(a){case"hex":return wc(this,e,n,t);case"utf8":case"utf-8":return Cc(this,e,n,t);case"ascii":return Ji(this,e,n,t);case"latin1":case"binary":return kc(this,e,n,t);case"base64":return Bc(this,e,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Sc(this,e,n,t);default:if(p)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),p=!0}},O.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Za=4096;function Lc(e,n,t){var a="";t=Math.min(e.length,t);for(var o=n;o<t;++o)a+=String.fromCharCode(127&e[o]);return a}function Tc(e,n,t){var a="";t=Math.min(e.length,t);for(var o=n;o<t;++o)a+=String.fromCharCode(e[o]);return a}function _c(e,n,t){var a=e.length;(!n||n<0)&&(n=0),(!t||t<0||t>a)&&(t=a);for(var o="",p=n;p<t;++p)o+=Rc(e[p]);return o}function Oc(e,n,t){for(var a=e.slice(n,t),o="",p=0;p<a.length;p+=2)o+=String.fromCharCode(a[p]+256*a[p+1]);return o}function we(e,n,t){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+n>t)throw new RangeError("Trying to access beyond buffer length")}function qe(e,n,t,a,o,p){if(!dn(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>o||n<p)throw new RangeError('"value" argument is out of bounds');if(t+a>e.length)throw new RangeError("Index out of range")}function tr(e,n,t,a){n<0&&(n=65535+n+1);for(var o=0,p=Math.min(e.length-t,2);o<p;++o)e[t+o]=(n&255<<8*(a?o:1-o))>>>8*(a?o:1-o)}function rr(e,n,t,a){n<0&&(n=4294967295+n+1);for(var o=0,p=Math.min(e.length-t,4);o<p;++o)e[t+o]=n>>>8*(a?o:3-o)&255}function $i(e,n,t,a,o,p){if(t+a>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Va(e,n,t,a,o){return o||$i(e,0,t,4),Wi(e,n,t,a,23,4),t+4}function Ja(e,n,t,a,o){return o||$i(e,0,t,8),Wi(e,n,t,a,52,8),t+8}O.prototype.slice=function(e,n){var t,a=this.length;if((e=~~e)<0?(e+=a)<0&&(e=0):e>a&&(e=a),(n=n===void 0?a:~~n)<0?(n+=a)<0&&(n=0):n>a&&(n=a),n<e&&(n=e),O.TYPED_ARRAY_SUPPORT)(t=this.subarray(e,n)).__proto__=O.prototype;else{var o=n-e;t=new O(o,void 0);for(var p=0;p<o;++p)t[p]=this[p+e]}return t},O.prototype.readUIntLE=function(e,n,t){e|=0,n|=0,t||we(e,n,this.length);for(var a=this[e],o=1,p=0;++p<n&&(o*=256);)a+=this[e+p]*o;return a},O.prototype.readUIntBE=function(e,n,t){e|=0,n|=0,t||we(e,n,this.length);for(var a=this[e+--n],o=1;n>0&&(o*=256);)a+=this[e+--n]*o;return a},O.prototype.readUInt8=function(e,n){return n||we(e,1,this.length),this[e]},O.prototype.readUInt16LE=function(e,n){return n||we(e,2,this.length),this[e]|this[e+1]<<8},O.prototype.readUInt16BE=function(e,n){return n||we(e,2,this.length),this[e]<<8|this[e+1]},O.prototype.readUInt32LE=function(e,n){return n||we(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},O.prototype.readUInt32BE=function(e,n){return n||we(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},O.prototype.readIntLE=function(e,n,t){e|=0,n|=0,t||we(e,n,this.length);for(var a=this[e],o=1,p=0;++p<n&&(o*=256);)a+=this[e+p]*o;return a>=(o*=128)&&(a-=Math.pow(2,8*n)),a},O.prototype.readIntBE=function(e,n,t){e|=0,n|=0,t||we(e,n,this.length);for(var a=n,o=1,p=this[e+--a];a>0&&(o*=256);)p+=this[e+--a]*o;return p>=(o*=128)&&(p-=Math.pow(2,8*n)),p},O.prototype.readInt8=function(e,n){return n||we(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},O.prototype.readInt16LE=function(e,n){n||we(e,2,this.length);var t=this[e]|this[e+1]<<8;return 32768&t?4294901760|t:t},O.prototype.readInt16BE=function(e,n){n||we(e,2,this.length);var t=this[e+1]|this[e]<<8;return 32768&t?4294901760|t:t},O.prototype.readInt32LE=function(e,n){return n||we(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},O.prototype.readInt32BE=function(e,n){return n||we(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},O.prototype.readFloatLE=function(e,n){return n||we(e,4,this.length),nr(this,e,!0,23,4)},O.prototype.readFloatBE=function(e,n){return n||we(e,4,this.length),nr(this,e,!1,23,4)},O.prototype.readDoubleLE=function(e,n){return n||we(e,8,this.length),nr(this,e,!0,52,8)},O.prototype.readDoubleBE=function(e,n){return n||we(e,8,this.length),nr(this,e,!1,52,8)},O.prototype.writeUIntLE=function(e,n,t,a){e=+e,n|=0,t|=0,a||qe(this,e,n,t,Math.pow(2,8*t)-1,0);var o=1,p=0;for(this[n]=255&e;++p<t&&(o*=256);)this[n+p]=e/o&255;return n+t},O.prototype.writeUIntBE=function(e,n,t,a){e=+e,n|=0,t|=0,a||qe(this,e,n,t,Math.pow(2,8*t)-1,0);var o=t-1,p=1;for(this[n+o]=255&e;--o>=0&&(p*=256);)this[n+o]=e/p&255;return n+t},O.prototype.writeUInt8=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,1,255,0),O.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[n]=255&e,n+1},O.prototype.writeUInt16LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,65535,0),O.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):tr(this,e,n,!0),n+2},O.prototype.writeUInt16BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,65535,0),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):tr(this,e,n,!1),n+2},O.prototype.writeUInt32LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,4294967295,0),O.TYPED_ARRAY_SUPPORT?(this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=255&e):rr(this,e,n,!0),n+4},O.prototype.writeUInt32BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,4294967295,0),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):rr(this,e,n,!1),n+4},O.prototype.writeIntLE=function(e,n,t,a){if(e=+e,n|=0,!a){var o=Math.pow(2,8*t-1);qe(this,e,n,t,o-1,-o)}var p=0,u=1,h=0;for(this[n]=255&e;++p<t&&(u*=256);)e<0&&h===0&&this[n+p-1]!==0&&(h=1),this[n+p]=(e/u|0)-h&255;return n+t},O.prototype.writeIntBE=function(e,n,t,a){if(e=+e,n|=0,!a){var o=Math.pow(2,8*t-1);qe(this,e,n,t,o-1,-o)}var p=t-1,u=1,h=0;for(this[n+p]=255&e;--p>=0&&(u*=256);)e<0&&h===0&&this[n+p+1]!==0&&(h=1),this[n+p]=(e/u|0)-h&255;return n+t},O.prototype.writeInt8=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,1,127,-128),O.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[n]=255&e,n+1},O.prototype.writeInt16LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,32767,-32768),O.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):tr(this,e,n,!0),n+2},O.prototype.writeInt16BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,32767,-32768),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):tr(this,e,n,!1),n+2},O.prototype.writeInt32LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,2147483647,-2147483648),O.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24):rr(this,e,n,!0),n+4},O.prototype.writeInt32BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):rr(this,e,n,!1),n+4},O.prototype.writeFloatLE=function(e,n,t){return Va(this,e,n,!0,t)},O.prototype.writeFloatBE=function(e,n,t){return Va(this,e,n,!1,t)},O.prototype.writeDoubleLE=function(e,n,t){return Ja(this,e,n,!0,t)},O.prototype.writeDoubleBE=function(e,n,t){return Ja(this,e,n,!1,t)},O.prototype.copy=function(e,n,t,a){if(t||(t=0),a||a===0||(a=this.length),n>=e.length&&(n=e.length),n||(n=0),a>0&&a<t&&(a=t),a===t||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-n<a-t&&(a=e.length-n+t);var o,p=a-t;if(this===e&&t<n&&n<a)for(o=p-1;o>=0;--o)e[o+n]=this[o+t];else if(p<1e3||!O.TYPED_ARRAY_SUPPORT)for(o=0;o<p;++o)e[o+n]=this[o+t];else Uint8Array.prototype.set.call(e,this.subarray(t,t+p),n);return p},O.prototype.fill=function(e,n,t,a){if(typeof e=="string"){if(typeof n=="string"?(a=n,n=0,t=this.length):typeof t=="string"&&(a=t,t=this.length),e.length===1){var o=e.charCodeAt(0);o<256&&(e=o)}if(a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!O.isEncoding(a))throw new TypeError("Unknown encoding: "+a)}else typeof e=="number"&&(e&=255);if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;var p;if(n>>>=0,t=t===void 0?this.length:t>>>0,e||(e=0),typeof e=="number")for(p=n;p<t;++p)this[p]=e;else{var u=dn(e)?e:yr(new O(e,a).toString()),h=u.length;for(p=0;p<t-n;++p)this[p+n]=u[p%h]}return this};var Pc=/[^+\/0-9A-Za-z-_]/g;function Rc(e){return e<16?"0"+e.toString(16):e.toString(16)}function yr(e,n){var t;n=n||1/0;for(var a=e.length,o=null,p=[],u=0;u<a;++u){if((t=e.charCodeAt(u))>55295&&t<57344){if(!o){if(t>56319){(n-=3)>-1&&p.push(239,191,189);continue}if(u+1===a){(n-=3)>-1&&p.push(239,191,189);continue}o=t;continue}if(t<56320){(n-=3)>-1&&p.push(239,191,189),o=t;continue}t=65536+(o-55296<<10|t-56320)}else o&&(n-=3)>-1&&p.push(239,191,189);if(o=null,t<128){if((n-=1)<0)break;p.push(t)}else if(t<2048){if((n-=2)<0)break;p.push(t>>6|192,63&t|128)}else if(t<65536){if((n-=3)<0)break;p.push(t>>12|224,t>>6&63|128,63&t|128)}else{if(!(t<1114112))throw new Error("Invalid code point");if((n-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128)}}return p}function Gi(e){return function(n){var t,a,o,p,u,h;Ro||Hi();var b=n.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");u=n[b-2]==="="?2:n[b-1]==="="?1:0,h=new gc(3*b/4-u),o=u>0?b-4:b;var g=0;for(t=0,a=0;t<o;t+=4,a+=3)p=He[n.charCodeAt(t)]<<18|He[n.charCodeAt(t+1)]<<12|He[n.charCodeAt(t+2)]<<6|He[n.charCodeAt(t+3)],h[g++]=p>>16&255,h[g++]=p>>8&255,h[g++]=255&p;return u===2?(p=He[n.charCodeAt(t)]<<2|He[n.charCodeAt(t+1)]>>4,h[g++]=255&p):u===1&&(p=He[n.charCodeAt(t)]<<10|He[n.charCodeAt(t+1)]<<4|He[n.charCodeAt(t+2)]>>2,h[g++]=p>>8&255,h[g++]=255&p),h}(function(n){if((n=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(n).replace(Pc,"")).length<2)return"";for(;n.length%4!=0;)n+="=";return n}(e))}function Lr(e,n,t,a){for(var o=0;o<a&&!(o+t>=n.length||o>=e.length);++o)n[o+t]=e[o];return o}function Xa(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$a=(()=>(()=>{var e={916:(o,p,u)=>{var h=u(471);o.exports=function(b){var g,f="",C=(b=b||{}).video,B=b.options,k=h.$escape,R=b.tran,L=b.icons,q=b.index,Q=h.$each;return b.$value,b.$index,f+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,g=u(568)(C),f+=g,f+=`
    `,B.logo&&(f+=`
    <div class="dplayer-logo">
        <img src="`,f+=k(B.logo),f+=`">
    </div>
    `),f+=`
    <div class="dplayer-danmaku"`,B.danmaku&&B.danmaku.bottom&&(f+=' style="margin-bottom:',f+=k(B.danmaku.bottom),f+='"'),f+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,B.danmaku&&(f+=`
        <span class="dplayer-danloading">`,f+=k(R("danmaku-loading")),f+=`</span>
        `),f+=`
        <span class="diplayer-loading-icon">`,f+=L.loading,f+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,f+=k(R("setting")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=L.pallette,f+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,f+=k(R("set-danmaku-color")),f+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=k(q),f+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=k(q),f+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=k(q),f+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=k(q),f+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=k(q),f+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=k(q),f+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,f+=k(R("set-danmaku-type")),f+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=k(q),f+=`" value="1">
                    <span>`,f+=k(R("top")),f+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=k(q),f+=`" value="0" checked>
                    <span>`,f+=k(R("rolling")),f+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=k(q),f+=`" value="2">
                    <span>`,f+=k(R("bottom")),f+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,f+=k(R("input-danmaku-enter")),f+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,f+=k(R("send")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=L.send,f+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,f+=L.play,f+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,f+=L.volumeDown,f+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,f+=k(B.theme),f+=`;">
                        <span class="dplayer-thumb" style="background: `,f+=k(B.theme),f+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,B.live&&(f+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,f+=k(B.theme),f+=';"></span>',f+=k(R("live")),f+=`</span>
        `),f+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,B.video.quality&&(f+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,f+=k(B.video.quality[B.video.defaultQuality].name),f+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,Q(B.video.quality,function(X,$){f+=`
                    <div class="dplayer-quality-item" data-index="`,f+=k($),f+='">',f+=k(X.name),f+=`</div>
                `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `,B.screenshot&&(f+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,f+=k(R("screenshot")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=L.camera,f+=`</span>
        </div>
        `),f+=`
        `,B.airplay&&(f+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,f+=k(R("airplay")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=L.airplay,f+=`</span>
        </div>
        `),f+=`
        `,B.chromecast&&(f+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,f+=k(R("chromecast")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=L.chromecast,f+=`</span>
        </div>
        `),f+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,f+=k(R("send-danmaku")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=L.comment,f+=`</span>
            </button>
        </div>
        `,B.subtitle&&(f+=`
        `,typeof B.subtitle.url=="string"?(f+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,f+=k(R("hide-subs")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=L.subtitle,f+=`</span>
            </button>
        </div>
        `):(f+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,f+=k(R("subtitle")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=L.subtitle,f+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,Q(B.subtitle.url,function(X,$){f+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,f+=k(X.url),f+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,f+=k(X.lang?X.name?X.name+" ("+R(X.lang)+")":R(X.lang):X.name),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `),f+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,f+=k(R("setting")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=L.setting,f+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,f+=k(R("speed")),f+=`</span>
                        <div class="dplayer-toggle">`,f+=L.right,f+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,f+=k(R("loop")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,f+=k(R("show-danmaku")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,f+=k(R("unlimited-danmaku")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,f+=k(R("opacity-danmaku")),f+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,Q(B.playbackSpeed,function(X,$){f+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,f+=k(X),f+=`">
                            <span class="dplayer-label">`,f+=k(X===1?R("normal"):X),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,f+=k(R("web-fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=L.fullWeb,f+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,f+=k(R("fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=L.full,f+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,f+=k(B.theme),f+=`">
                <span class="dplayer-thumb" style="background: `,f+=k(B.theme),f+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,B.danmaku&&(f+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),f+=`
</div>
<div class="dplayer-menu">
    `,Q(B.contextmenu,function(X,$){f+=`
        <div class="dplayer-menu-item">
            <a`,X.link&&(f+=' target="_blank"'),f+=' href="',f+=k(X.link||"javascript:void(0);"),f+='">',X.key&&(f+=" ",f+=k(R(X.key))),X.text&&(f+=" ",f+=k(X.text)),f+=`</a>
        </div>
    `}),f+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,f+=L.play,f+=`
</button>`}},568:(o,p,u)=>{var h=u(471);o.exports=function(b){var g="",f=(b=b||{}).enableSubtitle,C=b.subtitle,B=b.current,k=b.airplay,R=b.pic,L=h.$escape,q=b.screenshot,Q=b.preload,X=b.url;return f=C&&C.type==="webvtt",g+=`
<video
    class="dplayer-video `,B&&(g+="dplayer-video-current"),g+=`"
    webkit-playsinline
    `,k&&(g+=' x-webkit-airplay="allow" '),g+=`
    playsinline
    `,R&&(g+='poster="',g+=L(R),g+='"'),g+=`
    `,(q||f)&&(g+='crossorigin="anonymous"'),g+=`
    `,Q&&(g+='preload="',g+=L(Q),g+='"'),g+=`
    `,k?g+=`
    nosrc
    `:X&&(g+=`
    src="`,g+=L(X),g+=`"
    `),g+=`
    >
    `,k&&(g+=`
    <source src="`,g+=L(X),g+=`">
    `),g+=`
    `,f&&(g+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,g+=L(typeof C.url=="string"?C.url:C.url[C.index].url),g+=`"></track>
    `),g+`
</video>`}},49:(o,p,u)=>{u.d(p,{Z:()=>C});var h=u(415),b=u.n(h),g=u(352),f=u.n(g)()(b());f.push([o.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const C=f},685:(o,p,u)=>{u.d(p,{Z:()=>Q});var h=u(415),b=u.n(h),g=u(352),f=u.n(g),C=u(49),B=u(80),k=u.n(B),R=new URL(u(831),u.b),L=f()(b());L.i(C.Z);var q=k()(R);L.push([o.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+q+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const Q=L},856:o=>{var p=[];function u(g){for(var f=-1,C=0;C<p.length;C++)if(p[C].identifier===g){f=C;break}return f}function h(g,f){for(var C={},B=[],k=0;k<g.length;k++){var R=g[k],L=f.base?R[0]+f.base:R[0],q=C[L]||0,Q="".concat(L," ").concat(q);C[L]=q+1;var X=u(Q),$={css:R[1],media:R[2],sourceMap:R[3],supports:R[4],layer:R[5]};if(X!==-1)p[X].references++,p[X].updater($);else{var le=b($,f);f.byIndex=k,p.splice(k,0,{identifier:Q,updater:le,references:1})}B.push(Q)}return B}function b(g,f){var C=f.domAPI(f);return C.update(g),function(B){if(B){if(B.css===g.css&&B.media===g.media&&B.sourceMap===g.sourceMap&&B.supports===g.supports&&B.layer===g.layer)return;C.update(g=B)}else C.remove()}}o.exports=function(g,f){var C=h(g=g||[],f=f||{});return function(B){B=B||[];for(var k=0;k<C.length;k++){var R=u(C[k]);p[R].references--}for(var L=h(B,f),q=0;q<C.length;q++){var Q=u(C[q]);p[Q].references===0&&(p[Q].updater(),p.splice(Q,1))}C=L}}},370:o=>{var p={};o.exports=function(u,h){var b=function(g){if(p[g]===void 0){var f=document.querySelector(g);if(window.HTMLIFrameElement&&f instanceof window.HTMLIFrameElement)try{f=f.contentDocument.head}catch{f=null}p[g]=f}return p[g]}(u);if(!b)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");b.appendChild(h)}},278:o=>{o.exports=function(p){var u=document.createElement("style");return p.setAttributes(u,p.attributes),p.insert(u,p.options),u}},458:(o,p,u)=>{o.exports=function(h){var b=u.nc;b&&h.setAttribute("nonce",b)}},470:o=>{o.exports=function(p){var u=p.insertStyleElement(p);return{update:function(h){(function(b,g,f){var C="";f.supports&&(C+="@supports (".concat(f.supports,") {")),f.media&&(C+="@media ".concat(f.media," {"));var B=f.layer!==void 0;B&&(C+="@layer".concat(f.layer.length>0?" ".concat(f.layer):""," {")),C+=f.css,B&&(C+="}"),f.media&&(C+="}"),f.supports&&(C+="}");var k=f.sourceMap;k&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),g.styleTagTransform(C,b,g.options)})(u,p,h)},remove:function(){(function(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)})(u)}}}},488:o=>{o.exports=function(p,u){if(u.styleSheet)u.styleSheet.cssText=p;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(p))}}},251:o=>{o.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:o=>{o.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:o=>{o.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(o,p,u)=>{var h=typeof self<"u"?self:typeof window<"u"?window:u.g!==void 0?u.g:{},b=Object.create(h),g=/["&'<>]/;function f(C){return typeof C!="string"&&(C=C==null?"":typeof C=="function"?f(C.call(C)):JSON.stringify(C)),C}b.$escape=function(C){return function(B){var k=""+B,R=g.exec(k);if(!R)return B;var L="",q=void 0,Q=void 0,X=void 0;for(q=R.index,Q=0;q<k.length;q++){switch(k.charCodeAt(q)){case 34:X="&#34;";break;case 38:X="&#38;";break;case 39:X="&#39;";break;case 60:X="&#60;";break;case 62:X="&#62;";break;default:continue}Q!==q&&(L+=k.substring(Q,q)),Q=q+1,L+=X}return Q!==q?L+k.substring(Q,q):L}(f(C))},b.$each=function(C,B){if(Array.isArray(C))for(var k=0,R=C.length;k<R;k++)B(C[k],k);else for(var L in C)B(C[L],L)},o.exports=b},471:(o,p,u)=>{o.exports=u(897)},352:o=>{o.exports=function(p){var u=[];return u.toString=function(){return this.map(function(h){var b="",g=h[5]!==void 0;return h[4]&&(b+="@supports (".concat(h[4],") {")),h[2]&&(b+="@media ".concat(h[2]," {")),g&&(b+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),b+=p(h),g&&(b+="}"),h[2]&&(b+="}"),h[4]&&(b+="}"),b}).join("")},u.i=function(h,b,g,f,C){typeof h=="string"&&(h=[[null,h,void 0]]);var B={};if(g)for(var k=0;k<this.length;k++){var R=this[k][0];R!=null&&(B[R]=!0)}for(var L=0;L<h.length;L++){var q=[].concat(h[L]);g&&B[q[0]]||(C!==void 0&&(q[5]===void 0||(q[1]="@layer".concat(q[5].length>0?" ".concat(q[5]):""," {").concat(q[1],"}")),q[5]=C),b&&(q[2]&&(q[1]="@media ".concat(q[2]," {").concat(q[1],"}")),q[2]=b),f&&(q[4]?(q[1]="@supports (".concat(q[4],") {").concat(q[1],"}"),q[4]=f):q[4]="".concat(f)),u.push(q))}},u}},80:o=>{o.exports=function(p,u){return u||(u={}),p&&(p=String(p.__esModule?p.default:p),/^['"].*['"]$/.test(p)&&(p=p.slice(1,-1)),u.hash&&(p+=u.hash),/["'() \t\n]|(%20)/.test(p)||u.needQuotes?'"'.concat(p.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):p)}},415:o=>{o.exports=function(p){var u=p[1],h=p[3];if(!h)return u;if(typeof btoa=="function"){var b=btoa(unescape(encodeURIComponent(JSON.stringify(h)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(b),f="/*# ".concat(g," */");return[u].concat([f]).join(`
`)}return[u].join(`
`)}},937:o=>{function p(u){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},p(u)}o.exports=(typeof self>"u"?"undefined":p(self))=="object"?self.FormData:window.FormData},831:o=>{o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function t(o){var p=n[o];if(p!==void 0)return p.exports;var u=n[o]={id:o,exports:{}};return e[o](u,u.exports,t),u.exports}t.m=e,t.n=o=>{var p=o&&o.__esModule?()=>o.default:()=>o;return t.d(p,{a:p}),p},t.d=(o,p)=>{for(var u in p)t.o(p,u)&&!t.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:p[u]})},t.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),t.o=(o,p)=>Object.prototype.hasOwnProperty.call(o,p),t.b=document.baseURI||self.location.href,t.nc=void 0;var a={};return(()=>{t.d(a,{default:()=>Ds});var o=t(856),p=t.n(o),u=t(470),h=t.n(u),b=t(370),g=t.n(b),f=t(458),C=t.n(f),B=t(278),k=t.n(B),R=t(488),L=t.n(R),q=t(685),Q={};function X(r){return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},X(r)}function $(r,l){this.name="AggregateError",this.errors=r,this.message=l||""}function le(r){return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},le(r)}Q.styleTagTransform=L(),Q.setAttributes=C(),Q.insert=g().bind(null,"head"),Q.domAPI=h(),Q.insertStyleElement=k(),p()(q.Z,Q),q.Z&&q.Z.locals&&q.Z.locals,$.prototype=Error.prototype;var xe=setTimeout;function un(r){return Boolean(r&&r.length!==void 0)}function en(){}function K(r){if(!(this instanceof K))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],gn(r,this)}function ye(r,l){for(;r._state===3;)r=r._value;r._state!==0?(r._handled=!0,K._immediateFn(function(){var A=r._state===1?l.onFulfilled:l.onRejected;if(A!==null){var i;try{i=A(r._value)}catch(s){return void ge(l.promise,s)}ue(l.promise,i)}else(r._state===1?ue:ge)(l.promise,r._value)})):r._deferreds.push(l)}function ue(r,l){try{if(l===r)throw new TypeError("A promise cannot be resolved with itself.");if(l&&(le(l)==="object"||typeof l=="function")){var A=l.then;if(l instanceof K)return r._state=3,r._value=l,void Pe(r);if(typeof A=="function")return void gn((i=A,s=l,function(){i.apply(s,arguments)}),r)}r._state=1,r._value=l,Pe(r)}catch(c){ge(r,c)}var i,s}function ge(r,l){r._state=2,r._value=l,Pe(r)}function Pe(r){r._state===2&&r._deferreds.length===0&&K._immediateFn(function(){r._handled||K._unhandledRejectionFn(r._value)});for(var l=0,A=r._deferreds.length;l<A;l++)ye(r,r._deferreds[l]);r._deferreds=null}function Ke(r,l,A){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof l=="function"?l:null,this.promise=A}function gn(r,l){var A=!1;try{r(function(i){A||(A=!0,ue(l,i))},function(i){A||(A=!0,ge(l,i))})}catch(i){if(A)return;A=!0,ge(l,i)}}K.prototype.catch=function(r){return this.then(null,r)},K.prototype.then=function(r,l){var A=new this.constructor(en);return ye(this,new Ke(r,l,A)),A},K.prototype.finally=function(r){var l=this.constructor;return this.then(function(A){return l.resolve(r()).then(function(){return A})},function(A){return l.resolve(r()).then(function(){return l.reject(A)})})},K.all=function(r){return new K(function(l,A){if(!un(r))return A(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(r);if(i.length===0)return l([]);var s=i.length;function c(m,y){try{if(y&&(le(y)==="object"||typeof y=="function")){var x=y.then;if(typeof x=="function")return void x.call(y,function(w){c(m,w)},A)}i[m]=y,--s==0&&l(i)}catch(w){A(w)}}for(var d=0;d<i.length;d++)c(d,i[d])})},K.any=function(r){var l=this;return new l(function(A,i){if(!r||r.length===void 0)return i(new TypeError("Promise.any accepts an array"));var s=Array.prototype.slice.call(r);if(s.length===0)return i();for(var c=[],d=0;d<s.length;d++)try{l.resolve(s[d]).then(A).catch(function(m){c.push(m),c.length===s.length&&i(new $(c,"All promises were rejected"))})}catch(m){i(m)}})},K.allSettled=function(r){return new this(function(l,A){if(!r||r.length===void 0)return A(new TypeError(X(r)+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(r);if(i.length===0)return l([]);var s=i.length;function c(m,y){if(y&&(X(y)==="object"||typeof y=="function")){var x=y.then;if(typeof x=="function")return void x.call(y,function(w){c(m,w)},function(w){i[m]={status:"rejected",reason:w},--s==0&&l(i)})}i[m]={status:"fulfilled",value:y},--s==0&&l(i)}for(var d=0;d<i.length;d++)c(d,i[d])})},K.resolve=function(r){return r&&le(r)==="object"&&r.constructor===K?r:new K(function(l){l(r)})},K.reject=function(r){return new K(function(l,A){A(r)})},K.race=function(r){return new K(function(l,A){if(!un(r))return A(new TypeError("Promise.race accepts an array"));for(var i=0,s=r.length;i<s;i++)K.resolve(r[i]).then(l,A)})},K._immediateFn=typeof setImmediate=="function"&&function(r){setImmediate(r)}||function(r){xe(r,0)},K._unhandledRejectionFn=function(r){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",r)};const Ut=K;var me=/mobile/i.test(window.navigator.userAgent);const F={secondToTime:function(r){if((r=r||0)===0||r===1/0||r.toString()==="NaN")return"00:00";var l=Math.floor(r/3600),A=Math.floor((r-3600*l)/60),i=Math.floor(r-3600*l-60*A);return(l>0?[l,A,i]:[A,i]).map(function(s){return s<10?"0"+s:""+s}).join(":")},getElementViewLeft:function(r){var l=r.offsetLeft,A=r.offsetParent,i=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;A!==null&&A!==r;)l+=A.offsetLeft,A=A.offsetParent;else for(;A!==null;)l+=A.offsetLeft,A=A.offsetParent;return l-i},getBoundingClientRectViewLeft:function(r){var l=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(r.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var A=document.createElement("div");A.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(A),this.getBoundingClientRectViewLeft.offset=-A.getBoundingClientRect().top-l,document.body.removeChild(A),A=null}var i=r.getBoundingClientRect(),s=this.getBoundingClientRectViewLeft.offset;return i.left+s}return this.getElementViewLeft(r)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(r){var l=r.left,A=l===void 0?0:l,i=r.top,s=i===void 0?0:i;this.isFirefox?(document.documentElement.scrollLeft=A,document.documentElement.scrollTop=s):window.scrollTo(A,s)},isMobile:me,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(r,l){localStorage.setItem(r,l)},get:function(r){return localStorage.getItem(r)}},nameMap:{dragStart:me?"touchstart":"mousedown",dragMove:me?"touchmove":"mousemove",dragEnd:me?"touchend":"mouseup"},color2Number:function(r){return r[0]==="#"&&(r=r.substr(1)),r.length===3&&(r="".concat(r[0]).concat(r[0]).concat(r[1]).concat(r[1]).concat(r[2]).concat(r[2])),parseInt(r,16)+0&16777215},number2Color:function(r){return"#"+("00000"+r.toString(16)).slice(-6)},number2Type:function(r){switch(r){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function pe(r,l){return function(){return r.apply(l,arguments)}}function Me(r){return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Me(r)}var vn,nn=Object.prototype.toString,Re=Object.getPrototypeOf,Nn=(vn=Object.create(null),function(r){var l=nn.call(r);return vn[l]||(vn[l]=l.slice(8,-1).toLowerCase())}),Qe=function(r){return r=r.toLowerCase(),function(l){return Nn(l)===r}},Hn=function(r){return function(l){return Me(l)===r}},Be=Array.isArray,tn=Hn("undefined"),it=Qe("ArrayBuffer"),xn=Hn("string"),Ze=Hn("function"),Wn=Hn("number"),v=function(r){return r!==null&&Me(r)==="object"},E=function(r){if(Nn(r)!=="object")return!1;var l=Re(r);return!(l!==null&&l!==Object.prototype&&Object.getPrototypeOf(l)!==null||Symbol.toStringTag in r||Symbol.iterator in r)},I=Qe("Date"),_=Qe("File"),T=Qe("Blob"),D=Qe("FileList"),Y=Qe("URLSearchParams");function z(r,l){var A,i,s=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).allOwnKeys,c=s!==void 0&&s;if(r!=null)if(Me(r)!=="object"&&(r=[r]),Be(r))for(A=0,i=r.length;A<i;A++)l.call(null,r[A],A,r);else{var d,m=c?Object.getOwnPropertyNames(r):Object.keys(r),y=m.length;for(A=0;A<y;A++)d=m[A],l.call(null,r[d],d,r)}}function M(r,l){l=l.toLowerCase();for(var A,i=Object.keys(r),s=i.length;s-- >0;)if(l===(A=i[s]).toLowerCase())return A;return null}var P,V,W=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:zc,J=function(r){return!tn(r)&&r!==W},G=(P=typeof Uint8Array<"u"&&Re(Uint8Array),function(r){return P&&r instanceof P}),re=Qe("HTMLFormElement"),de=(V=Object.prototype.hasOwnProperty,function(r,l){return V.call(r,l)}),se=Qe("RegExp"),Ae=function(r,l){var A=Object.getOwnPropertyDescriptors(r),i={};z(A,function(s,c){l(s,c,r)!==!1&&(i[c]=s)}),Object.defineProperties(r,i)};const S={isArray:Be,isArrayBuffer:it,isBuffer:function(r){return r!==null&&!tn(r)&&r.constructor!==null&&!tn(r.constructor)&&Ze(r.constructor.isBuffer)&&r.constructor.isBuffer(r)},isFormData:function(r){var l="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||nn.call(r)===l||Ze(r.toString)&&r.toString()===l)},isArrayBufferView:function(r){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer&&it(r.buffer)},isString:xn,isNumber:Wn,isBoolean:function(r){return r===!0||r===!1},isObject:v,isPlainObject:E,isUndefined:tn,isDate:I,isFile:_,isBlob:T,isRegExp:se,isFunction:Ze,isStream:function(r){return v(r)&&Ze(r.pipe)},isURLSearchParams:Y,isTypedArray:G,isFileList:D,forEach:z,merge:function r(){for(var l=(J(this)&&this||{}).caseless,A={},i=function(d,m){var y=l&&M(A,m)||m;E(A[y])&&E(d)?A[y]=r(A[y],d):E(d)?A[y]=r({},d):Be(d)?A[y]=d.slice():A[y]=d},s=0,c=arguments.length;s<c;s++)arguments[s]&&z(arguments[s],i);return A},extend:function(r,l,A){return z(l,function(i,s){A&&Ze(i)?r[s]=pe(i,A):r[s]=i},{allOwnKeys:(arguments.length>3&&arguments[3]!==void 0?arguments[3]:{}).allOwnKeys}),r},trim:function(r){return r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r},inherits:function(r,l,A,i){r.prototype=Object.create(l.prototype,i),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:l.prototype}),A&&Object.assign(r.prototype,A)},toFlatObject:function(r,l,A,i){var s,c,d,m={};if(l=l||{},r==null)return l;do{for(c=(s=Object.getOwnPropertyNames(r)).length;c-- >0;)d=s[c],i&&!i(d,r,l)||m[d]||(l[d]=r[d],m[d]=!0);r=A!==!1&&Re(r)}while(r&&(!A||A(r,l))&&r!==Object.prototype);return l},kindOf:Nn,kindOfTest:Qe,endsWith:function(r,l,A){r=String(r),(A===void 0||A>r.length)&&(A=r.length),A-=l.length;var i=r.indexOf(l,A);return i!==-1&&i===A},toArray:function(r){if(!r)return null;if(Be(r))return r;var l=r.length;if(!Wn(l))return null;for(var A=new Array(l);l-- >0;)A[l]=r[l];return A},forEachEntry:function(r,l){for(var A,i=(r&&r[Symbol.iterator]).call(r);(A=i.next())&&!A.done;){var s=A.value;l.call(r,s[0],s[1])}},matchAll:function(r,l){for(var A,i=[];(A=r.exec(l))!==null;)i.push(A);return i},isHTMLForm:re,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Ae,freezeMethods:function(r){Ae(r,function(l,A){if(Ze(r)&&["arguments","caller","callee"].indexOf(A)!==-1)return!1;var i=r[A];Ze(i)&&(l.enumerable=!1,"writable"in l?l.writable=!1:l.set||(l.set=function(){throw Error("Can not rewrite read-only method '"+A+"'")}))})},toObjectSet:function(r,l){var A={},i=function(s){s.forEach(function(c){A[c]=!0})};return Be(r)?i(r):i(String(r).split(l)),A},toCamelCase:function(r){return r.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(l,A,i){return A.toUpperCase()+i})},noop:function(){},toFiniteNumber:function(r,l){return r=+r,Number.isFinite(r)?r:l},findKey:M,global:W,isContextDefined:J,toJSONObject:function(r){var l=new Array(10);return function A(i,s){if(v(i)){if(l.indexOf(i)>=0)return;if(!("toJSON"in i)){l[s]=i;var c=Be(i)?[]:{};return z(i,function(d,m){var y=A(d,s+1);!tn(y)&&(c[m]=y)}),l[s]=void 0,c}}return i}(r,0)}};function je(r,l,A,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",l&&(this.code=l),A&&(this.config=A),i&&(this.request=i),s&&(this.response=s)}S.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var lt=je.prototype,En={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(r){En[r]={value:r}}),Object.defineProperties(je,En),Object.defineProperty(lt,"isAxiosError",{value:!0}),je.from=function(r,l,A,i,s,c){var d=Object.create(lt);return S.toFlatObject(r,d,function(m){return m!==Error.prototype},function(m){return m!=="isAxiosError"}),je.call(d,r.message,l,A,i,s),d.cause=r,d.name=r.name,c&&Object.assign(d,c),d};const ie=je,Le=t(937);function ze(r){return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ze(r)}function Kn(r){return S.isPlainObject(r)||S.isArray(r)}function qo(r){return S.endsWith(r,"[]")?r.slice(0,-2):r}function Do(r,l,A){return r?r.concat(l).map(function(i,s){return i=qo(i),!A&&s?"["+i+"]":i}).join(A?".":""):l}var nl=S.toFlatObject(S,{},null,function(r){return/^is[A-Z]/.test(r)});const Ft=function(r,l,A){if(!S.isObject(r))throw new TypeError("target must be an object");l=l||new(Le||FormData);var i,s=(A=S.toFlatObject(A,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,N){return!S.isUndefined(N[H])})).metaTokens,c=A.visitor||w,d=A.dots,m=A.indexes,y=(A.Blob||typeof Blob<"u"&&Blob)&&(i=l)&&S.isFunction(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator];if(!S.isFunction(c))throw new TypeError("visitor must be a function");function x(H){if(H===null)return"";if(S.isDate(H))return H.toISOString();if(!y&&S.isBlob(H))throw new ie("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(H)||S.isTypedArray(H)?y&&typeof Blob=="function"?new Blob([H]):O.from(H):H}function w(H,N,U){var Z=H;if(H&&!U&&ze(H)==="object"){if(S.endsWith(N,"{}"))N=s?N:N.slice(0,-2),H=JSON.stringify(H);else if(S.isArray(H)&&function(oe){return S.isArray(oe)&&!oe.some(Kn)}(H)||S.isFileList(H)||S.endsWith(N,"[]")&&(Z=S.toArray(H)))return N=qo(N),Z.forEach(function(oe,Ye){!S.isUndefined(oe)&&oe!==null&&l.append(m===!0?Do([N],Ye,d):m===null?N:N+"[]",x(oe))}),!1}return!!Kn(H)||(l.append(Do(U,N,d),x(H)),!1)}var j=[],ee=Object.assign(nl,{defaultVisitor:w,convertValue:x,isVisitable:Kn});if(!S.isObject(r))throw new TypeError("data must be an object");return function H(N,U){if(!S.isUndefined(N)){if(j.indexOf(N)!==-1)throw Error("Circular reference detected in "+U.join("."));j.push(N),S.forEach(N,function(Z,oe){(!(S.isUndefined(Z)||Z===null)&&c.call(l,Z,S.isString(oe)?oe.trim():oe,U,ee))===!0&&H(Z,U?U.concat(oe):[oe])}),j.pop()}}(r),l};function Mo(r){var l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(A){return l[A]})}function jo(r,l){this._pairs=[],r&&Ft(r,this,l)}var Uo=jo.prototype;Uo.append=function(r,l){this._pairs.push([r,l])},Uo.toString=function(r){var l=r?function(A){return r.call(this,A,Mo)}:Mo;return this._pairs.map(function(A){return l(A[0])+"="+l(A[1])},"").join("&")};const Fo=jo;function tl(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yo(r,l,A){if(!l)return r;var i,s=A&&A.encode||tl,c=A&&A.serialize;if(i=c?c(l,A):S.isURLSearchParams(l)?l.toString():new Fo(l,A).toString(s)){var d=r.indexOf("#");d!==-1&&(r=r.slice(0,d)),r+=(r.indexOf("?")===-1?"?":"&")+i}return r}function st(r){return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},st(r)}var rl=function(){function r(){(function(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")})(this,r),this.handlers=[]}var l,A;return l=r,A=[{key:"use",value:function(i,s,c){return this.handlers.push({fulfilled:i,rejected:s,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(i){this.handlers[i]&&(this.handlers[i]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(i){S.forEach(this.handlers,function(s){s!==null&&i(s)})}}],A&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(st(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(st(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),st(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const No=rl,Ho={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ol=typeof URLSearchParams<"u"?URLSearchParams:Fo,al=FormData;var Tr,il=(typeof navigator>"u"||(Tr=navigator.product)!=="ReactNative"&&Tr!=="NativeScript"&&Tr!=="NS")&&typeof window<"u"&&typeof document<"u",ll=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const rn={isBrowser:!0,classes:{URLSearchParams:ol,FormData:al,Blob},isStandardBrowserEnv:il,isStandardBrowserWebWorkerEnv:ll,protocols:["http","https","file","blob","url","data"]},Wo=function(r){function l(i,s,c,d){var m=i[d++],y=Number.isFinite(+m),x=d>=i.length;return m=!m&&S.isArray(c)?c.length:m,x?(S.hasOwnProp(c,m)?c[m]=[c[m],s]:c[m]=s,!y):(c[m]&&S.isObject(c[m])||(c[m]=[]),l(i,s,c[m],d)&&S.isArray(c[m])&&(c[m]=function(w){var j,ee,H={},N=Object.keys(w),U=N.length;for(j=0;j<U;j++)H[ee=N[j]]=w[ee];return H}(c[m])),!y)}if(S.isFormData(r)&&S.isFunction(r.entries)){var A={};return S.forEachEntry(r,function(i,s){l(function(c){return S.matchAll(/\w+|\[(\w*)]/g,c).map(function(d){return d[0]==="[]"?"":d[1]||d[0]})}(i),s,A,0)}),A}return null};var sl={"Content-Type":void 0},Yt={transitional:Ho,adapter:["xhr","http"],transformRequest:[function(r,l){var A,i=l.getContentType()||"",s=i.indexOf("application/json")>-1,c=S.isObject(r);if(c&&S.isHTMLForm(r)&&(r=new FormData(r)),S.isFormData(r))return s&&s?JSON.stringify(Wo(r)):r;if(S.isArrayBuffer(r)||S.isBuffer(r)||S.isStream(r)||S.isFile(r)||S.isBlob(r))return r;if(S.isArrayBufferView(r))return r.buffer;if(S.isURLSearchParams(r))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();if(c){if(i.indexOf("application/x-www-form-urlencoded")>-1)return function(m,y){return Ft(m,new rn.classes.URLSearchParams,Object.assign({visitor:function(x,w,j,ee){return rn.isNode&&S.isBuffer(x)?(this.append(w,x.toString("base64")),!1):ee.defaultVisitor.apply(this,arguments)}},y))}(r,this.formSerializer).toString();if((A=S.isFileList(r))||i.indexOf("multipart/form-data")>-1){var d=this.env&&this.env.FormData;return Ft(A?{"files[]":r}:r,d&&new d,this.formSerializer)}}return c||s?(l.setContentType("application/json",!1),function(m){if(S.isString(m))try{return(0,JSON.parse)(m),S.trim(m)}catch(y){if(y.name!=="SyntaxError")throw y}return(0,JSON.stringify)(m)}(r)):r}],transformResponse:[function(r){var l=this.transitional||Yt.transitional,A=l&&l.forcedJSONParsing,i=this.responseType==="json";if(r&&S.isString(r)&&(A&&!this.responseType||i)){var s=!(l&&l.silentJSONParsing)&&i;try{return JSON.parse(r)}catch(c){if(s)throw c.name==="SyntaxError"?ie.from(c,ie.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rn.classes.FormData,Blob:rn.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(r){Yt.headers[r]={}}),S.forEach(["post","put","patch"],function(r){Yt.headers[r]=S.merge(sl)});const _r=Yt;var pl=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function pt(r){return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},pt(r)}function Ko(r,l){(l==null||l>r.length)&&(l=r.length);for(var A=0,i=new Array(l);A<l;A++)i[A]=r[A];return i}function Qo(r,l){for(var A=0;A<l.length;A++){var i=l[A];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,(s=function(c){if(pt(c)!=="object"||c===null)return c;var d=c[Symbol.toPrimitive];if(d!==void 0){var m=d.call(c,"string");if(pt(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(i.key),pt(s)==="symbol"?s:String(s)),i)}var s}var Zo=Symbol("internals");function dt(r){return r&&String(r).trim().toLowerCase()}function Nt(r){return r===!1||r==null?r:S.isArray(r)?r.map(Nt):String(r)}function Vo(r,l,A,i){return S.isFunction(i)?i.call(this,l,A):S.isString(l)?S.isString(i)?l.indexOf(i)!==-1:S.isRegExp(i)?i.test(l):void 0:void 0}var Ht=function(){function r(s){(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),s&&this.set(s)}var l,A,i;return l=r,A=[{key:"set",value:function(s,c,d){var m=this;function y(U,Z,oe){var Ye=dt(Z);if(!Ye)throw new Error("header name must be a non-empty string");var Ee=S.findKey(m,Ye);(!Ee||m[Ee]===void 0||oe===!0||oe===void 0&&m[Ee]!==!1)&&(m[Ee||Z]=Nt(U))}var x,w,j,ee,H,N=function(U,Z){return S.forEach(U,function(oe,Ye){return y(oe,Ye,Z)})};return S.isPlainObject(s)||s instanceof this.constructor?N(s,c):S.isString(s)&&(s=s.trim())&&!/^[-_a-zA-Z]+$/.test(s.trim())?N((H={},(x=s)&&x.split(`
`).forEach(function(U){ee=U.indexOf(":"),w=U.substring(0,ee).trim().toLowerCase(),j=U.substring(ee+1).trim(),!w||H[w]&&pl[w]||(w==="set-cookie"?H[w]?H[w].push(j):H[w]=[j]:H[w]=H[w]?H[w]+", "+j:j)}),H),c):s!=null&&y(c,s,d),this}},{key:"get",value:function(s,c){if(s=dt(s)){var d=S.findKey(this,s);if(d){var m=this[d];if(!c)return m;if(c===!0)return function(y){for(var x,w=Object.create(null),j=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;x=j.exec(y);)w[x[1]]=x[2];return w}(m);if(S.isFunction(c))return c.call(this,m,d);if(S.isRegExp(c))return c.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(s,c){if(s=dt(s)){var d=S.findKey(this,s);return!(!d||c&&!Vo(0,this[d],d,c))}return!1}},{key:"delete",value:function(s,c){var d=this,m=!1;function y(x){if(x=dt(x)){var w=S.findKey(d,x);!w||c&&!Vo(0,d[w],w,c)||(delete d[w],m=!0)}}return S.isArray(s)?s.forEach(y):y(s),m}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(s){var c=this,d={};return S.forEach(this,function(m,y){var x=S.findKey(d,y);if(x)return c[x]=Nt(m),void delete c[y];var w=s?function(j){return j.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(ee,H,N){return H.toUpperCase()+N})}(y):String(y).trim();w!==y&&delete c[y],c[w]=Nt(m),d[w]=!0}),this}},{key:"concat",value:function(){for(var s,c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];return(s=this.constructor).concat.apply(s,[this].concat(d))}},{key:"toJSON",value:function(s){var c=Object.create(null);return S.forEach(this,function(d,m){d!=null&&d!==!1&&(c[m]=s&&S.isArray(d)?d.join(", "):d)}),c}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(s){var c,d=function(m){if(Array.isArray(m))return m}(c=s)||function(m){var y=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(y!=null){var x,w,j,ee,H=[],N=!0,U=!1;try{for(j=(y=y.call(m)).next;!(N=(x=j.call(y)).done)&&(H.push(x.value),H.length!==2);N=!0);}catch(Z){U=!0,w=Z}finally{try{if(!N&&y.return!=null&&(ee=y.return(),Object(ee)!==ee))return}finally{if(U)throw w}}return H}}(c)||function(m){if(m){if(typeof m=="string")return Ko(m,2);var y=Object.prototype.toString.call(m).slice(8,-1);return y==="Object"&&m.constructor&&(y=m.constructor.name),y==="Map"||y==="Set"?Array.from(m):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?Ko(m,2):void 0}}(c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();return d[0]+": "+d[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],i=[{key:"from",value:function(s){return s instanceof this?s:new this(s)}},{key:"concat",value:function(s){for(var c=new this(s),d=arguments.length,m=new Array(d>1?d-1:0),y=1;y<d;y++)m[y-1]=arguments[y];return m.forEach(function(x){return c.set(x)}),c}},{key:"accessor",value:function(s){var c=(this[Zo]=this[Zo]={accessors:{}}).accessors,d=this.prototype;function m(y){var x=dt(y);c[x]||(function(w,j){var ee=S.toCamelCase(" "+j);["get","set","has"].forEach(function(H){Object.defineProperty(w,H+ee,{value:function(N,U,Z){return this[H].call(this,j,N,U,Z)},configurable:!0})})}(d,y),c[x]=!0)}return S.isArray(s)?s.forEach(m):m(s),this}}],A&&Qo(l.prototype,A),i&&Qo(l,i),Object.defineProperty(l,"prototype",{writable:!1}),r}();Ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),S.freezeMethods(Ht.prototype),S.freezeMethods(Ht);const fn=Ht;function Or(r,l){var A=this||_r,i=l||A,s=fn.from(i.headers),c=i.data;return S.forEach(r,function(d){c=d.call(A,c,s.normalize(),l?l.status:void 0)}),s.normalize(),c}function Jo(r){return!(!r||!r.__CANCEL__)}function Xo(r,l,A){ie.call(this,r??"canceled",ie.ERR_CANCELED,l,A),this.name="CanceledError"}S.inherits(Xo,ie,{__CANCEL__:!0});const Wt=Xo,dl=rn.isStandardBrowserEnv?{write:function(r,l,A,i,s,c){var d=[];d.push(r+"="+encodeURIComponent(l)),S.isNumber(A)&&d.push("expires="+new Date(A).toGMTString()),S.isString(i)&&d.push("path="+i),S.isString(s)&&d.push("domain="+s),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){var l=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function $o(r,l){return r&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)?function(A,i){return i?A.replace(/\/+$/,"")+"/"+i.replace(/^\/+/,""):A}(r,l):l}const cl=rn.isStandardBrowserEnv?function(){var r,l=/(msie|trident)/i.test(navigator.userAgent),A=document.createElement("a");function i(s){var c=s;return l&&(A.setAttribute("href",c),c=A.href),A.setAttribute("href",c),{href:A.href,protocol:A.protocol?A.protocol.replace(/:$/,""):"",host:A.host,search:A.search?A.search.replace(/^\?/,""):"",hash:A.hash?A.hash.replace(/^#/,""):"",hostname:A.hostname,port:A.port,pathname:A.pathname.charAt(0)==="/"?A.pathname:"/"+A.pathname}}return r=i(window.location.href),function(s){var c=S.isString(s)?i(s):s;return c.protocol===r.protocol&&c.host===r.host}}():function(){return!0};function Go(r,l){var A=0,i=function(s,c){s=s||10;var d,m=new Array(s),y=new Array(s),x=0,w=0;return c=c!==void 0?c:1e3,function(j){var ee=Date.now(),H=y[w];d||(d=ee),m[x]=j,y[x]=ee;for(var N=w,U=0;N!==x;)U+=m[N++],N%=s;if((x=(x+1)%s)===w&&(w=(w+1)%s),!(ee-d<c)){var Z=H&&ee-H;return Z?Math.round(1e3*U/Z):void 0}}}(50,250);return function(s){var c=s.loaded,d=s.lengthComputable?s.total:void 0,m=c-A,y=i(m);A=c;var x={loaded:c,total:d,progress:d?c/d:void 0,bytes:m,rate:y||void 0,estimated:y&&d&&c<=d?(d-c)/y:void 0,event:s};x[l?"download":"upload"]=!0,r(x)}}var Pr={http:null,xhr:typeof XMLHttpRequest<"u"&&function(r){return new Promise(function(l,A){var i,s=r.data,c=fn.from(r.headers).normalize(),d=r.responseType;function m(){r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}S.isFormData(s)&&(rn.isStandardBrowserEnv||rn.isStandardBrowserWebWorkerEnv)&&c.setContentType(!1);var y=new XMLHttpRequest;if(r.auth){var x=r.auth.username||"",w=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";c.set("Authorization","Basic "+btoa(x+":"+w))}var j=$o(r.baseURL,r.url);function ee(){if(y){var Z=fn.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders());(function(oe,Ye,Ee){var he=Ee.config.validateStatus;Ee.status&&he&&!he(Ee.status)?Ye(new ie("Request failed with status code "+Ee.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(Ee.status/100)-4],Ee.config,Ee.request,Ee)):oe(Ee)})(function(oe){l(oe),m()},function(oe){A(oe),m()},{data:d&&d!=="text"&&d!=="json"?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:Z,config:r,request:y}),y=null}}if(y.open(r.method.toUpperCase(),Yo(j,r.params,r.paramsSerializer),!0),y.timeout=r.timeout,"onloadend"in y?y.onloadend=ee:y.onreadystatechange=function(){y&&y.readyState===4&&(y.status!==0||y.responseURL&&y.responseURL.indexOf("file:")===0)&&setTimeout(ee)},y.onabort=function(){y&&(A(new ie("Request aborted",ie.ECONNABORTED,r,y)),y=null)},y.onerror=function(){A(new ie("Network Error",ie.ERR_NETWORK,r,y)),y=null},y.ontimeout=function(){var Z=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded",oe=r.transitional||Ho;r.timeoutErrorMessage&&(Z=r.timeoutErrorMessage),A(new ie(Z,oe.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,r,y)),y=null},rn.isStandardBrowserEnv){var H=(r.withCredentials||cl(j))&&r.xsrfCookieName&&dl.read(r.xsrfCookieName);H&&c.set(r.xsrfHeaderName,H)}s===void 0&&c.setContentType(null),"setRequestHeader"in y&&S.forEach(c.toJSON(),function(Z,oe){y.setRequestHeader(oe,Z)}),S.isUndefined(r.withCredentials)||(y.withCredentials=!!r.withCredentials),d&&d!=="json"&&(y.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&y.addEventListener("progress",Go(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",Go(r.onUploadProgress)),(r.cancelToken||r.signal)&&(i=function(Z){y&&(A(!Z||Z.type?new Wt(null,r,y):Z),y.abort(),y=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));var N,U=(N=/^([-+\w]{1,25})(:?\/\/|:)/.exec(j))&&N[1]||"";U&&rn.protocols.indexOf(U)===-1?A(new ie("Unsupported protocol "+U+":",ie.ERR_BAD_REQUEST,r)):y.send(s||null)})}};function Rr(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Wt(null,r)}function ea(r){return Rr(r),r.headers=fn.from(r.headers),r.data=Or.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),function(l){for(var A,i,s=(l=S.isArray(l)?l:[l]).length,c=0;c<s&&(A=l[c],!(i=S.isString(A)?Pr[A.toLowerCase()]:A));c++);if(!i)throw i===!1?new ie("Adapter ".concat(A," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(S.hasOwnProp(Pr,A)?"Adapter '".concat(A,"' is not available in the build"):"Unknown adapter '".concat(A,"'"));if(!S.isFunction(i))throw new TypeError("adapter is not a function");return i}(r.adapter||_r.adapter)(r).then(function(l){return Rr(r),l.data=Or.call(r,r.transformResponse,l),l.headers=fn.from(l.headers),l},function(l){return Jo(l)||(Rr(r),l&&l.response&&(l.response.data=Or.call(r,r.transformResponse,l.response),l.response.headers=fn.from(l.response.headers))),Promise.reject(l)})}S.forEach(Pr,function(r,l){if(r){try{Object.defineProperty(r,"name",{value:l})}catch{}Object.defineProperty(r,"adapterName",{value:l})}});var na=function(r){return r instanceof fn?r.toJSON():r};function Qn(r,l){l=l||{};var A={};function i(x,w,j){return S.isPlainObject(x)&&S.isPlainObject(w)?S.merge.call({caseless:j},x,w):S.isPlainObject(w)?S.merge({},w):S.isArray(w)?w.slice():w}function s(x,w,j){return S.isUndefined(w)?S.isUndefined(x)?void 0:i(void 0,x,j):i(x,w,j)}function c(x,w){if(!S.isUndefined(w))return i(void 0,w)}function d(x,w){return S.isUndefined(w)?S.isUndefined(x)?void 0:i(void 0,x):i(void 0,w)}function m(x,w,j){return j in l?i(x,w):j in r?i(void 0,x):void 0}var y={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:function(x,w){return s(na(x),na(w),!0)}};return S.forEach(Object.keys(r).concat(Object.keys(l)),function(x){var w=y[x]||s,j=w(r[x],l[x],x);S.isUndefined(j)&&w!==m||(A[x]=j)}),A}function Kt(r){return Kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Kt(r)}var zr={};["object","boolean","number","function","string","symbol"].forEach(function(r,l){zr[r]=function(A){return Kt(A)===r||"a"+(l<1?"n ":" ")+r}});var ta={};zr.transitional=function(r,l,A){function i(s,c){return"[Axios v1.2.3] Transitional option '"+s+"'"+c+(A?". "+A:"")}return function(s,c,d){if(r===!1)throw new ie(i(c," has been removed"+(l?" in "+l:"")),ie.ERR_DEPRECATED);return l&&!ta[c]&&(ta[c]=!0,console.warn(i(c," has been deprecated since v"+l+" and will be removed in the near future"))),!r||r(s,c,d)}};const qr={assertOptions:function(r,l,A){if(Kt(r)!=="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),s=i.length;s-- >0;){var c=i[s],d=l[c];if(d){var m=r[c],y=m===void 0||d(m,c,r);if(y!==!0)throw new ie("option "+c+" must be "+y,ie.ERR_BAD_OPTION_VALUE)}else if(A!==!0)throw new ie("Unknown option "+c,ie.ERR_BAD_OPTION)}},validators:zr};function ct(r){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ct(r)}var wn=qr.validators,Qt=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.defaults=i,this.interceptors={request:new No,response:new No}}var l,A;return l=r,(A=[{key:"request",value:function(i,s){typeof i=="string"?(s=s||{}).url=i:s=i||{};var c,d=s=Qn(this.defaults,s),m=d.transitional,y=d.paramsSerializer,x=d.headers;m!==void 0&&qr.assertOptions(m,{silentJSONParsing:wn.transitional(wn.boolean),forcedJSONParsing:wn.transitional(wn.boolean),clarifyTimeoutError:wn.transitional(wn.boolean)},!1),y!==void 0&&qr.assertOptions(y,{encode:wn.function,serialize:wn.function},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase(),(c=x&&S.merge(x.common,x[s.method]))&&S.forEach(["delete","get","head","post","put","patch","common"],function(he){delete x[he]}),s.headers=fn.concat(c,x);var w=[],j=!0;this.interceptors.request.forEach(function(he){typeof he.runWhen=="function"&&he.runWhen(s)===!1||(j=j&&he.synchronous,w.unshift(he.fulfilled,he.rejected))});var ee,H=[];this.interceptors.response.forEach(function(he){H.push(he.fulfilled,he.rejected)});var N,U=0;if(!j){var Z=[ea.bind(this),void 0];for(Z.unshift.apply(Z,w),Z.push.apply(Z,H),N=Z.length,ee=Promise.resolve(s);U<N;)ee=ee.then(Z[U++],Z[U++]);return ee}N=w.length;var oe=s;for(U=0;U<N;){var Ye=w[U++],Ee=w[U++];try{oe=Ye(oe)}catch(he){Ee.call(this,he);break}}try{ee=ea.call(this,oe)}catch(he){return Promise.reject(he)}for(U=0,N=H.length;U<N;)ee=ee.then(H[U++],H[U++]);return ee}},{key:"getUri",value:function(i){return Yo($o((i=Qn(this.defaults,i)).baseURL,i.url),i.params,i.paramsSerializer)}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(ct(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(ct(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),ct(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();S.forEach(["delete","get","head","options"],function(r){Qt.prototype[r]=function(l,A){return this.request(Qn(A||{},{method:r,url:l,data:(A||{}).data}))}}),S.forEach(["post","put","patch"],function(r){function l(A){return function(i,s,c){return this.request(Qn(c||{},{method:r,headers:A?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Qt.prototype[r]=l(),Qt.prototype[r+"Form"]=l(!0)});const Zt=Qt;function ut(r){return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ut(r)}function ra(r,l){for(var A=0;A<l.length;A++){var i=l[A];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,(s=function(c){if(ut(c)!=="object"||c===null)return c;var d=c[Symbol.toPrimitive];if(d!==void 0){var m=d.call(c,"string");if(ut(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(i.key),ut(s)==="symbol"?s:String(s)),i)}var s}var ul=function(){function r(s){if(function(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}(this,r),typeof s!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(m){c=m});var d=this;this.promise.then(function(m){if(d._listeners){for(var y=d._listeners.length;y-- >0;)d._listeners[y](m);d._listeners=null}}),this.promise.then=function(m){var y,x=new Promise(function(w){d.subscribe(w),y=w}).then(m);return x.cancel=function(){d.unsubscribe(y)},x},s(function(m,y,x){d.reason||(d.reason=new Wt(m,y,x),c(d.reason))})}var l,A,i;return l=r,A=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(s){this.reason?s(this.reason):this._listeners?this._listeners.push(s):this._listeners=[s]}},{key:"unsubscribe",value:function(s){if(this._listeners){var c=this._listeners.indexOf(s);c!==-1&&this._listeners.splice(c,1)}}}],i=[{key:"source",value:function(){var s;return{token:new r(function(c){s=c}),cancel:s}}}],A&&ra(l.prototype,A),i&&ra(l,i),Object.defineProperty(l,"prototype",{writable:!1}),r}();const fl=ul;function oa(r,l){(l==null||l>r.length)&&(l=r.length);for(var A=0,i=new Array(l);A<l;A++)i[A]=r[A];return i}var Dr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dr).forEach(function(r){var l,A=function(c){if(Array.isArray(c))return c}(l=r)||function(c){var d=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var m,y,x,w,j=[],ee=!0,H=!1;try{for(x=(d=d.call(c)).next;!(ee=(m=x.call(d)).done)&&(j.push(m.value),j.length!==2);ee=!0);}catch(N){H=!0,y=N}finally{try{if(!ee&&d.return!=null&&(w=d.return(),Object(w)!==w))return}finally{if(H)throw y}}return j}}(l)||function(c){if(c){if(typeof c=="string")return oa(c,2);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?oa(c,2):void 0}}(l)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),i=A[0],s=A[1];Dr[s]=i});const Al=Dr;var ve=function r(l){var A=new Zt(l),i=pe(Zt.prototype.request,A);return S.extend(i,Zt.prototype,A,{allOwnKeys:!0}),S.extend(i,A,null,{allOwnKeys:!0}),i.create=function(s){return r(Qn(l,s))},i}(_r);ve.Axios=Zt,ve.CanceledError=Wt,ve.CancelToken=fl,ve.isCancel=Jo,ve.VERSION="1.2.3",ve.toFormData=Ft,ve.AxiosError=ie,ve.Cancel=ve.CanceledError,ve.all=function(r){return Promise.all(r)},ve.spread=function(r){return function(l){return r.apply(null,l)}},ve.isAxiosError=function(r){return S.isObject(r)&&r.isAxiosError===!0},ve.mergeConfig=Qn,ve.AxiosHeaders=fn,ve.formToJSON=function(r){return Wo(S.isHTMLForm(r)?new FormData(r):r)},ve.HttpStatusCode=Al,ve.default=ve;const aa=ve,yl={send:function(r){aa.post(r.url,r.data).then(function(l){var A=l.data;A&&A.code===0?r.success&&r.success(A):r.error&&r.error(A&&A.msg)}).catch(function(l){console.error(l),r.error&&r.error()})},read:function(r){aa.get(r.url).then(function(l){var A=l.data;A&&A.code===0?r.success&&r.success(A.data.map(function(i){return{time:i[0],type:i[1],color:i[2],author:i[3],text:i[4]}})):r.error&&r.error(A&&A.msg)}).catch(function(l){console.error(l),r.error&&r.error()})}};function Mr(r){return Mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Mr(r)}function hl(r){var l=this;this.lang=r,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(A){return A=A.toLowerCase(),Zn[l.lang]&&Zn[l.lang][A]?Zn[l.lang][A]:Zn[l.fallbackLang]&&Zn[l.fallbackLang][A]?Zn[l.fallbackLang][A]:jr[A]?jr[A]:A}}var jr={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Zn={en:jr,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},ml=t(730),bl=t.n(ml),gl=t(74),vl=t.n(gl),xl=t(437),El=t.n(xl),wl=t(644),Cl=t.n(wl),kl=t(324),Bl=t.n(kl),Sl=t(574),Il=t.n(Sl),Ll=t(300),Tl=t.n(Ll),_l=t(934),Ol=t.n(_l),Pl=t(428),Rl=t.n(Pl),zl=t(807),ql=t.n(zl),Dl=t(338),Ml=t.n(Dl),jl=t(254),Ul=t.n(jl),Fl=t(965),Yl=t.n(Fl),Nl=t(113),Hl=t.n(Nl),Wl=t(251),Kl=t.n(Wl),Ql=t(410),Zl=t.n(Ql),Vl=t(182),Jl=t.n(Vl),Xl=t(193),$l=t.n(Xl);const Ve={play:bl(),pause:vl(),volumeUp:El(),volumeDown:Cl(),volumeOff:Bl(),full:Il(),fullWeb:Tl(),setting:Ol(),right:Rl(),comment:ql(),commentOff:Ml(),send:Ul(),pallette:Yl(),camera:Hl(),subtitle:Zl(),loading:Jl(),airplay:Kl(),chromecast:$l()};var Gl=t(916),es=t.n(Gl);function ft(r){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ft(r)}function ia(r,l){for(var A=0;A<l.length;A++){var i=l[A];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,(s=function(c){if(ft(c)!=="object"||c===null)return c;var d=c[Symbol.toPrimitive];if(d!==void 0){var m=d.call(c,"string");if(ft(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(i.key),ft(s)==="symbol"?s:String(s)),i)}var s}var ns=function(){function r(s){(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=s.container,this.options=s.options,this.index=s.index,this.tran=s.tran,this.init()}var l,A,i;return l=r,i=[{key:"NewNotice",value:function(s,c,d){var m=document.createElement("div");return m.classList.add("dplayer-notice"),m.style.opacity=c,m.innerText=s,d&&(m.id="dplayer-notice-".concat(d)),m}}],(A=[{key:"init",value:function(){this.container.innerHTML=es()({options:this.options,index:this.index,tran:this.tran,icons:Ve,mobile:F.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!F.isSafari||F.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&ia(l.prototype,A),i&&ia(l,i),Object.defineProperty(l,"prototype",{writable:!1}),r}();const la=ns;function Vn(r){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Vn(r)}var ts=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.options=i,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var l,A;return l=r,A=[{key:"load",value:function(){var i,s=this;i=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var c=(this.options.api.addition||[]).slice(0);c.push(i),this.events&&this.events.trigger("danmaku_load_start",c),this._readAllEndpoints(c,function(d){s.dan=[].concat.apply([],d).sort(function(m,y){return m.time-y.time}),window.requestAnimationFrame(function(){s.frame()}),s.options.callback(),s.events&&s.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(i){this.options.api=i,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(i,s){for(var c=this,d=[],m=0,y=function(w){c.options.apiBackend.read({url:i[w],success:function(j){d[w]=j,++m===i.length&&s(d)},error:function(j){c.options.error(j||c.options.tran("danmaku-failed")),d[w]=[],++m===i.length&&s(d)}})},x=0;x<i.length;++x)y(x)}},{key:"send",value:function(i,s){var c=this,d={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:i.text,color:i.color,type:i.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:d,success:s,error:function(y){c.options.error(y||c.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,d),this.danIndex++;var m={text:this.htmlEncode(d.text),color:d.color,type:d.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(m),this.events&&this.events.trigger("danmaku_send",d)}},{key:"frame",value:function(){var i=this;if(this.dan.length&&!this.paused&&this.showing){for(var s=this.dan[this.danIndex],c=[];s&&this.options.time()>parseFloat(s.time);)c.push(s),s=this.dan[++this.danIndex];this.draw(c)}window.requestAnimationFrame(function(){i.frame()})}},{key:"opacity",value:function(i){if(i!==void 0){for(var s=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<s.length;c++)s[c].style.opacity=i;this._opacity=i,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(i){var s=this;if(this.showing){var c=this.options.height,d=this.container.offsetWidth,m=this.container.offsetHeight,y=parseInt(m/c),x=function(U){var Z=U.offsetWidth||parseInt(U.style.width),oe=U.getBoundingClientRect().right||s.container.getBoundingClientRect().right+Z;return s.container.getBoundingClientRect().right-oe},w=function(U){return(d+U)/5},j=function(U,Z,oe){for(var Ye=d/w(oe),Ee=function(On){var Xn=s.danTunnel[Z][On+""];if(!Xn||!Xn.length)return s.danTunnel[Z][On+""]=[U],U.addEventListener("animationend",function(){s.danTunnel[Z][On+""].splice(0,1)}),{v:On%y};if(Z!=="right")return"continue";for(var Tt=0;Tt<Xn.length;Tt++){var fa=x(Xn[Tt])-10;if(fa<=d-Ye*w(parseInt(Xn[Tt].style.width))||fa<=0)break;if(Tt===Xn.length-1)return s.danTunnel[Z][On+""].push(U),U.addEventListener("animationend",function(){s.danTunnel[Z][On+""].splice(0,1)}),{v:On%y}}},he=0;s.unlimited||he<y;he++){var Fr=Ee(he);if(Fr!=="continue"&&Vn(Fr)==="object")return Fr.v}return-1};Object.prototype.toString.call(i)!=="[object Array]"&&(i=[i]);for(var ee=document.createDocumentFragment(),H=function(){i[N].type=F.number2Type(i[N].type),i[N].color||(i[N].color=16777215);var U=document.createElement("div");U.classList.add("dplayer-danmaku-item"),U.classList.add("dplayer-danmaku-".concat(i[N].type)),i[N].border?U.innerHTML='<span style="border:'.concat(i[N].border,'">').concat(i[N].text,"</span>"):U.innerHTML=i[N].text,U.style.opacity=s._opacity,U.style.color=F.number2Color(i[N].color),U.addEventListener("animationend",function(){s.container.removeChild(U)});var Z,oe=s._measure(i[N].text);switch(i[N].type){case"right":(Z=j(U,i[N].type,oe))>=0&&(U.style.width=oe+1+"px",U.style.top=c*Z+"px",U.style.transform="translateX(-".concat(d,"px)"));break;case"top":(Z=j(U,i[N].type))>=0&&(U.style.top=c*Z+"px");break;case"bottom":(Z=j(U,i[N].type))>=0&&(U.style.bottom=c*Z+"px");break;default:console.error("Can't handled danmaku type: ".concat(i[N].type))}Z>=0&&(U.classList.add("dplayer-danmaku-move"),U.style.animationDuration=s._danAnimation(i[N].type),ee.appendChild(U))},N=0;N<i.length;N++)H();return this.container.appendChild(ee),ee}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(i){if(!this.context){var s=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=s.getPropertyValue("font")}return this.context.measureText(i).width}},{key:"seek",value:function(){this.clear();for(var i=0;i<this.dan.length;i++){if(this.dan[i].time>=this.options.time()){this.danIndex=i;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var i=this.container.offsetWidth,s=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<s.length;c++)s[c].style.transform="translateX(-".concat(i,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(i){this.unlimited=i}},{key:"speed",value:function(i){this.options.api.speedRate=i}},{key:"_danAnimation",value:function(i){var s=this.options.api.speedRate||1,c=!!this.player.fullScreen.isFullScreen();return{top:"".concat((c?6:4)/s,"s"),right:"".concat((c?8:5)/s,"s"),bottom:"".concat((c?6:4)/s,"s")}[i]}}],A&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(Vn(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(Vn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),Vn(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const rs=ts;function At(r){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},At(r)}const os=function(){function r(){(function(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")})(this,r),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var l,A;return l=r,(A=[{key:"on",value:function(i,s){this.type(i)&&typeof s=="function"&&(this.events[i]||(this.events[i]=[]),this.events[i].push(s))}},{key:"trigger",value:function(i,s){if(this.events[i]&&this.events[i].length)for(var c=0;c<this.events[i].length;c++)this.events[i][c](s)}},{key:"type",value:function(i){return this.playerEvents.indexOf(i)!==-1?"player":this.videoEvents.indexOf(i)!==-1?"video":(console.error("Unknown event name: ".concat(i)),null)}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(At(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(At(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),At(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();function yt(r){return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},yt(r)}var as=function(){function r(i){var s=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){s.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){s.player.resize(),F.setScrollPosition(s.lastScrollPosition)}),this.fullscreenchange=function(){s.player.resize(),s.isFullScreen("browser")?s.player.events.trigger("fullscreen"):(F.setScrollPosition(s.lastScrollPosition),s.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var c=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;c&&c!==s.player.container||(s.player.resize(),c?s.player.events.trigger("fullscreen"):(F.setScrollPosition(s.lastScrollPosition),s.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var l,A;return l=r,A=[{key:"isFullScreen",value:function(){switch(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser"){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",s=i==="browser"?"web":"browser",c=this.isFullScreen(s);switch(c||(this.lastScrollPosition=F.getScrollPosition()),i){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}c&&this.cancel(s)}},{key:"cancel",value:function(){switch(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser"){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(i)?this.cancel(i):this.request(i)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],A&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(yt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(yt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),yt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const is=as;function ht(r){return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ht(r)}var ls=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:i.options.hasOwnProperty("volume")?i.options.volume:.7,unlimited:(i.options.danmaku&&i.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var l,A;return l=r,(A=[{key:"init",value:function(){for(var i in this.storageName){var s=this.storageName[i];this.data[i]=parseFloat(F.storage.get(s)||this.default[i])}}},{key:"get",value:function(i){return this.data[i]}},{key:"set",value:function(i,s){this.data[i]=s,F.storage.set(this.storageName[i],s)}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(ht(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(ht(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),ht(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const ss=ls;function mt(r){return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},mt(r)}var ps=function(){function r(i,s,c,d){(function(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=i,this.video=s,this.options=c,this.events=d,this.init()}var l,A;return l=r,A=[{key:"init",value:function(){var i=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var s=this.video.textTracks[0];s.oncuechange=function(){var c=s.activeCues[s.activeCues.length-1];if(i.container.innerHTML="",c){var d=document.createElement("div");d.appendChild(c.getCueAsHTML());var m=d.innerHTML.split(/\r?\n/).map(function(y){return"<p>".concat(y,"</p>")}).join("");i.container.innerHTML=m}i.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],A&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(mt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(mt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),mt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const ds=ps;function bt(r){return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},bt(r)}var cs=function(){function r(i){var s=this;(function(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.player.template.mask.addEventListener("click",function(){s.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){s.adaptiveHeight(),s.show()});for(var c=this.player.template.subtitlesItem.length-1,d=function(y){s.player.template.subtitlesItem[y].addEventListener("click",function(){s.hide(),s.player.options.subtitle.index!==y&&(s.player.template.subtitle.innerHTML="<p></p>",s.player.template.subtrack.src=s.player.template.subtitlesItem[y].dataset.subtitle,s.player.options.subtitle.index=y,s.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&s.subContainerShow())})},m=0;m<c;m++)d(m);this.player.template.subtitlesItem[c].addEventListener("click",function(){s.hide(),s.player.options.subtitle.index!==c&&(s.player.template.subtitle.innerHTML="<p></p>",s.player.template.subtrack.src="",s.player.options.subtitle.index=c,s.subContainerHide())})}var l,A;return l=r,(A=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var i=30*this.player.template.subtitlesItem.length+14,s=.8*this.player.template.videoWrap.offsetHeight;i>=s-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=s-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=s-50+"px")}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(bt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(bt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),bt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const us=cs;function gt(r){return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},gt(r)}var fs=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.elements={},this.elements.volume=i.volumeBar,this.elements.played=i.playedBar,this.elements.loaded=i.loadedBar,this.elements.danmaku=i.danmakuOpacityBar}var l,A;return l=r,(A=[{key:"set",value:function(i,s,c){s=Math.max(s,0),s=Math.min(s,1),this.elements[i].style[c]=100*s+"%"}},{key:"get",value:function(i){return parseFloat(this.elements[i].style.width)/100}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(gt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(gt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),gt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const As=fs;function vt(r){return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},vt(r)}var ys=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(s){window.setTimeout(s,1e3/60)},this.types=["loading","info","fps"],this.init()}var l,A;return l=r,(A=[{key:"init",value:function(){var i=this;this.types.map(function(s){return s!=="fps"&&i["init".concat(s,"Checker")](),s})}},{key:"initloadingChecker",value:function(){var i=this,s=0,c=0,d=!1;this.loadingChecker=setInterval(function(){i.enableloadingChecker&&(c=i.player.video.currentTime,d||c!==s||i.player.video.paused||(i.player.container.classList.add("dplayer-loading"),d=!0),d&&c>s&&!i.player.video.paused&&(i.player.container.classList.remove("dplayer-loading"),d=!1),s=c)},100)}},{key:"initfpsChecker",value:function(){var i=this;window.requestAnimationFrame(function(){if(i.enablefpsChecker)if(i.initfpsChecker(),i.fpsStart){i.fpsIndex++;var s=new Date;s-i.fpsStart>1e3&&(i.player.infoPanel.fps(i.fpsIndex/(s-i.fpsStart)*1e3),i.fpsStart=new Date,i.fpsIndex=0)}else i.fpsStart=new Date,i.fpsIndex=0;else i.fpsStart=0,i.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var i=this;this.infoChecker=setInterval(function(){i.enableinfoChecker&&i.player.infoPanel.update()},1e3)}},{key:"enable",value:function(i){this["enable".concat(i,"Checker")]=!0,i==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(i){this["enable".concat(i,"Checker")]=!1}},{key:"destroy",value:function(){var i=this;this.types.map(function(s){return i["enable".concat(s,"Checker")]=!1,i["".concat(s,"Checker")]&&clearInterval(i["".concat(s,"Checker")]),s})}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(vt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(vt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),vt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const hs=ys;function xt(r){return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},xt(r)}const ms=function(){function r(i){var s=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=i,this.container.addEventListener("animationend",function(){s.container.classList.remove("dplayer-bezel-transition")})}var l,A;return l=r,(A=[{key:"switch",value:function(i){this.container.innerHTML=i,this.container.classList.add("dplayer-bezel-transition")}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(xt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(xt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),xt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();function Et(r){return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Et(r)}var bs=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=i.container,this.barWidth=i.barWidth,this.container.style.backgroundImage="url('".concat(i.url,"')"),this.events=i.events}var l,A;return l=r,(A=[{key:"resize",value:function(i,s,c){this.container.style.width="".concat(i,"px"),this.container.style.height="".concat(s,"px"),this.container.style.top="".concat(2-s,"px"),this.barWidth=c}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(i){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(i/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(i-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(Et(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(Et(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),Et(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const gs=bs;function wt(r){return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},wt(r)}var Cn,sa=!0,Ur=!1,vs=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.autoHideTimer=0,F.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),F.isMobile||this.initVolumeButton()}var l,A;return l=r,(A=[{key:"initPlayButton",value:function(){var i=this;this.player.template.playButton.addEventListener("click",function(){i.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){i.player.toggle()}),F.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){i.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){i.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){i.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){i.player.toggle()}))}},{key:"initHighlights",value:function(){var i=this;this.player.on("durationchange",function(){if(i.player.video.duration!==1&&i.player.video.duration!==1/0&&i.player.options.highlight){var s=i.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(s,0).forEach(function(m){i.player.template.playedBarWrap.removeChild(m)});for(var c=0;c<i.player.options.highlight.length;c++)if(i.player.options.highlight[c].text&&i.player.options.highlight[c].time){var d=document.createElement("div");d.classList.add("dplayer-highlight"),d.style.left=i.player.options.highlight[c].time/i.player.video.duration*100+"%",d.innerHTML='<span class="dplayer-highlight-text">'+i.player.options.highlight[c].text+"</span>",i.player.template.playedBarWrap.insertBefore(d,i.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var i=this;this.player.options.video.thumbnails&&(this.thumbnails=new gs({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){i.thumbnails.resize(160,i.player.video.videoHeight/i.player.video.videoWidth*160,i.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var i=this,s=function(d){var m=((d.clientX||d.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.playedBarWrap))/i.player.template.playedBarWrap.clientWidth;m=Math.max(m,0),m=Math.min(m,1),i.player.bar.set("played",m,"width"),i.player.template.ptime.innerHTML=F.secondToTime(m*i.player.video.duration)},c=function d(m){document.removeEventListener(F.nameMap.dragEnd,d),document.removeEventListener(F.nameMap.dragMove,s);var y=((m.clientX||m.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.playedBarWrap))/i.player.template.playedBarWrap.clientWidth;y=Math.max(y,0),y=Math.min(y,1),i.player.bar.set("played",y,"width"),i.player.seek(i.player.bar.get("played")*i.player.video.duration),i.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(F.nameMap.dragStart,function(){i.player.timer.disable("progress"),document.addEventListener(F.nameMap.dragMove,s),document.addEventListener(F.nameMap.dragEnd,c)}),this.player.template.playedBarWrap.addEventListener(F.nameMap.dragMove,function(d){if(i.player.video.duration){var m=i.player.template.playedBarWrap.getBoundingClientRect().left,y=(d.clientX||d.changedTouches[0].clientX)-m;if(y<0||y>i.player.template.playedBarWrap.offsetWidth)return;var x=i.player.video.duration*(y/i.player.template.playedBarWrap.offsetWidth);F.isMobile&&i.thumbnails&&i.thumbnails.show(),i.thumbnails&&i.thumbnails.move(y),i.player.template.playedBarTime.style.left="".concat(y-(x>=3600?25:20),"px"),i.player.template.playedBarTime.innerText=F.secondToTime(x),i.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(F.nameMap.dragEnd,function(){F.isMobile&&i.thumbnails&&i.thumbnails.hide()}),F.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){i.player.video.duration&&(i.thumbnails&&i.thumbnails.show(),i.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){i.player.video.duration&&(i.thumbnails&&i.thumbnails.hide(),i.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var i=this;this.player.template.browserFullButton.addEventListener("click",function(){i.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){i.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var i=this,s=function(d){var m=d||window.event,y=((m.clientX||m.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.volumeBarWrap)-5.5)/35;i.player.volume(y)},c=function d(){document.removeEventListener(F.nameMap.dragEnd,d),document.removeEventListener(F.nameMap.dragMove,s),i.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(d){var m=d||window.event,y=((m.clientX||m.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.volumeBarWrap)-5.5)/35;i.player.volume(y)}),this.player.template.volumeBarWrapWrap.addEventListener(F.nameMap.dragStart,function(){document.addEventListener(F.nameMap.dragMove,s),document.addEventListener(F.nameMap.dragEnd,c),i.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){i.player.video.muted?(i.player.video.muted=!1,i.player.switchVolumeIcon(),i.player.bar.set("volume",i.player.volume(),"width")):(i.player.video.muted=!0,i.player.template.volumeIcon.innerHTML=Ve.volumeOff,i.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var i=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(s){s.target.classList.contains("dplayer-quality-item")&&i.player.switchQuality(s.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var i=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var s,c=document.createElement("canvas");c.width=i.player.video.videoWidth,c.height=i.player.video.videoHeight,c.getContext("2d").drawImage(i.player.video,0,0,c.width,c.height),c.toBlob(function(d){s=URL.createObjectURL(d);var m=document.createElement("a");m.href=s,m.download="DPlayer.png",m.style.display="none",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(s),i.player.events.trigger("screenshot",s)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(i){i.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var i=window.document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(i),window.__onGCastApiAvailable=function(s){if(s){var c=new(Cn=window.chrome.cast).SessionRequest(Cn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),d=new Cn.ApiConfig(c,function(){},function(m){m===Cn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",m)});Cn.initialize(d,function(){})}}}},{key:"initChromecastButton",value:function(){var i=this;if(this.player.options.chromecast){sa&&(sa=!1,this.initChromecast());var s=function(d,m){i.currentMedia=m},c=function(d){console.error("Error launching media",d)};this.player.template.chromecastButton.addEventListener("click",function(){Ur?(Ur=!1,i.currentMedia.stop(),i.session.stop(),i.initChromecast()):(Ur=!0,Cn.requestSession(function(d){var m,y,x;i.session=d,m=i.player.options.video.url,y=new Cn.media.MediaInfo(m),x=new Cn.media.LoadRequest(y),i.session?i.session.loadMedia(x,s.bind(i,"loadMedia"),c).play():window.open(m)},function(d){d.code==="cancel"?i.session=void 0:console.error("Error selecting a cast device",d)}))})}}},{key:"initSubtitleButton",value:function(){var i=this;this.player.events.on("subtitle_show",function(){i.player.template.subtitleButton.dataset.balloon=i.player.tran("hide-subs"),i.player.template.subtitleButtonInner.style.opacity="",i.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){i.player.template.subtitleButton.dataset.balloon=i.player.tran("show-subs"),i.player.template.subtitleButtonInner.style.opacity="0.4",i.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){i.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var i=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!i.player.video.played.length||i.player.paused||i.disableAutoHide||i.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){F.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(wt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(wt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),wt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const xs=vs;function Ct(r){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Ct(r)}var Es=function(){function r(i){var s=this;(function(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.player.template.mask.addEventListener("click",function(){s.hide()}),this.player.template.settingButton.addEventListener("click",function(){s.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){s.player.template.loopToggle.checked=!s.player.template.loopToggle.checked,s.player.template.loopToggle.checked?s.loop=!0:s.loop=!1,s.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){s.player.template.showDanmakuToggle.checked=!s.player.template.showDanmakuToggle.checked,s.player.template.showDanmakuToggle.checked?(s.showDanmaku=!0,s.player.danmaku.show()):(s.showDanmaku=!1,s.player.danmaku.hide()),s.player.user.set("danmaku",s.showDanmaku?1:0),s.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){s.player.template.unlimitDanmakuToggle.checked=!s.player.template.unlimitDanmakuToggle.checked,s.player.template.unlimitDanmakuToggle.checked?(s.unlimitDanmaku=!0,s.player.danmaku.unlimit(!0)):(s.unlimitDanmaku=!1,s.player.danmaku.unlimit(!1)),s.player.user.set("unlimited",s.unlimitDanmaku?1:0),s.hide()}),this.player.template.speed.addEventListener("click",function(){s.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),s.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var c=function(x){s.player.template.speedItem[x].addEventListener("click",function(){s.player.speed(s.player.template.speedItem[x].dataset.speed),s.hide()})},d=0;d<this.player.template.speedItem.length;d++)c(d);if(this.player.danmaku){this.player.on("danmaku_opacity",function(x){s.player.bar.set("danmaku",x,"width"),s.player.user.set("opacity",x)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var m=function(x){var w=x||window.event,j=((w.clientX||w.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(s.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),s.player.danmaku.opacity(j)},y=function x(){document.removeEventListener(F.nameMap.dragEnd,x),document.removeEventListener(F.nameMap.dragMove,m),s.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(x){var w=x||window.event,j=((w.clientX||w.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(s.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),s.player.danmaku.opacity(j)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(F.nameMap.dragStart,function(){document.addEventListener(F.nameMap.dragMove,m),document.addEventListener(F.nameMap.dragEnd,y),s.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var l,A;return l=r,(A=[{key:"hide",value:function(){var i=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){i.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),i.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(Ct(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(Ct(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),Ct(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const ws=Es;function kt(r){return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},kt(r)}var Cs=function(){function r(i){var s=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.player.template.mask.addEventListener("click",function(){s.hide()}),this.player.template.commentButton.addEventListener("click",function(){s.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){s.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(s.player.template.commentColorSettingBox.querySelector("input:checked+span")){var c=s.player.template.commentColorSettingBox.querySelector("input:checked").value;s.player.template.commentSettingFill.style.fill=c,s.player.template.commentInput.style.color=c,s.player.template.commentSendFill.style.fill=c}}),this.player.template.commentInput.addEventListener("click",function(){s.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(c){(c||window.event).keyCode===13&&s.send()}),this.player.template.commentSendButton.addEventListener("click",function(){s.send()})}var l,A;return l=r,(A=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var i=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:F.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){i.player.template.commentInput.value="",i.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(kt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(kt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),kt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const ks=Cs;function Bt(r){return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Bt(r)}var Bs=function(){function r(i){(function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var l,A;return l=r,(A=[{key:"doHotKey",value:function(i){if(this.player.focus){var s=document.activeElement.tagName.toUpperCase(),c=document.activeElement.getAttribute("contenteditable");if(s!=="INPUT"&&s!=="TEXTAREA"&&c!==""&&c!=="true"){var d,m=i||window.event;switch(m.keyCode){case 32:m.preventDefault(),this.player.toggle();break;case 37:if(m.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(m.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:m.preventDefault(),d=this.player.volume()+.1,this.player.volume(d);break;case 40:m.preventDefault(),d=this.player.volume()-.1,this.player.volume(d)}}}}},{key:"cancelFullScreen",value:function(i){(i||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(Bt(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(Bt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),Bt(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const Ss=Bs;function St(r){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},St(r)}var Is=function(){function r(i){var s=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=i,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(c,d){s.player.options.contextmenu[d].click&&c.addEventListener("click",function(){s.player.options.contextmenu[d].click(s.player),s.hide()})}),this.contextmenuHandler=function(c){if(s.shown)s.hide();else{var d=c||window.event;d.preventDefault();var m=s.player.container.getBoundingClientRect();s.show(d.clientX-m.left,d.clientY-m.top),s.player.template.mask.addEventListener("click",function(){s.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var l,A;return l=r,(A=[{key:"show",value:function(i,s){this.player.template.menu.classList.add("dplayer-menu-show");var c=this.player.container.getBoundingClientRect();i+this.player.template.menu.offsetWidth>=c.width?(this.player.template.menu.style.right=c.width-i+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=i+"px",this.player.template.menu.style.right="initial"),s+this.player.template.menu.offsetHeight>=c.height?(this.player.template.menu.style.bottom=c.height-s+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=s+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(St(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(St(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),St(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const Ls=Is;function It(r){return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},It(r)}var Ts=function(){function r(i){var s=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=i.template.infoPanel,this.template=i.template,this.video=i.video,this.player=i,this.template.infoPanelClose.addEventListener("click",function(){s.hide()})}var l,A;return l=r,(A=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(i){this.template.infoFPS.innerHTML="".concat(i.toFixed(1))}}])&&function(i,s){for(var c=0;c<s.length;c++){var d=s[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(y){if(It(y)!=="object"||y===null)return y;var x=y[Symbol.toPrimitive];if(x!==void 0){var w=x.call(y,"string");if(It(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(d.key),It(m)==="symbol"?m:String(m)),d)}var m}(l.prototype,A),Object.defineProperty(l,"prototype",{writable:!1}),r}();const _s=Ts;var Os=t(568),Ps=t.n(Os);function Lt(r){return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Lt(r)}function pa(r,l){var A=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);l&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),A.push.apply(A,i)}return A}function Rs(r,l,A){return(l=ca(l))in r?Object.defineProperty(r,l,{value:A,enumerable:!0,configurable:!0,writable:!0}):r[l]=A,r}function da(r,l){for(var A=0;A<l.length;A++){var i=l[A];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ca(i.key),i)}}function ca(r){var l=function(A){if(Lt(A)!=="object"||A===null)return A;var i=A[Symbol.toPrimitive];if(i!==void 0){var s=i.call(A,"string");if(Lt(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)}(r);return Lt(l)==="symbol"?l:String(l)}var ua=0,Jn=[],zs=function(){function r(s){var c=this;(function(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")})(this,r),this.options=function(d){var m={container:d.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:yl,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var y in m)m.hasOwnProperty(y)&&!d.hasOwnProperty(y)&&(d[y]=m[y]);return d.video&&!d.video.type&&(d.video.type="auto"),Mr(d.danmaku)==="object"&&d.danmaku&&!d.danmaku.user&&(d.danmaku.user="DIYgod"),d.subtitle&&(!d.subtitle.type&&(d.subtitle.type="webvtt"),!d.subtitle.fontSize&&(d.subtitle.fontSize="20px"),!d.subtitle.bottom&&(d.subtitle.bottom="40px"),!d.subtitle.color&&(d.subtitle.color="#fff")),d.video.quality&&(d.video.url=d.video.quality[d.video.defaultQuality].url),d.lang&&(d.lang=d.lang.toLowerCase()),d.contextmenu=d.contextmenu.concat([{key:"video-info",click:function(x){x.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),d}(function(d){for(var m=1;m<arguments.length;m++){var y=arguments[m]!=null?arguments[m]:{};m%2?pa(Object(y),!0).forEach(function(x){Rs(d,x,y[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(y)):pa(Object(y)).forEach(function(x){Object.defineProperty(d,x,Object.getOwnPropertyDescriptor(y,x))})}return d}({preload:s.video.type==="webtorrent"?"none":"metadata"},s)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new hl(this.options.lang).tran,this.events=new os,this.user=new ss(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),F.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(d){return d.lang===c.options.subtitle.defaultSubtitle||d.name===c.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(d){return d.lang===c.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new la({container:this.container,options:this.options,index:ua,tran:this.tran}),this.video=this.template.video,this.bar=new As(this.template),this.bezel=new ms(this.template.bezel),this.fullScreen=new is(this),this.controller=new xs(this),this.options.danmaku&&(this.danmaku=new rs({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){c.template.danmakuLoading.style.display="none",c.options.autoplay&&c.play()},0)},error:function(d){c.notice(d)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return c.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(d){return c.tran(d)}}),this.comment=new ks(this)),this.setting=new ws(this),this.plugins={},this.docClickFun=function(){c.focus=!1},this.containerClickFun=function(){c.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new hs(this),this.hotkey=new Ss(this),this.contextmenu=new Ls(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new _s(this),!this.danmaku&&this.options.autoplay&&this.play(),ua++,Jn.push(this)}var l,A,i;return l=r,A=[{key:"seek",value:function(s){s=Math.max(s,0),this.video.duration&&(s=Math.min(s,this.video.duration)),this.video.currentTime<s?this.notice("".concat(this.tran("ff").replace("%s",(s-this.video.currentTime).toFixed(0)))):this.video.currentTime>s&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-s).toFixed(0)))),this.video.currentTime=s,this.danmaku&&this.danmaku.seek(),this.bar.set("played",s/this.video.duration,"width"),this.template.ptime.innerHTML=F.secondToTime(s)}},{key:"play",value:function(s){var c=this;if(this.paused=!1,this.video.paused&&!F.isMobile&&this.bezel.switch(Ve.play),this.template.playButton.innerHTML=Ve.pause,this.template.mobilePlayButton.innerHTML=Ve.pause,s||Ut.resolve(this.video.play()).catch(function(){c.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var d=0;d<Jn.length;d++)this!==Jn[d]&&Jn[d].pause()}},{key:"pause",value:function(s){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||F.isMobile||this.bezel.switch(Ve.pause),this.template.playButton.innerHTML=Ve.play,this.template.mobilePlayButton.innerHTML=Ve.play,s||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ve.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ve.volumeDown:this.template.volumeIcon.innerHTML=Ve.volumeOff}},{key:"volume",value:function(s,c,d){if(s=parseFloat(s),!isNaN(s)){s=Math.max(s,0),s=Math.min(s,1),this.bar.set("volume",s,"width");var m="".concat((100*s).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=m,c||this.user.set("volume",s),d||this.notice("".concat(this.tran("volume")," ").concat((100*s).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=s,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(s,c){this.events.on(s,c)}},{key:"switchVideo",value:function(s,c){this.pause(),this.video.poster=s.pic?s.pic:"",this.video.src=s.url,this.initMSE(this.video,s.type||"auto"),c&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:c.id,address:c.api,token:c.token,maximum:c.maximum,addition:c.addition,user:c.user}))}},{key:"initMSE",value:function(s,c){var d=this;if(this.type=c,this.options.video.customType&&this.options.video.customType[c])Object.prototype.toString.call(this.options.video.customType[c])==="[object Function]"?this.options.video.customType[c](this.video,this):console.error("Illegal customType: ".concat(c));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(s.src)?this.type="hls":/.flv(#|\?|$)/i.exec(s.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(s.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(s.canPlayType("application/x-mpegURL")||s.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var m=this.options.pluginOptions.hls,y=new window.Hls(m);this.plugins.hls=y,y.loadSource(s.src),y.attachMedia(s),this.events.on("destroy",function(){y.destroy(),delete d.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var x=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:s.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=x,x.attachMediaElement(s),x.load(),this.events.on("destroy",function(){x.unload(),x.detachMediaElement(),x.destroy(),delete d.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var w=window.dashjs.MediaPlayer().create().initialize(s,s.src,!1),j=this.options.pluginOptions.dash;w.updateSettings(j),this.plugins.dash=w,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete d.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var ee=this.options.pluginOptions.webtorrent,H=new window.WebTorrent(ee);this.plugins.webtorrent=H;var N=s.src;s.src="",s.preload="metadata",s.addEventListener("durationchange",function(){return d.container.classList.remove("dplayer-loading")},{once:!0}),H.add(N,function(U){U.files.find(function(Z){return Z.name.endsWith(".mp4")}).renderTo(d.video,{autoplay:d.options.autoplay,controls:!1})}),this.events.on("destroy",function(){H.remove(N),H.destroy(),delete d.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(s,c){var d=this;this.initMSE(s,c),this.on("durationchange",function(){s.duration!==1&&s.duration!==1/0&&(d.template.dtime.innerHTML=F.secondToTime(s.duration))}),this.on("progress",function(){var x=s.buffered.length?s.buffered.end(s.buffered.length-1)/s.duration:0;d.bar.set("loaded",x,"width")}),this.on("error",function(){d.video.error&&d.tran&&d.notice&&d.type!=="webtorrent"&&d.notice(d.tran("video-failed"))}),this.on("ended",function(){d.bar.set("played",1,"width"),d.setting.loop?(d.seek(0),d.play()):d.pause(),d.danmaku&&(d.danmaku.danIndex=0)}),this.on("play",function(){d.paused&&d.play(!0)}),this.on("pause",function(){d.paused||d.pause(!0)}),this.on("timeupdate",function(){d.bar.set("played",d.video.currentTime/d.video.duration,"width");var x=F.secondToTime(d.video.currentTime);d.template.ptime.innerHTML!==x&&(d.template.ptime.innerHTML=x)});for(var m=function(x){s.addEventListener(d.events.videoEvents[x],function(w){d.events.trigger(d.events.videoEvents[x],w)})},y=0;y<this.events.videoEvents.length;y++)m(y);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new ds(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new us(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(s){var c=this;if(s=typeof s=="string"?parseInt(s):s,this.qualityIndex!==s&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=s,this.switchingQuality=!0,this.quality=this.options.video.quality[s],this.template.qualityButton.innerHTML=this.quality.name;var d=this.video.paused;this.video.pause();var m=Ps()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),y=new DOMParser().parseFromString(m,"text/html").body.firstChild;this.template.videoWrap.insertBefore(y,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=y,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(c.prevVideo){if(c.video.currentTime!==c.prevVideo.currentTime)return void c.seek(c.prevVideo.currentTime);c.template.videoWrap.removeChild(c.prevVideo),c.video.classList.add("dplayer-video-current"),d||c.video.play(),c.prevVideo=null,c.notice("".concat(c.tran("switched-quality").replace("%q",c.quality.name)),void 0,void 0,"switch-quality"),c.switchingQuality=!1,c.events.trigger("quality_end")}}),this.on("error",function(){c.video.error&&c.prevVideo&&(c.template.videoWrap.removeChild(c.video),c.video=c.prevVideo,d||c.video.play(),c.qualityIndex=c.prevIndex,c.quality=c.options.video.quality[c.qualityIndex],c.noticeTime=setTimeout(function(){c.template.notice.style.opacity=0,c.events.trigger("notice_hide")},3e3),c.prevVideo=null,c.switchingQuality=!1)})}}},{key:"notice",value:function(s){var c,d,m,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,w=arguments.length>3?arguments[3]:void 0;if(w&&((c=document.getElementById("dplayer-notice-".concat(w)))&&(c.innerHTML=s),this.noticeList[w]&&(clearTimeout(this.noticeList[w]),this.noticeList[w]=null)),!c){var j=la.NewNotice(s,x,w);this.template.noticeList.appendChild(j),c=j}this.events.trigger("notice_show",c),y>0&&(this.noticeList[w]=setTimeout((d=c,m=this,function(){d.addEventListener("animationend",function(){m.template.noticeList.removeChild(d)}),d.classList.add("remove-notice"),m.events.trigger("notice_hide"),m.noticeList[w]=null}),y))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(s){this.video.playbackRate=s}},{key:"destroy",value:function(){Jn.splice(Jn.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],i=[{key:"version",get:function(){return"1.27.1"}}],A&&da(l.prototype,A),i&&da(l,i),Object.defineProperty(l,"prototype",{writable:!1}),r}();const qs=zs;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Ds=qs})(),a.default})())();const qc={".mp4":{kind:"file",mimeHints:["video/mp4"]},".m4v":{kind:"file",mimeHints:["video/mp4"]},".mov":{kind:"file",mimeHints:["video/quicktime","video/mp4"]},".webm":{kind:"file",mimeHints:["video/webm"]},".ogv":{kind:"file",mimeHints:["video/ogg"]},".ts":{kind:"file",mimeHints:["video/mp2t"]},".mkv":{kind:"file",mimeHints:["video/x-matroska","video/webm"]},".m3u8":{kind:"hls",mimeHints:["application/vnd.apple.mpegurl","application/x-mpegURL"]},".mpd":{kind:"dash",mimeHints:["application/dash+xml"]}};function Dc(e){try{return new URL(e.trim())}catch{return null}}function Mc(e){const t=e.pathname.toLowerCase().split("?")[0],a=t.lastIndexOf(".");return a>=0?t.slice(a):""}function jc(e){const n=e.hostname.toLowerCase(),t=e.pathname.toLowerCase();return!!(n.includes("youtube.com")||n.includes("youtu.be")||n.includes("bilibili.com")&&(t.includes("/video/")||t.includes("/bangumi/"))||n.includes("vimeo.com")&&!t.endsWith(".mp4"))}function Uc(e){const n=document.createElement("video");return e.some(t=>!!n.canPlayType(t))}async function Fc(e,n){const t=(n==null?void 0:n.timeoutMs)??1e4,a=(n==null?void 0:n.useHlsJsIfAvailable)??!0,o=Dc(e);if(!o)return{ok:!1,reason:"URL 无效"};if(jc(o))return{ok:!1,reason:"看起来是网页播放页（非媒体直链）"};const p=Mc(o),u=qc[p];u&&u.kind==="file"&&Uc(u.mimeHints);const h=document.createElement("video");return h.preload="metadata",h.muted=!0,(()=>new Promise(g=>{const f=window.setTimeout(()=>{B(),g({ok:!1,reason:"加载超时，可能不是可播放直链或被 CORS/鉴权拦截"})},t),C=k=>{window.clearTimeout(f),B(),g(k)};function B(){h.src="",h.remove()}h.addEventListener("loadedmetadata",()=>{if((u==null?void 0:u.kind)==="hls")return C({ok:!0,kind:"hls",reason:"HLS 元数据已加载"});if((u==null?void 0:u.kind)==="dash")return C({ok:!0,kind:"dash",reason:"DASH 元数据已加载"});C({ok:!0,kind:"file",reason:"视频元数据已加载"})}),h.addEventListener("error",()=>{var k,R;if((u==null?void 0:u.kind)==="hls"&&a&&((R=(k=window.Hls)==null?void 0:k.isSupported)!=null&&R.call(k)))try{const L=window.Hls,q=new L;q.on(L.Events.MANIFEST_PARSED,()=>{q.destroy(),C({ok:!0,kind:"hls",reason:"hls.js 成功解析清单"})}),q.on(L.Events.ERROR,()=>{q.destroy(),C({ok:!1,reason:"hls.js 解析失败，可能不是有效的 m3u8"})}),q.loadSource(o.toString()),q.attachMedia(h);return}catch{}C({ok:!1,reason:"无法加载为媒体资源（网络错误、CORS、鉴权或非媒体）"})}),h.src=o.toString(),document.body.appendChild(h)}))()}const el=(e,n)=>{const t=e.__vccOpts||e;for(const[a,o]of n)t[a]=o;return t},Yc={data(){return{NewSrc:""}},methods:{initializeDplayer(){new $a({container:document.getElementById("dplayer"),video:{url:"https://kaneki.dynv6.net/d/oss/Picture/Lady%20Gaga%20-%20Applause.mp4?sign=7994f6avjrvtMvEgweiFUWB8Ojjq7Uhe75v-A8UwkIA=:0"},subtitle:{url:"https://kaneki.dynv6.net/d/oss/Picture/Lady%20Gaga%20-%20Applause.vtt?sign=zQqxUK6aiT13X3IpdwgqbAzqrnitL_C0waUDevW1QxI=:0",type:"webvtt",fontSize:"25px",bottom:"5%",color:"#e5ccff"},theme:"#4378ff"})},Dplayer(e){new $a({container:document.getElementById("dplayer"),video:{url:e},theme:"#4378ff"})},ChangeVideo(){Fc(this.NewSrc).then(e=>{e.ok?(console.log("可播放，类型：",e.kind,e.reason),this.Dplayer(this.NewSrc),console.log("实现 DPLAYER")):(console.warn("不可播放：未知后缀",e.reason),alert("不可播放：未知后缀",e.reason))})}},mounted(){this.initializeDplayer()}},Nc=Oe("link",{rel:"stylesheet",href:""},null,-1),Hc={align:"center"},Wc=Oe("p",null,[Oe("div",{id:"dplayer"})],-1);function Kc(e,n,t,a,o,p){return ji(),Ui(Je,null,[Nc,Oe("div",Hc,[Oe("p",null,[Oe("button",{onClick:n[0]||(n[0]=(...u)=>p.ChangeVideo&&p.ChangeVideo(...u))},"检测链接是否可用并应用"),Sr(),pd(Oe("input",{style:{width:"800px"},type:"text","onUpdate:modelValue":n[1]||(n[1]=u=>o.NewSrc=u)},null,512),[[Ac,o.NewSrc]])]),Wc])],64)}const Qc=el(Yc,[["render",Kc]]);const Zc={components:{DPlayerjsTest:Qc},setup(){},name:"App",data(){return{}}},Vc={id:"app"},Jc=Oe("h1",null,[Oe("img",{width:"30",src:"https://avatars.githubusercontent.com/u/51418619?v=4",alt:""}),Sr(" Live DPlayer ")],-1),Xc=Oe("p",null,[Oe("a",{href:"https://dplayer.diygod.dev/guide.html",target:"_blank"}," DPlayer "),Sr(" | "),Oe("a",{href:"https://github.com/DIYgod/DPlayer",target:"_blank"}," Github ")],-1);function $c(e,n,t,a,o,p){const u=dd("DPlayerjsTest");return ji(),Ui("div",Vc,[Oe("header",null,[Jc,Ln(u),Xc])])}const Gc=el(Zc,[["render",$c]]),eu=mc(Gc);eu.mount("#app");
