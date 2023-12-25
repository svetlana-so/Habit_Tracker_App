(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const te={},$t=[],Ne=()=>{},hl=()=>!1,gl=/^on[^a-z]/,hr=e=>gl.test(e),Ea=e=>e.startsWith("onUpdate:"),de=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,W=(e,t)=>vl.call(e,t),$=Array.isArray,Bt=e=>Cn(e)==="[object Map]",gr=e=>Cn(e)==="[object Set]",li=e=>Cn(e)==="[object Date]",U=e=>typeof e=="function",se=e=>typeof e=="string",Yt=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",No=e=>(ee(e)||U(e))&&U(e.then)&&U(e.catch),Mo=Object.prototype.toString,Cn=e=>Mo.call(e),bl=e=>Cn(e).slice(8,-1),Fo=e=>Cn(e)==="[object Object]",Aa=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,He=vr(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),xl=/\B([A-Z])/g,It=vr(e=>e.replace(xl,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mr=vr(e=>e?`on${br(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},nr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},rr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fi;const Vr=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?kl(r):Oa(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(se(e)||ee(e))return e}const wl=/;(?![^(]*\))/g,_l=/:([^]+)/,El=/\/\*[^]*?\*\//g;function kl(e){const t={};return e.replace(El,"").split(wl).forEach(n=>{if(n){const r=n.split(_l);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pa(e){let t="";if(se(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Pa(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=_a(Al);function Lo(e){return!!e||e===""}function Pl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=yr(e[r],t[r]);return n}function yr(e,t){if(e===t)return!0;let n=li(e),r=li(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Yt(e),r=Yt(t),n||r)return e===t;if(n=$(e),r=$(t),n||r)return n&&r?Pl(e,t):!1;if(n=ee(e),r=ee(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!yr(e[o],t[o]))return!1}}return String(e)===String(t)}function Cl(e,t){return e.findIndex(n=>yr(n,t))}const Fm=e=>se(e)?e:e==null?"":$(e)||ee(e)&&(e.toString===Mo||!U(e.toString))?JSON.stringify(e,jo,2):String(e),jo=(e,t)=>t&&t.__v_isRef?jo(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:gr(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!$(t)&&!Fo(t)?String(t):t;let Se;class Sl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Rl(e,t=Se){t&&t.active&&t.effects.push(e)}function Il(){return Se}const Ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Do=e=>(e.w&ut)>0,zo=e=>(e.n&ut)>0,Tl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ut},Nl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Do(a)&&!zo(a)?a.delete(e):t[n++]=a,a.w&=~ut,a.n&=~ut}t.length=n}},Xr=new WeakMap;let sn=0,ut=1;const Gr=30;let Re;const kt=Symbol(""),Qr=Symbol("");class Sa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rl(this,r)}run(){if(!this.active)return this.fn();let t=Re,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,ft=!0,ut=1<<++sn,sn<=Gr?Tl(this):ci(this),this.fn()}finally{sn<=Gr&&Nl(this),ut=1<<--sn,Re=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const $o=[];function Zt(){$o.push(ft),ft=!1}function en(){const e=$o.pop();ft=e===void 0?!0:e}function _e(e,t,n){if(ft&&Re){let r=Xr.get(e);r||Xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ca()),Bo(a)}}function Bo(e,t){let n=!1;sn<=Gr?zo(e)||(e.n|=ut,n=!Do(e)):n=!e.has(Re),n&&(e.add(Re),Re.deps.push(e))}function Xe(e,t,n,r,a,i){const o=Xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!Yt(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Aa(n)&&s.push(o.get("length")):(s.push(o.get(kt)),Bt(e)&&s.push(o.get(Qr)));break;case"delete":$(e)||(s.push(o.get(kt)),Bt(e)&&s.push(o.get(Qr)));break;case"set":Bt(e)&&s.push(o.get(kt));break}if(s.length===1)s[0]&&Jr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Jr(Ca(l))}}function Jr(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(e,t){(e!==Re||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ml=_a("__proto__,__v_isRef,__isVue"),Uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yt)),di=Fl();function Fl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Zt();const r=Y(this)[t].apply(this,n);return en(),r}}),e}function Ll(e){const t=Y(this);return _e(t,"has",e),t.hasOwnProperty(e)}class Ho{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Xl:qo:i?Yo:Wo).get(t))return t;const o=$(t);if(!a){if(o&&W(di,n))return Reflect.get(di,n,r);if(n==="hasOwnProperty")return Ll}const s=Reflect.get(t,n,r);return(Yt(n)?Uo.has(n):Ml(n))||(a||_e(t,"get",n),i)?s:he(s)?o&&Aa(n)?s:s.value:ee(s)?a?Xo(s):wr(s):s}}class Ko extends Ho{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(qt(i)&&he(i)&&!he(r))return!1;if(!this._shallow&&(!ar(r)&&!qt(r)&&(i=Y(i),r=Y(r)),!$(t)&&he(i)&&!he(r)))return i.value=r,!0;const o=$(t)&&Aa(n)?Number(n)<t.length:W(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?Pt(r,i)&&Xe(t,"set",n,r):Xe(t,"add",n,r)),s}deleteProperty(t,n){const r=W(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Xe(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Yt(n)||!Uo.has(n))&&_e(t,"has",n),r}ownKeys(t){return _e(t,"iterate",$(t)?"length":kt),Reflect.ownKeys(t)}}class jl extends Ho{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Dl=new Ko,zl=new jl,$l=new Ko(!0),Ra=e=>e,xr=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(Pt(t,i)&&_e(a,"get",t),_e(a,"get",i));const{has:o}=xr(a),s=r?Ra:n?Na:vn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Mn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(Pt(e,a)&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Fn(e,t=!1){return e=e.__v_raw,!t&&_e(Y(e),"iterate",kt),Reflect.get(e,"size",e)}function mi(e){e=Y(e);const t=Y(this);return xr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function pi(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Pt(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function hi(e){const t=Y(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function gi(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function Ln(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?Ra:e?Na:vn;return!e&&_e(s,"iterate",kt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function jn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ra:t?Na:vn;return!t&&_e(i,"iterate",l?Qr:kt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function Bl(){const e={get(i){return Nn(this,i)},get size(){return Fn(this)},has:Mn,add:mi,set:pi,delete:hi,clear:gi,forEach:Ln(!1,!1)},t={get(i){return Nn(this,i,!1,!0)},get size(){return Fn(this)},has:Mn,add:mi,set:pi,delete:hi,clear:gi,forEach:Ln(!1,!0)},n={get(i){return Nn(this,i,!0)},get size(){return Fn(this,!0)},has(i){return Mn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Ln(!0,!1)},r={get(i){return Nn(this,i,!0,!0)},get size(){return Fn(this,!0)},has(i){return Mn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=jn(i,!1,!1),n[i]=jn(i,!0,!1),t[i]=jn(i,!1,!0),r[i]=jn(i,!0,!0)}),[e,n,t,r]}const[Ul,Hl,Kl,Wl]=Bl();function Ia(e,t){const n=t?e?Wl:Kl:e?Hl:Ul;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const Yl={get:Ia(!1,!1)},ql={get:Ia(!1,!0)},Vl={get:Ia(!0,!1)},Wo=new WeakMap,Yo=new WeakMap,qo=new WeakMap,Xl=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Gl(bl(e))}function wr(e){return qt(e)?e:Ta(e,!1,Dl,Yl,Wo)}function Vo(e){return Ta(e,!1,$l,ql,Yo)}function Xo(e){return Ta(e,!0,zl,Vl,qo)}function Ta(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ql(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return qt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function Go(e){return Ut(e)||qt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Qo(e){return nr(e,"__v_skip",!0),e}const vn=e=>ee(e)?wr(e):e,Na=e=>ee(e)?Xo(e):e;function Jo(e){ft&&Re&&(e=Y(e),Bo(e.dep||(e.dep=Ca())))}function Zo(e,t){e=Y(e);const n=e.dep;n&&Jr(n)}function he(e){return!!(e&&e.__v_isRef===!0)}function Jl(e){return es(e,!1)}function Zl(e){return es(e,!0)}function es(e,t){return he(e)?e:new ef(e,t)}class ef{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:vn(t)}get value(){return Jo(this),this._value}set value(t){const n=this.__v_isShallow||ar(t)||qt(t);t=n?t:Y(t),Pt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vn(t),Zo(this))}}function At(e){return he(e)?e.value:e}const tf={get:(e,t,n)=>At(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ts(e){return Ut(e)?e:new Proxy(e,tf)}class nf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sa(t,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function rf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new nf(r,a,i||!a,n)}function ct(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function Me(e,t,n,r){if(U(e)){const i=ct(e,t,n,r);return i&&No(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ct(l,null,10,[e,o,s]);return}}af(e,n,a,r)}function af(e,t,n,r=!0){console.error(e)}let bn=!1,Zr=!1;const pe=[];let Be=0;const Ht=[];let Ye=null,bt=0;const ns=Promise.resolve();let Ma=null;function rs(e){const t=Ma||ns;return e?t.then(this?e.bind(this):e):t}function of(e){let t=Be+1,n=pe.length;for(;t<n;){const r=t+n>>>1,a=pe[r],i=yn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Fa(e){(!pe.length||!pe.includes(e,bn&&e.allowRecurse?Be+1:Be))&&(e.id==null?pe.push(e):pe.splice(of(e.id),0,e),as())}function as(){!bn&&!Zr&&(Zr=!0,Ma=ns.then(os))}function sf(e){const t=pe.indexOf(e);t>Be&&pe.splice(t,1)}function lf(e){$(e)?Ht.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?bt+1:bt))&&Ht.push(e),as()}function vi(e,t=bn?Be+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function is(e){if(Ht.length){const t=[...new Set(Ht)];if(Ht.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>yn(n)-yn(r)),bt=0;bt<Ye.length;bt++)Ye[bt]();Ye=null,bt=0}}const yn=e=>e.id==null?1/0:e.id,ff=(e,t)=>{const n=yn(e)-yn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function os(e){Zr=!1,bn=!0,pe.sort(ff);const t=Ne;try{for(Be=0;Be<pe.length;Be++){const n=pe[Be];n&&n.active!==!1&&ct(n,null,14)}}finally{Be=0,pe.length=0,is(),bn=!1,Ma=null,(pe.length||Ht.length)&&os()}}function cf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||te;p&&(a=n.map(g=>se(g)?g.trim():g)),d&&(a=n.map(rr))}let s,l=r[s=Mr(t)]||r[s=Mr(He(t))];!l&&i&&(l=r[s=Mr(It(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function ss(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=ss(f,t,!0);c&&(s=!0,de(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ee(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):de(o,i),ee(e)&&r.set(e,o),o)}function Er(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,It(t))||W(e,t))}let Pe=null,kr=null;function ir(e){const t=Pe;return Pe=e,kr=e&&e.type.__scopeId||null,t}function Lm(e){kr=e}function jm(){kr=null}function uf(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ci(-1);const i=ir(t);let o;try{o=e(...a)}finally{ir(i),r._d&&Ci(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let L,y;const w=ir(e);try{if(n.shapeFlag&4){const S=a||r;L=$e(c.call(S,S,d,i,g,p,P)),y=l}else{const S=t;L=$e(S.length>1?S(i,{attrs:l,slots:s,emit:f}):S(i,null)),y=t.props?l:df(l)}}catch(S){dn.length=0,_r(S,e,1),L=be(Ct)}let F=L;if(y&&C!==!1){const S=Object.keys(y),{shapeFlag:H}=F;S.length&&H&7&&(o&&S.some(Ea)&&(y=mf(y,o)),F=Vt(F,y))}return n.dirs&&(F=Vt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),L=F,ir(w),L}const df=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},mf=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!Er(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?bi(r,o,f):!0:!!o;return!1}function bi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function hf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gf=e=>e.__isSuspense;function vf(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):lf(e)}function Dm(e,t){return La(e,null,t)}const Dn={};function cn(e,t,n){return La(e,t,n)}function La(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){var s;const l=Il()===((s=ue)==null?void 0:s.scope)?ue:null;let f,c=!1,d=!1;if(he(e)?(f=()=>e.value,c=ar(e)):Ut(e)?(f=()=>e,r=!0):$(e)?(d=!0,c=e.some(S=>Ut(S)||ar(S)),f=()=>e.map(S=>{if(he(S))return S.value;if(Ut(S))return wt(S);if(U(S))return ct(S,l,2)})):U(e)?t?f=()=>ct(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Me(e,l,3,[g])}:f=Ne,t&&r){const S=f;f=()=>wt(S())}let p,g=S=>{p=w.onStop=()=>{ct(S,l,4)}},P;if(wn)if(g=Ne,t?n&&Me(t,l,3,[f(),d?[]:void 0,g]):f(),a==="sync"){const S=pc();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Ne;let C=d?new Array(e.length).fill(Dn):Dn;const L=()=>{if(w.active)if(t){const S=w.run();(r||c||(d?S.some((H,J)=>Pt(H,C[J])):Pt(S,C)))&&(p&&p(),Me(t,l,3,[S,C===Dn?void 0:d&&C[0]===Dn?[]:C,g]),C=S)}else w.run()};L.allowRecurse=!!t;let y;a==="sync"?y=L:a==="post"?y=()=>we(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),y=()=>Fa(L));const w=new Sa(f,y);t?n?L():C=w.run():a==="post"?we(w.run.bind(w),l&&l.suspense):w.run();const F=()=>{w.stop(),l&&l.scope&&ka(l.scope.effects,w)};return P&&P.push(F),F}function bf(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?ls(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=ue;Xt(this);const s=La(a,i.bind(r),n);return o?Xt(o):Ot(),s}function ls(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function wt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))wt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)wt(e[n],t);else if(gr(e)||Bt(e))e.forEach(n=>{wt(n,t)});else if(Fo(e))for(const n in e)wt(e[n],t);return e}function zm(e,t){const n=Pe;if(n===null)return e;const r=Cr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=te]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&wt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function gt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Zt(),Me(l,n,8,[e.el,s,e,t]),en())}}/*! #__NO_SIDE_EFFECTS__ */function ja(e,t){return U(e)?(()=>de({name:e.name},t,{setup:e}))():e}const Gn=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function yf(e,t){cs(e,"a",t)}function xf(e,t){cs(e,"da",t)}function cs(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fs(a.parent.vnode)&&wf(r,t,n,a),a=a.parent}}function wf(e,t,n,r){const a=Ar(t,e,r,!0);us(()=>{ka(r[t],a)},n)}function Ar(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Xt(n);const s=Me(t,n,e,o);return Ot(),en(),s});return r?a.unshift(i):a.push(i),i}}const et=e=>(t,n=ue)=>(!wn||e==="sp")&&Ar(e,(...r)=>t(...r),n),_f=et("bm"),Ef=et("m"),kf=et("bu"),Af=et("u"),Of=et("bum"),us=et("um"),Pf=et("sp"),Cf=et("rtg"),Sf=et("rtc");function Rf(e,t=ue){Ar("ec",e,t)}const ds="components";function $m(e,t){return Tf(ds,e,!0,t)||e}const If=Symbol.for("v-ndc");function Tf(e,t,n=!0,r=!1){const a=Pe||ue;if(a){const i=a.type;if(e===ds){const s=uc(i,!1);if(s&&(s===t||s===He(t)||s===br(He(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[He(t)]||e[br(He(t))])}function Bm(e,t,n,r){let a;const i=n&&n[r];if($(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ee(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ea=e=>e?As(e)?Cr(e)||e.proxy:ea(e.parent):null,un=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>Da(e),$forceUpdate:e=>e.f||(e.f=()=>Fa(e.update)),$nextTick:e=>e.n||(e.n=rs.bind(e.proxy)),$watch:e=>bf.bind(e)}),Lr=(e,t)=>e!==te&&!e.__isScriptSetup&&W(e,t),Nf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Lr(r,t))return o[t]=1,r[t];if(a!==te&&W(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,i[t];if(n!==te&&W(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const c=un[t];let d,p;if(c)return t==="$attrs"&&_e(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==te&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Lr(a,t)?(a[t]=n,!0):r!==te&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==te&&W(e,o)||Lr(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(un,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function xi(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ta=!0;function Mf(e){const t=Da(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&wi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:L,beforeDestroy:y,beforeUnmount:w,destroyed:F,unmounted:S,render:H,renderTracked:J,renderTriggered:ae,errorCaptured:Ee,serverPrefetch:ge,expose:Oe,inheritAttrs:nt,components:ht,directives:Le,filters:nn}=t;if(f&&Ff(f,r,null),o)for(const Q in o){const q=o[Q];U(q)&&(r[Q]=q.bind(n))}if(a){const Q=a.call(n,n);ee(Q)&&(e.data=wr(Q))}if(ta=!0,i)for(const Q in i){const q=i[Q],Ke=U(q)?q.bind(n,n):U(q.get)?q.get.bind(n,n):Ne,rt=!U(q)&&U(q.set)?q.set.bind(n):Ne,je=ce({get:Ke,set:rt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>je.value,set:ye=>je.value=ye})}if(s)for(const Q in s)ms(s[Q],r,n,Q);if(l){const Q=U(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(q=>{Qn(q,Q[q])})}c&&wi(c,e,"c");function fe(Q,q){$(q)?q.forEach(Ke=>Q(Ke.bind(n))):q&&Q(q.bind(n))}if(fe(_f,d),fe(Ef,p),fe(kf,g),fe(Af,P),fe(yf,C),fe(xf,L),fe(Rf,Ee),fe(Sf,J),fe(Cf,ae),fe(Of,w),fe(us,S),fe(Pf,ge),$(Oe))if(Oe.length){const Q=e.exposed||(e.exposed={});Oe.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:Ke=>n[q]=Ke})})}else e.exposed||(e.exposed={});H&&e.render===Ne&&(e.render=H),nt!=null&&(e.inheritAttrs=nt),ht&&(e.components=ht),Le&&(e.directives=Le)}function Ff(e,t,n=Ne){$(e)&&(e=na(e));for(const r in e){const a=e[r];let i;ee(a)?"default"in a?i=Ge(a.from||r,a.default,!0):i=Ge(a.from||r):i=Ge(a),he(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function wi(e,t,n){Me($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const a=r.includes(".")?ls(n,r):()=>n[r];if(se(e)){const i=t[e];U(i)&&cn(a,i)}else if(U(e))cn(a,e.bind(n));else if(ee(e))if($(e))e.forEach(i=>ms(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&cn(a,i,e)}}function Da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>or(l,f,o,!0)),or(l,t,o)),ee(t)&&i.set(t,l),l}function or(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&or(e,i,n,!0),a&&a.forEach(o=>or(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Lf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Lf={data:_i,props:Ei,emits:Ei,methods:ln,computed:ln,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:ln,directives:ln,watch:Df,provide:_i,inject:jf};function _i(e,t){return t?e?function(){return de(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function jf(e,t){return ln(na(e),na(t))}function na(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function ln(e,t){return e?de(Object.create(null),e,t):t}function Ei(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:de(Object.create(null),xi(e),xi(t??{})):t}function Df(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function ps(){return{app:null,config:{isNativeTag:hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function $f(e,t){return function(r,a=null){U(r)||(r=de({},r)),a!=null&&!ee(a)&&(a=null);const i=ps(),o=new WeakSet;let s=!1;const l=i.app={_uid:zf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hc,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=be(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Cr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){sr=l;try{return f()}finally{sr=null}}};return l}}let sr=null;function Qn(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=ue||Pe;if(r||sr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function Bf(e,t,n,r=!1){const a={},i={};nr(i,Pr,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Uf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Er(e.emitsOptions,p))continue;const g=t[p];if(l)if(W(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const P=He(p);a[P]=ra(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{hs(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!W(t,d)&&((c=It(d))===d||!W(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ra(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!W(t,d))&&(delete i[d],f=!0)}f&&Xe(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Vn(l))continue;const f=t[l];let c;a&&W(a,c=He(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Er(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||te;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ra(a,l,d,f[d],e,!W(f,d))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Xt(a),r=f[n]=l.call(null,t),Ot())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function gs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=d=>{l=!0;const[p,g]=gs(d,t,!0);de(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ee(e)&&r.set(e,$t),$t;if($(i))for(let c=0;c<i.length;c++){const d=He(i[c]);ki(d)&&(o[d]=te)}else if(i)for(const c in i){const d=He(c);if(ki(d)){const p=i[c],g=o[d]=$(p)||U(p)?{type:p}:de({},p);if(g){const P=Pi(Boolean,g.type),C=Pi(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||W(g,"default"))&&s.push(d)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function ki(e){return e[0]!=="$"}function Ai(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Oi(e,t){return Ai(e)===Ai(t)}function Pi(e,t){return $(t)?t.findIndex(n=>Oi(n,e)):U(t)&&Oi(t,e)?0:-1}const vs=e=>e[0]==="_"||e==="$stable",za=e=>$(e)?e.map($e):[$e(e)],Hf=(e,t,n)=>{if(t._n)return t;const r=uf((...a)=>za(t(...a)),n);return r._c=!1,r},bs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vs(a))continue;const i=e[a];if(U(i))t[a]=Hf(a,i,r);else if(i!=null){const o=za(i);t[a]=()=>o}}},ys=(e,t)=>{const n=za(t);e.slots.default=()=>n},Kf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),nr(t,"_",n)):bs(t,e.slots={})}else e.slots={},t&&ys(e,t);nr(e.slots,Pr,1)},Wf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(de(a,t),!n&&s===1&&delete a._):(i=!t.$stable,bs(t,a)),o=t}else t&&(ys(e,t),o={default:1});if(i)for(const s in a)!vs(s)&&o[s]==null&&delete a[s]};function aa(e,t,n,r,a=!1){if($(e)){e.forEach((p,g)=>aa(p,t&&($(t)?t[g]:t),n,r,a));return}if(Gn(r)&&!a)return;const i=r.shapeFlag&4?Cr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===te?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(se(f)?(c[f]=null,W(d,f)&&(d[f]=null)):he(f)&&(f.value=null)),U(l))ct(l,s,12,[o,c]);else{const p=se(l),g=he(l);if(p||g){const P=()=>{if(e.f){const C=p?W(d,l)?d[l]:c[l]:l.value;a?$(C)&&ka(C,i):$(C)?C.includes(i)||C.push(i):p?(c[l]=[i],W(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,W(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(P.id=-1,we(P,n)):P()}}}const we=vf;function Yf(e){return qf(e)}function qf(e,t){const n=Vr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Ne,insertStaticContent:P}=e,C=(u,m,h,v=null,x=null,_=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!an(u,m)&&(v=b(u),ye(u,x,_,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:D,shapeFlag:N}=m;switch(E){case Or:L(u,m,h,v);break;case Ct:y(u,m,h,v);break;case Jn:u==null&&w(m,h,v,R);break;case qe:ht(u,m,h,v,x,_,R,k,A);break;default:N&1?H(u,m,h,v,x,_,R,k,A):N&6?Le(u,m,h,v,x,_,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,x,_,R,k,A,O)}D!=null&&x&&aa(D,u&&u.ref,_,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},y=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},F=({el:u,anchor:m},h,v)=>{let x;for(;u&&u!==m;)x=p(u),r(u,h,v),u=x;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},H=(u,m,h,v,x,_,R,k,A)=>{R=R||m.type==="svg",u==null?J(m,h,v,x,_,R,k,A):ge(u,m,x,_,R,k,A)},J=(u,m,h,v,x,_,R,k)=>{let A,E;const{type:D,props:N,shapeFlag:z,transition:B,dirs:K}=u;if(A=u.el=o(u.type,_,N&&N.is,N),z&8?c(A,u.children):z&16&&Ee(u.children,A,null,v,x,_&&D!=="foreignObject",R,k),K&&gt(u,null,v,"created"),ae(A,u,u.scopeId,R,v),N){for(const G in N)G!=="value"&&!Vn(G)&&i(A,G,null,N[G],_,u.children,v,x,me);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&ze(E,v,u)}K&&gt(u,null,v,"beforeMount");const Z=Vf(x,B);Z&&B.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||Z||K)&&we(()=>{E&&ze(E,v,u),Z&&B.enter(A),K&&gt(u,null,v,"mounted")},x)},ae=(u,m,h,v,x)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(x){let _=x.subTree;if(m===_){const R=x.vnode;ae(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},Ee=(u,m,h,v,x,_,R,k,A=0)=>{for(let E=A;E<u.length;E++){const D=u[E]=k?st(u[E]):$e(u[E]);C(null,D,m,h,v,x,_,R,k)}},ge=(u,m,h,v,x,_,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:D}=m;A|=u.patchFlag&16;const N=u.props||te,z=m.props||te;let B;h&&vt(h,!1),(B=z.onVnodeBeforeUpdate)&&ze(B,h,m,u),D&&gt(m,u,h,"beforeUpdate"),h&&vt(h,!0);const K=x&&m.type!=="foreignObject";if(E?Oe(u.dynamicChildren,E,k,h,v,K,_):R||q(u,m,k,null,h,v,K,_,!1),A>0){if(A&16)nt(k,m,N,z,h,v,x);else if(A&2&&N.class!==z.class&&i(k,"class",null,z.class,x),A&4&&i(k,"style",N.style,z.style,x),A&8){const Z=m.dynamicProps;for(let G=0;G<Z.length;G++){const oe=Z[G],Ce=N[oe],Ft=z[oe];(Ft!==Ce||oe==="value")&&i(k,oe,Ce,Ft,x,u.children,h,v,me)}}A&1&&u.children!==m.children&&c(k,m.children)}else!R&&E==null&&nt(k,m,N,z,h,v,x);((B=z.onVnodeUpdated)||D)&&we(()=>{B&&ze(B,h,m,u),D&&gt(m,u,h,"updated")},v)},Oe=(u,m,h,v,x,_,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],D=A.el&&(A.type===qe||!an(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,D,null,v,x,_,R,!0)}},nt=(u,m,h,v,x,_,R)=>{if(h!==v){if(h!==te)for(const k in h)!Vn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,x,_,me);for(const k in v){if(Vn(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,x,_,me)}"value"in v&&i(u,"value",h.value,v.value)}},ht=(u,m,h,v,x,_,R,k,A)=>{const E=m.el=u?u.el:s(""),D=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:z,slotScopeIds:B}=m;B&&(k=k?k.concat(B):B),u==null?(r(E,h,v),r(D,h,v),Ee(m.children,h,D,x,_,R,k,A)):N>0&&N&64&&z&&u.dynamicChildren?(Oe(u.dynamicChildren,z,h,x,_,R,k),(m.key!=null||x&&m===x.subTree)&&xs(u,m,!0)):q(u,m,h,D,x,_,R,k,A)},Le=(u,m,h,v,x,_,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?x.ctx.activate(m,h,v,R,A):nn(m,h,v,x,_,R,A):Tt(u,m,A)},nn=(u,m,h,v,x,_,R)=>{const k=u.component=oc(u,v,x);if(fs(u)&&(k.ctx.renderer=O),sc(k),k.asyncDep){if(x&&x.registerDep(k,fe),!u.el){const A=k.subTree=be(Ct);y(null,A,m,h)}return}fe(k,u,m,h,x,_,R)},Tt=(u,m,h)=>{const v=m.component=u.component;if(pf(u,m,h))if(v.asyncDep&&!v.asyncResolved){Q(v,m,h);return}else v.next=m,sf(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,x,_,R)=>{const k=()=>{if(u.isMounted){let{next:D,bu:N,u:z,parent:B,vnode:K}=u,Z=D,G;vt(u,!1),D?(D.el=K.el,Q(u,D,R)):D=K,N&&Xn(N),(G=D.props&&D.props.onVnodeBeforeUpdate)&&ze(G,B,D,K),vt(u,!0);const oe=Fr(u),Ce=u.subTree;u.subTree=oe,C(Ce,oe,d(Ce.el),b(Ce),u,x,_),D.el=oe.el,Z===null&&hf(u,oe.el),z&&we(z,x),(G=D.props&&D.props.onVnodeUpdated)&&we(()=>ze(G,B,D,K),x)}else{let D;const{el:N,props:z}=m,{bm:B,m:K,parent:Z}=u,G=Gn(m);if(vt(u,!1),B&&Xn(B),!G&&(D=z&&z.onVnodeBeforeMount)&&ze(D,Z,m),vt(u,!0),N&&V){const oe=()=>{u.subTree=Fr(u),V(N,u.subTree,u,x,null)};G?m.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=Fr(u);C(null,oe,h,v,u,x,_),m.el=oe.el}if(K&&we(K,x),!G&&(D=z&&z.onVnodeMounted)){const oe=m;we(()=>ze(D,Z,oe),x)}(m.shapeFlag&256||Z&&Gn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,x),u.isMounted=!0,m=h=v=null}},A=u.effect=new Sa(k,()=>Fa(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,vt(u,!0),E()},Q=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Uf(u,m.props,v,h),Wf(u,m.children,h),Zt(),vi(),en()},q=(u,m,h,v,x,_,R,k,A=!1)=>{const E=u&&u.children,D=u?u.shapeFlag:0,N=m.children,{patchFlag:z,shapeFlag:B}=m;if(z>0){if(z&128){rt(E,N,h,v,x,_,R,k,A);return}else if(z&256){Ke(E,N,h,v,x,_,R,k,A);return}}B&8?(D&16&&me(E,x,_),N!==E&&c(h,N)):D&16?B&16?rt(E,N,h,v,x,_,R,k,A):me(E,x,_,!0):(D&8&&c(h,""),B&16&&Ee(N,h,v,x,_,R,k,A))},Ke=(u,m,h,v,x,_,R,k,A)=>{u=u||$t,m=m||$t;const E=u.length,D=m.length,N=Math.min(E,D);let z;for(z=0;z<N;z++){const B=m[z]=A?st(m[z]):$e(m[z]);C(u[z],B,h,null,x,_,R,k,A)}E>D?me(u,x,_,!0,!1,N):Ee(m,h,v,x,_,R,k,A,N)},rt=(u,m,h,v,x,_,R,k,A)=>{let E=0;const D=m.length;let N=u.length-1,z=D-1;for(;E<=N&&E<=z;){const B=u[E],K=m[E]=A?st(m[E]):$e(m[E]);if(an(B,K))C(B,K,h,null,x,_,R,k,A);else break;E++}for(;E<=N&&E<=z;){const B=u[N],K=m[z]=A?st(m[z]):$e(m[z]);if(an(B,K))C(B,K,h,null,x,_,R,k,A);else break;N--,z--}if(E>N){if(E<=z){const B=z+1,K=B<D?m[B].el:v;for(;E<=z;)C(null,m[E]=A?st(m[E]):$e(m[E]),h,K,x,_,R,k,A),E++}}else if(E>z)for(;E<=N;)ye(u[E],x,_,!0),E++;else{const B=E,K=E,Z=new Map;for(E=K;E<=z;E++){const ke=m[E]=A?st(m[E]):$e(m[E]);ke.key!=null&&Z.set(ke.key,E)}let G,oe=0;const Ce=z-K+1;let Ft=!1,ii=0;const rn=new Array(Ce);for(E=0;E<Ce;E++)rn[E]=0;for(E=B;E<=N;E++){const ke=u[E];if(oe>=Ce){ye(ke,x,_,!0);continue}let De;if(ke.key!=null)De=Z.get(ke.key);else for(G=K;G<=z;G++)if(rn[G-K]===0&&an(ke,m[G])){De=G;break}De===void 0?ye(ke,x,_,!0):(rn[De-K]=E+1,De>=ii?ii=De:Ft=!0,C(ke,m[De],h,null,x,_,R,k,A),oe++)}const oi=Ft?Xf(rn):$t;for(G=oi.length-1,E=Ce-1;E>=0;E--){const ke=K+E,De=m[ke],si=ke+1<D?m[ke+1].el:v;rn[E]===0?C(null,De,h,si,x,_,R,k,A):Ft&&(G<0||E!==oi[G]?je(De,h,si,2):G--)}}},je=(u,m,h,v,x=null)=>{const{el:_,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){je(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===qe){r(_,m,h);for(let N=0;N<A.length;N++)je(A[N],m,h,v);r(u.anchor,m,h);return}if(R===Jn){F(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(_),r(_,m,h),we(()=>k.enter(_),x);else{const{leave:N,delayLeave:z,afterLeave:B}=k,K=()=>r(_,m,h),Z=()=>{N(_,()=>{K(),B&&B()})};z?z(_,K,Z):Z()}else r(_,m,h)},ye=(u,m,h,v=!1,x=!1)=>{const{type:_,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:D,patchFlag:N,dirs:z}=u;if(k!=null&&aa(k,null,h,u,!0),D&256){m.ctx.deactivate(u);return}const B=D&1&&z,K=!Gn(u);let Z;if(K&&(Z=R&&R.onVnodeBeforeUnmount)&&ze(Z,m,u),D&6)Tn(u.component,h,v);else{if(D&128){u.suspense.unmount(h,v);return}B&&gt(u,null,m,"beforeUnmount"),D&64?u.type.remove(u,m,h,x,O,v):E&&(_!==qe||N>0&&N&64)?me(E,m,h,!1,!0):(_===qe&&N&384||!x&&D&16)&&me(A,m,h),v&&Nt(u)}(K&&(Z=R&&R.onVnodeUnmounted)||B)&&we(()=>{Z&&ze(Z,m,u),B&&gt(u,null,m,"unmounted")},h)},Nt=u=>{const{type:m,el:h,anchor:v,transition:x}=u;if(m===qe){Mt(h,v);return}if(m===Jn){S(u);return}const _=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:k}=x,A=()=>R(h,_);k?k(u.el,_,A):A()}else _()},Mt=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Tn=(u,m,h)=>{const{bum:v,scope:x,update:_,subTree:R,um:k}=u;v&&Xn(v),x.stop(),_&&(_.active=!1,ye(R,u,m,h)),k&&we(k,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},me=(u,m,h,v=!1,x=!1,_=0)=>{for(let R=_;R<u.length;R++)ye(u[R],m,h,v,x)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&ye(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),vi(),is(),m._vnode=u},O={p:C,um:ye,m:je,r:Nt,mt:nn,mc:Ee,pc:q,pbc:Oe,n:b,o:e};let j,V;return t&&([j,V]=t(O)),{render:T,hydrate:j,createApp:$f(T,j)}}function vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Vf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function xs(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||xs(o,s)),s.type===Or&&(s.el=o.el)}}function Xf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Gf=e=>e.__isTeleport,qe=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),dn=[];let Ie=null;function ws(e=!1){dn.push(Ie=e?null:[])}function Qf(){dn.pop(),Ie=dn[dn.length-1]||null}let xn=1;function Ci(e){xn+=e}function _s(e){return e.dynamicChildren=xn>0?Ie||$t:null,Qf(),xn>0&&Ie&&Ie.push(e),e}function Jf(e,t,n,r,a,i){return _s(ks(e,t,n,r,a,i,!0))}function Zf(e,t,n,r,a){return _s(be(e,t,n,r,a,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function an(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",Es=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||he(e)||U(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function ks(e,t=null,n=null,r=0,a=null,i=e===qe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Es(t),ref:t&&Zn(t),scopeId:kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Pe};return s?($a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),xn>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const be=ec;function ec(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===If)&&(e=Ct),ia(e)){const s=Vt(e,t,!0);return n&&$a(s,n),xn>0&&!i&&Ie&&(s.shapeFlag&6?Ie[Ie.indexOf(e)]=s:Ie.push(s)),s.patchFlag|=-2,s}if(dc(e)&&(e=e.__vccOpts),t){t=tc(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Pa(s)),ee(l)&&(Go(l)&&!$(l)&&(l=de({},l)),t.style=Oa(l))}const o=se(e)?1:gf(e)?128:Gf(e)?64:ee(e)?4:U(e)?2:0;return ks(e,t,n,r,a,o,i,!0)}function tc(e){return e?Go(e)||Pr in e?de({},e):e:null}function Vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?rc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Es(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function nc(e=" ",t=0){return be(Or,null,e,t)}function Um(e,t){const n=be(Jn,null,e);return n.staticCount=t,n}function Hm(e="",t=!1){return t?(ws(),Zf(Ct,null,e)):be(Ct,null,e)}function $e(e){return e==null||typeof e=="boolean"?be(Ct):$(e)?be(qe,null,e.slice()):typeof e=="object"?st(e):be(Or,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[nc(t)]):n=8);e.children=t,e.shapeFlag|=n}function rc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Pa([t.class,r.class]));else if(a==="style")t.style=Oa([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ze(e,t,n,r=null){Me(e,t,7,[n,r])}const ac=ps();let ic=0;function oc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ac,i={uid:ic++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gs(r,a),emitsOptions:ss(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cf.bind(null,i),e.ce&&e.ce(i),i}let ue=null,Ba,Lt,Si="__VUE_INSTANCE_SETTERS__";(Lt=Vr()[Si])||(Lt=Vr()[Si]=[]),Lt.push(e=>ue=e),Ba=e=>{Lt.length>1?Lt.forEach(t=>t(e)):Lt[0](e)};const Xt=e=>{Ba(e),e.scope.on()},Ot=()=>{ue&&ue.scope.off(),Ba(null)};function As(e){return e.vnode.shapeFlag&4}let wn=!1;function sc(e,t=!1){wn=t;const{props:n,children:r}=e.vnode,a=As(e);Bf(e,n,a,t),Kf(e,r);const i=a?lc(e,t):void 0;return wn=!1,i}function lc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qo(new Proxy(e.ctx,Nf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?cc(e):null;Xt(e),Zt();const i=ct(r,e,0,[e.props,a]);if(en(),Ot(),No(i)){if(i.then(Ot,Ot),t)return i.then(o=>{Ri(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else Ri(e,i,t)}else Os(e,t)}function Ri(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=ts(t)),Os(e,n)}let Ii;function Os(e,t,n){const r=e.type;if(!e.render){if(!t&&Ii&&!r.render){const a=r.template||Da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=de(de({isCustomElement:i,delimiters:s},o),l);r.render=Ii(a,f)}}e.render=r.render||Ne}{Xt(e),Zt();try{Mf(e)}finally{en(),Ot()}}}function fc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function cc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return fc(e)},slots:e.slots,emit:e.emit,expose:t}}function Cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ts(Qo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function uc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function dc(e){return U(e)&&"__vccOpts"in e}const ce=(e,t)=>rf(e,t,wn);function Ua(e,t,n){const r=arguments.length;return r===2?ee(t)&&!$(t)?ia(t)?be(e,null,[t]):be(e,t):be(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),be(e,t,n))}const mc=Symbol.for("v-scx"),pc=()=>Ge(mc),hc="3.3.7",gc="http://www.w3.org/2000/svg",yt=typeof document<"u"?document:null,Ti=yt&&yt.createElement("template"),vc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?yt.createElementNS(gc,e):yt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ti.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ti.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bc=Symbol("_vtc");function yc(e,t,n){const r=e[bc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const xc=Symbol("_vod");function wc(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&oa(r,i,"");for(const i in n)oa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),xc in e&&(r.display=i)}}const Ni=/\s*!important$/;function oa(e,t,n){if($(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_c(e,t);Ni.test(n)?e.setProperty(It(r),n.replace(Ni,""),"important"):e[r]=n}}const Mi=["Webkit","Moz","ms"],jr={};function _c(e,t){const n=jr[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return jr[t]=r;r=br(r);for(let a=0;a<Mi.length;a++){const i=Mi[a]+r;if(i in e)return jr[t]=i}return t}const Fi="http://www.w3.org/1999/xlink";function Ec(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fi,t.slice(6,t.length)):e.setAttributeNS(Fi,t,n);else{const i=Ol(t);n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function kc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Lo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function xt(e,t,n,r){e.addEventListener(t,n,r)}function Ac(e,t,n,r){e.removeEventListener(t,n,r)}const Li=Symbol("_vei");function Oc(e,t,n,r,a=null){const i=e[Li]||(e[Li]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pc(t);if(r){const f=i[t]=Rc(r,a);xt(e,s,f,l)}else o&&(Ac(e,s,o,l),i[t]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;function Pc(e){let t;if(ji.test(e)){t={};let r;for(;r=e.match(ji);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let Dr=0;const Cc=Promise.resolve(),Sc=()=>Dr||(Cc.then(()=>Dr=0),Dr=Date.now());function Rc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Ic(r,n.value),t,5,[r])};return n.value=e,n.attached=Sc(),n}function Ic(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Di=/^on[a-z]/,Tc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?yc(e,r,a):t==="style"?wc(e,n,r):hr(t)?Ea(t)||Oc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nc(e,t,r,a))?kc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ec(e,t,r,a))};function Nc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Di.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Di.test(t)&&se(n)?!1:t in e}const lr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>Xn(t,n):t};function Mc(e){e.target.composing=!0}function zi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Kt=Symbol("_assign"),Km={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Kt]=lr(a);const i=r||a.props&&a.props.type==="number";xt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=rr(s)),e[Kt](s)}),n&&xt(e,"change",()=>{e.value=e.value.trim()}),t||(xt(e,"compositionstart",Mc),xt(e,"compositionend",zi),xt(e,"change",zi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Kt]=lr(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&rr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Wm={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=gr(t);xt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?rr(fr(o)):fr(o));e[Kt](e.multiple?a?new Set(i):i:i[0])}),e[Kt]=lr(r)},mounted(e,{value:t}){$i(e,t)},beforeUpdate(e,t,n){e[Kt]=lr(n)},updated(e,{value:t}){$i(e,t)}};function $i(e,t){const n=e.multiple;if(!(n&&!$(t)&&!gr(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=fr(i);if(n)$(t)?i.selected=Cl(t,o)>-1:i.selected=t.has(o);else if(yr(fr(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function fr(e){return"_value"in e?e._value:e.value}const Fc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ym=(e,t)=>n=>{if(!("key"in n))return;const r=It(n.key);if(t.some(a=>a===r||Fc[a]===r))return e(n)},Lc=de({patchProp:Tc},vc);let Bi;function jc(){return Bi||(Bi=Yf(Lc))}const Dc=(...e)=>{const t=jc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=zc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function zc(e){return se(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function $c(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function zr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Fe(a)?a.map(e):e(a)}return n}const mn=()=>{},Fe=Array.isArray,Bc=/\/$/,Uc=e=>e.replace(Bc,"");function $r(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Yc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Hc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ui(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Kc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Gt(t.matched[r],n.matched[a])&&Ps(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ps(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Wc(e[n],t[n]))return!1;return!0}function Wc(e,t){return Fe(e)?Hi(e,t):Fe(t)?Hi(t,e):e===t}function Hi(e,t){return Fe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Yc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _n;(function(e){e.pop="pop",e.push="push"})(_n||(_n={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function qc(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Uc(e)}const Vc=/^[^#]+#/;function Xc(e,t){return e.replace(Vc,"#")+t}function Gc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Gc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ki(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function Jc(e,t){sa.set(e,t)}function Zc(e){const t=sa.get(e);return sa.delete(e),t}let eu=()=>location.protocol+"//"+location.host;function Cs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ui(l,"")}return Ui(n,e)+r+a}function tu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Cs(e,location),P=n.value,C=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}L=C?p.position-C.position:0}else r(g);a.forEach(y=>{y(n.value,P,{delta:L,type:_n.pop,direction:L?L>0?pn.forward:pn.back:pn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Sr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function Wi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Sr():null}}function nu(e){const{history:t,location:n}=window,r={value:Cs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:eu()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=X({},t.state,Wi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Sr()});i(c.current,c,!0);const d=X({},Wi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ru(e){e=qc(e);const t=nu(e),n=tu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Xc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function au(e){return typeof e=="string"||e&&typeof e=="object"}function Ss(e){return typeof e=="string"||typeof e=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rs=Symbol("");var Yi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Yi||(Yi={}));function Qt(e,t){return X(new Error,{type:e,[Rs]:!0},t)}function We(e,t){return e instanceof Error&&Rs in e&&(t==null||!!(e.type&t))}const qi="[^/]+?",iu={sensitive:!1,strict:!1,start:!0,end:!0},ou=/[.+*?^${}()[\]/\\]/g;function su(e,t){const n=X({},iu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(ou,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:L,regexp:y}=p;i.push({name:P,repeatable:C,optional:L});const w=y||qi;if(w!==qi){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let F=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(F=L&&f.length<2?`(?:/${F})`:"/"+F),L&&(F+="?"),a+=F,g+=20,L&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:L}=g,y=P in f?f[P]:"";if(Fe(y)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=Fe(y)?y.join("/"):y;if(!w)if(L)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function lu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function fu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=lu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Vi(r))return 1;if(Vi(a))return-1}return a.length-r.length}function Vi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cu={type:0,value:""},uu=/[a-zA-Z0-9_]/;function du(e){if(!e)return[[]];if(e==="/")return[[cu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:uu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function mu(e,t,n){const r=su(du(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function pu(e,t){const n=[],r=new Map;t=Qi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,P=hu(c);P.aliasOf=p&&p.record;const C=Qi(t,c),L=[P];if("alias"in c){const F=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of F)L.push(X({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let y,w;for(const F of L){const{path:S}=F;if(d&&S[0]!=="/"){const H=d.record.path,J=H[H.length-1]==="/"?"":"/";F.path=d.record.path+(S&&J+S)}if(y=mu(F,d,C),p?p.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Gi(y)&&o(c.name)),P.children){const H=P.children;for(let J=0;J<H.length;J++)i(H[J],y,p&&p.children[J])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:mn}function o(c){if(Ss(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&fu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Is(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Gi(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},P,C;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Qt(1,{location:c});C=p.record.name,g=X(Xi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Xi(c.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in c)P=c.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Qt(1,{location:c,currentLocation:d});C=p.record.name,g=X({},d.params,c.params),P=p.stringify(g)}const L=[];let y=p;for(;y;)L.unshift(y.record),y=y.parent;return{name:C,path:P,params:g,matched:L,meta:vu(L)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Xi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function hu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function gu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Gi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Qi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Is(e,t){return t.children.some(n=>n===e||Is(e,n))}const Ts=/#/g,bu=/&/g,yu=/\//g,xu=/=/g,wu=/\?/g,Ns=/\+/g,_u=/%5B/g,Eu=/%5D/g,Ms=/%5E/g,ku=/%60/g,Fs=/%7B/g,Au=/%7C/g,Ls=/%7D/g,Ou=/%20/g;function Ha(e){return encodeURI(""+e).replace(Au,"|").replace(_u,"[").replace(Eu,"]")}function Pu(e){return Ha(e).replace(Fs,"{").replace(Ls,"}").replace(Ms,"^")}function la(e){return Ha(e).replace(Ns,"%2B").replace(Ou,"+").replace(Ts,"%23").replace(bu,"%26").replace(ku,"`").replace(Fs,"{").replace(Ls,"}").replace(Ms,"^")}function Cu(e){return la(e).replace(xu,"%3D")}function Su(e){return Ha(e).replace(Ts,"%23").replace(wu,"%3F")}function Ru(e){return e==null?"":Su(e).replace(yu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Iu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ns," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let f=t[s];Fe(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Ji(e){let t="";for(let n in e){const r=e[n];if(n=Cu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Tu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Fe(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Nu=Symbol(""),Zi=Symbol(""),Ka=Symbol(""),js=Symbol(""),fa=Symbol("");function on(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Qt(4,{from:n,to:t})):d instanceof Error?s(d):au(d)?s(Qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Mu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(lt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=$c(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&lt(p,n,r,i,o)()}))}}return a}function Mu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function eo(e){const t=Ge(Ka),n=Ge(js),r=ce(()=>t.resolve(At(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Gt.bind(null,c));if(p>-1)return p;const g=to(l[f-2]);return f>1&&to(c)===g&&d[d.length-1].path!==g?d.findIndex(Gt.bind(null,l[f-2])):p}),i=ce(()=>a.value>-1&&Du(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&Ps(n.params,r.value.params));function s(l={}){return ju(l)?t[At(e.replace)?"replace":"push"](At(e.to)).catch(mn):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Fu=ja({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eo,setup(e,{slots:t}){const n=wr(eo(e)),{options:r}=Ge(Ka),a=ce(()=>({[no(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[no(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ua("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Lu=Fu;function ju(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Du(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Fe(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function to(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const no=(e,t,n)=>e??t??n,zu=ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(fa),a=ce(()=>e.route||r.value),i=Ge(Zi,0),o=ce(()=>{let f=At(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=ce(()=>a.value.matched[o.value]);Qn(Zi,ce(()=>o.value+1)),Qn(Nu,s),Qn(fa,a);const l=Jl();return cn(()=>[l.value,s.value,e.name],([f,c,d],[p,g,P])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Gt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return ro(n.default,{Component:p,route:f});const g=d.props[c],P=g?g===!0?f.params:typeof g=="function"?g(f):g:null,L=Ua(p,X({},P,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return ro(n.default,{Component:L,route:f})||L}}});function ro(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ds=zu;function $u(e){const t=pu(e.routes,e),n=e.parseQuery||Iu,r=e.stringifyQuery||Ji,a=e.history,i=on(),o=on(),s=on(),l=Zl(it);let f=it;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,b=>""+b),d=zr.bind(null,Ru),p=zr.bind(null,cr);function g(b,T){let O,j;return Ss(b)?(O=t.getRecordMatcher(b),j=T):j=b,t.addRoute(j,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||l.value),typeof b=="string"){const h=$r(n,b,T.path),v=t.resolve({path:h.path},T),x=a.createHref(h.fullPath);return X(h,v,{params:p(v.params),hash:cr(h.hash),redirectedFrom:void 0,href:x})}let O;if("path"in b)O=X({},b,{path:$r(n,b.path,T.path).path});else{const h=X({},b.params);for(const v in h)h[v]==null&&delete h[v];O=X({},b,{params:d(h)}),T.params=d(T.params)}const j=t.resolve(O,T),V=b.hash||"";j.params=c(p(j.params));const u=Hc(r,X({},b,{hash:Pu(V),path:j.path})),m=a.createHref(u);return X({fullPath:u,hash:V,query:r===Ji?Tu(b.query):b.query||{}},j,{redirectedFrom:void 0,href:m})}function w(b){return typeof b=="string"?$r(n,b,l.value.path):X({},b)}function F(b,T){if(f!==b)return Qt(8,{from:T,to:b})}function S(b){return ae(b)}function H(b){return S(X(w(b),{replace:!0}))}function J(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),X({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ae(b,T){const O=f=y(b),j=l.value,V=b.state,u=b.force,m=b.replace===!0,h=J(O);if(h)return ae(X(w(h),{state:typeof h=="object"?X({},V,h.state):V,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let x;return!u&&Kc(r,j,O)&&(x=Qt(16,{to:v,from:j}),je(j,j,!0,!1)),(x?Promise.resolve(x):Oe(v,j)).catch(_=>We(_)?We(_,2)?_:rt(_):q(_,v,j)).then(_=>{if(_){if(We(_,2))return ae(X({replace:m},w(_.to),{state:typeof _.to=="object"?X({},V,_.to.state):V,force:u}),T||v)}else _=ht(v,j,!0,m,V);return nt(v,j,_),_})}function Ee(b,T){const O=F(b,T);return O?Promise.reject(O):Promise.resolve()}function ge(b){const T=Mt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Oe(b,T){let O;const[j,V,u]=Bu(b,T);O=Br(j.reverse(),"beforeRouteLeave",b,T);for(const h of j)h.leaveGuards.forEach(v=>{O.push(lt(v,b,T))});const m=Ee.bind(null,b,T);return O.push(m),me(O).then(()=>{O=[];for(const h of i.list())O.push(lt(h,b,T));return O.push(m),me(O)}).then(()=>{O=Br(V,"beforeRouteUpdate",b,T);for(const h of V)h.updateGuards.forEach(v=>{O.push(lt(v,b,T))});return O.push(m),me(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(Fe(h.beforeEnter))for(const v of h.beforeEnter)O.push(lt(v,b,T));else O.push(lt(h.beforeEnter,b,T));return O.push(m),me(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Br(u,"beforeRouteEnter",b,T),O.push(m),me(O))).then(()=>{O=[];for(const h of o.list())O.push(lt(h,b,T));return O.push(m),me(O)}).catch(h=>We(h,8)?h:Promise.reject(h))}function nt(b,T,O){s.list().forEach(j=>ge(()=>j(b,T,O)))}function ht(b,T,O,j,V){const u=F(b,T);if(u)return u;const m=T===it,h=jt?history.state:{};O&&(j||m?a.replace(b.fullPath,X({scroll:m&&h&&h.scroll},V)):a.push(b.fullPath,V)),l.value=b,je(b,T,O,m),rt()}let Le;function nn(){Le||(Le=a.listen((b,T,O)=>{if(!Tn.listening)return;const j=y(b),V=J(j);if(V){ae(X(V,{replace:!0}),j).catch(mn);return}f=j;const u=l.value;jt&&Jc(Ki(u.fullPath,O.delta),Sr()),Oe(j,u).catch(m=>We(m,12)?m:We(m,2)?(ae(m.to,j).then(h=>{We(h,20)&&!O.delta&&O.type===_n.pop&&a.go(-1,!1)}).catch(mn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),q(m,j,u))).then(m=>{m=m||ht(j,u,!1),m&&(O.delta&&!We(m,8)?a.go(-O.delta,!1):O.type===_n.pop&&We(m,20)&&a.go(-1,!1)),nt(j,u,m)}).catch(mn)}))}let Tt=on(),fe=on(),Q;function q(b,T,O){rt(b);const j=fe.list();return j.length?j.forEach(V=>V(b,T,O)):console.error(b),Promise.reject(b)}function Ke(){return Q&&l.value!==it?Promise.resolve():new Promise((b,T)=>{Tt.add([b,T])})}function rt(b){return Q||(Q=!b,nn(),Tt.list().forEach(([T,O])=>b?O(b):T()),Tt.reset()),b}function je(b,T,O,j){const{scrollBehavior:V}=e;if(!jt||!V)return Promise.resolve();const u=!O&&Zc(Ki(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return rs().then(()=>V(b,T,u)).then(m=>m&&Qc(m)).catch(m=>q(m,b,T))}const ye=b=>a.go(b);let Nt;const Mt=new Set,Tn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:L,getRoutes:C,resolve:y,options:e,push:S,replace:H,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:Ke,install(b){const T=this;b.component("RouterLink",Lu),b.component("RouterView",Ds),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>At(l)}),jt&&!Nt&&l.value===it&&(Nt=!0,S(a.location).catch(V=>{}));const O={};for(const V in it)Object.defineProperty(O,V,{get:()=>l.value[V],enumerable:!0});b.provide(Ka,T),b.provide(js,Vo(O)),b.provide(fa,l);const j=b.unmount;Mt.add(b),b.unmount=function(){Mt.delete(b),Mt.size<1&&(f=it,Le&&Le(),Le=null,l.value=it,Nt=!1,Q=!1),j()}}};function me(b){return b.reduce((T,O)=>T.then(()=>ge(O)),Promise.resolve())}return Tn}function Bu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Gt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Gt(f,l))||a.push(l))}return[n,r,a]}const Uu={__name:"App",setup(e){return(t,n)=>(ws(),Jf("div",null,[be(At(Ds))]))}},Hu="modulepreload",Ku=function(e){return"/"+e},ao={},Ur=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ku(i),i in ao)return;ao[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Hu,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Wu=$u({history:ru("/"),routes:[{path:"/",name:"main",component:()=>Ur(()=>import("./MainView-50f775aa.js"),["assets/MainView-50f775aa.js","assets/habitUtils-35bd76c0.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/MainView-897c099f.css"]),children:[{path:"day/:day",component:()=>Ur(()=>import("./DayView-81faec3d.js"),["assets/DayView-81faec3d.js","assets/habitUtils-35bd76c0.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/DayView-8e3fd576.css"]),props:!0}]},{path:"/:catchAll(.*)",name:"NotFound",component:()=>Ur(()=>import("./ErrorPage-5cd90103.js"),["assets/ErrorPage-5cd90103.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/ErrorPage-096d38f1.css"])}]});function io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?io(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):io(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function Yu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qu(e,t,n){return t&&oo(e.prototype,t),n&&oo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wa(e,t){return Xu(e)||Qu(e,t)||zs(e,t)||Zu()}function Sn(e){return Vu(e)||Gu(e)||zs(e)||Ju()}function Vu(e){if(Array.isArray(e))return ca(e)}function Xu(e){if(Array.isArray(e))return e}function Gu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zs(e,t){if(e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ju(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var so=function(){},Ya={},$s={},Bs=null,Us={mark:so,measure:so};try{typeof window<"u"&&(Ya=window),typeof document<"u"&&($s=document),typeof MutationObserver<"u"&&(Bs=MutationObserver),typeof performance<"u"&&(Us=performance)}catch{}var ed=Ya.navigator||{},lo=ed.userAgent,fo=lo===void 0?"":lo,dt=Ya,re=$s,co=Bs,zn=Us;dt.document;var tt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Hs=~fo.indexOf("MSIE")||~fo.indexOf("Trident/"),$n,Bn,Un,Hn,Kn,Qe="___FONT_AWESOME___",ua=16,Ks="fa",Ws="svg-inline--fa",St="data-fa-i2svg",da="data-fa-pseudo-element",td="data-fa-pseudo-element-pending",qa="data-prefix",Va="data-icon",uo="fontawesome-i2svg",nd="async",rd=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),ne="classic",ie="sharp",Xa=[ne,ie];function Rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var En=Rn(($n={},le($n,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le($n,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),$n)),kn=Rn((Bn={},le(Bn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Bn,ie,{solid:"fass",regular:"fasr",light:"fasl"}),Bn)),An=Rn((Un={},le(Un,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Un,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Un)),ad=Rn((Hn={},le(Hn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Hn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Hn)),id=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,qs="fa-layers-text",od=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sd=Rn((Kn={},le(Kn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Kn,ie,{900:"fass",400:"fasr",300:"fasl"}),Kn)),Vs=[1,2,3,4,5,6,7,8,9,10],ld=Vs.concat([11,12,13,14,15,16,17,18,19,20]),fd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=new Set;Object.keys(kn[ne]).map(On.add.bind(On));Object.keys(kn[ie]).map(On.add.bind(On));var cd=[].concat(Xa,Sn(On),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(ld.map(function(e){return"w-".concat(e)})),hn=dt.FontAwesomeConfig||{};function ud(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var md=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];md.forEach(function(e){var t=Wa(e,2),n=t[0],r=t[1],a=dd(ud(n));a!=null&&(hn[r]=a)})}var Xs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ks,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Jt=I(I({},Xs),hn);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var M={};Object.keys(Xs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Jt[e]=n,gn.forEach(function(r){return r(M)})},get:function(){return Jt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,gn.forEach(function(n){return n(M)})},get:function(){return Jt.cssPrefix}});dt.FontAwesomeConfig=M;var gn=[];function pd(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var ot=ua,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hd(e){if(!(!e||!tt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var gd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=gd[Math.random()*62|0];return t}function tn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?tn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Gs(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qa(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function bd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function yd(e){var t=e.transform,n=e.width,r=n===void 0?ua:n,a=e.height,i=a===void 0?ua:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Hs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var xd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qs(){var e=Ks,t=Ws,n=M.cssPrefix,r=M.replacementClass,a=xd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mo=!1;function Hr(){M.autoAddCss&&!mo&&(hd(Qs()),mo=!0)}var wd={mixout:function(){return{dom:{css:Qs,insertCss:Hr}}},hooks:function(){return{beforeDOMElementCreation:function(){Hr()},beforeI2svg:function(){Hr()}}}},Je=dt||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var Te=Je[Qe],Js=[],_d=function e(){re.removeEventListener("DOMContentLoaded",e),dr=1,Js.map(function(t){return t()})},dr=!1;tt&&(dr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),dr||re.addEventListener("DOMContentLoaded",_d));function Ed(e){tt&&(dr?setTimeout(e,0):Js.push(e))}function In(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Gs(e):"<".concat(t," ").concat(vd(r),">").concat(i.map(In).join(""),"</").concat(t,">")}function po(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var kd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?kd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Ad(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ma(e){var t=Ad(e);return t.length===1?t[0].toString(16):null}function Od(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ho(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ho(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,ho(t)):Te.styles[e]=I(I({},Te.styles[e]||{}),i),e==="fas"&&pa("fa",t)}var Wn,Yn,qn,Dt=Te.styles,Pd=Te.shims,Cd=(Wn={},le(Wn,ne,Object.values(An[ne])),le(Wn,ie,Object.values(An[ie])),Wn),Ja=null,Zs={},el={},tl={},nl={},rl={},Sd=(Yn={},le(Yn,ne,Object.keys(En[ne])),le(Yn,ie,Object.keys(En[ie])),Yn);function Rd(e){return~cd.indexOf(e)}function Id(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Rd(a)?a:null}var al=function(){var t=function(i){return Kr(Dt,function(o,s,l){return o[l]=Kr(s,i,{}),o},{})};Zs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),el=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),rl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Kr(Pd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});tl=r.names,nl=r.unicodes,Ja=Ir(M.styleDefault,{family:M.familyDefault})};pd(function(e){Ja=Ir(e.styleDefault,{family:M.familyDefault})});al();function Za(e,t){return(Zs[e]||{})[t]}function Td(e,t){return(el[e]||{})[t]}function Et(e,t){return(rl[e]||{})[t]}function il(e){return tl[e]||{prefix:null,iconName:null}}function Nd(e){var t=nl[e],n=Za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Ja}var ei=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=En[r][e],i=kn[r][e]||kn[r][a],o=e in Te.styles?e:null;return i||o||null}var go=(qn={},le(qn,ne,Object.keys(An[ne])),le(qn,ie,Object.keys(An[ie])),qn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),le(t,ie,"".concat(M.cssPrefix,"-").concat(ie)),t),o=null,s=ne;(e.includes(i[ne])||e.some(function(f){return go[ne].includes(f)}))&&(s=ne),(e.includes(i[ie])||e.some(function(f){return go[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,c){var d=Id(M.cssPrefix,c);if(Dt[c]?(c=Cd[s].includes(c)?ad[s][c]:c,o=c,f.prefix=c):Sd[s].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[ne]&&c!==i[ie]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?il(f.iconName):{},g=Et(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ei());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Dt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var Md=function(){function e(){Yu(this,e),this.definitions={}}return qu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),pa(s,o[s]);var l=An[ne][s];l&&pa(l,o[s]),al()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),vo=[],zt={},Wt={},Fd=Object.keys(Wt);function Ld(e,t){var n=t.mixoutsTo;return vo=e,zt={},Object.keys(Wt).forEach(function(r){Fd.indexOf(r)===-1&&delete Wt[r]}),vo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ur(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){zt[o]||(zt[o]=[]),zt[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function ha(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=zt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=zt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function ga(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(t)return t=Et(n,t)||t,po(ol.definitions,n,t)||po(Te.styles,n,t)}var ol=new Md,jd=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Rt("noAuto")},Dd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Rt("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Ed(function(){$d({autoReplaceSvgRoot:n}),Rt("watch",t)})}},zd={icon:function(t){if(t===null)return null;if(ur(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(id))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:Et(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:Et(i,t)||t}}}},Ae={noAuto:jd,config:M,dom:Dd,parse:zd,library:ol,findIconDefinition:ga,toHtml:In},$d=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Te.styles).length>0||M.autoFetchSvg)&&tt&&M.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return In(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Bd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Rr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ud(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ti(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,L=P.height,y=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ge){return d.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(d.classes).join(" "),F={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(L)})},S=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/L*16*.0625,"em")}:{};g&&(F.attributes[St]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[l]}),delete F.attributes.title);var H=I(I({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},S),d.styles)}),J=r.found&&n.found?Ze("generateAbstractMask",H)||{children:[],attributes:{}}:Ze("generateAbstractIcon",H)||{children:[],attributes:{}},ae=J.children,Ee=J.attributes;return H.children=ae,H.attributes=Ee,s?Ud(H):Bd(H)}function bo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[St]="");var c=I({},o.styles);Qa(a)&&(c.transform=yd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Hd(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=Te.styles;function va(e){var t=e[0],n=e[1],r=e.slice(4),a=Wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Kd={found:!1,width:512,height:512};function Wd(e,t){!Ys&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ba(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(Ze("missingIconAbstract"),n==="fa"){var i=il(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(va(o))}Wd(e,t),r(I(I({},Kd),{},{icon:M.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var yo=function(){},ya=M.measurePerformance&&zn&&zn.mark&&zn.measure?zn:{mark:yo,measure:yo},fn='FA "6.4.2"',Yd=function(t){return ya.mark("".concat(fn," ").concat(t," begins")),function(){return sl(t)}},sl=function(t){ya.mark("".concat(fn," ").concat(t," ends")),ya.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},ni={begin:Yd,end:sl},er=function(){};function xo(e){var t=e.getAttribute?e.getAttribute(St):null;return typeof t=="string"}function qd(e){var t=e.getAttribute?e.getAttribute(qa):null,n=e.getAttribute?e.getAttribute(Va):null;return t&&n}function Vd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Xd(){if(M.autoReplaceSvg===!0)return tr.replace;var e=tr[M.autoReplaceSvg];return e||tr.replace}function Gd(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function Qd(e){return re.createElement(e)}function ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gd:Qd:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ll(o,{ceFn:r}))}),a}function Jd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var tr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ll(a),n)}),n.getAttribute(St)===null&&M.keepOriginalSource){var r=re.createComment(Jd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(M.replacementClass))return tr.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return In(s)}).join(`
`);n.setAttribute(St,""),n.innerHTML=o}};function wo(e){e()}function fl(e,t){var n=typeof t=="function"?t:er;if(e.length===0)n();else{var r=wo;M.mutateApproach===nd&&(r=dt.requestAnimationFrame||wo),r(function(){var a=Xd(),i=ni.begin("mutate");e.map(a),i(),n()})}}var ri=!1;function cl(){ri=!0}function xa(){ri=!1}var mr=null;function _o(e){if(co&&M.observeMutations){var t=e.treeCallback,n=t===void 0?er:t,r=e.nodeCallback,a=r===void 0?er:r,i=e.pseudoElementsCallback,o=i===void 0?er:i,s=e.observeMutationsRoot,l=s===void 0?re:s;mr=new co(function(f){if(!ri){var c=mt();tn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!xo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&xo(d.target)&&~fd.indexOf(d.attributeName))if(d.attributeName==="class"&&qd(d.target)){var p=Tr(Ga(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(qa,g||c),P&&d.target.setAttribute(Va,P)}else Vd(d.target)&&a(d.target)})}}),tt&&mr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zd(){mr&&mr.disconnect()}function em(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function tm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(Ga(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Td(a.prefix,e.innerText)||Za(a.prefix,ma(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function nm(e){var t=tn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function rm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tm(e),r=n.iconName,a=n.prefix,i=n.rest,o=nm(e),s=ha("parseNodeAttributes",{},e),l=t.styleParser?em(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var am=Te.styles;function ul(e){var t=M.autoReplaceSvg==="nest"?Eo(e,{styleParser:!1}):Eo(e);return~t.extra.classes.indexOf(qs)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var pt=new Set;Xa.map(function(e){pt.add("fa-".concat(e))});Object.keys(En[ne]).map(pt.add.bind(pt));Object.keys(En[ie]).map(pt.add.bind(pt));pt=Sn(pt);function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(uo,"-").concat(d))},a=function(d){return n.remove("".concat(uo,"-").concat(d))},i=M.autoFetchSvg?pt:Xa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(am));i.includes("fa")||i.push("fa");var o=[".".concat(qs,":not([").concat(St,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(St,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ni.begin("onTree"),f=s.reduce(function(c,d){try{var p=ul(d);p&&c.push(p)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){fl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function im(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ul(e).then(function(n){n&&fl([n],t)})}function om(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ga(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ga(a||{})),e(r,I(I({},n),{},{mask:a}))}}var sm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,L=C===void 0?[]:C,y=n.attributes,w=y===void 0?{}:y,F=n.styles,S=F===void 0?{}:F;if(t){var H=t.prefix,J=t.iconName,ae=t.icon;return Nr(I({type:"icon"},t),function(){return Rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||Pn()):(w["aria-hidden"]="true",w.focusable="false")),ti({icons:{main:va(ae),mask:l?va(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:I(I({},Ue),a),symbol:o,title:p,maskId:c,titleId:P,extra:{attributes:w,styles:S,classes:L}})})}},lm={mixout:function(){return{icon:om(sm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ko,n.nodeCallback=im,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return ko(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([ba(a,s),c.iconName?ba(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var L=Wa(C,2),y=L[0],w=L[1];g([n,ti({icons:{main:y,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rr(s);l.length>0&&(a.style=l);var f;return Qa(o)&&(f=Ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},fm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nr({type:"layer"},function(){Rt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Sn(i)).join(" ")},children:o}]})}}}},cm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Nr({type:"counter",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),Hd({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Sn(s))}})})}}}},um={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Nr({type:"text",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),bo({content:n,transform:I(I({},Ue),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Sn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Hs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},dm=new RegExp('"',"ug"),Ao=[1105920,1112319];function mm(e){var t=e.replace(dm,""),n=Od(t,0),r=n>=Ao[0]&&n<=Ao[1],a=t.length===2?t[0]===t[1]:!1;return{value:ma(a?t[0]:t),isSecondary:r||a}}function Oo(e,t){var n="".concat(td).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=tn(e.children),o=i.filter(function(ae){return ae.getAttribute(da)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(od),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?kn[p][l[2].toLowerCase()]:sd[p][f],P=mm(d),C=P.value,L=P.isSecondary,y=l[0].startsWith("FontAwesome"),w=Za(g,C),F=w;if(y){var S=Nd(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!L&&(!o||o.getAttribute(qa)!==g||o.getAttribute(Va)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var H=rm(),J=H.extra;J.attributes[da]=t,ba(w,g).then(function(ae){var Ee=ti(I(I({},H),{},{icons:{main:ae,mask:ei()},prefix:g,iconName:F,extra:J,watchable:!0})),ge=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=Ee.map(function(Oe){return In(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function pm(e){return Promise.all([Oo(e,"::before"),Oo(e,"::after")])}function hm(e){return e.parentNode!==document.head&&!~rd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(da)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Po(e){if(tt)return new Promise(function(t,n){var r=tn(e.querySelectorAll("*")).filter(hm).map(pm),a=ni.begin("searchPseudoElements");cl(),Promise.all(r).then(function(){a(),xa(),t()}).catch(function(){a(),xa(),n()})})}var gm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;M.searchPseudoElements&&Po(a)}}},Co=!1,vm={mixout:function(){return{dom:{unwatch:function(){cl(),Co=!0}}}},hooks:function(){return{bootstrap:function(){_o(ha("mutationObserverCallbacks",{}))},noAuto:function(){Zd()},watch:function(n){var r=n.observeMutationsRoot;Co?xa():_o(ha("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},So=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bm={mixout:function(){return{parse:{transform:function(n){return So(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=So(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ym(e){return e.tag==="g"?e.children:[e]}var xm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):ei();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=bd({transform:l,containerWidth:d,iconWidth:f}),P={tag:"rect",attributes:I(I({},Yr),{},{fill:"white"})},C=c.children?{children:c.children.map(Ro)}:{},L={tag:"g",attributes:I({},g.inner),children:[Ro(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},C))]},y={tag:"g",attributes:I({},g.outer),children:[L]},w="mask-".concat(s||Pn()),F="clip-".concat(s||Pn()),S={tag:"mask",attributes:I(I({},Yr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,y]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:ym(p)},S]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(w,")")},Yr)}),{children:r,attributes:a}}}},wm={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_m={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Em=[wd,lm,fm,cm,um,gm,vm,bm,xm,wm,_m];Ld(Em,{mixoutsTo:Ae});Ae.noAuto;Ae.config;Ae.library;Ae.dom;var wa=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var km=Ae.icon;Ae.layer;Ae.text;Ae.counter;function Io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Io(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Am(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Om(e,t){if(e==null)return{};var n=Am(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Pm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dl={exports:{}};(function(e){(function(t){var n=function(y,w,F){if(!f(w)||d(w)||p(w)||g(w)||l(w))return w;var S,H=0,J=0;if(c(w))for(S=[],J=w.length;H<J;H++)S.push(n(y,w[H],F));else{S={};for(var ae in w)Object.prototype.hasOwnProperty.call(w,ae)&&(S[y(ae,F)]=n(y,w[ae],F))}return S},r=function(y,w){w=w||{};var F=w.separator||"_",S=w.split||/(?=[A-Z])/;return y.split(S).join(F)},a=function(y){return P(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var w=a(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},d=function(y){return s.call(y)=="[object Date]"},p=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},P=function(y){return y=y-0,y===y},C=function(y,w){var F=w&&"process"in w?w.process:w;return typeof F!="function"?y:function(S,H){return F(S,y,H)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,w){return n(C(a,w),y)},decamelizeKeys:function(y,w){return n(C(o,w),y,w)},pascalizeKeys:function(y,w){return n(C(i,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Pm)})(dl);var Cm=dl.exports,Sm=["class","style"];function Rm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Cm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Im(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ml(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ml(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Im(c);break;case"style":l.style=Rm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Om(n,Sm);return Ua(e.tag,Ve(Ve(Ve({},t),{},{class:a.class,style:Ve(Ve({},a.style),o)},a.attrs),s),r)}var pl=!1;try{pl=!0}catch{}function Tm(){if(!pl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Nm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function To(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wa.icon)return wa.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Mm=ja({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return To(t.icon)}),i=ce(function(){return qr("classes",Nm(t))}),o=ce(function(){return qr("transform",typeof t.transform=="string"?wa.transform(t.transform):t.transform)}),s=ce(function(){return qr("mask",To(t.mask))}),l=ce(function(){return km(a.value,Ve(Ve(Ve(Ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});cn(l,function(c){if(!c)return Tm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?ml(l.value.abstract[0],{},r):null});return function(){return f.value}}});const ai=Dc(Uu);ai.use(Wu);ai.component("font-awesome-icon",Mm);ai.mount("#app");export{qe as F,jm as a,ks as b,Jf as c,Ef as d,ce as e,$m as f,Km as g,Ym as h,Hm as i,be as j,Bm as k,Zf as l,uf as m,Pa as n,ws as o,Lm as p,Um as q,Jl as r,Dm as s,Fm as t,At as u,Wm as v,zm as w,Oa as x,nc as y};
