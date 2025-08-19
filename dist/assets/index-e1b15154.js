(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function go(e,n){const t=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)t[a[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function vo(e){if(te(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],r=Ee(a)?$s(a):vo(a);if(r)for(const l in r)n[l]=r[l]}return n}else{if(Ee(e))return e;if(he(e))return e}}const Zs=/;(?![^(]*\))/g,Js=/:([^]+)/,Xs=/\/\*.*?\*\//gs;function $s(e){const n={};return e.replace(Xs,"").split(Zs).forEach(t=>{if(t){const a=t.split(Js);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function xo(e){let n="";if(Ee(e))n=e;else if(te(e))for(let t=0;t<e.length;t++){const a=xo(e[t]);a&&(n+=a+" ")}else if(he(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=go(Gs);function ai(e){return!!e||e===""}const Dt=e=>Ee(e)?e:e==null?"":te(e)||he(e)&&(e.toString===pi||!re(e.toString))?JSON.stringify(e,ii,2):String(e),ii=(e,n)=>n&&n.__v_isRef?ii(e,n.value):at(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,r])=>(t[`${a} =>`]=r,t),{})}:li(n)?{[`Set(${n.size})`]:[...n.values()]}:he(n)&&!te(n)&&!di(n)?String(n):n,Ae={},ot=[],Ge=()=>{},np=()=>!1,tp=/^on[^a-z]/,Er=e=>tp.test(e),Eo=e=>e.startsWith("onUpdate:"),_e=Object.assign,wo=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},rp=Object.prototype.hasOwnProperty,ie=(e,n)=>rp.call(e,n),te=Array.isArray,at=e=>wr(e)==="[object Map]",li=e=>wr(e)==="[object Set]",re=e=>typeof e=="function",Ee=e=>typeof e=="string",Co=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",si=e=>he(e)&&re(e.then)&&re(e.catch),pi=Object.prototype.toString,wr=e=>pi.call(e),op=e=>wr(e).slice(8,-1),di=e=>wr(e)==="[object Object]",ko=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dr=go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cr=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},ap=/-(\w)/g,An=Cr(e=>e.replace(ap,(n,t)=>t?t.toUpperCase():"")),ip=/\B([A-Z])/g,pt=Cr(e=>e.replace(ip,"-$1").toLowerCase()),kr=Cr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qr=Cr(e=>e?`on${kr(e)}`:""),yr=(e,n)=>!Object.is(e,n),cr=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},hr=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},mr=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let va;const lp=()=>va||(va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ln;class sp{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ln,!n&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}run(n){if(this.active){const t=ln;try{return ln=this,n()}finally{ln=t}}}on(){ln=this}off(){ln=this.parent}stop(n){if(this.active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function pp(e,n=ln){n&&n.active&&n.effects.push(e)}const Bo=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ci=e=>(e.w&Tn)>0,ui=e=>(e.n&Tn)>0,dp=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Tn},cp=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const r=n[a];ci(r)&&!ui(r)?r.delete(e):n[t++]=r,r.w&=~Tn,r.n&=~Tn}n.length=t}},ro=new WeakMap;let Mt=0,Tn=1;const oo=30;let Xe;const Nn=Symbol(""),ao=Symbol("");class So{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,pp(this,a)}run(){if(!this.active)return this.fn();let n=Xe,t=_n;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Xe,Xe=this,_n=!0,Tn=1<<++Mt,Mt<=oo?dp(this):xa(this),this.fn()}finally{Mt<=oo&&cp(this),Tn=1<<--Mt,Xe=this.parent,_n=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xe===this?this.deferStop=!0:this.active&&(xa(this),this.onStop&&this.onStop(),this.active=!1)}}function xa(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let _n=!0;const fi=[];function dt(){fi.push(_n),_n=!1}function ct(){const e=fi.pop();_n=e===void 0?!0:e}function Fe(e,n,t){if(_n&&Xe){let a=ro.get(e);a||ro.set(e,a=new Map);let r=a.get(t);r||a.set(t,r=Bo()),Ai(r)}}function Ai(e,n){let t=!1;Mt<=oo?ui(e)||(e.n|=Tn,t=!ci(e)):t=!e.has(Xe),t&&(e.add(Xe),Xe.deps.push(e))}function gn(e,n,t,a,r,l){const u=ro.get(e);if(!u)return;let A=[];if(n==="clear")A=[...u.values()];else if(t==="length"&&te(e)){const b=mr(a);u.forEach((g,f)=>{(f==="length"||f>=b)&&A.push(g)})}else switch(t!==void 0&&A.push(u.get(t)),n){case"add":te(e)?ko(t)&&A.push(u.get("length")):(A.push(u.get(Nn)),at(e)&&A.push(u.get(ao)));break;case"delete":te(e)||(A.push(u.get(Nn)),at(e)&&A.push(u.get(ao)));break;case"set":at(e)&&A.push(u.get(Nn));break}if(A.length===1)A[0]&&io(A[0]);else{const b=[];for(const g of A)g&&b.push(...g);io(Bo(b))}}function io(e,n){const t=te(e)?e:[...e];for(const a of t)a.computed&&Ea(a);for(const a of t)a.computed||Ea(a)}function Ea(e,n){(e!==Xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const up=go("__proto__,__v_isRef,__isVue"),yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Co)),fp=Io(),Ap=Io(!1,!0),yp=Io(!0),wa=hp();function hp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=ue(this);for(let l=0,u=this.length;l<u;l++)Fe(a,"get",l+"");const r=a[n](...t);return r===-1||r===!1?a[n](...t.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){dt();const a=ue(this)[n].apply(this,t);return ct(),a}}),e}function Io(e=!1,n=!1){return function(a,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(e?n?Op:vi:n?gi:bi).get(a))return a;const u=te(a);if(!e&&u&&ie(wa,r))return Reflect.get(wa,r,l);const A=Reflect.get(a,r,l);return(Co(r)?yi.has(r):up(r))||(e||Fe(a,"get",r),n)?A:Oe(A)?u&&ko(r)?A:A.value:he(A)?e?xi(A):To(A):A}}const mp=hi(),bp=hi(!0);function hi(e=!1){return function(t,a,r,l){let u=t[a];if(Ft(u)&&Oe(u)&&!Oe(r))return!1;if(!e&&(!lo(r)&&!Ft(r)&&(u=ue(u),r=ue(r)),!te(t)&&Oe(u)&&!Oe(r)))return u.value=r,!0;const A=te(t)&&ko(a)?Number(a)<t.length:ie(t,a),b=Reflect.set(t,a,r,l);return t===ue(l)&&(A?yr(r,u)&&gn(t,"set",a,r):gn(t,"add",a,r)),b}}function gp(e,n){const t=ie(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&gn(e,"delete",n,void 0),a}function vp(e,n){const t=Reflect.has(e,n);return(!Co(n)||!yi.has(n))&&Fe(e,"has",n),t}function xp(e){return Fe(e,"iterate",te(e)?"length":Nn),Reflect.ownKeys(e)}const mi={get:fp,set:mp,deleteProperty:gp,has:vp,ownKeys:xp},Ep={get:yp,set(e,n){return!0},deleteProperty(e,n){return!0}},wp=_e({},mi,{get:Ap,set:bp}),_o=e=>e,Br=e=>Reflect.getPrototypeOf(e);function nr(e,n,t=!1,a=!1){e=e.__v_raw;const r=ue(e),l=ue(n);t||(n!==l&&Fe(r,"get",n),Fe(r,"get",l));const{has:u}=Br(r),A=a?_o:t?Ro:Po;if(u.call(r,n))return A(e.get(n));if(u.call(r,l))return A(e.get(l));e!==r&&e.get(n)}function tr(e,n=!1){const t=this.__v_raw,a=ue(t),r=ue(e);return n||(e!==r&&Fe(a,"has",e),Fe(a,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function rr(e,n=!1){return e=e.__v_raw,!n&&Fe(ue(e),"iterate",Nn),Reflect.get(e,"size",e)}function Ca(e){e=ue(e);const n=ue(this);return Br(n).has.call(n,e)||(n.add(e),gn(n,"add",e,e)),this}function ka(e,n){n=ue(n);const t=ue(this),{has:a,get:r}=Br(t);let l=a.call(t,e);l||(e=ue(e),l=a.call(t,e));const u=r.call(t,e);return t.set(e,n),l?yr(n,u)&&gn(t,"set",e,n):gn(t,"add",e,n),this}function Ba(e){const n=ue(this),{has:t,get:a}=Br(n);let r=t.call(n,e);r||(e=ue(e),r=t.call(n,e)),a&&a.call(n,e);const l=n.delete(e);return r&&gn(n,"delete",e,void 0),l}function Sa(){const e=ue(this),n=e.size!==0,t=e.clear();return n&&gn(e,"clear",void 0,void 0),t}function or(e,n){return function(a,r){const l=this,u=l.__v_raw,A=ue(u),b=n?_o:e?Ro:Po;return!e&&Fe(A,"iterate",Nn),u.forEach((g,f)=>a.call(r,b(g),b(f),l))}}function ar(e,n,t){return function(...a){const r=this.__v_raw,l=ue(r),u=at(l),A=e==="entries"||e===Symbol.iterator&&u,b=e==="keys"&&u,g=r[e](...a),f=t?_o:n?Ro:Po;return!n&&Fe(l,"iterate",b?ao:Nn),{next(){const{value:C,done:B}=g.next();return B?{value:C,done:B}:{value:A?[f(C[0]),f(C[1])]:f(C),done:B}},[Symbol.iterator](){return this}}}}function Sn(e){return function(...n){return e==="delete"?!1:this}}function Cp(){const e={get(l){return nr(this,l)},get size(){return rr(this)},has:tr,add:Ca,set:ka,delete:Ba,clear:Sa,forEach:or(!1,!1)},n={get(l){return nr(this,l,!1,!0)},get size(){return rr(this)},has:tr,add:Ca,set:ka,delete:Ba,clear:Sa,forEach:or(!1,!0)},t={get(l){return nr(this,l,!0)},get size(){return rr(this,!0)},has(l){return tr.call(this,l,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:or(!0,!1)},a={get(l){return nr(this,l,!0,!0)},get size(){return rr(this,!0)},has(l){return tr.call(this,l,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=ar(l,!1,!1),t[l]=ar(l,!0,!1),n[l]=ar(l,!1,!0),a[l]=ar(l,!0,!0)}),[e,t,n,a]}const[kp,Bp,Sp,Ip]=Cp();function Lo(e,n){const t=n?e?Ip:Sp:e?Bp:kp;return(a,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(ie(t,r)&&r in a?t:a,r,l)}const _p={get:Lo(!1,!1)},Lp={get:Lo(!1,!0)},Tp={get:Lo(!0,!1)},bi=new WeakMap,gi=new WeakMap,vi=new WeakMap,Op=new WeakMap;function Pp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rp(e){return e.__v_skip||!Object.isExtensible(e)?0:Pp(op(e))}function To(e){return Ft(e)?e:Oo(e,!1,mi,_p,bi)}function zp(e){return Oo(e,!1,wp,Lp,gi)}function xi(e){return Oo(e,!0,Ep,Tp,vi)}function Oo(e,n,t,a,r){if(!he(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const u=Rp(e);if(u===0)return e;const A=new Proxy(e,u===2?a:t);return r.set(e,A),A}function it(e){return Ft(e)?it(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function lo(e){return!!(e&&e.__v_isShallow)}function Ei(e){return it(e)||Ft(e)}function ue(e){const n=e&&e.__v_raw;return n?ue(n):e}function wi(e){return hr(e,"__v_skip",!0),e}const Po=e=>he(e)?To(e):e,Ro=e=>he(e)?xi(e):e;function qp(e){_n&&Xe&&(e=ue(e),Ai(e.dep||(e.dep=Bo())))}function Dp(e,n){e=ue(e),e.dep&&io(e.dep)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function Mp(e){return Oe(e)?e.value:e}const jp={get:(e,n,t)=>Mp(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const r=e[n];return Oe(r)&&!Oe(t)?(r.value=t,!0):Reflect.set(e,n,t,a)}};function Ci(e){return it(e)?e:new Proxy(e,jp)}var ki;class Up{constructor(n,t,a,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ki]=!1,this._dirty=!0,this.effect=new So(n,()=>{this._dirty||(this._dirty=!0,Dp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const n=ue(this);return qp(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}ki="__v_isReadonly";function Fp(e,n,t=!1){let a,r;const l=re(e);return l?(a=e,r=Ge):(a=e.get,r=e.set),new Up(a,r,l||!r,t)}function Ln(e,n,t,a){let r;try{r=a?e(...a):e()}catch(l){Sr(l,n,t)}return r}function Ke(e,n,t,a){if(re(e)){const l=Ln(e,n,t,a);return l&&si(l)&&l.catch(u=>{Sr(u,n,t)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Ke(e[l],n,t,a));return r}function Sr(e,n,t,a=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const u=n.proxy,A=t;for(;l;){const g=l.ec;if(g){for(let f=0;f<g.length;f++)if(g[f](e,u,A)===!1)return}l=l.parent}const b=n.appContext.config.errorHandler;if(b){Ln(b,null,10,[e,u,A]);return}}Yp(e,t,r,a)}function Yp(e,n,t,a=!0){console.error(e)}let Yt=!1,so=!1;const Ie=[];let pn=0;const lt=[];let mn=null,Mn=0;const Bi=Promise.resolve();let zo=null;function Np(e){const n=zo||Bi;return e?n.then(this?e.bind(this):e):n}function Hp(e){let n=pn+1,t=Ie.length;for(;n<t;){const a=n+t>>>1;Nt(Ie[a])<e?n=a+1:t=a}return n}function qo(e){(!Ie.length||!Ie.includes(e,Yt&&e.allowRecurse?pn+1:pn))&&(e.id==null?Ie.push(e):Ie.splice(Hp(e.id),0,e),Si())}function Si(){!Yt&&!so&&(so=!0,zo=Bi.then(_i))}function Wp(e){const n=Ie.indexOf(e);n>pn&&Ie.splice(n,1)}function Kp(e){te(e)?lt.push(...e):(!mn||!mn.includes(e,e.allowRecurse?Mn+1:Mn))&&lt.push(e),Si()}function Ia(e,n=Yt?pn+1:0){for(;n<Ie.length;n++){const t=Ie[n];t&&t.pre&&(Ie.splice(n,1),n--,t())}}function Ii(e){if(lt.length){const n=[...new Set(lt)];if(lt.length=0,mn){mn.push(...n);return}for(mn=n,mn.sort((t,a)=>Nt(t)-Nt(a)),Mn=0;Mn<mn.length;Mn++)mn[Mn]();mn=null,Mn=0}}const Nt=e=>e.id==null?1/0:e.id,Qp=(e,n)=>{const t=Nt(e)-Nt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function _i(e){so=!1,Yt=!0,Ie.sort(Qp);const n=Ge;try{for(pn=0;pn<Ie.length;pn++){const t=Ie[pn];t&&t.active!==!1&&Ln(t,null,14)}}finally{pn=0,Ie.length=0,Ii(),Yt=!1,zo=null,(Ie.length||lt.length)&&_i()}}function Vp(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||Ae;let r=t;const l=n.startsWith("update:"),u=l&&n.slice(7);if(u&&u in a){const f=`${u==="modelValue"?"model":u}Modifiers`,{number:C,trim:B}=a[f]||Ae;B&&(r=t.map(k=>Ee(k)?k.trim():k)),C&&(r=t.map(mr))}let A,b=a[A=Qr(n)]||a[A=Qr(An(n))];!b&&l&&(b=a[A=Qr(pt(n))]),b&&Ke(b,e,6,r);const g=a[A+"Once"];if(g){if(!e.emitted)e.emitted={};else if(e.emitted[A])return;e.emitted[A]=!0,Ke(g,e,6,r)}}function Li(e,n,t=!1){const a=n.emitsCache,r=a.get(e);if(r!==void 0)return r;const l=e.emits;let u={},A=!1;if(!re(e)){const b=g=>{const f=Li(g,n,!0);f&&(A=!0,_e(u,f))};!t&&n.mixins.length&&n.mixins.forEach(b),e.extends&&b(e.extends),e.mixins&&e.mixins.forEach(b)}return!l&&!A?(he(e)&&a.set(e,null),null):(te(l)?l.forEach(b=>u[b]=null):_e(u,l),he(e)&&a.set(e,u),u)}function Ir(e,n){return!e||!Er(n)?!1:(n=n.slice(2).replace(/Once$/,""),ie(e,n[0].toLowerCase()+n.slice(1))||ie(e,pt(n))||ie(e,n))}let Ue=null,Ti=null;function br(e){const n=Ue;return Ue=e,Ti=e&&e.type.__scopeId||null,n}function Zp(e,n=Ue,t){if(!n||e._n)return e;const a=(...r)=>{a._d&&Ma(-1);const l=br(n);let u;try{u=e(...r)}finally{br(l),a._d&&Ma(1)}return u};return a._n=!0,a._c=!0,a._d=!0,a}function Vr(e){const{type:n,vnode:t,proxy:a,withProxy:r,props:l,propsOptions:[u],slots:A,attrs:b,emit:g,render:f,renderCache:C,data:B,setupState:k,ctx:R,inheritAttrs:_}=e;let q,Q;const $=br(e);try{if(t.shapeFlag&4){const se=r||a;q=sn(f.call(se,se,C,l,k,B,R)),Q=b}else{const se=n;q=sn(se.length>1?se(l,{attrs:b,slots:A,emit:g}):se(l,null)),Q=n.props?b:Jp(b)}}catch(se){Ut.length=0,Sr(se,e,1),q=fn(en)}let G=q;if(Q&&_!==!1){const se=Object.keys(Q),{shapeFlag:we}=G;se.length&&we&7&&(u&&se.some(Eo)&&(Q=Xp(Q,u)),G=On(G,Q))}return t.dirs&&(G=On(G),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&(G.transition=t.transition),q=G,br($),q}const Jp=e=>{let n;for(const t in e)(t==="class"||t==="style"||Er(t))&&((n||(n={}))[t]=e[t]);return n},Xp=(e,n)=>{const t={};for(const a in e)(!Eo(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function $p(e,n,t){const{props:a,children:r,component:l}=e,{props:u,children:A,patchFlag:b}=n,g=l.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&b>=0){if(b&1024)return!0;if(b&16)return a?_a(a,u,g):!!u;if(b&8){const f=n.dynamicProps;for(let C=0;C<f.length;C++){const B=f[C];if(u[B]!==a[B]&&!Ir(g,B))return!0}}}else return(r||A)&&(!A||!A.$stable)?!0:a===u?!1:a?u?_a(a,u,g):!0:!!u;return!1}function _a(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const l=a[r];if(n[l]!==e[l]&&!Ir(t,l))return!0}return!1}function Gp({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const ed=e=>e.__isSuspense;function nd(e,n){n&&n.pendingBranch?te(e)?n.effects.push(...e):n.effects.push(e):Kp(e)}function td(e,n){if(Be){let t=Be.provides;const a=Be.parent&&Be.parent.provides;a===t&&(t=Be.provides=Object.create(a)),t[e]=n}}function ur(e,n,t=!1){const a=Be||Ue;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&re(n)?n.call(a.proxy):n}}const ir={};function Zr(e,n,t){return Oi(e,n,t)}function Oi(e,n,{immediate:t,deep:a,flush:r,onTrack:l,onTrigger:u}=Ae){const A=Be;let b,g=!1,f=!1;if(Oe(e)?(b=()=>e.value,g=lo(e)):it(e)?(b=()=>e,a=!0):te(e)?(f=!0,g=e.some(G=>it(G)||lo(G)),b=()=>e.map(G=>{if(Oe(G))return G.value;if(it(G))return Yn(G);if(re(G))return Ln(G,A,2)})):re(e)?n?b=()=>Ln(e,A,2):b=()=>{if(!(A&&A.isUnmounted))return C&&C(),Ke(e,A,3,[B])}:b=Ge,n&&a){const G=b;b=()=>Yn(G())}let C,B=G=>{C=Q.onStop=()=>{Ln(G,A,4)}},k;if(Wt)if(B=Ge,n?t&&Ke(n,A,3,[b(),f?[]:void 0,B]):b(),r==="sync"){const G=tc();k=G.__watcherHandles||(G.__watcherHandles=[])}else return Ge;let R=f?new Array(e.length).fill(ir):ir;const _=()=>{if(Q.active)if(n){const G=Q.run();(a||g||(f?G.some((se,we)=>yr(se,R[we])):yr(G,R)))&&(C&&C(),Ke(n,A,3,[G,R===ir?void 0:f&&R[0]===ir?[]:R,B]),R=G)}else Q.run()};_.allowRecurse=!!n;let q;r==="sync"?q=_:r==="post"?q=()=>De(_,A&&A.suspense):(_.pre=!0,A&&(_.id=A.uid),q=()=>qo(_));const Q=new So(b,q);n?t?_():R=Q.run():r==="post"?De(Q.run.bind(Q),A&&A.suspense):Q.run();const $=()=>{Q.stop(),A&&A.scope&&wo(A.scope.effects,Q)};return k&&k.push($),$}function rd(e,n,t){const a=this.proxy,r=Ee(e)?e.includes(".")?Pi(a,e):()=>a[e]:e.bind(a,a);let l;re(n)?l=n:(l=n.handler,t=n);const u=Be;st(this);const A=Oi(r,l.bind(a),t);return u?st(u):Hn(),A}function Pi(e,n){const t=n.split(".");return()=>{let a=e;for(let r=0;r<t.length&&a;r++)a=a[t[r]];return a}}function Yn(e,n){if(!he(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Oe(e))Yn(e.value,n);else if(te(e))for(let t=0;t<e.length;t++)Yn(e[t],n);else if(li(e)||at(e))e.forEach(t=>{Yn(t,n)});else if(di(e))for(const t in e)Yn(e[t],n);return e}function od(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{e.isMounted=!0}),Mi(()=>{e.isUnmounting=!0}),e}const Ne=[Function,Array],ad={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},setup(e,{slots:n}){const t=Qd(),a=od();let r;return()=>{const l=n.default&&zi(n.default(),!0);if(!l||!l.length)return;let u=l[0];if(l.length>1){for(const _ of l)if(_.type!==en){u=_;break}}const A=ue(e),{mode:b}=A;if(a.isLeaving)return Jr(u);const g=La(u);if(!g)return Jr(u);const f=po(g,A,a,t);co(g,f);const C=t.subTree,B=C&&La(C);let k=!1;const{getTransitionKey:R}=g.type;if(R){const _=R();r===void 0?r=_:_!==r&&(r=_,k=!0)}if(B&&B.type!==en&&(!Un(g,B)||k)){const _=po(B,A,a,t);if(co(B,_),b==="out-in")return a.isLeaving=!0,_.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&t.update()},Jr(u);b==="in-out"&&g.type!==en&&(_.delayLeave=(q,Q,$)=>{const G=Ri(a,B);G[String(B.key)]=B,q._leaveCb=()=>{Q(),q._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=$})}return u}}},id=ad;function Ri(e,n){const{leavingVNodes:t}=e;let a=t.get(n.type);return a||(a=Object.create(null),t.set(n.type,a)),a}function po(e,n,t,a){const{appear:r,mode:l,persisted:u=!1,onBeforeEnter:A,onEnter:b,onAfterEnter:g,onEnterCancelled:f,onBeforeLeave:C,onLeave:B,onAfterLeave:k,onLeaveCancelled:R,onBeforeAppear:_,onAppear:q,onAfterAppear:Q,onAppearCancelled:$}=n,G=String(e.key),se=Ri(t,e),we=(K,me)=>{K&&Ke(K,a,9,me)},yn=(K,me)=>{const fe=me[1];we(K,me),te(K)?K.every(ve=>ve.length<=1)&&fe():K.length<=1&&fe()},nn={mode:l,persisted:u,beforeEnter(K){let me=A;if(!t.isMounted)if(r)me=_||A;else return;K._leaveCb&&K._leaveCb(!0);const fe=se[G];fe&&Un(e,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),we(me,[K])},enter(K){let me=b,fe=g,ve=f;if(!t.isMounted)if(r)me=q||b,fe=Q||g,ve=$||f;else return;let Pe=!1;const Qe=K._enterCb=xn=>{Pe||(Pe=!0,xn?we(ve,[K]):we(fe,[K]),nn.delayedLeave&&nn.delayedLeave(),K._enterCb=void 0)};me?yn(me,[K,Qe]):Qe()},leave(K,me){const fe=String(e.key);if(K._enterCb&&K._enterCb(!0),t.isUnmounting)return me();we(C,[K]);let ve=!1;const Pe=K._leaveCb=Qe=>{ve||(ve=!0,me(),Qe?we(R,[K]):we(k,[K]),K._leaveCb=void 0,se[fe]===e&&delete se[fe])};se[fe]=e,B?yn(B,[K,Pe]):Pe()},clone(K){return po(K,n,t,a)}};return nn}function Jr(e){if(_r(e))return e=On(e),e.children=null,e}function La(e){return _r(e)?e.children?e.children[0]:void 0:e}function co(e,n){e.shapeFlag&6&&e.component?co(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function zi(e,n=!1,t){let a=[],r=0;for(let l=0;l<e.length;l++){let u=e[l];const A=t==null?u.key:String(t)+String(u.key!=null?u.key:l);u.type===We?(u.patchFlag&128&&r++,a=a.concat(zi(u.children,n,A))):(n||u.type!==en)&&a.push(A!=null?On(u,{key:A}):u)}if(r>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}const fr=e=>!!e.type.__asyncLoader,_r=e=>e.type.__isKeepAlive;function ld(e,n){qi(e,"a",n)}function sd(e,n){qi(e,"da",n)}function qi(e,n,t=Be){const a=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Lr(n,a,t),t){let r=t.parent;for(;r&&r.parent;)_r(r.parent.vnode)&&pd(a,n,t,r),r=r.parent}}function pd(e,n,t,a){const r=Lr(n,e,a,!0);ji(()=>{wo(a[n],r)},t)}function Lr(e,n,t=Be,a=!1){if(t){const r=t[e]||(t[e]=[]),l=n.__weh||(n.__weh=(...u)=>{if(t.isUnmounted)return;dt(),st(t);const A=Ke(n,t,e,u);return Hn(),ct(),A});return a?r.unshift(l):r.push(l),l}}const vn=e=>(n,t=Be)=>(!Wt||e==="sp")&&Lr(e,(...a)=>n(...a),t),dd=vn("bm"),Di=vn("m"),cd=vn("bu"),ud=vn("u"),Mi=vn("bum"),ji=vn("um"),fd=vn("sp"),Ad=vn("rtg"),yd=vn("rtc");function hd(e,n=Be){Lr("ec",e,n)}function et(e,n){const t=Ue;if(t===null)return e;const a=Pr(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[u,A,b,g=Ae]=n[l];u&&(re(u)&&(u={mounted:u,updated:u}),u.deep&&Yn(A),r.push({dir:u,instance:a,value:A,oldValue:void 0,arg:b,modifiers:g}))}return e}function Rn(e,n,t,a){const r=e.dirs,l=n&&n.dirs;for(let u=0;u<r.length;u++){const A=r[u];l&&(A.oldValue=l[u].value);let b=A.dir[a];b&&(dt(),Ke(b,t,8,[e.el,A,e,n]),ct())}}const Ui="components";function md(e,n){return gd(Ui,e,!0,n)||e}const bd=Symbol();function gd(e,n,t=!0,a=!1){const r=Ue||Be;if(r){const l=r.type;if(e===Ui){const A=$d(l,!1);if(A&&(A===n||A===An(n)||A===kr(An(n))))return l}const u=Ta(r[e]||l[e],n)||Ta(r.appContext[e],n);return!u&&a?l:u}}function Ta(e,n){return e&&(e[n]||e[An(n)]||e[kr(An(n))])}function vd(e,n,t,a){let r;const l=t&&t[a];if(te(e)||Ee(e)){r=new Array(e.length);for(let u=0,A=e.length;u<A;u++)r[u]=n(e[u],u,void 0,l&&l[u])}else if(typeof e=="number"){r=new Array(e);for(let u=0;u<e;u++)r[u]=n(u+1,u,void 0,l&&l[u])}else if(he(e))if(e[Symbol.iterator])r=Array.from(e,(u,A)=>n(u,A,void 0,l&&l[A]));else{const u=Object.keys(e);r=new Array(u.length);for(let A=0,b=u.length;A<b;A++){const g=u[A];r[A]=n(e[g],g,A,l&&l[A])}}else r=[];return t&&(t[a]=r),r}const uo=e=>e?Xi(e)?Pr(e)||e.proxy:uo(e.parent):null,jt=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>uo(e.parent),$root:e=>uo(e.root),$emit:e=>e.emit,$options:e=>Do(e),$forceUpdate:e=>e.f||(e.f=()=>qo(e.update)),$nextTick:e=>e.n||(e.n=Np.bind(e.proxy)),$watch:e=>rd.bind(e)}),Xr=(e,n)=>e!==Ae&&!e.__isScriptSetup&&ie(e,n),xd={get({_:e},n){const{ctx:t,setupState:a,data:r,props:l,accessCache:u,type:A,appContext:b}=e;let g;if(n[0]!=="$"){const k=u[n];if(k!==void 0)switch(k){case 1:return a[n];case 2:return r[n];case 4:return t[n];case 3:return l[n]}else{if(Xr(a,n))return u[n]=1,a[n];if(r!==Ae&&ie(r,n))return u[n]=2,r[n];if((g=e.propsOptions[0])&&ie(g,n))return u[n]=3,l[n];if(t!==Ae&&ie(t,n))return u[n]=4,t[n];fo&&(u[n]=0)}}const f=jt[n];let C,B;if(f)return n==="$attrs"&&Fe(e,"get",n),f(e);if((C=A.__cssModules)&&(C=C[n]))return C;if(t!==Ae&&ie(t,n))return u[n]=4,t[n];if(B=b.config.globalProperties,ie(B,n))return B[n]},set({_:e},n,t){const{data:a,setupState:r,ctx:l}=e;return Xr(r,n)?(r[n]=t,!0):a!==Ae&&ie(a,n)?(a[n]=t,!0):ie(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(l[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:r,propsOptions:l}},u){let A;return!!t[u]||e!==Ae&&ie(e,u)||Xr(n,u)||(A=l[0])&&ie(A,u)||ie(a,u)||ie(jt,u)||ie(r.config.globalProperties,u)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ie(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let fo=!0;function Ed(e){const n=Do(e),t=e.proxy,a=e.ctx;fo=!1,n.beforeCreate&&Oa(n.beforeCreate,e,"bc");const{data:r,computed:l,methods:u,watch:A,provide:b,inject:g,created:f,beforeMount:C,mounted:B,beforeUpdate:k,updated:R,activated:_,deactivated:q,beforeDestroy:Q,beforeUnmount:$,destroyed:G,unmounted:se,render:we,renderTracked:yn,renderTriggered:nn,errorCaptured:K,serverPrefetch:me,expose:fe,inheritAttrs:ve,components:Pe,directives:Qe,filters:xn}=n;if(g&&wd(g,a,null,e.appContext.config.unwrapInjectedRef),u)for(const F in u){const de=u[F];re(de)&&(a[F]=de.bind(t))}if(r){const F=r.call(t,t);he(F)&&(e.data=To(F))}if(fo=!0,l)for(const F in l){const de=l[F],Me=re(de)?de.bind(t,t):re(de.get)?de.get.bind(t,t):Ge,En=!re(de)&&re(de.set)?de.set.bind(t):Ge,tn=ec({get:Me,set:En});Object.defineProperty(a,F,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Re=>tn.value=Re})}if(A)for(const F in A)Fi(A[F],a,t,F);if(b){const F=re(b)?b.call(t):b;Reflect.ownKeys(F).forEach(de=>{td(de,F[de])})}f&&Oa(f,e,"c");function ge(F,de){te(de)?de.forEach(Me=>F(Me.bind(t))):de&&F(de.bind(t))}if(ge(dd,C),ge(Di,B),ge(cd,k),ge(ud,R),ge(ld,_),ge(sd,q),ge(hd,K),ge(yd,yn),ge(Ad,nn),ge(Mi,$),ge(ji,se),ge(fd,me),te(fe))if(fe.length){const F=e.exposed||(e.exposed={});fe.forEach(de=>{Object.defineProperty(F,de,{get:()=>t[de],set:Me=>t[de]=Me})})}else e.exposed||(e.exposed={});we&&e.render===Ge&&(e.render=we),ve!=null&&(e.inheritAttrs=ve),Pe&&(e.components=Pe),Qe&&(e.directives=Qe)}function wd(e,n,t=Ge,a=!1){te(e)&&(e=Ao(e));for(const r in e){const l=e[r];let u;he(l)?"default"in l?u=ur(l.from||r,l.default,!0):u=ur(l.from||r):u=ur(l),Oe(u)&&a?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:A=>u.value=A}):n[r]=u}}function Oa(e,n,t){Ke(te(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Fi(e,n,t,a){const r=a.includes(".")?Pi(t,a):()=>t[a];if(Ee(e)){const l=n[e];re(l)&&Zr(r,l)}else if(re(e))Zr(r,e.bind(t));else if(he(e))if(te(e))e.forEach(l=>Fi(l,n,t,a));else{const l=re(e.handler)?e.handler.bind(t):n[e.handler];re(l)&&Zr(r,l,e)}}function Do(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:u}}=e.appContext,A=l.get(n);let b;return A?b=A:!r.length&&!t&&!a?b=n:(b={},r.length&&r.forEach(g=>gr(b,g,u,!0)),gr(b,n,u)),he(n)&&l.set(n,b),b}function gr(e,n,t,a=!1){const{mixins:r,extends:l}=n;l&&gr(e,l,t,!0),r&&r.forEach(u=>gr(e,u,t,!0));for(const u in n)if(!(a&&u==="expose")){const A=Cd[u]||t&&t[u];e[u]=A?A(e[u],n[u]):n[u]}return e}const Cd={data:Pa,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Dn,directives:Dn,watch:Bd,provide:Pa,inject:kd};function Pa(e,n){return n?e?function(){return _e(re(e)?e.call(this,this):e,re(n)?n.call(this,this):n)}:n:e}function kd(e,n){return Dn(Ao(e),Ao(n))}function Ao(e){if(te(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Te(e,n){return e?[...new Set([].concat(e,n))]:n}function Dn(e,n){return e?_e(_e(Object.create(null),e),n):n}function Bd(e,n){if(!e)return n;if(!n)return e;const t=_e(Object.create(null),e);for(const a in n)t[a]=Te(e[a],n[a]);return t}function Sd(e,n,t,a=!1){const r={},l={};hr(l,Or,1),e.propsDefaults=Object.create(null),Yi(e,n,r,l);for(const u in e.propsOptions[0])u in r||(r[u]=void 0);t?e.props=a?r:zp(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function Id(e,n,t,a){const{props:r,attrs:l,vnode:{patchFlag:u}}=e,A=ue(r),[b]=e.propsOptions;let g=!1;if((a||u>0)&&!(u&16)){if(u&8){const f=e.vnode.dynamicProps;for(let C=0;C<f.length;C++){let B=f[C];if(Ir(e.emitsOptions,B))continue;const k=n[B];if(b)if(ie(l,B))k!==l[B]&&(l[B]=k,g=!0);else{const R=An(B);r[R]=yo(b,A,R,k,e,!1)}else k!==l[B]&&(l[B]=k,g=!0)}}}else{Yi(e,n,r,l)&&(g=!0);let f;for(const C in A)(!n||!ie(n,C)&&((f=pt(C))===C||!ie(n,f)))&&(b?t&&(t[C]!==void 0||t[f]!==void 0)&&(r[C]=yo(b,A,C,void 0,e,!0)):delete r[C]);if(l!==A)for(const C in l)(!n||!ie(n,C))&&(delete l[C],g=!0)}g&&gn(e,"set","$attrs")}function Yi(e,n,t,a){const[r,l]=e.propsOptions;let u=!1,A;if(n)for(let b in n){if(dr(b))continue;const g=n[b];let f;r&&ie(r,f=An(b))?!l||!l.includes(f)?t[f]=g:(A||(A={}))[f]=g:Ir(e.emitsOptions,b)||(!(b in a)||g!==a[b])&&(a[b]=g,u=!0)}if(l){const b=ue(t),g=A||Ae;for(let f=0;f<l.length;f++){const C=l[f];t[C]=yo(r,b,C,g[C],e,!ie(g,C))}}return u}function yo(e,n,t,a,r,l){const u=e[t];if(u!=null){const A=ie(u,"default");if(A&&a===void 0){const b=u.default;if(u.type!==Function&&re(b)){const{propsDefaults:g}=r;t in g?a=g[t]:(st(r),a=g[t]=b.call(null,n),Hn())}else a=b}u[0]&&(l&&!A?a=!1:u[1]&&(a===""||a===pt(t))&&(a=!0))}return a}function Ni(e,n,t=!1){const a=n.propsCache,r=a.get(e);if(r)return r;const l=e.props,u={},A=[];let b=!1;if(!re(e)){const f=C=>{b=!0;const[B,k]=Ni(C,n,!0);_e(u,B),k&&A.push(...k)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!l&&!b)return he(e)&&a.set(e,ot),ot;if(te(l))for(let f=0;f<l.length;f++){const C=An(l[f]);Ra(C)&&(u[C]=Ae)}else if(l)for(const f in l){const C=An(f);if(Ra(C)){const B=l[f],k=u[C]=te(B)||re(B)?{type:B}:Object.assign({},B);if(k){const R=Da(Boolean,k.type),_=Da(String,k.type);k[0]=R>-1,k[1]=_<0||R<_,(R>-1||ie(k,"default"))&&A.push(C)}}}const g=[u,A];return he(e)&&a.set(e,g),g}function Ra(e){return e[0]!=="$"}function za(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function qa(e,n){return za(e)===za(n)}function Da(e,n){return te(n)?n.findIndex(t=>qa(t,e)):re(n)&&qa(n,e)?0:-1}const Hi=e=>e[0]==="_"||e==="$stable",Mo=e=>te(e)?e.map(sn):[sn(e)],_d=(e,n,t)=>{if(n._n)return n;const a=Zp((...r)=>Mo(n(...r)),t);return a._c=!1,a},Wi=(e,n,t)=>{const a=e._ctx;for(const r in e){if(Hi(r))continue;const l=e[r];if(re(l))n[r]=_d(r,l,a);else if(l!=null){const u=Mo(l);n[r]=()=>u}}},Ki=(e,n)=>{const t=Mo(n);e.slots.default=()=>t},Ld=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ue(n),hr(n,"_",t)):Wi(n,e.slots={})}else e.slots={},n&&Ki(e,n);hr(e.slots,Or,1)},Td=(e,n,t)=>{const{vnode:a,slots:r}=e;let l=!0,u=Ae;if(a.shapeFlag&32){const A=n._;A?t&&A===1?l=!1:(_e(r,n),!t&&A===1&&delete r._):(l=!n.$stable,Wi(n,r)),u=n}else n&&(Ki(e,n),u={default:1});if(l)for(const A in r)!Hi(A)&&!(A in u)&&delete r[A]};function Qi(){return{app:null,config:{isNativeTag:np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Od=0;function Pd(e,n){return function(a,r=null){re(a)||(a=Object.assign({},a)),r!=null&&!he(r)&&(r=null);const l=Qi(),u=new Set;let A=!1;const b=l.app={_uid:Od++,_component:a,_props:r,_container:null,_context:l,_instance:null,version:rc,get config(){return l.config},set config(g){},use(g,...f){return u.has(g)||(g&&re(g.install)?(u.add(g),g.install(b,...f)):re(g)&&(u.add(g),g(b,...f))),b},mixin(g){return l.mixins.includes(g)||l.mixins.push(g),b},component(g,f){return f?(l.components[g]=f,b):l.components[g]},directive(g,f){return f?(l.directives[g]=f,b):l.directives[g]},mount(g,f,C){if(!A){const B=fn(a,r);return B.appContext=l,f&&n?n(B,g):e(B,g,C),A=!0,b._container=g,g.__vue_app__=b,Pr(B.component)||B.component.proxy}},unmount(){A&&(e(null,b._container),delete b._container.__vue_app__)},provide(g,f){return l.provides[g]=f,b}};return b}}function ho(e,n,t,a,r=!1){if(te(e)){e.forEach((B,k)=>ho(B,n&&(te(n)?n[k]:n),t,a,r));return}if(fr(a)&&!r)return;const l=a.shapeFlag&4?Pr(a.component)||a.component.proxy:a.el,u=r?null:l,{i:A,r:b}=e,g=n&&n.r,f=A.refs===Ae?A.refs={}:A.refs,C=A.setupState;if(g!=null&&g!==b&&(Ee(g)?(f[g]=null,ie(C,g)&&(C[g]=null)):Oe(g)&&(g.value=null)),re(b))Ln(b,A,12,[u,f]);else{const B=Ee(b),k=Oe(b);if(B||k){const R=()=>{if(e.f){const _=B?ie(C,b)?C[b]:f[b]:b.value;r?te(_)&&wo(_,l):te(_)?_.includes(l)||_.push(l):B?(f[b]=[l],ie(C,b)&&(C[b]=f[b])):(b.value=[l],e.k&&(f[e.k]=b.value))}else B?(f[b]=u,ie(C,b)&&(C[b]=u)):k&&(b.value=u,e.k&&(f[e.k]=u))};u?(R.id=-1,De(R,t)):R()}}}const De=nd;function Rd(e){return zd(e)}function zd(e,n){const t=lp();t.__VUE__=!0;const{insert:a,remove:r,patchProp:l,createElement:u,createText:A,createComment:b,setText:g,setElementText:f,parentNode:C,nextSibling:B,setScopeId:k=Ge,insertStaticContent:R}=e,_=(v,E,I,T=null,L=null,D=null,Y=!1,z=null,M=!!E.dynamicChildren)=>{if(v===E)return;v&&!Un(v,E)&&(T=rn(v),Re(v,L,D,!0),v=null),E.patchFlag===-2&&(M=!1,E.dynamicChildren=null);const{type:P,ref:Z,shapeFlag:W}=E;switch(P){case Tr:q(v,E,I,T);break;case en:Q(v,E,I,T);break;case $r:v==null&&$(E,I,T,Y);break;case We:Pe(v,E,I,T,L,D,Y,z,M);break;default:W&1?we(v,E,I,T,L,D,Y,z,M):W&6?Qe(v,E,I,T,L,D,Y,z,M):(W&64||W&128)&&P.process(v,E,I,T,L,D,Y,z,M,wn)}Z!=null&&L&&ho(Z,v&&v.ref,D,E||v,!E)},q=(v,E,I,T)=>{if(v==null)a(E.el=A(E.children),I,T);else{const L=E.el=v.el;E.children!==v.children&&g(L,E.children)}},Q=(v,E,I,T)=>{v==null?a(E.el=b(E.children||""),I,T):E.el=v.el},$=(v,E,I,T)=>{[v.el,v.anchor]=R(v.children,E,I,T,v.el,v.anchor)},G=({el:v,anchor:E},I,T)=>{let L;for(;v&&v!==E;)L=B(v),a(v,I,T),v=L;a(E,I,T)},se=({el:v,anchor:E})=>{let I;for(;v&&v!==E;)I=B(v),r(v),v=I;r(E)},we=(v,E,I,T,L,D,Y,z,M)=>{Y=Y||E.type==="svg",v==null?yn(E,I,T,L,D,Y,z,M):me(v,E,L,D,Y,z,M)},yn=(v,E,I,T,L,D,Y,z)=>{let M,P;const{type:Z,props:W,shapeFlag:J,transition:ee,dirs:oe}=v;if(M=v.el=u(v.type,D,W&&W.is,W),J&8?f(M,v.children):J&16&&K(v.children,M,null,T,L,D&&Z!=="foreignObject",Y,z),oe&&Rn(v,null,T,"created"),W){for(const pe in W)pe!=="value"&&!dr(pe)&&l(M,pe,null,W[pe],D,v.children,T,L,Se);"value"in W&&l(M,"value",null,W.value),(P=W.onVnodeBeforeMount)&&an(P,T,v)}nn(M,v,v.scopeId,Y,T),oe&&Rn(v,null,T,"beforeMount");const ce=(!L||L&&!L.pendingBranch)&&ee&&!ee.persisted;ce&&ee.beforeEnter(M),a(M,E,I),((P=W&&W.onVnodeMounted)||ce||oe)&&De(()=>{P&&an(P,T,v),ce&&ee.enter(M),oe&&Rn(v,null,T,"mounted")},L)},nn=(v,E,I,T,L)=>{if(I&&k(v,I),T)for(let D=0;D<T.length;D++)k(v,T[D]);if(L){let D=L.subTree;if(E===D){const Y=L.vnode;nn(v,Y,Y.scopeId,Y.slotScopeIds,L.parent)}}},K=(v,E,I,T,L,D,Y,z,M=0)=>{for(let P=M;P<v.length;P++){const Z=v[P]=z?In(v[P]):sn(v[P]);_(null,Z,E,I,T,L,D,Y,z)}},me=(v,E,I,T,L,D,Y)=>{const z=E.el=v.el;let{patchFlag:M,dynamicChildren:P,dirs:Z}=E;M|=v.patchFlag&16;const W=v.props||Ae,J=E.props||Ae;let ee;I&&zn(I,!1),(ee=J.onVnodeBeforeUpdate)&&an(ee,I,E,v),Z&&Rn(E,v,I,"beforeUpdate"),I&&zn(I,!0);const oe=L&&E.type!=="foreignObject";if(P?fe(v.dynamicChildren,P,z,I,T,oe,D):Y||de(v,E,z,null,I,T,oe,D,!1),M>0){if(M&16)ve(z,E,W,J,I,T,L);else if(M&2&&W.class!==J.class&&l(z,"class",null,J.class,L),M&4&&l(z,"style",W.style,J.style,L),M&8){const ce=E.dynamicProps;for(let pe=0;pe<ce.length;pe++){const ye=ce[pe],S=W[ye],je=J[ye];(je!==S||ye==="value")&&l(z,ye,S,je,L,v.children,I,T,Se)}}M&1&&v.children!==E.children&&f(z,E.children)}else!Y&&P==null&&ve(z,E,W,J,I,T,L);((ee=J.onVnodeUpdated)||Z)&&De(()=>{ee&&an(ee,I,E,v),Z&&Rn(E,v,I,"updated")},T)},fe=(v,E,I,T,L,D,Y)=>{for(let z=0;z<E.length;z++){const M=v[z],P=E[z],Z=M.el&&(M.type===We||!Un(M,P)||M.shapeFlag&70)?C(M.el):I;_(M,P,Z,null,T,L,D,Y,!0)}},ve=(v,E,I,T,L,D,Y)=>{if(I!==T){if(I!==Ae)for(const z in I)!dr(z)&&!(z in T)&&l(v,z,I[z],null,Y,E.children,L,D,Se);for(const z in T){if(dr(z))continue;const M=T[z],P=I[z];M!==P&&z!=="value"&&l(v,z,P,M,Y,E.children,L,D,Se)}"value"in T&&l(v,"value",I.value,T.value)}},Pe=(v,E,I,T,L,D,Y,z,M)=>{const P=E.el=v?v.el:A(""),Z=E.anchor=v?v.anchor:A("");let{patchFlag:W,dynamicChildren:J,slotScopeIds:ee}=E;ee&&(z=z?z.concat(ee):ee),v==null?(a(P,I,T),a(Z,I,T),K(E.children,I,Z,L,D,Y,z,M)):W>0&&W&64&&J&&v.dynamicChildren?(fe(v.dynamicChildren,J,I,L,D,Y,z),(E.key!=null||L&&E===L.subTree)&&Vi(v,E,!0)):de(v,E,I,Z,L,D,Y,z,M)},Qe=(v,E,I,T,L,D,Y,z,M)=>{E.slotScopeIds=z,v==null?E.shapeFlag&512?L.ctx.activate(E,I,T,Y,M):xn(E,I,T,L,D,Y,M):Kt(v,E,M)},xn=(v,E,I,T,L,D,Y)=>{const z=v.component=Kd(v,T,L);if(_r(v)&&(z.ctx.renderer=wn),Vd(z),z.asyncDep){if(L&&L.registerDep(z,ge),!v.el){const M=z.subTree=fn(en);Q(null,M,E,I)}return}ge(z,v,E,I,L,D,Y)},Kt=(v,E,I)=>{const T=E.component=v.component;if($p(v,E,I))if(T.asyncDep&&!T.asyncResolved){F(T,E,I);return}else T.next=E,Wp(T.update),T.update();else E.el=v.el,T.vnode=E},ge=(v,E,I,T,L,D,Y)=>{const z=()=>{if(v.isMounted){let{next:Z,bu:W,u:J,parent:ee,vnode:oe}=v,ce=Z,pe;zn(v,!1),Z?(Z.el=oe.el,F(v,Z,Y)):Z=oe,W&&cr(W),(pe=Z.props&&Z.props.onVnodeBeforeUpdate)&&an(pe,ee,Z,oe),zn(v,!0);const ye=Vr(v),S=v.subTree;v.subTree=ye,_(S,ye,C(S.el),rn(S),v,L,D),Z.el=ye.el,ce===null&&Gp(v,ye.el),J&&De(J,L),(pe=Z.props&&Z.props.onVnodeUpdated)&&De(()=>an(pe,ee,Z,oe),L)}else{let Z;const{el:W,props:J}=E,{bm:ee,m:oe,parent:ce}=v,pe=fr(E);if(zn(v,!1),ee&&cr(ee),!pe&&(Z=J&&J.onVnodeBeforeMount)&&an(Z,ce,E),zn(v,!0),W&&Qn){const ye=()=>{v.subTree=Vr(v),Qn(W,v.subTree,v,L,null)};pe?E.type.__asyncLoader().then(()=>!v.isUnmounted&&ye()):ye()}else{const ye=v.subTree=Vr(v);_(null,ye,I,T,v,L,D),E.el=ye.el}if(oe&&De(oe,L),!pe&&(Z=J&&J.onVnodeMounted)){const ye=E;De(()=>an(Z,ce,ye),L)}(E.shapeFlag&256||ce&&fr(ce.vnode)&&ce.vnode.shapeFlag&256)&&v.a&&De(v.a,L),v.isMounted=!0,E=I=T=null}},M=v.effect=new So(z,()=>qo(P),v.scope),P=v.update=()=>M.run();P.id=v.uid,zn(v,!0),P()},F=(v,E,I)=>{E.component=v;const T=v.vnode.props;v.vnode=E,v.next=null,Id(v,E.props,T,I),Td(v,E.children,I),dt(),Ia(),ct()},de=(v,E,I,T,L,D,Y,z,M=!1)=>{const P=v&&v.children,Z=v?v.shapeFlag:0,W=E.children,{patchFlag:J,shapeFlag:ee}=E;if(J>0){if(J&128){En(P,W,I,T,L,D,Y,z,M);return}else if(J&256){Me(P,W,I,T,L,D,Y,z,M);return}}ee&8?(Z&16&&Se(P,L,D),W!==P&&f(I,W)):Z&16?ee&16?En(P,W,I,T,L,D,Y,z,M):Se(P,L,D,!0):(Z&8&&f(I,""),ee&16&&K(W,I,T,L,D,Y,z,M))},Me=(v,E,I,T,L,D,Y,z,M)=>{v=v||ot,E=E||ot;const P=v.length,Z=E.length,W=Math.min(P,Z);let J;for(J=0;J<W;J++){const ee=E[J]=M?In(E[J]):sn(E[J]);_(v[J],ee,I,null,L,D,Y,z,M)}P>Z?Se(v,L,D,!0,!1,W):K(E,I,T,L,D,Y,z,M,W)},En=(v,E,I,T,L,D,Y,z,M)=>{let P=0;const Z=E.length;let W=v.length-1,J=Z-1;for(;P<=W&&P<=J;){const ee=v[P],oe=E[P]=M?In(E[P]):sn(E[P]);if(Un(ee,oe))_(ee,oe,I,null,L,D,Y,z,M);else break;P++}for(;P<=W&&P<=J;){const ee=v[W],oe=E[J]=M?In(E[J]):sn(E[J]);if(Un(ee,oe))_(ee,oe,I,null,L,D,Y,z,M);else break;W--,J--}if(P>W){if(P<=J){const ee=J+1,oe=ee<Z?E[ee].el:T;for(;P<=J;)_(null,E[P]=M?In(E[P]):sn(E[P]),I,oe,L,D,Y,z,M),P++}}else if(P>J)for(;P<=W;)Re(v[P],L,D,!0),P++;else{const ee=P,oe=P,ce=new Map;for(P=oe;P<=J;P++){const Le=E[P]=M?In(E[P]):sn(E[P]);Le.key!=null&&ce.set(Le.key,P)}let pe,ye=0;const S=J-oe+1;let je=!1,ft=0;const Cn=new Array(S);for(P=0;P<S;P++)Cn[P]=0;for(P=ee;P<=W;P++){const Le=v[P];if(ye>=S){Re(Le,L,D,!0);continue}let ze;if(Le.key!=null)ze=ce.get(Le.key);else for(pe=oe;pe<=J;pe++)if(Cn[pe-oe]===0&&Un(Le,E[pe])){ze=pe;break}ze===void 0?Re(Le,L,D,!0):(Cn[ze-oe]=P+1,ze>=ft?ft=ze:je=!0,_(Le,E[ze],I,null,L,D,Y,z,M),ye++)}const le=je?qd(Cn):ot;for(pe=le.length-1,P=S-1;P>=0;P--){const Le=oe+P,ze=E[Le],Vn=Le+1<Z?E[Le+1].el:T;Cn[P]===0?_(null,ze,I,Vn,L,D,Y,z,M):je&&(pe<0||P!==le[pe]?tn(ze,I,Vn,2):pe--)}}},tn=(v,E,I,T,L=null)=>{const{el:D,type:Y,transition:z,children:M,shapeFlag:P}=v;if(P&6){tn(v.component.subTree,E,I,T);return}if(P&128){v.suspense.move(E,I,T);return}if(P&64){Y.move(v,E,I,wn);return}if(Y===We){a(D,E,I);for(let W=0;W<M.length;W++)tn(M[W],E,I,T);a(v.anchor,E,I);return}if(Y===$r){G(v,E,I);return}if(T!==2&&P&1&&z)if(T===0)z.beforeEnter(D),a(D,E,I),De(()=>z.enter(D),L);else{const{leave:W,delayLeave:J,afterLeave:ee}=z,oe=()=>a(D,E,I),ce=()=>{W(D,()=>{oe(),ee&&ee()})};J?J(D,oe,ce):ce()}else a(D,E,I)},Re=(v,E,I,T=!1,L=!1)=>{const{type:D,props:Y,ref:z,children:M,dynamicChildren:P,shapeFlag:Z,patchFlag:W,dirs:J}=v;if(z!=null&&ho(z,null,I,v,!0),Z&256){E.ctx.deactivate(v);return}const ee=Z&1&&J,oe=!fr(v);let ce;if(oe&&(ce=Y&&Y.onVnodeBeforeUnmount)&&an(ce,E,v),Z&6)Kn(v.component,I,T);else{if(Z&128){v.suspense.unmount(I,T);return}ee&&Rn(v,null,E,"beforeUnmount"),Z&64?v.type.remove(v,E,I,L,wn,T):P&&(D!==We||W>0&&W&64)?Se(P,E,I,!1,!0):(D===We&&W&384||!L&&Z&16)&&Se(M,E,I),T&&Wn(v)}(oe&&(ce=Y&&Y.onVnodeUnmounted)||ee)&&De(()=>{ce&&an(ce,E,v),ee&&Rn(v,null,E,"unmounted")},I)},Wn=v=>{const{type:E,el:I,anchor:T,transition:L}=v;if(E===We){Ve(I,T);return}if(E===$r){se(v);return}const D=()=>{r(I),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:Y,delayLeave:z}=L,M=()=>Y(I,D);z?z(v.el,D,M):M()}else D()},Ve=(v,E)=>{let I;for(;v!==E;)I=B(v),r(v),v=I;r(E)},Kn=(v,E,I)=>{const{bum:T,scope:L,update:D,subTree:Y,um:z}=v;T&&cr(T),L.stop(),D&&(D.active=!1,Re(Y,v,E,I)),z&&De(z,E),De(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Se=(v,E,I,T=!1,L=!1,D=0)=>{for(let Y=D;Y<v.length;Y++)Re(v[Y],E,I,T,L)},rn=v=>v.shapeFlag&6?rn(v.component.subTree):v.shapeFlag&128?v.suspense.next():B(v.anchor||v.el),ut=(v,E,I)=>{v==null?E._vnode&&Re(E._vnode,null,null,!0):_(E._vnode||null,v,E,null,null,null,I),Ia(),Ii(),E._vnode=v},wn={p:_,um:Re,m:tn,r:Wn,mt:xn,mc:K,pc:de,pbc:fe,n:rn,o:e};let Ze,Qn;return n&&([Ze,Qn]=n(wn)),{render:ut,hydrate:Ze,createApp:Pd(ut,Ze)}}function zn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Vi(e,n,t=!1){const a=e.children,r=n.children;if(te(a)&&te(r))for(let l=0;l<a.length;l++){const u=a[l];let A=r[l];A.shapeFlag&1&&!A.dynamicChildren&&((A.patchFlag<=0||A.patchFlag===32)&&(A=r[l]=In(r[l]),A.el=u.el),t||Vi(u,A)),A.type===Tr&&(A.el=u.el)}}function qd(e){const n=e.slice(),t=[0];let a,r,l,u,A;const b=e.length;for(a=0;a<b;a++){const g=e[a];if(g!==0){if(r=t[t.length-1],e[r]<g){n[a]=r,t.push(a);continue}for(l=0,u=t.length-1;l<u;)A=l+u>>1,e[t[A]]<g?l=A+1:u=A;g<e[t[l]]&&(l>0&&(n[a]=t[l-1]),t[l]=a)}}for(l=t.length,u=t[l-1];l-- >0;)t[l]=u,u=n[u];return t}const Dd=e=>e.__isTeleport,We=Symbol(void 0),Tr=Symbol(void 0),en=Symbol(void 0),$r=Symbol(void 0),Ut=[];let $e=null;function jn(e=!1){Ut.push($e=e?null:[])}function Md(){Ut.pop(),$e=Ut[Ut.length-1]||null}let Ht=1;function Ma(e){Ht+=e}function Zi(e){return e.dynamicChildren=Ht>0?$e||ot:null,Md(),Ht>0&&$e&&$e.push(e),e}function nt(e,n,t,a,r,l){return Zi(X(e,n,t,a,r,l,!0))}function jd(e,n,t,a,r){return Zi(fn(e,n,t,a,r,!0))}function Ud(e){return e?e.__v_isVNode===!0:!1}function Un(e,n){return e.type===n.type&&e.key===n.key}const Or="__vInternal",Ji=({key:e})=>e??null,Ar=({ref:e,ref_key:n,ref_for:t})=>e!=null?Ee(e)||Oe(e)||re(e)?{i:Ue,r:e,k:n,f:!!t}:e:null;function X(e,n=null,t=null,a=0,r=null,l=e===We?0:1,u=!1,A=!1){const b={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ji(n),ref:n&&Ar(n),scopeId:Ti,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ue};return A?(jo(b,t),l&128&&e.normalize(b)):t&&(b.shapeFlag|=Ee(t)?8:16),Ht>0&&!u&&$e&&(b.patchFlag>0||l&6)&&b.patchFlag!==32&&$e.push(b),b}const fn=Fd;function Fd(e,n=null,t=null,a=0,r=null,l=!1){if((!e||e===bd)&&(e=en),Ud(e)){const A=On(e,n,!0);return t&&jo(A,t),Ht>0&&!l&&$e&&(A.shapeFlag&6?$e[$e.indexOf(e)]=A:$e.push(A)),A.patchFlag|=-2,A}if(Gd(e)&&(e=e.__vccOpts),n){n=Yd(n);let{class:A,style:b}=n;A&&!Ee(A)&&(n.class=xo(A)),he(b)&&(Ei(b)&&!te(b)&&(b=_e({},b)),n.style=vo(b))}const u=Ee(e)?1:ed(e)?128:Dd(e)?64:he(e)?4:re(e)?2:0;return X(e,n,t,a,r,u,l,!0)}function Yd(e){return e?Ei(e)||Or in e?_e({},e):e:null}function On(e,n,t=!1){const{props:a,ref:r,patchFlag:l,children:u}=e,A=n?Nd(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:A,key:A&&Ji(A),ref:n&&n.ref?t&&r?te(r)?r.concat(Ar(n)):[r,Ar(n)]:Ar(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:u,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==We?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&On(e.ssContent),ssFallback:e.ssFallback&&On(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function dn(e=" ",n=0){return fn(Tr,null,e,n)}function Gr(e="",n=!1){return n?(jn(),jd(en,null,e)):fn(en,null,e)}function sn(e){return e==null||typeof e=="boolean"?fn(en):te(e)?fn(We,null,e.slice()):typeof e=="object"?In(e):fn(Tr,null,String(e))}function In(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:On(e)}function jo(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(te(n))t=16;else if(typeof n=="object")if(a&65){const r=n.default;r&&(r._c&&(r._d=!1),jo(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(Or in n)?n._ctx=Ue:r===3&&Ue&&(Ue.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else re(n)?(n={default:n,_ctx:Ue},t=32):(n=String(n),a&64?(t=16,n=[dn(n)]):t=8);e.children=n,e.shapeFlag|=t}function Nd(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const r in a)if(r==="class")n.class!==a.class&&(n.class=xo([n.class,a.class]));else if(r==="style")n.style=vo([n.style,a.style]);else if(Er(r)){const l=n[r],u=a[r];u&&l!==u&&!(te(l)&&l.includes(u))&&(n[r]=l?[].concat(l,u):u)}else r!==""&&(n[r]=a[r])}return n}function an(e,n,t,a=null){Ke(e,n,7,[t,a])}const Hd=Qi();let Wd=0;function Kd(e,n,t){const a=e.type,r=(n?n.appContext:e.appContext)||Hd,l={uid:Wd++,vnode:e,type:a,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ni(a,r),emitsOptions:Li(a,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:a.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Vp.bind(null,l),e.ce&&e.ce(l),l}let Be=null;const Qd=()=>Be||Ue,st=e=>{Be=e,e.scope.on()},Hn=()=>{Be&&Be.scope.off(),Be=null};function Xi(e){return e.vnode.shapeFlag&4}let Wt=!1;function Vd(e,n=!1){Wt=n;const{props:t,children:a}=e.vnode,r=Xi(e);Sd(e,t,r,n),Ld(e,a);const l=r?Zd(e,n):void 0;return Wt=!1,l}function Zd(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=wi(new Proxy(e.ctx,xd));const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Xd(e):null;st(e),dt();const l=Ln(a,e,0,[e.props,r]);if(ct(),Hn(),si(l)){if(l.then(Hn,Hn),n)return l.then(u=>{ja(e,u,n)}).catch(u=>{Sr(u,e,0)});e.asyncDep=l}else ja(e,l,n)}else $i(e,n)}function ja(e,n,t){re(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:he(n)&&(e.setupState=Ci(n)),$i(e,t)}let Ua;function $i(e,n,t){const a=e.type;if(!e.render){if(!n&&Ua&&!a.render){const r=a.template||Do(e).template;if(r){const{isCustomElement:l,compilerOptions:u}=e.appContext.config,{delimiters:A,compilerOptions:b}=a,g=_e(_e({isCustomElement:l,delimiters:A},u),b);a.render=Ua(r,g)}}e.render=a.render||Ge}st(e),dt(),Ed(e),ct(),Hn()}function Jd(e){return new Proxy(e.attrs,{get(n,t){return Fe(e,"get","$attrs"),n[t]}})}function Xd(e){const n=a=>{e.exposed=a||{}};let t;return{get attrs(){return t||(t=Jd(e))},slots:e.slots,emit:e.emit,expose:n}}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ci(wi(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in jt)return jt[t](e)},has(n,t){return t in n||t in jt}}))}function $d(e,n=!0){return re(e)?e.displayName||e.name:e.name||n&&e.__name}function Gd(e){return re(e)&&"__vccOpts"in e}const ec=(e,n)=>Fp(e,n,Wt),nc=Symbol(""),tc=()=>ur(nc),rc="3.2.45",oc="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,Fa=Fn&&Fn.createElement("template"),ac={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const r=n?Fn.createElementNS(oc,e):Fn.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Fn.createTextNode(e),createComment:e=>Fn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Fn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,r,l){const u=t?t.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===l||!(r=r.nextSibling)););else{Fa.innerHTML=a?`<svg>${e}</svg>`:e;const A=Fa.content;if(a){const b=A.firstChild;for(;b.firstChild;)A.appendChild(b.firstChild);A.removeChild(b)}n.insertBefore(A,t)}return[u?u.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function ic(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function lc(e,n,t){const a=e.style,r=Ee(t);if(t&&!r){for(const l in t)mo(a,l,t[l]);if(n&&!Ee(n))for(const l in n)t[l]==null&&mo(a,l,"")}else{const l=a.display;r?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=l)}}const Ya=/\s*!important$/;function mo(e,n,t){if(te(t))t.forEach(a=>mo(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=sc(e,n);Ya.test(t)?e.setProperty(pt(a),t.replace(Ya,""),"important"):e[a]=t}}const Na=["Webkit","Moz","ms"],eo={};function sc(e,n){const t=eo[n];if(t)return t;let a=An(n);if(a!=="filter"&&a in e)return eo[n]=a;a=kr(a);for(let r=0;r<Na.length;r++){const l=Na[r]+a;if(l in e)return eo[n]=l}return n}const Ha="http://www.w3.org/1999/xlink";function pc(e,n,t,a,r){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Ha,n.slice(6,n.length)):e.setAttributeNS(Ha,n,t);else{const l=ep(n);t==null||l&&!ai(t)?e.removeAttribute(n):e.setAttribute(n,l?"":t)}}function dc(e,n,t,a,r,l,u){if(n==="innerHTML"||n==="textContent"){a&&u(a,r,l),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const b=t??"";(e.value!==b||e.tagName==="OPTION")&&(e.value=b),t==null&&e.removeAttribute(n);return}let A=!1;if(t===""||t==null){const b=typeof e[n];b==="boolean"?t=ai(t):t==null&&b==="string"?(t="",A=!0):b==="number"&&(t=0,A=!0)}try{e[n]=t}catch{}A&&e.removeAttribute(n)}function tt(e,n,t,a){e.addEventListener(n,t,a)}function cc(e,n,t,a){e.removeEventListener(n,t,a)}function uc(e,n,t,a,r=null){const l=e._vei||(e._vei={}),u=l[n];if(a&&u)u.value=a;else{const[A,b]=fc(n);if(a){const g=l[n]=hc(a,r);tt(e,A,g,b)}else u&&(cc(e,A,u,b),l[n]=void 0)}}const Wa=/(?:Once|Passive|Capture)$/;function fc(e){let n;if(Wa.test(e)){n={};let a;for(;a=e.match(Wa);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),n]}let no=0;const Ac=Promise.resolve(),yc=()=>no||(Ac.then(()=>no=0),no=Date.now());function hc(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;Ke(mc(a,t.value),n,5,[a])};return t.value=e,t.attached=yc(),t}function mc(e,n){if(te(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>r=>!r._stopped&&a&&a(r))}else return n}const Ka=/^on[a-z]/,bc=(e,n,t,a,r=!1,l,u,A,b)=>{n==="class"?ic(e,a,r):n==="style"?lc(e,t,a):Er(n)?Eo(n)||uc(e,n,t,a,u):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):gc(e,n,a,r))?dc(e,n,a,l,u,A,b):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),pc(e,n,a,r))};function gc(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&Ka.test(n)&&re(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Ka.test(n)&&Ee(t)?!1:n in e}const vc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};id.props;const Qa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return te(n)?t=>cr(n,t):n};function xc(e){e.target.composing=!0}function Va(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const rt={created(e,{modifiers:{lazy:n,trim:t,number:a}},r){e._assign=Qa(r);const l=a||r.props&&r.props.type==="number";tt(e,n?"change":"input",u=>{if(u.target.composing)return;let A=e.value;t&&(A=A.trim()),l&&(A=mr(A)),e._assign(A)}),t&&tt(e,"change",()=>{e.value=e.value.trim()}),n||(tt(e,"compositionstart",xc),tt(e,"compositionend",Va),tt(e,"change",Va))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:a,number:r}},l){if(e._assign=Qa(l),e.composing||document.activeElement===e&&e.type!=="range"&&(t||a&&e.value.trim()===n||(r||e.type==="number")&&mr(e.value)===n))return;const u=n??"";e.value!==u&&(e.value=u)}},Ec=_e({patchProp:bc},ac);let Za;function wc(){return Za||(Za=Rd(Ec))}const Gi=(...e)=>{const n=wc().createApp(...e),{mount:t}=n;return n.mount=a=>{const r=Cc(a);if(!r)return;const l=n._component;!re(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const u=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),u},n};function Cc(e){return Ee(e)?document.querySelector(e):e}var Ja=typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{},cn=[],He=[],kc=typeof Uint8Array<"u"?Uint8Array:Array,Uo=!1;function el(){Uo=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0;n<64;++n)cn[n]=e[n],He[e.charCodeAt(n)]=n;He["-".charCodeAt(0)]=62,He["_".charCodeAt(0)]=63}function Bc(e,n,t){for(var a,r,l=[],u=n;u<t;u+=3)a=(e[u]<<16)+(e[u+1]<<8)+e[u+2],l.push(cn[(r=a)>>18&63]+cn[r>>12&63]+cn[r>>6&63]+cn[63&r]);return l.join("")}function Xa(e){var n;Uo||el();for(var t=e.length,a=t%3,r="",l=[],u=16383,A=0,b=t-a;A<b;A+=u)l.push(Bc(e,A,A+u>b?b:A+u));return a===1?(n=e[t-1],r+=cn[n>>2],r+=cn[n<<4&63],r+="=="):a===2&&(n=(e[t-2]<<8)+e[t-1],r+=cn[n>>10],r+=cn[n>>4&63],r+=cn[n<<2&63],r+="="),l.push(r),l.join("")}function lr(e,n,t,a,r){var l,u,A=8*r-a-1,b=(1<<A)-1,g=b>>1,f=-7,C=t?r-1:0,B=t?-1:1,k=e[n+C];for(C+=B,l=k&(1<<-f)-1,k>>=-f,f+=A;f>0;l=256*l+e[n+C],C+=B,f-=8);for(u=l&(1<<-f)-1,l>>=-f,f+=a;f>0;u=256*u+e[n+C],C+=B,f-=8);if(l===0)l=1-g;else{if(l===b)return u?NaN:1/0*(k?-1:1);u+=Math.pow(2,a),l-=g}return(k?-1:1)*u*Math.pow(2,l-a)}function nl(e,n,t,a,r,l){var u,A,b,g=8*l-r-1,f=(1<<g)-1,C=f>>1,B=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=a?0:l-1,R=a?1:-1,_=n<0||n===0&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(A=isNaN(n)?1:0,u=f):(u=Math.floor(Math.log(n)/Math.LN2),n*(b=Math.pow(2,-u))<1&&(u--,b*=2),(n+=u+C>=1?B/b:B*Math.pow(2,1-C))*b>=2&&(u++,b/=2),u+C>=f?(A=0,u=f):u+C>=1?(A=(n*b-1)*Math.pow(2,r),u+=C):(A=n*Math.pow(2,C-1)*Math.pow(2,r),u=0));r>=8;e[t+k]=255&A,k+=R,A/=256,r-=8);for(u=u<<r|A,g+=r;g>0;e[t+k]=255&u,k+=R,u/=256,g-=8);e[t+k-R]|=128*_}var Sc={}.toString,tl=Array.isArray||function(e){return Sc.call(e)=="[object Array]"};function vr(){return O.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function bn(e,n){if(vr()<n)throw new RangeError("Invalid typed array length");return O.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(n)).__proto__=O.prototype:(e===null&&(e=new O(n)),e.length=n),e}function O(e,n,t){if(!(O.TYPED_ARRAY_SUPPORT||this instanceof O))return new O(e,n,t);if(typeof e=="number"){if(typeof n=="string")throw new Error("If encoding is specified then the first argument must be a string");return bo(this,e)}return rl(this,e,n,t)}function rl(e,n,t,a){if(typeof n=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer?function(r,l,u,A){if(l.byteLength,u<0||l.byteLength<u)throw new RangeError("'offset' is out of bounds");if(l.byteLength<u+(A||0))throw new RangeError("'length' is out of bounds");return l=u===void 0&&A===void 0?new Uint8Array(l):A===void 0?new Uint8Array(l,u):new Uint8Array(l,u,A),O.TYPED_ARRAY_SUPPORT?(r=l).__proto__=O.prototype:r=to(r,l),r}(e,n,t,a):typeof n=="string"?function(r,l,u){if(typeof u=="string"&&u!==""||(u="utf8"),!O.isEncoding(u))throw new TypeError('"encoding" must be a valid string encoding');var A=0|al(l,u);r=bn(r,A);var b=r.write(l,u);return b!==A&&(r=r.slice(0,b)),r}(e,n,t):function(r,l){if(un(l)){var u=0|Fo(l.length);return(r=bn(r,u)).length===0||l.copy(r,0,0,u),r}if(l){if(typeof ArrayBuffer<"u"&&l.buffer instanceof ArrayBuffer||"length"in l)return typeof l.length!="number"||(A=l.length)!=A?bn(r,0):to(r,l);if(l.type==="Buffer"&&tl(l.data))return to(r,l.data)}var A;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,n)}function ol(e){if(typeof e!="number")throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function bo(e,n){if(ol(n),e=bn(e,n<0?0:0|Fo(n)),!O.TYPED_ARRAY_SUPPORT)for(var t=0;t<n;++t)e[t]=0;return e}function to(e,n){var t=n.length<0?0:0|Fo(n.length);e=bn(e,t);for(var a=0;a<t;a+=1)e[a]=255&n[a];return e}function Fo(e){if(e>=vr())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+vr().toString(16)+" bytes");return 0|e}function un(e){return!(e==null||!e._isBuffer)}function al(e,n){if(un(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;if(t===0)return 0;for(var a=!1;;)switch(n){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":case void 0:return xr(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*t;case"hex":return t>>>1;case"base64":return pl(e).length;default:if(a)return xr(e).length;n=(""+n).toLowerCase(),a=!0}}function Ic(e,n,t){var a=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0)<=(n>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Dc(this,n,t);case"utf8":case"utf-8":return ll(this,n,t);case"ascii":return zc(this,n,t);case"latin1":case"binary":return qc(this,n,t);case"base64":return Rc(this,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mc(this,n,t);default:if(a)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function qn(e,n,t){var a=e[n];e[n]=e[t],e[t]=a}function $a(e,n,t,a,r){if(e.length===0)return-1;if(typeof t=="string"?(a=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,isNaN(t)&&(t=r?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(r)return-1;t=e.length-1}else if(t<0){if(!r)return-1;t=0}if(typeof n=="string"&&(n=O.from(n,a)),un(n))return n.length===0?-1:Ga(e,n,t,a,r);if(typeof n=="number")return n&=255,O.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(e,n,t):Uint8Array.prototype.lastIndexOf.call(e,n,t):Ga(e,[n],t,a,r);throw new TypeError("val must be string, number or Buffer")}function Ga(e,n,t,a,r){var l,u=1,A=e.length,b=n.length;if(a!==void 0&&((a=String(a).toLowerCase())==="ucs2"||a==="ucs-2"||a==="utf16le"||a==="utf-16le")){if(e.length<2||n.length<2)return-1;u=2,A/=2,b/=2,t/=2}function g(k,R){return u===1?k[R]:k.readUInt16BE(R*u)}if(r){var f=-1;for(l=t;l<A;l++)if(g(e,l)===g(n,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===b)return f*u}else f!==-1&&(l-=l-f),f=-1}else for(t+b>A&&(t=A-b),l=t;l>=0;l--){for(var C=!0,B=0;B<b;B++)if(g(e,l+B)!==g(n,B)){C=!1;break}if(C)return l}return-1}function _c(e,n,t,a){t=Number(t)||0;var r=e.length-t;a?(a=Number(a))>r&&(a=r):a=r;var l=n.length;if(l%2!=0)throw new TypeError("Invalid hex string");a>l/2&&(a=l/2);for(var u=0;u<a;++u){var A=parseInt(n.substr(2*u,2),16);if(isNaN(A))return u;e[t+u]=A}return u}function Lc(e,n,t,a){return Rr(xr(n,e.length-t),e,t,a)}function il(e,n,t,a){return Rr(function(r){for(var l=[],u=0;u<r.length;++u)l.push(255&r.charCodeAt(u));return l}(n),e,t,a)}function Tc(e,n,t,a){return il(e,n,t,a)}function Oc(e,n,t,a){return Rr(pl(n),e,t,a)}function Pc(e,n,t,a){return Rr(function(r,l){for(var u,A,b,g=[],f=0;f<r.length&&!((l-=2)<0);++f)A=(u=r.charCodeAt(f))>>8,b=u%256,g.push(b),g.push(A);return g}(n,e.length-t),e,t,a)}function Rc(e,n,t){return n===0&&t===e.length?Xa(e):Xa(e.slice(n,t))}function ll(e,n,t){t=Math.min(e.length,t);for(var a=[],r=n;r<t;){var l,u,A,b,g=e[r],f=null,C=g>239?4:g>223?3:g>191?2:1;if(r+C<=t)switch(C){case 1:g<128&&(f=g);break;case 2:(192&(l=e[r+1]))==128&&(b=(31&g)<<6|63&l)>127&&(f=b);break;case 3:l=e[r+1],u=e[r+2],(192&l)==128&&(192&u)==128&&(b=(15&g)<<12|(63&l)<<6|63&u)>2047&&(b<55296||b>57343)&&(f=b);break;case 4:l=e[r+1],u=e[r+2],A=e[r+3],(192&l)==128&&(192&u)==128&&(192&A)==128&&(b=(15&g)<<18|(63&l)<<12|(63&u)<<6|63&A)>65535&&b<1114112&&(f=b)}f===null?(f=65533,C=1):f>65535&&(f-=65536,a.push(f>>>10&1023|55296),f=56320|1023&f),a.push(f),r+=C}return function(B){var k=B.length;if(k<=ei)return String.fromCharCode.apply(String,B);for(var R="",_=0;_<k;)R+=String.fromCharCode.apply(String,B.slice(_,_+=ei));return R}(a)}O.TYPED_ARRAY_SUPPORT=Ja.TYPED_ARRAY_SUPPORT===void 0||Ja.TYPED_ARRAY_SUPPORT,vr(),O.poolSize=8192,O._augment=function(e){return e.__proto__=O.prototype,e},O.from=function(e,n,t){return rl(null,e,n,t)},O.TYPED_ARRAY_SUPPORT&&(O.prototype.__proto__=Uint8Array.prototype,O.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&O[Symbol.species]),O.alloc=function(e,n,t){return function(a,r,l,u){return ol(r),r<=0?bn(a,r):l!==void 0?typeof u=="string"?bn(a,r).fill(l,u):bn(a,r).fill(l):bn(a,r)}(null,e,n,t)},O.allocUnsafe=function(e){return bo(null,e)},O.allocUnsafeSlow=function(e){return bo(null,e)},O.isBuffer=function(e){return e!=null&&(!!e._isBuffer||ri(e)||function(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&ri(n.slice(0,0))}(e))},O.compare=function(e,n){if(!un(e)||!un(n))throw new TypeError("Arguments must be Buffers");if(e===n)return 0;for(var t=e.length,a=n.length,r=0,l=Math.min(t,a);r<l;++r)if(e[r]!==n[r]){t=e[r],a=n[r];break}return t<a?-1:a<t?1:0},O.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},O.concat=function(e,n){if(!tl(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return O.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<e.length;++t)n+=e[t].length;var a=O.allocUnsafe(n),r=0;for(t=0;t<e.length;++t){var l=e[t];if(!un(l))throw new TypeError('"list" argument must be an Array of Buffers');l.copy(a,r),r+=l.length}return a},O.byteLength=al,O.prototype._isBuffer=!0,O.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)qn(this,n,n+1);return this},O.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)qn(this,n,n+3),qn(this,n+1,n+2);return this},O.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)qn(this,n,n+7),qn(this,n+1,n+6),qn(this,n+2,n+5),qn(this,n+3,n+4);return this},O.prototype.toString=function(){var e=0|this.length;return e===0?"":arguments.length===0?ll(this,0,e):Ic.apply(this,arguments)},O.prototype.equals=function(e){if(!un(e))throw new TypeError("Argument must be a Buffer");return this===e||O.compare(this,e)===0},O.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">"},O.prototype.compare=function(e,n,t,a,r){if(!un(e))throw new TypeError("Argument must be a Buffer");if(n===void 0&&(n=0),t===void 0&&(t=e?e.length:0),a===void 0&&(a=0),r===void 0&&(r=this.length),n<0||t>e.length||a<0||r>this.length)throw new RangeError("out of range index");if(a>=r&&n>=t)return 0;if(a>=r)return-1;if(n>=t)return 1;if(this===e)return 0;for(var l=(r>>>=0)-(a>>>=0),u=(t>>>=0)-(n>>>=0),A=Math.min(l,u),b=this.slice(a,r),g=e.slice(n,t),f=0;f<A;++f)if(b[f]!==g[f]){l=b[f],u=g[f];break}return l<u?-1:u<l?1:0},O.prototype.includes=function(e,n,t){return this.indexOf(e,n,t)!==-1},O.prototype.indexOf=function(e,n,t){return $a(this,e,n,t,!0)},O.prototype.lastIndexOf=function(e,n,t){return $a(this,e,n,t,!1)},O.prototype.write=function(e,n,t,a){if(n===void 0)a="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")a=n,t=this.length,n=0;else{if(!isFinite(n))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");n|=0,isFinite(t)?(t|=0,a===void 0&&(a="utf8")):(a=t,t=void 0)}var r=this.length-n;if((t===void 0||t>r)&&(t=r),e.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var l=!1;;)switch(a){case"hex":return _c(this,e,n,t);case"utf8":case"utf-8":return Lc(this,e,n,t);case"ascii":return il(this,e,n,t);case"latin1":case"binary":return Tc(this,e,n,t);case"base64":return Oc(this,e,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pc(this,e,n,t);default:if(l)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),l=!0}},O.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var ei=4096;function zc(e,n,t){var a="";t=Math.min(e.length,t);for(var r=n;r<t;++r)a+=String.fromCharCode(127&e[r]);return a}function qc(e,n,t){var a="";t=Math.min(e.length,t);for(var r=n;r<t;++r)a+=String.fromCharCode(e[r]);return a}function Dc(e,n,t){var a=e.length;(!n||n<0)&&(n=0),(!t||t<0||t>a)&&(t=a);for(var r="",l=n;l<t;++l)r+=Uc(e[l]);return r}function Mc(e,n,t){for(var a=e.slice(n,t),r="",l=0;l<a.length;l+=2)r+=String.fromCharCode(a[l]+256*a[l+1]);return r}function ke(e,n,t){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+n>t)throw new RangeError("Trying to access beyond buffer length")}function qe(e,n,t,a,r,l){if(!un(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>r||n<l)throw new RangeError('"value" argument is out of bounds');if(t+a>e.length)throw new RangeError("Index out of range")}function sr(e,n,t,a){n<0&&(n=65535+n+1);for(var r=0,l=Math.min(e.length-t,2);r<l;++r)e[t+r]=(n&255<<8*(a?r:1-r))>>>8*(a?r:1-r)}function pr(e,n,t,a){n<0&&(n=4294967295+n+1);for(var r=0,l=Math.min(e.length-t,4);r<l;++r)e[t+r]=n>>>8*(a?r:3-r)&255}function sl(e,n,t,a,r,l){if(t+a>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ni(e,n,t,a,r){return r||sl(e,0,t,4),nl(e,n,t,a,23,4),t+4}function ti(e,n,t,a,r){return r||sl(e,0,t,8),nl(e,n,t,a,52,8),t+8}O.prototype.slice=function(e,n){var t,a=this.length;if((e=~~e)<0?(e+=a)<0&&(e=0):e>a&&(e=a),(n=n===void 0?a:~~n)<0?(n+=a)<0&&(n=0):n>a&&(n=a),n<e&&(n=e),O.TYPED_ARRAY_SUPPORT)(t=this.subarray(e,n)).__proto__=O.prototype;else{var r=n-e;t=new O(r,void 0);for(var l=0;l<r;++l)t[l]=this[l+e]}return t},O.prototype.readUIntLE=function(e,n,t){e|=0,n|=0,t||ke(e,n,this.length);for(var a=this[e],r=1,l=0;++l<n&&(r*=256);)a+=this[e+l]*r;return a},O.prototype.readUIntBE=function(e,n,t){e|=0,n|=0,t||ke(e,n,this.length);for(var a=this[e+--n],r=1;n>0&&(r*=256);)a+=this[e+--n]*r;return a},O.prototype.readUInt8=function(e,n){return n||ke(e,1,this.length),this[e]},O.prototype.readUInt16LE=function(e,n){return n||ke(e,2,this.length),this[e]|this[e+1]<<8},O.prototype.readUInt16BE=function(e,n){return n||ke(e,2,this.length),this[e]<<8|this[e+1]},O.prototype.readUInt32LE=function(e,n){return n||ke(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},O.prototype.readUInt32BE=function(e,n){return n||ke(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},O.prototype.readIntLE=function(e,n,t){e|=0,n|=0,t||ke(e,n,this.length);for(var a=this[e],r=1,l=0;++l<n&&(r*=256);)a+=this[e+l]*r;return a>=(r*=128)&&(a-=Math.pow(2,8*n)),a},O.prototype.readIntBE=function(e,n,t){e|=0,n|=0,t||ke(e,n,this.length);for(var a=n,r=1,l=this[e+--a];a>0&&(r*=256);)l+=this[e+--a]*r;return l>=(r*=128)&&(l-=Math.pow(2,8*n)),l},O.prototype.readInt8=function(e,n){return n||ke(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},O.prototype.readInt16LE=function(e,n){n||ke(e,2,this.length);var t=this[e]|this[e+1]<<8;return 32768&t?4294901760|t:t},O.prototype.readInt16BE=function(e,n){n||ke(e,2,this.length);var t=this[e+1]|this[e]<<8;return 32768&t?4294901760|t:t},O.prototype.readInt32LE=function(e,n){return n||ke(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},O.prototype.readInt32BE=function(e,n){return n||ke(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},O.prototype.readFloatLE=function(e,n){return n||ke(e,4,this.length),lr(this,e,!0,23,4)},O.prototype.readFloatBE=function(e,n){return n||ke(e,4,this.length),lr(this,e,!1,23,4)},O.prototype.readDoubleLE=function(e,n){return n||ke(e,8,this.length),lr(this,e,!0,52,8)},O.prototype.readDoubleBE=function(e,n){return n||ke(e,8,this.length),lr(this,e,!1,52,8)},O.prototype.writeUIntLE=function(e,n,t,a){e=+e,n|=0,t|=0,a||qe(this,e,n,t,Math.pow(2,8*t)-1,0);var r=1,l=0;for(this[n]=255&e;++l<t&&(r*=256);)this[n+l]=e/r&255;return n+t},O.prototype.writeUIntBE=function(e,n,t,a){e=+e,n|=0,t|=0,a||qe(this,e,n,t,Math.pow(2,8*t)-1,0);var r=t-1,l=1;for(this[n+r]=255&e;--r>=0&&(l*=256);)this[n+r]=e/l&255;return n+t},O.prototype.writeUInt8=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,1,255,0),O.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[n]=255&e,n+1},O.prototype.writeUInt16LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,65535,0),O.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):sr(this,e,n,!0),n+2},O.prototype.writeUInt16BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,65535,0),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):sr(this,e,n,!1),n+2},O.prototype.writeUInt32LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,4294967295,0),O.TYPED_ARRAY_SUPPORT?(this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=255&e):pr(this,e,n,!0),n+4},O.prototype.writeUInt32BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,4294967295,0),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):pr(this,e,n,!1),n+4},O.prototype.writeIntLE=function(e,n,t,a){if(e=+e,n|=0,!a){var r=Math.pow(2,8*t-1);qe(this,e,n,t,r-1,-r)}var l=0,u=1,A=0;for(this[n]=255&e;++l<t&&(u*=256);)e<0&&A===0&&this[n+l-1]!==0&&(A=1),this[n+l]=(e/u|0)-A&255;return n+t},O.prototype.writeIntBE=function(e,n,t,a){if(e=+e,n|=0,!a){var r=Math.pow(2,8*t-1);qe(this,e,n,t,r-1,-r)}var l=t-1,u=1,A=0;for(this[n+l]=255&e;--l>=0&&(u*=256);)e<0&&A===0&&this[n+l+1]!==0&&(A=1),this[n+l]=(e/u|0)-A&255;return n+t},O.prototype.writeInt8=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,1,127,-128),O.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[n]=255&e,n+1},O.prototype.writeInt16LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,32767,-32768),O.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):sr(this,e,n,!0),n+2},O.prototype.writeInt16BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,2,32767,-32768),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):sr(this,e,n,!1),n+2},O.prototype.writeInt32LE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,2147483647,-2147483648),O.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24):pr(this,e,n,!0),n+4},O.prototype.writeInt32BE=function(e,n,t){return e=+e,n|=0,t||qe(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),O.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):pr(this,e,n,!1),n+4},O.prototype.writeFloatLE=function(e,n,t){return ni(this,e,n,!0,t)},O.prototype.writeFloatBE=function(e,n,t){return ni(this,e,n,!1,t)},O.prototype.writeDoubleLE=function(e,n,t){return ti(this,e,n,!0,t)},O.prototype.writeDoubleBE=function(e,n,t){return ti(this,e,n,!1,t)},O.prototype.copy=function(e,n,t,a){if(t||(t=0),a||a===0||(a=this.length),n>=e.length&&(n=e.length),n||(n=0),a>0&&a<t&&(a=t),a===t||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-n<a-t&&(a=e.length-n+t);var r,l=a-t;if(this===e&&t<n&&n<a)for(r=l-1;r>=0;--r)e[r+n]=this[r+t];else if(l<1e3||!O.TYPED_ARRAY_SUPPORT)for(r=0;r<l;++r)e[r+n]=this[r+t];else Uint8Array.prototype.set.call(e,this.subarray(t,t+l),n);return l},O.prototype.fill=function(e,n,t,a){if(typeof e=="string"){if(typeof n=="string"?(a=n,n=0,t=this.length):typeof t=="string"&&(a=t,t=this.length),e.length===1){var r=e.charCodeAt(0);r<256&&(e=r)}if(a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!O.isEncoding(a))throw new TypeError("Unknown encoding: "+a)}else typeof e=="number"&&(e&=255);if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;var l;if(n>>>=0,t=t===void 0?this.length:t>>>0,e||(e=0),typeof e=="number")for(l=n;l<t;++l)this[l]=e;else{var u=un(e)?e:xr(new O(e,a).toString()),A=u.length;for(l=0;l<t-n;++l)this[l+n]=u[l%A]}return this};var jc=/[^+\/0-9A-Za-z-_]/g;function Uc(e){return e<16?"0"+e.toString(16):e.toString(16)}function xr(e,n){var t;n=n||1/0;for(var a=e.length,r=null,l=[],u=0;u<a;++u){if((t=e.charCodeAt(u))>55295&&t<57344){if(!r){if(t>56319){(n-=3)>-1&&l.push(239,191,189);continue}if(u+1===a){(n-=3)>-1&&l.push(239,191,189);continue}r=t;continue}if(t<56320){(n-=3)>-1&&l.push(239,191,189),r=t;continue}t=65536+(r-55296<<10|t-56320)}else r&&(n-=3)>-1&&l.push(239,191,189);if(r=null,t<128){if((n-=1)<0)break;l.push(t)}else if(t<2048){if((n-=2)<0)break;l.push(t>>6|192,63&t|128)}else if(t<65536){if((n-=3)<0)break;l.push(t>>12|224,t>>6&63|128,63&t|128)}else{if(!(t<1114112))throw new Error("Invalid code point");if((n-=4)<0)break;l.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128)}}return l}function pl(e){return function(n){var t,a,r,l,u,A;Uo||el();var b=n.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");u=n[b-2]==="="?2:n[b-1]==="="?1:0,A=new kc(3*b/4-u),r=u>0?b-4:b;var g=0;for(t=0,a=0;t<r;t+=4,a+=3)l=He[n.charCodeAt(t)]<<18|He[n.charCodeAt(t+1)]<<12|He[n.charCodeAt(t+2)]<<6|He[n.charCodeAt(t+3)],A[g++]=l>>16&255,A[g++]=l>>8&255,A[g++]=255&l;return u===2?(l=He[n.charCodeAt(t)]<<2|He[n.charCodeAt(t+1)]>>4,A[g++]=255&l):u===1&&(l=He[n.charCodeAt(t)]<<10|He[n.charCodeAt(t+1)]<<4|He[n.charCodeAt(t+2)]>>2,A[g++]=l>>8&255,A[g++]=255&l),A}(function(n){if((n=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(n).replace(jc,"")).length<2)return"";for(;n.length%4!=0;)n+="=";return n}(e))}function Rr(e,n,t,a){for(var r=0;r<a&&!(r+t>=n.length||r>=e.length);++r)n[r+t]=e[r];return r}function ri(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oi=(()=>(()=>{var e={916:(r,l,u)=>{var A=u(471);r.exports=function(b){var g,f="",C=(b=b||{}).video,B=b.options,k=A.$escape,R=b.tran,_=b.icons,q=b.index,Q=A.$each;return b.$value,b.$index,f+=`<div class="dplayer-mask"></div>
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
        <span class="diplayer-loading-icon">`,f+=_.loading,f+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,f+=k(R("setting")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=_.pallette,f+=`</span>
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
            <span class="dplayer-icon-content">`,f+=_.send,f+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,f+=_.play,f+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,f+=_.volumeDown,f+=`</span>
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
                `,Q(B.video.quality,function($,G){f+=`
                    <div class="dplayer-quality-item" data-index="`,f+=k(G),f+='">',f+=k($.name),f+=`</div>
                `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `,B.screenshot&&(f+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,f+=k(R("screenshot")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=_.camera,f+=`</span>
        </div>
        `),f+=`
        `,B.airplay&&(f+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,f+=k(R("airplay")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=_.airplay,f+=`</span>
        </div>
        `),f+=`
        `,B.chromecast&&(f+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,f+=k(R("chromecast")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=_.chromecast,f+=`</span>
        </div>
        `),f+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,f+=k(R("send-danmaku")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=_.comment,f+=`</span>
            </button>
        </div>
        `,B.subtitle&&(f+=`
        `,typeof B.subtitle.url=="string"?(f+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,f+=k(R("hide-subs")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=_.subtitle,f+=`</span>
            </button>
        </div>
        `):(f+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,f+=k(R("subtitle")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=_.subtitle,f+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,Q(B.subtitle.url,function($,G){f+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,f+=k($.url),f+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,f+=k($.lang?$.name?$.name+" ("+R($.lang)+")":R($.lang):$.name),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `),f+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,f+=k(R("setting")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=_.setting,f+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,f+=k(R("speed")),f+=`</span>
                        <div class="dplayer-toggle">`,f+=_.right,f+=`</div>
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
                    `,Q(B.playbackSpeed,function($,G){f+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,f+=k($),f+=`">
                            <span class="dplayer-label">`,f+=k($===1?R("normal"):$),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,f+=k(R("web-fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=_.fullWeb,f+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,f+=k(R("fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=_.full,f+=`</span>
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
    `,Q(B.contextmenu,function($,G){f+=`
        <div class="dplayer-menu-item">
            <a`,$.link&&(f+=' target="_blank"'),f+=' href="',f+=k($.link||"javascript:void(0);"),f+='">',$.key&&(f+=" ",f+=k(R($.key))),$.text&&(f+=" ",f+=k($.text)),f+=`</a>
        </div>
    `}),f+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,f+=_.play,f+=`
</button>`}},568:(r,l,u)=>{var A=u(471);r.exports=function(b){var g="",f=(b=b||{}).enableSubtitle,C=b.subtitle,B=b.current,k=b.airplay,R=b.pic,_=A.$escape,q=b.screenshot,Q=b.preload,$=b.url;return f=C&&C.type==="webvtt",g+=`
<video
    class="dplayer-video `,B&&(g+="dplayer-video-current"),g+=`"
    webkit-playsinline
    `,k&&(g+=' x-webkit-airplay="allow" '),g+=`
    playsinline
    `,R&&(g+='poster="',g+=_(R),g+='"'),g+=`
    `,(q||f)&&(g+='crossorigin="anonymous"'),g+=`
    `,Q&&(g+='preload="',g+=_(Q),g+='"'),g+=`
    `,k?g+=`
    nosrc
    `:$&&(g+=`
    src="`,g+=_($),g+=`"
    `),g+=`
    >
    `,k&&(g+=`
    <source src="`,g+=_($),g+=`">
    `),g+=`
    `,f&&(g+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,g+=_(typeof C.url=="string"?C.url:C.url[C.index].url),g+=`"></track>
    `),g+`
</video>`}},49:(r,l,u)=>{u.d(l,{Z:()=>C});var A=u(415),b=u.n(A),g=u(352),f=u.n(g)()(b());f.push([r.id,`:root {
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
`],sourceRoot:""}]);const C=f},685:(r,l,u)=>{u.d(l,{Z:()=>Q});var A=u(415),b=u.n(A),g=u(352),f=u.n(g),C=u(49),B=u(80),k=u.n(B),R=new URL(u(831),u.b),_=f()(b());_.i(C.Z);var q=k()(R);_.push([r.id,`@keyframes my-face {
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
}`],sourceRoot:""}]);const Q=_},856:r=>{var l=[];function u(g){for(var f=-1,C=0;C<l.length;C++)if(l[C].identifier===g){f=C;break}return f}function A(g,f){for(var C={},B=[],k=0;k<g.length;k++){var R=g[k],_=f.base?R[0]+f.base:R[0],q=C[_]||0,Q="".concat(_," ").concat(q);C[_]=q+1;var $=u(Q),G={css:R[1],media:R[2],sourceMap:R[3],supports:R[4],layer:R[5]};if($!==-1)l[$].references++,l[$].updater(G);else{var se=b(G,f);f.byIndex=k,l.splice(k,0,{identifier:Q,updater:se,references:1})}B.push(Q)}return B}function b(g,f){var C=f.domAPI(f);return C.update(g),function(B){if(B){if(B.css===g.css&&B.media===g.media&&B.sourceMap===g.sourceMap&&B.supports===g.supports&&B.layer===g.layer)return;C.update(g=B)}else C.remove()}}r.exports=function(g,f){var C=A(g=g||[],f=f||{});return function(B){B=B||[];for(var k=0;k<C.length;k++){var R=u(C[k]);l[R].references--}for(var _=A(B,f),q=0;q<C.length;q++){var Q=u(C[q]);l[Q].references===0&&(l[Q].updater(),l.splice(Q,1))}C=_}}},370:r=>{var l={};r.exports=function(u,A){var b=function(g){if(l[g]===void 0){var f=document.querySelector(g);if(window.HTMLIFrameElement&&f instanceof window.HTMLIFrameElement)try{f=f.contentDocument.head}catch{f=null}l[g]=f}return l[g]}(u);if(!b)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");b.appendChild(A)}},278:r=>{r.exports=function(l){var u=document.createElement("style");return l.setAttributes(u,l.attributes),l.insert(u,l.options),u}},458:(r,l,u)=>{r.exports=function(A){var b=u.nc;b&&A.setAttribute("nonce",b)}},470:r=>{r.exports=function(l){var u=l.insertStyleElement(l);return{update:function(A){(function(b,g,f){var C="";f.supports&&(C+="@supports (".concat(f.supports,") {")),f.media&&(C+="@media ".concat(f.media," {"));var B=f.layer!==void 0;B&&(C+="@layer".concat(f.layer.length>0?" ".concat(f.layer):""," {")),C+=f.css,B&&(C+="}"),f.media&&(C+="}"),f.supports&&(C+="}");var k=f.sourceMap;k&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),g.styleTagTransform(C,b,g.options)})(u,l,A)},remove:function(){(function(A){if(A.parentNode===null)return!1;A.parentNode.removeChild(A)})(u)}}}},488:r=>{r.exports=function(l,u){if(u.styleSheet)u.styleSheet.cssText=l;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(l))}}},251:r=>{r.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:r=>{r.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:r=>{r.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(r,l,u)=>{var A=typeof self<"u"?self:typeof window<"u"?window:u.g!==void 0?u.g:{},b=Object.create(A),g=/["&'<>]/;function f(C){return typeof C!="string"&&(C=C==null?"":typeof C=="function"?f(C.call(C)):JSON.stringify(C)),C}b.$escape=function(C){return function(B){var k=""+B,R=g.exec(k);if(!R)return B;var _="",q=void 0,Q=void 0,$=void 0;for(q=R.index,Q=0;q<k.length;q++){switch(k.charCodeAt(q)){case 34:$="&#34;";break;case 38:$="&#38;";break;case 39:$="&#39;";break;case 60:$="&#60;";break;case 62:$="&#62;";break;default:continue}Q!==q&&(_+=k.substring(Q,q)),Q=q+1,_+=$}return Q!==q?_+k.substring(Q,q):_}(f(C))},b.$each=function(C,B){if(Array.isArray(C))for(var k=0,R=C.length;k<R;k++)B(C[k],k);else for(var _ in C)B(C[_],_)},r.exports=b},471:(r,l,u)=>{r.exports=u(897)},352:r=>{r.exports=function(l){var u=[];return u.toString=function(){return this.map(function(A){var b="",g=A[5]!==void 0;return A[4]&&(b+="@supports (".concat(A[4],") {")),A[2]&&(b+="@media ".concat(A[2]," {")),g&&(b+="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {")),b+=l(A),g&&(b+="}"),A[2]&&(b+="}"),A[4]&&(b+="}"),b}).join("")},u.i=function(A,b,g,f,C){typeof A=="string"&&(A=[[null,A,void 0]]);var B={};if(g)for(var k=0;k<this.length;k++){var R=this[k][0];R!=null&&(B[R]=!0)}for(var _=0;_<A.length;_++){var q=[].concat(A[_]);g&&B[q[0]]||(C!==void 0&&(q[5]===void 0||(q[1]="@layer".concat(q[5].length>0?" ".concat(q[5]):""," {").concat(q[1],"}")),q[5]=C),b&&(q[2]&&(q[1]="@media ".concat(q[2]," {").concat(q[1],"}")),q[2]=b),f&&(q[4]?(q[1]="@supports (".concat(q[4],") {").concat(q[1],"}"),q[4]=f):q[4]="".concat(f)),u.push(q))}},u}},80:r=>{r.exports=function(l,u){return u||(u={}),l&&(l=String(l.__esModule?l.default:l),/^['"].*['"]$/.test(l)&&(l=l.slice(1,-1)),u.hash&&(l+=u.hash),/["'() \t\n]|(%20)/.test(l)||u.needQuotes?'"'.concat(l.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):l)}},415:r=>{r.exports=function(l){var u=l[1],A=l[3];if(!A)return u;if(typeof btoa=="function"){var b=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(b),f="/*# ".concat(g," */");return[u].concat([f]).join(`
`)}return[u].join(`
`)}},937:r=>{function l(u){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},l(u)}r.exports=(typeof self>"u"?"undefined":l(self))=="object"?self.FormData:window.FormData},831:r=>{r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function t(r){var l=n[r];if(l!==void 0)return l.exports;var u=n[r]={id:r,exports:{}};return e[r](u,u.exports,t),u.exports}t.m=e,t.n=r=>{var l=r&&r.__esModule?()=>r.default:()=>r;return t.d(l,{a:l}),l},t.d=(r,l)=>{for(var u in l)t.o(l,u)&&!t.o(r,u)&&Object.defineProperty(r,u,{enumerable:!0,get:l[u]})},t.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),t.o=(r,l)=>Object.prototype.hasOwnProperty.call(r,l),t.b=document.baseURI||self.location.href,t.nc=void 0;var a={};return(()=>{t.d(a,{default:()=>Vs});var r=t(856),l=t.n(r),u=t(470),A=t.n(u),b=t(370),g=t.n(b),f=t(458),C=t.n(f),B=t(278),k=t.n(B),R=t(488),_=t.n(R),q=t(685),Q={};function $(o){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$(o)}function G(o,s){this.name="AggregateError",this.errors=o,this.message=s||""}function se(o){return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},se(o)}Q.styleTagTransform=_(),Q.setAttributes=C(),Q.insert=g().bind(null,"head"),Q.domAPI=A(),Q.insertStyleElement=k(),l()(q.Z,Q),q.Z&&q.Z.locals&&q.Z.locals,G.prototype=Error.prototype;var we=setTimeout;function yn(o){return Boolean(o&&o.length!==void 0)}function nn(){}function K(o){if(!(this instanceof K))throw new TypeError("Promises must be constructed via new");if(typeof o!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],xn(o,this)}function me(o,s){for(;o._state===3;)o=o._value;o._state!==0?(o._handled=!0,K._immediateFn(function(){var y=o._state===1?s.onFulfilled:s.onRejected;if(y!==null){var i;try{i=y(o._value)}catch(p){return void ve(s.promise,p)}fe(s.promise,i)}else(o._state===1?fe:ve)(s.promise,o._value)})):o._deferreds.push(s)}function fe(o,s){try{if(s===o)throw new TypeError("A promise cannot be resolved with itself.");if(s&&(se(s)==="object"||typeof s=="function")){var y=s.then;if(s instanceof K)return o._state=3,o._value=s,void Pe(o);if(typeof y=="function")return void xn((i=y,p=s,function(){i.apply(p,arguments)}),o)}o._state=1,o._value=s,Pe(o)}catch(c){ve(o,c)}var i,p}function ve(o,s){o._state=2,o._value=s,Pe(o)}function Pe(o){o._state===2&&o._deferreds.length===0&&K._immediateFn(function(){o._handled||K._unhandledRejectionFn(o._value)});for(var s=0,y=o._deferreds.length;s<y;s++)me(o,o._deferreds[s]);o._deferreds=null}function Qe(o,s,y){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof s=="function"?s:null,this.promise=y}function xn(o,s){var y=!1;try{o(function(i){y||(y=!0,fe(s,i))},function(i){y||(y=!0,ve(s,i))})}catch(i){if(y)return;y=!0,ve(s,i)}}K.prototype.catch=function(o){return this.then(null,o)},K.prototype.then=function(o,s){var y=new this.constructor(nn);return me(this,new Qe(o,s,y)),y},K.prototype.finally=function(o){var s=this.constructor;return this.then(function(y){return s.resolve(o()).then(function(){return y})},function(y){return s.resolve(o()).then(function(){return s.reject(y)})})},K.all=function(o){return new K(function(s,y){if(!yn(o))return y(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(o);if(i.length===0)return s([]);var p=i.length;function c(m,h){try{if(h&&(se(h)==="object"||typeof h=="function")){var x=h.then;if(typeof x=="function")return void x.call(h,function(w){c(m,w)},y)}i[m]=h,--p==0&&s(i)}catch(w){y(w)}}for(var d=0;d<i.length;d++)c(d,i[d])})},K.any=function(o){var s=this;return new s(function(y,i){if(!o||o.length===void 0)return i(new TypeError("Promise.any accepts an array"));var p=Array.prototype.slice.call(o);if(p.length===0)return i();for(var c=[],d=0;d<p.length;d++)try{s.resolve(p[d]).then(y).catch(function(m){c.push(m),c.length===p.length&&i(new G(c,"All promises were rejected"))})}catch(m){i(m)}})},K.allSettled=function(o){return new this(function(s,y){if(!o||o.length===void 0)return y(new TypeError($(o)+" "+o+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(o);if(i.length===0)return s([]);var p=i.length;function c(m,h){if(h&&($(h)==="object"||typeof h=="function")){var x=h.then;if(typeof x=="function")return void x.call(h,function(w){c(m,w)},function(w){i[m]={status:"rejected",reason:w},--p==0&&s(i)})}i[m]={status:"fulfilled",value:h},--p==0&&s(i)}for(var d=0;d<i.length;d++)c(d,i[d])})},K.resolve=function(o){return o&&se(o)==="object"&&o.constructor===K?o:new K(function(s){s(o)})},K.reject=function(o){return new K(function(s,y){y(o)})},K.race=function(o){return new K(function(s,y){if(!yn(o))return y(new TypeError("Promise.race accepts an array"));for(var i=0,p=o.length;i<p;i++)K.resolve(o[i]).then(s,y)})},K._immediateFn=typeof setImmediate=="function"&&function(o){setImmediate(o)}||function(o){we(o,0)},K._unhandledRejectionFn=function(o){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",o)};const Kt=K;var ge=/mobile/i.test(window.navigator.userAgent);const F={secondToTime:function(o){if((o=o||0)===0||o===1/0||o.toString()==="NaN")return"00:00";var s=Math.floor(o/3600),y=Math.floor((o-3600*s)/60),i=Math.floor(o-3600*s-60*y);return(s>0?[s,y,i]:[y,i]).map(function(p){return p<10?"0"+p:""+p}).join(":")},getElementViewLeft:function(o){var s=o.offsetLeft,y=o.offsetParent,i=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;y!==null&&y!==o;)s+=y.offsetLeft,y=y.offsetParent;else for(;y!==null;)s+=y.offsetLeft,y=y.offsetParent;return s-i},getBoundingClientRectViewLeft:function(o){var s=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(o.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var y=document.createElement("div");y.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(y),this.getBoundingClientRectViewLeft.offset=-y.getBoundingClientRect().top-s,document.body.removeChild(y),y=null}var i=o.getBoundingClientRect(),p=this.getBoundingClientRectViewLeft.offset;return i.left+p}return this.getElementViewLeft(o)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(o){var s=o.left,y=s===void 0?0:s,i=o.top,p=i===void 0?0:i;this.isFirefox?(document.documentElement.scrollLeft=y,document.documentElement.scrollTop=p):window.scrollTo(y,p)},isMobile:ge,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(o,s){localStorage.setItem(o,s)},get:function(o){return localStorage.getItem(o)}},nameMap:{dragStart:ge?"touchstart":"mousedown",dragMove:ge?"touchmove":"mousemove",dragEnd:ge?"touchend":"mouseup"},color2Number:function(o){return o[0]==="#"&&(o=o.substr(1)),o.length===3&&(o="".concat(o[0]).concat(o[0]).concat(o[1]).concat(o[1]).concat(o[2]).concat(o[2])),parseInt(o,16)+0&16777215},number2Color:function(o){return"#"+("00000"+o.toString(16)).slice(-6)},number2Type:function(o){switch(o){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function de(o,s){return function(){return o.apply(s,arguments)}}function Me(o){return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Me(o)}var En,tn=Object.prototype.toString,Re=Object.getPrototypeOf,Wn=(En=Object.create(null),function(o){var s=tn.call(o);return En[s]||(En[s]=s.slice(8,-1).toLowerCase())}),Ve=function(o){return o=o.toLowerCase(),function(s){return Wn(s)===o}},Kn=function(o){return function(s){return Me(s)===o}},Se=Array.isArray,rn=Kn("undefined"),ut=Ve("ArrayBuffer"),wn=Kn("string"),Ze=Kn("function"),Qn=Kn("number"),v=function(o){return o!==null&&Me(o)==="object"},E=function(o){if(Wn(o)!=="object")return!1;var s=Re(o);return!(s!==null&&s!==Object.prototype&&Object.getPrototypeOf(s)!==null||Symbol.toStringTag in o||Symbol.iterator in o)},I=Ve("Date"),T=Ve("File"),L=Ve("Blob"),D=Ve("FileList"),Y=Ve("URLSearchParams");function z(o,s){var y,i,p=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).allOwnKeys,c=p!==void 0&&p;if(o!=null)if(Me(o)!=="object"&&(o=[o]),Se(o))for(y=0,i=o.length;y<i;y++)s.call(null,o[y],y,o);else{var d,m=c?Object.getOwnPropertyNames(o):Object.keys(o),h=m.length;for(y=0;y<h;y++)d=m[y],s.call(null,o[d],d,o)}}function M(o,s){s=s.toLowerCase();for(var y,i=Object.keys(o),p=i.length;p-- >0;)if(s===(y=i[p]).toLowerCase())return y;return null}var P,Z,W=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Fc,J=function(o){return!rn(o)&&o!==W},ee=(P=typeof Uint8Array<"u"&&Re(Uint8Array),function(o){return P&&o instanceof P}),oe=Ve("HTMLFormElement"),ce=(Z=Object.prototype.hasOwnProperty,function(o,s){return Z.call(o,s)}),pe=Ve("RegExp"),ye=function(o,s){var y=Object.getOwnPropertyDescriptors(o),i={};z(y,function(p,c){s(p,c,o)!==!1&&(i[c]=p)}),Object.defineProperties(o,i)};const S={isArray:Se,isArrayBuffer:ut,isBuffer:function(o){return o!==null&&!rn(o)&&o.constructor!==null&&!rn(o.constructor)&&Ze(o.constructor.isBuffer)&&o.constructor.isBuffer(o)},isFormData:function(o){var s="[object FormData]";return o&&(typeof FormData=="function"&&o instanceof FormData||tn.call(o)===s||Ze(o.toString)&&o.toString()===s)},isArrayBufferView:function(o){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(o):o&&o.buffer&&ut(o.buffer)},isString:wn,isNumber:Qn,isBoolean:function(o){return o===!0||o===!1},isObject:v,isPlainObject:E,isUndefined:rn,isDate:I,isFile:T,isBlob:L,isRegExp:pe,isFunction:Ze,isStream:function(o){return v(o)&&Ze(o.pipe)},isURLSearchParams:Y,isTypedArray:ee,isFileList:D,forEach:z,merge:function o(){for(var s=(J(this)&&this||{}).caseless,y={},i=function(d,m){var h=s&&M(y,m)||m;E(y[h])&&E(d)?y[h]=o(y[h],d):E(d)?y[h]=o({},d):Se(d)?y[h]=d.slice():y[h]=d},p=0,c=arguments.length;p<c;p++)arguments[p]&&z(arguments[p],i);return y},extend:function(o,s,y){return z(s,function(i,p){y&&Ze(i)?o[p]=de(i,y):o[p]=i},{allOwnKeys:(arguments.length>3&&arguments[3]!==void 0?arguments[3]:{}).allOwnKeys}),o},trim:function(o){return o.trim?o.trim():o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(o){return o.charCodeAt(0)===65279&&(o=o.slice(1)),o},inherits:function(o,s,y,i){o.prototype=Object.create(s.prototype,i),o.prototype.constructor=o,Object.defineProperty(o,"super",{value:s.prototype}),y&&Object.assign(o.prototype,y)},toFlatObject:function(o,s,y,i){var p,c,d,m={};if(s=s||{},o==null)return s;do{for(c=(p=Object.getOwnPropertyNames(o)).length;c-- >0;)d=p[c],i&&!i(d,o,s)||m[d]||(s[d]=o[d],m[d]=!0);o=y!==!1&&Re(o)}while(o&&(!y||y(o,s))&&o!==Object.prototype);return s},kindOf:Wn,kindOfTest:Ve,endsWith:function(o,s,y){o=String(o),(y===void 0||y>o.length)&&(y=o.length),y-=s.length;var i=o.indexOf(s,y);return i!==-1&&i===y},toArray:function(o){if(!o)return null;if(Se(o))return o;var s=o.length;if(!Qn(s))return null;for(var y=new Array(s);s-- >0;)y[s]=o[s];return y},forEachEntry:function(o,s){for(var y,i=(o&&o[Symbol.iterator]).call(o);(y=i.next())&&!y.done;){var p=y.value;s.call(o,p[0],p[1])}},matchAll:function(o,s){for(var y,i=[];(y=o.exec(s))!==null;)i.push(y);return i},isHTMLForm:oe,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:ye,freezeMethods:function(o){ye(o,function(s,y){if(Ze(o)&&["arguments","caller","callee"].indexOf(y)!==-1)return!1;var i=o[y];Ze(i)&&(s.enumerable=!1,"writable"in s?s.writable=!1:s.set||(s.set=function(){throw Error("Can not rewrite read-only method '"+y+"'")}))})},toObjectSet:function(o,s){var y={},i=function(p){p.forEach(function(c){y[c]=!0})};return Se(o)?i(o):i(String(o).split(s)),y},toCamelCase:function(o){return o.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(s,y,i){return y.toUpperCase()+i})},noop:function(){},toFiniteNumber:function(o,s){return o=+o,Number.isFinite(o)?o:s},findKey:M,global:W,isContextDefined:J,toJSONObject:function(o){var s=new Array(10);return function y(i,p){if(v(i)){if(s.indexOf(i)>=0)return;if(!("toJSON"in i)){s[p]=i;var c=Se(i)?[]:{};return z(i,function(d,m){var h=y(d,p+1);!rn(h)&&(c[m]=h)}),s[p]=void 0,c}}return i}(o,0)}};function je(o,s,y,i,p){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=o,this.name="AxiosError",s&&(this.code=s),y&&(this.config=y),i&&(this.request=i),p&&(this.response=p)}S.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ft=je.prototype,Cn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(o){Cn[o]={value:o}}),Object.defineProperties(je,Cn),Object.defineProperty(ft,"isAxiosError",{value:!0}),je.from=function(o,s,y,i,p,c){var d=Object.create(ft);return S.toFlatObject(o,d,function(m){return m!==Error.prototype},function(m){return m!=="isAxiosError"}),je.call(d,o.message,s,y,i,p),d.cause=o,d.name=o.name,c&&Object.assign(d,c),d};const le=je,Le=t(937);function ze(o){return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ze(o)}function Vn(o){return S.isPlainObject(o)||S.isArray(o)}function Yo(o){return S.endsWith(o,"[]")?o.slice(0,-2):o}function No(o,s,y){return o?o.concat(s).map(function(i,p){return i=Yo(i),!y&&p?"["+i+"]":i}).join(y?".":""):s}var ul=S.toFlatObject(S,{},null,function(o){return/^is[A-Z]/.test(o)});const Qt=function(o,s,y){if(!S.isObject(o))throw new TypeError("target must be an object");s=s||new(Le||FormData);var i,p=(y=S.toFlatObject(y,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,N){return!S.isUndefined(N[H])})).metaTokens,c=y.visitor||w,d=y.dots,m=y.indexes,h=(y.Blob||typeof Blob<"u"&&Blob)&&(i=s)&&S.isFunction(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator];if(!S.isFunction(c))throw new TypeError("visitor must be a function");function x(H){if(H===null)return"";if(S.isDate(H))return H.toISOString();if(!h&&S.isBlob(H))throw new le("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(H)||S.isTypedArray(H)?h&&typeof Blob=="function"?new Blob([H]):O.from(H):H}function w(H,N,U){var V=H;if(H&&!U&&ze(H)==="object"){if(S.endsWith(N,"{}"))N=p?N:N.slice(0,-2),H=JSON.stringify(H);else if(S.isArray(H)&&function(ae){return S.isArray(ae)&&!ae.some(Vn)}(H)||S.isFileList(H)||S.endsWith(N,"[]")&&(V=S.toArray(H)))return N=Yo(N),V.forEach(function(ae,Ye){!S.isUndefined(ae)&&ae!==null&&s.append(m===!0?No([N],Ye,d):m===null?N:N+"[]",x(ae))}),!1}return!!Vn(H)||(s.append(No(U,N,d),x(H)),!1)}var j=[],ne=Object.assign(ul,{defaultVisitor:w,convertValue:x,isVisitable:Vn});if(!S.isObject(o))throw new TypeError("data must be an object");return function H(N,U){if(!S.isUndefined(N)){if(j.indexOf(N)!==-1)throw Error("Circular reference detected in "+U.join("."));j.push(N),S.forEach(N,function(V,ae){(!(S.isUndefined(V)||V===null)&&c.call(s,V,S.isString(ae)?ae.trim():ae,U,ne))===!0&&H(V,U?U.concat(ae):[ae])}),j.pop()}}(o),s};function Ho(o){var s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g,function(y){return s[y]})}function Wo(o,s){this._pairs=[],o&&Qt(o,this,s)}var Ko=Wo.prototype;Ko.append=function(o,s){this._pairs.push([o,s])},Ko.toString=function(o){var s=o?function(y){return o.call(this,y,Ho)}:Ho;return this._pairs.map(function(y){return s(y[0])+"="+s(y[1])},"").join("&")};const Qo=Wo;function fl(o){return encodeURIComponent(o).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vo(o,s,y){if(!s)return o;var i,p=y&&y.encode||fl,c=y&&y.serialize;if(i=c?c(s,y):S.isURLSearchParams(s)?s.toString():new Qo(s,y).toString(p)){var d=o.indexOf("#");d!==-1&&(o=o.slice(0,d)),o+=(o.indexOf("?")===-1?"?":"&")+i}return o}function At(o){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},At(o)}var Al=function(){function o(){(function(i,p){if(!(i instanceof p))throw new TypeError("Cannot call a class as a function")})(this,o),this.handlers=[]}var s,y;return s=o,y=[{key:"use",value:function(i,p,c){return this.handlers.push({fulfilled:i,rejected:p,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(i){this.handlers[i]&&(this.handlers[i]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(i){S.forEach(this.handlers,function(p){p!==null&&i(p)})}}],y&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(At(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(At(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),At(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Zo=Al,Jo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yl=typeof URLSearchParams<"u"?URLSearchParams:Qo,hl=FormData;var zr,ml=(typeof navigator>"u"||(zr=navigator.product)!=="ReactNative"&&zr!=="NativeScript"&&zr!=="NS")&&typeof window<"u"&&typeof document<"u",bl=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const on={isBrowser:!0,classes:{URLSearchParams:yl,FormData:hl,Blob},isStandardBrowserEnv:ml,isStandardBrowserWebWorkerEnv:bl,protocols:["http","https","file","blob","url","data"]},Xo=function(o){function s(i,p,c,d){var m=i[d++],h=Number.isFinite(+m),x=d>=i.length;return m=!m&&S.isArray(c)?c.length:m,x?(S.hasOwnProp(c,m)?c[m]=[c[m],p]:c[m]=p,!h):(c[m]&&S.isObject(c[m])||(c[m]=[]),s(i,p,c[m],d)&&S.isArray(c[m])&&(c[m]=function(w){var j,ne,H={},N=Object.keys(w),U=N.length;for(j=0;j<U;j++)H[ne=N[j]]=w[ne];return H}(c[m])),!h)}if(S.isFormData(o)&&S.isFunction(o.entries)){var y={};return S.forEachEntry(o,function(i,p){s(function(c){return S.matchAll(/\w+|\[(\w*)]/g,c).map(function(d){return d[0]==="[]"?"":d[1]||d[0]})}(i),p,y,0)}),y}return null};var gl={"Content-Type":void 0},Vt={transitional:Jo,adapter:["xhr","http"],transformRequest:[function(o,s){var y,i=s.getContentType()||"",p=i.indexOf("application/json")>-1,c=S.isObject(o);if(c&&S.isHTMLForm(o)&&(o=new FormData(o)),S.isFormData(o))return p&&p?JSON.stringify(Xo(o)):o;if(S.isArrayBuffer(o)||S.isBuffer(o)||S.isStream(o)||S.isFile(o)||S.isBlob(o))return o;if(S.isArrayBufferView(o))return o.buffer;if(S.isURLSearchParams(o))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();if(c){if(i.indexOf("application/x-www-form-urlencoded")>-1)return function(m,h){return Qt(m,new on.classes.URLSearchParams,Object.assign({visitor:function(x,w,j,ne){return on.isNode&&S.isBuffer(x)?(this.append(w,x.toString("base64")),!1):ne.defaultVisitor.apply(this,arguments)}},h))}(o,this.formSerializer).toString();if((y=S.isFileList(o))||i.indexOf("multipart/form-data")>-1){var d=this.env&&this.env.FormData;return Qt(y?{"files[]":o}:o,d&&new d,this.formSerializer)}}return c||p?(s.setContentType("application/json",!1),function(m){if(S.isString(m))try{return(0,JSON.parse)(m),S.trim(m)}catch(h){if(h.name!=="SyntaxError")throw h}return(0,JSON.stringify)(m)}(o)):o}],transformResponse:[function(o){var s=this.transitional||Vt.transitional,y=s&&s.forcedJSONParsing,i=this.responseType==="json";if(o&&S.isString(o)&&(y&&!this.responseType||i)){var p=!(s&&s.silentJSONParsing)&&i;try{return JSON.parse(o)}catch(c){if(p)throw c.name==="SyntaxError"?le.from(c,le.ERR_BAD_RESPONSE,this,null,this.response):c}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:on.classes.FormData,Blob:on.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};S.forEach(["delete","get","head"],function(o){Vt.headers[o]={}}),S.forEach(["post","put","patch"],function(o){Vt.headers[o]=S.merge(gl)});const qr=Vt;var vl=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function yt(o){return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},yt(o)}function $o(o,s){(s==null||s>o.length)&&(s=o.length);for(var y=0,i=new Array(s);y<s;y++)i[y]=o[y];return i}function Go(o,s){for(var y=0;y<s.length;y++){var i=s[y];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,(p=function(c){if(yt(c)!=="object"||c===null)return c;var d=c[Symbol.toPrimitive];if(d!==void 0){var m=d.call(c,"string");if(yt(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(i.key),yt(p)==="symbol"?p:String(p)),i)}var p}var ea=Symbol("internals");function ht(o){return o&&String(o).trim().toLowerCase()}function Zt(o){return o===!1||o==null?o:S.isArray(o)?o.map(Zt):String(o)}function na(o,s,y,i){return S.isFunction(i)?i.call(this,s,y):S.isString(s)?S.isString(i)?s.indexOf(i)!==-1:S.isRegExp(i)?i.test(s):void 0:void 0}var Jt=function(){function o(p){(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),p&&this.set(p)}var s,y,i;return s=o,y=[{key:"set",value:function(p,c,d){var m=this;function h(U,V,ae){var Ye=ht(V);if(!Ye)throw new Error("header name must be a non-empty string");var Ce=S.findKey(m,Ye);(!Ce||m[Ce]===void 0||ae===!0||ae===void 0&&m[Ce]!==!1)&&(m[Ce||V]=Zt(U))}var x,w,j,ne,H,N=function(U,V){return S.forEach(U,function(ae,Ye){return h(ae,Ye,V)})};return S.isPlainObject(p)||p instanceof this.constructor?N(p,c):S.isString(p)&&(p=p.trim())&&!/^[-_a-zA-Z]+$/.test(p.trim())?N((H={},(x=p)&&x.split(`
`).forEach(function(U){ne=U.indexOf(":"),w=U.substring(0,ne).trim().toLowerCase(),j=U.substring(ne+1).trim(),!w||H[w]&&vl[w]||(w==="set-cookie"?H[w]?H[w].push(j):H[w]=[j]:H[w]=H[w]?H[w]+", "+j:j)}),H),c):p!=null&&h(c,p,d),this}},{key:"get",value:function(p,c){if(p=ht(p)){var d=S.findKey(this,p);if(d){var m=this[d];if(!c)return m;if(c===!0)return function(h){for(var x,w=Object.create(null),j=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;x=j.exec(h);)w[x[1]]=x[2];return w}(m);if(S.isFunction(c))return c.call(this,m,d);if(S.isRegExp(c))return c.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(p,c){if(p=ht(p)){var d=S.findKey(this,p);return!(!d||c&&!na(0,this[d],d,c))}return!1}},{key:"delete",value:function(p,c){var d=this,m=!1;function h(x){if(x=ht(x)){var w=S.findKey(d,x);!w||c&&!na(0,d[w],w,c)||(delete d[w],m=!0)}}return S.isArray(p)?p.forEach(h):h(p),m}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(p){var c=this,d={};return S.forEach(this,function(m,h){var x=S.findKey(d,h);if(x)return c[x]=Zt(m),void delete c[h];var w=p?function(j){return j.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(ne,H,N){return H.toUpperCase()+N})}(h):String(h).trim();w!==h&&delete c[h],c[w]=Zt(m),d[w]=!0}),this}},{key:"concat",value:function(){for(var p,c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];return(p=this.constructor).concat.apply(p,[this].concat(d))}},{key:"toJSON",value:function(p){var c=Object.create(null);return S.forEach(this,function(d,m){d!=null&&d!==!1&&(c[m]=p&&S.isArray(d)?d.join(", "):d)}),c}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(p){var c,d=function(m){if(Array.isArray(m))return m}(c=p)||function(m){var h=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(h!=null){var x,w,j,ne,H=[],N=!0,U=!1;try{for(j=(h=h.call(m)).next;!(N=(x=j.call(h)).done)&&(H.push(x.value),H.length!==2);N=!0);}catch(V){U=!0,w=V}finally{try{if(!N&&h.return!=null&&(ne=h.return(),Object(ne)!==ne))return}finally{if(U)throw w}}return H}}(c)||function(m){if(m){if(typeof m=="string")return $o(m,2);var h=Object.prototype.toString.call(m).slice(8,-1);return h==="Object"&&m.constructor&&(h=m.constructor.name),h==="Map"||h==="Set"?Array.from(m):h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?$o(m,2):void 0}}(c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();return d[0]+": "+d[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],i=[{key:"from",value:function(p){return p instanceof this?p:new this(p)}},{key:"concat",value:function(p){for(var c=new this(p),d=arguments.length,m=new Array(d>1?d-1:0),h=1;h<d;h++)m[h-1]=arguments[h];return m.forEach(function(x){return c.set(x)}),c}},{key:"accessor",value:function(p){var c=(this[ea]=this[ea]={accessors:{}}).accessors,d=this.prototype;function m(h){var x=ht(h);c[x]||(function(w,j){var ne=S.toCamelCase(" "+j);["get","set","has"].forEach(function(H){Object.defineProperty(w,H+ne,{value:function(N,U,V){return this[H].call(this,j,N,U,V)},configurable:!0})})}(d,h),c[x]=!0)}return S.isArray(p)?p.forEach(m):m(p),this}}],y&&Go(s.prototype,y),i&&Go(s,i),Object.defineProperty(s,"prototype",{writable:!1}),o}();Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),S.freezeMethods(Jt.prototype),S.freezeMethods(Jt);const hn=Jt;function Dr(o,s){var y=this||qr,i=s||y,p=hn.from(i.headers),c=i.data;return S.forEach(o,function(d){c=d.call(y,c,p.normalize(),s?s.status:void 0)}),p.normalize(),c}function ta(o){return!(!o||!o.__CANCEL__)}function ra(o,s,y){le.call(this,o??"canceled",le.ERR_CANCELED,s,y),this.name="CanceledError"}S.inherits(ra,le,{__CANCEL__:!0});const Xt=ra,xl=on.isStandardBrowserEnv?{write:function(o,s,y,i,p,c){var d=[];d.push(o+"="+encodeURIComponent(s)),S.isNumber(y)&&d.push("expires="+new Date(y).toGMTString()),S.isString(i)&&d.push("path="+i),S.isString(p)&&d.push("domain="+p),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(o){var s=document.cookie.match(new RegExp("(^|;\\s*)("+o+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(o){this.write(o,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function oa(o,s){return o&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)?function(y,i){return i?y.replace(/\/+$/,"")+"/"+i.replace(/^\/+/,""):y}(o,s):s}const El=on.isStandardBrowserEnv?function(){var o,s=/(msie|trident)/i.test(navigator.userAgent),y=document.createElement("a");function i(p){var c=p;return s&&(y.setAttribute("href",c),c=y.href),y.setAttribute("href",c),{href:y.href,protocol:y.protocol?y.protocol.replace(/:$/,""):"",host:y.host,search:y.search?y.search.replace(/^\?/,""):"",hash:y.hash?y.hash.replace(/^#/,""):"",hostname:y.hostname,port:y.port,pathname:y.pathname.charAt(0)==="/"?y.pathname:"/"+y.pathname}}return o=i(window.location.href),function(p){var c=S.isString(p)?i(p):p;return c.protocol===o.protocol&&c.host===o.host}}():function(){return!0};function aa(o,s){var y=0,i=function(p,c){p=p||10;var d,m=new Array(p),h=new Array(p),x=0,w=0;return c=c!==void 0?c:1e3,function(j){var ne=Date.now(),H=h[w];d||(d=ne),m[x]=j,h[x]=ne;for(var N=w,U=0;N!==x;)U+=m[N++],N%=p;if((x=(x+1)%p)===w&&(w=(w+1)%p),!(ne-d<c)){var V=H&&ne-H;return V?Math.round(1e3*U/V):void 0}}}(50,250);return function(p){var c=p.loaded,d=p.lengthComputable?p.total:void 0,m=c-y,h=i(m);y=c;var x={loaded:c,total:d,progress:d?c/d:void 0,bytes:m,rate:h||void 0,estimated:h&&d&&c<=d?(d-c)/h:void 0,event:p};x[s?"download":"upload"]=!0,o(x)}}var Mr={http:null,xhr:typeof XMLHttpRequest<"u"&&function(o){return new Promise(function(s,y){var i,p=o.data,c=hn.from(o.headers).normalize(),d=o.responseType;function m(){o.cancelToken&&o.cancelToken.unsubscribe(i),o.signal&&o.signal.removeEventListener("abort",i)}S.isFormData(p)&&(on.isStandardBrowserEnv||on.isStandardBrowserWebWorkerEnv)&&c.setContentType(!1);var h=new XMLHttpRequest;if(o.auth){var x=o.auth.username||"",w=o.auth.password?unescape(encodeURIComponent(o.auth.password)):"";c.set("Authorization","Basic "+btoa(x+":"+w))}var j=oa(o.baseURL,o.url);function ne(){if(h){var V=hn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders());(function(ae,Ye,Ce){var be=Ce.config.validateStatus;Ce.status&&be&&!be(Ce.status)?Ye(new le("Request failed with status code "+Ce.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(Ce.status/100)-4],Ce.config,Ce.request,Ce)):ae(Ce)})(function(ae){s(ae),m()},function(ae){y(ae),m()},{data:d&&d!=="text"&&d!=="json"?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:V,config:o,request:h}),h=null}}if(h.open(o.method.toUpperCase(),Vo(j,o.params,o.paramsSerializer),!0),h.timeout=o.timeout,"onloadend"in h?h.onloadend=ne:h.onreadystatechange=function(){h&&h.readyState===4&&(h.status!==0||h.responseURL&&h.responseURL.indexOf("file:")===0)&&setTimeout(ne)},h.onabort=function(){h&&(y(new le("Request aborted",le.ECONNABORTED,o,h)),h=null)},h.onerror=function(){y(new le("Network Error",le.ERR_NETWORK,o,h)),h=null},h.ontimeout=function(){var V=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded",ae=o.transitional||Jo;o.timeoutErrorMessage&&(V=o.timeoutErrorMessage),y(new le(V,ae.clarifyTimeoutError?le.ETIMEDOUT:le.ECONNABORTED,o,h)),h=null},on.isStandardBrowserEnv){var H=(o.withCredentials||El(j))&&o.xsrfCookieName&&xl.read(o.xsrfCookieName);H&&c.set(o.xsrfHeaderName,H)}p===void 0&&c.setContentType(null),"setRequestHeader"in h&&S.forEach(c.toJSON(),function(V,ae){h.setRequestHeader(ae,V)}),S.isUndefined(o.withCredentials)||(h.withCredentials=!!o.withCredentials),d&&d!=="json"&&(h.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&h.addEventListener("progress",aa(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",aa(o.onUploadProgress)),(o.cancelToken||o.signal)&&(i=function(V){h&&(y(!V||V.type?new Xt(null,o,h):V),h.abort(),h=null)},o.cancelToken&&o.cancelToken.subscribe(i),o.signal&&(o.signal.aborted?i():o.signal.addEventListener("abort",i)));var N,U=(N=/^([-+\w]{1,25})(:?\/\/|:)/.exec(j))&&N[1]||"";U&&on.protocols.indexOf(U)===-1?y(new le("Unsupported protocol "+U+":",le.ERR_BAD_REQUEST,o)):h.send(p||null)})}};function jr(o){if(o.cancelToken&&o.cancelToken.throwIfRequested(),o.signal&&o.signal.aborted)throw new Xt(null,o)}function ia(o){return jr(o),o.headers=hn.from(o.headers),o.data=Dr.call(o,o.transformRequest),["post","put","patch"].indexOf(o.method)!==-1&&o.headers.setContentType("application/x-www-form-urlencoded",!1),function(s){for(var y,i,p=(s=S.isArray(s)?s:[s]).length,c=0;c<p&&(y=s[c],!(i=S.isString(y)?Mr[y.toLowerCase()]:y));c++);if(!i)throw i===!1?new le("Adapter ".concat(y," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(S.hasOwnProp(Mr,y)?"Adapter '".concat(y,"' is not available in the build"):"Unknown adapter '".concat(y,"'"));if(!S.isFunction(i))throw new TypeError("adapter is not a function");return i}(o.adapter||qr.adapter)(o).then(function(s){return jr(o),s.data=Dr.call(o,o.transformResponse,s),s.headers=hn.from(s.headers),s},function(s){return ta(s)||(jr(o),s&&s.response&&(s.response.data=Dr.call(o,o.transformResponse,s.response),s.response.headers=hn.from(s.response.headers))),Promise.reject(s)})}S.forEach(Mr,function(o,s){if(o){try{Object.defineProperty(o,"name",{value:s})}catch{}Object.defineProperty(o,"adapterName",{value:s})}});var la=function(o){return o instanceof hn?o.toJSON():o};function Zn(o,s){s=s||{};var y={};function i(x,w,j){return S.isPlainObject(x)&&S.isPlainObject(w)?S.merge.call({caseless:j},x,w):S.isPlainObject(w)?S.merge({},w):S.isArray(w)?w.slice():w}function p(x,w,j){return S.isUndefined(w)?S.isUndefined(x)?void 0:i(void 0,x,j):i(x,w,j)}function c(x,w){if(!S.isUndefined(w))return i(void 0,w)}function d(x,w){return S.isUndefined(w)?S.isUndefined(x)?void 0:i(void 0,x):i(void 0,w)}function m(x,w,j){return j in s?i(x,w):j in o?i(void 0,x):void 0}var h={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:function(x,w){return p(la(x),la(w),!0)}};return S.forEach(Object.keys(o).concat(Object.keys(s)),function(x){var w=h[x]||p,j=w(o[x],s[x],x);S.isUndefined(j)&&w!==m||(y[x]=j)}),y}function $t(o){return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$t(o)}var Ur={};["object","boolean","number","function","string","symbol"].forEach(function(o,s){Ur[o]=function(y){return $t(y)===o||"a"+(s<1?"n ":" ")+o}});var sa={};Ur.transitional=function(o,s,y){function i(p,c){return"[Axios v1.2.3] Transitional option '"+p+"'"+c+(y?". "+y:"")}return function(p,c,d){if(o===!1)throw new le(i(c," has been removed"+(s?" in "+s:"")),le.ERR_DEPRECATED);return s&&!sa[c]&&(sa[c]=!0,console.warn(i(c," has been deprecated since v"+s+" and will be removed in the near future"))),!o||o(p,c,d)}};const Fr={assertOptions:function(o,s,y){if($t(o)!=="object")throw new le("options must be an object",le.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(o),p=i.length;p-- >0;){var c=i[p],d=s[c];if(d){var m=o[c],h=m===void 0||d(m,c,o);if(h!==!0)throw new le("option "+c+" must be "+h,le.ERR_BAD_OPTION_VALUE)}else if(y!==!0)throw new le("Unknown option "+c,le.ERR_BAD_OPTION)}},validators:Ur};function mt(o){return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},mt(o)}var kn=Fr.validators,Gt=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.defaults=i,this.interceptors={request:new Zo,response:new Zo}}var s,y;return s=o,(y=[{key:"request",value:function(i,p){typeof i=="string"?(p=p||{}).url=i:p=i||{};var c,d=p=Zn(this.defaults,p),m=d.transitional,h=d.paramsSerializer,x=d.headers;m!==void 0&&Fr.assertOptions(m,{silentJSONParsing:kn.transitional(kn.boolean),forcedJSONParsing:kn.transitional(kn.boolean),clarifyTimeoutError:kn.transitional(kn.boolean)},!1),h!==void 0&&Fr.assertOptions(h,{encode:kn.function,serialize:kn.function},!0),p.method=(p.method||this.defaults.method||"get").toLowerCase(),(c=x&&S.merge(x.common,x[p.method]))&&S.forEach(["delete","get","head","post","put","patch","common"],function(be){delete x[be]}),p.headers=hn.concat(c,x);var w=[],j=!0;this.interceptors.request.forEach(function(be){typeof be.runWhen=="function"&&be.runWhen(p)===!1||(j=j&&be.synchronous,w.unshift(be.fulfilled,be.rejected))});var ne,H=[];this.interceptors.response.forEach(function(be){H.push(be.fulfilled,be.rejected)});var N,U=0;if(!j){var V=[ia.bind(this),void 0];for(V.unshift.apply(V,w),V.push.apply(V,H),N=V.length,ne=Promise.resolve(p);U<N;)ne=ne.then(V[U++],V[U++]);return ne}N=w.length;var ae=p;for(U=0;U<N;){var Ye=w[U++],Ce=w[U++];try{ae=Ye(ae)}catch(be){Ce.call(this,be);break}}try{ne=ia.call(this,ae)}catch(be){return Promise.reject(be)}for(U=0,N=H.length;U<N;)ne=ne.then(H[U++],H[U++]);return ne}},{key:"getUri",value:function(i){return Vo(oa((i=Zn(this.defaults,i)).baseURL,i.url),i.params,i.paramsSerializer)}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(mt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(mt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),mt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();S.forEach(["delete","get","head","options"],function(o){Gt.prototype[o]=function(s,y){return this.request(Zn(y||{},{method:o,url:s,data:(y||{}).data}))}}),S.forEach(["post","put","patch"],function(o){function s(y){return function(i,p,c){return this.request(Zn(c||{},{method:o,headers:y?{"Content-Type":"multipart/form-data"}:{},url:i,data:p}))}}Gt.prototype[o]=s(),Gt.prototype[o+"Form"]=s(!0)});const er=Gt;function bt(o){return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},bt(o)}function pa(o,s){for(var y=0;y<s.length;y++){var i=s[y];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,(p=function(c){if(bt(c)!=="object"||c===null)return c;var d=c[Symbol.toPrimitive];if(d!==void 0){var m=d.call(c,"string");if(bt(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(i.key),bt(p)==="symbol"?p:String(p)),i)}var p}var wl=function(){function o(p){if(function(m,h){if(!(m instanceof h))throw new TypeError("Cannot call a class as a function")}(this,o),typeof p!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(m){c=m});var d=this;this.promise.then(function(m){if(d._listeners){for(var h=d._listeners.length;h-- >0;)d._listeners[h](m);d._listeners=null}}),this.promise.then=function(m){var h,x=new Promise(function(w){d.subscribe(w),h=w}).then(m);return x.cancel=function(){d.unsubscribe(h)},x},p(function(m,h,x){d.reason||(d.reason=new Xt(m,h,x),c(d.reason))})}var s,y,i;return s=o,y=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(p){this.reason?p(this.reason):this._listeners?this._listeners.push(p):this._listeners=[p]}},{key:"unsubscribe",value:function(p){if(this._listeners){var c=this._listeners.indexOf(p);c!==-1&&this._listeners.splice(c,1)}}}],i=[{key:"source",value:function(){var p;return{token:new o(function(c){p=c}),cancel:p}}}],y&&pa(s.prototype,y),i&&pa(s,i),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Cl=wl;function da(o,s){(s==null||s>o.length)&&(s=o.length);for(var y=0,i=new Array(s);y<s;y++)i[y]=o[y];return i}var Yr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yr).forEach(function(o){var s,y=function(c){if(Array.isArray(c))return c}(s=o)||function(c){var d=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var m,h,x,w,j=[],ne=!0,H=!1;try{for(x=(d=d.call(c)).next;!(ne=(m=x.call(d)).done)&&(j.push(m.value),j.length!==2);ne=!0);}catch(N){H=!0,h=N}finally{try{if(!ne&&d.return!=null&&(w=d.return(),Object(w)!==w))return}finally{if(H)throw h}}return j}}(s)||function(c){if(c){if(typeof c=="string")return da(c,2);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?da(c,2):void 0}}(s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),i=y[0],p=y[1];Yr[p]=i});const kl=Yr;var xe=function o(s){var y=new er(s),i=de(er.prototype.request,y);return S.extend(i,er.prototype,y,{allOwnKeys:!0}),S.extend(i,y,null,{allOwnKeys:!0}),i.create=function(p){return o(Zn(s,p))},i}(qr);xe.Axios=er,xe.CanceledError=Xt,xe.CancelToken=Cl,xe.isCancel=ta,xe.VERSION="1.2.3",xe.toFormData=Qt,xe.AxiosError=le,xe.Cancel=xe.CanceledError,xe.all=function(o){return Promise.all(o)},xe.spread=function(o){return function(s){return o.apply(null,s)}},xe.isAxiosError=function(o){return S.isObject(o)&&o.isAxiosError===!0},xe.mergeConfig=Zn,xe.AxiosHeaders=hn,xe.formToJSON=function(o){return Xo(S.isHTMLForm(o)?new FormData(o):o)},xe.HttpStatusCode=kl,xe.default=xe;const ca=xe,Bl={send:function(o){ca.post(o.url,o.data).then(function(s){var y=s.data;y&&y.code===0?o.success&&o.success(y):o.error&&o.error(y&&y.msg)}).catch(function(s){console.error(s),o.error&&o.error()})},read:function(o){ca.get(o.url).then(function(s){var y=s.data;y&&y.code===0?o.success&&o.success(y.data.map(function(i){return{time:i[0],type:i[1],color:i[2],author:i[3],text:i[4]}})):o.error&&o.error(y&&y.msg)}).catch(function(s){console.error(s),o.error&&o.error()})}};function Nr(o){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Nr(o)}function Sl(o){var s=this;this.lang=o,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(y){return y=y.toLowerCase(),Jn[s.lang]&&Jn[s.lang][y]?Jn[s.lang][y]:Jn[s.fallbackLang]&&Jn[s.fallbackLang][y]?Jn[s.fallbackLang][y]:Hr[y]?Hr[y]:y}}var Hr={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Jn={en:Hr,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Il=t(730),_l=t.n(Il),Ll=t(74),Tl=t.n(Ll),Ol=t(437),Pl=t.n(Ol),Rl=t(644),zl=t.n(Rl),ql=t(324),Dl=t.n(ql),Ml=t(574),jl=t.n(Ml),Ul=t(300),Fl=t.n(Ul),Yl=t(934),Nl=t.n(Yl),Hl=t(428),Wl=t.n(Hl),Kl=t(807),Ql=t.n(Kl),Vl=t(338),Zl=t.n(Vl),Jl=t(254),Xl=t.n(Jl),$l=t(965),Gl=t.n($l),es=t(113),ns=t.n(es),ts=t(251),rs=t.n(ts),os=t(410),as=t.n(os),is=t(182),ls=t.n(is),ss=t(193),ps=t.n(ss);const Je={play:_l(),pause:Tl(),volumeUp:Pl(),volumeDown:zl(),volumeOff:Dl(),full:jl(),fullWeb:Fl(),setting:Nl(),right:Wl(),comment:Ql(),commentOff:Zl(),send:Xl(),pallette:Gl(),camera:ns(),subtitle:as(),loading:ls(),airplay:rs(),chromecast:ps()};var ds=t(916),cs=t.n(ds);function gt(o){return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},gt(o)}function ua(o,s){for(var y=0;y<s.length;y++){var i=s[y];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,(p=function(c){if(gt(c)!=="object"||c===null)return c;var d=c[Symbol.toPrimitive];if(d!==void 0){var m=d.call(c,"string");if(gt(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(i.key),gt(p)==="symbol"?p:String(p)),i)}var p}var us=function(){function o(p){(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),this.container=p.container,this.options=p.options,this.index=p.index,this.tran=p.tran,this.init()}var s,y,i;return s=o,i=[{key:"NewNotice",value:function(p,c,d){var m=document.createElement("div");return m.classList.add("dplayer-notice"),m.style.opacity=c,m.innerText=p,d&&(m.id="dplayer-notice-".concat(d)),m}}],(y=[{key:"init",value:function(){this.container.innerHTML=cs()({options:this.options,index:this.index,tran:this.tran,icons:Je,mobile:F.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!F.isSafari||F.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&ua(s.prototype,y),i&&ua(s,i),Object.defineProperty(s,"prototype",{writable:!1}),o}();const fa=us;function Xn(o){return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Xn(o)}var fs=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.options=i,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var s,y;return s=o,y=[{key:"load",value:function(){var i,p=this;i=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var c=(this.options.api.addition||[]).slice(0);c.push(i),this.events&&this.events.trigger("danmaku_load_start",c),this._readAllEndpoints(c,function(d){p.dan=[].concat.apply([],d).sort(function(m,h){return m.time-h.time}),window.requestAnimationFrame(function(){p.frame()}),p.options.callback(),p.events&&p.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(i){this.options.api=i,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(i,p){for(var c=this,d=[],m=0,h=function(w){c.options.apiBackend.read({url:i[w],success:function(j){d[w]=j,++m===i.length&&p(d)},error:function(j){c.options.error(j||c.options.tran("danmaku-failed")),d[w]=[],++m===i.length&&p(d)}})},x=0;x<i.length;++x)h(x)}},{key:"send",value:function(i,p){var c=this,d={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:i.text,color:i.color,type:i.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:d,success:p,error:function(h){c.options.error(h||c.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,d),this.danIndex++;var m={text:this.htmlEncode(d.text),color:d.color,type:d.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(m),this.events&&this.events.trigger("danmaku_send",d)}},{key:"frame",value:function(){var i=this;if(this.dan.length&&!this.paused&&this.showing){for(var p=this.dan[this.danIndex],c=[];p&&this.options.time()>parseFloat(p.time);)c.push(p),p=this.dan[++this.danIndex];this.draw(c)}window.requestAnimationFrame(function(){i.frame()})}},{key:"opacity",value:function(i){if(i!==void 0){for(var p=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<p.length;c++)p[c].style.opacity=i;this._opacity=i,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(i){var p=this;if(this.showing){var c=this.options.height,d=this.container.offsetWidth,m=this.container.offsetHeight,h=parseInt(m/c),x=function(U){var V=U.offsetWidth||parseInt(U.style.width),ae=U.getBoundingClientRect().right||p.container.getBoundingClientRect().right+V;return p.container.getBoundingClientRect().right-ae},w=function(U){return(d+U)/5},j=function(U,V,ae){for(var Ye=d/w(ae),Ce=function(Pn){var Gn=p.danTunnel[V][Pn+""];if(!Gn||!Gn.length)return p.danTunnel[V][Pn+""]=[U],U.addEventListener("animationend",function(){p.danTunnel[V][Pn+""].splice(0,1)}),{v:Pn%h};if(V!=="right")return"continue";for(var qt=0;qt<Gn.length;qt++){var ga=x(Gn[qt])-10;if(ga<=d-Ye*w(parseInt(Gn[qt].style.width))||ga<=0)break;if(qt===Gn.length-1)return p.danTunnel[V][Pn+""].push(U),U.addEventListener("animationend",function(){p.danTunnel[V][Pn+""].splice(0,1)}),{v:Pn%h}}},be=0;p.unlimited||be<h;be++){var Kr=Ce(be);if(Kr!=="continue"&&Xn(Kr)==="object")return Kr.v}return-1};Object.prototype.toString.call(i)!=="[object Array]"&&(i=[i]);for(var ne=document.createDocumentFragment(),H=function(){i[N].type=F.number2Type(i[N].type),i[N].color||(i[N].color=16777215);var U=document.createElement("div");U.classList.add("dplayer-danmaku-item"),U.classList.add("dplayer-danmaku-".concat(i[N].type)),i[N].border?U.innerHTML='<span style="border:'.concat(i[N].border,'">').concat(i[N].text,"</span>"):U.innerHTML=i[N].text,U.style.opacity=p._opacity,U.style.color=F.number2Color(i[N].color),U.addEventListener("animationend",function(){p.container.removeChild(U)});var V,ae=p._measure(i[N].text);switch(i[N].type){case"right":(V=j(U,i[N].type,ae))>=0&&(U.style.width=ae+1+"px",U.style.top=c*V+"px",U.style.transform="translateX(-".concat(d,"px)"));break;case"top":(V=j(U,i[N].type))>=0&&(U.style.top=c*V+"px");break;case"bottom":(V=j(U,i[N].type))>=0&&(U.style.bottom=c*V+"px");break;default:console.error("Can't handled danmaku type: ".concat(i[N].type))}V>=0&&(U.classList.add("dplayer-danmaku-move"),U.style.animationDuration=p._danAnimation(i[N].type),ne.appendChild(U))},N=0;N<i.length;N++)H();return this.container.appendChild(ne),ne}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(i){if(!this.context){var p=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=p.getPropertyValue("font")}return this.context.measureText(i).width}},{key:"seek",value:function(){this.clear();for(var i=0;i<this.dan.length;i++){if(this.dan[i].time>=this.options.time()){this.danIndex=i;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var i=this.container.offsetWidth,p=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<p.length;c++)p[c].style.transform="translateX(-".concat(i,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(i){this.unlimited=i}},{key:"speed",value:function(i){this.options.api.speedRate=i}},{key:"_danAnimation",value:function(i){var p=this.options.api.speedRate||1,c=!!this.player.fullScreen.isFullScreen();return{top:"".concat((c?6:4)/p,"s"),right:"".concat((c?8:5)/p,"s"),bottom:"".concat((c?6:4)/p,"s")}[i]}}],y&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Xn(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Xn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Xn(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const As=fs;function vt(o){return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},vt(o)}const ys=function(){function o(){(function(i,p){if(!(i instanceof p))throw new TypeError("Cannot call a class as a function")})(this,o),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var s,y;return s=o,(y=[{key:"on",value:function(i,p){this.type(i)&&typeof p=="function"&&(this.events[i]||(this.events[i]=[]),this.events[i].push(p))}},{key:"trigger",value:function(i,p){if(this.events[i]&&this.events[i].length)for(var c=0;c<this.events[i].length;c++)this.events[i][c](p)}},{key:"type",value:function(i){return this.playerEvents.indexOf(i)!==-1?"player":this.videoEvents.indexOf(i)!==-1?"video":(console.error("Unknown event name: ".concat(i)),null)}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(vt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(vt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),vt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();function xt(o){return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},xt(o)}var hs=function(){function o(i){var p=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){p.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){p.player.resize(),F.setScrollPosition(p.lastScrollPosition)}),this.fullscreenchange=function(){p.player.resize(),p.isFullScreen("browser")?p.player.events.trigger("fullscreen"):(F.setScrollPosition(p.lastScrollPosition),p.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var c=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;c&&c!==p.player.container||(p.player.resize(),c?p.player.events.trigger("fullscreen"):(F.setScrollPosition(p.lastScrollPosition),p.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var s,y;return s=o,y=[{key:"isFullScreen",value:function(){switch(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser"){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",p=i==="browser"?"web":"browser",c=this.isFullScreen(p);switch(c||(this.lastScrollPosition=F.getScrollPosition()),i){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}c&&this.cancel(p)}},{key:"cancel",value:function(){switch(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser"){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(i)?this.cancel(i):this.request(i)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],y&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(xt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(xt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),xt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const ms=hs;function Et(o){return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Et(o)}var bs=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:i.options.hasOwnProperty("volume")?i.options.volume:.7,unlimited:(i.options.danmaku&&i.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var s,y;return s=o,(y=[{key:"init",value:function(){for(var i in this.storageName){var p=this.storageName[i];this.data[i]=parseFloat(F.storage.get(p)||this.default[i])}}},{key:"get",value:function(i){return this.data[i]}},{key:"set",value:function(i,p){this.data[i]=p,F.storage.set(this.storageName[i],p)}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Et(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Et(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Et(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const gs=bs;function wt(o){return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},wt(o)}var vs=function(){function o(i,p,c,d){(function(m,h){if(!(m instanceof h))throw new TypeError("Cannot call a class as a function")})(this,o),this.container=i,this.video=p,this.options=c,this.events=d,this.init()}var s,y;return s=o,y=[{key:"init",value:function(){var i=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var p=this.video.textTracks[0];p.oncuechange=function(){var c=p.activeCues[p.activeCues.length-1];if(i.container.innerHTML="",c){var d=document.createElement("div");d.appendChild(c.getCueAsHTML());var m=d.innerHTML.split(/\r?\n/).map(function(h){return"<p>".concat(h,"</p>")}).join("");i.container.innerHTML=m}i.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],y&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(wt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(wt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),wt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const xs=vs;function Ct(o){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ct(o)}var Es=function(){function o(i){var p=this;(function(h,x){if(!(h instanceof x))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.player.template.mask.addEventListener("click",function(){p.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){p.adaptiveHeight(),p.show()});for(var c=this.player.template.subtitlesItem.length-1,d=function(h){p.player.template.subtitlesItem[h].addEventListener("click",function(){p.hide(),p.player.options.subtitle.index!==h&&(p.player.template.subtitle.innerHTML="<p></p>",p.player.template.subtrack.src=p.player.template.subtitlesItem[h].dataset.subtitle,p.player.options.subtitle.index=h,p.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&p.subContainerShow())})},m=0;m<c;m++)d(m);this.player.template.subtitlesItem[c].addEventListener("click",function(){p.hide(),p.player.options.subtitle.index!==c&&(p.player.template.subtitle.innerHTML="<p></p>",p.player.template.subtrack.src="",p.player.options.subtitle.index=c,p.subContainerHide())})}var s,y;return s=o,(y=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var i=30*this.player.template.subtitlesItem.length+14,p=.8*this.player.template.videoWrap.offsetHeight;i>=p-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=p-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=p-50+"px")}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Ct(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Ct(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Ct(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const ws=Es;function kt(o){return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},kt(o)}var Cs=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.elements={},this.elements.volume=i.volumeBar,this.elements.played=i.playedBar,this.elements.loaded=i.loadedBar,this.elements.danmaku=i.danmakuOpacityBar}var s,y;return s=o,(y=[{key:"set",value:function(i,p,c){p=Math.max(p,0),p=Math.min(p,1),this.elements[i].style[c]=100*p+"%"}},{key:"get",value:function(i){return parseFloat(this.elements[i].style.width)/100}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(kt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(kt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),kt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const ks=Cs;function Bt(o){return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Bt(o)}var Bs=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(p){window.setTimeout(p,1e3/60)},this.types=["loading","info","fps"],this.init()}var s,y;return s=o,(y=[{key:"init",value:function(){var i=this;this.types.map(function(p){return p!=="fps"&&i["init".concat(p,"Checker")](),p})}},{key:"initloadingChecker",value:function(){var i=this,p=0,c=0,d=!1;this.loadingChecker=setInterval(function(){i.enableloadingChecker&&(c=i.player.video.currentTime,d||c!==p||i.player.video.paused||(i.player.container.classList.add("dplayer-loading"),d=!0),d&&c>p&&!i.player.video.paused&&(i.player.container.classList.remove("dplayer-loading"),d=!1),p=c)},100)}},{key:"initfpsChecker",value:function(){var i=this;window.requestAnimationFrame(function(){if(i.enablefpsChecker)if(i.initfpsChecker(),i.fpsStart){i.fpsIndex++;var p=new Date;p-i.fpsStart>1e3&&(i.player.infoPanel.fps(i.fpsIndex/(p-i.fpsStart)*1e3),i.fpsStart=new Date,i.fpsIndex=0)}else i.fpsStart=new Date,i.fpsIndex=0;else i.fpsStart=0,i.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var i=this;this.infoChecker=setInterval(function(){i.enableinfoChecker&&i.player.infoPanel.update()},1e3)}},{key:"enable",value:function(i){this["enable".concat(i,"Checker")]=!0,i==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(i){this["enable".concat(i,"Checker")]=!1}},{key:"destroy",value:function(){var i=this;this.types.map(function(p){return i["enable".concat(p,"Checker")]=!1,i["".concat(p,"Checker")]&&clearInterval(i["".concat(p,"Checker")]),p})}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Bt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Bt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Bt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Ss=Bs;function St(o){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},St(o)}const Is=function(){function o(i){var p=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),this.container=i,this.container.addEventListener("animationend",function(){p.container.classList.remove("dplayer-bezel-transition")})}var s,y;return s=o,(y=[{key:"switch",value:function(i){this.container.innerHTML=i,this.container.classList.add("dplayer-bezel-transition")}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(St(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(St(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),St(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();function It(o){return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},It(o)}var _s=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.container=i.container,this.barWidth=i.barWidth,this.container.style.backgroundImage="url('".concat(i.url,"')"),this.events=i.events}var s,y;return s=o,(y=[{key:"resize",value:function(i,p,c){this.container.style.width="".concat(i,"px"),this.container.style.height="".concat(p,"px"),this.container.style.top="".concat(2-p,"px"),this.barWidth=c}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(i){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(i/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(i-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(It(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(It(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),It(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Ls=_s;function _t(o){return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},_t(o)}var Bn,Aa=!0,Wr=!1,Ts=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.autoHideTimer=0,F.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),F.isMobile||this.initVolumeButton()}var s,y;return s=o,(y=[{key:"initPlayButton",value:function(){var i=this;this.player.template.playButton.addEventListener("click",function(){i.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){i.player.toggle()}),F.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){i.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){i.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){i.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){i.player.toggle()}))}},{key:"initHighlights",value:function(){var i=this;this.player.on("durationchange",function(){if(i.player.video.duration!==1&&i.player.video.duration!==1/0&&i.player.options.highlight){var p=i.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(p,0).forEach(function(m){i.player.template.playedBarWrap.removeChild(m)});for(var c=0;c<i.player.options.highlight.length;c++)if(i.player.options.highlight[c].text&&i.player.options.highlight[c].time){var d=document.createElement("div");d.classList.add("dplayer-highlight"),d.style.left=i.player.options.highlight[c].time/i.player.video.duration*100+"%",d.innerHTML='<span class="dplayer-highlight-text">'+i.player.options.highlight[c].text+"</span>",i.player.template.playedBarWrap.insertBefore(d,i.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var i=this;this.player.options.video.thumbnails&&(this.thumbnails=new Ls({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){i.thumbnails.resize(160,i.player.video.videoHeight/i.player.video.videoWidth*160,i.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var i=this,p=function(d){var m=((d.clientX||d.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.playedBarWrap))/i.player.template.playedBarWrap.clientWidth;m=Math.max(m,0),m=Math.min(m,1),i.player.bar.set("played",m,"width"),i.player.template.ptime.innerHTML=F.secondToTime(m*i.player.video.duration)},c=function d(m){document.removeEventListener(F.nameMap.dragEnd,d),document.removeEventListener(F.nameMap.dragMove,p);var h=((m.clientX||m.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.playedBarWrap))/i.player.template.playedBarWrap.clientWidth;h=Math.max(h,0),h=Math.min(h,1),i.player.bar.set("played",h,"width"),i.player.seek(i.player.bar.get("played")*i.player.video.duration),i.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(F.nameMap.dragStart,function(){i.player.timer.disable("progress"),document.addEventListener(F.nameMap.dragMove,p),document.addEventListener(F.nameMap.dragEnd,c)}),this.player.template.playedBarWrap.addEventListener(F.nameMap.dragMove,function(d){if(i.player.video.duration){var m=i.player.template.playedBarWrap.getBoundingClientRect().left,h=(d.clientX||d.changedTouches[0].clientX)-m;if(h<0||h>i.player.template.playedBarWrap.offsetWidth)return;var x=i.player.video.duration*(h/i.player.template.playedBarWrap.offsetWidth);F.isMobile&&i.thumbnails&&i.thumbnails.show(),i.thumbnails&&i.thumbnails.move(h),i.player.template.playedBarTime.style.left="".concat(h-(x>=3600?25:20),"px"),i.player.template.playedBarTime.innerText=F.secondToTime(x),i.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(F.nameMap.dragEnd,function(){F.isMobile&&i.thumbnails&&i.thumbnails.hide()}),F.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){i.player.video.duration&&(i.thumbnails&&i.thumbnails.show(),i.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){i.player.video.duration&&(i.thumbnails&&i.thumbnails.hide(),i.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var i=this;this.player.template.browserFullButton.addEventListener("click",function(){i.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){i.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var i=this,p=function(d){var m=d||window.event,h=((m.clientX||m.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.volumeBarWrap)-5.5)/35;i.player.volume(h)},c=function d(){document.removeEventListener(F.nameMap.dragEnd,d),document.removeEventListener(F.nameMap.dragMove,p),i.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(d){var m=d||window.event,h=((m.clientX||m.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(i.player.template.volumeBarWrap)-5.5)/35;i.player.volume(h)}),this.player.template.volumeBarWrapWrap.addEventListener(F.nameMap.dragStart,function(){document.addEventListener(F.nameMap.dragMove,p),document.addEventListener(F.nameMap.dragEnd,c),i.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){i.player.video.muted?(i.player.video.muted=!1,i.player.switchVolumeIcon(),i.player.bar.set("volume",i.player.volume(),"width")):(i.player.video.muted=!0,i.player.template.volumeIcon.innerHTML=Je.volumeOff,i.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var i=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(p){p.target.classList.contains("dplayer-quality-item")&&i.player.switchQuality(p.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var i=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var p,c=document.createElement("canvas");c.width=i.player.video.videoWidth,c.height=i.player.video.videoHeight,c.getContext("2d").drawImage(i.player.video,0,0,c.width,c.height),c.toBlob(function(d){p=URL.createObjectURL(d);var m=document.createElement("a");m.href=p,m.download="DPlayer.png",m.style.display="none",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(p),i.player.events.trigger("screenshot",p)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(i){i.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var i=window.document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(i),window.__onGCastApiAvailable=function(p){if(p){var c=new(Bn=window.chrome.cast).SessionRequest(Bn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),d=new Bn.ApiConfig(c,function(){},function(m){m===Bn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",m)});Bn.initialize(d,function(){})}}}},{key:"initChromecastButton",value:function(){var i=this;if(this.player.options.chromecast){Aa&&(Aa=!1,this.initChromecast());var p=function(d,m){i.currentMedia=m},c=function(d){console.error("Error launching media",d)};this.player.template.chromecastButton.addEventListener("click",function(){Wr?(Wr=!1,i.currentMedia.stop(),i.session.stop(),i.initChromecast()):(Wr=!0,Bn.requestSession(function(d){var m,h,x;i.session=d,m=i.player.options.video.url,h=new Bn.media.MediaInfo(m),x=new Bn.media.LoadRequest(h),i.session?i.session.loadMedia(x,p.bind(i,"loadMedia"),c).play():window.open(m)},function(d){d.code==="cancel"?i.session=void 0:console.error("Error selecting a cast device",d)}))})}}},{key:"initSubtitleButton",value:function(){var i=this;this.player.events.on("subtitle_show",function(){i.player.template.subtitleButton.dataset.balloon=i.player.tran("hide-subs"),i.player.template.subtitleButtonInner.style.opacity="",i.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){i.player.template.subtitleButton.dataset.balloon=i.player.tran("show-subs"),i.player.template.subtitleButtonInner.style.opacity="0.4",i.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){i.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var i=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!i.player.video.played.length||i.player.paused||i.disableAutoHide||i.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){F.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(_t(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(_t(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),_t(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Os=Ts;function Lt(o){return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Lt(o)}var Ps=function(){function o(i){var p=this;(function(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.player.template.mask.addEventListener("click",function(){p.hide()}),this.player.template.settingButton.addEventListener("click",function(){p.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){p.player.template.loopToggle.checked=!p.player.template.loopToggle.checked,p.player.template.loopToggle.checked?p.loop=!0:p.loop=!1,p.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){p.player.template.showDanmakuToggle.checked=!p.player.template.showDanmakuToggle.checked,p.player.template.showDanmakuToggle.checked?(p.showDanmaku=!0,p.player.danmaku.show()):(p.showDanmaku=!1,p.player.danmaku.hide()),p.player.user.set("danmaku",p.showDanmaku?1:0),p.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){p.player.template.unlimitDanmakuToggle.checked=!p.player.template.unlimitDanmakuToggle.checked,p.player.template.unlimitDanmakuToggle.checked?(p.unlimitDanmaku=!0,p.player.danmaku.unlimit(!0)):(p.unlimitDanmaku=!1,p.player.danmaku.unlimit(!1)),p.player.user.set("unlimited",p.unlimitDanmaku?1:0),p.hide()}),this.player.template.speed.addEventListener("click",function(){p.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),p.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var c=function(x){p.player.template.speedItem[x].addEventListener("click",function(){p.player.speed(p.player.template.speedItem[x].dataset.speed),p.hide()})},d=0;d<this.player.template.speedItem.length;d++)c(d);if(this.player.danmaku){this.player.on("danmaku_opacity",function(x){p.player.bar.set("danmaku",x,"width"),p.player.user.set("opacity",x)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var m=function(x){var w=x||window.event,j=((w.clientX||w.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(p.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),p.player.danmaku.opacity(j)},h=function x(){document.removeEventListener(F.nameMap.dragEnd,x),document.removeEventListener(F.nameMap.dragMove,m),p.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(x){var w=x||window.event,j=((w.clientX||w.changedTouches[0].clientX)-F.getBoundingClientRectViewLeft(p.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),p.player.danmaku.opacity(j)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(F.nameMap.dragStart,function(){document.addEventListener(F.nameMap.dragMove,m),document.addEventListener(F.nameMap.dragEnd,h),p.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var s,y;return s=o,(y=[{key:"hide",value:function(){var i=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){i.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),i.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Lt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Lt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Lt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Rs=Ps;function Tt(o){return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Tt(o)}var zs=function(){function o(i){var p=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.player.template.mask.addEventListener("click",function(){p.hide()}),this.player.template.commentButton.addEventListener("click",function(){p.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){p.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(p.player.template.commentColorSettingBox.querySelector("input:checked+span")){var c=p.player.template.commentColorSettingBox.querySelector("input:checked").value;p.player.template.commentSettingFill.style.fill=c,p.player.template.commentInput.style.color=c,p.player.template.commentSendFill.style.fill=c}}),this.player.template.commentInput.addEventListener("click",function(){p.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(c){(c||window.event).keyCode===13&&p.send()}),this.player.template.commentSendButton.addEventListener("click",function(){p.send()})}var s,y;return s=o,(y=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var i=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:F.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){i.player.template.commentInput.value="",i.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Tt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Tt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Tt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const qs=zs;function Ot(o){return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ot(o)}var Ds=function(){function o(i){(function(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var s,y;return s=o,(y=[{key:"doHotKey",value:function(i){if(this.player.focus){var p=document.activeElement.tagName.toUpperCase(),c=document.activeElement.getAttribute("contenteditable");if(p!=="INPUT"&&p!=="TEXTAREA"&&c!==""&&c!=="true"){var d,m=i||window.event;switch(m.keyCode){case 32:m.preventDefault(),this.player.toggle();break;case 37:if(m.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(m.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:m.preventDefault(),d=this.player.volume()+.1,this.player.volume(d);break;case 40:m.preventDefault(),d=this.player.volume()-.1,this.player.volume(d)}}}}},{key:"cancelFullScreen",value:function(i){(i||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Ot(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Ot(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Ot(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Ms=Ds;function Pt(o){return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Pt(o)}var js=function(){function o(i){var p=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),this.player=i,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(c,d){p.player.options.contextmenu[d].click&&c.addEventListener("click",function(){p.player.options.contextmenu[d].click(p.player),p.hide()})}),this.contextmenuHandler=function(c){if(p.shown)p.hide();else{var d=c||window.event;d.preventDefault();var m=p.player.container.getBoundingClientRect();p.show(d.clientX-m.left,d.clientY-m.top),p.player.template.mask.addEventListener("click",function(){p.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var s,y;return s=o,(y=[{key:"show",value:function(i,p){this.player.template.menu.classList.add("dplayer-menu-show");var c=this.player.container.getBoundingClientRect();i+this.player.template.menu.offsetWidth>=c.width?(this.player.template.menu.style.right=c.width-i+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=i+"px",this.player.template.menu.style.right="initial"),p+this.player.template.menu.offsetHeight>=c.height?(this.player.template.menu.style.bottom=c.height-p+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=p+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Pt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Pt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Pt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Us=js;function Rt(o){return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Rt(o)}var Fs=function(){function o(i){var p=this;(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),this.container=i.template.infoPanel,this.template=i.template,this.video=i.video,this.player=i,this.template.infoPanelClose.addEventListener("click",function(){p.hide()})}var s,y;return s=o,(y=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(i){this.template.infoFPS.innerHTML="".concat(i.toFixed(1))}}])&&function(i,p){for(var c=0;c<p.length;c++){var d=p[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,(m=function(h){if(Rt(h)!=="object"||h===null)return h;var x=h[Symbol.toPrimitive];if(x!==void 0){var w=x.call(h,"string");if(Rt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(d.key),Rt(m)==="symbol"?m:String(m)),d)}var m}(s.prototype,y),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Ys=Fs;var Ns=t(568),Hs=t.n(Ns);function zt(o){return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},zt(o)}function ya(o,s){var y=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);s&&(i=i.filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable})),y.push.apply(y,i)}return y}function Ws(o,s,y){return(s=ma(s))in o?Object.defineProperty(o,s,{value:y,enumerable:!0,configurable:!0,writable:!0}):o[s]=y,o}function ha(o,s){for(var y=0;y<s.length;y++){var i=s[y];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,ma(i.key),i)}}function ma(o){var s=function(y){if(zt(y)!=="object"||y===null)return y;var i=y[Symbol.toPrimitive];if(i!==void 0){var p=i.call(y,"string");if(zt(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(o);return zt(s)==="symbol"?s:String(s)}var ba=0,$n=[],Ks=function(){function o(p){var c=this;(function(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")})(this,o),this.options=function(d){var m={container:d.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Bl,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var h in m)m.hasOwnProperty(h)&&!d.hasOwnProperty(h)&&(d[h]=m[h]);return d.video&&!d.video.type&&(d.video.type="auto"),Nr(d.danmaku)==="object"&&d.danmaku&&!d.danmaku.user&&(d.danmaku.user="DIYgod"),d.subtitle&&(!d.subtitle.type&&(d.subtitle.type="webvtt"),!d.subtitle.fontSize&&(d.subtitle.fontSize="20px"),!d.subtitle.bottom&&(d.subtitle.bottom="40px"),!d.subtitle.color&&(d.subtitle.color="#fff")),d.video.quality&&(d.video.url=d.video.quality[d.video.defaultQuality].url),d.lang&&(d.lang=d.lang.toLowerCase()),d.contextmenu=d.contextmenu.concat([{key:"video-info",click:function(x){x.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),d}(function(d){for(var m=1;m<arguments.length;m++){var h=arguments[m]!=null?arguments[m]:{};m%2?ya(Object(h),!0).forEach(function(x){Ws(d,x,h[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(h)):ya(Object(h)).forEach(function(x){Object.defineProperty(d,x,Object.getOwnPropertyDescriptor(h,x))})}return d}({preload:p.video.type==="webtorrent"?"none":"metadata"},p)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Sl(this.options.lang).tran,this.events=new ys,this.user=new gs(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),F.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(d){return d.lang===c.options.subtitle.defaultSubtitle||d.name===c.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(d){return d.lang===c.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new fa({container:this.container,options:this.options,index:ba,tran:this.tran}),this.video=this.template.video,this.bar=new ks(this.template),this.bezel=new Is(this.template.bezel),this.fullScreen=new ms(this),this.controller=new Os(this),this.options.danmaku&&(this.danmaku=new As({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){c.template.danmakuLoading.style.display="none",c.options.autoplay&&c.play()},0)},error:function(d){c.notice(d)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return c.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(d){return c.tran(d)}}),this.comment=new qs(this)),this.setting=new Rs(this),this.plugins={},this.docClickFun=function(){c.focus=!1},this.containerClickFun=function(){c.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Ss(this),this.hotkey=new Ms(this),this.contextmenu=new Us(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Ys(this),!this.danmaku&&this.options.autoplay&&this.play(),ba++,$n.push(this)}var s,y,i;return s=o,y=[{key:"seek",value:function(p){p=Math.max(p,0),this.video.duration&&(p=Math.min(p,this.video.duration)),this.video.currentTime<p?this.notice("".concat(this.tran("ff").replace("%s",(p-this.video.currentTime).toFixed(0)))):this.video.currentTime>p&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-p).toFixed(0)))),this.video.currentTime=p,this.danmaku&&this.danmaku.seek(),this.bar.set("played",p/this.video.duration,"width"),this.template.ptime.innerHTML=F.secondToTime(p)}},{key:"play",value:function(p){var c=this;if(this.paused=!1,this.video.paused&&!F.isMobile&&this.bezel.switch(Je.play),this.template.playButton.innerHTML=Je.pause,this.template.mobilePlayButton.innerHTML=Je.pause,p||Kt.resolve(this.video.play()).catch(function(){c.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var d=0;d<$n.length;d++)this!==$n[d]&&$n[d].pause()}},{key:"pause",value:function(p){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||F.isMobile||this.bezel.switch(Je.pause),this.template.playButton.innerHTML=Je.play,this.template.mobilePlayButton.innerHTML=Je.play,p||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Je.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Je.volumeDown:this.template.volumeIcon.innerHTML=Je.volumeOff}},{key:"volume",value:function(p,c,d){if(p=parseFloat(p),!isNaN(p)){p=Math.max(p,0),p=Math.min(p,1),this.bar.set("volume",p,"width");var m="".concat((100*p).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=m,c||this.user.set("volume",p),d||this.notice("".concat(this.tran("volume")," ").concat((100*p).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=p,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(p,c){this.events.on(p,c)}},{key:"switchVideo",value:function(p,c){this.pause(),this.video.poster=p.pic?p.pic:"",this.video.src=p.url,this.initMSE(this.video,p.type||"auto"),c&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:c.id,address:c.api,token:c.token,maximum:c.maximum,addition:c.addition,user:c.user}))}},{key:"initMSE",value:function(p,c){var d=this;if(this.type=c,this.options.video.customType&&this.options.video.customType[c])Object.prototype.toString.call(this.options.video.customType[c])==="[object Function]"?this.options.video.customType[c](this.video,this):console.error("Illegal customType: ".concat(c));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(p.src)?this.type="hls":/.flv(#|\?|$)/i.exec(p.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(p.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(p.canPlayType("application/x-mpegURL")||p.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var m=this.options.pluginOptions.hls,h=new window.Hls(m);this.plugins.hls=h,h.loadSource(p.src),h.attachMedia(p),this.events.on("destroy",function(){h.destroy(),delete d.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var x=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:p.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=x,x.attachMediaElement(p),x.load(),this.events.on("destroy",function(){x.unload(),x.detachMediaElement(),x.destroy(),delete d.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var w=window.dashjs.MediaPlayer().create().initialize(p,p.src,!1),j=this.options.pluginOptions.dash;w.updateSettings(j),this.plugins.dash=w,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete d.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var ne=this.options.pluginOptions.webtorrent,H=new window.WebTorrent(ne);this.plugins.webtorrent=H;var N=p.src;p.src="",p.preload="metadata",p.addEventListener("durationchange",function(){return d.container.classList.remove("dplayer-loading")},{once:!0}),H.add(N,function(U){U.files.find(function(V){return V.name.endsWith(".mp4")}).renderTo(d.video,{autoplay:d.options.autoplay,controls:!1})}),this.events.on("destroy",function(){H.remove(N),H.destroy(),delete d.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(p,c){var d=this;this.initMSE(p,c),this.on("durationchange",function(){p.duration!==1&&p.duration!==1/0&&(d.template.dtime.innerHTML=F.secondToTime(p.duration))}),this.on("progress",function(){var x=p.buffered.length?p.buffered.end(p.buffered.length-1)/p.duration:0;d.bar.set("loaded",x,"width")}),this.on("error",function(){d.video.error&&d.tran&&d.notice&&d.type!=="webtorrent"&&d.notice(d.tran("video-failed"))}),this.on("ended",function(){d.bar.set("played",1,"width"),d.setting.loop?(d.seek(0),d.play()):d.pause(),d.danmaku&&(d.danmaku.danIndex=0)}),this.on("play",function(){d.paused&&d.play(!0)}),this.on("pause",function(){d.paused||d.pause(!0)}),this.on("timeupdate",function(){d.bar.set("played",d.video.currentTime/d.video.duration,"width");var x=F.secondToTime(d.video.currentTime);d.template.ptime.innerHTML!==x&&(d.template.ptime.innerHTML=x)});for(var m=function(x){p.addEventListener(d.events.videoEvents[x],function(w){d.events.trigger(d.events.videoEvents[x],w)})},h=0;h<this.events.videoEvents.length;h++)m(h);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new xs(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new ws(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(p){var c=this;if(p=typeof p=="string"?parseInt(p):p,this.qualityIndex!==p&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=p,this.switchingQuality=!0,this.quality=this.options.video.quality[p],this.template.qualityButton.innerHTML=this.quality.name;var d=this.video.paused;this.video.pause();var m=Hs()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),h=new DOMParser().parseFromString(m,"text/html").body.firstChild;this.template.videoWrap.insertBefore(h,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=h,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(c.prevVideo){if(c.video.currentTime!==c.prevVideo.currentTime)return void c.seek(c.prevVideo.currentTime);c.template.videoWrap.removeChild(c.prevVideo),c.video.classList.add("dplayer-video-current"),d||c.video.play(),c.prevVideo=null,c.notice("".concat(c.tran("switched-quality").replace("%q",c.quality.name)),void 0,void 0,"switch-quality"),c.switchingQuality=!1,c.events.trigger("quality_end")}}),this.on("error",function(){c.video.error&&c.prevVideo&&(c.template.videoWrap.removeChild(c.video),c.video=c.prevVideo,d||c.video.play(),c.qualityIndex=c.prevIndex,c.quality=c.options.video.quality[c.qualityIndex],c.noticeTime=setTimeout(function(){c.template.notice.style.opacity=0,c.events.trigger("notice_hide")},3e3),c.prevVideo=null,c.switchingQuality=!1)})}}},{key:"notice",value:function(p){var c,d,m,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,w=arguments.length>3?arguments[3]:void 0;if(w&&((c=document.getElementById("dplayer-notice-".concat(w)))&&(c.innerHTML=p),this.noticeList[w]&&(clearTimeout(this.noticeList[w]),this.noticeList[w]=null)),!c){var j=fa.NewNotice(p,x,w);this.template.noticeList.appendChild(j),c=j}this.events.trigger("notice_show",c),h>0&&(this.noticeList[w]=setTimeout((d=c,m=this,function(){d.addEventListener("animationend",function(){m.template.noticeList.removeChild(d)}),d.classList.add("remove-notice"),m.events.trigger("notice_hide"),m.noticeList[w]=null}),h))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(p){this.video.playbackRate=p}},{key:"destroy",value:function(){$n.splice($n.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],i=[{key:"version",get:function(){return"1.27.1"}}],y&&ha(s.prototype,y),i&&ha(s,i),Object.defineProperty(s,"prototype",{writable:!1}),o}();const Qs=Ks;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Vs=Qs})(),a.default})())();const Yc={".mp4":{kind:"file",mimeHints:["video/mp4"]},".m4v":{kind:"file",mimeHints:["video/mp4"]},".mov":{kind:"file",mimeHints:["video/quicktime","video/mp4"]},".webm":{kind:"file",mimeHints:["video/webm"]},".ogv":{kind:"file",mimeHints:["video/ogg"]},".ts":{kind:"file",mimeHints:["video/mp2t"]},".mkv":{kind:"file",mimeHints:["video/x-matroska","video/webm"]},".m3u8":{kind:"hls",mimeHints:["application/vnd.apple.mpegurl","application/x-mpegURL"]},".mpd":{kind:"dash",mimeHints:["application/dash+xml"]}};function Nc(e){try{return new URL(e.trim())}catch{return null}}function Hc(e){const t=e.pathname.toLowerCase().split("?")[0],a=t.lastIndexOf(".");return a>=0?t.slice(a):""}function Wc(e){const n=e.hostname.toLowerCase(),t=e.pathname.toLowerCase();return!!(n.includes("youtube.com")||n.includes("youtu.be")||n.includes("bilibili.com")&&(t.includes("/video/")||t.includes("/bangumi/"))||n.includes("vimeo.com")&&!t.endsWith(".mp4"))}function Kc(e){const n=document.createElement("video");return e.some(t=>!!n.canPlayType(t))}async function Qc(e,n){const t=(n==null?void 0:n.timeoutMs)??1e4,a=(n==null?void 0:n.useHlsJsIfAvailable)??!0,r=Nc(e);if(!r)return{ok:!1,reason:"URL 无效"};if(Wc(r))return{ok:!1,reason:"看起来是网页播放页（非媒体直链）"};const l=Hc(r),u=Yc[l];u&&u.kind==="file"&&Kc(u.mimeHints);const A=document.createElement("video");return A.preload="metadata",A.muted=!0,(()=>new Promise(g=>{const f=window.setTimeout(()=>{B(),g({ok:!1,reason:"加载超时，可能不是可播放直链或被 CORS/鉴权拦截"})},t),C=k=>{window.clearTimeout(f),B(),g(k)};function B(){A.src="",A.remove()}A.addEventListener("loadedmetadata",()=>{if((u==null?void 0:u.kind)==="hls")return C({ok:!0,kind:"hls",reason:"HLS 元数据已加载"});if((u==null?void 0:u.kind)==="dash")return C({ok:!0,kind:"dash",reason:"DASH 元数据已加载"});C({ok:!0,kind:"file",reason:"视频元数据已加载"})}),A.addEventListener("error",()=>{var k,R;if((u==null?void 0:u.kind)==="hls"&&a&&((R=(k=window.Hls)==null?void 0:k.isSupported)!=null&&R.call(k)))try{const _=window.Hls,q=new _;q.on(_.Events.MANIFEST_PARSED,()=>{q.destroy(),C({ok:!0,kind:"hls",reason:"hls.js 成功解析清单"})}),q.on(_.Events.ERROR,()=>{q.destroy(),C({ok:!1,reason:"hls.js 解析失败，可能不是有效的 m3u8"})}),q.loadSource(r.toString()),q.attachMedia(A);return}catch{}C({ok:!1,reason:"无法加载为媒体资源（网络错误、CORS、鉴权或非媒体）"})}),A.src=r.toString(),document.body.appendChild(A)}))()}const dl=(e,n)=>{const t=e.__vccOpts||e;for(const[a,r]of n)t[a]=r;return t},Vc={data(){return{NewSrc:""}},methods:{initializeDplayer(){new oi({container:document.getElementById("dplayer"),video:{url:"https://kaneki.dynv6.net/d/oss/Picture/Lady%20Gaga%20-%20Applause.mp4?sign=7994f6avjrvtMvEgweiFUWB8Ojjq7Uhe75v-A8UwkIA=:0"},subtitle:{url:"https://kaneki.dynv6.net/d/oss/Picture/Lady%20Gaga%20-%20Applause.vtt?sign=zQqxUK6aiT13X3IpdwgqbAzqrnitL_C0waUDevW1QxI=:0",type:"webvtt",fontSize:"25px",bottom:"5%",color:"#e5ccff"},theme:"#4378ff"})},Dplayer(e){new oi({container:document.getElementById("dplayer"),video:{url:e},theme:"#4378ff"})},ChangeVideo(){Qc(this.NewSrc).then(e=>{e.ok?(console.log("可播放，类型：",e.kind,e.reason),this.Dplayer(this.NewSrc),console.log("实现 DPLAYER")):(console.warn("不可播放：未知后缀",e.reason),alert("不可播放：未知后缀",e.reason))})}},mounted(){this.initializeDplayer()}},Zc=X("link",{rel:"stylesheet",href:""},null,-1),Jc={align:"center"},Xc=X("p",null,[X("div",{id:"dplayer"})],-1);function $c(e,n,t,a,r,l){return jn(),nt(We,null,[Zc,X("div",Jc,[X("p",null,[X("button",{onClick:n[0]||(n[0]=(...u)=>l.ChangeVideo&&l.ChangeVideo(...u))},"检测链接是否可用并应用"),dn(),et(X("input",{style:{width:"800px"},type:"text","onUpdate:modelValue":n[1]||(n[1]=u=>r.NewSrc=u)},null,512),[[rt,r.NewSrc]])]),Xc])],64)}const Gc=dl(Vc,[["render",$c]]);const eu={components:{Mp4Page:Gc},setup(){},name:"App",data(){return{istext:!1,inputid:0,inputdescription:"",inputname:"",inputsrc:"",contt:1,contexts:JSON.parse(localStorage.getItem("VideoList"))||[{id:1,name:"圣职者",src:"https://baidu.com",description:"你好！"},{id:2,name:"圣职者2",src:"https://baidu.com",description:"你好！"}],context:JSON.parse(localStorage.getItem("context"))||`本地数据为空：
  https://s-bj-2339-mydisk1.oss.dogecdn.com/%E3%81%82%E3%81%AE%E3%81%AF%E3%81%AA.mp4,
 https://s-bj-2339-mydisk1.oss.dogecdn.com/test/TE.m3u8 ,
 https://s-bj-2339-mydisk1.oss.dogecdn.com/movie/yrcy_m3u8/YRCY_m3u8.m3u8`}},methods:{datatoContext(e){localStorage.setItem("context",JSON.stringify(e)),alert("保存成功")},datatoVideoList(e){localStorage.setItem("VideoList",JSON.stringify(e)),alert("保存成功")},toggletext(){this.istext=!this.istext},addVideos(e,n,t,a){crypto.randomUUID(),console.log("开发中.");const r={id:e,name:t,src:a,description:n};this.contexts.push(r)},deletevideo(e){confirm("确认要删除吗？")==!0?(console.log("确认删除"),this.contexts.splice(e,1)):console.log("否")},copythevideosrc(e){console.log(e.src)},copyTextToClipboard(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),alert("复制成功!")}},watch:{}},nu={id:"app"},tu=X("h1",null,[X("img",{width:"30",src:"https://avatars.githubusercontent.com/u/51418619?v=4",alt:""}),dn(" 简易视频播放器 ")],-1),ru=X("p",null,[dn(" DPlayer "),X("a",{href:"https://dplayer.diygod.dev/guide.html",target:"_blank"}," DPlayer "),dn(" |👉 "),X("a",{href:"https://github.com/DIYgod/DPlayer",target:"_blank"}," Github ")],-1),ou={style:{border:"1cm solid rebeccapurple"}},au={key:0,id:"no-downloads"},iu=X("div",null,[X("div",{class:"illustration"}),X("span",null,"您添加的视频会显示在此处")],-1),lu=[iu],su={id:"downloadsList"},pu={id:"content","focus-row-container":"",class:"is-active focus-row-active"},du=X("div",{id:"file-icon-wrapper",class:"icon-wrapper","aria-hidden":"true"},[X("img",{class:"icon",id:"file-icon",src:"https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg"})],-1),cu={id:"details"},uu={id:"title-area",role:"gridcell"},fu={id:"name",hidden:""},Au=X("span",{id:"tag"},null,-1),yu={role:"gridcell"},hu=["onClick"],mu={id:"description",role:"gridcell"},bu={class:"more-options"},gu={role:"gridcell"},vu={class:"icon-clear",id:"remove",title:"从列表中移除","focus-row-control":"","focus-type":"remove",style:{},"aria-disabled":"false",role:"button",tabindex:"0"},xu={id:"icon"},Eu=["onClick"],wu=X("span",{class:"material-icons"}," close ",-1),Cu=[wu],ku=X("br",null,null,-1),Bu=X("br",null,null,-1);function Su(e,n,t,a,r,l){const u=md("Mp4Page");return jn(),nt("div",nu,[X("header",null,[tu,fn(u),ru]),X("main",null,[X("div",ou,[X("p",null,[X("p",null,[dn(" 视频ID ："),et(X("input",{"onUpdate:modelValue":n[0]||(n[0]=A=>r.inputid=A),type:"text"},null,512),[[rt,r.inputid]])]),X("p",null,[dn(" 视频名称 ："),et(X("input",{"onUpdate:modelValue":n[1]||(n[1]=A=>r.inputname=A),type:"text"},null,512),[[rt,r.inputname]])]),X("p",null,[dn(" 视频路径 ："),et(X("input",{"onUpdate:modelValue":n[2]||(n[2]=A=>r.inputsrc=A),type:"text",style:{width:"800px"}},null,512),[[rt,r.inputsrc]])]),X("p",null,[dn(" 视频描述 ："),et(X("input",{"onUpdate:modelValue":n[3]||(n[3]=A=>r.inputdescription=A),type:"text"},null,512),[[rt,r.inputdescription]])]),X("button",{onClick:n[4]||(n[4]=A=>l.addVideos(r.inputid,r.inputdescription,r.inputname,r.inputsrc))}," 添加 "),X("button",{onClick:n[5]||(n[5]=A=>l.datatoVideoList(r.contexts))},"保存")]),r.contt?Gr("",!0):(jn(),nt("div",au,lu)),X("div",su,[r.contt?(jn(!0),nt(We,{key:0},vd(r.contexts,(A,b)=>(jn(),nt("div",{key:b},[X("div",pu,[du,X("div",cu,[X("div",uu,[X("a",{is:"action-link",id:"file-link","focus-type":"fileLink",tabindex:"0",role:"link",onClick:n[6]||(n[6]=(...g)=>l.copythevideosrc&&l.copythevideosrc(...g)),href:"#"},Dt(A.name),1),X("span",fu,Dt(A.name),1),Au]),X("div",yu,[X("a",{id:"url","focus-type":"url",href:"javascript:",onClick:g=>l.copyTextToClipboard(A.src),tabindex:"0"},Dt(A.src),9,hu)]),X("div",mu,Dt(b)+" : "+Dt(A.description),1)]),X("div",bu,[X("div",gu,[X("div",vu,[X("div",xu,[X("button",{onClick:g=>l.deletevideo(b)},Cu,8,Eu)])])])])])]))),128)):Gr("",!0)])]),X("p",null,[r.istext?et((jn(),nt("textarea",{key:0,cols:"85",rows:"30","onUpdate:modelValue":n[7]||(n[7]=A=>r.context=A)},null,512)),[[rt,r.context]]):Gr("",!0)]),X("p",null,[X("button",{onClick:n[8]||(n[8]=A=>l.toggletext())}," 显示或隐藏文字区 "),dn(" | "),X("button",{onClick:n[9]||(n[9]=A=>l.datatoContext(r.context))}," 保存(文字到 localStorge) ")]),ku,Bu])])}const Iu=dl(eu,[["render",Su]]);const cl=Gi(Iu);cl.use(Gi);cl.mount("#app");
