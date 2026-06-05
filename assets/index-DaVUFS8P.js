(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var jh={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function yM(){if(V_)return al;V_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:u,ref:s!==void 0?s:null,props:l}}return al.Fragment=t,al.jsx=n,al.jsxs=n,al}var H_;function SM(){return H_||(H_=1,jh.exports=yM()),jh.exports}var xn=SM(),Zh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function MM(){if(G_)return le;G_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function S(I,j,it){this.props=I,this.context=j,this.refs=M,this.updater=it||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=S.prototype;function w(I,j,it){this.props=I,this.context=j,this.refs=M,this.updater=it||y}var D=w.prototype=new L;D.constructor=w,T(D,S.prototype),D.isPureReactComponent=!0;var z=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function U(I,j,it){var yt=it.ref;return{$$typeof:o,type:I,key:j,ref:yt!==void 0?yt:null,props:it}}function ot(I,j){return U(I.type,j,I.props)}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function W(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(it){return j[it]})}var J=/\/+/g;function st(I,j){return typeof I=="object"&&I!==null&&I.key!=null?W(""+I.key):j.toString(36)}function Q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function N(I,j,it,yt,Dt){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var gt=!1;if(I===null)gt=!0;else switch(tt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(I.$$typeof){case o:case t:gt=!0;break;case v:return gt=I._init,N(gt(I._payload),j,it,yt,Dt)}}if(gt)return Dt=Dt(I),gt=yt===""?"."+st(I,0):yt,z(Dt)?(it="",gt!=null&&(it=gt.replace(J,"$&/")+"/"),N(Dt,j,it,"",function(Yt){return Yt})):Dt!=null&&(F(Dt)&&(Dt=ot(Dt,it+(Dt.key==null||I&&I.key===Dt.key?"":(""+Dt.key).replace(J,"$&/")+"/")+gt)),j.push(Dt)),1;gt=0;var Mt=yt===""?".":yt+":";if(z(I))for(var Ft=0;Ft<I.length;Ft++)yt=I[Ft],tt=Mt+st(yt,Ft),gt+=N(yt,j,it,tt,Dt);else if(Ft=x(I),typeof Ft=="function")for(I=Ft.call(I),Ft=0;!(yt=I.next()).done;)yt=yt.value,tt=Mt+st(yt,Ft++),gt+=N(yt,j,it,tt,Dt);else if(tt==="object"){if(typeof I.then=="function")return N(Q(I),j,it,yt,Dt);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return gt}function V(I,j,it){if(I==null)return I;var yt=[],Dt=0;return N(I,yt,"","",function(tt){return j.call(it,tt,Dt++)}),yt}function lt(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(it){(I._status===0||I._status===-1)&&(I._status=1,I._result=it)},function(it){(I._status===0||I._status===-1)&&(I._status=2,I._result=it)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},St={map:V,forEach:function(I,j,it){V(I,function(){j.apply(this,arguments)},it)},count:function(I){var j=0;return V(I,function(){j++}),j},toArray:function(I){return V(I,function(j){return j})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=_,le.Children=St,le.Component=S,le.Fragment=n,le.Profiler=s,le.PureComponent=w,le.StrictMode=a,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return B.H.useMemoCache(I)}},le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,j,it){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var yt=T({},I.props),Dt=I.key;if(j!=null)for(tt in j.key!==void 0&&(Dt=""+j.key),j)!A.call(j,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&j.ref===void 0||(yt[tt]=j[tt]);var tt=arguments.length-2;if(tt===1)yt.children=it;else if(1<tt){for(var gt=Array(tt),Mt=0;Mt<tt;Mt++)gt[Mt]=arguments[Mt+2];yt.children=gt}return U(I.type,Dt,yt)},le.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},le.createElement=function(I,j,it){var yt,Dt={},tt=null;if(j!=null)for(yt in j.key!==void 0&&(tt=""+j.key),j)A.call(j,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Dt[yt]=j[yt]);var gt=arguments.length-2;if(gt===1)Dt.children=it;else if(1<gt){for(var Mt=Array(gt),Ft=0;Ft<gt;Ft++)Mt[Ft]=arguments[Ft+2];Dt.children=Mt}if(I&&I.defaultProps)for(yt in gt=I.defaultProps,gt)Dt[yt]===void 0&&(Dt[yt]=gt[yt]);return U(I,tt,Dt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:f,render:I}},le.isValidElement=F,le.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:lt}},le.memo=function(I,j){return{$$typeof:d,type:I,compare:j===void 0?null:j}},le.startTransition=function(I){var j=B.T,it={};B.T=it;try{var yt=I(),Dt=B.S;Dt!==null&&Dt(it,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(P,ft)}catch(tt){ft(tt)}finally{j!==null&&it.types!==null&&(j.types=it.types),B.T=j}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(I){return B.H.use(I)},le.useActionState=function(I,j,it){return B.H.useActionState(I,j,it)},le.useCallback=function(I,j){return B.H.useCallback(I,j)},le.useContext=function(I){return B.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,j){return B.H.useDeferredValue(I,j)},le.useEffect=function(I,j){return B.H.useEffect(I,j)},le.useEffectEvent=function(I){return B.H.useEffectEvent(I)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(I,j,it){return B.H.useImperativeHandle(I,j,it)},le.useInsertionEffect=function(I,j){return B.H.useInsertionEffect(I,j)},le.useLayoutEffect=function(I,j){return B.H.useLayoutEffect(I,j)},le.useMemo=function(I,j){return B.H.useMemo(I,j)},le.useOptimistic=function(I,j){return B.H.useOptimistic(I,j)},le.useReducer=function(I,j,it){return B.H.useReducer(I,j,it)},le.useRef=function(I){return B.H.useRef(I)},le.useState=function(I){return B.H.useState(I)},le.useSyncExternalStore=function(I,j,it){return B.H.useSyncExternalStore(I,j,it)},le.useTransition=function(){return B.H.useTransition()},le.version="19.2.7",le}var k_;function Ip(){return k_||(k_=1,Zh.exports=MM()),Zh.exports}var Bi=Ip(),Kh={exports:{}},rl={},Qh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function EM(){return X_||(X_=1,(function(o){function t(N,V){var lt=N.length;N.push(V);t:for(;0<lt;){var ft=lt-1>>>1,St=N[ft];if(0<s(St,V))N[ft]=V,N[lt]=St,lt=ft;else break t}}function n(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var V=N[0],lt=N.pop();if(lt!==V){N[0]=lt;t:for(var ft=0,St=N.length,I=St>>>1;ft<I;){var j=2*(ft+1)-1,it=N[j],yt=j+1,Dt=N[yt];if(0>s(it,lt))yt<St&&0>s(Dt,it)?(N[ft]=Dt,N[yt]=lt,ft=yt):(N[ft]=it,N[j]=lt,ft=j);else if(yt<St&&0>s(Dt,lt))N[ft]=Dt,N[yt]=lt,ft=yt;else break t}}return V}function s(N,V){var lt=N.sortIndex-V.sortIndex;return lt!==0?lt:N.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],d=[],v=1,_=null,g=3,x=!1,y=!1,T=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var V=n(d);V!==null;){if(V.callback===null)a(d);else if(V.startTime<=N)a(d),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(d)}}function z(N){if(T=!1,D(N),!y)if(n(p)!==null)y=!0,P||(P=!0,W());else{var V=n(d);V!==null&&Q(z,V.startTime-N)}}var P=!1,B=-1,A=5,U=-1;function ot(){return M?!0:!(o.unstable_now()-U<A)}function F(){if(M=!1,P){var N=o.unstable_now();U=N;var V=!0;try{t:{y=!1,T&&(T=!1,L(B),B=-1),x=!0;var lt=g;try{e:{for(D(N),_=n(p);_!==null&&!(_.expirationTime>N&&ot());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,g=_.priorityLevel;var St=ft(_.expirationTime<=N);if(N=o.unstable_now(),typeof St=="function"){_.callback=St,D(N),V=!0;break e}_===n(p)&&a(p),D(N)}else a(p);_=n(p)}if(_!==null)V=!0;else{var I=n(d);I!==null&&Q(z,I.startTime-N),V=!1}}break t}finally{_=null,g=lt,x=!1}V=void 0}}finally{V?W():P=!1}}}var W;if(typeof w=="function")W=function(){w(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,st=J.port2;J.port1.onmessage=F,W=function(){st.postMessage(null)}}else W=function(){S(F,0)};function Q(N,V){B=S(function(){N(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(N){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var lt=g;g=V;try{return N()}finally{g=lt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var lt=g;g=N;try{return V()}finally{g=lt}},o.unstable_scheduleCallback=function(N,V,lt){var ft=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?ft+lt:ft):lt=ft,N){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=lt+St,N={id:v++,callback:V,priorityLevel:N,startTime:lt,expirationTime:St,sortIndex:-1},lt>ft?(N.sortIndex=lt,t(d,N),n(p)===null&&N===n(d)&&(T?(L(B),B=-1):T=!0,Q(z,lt-ft))):(N.sortIndex=St,t(p,N),y||x||(y=!0,P||(P=!0,W()))),N},o.unstable_shouldYield=ot,o.unstable_wrapCallback=function(N){var V=g;return function(){var lt=g;g=V;try{return N.apply(this,arguments)}finally{g=lt}}}})(Jh)),Jh}var W_;function bM(){return W_||(W_=1,Qh.exports=EM()),Qh.exports}var $h={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function TM(){if(q_)return In;q_=1;var o=Ip();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:p,containerInfo:d,implementation:v}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,In.createPortal=function(p,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,v)},In.flushSync=function(p){var d=u.T,v=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=v,a.d.f()}},In.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},In.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},In.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var v=d.as,_=f(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:x}):v==="script"&&a.d.X(p,{crossOrigin:_,integrity:g,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},In.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},In.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,_=f(v,d.crossOrigin);a.d.L(p,v,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},In.preloadModule=function(p,d){if(typeof p=="string")if(d){var v=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},In.requestFormReset=function(p){a.d.r(p)},In.unstable_batchedUpdates=function(p,d){return p(d)},In.useFormState=function(p,d,v){return u.H.useFormState(p,d,v)},In.useFormStatus=function(){return u.H.useHostTransitionStatus()},In.version="19.2.7",In}var Y_;function AM(){if(Y_)return $h.exports;Y_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$h.exports=TM(),$h.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function wM(){if(j_)return rl;j_=1;var o=bM(),t=Ip(),n=AM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,c=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){r=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===c)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==c.return)r=h,c=m;else{for(var E=!1,R=h.child;R;){if(R===r){E=!0,r=h,c=m;break}if(R===c){E=!0,c=h,r=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===r){E=!0,r=m,c=h;break}if(R===c){E=!0,c=m,r=h;break}R=R.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==c)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case w:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return i=e.displayName||null,i!==null?i:st(e.type)||"Memo";case A:i=e._payload,e=e._init;try{return st(e(i))}catch{}}return null}var Q=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},ft=[],St=-1;function I(e){return{current:e}}function j(e){0>St||(e.current=ft[St],ft[St]=null,St--)}function it(e,i){St++,ft[St]=e.current,e.current=i}var yt=I(null),Dt=I(null),tt=I(null),gt=I(null);function Mt(e,i){switch(it(tt,i),it(Dt,e),it(yt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=c_(i),e=u_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(yt),it(yt,e)}function Ft(){j(yt),j(Dt),j(tt)}function Yt(e){e.memoizedState!==null&&it(gt,e);var i=yt.current,r=u_(i,e.type);i!==r&&(it(Dt,e),it(yt,r))}function $t(e){Dt.current===e&&(j(yt),j(Dt)),gt.current===e&&(j(gt),tl._currentValue=lt)}var qe,ve;function Se(e){if(qe===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);qe=i&&i[1]||"",ve=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+e+ve}var Ne=!1;function ce(e,i){if(!e||Ne)return"";Ne=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var rt=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){rt=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var H=E.split(`
`),nt=R.split(`
`);for(h=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(c===H.length||h===nt.length)for(c=H.length-1,h=nt.length-1;1<=c&&0<=h&&H[c]!==nt[h];)h--;for(;1<=c&&0<=h;c--,h--)if(H[c]!==nt[h]){if(c!==1||h!==1)do if(c--,h--,0>h||H[c]!==nt[h]){var pt=`
`+H[c].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=c&&0<=h);break}}}finally{Ne=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Se(r):""}function an(e,i){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==i&&i!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Se("Activity");default:return""}}function G(e){try{var i="",r=null;do i+=an(e,r),r=e,e=e.return;while(e);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var $e=Object.prototype.hasOwnProperty,we=o.unstable_scheduleCallback,Pe=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,O=o.unstable_requestPaint,b=o.unstable_now,Z=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,dt=o.unstable_NormalPriority,kt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Zt=o.log,ee=o.unstable_setDisableYieldValue,Tt=null,Et=null;function Ot(e){if(typeof Zt=="function"&&ee(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Tt,e)}catch{}}var Nt=Math.clz32?Math.clz32:q,Pt=Math.log,de=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Pt(e)/de|0)|0}var wt=256,At=262144,It=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,i,r){var c=e.pendingLanes;if(c===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var R=c&134217727;return R!==0?(c=R&~m,c!==0?h=bt(c):(E&=R,E!==0?h=bt(E):r||(r=R&~e,r!==0&&(h=bt(r))))):(R=c&~m,R!==0?h=bt(R):E!==0?h=bt(E):r||(r=c&~e,r!==0&&(h=bt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function zt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Re(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Vn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wi(e,i,r,c,h,m){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(r=E&~r;0<r;){var pt=31-Nt(r),vt=1<<pt;R[pt]=0,H[pt]=-1;var rt=nt[pt];if(rt!==null)for(nt[pt]=null,pt=0;pt<rt.length;pt++){var ut=rt[pt];ut!==null&&(ut.lane&=-536870913)}r&=~vt}c!==0&&mo(e,c,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function mo(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var c=31-Nt(i);e.entangledLanes|=i,e.entanglements[c]=e.entanglements[c]|1073741824|r&261930}function $r(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var c=31-Nt(r),h=1<<c;h&i|e[c]&i&&(e[c]|=i),r&=~h}}function Il(e,i){var r=i&-i;return r=(r&42)!==0?1:ts(r),(r&(e.suspendedLanes|i))!==0?0:r}function ts(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xi(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:N_(e.type))}function ns(e,i){var r=V.p;try{return V.p=e,i()}finally{V.p=r}}var Ri=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ri,yn="__reactProps$"+Ri,aa="__reactContainer$"+Ri,Oa="__reactEvents$"+Ri,Fl="__reactListeners$"+Ri,Bl="__reactHandles$"+Ri,zl="__reactResources$"+Ri,Mr="__reactMarker$"+Ri;function go(e){delete e[fn],delete e[yn],delete e[Oa],delete e[Fl],delete e[Bl]}function Pa(e){var i=e[fn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[aa]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=__(e);e!==null;){if(r=e[fn])return r;e=__(e)}return i}e=r,r=e.parentNode}return null}function Ia(e){if(e=e[fn]||e[aa]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Er(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function C(e){var i=e[zl];return i||(i=e[zl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function X(e){e[Mr]=!0}var ct=new Set,at={};function $(e,i){Ct(e,i),Ct(e+"Capture",i)}function Ct(e,i){for(at[e]=i,e=0;e<i.length;e++)ct.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},Xt={};function jt(e){return $e.call(Xt,e)?!0:$e.call(Lt,e)?!1:Bt.test(e)?Xt[e]=!0:(Lt[e]=!0,!1)}function ie(e,i,r){if(jt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function oe(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Vt(e,i,r,c){if(c===null)e.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+c)}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tn(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function en(e,i,r){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var h=c.get,m=c.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){r=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ce(e){if(!e._valueTracker){var i=tn(e)?"checked":"value";e._valueTracker=en(e,i,""+e[i])}}function Sn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),c="";return e&&(c=tn(e)?e.checked?"true":"false":e.value),e=c,e!==r?(i.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hn=/[\n"\\]/g;function se(e){return e.replace(Hn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gn(e,i,r,c,h,m,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+pe(i)):e.value!==""+pe(i)&&(e.value=""+pe(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Ci(e,E,pe(i)):r!=null?Ci(e,E,pe(r)):c!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+pe(R):e.removeAttribute("name")}function ai(e,i,r,c,h,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ce(e);return}r=r!=null?""+pe(r):"",i=i!=null?""+pe(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=R?e.checked:!!c,e.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),Ce(e)}function Ci(e,i,r){i==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ri(e,i,r,c){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&c&&(e[r].defaultSelected=!0)}else{for(r=""+pe(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,c&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Ie(e,i,r){if(i!=null&&(i=""+pe(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+pe(r):""}function hn(e,i,r,c){if(i==null){if(c!=null){if(r!=null)throw Error(a(92));if(Q(c)){if(1<c.length)throw Error(a(93));c=c[0]}r=c}r==null&&(r=""),i=r}r=pe(i),e.defaultValue=r,c=e.textContent,c===r&&c!==""&&c!==null&&(e.value=c),Ce(e)}function kn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Di(e,i,r){var c=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":c?e.setProperty(i,r):typeof r!="number"||r===0||dn.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function ra(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var h in i)c=i[h],i.hasOwnProperty(h)&&r[h]!==c&&Di(e,h,c)}else for(var m in i)i.hasOwnProperty(m)&&Di(e,m,i[m])}function is(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_y=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return _y.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Xu=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,rs=null;function lm(e){var i=Ia(e);if(i&&(e=i.stateNode)){var r=e[yn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Gn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+se(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var c=r[i];if(c!==e&&c.form===e.form){var h=c[yn]||null;if(!h)throw Error(a(90));Gn(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)c=r[i],c.form===e.form&&Sn(c)}break t;case"textarea":Ie(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&ri(e,!!r.multiple,i,!1)}}}var qu=!1;function cm(e,i,r){if(qu)return e(i,r);qu=!0;try{var c=e(i);return c}finally{if(qu=!1,(as!==null||rs!==null)&&(wc(),as&&(i=as,e=rs,rs=as=null,lm(i),e)))for(i=0;i<e.length;i++)lm(e[i])}}function _o(e,i){var r=e.stateNode;if(r===null)return null;var c=r[yn]||null;if(c===null)return null;r=c[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=!1;if(oa)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Yu=!1}var Fa=null,ju=null,Hl=null;function um(){if(Hl)return Hl;var e,i=ju,r=i.length,c,h="value"in Fa?Fa.value:Fa.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var E=r-e;for(c=1;c<=E&&i[r-c]===h[m-c];c++);return Hl=h.slice(e,1<c?1-c:void 0)}function Gl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function fm(){return!1}function Qn(e){function i(r,c,h,m,E){this._reactName=r,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?kl:fm,this.isPropagationStopped=fm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),i}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Qn(br),xo=_({},br,{view:0,detail:0}),vy=Qn(xo),Zu,Ku,yo,Wl=_({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(Zu=e.screenX-yo.screenX,Ku=e.screenY-yo.screenY):Ku=Zu=0,yo=e),Zu)},movementY:function(e){return"movementY"in e?e.movementY:Ku}}),hm=Qn(Wl),xy=_({},Wl,{dataTransfer:0}),yy=Qn(xy),Sy=_({},xo,{relatedTarget:0}),Qu=Qn(Sy),My=_({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=Qn(My),by=_({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ty=Qn(by),Ay=_({},br,{data:0}),dm=Qn(Ay),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Cy[e])?!!i[e]:!1}function Ju(){return Dy}var Ly=_({},xo,{key:function(e){if(e.key){var i=wy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uy=Qn(Ly),Ny=_({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Qn(Ny),Oy=_({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Py=Qn(Oy),Iy=_({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Qn(Iy),By=_({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=Qn(By),Vy=_({},br,{newState:0,oldState:0}),Hy=Qn(Vy),Gy=[9,13,27,32],$u=oa&&"CompositionEvent"in window,So=null;oa&&"documentMode"in document&&(So=document.documentMode);var ky=oa&&"TextEvent"in window&&!So,mm=oa&&(!$u||So&&8<So&&11>=So),gm=" ",_m=!1;function vm(e,i){switch(e){case"keyup":return Gy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function Xy(e,i){switch(e){case"compositionend":return xm(i);case"keypress":return i.which!==32?null:(_m=!0,gm);case"textInput":return e=i.data,e===gm&&_m?null:e;default:return null}}function Wy(e,i){if(ss)return e==="compositionend"||!$u&&vm(e,i)?(e=um(),Hl=ju=Fa=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mm&&i.locale!=="ko"?null:i.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!qy[e.type]:i==="textarea"}function Sm(e,i,r,c){as?rs?rs.push(c):rs=[c]:as=c,i=Oc(i,"onChange"),0<i.length&&(r=new Xl("onChange","change",null,r,c),e.push({event:r,listeners:i}))}var Mo=null,Eo=null;function Yy(e){i_(e,0)}function ql(e){var i=Er(e);if(Sn(i))return e}function Mm(e,i){if(e==="change")return i}var Em=!1;if(oa){var tf;if(oa){var ef="oninput"in document;if(!ef){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),ef=typeof bm.oninput=="function"}tf=ef}else tf=!1;Em=tf&&(!document.documentMode||9<document.documentMode)}function Tm(){Mo&&(Mo.detachEvent("onpropertychange",Am),Eo=Mo=null)}function Am(e){if(e.propertyName==="value"&&ql(Eo)){var i=[];Sm(i,Eo,e,Wu(e)),cm(Yy,i)}}function jy(e,i,r){e==="focusin"?(Tm(),Mo=i,Eo=r,Mo.attachEvent("onpropertychange",Am)):e==="focusout"&&Tm()}function Zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(Eo)}function Ky(e,i){if(e==="click")return ql(i)}function Qy(e,i){if(e==="input"||e==="change")return ql(i)}function Jy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var si=typeof Object.is=="function"?Object.is:Jy;function bo(e,i){if(si(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),c=Object.keys(i);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var h=r[c];if(!$e.call(i,h)||!si(e[h],i[h]))return!1}return!0}function wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rm(e,i){var r=wm(e);e=0;for(var c;r;){if(r.nodeType===3){if(c=e+r.textContent.length,e<=i&&c>=i)return{node:r,offset:i-e};e=c}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=wm(r)}}function Cm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Cm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Dm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Gt(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Gt(e.document)}return i}function nf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var $y=oa&&"documentMode"in document&&11>=document.documentMode,os=null,af=null,To=null,rf=!1;function Lm(e,i,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rf||os==null||os!==Gt(c)||(c=os,"selectionStart"in c&&nf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),To&&bo(To,c)||(To=c,c=Oc(af,"onSelect"),0<c.length&&(i=new Xl("onSelect","select",null,i,r),e.push({event:i,listeners:c}),i.target=os)))}function Tr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var ls={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},sf={},Um={};oa&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Ar(e){if(sf[e])return sf[e];if(!ls[e])return e;var i=ls[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Um)return sf[e]=i[r];return e}var Nm=Ar("animationend"),Om=Ar("animationiteration"),Pm=Ar("animationstart"),tS=Ar("transitionrun"),eS=Ar("transitionstart"),nS=Ar("transitioncancel"),Im=Ar("transitionend"),Fm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function Li(e,i){Fm.set(e,i),$(i,[e])}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],cs=0,lf=0;function jl(){for(var e=cs,i=lf=cs=0;i<e;){var r=gi[i];gi[i++]=null;var c=gi[i];gi[i++]=null;var h=gi[i];gi[i++]=null;var m=gi[i];if(gi[i++]=null,c!==null&&h!==null){var E=c.pending;E===null?h.next=h:(h.next=E.next,E.next=h),c.pending=h}m!==0&&Bm(r,h,m)}}function Zl(e,i,r,c){gi[cs++]=e,gi[cs++]=i,gi[cs++]=r,gi[cs++]=c,lf|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function cf(e,i,r,c){return Zl(e,i,r,c),Kl(e)}function wr(e,i){return Zl(e,null,null,i),Kl(e)}function Bm(e,i,r){e.lanes|=r;var c=e.alternate;c!==null&&(c.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Nt(r),e=m.hiddenUpdates,c=e[h],c===null?e[h]=[i]:c.push(i),i.lane=r|536870912),m):null}function Kl(e){if(50<Yo)throw Yo=0,vh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var us={};function iS(e,i,r,c){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,i,r,c){return new iS(e,i,r,c)}function uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,i){var r=e.alternate;return r===null?(r=oi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function zm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ql(e,i,r,c,h,m){var E=0;if(c=e,typeof e=="function")uf(e)&&(E=1);else if(typeof e=="string")E=lM(e,r,yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=oi(31,r,i,h),e.elementType=U,e.lanes=m,e;case T:return Rr(r.children,h,m,i);case M:E=8,h|=24;break;case S:return e=oi(12,r,i,h|2),e.elementType=S,e.lanes=m,e;case z:return e=oi(13,r,i,h),e.elementType=z,e.lanes=m,e;case P:return e=oi(19,r,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:E=10;break t;case L:E=9;break t;case D:E=11;break t;case B:E=14;break t;case A:E=16,c=null;break t}E=29,r=Error(a(130,e===null?"null":typeof e,"")),c=null}return i=oi(E,r,i,h),i.elementType=e,i.type=c,i.lanes=m,i}function Rr(e,i,r,c){return e=oi(7,e,c,i),e.lanes=r,e}function ff(e,i,r){return e=oi(6,e,null,i),e.lanes=r,e}function Vm(e){var i=oi(18,null,null,0);return i.stateNode=e,i}function hf(e,i,r){return i=oi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Hm=new WeakMap;function _i(e,i){if(typeof e=="object"&&e!==null){var r=Hm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:G(i)},Hm.set(e,i),i)}return{value:e,source:i,stack:G(i)}}var fs=[],hs=0,Jl=null,Ao=0,vi=[],xi=0,Ba=null,Wi=1,qi="";function ca(e,i){fs[hs++]=Ao,fs[hs++]=Jl,Jl=e,Ao=i}function Gm(e,i,r){vi[xi++]=Wi,vi[xi++]=qi,vi[xi++]=Ba,Ba=e;var c=Wi;e=qi;var h=32-Nt(c)-1;c&=~(1<<h),r+=1;var m=32-Nt(i)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Wi=1<<32-Nt(i)+h|r<<h|c,qi=m+e}else Wi=1<<m|r<<h|c,qi=e}function df(e){e.return!==null&&(ca(e,1),Gm(e,1,0))}function pf(e){for(;e===Jl;)Jl=fs[--hs],fs[hs]=null,Ao=fs[--hs],fs[hs]=null;for(;e===Ba;)Ba=vi[--xi],vi[xi]=null,qi=vi[--xi],vi[xi]=null,Wi=vi[--xi],vi[xi]=null}function km(e,i){vi[xi++]=Wi,vi[xi++]=qi,vi[xi++]=Ba,Wi=i.id,qi=i.overflow,Ba=e}var Cn=null,Ye=null,Ae=!1,za=null,yi=!1,mf=Error(a(519));function Va(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(_i(i,e)),mf}function Xm(e){var i=e.stateNode,r=e.type,c=e.memoizedProps;switch(i[fn]=e,i[yn]=c,r){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(r=0;r<Zo.length;r++)Ee(Zo[r],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),ai(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),hn(i,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||c.suppressHydrationWarning===!0||o_(i.textContent,r)?(c.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),c.onScroll!=null&&Ee("scroll",i),c.onScrollEnd!=null&&Ee("scrollend",i),c.onClick!=null&&(i.onclick=sa),i=!0):i=!1,i||Va(e,!0)}function Wm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Cn=Cn.return}}function ds(e){if(e!==Cn)return!1;if(!Ae)return Wm(e),Ae=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Nh(e.type,e.memoizedProps)),r=!r),r&&Ye&&Va(e),Wm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=g_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=g_(e)}else i===27?(i=Ye,tr(e.type)?(e=Bh,Bh=null,Ye=e):Ye=i):Ye=Cn?Mi(e.stateNode.nextSibling):null;return!0}function Cr(){Ye=Cn=null,Ae=!1}function gf(){var e=za;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),za=null),e}function wo(e){za===null?za=[e]:za.push(e)}var _f=I(null),Dr=null,ua=null;function Ha(e,i,r){it(_f,i._currentValue),i._currentValue=r}function fa(e){e._currentValue=_f.current,j(_f)}function vf(e,i,r){for(;e!==null;){var c=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),e===r)break;e=e.return}}function xf(e,i,r,c){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var R=m;m=h;for(var H=0;H<i.length;H++)if(R.context===i[H]){m.lanes|=r,R=m.alternate,R!==null&&(R.lanes|=r),vf(m.return,r,e),c||(E=null);break t}m=R.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),vf(E,r,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function ps(e,i,r,c){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var R=h.type;si(h.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(h===gt.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}h=h.return}e!==null&&xf(i,e,r,c),i.flags|=262144}function $l(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Lr(e){Dr=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return qm(Dr,e)}function tc(e,i){return Dr===null&&Lr(e),qm(e,i)}function qm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ua===null){if(e===null)throw Error(a(308));ua=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ua=ua.next=i;return r}var aS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,c){e.push(c)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},rS=o.unstable_scheduleCallback,sS=o.unstable_NormalPriority,pn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new aS,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&rS(sS,function(){e.controller.abort()})}var Co=null,Sf=0,ms=0,gs=null;function oS(e,i){if(Co===null){var r=Co=[];Sf=0,ms=bh(),gs={status:"pending",value:void 0,then:function(c){r.push(c)}}}return Sf++,i.then(Ym,Ym),i}function Ym(){if(--Sf===0&&Co!==null){gs!==null&&(gs.status="fulfilled");var e=Co;Co=null,ms=0,gs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function lS(e,i){var r=[],c={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){c.status="fulfilled",c.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(c.status="rejected",c.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),c}var jm=N.S;N.S=function(e,i){L0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&oS(e,i),jm!==null&&jm(e,i)};var Ur=I(null);function Mf(){var e=Ur.current;return e!==null?e:We.pooledCache}function ec(e,i){i===null?it(Ur,Ur.current):it(Ur,i.pool)}function Zm(){var e=Mf();return e===null?null:{parent:pn._currentValue,pool:e}}var _s=Error(a(460)),Ef=Error(a(474)),nc=Error(a(542)),ic={then:function(){}};function Km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(sa,sa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$m(e),e;default:if(typeof i.status=="string")i.then(sa,sa);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(c){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=c}},function(c){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$m(e),e}throw Or=i,_s}}function Nr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Or=r,_s):r}}var Or=null;function Jm(){if(Or===null)throw Error(a(459));var e=Or;return Or=null,e}function $m(e){if(e===_s||e===nc)throw Error(a(483))}var vs=null,Do=0;function ac(e){var i=Do;return Do+=1,vs===null&&(vs=[]),Qm(vs,e,i)}function Lo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rc(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function tg(e){function i(K,k){if(e){var et=K.deletions;et===null?(K.deletions=[k],K.flags|=16):et.push(k)}}function r(K,k){if(!e)return null;for(;k!==null;)i(K,k),k=k.sibling;return null}function c(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function h(K,k){return K=la(K,k),K.index=0,K.sibling=null,K}function m(K,k,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<k?(K.flags|=67108866,k):et):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function E(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,et,_t){return k===null||k.tag!==6?(k=ff(et,K.mode,_t),k.return=K,k):(k=h(k,et),k.return=K,k)}function H(K,k,et,_t){var Kt=et.type;return Kt===T?pt(K,k,et.props.children,_t,et.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===A&&Nr(Kt)===k.type)?(k=h(k,et.props),Lo(k,et),k.return=K,k):(k=Ql(et.type,et.key,et.props,null,K.mode,_t),Lo(k,et),k.return=K,k)}function nt(K,k,et,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=hf(et,K.mode,_t),k.return=K,k):(k=h(k,et.children||[]),k.return=K,k)}function pt(K,k,et,_t,Kt){return k===null||k.tag!==7?(k=Rr(et,K.mode,_t,Kt),k.return=K,k):(k=h(k,et),k.return=K,k)}function vt(K,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ff(""+k,K.mode,et),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return et=Ql(k.type,k.key,k.props,null,K.mode,et),Lo(et,k),et.return=K,et;case y:return k=hf(k,K.mode,et),k.return=K,k;case A:return k=Nr(k),vt(K,k,et)}if(Q(k)||W(k))return k=Rr(k,K.mode,et,null),k.return=K,k;if(typeof k.then=="function")return vt(K,ac(k),et);if(k.$$typeof===w)return vt(K,tc(K,k),et);rc(K,k)}return null}function rt(K,k,et,_t){var Kt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:R(K,k,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===Kt?H(K,k,et,_t):null;case y:return et.key===Kt?nt(K,k,et,_t):null;case A:return et=Nr(et),rt(K,k,et,_t)}if(Q(et)||W(et))return Kt!==null?null:pt(K,k,et,_t,null);if(typeof et.then=="function")return rt(K,k,ac(et),_t);if(et.$$typeof===w)return rt(K,k,tc(K,et),_t);rc(K,et)}return null}function ut(K,k,et,_t,Kt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(et)||null,R(k,K,""+_t,Kt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return K=K.get(_t.key===null?et:_t.key)||null,H(k,K,_t,Kt);case y:return K=K.get(_t.key===null?et:_t.key)||null,nt(k,K,_t,Kt);case A:return _t=Nr(_t),ut(K,k,et,_t,Kt)}if(Q(_t)||W(_t))return K=K.get(et)||null,pt(k,K,_t,Kt,null);if(typeof _t.then=="function")return ut(K,k,et,ac(_t),Kt);if(_t.$$typeof===w)return ut(K,k,et,tc(k,_t),Kt);rc(k,_t)}return null}function Ht(K,k,et,_t){for(var Kt=null,De=null,qt=k,me=k=0,Te=null;qt!==null&&me<et.length;me++){qt.index>me?(Te=qt,qt=null):Te=qt.sibling;var Le=rt(K,qt,et[me],_t);if(Le===null){qt===null&&(qt=Te);break}e&&qt&&Le.alternate===null&&i(K,qt),k=m(Le,k,me),De===null?Kt=Le:De.sibling=Le,De=Le,qt=Te}if(me===et.length)return r(K,qt),Ae&&ca(K,me),Kt;if(qt===null){for(;me<et.length;me++)qt=vt(K,et[me],_t),qt!==null&&(k=m(qt,k,me),De===null?Kt=qt:De.sibling=qt,De=qt);return Ae&&ca(K,me),Kt}for(qt=c(qt);me<et.length;me++)Te=ut(qt,K,me,et[me],_t),Te!==null&&(e&&Te.alternate!==null&&qt.delete(Te.key===null?me:Te.key),k=m(Te,k,me),De===null?Kt=Te:De.sibling=Te,De=Te);return e&&qt.forEach(function(rr){return i(K,rr)}),Ae&&ca(K,me),Kt}function te(K,k,et,_t){if(et==null)throw Error(a(151));for(var Kt=null,De=null,qt=k,me=k=0,Te=null,Le=et.next();qt!==null&&!Le.done;me++,Le=et.next()){qt.index>me?(Te=qt,qt=null):Te=qt.sibling;var rr=rt(K,qt,Le.value,_t);if(rr===null){qt===null&&(qt=Te);break}e&&qt&&rr.alternate===null&&i(K,qt),k=m(rr,k,me),De===null?Kt=rr:De.sibling=rr,De=rr,qt=Te}if(Le.done)return r(K,qt),Ae&&ca(K,me),Kt;if(qt===null){for(;!Le.done;me++,Le=et.next())Le=vt(K,Le.value,_t),Le!==null&&(k=m(Le,k,me),De===null?Kt=Le:De.sibling=Le,De=Le);return Ae&&ca(K,me),Kt}for(qt=c(qt);!Le.done;me++,Le=et.next())Le=ut(qt,K,me,Le.value,_t),Le!==null&&(e&&Le.alternate!==null&&qt.delete(Le.key===null?me:Le.key),k=m(Le,k,me),De===null?Kt=Le:De.sibling=Le,De=Le);return e&&qt.forEach(function(xM){return i(K,xM)}),Ae&&ca(K,me),Kt}function Xe(K,k,et,_t){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var Kt=et.key;k!==null;){if(k.key===Kt){if(Kt=et.type,Kt===T){if(k.tag===7){r(K,k.sibling),_t=h(k,et.props.children),_t.return=K,K=_t;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===A&&Nr(Kt)===k.type){r(K,k.sibling),_t=h(k,et.props),Lo(_t,et),_t.return=K,K=_t;break t}r(K,k);break}else i(K,k);k=k.sibling}et.type===T?(_t=Rr(et.props.children,K.mode,_t,et.key),_t.return=K,K=_t):(_t=Ql(et.type,et.key,et.props,null,K.mode,_t),Lo(_t,et),_t.return=K,K=_t)}return E(K);case y:t:{for(Kt=et.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){r(K,k.sibling),_t=h(k,et.children||[]),_t.return=K,K=_t;break t}else{r(K,k);break}else i(K,k);k=k.sibling}_t=hf(et,K.mode,_t),_t.return=K,K=_t}return E(K);case A:return et=Nr(et),Xe(K,k,et,_t)}if(Q(et))return Ht(K,k,et,_t);if(W(et)){if(Kt=W(et),typeof Kt!="function")throw Error(a(150));return et=Kt.call(et),te(K,k,et,_t)}if(typeof et.then=="function")return Xe(K,k,ac(et),_t);if(et.$$typeof===w)return Xe(K,k,tc(K,et),_t);rc(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(r(K,k.sibling),_t=h(k,et),_t.return=K,K=_t):(r(K,k),_t=ff(et,K.mode,_t),_t.return=K,K=_t),E(K)):r(K,k)}return function(K,k,et,_t){try{Do=0;var Kt=Xe(K,k,et,_t);return vs=null,Kt}catch(qt){if(qt===_s||qt===nc)throw qt;var De=oi(29,qt,null,K.mode);return De.lanes=_t,De.return=K,De}finally{}}}var Pr=tg(!0),eg=tg(!1),Ga=!1;function bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,i,r){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,i=Kl(e),Bm(e,null,r),i}return Zl(e,c,i,r),Kl(e)}function Uo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var c=i.lanes;c&=e.pendingLanes,r|=c,i.lanes=r,$r(e,r)}}function Af(e,i){var r=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var wf=!1;function No(){if(wf){var e=gs;if(e!==null)throw e}}function Oo(e,i,r,c){wf=!1;var h=e.updateQueue;Ga=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var H=R,nt=H.next;H.next=null,E===null?m=nt:E.next=nt,E=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==E&&(R===null?pt.firstBaseUpdate=nt:R.next=nt,pt.lastBaseUpdate=H))}if(m!==null){var vt=h.baseState;E=0,pt=nt=H=null,R=m;do{var rt=R.lane&-536870913,ut=rt!==R.lane;if(ut?(be&rt)===rt:(c&rt)===rt){rt!==0&&rt===ms&&(wf=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ht=e,te=R;rt=i;var Xe=r;switch(te.tag){case 1:if(Ht=te.payload,typeof Ht=="function"){vt=Ht.call(Xe,vt,rt);break t}vt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=te.payload,rt=typeof Ht=="function"?Ht.call(Xe,vt,rt):Ht,rt==null)break t;vt=_({},vt,rt);break t;case 2:Ga=!0}}rt=R.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(nt=pt=ut,H=vt):pt=pt.next=ut,E|=rt;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);pt===null&&(H=vt),h.baseState=H,h.firstBaseUpdate=nt,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),Za|=E,e.lanes=E,e.memoizedState=vt}}function ng(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function ig(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)ng(r[e],i)}var xs=I(null),sc=I(0);function ag(e,i){e=ya,it(sc,e),it(xs,i),ya=e|i.baseLanes}function Rf(){it(sc,ya),it(xs,xs.current)}function Cf(){ya=sc.current,j(xs),j(sc)}var li=I(null),Si=null;function Wa(e){var i=e.alternate;it(ln,ln.current&1),it(li,e),Si===null&&(i===null||xs.current!==null||i.memoizedState!==null)&&(Si=e)}function Df(e){it(ln,ln.current),it(li,e),Si===null&&(Si=e)}function rg(e){e.tag===22?(it(ln,ln.current),it(li,e),Si===null&&(Si=e)):qa()}function qa(){it(ln,ln.current),it(li,li.current)}function ci(e){j(li),Si===e&&(Si=null),j(ln)}var ln=I(0);function oc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ih(r)||Fh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ha=0,ue=null,Ge=null,mn=null,lc=!1,ys=!1,Ir=!1,cc=0,Po=0,Ss=null,cS=0;function sn(){throw Error(a(321))}function Lf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!si(e[r],i[r]))return!1;return!0}function Uf(e,i,r,c,h,m){return ha=m,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=e===null||e.memoizedState===null?Gg:Yf,Ir=!1,m=r(c,h),Ir=!1,ys&&(m=og(i,r,c,h)),sg(e),m}function sg(e){N.H=Bo;var i=Ge!==null&&Ge.next!==null;if(ha=0,mn=Ge=ue=null,lc=!1,Po=0,Ss=null,i)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&$l(e)&&(gn=!0))}function og(e,i,r,c){ue=e;var h=0;do{if(ys&&(Ss=null),Po=0,ys=!1,25<=h)throw Error(a(301));if(h+=1,mn=Ge=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}N.H=kg,m=i(r,c)}while(ys);return m}function uS(){var e=N.H,i=e.useState()[0];return i=typeof i.then=="function"?Io(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),i}function Nf(){var e=cc!==0;return cc=0,e}function Of(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Pf(e){if(lc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}lc=!1}ha=0,mn=Ge=ue=null,ys=!1,Po=cc=0,Ss=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ue.memoizedState=mn=e:mn=mn.next=e,mn}function cn(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=mn===null?ue.memoizedState:mn.next;if(i!==null)mn=i,Ge=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},mn===null?ue.memoizedState=mn=e:mn=mn.next=e}return mn}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var i=Po;return Po+=1,Ss===null&&(Ss=[]),e=Qm(Ss,e,i),i=ue,(mn===null?i.memoizedState:mn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?Gg:Yf),e}function fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Io(e);if(e.$$typeof===w)return Dn(e)}throw Error(a(438,String(e)))}function If(e){var i=null,r=ue.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var c=ue.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=uc(),ue.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),c=0;c<e;c++)r[c]=ot;return i.index++,r}function da(e,i){return typeof i=="function"?i(e):i}function hc(e){var i=cn();return Ff(i,Ge,e)}function Ff(e,i,r){var c=e.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=r;var h=e.baseQueue,m=c.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,c.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var R=E=null,H=null,nt=i,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(be&vt)===vt:(ha&vt)===vt){var rt=nt.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===ms&&(pt=!0);else if((ha&rt)===rt){nt=nt.next,rt===ms&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=vt,E=m):H=H.next=vt,ue.lanes|=rt,Za|=rt;vt=nt.action,Ir&&r(m,vt),m=nt.hasEagerState?nt.eagerState:r(m,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=rt,E=m):H=H.next=rt,ue.lanes|=vt,Za|=vt;nt=nt.next}while(nt!==null&&nt!==i);if(H===null?E=m:H.next=R,!si(m,e.memoizedState)&&(gn=!0,pt&&(r=gs,r!==null)))throw r;e.memoizedState=m,e.baseState=E,e.baseQueue=H,c.lastRenderedState=m}return h===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function Bf(e){var i=cn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var c=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);si(m,i.memoizedState)||(gn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,c]}function lg(e,i,r){var c=ue,h=cn(),m=Ae;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!si((Ge||h).memoizedState,r);if(E&&(h.memoizedState=r,gn=!0),h=h.queue,Hf(fg.bind(null,c,h,e),[e]),h.getSnapshot!==i||E||mn!==null&&mn.memoizedState.tag&1){if(c.flags|=2048,Ms(9,{destroy:void 0},ug.bind(null,c,h,r,i),null),We===null)throw Error(a(349));m||(ha&127)!==0||cg(c,i,r)}return r}function cg(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ue.updateQueue,i===null?(i=uc(),ue.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function ug(e,i,r,c){i.value=r,i.getSnapshot=c,hg(i)&&dg(e)}function fg(e,i,r){return r(function(){hg(i)&&dg(e)})}function hg(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!si(e,r)}catch{return!0}}function dg(e){var i=wr(e,2);i!==null&&ni(i,e,2)}function zf(e){var i=Xn();if(typeof e=="function"){var r=e;if(e=r(),Ir){Ot(!0);try{r()}finally{Ot(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},i}function pg(e,i,r,c){return e.baseState=r,Ff(e,Ge,typeof c=="function"?c:da)}function fS(e,i,r,c,h){if(mc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};N.T!==null?r(!0):m.isTransition=!1,c(m),r=i.pending,r===null?(m.next=i.pending=m,mg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function mg(e,i){var r=i.action,c=i.payload,h=e.state;if(i.isTransition){var m=N.T,E={};N.T=E;try{var R=r(h,c),H=N.S;H!==null&&H(E,R),gg(e,i,R)}catch(nt){Vf(e,i,nt)}finally{m!==null&&E.types!==null&&(m.types=E.types),N.T=m}}else try{m=r(h,c),gg(e,i,m)}catch(nt){Vf(e,i,nt)}}function gg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){_g(e,i,c)},function(c){return Vf(e,i,c)}):_g(e,i,r)}function _g(e,i,r){i.status="fulfilled",i.value=r,vg(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,mg(e,r)))}function Vf(e,i,r){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=r,vg(i),i=i.next;while(i!==c)}e.action=null}function vg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function xg(e,i){return i}function yg(e,i){if(Ae){var r=We.formState;if(r!==null){t:{var c=ue;if(Ae){if(Ye){e:{for(var h=Ye,m=yi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Mi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ye=Mi(h.nextSibling),c=h.data==="F!";break t}}Va(c)}c=!1}c&&(i=r[0])}}return r=Xn(),r.memoizedState=r.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},r.queue=c,r=zg.bind(null,ue,c),c.dispatch=r,c=zf(!1),m=qf.bind(null,ue,!1,c.queue),c=Xn(),h={state:i,dispatch:null,action:e,pending:null},c.queue=h,r=fS.bind(null,ue,h,m,r),h.dispatch=r,c.memoizedState=e,[i,r,!1]}function Sg(e){var i=cn();return Mg(i,Ge,e)}function Mg(e,i,r){if(i=Ff(e,i,xg)[0],e=hc(da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Io(i)}catch(E){throw E===_s?nc:E}else c=i;i=cn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ue.flags|=2048,Ms(9,{destroy:void 0},hS.bind(null,h,r),null)),[c,m,e]}function hS(e,i){e.action=i}function Eg(e){var i=cn(),r=Ge;if(r!==null)return Mg(i,r,e);cn(),i=i.memoizedState,r=cn();var c=r.queue.dispatch;return r.memoizedState=e,[i,c,!1]}function Ms(e,i,r,c){return e={tag:e,create:r,deps:c,inst:i,next:null},i=ue.updateQueue,i===null&&(i=uc(),ue.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(c=r.next,r.next=e,e.next=c,i.lastEffect=e),e}function bg(){return cn().memoizedState}function dc(e,i,r,c){var h=Xn();ue.flags|=e,h.memoizedState=Ms(1|i,{destroy:void 0},r,c===void 0?null:c)}function pc(e,i,r,c){var h=cn();c=c===void 0?null:c;var m=h.memoizedState.inst;Ge!==null&&c!==null&&Lf(c,Ge.memoizedState.deps)?h.memoizedState=Ms(i,m,r,c):(ue.flags|=e,h.memoizedState=Ms(1|i,m,r,c))}function Tg(e,i){dc(8390656,8,e,i)}function Hf(e,i){pc(2048,8,e,i)}function dS(e){ue.flags|=4;var i=ue.updateQueue;if(i===null)i=uc(),ue.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Ag(e){var i=cn().memoizedState;return dS({ref:i,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function wg(e,i){return pc(4,2,e,i)}function Rg(e,i){return pc(4,4,e,i)}function Cg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Dg(e,i,r){r=r!=null?r.concat([e]):null,pc(4,4,Cg.bind(null,i,e),r)}function Gf(){}function Lg(e,i){var r=cn();i=i===void 0?null:i;var c=r.memoizedState;return i!==null&&Lf(i,c[1])?c[0]:(r.memoizedState=[e,i],e)}function Ug(e,i){var r=cn();i=i===void 0?null:i;var c=r.memoizedState;if(i!==null&&Lf(i,c[1]))return c[0];if(c=e(),Ir){Ot(!0);try{e()}finally{Ot(!1)}}return r.memoizedState=[c,i],c}function kf(e,i,r){return r===void 0||(ha&1073741824)!==0&&(be&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=N0(),ue.lanes|=e,Za|=e,r)}function Ng(e,i,r,c){return si(r,i)?r:xs.current!==null?(e=kf(e,r,c),si(e,i)||(gn=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(be&261930)===0?(gn=!0,e.memoizedState=r):(e=N0(),ue.lanes|=e,Za|=e,i)}function Og(e,i,r,c,h){var m=V.p;V.p=m!==0&&8>m?m:8;var E=N.T,R={};N.T=R,qf(e,!1,i,r);try{var H=h(),nt=N.S;if(nt!==null&&nt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=lS(H,c);Fo(e,i,pt,hi(e))}else Fo(e,i,c,hi(e))}catch(vt){Fo(e,i,{then:function(){},status:"rejected",reason:vt},hi())}finally{V.p=m,E!==null&&R.types!==null&&(E.types=R.types),N.T=E}}function pS(){}function Xf(e,i,r,c){if(e.tag!==5)throw Error(a(476));var h=Pg(e).queue;Og(e,h,i,lt,r===null?pS:function(){return Ig(e),r(c)})}function Pg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:lt},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ig(e){var i=Pg(e);i.next===null&&(i=e.alternate.memoizedState),Fo(e,i.next.queue,{},hi())}function Wf(){return Dn(tl)}function Fg(){return cn().memoizedState}function Bg(){return cn().memoizedState}function mS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=hi();e=ka(r);var c=Xa(i,e,r);c!==null&&(ni(c,i,r),Uo(c,i,r)),i={cache:yf()},e.payload=i;return}i=i.return}}function gS(e,i,r){var c=hi();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)?Vg(i,r):(r=cf(e,i,r,c),r!==null&&(ni(r,e,c),Hg(r,i,c)))}function zg(e,i,r){var c=hi();Fo(e,i,r,c)}function Fo(e,i,r,c){var h={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(mc(e))Vg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,R=m(E,r);if(h.hasEagerState=!0,h.eagerState=R,si(R,E))return Zl(e,i,h,0),We===null&&jl(),!1}catch{}finally{}if(r=cf(e,i,h,c),r!==null)return ni(r,e,c),Hg(r,i,c),!0}return!1}function qf(e,i,r,c){if(c={lane:2,revertLane:bh(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(i)throw Error(a(479))}else i=cf(e,r,c,2),i!==null&&ni(i,e,2)}function mc(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function Vg(e,i){ys=lc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Hg(e,i,r){if((r&4194048)!==0){var c=i.lanes;c&=e.pendingLanes,r|=c,i.lanes=r,$r(e,r)}}var Bo={readContext:Dn,use:fc,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};Bo.useEffectEvent=sn;var Gg={readContext:Dn,use:fc,useCallback:function(e,i){return Xn().memoizedState=[e,i===void 0?null:i],e},useContext:Dn,useEffect:Tg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,dc(4194308,4,Cg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return dc(4194308,4,e,i)},useInsertionEffect:function(e,i){dc(4,2,e,i)},useMemo:function(e,i){var r=Xn();i=i===void 0?null:i;var c=e();if(Ir){Ot(!0);try{e()}finally{Ot(!1)}}return r.memoizedState=[c,i],c},useReducer:function(e,i,r){var c=Xn();if(r!==void 0){var h=r(i);if(Ir){Ot(!0);try{r(i)}finally{Ot(!1)}}}else h=i;return c.memoizedState=c.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},c.queue=e,e=e.dispatch=gS.bind(null,ue,e),[c.memoizedState,e]},useRef:function(e){var i=Xn();return e={current:e},i.memoizedState=e},useState:function(e){e=zf(e);var i=e.queue,r=zg.bind(null,ue,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Gf,useDeferredValue:function(e,i){var r=Xn();return kf(r,e,i)},useTransition:function(){var e=zf(!1);return e=Og.bind(null,ue,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var c=ue,h=Xn();if(Ae){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),We===null)throw Error(a(349));(be&127)!==0||cg(c,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Tg(fg.bind(null,c,m,e),[e]),c.flags|=2048,Ms(9,{destroy:void 0},ug.bind(null,c,m,r,i),null),r},useId:function(){var e=Xn(),i=We.identifierPrefix;if(Ae){var r=qi,c=Wi;r=(c&~(1<<32-Nt(c)-1)).toString(32)+r,i="_"+i+"R_"+r,r=cc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=cS++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Wf,useFormState:yg,useActionState:yg,useOptimistic:function(e){var i=Xn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=qf.bind(null,ue,!0,r),r.dispatch=i,[e,i]},useMemoCache:If,useCacheRefresh:function(){return Xn().memoizedState=mS.bind(null,ue)},useEffectEvent:function(e){var i=Xn(),r={impl:e};return i.memoizedState=r,function(){if((Oe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Yf={readContext:Dn,use:fc,useCallback:Lg,useContext:Dn,useEffect:Hf,useImperativeHandle:Dg,useInsertionEffect:wg,useLayoutEffect:Rg,useMemo:Ug,useReducer:hc,useRef:bg,useState:function(){return hc(da)},useDebugValue:Gf,useDeferredValue:function(e,i){var r=cn();return Ng(r,Ge.memoizedState,e,i)},useTransition:function(){var e=hc(da)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:Io(e),i]},useSyncExternalStore:lg,useId:Fg,useHostTransitionStatus:Wf,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,i){var r=cn();return pg(r,Ge,e,i)},useMemoCache:If,useCacheRefresh:Bg};Yf.useEffectEvent=Ag;var kg={readContext:Dn,use:fc,useCallback:Lg,useContext:Dn,useEffect:Hf,useImperativeHandle:Dg,useInsertionEffect:wg,useLayoutEffect:Rg,useMemo:Ug,useReducer:Bf,useRef:bg,useState:function(){return Bf(da)},useDebugValue:Gf,useDeferredValue:function(e,i){var r=cn();return Ge===null?kf(r,e,i):Ng(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Bf(da)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:Io(e),i]},useSyncExternalStore:lg,useId:Fg,useHostTransitionStatus:Wf,useFormState:Eg,useActionState:Eg,useOptimistic:function(e,i){var r=cn();return Ge!==null?pg(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:If,useCacheRefresh:Bg};kg.useEffectEvent=Ag;function jf(e,i,r,c){i=e.memoizedState,r=r(c,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Zf={enqueueSetState:function(e,i,r){e=e._reactInternals;var c=hi(),h=ka(c);h.payload=i,r!=null&&(h.callback=r),i=Xa(e,h,c),i!==null&&(ni(i,e,c),Uo(i,e,c))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var c=hi(),h=ka(c);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Xa(e,h,c),i!==null&&(ni(i,e,c),Uo(i,e,c))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=hi(),c=ka(r);c.tag=2,i!=null&&(c.callback=i),i=Xa(e,c,r),i!==null&&(ni(i,e,r),Uo(i,e,r))}};function Xg(e,i,r,c,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!bo(r,c)||!bo(h,m):!0}function Wg(e,i,r,c){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,c),i.state!==e&&Zf.enqueueReplaceState(i,i.state,null)}function Fr(e,i){var r=i;if("ref"in i){r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function qg(e){Yl(e)}function Yg(e){console.error(e)}function jg(e){Yl(e)}function gc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function Zg(e,i,r){try{var c=e.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Kf(e,i,r){return r=ka(r),r.tag=3,r.payload={element:null},r.callback=function(){gc(e,i)},r}function Kg(e){return e=ka(e),e.tag=3,e}function Qg(e,i,r,c){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;e.payload=function(){return h(m)},e.callback=function(){Zg(i,r,c)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Zg(i,r,c),typeof h!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var R=c.stack;this.componentDidCatch(c.value,{componentStack:R!==null?R:""})})}function _S(e,i,r,c,h){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=r.alternate,i!==null&&ps(i,r,h,!0),r=li.current,r!==null){switch(r.tag){case 31:case 13:return Si===null?Rc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=h,c===ic?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([c]):i.add(c),Sh(e,c,h)),!1;case 22:return r.flags|=65536,c===ic?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([c]):r.add(c)),Sh(e,c,h)),!1}throw Error(a(435,r.tag))}return Sh(e,c,h),Rc(),!1}if(Ae)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,c!==mf&&(e=Error(a(422),{cause:c}),wo(_i(e,r)))):(c!==mf&&(i=Error(a(423),{cause:c}),wo(_i(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,c=_i(c,r),h=Kf(e.stateNode,c,h),Af(e,h),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:c});if(m=_i(m,r),qo===null?qo=[m]:qo.push(m),on!==4&&(on=2),i===null)return!0;c=_i(c,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Kf(r.stateNode,c,e),Af(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ka===null||!Ka.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Kg(h),Qg(h,e,r,c),Af(r,h),!1}r=r.return}while(r!==null);return!1}var Qf=Error(a(461)),gn=!1;function Ln(e,i,r,c){i.child=e===null?eg(i,null,r,c):Pr(i,e.child,r,c)}function Jg(e,i,r,c,h){r=r.render;var m=i.ref;if("ref"in c){var E={};for(var R in c)R!=="ref"&&(E[R]=c[R])}else E=c;return Lr(i),c=Uf(e,i,r,E,m,h),R=Nf(),e!==null&&!gn?(Of(e,i,h),pa(e,i,h)):(Ae&&R&&df(i),i.flags|=1,Ln(e,i,c,h),i.child)}function $g(e,i,r,c,h){if(e===null){var m=r.type;return typeof m=="function"&&!uf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,t0(e,i,m,c,h)):(e=Ql(r.type,null,c,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!rh(e,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:bo,r(E,c)&&e.ref===i.ref)return pa(e,i,h)}return i.flags|=1,e=la(m,c),e.ref=i.ref,e.return=i,i.child=e}function t0(e,i,r,c,h){if(e!==null){var m=e.memoizedProps;if(bo(m,c)&&e.ref===i.ref)if(gn=!1,i.pendingProps=c=m,rh(e,h))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,pa(e,i,h)}return Jf(e,i,r,c,h)}function e0(e,i,r,c){var h=c.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(c=i.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;c=h&~m}else c=0,i.child=null;return n0(e,i,m,r,c)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ec(i,m!==null?m.cachePool:null),m!==null?ag(i,m):Rf(),rg(i);else return c=i.lanes=536870912,n0(e,i,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(ec(i,m.cachePool),ag(i,m),qa(),i.memoizedState=null):(e!==null&&ec(i,null),Rf(),qa());return Ln(e,i,h,r),i.child}function zo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function n0(e,i,r,c,h){var m=Mf();return m=m===null?null:{parent:pn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&ec(i,null),Rf(),rg(i),e!==null&&ps(e,i,c,!0),i.childLanes=h,null}function _c(e,i){return i=xc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function i0(e,i,r){return Pr(i,e.child,null,r),e=_c(i,i.pendingProps),e.flags|=2,ci(i),i.memoizedState=null,e}function vS(e,i,r){var c=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ae){if(c.mode==="hidden")return e=_c(i,c),i.lanes=536870912,zo(null,e);if(Df(i),(e=Ye)?(e=m_(e,yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},r=Vm(e),r.return=i,i.child=r,Cn=i,Ye=null)):e=null,e===null)throw Va(i);return i.lanes=536870912,null}return _c(i,c)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(Df(i),h)if(i.flags&256)i.flags&=-257,i=i0(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(gn||ps(e,i,r,!1),h=(r&e.childLanes)!==0,gn||h){if(c=We,c!==null&&(E=Il(c,r),E!==0&&E!==m.retryLane))throw m.retryLane=E,wr(e,E),ni(c,e,E),Qf;Rc(),i=i0(e,i,r)}else e=m.treeContext,Ye=Mi(E.nextSibling),Cn=i,Ae=!0,za=null,yi=!1,e!==null&&km(i,e),i=_c(i,c),i.flags|=4096;return i}return e=la(e.child,{mode:c.mode,children:c.children}),e.ref=i.ref,i.child=e,e.return=i,e}function vc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Jf(e,i,r,c,h){return Lr(i),r=Uf(e,i,r,c,void 0,h),c=Nf(),e!==null&&!gn?(Of(e,i,h),pa(e,i,h)):(Ae&&c&&df(i),i.flags|=1,Ln(e,i,r,h),i.child)}function a0(e,i,r,c,h,m){return Lr(i),i.updateQueue=null,r=og(i,c,r,h),sg(e),c=Nf(),e!==null&&!gn?(Of(e,i,m),pa(e,i,m)):(Ae&&c&&df(i),i.flags|=1,Ln(e,i,r,m),i.child)}function r0(e,i,r,c,h){if(Lr(i),i.stateNode===null){var m=us,E=r.contextType;typeof E=="object"&&E!==null&&(m=Dn(E)),m=new r(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},bf(i),E=r.contextType,m.context=typeof E=="object"&&E!==null?Dn(E):us,m.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(jf(i,r,E,c),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Zf.enqueueReplaceState(m,m.state,null),Oo(i,c,m,h),No(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(e===null){m=i.stateNode;var R=i.memoizedProps,H=Fr(r,R);m.props=H;var nt=m.context,pt=r.contextType;E=us,typeof pt=="object"&&pt!==null&&(E=Dn(pt));var vt=r.getDerivedStateFromProps;pt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||nt!==E)&&Wg(i,m,c,E),Ga=!1;var rt=i.memoizedState;m.state=rt,Oo(i,c,m,h),No(),nt=i.memoizedState,R||rt!==nt||Ga?(typeof vt=="function"&&(jf(i,r,vt,c),nt=i.memoizedState),(H=Ga||Xg(i,r,H,c,rt,nt,E))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=nt),m.props=c,m.state=nt,m.context=E,c=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,Tf(e,i),E=i.memoizedProps,pt=Fr(r,E),m.props=pt,vt=i.pendingProps,rt=m.context,nt=r.contextType,H=us,typeof nt=="object"&&nt!==null&&(H=Dn(nt)),R=r.getDerivedStateFromProps,(nt=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==vt||rt!==H)&&Wg(i,m,c,H),Ga=!1,rt=i.memoizedState,m.state=rt,Oo(i,c,m,h),No();var ut=i.memoizedState;E!==vt||rt!==ut||Ga||e!==null&&e.dependencies!==null&&$l(e.dependencies)?(typeof R=="function"&&(jf(i,r,R,c),ut=i.memoizedState),(pt=Ga||Xg(i,r,pt,c,rt,ut,H)||e!==null&&e.dependencies!==null&&$l(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,ut,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,ut,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ut),m.props=c,m.state=ut,m.context=H,c=pt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),c=!1)}return m=c,vc(e,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&c?(i.child=Pr(i,e.child,null,h),i.child=Pr(i,null,r,h)):Ln(e,i,r,h),i.memoizedState=m.state,e=i.child):e=pa(e,i,h),e}function s0(e,i,r,c){return Cr(),i.flags|=256,Ln(e,i,r,c),i.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function th(e){return{baseLanes:e,cachePool:Zm()}}function eh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=fi),e}function o0(e,i,r){var c=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ae){if(h?Wa(i):qa(),(e=Ye)?(e=m_(e,yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},r=Vm(e),r.return=i,i.child=r,Cn=i,Ye=null)):e=null,e===null)throw Va(i);return Fh(e)?i.lanes=32:i.lanes=536870912,null}var R=c.children;return c=c.fallback,h?(qa(),h=i.mode,R=xc({mode:"hidden",children:R},h),c=Rr(c,h,r,null),R.return=i,c.return=i,R.sibling=c,i.child=R,c=i.child,c.memoizedState=th(r),c.childLanes=eh(e,E,r),i.memoizedState=$f,zo(null,c)):(Wa(i),nh(i,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(m)i.flags&256?(Wa(i),i.flags&=-257,i=ih(e,i,r)):i.memoizedState!==null?(qa(),i.child=e.child,i.flags|=128,i=null):(qa(),R=c.fallback,h=i.mode,c=xc({mode:"visible",children:c.children},h),R=Rr(R,h,r,null),R.flags|=2,c.return=i,R.return=i,c.sibling=R,i.child=c,Pr(i,e.child,null,r),c=i.child,c.memoizedState=th(r),c.childLanes=eh(e,E,r),i.memoizedState=$f,i=zo(null,c));else if(Wa(i),Fh(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var nt=E.dgst;E=nt,c=Error(a(419)),c.stack="",c.digest=E,wo({value:c,source:null,stack:null}),i=ih(e,i,r)}else if(gn||ps(e,i,r,!1),E=(r&e.childLanes)!==0,gn||E){if(E=We,E!==null&&(c=Il(E,r),c!==0&&c!==H.retryLane))throw H.retryLane=c,wr(e,c),ni(E,e,c),Qf;Ih(R)||Rc(),i=ih(e,i,r)}else Ih(R)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,Ye=Mi(R.nextSibling),Cn=i,Ae=!0,za=null,yi=!1,e!==null&&km(i,e),i=nh(i,c.children),i.flags|=4096);return i}return h?(qa(),R=c.fallback,h=i.mode,H=e.child,nt=H.sibling,c=la(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,nt!==null?R=la(nt,R):(R=Rr(R,h,r,null),R.flags|=2),R.return=i,c.return=i,c.sibling=R,i.child=c,zo(null,c),c=i.child,R=e.child.memoizedState,R===null?R=th(r):(h=R.cachePool,h!==null?(H=pn._currentValue,h=h.parent!==H?{parent:H,pool:H}:h):h=Zm(),R={baseLanes:R.baseLanes|r,cachePool:h}),c.memoizedState=R,c.childLanes=eh(e,E,r),i.memoizedState=$f,zo(e.child,c)):(Wa(i),r=e.child,e=r.sibling,r=la(r,{mode:"visible",children:c.children}),r.return=i,r.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=r,i.memoizedState=null,r)}function nh(e,i){return i=xc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function xc(e,i){return e=oi(22,e,null,i),e.lanes=0,e}function ih(e,i,r){return Pr(i,e.child,null,r),e=nh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function l0(e,i,r){e.lanes|=i;var c=e.alternate;c!==null&&(c.lanes|=i),vf(e.return,i,r)}function ah(e,i,r,c,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=c,E.tail=r,E.tailMode=h,E.treeForkCount=m)}function c0(e,i,r){var c=i.pendingProps,h=c.revealOrder,m=c.tail;c=c.children;var E=ln.current,R=(E&2)!==0;if(R?(E=E&1|2,i.flags|=128):E&=1,it(ln,E),Ln(e,i,c,r),c=Ae?Ao:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,r,i);else if(e.tag===19)l0(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&oc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),ah(i,!1,h,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&oc(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}ah(i,!0,r,null,m,c);break;case"together":ah(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function pa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Za|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(ps(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=la(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=la(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function rh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&$l(e)))}function xS(e,i,r){switch(i.tag){case 3:Mt(i,i.stateNode.containerInfo),Ha(i,pn,e.memoizedState.cache),Cr();break;case 27:case 5:Yt(i);break;case 4:Mt(i,i.stateNode.containerInfo);break;case 10:Ha(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Df(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(Wa(i),i.flags|=128,null):(r&i.child.childLanes)!==0?o0(e,i,r):(Wa(i),e=pa(e,i,r),e!==null?e.sibling:null);Wa(i);break;case 19:var h=(e.flags&128)!==0;if(c=(r&i.childLanes)!==0,c||(ps(e,i,r,!1),c=(r&i.childLanes)!==0),h){if(c)return c0(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),it(ln,ln.current),c)break;return null;case 22:return i.lanes=0,e0(e,i,r,i.pendingProps);case 24:Ha(i,pn,e.memoizedState.cache)}return pa(e,i,r)}function u0(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!rh(e,r)&&(i.flags&128)===0)return gn=!1,xS(e,i,r);gn=(e.flags&131072)!==0}else gn=!1,Ae&&(i.flags&1048576)!==0&&Gm(i,Ao,i.index);switch(i.lanes=0,i.tag){case 16:t:{var c=i.pendingProps;if(e=Nr(i.elementType),i.type=e,typeof e=="function")uf(e)?(c=Fr(e,c),i.tag=1,i=r0(null,i,e,c,r)):(i.tag=0,i=Jf(null,i,e,c,r));else{if(e!=null){var h=e.$$typeof;if(h===D){i.tag=11,i=Jg(null,i,e,c,r);break t}else if(h===B){i.tag=14,i=$g(null,i,e,c,r);break t}}throw i=st(e)||e,Error(a(306,i,""))}}return i;case 0:return Jf(e,i,i.type,i.pendingProps,r);case 1:return c=i.type,h=Fr(c,i.pendingProps),r0(e,i,c,h,r);case 3:t:{if(Mt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;h=m.element,Tf(e,i),Oo(i,c,null,r);var E=i.memoizedState;if(c=E.cache,Ha(i,pn,c),c!==m.cache&&xf(i,[pn],r,!0),No(),c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=s0(e,i,c,r);break t}else if(c!==h){h=_i(Error(a(424)),i),wo(h),i=s0(e,i,c,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Mi(e.firstChild),Cn=i,Ae=!0,za=null,yi=!0,r=eg(i,null,c,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Cr(),c===h){i=pa(e,i,r);break t}Ln(e,i,c,r)}i=i.child}return i;case 26:return vc(e,i),e===null?(r=S_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ae||(r=i.type,e=i.pendingProps,c=Pc(tt.current).createElement(r),c[fn]=i,c[yn]=e,Un(c,r,e),X(c),i.stateNode=c):i.memoizedState=S_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&Ae&&(c=i.stateNode=v_(i.type,i.pendingProps,tt.current),Cn=i,yi=!0,h=Ye,tr(i.type)?(Bh=h,Ye=Mi(c.firstChild)):Ye=h),Ln(e,i,i.pendingProps.children,r),vc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ae&&((h=c=Ye)&&(c=ZS(c,i.type,i.pendingProps,yi),c!==null?(i.stateNode=c,Cn=i,Ye=Mi(c.firstChild),yi=!1,h=!0):h=!1),h||Va(i)),Yt(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,c=m.children,Nh(h,m)?c=null:E!==null&&Nh(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Uf(e,i,uS,null,null,r),tl._currentValue=h),vc(e,i),Ln(e,i,c,r),i.child;case 6:return e===null&&Ae&&((e=r=Ye)&&(r=KS(r,i.pendingProps,yi),r!==null?(i.stateNode=r,Cn=i,Ye=null,e=!0):e=!1),e||Va(i)),null;case 13:return o0(e,i,r);case 4:return Mt(i,i.stateNode.containerInfo),c=i.pendingProps,e===null?i.child=Pr(i,null,c,r):Ln(e,i,c,r),i.child;case 11:return Jg(e,i,i.type,i.pendingProps,r);case 7:return Ln(e,i,i.pendingProps,r),i.child;case 8:return Ln(e,i,i.pendingProps.children,r),i.child;case 12:return Ln(e,i,i.pendingProps.children,r),i.child;case 10:return c=i.pendingProps,Ha(i,i.type,c.value),Ln(e,i,c.children,r),i.child;case 9:return h=i.type._context,c=i.pendingProps.children,Lr(i),h=Dn(h),c=c(h),i.flags|=1,Ln(e,i,c,r),i.child;case 14:return $g(e,i,i.type,i.pendingProps,r);case 15:return t0(e,i,i.type,i.pendingProps,r);case 19:return c0(e,i,r);case 31:return vS(e,i,r);case 22:return e0(e,i,r,i.pendingProps);case 24:return Lr(i),c=Dn(pn),e===null?(h=Mf(),h===null&&(h=We,m=yf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:c,cache:h},bf(i),Ha(i,pn,h)):((e.lanes&r)!==0&&(Tf(e,i),Oo(i,null,null,r),No()),h=e.memoizedState,m=i.memoizedState,h.parent!==c?(h={parent:c,cache:c},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ha(i,pn,c)):(c=m.cache,Ha(i,pn,c),c!==h.cache&&xf(i,[pn],r,!0))),Ln(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ma(e){e.flags|=4}function sh(e,i,r,c,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(F0())e.flags|=8192;else throw Or=ic,Ef}else e.flags&=-16777217}function f0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!A_(i))if(F0())e.flags|=8192;else throw Or=ic,Ef}function yc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Be():536870912,e.lanes|=i,As|=i)}function Vo(e,i){if(!Ae)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,c=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=c,e.childLanes=r,i}function yS(e,i,r){var c=i.pendingProps;switch(pf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),fa(pn),Ft(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ds(i)?ma(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gf())),je(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(ma(i),m!==null?(je(i),f0(i,m)):(je(i),sh(i,h,null,c,r))):m?m!==e.memoizedState?(ma(i),je(i),f0(i,m)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==c&&ma(i),je(i),sh(i,h,e,c,r)),null;case 27:if($t(i),r=tt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==c&&ma(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=yt.current,ds(i)?Xm(i):(e=v_(h,c,r),i.stateNode=e,ma(i))}return je(i),null;case 5:if($t(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==c&&ma(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(m=yt.current,ds(i))Xm(i);else{var E=Pc(tt.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?E.createElement("select",{is:c.is}):E.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?E.createElement(h,{is:c.is}):E.createElement(h)}}m[fn]=i,m[yn]=c;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Un(m,h,c),h){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}c&&ma(i)}}return je(i),sh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==c&&ma(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(e=tt.current,ds(i)){if(e=i.stateNode,r=i.memoizedProps,c=null,h=Cn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}e[fn]=i,e=!!(e.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||o_(e.nodeValue,r)),e||Va(i,!0)}else e=Pc(e).createTextNode(c),e[fn]=i,i.stateNode=e}return je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(c=ds(i),r!==null){if(e===null){if(!c)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=i}else Cr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else r=gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ci(i),i):(ci(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(c=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ds(i),c!==null&&c.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[fn]=i}else Cr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),h=!1}else h=gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ci(i),i):(ci(i),null)}return ci(i),(i.flags&128)!==0?(i.lanes=r,i):(r=c!==null,e=e!==null&&e.memoizedState!==null,r&&(c=i.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),yc(i,i.updateQueue),je(i),null);case 4:return Ft(),e===null&&Rh(i.stateNode.containerInfo),je(i),null;case 10:return fa(i.type),je(i),null;case 19:if(j(ln),c=i.memoizedState,c===null)return je(i),null;if(h=(i.flags&128)!==0,m=c.rendering,m===null)if(h)Vo(c,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=oc(e),m!==null){for(i.flags|=128,Vo(c,!1),e=m.updateQueue,i.updateQueue=e,yc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)zm(r,e),r=r.sibling;return it(ln,ln.current&1|2),Ae&&ca(i,c.treeForkCount),i.child}e=e.sibling}c.tail!==null&&b()>Tc&&(i.flags|=128,h=!0,Vo(c,!1),i.lanes=4194304)}else{if(!h)if(e=oc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,yc(i,e),Vo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Ae)return je(i),null}else 2*b()-c.renderingStartTime>Tc&&r!==536870912&&(i.flags|=128,h=!0,Vo(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(e=c.last,e!==null?e.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=b(),e.sibling=null,r=ln.current,it(ln,h?r&1|2:r&1),Ae&&ca(i,c.treeForkCount),e):(je(i),null);case 22:case 23:return ci(i),Cf(),c=i.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&yc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048),e!==null&&j(Ur),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),fa(pn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function SS(e,i){switch(pf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return fa(pn),Ft(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return $t(i),null;case 31:if(i.memoizedState!==null){if(ci(i),i.alternate===null)throw Error(a(340));Cr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ci(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Cr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return j(ln),null;case 4:return Ft(),null;case 10:return fa(i.type),null;case 22:case 23:return ci(i),Cf(),e!==null&&j(Ur),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return fa(pn),null;case 25:return null;default:return null}}function h0(e,i){switch(pf(i),i.tag){case 3:fa(pn),Ft();break;case 26:case 27:case 5:$t(i);break;case 4:Ft();break;case 31:i.memoizedState!==null&&ci(i);break;case 13:ci(i);break;case 19:j(ln);break;case 10:fa(i.type);break;case 22:case 23:ci(i),Cf(),e!==null&&j(Ur);break;case 24:fa(pn)}}function Ho(e,i){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){c=void 0;var m=r.create,E=r.inst;c=m(),E.destroy=c}r=r.next}while(r!==h)}}catch(R){Ve(i,i.return,R)}}function Ya(e,i,r){try{var c=i.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&e)===e){var E=c.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,h=i;var H=r,nt=R;try{nt()}catch(pt){Ve(h,H,pt)}}}c=c.next}while(c!==m)}}catch(pt){Ve(i,i.return,pt)}}function d0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{ig(i,r)}catch(c){Ve(e,e.return,c)}}}function p0(e,i,r){r.props=Fr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(c){Ve(e,i,c)}}function Go(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(h){Ve(e,i,h)}}function Yi(e,i){var r=e.ref,c=e.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(h){Ve(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Ve(e,i,h)}else r.current=null}function m0(e){var i=e.type,r=e.memoizedProps,c=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break t;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(h){Ve(e,e.return,h)}}function oh(e,i,r){try{var c=e.stateNode;kS(c,e.type,r,i),c[yn]=i}catch(h){Ve(e,e.return,h)}}function g0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tr(e.type)||e.tag===4}function lh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||g0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ch(e,i,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=sa));else if(c!==4&&(c===27&&tr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(ch(e,i,r),e=e.sibling;e!==null;)ch(e,i,r),e=e.sibling}function Sc(e,i,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(c!==4&&(c===27&&tr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Sc(e,i,r),e=e.sibling;e!==null;)Sc(e,i,r),e=e.sibling}function _0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var c=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Un(i,c,r),i[fn]=e,i[yn]=r}catch(m){Ve(e,e.return,m)}}var ga=!1,_n=!1,uh=!1,v0=typeof WeakSet=="function"?WeakSet:Set,An=null;function MS(e,i){if(e=e.containerInfo,Lh=Gc,e=Dm(e),nf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,R=-1,H=-1,nt=0,pt=0,vt=e,rt=null;e:for(;;){for(var ut;vt!==r||h!==0&&vt.nodeType!==3||(R=E+h),vt!==m||c!==0&&vt.nodeType!==3||(H=E+c),vt.nodeType===3&&(E+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)rt=vt,vt=ut;for(;;){if(vt===e)break e;if(rt===r&&++nt===h&&(R=E),rt===m&&++pt===c&&(H=E),(ut=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ut}r=R===-1||H===-1?null:{start:R,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(Uh={focusedElem:e,selectionRange:r},Gc=!1,An=i;An!==null;)if(i=An,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,An=e;else for(;An!==null;){switch(i=An,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var Ht=Fr(r.type,h);e=c.getSnapshotBeforeUpdate(Ht,m),c.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ve(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Ph(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,An=e;break}An=i.return}}function x0(e,i,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:va(e,r),c&4&&Ho(5,r);break;case 1:if(va(e,r),c&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(E){Ve(r,r.return,E)}else{var h=Fr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Ve(r,r.return,E)}}c&64&&d0(r),c&512&&Go(r,r.return);break;case 3:if(va(e,r),c&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ig(e,i)}catch(E){Ve(r,r.return,E)}}break;case 27:i===null&&c&4&&_0(r);case 26:case 5:va(e,r),i===null&&c&4&&m0(r),c&512&&Go(r,r.return);break;case 12:va(e,r);break;case 31:va(e,r),c&4&&M0(e,r);break;case 13:va(e,r),c&4&&E0(e,r),c&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=LS.bind(null,r),QS(e,r))));break;case 22:if(c=r.memoizedState!==null||ga,!c){i=i!==null&&i.memoizedState!==null||_n,h=ga;var m=_n;ga=c,(_n=i)&&!m?xa(e,r,(r.subtreeFlags&8772)!==0):va(e,r),ga=h,_n=m}break;case 30:break;default:va(e,r)}}function y0(e){var i=e.alternate;i!==null&&(e.alternate=null,y0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&go(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Jn=!1;function _a(e,i,r){for(r=r.child;r!==null;)S0(e,i,r),r=r.sibling}function S0(e,i,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Tt,r)}catch{}switch(r.tag){case 26:_n||Yi(r,i),_a(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:_n||Yi(r,i);var c=nn,h=Jn;tr(r.type)&&(nn=r.stateNode,Jn=!1),_a(e,i,r),Qo(r.stateNode),nn=c,Jn=h;break;case 5:_n||Yi(r,i);case 6:if(c=nn,h=Jn,nn=null,_a(e,i,r),nn=c,Jn=h,nn!==null)if(Jn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(r.stateNode)}catch(m){Ve(r,i,m)}else try{nn.removeChild(r.stateNode)}catch(m){Ve(r,i,m)}break;case 18:nn!==null&&(Jn?(e=nn,d_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Os(e)):d_(nn,r.stateNode));break;case 4:c=nn,h=Jn,nn=r.stateNode.containerInfo,Jn=!0,_a(e,i,r),nn=c,Jn=h;break;case 0:case 11:case 14:case 15:Ya(2,r,i),_n||Ya(4,r,i),_a(e,i,r);break;case 1:_n||(Yi(r,i),c=r.stateNode,typeof c.componentWillUnmount=="function"&&p0(r,i,c)),_a(e,i,r);break;case 21:_a(e,i,r);break;case 22:_n=(c=_n)||r.memoizedState!==null,_a(e,i,r),_n=c;break;default:_a(e,i,r)}}function M0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Os(e)}catch(r){Ve(i,i.return,r)}}}function E0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Os(e)}catch(r){Ve(i,i.return,r)}}function ES(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new v0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new v0),i;default:throw Error(a(435,e.tag))}}function Mc(e,i){var r=ES(e);i.forEach(function(c){if(!r.has(c)){r.add(c);var h=US.bind(null,e,c);c.then(h,h)}})}function $n(e,i){var r=i.deletions;if(r!==null)for(var c=0;c<r.length;c++){var h=r[c],m=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:if(tr(R.type)){nn=R.stateNode,Jn=!1;break t}break;case 5:nn=R.stateNode,Jn=!1;break t;case 3:case 4:nn=R.stateNode.containerInfo,Jn=!0;break t}R=R.return}if(nn===null)throw Error(a(160));S0(m,E,h),nn=null,Jn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)b0(i,e),i=i.sibling}var Ui=null;function b0(e,i){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(i,e),ti(e),c&4&&(Ya(3,e,e.return),Ho(3,e),Ya(5,e,e.return));break;case 1:$n(i,e),ti(e),c&512&&(_n||r===null||Yi(r,r.return)),c&64&&ga&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var h=Ui;if($n(i,e),ti(e),c&512&&(_n||r===null||Yi(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=e.memoizedState,r===null)if(c===null)if(e.stateNode===null){t:{c=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Mr]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),Un(m,c,r),m[fn]=e,X(m),c=m;break t;case"link":var E=b_("link","href",h).get(c+(r.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(R,1);break e}}m=h.createElement(c),Un(m,c,r),h.head.appendChild(m);break;case"meta":if(E=b_("meta","content",h).get(c+(r.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(R,1);break e}}m=h.createElement(c),Un(m,c,r),h.head.appendChild(m);break;default:throw Error(a(468,c))}m[fn]=e,X(m),c=m}e.stateNode=c}else T_(h,e.type,e.stateNode);else e.stateNode=E_(h,c,e.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?T_(h,e.type,e.stateNode):E_(h,c,e.memoizedProps)):c===null&&e.stateNode!==null&&oh(e,e.memoizedProps,r.memoizedProps)}break;case 27:$n(i,e),ti(e),c&512&&(_n||r===null||Yi(r,r.return)),r!==null&&c&4&&oh(e,e.memoizedProps,r.memoizedProps);break;case 5:if($n(i,e),ti(e),c&512&&(_n||r===null||Yi(r,r.return)),e.flags&32){h=e.stateNode;try{kn(h,"")}catch(Ht){Ve(e,e.return,Ht)}}c&4&&e.stateNode!=null&&(h=e.memoizedProps,oh(e,h,r!==null?r.memoizedProps:h)),c&1024&&(uh=!0);break;case 6:if($n(i,e),ti(e),c&4){if(e.stateNode===null)throw Error(a(162));c=e.memoizedProps,r=e.stateNode;try{r.nodeValue=c}catch(Ht){Ve(e,e.return,Ht)}}break;case 3:if(Bc=null,h=Ui,Ui=Ic(i.containerInfo),$n(i,e),Ui=h,ti(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(i.containerInfo)}catch(Ht){Ve(e,e.return,Ht)}uh&&(uh=!1,T0(e));break;case 4:c=Ui,Ui=Ic(e.stateNode.containerInfo),$n(i,e),ti(e),Ui=c;break;case 12:$n(i,e),ti(e);break;case 31:$n(i,e),ti(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Mc(e,c)));break;case 13:$n(i,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bc=b()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Mc(e,c)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,nt=ga,pt=_n;if(ga=nt||h,_n=pt||H,$n(i,e),_n=pt,ga=nt,ti(e),c&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||ga||_n||Br(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(m=H.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=H.stateNode;var vt=H.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Ht){Ve(H,H.return,Ht)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(Ht){Ve(H,H.return,Ht)}}}else if(i.tag===18){if(r===null){H=i;try{var ut=H.stateNode;h?p_(ut,!0):p_(H.stateNode,!1)}catch(Ht){Ve(H,H.return,Ht)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=e.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,Mc(e,r))));break;case 19:$n(i,e),ti(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Mc(e,c)));break;case 30:break;case 21:break;default:$n(i,e),ti(e)}}function ti(e){var i=e.flags;if(i&2){try{for(var r,c=e.return;c!==null;){if(g0(c)){r=c;break}c=c.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=lh(e);Sc(e,m,h);break;case 5:var E=r.stateNode;r.flags&32&&(kn(E,""),r.flags&=-33);var R=lh(e);Sc(e,R,E);break;case 3:case 4:var H=r.stateNode.containerInfo,nt=lh(e);ch(e,nt,H);break;default:throw Error(a(161))}}catch(pt){Ve(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function T0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;T0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function va(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)x0(e,i.alternate,i),i=i.sibling}function Br(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ya(4,i,i.return),Br(i);break;case 1:Yi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&p0(i,i.return,r),Br(i);break;case 27:Qo(i.stateNode);case 26:case 5:Yi(i,i.return),Br(i);break;case 22:i.memoizedState===null&&Br(i);break;case 30:Br(i);break;default:Br(i)}e=e.sibling}}function xa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:xa(h,m,r),Ho(4,m);break;case 1:if(xa(h,m,r),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){Ve(c,c.return,nt)}if(c=m,h=c.updateQueue,h!==null){var R=c.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)ng(H[h],R)}catch(nt){Ve(c,c.return,nt)}}r&&E&64&&d0(m),Go(m,m.return);break;case 27:_0(m);case 26:case 5:xa(h,m,r),r&&c===null&&E&4&&m0(m),Go(m,m.return);break;case 12:xa(h,m,r);break;case 31:xa(h,m,r),r&&E&4&&M0(h,m);break;case 13:xa(h,m,r),r&&E&4&&E0(h,m);break;case 22:m.memoizedState===null&&xa(h,m,r),Go(m,m.return);break;case 30:break;default:xa(h,m,r)}i=i.sibling}}function fh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Ro(r))}function hh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ro(e))}function Ni(e,i,r,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)A0(e,i,r,c),i=i.sibling}function A0(e,i,r,c){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(e,i,r,c),h&2048&&Ho(9,i);break;case 1:Ni(e,i,r,c);break;case 3:Ni(e,i,r,c),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ro(e)));break;case 12:if(h&2048){Ni(e,i,r,c),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ve(i,i.return,H)}}else Ni(e,i,r,c);break;case 31:Ni(e,i,r,c);break;case 13:Ni(e,i,r,c);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ni(e,i,r,c):ko(e,i):m._visibility&2?Ni(e,i,r,c):(m._visibility|=2,Es(e,i,r,c,(i.subtreeFlags&10256)!==0||!1)),h&2048&&fh(E,i);break;case 24:Ni(e,i,r,c),h&2048&&hh(i.alternate,i);break;default:Ni(e,i,r,c)}}function Es(e,i,r,c,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,R=r,H=c,nt=E.flags;switch(E.tag){case 0:case 11:case 15:Es(m,E,R,H,h),Ho(8,E);break;case 23:break;case 22:var pt=E.stateNode;E.memoizedState!==null?pt._visibility&2?Es(m,E,R,H,h):ko(m,E):(pt._visibility|=2,Es(m,E,R,H,h)),h&&nt&2048&&fh(E.alternate,E);break;case 24:Es(m,E,R,H,h),h&&nt&2048&&hh(E.alternate,E);break;default:Es(m,E,R,H,h)}i=i.sibling}}function ko(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,c=i,h=c.flags;switch(c.tag){case 22:ko(r,c),h&2048&&fh(c.alternate,c);break;case 24:ko(r,c),h&2048&&hh(c.alternate,c);break;default:ko(r,c)}i=i.sibling}}var Xo=8192;function bs(e,i,r){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)w0(e,i,r),e=e.sibling}function w0(e,i,r){switch(e.tag){case 26:bs(e,i,r),e.flags&Xo&&e.memoizedState!==null&&cM(r,Ui,e.memoizedState,e.memoizedProps);break;case 5:bs(e,i,r);break;case 3:case 4:var c=Ui;Ui=Ic(e.stateNode.containerInfo),bs(e,i,r),Ui=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=Xo,Xo=16777216,bs(e,i,r),Xo=c):bs(e,i,r));break;default:bs(e,i,r)}}function R0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Wo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];An=c,D0(c,e)}R0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ec(e)):Wo(e);break;default:Wo(e)}}function Ec(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];An=c,D0(c,e)}R0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ya(8,i,i.return),Ec(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Ec(i));break;default:Ec(i)}e=e.sibling}}function D0(e,i){for(;An!==null;){var r=An;switch(r.tag){case 0:case 11:case 15:Ya(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ro(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,An=c;else t:for(r=e;An!==null;){c=An;var h=c.sibling,m=c.return;if(y0(c),c===r){An=null;break t}if(h!==null){h.return=m,An=h;break t}An=m}}}var bS={getCacheForType:function(e){var i=Dn(pn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Dn(pn).controller.signal}},TS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,Me=null,be=0,ze=0,ui=null,ja=!1,Ts=!1,dh=!1,ya=0,on=0,Za=0,zr=0,ph=0,fi=0,As=0,qo=null,ei=null,mh=!1,bc=0,L0=0,Tc=1/0,Ac=null,Ka=null,Mn=0,Qa=null,ws=null,Sa=0,gh=0,_h=null,U0=null,Yo=0,vh=null;function hi(){return(Oe&2)!==0&&be!==0?be&-be:N.T!==null?bh():Xi()}function N0(){if(fi===0)if((be&536870912)===0||Ae){var e=At;At<<=1,(At&3932160)===0&&(At=262144),fi=e}else fi=536870912;return e=li.current,e!==null&&(e.flags|=32),fi}function ni(e,i,r){(e===We&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Rs(e,0),Ja(e,be,fi,!1)),Vn(e,r),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(zr|=r),on===4&&Ja(e,be,fi,!1)),ji(e))}function O0(e,i,r){if((Oe&6)!==0)throw Error(a(327));var c=!r&&(i&127)===0&&(i&e.expiredLanes)===0||zt(e,i),h=c?RS(e,i):yh(e,i,!0),m=c;do{if(h===0){Ts&&!c&&Ja(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!AS(r)){h=yh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;h=qo;var H=R.current.memoizedState.isDehydrated;if(H&&(Rs(R,E).flags|=256),E=yh(R,E,!1),E!==2){if(dh&&!H){R.errorRecoveryDisabledLanes|=m,zr|=m,h=4;break t}m=ei,ei=h,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){Rs(e,0),Ja(e,i,0,!0);break}t:{switch(c=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ja(c,i,fi,!ja);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=bc+300-b(),10<h)){if(Ja(c,i,fi,!ja),ht(c,0,!0)!==0)break t;Sa=i,c.timeoutHandle=f_(P0.bind(null,c,r,ei,Ac,mh,i,fi,zr,As,ja,m,"Throttled",-0,0),h);break t}P0(c,r,ei,Ac,mh,i,fi,zr,As,ja,m,null,-0,0)}}break}while(!0);ji(e)}function P0(e,i,r,c,h,m,E,R,H,nt,pt,vt,rt,ut){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},w0(i,m,vt);var Ht=(m&62914560)===m?bc-b():(m&4194048)===m?L0-b():0;if(Ht=uM(vt,Ht),Ht!==null){Sa=m,e.cancelPendingCommit=Ht(k0.bind(null,e,i,m,r,c,h,E,R,H,pt,vt,null,rt,ut)),Ja(e,m,E,!nt);return}}k0(e,i,m,r,c,h,E,R,H)}function AS(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var h=r[c],m=h.getSnapshot;h=h.value;try{if(!si(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ja(e,i,r,c){i&=~ph,i&=~zr,e.suspendedLanes|=i,e.pingedLanes&=~i,c&&(e.warmLanes|=i),c=e.expirationTimes;for(var h=i;0<h;){var m=31-Nt(h),E=1<<m;c[m]=-1,h&=~E}r!==0&&mo(e,r,i)}function wc(){return(Oe&6)===0?(jo(0),!1):!0}function xh(){if(Me!==null){if(ze===0)var e=Me.return;else e=Me,ua=Dr=null,Pf(e),vs=null,Do=0,e=Me;for(;e!==null;)h0(e.alternate,e),e=e.return;Me=null}}function Rs(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,qS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Sa=0,xh(),We=e,Me=r=la(e.current,null),be=i,ze=0,ui=null,ja=!1,Ts=zt(e,i),dh=!1,As=fi=ph=zr=Za=on=0,ei=qo=null,mh=!1,(i&8)!==0&&(i|=i&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=i;0<c;){var h=31-Nt(c),m=1<<h;i|=e[h],c&=~m}return ya=i,jl(),r}function I0(e,i){ue=null,N.H=Bo,i===_s||i===nc?(i=Jm(),ze=3):i===Ef?(i=Jm(),ze=4):ze=i===Qf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ui=i,Me===null&&(on=1,gc(e,_i(i,e.current)))}function F0(){var e=li.current;return e===null?!0:(be&4194048)===be?Si===null:(be&62914560)===be||(be&536870912)!==0?e===Si:!1}function B0(){var e=N.H;return N.H=Bo,e===null?Bo:e}function z0(){var e=N.A;return N.A=bS,e}function Rc(){on=4,ja||(be&4194048)!==be&&li.current!==null||(Ts=!0),(Za&134217727)===0&&(zr&134217727)===0||We===null||Ja(We,be,fi,!1)}function yh(e,i,r){var c=Oe;Oe|=2;var h=B0(),m=z0();(We!==e||be!==i)&&(Ac=null,Rs(e,i)),i=!1;var E=on;t:do try{if(ze!==0&&Me!==null){var R=Me,H=ui;switch(ze){case 8:xh(),E=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var nt=ze;if(ze=0,ui=null,Cs(e,R,H,nt),r&&Ts){E=0;break t}break;default:nt=ze,ze=0,ui=null,Cs(e,R,H,nt)}}wS(),E=on;break}catch(pt){I0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ua=Dr=null,Oe=c,N.H=h,N.A=m,Me===null&&(We=null,be=0,jl()),E}function wS(){for(;Me!==null;)V0(Me)}function RS(e,i){var r=Oe;Oe|=2;var c=B0(),h=z0();We!==e||be!==i?(Ac=null,Tc=b()+500,Rs(e,i)):Ts=zt(e,i);t:do try{if(ze!==0&&Me!==null){i=Me;var m=ui;e:switch(ze){case 1:ze=0,ui=null,Cs(e,i,m,1);break;case 2:case 9:if(Km(m)){ze=0,ui=null,H0(i);break}i=function(){ze!==2&&ze!==9||We!==e||(ze=7),ji(e)},m.then(i,i);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Km(m)?(ze=0,ui=null,H0(i)):(ze=0,ui=null,Cs(e,i,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var R=Me;if(E?A_(E):R.stateNode.complete){ze=0,ui=null;var H=R.sibling;if(H!==null)Me=H;else{var nt=R.return;nt!==null?(Me=nt,Cc(nt)):Me=null}break e}}ze=0,ui=null,Cs(e,i,m,5);break;case 6:ze=0,ui=null,Cs(e,i,m,6);break;case 8:xh(),on=6;break t;default:throw Error(a(462))}}CS();break}catch(pt){I0(e,pt)}while(!0);return ua=Dr=null,N.H=c,N.A=h,Oe=r,Me!==null?0:(We=null,be=0,jl(),on)}function CS(){for(;Me!==null&&!Wt();)V0(Me)}function V0(e){var i=u0(e.alternate,e,ya);e.memoizedProps=e.pendingProps,i===null?Cc(e):Me=i}function H0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=a0(r,i,i.pendingProps,i.type,void 0,be);break;case 11:i=a0(r,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:Pf(i);default:h0(r,i),i=Me=zm(i,ya),i=u0(r,i,ya)}e.memoizedProps=e.pendingProps,i===null?Cc(e):Me=i}function Cs(e,i,r,c){ua=Dr=null,Pf(i),vs=null,Do=0;var h=i.return;try{if(_S(e,h,i,r,be)){on=1,gc(e,_i(r,e.current)),Me=null;return}}catch(m){if(h!==null)throw Me=h,m;on=1,gc(e,_i(r,e.current)),Me=null;return}i.flags&32768?(Ae||c===1?e=!0:Ts||(be&536870912)!==0?e=!1:(ja=e=!0,(c===2||c===9||c===3||c===6)&&(c=li.current,c!==null&&c.tag===13&&(c.flags|=16384))),G0(i,e)):Cc(i)}function Cc(e){var i=e;do{if((i.flags&32768)!==0){G0(i,ja);return}e=i.return;var r=yS(i.alternate,i,ya);if(r!==null){Me=r;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=e}while(i!==null);on===0&&(on=5)}function G0(e,i){do{var r=SS(e.alternate,e);if(r!==null){r.flags&=32767,Me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Me=e;return}Me=e=r}while(e!==null);on=6,Me=null}function k0(e,i,r,c,h,m,E,R,H){e.cancelPendingCommit=null;do Dc();while(Mn!==0);if((Oe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=lf,wi(e,r,m,E,R,H),e===We&&(Me=We=null,be=0),ws=i,Qa=e,Sa=r,gh=m,_h=h,U0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,NS(dt,function(){return j0(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=N.T,N.T=null,h=V.p,V.p=2,E=Oe,Oe|=4;try{MS(e,i,r)}finally{Oe=E,V.p=h,N.T=c}}Mn=1,X0(),W0(),q0()}}function X0(){if(Mn===1){Mn=0;var e=Qa,i=ws,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var c=V.p;V.p=2;var h=Oe;Oe|=4;try{b0(i,e);var m=Uh,E=Dm(e.containerInfo),R=m.focusedElem,H=m.selectionRange;if(E!==R&&R&&R.ownerDocument&&Cm(R.ownerDocument.documentElement,R)){if(H!==null&&nf(R)){var nt=H.start,pt=H.end;if(pt===void 0&&(pt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(pt,R.value.length);else{var vt=R.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),Ht=R.textContent.length,te=Math.min(H.start,Ht),Xe=H.end===void 0?te:Math.min(H.end,Ht);!ut.extend&&te>Xe&&(E=Xe,Xe=te,te=E);var K=Rm(R,te),k=Rm(R,Xe);if(K&&k&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var et=vt.createRange();et.setStart(K.node,K.offset),ut.removeAllRanges(),te>Xe?(ut.addRange(et),ut.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),ut.addRange(et))}}}}for(vt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var _t=vt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Gc=!!Lh,Uh=Lh=null}finally{Oe=h,V.p=c,N.T=r}}e.current=i,Mn=2}}function W0(){if(Mn===2){Mn=0;var e=Qa,i=ws,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var c=V.p;V.p=2;var h=Oe;Oe|=4;try{x0(e,i.alternate,i)}finally{Oe=h,V.p=c,N.T=r}}Mn=3}}function q0(){if(Mn===4||Mn===3){Mn=0,O();var e=Qa,i=ws,r=Sa,c=U0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,ws=Qa=null,Y0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ka=null),es(r),i=i.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=N.T,h=V.p,V.p=2,N.T=null;try{for(var m=e.onRecoverableError,E=0;E<c.length;E++){var R=c[E];m(R.value,{componentStack:R.stack})}}finally{N.T=i,V.p=h}}(Sa&3)!==0&&Dc(),ji(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===vh?Yo++:(Yo=0,vh=e):Yo=0,jo(0)}}function Y0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ro(i)))}function Dc(){return X0(),W0(),q0(),j0()}function j0(){if(Mn!==5)return!1;var e=Qa,i=gh;gh=0;var r=es(Sa),c=N.T,h=V.p;try{V.p=32>r?32:r,N.T=null,r=_h,_h=null;var m=Qa,E=Sa;if(Mn=0,ws=Qa=null,Sa=0,(Oe&6)!==0)throw Error(a(331));var R=Oe;if(Oe|=4,C0(m.current),A0(m,m.current,E,r),Oe=R,jo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Tt,m)}catch{}return!0}finally{V.p=h,N.T=c,Y0(e,i)}}function Z0(e,i,r){i=_i(r,i),i=Kf(e.stateNode,i,2),e=Xa(e,i,2),e!==null&&(Vn(e,2),ji(e))}function Ve(e,i,r){if(e.tag===3)Z0(e,e,r);else for(;i!==null;){if(i.tag===3){Z0(i,e,r);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ka===null||!Ka.has(c))){e=_i(r,e),r=Kg(2),c=Xa(i,r,2),c!==null&&(Qg(r,c,i,e),Vn(c,2),ji(c));break}}i=i.return}}function Sh(e,i,r){var c=e.pingCache;if(c===null){c=e.pingCache=new TS;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(r)||(dh=!0,h.add(r),e=DS.bind(null,e,i,r),i.then(e,e))}function DS(e,i,r){var c=e.pingCache;c!==null&&c.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(be&r)===r&&(on===4||on===3&&(be&62914560)===be&&300>b()-bc?(Oe&2)===0&&Rs(e,0):ph|=r,As===be&&(As=0)),ji(e)}function K0(e,i){i===0&&(i=Be()),e=wr(e,i),e!==null&&(Vn(e,i),ji(e))}function LS(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),K0(e,r)}function US(e,i){var r=0;switch(e.tag){case 31:case 13:var c=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),K0(e,r)}function NS(e,i){return we(e,i)}var Lc=null,Ds=null,Mh=!1,Uc=!1,Eh=!1,$a=0;function ji(e){e!==Ds&&e.next===null&&(Ds===null?Lc=Ds=e:Ds=Ds.next=e),Uc=!0,Mh||(Mh=!0,PS())}function jo(e,i){if(!Eh&&Uc){Eh=!0;do for(var r=!1,c=Lc;c!==null;){if(e!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var E=c.suspendedLanes,R=c.pingedLanes;m=(1<<31-Nt(42|e)+1)-1,m&=h&~(E&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,t_(c,m))}else m=be,m=ht(c,c===We?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||zt(c,m)||(r=!0,t_(c,m));c=c.next}while(r);Eh=!1}}function OS(){Q0()}function Q0(){Uc=Mh=!1;var e=0;$a!==0&&WS()&&(e=$a);for(var i=b(),r=null,c=Lc;c!==null;){var h=c.next,m=J0(c,i);m===0?(c.next=null,r===null?Lc=h:r.next=h,h===null&&(Ds=r)):(r=c,(e!==0||(m&3)!==0)&&(Uc=!0)),c=h}Mn!==0&&Mn!==5||jo(e),$a!==0&&($a=0)}function J0(e,i){for(var r=e.suspendedLanes,c=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Nt(m),R=1<<E,H=h[E];H===-1?((R&r)===0||(R&c)!==0)&&(h[E]=re(R,i)):H<=i&&(e.expiredLanes|=R),m&=~R}if(i=We,r=be,r=ht(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,r===0||e===i&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&Pe(c),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||zt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(c!==null&&Pe(c),es(r)){case 2:case 8:r=xt;break;case 32:r=dt;break;case 268435456:r=Rt;break;default:r=dt}return c=$0.bind(null,e),r=we(r,c),e.callbackPriority=i,e.callbackNode=r,i}return c!==null&&c!==null&&Pe(c),e.callbackPriority=2,e.callbackNode=null,2}function $0(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Dc()&&e.callbackNode!==r)return null;var c=be;return c=ht(e,e===We?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(O0(e,c,i),J0(e,b()),e.callbackNode!=null&&e.callbackNode===r?$0.bind(null,e):null)}function t_(e,i){if(Dc())return null;O0(e,i,!0)}function PS(){YS(function(){(Oe&6)!==0?we(mt,OS):Q0()})}function bh(){if($a===0){var e=ms;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),$a=e}return $a}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(""+e)}function n_(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function IS(e,i,r,c,h){if(i==="submit"&&r&&r.stateNode===h){var m=e_((h[yn]||null).action),E=c.submitter;E&&(i=(i=E[yn]||null)?e_(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var R=new Xl("action","action",null,c,h);e.push({event:R,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if($a!==0){var H=E?n_(h,E):new FormData(h);Xf(r,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(R.preventDefault(),H=E?n_(h,E):new FormData(h),Xf(r,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var Th=0;Th<of.length;Th++){var Ah=of[Th],FS=Ah.toLowerCase(),BS=Ah[0].toUpperCase()+Ah.slice(1);Li(FS,"on"+BS)}Li(Nm,"onAnimationEnd"),Li(Om,"onAnimationIteration"),Li(Pm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(tS,"onTransitionRun"),Li(eS,"onTransitionStart"),Li(nS,"onTransitionCancel"),Li(Im,"onTransitionEnd"),Ct("onMouseEnter",["mouseout","mouseover"]),Ct("onMouseLeave",["mouseout","mouseover"]),Ct("onPointerEnter",["pointerout","pointerover"]),Ct("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function i_(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var c=e[r],h=c.event;c=c.listeners;t:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var R=c[E],H=R.instance,nt=R.currentTarget;if(R=R.listener,H!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=nt;try{m(h)}catch(pt){Yl(pt)}h.currentTarget=null,m=H}else for(E=0;E<c.length;E++){if(R=c[E],H=R.instance,nt=R.currentTarget,R=R.listener,H!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=nt;try{m(h)}catch(pt){Yl(pt)}h.currentTarget=null,m=H}}}}function Ee(e,i){var r=i[Oa];r===void 0&&(r=i[Oa]=new Set);var c=e+"__bubble";r.has(c)||(a_(i,e,2,!1),r.add(c))}function wh(e,i,r){var c=0;i&&(c|=4),a_(r,e,c,i)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Rh(e){if(!e[Nc]){e[Nc]=!0,ct.forEach(function(r){r!=="selectionchange"&&(zS.has(r)||wh(r,!1,e),wh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Nc]||(i[Nc]=!0,wh("selectionchange",!1,i))}}function a_(e,i,r,c){switch(N_(i)){case 2:var h=dM;break;case 8:h=pM;break;default:h=kh}r=h.bind(null,i,r,e),h=void 0,!Yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function Ch(e,i,r,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)t:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var R=c.stateNode.containerInfo;if(R===h)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;R!==null;){if(E=Pa(R),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){c=m=E;continue t}R=R.parentNode}}c=c.return}cm(function(){var nt=m,pt=Wu(r),vt=[];t:{var rt=Fm.get(e);if(rt!==void 0){var ut=Xl,Ht=e;switch(e){case"keypress":if(Gl(r)===0)break t;case"keydown":case"keyup":ut=Uy;break;case"focusin":Ht="focus",ut=Qu;break;case"focusout":Ht="blur",ut=Qu;break;case"beforeblur":case"afterblur":ut=Qu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Py;break;case Nm:case Om:case Pm:ut=Ey;break;case Im:ut=Fy;break;case"scroll":case"scrollend":ut=vy;break;case"wheel":ut=zy;break;case"copy":case"cut":case"paste":ut=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=pm;break;case"toggle":case"beforetoggle":ut=Hy}var te=(i&4)!==0,Xe=!te&&(e==="scroll"||e==="scrollend"),K=te?rt!==null?rt+"Capture":null:rt;te=[];for(var k=nt,et;k!==null;){var _t=k;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||K===null||(_t=_o(k,K),_t!=null&&te.push(Ko(k,_t,et))),Xe)break;k=k.return}0<te.length&&(rt=new ut(rt,Ht,null,r,pt),vt.push({event:rt,listeners:te}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&r!==Xu&&(Ht=r.relatedTarget||r.fromElement)&&(Pa(Ht)||Ht[aa]))break t;if((ut||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Ht=r.relatedTarget||r.toElement,ut=nt,Ht=Ht?Pa(Ht):null,Ht!==null&&(Xe=l(Ht),te=Ht.tag,Ht!==Xe||te!==5&&te!==27&&te!==6)&&(Ht=null)):(ut=null,Ht=nt),ut!==Ht)){if(te=hm,_t="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=pm,_t="onPointerLeave",K="onPointerEnter",k="pointer"),Xe=ut==null?rt:Er(ut),et=Ht==null?rt:Er(Ht),rt=new te(_t,k+"leave",ut,r,pt),rt.target=Xe,rt.relatedTarget=et,_t=null,Pa(pt)===nt&&(te=new te(K,k+"enter",Ht,r,pt),te.target=et,te.relatedTarget=Xe,_t=te),Xe=_t,ut&&Ht)e:{for(te=VS,K=ut,k=Ht,et=0,_t=K;_t;_t=te(_t))et++;_t=0;for(var Kt=k;Kt;Kt=te(Kt))_t++;for(;0<et-_t;)K=te(K),et--;for(;0<_t-et;)k=te(k),_t--;for(;et--;){if(K===k||k!==null&&K===k.alternate){te=K;break e}K=te(K),k=te(k)}te=null}else te=null;ut!==null&&r_(vt,rt,ut,te,!1),Ht!==null&&Xe!==null&&r_(vt,Xe,Ht,te,!0)}}t:{if(rt=nt?Er(nt):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var De=Mm;else if(ym(rt))if(Em)De=Qy;else{De=Zy;var qt=jy}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&is(nt.elementType)&&(De=Mm):De=Ky;if(De&&(De=De(e,nt))){Sm(vt,De,r,pt);break t}qt&&qt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Ci(rt,"number",rt.value)}switch(qt=nt?Er(nt):window,e){case"focusin":(ym(qt)||qt.contentEditable==="true")&&(os=qt,af=nt,To=null);break;case"focusout":To=af=os=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Lm(vt,r,pt);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Lm(vt,r,pt)}var me;if($u)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else ss?vm(e,r)&&(Te="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Te="onCompositionStart");Te&&(mm&&r.locale!=="ko"&&(ss||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&ss&&(me=um()):(Fa=pt,ju="value"in Fa?Fa.value:Fa.textContent,ss=!0)),qt=Oc(nt,Te),0<qt.length&&(Te=new dm(Te,e,null,r,pt),vt.push({event:Te,listeners:qt}),me?Te.data=me:(me=xm(r),me!==null&&(Te.data=me)))),(me=ky?Xy(e,r):Wy(e,r))&&(Te=Oc(nt,"onBeforeInput"),0<Te.length&&(qt=new dm("onBeforeInput","beforeinput",null,r,pt),vt.push({event:qt,listeners:Te}),qt.data=me)),IS(vt,e,nt,r,pt)}i_(vt,i)})}function Ko(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Oc(e,i){for(var r=i+"Capture",c=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=_o(e,r),h!=null&&c.unshift(Ko(e,h,m)),h=_o(e,i),h!=null&&c.push(Ko(e,h,m))),e.tag===3)return c;e=e.return}return[]}function VS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,i,r,c,h){for(var m=i._reactName,E=[];r!==null&&r!==c;){var R=r,H=R.alternate,nt=R.stateNode;if(R=R.tag,H!==null&&H===c)break;R!==5&&R!==26&&R!==27||nt===null||(H=nt,h?(nt=_o(r,m),nt!=null&&E.unshift(Ko(r,nt,H))):h||(nt=_o(r,m),nt!=null&&E.push(Ko(r,nt,H)))),r=r.return}E.length!==0&&e.push({event:i,listeners:E})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function o_(e,i){return i=s_(i),s_(e)===i}function ke(e,i,r,c,h,m){switch(r){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||kn(e,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&kn(e,""+c);break;case"className":oe(e,"class",c);break;case"tabIndex":oe(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,r,c);break;case"style":ra(e,c,m);break;case"data":if(i!=="object"){oe(e,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=Vl(""+c),e.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&ke(e,i,"name",h.name,h,null),ke(e,i,"formEncType",h.formEncType,h,null),ke(e,i,"formMethod",h.formMethod,h,null),ke(e,i,"formTarget",h.formTarget,h,null)):(ke(e,i,"encType",h.encType,h,null),ke(e,i,"method",h.method,h,null),ke(e,i,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=Vl(""+c),e.setAttribute(r,c);break;case"onClick":c!=null&&(e.onclick=sa);break;case"onScroll":c!=null&&Ee("scroll",e);break;case"onScrollEnd":c!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}r=Vl(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""+c):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":c===!0?e.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,c):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(r,c):e.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(r):e.setAttribute(r,c);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),ie(e,"popover",c);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ie(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=gy.get(r)||r,ie(e,r,c))}}function Dh(e,i,r,c,h,m){switch(r){case"style":ra(e,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof c=="string"?kn(e,c):(typeof c=="number"||typeof c=="bigint")&&kn(e,""+c);break;case"onScroll":c!=null&&Ee("scroll",e);break;case"onScrollEnd":c!=null&&Ee("scrollend",e);break;case"onClick":c!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[yn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,c,h);break t}r in e?e[r]=c:c===!0?e.setAttribute(r,""):ie(e,r,c)}}}function Un(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var c=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,m,E,r,null)}}h&&ke(e,i,"srcSet",r.srcSet,r,null),c&&ke(e,i,"src",r.src,r,null);return;case"input":Ee("invalid",e);var R=m=E=h=null,H=null,nt=null;for(c in r)if(r.hasOwnProperty(c)){var pt=r[c];if(pt!=null)switch(c){case"name":h=pt;break;case"type":E=pt;break;case"checked":H=pt;break;case"defaultChecked":nt=pt;break;case"value":m=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:ke(e,i,c,pt,r,null)}}ai(e,m,R,H,nt,E,h,!1);return;case"select":Ee("invalid",e),c=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(R=r[h],R!=null))switch(h){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":c=R;default:ke(e,i,h,R,r,null)}i=m,r=E,e.multiple=!!c,i!=null?ri(e,!!c,i,!1):r!=null&&ri(e,!!c,r,!0);return;case"textarea":Ee("invalid",e),m=h=c=null;for(E in r)if(r.hasOwnProperty(E)&&(R=r[E],R!=null))switch(E){case"value":c=R;break;case"defaultValue":h=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:ke(e,i,E,R,r,null)}hn(e,c,h,m);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(c=r[H],c!=null))switch(H){case"selected":e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ke(e,i,H,c,r,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(c=0;c<Zo.length;c++)Ee(Zo[c],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(c=r[nt],c!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,nt,c,r,null)}return;default:if(is(i)){for(pt in r)r.hasOwnProperty(pt)&&(c=r[pt],c!==void 0&&Dh(e,i,pt,c,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(c=r[R],c!=null&&ke(e,i,R,c,r,null))}function kS(e,i,r,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,R=null,H=null,nt=null,pt=null;for(ut in r){var vt=r[ut];if(r.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=vt;default:c.hasOwnProperty(ut)||ke(e,i,ut,null,c,vt)}}for(var rt in c){var ut=c[rt];if(vt=r[rt],c.hasOwnProperty(rt)&&(ut!=null||vt!=null))switch(rt){case"type":m=ut;break;case"name":h=ut;break;case"checked":nt=ut;break;case"defaultChecked":pt=ut;break;case"value":E=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==vt&&ke(e,i,rt,ut,c,vt)}}Gn(e,E,R,H,nt,pt,m,h);return;case"select":ut=E=R=rt=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":ut=H;default:c.hasOwnProperty(m)||ke(e,i,m,null,c,H)}for(h in c)if(m=c[h],H=r[h],c.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":rt=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==H&&ke(e,i,h,m,c,H)}i=R,r=E,c=ut,rt!=null?ri(e,!!r,rt,!1):!!c!=!!r&&(i!=null?ri(e,!!r,i,!0):ri(e,!!r,r?[]:"",!1));return;case"textarea":ut=rt=null;for(R in r)if(h=r[R],r.hasOwnProperty(R)&&h!=null&&!c.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ke(e,i,R,null,c,h)}for(E in c)if(h=c[E],m=r[E],c.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":rt=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&ke(e,i,E,h,c,m)}Ie(e,rt,ut);return;case"option":for(var Ht in r)if(rt=r[Ht],r.hasOwnProperty(Ht)&&rt!=null&&!c.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:ke(e,i,Ht,null,c,rt)}for(H in c)if(rt=c[H],ut=r[H],c.hasOwnProperty(H)&&rt!==ut&&(rt!=null||ut!=null))switch(H){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:ke(e,i,H,rt,c,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)rt=r[te],r.hasOwnProperty(te)&&rt!=null&&!c.hasOwnProperty(te)&&ke(e,i,te,null,c,rt);for(nt in c)if(rt=c[nt],ut=r[nt],c.hasOwnProperty(nt)&&rt!==ut&&(rt!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:ke(e,i,nt,rt,c,ut)}return;default:if(is(i)){for(var Xe in r)rt=r[Xe],r.hasOwnProperty(Xe)&&rt!==void 0&&!c.hasOwnProperty(Xe)&&Dh(e,i,Xe,void 0,c,rt);for(pt in c)rt=c[pt],ut=r[pt],!c.hasOwnProperty(pt)||rt===ut||rt===void 0&&ut===void 0||Dh(e,i,pt,rt,c,ut);return}}for(var K in r)rt=r[K],r.hasOwnProperty(K)&&rt!=null&&!c.hasOwnProperty(K)&&ke(e,i,K,null,c,rt);for(vt in c)rt=c[vt],ut=r[vt],!c.hasOwnProperty(vt)||rt===ut||rt==null&&ut==null||ke(e,i,vt,rt,c,ut)}function l_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var h=r[c],m=h.transferSize,E=h.initiatorType,R=h.duration;if(m&&R&&l_(E)){for(E=0,R=h.responseEnd,c+=1;c<r.length;c++){var H=r[c],nt=H.startTime;if(nt>R)break;var pt=H.transferSize,vt=H.initiatorType;pt&&l_(vt)&&(H=H.responseEnd,E+=pt*(H<R?1:(R-nt)/(H-nt)))}if(--c,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lh=null,Uh=null;function Pc(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Nh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oh=null;function WS(){var e=window.event;return e&&e.type==="popstate"?e===Oh?!1:(Oh=e,!0):(Oh=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(e){return h_.resolve(null).then(e).catch(jS)}:f_;function jS(e){setTimeout(function(){throw e})}function tr(e){return e==="head"}function d_(e,i){var r=i,c=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(c===0){e.removeChild(h),Os(i);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")Qo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Qo(r);for(var m=r.firstChild;m;){var E=m.nextSibling,R=m.nodeName;m[Mr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=E}}else r==="body"&&Qo(e.ownerDocument.body);r=h}while(r);Os(i)}function p_(e,i){var r=e;e=0;do{var c=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=c}while(r)}function Ph(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ph(r),go(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function ZS(e,i,r,c){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[Mr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function KS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Mi(e.nextSibling),e===null))return null;return e}function m_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Mi(e.nextSibling),e===null))return null;return e}function Ih(e){return e.data==="$?"||e.data==="$~"}function Fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function QS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var c=function(){i(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function Mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Bh=null;function g_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Mi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function __(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function v_(e,i,r){switch(i=Pc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Qo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);go(e)}var Ei=new Map,x_=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=V.d;V.d={f:JS,r:$S,D:tM,C:eM,L:nM,m:iM,X:rM,S:aM,M:sM};function JS(){var e=Ma.f(),i=wc();return e||i}function $S(e){var i=Ia(e);i!==null&&i.tag===5&&i.type==="form"?Ig(i):Ma.r(e)}var Ls=typeof document>"u"?null:document;function y_(e,i,r){var c=Ls;if(c&&typeof i=="string"&&i){var h=se(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),x_.has(h)||(x_.add(h),e={rel:e,crossOrigin:r,href:i},c.querySelector(h)===null&&(i=c.createElement("link"),Un(i,"link",e),X(i),c.head.appendChild(i)))}}function tM(e){Ma.D(e),y_("dns-prefetch",e,null)}function eM(e,i){Ma.C(e,i),y_("preconnect",e,i)}function nM(e,i,r){Ma.L(e,i,r);var c=Ls;if(c&&e&&i){var h='link[rel="preload"][as="'+se(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+se(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+se(r.imageSizes)+'"]')):h+='[href="'+se(e)+'"]';var m=h;switch(i){case"style":m=Us(e);break;case"script":m=Ns(e)}Ei.has(m)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Ei.set(m,e),c.querySelector(h)!==null||i==="style"&&c.querySelector(Jo(m))||i==="script"&&c.querySelector($o(m))||(i=c.createElement("link"),Un(i,"link",e),X(i),c.head.appendChild(i)))}}function iM(e,i){Ma.m(e,i);var r=Ls;if(r&&e){var c=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+se(c)+'"][href="'+se(e)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ns(e)}if(!Ei.has(m)&&(e=_({rel:"modulepreload",href:e},i),Ei.set(m,e),r.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector($o(m)))return}c=r.createElement("link"),Un(c,"link",e),X(c),r.head.appendChild(c)}}}function aM(e,i,r){Ma.S(e,i,r);var c=Ls;if(c&&e){var h=C(c).hoistableStyles,m=Us(e);i=i||"default";var E=h.get(m);if(!E){var R={loading:0,preload:null};if(E=c.querySelector(Jo(m)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Ei.get(m))&&zh(e,r);var H=E=c.createElement("link");X(H),Un(H,"link",e),H._p=new Promise(function(nt,pt){H.onload=nt,H.onerror=pt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Fc(E,i,c)}E={type:"stylesheet",instance:E,count:1,state:R},h.set(m,E)}}}function rM(e,i){Ma.X(e,i);var r=Ls;if(r&&e){var c=C(r).hoistableScripts,h=Ns(e),m=c.get(h);m||(m=r.querySelector($o(h)),m||(e=_({src:e,async:!0},i),(i=Ei.get(h))&&Vh(e,i),m=r.createElement("script"),X(m),Un(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function sM(e,i){Ma.M(e,i);var r=Ls;if(r&&e){var c=C(r).hoistableScripts,h=Ns(e),m=c.get(h);m||(m=r.querySelector($o(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Ei.get(h))&&Vh(e,i),m=r.createElement("script"),X(m),Un(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function S_(e,i,r,c){var h=(h=tt.current)?Ic(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Us(r.href),r=C(h).hoistableStyles,c=r.get(i),c||(c={type:"style",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Us(r.href);var m=C(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Jo(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Ei.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ei.set(e,r),m||oM(h,e,r,E.state))),i&&c===null)throw Error(a(528,""));return E}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ns(r),r=C(h).hoistableScripts,c=r.get(i),c||(c={type:"script",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Us(e){return'href="'+se(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function M_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function oM(e,i,r,c){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=e.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Un(i,"link",r),X(i),e.head.appendChild(i))}function Ns(e){return'[src="'+se(e)+'"]'}function $o(e){return"script[async]"+e}function E_(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var c=e.querySelector('style[data-href~="'+se(r.href)+'"]');if(c)return i.instance=c,X(c),c;var h=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),X(c),Un(c,"style",h),Fc(c,r.precedence,e),i.instance=c;case"stylesheet":h=Us(r.href);var m=e.querySelector(Jo(h));if(m)return i.state.loading|=4,i.instance=m,X(m),m;c=M_(r),(h=Ei.get(h))&&zh(c,h),m=(e.ownerDocument||e).createElement("link"),X(m);var E=m;return E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),Un(m,"link",c),i.state.loading|=4,Fc(m,r.precedence,e),i.instance=m;case"script":return m=Ns(r.src),(h=e.querySelector($o(m)))?(i.instance=h,X(h),h):(c=r,(h=Ei.get(m))&&(c=_({},r),Vh(c,h)),e=e.ownerDocument||e,h=e.createElement("script"),X(h),Un(h,"link",c),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Fc(c,r.precedence,e));return i.instance}function Fc(e,i,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,E=0;E<c.length;E++){var R=c[E];if(R.dataset.precedence===i)m=R;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function zh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Vh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Bc=null;function b_(e,i,r){if(Bc===null){var c=new Map,h=Bc=new Map;h.set(r,c)}else h=Bc,c=h.get(r),c||(c=new Map,h.set(r,c));if(c.has(e))return c;for(c.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Mr]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var R=c.get(E);R?R.push(m):c.set(E,[m])}}return c}function T_(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function lM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function A_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cM(e,i,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Us(c.href),m=i.querySelector(Jo(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=zc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,X(m);return}m=i.ownerDocument||i,c=M_(c),(h=Ei.get(h))&&zh(c,h),m=m.createElement("link"),X(m);var E=m;E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),Un(m,"link",c),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=zc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Hh=0;function uM(e,i){return e.stylesheets&&e.count===0&&Hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var c=setTimeout(function(){if(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Hh===0&&(Hh=62500*XS());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Hh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(h)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function Hc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,i.forEach(fM,e),Vc=null,zc.call(e))}function fM(e,i){if(!(i.state.loading&4)){var r=Vc.get(e);if(r)var c=r.get(null);else{r=new Map,Vc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),c=E)}c&&r.set(null,c)}h=i.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||c,m===c&&r.set(null,h),r.set(E,h),this.count++,c=zc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var tl={$$typeof:w,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function hM(e,i,r,c,h,m,E,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function w_(e,i,r,c,h,m,E,R,H,nt,pt,vt){return e=new hM(e,i,r,E,H,nt,pt,vt,R),i=1,m===!0&&(i|=24),m=oi(3,null,null,i),e.current=m,m.stateNode=e,i=yf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:i},bf(m),e}function R_(e){return e?(e=us,e):us}function C_(e,i,r,c,h,m){h=R_(h),c.context===null?c.context=h:c.pendingContext=h,c=ka(i),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=Xa(e,c,i),r!==null&&(ni(r,e,i),Uo(r,e,i))}function D_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Gh(e,i){D_(e,i),(e=e.alternate)&&D_(e,i)}function L_(e){if(e.tag===13||e.tag===31){var i=wr(e,67108864);i!==null&&ni(i,e,67108864),Gh(e,67108864)}}function U_(e){if(e.tag===13||e.tag===31){var i=hi();i=ts(i);var r=wr(e,i);r!==null&&ni(r,e,i),Gh(e,i)}}var Gc=!0;function dM(e,i,r,c){var h=N.T;N.T=null;var m=V.p;try{V.p=2,kh(e,i,r,c)}finally{V.p=m,N.T=h}}function pM(e,i,r,c){var h=N.T;N.T=null;var m=V.p;try{V.p=8,kh(e,i,r,c)}finally{V.p=m,N.T=h}}function kh(e,i,r,c){if(Gc){var h=Xh(c);if(h===null)Ch(e,i,c,kc,r),O_(e,c);else if(gM(h,e,i,r,c))c.stopPropagation();else if(O_(e,c),i&4&&-1<mM.indexOf(e)){for(;h!==null;){var m=Ia(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=bt(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var H=1<<31-Nt(E);R.entanglements[1]|=H,E&=~H}ji(m),(Oe&6)===0&&(Tc=b()+500,jo(0))}}break;case 31:case 13:R=wr(m,2),R!==null&&ni(R,m,2),wc(),Gh(m,2)}if(m=Xh(c),m===null&&Ch(e,i,c,kc,r),m===h)break;h=m}h!==null&&c.stopPropagation()}else Ch(e,i,c,null,r)}}function Xh(e){return e=Wu(e),Wh(e)}var kc=null;function Wh(e){if(kc=null,e=Pa(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return kc=e,null}function N_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case mt:return 2;case xt:return 8;case dt:case kt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var qh=!1,er=null,nr=null,ir=null,el=new Map,nl=new Map,ar=[],mM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O_(e,i){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":el.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(i.pointerId)}}function il(e,i,r,c,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ia(i),i!==null&&L_(i)),e):(e.eventSystemFlags|=c,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function gM(e,i,r,c,h){switch(i){case"focusin":return er=il(er,e,i,r,c,h),!0;case"dragenter":return nr=il(nr,e,i,r,c,h),!0;case"mouseover":return ir=il(ir,e,i,r,c,h),!0;case"pointerover":var m=h.pointerId;return el.set(m,il(el.get(m)||null,e,i,r,c,h)),!0;case"gotpointercapture":return m=h.pointerId,nl.set(m,il(nl.get(m)||null,e,i,r,c,h)),!0}return!1}function P_(e){var i=Pa(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,ns(e.priority,function(){U_(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,ns(e.priority,function(){U_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Xh(e.nativeEvent);if(r===null){r=e.nativeEvent;var c=new r.constructor(r.type,r);Xu=c,r.target.dispatchEvent(c),Xu=null}else return i=Ia(r),i!==null&&L_(i),e.blockedOn=r,!1;i.shift()}return!0}function I_(e,i,r){Xc(e)&&r.delete(i)}function _M(){qh=!1,er!==null&&Xc(er)&&(er=null),nr!==null&&Xc(nr)&&(nr=null),ir!==null&&Xc(ir)&&(ir=null),el.forEach(I_),nl.forEach(I_)}function Wc(e,i){e.blockedOn===i&&(e.blockedOn=null,qh||(qh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_M)))}var qc=null;function F_(e){qc!==e&&(qc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qc===e&&(qc=null);for(var i=0;i<e.length;i+=3){var r=e[i],c=e[i+1],h=e[i+2];if(typeof c!="function"){if(Wh(c||r)===null)continue;break}var m=Ia(r);m!==null&&(e.splice(i,3),i-=3,Xf(m,{pending:!0,data:h,method:r.method,action:c},c,h))}}))}function Os(e){function i(H){return Wc(H,e)}er!==null&&Wc(er,e),nr!==null&&Wc(nr,e),ir!==null&&Wc(ir,e),el.forEach(i),nl.forEach(i);for(var r=0;r<ar.length;r++){var c=ar[r];c.blockedOn===e&&(c.blockedOn=null)}for(;0<ar.length&&(r=ar[0],r.blockedOn===null);)P_(r),r.blockedOn===null&&ar.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var h=r[c],m=r[c+1],E=h[yn]||null;if(typeof m=="function")E||F_(r);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[yn]||null)R=E.formAction;else if(Wh(h)!==null)continue}else R=E.action;typeof R=="function"?r[c+1]=R:(r.splice(c,3),c-=3),F_(r)}}}function B_(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Yh(e){this._internalRoot=e}Yc.prototype.render=Yh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,c=hi();C_(r,c,e,i,null,null)},Yc.prototype.unmount=Yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;C_(e.current,2,null,e,null,null),wc(),i[aa]=null}};function Yc(e){this._internalRoot=e}Yc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Xi();e={blockedOn:null,target:e,priority:i};for(var r=0;r<ar.length&&i!==0&&i<ar[r].priority;r++);ar.splice(r,0,e),r===0&&P_(e)}};var z_=t.version;if(z_!=="19.2.7")throw Error(a(527,z_,"19.2.7"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var vM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{Tt=jc.inject(vM),Et=jc}catch{}}return rl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,c="",h=qg,m=Yg,E=jg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=w_(e,1,!1,null,null,r,c,null,h,m,E,B_),e[aa]=i.current,Rh(e),new Yh(i)},rl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var c=!1,h="",m=qg,E=Yg,R=jg,H=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),i=w_(e,1,!0,i,r??null,c,h,H,m,E,R,B_),i.context=R_(null),r=i.current,c=hi(),c=ts(c),h=ka(c),h.callback=null,Xa(r,h,c),r=c,i.current.lanes=r,Vn(i,r),ji(i),e[aa]=i.current,Rh(e),new Yc(i)},rl.version="19.2.7",rl}var Z_;function RM(){if(Z_)return Kh.exports;Z_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Kh.exports=wM(),Kh.exports}var CM=RM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="183",DM=0,K_=1,LM=2,Tu=1,UM=2,dl=3,vr=0,ii=1,Ca=2,Da=0,$s=1,Q_=2,J_=3,$_=4,NM=5,qr=100,OM=101,PM=102,IM=103,FM=104,BM=200,zM=201,VM=202,HM=203,Vd=204,Hd=205,GM=206,kM=207,XM=208,WM=209,qM=210,YM=211,jM=212,ZM=213,KM=214,Gd=0,kd=1,Xd=2,eo=3,Wd=4,qd=5,Yd=6,jd=7,Fu=0,QM=1,JM=2,$i=0,xx=1,yx=2,Sx=3,Mx=4,Ex=5,bx=6,Tx=7,tv="attached",$M="detached",Ax=300,Kr=301,no=302,Au=303,td=304,Bu=306,Sl=1e3,Hi=1001,Zd=1002,Nn=1003,tE=1004,Zc=1005,zn=1006,ed=1007,jr=1008,mi=1009,wx=1010,Rx=1011,Ml=1012,Bp=1013,na=1014,Gi=1015,Ua=1016,zp=1017,Vp=1018,El=1020,Cx=35902,Dx=35899,Lx=1021,Ux=1022,Ai=1023,Na=1026,Zr=1027,Nx=1028,Hp=1029,io=1030,Gp=1031,kp=1033,wu=33776,Ru=33777,Cu=33778,Du=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,tp=36196,ep=37492,np=37496,ip=37488,ap=37489,rp=37490,sp=37491,op=37808,lp=37809,cp=37810,up=37811,fp=37812,hp=37813,dp=37814,pp=37815,mp=37816,gp=37817,_p=37818,vp=37819,xp=37820,yp=37821,Sp=36492,Mp=36494,Ep=36495,bp=36283,Tp=36284,Ap=36285,wp=36286,Uu=2300,Rp=2301,nd=2302,ev=2303,nv=2400,iv=2401,av=2402,eE=2500,nE=3200,zu=0,iE=1,pr="",Ze="srgb",ao="srgb-linear",Nu="linear",He="srgb",Ps=7680,rv=519,aE=512,rE=513,sE=514,Xp=515,oE=516,lE=517,Wp=518,cE=519,sv=35044,ov="300 es",Ji=2e3,bl=2001;function uE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function fE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Tl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hE(){const o=Tl("canvas");return o.style.display="block",o}const lv={};function cv(...o){const t="THREE."+o.shift();console.log(t,...o)}function Ox(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Jt(...o){o=Ox(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...o)}}function ne(...o){o=Ox(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...o)}}function Ou(...o){const t=o.join(" ");t in lv||(lv[t]=!0,Jt(...o))}function dE(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const pE={[Gd]:kd,[Xd]:Yd,[Wd]:jd,[eo]:qd,[kd]:Gd,[Yd]:Xd,[jd]:Wd,[qd]:eo};class co{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uv=1234567;const _l=Math.PI/180,ro=180/Math.PI;function yr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function qp(o,t){return(o%t+t)%t}function mE(o,t,n,a,s){return a+(o-t)*(s-a)/(n-t)}function gE(o,t,n){return o!==t?(n-o)/(t-o):0}function vl(o,t,n){return(1-n)*o+n*t}function _E(o,t,n,a){return vl(o,t,1-Math.exp(-n*a))}function vE(o,t=1){return t-Math.abs(qp(o,t*2)-t)}function xE(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*(3-2*o))}function yE(o,t,n){return o<=t?0:o>=n?1:(o=(o-t)/(n-t),o*o*o*(o*(o*6-15)+10))}function SE(o,t){return o+Math.floor(Math.random()*(t-o+1))}function ME(o,t){return o+Math.random()*(t-o)}function EE(o){return o*(.5-Math.random())}function bE(o){o!==void 0&&(uv=o);let t=uv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function TE(o){return o*_l}function AE(o){return o*ro}function wE(o){return(o&o-1)===0&&o!==0}function RE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function CE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function DE(o,t,n,a,s){const l=Math.cos,u=Math.sin,f=l(n/2),p=u(n/2),d=l((t+a)/2),v=u((t+a)/2),_=l((t-a)/2),g=u((t-a)/2),x=l((a-t)/2),y=u((a-t)/2);switch(s){case"XYX":o.set(f*v,p*_,p*g,f*d);break;case"YZY":o.set(p*g,f*v,p*_,f*d);break;case"ZXZ":o.set(p*_,p*g,f*v,f*d);break;case"XZX":o.set(f*v,p*y,p*x,f*d);break;case"YXY":o.set(p*x,f*v,p*y,f*d);break;case"ZYZ":o.set(p*y,p*x,f*v,f*d);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qs(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const jn={DEG2RAD:_l,RAD2DEG:ro,generateUUID:yr,clamp:ye,euclideanModulo:qp,mapLinear:mE,inverseLerp:gE,lerp:vl,damp:_E,pingpong:vE,smoothstep:xE,smootherstep:yE,randInt:SE,randFloat:ME,randFloatSpread:EE,seededRandom:bE,degToRad:TE,radToDeg:AE,isPowerOfTwo:wE,ceilPowerOfTwo:RE,floorPowerOfTwo:CE,setQuaternionFromProperEuler:DE,normalize:Wn,denormalize:Qs};class he{constructor(t=0,n=0){he.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*s+t.x,this.y=l*s+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,u,f){let p=a[s+0],d=a[s+1],v=a[s+2],_=a[s+3],g=l[u+0],x=l[u+1],y=l[u+2],T=l[u+3];if(_!==T||p!==g||d!==x||v!==y){let M=p*g+d*x+v*y+_*T;M<0&&(g=-g,x=-x,y=-y,T=-T,M=-M);let S=1-f;if(M<.9995){const L=Math.acos(M),w=Math.sin(L);S=Math.sin(S*L)/w,f=Math.sin(f*L)/w,p=p*S+g*f,d=d*S+x*f,v=v*S+y*f,_=_*S+T*f}else{p=p*S+g*f,d=d*S+x*f,v=v*S+y*f,_=_*S+T*f;const L=1/Math.sqrt(p*p+d*d+v*v+_*_);p*=L,d*=L,v*=L,_*=L}}t[n]=p,t[n+1]=d,t[n+2]=v,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,s,l,u){const f=a[s],p=a[s+1],d=a[s+2],v=a[s+3],_=l[u],g=l[u+1],x=l[u+2],y=l[u+3];return t[n]=f*y+v*_+p*x-d*g,t[n+1]=p*y+v*g+d*_-f*x,t[n+2]=d*y+v*x+f*g-p*_,t[n+3]=v*y-f*_-p*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),v=f(s/2),_=f(l/2),g=p(a/2),x=p(s/2),y=p(l/2);switch(u){case"XYZ":this._x=g*v*_+d*x*y,this._y=d*x*_-g*v*y,this._z=d*v*y+g*x*_,this._w=d*v*_-g*x*y;break;case"YXZ":this._x=g*v*_+d*x*y,this._y=d*x*_-g*v*y,this._z=d*v*y-g*x*_,this._w=d*v*_+g*x*y;break;case"ZXY":this._x=g*v*_-d*x*y,this._y=d*x*_+g*v*y,this._z=d*v*y+g*x*_,this._w=d*v*_-g*x*y;break;case"ZYX":this._x=g*v*_-d*x*y,this._y=d*x*_+g*v*y,this._z=d*v*y-g*x*_,this._w=d*v*_+g*x*y;break;case"YZX":this._x=g*v*_+d*x*y,this._y=d*x*_+g*v*y,this._z=d*v*y-g*x*_,this._w=d*v*_-g*x*y;break;case"XZY":this._x=g*v*_-d*x*y,this._y=d*x*_-g*v*y,this._z=d*v*y+g*x*_,this._w=d*v*_+g*x*y;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],u=n[1],f=n[5],p=n[9],d=n[2],v=n[6],_=n[10],g=a+f+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-p)*x,this._y=(l-d)*x,this._z=(u-s)*x}else if(a>f&&a>_){const x=2*Math.sqrt(1+a-f-_);this._w=(v-p)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+d)/x}else if(f>_){const x=2*Math.sqrt(1+f-a-_);this._w=(l-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+_-a-f);this._w=(u-s)/x,this._x=(l+d)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,u=t._w,f=n._x,p=n._y,d=n._z,v=n._w;return this._x=a*v+u*f+s*d-l*p,this._y=s*v+u*p+l*f-a*d,this._z=l*v+u*d+a*p-s*f,this._w=u*v-a*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,s=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),v=Math.sin(d);p=Math.sin(p*d)/v,n=Math.sin(n*d)/v,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,n=0,a=0){Y.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(fv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(fv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*s-f*a),v=2*(f*n-l*s),_=2*(l*a-u*n);return this.x=n+p*d+u*_-f*v,this.y=a+p*v+f*d-l*_,this.z=s+p*_+l*v-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,u=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*u-a*p,this.z=a*f-s*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new Y,fv=new Zn;class fe{constructor(t,n,a,s,l,u,f,p,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,u,f,p,d)}set(t,n,a,s,l,u,f,p,d){const v=this.elements;return v[0]=t,v[1]=s,v[2]=f,v[3]=n,v[4]=l,v[5]=p,v[6]=a,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],v=a[4],_=a[7],g=a[2],x=a[5],y=a[8],T=s[0],M=s[3],S=s[6],L=s[1],w=s[4],D=s[7],z=s[2],P=s[5],B=s[8];return l[0]=u*T+f*L+p*z,l[3]=u*M+f*w+p*P,l[6]=u*S+f*D+p*B,l[1]=d*T+v*L+_*z,l[4]=d*M+v*w+_*P,l[7]=d*S+v*D+_*B,l[2]=g*T+x*L+y*z,l[5]=g*M+x*w+y*P,l[8]=g*S+x*D+y*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],v=t[8];return n*u*v-n*f*d-a*l*v+a*f*p+s*l*d-s*u*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],v=t[8],_=v*u-f*d,g=f*p-v*l,x=d*l-u*p,y=n*_+a*g+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=_*T,t[1]=(s*d-v*a)*T,t[2]=(f*a-s*u)*T,t[3]=g*T,t[4]=(v*n-s*p)*T,t[5]=(s*l-f*n)*T,t[6]=x*T,t[7]=(a*p-d*n)*T,t[8]=(u*n-a*l)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,u,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-s*d,s*p,-s*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(ad.makeScale(t,n)),this}rotate(t){return this.premultiply(ad.makeRotation(-t)),this}translate(t,n){return this.premultiply(ad.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new fe,hv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LE(){const o={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===He&&(s.r=La(s.r),s.g=La(s.g),s.b=La(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===He&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pr?Nu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ao]:{primaries:t,whitePoint:a,transfer:Nu,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:a,transfer:He,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),o}const ge=LE();function La(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Is;class UE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Is===void 0&&(Is=Tl("canvas")),Is.width=t.width,Is.height=t.height;const s=Is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=Is}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Tl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=La(l[u]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(La(n[a]/255)*255):n[a]=La(n[a]);return{data:n,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NE=0;class Yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=yr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(rd(s[u].image)):l.push(rd(s[u]))}else l=rd(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?UE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let OE=0;const sd=new Y;class On extends co{constructor(t=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,a=Hi,s=Hi,l=zn,u=jr,f=Ai,p=mi,d=On.DEFAULT_ANISOTROPY,v=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=yr(),this.name="",this.source=new Yp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){Jt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Jt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ax)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sl:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sl:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ax;On.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,n=0,a=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*s+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const p=t.elements,d=p[0],v=p[4],_=p[8],g=p[1],x=p[5],y=p[9],T=p[2],M=p[6],S=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-T)<.01&&Math.abs(y-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+T)<.1&&Math.abs(y+M)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,D=(x+1)/2,z=(S+1)/2,P=(v+g)/4,B=(_+T)/4,A=(y+M)/4;return w>D&&w>z?w<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(w),s=P/a,l=B/a):D>z?D<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(D),a=P/s,l=A/s):z<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(z),a=B/l,s=A/l),this.set(a,s,l,n),this}let L=Math.sqrt((M-y)*(M-y)+(_-T)*(_-T)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(M-y)/L,this.y=(_-T)/L,this.z=(g-v)/L,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PE extends co{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:a.depth},l=new On(s),u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Yp(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends PE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Px extends On{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IE extends On{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(t,n,a,s,l,u,f,p,d,v,_,g,x,y,T,M){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,u,f,p,d,v,_,g,x,y,T,M)}set(t,n,a,s,l,u,f,p,d,v,_,g,x,y,T,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=s,S[1]=l,S[5]=u,S[9]=f,S[13]=p,S[2]=d,S[6]=v,S[10]=_,S[14]=g,S[3]=x,S[7]=y,S[11]=T,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),l=1/Fs.setFromMatrixColumn(t,1).length(),u=1/Fs.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),v=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const g=u*v,x=u*_,y=f*v,T=f*_;n[0]=p*v,n[4]=-p*_,n[8]=d,n[1]=x+y*d,n[5]=g-T*d,n[9]=-f*p,n[2]=T-g*d,n[6]=y+x*d,n[10]=u*p}else if(t.order==="YXZ"){const g=p*v,x=p*_,y=d*v,T=d*_;n[0]=g+T*f,n[4]=y*f-x,n[8]=u*d,n[1]=u*_,n[5]=u*v,n[9]=-f,n[2]=x*f-y,n[6]=T+g*f,n[10]=u*p}else if(t.order==="ZXY"){const g=p*v,x=p*_,y=d*v,T=d*_;n[0]=g-T*f,n[4]=-u*_,n[8]=y+x*f,n[1]=x+y*f,n[5]=u*v,n[9]=T-g*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const g=u*v,x=u*_,y=f*v,T=f*_;n[0]=p*v,n[4]=y*d-x,n[8]=g*d+T,n[1]=p*_,n[5]=T*d+g,n[9]=x*d-y,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const g=u*p,x=u*d,y=f*p,T=f*d;n[0]=p*v,n[4]=T-g*_,n[8]=y*_+x,n[1]=_,n[5]=u*v,n[9]=-f*v,n[2]=-d*v,n[6]=x*_+y,n[10]=g-T*_}else if(t.order==="XZY"){const g=u*p,x=u*d,y=f*p,T=f*d;n[0]=p*v,n[4]=-_,n[8]=d*v,n[1]=g*_+T,n[5]=u*v,n[9]=x*_-y,n[2]=y*_-x,n[6]=f*v,n[10]=T*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FE,t,BE)}lookAt(t,n,a){const s=this.elements;return di.subVectors(t,n),di.lengthSq()===0&&(di.z=1),di.normalize(),sr.crossVectors(a,di),sr.lengthSq()===0&&(Math.abs(a.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),sr.crossVectors(a,di)),sr.normalize(),Kc.crossVectors(di,sr),s[0]=sr.x,s[4]=Kc.x,s[8]=di.x,s[1]=sr.y,s[5]=Kc.y,s[9]=di.y,s[2]=sr.z,s[6]=Kc.z,s[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],v=a[1],_=a[5],g=a[9],x=a[13],y=a[2],T=a[6],M=a[10],S=a[14],L=a[3],w=a[7],D=a[11],z=a[15],P=s[0],B=s[4],A=s[8],U=s[12],ot=s[1],F=s[5],W=s[9],J=s[13],st=s[2],Q=s[6],N=s[10],V=s[14],lt=s[3],ft=s[7],St=s[11],I=s[15];return l[0]=u*P+f*ot+p*st+d*lt,l[4]=u*B+f*F+p*Q+d*ft,l[8]=u*A+f*W+p*N+d*St,l[12]=u*U+f*J+p*V+d*I,l[1]=v*P+_*ot+g*st+x*lt,l[5]=v*B+_*F+g*Q+x*ft,l[9]=v*A+_*W+g*N+x*St,l[13]=v*U+_*J+g*V+x*I,l[2]=y*P+T*ot+M*st+S*lt,l[6]=y*B+T*F+M*Q+S*ft,l[10]=y*A+T*W+M*N+S*St,l[14]=y*U+T*J+M*V+S*I,l[3]=L*P+w*ot+D*st+z*lt,l[7]=L*B+w*F+D*Q+z*ft,l[11]=L*A+w*W+D*N+z*St,l[15]=L*U+w*J+D*V+z*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],u=t[1],f=t[5],p=t[9],d=t[13],v=t[2],_=t[6],g=t[10],x=t[14],y=t[3],T=t[7],M=t[11],S=t[15],L=p*x-d*g,w=f*x-d*_,D=f*g-p*_,z=u*x-d*v,P=u*g-p*v,B=u*_-f*v;return n*(T*L-M*w+S*D)-a*(y*L-M*z+S*P)+s*(y*w-T*z+S*B)-l*(y*D-T*P+M*B)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],v=t[8],_=t[9],g=t[10],x=t[11],y=t[12],T=t[13],M=t[14],S=t[15],L=n*f-a*u,w=n*p-s*u,D=n*d-l*u,z=a*p-s*f,P=a*d-l*f,B=s*d-l*p,A=v*T-_*y,U=v*M-g*y,ot=v*S-x*y,F=_*M-g*T,W=_*S-x*T,J=g*S-x*M,st=L*J-w*W+D*F+z*ot-P*U+B*A;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/st;return t[0]=(f*J-p*W+d*F)*Q,t[1]=(s*W-a*J-l*F)*Q,t[2]=(T*B-M*P+S*z)*Q,t[3]=(g*P-_*B-x*z)*Q,t[4]=(p*ot-u*J-d*U)*Q,t[5]=(n*J-s*ot+l*U)*Q,t[6]=(M*D-y*B-S*w)*Q,t[7]=(v*B-g*D+x*w)*Q,t[8]=(u*W-f*ot+d*A)*Q,t[9]=(a*ot-n*W-l*A)*Q,t[10]=(y*P-T*D+S*L)*Q,t[11]=(_*D-v*P-x*L)*Q,t[12]=(f*U-u*F-p*A)*Q,t[13]=(n*F-a*U+s*A)*Q,t[14]=(T*w-y*z-M*L)*Q,t[15]=(v*z-_*w+g*L)*Q,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,u=t.x,f=t.y,p=t.z,d=l*u,v=l*f;return this.set(d*u+a,d*f-s*p,d*p+s*f,0,d*f+s*p,v*f+a,v*p-s*u,0,d*p-s*f,v*p+s*u,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,u){return this.set(1,a,l,0,t,1,u,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,d=l+l,v=u+u,_=f+f,g=l*d,x=l*v,y=l*_,T=u*v,M=u*_,S=f*_,L=p*d,w=p*v,D=p*_,z=a.x,P=a.y,B=a.z;return s[0]=(1-(T+S))*z,s[1]=(x+D)*z,s[2]=(y-w)*z,s[3]=0,s[4]=(x-D)*P,s[5]=(1-(g+S))*P,s[6]=(M+L)*P,s[7]=0,s[8]=(y+w)*B,s[9]=(M-L)*B,s[10]=(1-(g+T))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let u=Fs.set(s[0],s[1],s[2]).length();const f=Fs.set(s[4],s[5],s[6]).length(),p=Fs.set(s[8],s[9],s[10]).length();l<0&&(u=-u),Oi.copy(this);const d=1/u,v=1/f,_=1/p;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=v,Oi.elements[5]*=v,Oi.elements[6]*=v,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,n.setFromRotationMatrix(Oi),a.x=u,a.y=f,a.z=p,this}makePerspective(t,n,a,s,l,u,f=Ji,p=!1){const d=this.elements,v=2*l/(n-t),_=2*l/(a-s),g=(n+t)/(n-t),x=(a+s)/(a-s);let y,T;if(p)y=l/(u-l),T=u*l/(u-l);else if(f===Ji)y=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===bl)y=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,u,f=Ji,p=!1){const d=this.elements,v=2/(n-t),_=2/(a-s),g=-(n+t)/(n-t),x=-(a+s)/(a-s);let y,T;if(p)y=1/(u-l),T=u/(u-l);else if(f===Ji)y=-2/(u-l),T=-(u+l)/(u-l);else if(f===bl)y=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Fs=new Y,Oi=new Qt,FE=new Y(0,0,0),BE=new Y(1,1,1),sr=new Y,Kc=new Y,di=new Y,pv=new Qt,mv=new Zn;class En{constructor(t=0,n=0,a=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],u=s[4],f=s[8],p=s[1],d=s[5],v=s[9],_=s[2],g=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,x),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return mv.setFromEuler(this),this.setFromQuaternion(mv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class jp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zE=0;const gv=new Y,Bs=new Zn,Ea=new Qt,Qc=new Y,sl=new Y,VE=new Y,HE=new Zn,_v=new Y(1,0,0),vv=new Y(0,1,0),xv=new Y(0,0,1),yv={type:"added"},GE={type:"removed"},zs={type:"childadded",child:null},od={type:"childremoved",child:null};class Je extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new Y,n=new En,a=new Zn,s=new Y(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new fe}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(_v,t)}rotateY(t){return this.rotateOnAxis(vv,t)}rotateZ(t){return this.rotateOnAxis(xv,t)}translateOnAxis(t,n){return gv.copy(t).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_v,t)}translateY(t){return this.translateOnAxis(vv,t)}translateZ(t){return this.translateOnAxis(xv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Qc.copy(t):Qc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(sl,Qc,this.up):Ea.lookAt(Qc,sl,this.up),this.quaternion.setFromRotationMatrix(Ea),s&&(Ea.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ea),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yv),zs.child=t,this.dispatchEvent(zs),zs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(GE),od.child=t,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yv),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,VE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,HE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,s=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*s,l[13]+=a-l[1]*n-l[5]*a-l[9]*s,l[14]+=s-l[2]*n-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const _=p[d];l(t.shapes,_)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),v=u(t.images),_=u(t.shapes),g=u(t.skeletons),x=u(t.animations),y=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),v.length>0&&(a.images=v),_.length>0&&(a.shapes=_),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),y.length>0&&(a.nodes=y)}return a.object=s,a;function u(f){const p=[];for(const d in f){const v=f[d];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Je.DEFAULT_UP=new Y(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mr extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),S=this._getHandJoint(d,T);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,y=.005;d.inputState.pinching&&g>x+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new mr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function cd(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class ae{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=ge.workingColorSpace){return this.r=t,this.g=n,this.b=a,ge.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=ge.workingColorSpace){if(t=qp(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=cd(u,l,t+1/3),this.g=cd(u,l,t),this.b=cd(u,l,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,n=Ze){function a(l){l!==void 0&&parseFloat(l)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ze){const a=Ix[t.toLowerCase()];return a!==void 0?this.setHex(a,n):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ge.workingToColorSpace(Bn.copy(this),t),Math.round(ye(Bn.r*255,0,255))*65536+Math.round(ye(Bn.g*255,0,255))*256+Math.round(ye(Bn.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ge.workingColorSpace){ge.workingToColorSpace(Bn.copy(this),n);const a=Bn.r,s=Bn.g,l=Bn.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let p,d;const v=(f+u)/2;if(f===u)p=0,d=0;else{const _=u-f;switch(d=v<=.5?_/(u+f):_/(2-u-f),u){case a:p=(s-l)/_+(s<l?6:0);break;case s:p=(l-a)/_+2;break;case l:p=(a-s)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=v,t}getRGB(t,n=ge.workingColorSpace){return ge.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ze){ge.workingToColorSpace(Bn.copy(this),t);const n=Bn.r,a=Bn.g,s=Bn.b;return t!==Ze?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(or),this.setHSL(or.h+t,or.s+n,or.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(or),t.getHSL(Jc);const a=vl(or.h,Jc.h,n),s=vl(or.s,Jc.s,n),l=vl(or.l,Jc.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ae;ae.NAMES=Ix;class XE extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Pi=new Y,ba=new Y,ud=new Y,Ta=new Y,Vs=new Y,Hs=new Y,Sv=new Y,fd=new Y,hd=new Y,dd=new Y,pd=new Fe,md=new Fe,gd=new Fe;class Vi{constructor(t=new Y,n=new Y,a=new Y){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Pi.subVectors(t,n),s.cross(Pi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Pi.subVectors(s,n),ba.subVectors(a,n),ud.subVectors(t,n);const u=Pi.dot(Pi),f=Pi.dot(ba),p=Pi.dot(ud),d=ba.dot(ba),v=ba.dot(ud),_=u*d-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,x=(d*p-f*v)*g,y=(u*v-f*p)*g;return l.set(1-x-y,y,x)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,n,a,s,l,u,f,p){return this.getBarycoord(t,n,a,s,Ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ta.x),p.addScaledVector(u,Ta.y),p.addScaledVector(f,Ta.z),p)}static getInterpolatedAttribute(t,n,a,s,l,u){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(t,n),md.fromBufferAttribute(t,a),gd.fromBufferAttribute(t,s),u.setScalar(0),u.addScaledVector(pd,l.x),u.addScaledVector(md,l.y),u.addScaledVector(gd,l.z),u}static isFrontFacing(t,n,a,s){return Pi.subVectors(a,n),ba.subVectors(t,n),Pi.cross(ba).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Pi.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return Vi.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let u,f;Vs.subVectors(s,a),Hs.subVectors(l,a),fd.subVectors(t,a);const p=Vs.dot(fd),d=Hs.dot(fd);if(p<=0&&d<=0)return n.copy(a);hd.subVectors(t,s);const v=Vs.dot(hd),_=Hs.dot(hd);if(v>=0&&_<=v)return n.copy(s);const g=p*_-v*d;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(a).addScaledVector(Vs,u);dd.subVectors(t,l);const x=Vs.dot(dd),y=Hs.dot(dd);if(y>=0&&x<=y)return n.copy(l);const T=x*d-p*y;if(T<=0&&d>=0&&y<=0)return f=d/(d-y),n.copy(a).addScaledVector(Hs,f);const M=v*y-x*_;if(M<=0&&_-v>=0&&x-y>=0)return Sv.subVectors(l,s),f=(_-v)/(_-v+(x-y)),n.copy(s).addScaledVector(Sv,f);const S=1/(M+T+g);return u=T*S,f=g*S,n.copy(a).addScaledVector(Vs,u).addScaledVector(Hs,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class xr{constructor(t=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ii.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ii.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ii.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ii):Ii.fromBufferAttribute(l,u),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$c.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),$c.copy(a.boundingBox)),$c.applyMatrix4(t.matrixWorld),this.union($c)}const s=t.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),tu.subVectors(this.max,ol),Gs.subVectors(t.a,ol),ks.subVectors(t.b,ol),Xs.subVectors(t.c,ol),lr.subVectors(ks,Gs),cr.subVectors(Xs,ks),Vr.subVectors(Gs,Xs);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Vr.z,Vr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Vr.z,0,-Vr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Vr.y,Vr.x,0];return!_d(n,Gs,ks,Xs,tu)||(n=[1,0,0,0,1,0,0,0,1],!_d(n,Gs,ks,Xs,tu))?!1:(eu.crossVectors(lr,cr),n=[eu.x,eu.y,eu.z],_d(n,Gs,ks,Xs,tu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Aa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ii=new Y,$c=new xr,Gs=new Y,ks=new Y,Xs=new Y,lr=new Y,cr=new Y,Vr=new Y,ol=new Y,tu=new Y,eu=new Y,Hr=new Y;function _d(o,t,n,a,s){for(let l=0,u=o.length-3;l<=u;l+=3){Hr.fromArray(o,l);const f=s.x*Math.abs(Hr.x)+s.y*Math.abs(Hr.y)+s.z*Math.abs(Hr.z),p=t.dot(Hr),d=n.dot(Hr),v=a.dot(Hr);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>f)return!1}return!0}const vn=new Y,nu=new he;let WE=0;class ea{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=sv,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)nu.fromBufferAttribute(this,n),nu.applyMatrix3(t),this.setXY(n,nu.x,nu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Qs(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),s=Wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sv&&(t.usage=this.usage),t}}class Zp extends ea{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Fx extends ea{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ke extends ea{constructor(t,n,a){super(new Float32Array(t),n,a)}}const qE=new xr,ll=new Y,vd=new Y;class uo{constructor(t=new Y,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):qE.setFromPoints(t).getCenter(a);let s=0;for(let l=0,u=t.length;l<u;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);const n=ll.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(ll,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(vd)),this.expandByPoint(ll.copy(t.center).sub(vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let YE=0;const bi=new Qt,xd=new Je,Ws=new Y,pi=new xr,cl=new xr,wn=new Y;class Pn extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uE(t)?Fx:Zp)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new fe().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,n,a){return bi.makeTranslation(t,n,a),this.applyMatrix4(bi),this}scale(t,n,a){return bi.makeScale(t,n,a),this.applyMatrix4(bi),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const u=t[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ke(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const a=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];cl.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(pi.min,cl.min),pi.expandByPoint(wn),wn.addVectors(pi.max,cl.max),pi.expandByPoint(wn)):(pi.expandByPoint(cl.min),pi.expandByPoint(cl.max))}pi.getCenter(a);let s=0;for(let l=0,u=t.count;l<u;l++)wn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(wn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,v=f.count;d<v;d++)wn.fromBufferAttribute(f,d),p&&(Ws.fromBufferAttribute(t,d),wn.add(Ws)),s=Math.max(s,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ea(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let A=0;A<a.count;A++)f[A]=new Y,p[A]=new Y;const d=new Y,v=new Y,_=new Y,g=new he,x=new he,y=new he,T=new Y,M=new Y;function S(A,U,ot){d.fromBufferAttribute(a,A),v.fromBufferAttribute(a,U),_.fromBufferAttribute(a,ot),g.fromBufferAttribute(l,A),x.fromBufferAttribute(l,U),y.fromBufferAttribute(l,ot),v.sub(d),_.sub(d),x.sub(g),y.sub(g);const F=1/(x.x*y.y-y.x*x.y);isFinite(F)&&(T.copy(v).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(F),M.copy(_).multiplyScalar(x.x).addScaledVector(v,-y.x).multiplyScalar(F),f[A].add(T),f[U].add(T),f[ot].add(T),p[A].add(M),p[U].add(M),p[ot].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let A=0,U=L.length;A<U;++A){const ot=L[A],F=ot.start,W=ot.count;for(let J=F,st=F+W;J<st;J+=3)S(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const w=new Y,D=new Y,z=new Y,P=new Y;function B(A){z.fromBufferAttribute(s,A),P.copy(z);const U=f[A];w.copy(U),w.sub(z.multiplyScalar(z.dot(U))).normalize(),D.crossVectors(P,U);const F=D.dot(p[A])<0?-1:1;u.setXYZW(A,w.x,w.y,w.z,F)}for(let A=0,U=L.length;A<U;++A){const ot=L[A],F=ot.start,W=ot.count;for(let J=F,st=F+W;J<st;J+=3)B(t.getX(J+0)),B(t.getX(J+1)),B(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ea(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const s=new Y,l=new Y,u=new Y,f=new Y,p=new Y,d=new Y,v=new Y,_=new Y;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),T=t.getX(g+1),M=t.getX(g+2);s.fromBufferAttribute(n,y),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),v.subVectors(u,l),_.subVectors(s,l),v.cross(_),f.fromBufferAttribute(a,y),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),f.add(v),p.add(v),d.add(v),a.setXYZ(y,f.x,f.y,f.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,x=n.count;g<x;g+=3)s.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),v.subVectors(u,l),_.subVectors(s,l),v.cross(_),a.setXYZ(g+0,v.x,v.y,v.z),a.setXYZ(g+1,v.x,v.y,v.z),a.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(f,p){const d=f.array,v=f.itemSize,_=f.normalized,g=new d.constructor(p.length*v);let x=0,y=0;for(let T=0,M=p.length;T<M;T++){f.isInterleavedBufferAttribute?x=p[T]*f.data.stride+f.offset:x=p[T]*v;for(let S=0;S<v;S++)g[y++]=d[x++]}return new ea(g,v,_)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let v=0,_=d.length;v<_;v++){const g=d[v],x=t(g,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let _=0,g=d.length;_<g;_++){const x=d[_];v.push(x.toJSON(t.data))}v.length>0&&(s[p]=v,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const v=s[d];this.setAttribute(d,v.clone(n))}const l=t.morphAttributes;for(const d in l){const v=[],_=l[d];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(n));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,v=u.length;d<v;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jE=0;class Sr extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=$s,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Hd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){Jt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Jt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(a.blending=this.blending),this.side!==vr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Vd&&(a.blendSrc=this.blendSrc),this.blendDst!==Hd&&(a.blendDst=this.blendDst),this.blendEquation!==qr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=s(t.textures),u=s(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new Y,yd=new Y,iu=new Y,ur=new Y,Sd=new Y,au=new Y,Md=new Y;class Vu{constructor(t=new Y,n=new Y(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=wa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,n),wa.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){yd.copy(t).add(n).multiplyScalar(.5),iu.copy(n).sub(t).normalize(),ur.copy(this.origin).sub(yd);const l=t.distanceTo(n)*.5,u=-this.direction.dot(iu),f=ur.dot(this.direction),p=-ur.dot(iu),d=ur.lengthSq(),v=Math.abs(1-u*u);let _,g,x,y;if(v>0)if(_=u*p-f,g=u*f-p,y=l*v,_>=0)if(g>=-y)if(g<=y){const T=1/v;_*=T,g*=T,x=_*(_+u*g+2*f)+g*(u*_+g+2*p)+d}else g=l,_=Math.max(0,-(u*g+f)),x=-_*_+g*(g+2*p)+d;else g=-l,_=Math.max(0,-(u*g+f)),x=-_*_+g*(g+2*p)+d;else g<=-y?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-p),l),x=-_*_+g*(g+2*p)+d):g<=y?(_=0,g=Math.min(Math.max(-l,-p),l),x=g*(g+2*p)+d):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-p),l),x=-_*_+g*(g+2*p)+d);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),x=-_*_+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(yd).addScaledVector(iu,g),x}intersectSphere(t,n){wa.subVectors(t.center,this.origin);const a=wa.dot(this.direction),s=wa.dot(wa)-a*a,l=t.radius*t.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,u,f,p;const d=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),v>=0?(l=(t.min.y-g.y)*v,u=(t.max.y-g.y)*v):(l=(t.max.y-g.y)*v,u=(t.min.y-g.y)*v),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),_>=0?(f=(t.min.z-g.z)*_,p=(t.max.z-g.z)*_):(f=(t.max.z-g.z)*_,p=(t.min.z-g.z)*_),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,n,a,s,l){Sd.subVectors(n,t),au.subVectors(a,t),Md.crossVectors(Sd,au);let u=this.direction.dot(Md),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ur.subVectors(this.origin,t);const p=f*this.direction.dot(au.crossVectors(ur,au));if(p<0)return null;const d=f*this.direction.dot(Sd.cross(ur));if(d<0||p+d>u)return null;const v=-f*ur.dot(Md);return v<0?null:this.at(v/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kp extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mv=new Qt,Gr=new Vu,ru=new uo,Ev=new Y,su=new Y,ou=new Y,lu=new Y,Ed=new Y,cu=new Y,bv=new Y,uu=new Y;class Rn extends Je{constructor(t=new Pn,n=new Kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){cu.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const v=f[p],_=l[p];v!==0&&(Ed.fromBufferAttribute(_,t),u?cu.addScaledVector(Ed,v):cu.addScaledVector(Ed.sub(n),v))}n.add(cu)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ru.copy(a.boundingSphere),ru.applyMatrix4(l),Gr.copy(t.ray).recast(t.near),!(ru.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(ru,Ev)===null||Gr.origin.distanceToSquared(Ev)>(t.far-t.near)**2))&&(Mv.copy(l).invert(),Gr.copy(t.ray).applyMatrix4(Mv),!(a.boundingBox!==null&&Gr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Gr)))}_computeIntersections(t,n,a){let s;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let y=0,T=g.length;y<T;y++){const M=g[y],S=u[M.materialIndex],L=Math.max(M.start,x.start),w=Math.min(f.count,Math.min(M.start+M.count,x.start+x.count));for(let D=L,z=w;D<z;D+=3){const P=f.getX(D),B=f.getX(D+1),A=f.getX(D+2);s=fu(this,S,t,a,d,v,_,P,B,A),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=M.materialIndex,n.push(s))}}else{const y=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let M=y,S=T;M<S;M+=3){const L=f.getX(M),w=f.getX(M+1),D=f.getX(M+2);s=fu(this,u,t,a,d,v,_,L,w,D),s&&(s.faceIndex=Math.floor(M/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(u))for(let y=0,T=g.length;y<T;y++){const M=g[y],S=u[M.materialIndex],L=Math.max(M.start,x.start),w=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let D=L,z=w;D<z;D+=3){const P=D,B=D+1,A=D+2;s=fu(this,S,t,a,d,v,_,P,B,A),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=M.materialIndex,n.push(s))}}else{const y=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=y,S=T;M<S;M+=3){const L=M,w=M+1,D=M+2;s=fu(this,u,t,a,d,v,_,L,w,D),s&&(s.faceIndex=Math.floor(M/3),n.push(s))}}}}function ZE(o,t,n,a,s,l,u,f){let p;if(t.side===ii?p=a.intersectTriangle(u,l,s,!0,f):p=a.intersectTriangle(s,l,u,t.side===vr,f),p===null)return null;uu.copy(f),uu.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(uu);return d<n.near||d>n.far?null:{distance:d,point:uu.clone(),object:o}}function fu(o,t,n,a,s,l,u,f,p,d){o.getVertexPosition(f,su),o.getVertexPosition(p,ou),o.getVertexPosition(d,lu);const v=ZE(o,t,n,a,su,ou,lu,bv);if(v){const _=new Y;Vi.getBarycoord(bv,su,ou,lu,_),s&&(v.uv=Vi.getInterpolatedAttribute(s,f,p,d,_,new he)),l&&(v.uv1=Vi.getInterpolatedAttribute(l,f,p,d,_,new he)),u&&(v.normal=Vi.getInterpolatedAttribute(u,f,p,d,_,new Y),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new Y,materialIndex:0};Vi.getNormal(su,ou,lu,g.normal),v.face=g,v.barycoord=_}return v}const Tv=new Y,Av=new Fe,wv=new Fe,KE=new Y,Rv=new Qt,hu=new Y,bd=new uo,Cv=new Qt,Td=new Vu;class QE extends Rn{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tv,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new xr),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,hu),this.boundingBox.expandByPoint(hu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new uo),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,hu),this.boundingSphere.expandByPoint(hu)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const a=this.material,s=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bd.copy(this.boundingSphere),bd.applyMatrix4(s),t.ray.intersectsSphere(bd)!==!1&&(Cv.copy(s).invert(),Td.copy(t.ray).applyMatrix4(Cv),!(this.boundingBox!==null&&Td.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,Td)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Fe,n=this.geometry.attributes.skinWeight;for(let a=0,s=n.count;a<s;a++){t.fromBufferAttribute(n,a);const l=1/t.manhattanLength();l!==1/0?t.multiplyScalar(l):t.set(1,0,0,0),n.setXYZW(a,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===tv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$M?this.bindMatrixInverse.copy(this.bindMatrix).invert():Jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const a=this.skeleton,s=this.geometry;Av.fromBufferAttribute(s.attributes.skinIndex,t),wv.fromBufferAttribute(s.attributes.skinWeight,t),Tv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let l=0;l<4;l++){const u=wv.getComponent(l);if(u!==0){const f=Av.getComponent(l);Rv.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),n.addScaledVector(KE.copy(Tv).applyMatrix4(Rv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Cp extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bx extends On{constructor(t=null,n=1,a=1,s,l,u,f,p,d=Nn,v=Nn,_,g){super(null,u,f,p,d,v,s,l,_,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dv=new Qt,JE=new Qt;class Qp{constructor(t=[],n=[]){this.uuid=yr(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){Jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,s=this.bones.length;a<s;a++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const a=new Qt;this.bones[t]&&a.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const a=this.bones[t];a&&a.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const a=this.bones[t];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const t=this.bones,n=this.boneInverses,a=this.boneMatrices,s=this.boneTexture;for(let l=0,u=t.length;l<u;l++){const f=t[l]?t[l].matrixWorld:JE;Dv.multiplyMatrices(f,n[l]),Dv.toArray(a,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qp(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const a=new Bx(n,t,t,Ai,Gi);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(t){for(let n=0,a=this.bones.length;n<a;n++){const s=this.bones[n];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let a=0,s=t.bones.length;a<s;a++){const l=t.bones[a];let u=n[l];u===void 0&&(Jt("Skeleton: No bone found with UUID:",l),u=new Cp),this.bones.push(u),this.boneInverses.push(new Qt().fromArray(t.boneInverses[a]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let s=0,l=n.length;s<l;s++){const u=n[s];t.bones.push(u.uuid);const f=a[s];t.boneInverses.push(f.toArray())}return t}}const Ad=new Y,$E=new Y,tb=new fe;class dr{constructor(t=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=Ad.subVectors(a,n).cross($E.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ad),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||tb.getNormalMatrix(t),s=this.coplanarPoint(Ad).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new uo,eb=new he(.5,.5),du=new Y;class Jp{constructor(t=new dr,n=new dr,a=new dr,s=new dr,l=new dr,u=new dr){this.planes=[t,n,a,s,l,u]}set(t,n,a,s,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ji,a=!1){const s=this.planes,l=t.elements,u=l[0],f=l[1],p=l[2],d=l[3],v=l[4],_=l[5],g=l[6],x=l[7],y=l[8],T=l[9],M=l[10],S=l[11],L=l[12],w=l[13],D=l[14],z=l[15];if(s[0].setComponents(d-u,x-v,S-y,z-L).normalize(),s[1].setComponents(d+u,x+v,S+y,z+L).normalize(),s[2].setComponents(d+f,x+_,S+T,z+w).normalize(),s[3].setComponents(d-f,x-_,S-T,z-w).normalize(),a)s[4].setComponents(p,g,M,D).normalize(),s[5].setComponents(d-p,x-g,S-M,z-D).normalize();else if(s[4].setComponents(d-p,x-g,S-M,z-D).normalize(),n===Ji)s[5].setComponents(d+p,x+g,S+M,z+D).normalize();else if(n===bl)s[5].setComponents(p,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(t){kr.center.set(0,0,0);const n=eb.distanceTo(t.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(du.x=s.normal.x>0?t.max.x:t.min.x,du.y=s.normal.y>0?t.max.y:t.min.y,du.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(du)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $p extends Sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pu=new Y,Iu=new Y,Lv=new Qt,ul=new Vu,pu=new uo,wd=new Y,Uv=new Y;class zx extends Je{constructor(t=new Pn,n=new $p){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let s=1,l=n.count;s<l;s++)Pu.fromBufferAttribute(n,s-1),Iu.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=Pu.distanceTo(Iu);t.setAttribute("lineDistance",new Ke(a,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),pu.copy(a.boundingSphere),pu.applyMatrix4(s),pu.radius+=l,t.ray.intersectsSphere(pu)===!1)return;Lv.copy(s).invert(),ul.copy(t.ray).applyMatrix4(Lv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,v=a.index,g=a.attributes.position;if(v!==null){const x=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let T=x,M=y-1;T<M;T+=d){const S=v.getX(T),L=v.getX(T+1),w=mu(this,t,ul,p,S,L,T);w&&n.push(w)}if(this.isLineLoop){const T=v.getX(y-1),M=v.getX(x),S=mu(this,t,ul,p,T,M,y-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let T=x,M=y-1;T<M;T+=d){const S=mu(this,t,ul,p,T,T+1,T);S&&n.push(S)}if(this.isLineLoop){const T=mu(this,t,ul,p,y-1,x,y-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function mu(o,t,n,a,s,l,u){const f=o.geometry.attributes.position;if(Pu.fromBufferAttribute(f,s),Iu.fromBufferAttribute(f,l),n.distanceSqToSegment(Pu,Iu,wd,Uv)>a)return;wd.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(wd);if(!(d<t.near||d>t.far))return{distance:d,point:Uv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}class Vx extends On{constructor(t=[],n=Kr,a,s,l,u,f,p,d,v){super(t,n,a,s,l,u,f,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Al extends On{constructor(t,n,a=na,s,l,u,f=Nn,p=Nn,d,v=Na,_=1){if(v!==Na&&v!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:_};super(g,s,l,u,f,p,v,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nb extends Al{constructor(t,n=na,a=Kr,s,l,u=Nn,f=Nn,p,d=Na){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,n,a,s,l,u,f,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hx extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _r extends Pn{constructor(t=1,n=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],v=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,a,n,t,u,l,0),y("z","y","x",1,-1,a,n,-t,u,l,1),y("x","z","y",1,1,t,a,n,s,u,2),y("x","z","y",1,-1,t,a,-n,s,u,3),y("x","y","z",1,-1,t,n,a,s,l,4),y("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(p),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(_,2));function y(T,M,S,L,w,D,z,P,B,A,U){const ot=D/B,F=z/A,W=D/2,J=z/2,st=P/2,Q=B+1,N=A+1;let V=0,lt=0;const ft=new Y;for(let St=0;St<N;St++){const I=St*F-J;for(let j=0;j<Q;j++){const it=j*ot-W;ft[T]=it*L,ft[M]=I*w,ft[S]=st,d.push(ft.x,ft.y,ft.z),ft[T]=0,ft[M]=0,ft[S]=P>0?1:-1,v.push(ft.x,ft.y,ft.z),_.push(j/B),_.push(1-St/A),V+=1}}for(let St=0;St<A;St++)for(let I=0;I<B;I++){const j=g+I+Q*St,it=g+I+Q*(St+1),yt=g+(I+1)+Q*(St+1),Dt=g+(I+1)+Q*St;p.push(j,it,Dt),p.push(it,yt,Dt),lt+=6}f.addGroup(x,lt,U),x+=lt,g+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class tm extends Pn{constructor(t=1,n=1,a=1,s=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const d=this;s=Math.floor(s),l=Math.floor(l);const v=[],_=[],g=[],x=[];let y=0;const T=[],M=a/2;let S=0;L(),u===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(v),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(x,2));function L(){const D=new Y,z=new Y;let P=0;const B=(n-t)/a;for(let A=0;A<=l;A++){const U=[],ot=A/l,F=ot*(n-t)+t;for(let W=0;W<=s;W++){const J=W/s,st=J*p+f,Q=Math.sin(st),N=Math.cos(st);z.x=F*Q,z.y=-ot*a+M,z.z=F*N,_.push(z.x,z.y,z.z),D.set(Q,B,N).normalize(),g.push(D.x,D.y,D.z),x.push(J,1-ot),U.push(y++)}T.push(U)}for(let A=0;A<s;A++)for(let U=0;U<l;U++){const ot=T[U][A],F=T[U+1][A],W=T[U+1][A+1],J=T[U][A+1];(t>0||U!==0)&&(v.push(ot,F,J),P+=3),(n>0||U!==l-1)&&(v.push(F,W,J),P+=3)}d.addGroup(S,P,0),S+=P}function w(D){const z=y,P=new he,B=new Y;let A=0;const U=D===!0?t:n,ot=D===!0?1:-1;for(let W=1;W<=s;W++)_.push(0,M*ot,0),g.push(0,ot,0),x.push(.5,.5),y++;const F=y;for(let W=0;W<=s;W++){const st=W/s*p+f,Q=Math.cos(st),N=Math.sin(st);B.x=U*N,B.y=M*ot,B.z=U*Q,_.push(B.x,B.y,B.z),g.push(0,ot,0),P.x=Q*.5+.5,P.y=N*.5*ot+.5,x.push(P.x,P.y),y++}for(let W=0;W<s;W++){const J=z+W,st=F+W;D===!0?v.push(st,st+1,J):v.push(st+1,st,J),A+=3}d.addGroup(S,A,D===!0?1:2),S+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ib{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,s=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),l+=a.distanceTo(s),n.push(l),s=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let s=0;const l=a.length;let u;n?u=n:u=t*a[l-1];let f=0,p=l-1,d;for(;f<=p;)if(s=Math.floor(f+(p-f)/2),d=a[s]-u,d<0)f=s+1;else if(d>0)p=s-1;else{p=s;break}if(s=p,a[s]===u)return s/(l-1);const v=a[s],g=a[s+1]-v,x=(u-v)/g;return(s+x)/(l-1)}getTangent(t,n){let s=t-1e-4,l=t+1e-4;s<0&&(s=0),l>1&&(l=1);const u=this.getPoint(s),f=this.getPoint(l),p=n||(u.isVector2?new he:new Y);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new Y,s=[],l=[],u=[],f=new Y,p=new Qt;for(let x=0;x<=t;x++){const y=x/t;s[x]=this.getTangentAt(y,new Y)}l[0]=new Y,u[0]=new Y;let d=Number.MAX_VALUE;const v=Math.abs(s[0].x),_=Math.abs(s[0].y),g=Math.abs(s[0].z);v<=d&&(d=v,a.set(1,0,0)),_<=d&&(d=_,a.set(0,1,0)),g<=d&&a.set(0,0,1),f.crossVectors(s[0],a).normalize(),l[0].crossVectors(s[0],f),u[0].crossVectors(s[0],l[0]);for(let x=1;x<=t;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(s[x-1],s[x]),f.length()>Number.EPSILON){f.normalize();const y=Math.acos(ye(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(p.makeRotationAxis(f,y))}u[x].crossVectors(s[x],l[x])}if(n===!0){let x=Math.acos(ye(l[0].dot(l[t]),-1,1));x/=t,s[0].dot(f.crossVectors(l[0],l[t]))>0&&(x=-x);for(let y=1;y<=t;y++)l[y].applyMatrix4(p.makeRotationAxis(s[y],x*y)),u[y].crossVectors(s[y],l[y])}return{tangents:s,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ab(o,t,n=2){const a=t&&t.length,s=a?t[0]*n:o.length;let l=Gx(o,0,s,n,!0);const u=[];if(!l||l.next===l.prev)return u;let f,p,d;if(a&&(l=cb(o,t,l,n)),o.length>80*n){f=o[0],p=o[1];let v=f,_=p;for(let g=n;g<s;g+=n){const x=o[g],y=o[g+1];x<f&&(f=x),y<p&&(p=y),x>v&&(v=x),y>_&&(_=y)}d=Math.max(v-f,_-p),d=d!==0?32767/d:0}return wl(l,u,n,f,p,d,0),u}function Gx(o,t,n,a,s){let l;if(s===yb(o,t,n,a)>0)for(let u=t;u<n;u+=a)l=Nv(u/a|0,o[u],o[u+1],l);else for(let u=n-a;u>=t;u-=a)l=Nv(u/a|0,o[u],o[u+1],l);return l&&so(l,l.next)&&(Cl(l),l=l.next),l}function Qr(o,t){if(!o)return o;t||(t=o);let n=o,a;do if(a=!1,!n.steiner&&(so(n,n.next)||rn(n.prev,n,n.next)===0)){if(Cl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function wl(o,t,n,a,s,l,u){if(!o)return;!u&&l&&pb(o,a,s,l);let f=o;for(;o.prev!==o.next;){const p=o.prev,d=o.next;if(l?sb(o,a,s,l):rb(o)){t.push(p.i,o.i,d.i),Cl(o),o=d.next,f=d.next;continue}if(o=d,o===f){u?u===1?(o=ob(Qr(o),t),wl(o,t,n,a,s,l,2)):u===2&&lb(o,t,n,a,s,l):wl(Qr(o),t,n,a,s,l,1);break}}}function rb(o){const t=o.prev,n=o,a=o.next;if(rn(t,n,a)>=0)return!1;const s=t.x,l=n.x,u=a.x,f=t.y,p=n.y,d=a.y,v=Math.min(s,l,u),_=Math.min(f,p,d),g=Math.max(s,l,u),x=Math.max(f,p,d);let y=a.next;for(;y!==t;){if(y.x>=v&&y.x<=g&&y.y>=_&&y.y<=x&&pl(s,f,l,p,u,d,y.x,y.y)&&rn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function sb(o,t,n,a){const s=o.prev,l=o,u=o.next;if(rn(s,l,u)>=0)return!1;const f=s.x,p=l.x,d=u.x,v=s.y,_=l.y,g=u.y,x=Math.min(f,p,d),y=Math.min(v,_,g),T=Math.max(f,p,d),M=Math.max(v,_,g),S=Dp(x,y,t,n,a),L=Dp(T,M,t,n,a);let w=o.prevZ,D=o.nextZ;for(;w&&w.z>=S&&D&&D.z<=L;){if(w.x>=x&&w.x<=T&&w.y>=y&&w.y<=M&&w!==s&&w!==u&&pl(f,v,p,_,d,g,w.x,w.y)&&rn(w.prev,w,w.next)>=0||(w=w.prevZ,D.x>=x&&D.x<=T&&D.y>=y&&D.y<=M&&D!==s&&D!==u&&pl(f,v,p,_,d,g,D.x,D.y)&&rn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;w&&w.z>=S;){if(w.x>=x&&w.x<=T&&w.y>=y&&w.y<=M&&w!==s&&w!==u&&pl(f,v,p,_,d,g,w.x,w.y)&&rn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;D&&D.z<=L;){if(D.x>=x&&D.x<=T&&D.y>=y&&D.y<=M&&D!==s&&D!==u&&pl(f,v,p,_,d,g,D.x,D.y)&&rn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function ob(o,t){let n=o;do{const a=n.prev,s=n.next.next;!so(a,s)&&Xx(a,n,n.next,s)&&Rl(a,s)&&Rl(s,a)&&(t.push(a.i,n.i,s.i),Cl(n),Cl(n.next),n=o=s),n=n.next}while(n!==o);return Qr(n)}function lb(o,t,n,a,s,l){let u=o;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&_b(u,f)){let p=Wx(u,f);u=Qr(u,u.next),p=Qr(p,p.next),wl(u,t,n,a,s,l,0),wl(p,t,n,a,s,l,0);return}f=f.next}u=u.next}while(u!==o)}function cb(o,t,n,a){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l]*a,p=l<u-1?t[l+1]*a:o.length,d=Gx(o,f,p,a,!1);d===d.next&&(d.steiner=!0),s.push(gb(d))}s.sort(ub);for(let l=0;l<s.length;l++)n=fb(s[l],n);return n}function ub(o,t){let n=o.x-t.x;if(n===0&&(n=o.y-t.y,n===0)){const a=(o.next.y-o.y)/(o.next.x-o.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=a-s}return n}function fb(o,t){const n=hb(o,t);if(!n)return t;const a=Wx(n,o);return Qr(a,a.next),Qr(n,n.next)}function hb(o,t){let n=t;const a=o.x,s=o.y;let l=-1/0,u;if(so(o,n))return n;do{if(so(o,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const _=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>l&&(l=_,u=n.x<n.next.x?n:n.next,_===a))return u}n=n.next}while(n!==t);if(!u)return null;const f=u,p=u.x,d=u.y;let v=1/0;n=u;do{if(a>=n.x&&n.x>=p&&a!==n.x&&kx(s<d?a:l,s,p,d,s<d?l:a,s,n.x,n.y)){const _=Math.abs(s-n.y)/(a-n.x);Rl(n,o)&&(_<v||_===v&&(n.x>u.x||n.x===u.x&&db(u,n)))&&(u=n,v=_)}n=n.next}while(n!==f);return u}function db(o,t){return rn(o.prev,o,t.prev)<0&&rn(t.next,o,o.next)<0}function pb(o,t,n,a){let s=o;do s.z===0&&(s.z=Dp(s.x,s.y,t,n,a)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,mb(s)}function mb(o){let t,n=1;do{let a=o,s;o=null;let l=null;for(t=0;a;){t++;let u=a,f=0;for(let d=0;d<n&&(f++,u=u.nextZ,!!u);d++);let p=n;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||a.z<=u.z)?(s=a,a=a.nextZ,f--):(s=u,u=u.nextZ,p--),l?l.nextZ=s:o=s,s.prevZ=l,l=s;a=u}l.nextZ=null,n*=2}while(t>1);return o}function Dp(o,t,n,a,s){return o=(o-n)*s|0,t=(t-a)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function gb(o){let t=o,n=o;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==o);return n}function kx(o,t,n,a,s,l,u,f){return(s-u)*(t-f)>=(o-u)*(l-f)&&(o-u)*(a-f)>=(n-u)*(t-f)&&(n-u)*(l-f)>=(s-u)*(a-f)}function pl(o,t,n,a,s,l,u,f){return!(o===u&&t===f)&&kx(o,t,n,a,s,l,u,f)}function _b(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!vb(o,t)&&(Rl(o,t)&&Rl(t,o)&&xb(o,t)&&(rn(o.prev,o,t.prev)||rn(o,t.prev,t))||so(o,t)&&rn(o.prev,o,o.next)>0&&rn(t.prev,t,t.next)>0)}function rn(o,t,n){return(t.y-o.y)*(n.x-t.x)-(t.x-o.x)*(n.y-t.y)}function so(o,t){return o.x===t.x&&o.y===t.y}function Xx(o,t,n,a){const s=_u(rn(o,t,n)),l=_u(rn(o,t,a)),u=_u(rn(n,a,o)),f=_u(rn(n,a,t));return!!(s!==l&&u!==f||s===0&&gu(o,n,t)||l===0&&gu(o,a,t)||u===0&&gu(n,o,a)||f===0&&gu(n,t,a))}function gu(o,t,n){return t.x<=Math.max(o.x,n.x)&&t.x>=Math.min(o.x,n.x)&&t.y<=Math.max(o.y,n.y)&&t.y>=Math.min(o.y,n.y)}function _u(o){return o>0?1:o<0?-1:0}function vb(o,t){let n=o;do{if(n.i!==o.i&&n.next.i!==o.i&&n.i!==t.i&&n.next.i!==t.i&&Xx(n,n.next,o,t))return!0;n=n.next}while(n!==o);return!1}function Rl(o,t){return rn(o.prev,o,o.next)<0?rn(o,t,o.next)>=0&&rn(o,o.prev,t)>=0:rn(o,t,o.prev)<0||rn(o,o.next,t)<0}function xb(o,t){let n=o,a=!1;const s=(o.x+t.x)/2,l=(o.y+t.y)/2;do n.y>l!=n.next.y>l&&n.next.y!==n.y&&s<(n.next.x-n.x)*(l-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==o);return a}function Wx(o,t){const n=Lp(o.i,o.x,o.y),a=Lp(t.i,t.x,t.y),s=o.next,l=t.prev;return o.next=t,t.prev=o,n.next=s,s.prev=n,a.next=n,n.prev=a,l.next=a,a.prev=l,a}function Nv(o,t,n,a){const s=Lp(o,t,n);return a?(s.next=a.next,s.prev=a,a.next.prev=s,a.next=s):(s.prev=s,s.next=s),s}function Cl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Lp(o,t,n){return{i:o,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yb(o,t,n,a){let s=0;for(let l=t,u=n-a;l<n;l+=a)s+=(o[u]-o[l])*(o[l+1]+o[u+1]),u=l;return s}class Sb{static triangulate(t,n,a=2){return ab(t,n,a)}}class em{static area(t){const n=t.length;let a=0;for(let s=n-1,l=0;l<n;s=l++)a+=t[s].x*t[l].y-t[l].x*t[s].y;return a*.5}static isClockWise(t){return em.area(t)<0}static triangulateShape(t,n){const a=[],s=[],l=[];Ov(t),Pv(a,t);let u=t.length;n.forEach(Ov);for(let p=0;p<n.length;p++)s.push(u),u+=n[p].length,Pv(a,n[p]);const f=Sb.triangulate(a,s);for(let p=0;p<f.length;p+=3)l.push(f.slice(p,p+3));return l}}function Ov(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Pv(o,t){for(let n=0;n<t.length;n++)o.push(t[n].x),o.push(t[n].y)}class Hu extends Pn{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,u=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,v=p+1,_=t/f,g=n/p,x=[],y=[],T=[],M=[];for(let S=0;S<v;S++){const L=S*g-u;for(let w=0;w<d;w++){const D=w*_-l;y.push(D,-L,0),T.push(0,0,1),M.push(w/f),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let L=0;L<f;L++){const w=L+d*S,D=L+d*(S+1),z=L+1+d*(S+1),P=L+1+d*S;x.push(w,D,P),x.push(D,z,P)}this.setIndex(x),this.setAttribute("position",new Ke(y,3)),this.setAttribute("normal",new Ke(T,3)),this.setAttribute("uv",new Ke(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.width,t.height,t.widthSegments,t.heightSegments)}}class nm extends Pn{constructor(t=.5,n=1,a=32,s=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:s,thetaStart:l,thetaLength:u},a=Math.max(3,a),s=Math.max(1,s);const f=[],p=[],d=[],v=[];let _=t;const g=(n-t)/s,x=new Y,y=new he;for(let T=0;T<=s;T++){for(let M=0;M<=a;M++){const S=l+M/a*u;x.x=_*Math.cos(S),x.y=_*Math.sin(S),p.push(x.x,x.y,x.z),d.push(0,0,1),y.x=(x.x/n+1)/2,y.y=(x.y/n+1)/2,v.push(y.x,y.y)}_+=g}for(let T=0;T<s;T++){const M=T*(a+1);for(let S=0;S<a;S++){const L=S+M,w=L,D=L+a+1,z=L+a+2,P=L+1;f.push(w,D,P),f.push(D,z,P)}}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class im extends Pn{constructor(t=1,n=32,a=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let d=0;const v=[],_=new Y,g=new Y,x=[],y=[],T=[],M=[];for(let S=0;S<=a;S++){const L=[],w=S/a;let D=0;S===0&&u===0?D=.5/n:S===a&&p===Math.PI&&(D=-.5/n);for(let z=0;z<=n;z++){const P=z/n;_.x=-t*Math.cos(s+P*l)*Math.sin(u+w*f),_.y=t*Math.cos(u+w*f),_.z=t*Math.sin(s+P*l)*Math.sin(u+w*f),y.push(_.x,_.y,_.z),g.copy(_).normalize(),T.push(g.x,g.y,g.z),M.push(P+D,1-w),L.push(d++)}v.push(L)}for(let S=0;S<a;S++)for(let L=0;L<n;L++){const w=v[S][L+1],D=v[S][L],z=v[S+1][L],P=v[S+1][L+1];(S!==0||u>0)&&x.push(w,D,P),(S!==a-1||p<Math.PI)&&x.push(D,z,P)}this.setIndex(x),this.setAttribute("position",new Ke(y,3)),this.setAttribute("normal",new Ke(T,3)),this.setAttribute("uv",new Ke(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new im(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function oo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function qn(o){const t={};for(let n=0;n<o.length;n++){const a=oo(o[n]);for(const s in a)t[s]=a[s]}return t}function Mb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function qx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Eb={clone:oo,merge:qn};var bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bb,this.fragmentShader=Tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oo(t.uniforms),this.uniformsGroups=Mb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?n.uniforms[s]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[s]={type:"m4",value:u.toArray()}:n.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Ab extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ml extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends Sr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Fu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wb extends Sr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Fu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rb extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cb extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function xu(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Db(o){function t(s,l){return o[s]-o[l]}const n=o.length,a=new Array(n);for(let s=0;s!==n;++s)a[s]=s;return a.sort(t),a}function Iv(o,t,n){const a=o.length,s=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=n[l]*t;for(let p=0;p!==t;++p)s[u++]=o[f+p]}return s}function Yx(o,t,n,a){let s=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[s++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(t.push(l.time),n.push(...u)),l=o[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(t.push(l.time),u.toArray(n,n.length)),l=o[s++];while(l!==void 0);else do u=l[a],u!==void 0&&(t.push(l.time),n.push(u)),l=o[s++];while(l!==void 0)}class Nl{constructor(t,n,a,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let a=this._cachedIndex,s=n[a],l=n[a-1];t:{e:{let u;n:{i:if(!(t<s)){for(let f=a+2;;){if(s===void 0){if(t<l)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=s,s=n[++a],t<s)break e}u=n.length;break n}if(!(t>=l)){const f=n[1];t<f&&(a=2,l=f);for(let p=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(s=l,l=n[--a-1],t>=l)break e}u=a,a=0;break n}break t}for(;a<u;){const f=a+u>>>1;t<n[f]?u=f:a=f+1}if(s=n[a],l=n[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,s)}return this.interpolate_(a,l,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=t*s;for(let u=0;u!==s;++u)n[u]=a[l+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Lb extends Nl{constructor(t,n,a,s){super(t,n,a,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nv,endingEnd:nv}}intervalChanged_(t,n,a){const s=this.parameterPositions;let l=t-2,u=t+1,f=s[l],p=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case iv:l=t,f=2*n-a;break;case av:l=s.length-2,f=n+s[l]-s[l+1];break;default:l=t,f=a}if(p===void 0)switch(this.getSettings_().endingEnd){case iv:u=t,p=2*a-n;break;case av:u=1,p=a+s[1]-s[0];break;default:u=t-1,p=n}const d=(a-n)*.5,v=this.valueSize;this._weightPrev=d/(n-f),this._weightNext=d/(p-a),this._offsetPrev=l*v,this._offsetNext=u*v}interpolate_(t,n,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,v=this._offsetPrev,_=this._offsetNext,g=this._weightPrev,x=this._weightNext,y=(a-n)/(s-n),T=y*y,M=T*y,S=-g*M+2*g*T-g*y,L=(1+g)*M+(-1.5-2*g)*T+(-.5+g)*y+1,w=(-1-x)*M+(1.5+x)*T+.5*y,D=x*M-x*T;for(let z=0;z!==f;++z)l[z]=S*u[v+z]+L*u[d+z]+w*u[p+z]+D*u[_+z];return l}}class Ub extends Nl{constructor(t,n,a,s){super(t,n,a,s)}interpolate_(t,n,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,v=(a-n)/(s-n),_=1-v;for(let g=0;g!==f;++g)l[g]=u[d+g]*_+u[p+g]*v;return l}}class Nb extends Nl{constructor(t,n,a,s){super(t,n,a,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ob extends Nl{interpolate_(t,n,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,v=this.settings||this.DefaultSettings_,_=v.inTangents,g=v.outTangents;if(!_||!g){const T=(a-n)/(s-n),M=1-T;for(let S=0;S!==f;++S)l[S]=u[d+S]*M+u[p+S]*T;return l}const x=f*2,y=t-1;for(let T=0;T!==f;++T){const M=u[d+T],S=u[p+T],L=y*x+T*2,w=g[L],D=g[L+1],z=t*x+T*2,P=_[z],B=_[z+1];let A=(a-n)/(s-n),U,ot,F,W,J;for(let st=0;st<8;st++){U=A*A,ot=U*A,F=1-A,W=F*F,J=W*F;const N=J*n+3*W*A*w+3*F*U*P+ot*s-a;if(Math.abs(N)<1e-10)break;const V=3*W*(w-n)+6*F*A*(P-w)+3*U*(s-P);if(Math.abs(V)<1e-10)break;A=A-N/V,A=Math.max(0,Math.min(1,A))}l[T]=J*M+3*W*A*D+3*F*U*B+ot*S}return l}}class ki{constructor(t,n,a,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xu(n,this.TimeBufferType),this.values=xu(a,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(t);else{a={name:t.name,times:xu(t.times,Array),values:xu(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(a.interpolation=s)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new Nb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ub(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const n=new Ob(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.settings=this.settings),n}setInterpolation(t){let n;switch(t){case Uu:n=this.InterpolantFactoryMethodDiscrete;break;case Rp:n=this.InterpolantFactoryMethodLinear;break;case nd:n=this.InterpolantFactoryMethodSmooth;break;case ev:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Jt("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uu;case this.InterpolantFactoryMethodLinear:return Rp;case this.InterpolantFactoryMethodSmooth:return nd;case this.InterpolantFactoryMethodBezier:return ev}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let a=0,s=n.length;a!==s;++a)n[a]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let a=0,s=n.length;a!==s;++a)n[a]*=t}return this}trim(t,n){const a=this.times,s=a.length;let l=0,u=s-1;for(;l!==s&&a[l]<t;)++l;for(;u!==-1&&a[u]>n;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);const a=this.times,s=this.values,l=a.length;l===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let f=0;f!==l;f++){const p=a[f];if(typeof p=="number"&&isNaN(p)){ne("KeyframeTrack: Time is not a valid number.",this,f,p),t=!1;break}if(u!==null&&u>p){ne("KeyframeTrack: Out of order keys.",this,f,p,u),t=!1;break}u=p}if(s!==void 0&&fE(s))for(let f=0,p=s.length;f!==p;++f){const d=s[f];if(isNaN(d)){ne("KeyframeTrack: Value is not a valid number.",this,f,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),s=this.getInterpolation()===nd,l=t.length-1;let u=1;for(let f=1;f<l;++f){let p=!1;const d=t[f],v=t[f+1];if(d!==v&&(f!==1||d!==t[0]))if(s)p=!0;else{const _=f*a,g=_-a,x=_+a;for(let y=0;y!==a;++y){const T=n[_+y];if(T!==n[g+y]||T!==n[x+y]){p=!0;break}}}if(p){if(f!==u){t[u]=t[f];const _=f*a,g=u*a;for(let x=0;x!==a;++x)n[g+x]=n[_+x]}++u}}if(l>0){t[u]=t[l];for(let f=l*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[f+d];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=n.slice(0,u*a)):(this.times=t,this.values=n),this}clone(){const t=this.times.slice(),n=this.values.slice(),a=this.constructor,s=new a(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Rp;class fo extends ki{constructor(t,n,a){super(t,n,a)}}fo.prototype.ValueTypeName="bool";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Uu;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class jx extends ki{constructor(t,n,a,s){super(t,n,a,s)}}jx.prototype.ValueTypeName="color";class Dl extends ki{constructor(t,n,a,s){super(t,n,a,s)}}Dl.prototype.ValueTypeName="number";class Pb extends Nl{constructor(t,n,a,s){super(t,n,a,s)}interpolate_(t,n,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=(a-n)/(s-n);let d=t*f;for(let v=d+f;d!==v;d+=4)Zn.slerpFlat(l,0,u,d-f,u,d,p);return l}}class lo extends ki{constructor(t,n,a,s){super(t,n,a,s)}InterpolantFactoryMethodLinear(t){return new Pb(this.times,this.values,this.getValueSize(),t)}}lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends ki{constructor(t,n,a){super(t,n,a)}}ho.prototype.ValueTypeName="string";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=Uu;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Ll extends ki{constructor(t,n,a,s){super(t,n,a,s)}}Ll.prototype.ValueTypeName="vector";class Ib{constructor(t="",n=-1,a=[],s=eE){this.name=t,this.tracks=a,this.duration=n,this.blendMode=s,this.uuid=yr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const n=[],a=t.tracks,s=1/(t.fps||1);for(let u=0,f=a.length;u!==f;++u)n.push(Bb(a[u]).scale(s));const l=new this(t.name,t.duration,n,t.blendMode);return l.uuid=t.uuid,l.userData=JSON.parse(t.userData||"{}"),l}static toJSON(t){const n=[],a=t.tracks,s={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let l=0,u=a.length;l!==u;++l)n.push(ki.toJSON(a[l]));return s}static CreateFromMorphTargetSequence(t,n,a,s){const l=n.length,u=[];for(let f=0;f<l;f++){let p=[],d=[];p.push((f+l-1)%l,f,(f+1)%l),d.push(0,1,0);const v=Db(p);p=Iv(p,1,v),d=Iv(d,1,v),!s&&p[0]===0&&(p.push(l),d.push(d[0])),u.push(new Dl(".morphTargetInfluences["+n[f].name+"]",p,d).scale(1/a))}return new this(t,-1,u)}static findByName(t,n){let a=t;if(!Array.isArray(t)){const s=t;a=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<a.length;s++)if(a[s].name===n)return a[s];return null}static CreateClipsFromMorphTargetSequences(t,n,a){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,p=t.length;f<p;f++){const d=t[f],v=d.name.match(l);if(v&&v.length>1){const _=v[1];let g=s[_];g||(s[_]=g=[]),g.push(d)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],n,a));return u}static parseAnimation(t,n){if(Jt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return ne("AnimationClip: No animation in JSONLoader data."),null;const a=function(_,g,x,y,T){if(x.length!==0){const M=[],S=[];Yx(x,M,S,y),M.length!==0&&T.push(new _(g,M,S))}},s=[],l=t.name||"default",u=t.fps||30,f=t.blendMode;let p=t.length||-1;const d=t.hierarchy||[];for(let _=0;_<d.length;_++){const g=d[_].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const x={};let y;for(y=0;y<g.length;y++)if(g[y].morphTargets)for(let T=0;T<g[y].morphTargets.length;T++)x[g[y].morphTargets[T]]=-1;for(const T in x){const M=[],S=[];for(let L=0;L!==g[y].morphTargets.length;++L){const w=g[y];M.push(w.time),S.push(w.morphTarget===T?1:0)}s.push(new Dl(".morphTargetInfluence["+T+"]",M,S))}p=x.length*u}else{const x=".bones["+n[_].name+"]";a(Ll,x+".position",g,"pos",s),a(lo,x+".quaternion",g,"rot",s),a(Ll,x+".scale",g,"scl",s)}}return s.length===0?null:new this(l,p,s,f)}resetDuration(){const t=this.tracks;let n=0;for(let a=0,s=t.length;a!==s;++a){const l=this.tracks[a];n=Math.max(n,l.times[l.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let a=0;a<this.tracks.length;a++)t.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,t,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function Fb(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dl;case"vector":case"vector2":case"vector3":case"vector4":return Ll;case"color":return jx;case"quaternion":return lo;case"bool":case"boolean":return fo;case"string":return ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Bb(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Fb(o.type);if(o.times===void 0){const n=[],a=[];Yx(o.keys,n,a,"value"),o.times=n,o.values=a}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const xl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Fv(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Fv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Fv(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class zb{constructor(t,n,a){const s=this;let l=!1,u=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(v){f++,l===!1&&s.onStart!==void 0&&s.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,s.onProgress!==void 0&&s.onProgress(v,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return d.push(v,_),this},this.removeHandler=function(v){const _=d.indexOf(v);return _!==-1&&d.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=d.length;_<g;_+=2){const x=d[_],y=d[_+1];if(x.global&&(x.lastIndex=0),x.test(v))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vb=new zb;class Jr{constructor(t){this.manager=t!==void 0?t:Vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const a=this;return new Promise(function(s,l){a.load(t,s,n,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ra={};class Hb extends Error{constructor(t,n){super(t),this.response=n}}class Gb extends Jr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,a,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=xl.get(`file:${t}`);if(l!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(l),this.manager.itemEnd(t)},0),l;if(Ra[t]!==void 0){Ra[t].push({onLoad:n,onProgress:a,onError:s});return}Ra[t]=[],Ra[t].push({onLoad:n,onProgress:a,onError:s});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const v=Ra[t],_=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=g?parseInt(g):0,y=x!==0;let T=0;const M=new ReadableStream({start(S){L();function L(){_.read().then(({done:w,value:D})=>{if(w)S.close();else{T+=D.byteLength;const z=new ProgressEvent("progress",{lengthComputable:y,loaded:T,total:x});for(let P=0,B=v.length;P<B;P++){const A=v[P];A.onProgress&&A.onProgress(z)}S.enqueue(D),L()}},w=>{S.error(w)})}}});return new Response(M)}else throw new Hb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(v=>new DOMParser().parseFromString(v,f));case"json":return d.json();default:if(f==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),g=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(g);return d.arrayBuffer().then(y=>x.decode(y))}}}).then(d=>{xl.add(`file:${t}`,d);const v=Ra[t];delete Ra[t];for(let _=0,g=v.length;_<g;_++){const x=v[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const v=Ra[t];if(v===void 0)throw this.manager.itemError(t),d;delete Ra[t];for(let _=0,g=v.length;_<g;_++){const x=v[_];x.onError&&x.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=new WeakMap;class kb extends Jr{constructor(t){super(t)}load(t,n,a,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=xl.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){n&&n(u),l.manager.itemEnd(t)},0);else{let _=qs.get(u);_===void 0&&(_=[],qs.set(u,_)),_.push({onLoad:n,onError:s})}return u}const f=Tl("img");function p(){v(),n&&n(this);const _=qs.get(this)||[];for(let g=0;g<_.length;g++){const x=_[g];x.onLoad&&x.onLoad(this)}qs.delete(this),l.manager.itemEnd(t)}function d(_){v(),s&&s(_),xl.remove(`image:${t}`);const g=qs.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onError&&y.onError(_)}qs.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),xl.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class Xb extends Jr{constructor(t){super(t)}load(t,n,a,s){const l=new On,u=new kb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},a,s),l}}class Ol extends Je{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Wb extends Ol{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Rd=new Qt,Bv=new Y,zv=new Y;class am{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jp,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Bv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bv),zv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(zv),n.updateMatrixWorld(),Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===bl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yu=new Y,Su=new Zn,Zi=new Y;class Zx extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yu,Su,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yu,Su,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(yu,Su,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yu,Su,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new Y,Vv=new he,Hv=new he;class Kn extends Zx{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,n){return this.getViewBounds(t,Vv,Hv),n.subVectors(Hv,Vv)}setViewOffset(t,n,a,s,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(_l*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*s/p,n-=u.offsetY*a/d,s*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class qb extends am{constructor(){super(new Kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=ro*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=t.distance||n.far;(a!==n.fov||s!==n.aspect||l!==n.far)&&(n.fov=a,n.aspect=s,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yb extends Ol{constructor(t,n,a=0,s=Math.PI/3,l=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=a,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new qb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class jb extends am{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gv extends Ol{constructor(t,n,a=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=s,this.shadow=new jb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class rm extends Zx{constructor(t=-1,n=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Zb extends am{constructor(){super(new rm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kx extends Ol{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Zb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Kb extends Ol{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qb{static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}const Ys=-90,js=1;class Jb extends Je{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kn(Ys,js,t,n);s.layers=this.layers,this.add(s);const l=new Kn(Ys,js,t,n);l.layers=this.layers,this.add(l);const u=new Kn(Ys,js,t,n);u.layers=this.layers,this.add(u);const f=new Kn(Ys,js,t,n);f.layers=this.layers,this.add(f);const p=new Kn(Ys,js,t,n);p.layers=this.layers,this.add(p);const d=new Kn(Ys,js,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,u,f,p]=n;for(const d of n)this.remove(d);if(t===Ji)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===bl)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,d,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(a,0,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,v),t.setRenderTarget(_,g,x),t.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class $b extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const sm="\\[\\]\\.:\\/",tT=new RegExp("["+sm+"]","g"),om="[^"+sm+"]",eT="[^"+sm.replace("\\.","")+"]",nT=/((?:WC+[\/:])*)/.source.replace("WC",om),iT=/(WCOD+)?/.source.replace("WCOD",eT),aT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",om),rT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",om),sT=new RegExp("^"+nT+iT+aT+rT+"$"),oT=["material","materials","bones","map"];class lT{constructor(t,n,a){const s=a||Ue.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();const a=this._targetGroup.nCachedObjects_,s=this._bindings[a];s!==void 0&&s.getValue(t,n)}setValue(t,n){const a=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=a.length;s!==l;++s)a[s].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].unbind()}}class Ue{constructor(t,n,a){this.path=n,this.parsedPath=a||Ue.parseTrackName(n),this.node=Ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,a){return t&&t.isAnimationObjectGroup?new Ue.Composite(t,n,a):new Ue(t,n,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tT,"")}static parseTrackName(t){const n=sT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=a.nodeName&&a.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=a.nodeName.substring(s+1);oT.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,s),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(n);if(a!==void 0)return a}if(t.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===n||f.uuid===n)return f;const p=a(f.children);if(p)return p}return null},s=a(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)t[n++]=a[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,a=n.objectName,s=n.propertyName;let l=n.propertyIndex;if(t||(t=Ue.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let v=0;v<t.length;v++)if(t[v].name===d){d=v;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(d!==void 0){if(t[d]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const u=t[s];if(u===void 0){const d=n.nodeName;ne("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let f=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?f=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[l]!==void 0&&(l=t.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=lT;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kv=new Qt;class cT{constructor(t,n,a=0,s=1/0){this.ray=new Vu(t,n),this.near=a,this.far=s,this.camera=null,this.layers=new jp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ne("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return kv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kv),this}intersectObject(t,n=!0,a=[]){return Up(t,this,a,n),a.sort(Xv),a}intersectObjects(t,n=!0,a=[]){for(let s=0,l=t.length;s<l;s++)Up(t[s],this,a,n);return a.sort(Xv),a}}function Xv(o,t){return o.distance-t.distance}function Up(o,t,n,a){let s=!0;if(o.layers.test(t.layers)&&o.raycast(t,n)===!1&&(s=!1),s===!0&&a===!0){const l=o.children;for(let u=0,f=l.length;u<f;u++)Up(l[u],t,n,!0)}}function Wv(o,t,n,a){const s=uT(a);switch(n){case Lx:return o*t;case Nx:return o*t/s.components*s.byteLength;case Hp:return o*t/s.components*s.byteLength;case io:return o*t*2/s.components*s.byteLength;case Gp:return o*t*2/s.components*s.byteLength;case Ux:return o*t*3/s.components*s.byteLength;case Ai:return o*t*4/s.components*s.byteLength;case kp:return o*t*4/s.components*s.byteLength;case wu:case Ru:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Cu:case Du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case tp:case ep:case ip:case ap:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case np:case rp:case sp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case op:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case lp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case cp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case up:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case fp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case hp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case pp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case mp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case gp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _p:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case xp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case yp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sp:case Mp:case Ep:return Math.ceil(o/4)*Math.ceil(t/4)*16;case bp:case Tp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ap:case wp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uT(o){switch(o){case mi:case wx:return{byteLength:1,components:1};case Ml:case Rx:case Ua:return{byteLength:2,components:1};case zp:case Vp:return{byteLength:2,components:4};case na:case Bp:case Gi:return{byteLength:4,components:1};case Cx:case Dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qx(){let o=null,t=!1,n=null,a=null;function s(l,u){n(l,u),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function fT(o){const t=new WeakMap;function n(f,p){const d=f.array,v=f.usage,_=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,v),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,d){const v=p.array,_=p.updateRanges;if(o.bindBuffer(d,f),_.length===0)o.bufferSubData(d,0,v);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],T=_[x];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++g,_[g]=T)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const T=_[x];o.bufferSubData(d,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=t.get(f);(!v||v.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:u}}var hT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ST=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,PT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GT="gl_FragColor = linearToOutputTexel( gl_FragColor );",kT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$T=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:hT,alphahash_pars_fragment:dT,alphamap_fragment:pT,alphamap_pars_fragment:mT,alphatest_fragment:gT,alphatest_pars_fragment:_T,aomap_fragment:vT,aomap_pars_fragment:xT,batching_pars_vertex:yT,batching_vertex:ST,begin_vertex:MT,beginnormal_vertex:ET,bsdfs:bT,iridescence_fragment:TT,bumpmap_pars_fragment:AT,clipping_planes_fragment:wT,clipping_planes_pars_fragment:RT,clipping_planes_pars_vertex:CT,clipping_planes_vertex:DT,color_fragment:LT,color_pars_fragment:UT,color_pars_vertex:NT,color_vertex:OT,common:PT,cube_uv_reflection_fragment:IT,defaultnormal_vertex:FT,displacementmap_pars_vertex:BT,displacementmap_vertex:zT,emissivemap_fragment:VT,emissivemap_pars_fragment:HT,colorspace_fragment:GT,colorspace_pars_fragment:kT,envmap_fragment:XT,envmap_common_pars_fragment:WT,envmap_pars_fragment:qT,envmap_pars_vertex:YT,envmap_physical_pars_fragment:a1,envmap_vertex:jT,fog_vertex:ZT,fog_pars_vertex:KT,fog_fragment:QT,fog_pars_fragment:JT,gradientmap_pars_fragment:$T,lightmap_pars_fragment:t1,lights_lambert_fragment:e1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:r1,lights_toon_pars_fragment:s1,lights_phong_fragment:o1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:f1,lights_fragment_maps:h1,lights_fragment_end:d1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:_1,map_fragment:v1,map_pars_fragment:x1,map_particle_fragment:y1,map_particle_pars_fragment:S1,metalnessmap_fragment:M1,metalnessmap_pars_fragment:E1,morphinstance_vertex:b1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:w1,morphtarget_vertex:R1,normal_fragment_begin:C1,normal_fragment_maps:D1,normal_pars_fragment:L1,normal_pars_vertex:U1,normal_vertex:N1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:B1,opaque_fragment:z1,packing:V1,premultiplied_alpha_fragment:H1,project_vertex:G1,dithering_fragment:k1,dithering_pars_fragment:X1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:j1,shadowmap_vertex:Z1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:$1,skinnormal_vertex:tA,specularmap_fragment:eA,specularmap_pars_fragment:nA,tonemapping_fragment:iA,tonemapping_pars_fragment:aA,transmission_fragment:rA,transmission_pars_fragment:sA,uv_pars_fragment:oA,uv_pars_vertex:lA,uv_vertex:cA,worldpos_vertex:uA,background_vert:fA,background_frag:hA,backgroundCube_vert:dA,backgroundCube_frag:pA,cube_vert:mA,cube_frag:gA,depth_vert:_A,depth_frag:vA,distance_vert:xA,distance_frag:yA,equirect_vert:SA,equirect_frag:MA,linedashed_vert:EA,linedashed_frag:bA,meshbasic_vert:TA,meshbasic_frag:AA,meshlambert_vert:wA,meshlambert_frag:RA,meshmatcap_vert:CA,meshmatcap_frag:DA,meshnormal_vert:LA,meshnormal_frag:UA,meshphong_vert:NA,meshphong_frag:OA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:FA,meshtoon_frag:BA,points_vert:zA,points_frag:VA,shadow_vert:HA,shadow_frag:GA,sprite_vert:kA,sprite_frag:XA},Ut={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Qi={basic:{uniforms:qn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:qn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:qn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:qn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:qn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ae(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:qn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:qn([Ut.points,Ut.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:qn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:qn([Ut.common,Ut.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:qn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:qn([Ut.sprite,Ut.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:qn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:qn([Ut.lights,Ut.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Qi.physical={uniforms:qn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Mu={r:0,b:0,g:0},Xr=new En,WA=new Qt;function qA(o,t,n,a,s,l){const u=new ae(0);let f=s===!0?0:1,p,d,v=null,_=0,g=null;function x(L){let w=L.isScene===!0?L.background:null;if(w&&w.isTexture){const D=L.backgroundBlurriness>0;w=t.get(w,D)}return w}function y(L){let w=!1;const D=x(L);D===null?M(u,f):D&&D.isColor&&(M(D,1),w=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(L,w){const D=x(w);D&&(D.isCubeTexture||D.mapping===Bu)?(d===void 0&&(d=new Rn(new _r(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:oo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Xr.copy(w.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(WA.makeRotationFromEuler(Xr)),d.material.toneMapped=ge.getTransfer(D.colorSpace)!==He,(v!==D||_!==D.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,v=D,_=D.version,g=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Rn(new Hu(2,2),new ia({name:"BackgroundMaterial",uniforms:oo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=ge.getTransfer(D.colorSpace)!==He,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||_!==D.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,v=D,_=D.version,g=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function M(L,w){L.getRGB(Mu,qx(o)),n.buffers.color.setClear(Mu.r,Mu.g,Mu.b,w,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,w=1){u.set(L),f=w,M(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,M(u,f)},render:y,addToRenderList:T,dispose:S}}function YA(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=g(null);let l=s,u=!1;function f(F,W,J,st,Q){let N=!1;const V=_(F,st,J,W);l!==V&&(l=V,d(l.object)),N=x(F,st,J,Q),N&&y(F,st,J,Q),Q!==null&&t.update(Q,o.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,D(F,W,J,st),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return o.createVertexArray()}function d(F){return o.bindVertexArray(F)}function v(F){return o.deleteVertexArray(F)}function _(F,W,J,st){const Q=st.wireframe===!0;let N=a[W.id];N===void 0&&(N={},a[W.id]=N);const V=F.isInstancedMesh===!0?F.id:0;let lt=N[V];lt===void 0&&(lt={},N[V]=lt);let ft=lt[J.id];ft===void 0&&(ft={},lt[J.id]=ft);let St=ft[Q];return St===void 0&&(St=g(p()),ft[Q]=St),St}function g(F){const W=[],J=[],st=[];for(let Q=0;Q<n;Q++)W[Q]=0,J[Q]=0,st[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:st,object:F,attributes:{},index:null}}function x(F,W,J,st){const Q=l.attributes,N=W.attributes;let V=0;const lt=J.getAttributes();for(const ft in lt)if(lt[ft].location>=0){const I=Q[ft];let j=N[ft];if(j===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;V++}return l.attributesNum!==V||l.index!==st}function y(F,W,J,st){const Q={},N=W.attributes;let V=0;const lt=J.getAttributes();for(const ft in lt)if(lt[ft].location>=0){let I=N[ft];I===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(I=F.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),Q[ft]=j,V++}l.attributes=Q,l.attributesNum=V,l.index=st}function T(){const F=l.newAttributes;for(let W=0,J=F.length;W<J;W++)F[W]=0}function M(F){S(F,0)}function S(F,W){const J=l.newAttributes,st=l.enabledAttributes,Q=l.attributeDivisors;J[F]=1,st[F]===0&&(o.enableVertexAttribArray(F),st[F]=1),Q[F]!==W&&(o.vertexAttribDivisor(F,W),Q[F]=W)}function L(){const F=l.newAttributes,W=l.enabledAttributes;for(let J=0,st=W.length;J<st;J++)W[J]!==F[J]&&(o.disableVertexAttribArray(J),W[J]=0)}function w(F,W,J,st,Q,N,V){V===!0?o.vertexAttribIPointer(F,W,J,Q,N):o.vertexAttribPointer(F,W,J,st,Q,N)}function D(F,W,J,st){T();const Q=st.attributes,N=J.getAttributes(),V=W.defaultAttributeValues;for(const lt in N){const ft=N[lt];if(ft.location>=0){let St=Q[lt];if(St===void 0&&(lt==="instanceMatrix"&&F.instanceMatrix&&(St=F.instanceMatrix),lt==="instanceColor"&&F.instanceColor&&(St=F.instanceColor)),St!==void 0){const I=St.normalized,j=St.itemSize,it=t.get(St);if(it===void 0)continue;const yt=it.buffer,Dt=it.type,tt=it.bytesPerElement,gt=Dt===o.INT||Dt===o.UNSIGNED_INT||St.gpuType===Bp;if(St.isInterleavedBufferAttribute){const Mt=St.data,Ft=Mt.stride,Yt=St.offset;if(Mt.isInstancedInterleavedBuffer){for(let $t=0;$t<ft.locationSize;$t++)S(ft.location+$t,Mt.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let $t=0;$t<ft.locationSize;$t++)M(ft.location+$t);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let $t=0;$t<ft.locationSize;$t++)w(ft.location+$t,j/ft.locationSize,Dt,I,Ft*tt,(Yt+j/ft.locationSize*$t)*tt,gt)}else{if(St.isInstancedBufferAttribute){for(let Mt=0;Mt<ft.locationSize;Mt++)S(ft.location+Mt,St.meshPerAttribute);F.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Mt=0;Mt<ft.locationSize;Mt++)M(ft.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Mt=0;Mt<ft.locationSize;Mt++)w(ft.location+Mt,j/ft.locationSize,Dt,I,j*tt,j/ft.locationSize*Mt*tt,gt)}}else if(V!==void 0){const I=V[lt];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(ft.location,I);break;case 3:o.vertexAttrib3fv(ft.location,I);break;case 4:o.vertexAttrib4fv(ft.location,I);break;default:o.vertexAttrib1fv(ft.location,I)}}}}L()}function z(){U();for(const F in a){const W=a[F];for(const J in W){const st=W[J];for(const Q in st){const N=st[Q];for(const V in N)v(N[V].object),delete N[V];delete st[Q]}}delete a[F]}}function P(F){if(a[F.id]===void 0)return;const W=a[F.id];for(const J in W){const st=W[J];for(const Q in st){const N=st[Q];for(const V in N)v(N[V].object),delete N[V];delete st[Q]}}delete a[F.id]}function B(F){for(const W in a){const J=a[W];for(const st in J){const Q=J[st];if(Q[F.id]===void 0)continue;const N=Q[F.id];for(const V in N)v(N[V].object),delete N[V];delete Q[F.id]}}}function A(F){for(const W in a){const J=a[W],st=F.isInstancedMesh===!0?F.id:0,Q=J[st];if(Q!==void 0){for(const N in Q){const V=Q[N];for(const lt in V)v(V[lt].object),delete V[lt];delete Q[N]}delete J[st],Object.keys(J).length===0&&delete a[W]}}}function U(){ot(),u=!0,l!==s&&(l=s,d(l.object))}function ot(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:U,resetDefaultState:ot,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:M,disableUnusedAttributes:L}}function jA(o,t,n){let a;function s(d){a=d}function l(d,v){o.drawArrays(a,d,v),n.update(v,a,1)}function u(d,v,_){_!==0&&(o.drawArraysInstanced(a,d,v,_),n.update(v,a,_))}function f(d,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,v,0,_);let x=0;for(let y=0;y<_;y++)x+=v[y];n.update(x,a,1)}function p(d,v,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<d.length;y++)u(d[y],v[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,v,0,g,0,_);let y=0;for(let T=0;T<_;T++)y+=v[T]*g[T];n.update(y,a,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function ZA(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(B){return!(B!==Ai&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const A=B===Ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==mi&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Gi&&!A)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const v=p(d);v!==d&&(Jt("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const _=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:D,maxSamples:z,samples:P}}function KA(o){const t=this;let n=null,a=0,s=!1,l=!1;const u=new dr,f=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||a!==0||s;return s=g,a=_.length,x},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){n=v(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,S=o.get(_);if(!s||y===null||y.length===0||l&&!M)l?v(null):d();else{const L=l?0:a,w=L*4;let D=S.clippingState||null;p.value=D,D=v(y,g,w,x);for(let z=0;z!==w;++z)D[z]=n[z];S.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function v(_,g,x,y){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=p.value,y!==!0||M===null){const S=x+T*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(M===null||M.length<S)&&(M=new Float32Array(S));for(let w=0,D=x;w!==T;++w,D+=4)u.copy(_[w]).applyMatrix4(L,f),u.normal.toArray(M,D),M[D+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}const gr=4,qv=[.125,.215,.35,.446,.526,.582],Yr=20,QA=256,fl=new rm,Yv=new ae;let Cd=null,Dd=0,Ld=0,Ud=!1;const JA=new Y;class jv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,l={}){const{size:u=256,position:f=JA}=l;Cd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cd,Dd,Ld),this._renderer.xr.enabled=Ud,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Kr||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ua,format:Ai,colorSpace:ao,depthBuffer:!1},s=Zv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$A(l)),this._blurMaterial=ew(l,t,n),this._ggxMaterial=tw(l,t,n)}return s}_compileMaterial(t){const n=new Rn(new Pn,t);this._renderer.compile(n,fl)}_sceneToCubeUV(t,n,a,s,l){const p=new Kn(90,1,n,a),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Yv),_.toneMapping=$i,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new _r,new Kp({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let S=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,S=!0):(M.color.copy(Yv),S=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[w],l.y,l.z)):D===1?(p.up.set(0,0,d[w]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[w],l.z)):(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[w]));const z=this._cubeSize;Zs(s,D*z,w>2?z:0,z,z),_.setRenderTarget(s),S&&_.render(T,p),_.render(t,p)}_.toneMapping=x,_.autoClear=g,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Kr||t.mapping===no;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Zs(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,fl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-v*v),g=0+d*1.25,x=_*g,{_lodMax:y}=this,T=this._sizeLods[a],M=3*T*(a>y-gr?a-y+gr:0),S=4*(this._cubeSize-T);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=y-n,Zs(l,M,S,3*T,2*T),s.setRenderTarget(l),s.render(f,fl),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=y-a,Zs(t,M,S,3*T,2*T),s.setRenderTarget(t),s.render(f,fl)}_blur(t,n,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,s,"latitudinal",l),this._halfBlur(u,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[s];_.material=d;const g=d.uniforms,x=this._sizeLods[a]-1,y=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Yr-1),T=l/y,M=isFinite(l)?1+Math.floor(v*T):Yr;M>Yr&&Jt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Yr}`);const S=[];let L=0;for(let B=0;B<Yr;++B){const A=B/T,U=Math.exp(-A*A/2);S.push(U),B===0?L+=U:B<M&&(L+=2*U)}for(let B=0;B<S.length;B++)S[B]=S[B]/L;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:w}=this;g.dTheta.value=y,g.mipInt.value=w-a;const D=this._sizeLods[s],z=3*D*(s>w-gr?s-w+gr:0),P=4*(this._cubeSize-D);Zs(n,z,P,3*D,2*D),p.setRenderTarget(n),p.render(_,fl)}}function $A(o){const t=[],n=[],a=[];let s=o;const l=o-gr+1+qv.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let p=1/f;u>o-gr?p=qv[u-o+gr-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),v=-d,_=1+d,g=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,y=6,T=3,M=2,S=1,L=new Float32Array(T*y*x),w=new Float32Array(M*y*x),D=new Float32Array(S*y*x);for(let P=0;P<x;P++){const B=P%3*2/3-1,A=P>2?0:-1,U=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];L.set(U,T*y*P),w.set(g,M*y*P);const ot=[P,P,P,P,P,P];D.set(ot,S*y*P)}const z=new Pn;z.setAttribute("position",new ea(L,T)),z.setAttribute("uv",new ea(w,M)),z.setAttribute("faceIndex",new ea(D,S)),a.push(new Rn(z,null)),s>gr&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Zv(o,t,n){const a=new ta(o,t,n);return a.texture.mapping=Bu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zs(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function tw(o,t,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function ew(o,t,n){const a=new Float32Array(Yr),s=new Y(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Kv(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Qv(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jx extends ta{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new Vx(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _r(5,5,5),l=new ia({name:"CubemapFromEquirect",uniforms:oo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ii,blending:Da});l.uniforms.tEquirect.value=n;const u=new Rn(s,l),f=n.minFilter;return n.minFilter===jr&&(n.minFilter=zn),new Jb(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,s);t.setRenderTarget(l)}}function nw(o){let t=new WeakMap,n=new WeakMap,a=null;function s(g,x=!1){return g==null?null:x?u(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===Au||x===td)if(t.has(g)){const y=t.get(g).texture;return f(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const T=new Jx(y.height);return T.fromEquirectangularTexture(o,g),t.set(g,T),g.addEventListener("dispose",d),f(T.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,y=x===Au||x===td,T=x===Kr||x===no;if(y||T){let M=n.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return a===null&&(a=new jv(o)),M=y?a.fromEquirectangular(g,M):a.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const L=g.image;return y&&L&&L.height>0||T&&L&&p(L)?(a===null&&(a=new jv(o)),M=y?a.fromEquirectangular(g):a.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function f(g,x){return x===Au?g.mapping=Kr:x===td&&(g.mapping=no),g}function p(g){let x=0;const y=6;for(let T=0;T<y;T++)g[T]!==void 0&&x++;return x===y}function d(g){const x=g.target;x.removeEventListener("dispose",d);const y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const y=n.get(x);y!==void 0&&(n.delete(x),y.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:_}}function iw(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=o.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Ou("WebGLRenderer: "+a+" extension not supported."),s}}}function aw(o,t,n,a){const s={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",u),delete s[g.id];const x=l.get(g);x&&(t.remove(x),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(_,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,n.memory.geometries++),g}function p(_){const g=_.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function d(_){const g=[],x=_.index,y=_.attributes.position;let T=0;if(y===void 0)return;if(x!==null){const L=x.array;T=x.version;for(let w=0,D=L.length;w<D;w+=3){const z=L[w+0],P=L[w+1],B=L[w+2];g.push(z,P,P,B,B,z)}}else{const L=y.array;T=y.version;for(let w=0,D=L.length/3-1;w<D;w+=3){const z=w+0,P=w+1,B=w+2;g.push(z,P,P,B,B,z)}}const M=new(y.count>=65535?Fx:Zp)(g,1);M.version=T;const S=l.get(_);S&&t.remove(S),l.set(_,M)}function v(_){const g=l.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&d(_)}else d(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function rw(o,t,n){let a;function s(g){a=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function p(g,x){o.drawElements(a,x,l,g*u),n.update(x,a,1)}function d(g,x,y){y!==0&&(o.drawElementsInstanced(a,x,l,g*u,y),n.update(x,a,y))}function v(g,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,g,0,y);let M=0;for(let S=0;S<y;S++)M+=x[S];n.update(M,a,1)}function _(g,x,y,T){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)d(g[S]/u,x[S],T[S]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,l,g,0,T,0,y);let S=0;for(let L=0;L<y;L++)S+=x[L]*T[L];n.update(S,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function sw(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:ne("WebGLInfo: Unknown draw mode:",u);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function ow(o,t,n){const a=new WeakMap,s=new Fe;function l(u,f,p){const d=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=a.get(f);if(g===void 0||g.count!==_){let ot=function(){A.dispose(),a.delete(f),f.removeEventListener("dispose",ot)};var x=ot;g!==void 0&&g.texture.dispose();const y=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let D=0;y===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let z=f.attributes.position.count*D,P=1;z>t.maxTextureSize&&(P=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const B=new Float32Array(z*P*4*_),A=new Px(B,z,P,_);A.type=Gi,A.needsUpdate=!0;const U=D*4;for(let F=0;F<_;F++){const W=S[F],J=L[F],st=w[F],Q=z*P*4*F;for(let N=0;N<W.count;N++){const V=N*U;y===!0&&(s.fromBufferAttribute(W,N),B[Q+V+0]=s.x,B[Q+V+1]=s.y,B[Q+V+2]=s.z,B[Q+V+3]=0),T===!0&&(s.fromBufferAttribute(J,N),B[Q+V+4]=s.x,B[Q+V+5]=s.y,B[Q+V+6]=s.z,B[Q+V+7]=0),M===!0&&(s.fromBufferAttribute(st,N),B[Q+V+8]=s.x,B[Q+V+9]=s.y,B[Q+V+10]=s.z,B[Q+V+11]=st.itemSize===4?s.w:1)}}g={count:_,texture:A,size:new he(z,P)},a.set(f,g),f.addEventListener("dispose",ot)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let y=0;for(let M=0;M<d.length;M++)y+=d[M];const T=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function lw(o,t,n,a,s){let l=new WeakMap;function u(d){const v=s.render.frame,_=d.geometry,g=t.get(d,_);if(l.get(g)!==v&&(t.update(g),l.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==v&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,v))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==v&&(x.update(),l.set(x,v))}return g}function f(){l=new WeakMap}function p(d){const v=d.target;v.removeEventListener("dispose",p),a.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:u,dispose:f}}const cw={[xx]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[Sx]:"CINEON_TONE_MAPPING",[Mx]:"ACES_FILMIC_TONE_MAPPING",[bx]:"AGX_TONE_MAPPING",[Tx]:"NEUTRAL_TONE_MAPPING",[Ex]:"CUSTOM_TONE_MAPPING"};function uw(o,t,n,a,s){const l=new ta(t,n,{type:o,depthBuffer:a,stencilBuffer:s}),u=new ta(t,n,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),f=new Pn;f.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ke([0,2,0,0,2,0],2));const p=new Ab({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Rn(f,p),v=new rm(-1,1,1,-1,0,1);let _=null,g=null,x=!1,y,T=null,M=[],S=!1;this.setSize=function(L,w){l.setSize(L,w),u.setSize(L,w);for(let D=0;D<M.length;D++){const z=M[D];z.setSize&&z.setSize(L,w)}},this.setEffects=function(L){M=L,S=M.length>0&&M[0].isRenderPass===!0;const w=l.width,D=l.height;for(let z=0;z<M.length;z++){const P=M[z];P.setSize&&P.setSize(w,D)}},this.begin=function(L,w){if(x||L.toneMapping===$i&&M.length===0)return!1;if(T=w,w!==null){const D=w.width,z=w.height;(l.width!==D||l.height!==z)&&this.setSize(D,z)}return S===!1&&L.setRenderTarget(l),y=L.toneMapping,L.toneMapping=$i,!0},this.hasRenderPass=function(){return S},this.end=function(L,w){L.toneMapping=y,x=!0;let D=l,z=u;for(let P=0;P<M.length;P++){const B=M[P];if(B.enabled!==!1&&(B.render(L,z,D,w),B.needsSwap!==!1)){const A=D;D=z,z=A}}if(_!==L.outputColorSpace||g!==L.toneMapping){_=L.outputColorSpace,g=L.toneMapping,p.defines={},ge.getTransfer(_)===He&&(p.defines.SRGB_TRANSFER="");const P=cw[g];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(T),L.render(d,v),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const $x=new On,Np=new Al(1,1),ty=new Px,ey=new IE,ny=new Vx,Jv=[],$v=[],tx=new Float32Array(16),ex=new Float32Array(9),nx=new Float32Array(4);function po(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=Jv[s];if(l===void 0&&(l=new Float32Array(s),Jv[s]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,o[u].toArray(l,f)}return l}function bn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Tn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function ku(o,t){let n=$v[t];n===void 0&&(n=new Int32Array(t),$v[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function fw(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function hw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;o.uniform2fv(this.addr,t),Tn(n,t)}}function dw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bn(n,t))return;o.uniform3fv(this.addr,t),Tn(n,t)}}function pw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;o.uniform4fv(this.addr,t),Tn(n,t)}}function mw(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(n,t)}else{if(bn(n,a))return;nx.set(a),o.uniformMatrix2fv(this.addr,!1,nx),Tn(n,a)}}function gw(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(n,t)}else{if(bn(n,a))return;ex.set(a),o.uniformMatrix3fv(this.addr,!1,ex),Tn(n,a)}}function _w(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(n,t)}else{if(bn(n,a))return;tx.set(a),o.uniformMatrix4fv(this.addr,!1,tx),Tn(n,a)}}function vw(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function xw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;o.uniform2iv(this.addr,t),Tn(n,t)}}function yw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;o.uniform3iv(this.addr,t),Tn(n,t)}}function Sw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;o.uniform4iv(this.addr,t),Tn(n,t)}}function Mw(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function Ew(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;o.uniform2uiv(this.addr,t),Tn(n,t)}}function bw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;o.uniform3uiv(this.addr,t),Tn(n,t)}}function Tw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;o.uniform4uiv(this.addr,t),Tn(n,t)}}function Aw(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Np.compareFunction=n.isReversedDepthBuffer()?Wp:Xp,l=Np):l=$x,n.setTexture2D(t||l,s)}function ww(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||ey,s)}function Rw(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||ny,s)}function Cw(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||ty,s)}function Dw(o){switch(o){case 5126:return fw;case 35664:return hw;case 35665:return dw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return vw;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return bw;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Cw}}function Lw(o,t){o.uniform1fv(this.addr,t)}function Uw(o,t){const n=po(t,this.size,2);o.uniform2fv(this.addr,n)}function Nw(o,t){const n=po(t,this.size,3);o.uniform3fv(this.addr,n)}function Ow(o,t){const n=po(t,this.size,4);o.uniform4fv(this.addr,n)}function Pw(o,t){const n=po(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Iw(o,t){const n=po(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Fw(o,t){const n=po(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Bw(o,t){o.uniform1iv(this.addr,t)}function zw(o,t){o.uniform2iv(this.addr,t)}function Vw(o,t){o.uniform3iv(this.addr,t)}function Hw(o,t){o.uniform4iv(this.addr,t)}function Gw(o,t){o.uniform1uiv(this.addr,t)}function kw(o,t){o.uniform2uiv(this.addr,t)}function Xw(o,t){o.uniform3uiv(this.addr,t)}function Ww(o,t){o.uniform4uiv(this.addr,t)}function qw(o,t,n){const a=this.cache,s=t.length,l=ku(n,s);bn(a,l)||(o.uniform1iv(this.addr,l),Tn(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Np:u=$x;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||u,l[f])}function Yw(o,t,n){const a=this.cache,s=t.length,l=ku(n,s);bn(a,l)||(o.uniform1iv(this.addr,l),Tn(a,l));for(let u=0;u!==s;++u)n.setTexture3D(t[u]||ey,l[u])}function jw(o,t,n){const a=this.cache,s=t.length,l=ku(n,s);bn(a,l)||(o.uniform1iv(this.addr,l),Tn(a,l));for(let u=0;u!==s;++u)n.setTextureCube(t[u]||ny,l[u])}function Zw(o,t,n){const a=this.cache,s=t.length,l=ku(n,s);bn(a,l)||(o.uniform1iv(this.addr,l),Tn(a,l));for(let u=0;u!==s;++u)n.setTexture2DArray(t[u]||ty,l[u])}function Kw(o){switch(o){case 5126:return Lw;case 35664:return Uw;case 35665:return Nw;case 35666:return Ow;case 35674:return Pw;case 35675:return Iw;case 35676:return Fw;case 5124:case 35670:return Bw;case 35667:case 35671:return zw;case 35668:case 35672:return Vw;case 35669:case 35673:return Hw;case 5125:return Gw;case 36294:return kw;case 36295:return Xw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Qw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Dw(n.type)}}class Jw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kw(n.type)}}class $w{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function ix(o,t){o.seq.push(t),o.map[t.id]=t}function tR(o,t,n){const a=o.name,s=a.length;for(Nd.lastIndex=0;;){const l=Nd.exec(a),u=Nd.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===s){ix(n,d===void 0?new Qw(f,o,t):new Jw(f,o,t));break}else{let _=n.map[f];_===void 0&&(_=new $w(f),ix(n,_)),n=_}}}class Lu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);tR(f,p,this)}const s=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const u=t[s];u.id in n&&a.push(u)}return a}}function ax(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const eR=37297;let nR=0;function iR(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const rx=new fe;function aR(o){ge._getMatrix(rx,ge.workingColorSpace,o);const t=`mat3( ${rx.elements.map(n=>n.toFixed(4))} )`;switch(ge.getTransfer(o)){case Nu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function sx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+iR(o.getShaderSource(t),f)}else return l}function rR(o,t){const n=aR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const sR={[xx]:"Linear",[yx]:"Reinhard",[Sx]:"Cineon",[Mx]:"ACESFilmic",[bx]:"AgX",[Tx]:"Neutral",[Ex]:"Custom"};function oR(o,t){const n=sR[t];return n===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eu=new Y;function lR(){ge.getLuminanceCoefficients(Eu);const o=Eu.x.toFixed(4),t=Eu.y.toFixed(4),n=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function uR(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function fR(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return n}function gl(o){return o!==""}function ox(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(o){return o.replace(hR,pR)}const dR=new Map;function pR(o,t){let n=_e[t];if(n===void 0){const a=dR.get(t);if(a!==void 0)n=_e[a],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Op(n)}const mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(o){return o.replace(mR,gR)}function gR(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function ux(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const _R={[Tu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function vR(o){return _R[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xR={[Kr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function yR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":xR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const SR={[no]:"ENVMAP_MODE_REFRACTION"};function MR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":SR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ER={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[QM]:"ENVMAP_BLENDING_MIX",[JM]:"ENVMAP_BLENDING_ADD"};function bR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":ER[o.combine]||"ENVMAP_BLENDING_NONE"}function TR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function AR(o,t,n,a){const s=o.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=vR(n),d=yR(n),v=MR(n),_=bR(n),g=TR(n),x=cR(n),y=uR(l),T=s.createProgram();let M,S,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gl).join(`
`),S.length>0&&(S+=`
`)):(M=[ux(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),S=[ux(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?_e.tonemapping_pars_fragment:"",n.toneMapping!==$i?oR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,rR("linearToOutputTexel",n.outputColorSpace),lR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gl).join(`
`)),u=Op(u),u=ox(u,n),u=lx(u,n),f=Op(f),f=ox(f,n),f=lx(f,n),u=cx(u),f=cx(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=L+M+u,D=L+S+f,z=ax(s,s.VERTEX_SHADER,w),P=ax(s,s.FRAGMENT_SHADER,D);s.attachShader(T,z),s.attachShader(T,P),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function B(F){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(T)||"",J=s.getShaderInfoLog(z)||"",st=s.getShaderInfoLog(P)||"",Q=W.trim(),N=J.trim(),V=st.trim();let lt=!0,ft=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,z,P);else{const St=sx(s,z,"vertex"),I=sx(s,P,"fragment");ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Q+`
`+St+`
`+I)}else Q!==""?Jt("WebGLProgram: Program Info Log:",Q):(N===""||V==="")&&(ft=!1);ft&&(F.diagnostics={runnable:lt,programLog:Q,vertexShader:{log:N,prefix:M},fragmentShader:{log:V,prefix:S}})}s.deleteShader(z),s.deleteShader(P),A=new Lu(s,T),U=fR(s,T)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let ot=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=s.getProgramParameter(T,eR)),ot},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=P,this}let wR=0;class RR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new CR(t),n.set(t,a)),a}}class CR{constructor(t){this.id=wR++,this.code=t,this.usedTimes=0}}function DR(o,t,n,a,s,l){const u=new jp,f=new RR,p=new Set,d=[],v=new Map,_=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return p.add(A),A===0?"uv":`uv${A}`}function T(A,U,ot,F,W){const J=F.fog,st=W.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,N=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,V=t.get(A.envMap||Q,N),lt=V&&V.mapping===Bu?V.image.height:null,ft=x[A.type];A.precision!==null&&(g=a.getMaxPrecision(A.precision),g!==A.precision&&Jt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const St=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,I=St!==void 0?St.length:0;let j=0;st.morphAttributes.position!==void 0&&(j=1),st.morphAttributes.normal!==void 0&&(j=2),st.morphAttributes.color!==void 0&&(j=3);let it,yt,Dt,tt;if(ft){const Re=Qi[ft];it=Re.vertexShader,yt=Re.fragmentShader}else it=A.vertexShader,yt=A.fragmentShader,f.update(A),Dt=f.getVertexShaderID(A),tt=f.getFragmentShaderID(A);const gt=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Ft=W.isInstancedMesh===!0,Yt=W.isBatchedMesh===!0,$t=!!A.map,qe=!!A.matcap,ve=!!V,Se=!!A.aoMap,Ne=!!A.lightMap,ce=!!A.bumpMap,an=!!A.normalMap,G=!!A.displacementMap,$e=!!A.emissiveMap,we=!!A.metalnessMap,Pe=!!A.roughnessMap,Wt=A.anisotropy>0,O=A.clearcoat>0,b=A.dispersion>0,Z=A.iridescence>0,mt=A.sheen>0,xt=A.transmission>0,dt=Wt&&!!A.anisotropyMap,kt=O&&!!A.clearcoatMap,Rt=O&&!!A.clearcoatNormalMap,Zt=O&&!!A.clearcoatRoughnessMap,ee=Z&&!!A.iridescenceMap,Tt=Z&&!!A.iridescenceThicknessMap,Et=mt&&!!A.sheenColorMap,Ot=mt&&!!A.sheenRoughnessMap,Nt=!!A.specularMap,Pt=!!A.specularColorMap,de=!!A.specularIntensityMap,q=xt&&!!A.transmissionMap,wt=xt&&!!A.thicknessMap,At=!!A.gradientMap,It=!!A.alphaMap,bt=A.alphaTest>0,ht=!!A.alphaHash,zt=!!A.extensions;let re=$i;A.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(re=o.toneMapping);const Be={shaderID:ft,shaderType:A.type,shaderName:A.name,vertexShader:it,fragmentShader:yt,defines:A.defines,customVertexShaderID:Dt,customFragmentShaderID:tt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Yt,batchingColor:Yt&&W._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&W.instanceColor!==null,instancingMorph:Ft&&W.morphTexture!==null,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ao,alphaToCoverage:!!A.alphaToCoverage,map:$t,matcap:qe,envMap:ve,envMapMode:ve&&V.mapping,envMapCubeUVHeight:lt,aoMap:Se,lightMap:Ne,bumpMap:ce,normalMap:an,displacementMap:G,emissiveMap:$e,normalMapObjectSpace:an&&A.normalMapType===iE,normalMapTangentSpace:an&&A.normalMapType===zu,metalnessMap:we,roughnessMap:Pe,anisotropy:Wt,anisotropyMap:dt,clearcoat:O,clearcoatMap:kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Zt,dispersion:b,iridescence:Z,iridescenceMap:ee,iridescenceThicknessMap:Tt,sheen:mt,sheenColorMap:Et,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:Pt,specularIntensityMap:de,transmission:xt,transmissionMap:q,thicknessMap:wt,gradientMap:At,opaque:A.transparent===!1&&A.blending===$s&&A.alphaToCoverage===!1,alphaMap:It,alphaTest:bt,alphaHash:ht,combine:A.combine,mapUv:$t&&y(A.map.channel),aoMapUv:Se&&y(A.aoMap.channel),lightMapUv:Ne&&y(A.lightMap.channel),bumpMapUv:ce&&y(A.bumpMap.channel),normalMapUv:an&&y(A.normalMap.channel),displacementMapUv:G&&y(A.displacementMap.channel),emissiveMapUv:$e&&y(A.emissiveMap.channel),metalnessMapUv:we&&y(A.metalnessMap.channel),roughnessMapUv:Pe&&y(A.roughnessMap.channel),anisotropyMapUv:dt&&y(A.anisotropyMap.channel),clearcoatMapUv:kt&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&y(A.sheenRoughnessMap.channel),specularMapUv:Nt&&y(A.specularMap.channel),specularColorMapUv:Pt&&y(A.specularColorMap.channel),specularIntensityMapUv:de&&y(A.specularIntensityMap.channel),transmissionMapUv:q&&y(A.transmissionMap.channel),thicknessMapUv:wt&&y(A.thicknessMap.channel),alphaMapUv:It&&y(A.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(an||Wt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!st.attributes.uv&&($t||It),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||st.attributes.normal===void 0&&an===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Mt,skinning:W.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&ot.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:$t&&A.map.isVideoTexture===!0&&ge.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:$e&&A.emissiveMap.isVideoTexture===!0&&ge.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ca,flipSided:A.side===ii,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:zt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&A.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function M(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ot in A.defines)U.push(ot),U.push(A.defines[ot]);return A.isRawShaderMaterial===!1&&(S(U,A),L(U,A),U.push(o.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function S(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function L(A,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),A.push(u.mask)}function w(A){const U=x[A.type];let ot;if(U){const F=Qi[U];ot=Eb.clone(F.uniforms)}else ot=A.uniforms;return ot}function D(A,U){let ot=v.get(U);return ot!==void 0?++ot.usedTimes:(ot=new AR(o,U,A,s),d.push(ot),v.set(U,ot)),ot}function z(A){if(--A.usedTimes===0){const U=d.indexOf(A);d[U]=d[d.length-1],d.pop(),v.delete(A.cacheKey),A.destroy()}}function P(A){f.remove(A)}function B(){f.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:w,acquireProgram:D,releaseProgram:z,releaseShaderCache:P,programs:d,dispose:B}}function LR(){let o=new WeakMap;function t(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function s(u,f,p){o.get(u)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function UR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function fx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function hx(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,y,T,M,S){let L=o[t];return L===void 0?(L={id:g.id,object:g,geometry:x,material:y,materialVariant:u(g),groupOrder:T,renderOrder:g.renderOrder,z:M,group:S},o[t]=L):(L.id=g.id,L.object=g,L.geometry=x,L.material=y,L.materialVariant=u(g),L.groupOrder=T,L.renderOrder=g.renderOrder,L.z=M,L.group=S),t++,L}function p(g,x,y,T,M,S){const L=f(g,x,y,T,M,S);y.transmission>0?a.push(L):y.transparent===!0?s.push(L):n.push(L)}function d(g,x,y,T,M,S){const L=f(g,x,y,T,M,S);y.transmission>0?a.unshift(L):y.transparent===!0?s.unshift(L):n.unshift(L)}function v(g,x){n.length>1&&n.sort(g||UR),a.length>1&&a.sort(x||fx),s.length>1&&s.sort(x||fx)}function _(){for(let g=t,x=o.length;g<x;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:p,unshift:d,finish:_,sort:v}}function NR(){let o=new WeakMap;function t(a,s){const l=o.get(a);let u;return l===void 0?(u=new hx,o.set(a,[u])):s>=l.length?(u=new hx,l.push(u)):u=l[s],u}function n(){o=new WeakMap}return{get:t,dispose:n}}function OR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Y,color:new ae};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":n={color:new ae,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=n,n}}}function PR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let IR=0;function FR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function BR(o){const t=new OR,n=PR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Y);const s=new Y,l=new Qt,u=new Qt;function f(d){let v=0,_=0,g=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,y=0,T=0,M=0,S=0,L=0,w=0,D=0,z=0,P=0,B=0;d.sort(FR);for(let U=0,ot=d.length;U<ot;U++){const F=d[U],W=F.color,J=F.intensity,st=F.distance;let Q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===io?Q=F.shadow.map.texture:Q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)v+=W.r*J,_+=W.g*J,g+=W.b*J;else if(F.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(F.sh.coefficients[N],J);B++}else if(F.isDirectionalLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const V=F.shadow,lt=n.get(F);lt.shadowIntensity=V.intensity,lt.shadowBias=V.bias,lt.shadowNormalBias=V.normalBias,lt.shadowRadius=V.radius,lt.shadowMapSize=V.mapSize,a.directionalShadow[x]=lt,a.directionalShadowMap[x]=Q,a.directionalShadowMatrix[x]=F.shadow.matrix,L++}a.directional[x]=N,x++}else if(F.isSpotLight){const N=t.get(F);N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(W).multiplyScalar(J),N.distance=st,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,a.spot[T]=N;const V=F.shadow;if(F.map&&(a.spotLightMap[z]=F.map,z++,V.updateMatrices(F),F.castShadow&&P++),a.spotLightMatrix[T]=V.matrix,F.castShadow){const lt=n.get(F);lt.shadowIntensity=V.intensity,lt.shadowBias=V.bias,lt.shadowNormalBias=V.normalBias,lt.shadowRadius=V.radius,lt.shadowMapSize=V.mapSize,a.spotShadow[T]=lt,a.spotShadowMap[T]=Q,D++}T++}else if(F.isRectAreaLight){const N=t.get(F);N.color.copy(W).multiplyScalar(J),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),a.rectArea[M]=N,M++}else if(F.isPointLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),N.distance=F.distance,N.decay=F.decay,F.castShadow){const V=F.shadow,lt=n.get(F);lt.shadowIntensity=V.intensity,lt.shadowBias=V.bias,lt.shadowNormalBias=V.normalBias,lt.shadowRadius=V.radius,lt.shadowMapSize=V.mapSize,lt.shadowCameraNear=V.camera.near,lt.shadowCameraFar=V.camera.far,a.pointShadow[y]=lt,a.pointShadowMap[y]=Q,a.pointShadowMatrix[y]=F.shadow.matrix,w++}a.point[y]=N,y++}else if(F.isHemisphereLight){const N=t.get(F);N.skyColor.copy(F.color).multiplyScalar(J),N.groundColor.copy(F.groundColor).multiplyScalar(J),a.hemi[S]=N,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ut.LTC_FLOAT_1,a.rectAreaLTC2=Ut.LTC_FLOAT_2):(a.rectAreaLTC1=Ut.LTC_HALF_1,a.rectAreaLTC2=Ut.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=_,a.ambient[2]=g;const A=a.hash;(A.directionalLength!==x||A.pointLength!==y||A.spotLength!==T||A.rectAreaLength!==M||A.hemiLength!==S||A.numDirectionalShadows!==L||A.numPointShadows!==w||A.numSpotShadows!==D||A.numSpotMaps!==z||A.numLightProbes!==B)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=y,a.hemi.length=S,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=D+z-P,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=B,A.directionalLength=x,A.pointLength=y,A.spotLength=T,A.rectAreaLength=M,A.hemiLength=S,A.numDirectionalShadows=L,A.numPointShadows=w,A.numSpotShadows=D,A.numSpotMaps=z,A.numLightProbes=B,a.version=IR++)}function p(d,v){let _=0,g=0,x=0,y=0,T=0;const M=v.matrixWorldInverse;for(let S=0,L=d.length;S<L;S++){const w=d[S];if(w.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(M),_++}else if(w.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(M),x++}else if(w.isRectAreaLight){const D=a.rectArea[y];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(M),u.identity(),l.copy(w.matrixWorld),l.premultiply(M),u.extractRotation(l),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),y++}else if(w.isPointLight){const D=a.point[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(M),g++}else if(w.isHemisphereLight){const D=a.hemi[T];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:f,setupView:p,state:a}}function dx(o){const t=new BR(o),n=[],a=[];function s(v){d.camera=v,n.length=0,a.length=0}function l(v){n.push(v)}function u(v){a.push(v)}function f(){t.setup(n)}function p(v){t.setupView(n,v)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function zR(o){let t=new WeakMap;function n(s,l=0){const u=t.get(s);let f;return u===void 0?(f=new dx(o),t.set(s,[f])):l>=u.length?(f=new dx(o),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const VR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],kR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],px=new Qt,hl=new Y,Od=new Y;function XR(o,t,n){let a=new Jp;const s=new he,l=new he,u=new Fe,f=new Rb,p=new Cb,d={},v=n.maxTextureSize,_={[vr]:ii,[ii]:vr,[Ca]:Ca},g=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:VR,fragmentShader:HR}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new Pn;y.setAttribute("position",new ea(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Rn(y,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let S=this.type;this.render=function(P,B,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===UM&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tu);const U=o.getRenderTarget(),ot=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Da),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const J=S!==this.type;J&&B.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(Q=>Q.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,Q=P.length;st<Q;st++){const N=P[st],V=N.shadow;if(V===void 0){Jt("WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const lt=V.getFrameExtents();s.multiply(lt),l.copy(V.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(l.x=Math.floor(v/lt.x),s.x=l.x*lt.x,V.mapSize.x=l.x),s.y>v&&(l.y=Math.floor(v/lt.y),s.y=l.y*lt.y,V.mapSize.y=l.y));const ft=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ft,V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===dl){if(N.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ta(s.x,s.y,{format:io,type:Ua,minFilter:zn,magFilter:zn,generateMipmaps:!1}),V.map.texture.name=N.name+".shadowMap",V.map.depthTexture=new Al(s.x,s.y,Gi),V.map.depthTexture.name=N.name+".shadowMapDepth",V.map.depthTexture.format=Na,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nn,V.map.depthTexture.magFilter=Nn}else N.isPointLight?(V.map=new Jx(s.x),V.map.depthTexture=new nb(s.x,na)):(V.map=new ta(s.x,s.y),V.map.depthTexture=new Al(s.x,s.y,na)),V.map.depthTexture.name=N.name+".shadowMap",V.map.depthTexture.format=Na,this.type===Tu?(V.map.depthTexture.compareFunction=ft?Wp:Xp,V.map.depthTexture.minFilter=zn,V.map.depthTexture.magFilter=zn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nn,V.map.depthTexture.magFilter=Nn);V.camera.updateProjectionMatrix()}const St=V.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<St;I++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,I),o.clear();else{I===0&&(o.setRenderTarget(V.map),o.clear());const j=V.getViewport(I);u.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),W.viewport(u)}if(N.isPointLight){const j=V.camera,it=V.matrix,yt=N.distance||j.far;yt!==j.far&&(j.far=yt,j.updateProjectionMatrix()),hl.setFromMatrixPosition(N.matrixWorld),j.position.copy(hl),Od.copy(j.position),Od.add(GR[I]),j.up.copy(kR[I]),j.lookAt(Od),j.updateMatrixWorld(),it.makeTranslation(-hl.x,-hl.y,-hl.z),px.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(px,j.coordinateSystem,j.reversedDepth)}else V.updateMatrices(N);a=V.getFrustum(),D(B,A,V.camera,N,this.type)}V.isPointLightShadow!==!0&&this.type===dl&&L(V,A),V.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(U,ot,F)};function L(P,B){const A=t.update(T);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ta(s.x,s.y,{format:io,type:Ua})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(B,null,A,g,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(B,null,A,x,T,null)}function w(P,B,A,U){let ot=null;const F=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)ot=F;else if(ot=A.isPointLight===!0?p:f,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const W=ot.uuid,J=B.uuid;let st=d[W];st===void 0&&(st={},d[W]=st);let Q=st[J];Q===void 0&&(Q=ot.clone(),st[J]=Q,B.addEventListener("dispose",z)),ot=Q}if(ot.visible=B.visible,ot.wireframe=B.wireframe,U===dl?ot.side=B.shadowSide!==null?B.shadowSide:B.side:ot.side=B.shadowSide!==null?B.shadowSide:_[B.side],ot.alphaMap=B.alphaMap,ot.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ot.map=B.map,ot.clipShadows=B.clipShadows,ot.clippingPlanes=B.clippingPlanes,ot.clipIntersection=B.clipIntersection,ot.displacementMap=B.displacementMap,ot.displacementScale=B.displacementScale,ot.displacementBias=B.displacementBias,ot.wireframeLinewidth=B.wireframeLinewidth,ot.linewidth=B.linewidth,A.isPointLight===!0&&ot.isMeshDistanceMaterial===!0){const W=o.properties.get(ot);W.light=A}return ot}function D(P,B,A,U,ot){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&ot===dl)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const J=t.update(P),st=P.material;if(Array.isArray(st)){const Q=J.groups;for(let N=0,V=Q.length;N<V;N++){const lt=Q[N],ft=st[lt.materialIndex];if(ft&&ft.visible){const St=w(P,ft,U,ot);P.onBeforeShadow(o,P,B,A,J,St,lt),o.renderBufferDirect(A,null,J,St,P,lt),P.onAfterShadow(o,P,B,A,J,St,lt)}}}else if(st.visible){const Q=w(P,st,U,ot);P.onBeforeShadow(o,P,B,A,J,Q,null),o.renderBufferDirect(A,null,J,Q,P,null),P.onAfterShadow(o,P,B,A,J,Q,null)}}const W=P.children;for(let J=0,st=W.length;J<st;J++)D(W[J],B,A,U,ot)}function z(P){P.target.removeEventListener("dispose",z);for(const A in d){const U=d[A],ot=P.target.uuid;ot in U&&(U[ot].dispose(),delete U[ot])}}}function WR(o,t){function n(){let q=!1;const wt=new Fe;let At=null;const It=new Fe(0,0,0,0);return{setMask:function(bt){At!==bt&&!q&&(o.colorMask(bt,bt,bt,bt),At=bt)},setLocked:function(bt){q=bt},setClear:function(bt,ht,zt,re,Be){Be===!0&&(bt*=re,ht*=re,zt*=re),wt.set(bt,ht,zt,re),It.equals(wt)===!1&&(o.clearColor(bt,ht,zt,re),It.copy(wt))},reset:function(){q=!1,At=null,It.set(-1,0,0,0)}}}function a(){let q=!1,wt=!1,At=null,It=null,bt=null;return{setReversed:function(ht){if(wt!==ht){const zt=t.get("EXT_clip_control");ht?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),wt=ht;const re=bt;bt=null,this.setClear(re)}},getReversed:function(){return wt},setTest:function(ht){ht?gt(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(ht){At!==ht&&!q&&(o.depthMask(ht),At=ht)},setFunc:function(ht){if(wt&&(ht=pE[ht]),It!==ht){switch(ht){case Gd:o.depthFunc(o.NEVER);break;case kd:o.depthFunc(o.ALWAYS);break;case Xd:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case Wd:o.depthFunc(o.EQUAL);break;case qd:o.depthFunc(o.GEQUAL);break;case Yd:o.depthFunc(o.GREATER);break;case jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=ht}},setLocked:function(ht){q=ht},setClear:function(ht){bt!==ht&&(bt=ht,wt&&(ht=1-ht),o.clearDepth(ht))},reset:function(){q=!1,At=null,It=null,bt=null,wt=!1}}}function s(){let q=!1,wt=null,At=null,It=null,bt=null,ht=null,zt=null,re=null,Be=null;return{setTest:function(Re){q||(Re?gt(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Re){wt!==Re&&!q&&(o.stencilMask(Re),wt=Re)},setFunc:function(Re,Vn,wi){(At!==Re||It!==Vn||bt!==wi)&&(o.stencilFunc(Re,Vn,wi),At=Re,It=Vn,bt=wi)},setOp:function(Re,Vn,wi){(ht!==Re||zt!==Vn||re!==wi)&&(o.stencilOp(Re,Vn,wi),ht=Re,zt=Vn,re=wi)},setLocked:function(Re){q=Re},setClear:function(Re){Be!==Re&&(o.clearStencil(Re),Be=Re)},reset:function(){q=!1,wt=null,At=null,It=null,bt=null,ht=null,zt=null,re=null,Be=null}}}const l=new n,u=new a,f=new s,p=new WeakMap,d=new WeakMap;let v={},_={},g=new WeakMap,x=[],y=null,T=!1,M=null,S=null,L=null,w=null,D=null,z=null,P=null,B=new ae(0,0,0),A=0,U=!1,ot=null,F=null,W=null,J=null,st=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(lt)[1]),N=V>=1):lt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),N=V>=2);let ft=null,St={};const I=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),it=new Fe().fromArray(I),yt=new Fe().fromArray(j);function Dt(q,wt,At,It){const bt=new Uint8Array(4),ht=o.createTexture();o.bindTexture(q,ht),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<At;zt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(wt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return ht}const tt={};tt[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),gt(o.DEPTH_TEST),u.setFunc(eo),ce(!1),an(K_),gt(o.CULL_FACE),Se(Da);function gt(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function Mt(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function Ft(q,wt){return _[q]!==wt?(o.bindFramebuffer(q,wt),_[q]=wt,q===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=wt),q===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Yt(q,wt){let At=x,It=!1;if(q){At=g.get(wt),At===void 0&&(At=[],g.set(wt,At));const bt=q.textures;if(At.length!==bt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ht=0,zt=bt.length;ht<zt;ht++)At[ht]=o.COLOR_ATTACHMENT0+ht;At.length=bt.length,It=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,It=!0);It&&o.drawBuffers(At)}function $t(q){return y!==q?(o.useProgram(q),y=q,!0):!1}const qe={[qr]:o.FUNC_ADD,[OM]:o.FUNC_SUBTRACT,[PM]:o.FUNC_REVERSE_SUBTRACT};qe[IM]=o.MIN,qe[FM]=o.MAX;const ve={[BM]:o.ZERO,[zM]:o.ONE,[VM]:o.SRC_COLOR,[Vd]:o.SRC_ALPHA,[qM]:o.SRC_ALPHA_SATURATE,[XM]:o.DST_COLOR,[GM]:o.DST_ALPHA,[HM]:o.ONE_MINUS_SRC_COLOR,[Hd]:o.ONE_MINUS_SRC_ALPHA,[WM]:o.ONE_MINUS_DST_COLOR,[kM]:o.ONE_MINUS_DST_ALPHA,[YM]:o.CONSTANT_COLOR,[jM]:o.ONE_MINUS_CONSTANT_COLOR,[ZM]:o.CONSTANT_ALPHA,[KM]:o.ONE_MINUS_CONSTANT_ALPHA};function Se(q,wt,At,It,bt,ht,zt,re,Be,Re){if(q===Da){T===!0&&(Mt(o.BLEND),T=!1);return}if(T===!1&&(gt(o.BLEND),T=!0),q!==NM){if(q!==M||Re!==U){if((S!==qr||D!==qr)&&(o.blendEquation(o.FUNC_ADD),S=qr,D=qr),Re)switch(q){case $s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Q_:o.blendFunc(o.ONE,o.ONE);break;case J_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ne("WebGLState: Invalid blending: ",q);break}else switch(q){case $s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Q_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case J_:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $_:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",q);break}L=null,w=null,z=null,P=null,B.set(0,0,0),A=0,M=q,U=Re}return}bt=bt||wt,ht=ht||At,zt=zt||It,(wt!==S||bt!==D)&&(o.blendEquationSeparate(qe[wt],qe[bt]),S=wt,D=bt),(At!==L||It!==w||ht!==z||zt!==P)&&(o.blendFuncSeparate(ve[At],ve[It],ve[ht],ve[zt]),L=At,w=It,z=ht,P=zt),(re.equals(B)===!1||Be!==A)&&(o.blendColor(re.r,re.g,re.b,Be),B.copy(re),A=Be),M=q,U=!1}function Ne(q,wt){q.side===Ca?Mt(o.CULL_FACE):gt(o.CULL_FACE);let At=q.side===ii;wt&&(At=!At),ce(At),q.blending===$s&&q.transparent===!1?Se(Da):Se(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const It=q.stencilWrite;f.setTest(It),It&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),$e(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(q){ot!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),ot=q)}function an(q){q!==DM?(gt(o.CULL_FACE),q!==F&&(q===K_?o.cullFace(o.BACK):q===LM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),F=q}function G(q){q!==W&&(N&&o.lineWidth(q),W=q)}function $e(q,wt,At){q?(gt(o.POLYGON_OFFSET_FILL),(J!==wt||st!==At)&&(J=wt,st=At,u.getReversed()&&(wt=-wt),o.polygonOffset(wt,At))):Mt(o.POLYGON_OFFSET_FILL)}function we(q){q?gt(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function Pe(q){q===void 0&&(q=o.TEXTURE0+Q-1),ft!==q&&(o.activeTexture(q),ft=q)}function Wt(q,wt,At){At===void 0&&(ft===null?At=o.TEXTURE0+Q-1:At=ft);let It=St[At];It===void 0&&(It={type:void 0,texture:void 0},St[At]=It),(It.type!==q||It.texture!==wt)&&(ft!==At&&(o.activeTexture(At),ft=At),o.bindTexture(q,wt||tt[q]),It.type=q,It.texture=wt)}function O(){const q=St[ft];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){ne("WebGLState:",q)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(q){ne("WebGLState:",q)}}function mt(){try{o.texSubImage2D(...arguments)}catch(q){ne("WebGLState:",q)}}function xt(){try{o.texSubImage3D(...arguments)}catch(q){ne("WebGLState:",q)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){ne("WebGLState:",q)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){ne("WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){ne("WebGLState:",q)}}function Zt(){try{o.texStorage3D(...arguments)}catch(q){ne("WebGLState:",q)}}function ee(){try{o.texImage2D(...arguments)}catch(q){ne("WebGLState:",q)}}function Tt(){try{o.texImage3D(...arguments)}catch(q){ne("WebGLState:",q)}}function Et(q){it.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),it.copy(q))}function Ot(q){yt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),yt.copy(q))}function Nt(q,wt){let At=d.get(wt);At===void 0&&(At=new WeakMap,d.set(wt,At));let It=At.get(q);It===void 0&&(It=o.getUniformBlockIndex(wt,q.name),At.set(q,It))}function Pt(q,wt){const It=d.get(wt).get(q);p.get(wt)!==It&&(o.uniformBlockBinding(wt,It,q.__bindingPointIndex),p.set(wt,It))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ft=null,St={},_={},g=new WeakMap,x=[],y=null,T=!1,M=null,S=null,L=null,w=null,D=null,z=null,P=null,B=new ae(0,0,0),A=0,U=!1,ot=null,F=null,W=null,J=null,st=null,it.set(0,0,o.canvas.width,o.canvas.height),yt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:gt,disable:Mt,bindFramebuffer:Ft,drawBuffers:Yt,useProgram:$t,setBlending:Se,setMaterial:Ne,setFlipSided:ce,setCullFace:an,setLineWidth:G,setPolygonOffset:$e,setScissorTest:we,activeTexture:Pe,bindTexture:Wt,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:ee,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:Pt,texStorage2D:Rt,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:dt,compressedTexSubImage3D:kt,scissor:Et,viewport:Ot,reset:de}}function qR(o,t,n,a,s,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new he,v=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,b){return x?new OffscreenCanvas(O,b):Tl("canvas")}function T(O,b,Z){let mt=1;const xt=Wt(O);if((xt.width>Z||xt.height>Z)&&(mt=Z/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const dt=Math.floor(mt*xt.width),kt=Math.floor(mt*xt.height);_===void 0&&(_=y(dt,kt));const Rt=b?y(dt,kt):_;return Rt.width=dt,Rt.height=kt,Rt.getContext("2d").drawImage(O,0,0,dt,kt),Jt("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+kt+")."),Rt}else return"data"in O&&Jt("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function M(O){return O.generateMipmaps}function S(O){o.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(O,b,Z,mt,xt=!1){if(O!==null){if(o[O]!==void 0)return o[O];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=b;if(b===o.RED&&(Z===o.FLOAT&&(dt=o.R32F),Z===o.HALF_FLOAT&&(dt=o.R16F),Z===o.UNSIGNED_BYTE&&(dt=o.R8)),b===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.R8UI),Z===o.UNSIGNED_SHORT&&(dt=o.R16UI),Z===o.UNSIGNED_INT&&(dt=o.R32UI),Z===o.BYTE&&(dt=o.R8I),Z===o.SHORT&&(dt=o.R16I),Z===o.INT&&(dt=o.R32I)),b===o.RG&&(Z===o.FLOAT&&(dt=o.RG32F),Z===o.HALF_FLOAT&&(dt=o.RG16F),Z===o.UNSIGNED_BYTE&&(dt=o.RG8)),b===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.RG8UI),Z===o.UNSIGNED_SHORT&&(dt=o.RG16UI),Z===o.UNSIGNED_INT&&(dt=o.RG32UI),Z===o.BYTE&&(dt=o.RG8I),Z===o.SHORT&&(dt=o.RG16I),Z===o.INT&&(dt=o.RG32I)),b===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),Z===o.UNSIGNED_INT&&(dt=o.RGB32UI),Z===o.BYTE&&(dt=o.RGB8I),Z===o.SHORT&&(dt=o.RGB16I),Z===o.INT&&(dt=o.RGB32I)),b===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),Z===o.UNSIGNED_INT&&(dt=o.RGBA32UI),Z===o.BYTE&&(dt=o.RGBA8I),Z===o.SHORT&&(dt=o.RGBA16I),Z===o.INT&&(dt=o.RGBA32I)),b===o.RGB&&(Z===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),b===o.RGBA){const kt=xt?Nu:ge.getTransfer(mt);Z===o.FLOAT&&(dt=o.RGBA32F),Z===o.HALF_FLOAT&&(dt=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(dt=kt===He?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(O,b){let Z;return O?b===null||b===na||b===El?Z=o.DEPTH24_STENCIL8:b===Gi?Z=o.DEPTH32F_STENCIL8:b===Ml&&(Z=o.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===na||b===El?Z=o.DEPTH_COMPONENT24:b===Gi?Z=o.DEPTH_COMPONENT32F:b===Ml&&(Z=o.DEPTH_COMPONENT16),Z}function z(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nn&&O.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function P(O){const b=O.target;b.removeEventListener("dispose",P),A(b),b.isVideoTexture&&v.delete(b)}function B(O){const b=O.target;b.removeEventListener("dispose",B),ot(b)}function A(O){const b=a.get(O);if(b.__webglInit===void 0)return;const Z=O.source,mt=g.get(Z);if(mt){const xt=mt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(O),Object.keys(mt).length===0&&g.delete(Z)}a.remove(O)}function U(O){const b=a.get(O);o.deleteTexture(b.__webglTexture);const Z=O.source,mt=g.get(Z);delete mt[b.__cacheKey],u.memory.textures--}function ot(O){const b=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let xt=0;xt<b.__webglFramebuffer[mt].length;xt++)o.deleteFramebuffer(b.__webglFramebuffer[mt][xt]);else o.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)o.deleteFramebuffer(b.__webglFramebuffer[mt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=O.textures;for(let mt=0,xt=Z.length;mt<xt;mt++){const dt=a.get(Z[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),u.memory.textures--),a.remove(Z[mt])}a.remove(O)}let F=0;function W(){F=0}function J(){const O=F;return O>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),F+=1,O}function st(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function Q(O,b){const Z=a.get(O);if(O.isVideoTexture&&we(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const mt=O.image;if(mt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Z,O,b);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+b)}function N(O,b){const Z=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){tt(Z,O,b);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+b)}function V(O,b){const Z=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){tt(Z,O,b);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+b)}function lt(O,b){const Z=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){gt(Z,O,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+b)}const ft={[Sl]:o.REPEAT,[Hi]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},St={[Nn]:o.NEAREST,[tE]:o.NEAREST_MIPMAP_NEAREST,[Zc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[jr]:o.LINEAR_MIPMAP_LINEAR},I={[aE]:o.NEVER,[cE]:o.ALWAYS,[rE]:o.LESS,[Xp]:o.LEQUAL,[sE]:o.EQUAL,[Wp]:o.GEQUAL,[oE]:o.GREATER,[lE]:o.NOTEQUAL};function j(O,b){if(b.type===Gi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===ed||b.magFilter===Zc||b.magFilter===jr||b.minFilter===zn||b.minFilter===ed||b.minFilter===Zc||b.minFilter===jr)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ft[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ft[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ft[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Zc&&b.minFilter!==jr||b.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function it(O,b){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",P));const mt=b.source;let xt=g.get(mt);xt===void 0&&(xt={},g.set(mt,xt));const dt=st(b);if(dt!==O.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),xt[dt].usedTimes++;const kt=xt[O.__cacheKey];kt!==void 0&&(xt[O.__cacheKey].usedTimes--,kt.usedTimes===0&&U(b)),O.__cacheKey=dt,O.__webglTexture=xt[dt].texture}return Z}function yt(O,b,Z){return Math.floor(Math.floor(O/Z)/b)}function Dt(O,b,Z,mt){const dt=O.updateRanges;if(dt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,Z,mt,b.data);else{dt.sort((Tt,Et)=>Tt.start-Et.start);let kt=0;for(let Tt=1;Tt<dt.length;Tt++){const Et=dt[kt],Ot=dt[Tt],Nt=Et.start+Et.count,Pt=yt(Ot.start,b.width,4),de=yt(Et.start,b.width,4);Ot.start<=Nt+1&&Pt===de&&yt(Ot.start+Ot.count-1,b.width,4)===Pt?Et.count=Math.max(Et.count,Ot.start+Ot.count-Et.start):(++kt,dt[kt]=Ot)}dt.length=kt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Et=dt.length;Tt<Et;Tt++){const Ot=dt[Tt],Nt=Math.floor(Ot.start/4),Pt=Math.ceil(Ot.count/4),de=Nt%b.width,q=Math.floor(Nt/b.width),wt=Pt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,de),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),n.texSubImage2D(o.TEXTURE_2D,0,de,q,wt,At,Z,mt,b.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function tt(O,b,Z){let mt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=o.TEXTURE_3D);const xt=it(O,b),dt=b.source;n.bindTexture(mt,O.__webglTexture,o.TEXTURE0+Z);const kt=a.get(dt);if(dt.version!==kt.__version||xt===!0){n.activeTexture(o.TEXTURE0+Z);const Rt=ge.getPrimaries(ge.workingColorSpace),Zt=b.colorSpace===pr?null:ge.getPrimaries(b.colorSpace),ee=b.colorSpace===pr||Rt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Tt=T(b.image,!1,s.maxTextureSize);Tt=Pe(b,Tt);const Et=l.convert(b.format,b.colorSpace),Ot=l.convert(b.type);let Nt=w(b.internalFormat,Et,Ot,b.colorSpace,b.isVideoTexture);j(mt,b);let Pt;const de=b.mipmaps,q=b.isVideoTexture!==!0,wt=kt.__version===void 0||xt===!0,At=dt.dataReady,It=z(b,Tt);if(b.isDepthTexture)Nt=D(b.format===Zr,b.type),wt&&(q?n.texStorage2D(o.TEXTURE_2D,1,Nt,Tt.width,Tt.height):n.texImage2D(o.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,Et,Ot,null));else if(b.isDataTexture)if(de.length>0){q&&wt&&n.texStorage2D(o.TEXTURE_2D,It,Nt,de[0].width,de[0].height);for(let bt=0,ht=de.length;bt<ht;bt++)Pt=de[bt],q?At&&n.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Et,Ot,Pt.data):n.texImage2D(o.TEXTURE_2D,bt,Nt,Pt.width,Pt.height,0,Et,Ot,Pt.data);b.generateMipmaps=!1}else q?(wt&&n.texStorage2D(o.TEXTURE_2D,It,Nt,Tt.width,Tt.height),At&&Dt(b,Tt,Et,Ot)):n.texImage2D(o.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,Et,Ot,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,It,Nt,de[0].width,de[0].height,Tt.depth);for(let bt=0,ht=de.length;bt<ht;bt++)if(Pt=de[bt],b.format!==Ai)if(Et!==null)if(q){if(At)if(b.layerUpdates.size>0){const zt=Wv(Pt.width,Pt.height,b.format,b.type);for(const re of b.layerUpdates){const Be=Pt.data.subarray(re*zt/Pt.data.BYTES_PER_ELEMENT,(re+1)*zt/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,re,Pt.width,Pt.height,1,Et,Be)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,Tt.depth,Et,Pt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Nt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?At&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,Tt.depth,Et,Ot,Pt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,bt,Nt,Pt.width,Pt.height,Tt.depth,0,Et,Ot,Pt.data)}else{q&&wt&&n.texStorage2D(o.TEXTURE_2D,It,Nt,de[0].width,de[0].height);for(let bt=0,ht=de.length;bt<ht;bt++)Pt=de[bt],b.format!==Ai?Et!==null?q?At&&n.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Et,Pt.data):n.compressedTexImage2D(o.TEXTURE_2D,bt,Nt,Pt.width,Pt.height,0,Pt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?At&&n.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Et,Ot,Pt.data):n.texImage2D(o.TEXTURE_2D,bt,Nt,Pt.width,Pt.height,0,Et,Ot,Pt.data)}else if(b.isDataArrayTexture)if(q){if(wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,It,Nt,Tt.width,Tt.height,Tt.depth),At)if(b.layerUpdates.size>0){const bt=Wv(Tt.width,Tt.height,b.format,b.type);for(const ht of b.layerUpdates){const zt=Tt.data.subarray(ht*bt/Tt.data.BYTES_PER_ELEMENT,(ht+1)*bt/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ht,Tt.width,Tt.height,1,Et,Ot,zt)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Et,Ot,Tt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,Tt.width,Tt.height,Tt.depth,0,Et,Ot,Tt.data);else if(b.isData3DTexture)q?(wt&&n.texStorage3D(o.TEXTURE_3D,It,Nt,Tt.width,Tt.height,Tt.depth),At&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Et,Ot,Tt.data)):n.texImage3D(o.TEXTURE_3D,0,Nt,Tt.width,Tt.height,Tt.depth,0,Et,Ot,Tt.data);else if(b.isFramebufferTexture){if(wt)if(q)n.texStorage2D(o.TEXTURE_2D,It,Nt,Tt.width,Tt.height);else{let bt=Tt.width,ht=Tt.height;for(let zt=0;zt<It;zt++)n.texImage2D(o.TEXTURE_2D,zt,Nt,bt,ht,0,Et,Ot,null),bt>>=1,ht>>=1}}else if(de.length>0){if(q&&wt){const bt=Wt(de[0]);n.texStorage2D(o.TEXTURE_2D,It,Nt,bt.width,bt.height)}for(let bt=0,ht=de.length;bt<ht;bt++)Pt=de[bt],q?At&&n.texSubImage2D(o.TEXTURE_2D,bt,0,0,Et,Ot,Pt):n.texImage2D(o.TEXTURE_2D,bt,Nt,Et,Ot,Pt);b.generateMipmaps=!1}else if(q){if(wt){const bt=Wt(Tt);n.texStorage2D(o.TEXTURE_2D,It,Nt,bt.width,bt.height)}At&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Ot,Tt)}else n.texImage2D(o.TEXTURE_2D,0,Nt,Et,Ot,Tt);M(b)&&S(mt),kt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function gt(O,b,Z){if(b.image.length!==6)return;const mt=it(O,b),xt=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Z);const dt=a.get(xt);if(xt.version!==dt.__version||mt===!0){n.activeTexture(o.TEXTURE0+Z);const kt=ge.getPrimaries(ge.workingColorSpace),Rt=b.colorSpace===pr?null:ge.getPrimaries(b.colorSpace),Zt=b.colorSpace===pr||kt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let ht=0;ht<6;ht++)!ee&&!Tt?Et[ht]=T(b.image[ht],!0,s.maxCubemapSize):Et[ht]=Tt?b.image[ht].image:b.image[ht],Et[ht]=Pe(b,Et[ht]);const Ot=Et[0],Nt=l.convert(b.format,b.colorSpace),Pt=l.convert(b.type),de=w(b.internalFormat,Nt,Pt,b.colorSpace),q=b.isVideoTexture!==!0,wt=dt.__version===void 0||mt===!0,At=xt.dataReady;let It=z(b,Ot);j(o.TEXTURE_CUBE_MAP,b);let bt;if(ee){q&&wt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,It,de,Ot.width,Ot.height);for(let ht=0;ht<6;ht++){bt=Et[ht].mipmaps;for(let zt=0;zt<bt.length;zt++){const re=bt[zt];b.format!==Ai?Nt!==null?q?At&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,0,0,re.width,re.height,Nt,re.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,de,re.width,re.height,0,re.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,0,0,re.width,re.height,Nt,Pt,re.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,de,re.width,re.height,0,Nt,Pt,re.data)}}}else{if(bt=b.mipmaps,q&&wt){bt.length>0&&It++;const ht=Wt(Et[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,It,de,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Tt){q?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Et[ht].width,Et[ht].height,Nt,Pt,Et[ht].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,de,Et[ht].width,Et[ht].height,0,Nt,Pt,Et[ht].data);for(let zt=0;zt<bt.length;zt++){const Be=bt[zt].image[ht].image;q?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,0,0,Be.width,Be.height,Nt,Pt,Be.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,de,Be.width,Be.height,0,Nt,Pt,Be.data)}}else{q?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,Pt,Et[ht]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,de,Nt,Pt,Et[ht]);for(let zt=0;zt<bt.length;zt++){const re=bt[zt];q?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,0,0,Nt,Pt,re.image[ht]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,de,Nt,Pt,re.image[ht])}}}M(b)&&S(o.TEXTURE_CUBE_MAP),dt.__version=xt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Mt(O,b,Z,mt,xt,dt){const kt=l.convert(Z.format,Z.colorSpace),Rt=l.convert(Z.type),Zt=w(Z.internalFormat,kt,Rt,Z.colorSpace),ee=a.get(b),Tt=a.get(Z);if(Tt.__renderTarget=b,!ee.__hasExternalTextures){const Et=Math.max(1,b.width>>dt),Ot=Math.max(1,b.height>>dt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?n.texImage3D(xt,dt,Zt,Et,Ot,b.depth,0,kt,Rt,null):n.texImage2D(xt,dt,Zt,Et,Ot,0,kt,Rt,null)}n.bindFramebuffer(o.FRAMEBUFFER,O),$e(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,xt,Tt.__webglTexture,0,G(b)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,xt,Tt.__webglTexture,dt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(O,b,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const mt=b.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,dt=D(b.stencilBuffer,xt),kt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(b),dt,b.width,b.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(b),dt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,dt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,O)}else{const mt=b.textures;for(let xt=0;xt<mt.length;xt++){const dt=mt[xt],kt=l.convert(dt.format,dt.colorSpace),Rt=l.convert(dt.type),Zt=w(dt.internalFormat,kt,Rt,dt.colorSpace);$e(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(b),Zt,b.width,b.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(b),Zt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Yt(O,b,Z){const mt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=a.get(b.depthTexture);if(xt.__renderTarget=b,(!xt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),j(o.TEXTURE_CUBE_MAP,b.depthTexture);const ee=l.convert(b.depthTexture.format),Tt=l.convert(b.depthTexture.type);let Et;b.depthTexture.format===Na?Et=o.DEPTH_COMPONENT24:b.depthTexture.format===Zr&&(Et=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Et,b.width,b.height,0,ee,Tt,null)}}else Q(b.depthTexture,0);const dt=xt.__webglTexture,kt=G(b),Rt=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,Zt=b.depthTexture.format===Zr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Na)$e(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Rt,dt,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Rt,dt,0);else if(b.depthTexture.format===Zr)$e(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Rt,dt,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Rt,dt,0);else throw new Error("Unknown depthTexture format")}function $t(O){const b=a.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=mt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)Yt(b.__webglFramebuffer[mt],O,mt);else{const mt=O.texture.mipmaps;mt&&mt.length>0?Yt(b.__webglFramebuffer[0],O,0):Yt(b.__webglFramebuffer,O,0)}else if(Z){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=o.createRenderbuffer(),Ft(b.__webglDepthbuffer[mt],O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ft(b.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function qe(O,b,Z){const mt=a.get(O);b!==void 0&&Mt(mt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&$t(O)}function ve(O){const b=O.texture,Z=a.get(O),mt=a.get(b);O.addEventListener("dispose",B);const xt=O.textures,dt=O.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=b.version,u.memory.textures++),dt){Z.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[Rt]=[];for(let Zt=0;Zt<b.mipmaps.length;Zt++)Z.__webglFramebuffer[Rt][Zt]=o.createFramebuffer()}else Z.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)Z.__webglFramebuffer[Rt]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Rt=0,Zt=xt.length;Rt<Zt;Rt++){const ee=a.get(xt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&$e(O)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Zt=xt[Rt];Z.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Rt]);const ee=l.convert(Zt.format,Zt.colorSpace),Tt=l.convert(Zt.type),Et=w(Zt.internalFormat,ee,Tt,Zt.colorSpace,O.isXRRenderTarget===!0),Ot=G(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Et,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(Z.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){n.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),j(o.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Mt(Z.__webglFramebuffer[Rt][Zt],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt);else Mt(Z.__webglFramebuffer[Rt],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&S(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(kt){for(let Rt=0,Zt=xt.length;Rt<Zt;Rt++){const ee=xt[Rt],Tt=a.get(ee);let Et=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Et=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Et,Tt.__webglTexture),j(Et,ee),Mt(Z.__webglFramebuffer,O,ee,o.COLOR_ATTACHMENT0+Rt,Et,0),M(ee)&&S(Et)}n.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Rt,mt.__webglTexture),j(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Mt(Z.__webglFramebuffer[Zt],O,b,o.COLOR_ATTACHMENT0,Rt,Zt);else Mt(Z.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,Rt,0);M(b)&&S(Rt),n.unbindTexture()}O.depthBuffer&&$t(O)}function Se(O){const b=O.textures;for(let Z=0,mt=b.length;Z<mt;Z++){const xt=b[Z];if(M(xt)){const dt=L(O),kt=a.get(xt).__webglTexture;n.bindTexture(dt,kt),S(dt),n.unbindTexture()}}}const Ne=[],ce=[];function an(O){if(O.samples>0){if($e(O)===!1){const b=O.textures,Z=O.width,mt=O.height;let xt=o.COLOR_BUFFER_BIT;const dt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=a.get(O),Rt=b.length>1;if(Rt)for(let ee=0;ee<b.length;ee++)n.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Zt=O.texture.mipmaps;Zt&&Zt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[ee]);const Tt=a.get(b[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,xt,o.NEAREST),p===!0&&(Ne.length=0,ce.length=0,Ne.push(o.COLOR_ATTACHMENT0+ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ne.push(dt),ce.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ce)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<b.length;ee++){n.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,kt.__webglColorRenderbuffer[ee]);const Tt=a.get(b[ee]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Tt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function G(O){return Math.min(s.maxSamples,O.samples)}function $e(O){const b=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(O){const b=u.render.frame;v.get(O)!==b&&(v.set(O,b),O.update())}function Pe(O,b){const Z=O.colorSpace,mt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==ao&&Z!==pr&&(ge.getTransfer(Z)===He?(mt!==Ai||xt!==mi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",Z)),b}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=lt,this.rebindTextures=qe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function YR(o,t){function n(a,s=pr){let l;const u=ge.getTransfer(s);if(a===mi)return o.UNSIGNED_BYTE;if(a===zp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Vp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Cx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Dx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===wx)return o.BYTE;if(a===Rx)return o.SHORT;if(a===Ml)return o.UNSIGNED_SHORT;if(a===Bp)return o.INT;if(a===na)return o.UNSIGNED_INT;if(a===Gi)return o.FLOAT;if(a===Ua)return o.HALF_FLOAT;if(a===Lx)return o.ALPHA;if(a===Ux)return o.RGB;if(a===Ai)return o.RGBA;if(a===Na)return o.DEPTH_COMPONENT;if(a===Zr)return o.DEPTH_STENCIL;if(a===Nx)return o.RED;if(a===Hp)return o.RED_INTEGER;if(a===io)return o.RG;if(a===Gp)return o.RG_INTEGER;if(a===kp)return o.RGBA_INTEGER;if(a===wu||a===Ru||a===Cu||a===Du)if(u===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===wu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===wu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ru)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Du)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Kd||a===Qd||a===Jd||a===$d)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$d)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===tp||a===ep||a===np||a===ip||a===ap||a===rp||a===sp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===tp||a===ep)return u===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===np)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===ip)return l.COMPRESSED_R11_EAC;if(a===ap)return l.COMPRESSED_SIGNED_R11_EAC;if(a===rp)return l.COMPRESSED_RG11_EAC;if(a===sp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===yp)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===op)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===cp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===up)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===hp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===dp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===pp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_p)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===yp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Sp||a===Mp||a===Ep)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Sp)return u===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ep)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===bp||a===Tp||a===Ap||a===wp)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===bp)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Tp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ap)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===El?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const jR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Hx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ia({vertexShader:jR,fragmentShader:ZR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rn(new Hu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QR extends co{constructor(t,n){super();const a=this;let s=null,l=1,u=null,f="local-floor",p=1,d=null,v=null,_=null,g=null,x=null,y=null;const T=typeof XRWebGLBinding<"u",M=new KR,S={},L=n.getContextAttributes();let w=null,D=null;const z=[],P=[],B=new he;let A=null;const U=new Kn;U.viewport=new Fe;const ot=new Kn;ot.viewport=new Fe;const F=[U,ot],W=new $b;let J=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=z[tt];return gt===void 0&&(gt=new ld,z[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=z[tt];return gt===void 0&&(gt=new ld,z[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=z[tt];return gt===void 0&&(gt=new ld,z[tt]=gt),gt.getHandSpace()};function Q(tt){const gt=P.indexOf(tt.inputSource);if(gt===-1)return;const Mt=z[gt];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,d||u),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function N(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let tt=0;tt<z.length;tt++){const gt=P[tt];gt!==null&&(P[tt]=null,z[tt].disconnect(gt))}J=null,st=null,M.reset();for(const tt in S)delete S[tt];t.setRenderTarget(w),x=null,g=null,_=null,s=null,D=null,Dt.stop(),a.isPresenting=!1,t.setPixelRatio(A),t.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){l=tt,a.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,a.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(s,n)),_},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),L.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ft=null,Yt=null;L.depth&&(Yt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=L.stencil?Zr:Na,Ft=L.stencil?El:na);const $t={colorFormat:n.RGBA8,depthFormat:Yt,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer($t),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ta(g.textureWidth,g.textureHeight,{format:Ai,type:mi,depthTexture:new Al(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,n,Mt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ta(x.framebufferWidth,x.framebufferHeight,{format:Ai,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await s.requestReferenceSpace(f),Dt.setContext(s),Dt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(tt){for(let gt=0;gt<tt.removed.length;gt++){const Mt=tt.removed[gt],Ft=P.indexOf(Mt);Ft>=0&&(P[Ft]=null,z[Ft].disconnect(Mt))}for(let gt=0;gt<tt.added.length;gt++){const Mt=tt.added[gt];let Ft=P.indexOf(Mt);if(Ft===-1){for(let $t=0;$t<z.length;$t++)if($t>=P.length){P.push(Mt),Ft=$t;break}else if(P[$t]===null){P[$t]=Mt,Ft=$t;break}if(Ft===-1)break}const Yt=z[Ft];Yt&&Yt.connect(Mt)}}const lt=new Y,ft=new Y;function St(tt,gt,Mt){lt.setFromMatrixPosition(gt.matrixWorld),ft.setFromMatrixPosition(Mt.matrixWorld);const Ft=lt.distanceTo(ft),Yt=gt.projectionMatrix.elements,$t=Mt.projectionMatrix.elements,qe=Yt[14]/(Yt[10]-1),ve=Yt[14]/(Yt[10]+1),Se=(Yt[9]+1)/Yt[5],Ne=(Yt[9]-1)/Yt[5],ce=(Yt[8]-1)/Yt[0],an=($t[8]+1)/$t[0],G=qe*ce,$e=qe*an,we=Ft/(-ce+an),Pe=we*-ce;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Pe),tt.translateZ(we),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Yt[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Wt=qe+we,O=ve+we,b=G-Pe,Z=$e+(Ft-Pe),mt=Se*ve/O*Wt,xt=Ne*ve/O*Wt;tt.projectionMatrix.makePerspective(b,Z,mt,xt,Wt,O),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function I(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let gt=tt.near,Mt=tt.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),W.near=ot.near=U.near=gt,W.far=ot.far=U.far=Mt,(J!==W.near||st!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),J=W.near,st=W.far),W.layers.mask=tt.layers.mask|6,U.layers.mask=W.layers.mask&-5,ot.layers.mask=W.layers.mask&-3;const Ft=tt.parent,Yt=W.cameras;I(W,Ft);for(let $t=0;$t<Yt.length;$t++)I(Yt[$t],Ft);Yt.length===2?St(W,U,ot):W.projectionMatrix.copy(U.projectionMatrix),j(tt,W,Ft)};function j(tt,gt,Mt){Mt===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ro*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(tt){p=tt,g!==null&&(g.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(tt){return S[tt]};let it=null;function yt(tt,gt){if(v=gt.getViewerPose(d||u),y=gt,v!==null){const Mt=v.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let Ft=!1;Mt.length!==W.cameras.length&&(W.cameras.length=0,Ft=!0);for(let ve=0;ve<Mt.length;ve++){const Se=Mt[ve];let Ne=null;if(x!==null)Ne=x.getViewport(Se);else{const an=_.getViewSubImage(g,Se);Ne=an.viewport,ve===0&&(t.setRenderTargetTextures(D,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(D))}let ce=F[ve];ce===void 0&&(ce=new Kn,ce.layers.enable(ve),ce.viewport=new Fe,F[ve]=ce),ce.matrix.fromArray(Se.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Se.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ve===0&&(W.matrix.copy(ce.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ft===!0&&W.cameras.push(ce)}const Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const ve=_.getDepthInformation(Mt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,s.renderState)}if(Yt&&Yt.includes("camera-access")&&T){t.state.unbindTexture(),_=a.getBinding();for(let ve=0;ve<Mt.length;ve++){const Se=Mt[ve].camera;if(Se){let Ne=S[Se];Ne||(Ne=new Hx,S[Se]=Ne);const ce=_.getCameraImage(Se);Ne.sourceTexture=ce}}}}for(let Mt=0;Mt<z.length;Mt++){const Ft=P[Mt],Yt=z[Mt];Ft!==null&&Yt!==void 0&&Yt.update(Ft,gt,d||u)}it&&it(tt,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),y=null}const Dt=new Qx;Dt.setAnimationLoop(yt),this.setAnimationLoop=function(tt){it=tt},this.dispose=function(){}}}const Wr=new En,JR=new Qt;function $R(o,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,qx(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function s(M,S,L,w,D){S.isMeshBasicMaterial?l(M,S):S.isMeshLambertMaterial?(l(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(M,S),_(M,S)):S.isMeshPhongMaterial?(l(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(M,S),g(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(l(M,S),y(M,S)):S.isMeshDepthMaterial?l(M,S):S.isMeshDistanceMaterial?(l(M,S),T(M,S)):S.isMeshNormalMaterial?l(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&f(M,S)):S.isPointsMaterial?p(M,S,L,w):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ii&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ii&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const L=t.get(S),w=L.envMap,D=L.envMapRotation;w&&(M.envMap.value=w,Wr.copy(D),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),M.envMapRotation.value.setFromMatrix4(JR.makeRotationFromEuler(Wr)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function f(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,L,w){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*L,M.scale.value=w*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,L){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,S){S.matcap&&(M.matcap.value=S.matcap)}function T(M,S){const L=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function tC(o,t,n,a){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,w){const D=w.program;a.uniformBlockBinding(L,D)}function d(L,w){let D=s[L.id];D===void 0&&(y(L),D=v(L),s[L.id]=D,L.addEventListener("dispose",M));const z=w.program;a.updateUBOMapping(L,z);const P=t.render.frame;l[L.id]!==P&&(g(L),l[L.id]=P)}function v(L){const w=_();L.__bindingPointIndex=w;const D=o.createBuffer(),z=L.__size,P=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,z,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,D),D}function _(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const w=s[L.id],D=L.uniforms,z=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let P=0,B=D.length;P<B;P++){const A=Array.isArray(D[P])?D[P]:[D[P]];for(let U=0,ot=A.length;U<ot;U++){const F=A[U];if(x(F,P,U,z)===!0){const W=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let st=0;for(let Q=0;Q<J.length;Q++){const N=J[Q],V=T(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,W+st,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,st),st+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,w,D,z){const P=L.value,B=w+"_"+D;if(z[B]===void 0)return typeof P=="number"||typeof P=="boolean"?z[B]=P:z[B]=P.clone(),!0;{const A=z[B];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return z[B]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function y(L){const w=L.uniforms;let D=0;const z=16;for(let B=0,A=w.length;B<A;B++){const U=Array.isArray(w[B])?w[B]:[w[B]];for(let ot=0,F=U.length;ot<F;ot++){const W=U[ot],J=Array.isArray(W.value)?W.value:[W.value];for(let st=0,Q=J.length;st<Q;st++){const N=J[st],V=T(N),lt=D%z,ft=lt%V.boundary,St=lt+ft;D+=ft,St!==0&&z-St<V.storage&&(D+=z-St),W.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=V.storage}}}const P=D%z;return P>0&&(D+=z-P),L.__size=D,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Jt("WebGLRenderer: Unsupported uniform value type.",L),w}function M(L){const w=L.target;w.removeEventListener("dispose",M);const D=u.indexOf(w.__bindingPointIndex);u.splice(D,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function S(){for(const L in s)o.deleteBuffer(s[L]);u=[],s={},l={}}return{bind:p,update:d,dispose:S}}const eC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function nC(){return Ki===null&&(Ki=new Bx(eC,16,16,io,Ua),Ki.name="DFG_LUT",Ki.minFilter=zn,Ki.magFilter=zn,Ki.wrapS=Hi,Ki.wrapT=Hi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class iC{constructor(t={}){const{canvas:n=hE(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=mi}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const T=x,M=new Set([kp,Gp,Hp]),S=new Set([mi,na,Ml,El,zp,Vp]),L=new Uint32Array(4),w=new Int32Array(4);let D=null,z=null;const P=[],B=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ot=!1;this._outputColorSpace=Ze;let F=0,W=0,J=null,st=-1,Q=null;const N=new Fe,V=new Fe;let lt=null;const ft=new ae(0);let St=0,I=n.width,j=n.height,it=1,yt=null,Dt=null;const tt=new Fe(0,0,I,j),gt=new Fe(0,0,I,j);let Mt=!1;const Ft=new Jp;let Yt=!1,$t=!1;const qe=new Qt,ve=new Y,Se=new Fe,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function an(){return J===null?it:1}let G=a;function $e(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",zt,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",Be,!1),G===null){const X="webgl2";if(G=$e(X,C),G===null)throw $e(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ne("WebGLRenderer: "+C.message),C}let we,Pe,Wt,O,b,Z,mt,xt,dt,kt,Rt,Zt,ee,Tt,Et,Ot,Nt,Pt,de,q,wt,At,It;function bt(){we=new iw(G),we.init(),wt=new YR(G,we),Pe=new ZA(G,we,t,wt),Wt=new WR(G,we),Pe.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),O=new sw(G),b=new LR,Z=new qR(G,we,Wt,b,Pe,wt,O),mt=new nw(U),xt=new fT(G),At=new YA(G,xt),dt=new aw(G,xt,O,At),kt=new lw(G,dt,xt,At,O),Pt=new ow(G,Pe,Z),Et=new KA(b),Rt=new DR(U,mt,we,Pe,At,Et),Zt=new $R(U,b),ee=new NR,Tt=new zR(we),Nt=new qA(U,mt,Wt,kt,y,p),Ot=new XR(U,kt,Pe),It=new tC(G,O,Pe,Wt),de=new jA(G,we,O),q=new rw(G,we,O),O.programs=Rt.programs,U.capabilities=Pe,U.extensions=we,U.properties=b,U.renderLists=ee,U.shadowMap=Ot,U.state=Wt,U.info=O}bt(),T!==mi&&(A=new uw(T,n.width,n.height,s,l));const ht=new QR(U,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(C){C!==void 0&&(it=C,this.setSize(I,j,!1))},this.getSize=function(C){return C.set(I,j)},this.setSize=function(C,X,ct=!0){if(ht.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,j=X,n.width=Math.floor(C*it),n.height=Math.floor(X*it),ct===!0&&(n.style.width=C+"px",n.style.height=X+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(I*it,j*it).floor()},this.setDrawingBufferSize=function(C,X,ct){I=C,j=X,it=ct,n.width=Math.floor(C*ct),n.height=Math.floor(X*ct),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(T===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,X,ct,at){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,X,ct,at),Wt.viewport(N.copy(tt).multiplyScalar(it).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,X,ct,at){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,X,ct,at),Wt.scissor(V.copy(gt).multiplyScalar(it).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){Wt.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){Dt=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ct=!0){let at=0;if(C){let $=!1;if(J!==null){const Ct=J.texture.format;$=M.has(Ct)}if($){const Ct=J.texture.type,Bt=S.has(Ct),Lt=Nt.getClearColor(),Xt=Nt.getClearAlpha(),jt=Lt.r,ie=Lt.g,oe=Lt.b;Bt?(L[0]=jt,L[1]=ie,L[2]=oe,L[3]=Xt,G.clearBufferuiv(G.COLOR,0,L)):(w[0]=jt,w[1]=ie,w[2]=oe,w[3]=Xt,G.clearBufferiv(G.COLOR,0,w))}else at|=G.COLOR_BUFFER_BIT}X&&(at|=G.DEPTH_BUFFER_BIT),ct&&(at|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&G.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",zt,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),Nt.dispose(),ee.dispose(),Tt.dispose(),b.dispose(),mt.dispose(),kt.dispose(),At.dispose(),It.dispose(),Rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ts),ht.removeEventListener("sessionend",es),Xi.stop()};function zt(C){C.preventDefault(),cv("WebGLRenderer: Context Lost."),ot=!0}function re(){cv("WebGLRenderer: Context Restored."),ot=!1;const C=O.autoReset,X=Ot.enabled,ct=Ot.autoUpdate,at=Ot.needsUpdate,$=Ot.type;bt(),O.autoReset=C,Ot.enabled=X,Ot.autoUpdate=ct,Ot.needsUpdate=at,Ot.type=$}function Be(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Re(C){const X=C.target;X.removeEventListener("dispose",Re),Vn(X)}function Vn(C){wi(C),b.remove(C)}function wi(C){const X=b.get(C).programs;X!==void 0&&(X.forEach(function(ct){Rt.releaseProgram(ct)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ct,at,$,Ct){X===null&&(X=Ne);const Bt=$.isMesh&&$.matrixWorld.determinant()<0,Lt=zl(C,X,ct,at,$);Wt.setMaterial(at,Bt);let Xt=ct.index,jt=1;if(at.wireframe===!0){if(Xt=dt.getWireframeAttribute(ct),Xt===void 0)return;jt=2}const ie=ct.drawRange,oe=ct.attributes.position;let Vt=ie.start*jt,pe=(ie.start+ie.count)*jt;Ct!==null&&(Vt=Math.max(Vt,Ct.start*jt),pe=Math.min(pe,(Ct.start+Ct.count)*jt)),Xt!==null?(Vt=Math.max(Vt,0),pe=Math.min(pe,Xt.count)):oe!=null&&(Vt=Math.max(Vt,0),pe=Math.min(pe,oe.count));const tn=pe-Vt;if(tn<0||tn===1/0)return;At.setup($,at,Lt,ct,Xt);let en,Ce=de;if(Xt!==null&&(en=xt.get(Xt),Ce=q,Ce.setIndex(en)),$.isMesh)at.wireframe===!0?(Wt.setLineWidth(at.wireframeLinewidth*an()),Ce.setMode(G.LINES)):Ce.setMode(G.TRIANGLES);else if($.isLine){let Sn=at.linewidth;Sn===void 0&&(Sn=1),Wt.setLineWidth(Sn*an()),$.isLineSegments?Ce.setMode(G.LINES):$.isLineLoop?Ce.setMode(G.LINE_LOOP):Ce.setMode(G.LINE_STRIP)}else $.isPoints?Ce.setMode(G.POINTS):$.isSprite&&Ce.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ou("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Sn=$._multiDrawStarts,Gt=$._multiDrawCounts,Hn=$._multiDrawCount,se=Xt?xt.get(Xt).bytesPerElement:1,Gn=b.get(at).currentProgram.getUniforms();for(let ai=0;ai<Hn;ai++)Gn.setValue(G,"_gl_DrawID",ai),Ce.render(Sn[ai]/se,Gt[ai])}else if($.isInstancedMesh)Ce.renderInstances(Vt,tn,$.count);else if(ct.isInstancedBufferGeometry){const Sn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Gt=Math.min(ct.instanceCount,Sn);Ce.renderInstances(Vt,tn,Gt)}else Ce.render(Vt,tn)};function mo(C,X,ct){C.transparent===!0&&C.side===Ca&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,Oa(C,X,ct),C.side=vr,C.needsUpdate=!0,Oa(C,X,ct),C.side=Ca):Oa(C,X,ct)}this.compile=function(C,X,ct=null){ct===null&&(ct=C),z=Tt.get(ct),z.init(X),B.push(z),ct.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),C!==ct&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),z.setupLights();const at=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let Bt=0;Bt<Ct.length;Bt++){const Lt=Ct[Bt];mo(Lt,ct,$),at.add(Lt)}else mo(Ct,ct,$),at.add(Ct)}),z=B.pop(),at},this.compileAsync=function(C,X,ct=null){const at=this.compile(C,X,ct);return new Promise($=>{function Ct(){if(at.forEach(function(Bt){b.get(Bt).currentProgram.isReady()&&at.delete(Bt)}),at.size===0){$(C);return}setTimeout(Ct,10)}we.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let $r=null;function Il(C){$r&&$r(C)}function ts(){Xi.stop()}function es(){Xi.start()}const Xi=new Qx;Xi.setAnimationLoop(Il),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(C){$r=C,ht.setAnimationLoop(C),C===null?Xi.stop():Xi.start()},ht.addEventListener("sessionstart",ts),ht.addEventListener("sessionend",es),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ot===!0)return;const ct=ht.enabled===!0&&ht.isPresenting===!0,at=A!==null&&(J===null||ct)&&A.begin(U,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(X),X=ht.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,X,J),z=Tt.get(C,B.length),z.init(X),B.push(z),qe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ft.setFromProjectionMatrix(qe,Ji,X.reversedDepth),$t=this.localClippingEnabled,Yt=Et.init(this.clippingPlanes,$t),D=ee.get(C,P.length),D.init(),P.push(D),ht.enabled===!0&&ht.isPresenting===!0){const Bt=U.xr.getDepthSensingMesh();Bt!==null&&ns(Bt,X,-1/0,U.sortObjects)}ns(C,X,0,U.sortObjects),D.finish(),U.sortObjects===!0&&D.sort(yt,Dt),ce=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ce&&Nt.addToRenderList(D,C),this.info.render.frame++,Yt===!0&&Et.beginShadows();const $=z.state.shadowsArray;if(Ot.render($,C,X),Yt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&A.hasRenderPass())===!1){const Bt=D.opaque,Lt=D.transmissive;if(z.setupLights(),X.isArrayCamera){const Xt=X.cameras;if(Lt.length>0)for(let jt=0,ie=Xt.length;jt<ie;jt++){const oe=Xt[jt];fn(Bt,Lt,C,oe)}ce&&Nt.render(C);for(let jt=0,ie=Xt.length;jt<ie;jt++){const oe=Xt[jt];Ri(D,C,oe,oe.viewport)}}else Lt.length>0&&fn(Bt,Lt,C,X),ce&&Nt.render(C),Ri(D,C,X)}J!==null&&W===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),at&&A.end(U),C.isScene===!0&&C.onAfterRender(U,C,X),At.resetDefaultState(),st=-1,Q=null,B.pop(),B.length>0?(z=B[B.length-1],Yt===!0&&Et.setGlobalState(U.clippingPlanes,z.state.camera)):z=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function ns(C,X,ct,at){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ft.intersectsSprite(C)){at&&Se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(qe);const Bt=kt.update(C),Lt=C.material;Lt.visible&&D.push(C,Bt,Lt,ct,Se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ft.intersectsObject(C))){const Bt=kt.update(C),Lt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Se.copy(C.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Se.copy(Bt.boundingSphere.center)),Se.applyMatrix4(C.matrixWorld).applyMatrix4(qe)),Array.isArray(Lt)){const Xt=Bt.groups;for(let jt=0,ie=Xt.length;jt<ie;jt++){const oe=Xt[jt],Vt=Lt[oe.materialIndex];Vt&&Vt.visible&&D.push(C,Bt,Vt,ct,Se.z,oe)}}else Lt.visible&&D.push(C,Bt,Lt,ct,Se.z,null)}}const Ct=C.children;for(let Bt=0,Lt=Ct.length;Bt<Lt;Bt++)ns(Ct[Bt],X,ct,at)}function Ri(C,X,ct,at){const{opaque:$,transmissive:Ct,transparent:Bt}=C;z.setupLightsView(ct),Yt===!0&&Et.setGlobalState(U.clippingPlanes,ct),at&&Wt.viewport(N.copy(at)),$.length>0&&yn($,X,ct),Ct.length>0&&yn(Ct,X,ct),Bt.length>0&&yn(Bt,X,ct),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function fn(C,X,ct,at){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[at.id]===void 0){const Vt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[at.id]=new ta(1,1,{generateMipmaps:!0,type:Vt?Ua:mi,minFilter:jr,samples:Math.max(4,Pe.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const Ct=z.state.transmissionRenderTarget[at.id],Bt=at.viewport||N;Ct.setSize(Bt.z*U.transmissionResolutionScale,Bt.w*U.transmissionResolutionScale);const Lt=U.getRenderTarget(),Xt=U.getActiveCubeFace(),jt=U.getActiveMipmapLevel();U.setRenderTarget(Ct),U.getClearColor(ft),St=U.getClearAlpha(),St<1&&U.setClearColor(16777215,.5),U.clear(),ce&&Nt.render(ct);const ie=U.toneMapping;U.toneMapping=$i;const oe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),z.setupLightsView(at),Yt===!0&&Et.setGlobalState(U.clippingPlanes,at),yn(C,ct,at),Z.updateMultisampleRenderTarget(Ct),Z.updateRenderTargetMipmap(Ct),we.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let pe=0,tn=X.length;pe<tn;pe++){const en=X[pe],{object:Ce,geometry:Sn,material:Gt,group:Hn}=en;if(Gt.side===Ca&&Ce.layers.test(at.layers)){const se=Gt.side;Gt.side=ii,Gt.needsUpdate=!0,aa(Ce,ct,at,Sn,Gt,Hn),Gt.side=se,Gt.needsUpdate=!0,Vt=!0}}Vt===!0&&(Z.updateMultisampleRenderTarget(Ct),Z.updateRenderTargetMipmap(Ct))}U.setRenderTarget(Lt,Xt,jt),U.setClearColor(ft,St),oe!==void 0&&(at.viewport=oe),U.toneMapping=ie}function yn(C,X,ct){const at=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ct=C.length;$<Ct;$++){const Bt=C[$],{object:Lt,geometry:Xt,group:jt}=Bt;let ie=Bt.material;ie.allowOverride===!0&&at!==null&&(ie=at),Lt.layers.test(ct.layers)&&aa(Lt,X,ct,Xt,ie,jt)}}function aa(C,X,ct,at,$,Ct){C.onBeforeRender(U,X,ct,at,$,Ct),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(U,X,ct,at,C,Ct),$.transparent===!0&&$.side===Ca&&$.forceSinglePass===!1?($.side=ii,$.needsUpdate=!0,U.renderBufferDirect(ct,X,at,$,C,Ct),$.side=vr,$.needsUpdate=!0,U.renderBufferDirect(ct,X,at,$,C,Ct),$.side=Ca):U.renderBufferDirect(ct,X,at,$,C,Ct),C.onAfterRender(U,X,ct,at,$,Ct)}function Oa(C,X,ct){X.isScene!==!0&&(X=Ne);const at=b.get(C),$=z.state.lights,Ct=z.state.shadowsArray,Bt=$.state.version,Lt=Rt.getParameters(C,$.state,Ct,X,ct),Xt=Rt.getProgramCacheKey(Lt);let jt=at.programs;at.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,at.fog=X.fog;const ie=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;at.envMap=mt.get(C.envMap||at.environment,ie),at.envMapRotation=at.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Re),jt=new Map,at.programs=jt);let oe=jt.get(Xt);if(oe!==void 0){if(at.currentProgram===oe&&at.lightsStateVersion===Bt)return Bl(C,Lt),oe}else Lt.uniforms=Rt.getUniforms(C),C.onBeforeCompile(Lt,U),oe=Rt.acquireProgram(Lt,Xt),jt.set(Xt,oe),at.uniforms=Lt.uniforms;const Vt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=Et.uniform),Bl(C,Lt),at.needsLights=go(C),at.lightsStateVersion=Bt,at.needsLights&&(Vt.ambientLightColor.value=$.state.ambient,Vt.lightProbe.value=$.state.probe,Vt.directionalLights.value=$.state.directional,Vt.directionalLightShadows.value=$.state.directionalShadow,Vt.spotLights.value=$.state.spot,Vt.spotLightShadows.value=$.state.spotShadow,Vt.rectAreaLights.value=$.state.rectArea,Vt.ltc_1.value=$.state.rectAreaLTC1,Vt.ltc_2.value=$.state.rectAreaLTC2,Vt.pointLights.value=$.state.point,Vt.pointLightShadows.value=$.state.pointShadow,Vt.hemisphereLights.value=$.state.hemi,Vt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Vt.spotLightMatrix.value=$.state.spotLightMatrix,Vt.spotLightMap.value=$.state.spotLightMap,Vt.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=oe,at.uniformsList=null,oe}function Fl(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Lu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Bl(C,X){const ct=b.get(C);ct.outputColorSpace=X.outputColorSpace,ct.batching=X.batching,ct.batchingColor=X.batchingColor,ct.instancing=X.instancing,ct.instancingColor=X.instancingColor,ct.instancingMorph=X.instancingMorph,ct.skinning=X.skinning,ct.morphTargets=X.morphTargets,ct.morphNormals=X.morphNormals,ct.morphColors=X.morphColors,ct.morphTargetsCount=X.morphTargetsCount,ct.numClippingPlanes=X.numClippingPlanes,ct.numIntersection=X.numClipIntersection,ct.vertexAlphas=X.vertexAlphas,ct.vertexTangents=X.vertexTangents,ct.toneMapping=X.toneMapping}function zl(C,X,ct,at,$){X.isScene!==!0&&(X=Ne),Z.resetTextureUnits();const Ct=X.fog,Bt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?X.environment:null,Lt=J===null?U.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ao,Xt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,jt=mt.get(at.envMap||Bt,Xt),ie=at.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,oe=!!ct.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Vt=!!ct.morphAttributes.position,pe=!!ct.morphAttributes.normal,tn=!!ct.morphAttributes.color;let en=$i;at.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(en=U.toneMapping);const Ce=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Sn=Ce!==void 0?Ce.length:0,Gt=b.get(at),Hn=z.state.lights;if(Yt===!0&&($t===!0||C!==Q)){const dn=C===Q&&at.id===st;Et.setState(at,C,dn)}let se=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Hn.state.version||Gt.outputColorSpace!==Lt||$.isBatchedMesh&&Gt.batching===!1||!$.isBatchedMesh&&Gt.batching===!0||$.isBatchedMesh&&Gt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Gt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Gt.instancing===!1||!$.isInstancedMesh&&Gt.instancing===!0||$.isSkinnedMesh&&Gt.skinning===!1||!$.isSkinnedMesh&&Gt.skinning===!0||$.isInstancedMesh&&Gt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Gt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Gt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Gt.instancingMorph===!1&&$.morphTexture!==null||Gt.envMap!==jt||at.fog===!0&&Gt.fog!==Ct||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Et.numPlanes||Gt.numIntersection!==Et.numIntersection)||Gt.vertexAlphas!==ie||Gt.vertexTangents!==oe||Gt.morphTargets!==Vt||Gt.morphNormals!==pe||Gt.morphColors!==tn||Gt.toneMapping!==en||Gt.morphTargetsCount!==Sn)&&(se=!0):(se=!0,Gt.__version=at.version);let Gn=Gt.currentProgram;se===!0&&(Gn=Oa(at,X,$));let ai=!1,Ci=!1,ri=!1;const Ie=Gn.getUniforms(),hn=Gt.uniforms;if(Wt.useProgram(Gn.program)&&(ai=!0,Ci=!0,ri=!0),at.id!==st&&(st=at.id,Ci=!0),ai||Q!==C){Wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ie.setValue(G,"projectionMatrix",C.projectionMatrix),Ie.setValue(G,"viewMatrix",C.matrixWorldInverse);const Di=Ie.map.cameraPosition;Di!==void 0&&Di.setValue(G,ve.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,Ci=!0,ri=!0)}if(Gt.needsLights&&(Hn.state.directionalShadowMap.length>0&&Ie.setValue(G,"directionalShadowMap",Hn.state.directionalShadowMap,Z),Hn.state.spotShadowMap.length>0&&Ie.setValue(G,"spotShadowMap",Hn.state.spotShadowMap,Z),Hn.state.pointShadowMap.length>0&&Ie.setValue(G,"pointShadowMap",Hn.state.pointShadowMap,Z)),$.isSkinnedMesh){Ie.setOptional(G,$,"bindMatrix"),Ie.setOptional(G,$,"bindMatrixInverse");const dn=$.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ie.setValue(G,"boneTexture",dn.boneTexture,Z))}$.isBatchedMesh&&(Ie.setOptional(G,$,"batchingTexture"),Ie.setValue(G,"batchingTexture",$._matricesTexture,Z),Ie.setOptional(G,$,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",$._indirectTexture,Z),Ie.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",$._colorsTexture,Z));const kn=ct.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Pt.update($,ct,Gn),(Ci||Gt.receiveShadow!==$.receiveShadow)&&(Gt.receiveShadow=$.receiveShadow,Ie.setValue(G,"receiveShadow",$.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=nC()),Ci&&(Ie.setValue(G,"toneMappingExposure",U.toneMappingExposure),Gt.needsLights&&Mr(hn,ri),Ct&&at.fog===!0&&Zt.refreshFogUniforms(hn,Ct),Zt.refreshMaterialUniforms(hn,at,it,j,z.state.transmissionRenderTarget[C.id]),Lu.upload(G,Fl(Gt),hn,Z)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Lu.upload(G,Fl(Gt),hn,Z),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(G,"center",$.center),Ie.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ie.setValue(G,"normalMatrix",$.normalMatrix),Ie.setValue(G,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let Di=0,ra=dn.length;Di<ra;Di++){const is=dn[Di];It.update(is,Gn),It.bind(is,Gn)}}return Gn}function Mr(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function go(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,X,ct){const at=b.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=X,b.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ct,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ct=b.get(C);ct.__webglFramebuffer=X,ct.__useDefaultFramebuffer=X===void 0};const Pa=G.createFramebuffer();this.setRenderTarget=function(C,X=0,ct=0){J=C,F=X,W=ct;let at=null,$=!1,Ct=!1;if(C){const Lt=b.get(C);if(Lt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),N.copy(C.viewport),V.copy(C.scissor),lt=C.scissorTest,Wt.viewport(N),Wt.scissor(V),Wt.setScissorTest(lt),st=-1;return}else if(Lt.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(Lt.__hasExternalTextures)Z.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ie=C.depthTexture;if(Lt.__boundDepthTexture!==ie){if(ie!==null&&b.has(ie)&&(C.width!==ie.image.width||C.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const jt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?at=jt[X][ct]:at=jt[X],$=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?at=b.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[ct]:at=jt,N.copy(C.viewport),V.copy(C.scissor),lt=C.scissorTest}else N.copy(tt).multiplyScalar(it).floor(),V.copy(gt).multiplyScalar(it).floor(),lt=Mt;if(ct!==0&&(at=Pa),Wt.bindFramebuffer(G.FRAMEBUFFER,at)&&Wt.drawBuffers(C,at),Wt.viewport(N),Wt.scissor(V),Wt.setScissorTest(lt),$){const Lt=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,ct)}else if(Ct){const Lt=X;for(let Xt=0;Xt<C.textures.length;Xt++){const jt=b.get(C.textures[Xt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xt,jt.__webglTexture,ct,Lt)}}else if(C!==null&&ct!==0){const Lt=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,ct)}st=-1},this.readRenderTargetPixels=function(C,X,ct,at,$,Ct,Bt,Lt=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt){Wt.bindFramebuffer(G.FRAMEBUFFER,Xt);try{const jt=C.textures[Lt],ie=jt.format,oe=jt.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),!Pe.textureFormatReadable(ie)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(oe)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-at&&ct>=0&&ct<=C.height-$&&G.readPixels(X,ct,at,$,wt.convert(ie),wt.convert(oe),Ct)}finally{const jt=J!==null?b.get(J).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,X,ct,at,$,Ct,Bt,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt)if(X>=0&&X<=C.width-at&&ct>=0&&ct<=C.height-$){Wt.bindFramebuffer(G.FRAMEBUFFER,Xt);const jt=C.textures[Lt],ie=jt.format,oe=jt.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),!Pe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Vt),G.bufferData(G.PIXEL_PACK_BUFFER,Ct.byteLength,G.STREAM_READ),G.readPixels(X,ct,at,$,wt.convert(ie),wt.convert(oe),0);const pe=J!==null?b.get(J).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,pe);const tn=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await dE(G,tn,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Vt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ct),G.deleteBuffer(Vt),G.deleteSync(tn),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ct=0){const at=Math.pow(2,-ct),$=Math.floor(C.image.width*at),Ct=Math.floor(C.image.height*at),Bt=X!==null?X.x:0,Lt=X!==null?X.y:0;Z.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ct,0,0,Bt,Lt,$,Ct),Wt.unbindTexture()};const Ia=G.createFramebuffer(),Er=G.createFramebuffer();this.copyTextureToTexture=function(C,X,ct=null,at=null,$=0,Ct=0){let Bt,Lt,Xt,jt,ie,oe,Vt,pe,tn;const en=C.isCompressedTexture?C.mipmaps[Ct]:C.image;if(ct!==null)Bt=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,Xt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,ie=ct.min.y,oe=ct.isBox3?ct.min.z:0;else{const hn=Math.pow(2,-$);Bt=Math.floor(en.width*hn),Lt=Math.floor(en.height*hn),C.isDataArrayTexture?Xt=en.depth:C.isData3DTexture?Xt=Math.floor(en.depth*hn):Xt=1,jt=0,ie=0,oe=0}at!==null?(Vt=at.x,pe=at.y,tn=at.z):(Vt=0,pe=0,tn=0);const Ce=wt.convert(X.format),Sn=wt.convert(X.type);let Gt;X.isData3DTexture?(Z.setTexture3D(X,0),Gt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Z.setTexture2DArray(X,0),Gt=G.TEXTURE_2D_ARRAY):(Z.setTexture2D(X,0),Gt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Hn=G.getParameter(G.UNPACK_ROW_LENGTH),se=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Gn=G.getParameter(G.UNPACK_SKIP_PIXELS),ai=G.getParameter(G.UNPACK_SKIP_ROWS),Ci=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,en.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,en.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oe);const ri=C.isDataArrayTexture||C.isData3DTexture,Ie=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const hn=b.get(C),kn=b.get(X),dn=b.get(hn.__renderTarget),Di=b.get(kn.__renderTarget);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,dn.__webglFramebuffer),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let ra=0;ra<Xt;ra++)ri&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(C).__webglTexture,$,oe+ra),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(X).__webglTexture,Ct,tn+ra)),G.blitFramebuffer(jt,ie,Bt,Lt,Vt,pe,Bt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||b.has(C)){const hn=b.get(C),kn=b.get(X);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,Ia),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Er);for(let dn=0;dn<Xt;dn++)ri?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,$,oe+dn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,$),Ie?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kn.__webglTexture,Ct,tn+dn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,kn.__webglTexture,Ct),$!==0?G.blitFramebuffer(jt,ie,Bt,Lt,Vt,pe,Bt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Ie?G.copyTexSubImage3D(Gt,Ct,Vt,pe,tn+dn,jt,ie,Bt,Lt):G.copyTexSubImage2D(Gt,Ct,Vt,pe,jt,ie,Bt,Lt);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ie?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Gt,Ct,Vt,pe,tn,Bt,Lt,Xt,Ce,Sn,en.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Ct,Vt,pe,tn,Bt,Lt,Xt,Ce,en.data):G.texSubImage3D(Gt,Ct,Vt,pe,tn,Bt,Lt,Xt,Ce,Sn,en):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ct,Vt,pe,Bt,Lt,Ce,Sn,en.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ct,Vt,pe,en.width,en.height,Ce,en.data):G.texSubImage2D(G.TEXTURE_2D,Ct,Vt,pe,Bt,Lt,Ce,Sn,en);G.pixelStorei(G.UNPACK_ROW_LENGTH,Hn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,se),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gn),G.pixelStorei(G.UNPACK_SKIP_ROWS,ai),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ci),Ct===0&&X.generateMipmaps&&G.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){F=0,W=0,J=null,Wt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),n.unpackColorSpace=ge._getUnpackColorSpace()}}class aC{static createButton(t,n={}){const a=document.createElement("button");function s(){if(n.domOverlay===void 0){const g=document.createElement("div");g.style.display="none",document.body.appendChild(g);const x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("width",38),x.setAttribute("height",38),x.style.position="absolute",x.style.right="20px",x.style.top="20px",x.addEventListener("click",function(){d.end()}),g.appendChild(x);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),y.setAttribute("stroke","#fff"),y.setAttribute("stroke-width",2),x.appendChild(y),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:g}}let d=null;async function v(g){g.addEventListener("end",_),t.xr.setReferenceSpaceType("local"),await t.xr.setSession(g),a.textContent="STOP AR",n.domOverlay.root.style.display="",d=g}function _(){d.removeEventListener("end",_),a.textContent="START AR",n.domOverlay.root.style.display="none",d=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){d===null?navigator.xr.requestSession("immersive-ar",n).then(v):(d.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(v).catch(g=>{console.warn(g)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(v).catch(g=>{console.warn(g)})}function l(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){l(),a.textContent="AR NOT SUPPORTED"}function f(d){l(),console.warn("Exception when trying to call xr.isSessionSupported",d),a.textContent="AR NOT ALLOWED"}function p(d){d.style.position="absolute",d.style.bottom="20px",d.style.padding="12px 6px",d.style.border="1px solid #fff",d.style.borderRadius="4px",d.style.background="rgba(0,0,0,0.1)",d.style.color="#fff",d.style.font="normal 13px sans-serif",d.style.textAlign="center",d.style.opacity="0.5",d.style.outline="none",d.style.zIndex="999"}if("xr"in navigator)return a.id="ARButton",a.style.display="none",p(a),navigator.xr.isSessionSupported("immersive-ar").then(function(d){d?s():u()}).catch(f),a;{const d=document.createElement("a");return window.isSecureContext===!1?(d.href=document.location.href.replace(/^http:/,"https:"),d.innerHTML="WEBXR NEEDS HTTPS"):(d.href="https://immersiveweb.dev/",d.innerHTML="WEBXR NOT AVAILABLE"),d.style.left="calc(50% - 90px)",d.style.width="180px",d.style.textDecoration="none",p(d),d}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Ti=Uint8Array,Js=Uint16Array,rC=Int32Array,iy=new Ti([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ay=new Ti([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sC=new Ti([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ry=function(o,t){for(var n=new Js(31),a=0;a<31;++a)n[a]=t+=1<<o[a-1];for(var s=new rC(n[30]),a=1;a<30;++a)for(var l=n[a];l<n[a+1];++l)s[l]=l-n[a]<<5|a;return{b:n,r:s}},sy=ry(iy,2),oy=sy.b,oC=sy.r;oy[28]=258,oC[258]=28;var lC=ry(ay,0),cC=lC.b,Pp=new Js(32768);for(var Qe=0;Qe<32768;++Qe){var hr=(Qe&43690)>>1|(Qe&21845)<<1;hr=(hr&52428)>>2|(hr&13107)<<2,hr=(hr&61680)>>4|(hr&3855)<<4,Pp[Qe]=((hr&65280)>>8|(hr&255)<<8)>>1}var yl=(function(o,t,n){for(var a=o.length,s=0,l=new Js(t);s<a;++s)o[s]&&++l[o[s]-1];var u=new Js(t);for(s=1;s<t;++s)u[s]=u[s-1]+l[s-1]<<1;var f;if(n){f=new Js(1<<t);var p=15-t;for(s=0;s<a;++s)if(o[s])for(var d=s<<4|o[s],v=t-o[s],_=u[o[s]-1]++<<v,g=_|(1<<v)-1;_<=g;++_)f[Pp[_]>>p]=d}else for(f=new Js(a),s=0;s<a;++s)o[s]&&(f[s]=Pp[u[o[s]-1]++]>>15-o[s]);return f}),Pl=new Ti(288);for(var Qe=0;Qe<144;++Qe)Pl[Qe]=8;for(var Qe=144;Qe<256;++Qe)Pl[Qe]=9;for(var Qe=256;Qe<280;++Qe)Pl[Qe]=7;for(var Qe=280;Qe<288;++Qe)Pl[Qe]=8;var ly=new Ti(32);for(var Qe=0;Qe<32;++Qe)ly[Qe]=5;var uC=yl(Pl,9,1),fC=yl(ly,5,1),Pd=function(o){for(var t=o[0],n=1;n<o.length;++n)o[n]>t&&(t=o[n]);return t},Fi=function(o,t,n){var a=t/8|0;return(o[a]|o[a+1]<<8)>>(t&7)&n},Id=function(o,t){var n=t/8|0;return(o[n]|o[n+1]<<8|o[n+2]<<16)>>(t&7)},hC=function(o){return(o+7)/8|0},dC=function(o,t,n){return(n==null||n>o.length)&&(n=o.length),new Ti(o.subarray(t,n))},pC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zi=function(o,t,n){var a=new Error(t||pC[o]);if(a.code=o,Error.captureStackTrace&&Error.captureStackTrace(a,zi),!n)throw a;return a},mC=function(o,t,n,a){var s=o.length,l=0;if(!s||t.f&&!t.l)return n||new Ti(0);var u=!n,f=u||t.i!=2,p=t.i;u&&(n=new Ti(s*3));var d=function($t){var qe=n.length;if($t>qe){var ve=new Ti(Math.max(qe*2,$t));ve.set(n),n=ve}},v=t.f||0,_=t.p||0,g=t.b||0,x=t.l,y=t.d,T=t.m,M=t.n,S=s*8;do{if(!x){v=Fi(o,_,1);var L=Fi(o,_+1,3);if(_+=3,L)if(L==1)x=uC,y=fC,T=9,M=5;else if(L==2){var P=Fi(o,_,31)+257,B=Fi(o,_+10,15)+4,A=P+Fi(o,_+5,31)+1;_+=14;for(var U=new Ti(A),ot=new Ti(19),F=0;F<B;++F)ot[sC[F]]=Fi(o,_+F*3,7);_+=B*3;for(var W=Pd(ot),J=(1<<W)-1,st=yl(ot,W,1),F=0;F<A;){var Q=st[Fi(o,_,J)];_+=Q&15;var w=Q>>4;if(w<16)U[F++]=w;else{var N=0,V=0;for(w==16?(V=3+Fi(o,_,3),_+=2,N=U[F-1]):w==17?(V=3+Fi(o,_,7),_+=3):w==18&&(V=11+Fi(o,_,127),_+=7);V--;)U[F++]=N}}var lt=U.subarray(0,P),ft=U.subarray(P);T=Pd(lt),M=Pd(ft),x=yl(lt,T,1),y=yl(ft,M,1)}else zi(1);else{var w=hC(_)+4,D=o[w-4]|o[w-3]<<8,z=w+D;if(z>s){p&&zi(0);break}f&&d(g+D),n.set(o.subarray(w,z),g),t.b=g+=D,t.p=_=z*8,t.f=v;continue}if(_>S){p&&zi(0);break}}f&&d(g+131072);for(var St=(1<<T)-1,I=(1<<M)-1,j=_;;j=_){var N=x[Id(o,_)&St],it=N>>4;if(_+=N&15,_>S){p&&zi(0);break}if(N||zi(2),it<256)n[g++]=it;else if(it==256){j=_,x=null;break}else{var yt=it-254;if(it>264){var F=it-257,Dt=iy[F];yt=Fi(o,_,(1<<Dt)-1)+oy[F],_+=Dt}var tt=y[Id(o,_)&I],gt=tt>>4;tt||zi(3),_+=tt&15;var ft=cC[gt];if(gt>3){var Dt=ay[gt];ft+=Id(o,_)&(1<<Dt)-1,_+=Dt}if(_>S){p&&zi(0);break}f&&d(g+131072);var Mt=g+yt;if(g<ft){var Ft=l-ft,Yt=Math.min(ft,Mt);for(Ft+g<0&&zi(3);g<Yt;++g)n[g]=a[Ft+g]}for(;g<Mt;++g)n[g]=n[g-ft]}}t.l=x,t.p=j,t.b=g,t.f=v,x&&(v=1,t.m=T,t.d=y,t.n=M)}while(!v);return g!=n.length&&u?dC(n,0,g):n.subarray(0,g)},gC=new Ti(0),_C=function(o,t){return((o[0]&15)!=8||o[0]>>4>7||(o[0]<<8|o[1])%31)&&zi(6,"invalid zlib data"),(o[1]>>5&1)==1&&zi(6,"invalid zlib data: "+(o[1]&32?"need":"unexpected")+" dictionary"),(o[1]>>3&4)+2};function vC(o,t){return mC(o.subarray(_C(o),-4),{i:2},t,t)}var xC=typeof TextDecoder<"u"&&new TextDecoder,yC=0;try{xC.decode(gC,{stream:!0}),yC=1}catch{}function cy(o,t,n){const a=n.length-o-1;if(t>=n[a])return a-1;if(t<=n[o])return o;let s=o,l=a,u=Math.floor((s+l)/2);for(;t<n[u]||t>=n[u+1];)t<n[u]?l=u:s=u,u=Math.floor((s+l)/2);return u}function SC(o,t,n,a){const s=[],l=[],u=[];s[0]=1;for(let f=1;f<=n;++f){l[f]=t-a[o+1-f],u[f]=a[o+f]-t;let p=0;for(let d=0;d<f;++d){const v=u[d+1],_=l[f-d],g=s[d]/(v+_);s[d]=p+v*g,p=_*g}s[f]=p}return s}function MC(o,t,n,a){const s=cy(o,a,t),l=SC(s,a,o,t),u=new Fe(0,0,0,0);for(let f=0;f<=o;++f){const p=n[s-o+f],d=l[f],v=p.w*d;u.x+=p.x*v,u.y+=p.y*v,u.z+=p.z*v,u.w+=p.w*d}return u}function EC(o,t,n,a,s){const l=[];for(let _=0;_<=n;++_)l[_]=0;const u=[];for(let _=0;_<=a;++_)u[_]=l.slice(0);const f=[];for(let _=0;_<=n;++_)f[_]=l.slice(0);f[0][0]=1;const p=l.slice(0),d=l.slice(0);for(let _=1;_<=n;++_){p[_]=t-s[o+1-_],d[_]=s[o+_]-t;let g=0;for(let x=0;x<_;++x){const y=d[x+1],T=p[_-x];f[_][x]=y+T;const M=f[x][_-1]/f[_][x];f[x][_]=g+y*M,g=T*M}f[_][_]=g}for(let _=0;_<=n;++_)u[0][_]=f[_][n];for(let _=0;_<=n;++_){let g=0,x=1;const y=[];for(let T=0;T<=n;++T)y[T]=l.slice(0);y[0][0]=1;for(let T=1;T<=a;++T){let M=0;const S=_-T,L=n-T;_>=T&&(y[x][0]=y[g][0]/f[L+1][S],M=y[x][0]*f[S][L]);const w=S>=-1?1:-S,D=_-1<=L?T-1:n-_;for(let P=w;P<=D;++P)y[x][P]=(y[g][P]-y[g][P-1])/f[L+1][S+P],M+=y[x][P]*f[S+P][L];_<=L&&(y[x][T]=-y[g][T-1]/f[L+1][_],M+=y[x][T]*f[_][L]),u[T][_]=M;const z=g;g=x,x=z}}let v=n;for(let _=1;_<=a;++_){for(let g=0;g<=n;++g)u[_][g]*=v;v*=n-_}return u}function bC(o,t,n,a,s){const l=s<o?s:o,u=[],f=cy(o,a,t),p=EC(f,a,o,l,t),d=[];for(let v=0;v<n.length;++v){const _=n[v].clone(),g=_.w;_.x*=g,_.y*=g,_.z*=g,d[v]=_}for(let v=0;v<=l;++v){const _=d[f-o].clone().multiplyScalar(p[v][0]);for(let g=1;g<=o;++g)_.add(d[f-o+g].clone().multiplyScalar(p[v][g]));u[v]=_}for(let v=l+1;v<=s+1;++v)u[v]=new Fe(0,0,0);return u}function TC(o,t){let n=1;for(let s=2;s<=o;++s)n*=s;let a=1;for(let s=2;s<=t;++s)a*=s;for(let s=2;s<=o-t;++s)a*=s;return n/a}function AC(o){const t=o.length,n=[],a=[];for(let l=0;l<t;++l){const u=o[l];n[l]=new Y(u.x,u.y,u.z),a[l]=u.w}const s=[];for(let l=0;l<t;++l){const u=n[l].clone();for(let f=1;f<=l;++f)u.sub(s[l-f].clone().multiplyScalar(TC(l,f)*a[f]));s[l]=u.divideScalar(a[0])}return s}function wC(o,t,n,a,s){const l=bC(o,t,n,a,s);return AC(l)}class RC extends ib{constructor(t,n,a,s,l){super();const u=n?n.length-1:0,f=a?a.length:0;this.degree=t,this.knots=n,this.controlPoints=[],this.startKnot=s||0,this.endKnot=l||u;for(let p=0;p<f;++p){const d=a[p];this.controlPoints[p]=new Fe(d.x,d.y,d.z,d.w)}}getPoint(t,n=new Y){const a=n,s=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),l=MC(this.degree,this.knots,this.controlPoints,s);return l.w!==1&&l.divideScalar(l.w),a.set(l.x,l.y,l.z)}getTangent(t,n=new Y){const a=n,s=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),l=wC(this.degree,this.knots,this.controlPoints,s,1);return a.copy(l[1]).normalize(),a}toJSON(){const t=super.toJSON();return t.degree=this.degree,t.knots=[...this.knots],t.controlPoints=this.controlPoints.map(n=>n.toArray()),t.startKnot=this.startKnot,t.endKnot=this.endKnot,t}fromJSON(t){return super.fromJSON(t),this.degree=t.degree,this.knots=[...t.knots],this.controlPoints=t.controlPoints.map(n=>new Fe(n[0],n[1],n[2],n[3])),this.startKnot=t.startKnot,this.endKnot=t.endKnot,this}}let xe,un,Yn;class CC extends Jr{constructor(t){super(t)}load(t,n,a,s){const l=this,u=l.path===""?Qb.extractUrlBase(t):l.path,f=new Gb(this.manager);f.setPath(l.path),f.setResponseType("arraybuffer"),f.setRequestHeader(l.requestHeader),f.setWithCredentials(l.withCredentials),f.load(t,function(p){try{n(l.parse(p,u))}catch(d){s?s(d):console.error(d),l.manager.itemError(t)}},a,s)}parse(t,n){if(PC(t))xe=new OC().parse(t);else{const s=hy(t);if(!IC(s))throw new Error("THREE.FBXLoader: Unknown format.");if(gx(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+gx(s));xe=new NC().parse(s)}const a=new Xb(this.manager).setPath(this.resourcePath||n).setCrossOrigin(this.crossOrigin);return new DC(a,this.manager).parse(xe)}}class DC{constructor(t,n){this.textureLoader=t,this.manager=n}parse(){un=this.parseConnections();const t=this.parseImages(),n=this.parseTextures(t),a=this.parseMaterials(n),s=this.parseDeformers(),l=new LC().parse(s);return this.parseScene(s,l,a),Yn}parseConnections(){const t=new Map;return"Connections"in xe&&xe.Connections.connections.forEach(function(a){const s=a[0],l=a[1],u=a[2];t.has(s)||t.set(s,{parents:[],children:[]});const f={ID:l,relationship:u};t.get(s).parents.push(f),t.has(l)||t.set(l,{parents:[],children:[]});const p={ID:s,relationship:u};t.get(l).children.push(p)}),t}parseImages(){const t={},n={};if("Video"in xe.Objects){const a=xe.Objects.Video;for(const s in a){const l=a[s],u=parseInt(s);if(t[u]=l.RelativeFilename||l.Filename,"Content"in l){const f=l.Content instanceof ArrayBuffer&&l.Content.byteLength>0,p=typeof l.Content=="string"&&l.Content!=="";if(f||p){const d=this.parseImage(a[s]);n[l.RelativeFilename||l.Filename]=d}}}}for(const a in t){const s=t[a];n[s]!==void 0?t[a]=n[s]:t[a]=t[a].split("\\").pop()}return t}parseImage(t){const n=t.Content,a=t.RelativeFilename||t.Filename,s=a.slice(a.lastIndexOf(".")+1).toLowerCase();let l;switch(s){case"bmp":l="image/bmp";break;case"jpg":case"jpeg":l="image/jpeg";break;case"png":l="image/png";break;case"tif":l="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",a),l="image/tga";break;case"webp":l="image/webp";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof n=="string")return"data:"+l+";base64,"+n;{const u=new Uint8Array(n);return window.URL.createObjectURL(new Blob([u],{type:l}))}}parseTextures(t){const n=new Map;if("Texture"in xe.Objects){const a=xe.Objects.Texture;for(const s in a){const l=this.parseTexture(a[s],t);n.set(parseInt(s),l)}}return n}parseTexture(t,n){const a=this.loadTexture(t,n);a.ID=t.id,a.name=t.attrName;const s=t.WrapModeU,l=t.WrapModeV,u=s!==void 0?s.value:0,f=l!==void 0?l.value:0;if(a.wrapS=u===0?Sl:Hi,a.wrapT=f===0?Sl:Hi,"Scaling"in t){const p=t.Scaling.value;a.repeat.x=p[0],a.repeat.y=p[1]}if("Translation"in t){const p=t.Translation.value;a.offset.x=p[0],a.offset.y=p[1]}return a}loadTexture(t,n){const a=t.FileName.split(".").pop().toLowerCase();let s=this.manager.getHandler(`.${a}`);s===null&&(s=this.textureLoader);const l=s.path;l||s.setPath(this.textureLoader.path);const u=un.get(t.id).children;let f;if(u!==void 0&&u.length>0&&n[u[0].ID]!==void 0&&(f=n[u[0].ID],(f.indexOf("blob:")===0||f.indexOf("data:")===0)&&s.setPath(void 0)),f===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new On;const p=s.load(f);return s.setPath(l),p}parseMaterials(t){const n=new Map;if("Material"in xe.Objects){const a=xe.Objects.Material;for(const s in a){const l=this.parseMaterial(a[s],t);l!==null&&n.set(parseInt(s),l)}}return n}parseMaterial(t,n){const a=t.id,s=t.attrName;let l=t.ShadingModel;if(typeof l=="object"&&(l=l.value),!un.has(a))return null;const u=this.parseParameters(t,n,a);let f;switch(l.toLowerCase()){case"phong":f=new vu;break;case"lambert":f=new wb;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',l),f=new vu;break}return f.setValues(u),f.name=s,f}parseParameters(t,n,a){const s={};t.BumpFactor&&(s.bumpScale=t.BumpFactor.value),t.Diffuse?s.color=ge.colorSpaceToWorking(new ae().fromArray(t.Diffuse.value),Ze):t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(s.color=ge.colorSpaceToWorking(new ae().fromArray(t.DiffuseColor.value),Ze)),t.DisplacementFactor&&(s.displacementScale=t.DisplacementFactor.value),t.Emissive?s.emissive=ge.colorSpaceToWorking(new ae().fromArray(t.Emissive.value),Ze):t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(s.emissive=ge.colorSpaceToWorking(new ae().fromArray(t.EmissiveColor.value),Ze)),t.EmissiveFactor&&(s.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),s.opacity=1-(t.TransparencyFactor?parseFloat(t.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=t.Opacity?parseFloat(t.Opacity.value):null,s.opacity===null&&(s.opacity=1-(t.TransparentColor?parseFloat(t.TransparentColor.value[0]):0))),s.opacity<1&&(s.transparent=!0),t.ReflectionFactor&&(s.reflectivity=t.ReflectionFactor.value),t.Shininess&&(s.shininess=t.Shininess.value),t.Specular?s.specular=ge.colorSpaceToWorking(new ae().fromArray(t.Specular.value),Ze):t.SpecularColor&&t.SpecularColor.type==="Color"&&(s.specular=ge.colorSpaceToWorking(new ae().fromArray(t.SpecularColor.value),Ze));const l=this;return un.get(a).children.forEach(function(u){const f=u.relationship;switch(f){case"Bump":s.bumpMap=l.getTexture(n,u.ID);break;case"Maya|TEX_ao_map":s.aoMap=l.getTexture(n,u.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=l.getTexture(n,u.ID),s.map!==void 0&&(s.map.colorSpace=Ze);break;case"DisplacementColor":s.displacementMap=l.getTexture(n,u.ID);break;case"EmissiveColor":s.emissiveMap=l.getTexture(n,u.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=Ze);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=l.getTexture(n,u.ID);break;case"ReflectionColor":s.envMap=l.getTexture(n,u.ID),s.envMap!==void 0&&(s.envMap.mapping=Au,s.envMap.colorSpace=Ze);break;case"SpecularColor":s.specularMap=l.getTexture(n,u.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=Ze);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=l.getTexture(n,u.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",f);break}}),s}getTexture(t,n){return"LayeredTexture"in xe.Objects&&n in xe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),n=un.get(n).children[0].ID),t.get(n)}parseDeformers(){const t={},n={};if("Deformer"in xe.Objects){const a=xe.Objects.Deformer;for(const s in a){const l=a[s],u=un.get(parseInt(s));if(l.attrType==="Skin"){const f=this.parseSkeleton(u,a);f.ID=s,u.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),f.geometryID=u.parents[0].ID,t[s]=f}else if(l.attrType==="BlendShape"){const f={id:s};f.rawTargets=this.parseMorphTargets(u,a),f.id=s,u.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),n[s]=f}}}return{skeletons:t,morphTargets:n}}parseSkeleton(t,n){const a=[];return t.children.forEach(function(s){const l=n[s.ID];if(l.attrType!=="Cluster")return;const u={ID:s.ID,indices:[],weights:[],transformLink:new Qt().fromArray(l.TransformLink.a)};"Indexes"in l&&(u.indices=l.Indexes.a,u.weights=l.Weights.a),a.push(u)}),{rawBones:a,bones:[]}}parseMorphTargets(t,n){const a=[];for(let s=0;s<t.children.length;s++){const l=t.children[s],u=n[l.ID],f={name:u.attrName,initialWeight:u.DeformPercent,id:u.id,fullWeights:u.FullWeights.a};if(u.attrType!=="BlendShapeChannel")return;f.geoID=un.get(parseInt(l.ID)).children.filter(function(p){return p.relationship===void 0})[0].ID,a.push(f)}return a}parseScene(t,n,a){Yn=new mr;const s=this.parseModels(t.skeletons,n,a),l=xe.Objects.Model,u=this;s.forEach(function(p){const d=l[p.ID];u.setLookAtProperties(p,d),un.get(p.ID).parents.forEach(function(_){const g=s.get(_.ID);g!==void 0&&g.add(p)}),p.parent===null&&Yn.add(p)}),this.bindSkeleton(t.skeletons,n,s),this.addGlobalSceneSettings(),Yn.traverse(function(p){if(p.userData.transformData){p.parent&&(p.userData.transformData.parentMatrix=p.parent.matrix,p.userData.transformData.parentMatrixWorld=p.parent.matrixWorld);const d=fy(p.userData.transformData);p.applyMatrix4(d),p.updateWorldMatrix()}});const f=new UC().parse();Yn.children.length===1&&Yn.children[0].isGroup&&(Yn.children[0].animations=f,Yn=Yn.children[0]),Yn.animations=f}parseModels(t,n,a){const s=new Map,l=xe.Objects.Model;for(const u in l){const f=parseInt(u),p=l[u],d=un.get(f);let v=this.buildSkeleton(d,t,f,p.attrName);if(!v){switch(p.attrType){case"Camera":v=this.createCamera(d);break;case"Light":v=this.createLight(d);break;case"Mesh":v=this.createMesh(d,n,a);break;case"NurbsCurve":v=this.createCurve(d,n);break;case"LimbNode":case"Root":v=new Cp;break;case"Null":default:v=new mr;break}v.name=p.attrName?Ue.sanitizeNodeName(p.attrName):"",v.userData.originalName=p.attrName,v.ID=f}this.getTransformData(v,p),s.set(f,v)}return s}buildSkeleton(t,n,a,s){let l=null;return t.parents.forEach(function(u){for(const f in n){const p=n[f];p.rawBones.forEach(function(d,v){if(d.ID===u.ID){const _=l;l=new Cp,l.matrixWorld.copy(d.transformLink),l.name=s?Ue.sanitizeNodeName(s):"",l.userData.originalName=s,l.ID=a,p.bones[v]=l,_!==null&&l.add(_)}})}}),l}createCamera(t){let n,a;if(t.children.forEach(function(s){const l=xe.Objects.NodeAttribute[s.ID];l!==void 0&&(a=l)}),a===void 0)n=new Je;else{let s=0;a.CameraProjectionType!==void 0&&a.CameraProjectionType.value===1&&(s=1);let l=1;a.NearPlane!==void 0&&(l=a.NearPlane.value/1e3);let u=1e3;a.FarPlane!==void 0&&(u=a.FarPlane.value/1e3);let f=window.innerWidth,p=window.innerHeight;a.AspectWidth!==void 0&&a.AspectHeight!==void 0&&(f=a.AspectWidth.value,p=a.AspectHeight.value);const d=f/p;let v=45;a.FieldOfView!==void 0&&(v=a.FieldOfView.value);const _=a.FocalLength?a.FocalLength.value:null;switch(s){case 0:n=new Kn(v,d,l,u),_!==null&&n.setFocalLength(_);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),n=new Je;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),n=new Je;break}}return n}createLight(t){let n,a;if(t.children.forEach(function(s){const l=xe.Objects.NodeAttribute[s.ID];l!==void 0&&(a=l)}),a===void 0)n=new Je;else{let s;a.LightType===void 0?s=0:s=a.LightType.value;let l=16777215;a.Color!==void 0&&(l=ge.colorSpaceToWorking(new ae().fromArray(a.Color.value),Ze));let u=a.Intensity===void 0?1:a.Intensity.value/100;a.CastLightOnObject!==void 0&&a.CastLightOnObject.value===0&&(u=0);let f=0;a.FarAttenuationEnd!==void 0&&(a.EnableFarAttenuation!==void 0&&a.EnableFarAttenuation.value===0?f=0:f=a.FarAttenuationEnd.value);const p=1;switch(s){case 0:n=new Gv(l,u,f,p);break;case 1:n=new Kx(l,u);break;case 2:let d=Math.PI/3;a.InnerAngle!==void 0&&(d=jn.degToRad(a.InnerAngle.value));let v=0;a.OuterAngle!==void 0&&(v=jn.degToRad(a.OuterAngle.value),v=Math.max(v,1)),n=new Yb(l,u,f,d,v,p);break;default:console.warn("THREE.FBXLoader: Unknown light type "+a.LightType.value+", defaulting to a PointLight."),n=new Gv(l,u);break}a.CastShadows!==void 0&&a.CastShadows.value===1&&(n.castShadow=!0)}return n}createMesh(t,n,a){let s,l=null,u=null;const f=[];if(t.children.forEach(function(p){n.has(p.ID)&&(l=n.get(p.ID)),a.has(p.ID)&&f.push(a.get(p.ID))}),f.length>1?u=f:f.length>0?u=f[0]:(u=new vu({name:Jr.DEFAULT_MATERIAL_NAME,color:13421772}),f.push(u)),"color"in l.attributes&&f.forEach(function(p){p.vertexColors=!0}),l.groups.length>0){let p=!1;for(let d=0,v=l.groups.length;d<v;d++){const _=l.groups[d];(_.materialIndex<0||_.materialIndex>=f.length)&&(_.materialIndex=f.length,p=!0)}if(p){const d=new vu;f.push(d)}}return l.FBX_Deformer?(s=new QE(l,u),s.normalizeSkinWeights()):s=new Rn(l,u),s}createCurve(t,n){const a=t.children.reduce(function(l,u){return n.has(u.ID)&&(l=n.get(u.ID)),l},null),s=new $p({name:Jr.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new zx(a,s)}getTransformData(t,n){const a={};"InheritType"in n&&(a.inheritType=parseInt(n.InheritType.value)),"RotationOrder"in n?a.eulerOrder=Ul(n.RotationOrder.value):a.eulerOrder=Ul(0),"Lcl_Translation"in n&&(a.translation=n.Lcl_Translation.value),"PreRotation"in n&&(a.preRotation=n.PreRotation.value),"Lcl_Rotation"in n&&(a.rotation=n.Lcl_Rotation.value),"PostRotation"in n&&(a.postRotation=n.PostRotation.value),"Lcl_Scaling"in n&&(a.scale=n.Lcl_Scaling.value),"ScalingOffset"in n&&(a.scalingOffset=n.ScalingOffset.value),"ScalingPivot"in n&&(a.scalingPivot=n.ScalingPivot.value),"RotationOffset"in n&&(a.rotationOffset=n.RotationOffset.value),"RotationPivot"in n&&(a.rotationPivot=n.RotationPivot.value),t.userData.transformData=a}setLookAtProperties(t,n){"LookAtProperty"in n&&un.get(t.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const l=xe.Objects.Model[s.ID];if("Lcl_Translation"in l){const u=l.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(u),Yn.add(t.target)):t.lookAt(new Y().fromArray(u))}}})}bindSkeleton(t,n,a){const s=this.parsePoseNodes();for(const l in t){const u=t[l];un.get(parseInt(u.ID)).parents.forEach(function(p){if(n.has(p.ID)){const d=p.ID;un.get(d).parents.forEach(function(_){a.has(_.ID)&&a.get(_.ID).bind(new Qp(u.bones),s[_.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in xe.Objects){const n=xe.Objects.Pose;for(const a in n)if(n[a].attrType==="BindPose"&&n[a].NbPoseNodes>0){const s=n[a].PoseNode;Array.isArray(s)?s.forEach(function(l){t[l.Node]=new Qt().fromArray(l.Matrix.a)}):t[s.Node]=new Qt().fromArray(s.Matrix.a)}}return t}addGlobalSceneSettings(){if("GlobalSettings"in xe){if("AmbientColor"in xe.GlobalSettings){const t=xe.GlobalSettings.AmbientColor.value,n=t[0],a=t[1],s=t[2];if(n!==0||a!==0||s!==0){const l=new ae().setRGB(n,a,s,Ze);Yn.add(new Kb(l,1))}}"UnitScaleFactor"in xe.GlobalSettings&&(Yn.userData.unitScaleFactor=xe.GlobalSettings.UnitScaleFactor.value)}}}class LC{constructor(){this.negativeMaterialIndices=!1}parse(t){const n=new Map;if("Geometry"in xe.Objects){const a=xe.Objects.Geometry;for(const s in a){const l=un.get(parseInt(s)),u=this.parseGeometry(l,a[s],t);n.set(parseInt(s),u)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),n}parseGeometry(t,n,a){switch(n.attrType){case"Mesh":return this.parseMeshGeometry(t,n,a);case"NurbsCurve":return this.parseNurbsGeometry(n)}}parseMeshGeometry(t,n,a){const s=a.skeletons,l=[],u=t.parents.map(function(_){return xe.Objects.Model[_.ID]});if(u.length===0)return;const f=t.children.reduce(function(_,g){return s[g.ID]!==void 0&&(_=s[g.ID]),_},null);t.children.forEach(function(_){a.morphTargets[_.ID]!==void 0&&l.push(a.morphTargets[_.ID])});const p=u[0],d={};"RotationOrder"in p&&(d.eulerOrder=Ul(p.RotationOrder.value)),"InheritType"in p&&(d.inheritType=parseInt(p.InheritType.value)),"GeometricTranslation"in p&&(d.translation=p.GeometricTranslation.value),"GeometricRotation"in p&&(d.rotation=p.GeometricRotation.value),"GeometricScaling"in p&&(d.scale=p.GeometricScaling.value);const v=fy(d);return this.genGeometry(n,f,l,v)}genGeometry(t,n,a,s){const l=new Pn;t.attrName&&(l.name=t.attrName);const u=this.parseGeoNode(t,n),f=this.genBuffers(u),p=new Ke(f.vertex,3);if(p.applyMatrix4(s),l.setAttribute("position",p),f.colors.length>0&&l.setAttribute("color",new Ke(f.colors,3)),n&&(l.setAttribute("skinIndex",new Zp(f.weightsIndices,4)),l.setAttribute("skinWeight",new Ke(f.vertexWeights,4)),l.FBX_Deformer=n),f.normal.length>0){const d=new fe().getNormalMatrix(s),v=new Ke(f.normal,3);v.applyNormalMatrix(d),l.setAttribute("normal",v)}if(f.uvs.forEach(function(d,v){const _=v===0?"uv":`uv${v}`;l.setAttribute(_,new Ke(f.uvs[v],2))}),u.material&&u.material.mappingType!=="AllSame"){let d=f.materialIndex[0],v=0;if(f.materialIndex.forEach(function(_,g){_!==d&&(l.addGroup(v,g-v,d),d=_,v=g)}),l.groups.length>0){const _=l.groups[l.groups.length-1],g=_.start+_.count;g!==f.materialIndex.length&&l.addGroup(g,f.materialIndex.length-g,d)}l.groups.length===0&&l.addGroup(0,f.materialIndex.length,f.materialIndex[0])}return this.addMorphTargets(l,t,a,s),l}parseGeoNode(t,n){const a={};if(a.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],a.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&t.LayerElementColor[0].Colors&&(a.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(a.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(a.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){a.uv=[];let s=0;for(;t.LayerElementUV[s];)t.LayerElementUV[s].UV&&a.uv.push(this.parseUVs(t.LayerElementUV[s])),s++}return a.weightTable={},n!==null&&(a.skeleton=n,n.rawBones.forEach(function(s,l){s.indices.forEach(function(u,f){a.weightTable[u]===void 0&&(a.weightTable[u]=[]),a.weightTable[u].push({id:l,weight:s.weights[f]})})})),a}genBuffers(t){const n={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let a=0,s=0,l=!1,u=[],f=[],p=[],d=[],v=[],_=[];const g=this;return t.vertexIndices.forEach(function(x,y){let T,M=!1;x<0&&(x=x^-1,M=!0);let S=[],L=[];if(u.push(x*3,x*3+1,x*3+2),t.color){const w=bu(y,a,x,t.color);p.push(w[0],w[1],w[2])}if(t.skeleton){if(t.weightTable[x]!==void 0&&t.weightTable[x].forEach(function(w){L.push(w.weight),S.push(w.id)}),L.length>4){l||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),l=!0);const w=[0,0,0,0],D=[0,0,0,0];L.forEach(function(z,P){let B=z,A=S[P];D.forEach(function(U,ot,F){if(B>U){F[ot]=B,B=U;const W=w[ot];w[ot]=A,A=W}})}),S=w,L=D}for(;L.length<4;)L.push(0),S.push(0);for(let w=0;w<4;++w)v.push(L[w]),_.push(S[w])}if(t.normal){const w=bu(y,a,x,t.normal);f.push(w[0],w[1],w[2])}t.material&&t.material.mappingType!=="AllSame"&&(T=bu(y,a,x,t.material)[0],T<0&&(g.negativeMaterialIndices=!0,T=0)),t.uv&&t.uv.forEach(function(w,D){const z=bu(y,a,x,w);d[D]===void 0&&(d[D]=[]),d[D].push(z[0]),d[D].push(z[1])}),s++,M&&(g.genFace(n,t,u,T,f,p,d,v,_,s),a++,s=0,u=[],f=[],p=[],d=[],v=[],_=[])}),n}getNormalNewell(t){const n=new Y(0,0,0);for(let a=0;a<t.length;a++){const s=t[a],l=t[(a+1)%t.length];n.x+=(s.y-l.y)*(s.z+l.z),n.y+=(s.z-l.z)*(s.x+l.x),n.z+=(s.x-l.x)*(s.y+l.y)}return n.normalize(),n}getNormalTangentAndBitangent(t){const n=this.getNormalNewell(t),s=(Math.abs(n.z)>.5?new Y(0,1,0):new Y(0,0,1)).cross(n).normalize(),l=n.clone().cross(s).normalize();return{normal:n,tangent:s,bitangent:l}}flattenVertex(t,n,a){return new he(t.dot(n),t.dot(a))}genFace(t,n,a,s,l,u,f,p,d,v){let _;if(v>3){const g=[],x=n.baseVertexPositions||n.vertexPositions;for(let S=0;S<a.length;S+=3)g.push(new Y(x[a[S]],x[a[S+1]],x[a[S+2]]));const{tangent:y,bitangent:T}=this.getNormalTangentAndBitangent(g),M=[];for(const S of g)M.push(this.flattenVertex(S,y,T));_=em.triangulateShape(M,[])}else _=[[0,1,2]];for(const[g,x,y]of _)t.vertex.push(n.vertexPositions[a[g*3]]),t.vertex.push(n.vertexPositions[a[g*3+1]]),t.vertex.push(n.vertexPositions[a[g*3+2]]),t.vertex.push(n.vertexPositions[a[x*3]]),t.vertex.push(n.vertexPositions[a[x*3+1]]),t.vertex.push(n.vertexPositions[a[x*3+2]]),t.vertex.push(n.vertexPositions[a[y*3]]),t.vertex.push(n.vertexPositions[a[y*3+1]]),t.vertex.push(n.vertexPositions[a[y*3+2]]),n.skeleton&&(t.vertexWeights.push(p[g*4]),t.vertexWeights.push(p[g*4+1]),t.vertexWeights.push(p[g*4+2]),t.vertexWeights.push(p[g*4+3]),t.vertexWeights.push(p[x*4]),t.vertexWeights.push(p[x*4+1]),t.vertexWeights.push(p[x*4+2]),t.vertexWeights.push(p[x*4+3]),t.vertexWeights.push(p[y*4]),t.vertexWeights.push(p[y*4+1]),t.vertexWeights.push(p[y*4+2]),t.vertexWeights.push(p[y*4+3]),t.weightsIndices.push(d[g*4]),t.weightsIndices.push(d[g*4+1]),t.weightsIndices.push(d[g*4+2]),t.weightsIndices.push(d[g*4+3]),t.weightsIndices.push(d[x*4]),t.weightsIndices.push(d[x*4+1]),t.weightsIndices.push(d[x*4+2]),t.weightsIndices.push(d[x*4+3]),t.weightsIndices.push(d[y*4]),t.weightsIndices.push(d[y*4+1]),t.weightsIndices.push(d[y*4+2]),t.weightsIndices.push(d[y*4+3])),n.color&&(t.colors.push(u[g*3]),t.colors.push(u[g*3+1]),t.colors.push(u[g*3+2]),t.colors.push(u[x*3]),t.colors.push(u[x*3+1]),t.colors.push(u[x*3+2]),t.colors.push(u[y*3]),t.colors.push(u[y*3+1]),t.colors.push(u[y*3+2])),n.material&&n.material.mappingType!=="AllSame"&&(t.materialIndex.push(s),t.materialIndex.push(s),t.materialIndex.push(s)),n.normal&&(t.normal.push(l[g*3]),t.normal.push(l[g*3+1]),t.normal.push(l[g*3+2]),t.normal.push(l[x*3]),t.normal.push(l[x*3+1]),t.normal.push(l[x*3+2]),t.normal.push(l[y*3]),t.normal.push(l[y*3+1]),t.normal.push(l[y*3+2])),n.uv&&n.uv.forEach(function(T,M){t.uvs[M]===void 0&&(t.uvs[M]=[]),t.uvs[M].push(f[M][g*2]),t.uvs[M].push(f[M][g*2+1]),t.uvs[M].push(f[M][x*2]),t.uvs[M].push(f[M][x*2+1]),t.uvs[M].push(f[M][y*2]),t.uvs[M].push(f[M][y*2+1])})}addMorphTargets(t,n,a,s){if(a.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const l=this;a.forEach(function(u){u.rawTargets.forEach(function(f){const p=xe.Objects.Geometry[f.geoID];p!==void 0&&l.genMorphGeometry(t,n,p,s,f.name)})})}genMorphGeometry(t,n,a,s,l){const u=n.Vertices!==void 0?n.Vertices.a:[],f=n.PolygonVertexIndex!==void 0?n.PolygonVertexIndex.a:[],p=a.Vertices!==void 0?a.Vertices.a:[],d=a.Indexes!==void 0?a.Indexes.a:[],v=t.attributes.position.count*3,_=new Float32Array(v);for(let T=0;T<d.length;T++){const M=d[T]*3;_[M]=p[T*3],_[M+1]=p[T*3+1],_[M+2]=p[T*3+2]}const g={vertexIndices:f,vertexPositions:_,baseVertexPositions:u},x=this.genBuffers(g),y=new Ke(x.vertex,3);y.name=l||a.attrName,y.applyMatrix4(s),t.morphAttributes.position.push(y)}parseNormals(t){const n=t.MappingInformationType,a=t.ReferenceInformationType,s=t.Normals.a;let l=[];return a==="IndexToDirect"&&("NormalIndex"in t?l=t.NormalIndex.a:"NormalsIndex"in t&&(l=t.NormalsIndex.a)),{dataSize:3,buffer:s,indices:l,mappingType:n,referenceType:a}}parseUVs(t){const n=t.MappingInformationType,a=t.ReferenceInformationType,s=t.UV.a;let l=[];return a==="IndexToDirect"&&(l=t.UVIndex.a),{dataSize:2,buffer:s,indices:l,mappingType:n,referenceType:a}}parseVertexColors(t){const n=t.MappingInformationType,a=t.ReferenceInformationType,s=t.Colors.a;let l=[];a==="IndexToDirect"&&(l=t.ColorIndex.a);for(let u=0,f=new ae;u<s.length;u+=4)f.fromArray(s,u),ge.colorSpaceToWorking(f,Ze),f.toArray(s,u);return{dataSize:4,buffer:s,indices:l,mappingType:n,referenceType:a}}parseMaterialIndices(t){const n=t.MappingInformationType,a=t.ReferenceInformationType;if(n==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:a};const s=t.Materials.a,l=[];for(let u=0;u<s.length;++u)l.push(u);return{dataSize:1,buffer:s,indices:l,mappingType:n,referenceType:a}}parseNurbsGeometry(t){const n=parseInt(t.Order);if(isNaN(n))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new Pn;const a=n-1,s=t.KnotVector.a,l=[],u=t.Points.a;for(let _=0,g=u.length;_<g;_+=4)l.push(new Fe().fromArray(u,_));let f,p;if(t.Form==="Closed")l.push(l[0]);else if(t.Form==="Periodic"){f=a,p=s.length-1-f;for(let _=0;_<a;++_)l.push(l[_])}const v=new RC(a,s,l,f,p).getPoints(l.length*12);return new Pn().setFromPoints(v)}}class UC{parse(){const t=[],n=this.parseClips();if(n!==void 0)for(const a in n){const s=n[a],l=this.addClip(s);t.push(l)}return t}parseClips(){if(xe.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const n=this.parseAnimationLayers(t);return this.parseAnimStacks(n)}parseAnimationCurveNodes(){const t=xe.Objects.AnimationCurveNode,n=new Map;for(const a in t){const s=t[a];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const l={id:s.id,attr:s.attrName,curves:{}};n.set(l.id,l)}}return n}parseAnimationCurves(t){const n=xe.Objects.AnimationCurve;for(const a in n){const s={id:n[a].id,times:n[a].KeyTime.a.map(FC),values:n[a].KeyValueFloat.a},l=un.get(s.id);if(l!==void 0){const u=l.parents[0].ID,f=l.parents[0].relationship;f.match(/X/)?t.get(u).curves.x=s:f.match(/Y/)?t.get(u).curves.y=s:f.match(/Z/)?t.get(u).curves.z=s:f.match(/DeformPercent/)&&t.has(u)&&(t.get(u).curves.morph=s)}}}parseAnimationLayers(t){const n=xe.Objects.AnimationLayer,a=new Map;for(const s in n){const l=[],u=un.get(parseInt(s));u!==void 0&&(u.children.forEach(function(p,d){if(t.has(p.ID)){const v=t.get(p.ID);if(v.curves.x!==void 0||v.curves.y!==void 0||v.curves.z!==void 0){if(l[d]===void 0){const _=un.get(p.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID;if(_!==void 0){const g=xe.Objects.Model[_.toString()];if(g===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",p);return}const x={modelName:g.attrName?Ue.sanitizeNodeName(g.attrName):"",ID:g.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Yn.traverse(function(y){y.ID===g.id&&(x.transform=y.matrix,y.userData.transformData&&(x.eulerOrder=y.userData.transformData.eulerOrder))}),x.transform||(x.transform=new Qt),"PreRotation"in g&&(x.preRotation=g.PreRotation.value),"PostRotation"in g&&(x.postRotation=g.PostRotation.value),l[d]=x}}l[d]&&(l[d][v.attr]=v)}else if(v.curves.morph!==void 0){if(l[d]===void 0){const _=un.get(p.ID).parents.filter(function(S){return S.relationship!==void 0})[0].ID,g=un.get(_).parents[0].ID,x=un.get(g).parents[0].ID,y=un.get(x).parents[0].ID,T=xe.Objects.Model[y],M={modelName:T.attrName?Ue.sanitizeNodeName(T.attrName):"",morphName:xe.Objects.Deformer[_].attrName};l[d]=M}l[d][v.attr]=v}}}),a.set(parseInt(s),l))}return a}parseAnimStacks(t){const n=xe.Objects.AnimationStack,a={};for(const s in n){const l=un.get(parseInt(s)).children;l.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const u=t.get(l[0].ID);a[s]={name:n[s].attrName,layer:u}}return a}addClip(t){let n=[];const a=this;return t.layer.forEach(function(s){n=n.concat(a.generateTracks(s))}),new Ib(t.name,-1,n)}generateTracks(t){const n=[];let a=new Y,s=new Y;if(t.transform&&t.transform.decompose(a,new Zn,s),a=a.toArray(),s=s.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const l=this.generateVectorTrack(t.modelName,t.T.curves,a,"position");l!==void 0&&n.push(l)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const l=this.generateRotationTrack(t.modelName,t.R.curves,t.preRotation,t.postRotation,t.eulerOrder);l!==void 0&&n.push(l)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const l=this.generateVectorTrack(t.modelName,t.S.curves,s,"scale");l!==void 0&&n.push(l)}if(t.DeformPercent!==void 0){const l=this.generateMorphTrack(t);l!==void 0&&n.push(l)}return n}generateVectorTrack(t,n,a,s){const l=this.getTimesForAllAxes(n),u=this.getKeyframeTrackValues(l,n,a);return new Ll(t+"."+s,l,u)}generateRotationTrack(t,n,a,s,l){let u,f;if(n.x!==void 0&&n.y!==void 0&&n.z!==void 0){const g=this.interpolateRotations(n.x,n.y,n.z,l);u=g[0],f=g[1]}const p=Ul(0);a!==void 0&&(a=a.map(jn.degToRad),a.push(p),a=new En().fromArray(a),a=new Zn().setFromEuler(a)),s!==void 0&&(s=s.map(jn.degToRad),s.push(p),s=new En().fromArray(s),s=new Zn().setFromEuler(s).invert());const d=new Zn,v=new En,_=[];if(!f||!u)return new lo(t+".quaternion",[0],[0]);for(let g=0;g<f.length;g+=3)v.set(f[g],f[g+1],f[g+2],l),d.setFromEuler(v),a!==void 0&&d.premultiply(a),s!==void 0&&d.multiply(s),g>2&&new Zn().fromArray(_,(g-3)/3*4).dot(d)<0&&d.set(-d.x,-d.y,-d.z,-d.w),d.toArray(_,g/3*4);return new lo(t+".quaternion",u,_)}generateMorphTrack(t){const n=t.DeformPercent.curves.morph,a=n.values.map(function(l){return l/100}),s=Yn.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new Dl(t.modelName+".morphTargetInfluences["+s+"]",n.times,a)}getTimesForAllAxes(t){let n=[];if(t.x!==void 0&&(n=n.concat(t.x.times)),t.y!==void 0&&(n=n.concat(t.y.times)),t.z!==void 0&&(n=n.concat(t.z.times)),n=n.sort(function(a,s){return a-s}),n.length>1){let a=1,s=n[0];for(let l=1;l<n.length;l++){const u=n[l];u!==s&&(n[a]=u,s=u,a++)}n=n.slice(0,a)}return n}getKeyframeTrackValues(t,n,a){const s=a,l=[];let u=-1,f=-1,p=-1;return t.forEach(function(d){if(n.x&&(u=n.x.times.indexOf(d)),n.y&&(f=n.y.times.indexOf(d)),n.z&&(p=n.z.times.indexOf(d)),u!==-1){const v=n.x.values[u];l.push(v),s[0]=v}else l.push(s[0]);if(f!==-1){const v=n.y.values[f];l.push(v),s[1]=v}else l.push(s[1]);if(p!==-1){const v=n.z.values[p];l.push(v),s[2]=v}else l.push(s[2])}),l}interpolateRotations(t,n,a,s){const l=[],u=[];l.push(t.times[0]),u.push(jn.degToRad(t.values[0])),u.push(jn.degToRad(n.values[0])),u.push(jn.degToRad(a.values[0]));for(let f=1;f<t.values.length;f++){const p=[t.values[f-1],n.values[f-1],a.values[f-1]];if(isNaN(p[0])||isNaN(p[1])||isNaN(p[2]))continue;const d=p.map(jn.degToRad),v=[t.values[f],n.values[f],a.values[f]];if(isNaN(v[0])||isNaN(v[1])||isNaN(v[2]))continue;const _=v.map(jn.degToRad),g=[v[0]-p[0],v[1]-p[1],v[2]-p[2]],x=[Math.abs(g[0]),Math.abs(g[1]),Math.abs(g[2])];if(x[0]>=180||x[1]>=180||x[2]>=180){const T=Math.max(...x)/180,M=new En(...d,s),S=new En(..._,s),L=new Zn().setFromEuler(M),w=new Zn().setFromEuler(S);L.dot(w)&&w.set(-w.x,-w.y,-w.z,-w.w);const D=t.times[f-1],z=t.times[f]-D,P=new Zn,B=new En;for(let A=0;A<1;A+=1/T)P.copy(L.clone().slerp(w.clone(),A)),l.push(D+A*z),B.setFromQuaternion(P,s),u.push(B.x),u.push(B.y),u.push(B.z)}else l.push(t.times[f]),u.push(jn.degToRad(t.values[f])),u.push(jn.degToRad(n.values[f])),u.push(jn.degToRad(a.values[f]))}return[l,u]}}class NC{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,n){this.currentProp=t,this.currentPropName=n}parse(t){this.currentIndent=0,this.allNodes=new uy,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const n=this,a=t.split(/[\r\n]+/);return a.forEach(function(s,l){const u=s.match(/^[\s\t]*;/),f=s.match(/^[\s\t]*$/);if(u||f)return;const p=s.match("^\\t{"+n.currentIndent+"}(\\w+):(.*){",""),d=s.match("^\\t{"+n.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),v=s.match("^\\t{"+(n.currentIndent-1)+"}}");p?n.parseNodeBegin(s,p):d?n.parseNodeProperty(s,d,a[++l]):v?n.popStack():s.match(/^[^\s\t}]/)&&n.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(t,n){const a=n[1].trim().replace(/^"/,"").replace(/"$/,""),s=n[2].split(",").map(function(p){return p.trim().replace(/^"/,"").replace(/"$/,"")}),l={name:a},u=this.parseNodeAttr(s),f=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(a,l):a in f?(a==="PoseNode"?f.PoseNode.push(l):f[a].id!==void 0&&(f[a]={},f[a][f[a].id]=f[a]),u.id!==""&&(f[a][u.id]=l)):typeof u.id=="number"?(f[a]={},f[a][u.id]=l):a!=="Properties70"&&(a==="PoseNode"?f[a]=[l]:f[a]=l),typeof u.id=="number"&&(l.id=u.id),u.name!==""&&(l.attrName=u.name),u.type!==""&&(l.attrType=u.type),this.pushStack(l)}parseNodeAttr(t){let n=t[0];t[0]!==""&&(n=parseInt(t[0]),isNaN(n)&&(n=t[0]));let a="",s="";return t.length>1&&(a=t[1].replace(/^(\w+)::/,""),s=t[2]),{id:n,name:a,type:s}}parseNodeProperty(t,n,a){let s=n[1].replace(/^"/,"").replace(/"$/,"").trim(),l=n[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&l===","&&(l=a.replace(/"/g,"").replace(/,$/,"").trim());const u=this.getCurrentNode();if(u.name==="Properties70"){this.parseNodeSpecialProperty(t,s,l);return}if(s==="C"){const p=l.split(",").slice(1),d=parseInt(p[0]),v=parseInt(p[1]);let _=l.split(",").slice(3);_=_.map(function(g){return g.trim().replace(/^"/,"")}),s="connections",l=[d,v],zC(l,_),u[s]===void 0&&(u[s]=[])}s==="Node"&&(u.id=l),s in u&&Array.isArray(u[s])?u[s].push(l):s!=="a"?u[s]=l:u.a=l,this.setCurrentProp(u,s),s==="a"&&l.slice(-1)!==","&&(u.a=Bd(l))}parseNodePropertyContinued(t){const n=this.getCurrentNode();n.a+=t,t.slice(-1)!==","&&(n.a=Bd(n.a))}parseNodeSpecialProperty(t,n,a){const s=a.split('",').map(function(v){return v.trim().replace(/^\"/,"").replace(/\s/,"_")}),l=s[0],u=s[1],f=s[2],p=s[3];let d=s[4];switch(u){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":d=parseFloat(d);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":d=Bd(d);break}this.getPrevNode()[l]={type:u,type2:f,flag:p,value:d},this.setCurrentProp(this.getPrevNode(),l)}}class OC{parse(t){const n=new mx(t);n.skip(23);const a=n.getUint32();if(a<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+a);const s=new uy;for(;!this.endOfContent(n);){const l=this.parseNode(n,a);l!==null&&s.add(l.name,l)}return s}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,n){const a={},s=n>=7500?t.getUint64():t.getUint32(),l=n>=7500?t.getUint64():t.getUint32();n>=7500?t.getUint64():t.getUint32();const u=t.getUint8(),f=t.getString(u);if(s===0)return null;const p=[];for(let g=0;g<l;g++)p.push(this.parseProperty(t));const d=p.length>0?p[0]:"",v=p.length>1?p[1]:"",_=p.length>2?p[2]:"";for(a.singleProperty=l===1&&t.getOffset()===s;s>t.getOffset();){const g=this.parseNode(t,n);g!==null&&this.parseSubNode(f,a,g)}return a.propertyList=p,typeof d=="number"&&(a.id=d),v!==""&&(a.attrName=v),_!==""&&(a.attrType=_),f!==""&&(a.name=f),a}parseSubNode(t,n,a){if(a.singleProperty===!0){const s=a.propertyList[0];Array.isArray(s)?(n[a.name]=a,a.a=s):n[a.name]=s}else if(t==="Connections"&&a.name==="C"){const s=[];a.propertyList.forEach(function(l,u){u!==0&&s.push(l)}),n.connections===void 0&&(n.connections=[]),n.connections.push(s)}else if(a.name==="Properties70")Object.keys(a).forEach(function(l){n[l]=a[l]});else if(t==="Properties70"&&a.name==="P"){let s=a.propertyList[0],l=a.propertyList[1];const u=a.propertyList[2],f=a.propertyList[3];let p;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),l.indexOf("Lcl ")===0&&(l=l.replace("Lcl ","Lcl_")),l==="Color"||l==="ColorRGB"||l==="Vector"||l==="Vector3D"||l.indexOf("Lcl_")===0?p=[a.propertyList[4],a.propertyList[5],a.propertyList[6]]:p=a.propertyList[4],n[s]={type:l,type2:u,flag:f,value:p}}else n[a.name]===void 0?typeof a.id=="number"?(n[a.name]={},n[a.name][a.id]=a):n[a.name]=a:a.name==="PoseNode"?(Array.isArray(n[a.name])||(n[a.name]=[n[a.name]]),n[a.name].push(a)):n[a.name][a.id]===void 0&&(n[a.name][a.id]=a)}parseProperty(t){const n=t.getString(1);let a;switch(n){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return a=t.getUint32(),t.getArrayBuffer(a);case"S":return a=t.getUint32(),t.getString(a);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=t.getUint32(),l=t.getUint32(),u=t.getUint32();if(l===0)switch(n){case"b":case"c":return t.getBooleanArray(s);case"d":return t.getFloat64Array(s);case"f":return t.getFloat32Array(s);case"i":return t.getInt32Array(s);case"l":return t.getInt64Array(s)}const f=vC(new Uint8Array(t.getArrayBuffer(u))),p=new mx(f.buffer);switch(n){case"b":case"c":return p.getBooleanArray(s);case"d":return p.getFloat64Array(s);case"f":return p.getFloat32Array(s);case"i":return p.getInt32Array(s);case"l":return p.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+n)}}}class mx{constructor(t,n){this.dv=new DataView(t),this.offset=0,this.littleEndian=n!==void 0?n:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const n=[];for(let a=0;a<t;a++)n.push(this.getBoolean());return n}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const n=[];for(let a=0;a<t;a++)n.push(this.getInt32());return n}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,n;return this.littleEndian?(t=this.getUint32(),n=this.getUint32()):(n=this.getUint32(),t=this.getUint32()),n&2147483648?(n=~n&4294967295,t=~t&4294967295,t===4294967295&&(n=n+1&4294967295),t=t+1&4294967295,-(n*4294967296+t)):n*4294967296+t}getInt64Array(t){const n=[];for(let a=0;a<t;a++)n.push(this.getInt64());return n}getUint64(){let t,n;return this.littleEndian?(t=this.getUint32(),n=this.getUint32()):(n=this.getUint32(),t=this.getUint32()),n*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const n=[];for(let a=0;a<t;a++)n.push(this.getFloat32());return n}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const n=[];for(let a=0;a<t;a++)n.push(this.getFloat64());return n}getArrayBuffer(t){const n=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,n}getString(t){const n=this.offset;let a=new Uint8Array(this.dv.buffer,n,t);this.skip(t);const s=a.indexOf(0);return s>=0&&(a=new Uint8Array(this.dv.buffer,n,s)),this._textDecoder.decode(a)}}class uy{add(t,n){this[t]=n}}function PC(o){const t="Kaydara FBX Binary  \0";return o.byteLength>=t.length&&t===hy(o,0,t.length)}function IC(o){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let n=0;function a(s){const l=o[s-1];return o=o.slice(n+s),n++,l}for(let s=0;s<t.length;++s)if(a(1)===t[s])return!1;return!0}function gx(o){const t=/FBXVersion: (\d+)/,n=o.match(t);if(n)return parseInt(n[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function FC(o){return o/46186158e3}const BC=[];function bu(o,t,n,a){let s;switch(a.mappingType){case"ByPolygonVertex":s=o;break;case"ByPolygon":s=t;break;case"ByVertice":s=n;break;case"AllSame":s=a.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+a.mappingType)}a.referenceType==="IndexToDirect"&&(s=a.indices[s]);const l=s*a.dataSize,u=l+a.dataSize;return VC(BC,a.buffer,l,u)}const Fd=new En,Ks=new Y;function fy(o){const t=new Qt,n=new Qt,a=new Qt,s=new Qt,l=new Qt,u=new Qt,f=new Qt,p=new Qt,d=new Qt,v=new Qt,_=new Qt,g=new Qt,x=o.inheritType?o.inheritType:0;o.translation&&t.setPosition(Ks.fromArray(o.translation));const y=Ul(0);if(o.preRotation){const F=o.preRotation.map(jn.degToRad);F.push(y),n.makeRotationFromEuler(Fd.fromArray(F))}if(o.rotation){const F=o.rotation.map(jn.degToRad);F.push(o.eulerOrder||y),a.makeRotationFromEuler(Fd.fromArray(F))}if(o.postRotation){const F=o.postRotation.map(jn.degToRad);F.push(y),s.makeRotationFromEuler(Fd.fromArray(F)),s.invert()}o.scale&&l.scale(Ks.fromArray(o.scale)),o.scalingOffset&&f.setPosition(Ks.fromArray(o.scalingOffset)),o.scalingPivot&&u.setPosition(Ks.fromArray(o.scalingPivot)),o.rotationOffset&&p.setPosition(Ks.fromArray(o.rotationOffset)),o.rotationPivot&&d.setPosition(Ks.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(_.copy(o.parentMatrix),v.copy(o.parentMatrixWorld));const T=n.clone().multiply(a).multiply(s),M=new Qt;M.extractRotation(v);const S=new Qt;S.copyPosition(v);const L=S.clone().invert().multiply(v),w=M.clone().invert().multiply(L),D=l,z=new Qt;if(x===0)z.copy(M).multiply(T).multiply(w).multiply(D);else if(x===1)z.copy(M).multiply(w).multiply(T).multiply(D);else{const W=new Qt().scale(new Y().setFromMatrixScale(_)).clone().invert(),J=w.clone().multiply(W);z.copy(M).multiply(T).multiply(J).multiply(D)}const P=d.clone().invert(),B=u.clone().invert();let A=t.clone().multiply(p).multiply(d).multiply(n).multiply(a).multiply(s).multiply(P).multiply(f).multiply(u).multiply(l).multiply(B);const U=new Qt().copyPosition(A),ot=v.clone().multiply(U);return g.copyPosition(ot),A=g.clone().multiply(z),A.premultiply(v.invert()),A}function Ul(o){o=o||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[o]}function Bd(o){return o.split(",").map(function(n){return parseFloat(n)})}function hy(o,t,n){return t===void 0&&(t=0),n===void 0&&(n=o.byteLength),new TextDecoder().decode(new Uint8Array(o,t,n))}function zC(o,t){for(let n=0,a=o.length,s=t.length;n<s;n++,a++)o[a]=t[n]}function VC(o,t,n,a){for(let s=n,l=0;s<a;s++,l++)o[l]=t[s];return o}const zd=o=>`/ar-test-app/catapult-assets/${o}`;function HC(){const o=Bi.useRef(null),t=Bi.useRef({mode:"target",targets:[],hitTestSourceRequested:!1,pullPower:0,projectiles:[],score:0,didDrag:!1}),[n,a]=Bi.useState("target"),[s,l]=Bi.useState(0),[u,f]=Bi.useState(0),[p,d]=Bi.useState("Start AR, scan a flat surface, then tap to place targets."),[v,_]=Bi.useState("Checking Android WebXR support...");Bi.useEffect(()=>{t.current.mode=n},[n]),Bi.useEffect(()=>{var x;if(!window.isSecureContext){_("WebXR needs HTTPS. Use the GitHub Pages URL, not plain HTTP.");return}if(!("xr"in navigator)){_("WebXR is not available. Open this page directly in Android Chrome.");return}(x=navigator.xr)==null||x.isSessionSupported("immersive-ar").then(y=>{_(y?"AR is supported. Press START AR.":"immersive-ar is not supported on this browser/device. Use Android Chrome with Google Play Services for AR.")}).catch(()=>{_("Chrome blocked the WebXR support check. Check site permissions and ARCore support.")})},[]),Bi.useEffect(()=>{const x=o.current;if(!x)return;const y=t.current,T=new XE,M=new Kn(70,window.innerWidth/window.innerHeight,.01,30),S=new iC({antialias:!0,alpha:!0});S.setPixelRatio(window.devicePixelRatio),S.setSize(window.innerWidth,window.innerHeight),S.xr.enabled=!0,x.appendChild(S.domElement);const L=new Audio(zd("catapult.wav")),w=new CC,D=new cT,z=new dr(new Y(0,1,0),0),P=new Y;let B,A;T.add(new Wb(16777215,5596791,2.4));const U=new Kx(16777215,2);U.position.set(1,3,2),T.add(U);const ot=new nm(.08,.1,32).rotateX(-Math.PI/2),F=new Kp({color:4511656}),W=new Rn(ot,F);W.matrixAutoUpdate=!1,W.visible=!1,T.add(W),y.reticle=W;const J=new $p({color:16738877}),st=new Pn().setFromPoints([new Y,new Y]),Q=new zx(st,J);Q.visible=!1,T.add(Q),w.load(zd("catapult.fbx"),it=>{B=_x(it,.45)}),w.load(zd("target.fbx"),it=>{A=_x(it,.32)});const N=aC.createButton(S,{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:document.body}});N.classList.add("systemArButton"),document.body.appendChild(N);const V=()=>{if(!W.visible){d("Point the phone at a floor or table until the green reticle appears.");return}if(y.mode==="target"){const it=vx(A,"target");it.position.setFromMatrixPosition(W.matrix),it.userData.hit=!1,it.userData.movable=!0,T.add(it),y.targets.push(it),d(`Targets: ${y.targets.length}. Drag a target to move it, or switch to catapult mode.`);return}if(y.mode==="catapult"){y.catapult&&T.remove(y.catapult);const it=vx(B,"catapult");it.position.setFromMatrixPosition(W.matrix),it.lookAt(M.position.x,it.position.y,M.position.z),it.userData.movable=!0,T.add(it),y.catapult=it,a("fire"),d("Catapult is ready. Pull back on the screen and release to fire.")}},lt=it=>{const yt=it.target;return yt instanceof Element&&!!yt.closest(".controls, #ARButton")},ft=it=>{if(!lt(it)){if(y.mode!=="fire"){const yt=GC(it,M,D,y);yt&&(y.dragObject=yt,y.dragStart=new he(it.clientX,it.clientY),y.didDrag=!1,d("Drag to move the selected object."));return}y.mode==="fire"&&(y.pullStart=new he(it.clientX,it.clientY),y.pullPower=0,d("Keep pulling to charge, then release."))}},St=it=>{if(lt(it))return;if(y.dragObject&&y.dragStart){const Yt=new he(it.clientX,it.clientY);y.didDrag=y.didDrag||Yt.distanceTo(y.dragStart)>8,y.didDrag&&(z.constant=-y.dragObject.position.y,dy(it,M,D),D.ray.intersectPlane(z,P)&&(y.dragObject.position.x=P.x,y.dragObject.position.z=P.z,y.dragObject===y.catapult&&y.dragObject.lookAt(M.position.x,y.dragObject.position.y,M.position.z)));return}if(y.mode!=="fire"||!y.pullStart||!y.catapult)return;const Dt=new he(it.clientX,it.clientY).sub(y.pullStart),tt=Math.min(Dt.length(),240);y.pullPower=tt/240,f(Math.round(y.pullPower*100));const gt=py(y.catapult),Mt=my(y.catapult),Ft=gt.clone().add(Mt.multiplyScalar(.35+y.pullPower*.7));Q.geometry.setFromPoints([gt,Ft]),Q.visible=!0},I=it=>{if(!lt(it)){if(y.dragObject){const yt=y.didDrag;y.dragObject=void 0,y.dragStart=void 0,y.didDrag=!1,yt&&d("Object moved. Drag again or tap empty space to place a new object.");return}if(y.mode!=="fire"){V();return}y.mode!=="fire"||!y.catapult||!y.pullStart||(y.pullPower>.08?(WC(T,y,L),d("Shot fired. Pull and release again to shoot another projectile.")):d("Pull farther back before releasing."),y.pullStart=void 0,y.pullPower=0,f(0),Q.visible=!1)}};document.addEventListener("pointerdown",ft),document.addEventListener("pointermove",St),document.addEventListener("pointerup",I),S.setAnimationLoop((it,yt)=>{yt&&XC(S,yt,y),qC(T,y,l),S.render(T,M)});const j=()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",j),()=>{S.setAnimationLoop(null),document.removeEventListener("pointerdown",ft),document.removeEventListener("pointermove",St),document.removeEventListener("pointerup",I),window.removeEventListener("resize",j),N.remove(),x.removeChild(S.domElement),S.dispose()}},[]);const g=()=>{window.location.reload()};return xn.jsxs("main",{className:"app",children:[xn.jsx("div",{ref:o,className:"xrMount"}),xn.jsxs("section",{className:"topPanel",children:[xn.jsx("p",{className:"eyebrow",children:"Android WebXR"}),xn.jsx("h1",{children:"AR Catapult"}),xn.jsx("p",{children:p}),xn.jsx("p",{className:"xrStatus",children:v})]}),n==="fire"&&xn.jsx("div",{className:"firePad","aria-hidden":"true",children:xn.jsx("span",{children:"Pull back and release"})}),xn.jsxs("section",{className:"hud","aria-label":"Scene controls",children:[xn.jsxs("div",{className:"stats",children:[xn.jsxs("span",{children:["Hits: ",s]}),xn.jsxs("span",{children:["Power: ",u,"%"]})]}),xn.jsxs("div",{className:"controls",children:[xn.jsx("button",{className:n==="target"?"active":"",onClick:()=>a("target"),children:"Targets"}),xn.jsx("button",{className:n==="catapult"?"active":"",onClick:()=>a("catapult"),children:"Catapult"}),xn.jsx("button",{className:n==="fire"?"active":"",onClick:()=>a("fire"),children:"Fire"}),xn.jsx("button",{onClick:g,children:"Reset"})]})]})]})}function dy(o,t,n){const a=new he(o.clientX/window.innerWidth*2-1,-(o.clientY/window.innerHeight)*2+1);n.setFromCamera(a,t)}function GC(o,t,n,a){const s=a.catapult?[...a.targets,a.catapult]:[...a.targets];if(s.length===0)return;dy(o,t,n);const u=n.intersectObjects(s,!0)[0];if(u)return kC(u.object,a)}function kC(o,t){let n=o;for(;n;){if(n===t.catapult||t.targets.includes(n))return n;n=n.parent}}function _x(o,t){const a=new xr().setFromObject(o).getSize(new Y),s=Math.max(a.x,a.y,a.z)||1;o.scale.multiplyScalar(t/s);const l=new xr().setFromObject(o);return o.position.y-=l.min.y,o.traverse(u=>{u instanceof Rn&&(u.castShadow=!0,u.receiveShadow=!0)}),o}function vx(o,t){if(o)return o.clone(!0);if(t==="target"){const l=new mr,u=new Rn(new tm(.01,.01,.35,12),new ml({color:2236962}));u.position.y=.18;const f=new Rn(new _r(.28,.18,.03),new ml({color:14894386}));return f.position.y=.42,l.add(u,f),l}const n=new mr,a=new Rn(new _r(.42,.15,.25),new ml({color:9132587}));a.position.y=.08;const s=new Rn(new _r(.06,.06,.5),new ml({color:5977373}));return s.position.set(0,.22,-.08),s.rotation.x=-.45,n.add(a,s),n}function XC(o,t,n){const a=o.xr.getReferenceSpace(),s=o.xr.getSession();if(!a||!s||!n.reticle||(n.hitTestSourceRequested||(s.requestReferenceSpace("viewer").then(u=>{var d;const f=(d=s.requestHitTestSource)==null?void 0:d.bind(s);if(!f)return;const p=f({space:u});p&&p.then(v=>{n.hitTestSource=v})}),s.addEventListener("end",()=>{n.hitTestSourceRequested=!1,n.hitTestSource=void 0}),n.hitTestSourceRequested=!0),!n.hitTestSource))return;const l=t.getHitTestResults(n.hitTestSource);if(l.length>0){const f=l[0].getPose(a);if(!f)return;n.reticle.visible=!0,n.reticle.matrix.fromArray(f.transform.matrix)}else n.reticle.visible=!1}function WC(o,t,n){if(!t.catapult)return;const a=py(t.catapult),s=my(t.catapult),l=new Rn(new im(.035,16,16),new ml({color:2105376}));l.position.copy(a),o.add(l);const u=1.1+t.pullPower*3.2,f=s.multiplyScalar(u);f.y+=.65+t.pullPower*1.1,t.projectiles.push({mesh:l,velocity:f,bornAt:performance.now()}),n.currentTime=0,n.play().catch(()=>{})}function qC(o,t,n){const a=new Y(0,-.018,0);t.projectiles=t.projectiles.filter(s=>{s.velocity.add(a),s.mesh.position.add(s.velocity.clone().multiplyScalar(.016));for(const u of t.targets){if(u.userData.hit)continue;if(s.mesh.position.distanceTo(u.position.clone().add(new Y(0,.22,0)))<.22)return u.userData.hit=!0,u.scale.multiplyScalar(.72),t.score+=1,n(t.score),o.remove(s.mesh),!1}return performance.now()-s.bornAt>6e3||s.mesh.position.y<-1?(o.remove(s.mesh),!1):!0})}function py(o){return o.position.clone().add(new Y(0,.28,0))}function my(o){const t=new Y(0,0,-1);return t.applyQuaternion(o.quaternion),t.y=0,t.normalize()}CM.createRoot(document.getElementById("root")).render(xn.jsx(Bi.StrictMode,{children:xn.jsx(HC,{})}));
