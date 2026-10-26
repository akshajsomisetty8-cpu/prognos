(()=>{var WS=Object.create;var Fm=Object.defineProperty;var XS=Object.getOwnPropertyDescriptor;var qS=Object.getOwnPropertyNames;var YS=Object.getPrototypeOf,ZS=Object.prototype.hasOwnProperty;var vi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var JS=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qS(t))!ZS.call(e,s)&&s!==n&&Fm(e,s,{get:()=>t[s],enumerable:!(i=XS(t,s))||i.enumerable});return e};var ia=(e,t,n)=>(n=e!=null?WS(YS(e)):{},JS(t||!e||!e.__esModule?Fm(n,"default",{value:e,enumerable:!0}):n,e));var Km=vi(Vt=>{"use strict";var Ch=Symbol.for("react.transitional.element"),KS=Symbol.for("react.portal"),jS=Symbol.for("react.fragment"),QS=Symbol.for("react.strict_mode"),$S=Symbol.for("react.profiler"),tb=Symbol.for("react.consumer"),eb=Symbol.for("react.context"),nb=Symbol.for("react.forward_ref"),ib=Symbol.for("react.suspense"),sb=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),ab=Symbol.for("react.activity"),Hm=Symbol.iterator;function rb(e){return e===null||typeof e!="object"?null:(e=Hm&&e[Hm]||e["@@iterator"],typeof e=="function"?e:null)}var Xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Ym={};function Ha(e,t,n){this.props=e,this.context=t,this.refs=Ym,this.updater=n||Xm}Ha.prototype.isReactComponent={};Ha.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ha.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zm(){}Zm.prototype=Ha.prototype;function Lh(e,t,n){this.props=e,this.context=t,this.refs=Ym,this.updater=n||Xm}var Uh=Lh.prototype=new Zm;Uh.constructor=Lh;qm(Uh,Ha.prototype);Uh.isPureReactComponent=!0;var Vm=Array.isArray;function Rh(){}var ge={H:null,A:null,T:null,S:null},Jm=Object.prototype.hasOwnProperty;function Dh(e,t,n){var i=n.ref;return{$$typeof:Ch,type:e,key:t,ref:i!==void 0?i:null,props:n}}function ob(e,t){return Dh(e.type,t,e.props)}function Nh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ch}function lb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gm=/\/+/g;function wh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lb(""+e.key):t.toString(36)}function cb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Rh,Rh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Fa(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ch:case KS:r=!0;break;case Wm:return r=e._init,Fa(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+wh(e,0):i,Vm(s)?(n="",r!=null&&(n=r.replace(Gm,"$&/")+"/"),Fa(s,t,n,"",function(c){return c})):s!=null&&(Nh(s)&&(s=ob(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Gm,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Vm(e))for(var l=0;l<e.length;l++)i=e[l],a=o+wh(i,l),r+=Fa(i,t,n,a,s);else if(l=rb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+wh(i,l++),r+=Fa(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Fa(cb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Hl(e,t,n){if(e==null)return e;var i=[],s=0;return Fa(e,i,"","",function(a){return t.call(n,a,s++)}),i}function ub(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var km=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hb={map:Hl,forEach:function(e,t,n){Hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hl(e,function(){t++}),t},toArray:function(e){return Hl(e,function(t){return t})||[]},only:function(e){if(!Nh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Vt.Activity=ab;Vt.Children=hb;Vt.Component=Ha;Vt.Fragment=jS;Vt.Profiler=$S;Vt.PureComponent=Lh;Vt.StrictMode=QS;Vt.Suspense=ib;Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ge;Vt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ge.H.useMemoCache(e)}};Vt.cache=function(e){return function(){return e.apply(null,arguments)}};Vt.cacheSignal=function(){return null};Vt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=qm({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Jm.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Dh(e.type,s,i)};Vt.createContext=function(e){return e={$$typeof:eb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:tb,_context:e},e};Vt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Jm.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Dh(e,a,s)};Vt.createRef=function(){return{current:null}};Vt.forwardRef=function(e){return{$$typeof:nb,render:e}};Vt.isValidElement=Nh;Vt.lazy=function(e){return{$$typeof:Wm,_payload:{_status:-1,_result:e},_init:ub}};Vt.memo=function(e,t){return{$$typeof:sb,type:e,compare:t===void 0?null:t}};Vt.startTransition=function(e){var t=ge.T,n={};ge.T=n;try{var i=e(),s=ge.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Rh,km)}catch(a){km(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ge.T=t}};Vt.unstable_useCacheRefresh=function(){return ge.H.useCacheRefresh()};Vt.use=function(e){return ge.H.use(e)};Vt.useActionState=function(e,t,n){return ge.H.useActionState(e,t,n)};Vt.useCallback=function(e,t){return ge.H.useCallback(e,t)};Vt.useContext=function(e){return ge.H.useContext(e)};Vt.useDebugValue=function(){};Vt.useDeferredValue=function(e,t){return ge.H.useDeferredValue(e,t)};Vt.useEffect=function(e,t){return ge.H.useEffect(e,t)};Vt.useEffectEvent=function(e){return ge.H.useEffectEvent(e)};Vt.useId=function(){return ge.H.useId()};Vt.useImperativeHandle=function(e,t,n){return ge.H.useImperativeHandle(e,t,n)};Vt.useInsertionEffect=function(e,t){return ge.H.useInsertionEffect(e,t)};Vt.useLayoutEffect=function(e,t){return ge.H.useLayoutEffect(e,t)};Vt.useMemo=function(e,t){return ge.H.useMemo(e,t)};Vt.useOptimistic=function(e,t){return ge.H.useOptimistic(e,t)};Vt.useReducer=function(e,t,n){return ge.H.useReducer(e,t,n)};Vt.useRef=function(e){return ge.H.useRef(e)};Vt.useState=function(e){return ge.H.useState(e)};Vt.useSyncExternalStore=function(e,t,n){return ge.H.useSyncExternalStore(e,t,n)};Vt.useTransition=function(){return ge.H.useTransition()};Vt.version="19.2.6"});var po=vi((rC,jm)=>{"use strict";jm.exports=Km()});var og=vi(Me=>{"use strict";function Ih(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Vl(s,t))e[i]=t,e[n]=s,n=i;else break t}}function xi(e){return e.length===0?null:e[0]}function kl(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Vl(o,n))l<s&&0>Vl(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Vl(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Vl(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Me.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Qm=performance,Me.unstable_now=function(){return Qm.now()}):(Oh=Date,$m=Oh.now(),Me.unstable_now=function(){return Oh.now()-$m});var Qm,Oh,$m,zi=[],ms=[],fb=1,Xn=null,on=3,Bh=!1,mo=!1,go=!1,Fh=!1,ng=typeof setTimeout=="function"?setTimeout:null,ig=typeof clearTimeout=="function"?clearTimeout:null,tg=typeof setImmediate<"u"?setImmediate:null;function Gl(e){for(var t=xi(ms);t!==null;){if(t.callback===null)kl(ms);else if(t.startTime<=e)kl(ms),t.sortIndex=t.expirationTime,Ih(zi,t);else break;t=xi(ms)}}function Hh(e){if(go=!1,Gl(e),!mo)if(xi(zi)!==null)mo=!0,Ga||(Ga=!0,Va());else{var t=xi(ms);t!==null&&Vh(Hh,t.startTime-e)}}var Ga=!1,yo=-1,sg=5,ag=-1;function rg(){return Fh?!0:!(Me.unstable_now()-ag<sg)}function Ph(){if(Fh=!1,Ga){var e=Me.unstable_now();ag=e;var t=!0;try{t:{mo=!1,go&&(go=!1,ig(yo),yo=-1),Bh=!0;var n=on;try{e:{for(Gl(e),Xn=xi(zi);Xn!==null&&!(Xn.expirationTime>e&&rg());){var i=Xn.callback;if(typeof i=="function"){Xn.callback=null,on=Xn.priorityLevel;var s=i(Xn.expirationTime<=e);if(e=Me.unstable_now(),typeof s=="function"){Xn.callback=s,Gl(e),t=!0;break e}Xn===xi(zi)&&kl(zi),Gl(e)}else kl(zi);Xn=xi(zi)}if(Xn!==null)t=!0;else{var a=xi(ms);a!==null&&Vh(Hh,a.startTime-e),t=!1}}break t}finally{Xn=null,on=n,Bh=!1}t=void 0}}finally{t?Va():Ga=!1}}}var Va;typeof tg=="function"?Va=function(){tg(Ph)}:typeof MessageChannel<"u"?(zh=new MessageChannel,eg=zh.port2,zh.port1.onmessage=Ph,Va=function(){eg.postMessage(null)}):Va=function(){ng(Ph,0)};var zh,eg;function Vh(e,t){yo=ng(function(){e(Me.unstable_now())},t)}Me.unstable_IdlePriority=5;Me.unstable_ImmediatePriority=1;Me.unstable_LowPriority=4;Me.unstable_NormalPriority=3;Me.unstable_Profiling=null;Me.unstable_UserBlockingPriority=2;Me.unstable_cancelCallback=function(e){e.callback=null};Me.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):sg=0<e?Math.floor(1e3/e):5};Me.unstable_getCurrentPriorityLevel=function(){return on};Me.unstable_next=function(e){switch(on){case 1:case 2:case 3:var t=3;break;default:t=on}var n=on;on=t;try{return e()}finally{on=n}};Me.unstable_requestPaint=function(){Fh=!0};Me.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=on;on=e;try{return t()}finally{on=n}};Me.unstable_scheduleCallback=function(e,t,n){var i=Me.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:fb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Ih(ms,e),xi(zi)===null&&e===xi(ms)&&(go?(ig(yo),yo=-1):go=!0,Vh(Hh,n-i))):(e.sortIndex=s,Ih(zi,e),mo||Bh||(mo=!0,Ga||(Ga=!0,Va()))),e};Me.unstable_shouldYield=rg;Me.unstable_wrapCallback=function(e){var t=on;return function(){var n=on;on=t;try{return e.apply(this,arguments)}finally{on=n}}}});var cg=vi((lC,lg)=>{"use strict";lg.exports=og()});var hg=vi(gn=>{"use strict";var db=po();function ug(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gs(){}var mn={d:{f:gs,r:function(){throw Error(ug(522))},D:gs,C:gs,L:gs,m:gs,X:gs,S:gs,M:gs},p:0,findDOMNode:null},pb=Symbol.for("react.portal");function mb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var _o=db.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Wl(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ug(299));return mb(e,t,null,n)};gn.flushSync=function(e){var t=_o.T,n=mn.p;try{if(_o.T=null,mn.p=2,e)return e()}finally{_o.T=t,mn.p=n,mn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Wl(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Wl(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Wl(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Wl(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};gn.requestFormReset=function(e){mn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return _o.H.useFormState(e,t,n)};gn.useFormStatus=function(){return _o.H.useHostTransitionStatus()};gn.version="19.2.6"});var pg=vi((uC,dg)=>{"use strict";function fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg)}catch(e){console.error(e)}}fg(),dg.exports=hg()});var Av=vi(mu=>{"use strict";var ke=cg(),H0=po(),gb=pg();function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function G0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mg(e){if(sl(e)!==e)throw Error(K(188))}function yb(e){var t=e.alternate;if(!t){if(t=sl(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return mg(s),e;if(a===i)return mg(s),t;a=a.sibling}throw Error(K(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function W0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W0(e),t!==null)return t;e=e.sibling}return null}var ve=Object.assign,_b=Symbol.for("react.element"),Xl=Symbol.for("react.transitional.element"),Ao=Symbol.for("react.portal"),Za=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),q0=Symbol.for("react.consumer"),Wi=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),ys=Symbol.for("react.lazy"),Tf=Symbol.for("react.activity"),vb=Symbol.for("react.memo_cache_sentinel"),gg=Symbol.iterator;function vo(e){return e===null||typeof e!="object"?null:(e=gg&&e[gg]||e["@@iterator"],typeof e=="function"?e:null)}var xb=Symbol.for("react.client.reference");function Af(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Za:return"Fragment";case bf:return"Profiler";case X0:return"StrictMode";case Mf:return"Suspense";case Ef:return"SuspenseList";case Tf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ao:return"Portal";case Wi:return e.displayName||"Context";case q0:return(e._context.displayName||"Context")+".Consumer";case yd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _d:return t=e.displayName||null,t!==null?t:Af(e.type)||"Memo";case ys:t=e._payload,e=e._init;try{return Af(e(t))}catch{}}return null}var wo=Array.isArray,Nt=H0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=gb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ca={pending:!1,data:null,method:null,action:null},wf=[],Ja=-1;function Ti(e){return{current:e}}function je(e){0>Ja||(e.current=wf[Ja],wf[Ja]=null,Ja--)}function pe(e,t){Ja++,wf[Ja]=e.current,e.current=t}var Ei=Ti(null),Wo=Ti(null),Rs=Ti(null),Ec=Ti(null);function Tc(e,t){switch(pe(Rs,t),pe(Wo,e),pe(Ei,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?M0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=M0(t),e=fv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}je(Ei),pe(Ei,e)}function dr(){je(Ei),je(Wo),je(Rs)}function Rf(e){e.memoizedState!==null&&pe(Ec,e);var t=Ei.current,n=fv(t,e.type);t!==n&&(pe(Wo,e),pe(Ei,n))}function Ac(e){Wo.current===e&&(je(Ei),je(Wo)),Ec.current===e&&(je(Ec),el._currentValue=ca)}var Gh,yg;function aa(e){if(Gh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gh=t&&t[1]||"",yg=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gh+e+yg}var kh=!1;function Wh(e,t){if(!e||kh)return"";kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{kh=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?aa(n):""}function Sb(e,t){switch(e.tag){case 26:case 27:case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return e.child!==t&&t!==null?aa("Suspense Fallback"):aa("Suspense");case 19:return aa("SuspenseList");case 0:case 15:return Wh(e.type,!1);case 11:return Wh(e.type.render,!1);case 1:return Wh(e.type,!0);case 31:return aa("Activity");default:return""}}function _g(e){try{var t="",n=null;do t+=Sb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Cf=Object.prototype.hasOwnProperty,vd=ke.unstable_scheduleCallback,Xh=ke.unstable_cancelCallback,bb=ke.unstable_shouldYield,Mb=ke.unstable_requestPaint,On=ke.unstable_now,Eb=ke.unstable_getCurrentPriorityLevel,Y0=ke.unstable_ImmediatePriority,Z0=ke.unstable_UserBlockingPriority,wc=ke.unstable_NormalPriority,Tb=ke.unstable_LowPriority,J0=ke.unstable_IdlePriority,Ab=ke.log,wb=ke.unstable_setDisableYieldValue,al=null,Pn=null;function Ms(e){if(typeof Ab=="function"&&wb(e),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(al,e)}catch{}}var zn=Math.clz32?Math.clz32:Lb,Rb=Math.log,Cb=Math.LN2;function Lb(e){return e>>>=0,e===0?32:31-(Rb(e)/Cb|0)|0}var ql=256,Yl=262144,Zl=4194304;function ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $c(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ra(i):(r&=o,r!==0?s=ra(r):n||(n=o&~e,n!==0&&(s=ra(n))))):(o=i&~a,o!==0?s=ra(o):r!==0?s=ra(r):n||(n=i&~e,n!==0&&(s=ra(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ub(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K0(){var e=Zl;return Zl<<=1,(Zl&62914560)===0&&(Zl=4194304),e}function qh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Db(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-zn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&j0(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function j0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-zn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Q0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-zn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function $0(e,t){var n=t&-t;return n=(n&42)!==0?1:xd(n),(n&(e.suspendedLanes|t))!==0?0:n}function xd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sd(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ty(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Mv(e.type))}function vg(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Vs=Math.random().toString(36).slice(2),tn="__reactFiber$"+Vs,Tn="__reactProps$"+Vs,Er="__reactContainer$"+Vs,Lf="__reactEvents$"+Vs,Nb="__reactListeners$"+Vs,Ob="__reactHandles$"+Vs,xg="__reactResources$"+Vs,ll="__reactMarker$"+Vs;function bd(e){delete e[tn],delete e[Tn],delete e[Lf],delete e[Nb],delete e[Ob]}function Ka(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Er]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=R0(e);e!==null;){if(n=e[tn])return n;e=R0(e)}return t}e=n,n=e.parentNode}return null}function Tr(e){if(e=e[tn]||e[Er]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ro(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function rr(e){var t=e[xg];return t||(t=e[xg]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[ll]=!0}var ey=new Set,ny={};function va(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(ny[e]=t,e=0;e<t.length;e++)ey.add(t[e])}var Pb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sg={},bg={};function zb(e){return Cf.call(bg,e)?!0:Cf.call(Sg,e)?!1:Pb.test(e)?bg[e]=!0:(Sg[e]=!0,!1)}function cc(e,t,n){if(zb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ii(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ib(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uf(e){if(!e._valueTracker){var t=iy(e)?"checked":"value";e._valueTracker=Ib(e,t,""+e[t])}}function sy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=iy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Rc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bb=/[\n"\\]/g;function Kn(e){return e.replace(Bb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Df(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yn(t)):e.value!==""+Yn(t)&&(e.value=""+Yn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Nf(e,r,Yn(t)):n!=null?Nf(e,r,Yn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Yn(o):e.removeAttribute("name")}function ay(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Uf(e);return}n=n!=null?""+Yn(n):"",t=t!=null?""+Yn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Uf(e)}function Nf(e,t,n){t==="number"&&Rc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function or(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ry(e,t,n){if(t!=null&&(t=""+Yn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yn(n):""}function oy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(wo(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Yn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Uf(e)}function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mg(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Fb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ly(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Mg(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Mg(e,a,t[a])}function Md(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uc(e){return Vb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var Of=null;function Ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,lr=null;function Eg(e){var t=Tr(e);if(t&&(e=t.stateNode)){var n=e[Tn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Df(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Tn]||null;if(!s)throw Error(K(90));Df(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&sy(i)}break t;case"textarea":ry(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}}}var Yh=!1;function cy(e,t,n){if(Yh)return e(t,n);Yh=!0;try{var i=e(t);return i}finally{if(Yh=!1,(ja!==null||lr!==null)&&(hu(),ja&&(t=ja,e=lr,lr=ja=null,Eg(t),e)))for(t=0;t<e.length;t++)Eg(e[t])}}function Xo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=!1;if(Ki)try{ka={},Object.defineProperty(ka,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{Pf=!1}var ka,Es=null,Td=null,hc=null;function uy(){if(hc)return hc;var e,t=Td,n=t.length,i,s="value"in Es?Es.value:Es.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return hc=s.slice(e,1<i?1-i:void 0)}function fc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kl(){return!0}function Tg(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Kl:Tg,this.isPropagationStopped=Tg,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),t}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=An(xa),cl=ve({},xa,{view:0,detail:0}),Gb=An(cl),Zh,Jh,xo,eu=ve({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Zh=e.screenX-xo.screenX,Jh=e.screenY-xo.screenY):Jh=Zh=0,xo=e),Zh)},movementY:function(e){return"movementY"in e?e.movementY:Jh}}),Ag=An(eu),kb=ve({},eu,{dataTransfer:0}),Wb=An(kb),Xb=ve({},cl,{relatedTarget:0}),Kh=An(Xb),qb=ve({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Yb=An(qb),Zb=ve({},xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jb=An(Zb),Kb=ve({},xa,{data:0}),wg=An(Kb),jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$b[e])?!!t[e]:!1}function Ad(){return tM}var eM=ve({},cl,{key:function(e){if(e.key){var t=jb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(e){return e.type==="keypress"?fc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nM=An(eM),iM=ve({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rg=An(iM),sM=ve({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),aM=An(sM),rM=ve({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),oM=An(rM),lM=ve({},eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cM=An(lM),uM=ve({},xa,{newState:0,oldState:0}),hM=An(uM),fM=[9,13,27,32],wd=Ki&&"CompositionEvent"in window,Uo=null;Ki&&"documentMode"in document&&(Uo=document.documentMode);var dM=Ki&&"TextEvent"in window&&!Uo,hy=Ki&&(!wd||Uo&&8<Uo&&11>=Uo),Cg=" ",Lg=!1;function fy(e,t){switch(e){case"keyup":return fM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qa=!1;function pM(e,t){switch(e){case"compositionend":return dy(t);case"keypress":return t.which!==32?null:(Lg=!0,Cg);case"textInput":return e=t.data,e===Cg&&Lg?null:e;default:return null}}function mM(e,t){if(Qa)return e==="compositionend"||!wd&&fy(e,t)?(e=uy(),hc=Td=Es=null,Qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hy&&t.locale!=="ko"?null:t.data;default:return null}}var gM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gM[e.type]:t==="textarea"}function py(e,t,n,i){ja?lr?lr.push(i):lr=[i]:ja=i,t=qc(t,"onChange"),0<t.length&&(n=new tu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Do=null,qo=null;function yM(e){cv(e,0)}function nu(e){var t=Ro(e);if(sy(t))return e}function Dg(e,t){if(e==="change")return t}var my=!1;Ki&&(Ki?(Ql="oninput"in document,Ql||(jh=document.createElement("div"),jh.setAttribute("oninput","return;"),Ql=typeof jh.oninput=="function"),jl=Ql):jl=!1,my=jl&&(!document.documentMode||9<document.documentMode));var jl,Ql,jh;function Ng(){Do&&(Do.detachEvent("onpropertychange",gy),qo=Do=null)}function gy(e){if(e.propertyName==="value"&&nu(qo)){var t=[];py(t,qo,e,Ed(e)),cy(yM,t)}}function _M(e,t,n){e==="focusin"?(Ng(),Do=t,qo=n,Do.attachEvent("onpropertychange",gy)):e==="focusout"&&Ng()}function vM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(qo)}function xM(e,t){if(e==="click")return nu(t)}function SM(e,t){if(e==="input"||e==="change")return nu(t)}function bM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bn=typeof Object.is=="function"?Object.is:bM;function Yo(e,t){if(Bn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Cf.call(t,s)||!Bn(e[s],t[s]))return!1}return!0}function Og(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pg(e,t){var n=Og(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Og(n)}}function yy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _y(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rc(e.document)}return t}function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var MM=Ki&&"documentMode"in document&&11>=document.documentMode,$a=null,zf=null,No=null,If=!1;function zg(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||$a==null||$a!==Rc(i)||(i=$a,"selectionStart"in i&&Rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Yo(No,i)||(No=i,i=qc(zf,"onSelect"),0<i.length&&(t=new tu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=$a)))}function sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},Qh={},vy={};Ki&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Sa(e){if(Qh[e])return Qh[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vy)return Qh[e]=t[n];return e}var xy=Sa("animationend"),Sy=Sa("animationiteration"),by=Sa("animationstart"),EM=Sa("transitionrun"),TM=Sa("transitionstart"),AM=Sa("transitioncancel"),My=Sa("transitionend"),Ey=new Map,Bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bf.push("scrollEnd");function ci(e,t){Ey.set(e,t),va(t,[e])}var Cc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qn=[],er=0,Cd=0;function iu(){for(var e=er,t=Cd=er=0;t<e;){var n=qn[t];qn[t++]=null;var i=qn[t];qn[t++]=null;var s=qn[t];qn[t++]=null;var a=qn[t];if(qn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ty(n,s,a)}}function su(e,t,n,i){qn[er++]=e,qn[er++]=t,qn[er++]=n,qn[er++]=i,Cd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ld(e,t,n,i){return su(e,t,n,i),Lc(e)}function ba(e,t){return su(e,null,null,t),Lc(e)}function Ty(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-zn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Lc(e){if(50<Go)throw Go=0,ad=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nr={};function wM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,t,n,i){return new wM(e,t,n,i)}function Ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,t){var n=e.alternate;return n===null?(n=Dn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ay(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function dc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Ud(e)&&(r=1);else if(typeof e=="string")r=L1(e,n,Ei.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Tf:return e=Dn(31,n,t,s),e.elementType=Tf,e.lanes=a,e;case Za:return ua(n.children,s,a,t);case X0:r=8,s|=24;break;case bf:return e=Dn(12,n,t,s|2),e.elementType=bf,e.lanes=a,e;case Mf:return e=Dn(13,n,t,s),e.elementType=Mf,e.lanes=a,e;case Ef:return e=Dn(19,n,t,s),e.elementType=Ef,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wi:r=10;break t;case q0:r=9;break t;case yd:r=11;break t;case _d:r=14;break t;case ys:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Dn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ua(e,t,n,i){return e=Dn(7,e,i,t),e.lanes=n,e}function $h(e,t,n){return e=Dn(6,e,null,t),e.lanes=n,e}function wy(e){var t=Dn(18,null,null,0);return t.stateNode=e,t}function tf(e,t,n){return t=Dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ig=new WeakMap;function jn(e,t){if(typeof e=="object"&&e!==null){var n=Ig.get(e);return n!==void 0?n:(t={value:e,source:t,stack:_g(t)},Ig.set(e,t),t)}return{value:e,source:t,stack:_g(t)}}var ir=[],sr=0,Uc=null,Zo=0,Zn=[],Jn=0,Is=null,Si=1,bi="";function Gi(e,t){ir[sr++]=Zo,ir[sr++]=Uc,Uc=e,Zo=t}function Ry(e,t,n){Zn[Jn++]=Si,Zn[Jn++]=bi,Zn[Jn++]=Is,Is=e;var i=Si;e=bi;var s=32-zn(i)-1;i&=~(1<<s),n+=1;var a=32-zn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Si=1<<32-zn(t)+s|n<<s|i,bi=a+e}else Si=1<<a|n<<s|i,bi=e}function Dd(e){e.return!==null&&(Gi(e,1),Ry(e,1,0))}function Nd(e){for(;e===Uc;)Uc=ir[--sr],ir[sr]=null,Zo=ir[--sr],ir[sr]=null;for(;e===Is;)Is=Zn[--Jn],Zn[Jn]=null,bi=Zn[--Jn],Zn[Jn]=null,Si=Zn[--Jn],Zn[Jn]=null}function Cy(e,t){Zn[Jn++]=Si,Zn[Jn++]=bi,Zn[Jn++]=Is,Si=t.id,bi=t.overflow,Is=e}var en=null,_e=null,te=!1,Cs=null,Qn=!1,Ff=Error(K(519));function Bs(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(jn(t,e)),Ff}function Bg(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[tn]=e,t[Tn]=i,n){case"dialog":jt("cancel",t),jt("close",t);break;case"iframe":case"object":case"embed":jt("load",t);break;case"video":case"audio":for(n=0;n<$o.length;n++)jt($o[n],t);break;case"source":jt("error",t);break;case"img":case"image":case"link":jt("error",t),jt("load",t);break;case"details":jt("toggle",t);break;case"input":jt("invalid",t),ay(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":jt("invalid",t);break;case"textarea":jt("invalid",t),oy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||hv(t.textContent,n)?(i.popover!=null&&(jt("beforetoggle",t),jt("toggle",t)),i.onScroll!=null&&jt("scroll",t),i.onScrollEnd!=null&&jt("scrollend",t),i.onClick!=null&&(t.onclick=Xi),t=!0):t=!1,t||Bs(e,!0)}function Fg(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:en=en.return}}function Wa(e){if(e!==en)return!1;if(!te)return Fg(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ud(e.type,e.memoizedProps)),n=!n),n&&_e&&Bs(e),Fg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));_e=w0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));_e=w0(e)}else t===27?(t=_e,Gs(e.type)?(e=pd,pd=null,_e=e):_e=t):_e=en?ti(e.stateNode.nextSibling):null;return!0}function pa(){_e=en=null,te=!1}function ef(){var e=Cs;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Cs=null),e}function Jo(e){Cs===null?Cs=[e]:Cs.push(e)}var Hf=Ti(null),Ma=null,qi=null;function vs(e,t,n){pe(Hf,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=Hf.current,je(Hf)}function Vf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gf(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Vf(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(K(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Vf(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ar(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=s.type;Bn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Ec.current){if(r=s.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(el):e=[el])}s=s.return}e!==null&&Gf(t,e,n,i),t.flags|=262144}function Dc(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){Ma=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Ly(Ma,e)}function $l(e,t){return Ma===null&&ma(e),Ly(e,t)}function Ly(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(K(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var RM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},CM=ke.unstable_scheduleCallback,LM=ke.unstable_NormalPriority,Ie={$$typeof:Wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Od(){return{controller:new RM,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&CM(LM,function(){e.controller.abort()})}var Oo=null,kf=0,gr=0,cr=null;function UM(e,t){if(Oo===null){var n=Oo=[];kf=0,gr=ap(),cr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return kf++,t.then(Hg,Hg),t}function Hg(){if(--kf===0&&Oo!==null){cr!==null&&(cr.status="fulfilled");var e=Oo;Oo=null,gr=0,cr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function DM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Vg=Nt.S;Nt.S=function(e,t){W_=On(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&UM(e,t),Vg!==null&&Vg(e,t)};var ha=Ti(null);function Pd(){var e=ha.current;return e!==null?e:de.pooledCache}function pc(e,t){t===null?pe(ha,ha.current):pe(ha,t.pool)}function Uy(){var e=Pd();return e===null?null:{parent:Ie._currentValue,pool:e}}var wr=Error(K(460)),zd=Error(K(474)),au=Error(K(542)),Nc={then:function(){}};function Gg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wg(e),e;default:if(typeof t.status=="string")t.then(Xi,Xi);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wg(e),e}throw fa=t,wr}}function oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fa=n,wr):n}}var fa=null;function kg(){if(fa===null)throw Error(K(459));var e=fa;return fa=null,e}function Wg(e){if(e===wr||e===au)throw Error(K(483))}var ur=null,Ko=0;function tc(e){var t=Ko;return Ko+=1,ur===null&&(ur=[]),Dy(ur,e,t)}function So(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ec(e,t){throw t.$$typeof===_b?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ny(e){function t(u,y){if(e){var g=u.deletions;g===null?(u.deletions=[y],u.flags|=16):g.push(y)}}function n(u,y){if(!e)return null;for(;y!==null;)t(u,y),y=y.sibling;return null}function i(u){for(var y=new Map;u!==null;)u.key!==null?y.set(u.key,u):y.set(u.index,u),u=u.sibling;return y}function s(u,y){return u=Yi(u,y),u.index=0,u.sibling=null,u}function a(u,y,g){return u.index=g,e?(g=u.alternate,g!==null?(g=g.index,g<y?(u.flags|=67108866,y):g):(u.flags|=67108866,y)):(u.flags|=1048576,y)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,y,g,S){return y===null||y.tag!==6?(y=$h(g,u.mode,S),y.return=u,y):(y=s(y,g),y.return=u,y)}function l(u,y,g,S){var M=g.type;return M===Za?h(u,y,g.props.children,S,g.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ys&&oa(M)===y.type)?(y=s(y,g.props),So(y,g),y.return=u,y):(y=dc(g.type,g.key,g.props,null,u.mode,S),So(y,g),y.return=u,y)}function c(u,y,g,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=tf(g,u.mode,S),y.return=u,y):(y=s(y,g.children||[]),y.return=u,y)}function h(u,y,g,S,M){return y===null||y.tag!==7?(y=ua(g,u.mode,S,M),y.return=u,y):(y=s(y,g),y.return=u,y)}function d(u,y,g){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=$h(""+y,u.mode,g),y.return=u,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xl:return g=dc(y.type,y.key,y.props,null,u.mode,g),So(g,y),g.return=u,g;case Ao:return y=tf(y,u.mode,g),y.return=u,y;case ys:return y=oa(y),d(u,y,g)}if(wo(y)||vo(y))return y=ua(y,u.mode,g,null),y.return=u,y;if(typeof y.then=="function")return d(u,tc(y),g);if(y.$$typeof===Wi)return d(u,$l(u,y),g);ec(u,y)}return null}function f(u,y,g,S){var M=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return M!==null?null:o(u,y,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xl:return g.key===M?l(u,y,g,S):null;case Ao:return g.key===M?c(u,y,g,S):null;case ys:return g=oa(g),f(u,y,g,S)}if(wo(g)||vo(g))return M!==null?null:h(u,y,g,S,null);if(typeof g.then=="function")return f(u,y,tc(g),S);if(g.$$typeof===Wi)return f(u,y,$l(u,g),S);ec(u,g)}return null}function p(u,y,g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return u=u.get(g)||null,o(y,u,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xl:return u=u.get(S.key===null?g:S.key)||null,l(y,u,S,M);case Ao:return u=u.get(S.key===null?g:S.key)||null,c(y,u,S,M);case ys:return S=oa(S),p(u,y,g,S,M)}if(wo(S)||vo(S))return u=u.get(g)||null,h(y,u,S,M,null);if(typeof S.then=="function")return p(u,y,g,tc(S),M);if(S.$$typeof===Wi)return p(u,y,g,$l(y,S),M);ec(y,S)}return null}function _(u,y,g,S){for(var M=null,R=null,E=y,N=y=0,x=null;E!==null&&N<g.length;N++){E.index>N?(x=E,E=null):x=E.sibling;var A=f(u,E,g[N],S);if(A===null){E===null&&(E=x);break}e&&E&&A.alternate===null&&t(u,E),y=a(A,y,N),R===null?M=A:R.sibling=A,R=A,E=x}if(N===g.length)return n(u,E),te&&Gi(u,N),M;if(E===null){for(;N<g.length;N++)E=d(u,g[N],S),E!==null&&(y=a(E,y,N),R===null?M=E:R.sibling=E,R=E);return te&&Gi(u,N),M}for(E=i(E);N<g.length;N++)x=p(E,u,N,g[N],S),x!==null&&(e&&x.alternate!==null&&E.delete(x.key===null?N:x.key),y=a(x,y,N),R===null?M=x:R.sibling=x,R=x);return e&&E.forEach(function(V){return t(u,V)}),te&&Gi(u,N),M}function v(u,y,g,S){if(g==null)throw Error(K(151));for(var M=null,R=null,E=y,N=y=0,x=null,A=g.next();E!==null&&!A.done;N++,A=g.next()){E.index>N?(x=E,E=null):x=E.sibling;var V=f(u,E,A.value,S);if(V===null){E===null&&(E=x);break}e&&E&&V.alternate===null&&t(u,E),y=a(V,y,N),R===null?M=V:R.sibling=V,R=V,E=x}if(A.done)return n(u,E),te&&Gi(u,N),M;if(E===null){for(;!A.done;N++,A=g.next())A=d(u,A.value,S),A!==null&&(y=a(A,y,N),R===null?M=A:R.sibling=A,R=A);return te&&Gi(u,N),M}for(E=i(E);!A.done;N++,A=g.next())A=p(E,u,N,A.value,S),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?N:A.key),y=a(A,y,N),R===null?M=A:R.sibling=A,R=A);return e&&E.forEach(function(W){return t(u,W)}),te&&Gi(u,N),M}function m(u,y,g,S){if(typeof g=="object"&&g!==null&&g.type===Za&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xl:t:{for(var M=g.key;y!==null;){if(y.key===M){if(M=g.type,M===Za){if(y.tag===7){n(u,y.sibling),S=s(y,g.props.children),S.return=u,u=S;break t}}else if(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ys&&oa(M)===y.type){n(u,y.sibling),S=s(y,g.props),So(S,g),S.return=u,u=S;break t}n(u,y);break}else t(u,y);y=y.sibling}g.type===Za?(S=ua(g.props.children,u.mode,S,g.key),S.return=u,u=S):(S=dc(g.type,g.key,g.props,null,u.mode,S),So(S,g),S.return=u,u=S)}return r(u);case Ao:t:{for(M=g.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){n(u,y.sibling),S=s(y,g.children||[]),S.return=u,u=S;break t}else{n(u,y);break}else t(u,y);y=y.sibling}S=tf(g,u.mode,S),S.return=u,u=S}return r(u);case ys:return g=oa(g),m(u,y,g,S)}if(wo(g))return _(u,y,g,S);if(vo(g)){if(M=vo(g),typeof M!="function")throw Error(K(150));return g=M.call(g),v(u,y,g,S)}if(typeof g.then=="function")return m(u,y,tc(g),S);if(g.$$typeof===Wi)return m(u,y,$l(u,g),S);ec(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,y!==null&&y.tag===6?(n(u,y.sibling),S=s(y,g),S.return=u,u=S):(n(u,y),S=$h(g,u.mode,S),S.return=u,u=S),r(u)):n(u,y)}return function(u,y,g,S){try{Ko=0;var M=m(u,y,g,S);return ur=null,M}catch(E){if(E===wr||E===au)throw E;var R=Dn(29,E,null,u.mode);return R.lanes=S,R.return=u,R}}}var ga=Ny(!0),Oy=Ny(!1),_s=!1;function Id(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ls(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Us(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Lc(e),Ty(e,null,n),t}return su(e,i,t,n),Lc(e)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Q0(e,n)}}function nf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xf=!1;function zo(){if(Xf){var e=cr;if(e!==null)throw e}}function Io(e,t,n,i){Xf=!1;var s=e.updateQueue;_s=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?($t&f)===f:(i&f)===f){f!==0&&f===gr&&(Xf=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,v=o;f=t;var m=n;switch(v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,f);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break t;d=ve({},d,f);break t;case 2:_s=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Hs|=r,e.lanes=r,e.memoizedState=d}}function Py(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function zy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Py(n[e],t)}var yr=Ti(null),Oc=Ti(0);function Xg(e,t){e=ts,pe(Oc,e),pe(yr,t),ts=e|t.baseLanes}function qf(){pe(Oc,ts),pe(yr,yr.current)}function Bd(){ts=Oc.current,je(yr),je(Oc)}var Fn=Ti(null),$n=null;function xs(e){var t=e.alternate;pe(Ne,Ne.current&1),pe(Fn,e),$n===null&&(t===null||yr.current!==null||t.memoizedState!==null)&&($n=e)}function Yf(e){pe(Ne,Ne.current),pe(Fn,e),$n===null&&($n=e)}function Iy(e){e.tag===22?(pe(Ne,Ne.current),pe(Fn,e),$n===null&&($n=e)):Ss(e)}function Ss(){pe(Ne,Ne.current),pe(Fn,Fn.current)}function Un(e){je(Fn),$n===e&&($n=null),je(Ne)}var Ne=Ti(0);function Pc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fd(n)||dd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=0,kt=null,he=null,Pe=null,zc=!1,hr=!1,ya=!1,Ic=0,jo=0,fr=null,NM=0;function Ce(){throw Error(K(321))}function Fd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bn(e[n],t[n]))return!1;return!0}function Hd(e,t,n,i,s,a){return ji=a,kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?p_:jd,ya=!1,a=n(i,s),ya=!1,hr&&(a=Fy(t,n,i,s)),By(e),a}function By(e){Nt.H=Qo;var t=he!==null&&he.next!==null;if(ji=0,Pe=he=kt=null,zc=!1,jo=0,fr=null,t)throw Error(K(300));e===null||Be||(e=e.dependencies,e!==null&&Dc(e)&&(Be=!0))}function Fy(e,t,n,i){kt=e;var s=0;do{if(hr&&(fr=null),jo=0,hr=!1,25<=s)throw Error(K(301));if(s+=1,Pe=he=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Nt.H=m_,a=t(n,i)}while(hr);return a}function OM(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(kt.flags|=1024),t}function Vd(){var e=Ic!==0;return Ic=0,e}function Gd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function kd(e){if(zc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zc=!1}ji=0,Pe=he=kt=null,hr=!1,jo=Ic=0,fr=null}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?kt.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Oe(){if(he===null){var e=kt.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Pe===null?kt.memoizedState:Pe.next;if(t!==null)Pe=t,he=e;else{if(e===null)throw kt.alternate===null?Error(K(467)):Error(K(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Pe===null?kt.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=jo;return jo+=1,fr===null&&(fr=[]),e=Dy(fr,e,t),t=kt,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?p_:jd),e}function ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===Wi)return nn(e)}throw Error(K(438,String(e)))}function Wd(e){var t=null,n=kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ru(),kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=vb;return t.index++,n}function Qi(e,t){return typeof t=="function"?t(e):t}function mc(e){var t=Oe();return Xd(t,he,e)}function Xd(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?($t&d)===d:(ji&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===gr&&(h=!0);else if((ji&f)===f){c=c.next,f===gr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,kt.lanes|=f,Hs|=f;d=c.action,ya&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,kt.lanes|=d,Hs|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Bn(a,e.memoizedState)&&(Be=!0,h&&(n=cr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function sf(e){var t=Oe(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Bn(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Hy(e,t,n){var i=kt,s=Oe(),a=te;if(a){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!Bn((he||s).memoizedState,n);if(r&&(s.memoizedState=n,Be=!0),s=s.queue,qd(ky.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Pe!==null&&Pe.memoizedState.tag&1){if(i.flags|=2048,_r(9,{destroy:void 0},Gy.bind(null,i,s,n,t),null),de===null)throw Error(K(349));a||(ji&127)!==0||Vy(i,t,n)}return n}function Vy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=kt.updateQueue,t===null?(t=ru(),kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gy(e,t,n,i){t.value=n,t.getSnapshot=i,Wy(t)&&Xy(e)}function ky(e,t,n){return n(function(){Wy(t)&&Xy(e)})}function Wy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bn(e,n)}catch{return!0}}function Xy(e){var t=ba(e,2);t!==null&&En(t,e,2)}function Zf(e){var t=yn();if(typeof e=="function"){var n=e;if(e=n(),ya){Ms(!0);try{n()}finally{Ms(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t}function qy(e,t,n,i){return e.baseState=n,Xd(e,he,typeof i=="function"?i:Qi)}function PM(e,t,n,i,s){if(cu(e))throw Error(K(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Nt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Yy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Yy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Nt.T,r={};Nt.T=r;try{var o=n(s,i),l=Nt.S;l!==null&&l(r,o),qg(e,t,o)}catch(c){Jf(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Nt.T=a}}else try{a=n(s,i),qg(e,t,a)}catch(c){Jf(e,t,c)}}function qg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yg(e,t,i)},function(i){return Jf(e,t,i)}):Yg(e,t,n)}function Yg(e,t,n){t.status="fulfilled",t.value=n,Zy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yy(e,n)))}function Jf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Zy(t),t=t.next;while(t!==i)}e.action=null}function Zy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jy(e,t){return t}function Zg(e,t){if(te){var n=de.formState;if(n!==null){t:{var i=kt;if(te){if(_e){e:{for(var s=_e,a=Qn;s.nodeType!==8;){if(!a){s=null;break e}if(s=ti(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){_e=ti(s.nextSibling),i=s.data==="F!";break t}}Bs(i)}i=!1}i&&(t=n[0])}}return n=yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jy,lastRenderedState:t},n.queue=i,n=h_.bind(null,kt,i),i.dispatch=n,i=Zf(!1),a=Kd.bind(null,kt,!1,i.queue),i=yn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=PM.bind(null,kt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jg(e){var t=Oe();return Ky(t,he,e)}function Ky(e,t,n){if(t=Xd(e,t,Jy)[0],e=mc(Qi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hl(t)}catch(r){throw r===wr?au:r}else i=t;t=Oe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(kt.flags|=2048,_r(9,{destroy:void 0},zM.bind(null,s,n),null)),[i,a,e]}function zM(e,t){e.action=t}function Kg(e){var t=Oe(),n=he;if(n!==null)return Ky(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function _r(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=kt.updateQueue,t===null&&(t=ru(),kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function jy(){return Oe().memoizedState}function gc(e,t,n,i){var s=yn();kt.flags|=e,s.memoizedState=_r(1|t,{destroy:void 0},n,i===void 0?null:i)}function lu(e,t,n,i){var s=Oe();i=i===void 0?null:i;var a=s.memoizedState.inst;he!==null&&i!==null&&Fd(i,he.memoizedState.deps)?s.memoizedState=_r(t,a,n,i):(kt.flags|=e,s.memoizedState=_r(1|t,a,n,i))}function jg(e,t){gc(8390656,8,e,t)}function qd(e,t){lu(2048,8,e,t)}function IM(e){kt.flags|=4;var t=kt.updateQueue;if(t===null)t=ru(),kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Qy(e){var t=Oe().memoizedState;return IM({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function $y(e,t){return lu(4,2,e,t)}function t_(e,t){return lu(4,4,e,t)}function e_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function n_(e,t,n){n=n!=null?n.concat([e]):null,lu(4,4,e_.bind(null,t,e),n)}function Yd(){}function i_(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Fd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function s_(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Fd(t,i[1]))return i[0];if(i=e(),ya){Ms(!0);try{e()}finally{Ms(!1)}}return n.memoizedState=[i,t],i}function Zd(e,t,n){return n===void 0||(ji&1073741824)!==0&&($t&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=q_(),kt.lanes|=e,Hs|=e,n)}function a_(e,t,n,i){return Bn(n,t)?n:yr.current!==null?(e=Zd(e,n,i),Bn(e,t)||(Be=!0),e):(ji&42)===0||(ji&1073741824)!==0&&($t&261930)===0?(Be=!0,e.memoizedState=n):(e=q_(),kt.lanes|=e,Hs|=e,t)}function r_(e,t,n,i,s){var a=ae.p;ae.p=a!==0&&8>a?a:8;var r=Nt.T,o={};Nt.T=o,Kd(e,!1,t,n);try{var l=s(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=DM(l,i);Bo(e,t,h,In(e))}else Bo(e,t,i,In(e))}catch(d){Bo(e,t,{then:function(){},status:"rejected",reason:d},In())}finally{ae.p=a,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function BM(){}function Kf(e,t,n,i){if(e.tag!==5)throw Error(K(476));var s=o_(e).queue;r_(e,s,t,ca,n===null?BM:function(){return l_(e),n(i)})}function o_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ca,baseState:ca,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:ca},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function l_(e){var t=o_(e);t.next===null&&(t=e.alternate.memoizedState),Bo(e,t.next.queue,{},In())}function Jd(){return nn(el)}function c_(){return Oe().memoizedState}function u_(){return Oe().memoizedState}function FM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=In();e=Ls(n);var i=Us(t,e,n);i!==null&&(En(i,t,n),Po(i,t,n)),t={cache:Od()},e.payload=t;return}t=t.return}}function HM(e,t,n){var i=In();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cu(e)?f_(t,n):(n=Ld(e,t,n,i),n!==null&&(En(n,e,i),d_(n,t,i)))}function h_(e,t,n){var i=In();Bo(e,t,n,i)}function Bo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cu(e))f_(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Bn(o,r))return su(e,t,s,0),de===null&&iu(),!1}catch{}if(n=Ld(e,t,s,i),n!==null)return En(n,e,i),d_(n,t,i),!0}return!1}function Kd(e,t,n,i){if(i={lane:2,revertLane:ap(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(t)throw Error(K(479))}else t=Ld(e,n,i,2),t!==null&&En(t,e,2)}function cu(e){var t=e.alternate;return e===kt||t!==null&&t===kt}function f_(e,t){hr=zc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function d_(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Q0(e,n)}}var Qo={readContext:nn,use:ou,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};Qo.useEffectEvent=Ce;var p_={readContext:nn,use:ou,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:jg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gc(4194308,4,e_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gc(4194308,4,e,t)},useInsertionEffect:function(e,t){gc(4,2,e,t)},useMemo:function(e,t){var n=yn();t=t===void 0?null:t;var i=e();if(ya){Ms(!0);try{e()}finally{Ms(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yn();if(n!==void 0){var s=n(t);if(ya){Ms(!0);try{n(t)}finally{Ms(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=HM.bind(null,kt,e),[i.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:function(e){e=Zf(e);var t=e.queue,n=h_.bind(null,kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Yd,useDeferredValue:function(e,t){var n=yn();return Zd(n,e,t)},useTransition:function(){var e=Zf(!1);return e=r_.bind(null,kt,e.queue,!0,!1),yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=kt,s=yn();if(te){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),de===null)throw Error(K(349));($t&127)!==0||Vy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,jg(ky.bind(null,i,a,e),[e]),i.flags|=2048,_r(9,{destroy:void 0},Gy.bind(null,i,a,n,t),null),n},useId:function(){var e=yn(),t=de.identifierPrefix;if(te){var n=bi,i=Si;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ic++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=NM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jd,useFormState:Zg,useActionState:Zg,useOptimistic:function(e){var t=yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Kd.bind(null,kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Wd,useCacheRefresh:function(){return yn().memoizedState=FM.bind(null,kt)},useEffectEvent:function(e){var t=yn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},jd={readContext:nn,use:ou,useCallback:i_,useContext:nn,useEffect:qd,useImperativeHandle:n_,useInsertionEffect:$y,useLayoutEffect:t_,useMemo:s_,useReducer:mc,useRef:jy,useState:function(){return mc(Qi)},useDebugValue:Yd,useDeferredValue:function(e,t){var n=Oe();return a_(n,he.memoizedState,e,t)},useTransition:function(){var e=mc(Qi)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:Hy,useId:c_,useHostTransitionStatus:Jd,useFormState:Jg,useActionState:Jg,useOptimistic:function(e,t){var n=Oe();return qy(n,he,e,t)},useMemoCache:Wd,useCacheRefresh:u_};jd.useEffectEvent=Qy;var m_={readContext:nn,use:ou,useCallback:i_,useContext:nn,useEffect:qd,useImperativeHandle:n_,useInsertionEffect:$y,useLayoutEffect:t_,useMemo:s_,useReducer:sf,useRef:jy,useState:function(){return sf(Qi)},useDebugValue:Yd,useDeferredValue:function(e,t){var n=Oe();return he===null?Zd(n,e,t):a_(n,he.memoizedState,e,t)},useTransition:function(){var e=sf(Qi)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:Hy,useId:c_,useHostTransitionStatus:Jd,useFormState:Kg,useActionState:Kg,useOptimistic:function(e,t){var n=Oe();return he!==null?qy(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:u_};m_.useEffectEvent=Qy;function af(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=In(),s=Ls(i);s.payload=t,n!=null&&(s.callback=n),t=Us(e,s,i),t!==null&&(En(t,e,i),Po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=In(),s=Ls(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Us(e,s,i),t!==null&&(En(t,e,i),Po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=In(),i=Ls(n);i.tag=2,t!=null&&(i.callback=t),t=Us(e,i,n),t!==null&&(En(t,e,n),Po(t,e,n))}};function Qg(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Yo(n,i)||!Yo(s,a):!0}function $g(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&jf.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ve({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function g_(e){Cc(e)}function y_(e){console.error(e)}function __(e){Cc(e)}function Bc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function t0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Qf(e,t,n){return n=Ls(n),n.tag=3,n.payload={element:null},n.callback=function(){Bc(e,t)},n}function v_(e){return e=Ls(e),e.tag=3,e}function x_(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){t0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){t0(t,n,i),typeof s!="function"&&(Ds===null?Ds=new Set([this]):Ds.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function VM(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ar(t,n,s,!0),n=Fn.current,n!==null){switch(n.tag){case 31:case 13:return $n===null?kc():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Nc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),gf(e,i,s)),!1;case 22:return n.flags|=65536,i===Nc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),gf(e,i,s)),!1}throw Error(K(435,n.tag))}return gf(e,i,s),kc(),!1}if(te)return t=Fn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Ff&&(e=Error(K(422),{cause:i}),Jo(jn(e,n)))):(i!==Ff&&(t=Error(K(423),{cause:i}),Jo(jn(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=jn(i,n),s=Qf(e.stateNode,i,s),nf(e,s),Le!==4&&(Le=2)),!1;var a=Error(K(520),{cause:i});if(a=jn(a,n),Vo===null?Vo=[a]:Vo.push(a),Le!==4&&(Le=2),t===null)return!0;i=jn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Qf(n.stateNode,i,e),nf(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ds===null||!Ds.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=v_(s),x_(s,e,n,i),nf(n,s),!1}n=n.return}while(n!==null);return!1}var Qd=Error(K(461)),Be=!1;function $e(e,t,n,i){t.child=e===null?Oy(t,null,n,i):ga(t,e.child,n,i)}function e0(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ma(t),i=Hd(e,t,n,r,a,s),o=Vd(),e!==null&&!Be?(Gd(e,t,s),$i(e,t,s)):(te&&o&&Dd(t),t.flags|=1,$e(e,t,i,s),t.child)}function n0(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Ud(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,S_(e,t,a,i,s)):(e=dc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!$d(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(r,i)&&e.ref===t.ref)return $i(e,t,s)}return t.flags|=1,e=Yi(a,i),e.ref=t.ref,e.return=t,t.child=e}function S_(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Yo(a,i)&&e.ref===t.ref)if(Be=!1,t.pendingProps=i=a,$d(e,s))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,$i(e,t,s)}return $f(e,t,n,i,s)}function b_(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return i0(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pc(t,a!==null?a.cachePool:null),a!==null?Xg(t,a):qf(),Iy(t);else return i=t.lanes=536870912,i0(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(pc(t,a.cachePool),Xg(t,a),Ss(t),t.memoizedState=null):(e!==null&&pc(t,null),qf(),Ss(t));return $e(e,t,s,n),t.child}function Co(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function i0(e,t,n,i,s){var a=Pd();return a=a===null?null:{parent:Ie._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&pc(t,null),qf(),Iy(t),e!==null&&Ar(e,t,i,!0),t.childLanes=s,null}function yc(e,t){return t=Fc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function s0(e,t,n){return ga(t,e.child,null,n),e=yc(t,t.pendingProps),e.flags|=2,Un(t),t.memoizedState=null,e}function GM(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=yc(t,i),t.lanes=536870912,Co(null,e);if(Yf(t),(e=_e)?(e=pv(e,Qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Is!==null?{id:Si,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},n=wy(e),n.return=t,t.child=n,en=t,_e=null)):e=null,e===null)throw Bs(t);return t.lanes=536870912,null}return yc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Yf(t),s)if(t.flags&256)t.flags&=-257,t=s0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(Be||Ar(e,t,n,!1),s=(n&e.childLanes)!==0,Be||s){if(i=de,i!==null&&(r=$0(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ba(e,r),En(i,e,r),Qd;kc(),t=s0(e,t,n)}else e=a.treeContext,_e=ti(r.nextSibling),en=t,te=!0,Cs=null,Qn=!1,e!==null&&Cy(t,e),t=yc(t,i),t.flags|=4096;return t}return e=Yi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function $f(e,t,n,i,s){return ma(t),n=Hd(e,t,n,i,void 0,s),i=Vd(),e!==null&&!Be?(Gd(e,t,s),$i(e,t,s)):(te&&i&&Dd(t),t.flags|=1,$e(e,t,n,s),t.child)}function a0(e,t,n,i,s,a){return ma(t),t.updateQueue=null,n=Fy(t,i,n,s),By(e),i=Vd(),e!==null&&!Be?(Gd(e,t,a),$i(e,t,a)):(te&&i&&Dd(t),t.flags|=1,$e(e,t,n,a),t.child)}function r0(e,t,n,i,s){if(ma(t),t.stateNode===null){var a=nr,r=n.contextType;typeof r=="object"&&r!==null&&(a=nn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=jf,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Id(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?nn(r):nr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(af(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&jf.enqueueReplaceState(a,a.state,null),Io(t,i,a,s),zo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=_a(n,o);a.props=l;var c=a.context,h=n.contextType;r=nr,typeof h=="object"&&h!==null&&(r=nn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&$g(t,a,i,r),_s=!1;var f=t.memoizedState;a.state=f,Io(t,i,a,s),zo(),c=t.memoizedState,o||f!==c||_s?(typeof d=="function"&&(af(t,n,d,i),c=t.memoizedState),(l=_s||Qg(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Wf(e,t),r=t.memoizedProps,h=_a(n,r),a.props=h,d=t.pendingProps,f=a.context,c=n.contextType,l=nr,typeof c=="object"&&c!==null&&(l=nn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&$g(t,a,i,l),_s=!1,f=t.memoizedState,a.state=f,Io(t,i,a,s),zo();var p=t.memoizedState;r!==d||f!==p||_s||e!==null&&e.dependencies!==null&&Dc(e.dependencies)?(typeof o=="function"&&(af(t,n,o,i),p=t.memoizedState),(h=_s||Qg(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&Dc(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,_c(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ga(t,e.child,null,s),t.child=ga(t,null,n,s)):$e(e,t,n,s),t.memoizedState=a.state,e=t.child):e=$i(e,t,s),e}function o0(e,t,n,i){return pa(),t.flags|=256,$e(e,t,n,i),t.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Uy()}}function lf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nn),e}function M_(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?xs(t):Ss(t),(e=_e)?(e=pv(e,Qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Is!==null?{id:Si,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},n=wy(e),n.return=t,t.child=n,en=t,_e=null)):e=null,e===null)throw Bs(t);return dd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Ss(t),s=t.mode,o=Fc({mode:"hidden",children:o},s),i=ua(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=of(n),i.childLanes=lf(e,r,n),t.memoizedState=rf,Co(null,i)):(xs(t),td(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(xs(t),t.flags&=-257,t=cf(e,t,n)):t.memoizedState!==null?(Ss(t),t.child=e.child,t.flags|=128,t=null):(Ss(t),o=i.fallback,s=t.mode,i=Fc({mode:"visible",children:i.children},s),o=ua(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ga(t,e.child,null,n),i=t.child,i.memoizedState=of(n),i.childLanes=lf(e,r,n),t.memoizedState=rf,t=Co(null,i));else if(xs(t),dd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(K(419)),i.stack="",i.digest=r,Jo({value:i,source:null,stack:null}),t=cf(e,t,n)}else if(Be||Ar(e,t,n,!1),r=(n&e.childLanes)!==0,Be||r){if(r=de,r!==null&&(i=$0(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ba(e,i),En(r,e,i),Qd;fd(o)||kc(),t=cf(e,t,n)}else fd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,_e=ti(o.nextSibling),en=t,te=!0,Cs=null,Qn=!1,e!==null&&Cy(t,e),t=td(t,i.children),t.flags|=4096);return t}return s?(Ss(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=Yi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Yi(c,o):(o=ua(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Co(null,i),i=t.child,o=e.child.memoizedState,o===null?o=of(n):(s=o.cachePool,s!==null?(l=Ie._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Uy(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=lf(e,r,n),t.memoizedState=rf,Co(e.child,i)):(xs(t),n=e.child,e=n.sibling,n=Yi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function td(e,t){return t=Fc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fc(e,t){return e=Dn(22,e,null,t),e.lanes=0,e}function cf(e,t,n){return ga(t,e.child,null,n),e=td(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function l0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vf(e.return,t,n)}function uf(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function E_(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ne.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,pe(Ne,r),$e(e,t,i,n),i=te?Zo:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,n,t);else if(e.tag===19)l0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Pc(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),uf(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Pc(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}uf(t,!0,n,null,a,i);break;case"together":uf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function $i(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ar(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $d(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Dc(e)))}function kM(e,t,n){switch(t.tag){case 3:Tc(t,t.stateNode.containerInfo),vs(t,Ie,e.memoizedState.cache),pa();break;case 27:case 5:Rf(t);break;case 4:Tc(t,t.stateNode.containerInfo);break;case 10:vs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yf(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(xs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?M_(e,t,n):(xs(t),e=$i(e,t,n),e!==null?e.sibling:null);xs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ar(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return E_(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pe(Ne,Ne.current),i)break;return null;case 22:return t.lanes=0,b_(e,t,n,t.pendingProps);case 24:vs(t,Ie,e.memoizedState.cache)}return $i(e,t,n)}function T_(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!$d(e,n)&&(t.flags&128)===0)return Be=!1,kM(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,te&&(t.flags&1048576)!==0&&Ry(t,Zo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=oa(t.elementType),t.type=e,typeof e=="function")Ud(e)?(i=_a(e,i),t.tag=1,t=r0(null,t,e,i,n)):(t.tag=0,t=$f(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===yd){t.tag=11,t=e0(null,t,e,i,n);break t}else if(s===_d){t.tag=14,t=n0(null,t,e,i,n);break t}}throw t=Af(e)||e,Error(K(306,t,""))}}return t;case 0:return $f(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=_a(i,t.pendingProps),r0(e,t,i,s,n);case 3:t:{if(Tc(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Wf(e,t),Io(t,i,null,n);var r=t.memoizedState;if(i=r.cache,vs(t,Ie,i),i!==a.cache&&Gf(t,[Ie],n,!0),zo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=o0(e,t,i,n);break t}else if(i!==s){s=jn(Error(K(424)),t),Jo(s),t=o0(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=ti(e.firstChild),en=t,te=!0,Cs=null,Qn=!0,n=Oy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pa(),i===s){t=$i(e,t,n);break t}$e(e,t,i,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=L0(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=Yc(Rs.current).createElement(n),i[tn]=t,i[Tn]=e,sn(i,n,e),Ke(i),t.stateNode=i):t.memoizedState=L0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Rf(t),e===null&&te&&(i=t.stateNode=mv(t.type,t.pendingProps,Rs.current),en=t,Qn=!0,s=_e,Gs(t.type)?(pd=s,_e=ti(i.firstChild)):_e=s),$e(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=_e)&&(i=y1(i,t.type,t.pendingProps,Qn),i!==null?(t.stateNode=i,en=t,_e=ti(i.firstChild),Qn=!1,s=!0):s=!1),s||Bs(t)),Rf(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,ud(s,a)?i=null:r!==null&&ud(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Hd(e,t,OM,null,null,n),el._currentValue=s),_c(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=_e)&&(n=_1(n,t.pendingProps,Qn),n!==null?(t.stateNode=n,en=t,_e=null,e=!0):e=!1),e||Bs(t)),null;case 13:return M_(e,t,n);case 4:return Tc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ga(t,null,i,n):$e(e,t,i,n),t.child;case 11:return e0(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,vs(t,t.type,i.value),$e(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ma(t),s=nn(s),i=i(s),t.flags|=1,$e(e,t,i,n),t.child;case 14:return n0(e,t,t.type,t.pendingProps,n);case 15:return S_(e,t,t.type,t.pendingProps,n);case 19:return E_(e,t,n);case 31:return GM(e,t,n);case 22:return b_(e,t,n,t.pendingProps);case 24:return ma(t),i=nn(Ie),e===null?(s=Pd(),s===null&&(s=de,a=Od(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Id(t),vs(t,Ie,s)):((e.lanes&n)!==0&&(Wf(e,t),Io(t,null,null,n),zo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),vs(t,Ie,i)):(i=a.cache,vs(t,Ie,i),i!==s.cache&&Gf(t,[Ie],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function Bi(e){e.flags|=4}function hf(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(J_())e.flags|=8192;else throw fa=Nc,zd}else e.flags&=-16777217}function c0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_v(t))if(J_())e.flags|=8192;else throw fa=Nc,zd}function nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?K0():536870912,e.lanes|=t,vr|=t)}function bo(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function WM(e,t,n){var i=t.pendingProps;switch(Nd(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Zi(Ie),dr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wa(t)?Bi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ef())),ye(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Bi(t),a!==null?(ye(t),c0(t,a)):(ye(t),hf(t,s,null,i,n))):a?a!==e.memoizedState?(Bi(t),ye(t),c0(t,a)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bi(t),ye(t),hf(t,s,e,i,n)),null;case 27:if(Ac(t),n=Rs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return ye(t),null}e=Ei.current,Wa(t)?Bg(t,e):(e=mv(s,i,n),t.stateNode=e,Bi(t))}return ye(t),null;case 5:if(Ac(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return ye(t),null}if(a=Ei.current,Wa(t))Bg(t,a);else{var r=Yc(Rs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[tn]=t,a[Tn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(sn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Bi(t)}}return ye(t),hf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Rs.current,Wa(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=en,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[tn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||hv(e.nodeValue,n)),e||Bs(t,!0)}else e=Yc(e).createTextNode(i),e[tn]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Wa(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[tn]=t}else pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Un(t),t):(Un(t),null);if((t.flags&128)!==0)throw Error(K(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Wa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(K(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[tn]=t}else pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),s=!1}else s=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Un(t),t):(Un(t),null)}return Un(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),nc(t,t.updateQueue),ye(t),null);case 4:return dr(),e===null&&rp(t.stateNode.containerInfo),ye(t),null;case 10:return Zi(t.type),ye(t),null;case 19:if(je(Ne),i=t.memoizedState,i===null)return ye(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)bo(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Pc(e),a!==null){for(t.flags|=128,bo(i,!1),e=a.updateQueue,t.updateQueue=e,nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ay(n,e),n=n.sibling;return pe(Ne,Ne.current&1|2),te&&Gi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&On()>Vc&&(t.flags|=128,s=!0,bo(i,!1),t.lanes=4194304)}else{if(!s)if(e=Pc(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,nc(t,e),bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!te)return ye(t),null}else 2*On()-i.renderingStartTime>Vc&&n!==536870912&&(t.flags|=128,s=!0,bo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=On(),e.sibling=null,n=Ne.current,pe(Ne,s?n&1|2:n&1),te&&Gi(t,i.treeForkCount),e):(ye(t),null);case 22:case 23:return Un(t),Bd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&je(ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(Ie),ye(t),null;case 25:return null;case 30:return null}throw Error(K(156,t.tag))}function XM(e,t){switch(Nd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(Ie),dr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ac(t),null;case 31:if(t.memoizedState!==null){if(Un(t),t.alternate===null)throw Error(K(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Un(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ne),null;case 4:return dr(),null;case 10:return Zi(t.type),null;case 22:case 23:return Un(t),Bd(),e!==null&&je(ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(Ie),null;case 25:return null;default:return null}}function A_(e,t){switch(Nd(t),t.tag){case 3:Zi(Ie),dr();break;case 26:case 27:case 5:Ac(t);break;case 4:dr();break;case 31:t.memoizedState!==null&&Un(t);break;case 13:Un(t);break;case 19:je(Ne);break;case 10:Zi(t.type);break;case 22:case 23:Un(t),Bd(),e!==null&&je(ha);break;case 24:Zi(Ie)}}function fl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){le(t,t.return,o)}}function Fs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){le(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){le(t,t.return,h)}}function w_(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{zy(t,n)}catch(i){le(e,e.return,i)}}}function R_(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){le(e,t,i)}}function Fo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){le(e,t,s)}}function Mi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){le(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){le(e,t,s)}else n.current=null}function C_(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){le(e,e.return,s)}}function ff(e,t,n){try{var i=e.stateNode;h1(i,e.type,n,t),i[Tn]=t}catch(s){le(e,e.return,s)}}function L_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gs(e.type)||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||L_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ed(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(i!==4&&(i===27&&Gs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ed(e,t,n),e=e.sibling;e!==null;)ed(e,t,n),e=e.sibling}function Hc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Gs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function U_(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);sn(t,i,n),t[tn]=e,t[Tn]=n}catch(a){le(e,e.return,a)}}var ki=!1,ze=!1,pf=!1,u0=typeof WeakSet=="function"?WeakSet:Set,Je=null;function qM(e,t){if(e=e.containerInfo,ld=jc,e=_y(e),Rd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:e,selectionRange:n},jc=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=_a(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(v){le(n,n.return,v)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)hd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function D_(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n),i&4&&fl(5,n);break;case 1:if(Hi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){le(n,n.return,r)}else{var s=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){le(n,n.return,r)}}i&64&&w_(n),i&512&&Fo(n,n.return);break;case 3:if(Hi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{zy(e,t)}catch(r){le(n,n.return,r)}}break;case 27:t===null&&i&4&&U_(n);case 26:case 5:Hi(e,n),t===null&&i&4&&C_(n),i&512&&Fo(n,n.return);break;case 12:Hi(e,n);break;case 31:Hi(e,n),i&4&&P_(e,n);break;case 13:Hi(e,n),i&4&&z_(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=e1.bind(null,n),v1(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||ze,s=ki;var a=ze;ki=i,(ze=t)&&!a?Vi(e,n,(n.subtreeFlags&8772)!==0):Hi(e,n),ki=s,ze=a}break;case 30:break;default:Hi(e,n)}}function N_(e){var t=e.alternate;t!==null&&(e.alternate=null,N_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,bn=!1;function Fi(e,t,n){for(n=n.child;n!==null;)O_(e,t,n),n=n.sibling}function O_(e,t,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 26:ze||Mi(n,t),Fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ze||Mi(n,t);var i=Ee,s=bn;Gs(n.type)&&(Ee=n.stateNode,bn=!1),Fi(e,t,n),ko(n.stateNode),Ee=i,bn=s;break;case 5:ze||Mi(n,t);case 6:if(i=Ee,s=bn,Ee=null,Fi(e,t,n),Ee=i,bn=s,Ee!==null)if(bn)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode)}catch(a){le(n,t,a)}else try{Ee.removeChild(n.stateNode)}catch(a){le(n,t,a)}break;case 18:Ee!==null&&(bn?(e=Ee,T0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mr(e)):T0(Ee,n.stateNode));break;case 4:i=Ee,s=bn,Ee=n.stateNode.containerInfo,bn=!0,Fi(e,t,n),Ee=i,bn=s;break;case 0:case 11:case 14:case 15:Fs(2,n,t),ze||Fs(4,n,t),Fi(e,t,n);break;case 1:ze||(Mi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&R_(n,t,i)),Fi(e,t,n);break;case 21:Fi(e,t,n);break;case 22:ze=(i=ze)||n.memoizedState!==null,Fi(e,t,n),ze=i;break;default:Fi(e,t,n)}}function P_(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(n){le(t,t.return,n)}}}function z_(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(n){le(t,t.return,n)}}function YM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new u0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new u0),t;default:throw Error(K(435,e.tag))}}function ic(e,t){var n=YM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=n1.bind(null,e,i);i.then(s,s)}})}function xn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Gs(o.type)){Ee=o.stateNode,bn=!1;break t}break;case 5:Ee=o.stateNode,bn=!1;break t;case 3:case 4:Ee=o.stateNode.containerInfo,bn=!0;break t}o=o.return}if(Ee===null)throw Error(K(160));O_(a,r,s),Ee=null,bn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)I_(t,e),t=t.sibling}var li=null;function I_(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),Sn(e),i&4&&(Fs(3,e,e.return),fl(3,e),Fs(5,e,e.return));break;case 1:xn(t,e),Sn(e),i&512&&(ze||n===null||Mi(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=li;if(xn(t,e),Sn(e),i&512&&(ze||n===null||Mi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[ll]||a[tn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),sn(a,i,n),a[tn]=e,Ke(a),i=a;break t;case"link":var r=D0("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),sn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=D0("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),sn(a,i,n),s.head.appendChild(a);break;default:throw Error(K(468,i))}a[tn]=e,Ke(a),i=a}e.stateNode=i}else N0(s,e.type,e.stateNode);else e.stateNode=U0(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?N0(s,e.type,e.stateNode):U0(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ff(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),Sn(e),i&512&&(ze||n===null||Mi(n,n.return)),n!==null&&i&4&&ff(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),Sn(e),i&512&&(ze||n===null||Mi(n,n.return)),e.flags&32){s=e.stateNode;try{mr(s,"")}catch(_){le(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,ff(e,s,n!==null?n.memoizedProps:s)),i&1024&&(pf=!0);break;case 6:if(xn(t,e),Sn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){le(e,e.return,_)}}break;case 3:if(Sc=null,s=li,li=Zc(t.containerInfo),xn(t,e),li=s,Sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(_){le(e,e.return,_)}pf&&(pf=!1,B_(e));break;case 4:i=li,li=Zc(e.stateNode.containerInfo),xn(t,e),Sn(e),li=i;break;case 12:xn(t,e),Sn(e);break;case 31:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ic(e,i)));break;case 13:xn(t,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(uu=On()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ic(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,h=ze;if(ki=c||s,ze=h||l,xn(t,e),ze=h,ki=c,Sn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ki||ze||la(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(_){le(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){le(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?A0(p,!0):A0(l.stateNode,!1)}catch(_){le(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ic(e,n))));break;case 19:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ic(e,i)));break;case 30:break;case 21:break;default:xn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(L_(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var s=n.stateNode,a=df(e);Hc(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(mr(r,""),n.flags&=-33);var o=df(e);Hc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=df(e);ed(e,c,l);break;default:throw Error(K(161))}}catch(h){le(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;B_(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)D_(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fs(4,t,t.return),la(t);break;case 1:Mi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&R_(t,t.return,n),la(t);break;case 27:ko(t.stateNode);case 26:case 5:Mi(t,t.return),la(t);break;case 22:t.memoizedState===null&&la(t);break;case 30:la(t);break;default:la(t)}e=e.sibling}}function Vi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(s,a,n),fl(4,a);break;case 1:if(Vi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){le(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Py(l[s],o)}catch(c){le(i,i.return,c)}}n&&r&64&&w_(a),Fo(a,a.return);break;case 27:U_(a);case 26:case 5:Vi(s,a,n),n&&i===null&&r&4&&C_(a),Fo(a,a.return);break;case 12:Vi(s,a,n);break;case 31:Vi(s,a,n),n&&r&4&&P_(s,a);break;case 13:Vi(s,a,n),n&&r&4&&z_(s,a);break;case 22:a.memoizedState===null&&Vi(s,a,n),Fo(a,a.return);break;case 30:break;default:Vi(s,a,n)}t=t.sibling}}function tp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ul(n))}function ep(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e))}function oi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)F_(e,t,n,i),t=t.sibling}function F_(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:oi(e,t,n,i),s&2048&&fl(9,t);break;case 1:oi(e,t,n,i);break;case 3:oi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e)));break;case 12:if(s&2048){oi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){le(t,t.return,l)}}else oi(e,t,n,i);break;case 31:oi(e,t,n,i);break;case 13:oi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?oi(e,t,n,i):Ho(e,t):a._visibility&2?oi(e,t,n,i):(a._visibility|=2,qa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&tp(r,t);break;case 24:oi(e,t,n,i),s&2048&&ep(t.alternate,t);break;default:oi(e,t,n,i)}}function qa(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:qa(a,r,o,l,s),fl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?qa(a,r,o,l,s):Ho(a,r):(h._visibility|=2,qa(a,r,o,l,s)),s&&c&2048&&tp(r.alternate,r);break;case 24:qa(a,r,o,l,s),s&&c&2048&&ep(r.alternate,r);break;default:qa(a,r,o,l,s)}t=t.sibling}}function Ho(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ho(n,i),s&2048&&tp(i.alternate,i);break;case 24:Ho(n,i),s&2048&&ep(i.alternate,i);break;default:Ho(n,i)}t=t.sibling}}var Lo=8192;function Xa(e,t,n){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)H_(e,t,n),e=e.sibling}function H_(e,t,n){switch(e.tag){case 26:Xa(e,t,n),e.flags&Lo&&e.memoizedState!==null&&U1(n,li,e.memoizedState,e.memoizedProps);break;case 5:Xa(e,t,n);break;case 3:case 4:var i=li;li=Zc(e.stateNode.containerInfo),Xa(e,t,n),li=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Lo,Lo=16777216,Xa(e,t,n),Lo=i):Xa(e,t,n));break;default:Xa(e,t,n)}}function V_(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,k_(i,e)}V_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)G_(e),e=e.sibling}function G_(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Fs(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vc(e)):Mo(e);break;default:Mo(e)}}function vc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,k_(i,e)}V_(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fs(8,t,t.return),vc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vc(t));break;default:vc(t)}e=e.sibling}}function k_(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Fs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ul(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var s=i.sibling,a=i.return;if(N_(i),i===n){Je=null;break t}if(s!==null){s.return=a,Je=s;break t}Je=a}}}var ZM={getCacheForType:function(e){var t=nn(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nn(Ie).controller.signal}},JM=typeof WeakMap=="function"?WeakMap:Map,se=0,de=null,Qt=null,$t=0,oe=0,Ln=null,Ts=!1,Rr=!1,np=!1,ts=0,Le=0,Hs=0,da=0,ip=0,Nn=0,vr=0,Vo=null,Mn=null,nd=!1,uu=0,W_=0,Vc=1/0,Gc=null,Ds=null,Ge=0,Ns=null,xr=null,Ji=0,id=0,sd=null,X_=null,Go=0,ad=null;function In(){return(se&2)!==0&&$t!==0?$t&-$t:Nt.T!==null?ap():ty()}function q_(){if(Nn===0)if(($t&536870912)===0||te){var e=Yl;Yl<<=1,(Yl&3932160)===0&&(Yl=262144),Nn=e}else Nn=536870912;return e=Fn.current,e!==null&&(e.flags|=32),Nn}function En(e,t,n){(e===de&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Sr(e,0),As(e,$t,Nn,!1)),ol(e,n),((se&2)===0||e!==de)&&(e===de&&((se&2)===0&&(da|=n),Le===4&&As(e,$t,Nn,!1)),Ai(e))}function Y_(e,t,n){if((se&6)!==0)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rl(e,t),s=i?QM(e,t):mf(e,t,!0),a=i;do{if(s===0){Rr&&!i&&As(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!KM(n)){s=mf(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Vo;var l=o.current.memoizedState.isDehydrated;if(l&&(Sr(o,r).flags|=256),r=mf(o,r,!1),r!==2){if(np&&!l){o.errorRecoveryDisabledLanes|=a,da|=a,s=4;break t}a=Mn,Mn=s,a!==null&&(Mn===null?Mn=a:Mn.push.apply(Mn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Sr(e,0),As(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t)break;case 6:As(i,t,Nn,!Ts);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(s=uu+300-On(),10<s)){if(As(i,t,Nn,!Ts),$c(i,0,!0)!==0)break t;Ji=t,i.timeoutHandle=dv(h0.bind(null,i,n,Mn,Gc,nd,t,Nn,da,vr,Ts,a,"Throttled",-0,0),s);break t}h0(i,n,Mn,Gc,nd,t,Nn,da,vr,Ts,a,null,-0,0)}}break}while(!0);Ai(e)}function h0(e,t,n,i,s,a,r,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},H_(t,a,d);var _=(a&62914560)===a?uu-On():(a&4194048)===a?W_-On():0;if(_=D1(d,_),_!==null){Ji=a,e.cancelPendingCommit=_(d0.bind(null,e,t,a,n,i,s,r,o,l,h,d,null,f,p)),As(e,a,r,!c);return}}d0(e,t,a,n,i,s,r,o,l)}function KM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Bn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function As(e,t,n,i){t&=~ip,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-zn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&j0(e,n,t)}function hu(){return(se&6)===0?(dl(0,!1),!1):!0}function sp(){if(Qt!==null){if(oe===0)var e=Qt.return;else e=Qt,qi=Ma=null,kd(e),ur=null,Ko=0,e=Qt;for(;e!==null;)A_(e.alternate,e),e=e.return;Qt=null}}function Sr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,p1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ji=0,sp(),de=e,Qt=n=Yi(e.current,null),$t=t,oe=0,Ln=null,Ts=!1,Rr=rl(e,t),np=!1,vr=Nn=ip=da=Hs=Le=0,Mn=Vo=null,nd=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-zn(i),a=1<<s;t|=e[s],i&=~a}return ts=t,iu(),n}function Z_(e,t){kt=null,Nt.H=Qo,t===wr||t===au?(t=kg(),oe=3):t===zd?(t=kg(),oe=4):oe=t===Qd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ln=t,Qt===null&&(Le=1,Bc(e,jn(t,e.current)))}function J_(){var e=Fn.current;return e===null?!0:($t&4194048)===$t?$n===null:($t&62914560)===$t||($t&536870912)!==0?e===$n:!1}function K_(){var e=Nt.H;return Nt.H=Qo,e===null?Qo:e}function j_(){var e=Nt.A;return Nt.A=ZM,e}function kc(){Le=4,Ts||($t&4194048)!==$t&&Fn.current!==null||(Rr=!0),(Hs&134217727)===0&&(da&134217727)===0||de===null||As(de,$t,Nn,!1)}function mf(e,t,n){var i=se;se|=2;var s=K_(),a=j_();(de!==e||$t!==t)&&(Gc=null,Sr(e,t)),t=!1;var r=Le;t:do try{if(oe!==0&&Qt!==null){var o=Qt,l=Ln;switch(oe){case 8:sp(),r=6;break t;case 3:case 2:case 9:case 6:Fn.current===null&&(t=!0);var c=oe;if(oe=0,Ln=null,ar(e,o,l,c),n&&Rr){r=0;break t}break;default:c=oe,oe=0,Ln=null,ar(e,o,l,c)}}jM(),r=Le;break}catch(h){Z_(e,h)}while(!0);return t&&e.shellSuspendCounter++,qi=Ma=null,se=i,Nt.H=s,Nt.A=a,Qt===null&&(de=null,$t=0,iu()),r}function jM(){for(;Qt!==null;)Q_(Qt)}function QM(e,t){var n=se;se|=2;var i=K_(),s=j_();de!==e||$t!==t?(Gc=null,Vc=On()+500,Sr(e,t)):Rr=rl(e,t);t:do try{if(oe!==0&&Qt!==null){t=Qt;var a=Ln;e:switch(oe){case 1:oe=0,Ln=null,ar(e,t,a,1);break;case 2:case 9:if(Gg(a)){oe=0,Ln=null,f0(t);break}t=function(){oe!==2&&oe!==9||de!==e||(oe=7),Ai(e)},a.then(t,t);break t;case 3:oe=7;break t;case 4:oe=5;break t;case 7:Gg(a)?(oe=0,Ln=null,f0(t)):(oe=0,Ln=null,ar(e,t,a,7));break;case 5:var r=null;switch(Qt.tag){case 26:r=Qt.memoizedState;case 5:case 27:var o=Qt;if(r?_v(r):o.stateNode.complete){oe=0,Ln=null;var l=o.sibling;if(l!==null)Qt=l;else{var c=o.return;c!==null?(Qt=c,fu(c)):Qt=null}break e}}oe=0,Ln=null,ar(e,t,a,5);break;case 6:oe=0,Ln=null,ar(e,t,a,6);break;case 8:sp(),Le=6;break t;default:throw Error(K(462))}}$M();break}catch(h){Z_(e,h)}while(!0);return qi=Ma=null,Nt.H=i,Nt.A=s,se=n,Qt!==null?0:(de=null,$t=0,iu(),Le)}function $M(){for(;Qt!==null&&!bb();)Q_(Qt)}function Q_(e){var t=T_(e.alternate,e,ts);e.memoizedProps=e.pendingProps,t===null?fu(e):Qt=t}function f0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=a0(n,t,t.pendingProps,t.type,void 0,$t);break;case 11:t=a0(n,t,t.pendingProps,t.type.render,t.ref,$t);break;case 5:kd(t);default:A_(n,t),t=Qt=Ay(t,ts),t=T_(n,t,ts)}e.memoizedProps=e.pendingProps,t===null?fu(e):Qt=t}function ar(e,t,n,i){qi=Ma=null,kd(t),ur=null,Ko=0;var s=t.return;try{if(VM(e,s,t,n,$t)){Le=1,Bc(e,jn(n,e.current)),Qt=null;return}}catch(a){if(s!==null)throw Qt=s,a;Le=1,Bc(e,jn(n,e.current)),Qt=null;return}t.flags&32768?(te||i===1?e=!0:Rr||($t&536870912)!==0?e=!1:(Ts=e=!0,(i===2||i===9||i===3||i===6)&&(i=Fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),$_(t,e)):fu(t)}function fu(e){var t=e;do{if((t.flags&32768)!==0){$_(t,Ts);return}e=t.return;var n=WM(t.alternate,t,ts);if(n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);Le===0&&(Le=5)}function $_(e,t){do{var n=XM(e.alternate,e);if(n!==null){n.flags&=32767,Qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qt=e;return}Qt=e=n}while(e!==null);Le=6,Qt=null}function d0(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do du();while(Ge!==0);if((se&6)!==0)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));if(a=t.lanes|t.childLanes,a|=Cd,Db(e,n,a,r,o,l),e===de&&(Qt=de=null,$t=0),xr=t,Ns=e,Ji=n,id=a,sd=s,X_=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i1(wc,function(){return sv(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null,s=ae.p,ae.p=2,r=se,se|=4;try{qM(e,t,n)}finally{se=r,ae.p=s,Nt.T=i}}Ge=1,tv(),ev(),nv()}}function tv(){if(Ge===1){Ge=0;var e=Ns,t=xr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Nt.T,Nt.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{I_(t,e);var a=cd,r=_y(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&yy(o.ownerDocument.documentElement,o)){if(l!==null&&Rd(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,v=Math.min(l.start,_),m=l.end===void 0?v:Math.min(l.end,_);!p.extend&&v>m&&(r=m,m=v,v=r);var u=Pg(o,v),y=Pg(o,m);if(u&&y&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var g=d.createRange();g.setStart(u.node,u.offset),p.removeAllRanges(),v>m?(p.addRange(g),p.extend(y.node,y.offset)):(g.setEnd(y.node,y.offset),p.addRange(g))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var S=d[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}jc=!!ld,cd=ld=null}finally{se=s,ae.p=i,Nt.T=n}}e.current=t,Ge=2}}function ev(){if(Ge===2){Ge=0;var e=Ns,t=xr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{D_(e,t.alternate,t)}finally{se=s,ae.p=i,Nt.T=n}}Ge=3}}function nv(){if(Ge===4||Ge===3){Ge=0,Mb();var e=Ns,t=xr,n=Ji,i=X_;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,xr=Ns=null,iv(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ds=null),Sd(n),t=t.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Nt.T,s=ae.p,ae.p=2,Nt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Nt.T=t,ae.p=s}}(Ji&3)!==0&&du(),Ai(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===ad?Go++:(Go=0,ad=e):Go=0,dl(0,!1)}}function iv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ul(t)))}function du(){return tv(),ev(),nv(),sv()}function sv(){if(Ge!==5)return!1;var e=Ns,t=id;id=0;var n=Sd(Ji),i=Nt.T,s=ae.p;try{ae.p=32>n?32:n,Nt.T=null,n=sd,sd=null;var a=Ns,r=Ji;if(Ge=0,xr=Ns=null,Ji=0,(se&6)!==0)throw Error(K(331));var o=se;if(se|=4,G_(a.current),F_(a,a.current,r,n),se=o,dl(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(al,a)}catch{}return!0}finally{ae.p=s,Nt.T=i,iv(e,t)}}function p0(e,t,n){t=jn(n,t),t=Qf(e.stateNode,t,2),e=Us(e,t,2),e!==null&&(ol(e,2),Ai(e))}function le(e,t,n){if(e.tag===3)p0(e,e,n);else for(;t!==null;){if(t.tag===3){p0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ds===null||!Ds.has(i))){e=jn(n,e),n=v_(2),i=Us(t,n,2),i!==null&&(x_(n,i,t,e),ol(i,2),Ai(i));break}}t=t.return}}function gf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new JM;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(np=!0,s.add(n),e=t1.bind(null,e,t,n),t.then(e,e))}function t1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&($t&n)===n&&(Le===4||Le===3&&($t&62914560)===$t&&300>On()-uu?(se&2)===0&&Sr(e,0):ip|=n,vr===$t&&(vr=0)),Ai(e)}function av(e,t){t===0&&(t=K0()),e=ba(e,t),e!==null&&(ol(e,t),Ai(e))}function e1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),av(e,n)}function n1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),av(e,n)}function i1(e,t){return vd(e,t)}var Wc=null,Ya=null,rd=!1,Xc=!1,yf=!1,ws=0;function Ai(e){e!==Ya&&e.next===null&&(Ya===null?Wc=Ya=e:Ya=Ya.next=e),Xc=!0,rd||(rd=!0,a1())}function dl(e,t){if(!yf&&Xc){yf=!0;do for(var n=!1,i=Wc;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-zn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,m0(i,a))}else a=$t,a=$c(i,i===de?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||rl(i,a)||(n=!0,m0(i,a));i=i.next}while(n);yf=!1}}function s1(){rv()}function rv(){Xc=rd=!1;var e=0;ws!==0&&d1()&&(e=ws);for(var t=On(),n=null,i=Wc;i!==null;){var s=i.next,a=ov(i,t);a===0?(i.next=null,n===null?Wc=s:n.next=s,s===null&&(Ya=n)):(n=i,(e!==0||(a&3)!==0)&&(Xc=!0)),i=s}Ge!==0&&Ge!==5||dl(e,!1),ws!==0&&(ws=0)}function ov(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-zn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Ub(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=de,n=$t,n=$c(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Xh(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Xh(i),Sd(n)){case 2:case 8:n=Z0;break;case 32:n=wc;break;case 268435456:n=J0;break;default:n=wc}return i=lv.bind(null,e),n=vd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Xh(i),e.callbackPriority=2,e.callbackNode=null,2}function lv(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(du()&&e.callbackNode!==n)return null;var i=$t;return i=$c(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Y_(e,i,t),ov(e,On()),e.callbackNode!=null&&e.callbackNode===n?lv.bind(null,e):null)}function m0(e,t){if(du())return null;Y_(e,t,!0)}function a1(){m1(function(){(se&6)!==0?vd(Y0,s1):rv()})}function ap(){if(ws===0){var e=gr;e===0&&(e=ql,ql<<=1,(ql&261888)===0&&(ql=256)),ws=e}return ws}function g0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:uc(""+e)}function y0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function r1(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=g0((s[Tn]||null).action),r=i.submitter;r&&(t=(t=r[Tn]||null)?g0(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new tu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ws!==0){var l=r?y0(s,r):new FormData(s);Kf(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?y0(s,r):new FormData(s),Kf(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(sc=0;sc<Bf.length;sc++)ac=Bf[sc],_0=ac.toLowerCase(),v0=ac[0].toUpperCase()+ac.slice(1),ci(_0,"on"+v0);var ac,_0,v0,sc;ci(xy,"onAnimationEnd");ci(Sy,"onAnimationIteration");ci(by,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(EM,"onTransitionRun");ci(TM,"onTransitionStart");ci(AM,"onTransitionCancel");ci(My,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));va("onBeforeInput",["compositionend","keypress","textInput","paste"]);va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function cv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Cc(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Cc(h)}s.currentTarget=null,a=l}}}}function jt(e,t){var n=t[Lf];n===void 0&&(n=t[Lf]=new Set);var i=e+"__bubble";n.has(i)||(uv(t,e,2,!1),n.add(i))}function _f(e,t,n){var i=0;t&&(i|=4),uv(n,e,i,t)}var rc="_reactListening"+Math.random().toString(36).slice(2);function rp(e){if(!e[rc]){e[rc]=!0,ey.forEach(function(n){n!=="selectionchange"&&(o1.has(n)||_f(n,!1,e),_f(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rc]||(t[rc]=!0,_f("selectionchange",!1,t))}}function uv(e,t,n,i){switch(Mv(t)){case 2:var s=P1;break;case 8:s=z1;break;default:s=up}n=s.bind(null,t,n,e),s=void 0,!Pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vf(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ka(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}cy(function(){var c=a,h=Ed(n),d=[];t:{var f=Ey.get(e);if(f!==void 0){var p=tu,_=e;switch(e){case"keypress":if(fc(n)===0)break t;case"keydown":case"keyup":p=nM;break;case"focusin":_="focus",p=Kh;break;case"focusout":_="blur",p=Kh;break;case"beforeblur":case"afterblur":p=Kh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=aM;break;case xy:case Sy:case by:p=Yb;break;case My:p=oM;break;case"scroll":case"scrollend":p=Gb;break;case"wheel":p=cM;break;case"copy":case"cut":case"paste":p=Jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rg;break;case"toggle":case"beforetoggle":p=hM}var v=(t&4)!==0,m=!v&&(e==="scroll"||e==="scrollend"),u=v?f!==null?f+"Capture":null:f;v=[];for(var y=c,g;y!==null;){var S=y;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||u===null||(S=Xo(y,u),S!=null&&v.push(tl(y,S,g))),m)break;y=y.return}0<v.length&&(f=new p(f,_,null,n,h),d.push({event:f,listeners:v}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Of&&(_=n.relatedTarget||n.fromElement)&&(Ka(_)||_[Er]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Ka(_):null,_!==null&&(m=sl(_),v=_.tag,_!==m||v!==5&&v!==27&&v!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=Ag,S="onMouseLeave",u="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(v=Rg,S="onPointerLeave",u="onPointerEnter",y="pointer"),m=p==null?f:Ro(p),g=_==null?f:Ro(_),f=new v(S,y+"leave",p,n,h),f.target=m,f.relatedTarget=g,S=null,Ka(h)===c&&(v=new v(u,y+"enter",_,n,h),v.target=g,v.relatedTarget=m,S=v),m=S,p&&_)e:{for(v=l1,u=p,y=_,g=0,S=u;S;S=v(S))g++;S=0;for(var M=y;M;M=v(M))S++;for(;0<g-S;)u=v(u),g--;for(;0<S-g;)y=v(y),S--;for(;g--;){if(u===y||y!==null&&u===y.alternate){v=u;break e}u=v(u),y=v(y)}v=null}else v=null;p!==null&&x0(d,f,p,v,!1),_!==null&&m!==null&&x0(d,m,_,v,!0)}}t:{if(f=c?Ro(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=Dg;else if(Ug(f))if(my)R=SM;else{R=vM;var E=_M}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Md(c.elementType)&&(R=Dg):R=xM;if(R&&(R=R(e,c))){py(d,R,n,h);break t}E&&E(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Nf(f,"number",f.value)}switch(E=c?Ro(c):window,e){case"focusin":(Ug(E)||E.contentEditable==="true")&&($a=E,zf=c,No=null);break;case"focusout":No=zf=$a=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,zg(d,n,h);break;case"selectionchange":if(MM)break;case"keydown":case"keyup":zg(d,n,h)}var N;if(wd)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else Qa?fy(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(hy&&n.locale!=="ko"&&(Qa||x!=="onCompositionStart"?x==="onCompositionEnd"&&Qa&&(N=uy()):(Es=h,Td="value"in Es?Es.value:Es.textContent,Qa=!0)),E=qc(c,x),0<E.length&&(x=new wg(x,e,null,n,h),d.push({event:x,listeners:E}),N?x.data=N:(N=dy(n),N!==null&&(x.data=N)))),(N=dM?pM(e,n):mM(e,n))&&(x=qc(c,"onBeforeInput"),0<x.length&&(E=new wg("onBeforeInput","beforeinput",null,n,h),d.push({event:E,listeners:x}),E.data=N)),r1(d,e,c,n,h)}cv(d,t)})}function tl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qc(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Xo(e,n),s!=null&&i.unshift(tl(e,s,a)),s=Xo(e,t),s!=null&&i.push(tl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function l1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Xo(n,a),c!=null&&r.unshift(tl(n,c,l))):s||(c=Xo(n,a),c!=null&&r.push(tl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var c1=/\r\n?/g,u1=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(c1,`
`).replace(u1,"")}function hv(e,t){return t=S0(t),S0(e)===t}function ue(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||mr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&mr(e,""+i);break;case"className":Jl(e,"class",i);break;case"tabIndex":Jl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(e,n,i);break;case"style":ly(e,i,a);break;case"data":if(t!=="object"){Jl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=uc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ue(e,t,"name",s.name,s,null),ue(e,t,"formEncType",s.formEncType,s,null),ue(e,t,"formMethod",s.formMethod,s,null),ue(e,t,"formTarget",s.formTarget,s,null)):(ue(e,t,"encType",s.encType,s,null),ue(e,t,"method",s.method,s,null),ue(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=uc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Xi);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=uc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":jt("beforetoggle",e),jt("toggle",e),cc(e,"popover",i);break;case"xlinkActuate":Ii(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ii(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ii(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ii(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ii(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ii(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":cc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Hb.get(n)||n,cc(e,n,i))}}function od(e,t,n,i,s,a){switch(n){case"style":ly(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?mr(e,i):(typeof i=="number"||typeof i=="bigint")&&mr(e,""+i);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ny.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Tn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):cc(e,n,i)}}}function sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":jt("error",e),jt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ue(e,t,a,r,n,null)}}s&&ue(e,t,"srcSet",n.srcSet,n,null),i&&ue(e,t,"src",n.src,n,null);return;case"input":jt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:ue(e,t,i,h,n,null)}}ay(e,a,o,l,c,r,s,!1);return;case"select":jt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ue(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?or(e,!!i,t,!1):n!=null&&or(e,!!i,n,!0);return;case"textarea":jt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:ue(e,t,r,o,n,null)}oy(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ue(e,t,l,i,n,null));return;case"dialog":jt("beforetoggle",e),jt("toggle",e),jt("cancel",e),jt("close",e);break;case"iframe":case"object":jt("load",e);break;case"video":case"audio":for(i=0;i<$o.length;i++)jt($o[i],e);break;case"image":jt("error",e),jt("load",e);break;case"details":jt("toggle",e);break;case"embed":case"source":case"link":jt("error",e),jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ue(e,t,c,i,n,null)}return;default:if(Md(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&od(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ue(e,t,o,i,n,null))}function h1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ue(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==d&&ue(e,t,f,p,i,d)}}Df(e,r,o,l,c,h,a,s);return;case"select":p=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ue(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&ue(e,t,s,a,i,l)}t=o,n=r,i=p,f!=null?or(e,!!n,f,!1):!!i!=!!n&&(t!=null?or(e,!!n,t,!0):or(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ue(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(K(91));break;default:s!==a&&ue(e,t,r,s,i,a)}ry(e,f,p);return;case"option":for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:ue(e,t,_,null,i,f));for(l in i)f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null)&&(l==="selected"?e.selected=f&&typeof f!="function"&&typeof f!="symbol":ue(e,t,l,f,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v)&&ue(e,t,v,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(K(137,t));break;default:ue(e,t,c,f,i,p)}return;default:if(Md(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&od(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||od(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&ue(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||ue(e,t,d,f,i,p)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&b0(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&b0(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ld=null,cd=null;function Yc(e){return e.nodeType===9?e:e.ownerDocument}function M0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ud(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xf=null;function d1(){var e=window.event;return e&&e.type==="popstate"?e===xf?!1:(xf=e,!0):(xf=null,!1)}var dv=typeof setTimeout=="function"?setTimeout:void 0,p1=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(g1)}:dv;function g1(e){setTimeout(function(){throw e})}function Gs(e){return e==="head"}function T0(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Mr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ko(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ko(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[ll]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&ko(e.ownerDocument.body);n=s}while(n);Mr(t)}function A0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function hd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hd(n),bd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function y1(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function _1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function pv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ti(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function v1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pd=null;function w0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ti(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function mv(e,t,n){switch(t=Yc(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function ko(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bd(e)}var ei=new Map,C0=new Set;function Zc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var es=ae.d;ae.d={f:x1,r:S1,D:b1,C:M1,L:E1,m:T1,X:w1,S:A1,M:R1};function x1(){var e=es.f(),t=hu();return e||t}function S1(e){var t=Tr(e);t!==null&&t.tag===5&&t.type==="form"?l_(t):es.r(e)}var Cr=typeof document>"u"?null:document;function gv(e,t,n){var i=Cr;if(i&&typeof t=="string"&&t){var s=Kn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),C0.has(s)||(C0.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),sn(t,"link",e),Ke(t),i.head.appendChild(t)))}}function b1(e){es.D(e),gv("dns-prefetch",e,null)}function M1(e,t){es.C(e,t),gv("preconnect",e,t)}function E1(e,t,n){es.L(e,t,n);var i=Cr;if(i&&e&&t){var s='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Kn(n.imageSizes)+'"]')):s+='[href="'+Kn(e)+'"]';var a=s;switch(t){case"style":a=br(e);break;case"script":a=Lr(e)}ei.has(a)||(e=ve({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ei.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(pl(a))||t==="script"&&i.querySelector(ml(a))||(t=i.createElement("link"),sn(t,"link",e),Ke(t),i.head.appendChild(t)))}}function T1(e,t){es.m(e,t);var n=Cr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Lr(e)}if(!ei.has(a)&&(e=ve({rel:"modulepreload",href:e},t),ei.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ml(a)))return}i=n.createElement("link"),sn(i,"link",e),Ke(i),n.head.appendChild(i)}}}function A1(e,t,n){es.S(e,t,n);var i=Cr;if(i&&e){var s=rr(i).hoistableStyles,a=br(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(pl(a)))o.loading=5;else{e=ve({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ei.get(a))&&op(e,n);var l=r=i.createElement("link");Ke(l),sn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function w1(e,t){es.X(e,t);var n=Cr;if(n&&e){var i=rr(n).hoistableScripts,s=Lr(e),a=i.get(s);a||(a=n.querySelector(ml(s)),a||(e=ve({src:e,async:!0},t),(t=ei.get(s))&&lp(e,t),a=n.createElement("script"),Ke(a),sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function R1(e,t){es.M(e,t);var n=Cr;if(n&&e){var i=rr(n).hoistableScripts,s=Lr(e),a=i.get(s);a||(a=n.querySelector(ml(s)),a||(e=ve({src:e,async:!0,type:"module"},t),(t=ei.get(s))&&lp(e,t),a=n.createElement("script"),Ke(a),sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function L0(e,t,n,i){var s=(s=Rs.current)?Zc(s):null;if(!s)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=br(n.href),n=rr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=br(n.href);var a=rr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(pl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),ei.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ei.set(e,n),a||C1(s,e,n,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Lr(n),n=rr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function br(e){return'href="'+Kn(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function yv(e){return ve({},e,{"data-precedence":e.precedence,precedence:null})}function C1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),sn(t,"link",n),Ke(t),e.head.appendChild(t))}function Lr(e){return'[src="'+Kn(e)+'"]'}function ml(e){return"script[async]"+e}function U0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,Ke(i),i;var s=ve({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ke(i),sn(i,"style",s),xc(i,n.precedence,e),t.instance=i;case"stylesheet":s=br(n.href);var a=e.querySelector(pl(s));if(a)return t.state.loading|=4,t.instance=a,Ke(a),a;i=yv(n),(s=ei.get(s))&&op(i,s),a=(e.ownerDocument||e).createElement("link"),Ke(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(a,"link",i),t.state.loading|=4,xc(a,n.precedence,e),t.instance=a;case"script":return a=Lr(n.src),(s=e.querySelector(ml(a)))?(t.instance=s,Ke(s),s):(i=n,(s=ei.get(a))&&(i=ve({},n),lp(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ke(s),sn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xc(i,n.precedence,e));return t.instance}function xc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function op(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sc=null;function D0(e,t,n){if(Sc===null){var i=new Map,s=Sc=new Map;s.set(n,i)}else s=Sc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[ll]||a[tn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function N0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function L1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _v(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function U1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=br(i.href),a=t.querySelector(pl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ke(a);return}a=t.ownerDocument||t,i=yv(i),(s=ei.get(s))&&op(i,s),a=a.createElement("link"),Ke(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Jc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Sf=0;function D1(e,t){return e.stylesheets&&e.count===0&&bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Sf===0&&(Sf=62500*f1());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Sf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kc=null;function bc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kc=new Map,t.forEach(N1,e),Kc=null,Jc.call(e))}function N1(e,t){if(!(t.state.loading&4)){var n=Kc.get(e);if(n)var i=n.get(null);else{n=new Map,Kc.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Jc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var el={$$typeof:Wi,Provider:null,Consumer:null,_currentValue:ca,_currentValue2:ca,_threadCount:0};function O1(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qh(0),this.hiddenUpdates=qh(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function vv(e,t,n,i,s,a,r,o,l,c,h,d){return e=new O1(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=Dn(3,null,null,t),e.current=a,a.stateNode=e,t=Od(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Id(a),e}function xv(e){return e?(e=nr,e):nr}function Sv(e,t,n,i,s,a){s=xv(s),i.context===null?i.context=s:i.pendingContext=s,i=Ls(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Us(e,i,t),n!==null&&(En(n,e,t),Po(n,e,t))}function O0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){O0(e,t),(e=e.alternate)&&O0(e,t)}function bv(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&En(t,e,67108864),cp(e,67108864)}}function P0(e){if(e.tag===13||e.tag===31){var t=In();t=xd(t);var n=ba(e,t);n!==null&&En(n,e,t),cp(e,t)}}var jc=!0;function P1(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ae.p;try{ae.p=2,up(e,t,n,i)}finally{ae.p=a,Nt.T=s}}function z1(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ae.p;try{ae.p=8,up(e,t,n,i)}finally{ae.p=a,Nt.T=s}}function up(e,t,n,i){if(jc){var s=md(i);if(s===null)vf(e,t,i,Qc,n),z0(e,i);else if(B1(s,e,t,n,i))i.stopPropagation();else if(z0(e,i),t&4&&-1<I1.indexOf(e)){for(;s!==null;){var a=Tr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ra(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-zn(r);o.entanglements[1]|=l,r&=~l}Ai(a),(se&6)===0&&(Vc=On()+500,dl(0,!1))}}break;case 31:case 13:o=ba(a,2),o!==null&&En(o,a,2),hu(),cp(a,2)}if(a=md(i),a===null&&vf(e,t,i,Qc,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else vf(e,t,i,null,n)}}function md(e){return e=Ed(e),hp(e)}var Qc=null;function hp(e){if(Qc=null,e=Ka(e),e!==null){var t=sl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=G0(t),e!==null)return e;e=null}else if(n===31){if(e=k0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qc=e,null}function Mv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Eb()){case Y0:return 2;case Z0:return 8;case wc:case Tb:return 32;case J0:return 268435456;default:return 32}default:return 32}}var gd=!1,Os=null,Ps=null,zs=null,nl=new Map,il=new Map,bs=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z0(e,t){switch(e){case"focusin":case"focusout":Os=null;break;case"dragenter":case"dragleave":Ps=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(t.pointerId)}}function Eo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Tr(t),t!==null&&bv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function B1(e,t,n,i,s){switch(t){case"focusin":return Os=Eo(Os,e,t,n,i,s),!0;case"dragenter":return Ps=Eo(Ps,e,t,n,i,s),!0;case"mouseover":return zs=Eo(zs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return nl.set(a,Eo(nl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,il.set(a,Eo(il.get(a)||null,e,t,n,i,s)),!0}return!1}function Ev(e){var t=Ka(e.target);if(t!==null){var n=sl(t);if(n!==null){if(t=n.tag,t===13){if(t=G0(n),t!==null){e.blockedOn=t,vg(e.priority,function(){P0(n)});return}}else if(t===31){if(t=k0(n),t!==null){e.blockedOn=t,vg(e.priority,function(){P0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=md(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Of=i,n.target.dispatchEvent(i),Of=null}else return t=Tr(n),t!==null&&bv(t),e.blockedOn=n,!1;t.shift()}return!0}function I0(e,t,n){Mc(e)&&n.delete(t)}function F1(){gd=!1,Os!==null&&Mc(Os)&&(Os=null),Ps!==null&&Mc(Ps)&&(Ps=null),zs!==null&&Mc(zs)&&(zs=null),nl.forEach(I0),il.forEach(I0)}function oc(e,t){e.blockedOn===t&&(e.blockedOn=null,gd||(gd=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,F1)))}var lc=null;function B0(e){lc!==e&&(lc=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(hp(i||n)===null)continue;break}var a=Tr(n);a!==null&&(e.splice(t,3),t-=3,Kf(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Mr(e){function t(l){return oc(l,e)}Os!==null&&oc(Os,e),Ps!==null&&oc(Ps,e),zs!==null&&oc(zs,e),nl.forEach(t),il.forEach(t);for(var n=0;n<bs.length;n++){var i=bs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<bs.length&&(n=bs[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&bs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Tn]||null;if(typeof a=="function")r||B0(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Tn]||null)o=r.formAction;else if(hp(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),B0(n)}}}function Tv(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function fp(e){this._internalRoot=e}pu.prototype.render=fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=In();Sv(n,i,e,t,null,null)};pu.prototype.unmount=fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sv(e.current,2,null,e,null,null),hu(),t[Er]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ty();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bs.length&&t!==0&&t<bs[n].priority;n++);bs.splice(n,0,e),n===0&&Ev(e)}};var F0=H0.version;if(F0!=="19.2.6")throw Error(K(527,F0,"19.2.6"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=yb(t),e=e!==null?W0(e):null,e=e===null?null:e.stateNode,e};var H1={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(To=__REACT_DEVTOOLS_GLOBAL_HOOK__,!To.isDisabled&&To.supportsFiber))try{al=To.inject(H1),Pn=To}catch{}var To;mu.createRoot=function(e,t){if(!V0(e))throw Error(K(299));var n=!1,i="",s=g_,a=y_,r=__;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=vv(e,1,!1,null,null,n,i,null,s,a,r,Tv),e[Er]=t.current,rp(e),new fp(t)};mu.hydrateRoot=function(e,t,n){if(!V0(e))throw Error(K(299));var i=!1,s="",a=g_,r=y_,o=__,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=vv(e,1,!0,t,n??null,i,s,l,a,r,o,Tv),t.context=xv(null),n=t.current,i=In(),i=xd(i),s=Ls(i),s.callback=null,Us(n,s,i),n=i,t.current.lanes=n,ol(t,n),Ai(t),e[Er]=t.current,rp(e),new pu(t)};mu.version="19.2.6"});var Cv=vi((fC,Rv)=>{"use strict";function wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wv)}catch(e){console.error(e)}}wv(),Rv.exports=Av()});var PS=vi(Sh=>{"use strict";var eC=Symbol.for("react.transitional.element"),nC=Symbol.for("react.fragment");function OS(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:eC,type:e,key:i,ref:t!==void 0?t:null,props:n}}Sh.Fragment=nC;Sh.jsx=OS;Sh.jsxs=OS});var Fl=vi((UC,zS)=>{"use strict";zS.exports=PS()});var ps=ia(po()),FS=ia(Cv());var ho=ia(po());var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V1=0,Lv=1,G1=2;var aS=1,k1=2,os=3,Qs=0,fn=1,Gn=2;var Js=0,jr=1,Uv=2,Dv=3,Nv=4,W1=5,Ca=100,X1=101,q1=102,Ov=103,Pv=104,Y1=200,Z1=201,J1=202,K1=203,Wp=204,Xp=205,j1=206,Q1=207,$1=208,tE=209,eE=210,nE=211,iE=212,sE=213,aE=214,rE=0,oE=1,lE=2,Vu=3,cE=4,uE=5,hE=6,fE=7,rS=0,dE=1,pE=2,Ks=0,mE=1,gE=2,yE=3,Rm=4,_E=5;var oS=300,to=301,eo=302,qp=303,Yp=304,ph=306,Zp=1e3,pi=1001,Jp=1002,an=1003,zv=1004;var dp=1005;var ii=1006,vE=1007;var Al=1008;var js=1009,xE=1010,SE=1011,Cm=1012,lS=1013,Zs=1014,Ri=1015,wl=1016,cS=1017,uS=1018,Ua=1020,bE=1021,kn=1023,ME=1024,EE=1025,Da=1026,no=1027,TE=1028,hS=1029,AE=1030,fS=1031,dS=1033,pp=33776,mp=33777,gp=33778,yp=33779,Iv=35840,Bv=35841,Fv=35842,Hv=35843,pS=36196,Vv=37492,Gv=37496,kv=37808,Wv=37809,Xv=37810,qv=37811,Yv=37812,Zv=37813,Jv=37814,Kv=37815,jv=37816,Qv=37817,$v=37818,tx=37819,ex=37820,nx=37821,_p=36492,ix=36494,sx=36495,wE=36283,ax=36284,rx=36285,ox=36286;var Gu=2300,ku=2301,vp=2302,lx=2400,cx=2401,ux=2402;var mS=3e3,Na=3001,RE=3200,CE=3201,gS=0,LE=1,si="",We="srgb",cs="srgb-linear",Lm="display-p3",mh="display-p3-linear",Wu="linear",xe="srgb",Xu="rec709",qu="p3";var Ur=7680;var hx=519,UE=512,DE=513,NE=514,yS=515,OE=516,PE=517,zE=518,IE=519,fx=35044;var dx="300 es",Kp=1035,ls=2e3,Yu=2001,Ci=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],px=1234567,bl=Math.PI/180,Rl=180/Math.PI;function lo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[e&255]+ln[e>>8&255]+ln[e>>16&255]+ln[e>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function un(e,t,n){return Math.max(t,Math.min(n,e))}function Um(e,t){return(e%t+t)%t}function BE(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function FE(e,t,n){return e!==t?(n-e)/(t-e):0}function Ml(e,t,n){return(1-n)*e+n*t}function HE(e,t,n,i){return Ml(e,t,1-Math.exp(-n*i))}function VE(e,t=1){return t-Math.abs(Um(e,t*2)-t)}function GE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function kE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function WE(e,t){return e+Math.floor(Math.random()*(t-e+1))}function XE(e,t){return e+Math.random()*(t-e)}function qE(e){return e*(.5-Math.random())}function YE(e){e!==void 0&&(px=e);let t=px+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ZE(e){return e*bl}function JE(e){return e*Rl}function jp(e){return(e&e-1)===0&&e!==0}function KE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Zu(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function jE(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),f=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function _n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var _i={DEG2RAD:bl,RAD2DEG:Rl,generateUUID:lo,clamp:un,euclideanModulo:Um,mapLinear:BE,inverseLerp:FE,lerp:Ml,damp:HE,pingpong:VE,smoothstep:GE,smootherstep:kE,randInt:WE,randFloat:XE,randFloatSpread:qE,seededRandom:YE,degToRad:ZE,radToDeg:JE,isPowerOfTwo:jp,ceilPowerOfTwo:KE,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:jE,normalize:_n,denormalize:Yr},Lt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=s[0],m=s[3],u=s[6],y=s[1],g=s[4],S=s[7],M=s[2],R=s[5],E=s[8];return a[0]=r*v+o*y+l*M,a[3]=r*m+o*g+l*R,a[6]=r*u+o*S+l*E,a[1]=c*v+h*y+d*M,a[4]=c*m+h*g+d*R,a[7]=c*u+h*S+d*E,a[2]=f*v+p*y+_*M,a[5]=f*m+p*g+_*R,a[8]=f*u+p*S+_*E,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,_=n*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*r)*v,t[3]=f*v,t[4]=(h*n-s*l)*v,t[5]=(s*a-o*n)*v,t[6]=p*v,t[7]=(i*l-c*n)*v,t[8]=(r*n-i*a)*v,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(xp.makeScale(t,n)),this}rotate(t){return this.premultiply(xp.makeRotation(-t)),this}translate(t,n){return this.premultiply(xp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xp=new Zt;function _S(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ju(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function QE(){let e=Ju("canvas");return e.style.display="block",e}var mx={};function El(e){e in mx||(mx[e]=!0,console.warn(e))}var gx=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yx=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gu={[cs]:{transfer:Wu,primaries:Xu,toReference:e=>e,fromReference:e=>e},[We]:{transfer:xe,primaries:Xu,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[mh]:{transfer:Wu,primaries:qu,toReference:e=>e.applyMatrix3(yx),fromReference:e=>e.applyMatrix3(gx)},[Lm]:{transfer:xe,primaries:qu,toReference:e=>e.convertSRGBToLinear().applyMatrix3(yx),fromReference:e=>e.applyMatrix3(gx).convertLinearToSRGB()}},$E=new Set([cs,mh]),fe={enabled:!0,_workingColorSpace:cs,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(e){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!e},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!$E.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=gu[t].toReference,s=gu[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return gu[e].primaries},getTransfer:function(e){return e===si?Wu:gu[e].transfer}};function Qr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Sp(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Dr,Ku=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Dr===void 0&&(Dr=Ju("canvas")),Dr.width=t.width,Dr.height=t.height;let i=Dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ju("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Qr(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qr(n[i]/255)*255):n[i]=Qr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tT=0,ju=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=lo(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(bp(s[r].image)):a.push(bp(s[r]))}else a=bp(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function bp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ku.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eT=0,ai=class e extends Ci{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=pi,s=pi,a=ii,r=Al,o=kn,l=js,c=e.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=lo(),this.name="",this.source=new ju(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(El("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Na?We:si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zp:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Jp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zp:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Jp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return El("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?Na:mS}set encoding(t){El("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Na?We:si}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=oS;ai.DEFAULT_ANISOTROPY=1;var Ae=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let g=(c+1)/2,S=(p+1)/2,M=(u+1)/2,R=(h+f)/4,E=(d+v)/4,N=(_+m)/4;return g>S&&g>M?g<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(g),s=R/i,a=E/i):S>M?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=R/s,a=N/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=E/a,s=N/a),this.set(i,s,a,n),this}let y=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qp=class extends Ci{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n);let s={width:t,height:n,depth:1};i.encoding!==void 0&&(El("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Na?We:si),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ai(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new ju(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},us=class extends Qp{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Qu=class extends ai{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $p=class extends ai{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=a[r+0],p=a[r+1],_=a[r+2],v=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=_,t[n+3]=v;return}if(d!==v||l!==f||c!==p||h!==_){let m=1-o,u=l*f+c*p+h*_+d*v,y=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){let M=Math.sqrt(g),R=Math.atan2(M,u*y);m=Math.sin(m*R)/M,o=Math.sin(o*R)/M}let S=o*y;if(l=l*m+f*S,c=c*m+p*S,h=h*m+_*S,d=d*m+v*S,m===1-o){let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+h*d+l*p-c*f,t[n+1]=l*_+h*f+c*d-o*p,t[n+2]=c*_+h*p+o*f-l*d,t[n+3]=h*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(a),i*Math.cos(a),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(_x.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(_x.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mp.copy(this).projectOnVector(t),this.sub(Mp)}reflect(t){return this.sub(Mp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mp=new U,_x=new mi,gi=class{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ui.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ui.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ui):ui.fromBufferAttribute(a,r),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yu.copy(i.boundingBox)),yu.applyMatrix4(t.matrixWorld),this.union(yu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gl),_u.subVectors(this.max,gl),Nr.subVectors(t.a,gl),Or.subVectors(t.b,gl),Pr.subVectors(t.c,gl),ks.subVectors(Or,Nr),Ws.subVectors(Pr,Or),Ea.subVectors(Nr,Pr);let n=[0,-ks.z,ks.y,0,-Ws.z,Ws.y,0,-Ea.z,Ea.y,ks.z,0,-ks.x,Ws.z,0,-Ws.x,Ea.z,0,-Ea.x,-ks.y,ks.x,0,-Ws.y,Ws.x,0,-Ea.y,Ea.x,0];return!Ep(n,Nr,Or,Pr,_u)||(n=[1,0,0,0,1,0,0,0,1],!Ep(n,Nr,Or,Pr,_u))?!1:(vu.crossVectors(ks,Ws),n=[vu.x,vu.y,vu.z],Ep(n,Nr,Or,Pr,_u))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ns=[new U,new U,new U,new U,new U,new U,new U,new U],ui=new U,yu=new gi,Nr=new U,Or=new U,Pr=new U,ks=new U,Ws=new U,Ea=new U,gl=new U,_u=new U,vu=new U,Ta=new U;function Ep(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ta.fromArray(e,a);let o=s.x*Math.abs(Ta.x)+s.y*Math.abs(Ta.y)+s.z*Math.abs(Ta.z),l=t.dot(Ta),c=n.dot(Ta),h=i.dot(Ta);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nT=new gi,yl=new U,Tp=new U,io=class{constructor(t=new U,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):nT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yl.subVectors(t,this.center);let n=yl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(yl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yl.copy(t.center).add(Tp)),this.expandByPoint(yl.copy(t.center).sub(Tp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},is=new U,Ap=new U,xu=new U,Xs=new U,wp=new U,Su=new U,Rp=new U,Oa=class{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=is.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,n),is.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Ap.copy(t).add(n).multiplyScalar(.5),xu.copy(n).sub(t).normalize(),Xs.copy(this.origin).sub(Ap);let a=t.distanceTo(n)*.5,r=-this.direction.dot(xu),o=Xs.dot(this.direction),l=-Xs.dot(xu),c=Xs.lengthSq(),h=Math.abs(1-r*r),d,f,p,_;if(h>0)if(d=r*l-o,f=r*o-l,_=a*h,d>=0)if(f>=-_)if(f<=_){let v=1/h;d*=v,f*=v,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ap).addScaledVector(xu,f),p}intersectSphere(t,n){is.subVectors(t.center,this.origin);let i=is.dot(this.direction),s=is.dot(is)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,n,i,s,a){wp.subVectors(n,t),Su.subVectors(i,t),Rp.crossVectors(wp,Su);let r=this.direction.dot(Rp),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Xs.subVectors(this.origin,t);let l=o*this.direction.dot(Su.crossVectors(Xs,Su));if(l<0)return null;let c=o*this.direction.dot(wp.cross(Xs));if(c<0||l+c>r)return null;let h=-o*Xs.dot(Rp);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class e{constructor(t,n,i,s,a,r,o,l,c,h,d,f,p,_,v,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,f,p,_,v,m)}set(t,n,i,s,a,r,o,l,c,h,d,f,p,_,v,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/zr.setFromMatrixColumn(t,0).length(),a=1/zr.setFromMatrixColumn(t,1).length(),r=1/zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*d,_=o*h,v=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-v*c,n[9]=-o*l,n[2]=v-f*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,_=c*h,v=c*d;n[0]=f+v*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-_,n[6]=v+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,_=c*h,v=c*d;n[0]=f-v*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*h,n[9]=v-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,p=r*d,_=o*h,v=o*d;n[0]=l*h,n[4]=_*c-p,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,p=r*c,_=o*l,v=o*c;n[0]=l*h,n[4]=v-f*d,n[8]=_*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+_,n[10]=f-v*d}else if(t.order==="XZY"){let f=r*l,p=r*c,_=o*l,v=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+v,n[5]=r*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*h,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iT,t,sT)}lookAt(t,n,i){let s=this.elements;return Hn.subVectors(t,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),qs.crossVectors(i,Hn),qs.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),qs.crossVectors(i,Hn)),qs.normalize(),bu.crossVectors(Hn,qs),s[0]=qs.x,s[4]=bu.x,s[8]=Hn.x,s[1]=qs.y,s[5]=bu.y,s[9]=Hn.y,s[2]=qs.z,s[6]=bu.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],u=i[14],y=i[3],g=i[7],S=i[11],M=i[15],R=s[0],E=s[4],N=s[8],x=s[12],A=s[1],V=s[5],W=s[9],tt=s[13],D=s[2],B=s[6],Q=s[10],Z=s[14],et=s[3],j=s[7],at=s[11],ot=s[15];return a[0]=r*R+o*A+l*D+c*et,a[4]=r*E+o*V+l*B+c*j,a[8]=r*N+o*W+l*Q+c*at,a[12]=r*x+o*tt+l*Z+c*ot,a[1]=h*R+d*A+f*D+p*et,a[5]=h*E+d*V+f*B+p*j,a[9]=h*N+d*W+f*Q+p*at,a[13]=h*x+d*tt+f*Z+p*ot,a[2]=_*R+v*A+m*D+u*et,a[6]=_*E+v*V+m*B+u*j,a[10]=_*N+v*W+m*Q+u*at,a[14]=_*x+v*tt+m*Z+u*ot,a[3]=y*R+g*A+S*D+M*et,a[7]=y*E+g*V+S*B+M*j,a[11]=y*N+g*W+S*Q+M*at,a[15]=y*x+g*tt+S*Z+M*ot,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],_=t[3],v=t[7],m=t[11],u=t[15];return _*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+v*(+n*l*p-n*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*r*d-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],_=t[12],v=t[13],m=t[14],u=t[15],y=d*m*c-v*f*c+v*l*p-o*m*p-d*l*u+o*f*u,g=_*f*c-h*m*c-_*l*p+r*m*p+h*l*u-r*f*u,S=h*v*c-_*d*c+_*o*p-r*v*p-h*o*u+r*d*u,M=_*d*l-h*v*l-_*o*f+r*v*f+h*o*m-r*d*m,R=n*y+i*g+s*S+a*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/R;return t[0]=y*E,t[1]=(v*f*a-d*m*a-v*s*p+i*m*p+d*s*u-i*f*u)*E,t[2]=(o*m*a-v*l*a+v*s*c-i*m*c-o*s*u+i*l*u)*E,t[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*E,t[4]=g*E,t[5]=(h*m*a-_*f*a+_*s*p-n*m*p-h*s*u+n*f*u)*E,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*u-n*l*u)*E,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*p+n*l*p)*E,t[8]=S*E,t[9]=(_*d*a-h*v*a-_*i*p+n*v*p+h*i*u-n*d*u)*E,t[10]=(r*v*a-_*o*a+_*i*c-n*v*c-r*i*u+n*o*u)*E,t[11]=(h*o*a-r*d*a-h*i*c+n*d*c+r*i*p-n*o*p)*E,t[12]=M*E,t[13]=(h*v*s-_*d*s+_*i*f-n*v*f-h*i*m+n*d*m)*E,t[14]=(_*o*s-r*v*s-_*i*l+n*v*l+r*i*m-n*o*m)*E,t[15]=(r*d*s-h*o*s+h*i*l-n*d*l-r*i*f+n*o*f)*E,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,_=a*d,v=r*h,m=r*d,u=o*d,y=l*c,g=l*h,S=l*d,M=i.x,R=i.y,E=i.z;return s[0]=(1-(v+u))*M,s[1]=(p+S)*M,s[2]=(_-g)*M,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(f+u))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(_+g)*E,s[9]=(m-y)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=zr.set(s[0],s[1],s[2]).length(),r=zr.set(s[4],s[5],s[6]).length(),o=zr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],hi.copy(this);let c=1/a,h=1/r,d=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,n.setFromRotationMatrix(hi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=ls){let l=this.elements,c=2*a/(n-t),h=2*a/(i-s),d=(n+t)/(n-t),f=(i+s)/(i-s),p,_;if(o===ls)p=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Yu)p=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ls){let l=this.elements,c=1/(n-t),h=1/(i-s),d=1/(r-a),f=(n+t)*c,p=(i+s)*h,_,v;if(o===ls)_=(r+a)*d,v=-2*d;else if(o===Yu)_=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},zr=new U,hi=new He,iT=new U(0,0,0),sT=new U(1,1,1),qs=new U,bu=new U,Hn=new U,vx=new He,xx=new mi,$u=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-un(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return vx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vx,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return xx.setFromEuler(this),this.setFromQuaternion(xx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$u.DEFAULT_ORDER="XYZ";var Cl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},aT=0,Sx=new U,Ir=new mi,ss=new He,Mu=new U,_l=new U,rT=new U,oT=new mi,bx=new U(1,0,0),Mx=new U(0,1,0),Ex=new U(0,0,1),lT={type:"added"},cT={type:"removed"},dn=class e extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new $u,i=new mi,s=new U(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Zt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(bx,t)}rotateY(t){return this.rotateOnAxis(Mx,t)}rotateZ(t){return this.rotateOnAxis(Ex,t)}translateOnAxis(t,n){return Sx.copy(t).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(bx,t)}translateY(t){return this.translateOnAxis(Mx,t)}translateZ(t){return this.translateOnAxis(Ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Mu.copy(t):Mu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(_l,Mu,this.up):ss.lookAt(Mu,_l,this.up),this.quaternion.setFromRotationMatrix(ss),s&&(ss.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(ss),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cT)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,t,rT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,oT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++){let a=n[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++){let o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};dn.DEFAULT_UP=new U(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new U,as=new U,Cp=new U,rs=new U,Br=new U,Fr=new U,Tx=new U,Lp=new U,Up=new U,Dp=new U,Eu=!1,Zr=class e{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),fi.subVectors(t,n),s.cross(fi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){fi.subVectors(s,n),as.subVectors(i,n),Cp.subVectors(t,n);let r=fi.dot(fi),o=fi.dot(as),l=fi.dot(Cp),c=as.dot(as),h=as.dot(Cp),d=r*c-o*o;if(d===0)return a.set(-2,-1,-1);let f=1/d,p=(c*l-o*h)*f,_=(r*h-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,rs),rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getUV(t,n,i,s,a,r,o,l){return Eu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eu=!0),this.getInterpolation(t,n,i,s,a,r,o,l)}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,rs),l.setScalar(0),l.addScaledVector(a,rs.x),l.addScaledVector(r,rs.y),l.addScaledVector(o,rs.z),l}static isFrontFacing(t,n,i,s){return fi.subVectors(i,n),as.subVectors(t,n),fi.cross(as).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),fi.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,s,a){return Eu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eu=!0),e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Br.subVectors(s,i),Fr.subVectors(a,i),Lp.subVectors(t,i);let l=Br.dot(Lp),c=Fr.dot(Lp);if(l<=0&&c<=0)return n.copy(i);Up.subVectors(t,s);let h=Br.dot(Up),d=Fr.dot(Up);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Br,r);Dp.subVectors(t,a);let p=Br.dot(Dp),_=Fr.dot(Dp);if(_>=0&&p<=_)return n.copy(a);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Fr,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Tx.subVectors(a,s),o=(d-h)/(d-h+(p-_)),n.copy(s).addScaledVector(Tx,o);let u=1/(m+v+f);return r=v*u,o=f*u,n.copy(i).addScaledVector(Br,r).addScaledVector(Fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function Np(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ee=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=fe.workingColorSpace){return this.r=t,this.g=n,this.b=i,fe.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=fe.workingColorSpace){if(t=Um(t,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Np(r,a,t+1/3),this.g=Np(r,a,t),this.b=Np(r,a,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,n=We){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=We){let i=vS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}copyLinearToSRGB(t){return this.r=Sp(t.r),this.g=Sp(t.g),this.b=Sp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return fe.fromWorkingColorSpace(cn.copy(this),t),Math.round(un(cn.r*255,0,255))*65536+Math.round(un(cn.g*255,0,255))*256+Math.round(un(cn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=fe.workingColorSpace){fe.fromWorkingColorSpace(cn.copy(this),n);let i=cn.r,s=cn.g,a=cn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=fe.workingColorSpace){return fe.fromWorkingColorSpace(cn.copy(this),n),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=We){fe.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,i=cn.g,s=cn.b;return t!==We?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+n,Ys.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ys),t.getHSL(Tu);let i=Ml(Ys.h,Tu.h,n),s=Ml(Ys.s,Tu.s,n),a=Ml(Ys.l,Tu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ee;ee.NAMES=vS;var uT=0,$s=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=jr,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wp,this.blendDst=Xp,this.blendEquation=Ca,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==Qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wp&&(i.blendSrc=this.blendSrc),this.blendDst!==Xp&&(i.blendDst=this.blendDst),this.blendEquation!==Ca&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hs=class extends $s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new U,Au=new Lt,Ve=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=fx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Au.fromBufferAttribute(this,n),Au.applyMatrix3(t),this.setXY(n,Au.x,Au.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix3(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix4(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyNormalMatrix(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.transformDirection(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yr(n,this.array)),n}setX(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yr(n,this.array)),n}setY(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yr(n,this.array)),n}setW(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array),a=_n(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fx&&(t.usage=this.usage),t}};var th=class extends Ve{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var eh=class extends Ve{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Xe=class extends Ve{constructor(t,n,i){super(new Float32Array(t),n,i)}};var hT=0,ni=new He,Op=new dn,Hr=new U,Vn=new gi,vl=new gi,Qe=new U,pn=class e extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_S(t)?eh:th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,n,i){return ni.makeTranslation(t,n,i),this.applyMatrix4(ni),this}scale(t,n,i){return ni.makeScale(t,n,i),this.applyMatrix4(ni),this}lookAt(t){return Op.lookAt(t),Op.updateMatrix(),this.applyMatrix4(Op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Xe(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];vl.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Vn.min,vl.min),Vn.expandByPoint(Qe),Qe.addVectors(Vn.max,vl.max),Vn.expandByPoint(Qe)):(Vn.expandByPoint(vl.min),Vn.expandByPoint(vl.max))}Vn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Qe.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Qe));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Hr.fromBufferAttribute(t,c),Qe.add(Hr)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=n.position.array,a=n.normal.array,r=n.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new U,h[A]=new U;let d=new U,f=new U,p=new U,_=new Lt,v=new Lt,m=new Lt,u=new U,y=new U;function g(A,V,W){d.fromArray(s,A*3),f.fromArray(s,V*3),p.fromArray(s,W*3),_.fromArray(r,A*2),v.fromArray(r,V*2),m.fromArray(r,W*2),f.sub(d),p.sub(d),v.sub(_),m.sub(_);let tt=1/(v.x*m.y-m.x*v.y);isFinite(tt)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(tt),y.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(tt),c[A].add(u),c[V].add(u),c[W].add(u),h[A].add(y),h[V].add(y),h[W].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,V=S.length;A<V;++A){let W=S[A],tt=W.start,D=W.count;for(let B=tt,Q=tt+D;B<Q;B+=3)g(i[B+0],i[B+1],i[B+2])}let M=new U,R=new U,E=new U,N=new U;function x(A){E.fromArray(a,A*3),N.copy(E);let V=c[A];M.copy(V),M.sub(E.multiplyScalar(E.dot(V))).normalize(),R.crossVectors(N,V);let tt=R.dot(h[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=tt}for(let A=0,V=S.length;A<V;++A){let W=S[A],tt=W.start,D=W.count;for(let B=tt,Q=tt+D;B<Q;B+=3)x(i[B+0]),x(i[B+1]),x(i[B+2])}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new Ve(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ax=new He,Aa=new Oa,wu=new io,wx=new U,Vr=new U,Gr=new U,kr=new U,Pp=new U,Ru=new U,Cu=new Lt,Lu=new Lt,Uu=new Lt,Rx=new U,Cx=new U,Lx=new U,Du=new U,Nu=new U,ie=class extends dn{constructor(t=new pn,n=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Ru.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(Pp.fromBufferAttribute(d,t),r?Ru.addScaledVector(Pp,h):Ru.addScaledVector(Pp.sub(n),h))}n.add(Ru)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wu.copy(i.boundingSphere),wu.applyMatrix4(a),Aa.copy(t.ray).recast(t.near),!(wu.containsPoint(Aa.origin)===!1&&(Aa.intersectSphere(wu,wx)===null||Aa.origin.distanceToSquared(wx)>(t.far-t.near)**2))&&(Ax.copy(a).invert(),Aa.copy(t.ray).applyMatrix4(Ax),!(i.boundingBox!==null&&Aa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Aa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=r[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,M=g;S<M;S+=3){let R=o.getX(S),E=o.getX(S+1),N=o.getX(S+2);s=Ou(this,u,t,i,c,h,d,R,E,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let y=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);s=Ou(this,r,t,i,c,h,d,y,g,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=r[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,M=g;S<M;S+=3){let R=S,E=S+1,N=S+2;s=Ou(this,u,t,i,c,h,d,R,E,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let y=m,g=m+1,S=m+2;s=Ou(this,r,t,i,c,h,d,y,g,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function fT(e,t,n,i,s,a,r,o){let l;if(t.side===fn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Qs,o),l===null)return null;Nu.copy(o),Nu.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Nu);return c<n.near||c>n.far?null:{distance:c,point:Nu.clone(),object:e}}function Ou(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Vr),e.getVertexPosition(l,Gr),e.getVertexPosition(c,kr);let h=fT(e,t,n,i,Vr,Gr,kr,Du);if(h){s&&(Cu.fromBufferAttribute(s,o),Lu.fromBufferAttribute(s,l),Uu.fromBufferAttribute(s,c),h.uv=Zr.getInterpolation(Du,Vr,Gr,kr,Cu,Lu,Uu,new Lt)),a&&(Cu.fromBufferAttribute(a,o),Lu.fromBufferAttribute(a,l),Uu.fromBufferAttribute(a,c),h.uv1=Zr.getInterpolation(Du,Vr,Gr,kr,Cu,Lu,Uu,new Lt),h.uv2=h.uv1),r&&(Rx.fromBufferAttribute(r,o),Cx.fromBufferAttribute(r,l),Lx.fromBufferAttribute(r,c),h.normal=Zr.getInterpolation(Du,Vr,Gr,kr,Rx,Cx,Lx,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Zr.getNormal(Vr,Gr,kr,d.normal),h.face=d}return h}var Pa=class e extends pn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function _(v,m,u,y,g,S,M,R,E,N,x){let A=S/E,V=M/N,W=S/2,tt=M/2,D=R/2,B=E+1,Q=N+1,Z=0,et=0,j=new U;for(let at=0;at<Q;at++){let ot=at*V-tt;for(let yt=0;yt<B;yt++){let X=yt*A-W;j[v]=X*y,j[m]=ot*g,j[u]=D,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[u]=R>0?1:-1,h.push(j.x,j.y,j.z),d.push(yt/E),d.push(1-at/N),Z+=1}}for(let at=0;at<N;at++)for(let ot=0;ot<E;ot++){let yt=f+ot+B*at,X=f+ot+B*(at+1),nt=f+(ot+1)+B*(at+1),mt=f+(ot+1)+B*at;l.push(yt,X,mt),l.push(X,nt,mt),et+=6}o.addGroup(p,et,x),p+=et,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function so(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function vn(e){let t={};for(let n=0;n<e.length;n++){let i=so(e[n]);for(let s in i)t[s]=i[s]}return t}function dT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xS(e){return e.getRenderTarget()===null?e.outputColorSpace:fe.workingColorSpace}var pT={clone:so,merge:vn},mT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fs=class extends $s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mT,this.fragmentShader=gT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=dT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},nh=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ls}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=class extends nh{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Rl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(bl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Wr=-90,Xr=1,tm=class extends dn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Wr,Xr,t,n);s.layers=this.layers,this.add(s);let a=new hn(Wr,Xr,t,n);a.layers=this.layers,this.add(a);let r=new hn(Wr,Xr,t,n);r.layers=this.layers,this.add(r);let o=new hn(Wr,Xr,t,n);o.layers=this.layers,this.add(o);let l=new hn(Wr,Xr,t,n);l.layers=this.layers,this.add(l);let c=new hn(Wr,Xr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ls)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ih=class extends ai{constructor(t,n,i,s,a,r,o,l,c,h){t=t!==void 0?t:[],n=n!==void 0?n:to,super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},em=class extends us{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(El("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Na?We:si),this.texture=new ih(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pa(5,5,5),a=new fs({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Js});a.uniforms.tEquirect.value=n;let r=new ie(s,a),o=n.minFilter;return n.minFilter===Al&&(n.minFilter=ii),new tm(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,s){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},zp=new U,yT=new U,_T=new Zt,di=class{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=zp.subVectors(i,n).cross(yT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(zp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||_T.getNormalMatrix(t),s=this.coplanarPoint(zp).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wa=new io,Pu=new U,Ll=class{constructor(t=new di,n=new di,i=new di,s=new di,a=new di,r=new di){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ls){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],u=s[12],y=s[13],g=s[14],S=s[15];if(i[0].setComponents(l-a,f-c,m-p,S-u).normalize(),i[1].setComponents(l+a,f+c,m+p,S+u).normalize(),i[2].setComponents(l+r,f+h,m+_,S+y).normalize(),i[3].setComponents(l-r,f-h,m-_,S-y).normalize(),i[4].setComponents(l-o,f-d,m-v,S-g).normalize(),n===ls)i[5].setComponents(l+o,f+d,m+v,S+g).normalize();else if(n===Yu)i[5].setComponents(o,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wa)}intersectsSprite(t){return wa.center.set(0,0,0),wa.radius=.7071067811865476,wa.applyMatrix4(t.matrixWorld),this.intersectsSphere(wa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Pu.x=s.normal.x>0?t.max.x:t.min.x,Pu.y=s.normal.y>0?t.max.y:t.min.y,Pu.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pu)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function SS(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function vT(e,t){let n=t.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,f=c.usage,p=d.byteLength,_=e.createBuffer();e.bindBuffer(h,_),e.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=e.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=e.SHORT;else if(d instanceof Uint32Array)v=e.UNSIGNED_INT;else if(d instanceof Int32Array)v=e.INT;else if(d instanceof Int8Array)v=e.BYTE;else if(d instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function a(c,h,d){let f=h.array,p=h._updateRange,_=h.updateRanges;if(e.bindBuffer(d,c),p.count===-1&&_.length===0&&e.bufferSubData(d,0,f),_.length!==0){for(let v=0,m=_.length;v<m;v++){let u=_[v];n?e.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):e.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(n?e.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):e.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(e.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,h),d.version=c.version}}return{get:r,remove:o,update:l}}var nm=class e extends pn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],_=[],v=[],m=[];for(let u=0;u<h;u++){let y=u*f-r;for(let g=0;g<c;g++){let S=g*d-a;_.push(S,-y,0),v.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){let g=y+c*u,S=y+c*(u+1),M=y+1+c*(u+1),R=y+1+c*u;p.push(g,S,R),p.push(S,M,R)}this.setIndex(p),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
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
#endif`,bT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AT=`#ifdef USE_AOMAP
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
#endif`,wT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,CT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NT=`#ifdef USE_IRIDESCENCE
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
#endif`,OT=`#ifdef USE_BUMPMAP
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kT=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,WT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,XT=`vec3 transformedNormal = objectNormal;
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
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tA=`#ifdef USE_ENVMAP
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
#endif`,eA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
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
#endif`,iA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oA=`#ifdef USE_GRADIENTMAP
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
}`,lA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fA=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,dA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,pA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,vA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xA=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,bA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LA=`#if defined( USE_POINTS_UV )
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
#endif`,UA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,IA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GA=`#ifdef USE_NORMALMAP
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
#endif`,kA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lw=`#ifdef USE_SKINNING
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
#endif`,cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`#include <common>
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
}`,Aw=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ww=`#define DISTANCE
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
}`,Rw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nw=`#include <common>
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
}`,Ow=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pw=`#define LAMBERT
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
}`,zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Iw=`#define MATCAP
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
}`,Bw=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fw=`#define NORMAL
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
}`,Hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vw=`#define PHONG
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
}`,Gw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kw=`#define STANDARD
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
}`,Ww=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Xw=`#define TOON
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
}`,qw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yw=`uniform float size;
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
}`,Zw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Kw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Qw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xt={alphahash_fragment:xT,alphahash_pars_fragment:ST,alphamap_fragment:bT,alphamap_pars_fragment:MT,alphatest_fragment:ET,alphatest_pars_fragment:TT,aomap_fragment:AT,aomap_pars_fragment:wT,batching_pars_vertex:RT,batching_vertex:CT,begin_vertex:LT,beginnormal_vertex:UT,bsdfs:DT,iridescence_fragment:NT,bumpmap_pars_fragment:OT,clipping_planes_fragment:PT,clipping_planes_pars_fragment:zT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:BT,color_fragment:FT,color_pars_fragment:HT,color_pars_vertex:VT,color_vertex:GT,common:kT,cube_uv_reflection_fragment:WT,defaultnormal_vertex:XT,displacementmap_pars_vertex:qT,displacementmap_vertex:YT,emissivemap_fragment:ZT,emissivemap_pars_fragment:JT,colorspace_fragment:KT,colorspace_pars_fragment:jT,envmap_fragment:QT,envmap_common_pars_fragment:$T,envmap_pars_fragment:tA,envmap_pars_vertex:eA,envmap_physical_pars_fragment:dA,envmap_vertex:nA,fog_vertex:iA,fog_pars_vertex:sA,fog_fragment:aA,fog_pars_fragment:rA,gradientmap_pars_fragment:oA,lightmap_fragment:lA,lightmap_pars_fragment:cA,lights_lambert_fragment:uA,lights_lambert_pars_fragment:hA,lights_pars_begin:fA,lights_toon_fragment:pA,lights_toon_pars_fragment:mA,lights_phong_fragment:gA,lights_phong_pars_fragment:yA,lights_physical_fragment:_A,lights_physical_pars_fragment:vA,lights_fragment_begin:xA,lights_fragment_maps:SA,lights_fragment_end:bA,logdepthbuf_fragment:MA,logdepthbuf_pars_fragment:EA,logdepthbuf_pars_vertex:TA,logdepthbuf_vertex:AA,map_fragment:wA,map_pars_fragment:RA,map_particle_fragment:CA,map_particle_pars_fragment:LA,metalnessmap_fragment:UA,metalnessmap_pars_fragment:DA,morphcolor_vertex:NA,morphnormal_vertex:OA,morphtarget_pars_vertex:PA,morphtarget_vertex:zA,normal_fragment_begin:IA,normal_fragment_maps:BA,normal_pars_fragment:FA,normal_pars_vertex:HA,normal_vertex:VA,normalmap_pars_fragment:GA,clearcoat_normal_fragment_begin:kA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:XA,iridescence_pars_fragment:qA,opaque_fragment:YA,packing:ZA,premultiplied_alpha_fragment:JA,project_vertex:KA,dithering_fragment:jA,dithering_pars_fragment:QA,roughnessmap_fragment:$A,roughnessmap_pars_fragment:tw,shadowmap_pars_fragment:ew,shadowmap_pars_vertex:nw,shadowmap_vertex:iw,shadowmask_pars_fragment:sw,skinbase_vertex:aw,skinning_pars_vertex:rw,skinning_vertex:ow,skinnormal_vertex:lw,specularmap_fragment:cw,specularmap_pars_fragment:uw,tonemapping_fragment:hw,tonemapping_pars_fragment:fw,transmission_fragment:dw,transmission_pars_fragment:pw,uv_pars_fragment:mw,uv_pars_vertex:gw,uv_vertex:yw,worldpos_vertex:_w,background_vert:vw,background_frag:xw,backgroundCube_vert:Sw,backgroundCube_frag:bw,cube_vert:Mw,cube_frag:Ew,depth_vert:Tw,depth_frag:Aw,distanceRGBA_vert:ww,distanceRGBA_frag:Rw,equirect_vert:Cw,equirect_frag:Lw,linedashed_vert:Uw,linedashed_frag:Dw,meshbasic_vert:Nw,meshbasic_frag:Ow,meshlambert_vert:Pw,meshlambert_frag:zw,meshmatcap_vert:Iw,meshmatcap_frag:Bw,meshnormal_vert:Fw,meshnormal_frag:Hw,meshphong_vert:Vw,meshphong_frag:Gw,meshphysical_vert:kw,meshphysical_frag:Ww,meshtoon_vert:Xw,meshtoon_frag:qw,points_vert:Yw,points_frag:Zw,shadow_vert:Jw,shadow_frag:Kw,sprite_vert:jw,sprite_frag:Qw},dt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},wi={basic:{uniforms:vn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:vn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:vn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:vn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:vn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:vn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:vn([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:vn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:vn([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:vn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:vn([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:vn([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:vn([dt.lights,dt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};wi.physical={uniforms:vn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var zu={r:0,b:0,g:0};function $w(e,t,n,i,s,a,r){let o=new ee(0),l=a===!0?0:1,c,h,d=null,f=0,p=null;function _(m,u){let y=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:t).get(g)),g===null?v(o,l):g&&g.isColor&&(v(g,1),y=!0);let S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ph)?(h===void 0&&(h=new ie(new Pa(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:so(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=fe.getTransfer(g.colorSpace)!==xe,(d!==g||f!==g.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ie(new nm(2,2),new fs({name:"BackgroundMaterial",uniforms:so(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=fe.getTransfer(g.colorSpace)!==xe,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(zu,xS(e)),i.buffers.color.setClear(zu.r,zu.g,zu.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function t2(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||a!==null,o={},l=m(null),c=l,h=!1;function d(D,B,Q,Z,et){let j=!1;if(r){let at=v(Z,Q,B);c!==at&&(c=at,p(c.object)),j=u(D,Z,Q,et),j&&y(D,Z,Q,et)}else{let at=B.wireframe===!0;(c.geometry!==Z.id||c.program!==Q.id||c.wireframe!==at)&&(c.geometry=Z.id,c.program=Q.id,c.wireframe=at,j=!0)}et!==null&&n.update(et,e.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,N(D,B,Q,Z),et!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(et).buffer))}function f(){return i.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(D){return i.isWebGL2?e.bindVertexArray(D):a.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?e.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function v(D,B,Q){let Z=Q.wireframe===!0,et=o[D.id];et===void 0&&(et={},o[D.id]=et);let j=et[B.id];j===void 0&&(j={},et[B.id]=j);let at=j[Z];return at===void 0&&(at=m(f()),j[Z]=at),at}function m(D){let B=[],Q=[],Z=[];for(let et=0;et<s;et++)B[et]=0,Q[et]=0,Z[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:Z,object:D,attributes:{},index:null}}function u(D,B,Q,Z){let et=c.attributes,j=B.attributes,at=0,ot=Q.getAttributes();for(let yt in ot)if(ot[yt].location>=0){let nt=et[yt],mt=j[yt];if(mt===void 0&&(yt==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),yt==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;at++}return c.attributesNum!==at||c.index!==Z}function y(D,B,Q,Z){let et={},j=B.attributes,at=0,ot=Q.getAttributes();for(let yt in ot)if(ot[yt].location>=0){let nt=j[yt];nt===void 0&&(yt==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),yt==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));let mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),et[yt]=mt,at++}c.attributes=et,c.attributesNum=at,c.index=Z}function g(){let D=c.newAttributes;for(let B=0,Q=D.length;B<Q;B++)D[B]=0}function S(D){M(D,0)}function M(D,B){let Q=c.newAttributes,Z=c.enabledAttributes,et=c.attributeDivisors;Q[D]=1,Z[D]===0&&(e.enableVertexAttribArray(D),Z[D]=1),et[D]!==B&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),et[D]=B)}function R(){let D=c.newAttributes,B=c.enabledAttributes;for(let Q=0,Z=B.length;Q<Z;Q++)B[Q]!==D[Q]&&(e.disableVertexAttribArray(Q),B[Q]=0)}function E(D,B,Q,Z,et,j,at){at===!0?e.vertexAttribIPointer(D,B,Q,et,j):e.vertexAttribPointer(D,B,Q,Z,et,j)}function N(D,B,Q,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let et=Z.attributes,j=Q.getAttributes(),at=B.defaultAttributeValues;for(let ot in j){let yt=j[ot];if(yt.location>=0){let X=et[ot];if(X===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let nt=X.normalized,mt=X.itemSize,Mt=n.get(X);if(Mt===void 0)continue;let Et=Mt.buffer,Pt=Mt.type,Ut=Mt.bytesPerElement,Ct=i.isWebGL2===!0&&(Pt===e.INT||Pt===e.UNSIGNED_INT||X.gpuType===lS);if(X.isInterleavedBufferAttribute){let zt=X.data,z=zt.stride,Se=X.offset;if(zt.isInstancedInterleavedBuffer){for(let _t=0;_t<yt.locationSize;_t++)M(yt.location+_t,zt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let _t=0;_t<yt.locationSize;_t++)S(yt.location+_t);e.bindBuffer(e.ARRAY_BUFFER,Et);for(let _t=0;_t<yt.locationSize;_t++)E(yt.location+_t,mt/yt.locationSize,Pt,nt,z*Ut,(Se+mt/yt.locationSize*_t)*Ut,Ct)}else{if(X.isInstancedBufferAttribute){for(let zt=0;zt<yt.locationSize;zt++)M(yt.location+zt,X.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let zt=0;zt<yt.locationSize;zt++)S(yt.location+zt);e.bindBuffer(e.ARRAY_BUFFER,Et);for(let zt=0;zt<yt.locationSize;zt++)E(yt.location+zt,mt/yt.locationSize,Pt,nt,mt*Ut,mt/yt.locationSize*zt*Ut,Ct)}}else if(at!==void 0){let nt=at[ot];if(nt!==void 0)switch(nt.length){case 2:e.vertexAttrib2fv(yt.location,nt);break;case 3:e.vertexAttrib3fv(yt.location,nt);break;case 4:e.vertexAttrib4fv(yt.location,nt);break;default:e.vertexAttrib1fv(yt.location,nt)}}}}R()}function x(){W();for(let D in o){let B=o[D];for(let Q in B){let Z=B[Q];for(let et in Z)_(Z[et].object),delete Z[et];delete B[Q]}delete o[D]}}function A(D){if(o[D.id]===void 0)return;let B=o[D.id];for(let Q in B){let Z=B[Q];for(let et in Z)_(Z[et].object),delete Z[et];delete B[Q]}delete o[D.id]}function V(D){for(let B in o){let Q=o[B];if(Q[D.id]===void 0)continue;let Z=Q[D.id];for(let et in Z)_(Z[et].object),delete Z[et];delete Q[D.id]}}function W(){tt(),h=!0,c!==l&&(c=l,p(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:tt,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:S,disableUnusedAttributes:R}}function e2(e,t,n,i){let s=i.isWebGL2,a;function r(h){a=h}function o(h,d){e.drawArrays(a,h,d),n.update(d,a,1)}function l(h,d,f){if(f===0)return;let p,_;if(s)p=e,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](a,h,d,f),n.update(d,a,f)}function c(h,d,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{p.multiDrawArraysWEBGL(a,h,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v];n.update(_,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function n2(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){if(E==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=n.precision!==void 0?n.precision:"highp",l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=r||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),u=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,S=r||t.has("OES_texture_float"),M=g&&S,R=r?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:R}}function i2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new di,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?h(null):c();else{let y=a?0:i,g=y*4,S=u.clippingState||null;l.value=S,S=h(_,f,g,p);for(let M=0;M!==g;++M)S[M]=n[M];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let u=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,S=p;g!==v;++g,S+=4)r.copy(d[g]).applyMatrix4(y,o),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function s2(e){let t=new WeakMap;function n(r,o){return o===qp?r.mapping=to:o===Yp&&(r.mapping=eo),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===qp||o===Yp)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new em(l.height/2);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var sh=class extends nh{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Jr=4,Ux=[.125,.215,.35,.446,.526,.582],La=20,Ip=new sh,Dx=new ee,Bp=null,Fp=0,Hp=0,Ra=(1+Math.sqrt(5))/2,qr=1/Ra,Nx=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ra,qr),new U(0,Ra,-qr),new U(qr,0,Ra),new U(-qr,0,Ra),new U(Ra,qr,0),new U(-Ra,qr,0)],ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){Bp=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bp,Fp,Hp),t.scissorTest=!1,Iu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===to||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bp=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:wl,format:kn,colorSpace:cs,depthBuffer:!1},s=Ox(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ox(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a2(a)),this._blurMaterial=r2(a,t,n)}return s}_compileMaterial(t){let n=new ie(this._lodPlanes[0],t);this._renderer.compile(n,Ip)}_sceneToCubeUV(t,n,i,s){let o=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Dx),h.toneMapping=Ks,h.autoClear=!1;let p=new hs({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new ie(new Pa,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Dx),v=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):y===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let g=this._cubeSize;Iu(s,y*g,u>2?g:0,g,g),h.setRenderTarget(s),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===to||t.mapping===eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Px());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new ie(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Iu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Ip)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Nx[(s-1)%Nx.length];this._blur(t,s-1,s,a,r)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ie(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*La-1),v=a/_,m=isFinite(a)?1+Math.floor(h*v):La;m>La&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${La}`);let u=[],y=0;for(let E=0;E<La;++E){let N=E/v,x=Math.exp(-N*N/2);u.push(x),E===0?y+=x:E<m&&(y+=2*x)}for(let E=0;E<u.length;E++)u[E]=u[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;let S=this._sizeLods[s],M=3*S*(s>g-Jr?s-g+Jr:0),R=4*(this._cubeSize-S);Iu(n,M,R,3*S,2*S),l.setRenderTarget(n),l.render(d,Ip)}};function a2(e){let t=[],n=[],i=[],s=e,a=e-Jr+1+Ux.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Jr?l=Ux[r-e+Jr-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,m=2,u=1,y=new Float32Array(v*_*p),g=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let R=0;R<p;R++){let E=R%3*2/3-1,N=R>2?0:-1,x=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];y.set(x,v*_*R),g.set(f,m*_*R);let A=[R,R,R,R,R,R];S.set(A,u*_*R)}let M=new pn;M.setAttribute("position",new Ve(y,v)),M.setAttribute("uv",new Ve(g,m)),M.setAttribute("faceIndex",new Ve(S,u)),t.push(M),s>Jr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ox(e,t,n){let i=new us(e,t,n);return i.texture.mapping=ph,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Iu(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function r2(e,t,n){let i=new Float32Array(La),s=new U(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:La,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dm(),fragmentShader:`

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
		`,blending:Js,depthTest:!1,depthWrite:!1})}function Px(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dm(),fragmentShader:`

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
		`,blending:Js,depthTest:!1,depthWrite:!1})}function zx(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Js,depthTest:!1,depthWrite:!1})}function Dm(){return`

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
	`}function o2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===qp||l===Yp,h=l===to||l===eo;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return n===null&&(n=new ao(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){n===null&&(n=new ao(e));let f=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function l2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function c2(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],e.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,u=v.length;m<u;m++)t.update(v[m],e.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let g=0,S=y.length;g<S;g+=3){let M=y[g+0],R=y[g+1],E=y[g+2];f.push(M,R,R,E,E,M)}}else if(_!==void 0){let y=_.array;v=_.version;for(let g=0,S=y.length/3-1;g<S;g+=3){let M=g+0,R=g+1,E=g+2;f.push(M,R,R,E,E,M)}}else return;let m=new(_S(f)?eh:th)(f,1);m.version=v;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function h(d){let f=a.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function u2(e,t,n,i){let s=i.isWebGL2,a;function r(p){a=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){e.drawElements(a,_,o,p*l),n.update(_,a,1)}function d(p,_,v){if(v===0)return;let m,u;if(s)m=e,u="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](a,_,o,p*l,v),n.update(_,a,v)}function f(p,_,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<v;u++)this.render(p[u]/l,_[u]);else{m.multiDrawElementsWEBGL(a,_,0,o,p,0,v);let u=0;for(let y=0;y<v;y++)u+=_[y];n.update(u,a,1)}}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function h2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function f2(e,t){return e[0]-t[0]}function d2(e,t){return Math.abs(t[1])-Math.abs(e[1])}function p2(e,t,n){let i={},s=new Float32Array(8),a=new WeakMap,r=new Ae,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,v=a.get(h);if(v===void 0||v.count!==_){let D=function(){W.dispose(),a.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],N=0;y===!0&&(N=1),g===!0&&(N=2),S===!0&&(N=3);let x=h.attributes.position.count*N,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let V=new Float32Array(x*A*4*_),W=new Qu(V,x,A,_);W.type=Ri,W.needsUpdate=!0;let tt=N*4;for(let B=0;B<_;B++){let Q=M[B],Z=R[B],et=E[B],j=x*A*4*B;for(let at=0;at<Q.count;at++){let ot=at*tt;y===!0&&(r.fromBufferAttribute(Q,at),V[j+ot+0]=r.x,V[j+ot+1]=r.y,V[j+ot+2]=r.z,V[j+ot+3]=0),g===!0&&(r.fromBufferAttribute(Z,at),V[j+ot+4]=r.x,V[j+ot+5]=r.y,V[j+ot+6]=r.z,V[j+ot+7]=0),S===!0&&(r.fromBufferAttribute(et,at),V[j+ot+8]=r.x,V[j+ot+9]=r.y,V[j+ot+10]=r.z,V[j+ot+11]=et.itemSize===4?r.w:1)}}v={count:_,texture:W,size:new Lt(x,A)},a.set(h,v),h.addEventListener("dispose",D)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(e,"morphTargetBaseInfluence",u),d.getUniforms().setValue(e,"morphTargetInfluences",f),d.getUniforms().setValue(e,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}else{let p=f===void 0?0:f.length,_=i[h.id];if(_===void 0||_.length!==p){_=[];for(let g=0;g<p;g++)_[g]=[g,0];i[h.id]=_}for(let g=0;g<p;g++){let S=_[g];S[0]=g,S[1]=f[g]}_.sort(d2);for(let g=0;g<8;g++)g<p&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(f2);let v=h.morphAttributes.position,m=h.morphAttributes.normal,u=0;for(let g=0;g<8;g++){let S=o[g],M=S[0],R=S[1];M!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+g)!==v[M]&&h.setAttribute("morphTarget"+g,v[M]),m&&h.getAttribute("morphNormal"+g)!==m[M]&&h.setAttribute("morphNormal"+g,m[M]),s[g]=R,u+=R):(v&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(e,"morphTargetBaseInfluence",y),d.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:l}}function m2(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var ah=class extends ai{constructor(t,n,i,s,a,r,o,l,c,h){if(h=h!==void 0?h:Da,h!==Da&&h!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Da&&(i=Zs),i===void 0&&h===no&&(i=Ua),super(null,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},bS=new ai,MS=new ah(1,1);MS.compareFunction=yS;var ES=new Qu,TS=new $p,AS=new ih,Ix=[],Bx=[],Fx=new Float32Array(16),Hx=new Float32Array(9),Vx=new Float32Array(4);function co(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Ix[s];if(a===void 0&&(a=new Float32Array(s),Ix[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ye(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function gh(e,t){let n=Bx[t];n===void 0&&(n=new Int32Array(t),Bx[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function g2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function y2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2fv(this.addr,t),Ye(n,t)}}function _2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qe(n,t))return;e.uniform3fv(this.addr,t),Ye(n,t)}}function v2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4fv(this.addr,t),Ye(n,t)}}function x2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;Vx.set(i),e.uniformMatrix2fv(this.addr,!1,Vx),Ye(n,i)}}function S2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;Hx.set(i),e.uniformMatrix3fv(this.addr,!1,Hx),Ye(n,i)}}function b2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;Fx.set(i),e.uniformMatrix4fv(this.addr,!1,Fx),Ye(n,i)}}function M2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function E2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2iv(this.addr,t),Ye(n,t)}}function T2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3iv(this.addr,t),Ye(n,t)}}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4iv(this.addr,t),Ye(n,t)}}function w2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function R2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2uiv(this.addr,t),Ye(n,t)}}function C2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3uiv(this.addr,t),Ye(n,t)}}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4uiv(this.addr,t),Ye(n,t)}}function U2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a=this.type===e.SAMPLER_2D_SHADOW?MS:bS;n.setTexture2D(t||a,s)}function D2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||TS,s)}function N2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||AS,s)}function O2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||ES,s)}function P2(e){switch(e){case 5126:return g2;case 35664:return y2;case 35665:return _2;case 35666:return v2;case 35674:return x2;case 35675:return S2;case 35676:return b2;case 5124:case 35670:return M2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return w2;case 36294:return R2;case 36295:return C2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return O2}}function z2(e,t){e.uniform1fv(this.addr,t)}function I2(e,t){let n=co(t,this.size,2);e.uniform2fv(this.addr,n)}function B2(e,t){let n=co(t,this.size,3);e.uniform3fv(this.addr,n)}function F2(e,t){let n=co(t,this.size,4);e.uniform4fv(this.addr,n)}function H2(e,t){let n=co(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function V2(e,t){let n=co(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function G2(e,t){let n=co(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function k2(e,t){e.uniform1iv(this.addr,t)}function W2(e,t){e.uniform2iv(this.addr,t)}function X2(e,t){e.uniform3iv(this.addr,t)}function q2(e,t){e.uniform4iv(this.addr,t)}function Y2(e,t){e.uniform1uiv(this.addr,t)}function Z2(e,t){e.uniform2uiv(this.addr,t)}function J2(e,t){e.uniform3uiv(this.addr,t)}function K2(e,t){e.uniform4uiv(this.addr,t)}function j2(e,t,n){let i=this.cache,s=t.length,a=gh(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||bS,a[r])}function Q2(e,t,n){let i=this.cache,s=t.length,a=gh(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||TS,a[r])}function $2(e,t,n){let i=this.cache,s=t.length,a=gh(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||AS,a[r])}function tR(e,t,n){let i=this.cache,s=t.length,a=gh(n,s);qe(i,a)||(e.uniform1iv(this.addr,a),Ye(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||ES,a[r])}function eR(e){switch(e){case 5126:return z2;case 35664:return I2;case 35665:return B2;case 35666:return F2;case 35674:return H2;case 35675:return V2;case 35676:return G2;case 5124:case 35670:return k2;case 35667:case 35671:return W2;case 35668:case 35672:return X2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return Z2;case 36295:return J2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return tR}}var im=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=P2(n.type)}},sm=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eR(n.type)}},am=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Vp=/(\w+)(\])?(\[|\.)?/g;function Gx(e,t){e.seq.push(t),e.map[t.id]=t}function nR(e,t,n){let i=e.name,s=i.length;for(Vp.lastIndex=0;;){let a=Vp.exec(i),r=Vp.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Gx(n,c===void 0?new im(o,e,t):new sm(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new am(o),Gx(n,d)),n=d}}}var $r=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);nR(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function kx(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var iR=37297,sR=0;function aR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function rR(e){let t=fe.getPrimaries(fe.workingColorSpace),n=fe.getPrimaries(e),i;switch(t===n?i="":t===qu&&n===Xu?i="LinearDisplayP3ToLinearSRGB":t===Xu&&n===qu&&(i="LinearSRGBToLinearDisplayP3"),e){case cs:case mh:return[i,"LinearTransferOETF"];case We:case Lm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Wx(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+aR(e.getShaderSource(t),r)}else return s}function oR(e,t){let n=rR(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function lR(e,t){let n;switch(t){case mE:n="Linear";break;case gE:n="Reinhard";break;case yE:n="OptimizedCineon";break;case Rm:n="ACESFilmic";break;case _E:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function cR(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sl).join(`
`)}function uR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function hR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Sl(e){return e!==""}function Xx(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fR=/^[ \t]*#include +<([\w\d./]+)>/gm;function rm(e){return e.replace(fR,pR)}var dR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pR(e,t){let n=Xt[t];if(n===void 0){let i=dR.get(t);if(i!==void 0)n=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rm(n)}var mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(e){return e.replace(mR,gR)}function gR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Zx(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yR(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===aS?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===k1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===os&&(t="SHADOWMAP_TYPE_VSM"),t}function _R(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case to:case eo:t="ENVMAP_TYPE_CUBE";break;case ph:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vR(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===eo&&(t="ENVMAP_MODE_REFRACTION"),t}function xR(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case rS:t="ENVMAP_BLENDING_MULTIPLY";break;case dE:t="ENVMAP_BLENDING_MIX";break;case pE:t="ENVMAP_BLENDING_ADD";break}return t}function SR(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function bR(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=yR(n),c=_R(n),h=vR(n),d=xR(n),f=SR(n),p=n.isWebGL2?"":cR(n),_=uR(a),v=s.createProgram(),m,u,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Sl).join(`
`),m.length>0&&(m+=`
`),u=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Sl).join(`
`),u.length>0&&(u+=`
`)):(m=[Zx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),u=[p,Zx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ks?"#define TONE_MAPPING":"",n.toneMapping!==Ks?Xt.tonemapping_pars_fragment:"",n.toneMapping!==Ks?lR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,oR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sl).join(`
`)),r=rm(r),r=Xx(r,n),r=qx(r,n),o=rm(o),o=Xx(o,n),o=qx(o,n),r=Yx(r),o=Yx(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let g=y+m+r,S=y+u+o,M=kx(s,s.VERTEX_SHADER,g),R=kx(s,s.FRAGMENT_SHADER,S);s.attachShader(v,M),s.attachShader(v,R),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(V){if(e.debug.checkShaderErrors){let W=s.getProgramInfoLog(v).trim(),tt=s.getShaderInfoLog(M).trim(),D=s.getShaderInfoLog(R).trim(),B=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,M,R);else{let Z=Wx(s,M,"vertex"),et=Wx(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Z+`
`+et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(tt===""||D==="")&&(Q=!1);Q&&(V.diagnostics={runnable:B,programLog:W,vertexShader:{log:tt,prefix:m},fragmentShader:{log:D,prefix:u}})}s.deleteShader(M),s.deleteShader(R),N=new $r(s,v),x=hR(s,v)}let N;this.getUniforms=function(){return N===void 0&&E(this),N};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,iR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sR++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=R,this}var MR=0,om=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new lm(t),n.set(t,i)),i}},lm=class{constructor(t){this.id=MR++,this.code=t,this.usedTimes=0}};function ER(e,t,n,i,s,a,r){let o=new Cl,l=new om,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,A,V,W,tt){let D=W.fog,B=tt.geometry,Q=x.isMeshStandardMaterial?W.environment:null,Z=(x.isMeshStandardMaterial?n:t).get(x.envMap||Q),et=Z&&Z.mapping===ph?Z.image.height:null,j=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=at!==void 0?at.length:0,yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let X,nt,mt,Mt;if(j){let ne=wi[j];X=ne.vertexShader,nt=ne.fragmentShader}else X=x.vertexShader,nt=x.fragmentShader,l.update(x),mt=l.getVertexShaderID(x),Mt=l.getFragmentShaderID(x);let Et=e.getRenderTarget(),Pt=tt.isInstancedMesh===!0,Ut=tt.isBatchedMesh===!0,Ct=!!x.map,zt=!!x.matcap,z=!!Z,Se=!!x.aoMap,_t=!!x.lightMap,Bt=!!x.bumpMap,Tt=!!x.normalMap,ce=!!x.displacementMap,Ft=!!x.emissiveMap,Ot=!!x.metalnessMap,Jt=!!x.roughnessMap,Ue=x.anisotropy>0,me=x.clearcoat>0,w=x.iridescence>0,b=x.sheen>0,I=x.transmission>0,lt=Ue&&!!x.anisotropyMap,st=me&&!!x.clearcoatMap,ct=me&&!!x.clearcoatNormalMap,St=me&&!!x.clearcoatRoughnessMap,ht=w&&!!x.iridescenceMap,gt=w&&!!x.iridescenceThicknessMap,C=b&&!!x.sheenColorMap,ut=b&&!!x.sheenRoughnessMap,$=!!x.specularMap,Rt=!!x.specularColorMap,bt=!!x.specularIntensityMap,wt=I&&!!x.transmissionMap,G=I&&!!x.thicknessMap,J=!!x.gradientMap,ft=!!x.alphaMap,L=x.alphaTest>0,it=!!x.alphaHash,Y=!!x.extensions,P=!!B.attributes.uv1,q=!!B.attributes.uv2,rt=!!B.attributes.uv3,pt=Ks;return x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(pt=e.toneMapping),{isWebGL2:h,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:nt,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ut,instancing:Pt,instancingColor:Pt&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Et===null?e.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:cs,map:Ct,matcap:zt,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:et,aoMap:Se,lightMap:_t,bumpMap:Bt,normalMap:Tt,displacementMap:f&&ce,emissiveMap:Ft,normalMapObjectSpace:Tt&&x.normalMapType===LE,normalMapTangentSpace:Tt&&x.normalMapType===gS,metalnessMap:Ot,roughnessMap:Jt,anisotropy:Ue,anisotropyMap:lt,clearcoat:me,clearcoatMap:st,clearcoatNormalMap:ct,clearcoatRoughnessMap:St,iridescence:w,iridescenceMap:ht,iridescenceThicknessMap:gt,sheen:b,sheenColorMap:C,sheenRoughnessMap:ut,specularMap:$,specularColorMap:Rt,specularIntensityMap:bt,transmission:I,transmissionMap:wt,thicknessMap:G,gradientMap:J,opaque:x.transparent===!1&&x.blending===jr,alphaMap:ft,alphaTest:L,alphaHash:it,combine:x.combine,mapUv:Ct&&v(x.map.channel),aoMapUv:Se&&v(x.aoMap.channel),lightMapUv:_t&&v(x.lightMap.channel),bumpMapUv:Bt&&v(x.bumpMap.channel),normalMapUv:Tt&&v(x.normalMap.channel),displacementMapUv:ce&&v(x.displacementMap.channel),emissiveMapUv:Ft&&v(x.emissiveMap.channel),metalnessMapUv:Ot&&v(x.metalnessMap.channel),roughnessMapUv:Jt&&v(x.roughnessMap.channel),anisotropyMapUv:lt&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:C&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(x.sheenRoughnessMap.channel),specularMapUv:$&&v(x.specularMap.channel),specularColorMapUv:Rt&&v(x.specularColorMap.channel),specularIntensityMapUv:bt&&v(x.specularIntensityMap.channel),transmissionMapUv:wt&&v(x.transmissionMap.channel),thicknessMapUv:G&&v(x.thicknessMap.channel),alphaMapUv:ft&&v(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Tt||Ue),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:P,vertexUv2s:q,vertexUv3s:rt,pointsUvs:tt.isPoints===!0&&!!B.attributes.uv&&(Ct||ft),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:tt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:yt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&V.length>0,shadowMapType:e.shadowMap.type,toneMapping:pt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&fe.getTransfer(x.map.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Y&&x.extensions.derivatives===!0,extensionFragDepth:Y&&x.extensions.fragDepth===!0,extensionDrawBuffers:Y&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Y&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let V in x.defines)A.push(V),A.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(y(A,x),g(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function y(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function g(x,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){let A=_[x.type],V;if(A){let W=wi[A];V=pT.clone(W.uniforms)}else V=x.uniforms;return V}function M(x,A){let V;for(let W=0,tt=c.length;W<tt;W++){let D=c[W];if(D.cacheKey===A){V=D,++V.usedTimes;break}}return V===void 0&&(V=new bR(e,A,x,a),c.push(V)),V}function R(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:M,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:N}}function TR(){let e=new WeakMap;function t(a){let r=e.get(a);return r===void 0&&(r={},e.set(a,r)),r}function n(a){e.delete(a)}function i(a,r,o){e.get(a)[r]=o}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function AR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Jx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Kx(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,f,p,_,v,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function o(d,f,p,_,v,m){let u=r(d,f,p,_,v,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,_,v,m){let u=r(d,f,p,_,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||AR),i.length>1&&i.sort(f||Jx),s.length>1&&s.sort(f||Jx)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function wR(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Kx,e.set(i,[r])):s>=a.length?(r=new Kx,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function RR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new ee};break;case"SpotLight":n={position:new U,direction:new U,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function CR(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var LR=0;function UR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function DR(e,t){let n=new RR,i=CR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let a=new U,r=new He,o=new He;function l(h,d){let f=0,p=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,m=0,u=0,y=0,g=0,S=0,M=0,R=0,E=0,N=0,x=0;h.sort(UR);let A=d===!0?Math.PI:1;for(let W=0,tt=h.length;W<tt;W++){let D=h[W],B=D.color,Q=D.intensity,Z=D.distance,et=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=B.r*Q*A,p+=B.g*Q*A,_+=B.b*Q*A;else if(D.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(D.sh.coefficients[j],Q);x++}else if(D.isDirectionalLight){let j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){let at=D.shadow,ot=i.get(D);ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize=at.mapSize,s.directionalShadow[v]=ot,s.directionalShadowMap[v]=et,s.directionalShadowMatrix[v]=D.shadow.matrix,S++}s.directional[v]=j,v++}else if(D.isSpotLight){let j=n.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(B).multiplyScalar(Q*A),j.distance=Z,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,s.spot[u]=j;let at=D.shadow;if(D.map&&(s.spotLightMap[E]=D.map,E++,at.updateMatrices(D),D.castShadow&&N++),s.spotLightMatrix[u]=at.matrix,D.castShadow){let ot=i.get(D);ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize=at.mapSize,s.spotShadow[u]=ot,s.spotShadowMap[u]=et,R++}u++}else if(D.isRectAreaLight){let j=n.get(D);j.color.copy(B).multiplyScalar(Q),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=j,y++}else if(D.isPointLight){let j=n.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),j.distance=D.distance,j.decay=D.decay,D.castShadow){let at=D.shadow,ot=i.get(D);ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize=at.mapSize,ot.shadowCameraNear=at.camera.near,ot.shadowCameraFar=at.camera.far,s.pointShadow[m]=ot,s.pointShadowMap[m]=et,s.pointShadowMatrix[m]=D.shadow.matrix,M++}s.point[m]=j,m++}else if(D.isHemisphereLight){let j=n.get(D);j.skyColor.copy(D.color).multiplyScalar(Q*A),j.groundColor.copy(D.groundColor).multiplyScalar(Q*A),s.hemi[g]=j,g++}}y>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=_;let V=s.hash;(V.directionalLength!==v||V.pointLength!==m||V.spotLength!==u||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==S||V.numPointShadows!==M||V.numSpotShadows!==R||V.numSpotMaps!==E||V.numLightProbes!==x)&&(s.directional.length=v,s.spot.length=u,s.rectArea.length=y,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=R+E-N,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=x,V.directionalLength=v,V.pointLength=m,V.spotLength=u,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=S,V.numPointShadows=M,V.numSpotShadows=R,V.numSpotMaps=E,V.numLightProbes=x,s.version=LR++)}function c(h,d){let f=0,p=0,_=0,v=0,m=0,u=d.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){let S=h[y];if(S.isDirectionalLight){let M=s.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(u),f++}else if(S.isSpotLight){let M=s.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(u),_++}else if(S.isRectAreaLight){let M=s.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(u),o.identity(),r.copy(S.matrixWorld),r.premultiply(u),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){let M=s.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(u),p++}else if(S.isHemisphereLight){let M=s.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:s}}function jx(e,t){let n=new DR(e,t),i=[],s=[];function a(){i.length=0,s.length=0}function r(d){i.push(d)}function o(d){s.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function NR(e,t){let n=new WeakMap;function i(a,r=0){let o=n.get(a),l;return o===void 0?(l=new jx(e,t),n.set(a,[l])):r>=o.length?(l=new jx(e,t),o.push(l)):l=o[r],l}function s(){n=new WeakMap}return{get:i,dispose:s}}var cm=class extends $s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},um=class extends $s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zR(e,t,n){let i=new Ll,s=new Lt,a=new Lt,r=new Ae,o=new cm({depthPacking:CE}),l=new um,c={},h=n.maxTextureSize,d={[Qs]:fn,[fn]:Qs,[Gn]:Gn},f=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:OR,fragmentShader:PR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new pn;_.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ie(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aS;let u=this.type;this.render=function(M,R,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let N=e.getRenderTarget(),x=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Js),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=u!==os&&this.type===os,tt=u===os&&this.type!==os;for(let D=0,B=M.length;D<B;D++){let Q=M[D],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let et=Z.getFrameExtents();if(s.multiply(et),a.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/et.x),s.x=a.x*et.x,Z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/et.y),s.y=a.y*et.y,Z.mapSize.y=a.y)),Z.map===null||W===!0||tt===!0){let at=this.type!==os?{minFilter:an,magFilter:an}:{};Z.map!==null&&Z.map.dispose(),Z.map=new us(s.x,s.y,at),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}e.setRenderTarget(Z.map),e.clear();let j=Z.getViewportCount();for(let at=0;at<j;at++){let ot=Z.getViewport(at);r.set(a.x*ot.x,a.y*ot.y,a.x*ot.z,a.y*ot.w),V.viewport(r),Z.updateMatrices(Q,at),i=Z.getFrustum(),S(R,E,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===os&&y(Z,E),Z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(N,x,A)};function y(M,R){let E=t.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new us(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(R,null,E,f,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(R,null,E,p,v,null)}function g(M,R,E,N){let x=null,A=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)x=A;else if(x=E.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=x.uuid,W=R.uuid,tt=c[V];tt===void 0&&(tt={},c[V]=tt);let D=tt[W];D===void 0&&(D=x.clone(),tt[W]=D),x=D}if(x.visible=R.visible,x.wireframe=R.wireframe,N===os?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let V=e.properties.get(x);V.light=E}return x}function S(M,R,E,N,x){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===os)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);let W=t.update(M),tt=M.material;if(Array.isArray(tt)){let D=W.groups;for(let B=0,Q=D.length;B<Q;B++){let Z=D[B],et=tt[Z.materialIndex];if(et&&et.visible){let j=g(M,et,N,x);M.onBeforeShadow(e,M,R,E,W,j,Z),e.renderBufferDirect(E,null,W,j,M,Z),M.onAfterShadow(e,M,R,E,W,j,Z)}}}else if(tt.visible){let D=g(M,tt,N,x);M.onBeforeShadow(e,M,R,E,W,D,null),e.renderBufferDirect(E,null,W,D,M,null),M.onAfterShadow(e,M,R,E,W,D,null)}}let V=M.children;for(let W=0,tt=V.length;W<tt;W++)S(V[W],R,E,N,x)}}function IR(e,t,n){let i=n.isWebGL2;function s(){let L=!1,it=new Ae,Y=null,P=new Ae(0,0,0,0);return{setMask:function(q){Y!==q&&!L&&(e.colorMask(q,q,q,q),Y=q)},setLocked:function(q){L=q},setClear:function(q,rt,pt,Kt,ne){ne===!0&&(q*=Kt,rt*=Kt,pt*=Kt),it.set(q,rt,pt,Kt),P.equals(it)===!1&&(e.clearColor(q,rt,pt,Kt),P.copy(it))},reset:function(){L=!1,Y=null,P.set(-1,0,0,0)}}}function a(){let L=!1,it=null,Y=null,P=null;return{setTest:function(q){q?Ut(e.DEPTH_TEST):Ct(e.DEPTH_TEST)},setMask:function(q){it!==q&&!L&&(e.depthMask(q),it=q)},setFunc:function(q){if(Y!==q){switch(q){case rE:e.depthFunc(e.NEVER);break;case oE:e.depthFunc(e.ALWAYS);break;case lE:e.depthFunc(e.LESS);break;case Vu:e.depthFunc(e.LEQUAL);break;case cE:e.depthFunc(e.EQUAL);break;case uE:e.depthFunc(e.GEQUAL);break;case hE:e.depthFunc(e.GREATER);break;case fE:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Y=q}},setLocked:function(q){L=q},setClear:function(q){P!==q&&(e.clearDepth(q),P=q)},reset:function(){L=!1,it=null,Y=null,P=null}}}function r(){let L=!1,it=null,Y=null,P=null,q=null,rt=null,pt=null,Kt=null,ne=null;return{setTest:function(Ht){L||(Ht?Ut(e.STENCIL_TEST):Ct(e.STENCIL_TEST))},setMask:function(Ht){it!==Ht&&!L&&(e.stencilMask(Ht),it=Ht)},setFunc:function(Ht,re,be){(Y!==Ht||P!==re||q!==be)&&(e.stencilFunc(Ht,re,be),Y=Ht,P=re,q=be)},setOp:function(Ht,re,be){(rt!==Ht||pt!==re||Kt!==be)&&(e.stencilOp(Ht,re,be),rt=Ht,pt=re,Kt=be)},setLocked:function(Ht){L=Ht},setClear:function(Ht){ne!==Ht&&(e.clearStencil(Ht),ne=Ht)},reset:function(){L=!1,it=null,Y=null,P=null,q=null,rt=null,pt=null,Kt=null,ne=null}}}let o=new s,l=new a,c=new r,h=new WeakMap,d=new WeakMap,f={},p={},_=new WeakMap,v=[],m=null,u=!1,y=null,g=null,S=null,M=null,R=null,E=null,N=null,x=new ee(0,0,0),A=0,V=!1,W=null,tt=null,D=null,B=null,Q=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,j=0,at=e.getParameter(e.VERSION);at.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(at)[1]),et=j>=1):at.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),et=j>=2);let ot=null,yt={},X=e.getParameter(e.SCISSOR_BOX),nt=e.getParameter(e.VIEWPORT),mt=new Ae().fromArray(X),Mt=new Ae().fromArray(nt);function Et(L,it,Y,P){let q=new Uint8Array(4),rt=e.createTexture();e.bindTexture(L,rt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pt=0;pt<Y;pt++)i&&(L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY)?e.texImage3D(it,0,e.RGBA,1,1,P,0,e.RGBA,e.UNSIGNED_BYTE,q):e.texImage2D(it+pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,q);return rt}let Pt={};Pt[e.TEXTURE_2D]=Et(e.TEXTURE_2D,e.TEXTURE_2D,1),Pt[e.TEXTURE_CUBE_MAP]=Et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pt[e.TEXTURE_2D_ARRAY]=Et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Pt[e.TEXTURE_3D]=Et(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(e.DEPTH_TEST),l.setFunc(Vu),Ft(!1),Ot(Lv),Ut(e.CULL_FACE),Tt(Js);function Ut(L){f[L]!==!0&&(e.enable(L),f[L]=!0)}function Ct(L){f[L]!==!1&&(e.disable(L),f[L]=!1)}function zt(L,it){return p[L]!==it?(e.bindFramebuffer(L,it),p[L]=it,i&&(L===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=it),L===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=it)),!0):!1}function z(L,it){let Y=v,P=!1;if(L)if(Y=_.get(it),Y===void 0&&(Y=[],_.set(it,Y)),L.isWebGLMultipleRenderTargets){let q=L.texture;if(Y.length!==q.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,pt=q.length;rt<pt;rt++)Y[rt]=e.COLOR_ATTACHMENT0+rt;Y.length=q.length,P=!0}}else Y[0]!==e.COLOR_ATTACHMENT0&&(Y[0]=e.COLOR_ATTACHMENT0,P=!0);else Y[0]!==e.BACK&&(Y[0]=e.BACK,P=!0);P&&(n.isWebGL2?e.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Se(L){return m!==L?(e.useProgram(L),m=L,!0):!1}let _t={[Ca]:e.FUNC_ADD,[X1]:e.FUNC_SUBTRACT,[q1]:e.FUNC_REVERSE_SUBTRACT};if(i)_t[Ov]=e.MIN,_t[Pv]=e.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(_t[Ov]=L.MIN_EXT,_t[Pv]=L.MAX_EXT)}let Bt={[Y1]:e.ZERO,[Z1]:e.ONE,[J1]:e.SRC_COLOR,[Wp]:e.SRC_ALPHA,[eE]:e.SRC_ALPHA_SATURATE,[$1]:e.DST_COLOR,[j1]:e.DST_ALPHA,[K1]:e.ONE_MINUS_SRC_COLOR,[Xp]:e.ONE_MINUS_SRC_ALPHA,[tE]:e.ONE_MINUS_DST_COLOR,[Q1]:e.ONE_MINUS_DST_ALPHA,[nE]:e.CONSTANT_COLOR,[iE]:e.ONE_MINUS_CONSTANT_COLOR,[sE]:e.CONSTANT_ALPHA,[aE]:e.ONE_MINUS_CONSTANT_ALPHA};function Tt(L,it,Y,P,q,rt,pt,Kt,ne,Ht){if(L===Js){u===!0&&(Ct(e.BLEND),u=!1);return}if(u===!1&&(Ut(e.BLEND),u=!0),L!==W1){if(L!==y||Ht!==V){if((g!==Ca||R!==Ca)&&(e.blendEquation(e.FUNC_ADD),g=Ca,R=Ca),Ht)switch(L){case jr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Uv:e.blendFunc(e.ONE,e.ONE);break;case Dv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Nv:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case jr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Uv:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Dv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Nv:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,M=null,E=null,N=null,x.set(0,0,0),A=0,y=L,V=Ht}return}q=q||it,rt=rt||Y,pt=pt||P,(it!==g||q!==R)&&(e.blendEquationSeparate(_t[it],_t[q]),g=it,R=q),(Y!==S||P!==M||rt!==E||pt!==N)&&(e.blendFuncSeparate(Bt[Y],Bt[P],Bt[rt],Bt[pt]),S=Y,M=P,E=rt,N=pt),(Kt.equals(x)===!1||ne!==A)&&(e.blendColor(Kt.r,Kt.g,Kt.b,ne),x.copy(Kt),A=ne),y=L,V=!1}function ce(L,it){L.side===Gn?Ct(e.CULL_FACE):Ut(e.CULL_FACE);let Y=L.side===fn;it&&(Y=!Y),Ft(Y),L.blending===jr&&L.transparent===!1?Tt(Js):Tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let P=L.stencilWrite;c.setTest(P),P&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ut(e.SAMPLE_ALPHA_TO_COVERAGE):Ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){W!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),W=L)}function Ot(L){L!==V1?(Ut(e.CULL_FACE),L!==tt&&(L===Lv?e.cullFace(e.BACK):L===G1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ct(e.CULL_FACE),tt=L}function Jt(L){L!==D&&(et&&e.lineWidth(L),D=L)}function Ue(L,it,Y){L?(Ut(e.POLYGON_OFFSET_FILL),(B!==it||Q!==Y)&&(e.polygonOffset(it,Y),B=it,Q=Y)):Ct(e.POLYGON_OFFSET_FILL)}function me(L){L?Ut(e.SCISSOR_TEST):Ct(e.SCISSOR_TEST)}function w(L){L===void 0&&(L=e.TEXTURE0+Z-1),ot!==L&&(e.activeTexture(L),ot=L)}function b(L,it,Y){Y===void 0&&(ot===null?Y=e.TEXTURE0+Z-1:Y=ot);let P=yt[Y];P===void 0&&(P={type:void 0,texture:void 0},yt[Y]=P),(P.type!==L||P.texture!==it)&&(ot!==Y&&(e.activeTexture(Y),ot=Y),e.bindTexture(L,it||Pt[L]),P.type=L,P.texture=it)}function I(){let L=yt[ot];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function lt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(L){mt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function wt(L){Mt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Mt.copy(L))}function G(L,it){let Y=d.get(it);Y===void 0&&(Y=new WeakMap,d.set(it,Y));let P=Y.get(L);P===void 0&&(P=e.getUniformBlockIndex(it,L.name),Y.set(L,P))}function J(L,it){let P=d.get(it).get(L);h.get(it)!==P&&(e.uniformBlockBinding(it,P,L.__bindingPointIndex),h.set(it,P))}function ft(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ot=null,yt={},p={},_=new WeakMap,v=[],m=null,u=!1,y=null,g=null,S=null,M=null,R=null,E=null,N=null,x=new ee(0,0,0),A=0,V=!1,W=null,tt=null,D=null,B=null,Q=null,mt.set(0,0,e.canvas.width,e.canvas.height),Mt.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ut,disable:Ct,bindFramebuffer:zt,drawBuffers:z,useProgram:Se,setBlending:Tt,setMaterial:ce,setFlipSided:Ft,setCullFace:Ot,setLineWidth:Jt,setPolygonOffset:Ue,setScissorTest:me,activeTexture:w,bindTexture:b,unbindTexture:I,compressedTexImage2D:lt,compressedTexImage3D:st,texImage2D:$,texImage3D:Rt,updateUBOMapping:G,uniformBlockBinding:J,texStorage2D:C,texStorage3D:ut,texSubImage2D:ct,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:bt,viewport:wt,reset:ft}}function BR(e,t,n,i,s,a,r){let o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,d=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,v,m=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,b){return u?new OffscreenCanvas(w,b):Ju("canvas")}function g(w,b,I,lt){let st=1;if((w.width>lt||w.height>lt)&&(st=lt/Math.max(w.width,w.height)),st<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let ct=b?Zu:Math.floor,St=ct(st*w.width),ht=ct(st*w.height);v===void 0&&(v=y(St,ht));let gt=I?y(St,ht):v;return gt.width=St,gt.height=ht,gt.getContext("2d").drawImage(w,0,0,St,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+St+"x"+ht+")."),gt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return jp(w.width)&&jp(w.height)}function M(w){return o?!1:w.wrapS!==pi||w.wrapT!==pi||w.minFilter!==an&&w.minFilter!==ii}function R(w,b){return w.generateMipmaps&&b&&w.minFilter!==an&&w.minFilter!==ii}function E(w){e.generateMipmap(w)}function N(w,b,I,lt,st=!1){if(o===!1)return b;if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ct=b;if(b===e.RED&&(I===e.FLOAT&&(ct=e.R32F),I===e.HALF_FLOAT&&(ct=e.R16F),I===e.UNSIGNED_BYTE&&(ct=e.R8)),b===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(ct=e.R8UI),I===e.UNSIGNED_SHORT&&(ct=e.R16UI),I===e.UNSIGNED_INT&&(ct=e.R32UI),I===e.BYTE&&(ct=e.R8I),I===e.SHORT&&(ct=e.R16I),I===e.INT&&(ct=e.R32I)),b===e.RG&&(I===e.FLOAT&&(ct=e.RG32F),I===e.HALF_FLOAT&&(ct=e.RG16F),I===e.UNSIGNED_BYTE&&(ct=e.RG8)),b===e.RGBA){let St=st?Wu:fe.getTransfer(lt);I===e.FLOAT&&(ct=e.RGBA32F),I===e.HALF_FLOAT&&(ct=e.RGBA16F),I===e.UNSIGNED_BYTE&&(ct=St===xe?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(ct=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(ct=e.RGB5_A1)}return(ct===e.R16F||ct===e.R32F||ct===e.RG16F||ct===e.RG32F||ct===e.RGBA16F||ct===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function x(w,b,I){return R(w,I)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function A(w){return w===an||w===zv||w===dp?e.NEAREST:e.LINEAR}function V(w){let b=w.target;b.removeEventListener("dispose",V),tt(b),b.isVideoTexture&&_.delete(b)}function W(w){let b=w.target;b.removeEventListener("dispose",W),B(b)}function tt(w){let b=i.get(w);if(b.__webglInit===void 0)return;let I=w.source,lt=m.get(I);if(lt){let st=lt[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(w),Object.keys(lt).length===0&&m.delete(I)}i.remove(w)}function D(w){let b=i.get(w);e.deleteTexture(b.__webglTexture);let I=w.source,lt=m.get(I);delete lt[b.__cacheKey],r.memory.textures--}function B(w){let b=w.texture,I=i.get(w),lt=i.get(b);if(lt.__webglTexture!==void 0&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(I.__webglFramebuffer[st]))for(let ct=0;ct<I.__webglFramebuffer[st].length;ct++)e.deleteFramebuffer(I.__webglFramebuffer[st][ct]);else e.deleteFramebuffer(I.__webglFramebuffer[st]);I.__webglDepthbuffer&&e.deleteRenderbuffer(I.__webglDepthbuffer[st])}else{if(Array.isArray(I.__webglFramebuffer))for(let st=0;st<I.__webglFramebuffer.length;st++)e.deleteFramebuffer(I.__webglFramebuffer[st]);else e.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&e.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&e.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let st=0;st<I.__webglColorRenderbuffer.length;st++)I.__webglColorRenderbuffer[st]&&e.deleteRenderbuffer(I.__webglColorRenderbuffer[st]);I.__webglDepthRenderbuffer&&e.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let st=0,ct=b.length;st<ct;st++){let St=i.get(b[st]);St.__webglTexture&&(e.deleteTexture(St.__webglTexture),r.memory.textures--),i.remove(b[st])}i.remove(b),i.remove(w)}let Q=0;function Z(){Q=0}function et(){let w=Q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Q+=1,w}function j(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function at(w,b){let I=i.get(w);if(w.isVideoTexture&&Ue(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){let lt=w.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(I,w,b);return}}n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+b)}function ot(w,b){let I=i.get(w);if(w.version>0&&I.__version!==w.version){Ut(I,w,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+b)}function yt(w,b){let I=i.get(w);if(w.version>0&&I.__version!==w.version){Ut(I,w,b);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+b)}function X(w,b){let I=i.get(w);if(w.version>0&&I.__version!==w.version){Ct(I,w,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+b)}let nt={[Zp]:e.REPEAT,[pi]:e.CLAMP_TO_EDGE,[Jp]:e.MIRRORED_REPEAT},mt={[an]:e.NEAREST,[zv]:e.NEAREST_MIPMAP_NEAREST,[dp]:e.NEAREST_MIPMAP_LINEAR,[ii]:e.LINEAR,[vE]:e.LINEAR_MIPMAP_NEAREST,[Al]:e.LINEAR_MIPMAP_LINEAR},Mt={[UE]:e.NEVER,[IE]:e.ALWAYS,[DE]:e.LESS,[yS]:e.LEQUAL,[NE]:e.EQUAL,[zE]:e.GEQUAL,[OE]:e.GREATER,[PE]:e.NOTEQUAL};function Et(w,b,I){if(I?(e.texParameteri(w,e.TEXTURE_WRAP_S,nt[b.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,nt[b.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,nt[b.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,mt[b.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,mt[b.minFilter])):(e.texParameteri(w,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(w,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(b.wrapS!==pi||b.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(w,e.TEXTURE_MAG_FILTER,A(b.magFilter)),e.texParameteri(w,e.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==an&&b.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===an||b.minFilter!==dp&&b.minFilter!==Al||b.type===Ri&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===wl&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(e.texParameterf(w,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Pt(w,b){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",V));let lt=b.source,st=m.get(lt);st===void 0&&(st={},m.set(lt,st));let ct=j(b);if(ct!==w.__cacheKey){st[ct]===void 0&&(st[ct]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),st[ct].usedTimes++;let St=st[w.__cacheKey];St!==void 0&&(st[w.__cacheKey].usedTimes--,St.usedTimes===0&&D(b)),w.__cacheKey=ct,w.__webglTexture=st[ct].texture}return I}function Ut(w,b,I){let lt=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=e.TEXTURE_3D);let st=Pt(w,b),ct=b.source;n.bindTexture(lt,w.__webglTexture,e.TEXTURE0+I);let St=i.get(ct);if(ct.version!==St.__version||st===!0){n.activeTexture(e.TEXTURE0+I);let ht=fe.getPrimaries(fe.workingColorSpace),gt=b.colorSpace===si?null:fe.getPrimaries(b.colorSpace),C=b.colorSpace===si||ht===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let ut=M(b)&&S(b.image)===!1,$=g(b.image,ut,!1,h);$=me(b,$);let Rt=S($)||o,bt=a.convert(b.format,b.colorSpace),wt=a.convert(b.type),G=N(b.internalFormat,bt,wt,b.colorSpace,b.isVideoTexture);Et(lt,b,Rt);let J,ft=b.mipmaps,L=o&&b.isVideoTexture!==!0&&G!==pS,it=St.__version===void 0||st===!0,Y=x(b,$,Rt);if(b.isDepthTexture)G=e.DEPTH_COMPONENT,o?b.type===Ri?G=e.DEPTH_COMPONENT32F:b.type===Zs?G=e.DEPTH_COMPONENT24:b.type===Ua?G=e.DEPTH24_STENCIL8:G=e.DEPTH_COMPONENT16:b.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Da&&G===e.DEPTH_COMPONENT&&b.type!==Cm&&b.type!==Zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Zs,wt=a.convert(b.type)),b.format===no&&G===e.DEPTH_COMPONENT&&(G=e.DEPTH_STENCIL,b.type!==Ua&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ua,wt=a.convert(b.type))),it&&(L?n.texStorage2D(e.TEXTURE_2D,1,G,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,G,$.width,$.height,0,bt,wt,null));else if(b.isDataTexture)if(ft.length>0&&Rt){L&&it&&n.texStorage2D(e.TEXTURE_2D,Y,G,ft[0].width,ft[0].height);for(let P=0,q=ft.length;P<q;P++)J=ft[P],L?n.texSubImage2D(e.TEXTURE_2D,P,0,0,J.width,J.height,bt,wt,J.data):n.texImage2D(e.TEXTURE_2D,P,G,J.width,J.height,0,bt,wt,J.data);b.generateMipmaps=!1}else L?(it&&n.texStorage2D(e.TEXTURE_2D,Y,G,$.width,$.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,$.width,$.height,bt,wt,$.data)):n.texImage2D(e.TEXTURE_2D,0,G,$.width,$.height,0,bt,wt,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Y,G,ft[0].width,ft[0].height,$.depth);for(let P=0,q=ft.length;P<q;P++)J=ft[P],b.format!==kn?bt!==null?L?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,J.width,J.height,$.depth,bt,J.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,P,G,J.width,J.height,$.depth,0,J.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?n.texSubImage3D(e.TEXTURE_2D_ARRAY,P,0,0,0,J.width,J.height,$.depth,bt,wt,J.data):n.texImage3D(e.TEXTURE_2D_ARRAY,P,G,J.width,J.height,$.depth,0,bt,wt,J.data)}else{L&&it&&n.texStorage2D(e.TEXTURE_2D,Y,G,ft[0].width,ft[0].height);for(let P=0,q=ft.length;P<q;P++)J=ft[P],b.format!==kn?bt!==null?L?n.compressedTexSubImage2D(e.TEXTURE_2D,P,0,0,J.width,J.height,bt,J.data):n.compressedTexImage2D(e.TEXTURE_2D,P,G,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?n.texSubImage2D(e.TEXTURE_2D,P,0,0,J.width,J.height,bt,wt,J.data):n.texImage2D(e.TEXTURE_2D,P,G,J.width,J.height,0,bt,wt,J.data)}else if(b.isDataArrayTexture)L?(it&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Y,G,$.width,$.height,$.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,bt,wt,$.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,G,$.width,$.height,$.depth,0,bt,wt,$.data);else if(b.isData3DTexture)L?(it&&n.texStorage3D(e.TEXTURE_3D,Y,G,$.width,$.height,$.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,bt,wt,$.data)):n.texImage3D(e.TEXTURE_3D,0,G,$.width,$.height,$.depth,0,bt,wt,$.data);else if(b.isFramebufferTexture){if(it)if(L)n.texStorage2D(e.TEXTURE_2D,Y,G,$.width,$.height);else{let P=$.width,q=$.height;for(let rt=0;rt<Y;rt++)n.texImage2D(e.TEXTURE_2D,rt,G,P,q,0,bt,wt,null),P>>=1,q>>=1}}else if(ft.length>0&&Rt){L&&it&&n.texStorage2D(e.TEXTURE_2D,Y,G,ft[0].width,ft[0].height);for(let P=0,q=ft.length;P<q;P++)J=ft[P],L?n.texSubImage2D(e.TEXTURE_2D,P,0,0,bt,wt,J):n.texImage2D(e.TEXTURE_2D,P,G,bt,wt,J);b.generateMipmaps=!1}else L?(it&&n.texStorage2D(e.TEXTURE_2D,Y,G,$.width,$.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,bt,wt,$)):n.texImage2D(e.TEXTURE_2D,0,G,bt,wt,$);R(b,Rt)&&E(lt),St.__version=ct.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ct(w,b,I){if(b.image.length!==6)return;let lt=Pt(w,b),st=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+I);let ct=i.get(st);if(st.version!==ct.__version||lt===!0){n.activeTexture(e.TEXTURE0+I);let St=fe.getPrimaries(fe.workingColorSpace),ht=b.colorSpace===si?null:fe.getPrimaries(b.colorSpace),gt=b.colorSpace===si||St===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let C=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,$=[];for(let P=0;P<6;P++)!C&&!ut?$[P]=g(b.image[P],!1,!0,c):$[P]=ut?b.image[P].image:b.image[P],$[P]=me(b,$[P]);let Rt=$[0],bt=S(Rt)||o,wt=a.convert(b.format,b.colorSpace),G=a.convert(b.type),J=N(b.internalFormat,wt,G,b.colorSpace),ft=o&&b.isVideoTexture!==!0,L=ct.__version===void 0||lt===!0,it=x(b,Rt,bt);Et(e.TEXTURE_CUBE_MAP,b,bt);let Y;if(C){ft&&L&&n.texStorage2D(e.TEXTURE_CUBE_MAP,it,J,Rt.width,Rt.height);for(let P=0;P<6;P++){Y=$[P].mipmaps;for(let q=0;q<Y.length;q++){let rt=Y[q];b.format!==kn?wt!==null?ft?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q,0,0,rt.width,rt.height,wt,rt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q,J,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q,0,0,rt.width,rt.height,wt,G,rt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q,J,rt.width,rt.height,0,wt,G,rt.data)}}}else{Y=b.mipmaps,ft&&L&&(Y.length>0&&it++,n.texStorage2D(e.TEXTURE_CUBE_MAP,it,J,$[0].width,$[0].height));for(let P=0;P<6;P++)if(ut){ft?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,$[P].width,$[P].height,wt,G,$[P].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,J,$[P].width,$[P].height,0,wt,G,$[P].data);for(let q=0;q<Y.length;q++){let pt=Y[q].image[P].image;ft?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q+1,0,0,pt.width,pt.height,wt,G,pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q+1,J,pt.width,pt.height,0,wt,G,pt.data)}}else{ft?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,wt,G,$[P]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,J,wt,G,$[P]);for(let q=0;q<Y.length;q++){let rt=Y[q];ft?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q+1,0,0,wt,G,rt.image[P]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+P,q+1,J,wt,G,rt.image[P])}}}R(b,bt)&&E(e.TEXTURE_CUBE_MAP),ct.__version=st.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function zt(w,b,I,lt,st,ct){let St=a.convert(I.format,I.colorSpace),ht=a.convert(I.type),gt=N(I.internalFormat,St,ht,I.colorSpace);if(!i.get(b).__hasExternalTextures){let ut=Math.max(1,b.width>>ct),$=Math.max(1,b.height>>ct);st===e.TEXTURE_3D||st===e.TEXTURE_2D_ARRAY?n.texImage3D(st,ct,gt,ut,$,b.depth,0,St,ht,null):n.texImage2D(st,ct,gt,ut,$,0,St,ht,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),Jt(b)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,st,i.get(I).__webglTexture,0,Ot(b)):(st===e.TEXTURE_2D||st>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,lt,st,i.get(I).__webglTexture,ct),n.bindFramebuffer(e.FRAMEBUFFER,null)}function z(w,b,I){if(e.bindRenderbuffer(e.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let lt=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(I||Jt(b)){let st=b.depthTexture;st&&st.isDepthTexture&&(st.type===Ri?lt=e.DEPTH_COMPONENT32F:st.type===Zs&&(lt=e.DEPTH_COMPONENT24));let ct=Ot(b);Jt(b)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct,lt,b.width,b.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,ct,lt,b.width,b.height)}else e.renderbufferStorage(e.RENDERBUFFER,lt,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let lt=Ot(b);I&&Jt(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,e.DEPTH24_STENCIL8,b.width,b.height):Jt(b)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt,e.DEPTH24_STENCIL8,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,w)}else{let lt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let st=0;st<lt.length;st++){let ct=lt[st],St=a.convert(ct.format,ct.colorSpace),ht=a.convert(ct.type),gt=N(ct.internalFormat,St,ht,ct.colorSpace),C=Ot(b);I&&Jt(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,C,gt,b.width,b.height):Jt(b)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,C,gt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,gt,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);let lt=i.get(b.depthTexture).__webglTexture,st=Ot(b);if(b.depthTexture.format===Da)Jt(b)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,lt,0,st):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,lt,0);else if(b.depthTexture.format===no)Jt(b)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,lt,0,st):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function _t(w){let b=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,w)}else if(I){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]=e.createRenderbuffer(),z(b.__webglDepthbuffer[lt],w,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=e.createRenderbuffer(),z(b.__webglDepthbuffer,w,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(w,b,I){let lt=i.get(w);b!==void 0&&zt(lt.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&_t(w)}function Tt(w){let b=w.texture,I=i.get(w),lt=i.get(b);w.addEventListener("dispose",W),w.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture()),lt.__version=b.version,r.memory.textures++);let st=w.isWebGLCubeRenderTarget===!0,ct=w.isWebGLMultipleRenderTargets===!0,St=S(w)||o;if(st){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let gt=0;gt<b.mipmaps.length;gt++)I.__webglFramebuffer[ht][gt]=e.createFramebuffer()}else I.__webglFramebuffer[ht]=e.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)I.__webglFramebuffer[ht]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(ct)if(s.drawBuffers){let ht=w.texture;for(let gt=0,C=ht.length;gt<C;gt++){let ut=i.get(ht[gt]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Jt(w)===!1){let ht=ct?b:[b];I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){let C=ht[gt];I.__webglColorRenderbuffer[gt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[gt]);let ut=a.convert(C.format,C.colorSpace),$=a.convert(C.type),Rt=N(C.internalFormat,ut,$,C.colorSpace,w.isXRRenderTarget===!0),bt=Ot(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,Rt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.RENDERBUFFER,I.__webglColorRenderbuffer[gt])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),z(I.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(st){n.bindTexture(e.TEXTURE_CUBE_MAP,lt.__webglTexture),Et(e.TEXTURE_CUBE_MAP,b,St);for(let ht=0;ht<6;ht++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)zt(I.__webglFramebuffer[ht][gt],w,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else zt(I.__webglFramebuffer[ht],w,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);R(b,St)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ct){let ht=w.texture;for(let gt=0,C=ht.length;gt<C;gt++){let ut=ht[gt],$=i.get(ut);n.bindTexture(e.TEXTURE_2D,$.__webglTexture),Et(e.TEXTURE_2D,ut,St),zt(I.__webglFramebuffer,w,ut,e.COLOR_ATTACHMENT0+gt,e.TEXTURE_2D,0),R(ut,St)&&E(e.TEXTURE_2D)}n.unbindTexture()}else{let ht=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ht=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ht,lt.__webglTexture),Et(ht,b,St),o&&b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)zt(I.__webglFramebuffer[gt],w,b,e.COLOR_ATTACHMENT0,ht,gt);else zt(I.__webglFramebuffer,w,b,e.COLOR_ATTACHMENT0,ht,0);R(b,St)&&E(ht),n.unbindTexture()}w.depthBuffer&&_t(w)}function ce(w){let b=S(w)||o,I=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let lt=0,st=I.length;lt<st;lt++){let ct=I[lt];if(R(ct,b)){let St=w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ht=i.get(ct).__webglTexture;n.bindTexture(St,ht),E(St),n.unbindTexture()}}}function Ft(w){if(o&&w.samples>0&&Jt(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],I=w.width,lt=w.height,st=e.COLOR_BUFFER_BIT,ct=[],St=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(w),gt=w.isWebGLMultipleRenderTargets===!0;if(gt)for(let C=0;C<b.length;C++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let C=0;C<b.length;C++){ct.push(e.COLOR_ATTACHMENT0+C),w.depthBuffer&&ct.push(St);let ut=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(ut===!1&&(w.depthBuffer&&(st|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&(st|=e.STENCIL_BUFFER_BIT)),gt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[C]),ut===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[St]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[St])),gt){let $=i.get(b[C]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$,0)}e.blitFramebuffer(0,0,I,lt,0,0,I,lt,st,e.NEAREST),p&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ct)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),gt)for(let C=0;C<b.length;C++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,ht.__webglColorRenderbuffer[C]);let ut=i.get(b[C]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.TEXTURE_2D,ut,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Ot(w){return Math.min(d,w.samples)}function Jt(w){let b=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(w){let b=r.render.frame;_.get(w)!==b&&(_.set(w,b),w.update())}function me(w,b){let I=w.colorSpace,lt=w.format,st=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Kp||I!==cs&&I!==si&&(fe.getTransfer(I)===xe?o===!1?t.has("EXT_sRGB")===!0&&lt===kn?(w.format=Kp,w.minFilter=ii,w.generateMipmaps=!1):b=Ku.sRGBToLinear(b):(lt!==kn||st!==js)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),b}this.allocateTextureUnit=et,this.resetTextureUnits=Z,this.setTexture2D=at,this.setTexture2DArray=ot,this.setTexture3D=yt,this.setTextureCube=X,this.rebindTextures=Bt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=Jt}function FR(e,t,n){let i=n.isWebGL2;function s(a,r=si){let o,l=fe.getTransfer(r);if(a===js)return e.UNSIGNED_BYTE;if(a===cS)return e.UNSIGNED_SHORT_4_4_4_4;if(a===uS)return e.UNSIGNED_SHORT_5_5_5_1;if(a===xE)return e.BYTE;if(a===SE)return e.SHORT;if(a===Cm)return e.UNSIGNED_SHORT;if(a===lS)return e.INT;if(a===Zs)return e.UNSIGNED_INT;if(a===Ri)return e.FLOAT;if(a===wl)return i?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===bE)return e.ALPHA;if(a===kn)return e.RGBA;if(a===ME)return e.LUMINANCE;if(a===EE)return e.LUMINANCE_ALPHA;if(a===Da)return e.DEPTH_COMPONENT;if(a===no)return e.DEPTH_STENCIL;if(a===Kp)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===TE)return e.RED;if(a===hS)return e.RED_INTEGER;if(a===AE)return e.RG;if(a===fS)return e.RG_INTEGER;if(a===dS)return e.RGBA_INTEGER;if(a===pp||a===mp||a===gp||a===yp)if(l===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===pp)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===mp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===gp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===yp)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===pp)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===mp)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===gp)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===yp)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Iv||a===Bv||a===Fv||a===Hv)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Iv)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bv)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fv)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hv)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===pS)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Vv||a===Gv)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Vv)return l===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Gv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===kv||a===Wv||a===Xv||a===qv||a===Yv||a===Zv||a===Jv||a===Kv||a===jv||a===Qv||a===$v||a===tx||a===ex||a===nx)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===kv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Wv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Yv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Zv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Jv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Kv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===jv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qv)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===$v)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===tx)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ex)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===nx)return l===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_p||a===ix||a===sx)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===_p)return l===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ix)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===sx)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===wE||a===ax||a===rx||a===ox)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===_p)return o.COMPRESSED_RED_RGTC1_EXT;if(a===ax)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===rx)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ox)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ua?i?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[a]!==void 0?e[a]:null}return{convert:s}}var hm=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kr=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},HR={type:"move"},Tl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let v of t.hand.values()){let m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},fm=class extends Ci{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,v=n.getContextAttributes(),m=null,u=null,y=[],g=[],S=new Lt,M=null,R=new hn;R.layers.enable(1),R.viewport=new Ae;let E=new hn;E.layers.enable(2),E.viewport=new Ae;let N=[R,E],x=new hm;x.layers.enable(1),x.layers.enable(2);let A=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=y[X];return nt===void 0&&(nt=new Tl,y[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=y[X];return nt===void 0&&(nt=new Tl,y[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=y[X];return nt===void 0&&(nt=new Tl,y[X]=nt),nt.getHandSpace()};function W(X){let nt=g.indexOf(X.inputSource);if(nt===-1)return;let mt=y[nt];mt!==void 0&&(mt.update(X.inputSource,X.frame,c||r),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function tt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){let nt=g[X];nt!==null&&(g[X]=null,y[X].disconnect(nt))}A=null,V=null,t.setRenderTarget(m),p=null,f=null,d=null,s=null,u=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await n.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let nt={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new us(p.framebufferWidth,p.framebufferHeight,{format:kn,type:js,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let nt=null,mt=null,Mt=null;v.depth&&(Mt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=v.stencil?no:Da,mt=v.stencil?Ua:Zs);let Et={colorFormat:n.RGBA8,depthFormat:Mt,scaleFactor:a};d=new XRWebGLBinding(s,n),f=d.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new us(f.textureWidth,f.textureHeight,{format:kn,type:js,depthTexture:new ah(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Pt=t.properties.get(u);Pt.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(X){for(let nt=0;nt<X.removed.length;nt++){let mt=X.removed[nt],Mt=g.indexOf(mt);Mt>=0&&(g[Mt]=null,y[Mt].disconnect(mt))}for(let nt=0;nt<X.added.length;nt++){let mt=X.added[nt],Mt=g.indexOf(mt);if(Mt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=g.length){g.push(mt),Mt=Pt;break}else if(g[Pt]===null){g[Pt]=mt,Mt=Pt;break}if(Mt===-1)break}let Et=y[Mt];Et&&Et.connect(mt)}}let B=new U,Q=new U;function Z(X,nt,mt){B.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let Mt=B.distanceTo(Q),Et=nt.projectionMatrix.elements,Pt=mt.projectionMatrix.elements,Ut=Et[14]/(Et[10]-1),Ct=Et[14]/(Et[10]+1),zt=(Et[9]+1)/Et[5],z=(Et[9]-1)/Et[5],Se=(Et[8]-1)/Et[0],_t=(Pt[8]+1)/Pt[0],Bt=Ut*Se,Tt=Ut*_t,ce=Mt/(-Se+_t),Ft=ce*-Se;nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ft),X.translateZ(ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let Ot=Ut+ce,Jt=Ct+ce,Ue=Bt-Ft,me=Tt+(Mt-Ft),w=zt*Ct/Jt*Ot,b=z*Ct/Jt*Ot;X.projectionMatrix.makePerspective(Ue,me,w,b,Ot,Jt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function et(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;x.near=E.near=R.near=X.near,x.far=E.far=R.far=X.far,(A!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,V=x.far);let nt=X.parent,mt=x.cameras;et(x,nt);for(let Mt=0;Mt<mt.length;Mt++)et(mt[Mt],nt);mt.length===2?Z(x,R,E):x.projectionMatrix.copy(R.projectionMatrix),j(X,x,nt)};function j(X,nt,mt){mt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Rl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let at=null;function ot(X,nt){if(h=nt.getViewerPose(c||r),_=nt,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(u,p.framebuffer),t.setRenderTarget(u));let Mt=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,Mt=!0);for(let Et=0;Et<mt.length;Et++){let Pt=mt[Et],Ut=null;if(p!==null)Ut=p.getViewport(Pt);else{let zt=d.getViewSubImage(f,Pt);Ut=zt.viewport,Et===0&&(t.setRenderTargetTextures(u,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(u))}let Ct=N[Et];Ct===void 0&&(Ct=new hn,Ct.layers.enable(Et),Ct.viewport=new Ae,N[Et]=Ct),Ct.matrix.fromArray(Pt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Pt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Et===0&&(x.matrix.copy(Ct.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Mt===!0&&x.cameras.push(Ct)}}for(let mt=0;mt<y.length;mt++){let Mt=g[mt],Et=y[mt];Mt!==null&&Et!==void 0&&Et.update(Mt,nt,c||r)}at&&at(X,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}let yt=new SS;yt.setAnimationLoop(ot),this.setAnimationLoop=function(X){at=X},this.dispose=function(){}}};function VR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,xS(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),v(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===fn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===fn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y=t.get(u).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;let g=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),t.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GR(e,t,n,i){let s={},a={},r=[],o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){let S=g.program;i.uniformBlockBinding(y,S)}function c(y,g){let S=s[y.id];S===void 0&&(_(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",m));let M=g.program;i.updateUBOMapping(y,M);let R=t.render.frame;a[y.id]!==R&&(f(y),a[y.id]=R)}function h(y){let g=d();y.__bindingPointIndex=g;let S=e.createBuffer(),M=y.__size,R=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,M,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,S),S}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let g=s[y.id],S=y.uniforms,M=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let R=0,E=S.length;R<E;R++){let N=S[R];if(p(N,R,M)===!0){let x=N.__offset,A=Array.isArray(N.value)?N.value:[N.value],V=0;for(let W=0;W<A.length;W++){let tt=A[W],D=v(tt);typeof tt=="number"?(N.__data[0]=tt,e.bufferSubData(e.UNIFORM_BUFFER,x+V,N.__data)):tt.isMatrix3?(N.__data[0]=tt.elements[0],N.__data[1]=tt.elements[1],N.__data[2]=tt.elements[2],N.__data[3]=tt.elements[0],N.__data[4]=tt.elements[3],N.__data[5]=tt.elements[4],N.__data[6]=tt.elements[5],N.__data[7]=tt.elements[0],N.__data[8]=tt.elements[6],N.__data[9]=tt.elements[7],N.__data[10]=tt.elements[8],N.__data[11]=tt.elements[0]):(tt.toArray(N.__data,V),V+=D.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,x,N.__data)}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,g,S){let M=y.value;if(S[g]===void 0){if(typeof M=="number")S[g]=M;else{let R=Array.isArray(M)?M:[M],E=[];for(let N=0;N<R.length;N++)E.push(R[N].clone());S[g]=E}return!0}else if(typeof M=="number"){if(S[g]!==M)return S[g]=M,!0}else{let R=Array.isArray(S[g])?S[g]:[S[g]],E=Array.isArray(M)?M:[M];for(let N=0;N<R.length;N++){let x=R[N];if(x.equals(E[N])===!1)return x.copy(E[N]),!0}}return!1}function _(y){let g=y.uniforms,S=0,M=16,R=0;for(let E=0,N=g.length;E<N;E++){let x=g[E],A={boundary:0,storage:0},V=Array.isArray(x.value)?x.value:[x.value];for(let W=0,tt=V.length;W<tt;W++){let D=V[W],B=v(D);A.boundary+=B.boundary,A.storage+=B.storage}if(x.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,E>0){R=S%M;let W=M-R;R!==0&&W-A.boundary<0&&(S+=M-R,x.__offset=S)}S+=A.storage}return R=S%M,R>0&&(S+=M-R),y.__size=S,y.__cache={},this}function v(y){let g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){let g=y.target;g.removeEventListener("dispose",m);let S=r.indexOf(g.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(s[g.id]),delete s[g.id],delete a[g.id]}function u(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Ul=class{constructor(t={}){let{canvas:n=QE(),context:i=null,depth:s=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;let p=new Uint32Array(4),_=new Int32Array(4),v=null,m=null,u=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=Ks,this.toneMappingExposure=1;let g=this,S=!1,M=0,R=0,E=null,N=-1,x=null,A=new Ae,V=new Ae,W=null,tt=new ee(0),D=0,B=n.width,Q=n.height,Z=1,et=null,j=null,at=new Ae(0,0,B,Q),ot=new Ae(0,0,B,Q),yt=!1,X=new Ll,nt=!1,mt=!1,Mt=null,Et=new He,Pt=new Lt,Ut=new U,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return E===null?Z:1}let z=i;function Se(T,O){for(let H=0;H<T.length;H++){let k=T[H],F=n.getContext(k,O);if(F!==null)return F}return null}try{let T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r159"),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",it,!1),z===null){let O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),z=Se(O,T),z===null)throw Se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let _t,Bt,Tt,ce,Ft,Ot,Jt,Ue,me,w,b,I,lt,st,ct,St,ht,gt,C,ut,$,Rt,bt,wt;function G(){_t=new l2(z),Bt=new n2(z,_t,t),_t.init(Bt),Rt=new FR(z,_t,Bt),Tt=new IR(z,_t,Bt),ce=new h2(z),Ft=new TR,Ot=new BR(z,_t,Tt,Ft,Bt,Rt,ce),Jt=new s2(g),Ue=new o2(g),me=new vT(z,Bt),bt=new t2(z,_t,me,Bt),w=new c2(z,me,ce,bt),b=new m2(z,w,me,ce),C=new p2(z,Bt,Ot),St=new i2(Ft),I=new ER(g,Jt,Ue,_t,Bt,bt,St),lt=new VR(g,Ft),st=new wR,ct=new NR(_t,Bt),gt=new $w(g,Jt,Ue,Tt,b,f,l),ht=new zR(g,b,Bt),wt=new GR(z,ce,Bt,Tt),ut=new e2(z,_t,ce,Bt),$=new u2(z,_t,ce,Bt),ce.programs=I.programs,g.capabilities=Bt,g.extensions=_t,g.properties=Ft,g.renderLists=st,g.shadowMap=ht,g.state=Tt,g.info=ce}G();let J=new fm(g,z);this.xr=J,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(B,Q,!1))},this.getSize=function(T){return T.set(B,Q)},this.setSize=function(T,O,H=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,Q=O,n.width=Math.floor(T*Z),n.height=Math.floor(O*Z),H===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(B*Z,Q*Z).floor()},this.setDrawingBufferSize=function(T,O,H){B=T,Q=O,Z=H,n.width=Math.floor(T*H),n.height=Math.floor(O*H),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,O,H,k){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,O,H,k),Tt.viewport(A.copy(at).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,O,H,k){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,O,H,k),Tt.scissor(V.copy(ot).multiplyScalar(Z).floor())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){Tt.setScissorTest(yt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(T=!0,O=!0,H=!0){let k=0;if(T){let F=!1;if(E!==null){let vt=E.texture.format;F=vt===dS||vt===fS||vt===hS}if(F){let vt=E.texture.type,At=vt===js||vt===Zs||vt===Cm||vt===Ua||vt===cS||vt===uS,Dt=gt.getClearColor(),It=gt.getClearAlpha(),qt=Dt.r,Gt=Dt.g,Wt=Dt.b;At?(p[0]=qt,p[1]=Gt,p[2]=Wt,p[3]=It,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=qt,_[1]=Gt,_[2]=Wt,_[3]=It,z.clearBufferiv(z.COLOR,0,_))}else k|=z.COLOR_BUFFER_BIT}O&&(k|=z.DEPTH_BUFFER_BIT),H&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",it,!1),st.dispose(),ct.dispose(),Ft.dispose(),Jt.dispose(),Ue.dispose(),b.dispose(),bt.dispose(),wt.dispose(),I.dispose(),J.dispose(),J.removeEventListener("sessionstart",ne),J.removeEventListener("sessionend",Ht),Mt&&(Mt.dispose(),Mt=null),re.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let T=ce.autoReset,O=ht.enabled,H=ht.autoUpdate,k=ht.needsUpdate,F=ht.type;G(),ce.autoReset=T,ht.enabled=O,ht.autoUpdate=H,ht.needsUpdate=k,ht.type=F}function it(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Y(T){let O=T.target;O.removeEventListener("dispose",Y),P(O)}function P(T){q(T),Ft.remove(T)}function q(T){let O=Ft.get(T).programs;O!==void 0&&(O.forEach(function(H){I.releaseProgram(H)}),T.isShaderMaterial&&I.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,H,k,F,vt){O===null&&(O=Ct);let At=F.isMesh&&F.matrixWorld.determinant()<0,Dt=HS(T,O,H,k,F);Tt.setMaterial(k,At);let It=H.index,qt=1;if(k.wireframe===!0){if(It=w.getWireframeAttribute(H),It===void 0)return;qt=2}let Gt=H.drawRange,Wt=H.attributes.position,De=Gt.start*qt,Cn=(Gt.start+Gt.count)*qt;vt!==null&&(De=Math.max(De,vt.start*qt),Cn=Math.min(Cn,(vt.start+vt.count)*qt)),It!==null?(De=Math.max(De,0),Cn=Math.min(Cn,It.count)):Wt!=null&&(De=Math.max(De,0),Cn=Math.min(Cn,Wt.count));let Ze=Cn-De;if(Ze<0||Ze===1/0)return;bt.setup(F,k,Dt,H,It);let Pi,we=ut;if(It!==null&&(Pi=me.get(It),we=$,we.setIndex(Pi)),F.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*zt()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(F.isLine){let Yt=k.linewidth;Yt===void 0&&(Yt=1),Tt.setLineWidth(Yt*zt()),F.isLineSegments?we.setMode(z.LINES):F.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else F.isPoints?we.setMode(z.POINTS):F.isSprite&&we.setMode(z.TRIANGLES);if(F.isBatchedMesh)we.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)we.renderInstances(De,Ze,F.count);else if(H.isInstancedBufferGeometry){let Yt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mh=Math.min(H.instanceCount,Yt);we.renderInstances(De,Ze,Mh)}else we.render(De,Ze)};function rt(T,O,H){T.transparent===!0&&T.side===Gn&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Ni(T,O,H),T.side=Qs,T.needsUpdate=!0,Ni(T,O,H),T.side=Gn):Ni(T,O,H)}this.compile=function(T,O,H=null){H===null&&(H=T),m=ct.get(H),m.init(),y.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==H&&T.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(g._useLegacyLights);let k=new Set;return T.traverse(function(F){let vt=F.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){let Dt=vt[At];rt(Dt,H,F),k.add(Dt)}else rt(vt,H,F),k.add(vt)}),y.pop(),m=null,k},this.compileAsync=function(T,O,H=null){let k=this.compile(T,O,H);return new Promise(F=>{function vt(){if(k.forEach(function(At){Ft.get(At).currentProgram.isReady()&&k.delete(At)}),k.size===0){F(T);return}setTimeout(vt,10)}_t.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let pt=null;function Kt(T){pt&&pt(T)}function ne(){re.stop()}function Ht(){re.start()}let re=new SS;re.setAnimationLoop(Kt),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(T){pt=T,J.setAnimationLoop(T),T===null?re.stop():re.start()},J.addEventListener("sessionstart",ne),J.addEventListener("sessionend",Ht),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,E),m=ct.get(T,y.length),m.init(),y.push(m),Et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,nt=St.init(this.clippingPlanes,mt),v=st.get(T,u.length),v.init(),u.push(v),be(T,O,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(et,j),this.info.render.frame++,nt===!0&&St.beginShadows();let H=m.state.shadowsArray;if(ht.render(H,T,O),nt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),gt.render(v,T),m.setupLights(g._useLegacyLights),O.isArrayCamera){let k=O.cameras;for(let F=0,vt=k.length;F<vt;F++){let At=k[F];wn(v,T,At,At.viewport)}}else wn(v,T,O);E!==null&&(Ot.updateMultisampleRenderTarget(E),Ot.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(g,T,O),bt.resetDefaultState(),N=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function be(T,O,H,k){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){k&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);let At=b.update(T),Dt=T.material;Dt.visible&&v.push(T,At,Dt,H,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let At=b.update(T),Dt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ut.copy(At.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(Dt)){let It=At.groups;for(let qt=0,Gt=It.length;qt<Gt;qt++){let Wt=It[qt],De=Dt[Wt.materialIndex];De&&De.visible&&v.push(T,At,De,H,Ut.z,Wt)}}else Dt.visible&&v.push(T,At,Dt,H,Ut.z,null)}}let vt=T.children;for(let At=0,Dt=vt.length;At<Dt;At++)be(vt[At],O,H,k)}function wn(T,O,H,k){let F=T.opaque,vt=T.transmissive,At=T.transparent;m.setupLightsView(H),nt===!0&&St.setGlobalState(g.clippingPlanes,H),vt.length>0&&ta(F,vt,O,H),k&&Tt.viewport(A.copy(k)),F.length>0&&ri(F,O,H),vt.length>0&&ri(vt,O,H),At.length>0&&ri(At,O,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ta(T,O,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let vt=Bt.isWebGL2;Mt===null&&(Mt=new us(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?wl:js,minFilter:Al,samples:vt?4:0})),g.getDrawingBufferSize(Pt),vt?Mt.setSize(Pt.x,Pt.y):Mt.setSize(Zu(Pt.x),Zu(Pt.y));let At=g.getRenderTarget();g.setRenderTarget(Mt),g.getClearColor(tt),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();let Dt=g.toneMapping;g.toneMapping=Ks,ri(T,H,k),Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt);let It=!1;for(let qt=0,Gt=O.length;qt<Gt;qt++){let Wt=O[qt],De=Wt.object,Cn=Wt.geometry,Ze=Wt.material,Pi=Wt.group;if(Ze.side===Gn&&De.layers.test(k.layers)){let we=Ze.side;Ze.side=fn,Ze.needsUpdate=!0,Rn(De,H,k,Cn,Ze,Pi),Ze.side=we,Ze.needsUpdate=!0,It=!0}}It===!0&&(Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt)),g.setRenderTarget(At),g.setClearColor(tt,D),g.toneMapping=Dt}function ri(T,O,H){let k=O.isScene===!0?O.overrideMaterial:null;for(let F=0,vt=T.length;F<vt;F++){let At=T[F],Dt=At.object,It=At.geometry,qt=k===null?At.material:k,Gt=At.group;Dt.layers.test(H.layers)&&Rn(Dt,O,H,It,qt,Gt)}}function Rn(T,O,H,k,F,vt){T.onBeforeRender(g,O,H,k,F,vt),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(g,O,H,k,T,vt),F.transparent===!0&&F.side===Gn&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,g.renderBufferDirect(H,O,k,F,T,vt),F.side=Qs,F.needsUpdate=!0,g.renderBufferDirect(H,O,k,F,T,vt),F.side=Gn):g.renderBufferDirect(H,O,k,F,T,vt),T.onAfterRender(g,O,H,k,F,vt)}function Ni(T,O,H){O.isScene!==!0&&(O=Ct);let k=Ft.get(T),F=m.state.lights,vt=m.state.shadowsArray,At=F.state.version,Dt=I.getParameters(T,F.state,vt,O,H),It=I.getProgramCacheKey(Dt),qt=k.programs;k.environment=T.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(T.isMeshStandardMaterial?Ue:Jt).get(T.envMap||k.environment),qt===void 0&&(T.addEventListener("dispose",Y),qt=new Map,k.programs=qt);let Gt=qt.get(It);if(Gt!==void 0){if(k.currentProgram===Gt&&k.lightsStateVersion===At)return Ba(T,Dt),Gt}else Dt.uniforms=I.getUniforms(T),T.onBuild(H,Dt,g),T.onBeforeCompile(Dt,g),Gt=I.acquireProgram(Dt,It),qt.set(It,Gt),k.uniforms=Dt.uniforms;let Wt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Wt.clippingPlanes=St.uniform),Ba(T,Dt),k.needsLights=GS(T),k.lightsStateVersion=At,k.needsLights&&(Wt.ambientLightColor.value=F.state.ambient,Wt.lightProbe.value=F.state.probe,Wt.directionalLights.value=F.state.directional,Wt.directionalLightShadows.value=F.state.directionalShadow,Wt.spotLights.value=F.state.spot,Wt.spotLightShadows.value=F.state.spotShadow,Wt.rectAreaLights.value=F.state.rectArea,Wt.ltc_1.value=F.state.rectAreaLTC1,Wt.ltc_2.value=F.state.rectAreaLTC2,Wt.pointLights.value=F.state.point,Wt.pointLightShadows.value=F.state.pointShadow,Wt.hemisphereLights.value=F.state.hemi,Wt.directionalShadowMap.value=F.state.directionalShadowMap,Wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Wt.spotShadowMap.value=F.state.spotShadowMap,Wt.spotLightMatrix.value=F.state.spotLightMatrix,Wt.spotLightMap.value=F.state.spotLightMap,Wt.pointShadowMap.value=F.state.pointShadowMap,Wt.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Gt,k.uniformsList=null,Gt}function Oi(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=$r.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ba(T,O){let H=Ft.get(T);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function HS(T,O,H,k,F){O.isScene!==!0&&(O=Ct),Ot.resetTextureUnits();let vt=O.fog,At=k.isMeshStandardMaterial?O.environment:null,Dt=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:cs,It=(k.isMeshStandardMaterial?Ue:Jt).get(k.envMap||At),qt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Wt=!!H.morphAttributes.position,De=!!H.morphAttributes.normal,Cn=!!H.morphAttributes.color,Ze=Ks;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ze=g.toneMapping);let Pi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=Pi!==void 0?Pi.length:0,Yt=Ft.get(k),Mh=m.state.lights;if(nt===!0&&(mt===!0||T!==x)){let Wn=T===x&&k.id===N;St.setState(k,T,Wn)}let Re=!1;k.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Mh.state.version||Yt.outputColorSpace!==Dt||F.isBatchedMesh&&Yt.batching===!1||!F.isBatchedMesh&&Yt.batching===!0||F.isInstancedMesh&&Yt.instancing===!1||!F.isInstancedMesh&&Yt.instancing===!0||F.isSkinnedMesh&&Yt.skinning===!1||!F.isSkinnedMesh&&Yt.skinning===!0||F.isInstancedMesh&&Yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Yt.instancingColor===!1&&F.instanceColor!==null||Yt.envMap!==It||k.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==St.numPlanes||Yt.numIntersection!==St.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==Gt||Yt.morphTargets!==Wt||Yt.morphNormals!==De||Yt.morphColors!==Cn||Yt.toneMapping!==Ze||Bt.isWebGL2===!0&&Yt.morphTargetsCount!==we)&&(Re=!0):(Re=!0,Yt.__version=k.version);let ea=Yt.currentProgram;Re===!0&&(ea=Ni(k,O,F));let Im=!1,fo=!1,Eh=!1,rn=ea.getUniforms(),na=Yt.uniforms;if(Tt.useProgram(ea.program)&&(Im=!0,fo=!0,Eh=!0),k.id!==N&&(N=k.id,fo=!0),Im||x!==T){rn.setValue(z,"projectionMatrix",T.projectionMatrix),rn.setValue(z,"viewMatrix",T.matrixWorldInverse);let Wn=rn.map.cameraPosition;Wn!==void 0&&Wn.setValue(z,Ut.setFromMatrixPosition(T.matrixWorld)),Bt.logarithmicDepthBuffer&&rn.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rn.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,fo=!0,Eh=!0)}if(F.isSkinnedMesh){rn.setOptional(z,F,"bindMatrix"),rn.setOptional(z,F,"bindMatrixInverse");let Wn=F.skeleton;Wn&&(Bt.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),rn.setValue(z,"boneTexture",Wn.boneTexture,Ot)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(rn.setOptional(z,F,"batchingTexture"),rn.setValue(z,"batchingTexture",F._matricesTexture,Ot));let Th=H.morphAttributes;if((Th.position!==void 0||Th.normal!==void 0||Th.color!==void 0&&Bt.isWebGL2===!0)&&C.update(F,H,ea),(fo||Yt.receiveShadow!==F.receiveShadow)&&(Yt.receiveShadow=F.receiveShadow,rn.setValue(z,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(na.envMap.value=It,na.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),fo&&(rn.setValue(z,"toneMappingExposure",g.toneMappingExposure),Yt.needsLights&&VS(na,Eh),vt&&k.fog===!0&&lt.refreshFogUniforms(na,vt),lt.refreshMaterialUniforms(na,k,Z,Q,Mt),$r.upload(z,Oi(Yt),na,Ot)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($r.upload(z,Oi(Yt),na,Ot),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rn.setValue(z,"center",F.center),rn.setValue(z,"modelViewMatrix",F.modelViewMatrix),rn.setValue(z,"normalMatrix",F.normalMatrix),rn.setValue(z,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Wn=k.uniformsGroups;for(let Ah=0,kS=Wn.length;Ah<kS;Ah++)if(Bt.isWebGL2){let Bm=Wn[Ah];wt.update(Bm,ea),wt.bind(Bm,ea)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ea}function VS(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function GS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,O,H){Ft.get(T.texture).__webglTexture=O,Ft.get(T.depthTexture).__webglTexture=H;let k=Ft.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){let H=Ft.get(T);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,H=0){E=T,M=O,R=H;let k=!0,F=null,vt=!1,At=!1;if(T){let It=Ft.get(T);It.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(z.FRAMEBUFFER,null),k=!1):It.__webglFramebuffer===void 0?Ot.setupRenderTarget(T):It.__hasExternalTextures&&Ot.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);let qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Gt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?F=Gt[O][H]:F=Gt[O],vt=!0):Bt.isWebGL2&&T.samples>0&&Ot.useMultisampledRTT(T)===!1?F=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[H]:F=Gt,A.copy(T.viewport),V.copy(T.scissor),W=T.scissorTest}else A.copy(at).multiplyScalar(Z).floor(),V.copy(ot).multiplyScalar(Z).floor(),W=yt;if(Tt.bindFramebuffer(z.FRAMEBUFFER,F)&&Bt.drawBuffers&&k&&Tt.drawBuffers(T,F),Tt.viewport(A),Tt.scissor(V),Tt.setScissorTest(W),vt){let It=Ft.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,It.__webglTexture,H)}else if(At){let It=Ft.get(T.texture),qt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,H||0,qt)}N=-1},this.readRenderTargetPixels=function(T,O,H,k,F,vt,At){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){Tt.bindFramebuffer(z.FRAMEBUFFER,Dt);try{let It=T.texture,qt=It.format,Gt=It.type;if(qt!==kn&&Rt.convert(qt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Gt===wl&&(_t.has("EXT_color_buffer_half_float")||Bt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Gt!==js&&Rt.convert(Gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===Ri&&(Bt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-k&&H>=0&&H<=T.height-F&&z.readPixels(O,H,k,F,Rt.convert(qt),Rt.convert(Gt),vt)}finally{let It=E!==null?Ft.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(z.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(T,O,H=0){let k=Math.pow(2,-H),F=Math.floor(O.image.width*k),vt=Math.floor(O.image.height*k);Ot.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,T.x,T.y,F,vt),Tt.unbindTexture()},this.copyTextureToTexture=function(T,O,H,k=0){let F=O.image.width,vt=O.image.height,At=Rt.convert(H.format),Dt=Rt.convert(H.type);Ot.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,T.x,T.y,F,vt,At,Dt,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,At,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,k,T.x,T.y,At,Dt,O.image),k===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,H,k,F=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=T.max.x-T.min.x+1,At=T.max.y-T.min.y+1,Dt=T.max.z-T.min.z+1,It=Rt.convert(k.format),qt=Rt.convert(k.type),Gt;if(k.isData3DTexture)Ot.setTexture3D(k,0),Gt=z.TEXTURE_3D;else if(k.isDataArrayTexture)Ot.setTexture2DArray(k,0),Gt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Wt=z.getParameter(z.UNPACK_ROW_LENGTH),De=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Cn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ze=z.getParameter(z.UNPACK_SKIP_ROWS),Pi=z.getParameter(z.UNPACK_SKIP_IMAGES),we=H.isCompressedTexture?H.mipmaps[0]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,we.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,we.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(Gt,F,O.x,O.y,O.z,vt,At,Dt,It,qt,we.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Gt,F,O.x,O.y,O.z,vt,At,Dt,It,we.data)):z.texSubImage3D(Gt,F,O.x,O.y,O.z,vt,At,Dt,It,qt,we),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pi),F===0&&k.generateMipmaps&&z.generateMipmap(Gt),Tt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ot.setTextureCube(T,0):T.isData3DTexture?Ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ot.setTexture2DArray(T,0):Ot.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){M=0,R=0,E=null,Tt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===Lm?"display-p3":"srgb",n.unpackColorSpace=fe.workingColorSpace===mh?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?Na:mS}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Na?We:cs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},dm=class extends Ul{};dm.prototype.isWebGL1Renderer=!0;var ro=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var Dl=class extends ai{constructor(t=null,n=1,i=1,s,a,r,o,l,c=an,h=an,d,f){super(null,r,o,l,c,h,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nl=class extends $s{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qx=new He,pm=new Oa,Bu=new io,Fu=new U,rh=class extends dn{constructor(t=new pn,n=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bu.copy(i.boundingSphere),Bu.applyMatrix4(s),Bu.radius+=a,t.ray.intersectsSphere(Bu)===!1)return;Qx.copy(s).invert(),pm.copy(t.ray).applyMatrix4(Qx);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=f,v=p;_<v;_++){let m=c.getX(_);Fu.fromBufferAttribute(d,m),$x(Fu,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let _=f,v=p;_<v;_++)Fu.fromBufferAttribute(d,_),$x(Fu,_,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function $x(e,t,n,i,s,a,r){let o=pm.distanceSqToPoint(e);if(o<n){let l=new U;pm.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}var oh=class e extends pn{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let a=[],r=[],o=[],l=[],c=new U,h=new Lt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){let p=i+d/n*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},lh=class e extends pn{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let h=[],d=[],f=[],p=[],_=0,v=[],m=i/2,u=0;y(),r===!1&&(t>0&&g(!0),n>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(p,2));function y(){let S=new U,M=new U,R=0,E=(n-t)/i;for(let N=0;N<=a;N++){let x=[],A=N/a,V=A*(n-t)+t;for(let W=0;W<=s;W++){let tt=W/s,D=tt*l+o,B=Math.sin(D),Q=Math.cos(D);M.x=V*B,M.y=-A*i+m,M.z=V*Q,d.push(M.x,M.y,M.z),S.set(B,E,Q).normalize(),f.push(S.x,S.y,S.z),p.push(tt,1-A),x.push(_++)}v.push(x)}for(let N=0;N<s;N++)for(let x=0;x<a;x++){let A=v[x][N],V=v[x+1][N],W=v[x+1][N+1],tt=v[x][N+1];h.push(A,V,tt),h.push(V,W,tt),R+=6}c.addGroup(u,R,0),u+=R}function g(S){let M=_,R=new Lt,E=new U,N=0,x=S===!0?t:n,A=S===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),_++;let V=_;for(let W=0;W<=s;W++){let D=W/s*l+o,B=Math.cos(D),Q=Math.sin(D);E.x=x*Q,E.y=m*A,E.z=x*B,d.push(E.x,E.y,E.z),f.push(0,A,0),R.x=B*.5+.5,R.y=Q*.5*A+.5,p.push(R.x,R.y),_++}for(let W=0;W<s;W++){let tt=M+W,D=V+W;S===!0?h.push(D,D+1,tt):h.push(D+1,D,tt),N+=3}c.addGroup(u,N,S===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ol=class e extends pn{constructor(t=.5,n=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,f=(n-t)/s,p=new U,_=new Lt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let u=a+m/i*r;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,h.push(_.x,_.y)}d+=f}for(let v=0;v<s;v++){let m=v*(i+1);for(let u=0;u<i;u++){let y=u+m,g=y,S=y+i+1,M=y+i+2,R=y+1;o.push(g,S,R),o.push(S,M,R)}}this.setIndex(o),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ds=class extends $s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gS,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Hu(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function kR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var oo=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mm=class extends oo{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lx,endingEnd:lx}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case cx:a=t,o=2*n-i;break;case ux:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cx:r=t,l=2*i-n;break;case ux:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),v=_*_,m=v*_,u=-f*m+2*f*v-f*_,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,g=(-1-p)*m+(1.5+p)*v+.5*_,S=p*m-p*v;for(let M=0;M!==o;++M)a[M]=u*r[h+M]+y*r[c+M]+g*r[l+M]+S*r[d+M];return a}},gm=class extends oo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*h;return a}},ym=class extends oo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hu(n,this.TimeBufferType),this.values=Hu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Hu(t.times,Array),values:Hu(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ym(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Gu:n=this.InterpolantFactoryMethodDiscrete;break;case ku:n=this.InterpolantFactoryMethodLinear;break;case vp:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gu;case this.InterpolantFactoryMethodLinear:return ku;case this.InterpolantFactoryMethodSmooth:return vp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&kR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vp,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){let v=n[d+_];if(v!==n[f+_]||v!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=ku;var za=class extends yi{};za.prototype.ValueTypeName="bool";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=Gu;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;var _m=class extends yi{};_m.prototype.ValueTypeName="color";var vm=class extends yi{};vm.prototype.ValueTypeName="number";var xm=class extends oo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)mi.slerpFlat(a,0,r,c-o,r,c,l);return a}},Pl=class extends yi{InterpolantFactoryMethodLinear(t){return new xm(this.times,this.values,this.getValueSize(),t)}};Pl.prototype.ValueTypeName="quaternion";Pl.prototype.DefaultInterpolation=ku;Pl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends yi{};Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Gu;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Sm=class extends yi{};Sm.prototype.ValueTypeName="vector";var bm=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},WR=new bm,Mm=class{constructor(t){this.manager=t!==void 0?t:WR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mm.DEFAULT_MATERIAL_NAME="__DEFAULT";var zl=class extends dn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}},ch=class extends zl{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Gp=new He,tS=new U,eS=new U,uh=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;tS.setFromMatrixPosition(t.matrixWorld),n.position.copy(tS),eS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(eS),n.updateMatrixWorld(),Gp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nS=new He,xl=new U,kp=new U,Em=class extends uh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),xl.setFromMatrixPosition(t.matrixWorld),i.position.copy(xl),kp.copy(i.position),kp.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(kp),i.updateMatrixWorld(),s.makeTranslation(-xl.x,-xl.y,-xl.z),nS.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nS)}},hh=class extends zl{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Tm=class extends uh{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Il=class extends zl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fh=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iS(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=iS();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};function iS(){return(typeof performance>"u"?Date:performance).now()}var Nm="\\[\\]\\.:\\/",XR=new RegExp("["+Nm+"]","g"),Om="[^"+Nm+"]",qR="[^"+Nm.replace("\\.","")+"]",YR=/((?:WC+[\/:])*)/.source.replace("WC",Om),ZR=/(WCOD+)?/.source.replace("WCOD",qR),JR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Om),KR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Om),jR=new RegExp("^"+YR+ZR+JR+KR+"$"),QR=["material","materials","bones","map"],Am=class{constructor(t,n,i){let s=i||Te.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Te=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(XR,"")}static parseTrackName(t){let n=jR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);QR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Am;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dC=new Float32Array(1);var dh=class{constructor(t,n,i=0,s=1/0){this.ray=new Oa(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(t,n=!0,i=[]){return wm(t,this,i,n),i.sort(sS),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)wm(t[s],this,i,n);return i.sort(sS),i}};function sS(e,t){return e.distance-t.distance}function wm(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){let s=e.children;for(let a=0,r=s.length;a<r;a++)wm(s[a],t,n,!0)}}var Bl=class{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(un(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"159"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="159");var wS={type:"change"},Pm={type:"start"},RS={type:"end"},yh=new Oa,CS=new di,tC=Math.cos(70*_i.DEG2RAD),_h=class extends Ci{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",b),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(wS),i.update(),a=s.NONE},this.update=(function(){let C=new U,ut=new mi().setFromUnitVectors(t.up,new U(0,1,0)),$=ut.clone().invert(),Rt=new U,bt=new mi,wt=new U,G=2*Math.PI;return function(ft=null){let L=i.object.position;C.copy(L).sub(i.target),C.applyQuaternion(ut),o.setFromVector3(C),i.autoRotate&&a===s.NONE&&V(x(ft)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let it=i.minAzimuthAngle,Y=i.maxAzimuthAngle;isFinite(it)&&isFinite(Y)&&(it<-Math.PI?it+=G:it>Math.PI&&(it-=G),Y<-Math.PI?Y+=G:Y>Math.PI&&(Y-=G),it<=Y?o.theta=Math.max(it,Math.min(Y,o.theta)):o.theta=o.theta>(it+Y)/2?Math.max(it,o.theta):Math.min(Y,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*c),C.setFromSpherical(o),C.applyQuaternion($),L.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let P=!1;if(i.zoomToCursor&&R){let q=null;if(i.object.isPerspectiveCamera){let rt=C.length();q=j(rt*c);let pt=rt-q;i.object.position.addScaledVector(S,pt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let rt=new U(M.x,M.y,0);rt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),P=!0;let pt=new U(M.x,M.y,0);pt.unproject(i.object),i.object.position.sub(pt).add(rt),i.object.updateMatrixWorld(),q=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;q!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(q).add(i.object.position):(yh.origin.copy(i.object.position),yh.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(yh.direction))<tC?t.lookAt(i.target):(CS.setFromNormalAndCoplanarPoint(i.object.up,i.target),yh.intersectPlane(CS,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),P=!0);return c=1,R=!1,P||Rt.distanceToSquared(i.object.position)>r||8*(1-bt.dot(i.object.quaternion))>r||wt.distanceToSquared(i.target)>0?(i.dispatchEvent(wS),Rt.copy(i.object.position),bt.copy(i.object.quaternion),wt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",st),i.domElement.removeEventListener("pointerdown",Ft),i.domElement.removeEventListener("pointercancel",Jt),i.domElement.removeEventListener("wheel",w),i.domElement.removeEventListener("pointermove",Ot),i.domElement.removeEventListener("pointerup",Jt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",b),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=s.NONE,r=1e-6,o=new Bl,l=new Bl,c=1,h=new U,d=new Lt,f=new Lt,p=new Lt,_=new Lt,v=new Lt,m=new Lt,u=new Lt,y=new Lt,g=new Lt,S=new U,M=new Lt,R=!1,E=[],N={};function x(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function V(C){l.theta-=C}function W(C){l.phi-=C}let tt=(function(){let C=new U;return function($,Rt){C.setFromMatrixColumn(Rt,0),C.multiplyScalar(-$),h.add(C)}})(),D=(function(){let C=new U;return function($,Rt){i.screenSpacePanning===!0?C.setFromMatrixColumn(Rt,1):(C.setFromMatrixColumn(Rt,0),C.crossVectors(i.object.up,C)),C.multiplyScalar($),h.add(C)}})(),B=(function(){let C=new U;return function($,Rt){let bt=i.domElement;if(i.object.isPerspectiveCamera){let wt=i.object.position;C.copy(wt).sub(i.target);let G=C.length();G*=Math.tan(i.object.fov/2*Math.PI/180),tt(2*$*G/bt.clientHeight,i.object.matrix),D(2*Rt*G/bt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(tt($*(i.object.right-i.object.left)/i.object.zoom/bt.clientWidth,i.object.matrix),D(Rt*(i.object.top-i.object.bottom)/i.object.zoom/bt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Q(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function et(C){if(!i.zoomToCursor)return;R=!0;let ut=i.domElement.getBoundingClientRect(),$=C.clientX-ut.left,Rt=C.clientY-ut.top,bt=ut.width,wt=ut.height;M.x=$/bt*2-1,M.y=-(Rt/wt)*2+1,S.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function at(C){d.set(C.clientX,C.clientY)}function ot(C){et(C),u.set(C.clientX,C.clientY)}function yt(C){_.set(C.clientX,C.clientY)}function X(C){f.set(C.clientX,C.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let ut=i.domElement;V(2*Math.PI*p.x/ut.clientHeight),W(2*Math.PI*p.y/ut.clientHeight),d.copy(f),i.update()}function nt(C){y.set(C.clientX,C.clientY),g.subVectors(y,u),g.y>0?Q(A()):g.y<0&&Z(A()),u.copy(y),i.update()}function mt(C){v.set(C.clientX,C.clientY),m.subVectors(v,_).multiplyScalar(i.panSpeed),B(m.x,m.y),_.copy(v),i.update()}function Mt(C){et(C),C.deltaY<0?Z(A()):C.deltaY>0&&Q(A()),i.update()}function Et(C){let ut=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),ut=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),ut=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),ut=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),ut=!0;break}ut&&(C.preventDefault(),i.update())}function Pt(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{let C=.5*(E[0].pageX+E[1].pageX),ut=.5*(E[0].pageY+E[1].pageY);d.set(C,ut)}}function Ut(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{let C=.5*(E[0].pageX+E[1].pageX),ut=.5*(E[0].pageY+E[1].pageY);_.set(C,ut)}}function Ct(){let C=E[0].pageX-E[1].pageX,ut=E[0].pageY-E[1].pageY,$=Math.sqrt(C*C+ut*ut);u.set(0,$)}function zt(){i.enableZoom&&Ct(),i.enablePan&&Ut()}function z(){i.enableZoom&&Ct(),i.enableRotate&&Pt()}function Se(C){if(E.length==1)f.set(C.pageX,C.pageY);else{let $=gt(C),Rt=.5*(C.pageX+$.x),bt=.5*(C.pageY+$.y);f.set(Rt,bt)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let ut=i.domElement;V(2*Math.PI*p.x/ut.clientHeight),W(2*Math.PI*p.y/ut.clientHeight),d.copy(f)}function _t(C){if(E.length===1)v.set(C.pageX,C.pageY);else{let ut=gt(C),$=.5*(C.pageX+ut.x),Rt=.5*(C.pageY+ut.y);v.set($,Rt)}m.subVectors(v,_).multiplyScalar(i.panSpeed),B(m.x,m.y),_.copy(v)}function Bt(C){let ut=gt(C),$=C.pageX-ut.x,Rt=C.pageY-ut.y,bt=Math.sqrt($*$+Rt*Rt);y.set(0,bt),g.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),Q(g.y),u.copy(y)}function Tt(C){i.enableZoom&&Bt(C),i.enablePan&&_t(C)}function ce(C){i.enableZoom&&Bt(C),i.enableRotate&&Se(C)}function Ft(C){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ot),i.domElement.addEventListener("pointerup",Jt)),ct(C),C.pointerType==="touch"?I(C):Ue(C))}function Ot(C){i.enabled!==!1&&(C.pointerType==="touch"?lt(C):me(C))}function Jt(C){St(C),E.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ot),i.domElement.removeEventListener("pointerup",Jt)),i.dispatchEvent(RS),a=s.NONE}function Ue(C){let ut;switch(C.button){case 0:ut=i.mouseButtons.LEFT;break;case 1:ut=i.mouseButtons.MIDDLE;break;case 2:ut=i.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case Li.DOLLY:if(i.enableZoom===!1)return;ot(C),a=s.DOLLY;break;case Li.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;yt(C),a=s.PAN}else{if(i.enableRotate===!1)return;at(C),a=s.ROTATE}break;case Li.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;at(C),a=s.ROTATE}else{if(i.enablePan===!1)return;yt(C),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(Pm)}function me(C){switch(a){case s.ROTATE:if(i.enableRotate===!1)return;X(C);break;case s.DOLLY:if(i.enableZoom===!1)return;nt(C);break;case s.PAN:if(i.enablePan===!1)return;mt(C);break}}function w(C){i.enabled===!1||i.enableZoom===!1||a!==s.NONE||(C.preventDefault(),i.dispatchEvent(Pm),Mt(C),i.dispatchEvent(RS))}function b(C){i.enabled===!1||i.enablePan===!1||Et(C)}function I(C){switch(ht(C),E.length){case 1:switch(i.touches.ONE){case Ui.ROTATE:if(i.enableRotate===!1)return;Pt(),a=s.TOUCH_ROTATE;break;case Ui.PAN:if(i.enablePan===!1)return;Ut(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(i.touches.TWO){case Ui.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;zt(),a=s.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(Pm)}function lt(C){switch(ht(C),a){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(C),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;_t(C),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Tt(C),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(C),i.update();break;default:a=s.NONE}}function st(C){i.enabled!==!1&&C.preventDefault()}function ct(C){E.push(C)}function St(C){delete N[C.pointerId];for(let ut=0;ut<E.length;ut++)if(E[ut].pointerId==C.pointerId){E.splice(ut,1);return}}function ht(C){let ut=N[C.pointerId];ut===void 0&&(ut=new Lt,N[C.pointerId]=ut),ut.set(C.pageX,C.pageY)}function gt(C){let ut=C.pointerId===E[0].pointerId?E[1]:E[0];return N[ut.pointerId]}i.domElement.addEventListener("contextmenu",st),i.domElement.addEventListener("pointerdown",Ft),i.domElement.addEventListener("pointercancel",Jt),i.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}};var vh=class extends ro{constructor(t=null){super();let n=new Pa;n.deleteAttribute("uv");let i=new ds({side:fn}),s=new ds,a=5;t!==null&&t._useLegacyLights===!1&&(a=900);let r=new hh(16777215,a,28,2);r.position.set(.418,16.199,.3),this.add(r);let o=new ie(n,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new ie(n,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ie(n,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ie(n,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new ie(n,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new ie(n,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let p=new ie(n,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let _=new ie(n,uo(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);let v=new ie(n,uo(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let m=new ie(n,uo(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let u=new ie(n,uo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let y=new ie(n,uo(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let g=new ie(n,uo(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function uo(e){let t=new hs;return t.color.setScalar(e),t}function US(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),a={},r={},o=e[0].morphTargetsRelative,l=new pn,c=0;for(let h=0;h<e.length;++h){let d=e[h],f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(t){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let f=0;f<e.length;++f){let p=e[f].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+h);h+=e[f].attributes.position.count}l.setIndex(d)}for(let h in a){let d=LS(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in r){let d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let p=[];for(let v=0;v<r[h].length;++v)p.push(r[h][v][f]);let _=LS(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function LS(e){let t,n,i,s=-1,a=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=h.itemSize),n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.array.length}let r=new t(a),o=0;for(let c=0;c<e.length;++c)r.set(e[c].array,o),o+=e[c].array.length;let l=new Ve(r,n,i);return s!==void 0&&(l.gpuType=s),l}function DS(e,t=1){let n=e.map(f=>({id:f.id,system:f.system,width:Math.max(.035,f.bounds[1][0]-f.bounds[0][0])+.04,height:Math.max(.035,f.bounds[1][1]-f.bounds[0][1])+.04})),i=n.reduce((f,p)=>f+p.width*p.height,0),s=Math.max(.3,...n.map(f=>f.width)),a=Math.max(s,Math.sqrt(i*Math.max(.5,Math.min(1.5,t)))*1.18);n.sort((f,p)=>p.height-f.height||f.id.localeCompare(p.id));let r=new Map,o=0,l=0,c=0,h=0;for(let f of n)o>0&&o+f.width>a&&(o=0,l+=c,c=0),r.set(f.id,{x:o+f.width/2,y:-l-f.height/2,width:f.width,height:f.height}),o+=f.width,h=Math.max(h,o),c=Math.max(c,f.height);let d=l+c;return r.forEach(f=>{f.x-=h/2,f.y+=d/2}),{cells:r,width:h,height:d}}async function NS(e,t,n){if(!e.ok)throw new Error("An anatomy file could not be loaded.");let i=await e.arrayBuffer(),s=new Uint8Array(i,0,Math.min(2,i.byteLength)),r=n&&s[0]===31&&s[1]===139?await new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():i;if(r.byteLength!==t)throw new Error("An anatomy file was incomplete. Please reload the viewer.");return r}var xh=class{active=new Map;blocked=!1;down(t,n,i,s){this.active.size===0&&(this.blocked=!1),this.active.set(t,{x:n,y:i,threshold:s}),this.active.size>1&&(this.blocked=!0)}move(t,n,i){let s=this.active.get(t);s&&Math.hypot(n-s.x,i-s.y)>s.threshold&&(this.blocked=!0)}up(t,n,i){this.move(t,n,i);let s=this.active.has(t)&&this.active.size===1&&!this.blocked;return this.active.delete(t),s}cancel(t){this.active.delete(t),this.blocked=!0}};var Di=[{id:"skeletal",name:"Skeleton",color:"#e2d9ba",description:"Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. Their internal tissue also stores minerals and produces blood cells."},{id:"muscular",name:"Muscles",color:"#a85b50",description:"Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints, stabilize posture, and produce heat."},{id:"cardiac",name:"Heart",color:"#b96760",description:"The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits."},{id:"sensory",name:"Sensory organs",color:"#b0c8ce",description:"These structures contribute to special senses, including sight, hearing, and balance. Their specialized tissues detect stimuli and work with the nervous system to convey information."},{id:"arterial",name:"Arteries",color:"#c05245",description:"The heart drives blood through the circulation. Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs."},{id:"venous",name:"Veins",color:"#527c9f",description:"Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues; the pulmonary veins bring oxygenated blood back from the lungs."},{id:"nervous",name:"Nervous system",color:"#d8b565",description:"The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation of body functions."},{id:"respiratory",name:"Respiratory",color:"#b98991",description:"The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood. Breathing depends on pressure changes produced by respiratory muscles."},{id:"digestive",name:"Digestive",color:"#b8916b",description:"The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward. Accessory organs contribute bile and digestive enzymes."},{id:"urinary",name:"Urinary",color:"#b47961",description:"The kidneys filter blood and regulate fluid, electrolyte, and acid\u2013base balance. Urine travels through the ureters to the bladder and exits through the urethra."},{id:"lymphatic",name:"Lymphatic",color:"#879f7c",description:"Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes and other lymphoid organs support immune surveillance and responses."},{id:"endocrine",name:"Endocrine",color:"#c5a09a",description:"Endocrine organs release hormones into the blood to coordinate processes such as metabolism, growth, stress responses, and reproduction."},{id:"reproductive",name:"Reproductive",color:"#bda098",description:"The male reproductive structures represented here contribute to sperm production, maturation, transport, and the production of sex hormones."},{id:"integumentary",name:"Body surface",color:"#ba9b7d",description:"The body surface provides an outer anatomical reference. The integumentary system forms a protective barrier and contributes to sensation and temperature regulation."},{id:"connective",name:"Connective tissue",color:"#aec3bb",description:"Cartilage, ligaments, and other connective tissues support, connect, and separate structures. Their roles include stabilizing joints and distributing mechanical loads."}];var IS=ia(Fl());function zm({atlas:e,state:t,onSelect:n,onProgress:i,onError:s}){let a=(0,ho.useRef)(null),r=(0,ho.useRef)(t),o=(0,ho.useRef)(n);return r.current=t,o.current=n,(0,ho.useEffect)(()=>{let l=a.current,c=!1,h=0,d=!0,f=!1,p="",_=-1,v="",m="",u=0,y=null,g=new AbortController,S;try{S=new Ul({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{s("This browser could not start the 3D viewer. Please try a browser with WebGL enabled.");return}S.setPixelRatio(Math.min(devicePixelRatio,innerWidth<768?1.5:2)),S.setClearColor("#f2f3f3"),S.outputColorSpace=We,S.toneMapping=Rm,S.toneMappingExposure=1.12,l.appendChild(S.domElement),S.domElement.setAttribute("aria-label","Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.");let M=new ro,R=new hn(34,1,.005,100),E=new _h(R,S.domElement);R.position.set(1.4,1.05,3.6),E.target.set(0,.85,0),E.enableDamping=!0,E.dampingFactor=.085,E.minDistance=.07,E.maxDistance=40,E.maxPolarAngle=Math.PI*.96,E.addEventListener("change",()=>{d=!0});let N=new ao(S),x=new vh,A=N.fromScene(x,.04);M.environment=A.texture,x.dispose(),N.dispose(),M.add(new ch(16777215,10988722,1.05));let V=new Il(16775924,2.3);V.position.set(-2,4,3),M.add(V);let W=new Il(15331583,1.8);W.position.set(2,2,-3),M.add(W);let tt=new ie(new oh(30,96),new ds({color:14014940,roughness:1}));tt.rotation.x=-Math.PI/2,tt.position.y=-.019,M.add(tt);let D=new ie(new lh(.68,.7,.028,100),new ds({color:15658732,metalness:.12,roughness:.67}));D.position.y=-.016,M.add(D);let B=new ie(new Ol(.63,.632,128),new hs({color:9213599,transparent:!0,opacity:.4,side:Gn}));B.rotation.x=-Math.PI/2,B.position.y=.001,M.add(B);let Q=new ie(new Ol(.55,.551,128),new hs({color:10792632,transparent:!0,opacity:.16,side:Gn}));Q.rotation.x=-Math.PI/2,Q.position.y=.001,M.add(Q);let Z=_i.ceilPowerOfTwo(e.parts.length),et=new Float32Array(Z*4),j=new Dl(et,Z,1,kn,Ri);j.needsUpdate=!0;let at=new Uint8Array(Z*4),ot=new Dl(at,Z,1);ot.needsUpdate=!0;let yt=[],X=[],nt=[],mt=e.parts.map(G=>new U().fromArray(G.bounds[0]).add(new U().fromArray(G.bounds[1])).multiplyScalar(.5)),Mt=[],Et=e.parts.map(G=>new gi(new U().fromArray(G.bounds[0]),new U().fromArray(G.bounds[1]))),Pt=1,Ut=1,Ct=new Float32Array(e.parts.length*3),zt=new pn;zt.setAttribute("position",new Ve(Ct,3));let z=new Nl({color:6583435,size:5,sizeAttenuation:!1,transparent:!0,opacity:.72,depthTest:!1});z.onBeforeCompile=G=>{G.fragmentShader=G.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (distance(gl_PointCoord, vec2(0.5)) > 0.5) discard;`)};let Se=new rh(zt,z);Se.frustumCulled=!1,Se.renderOrder=10,Se.visible=!1,M.add(Se);let _t=document.createElement("div");_t.className="part-hover",_t.setAttribute("role","tooltip"),_t.hidden=!0,l.appendChild(_t);let Bt=[],Tt=new U,ce=(G,J,ft)=>{let L=-1,it=1/0;for(let Y of Bt){let P=Math.max(Y.left-G,0,G-Y.right),q=Math.max(Y.top-J,0,J-Y.bottom),rt=Math.hypot(P,q);if(rt>ft)continue;let pt=rt+Math.hypot(Y.x-G,Y.y-J)*.025;pt<it&&(it=pt,L=Y.index)}return L},Ft=G=>{let J=new ds({color:Di.find(ft=>ft.id===G)?.color??"#aebbb8",metalness:.08,roughness:.53,side:Gn,transparent:G==="integumentary",opacity:G==="integumentary"?.1:1,depthWrite:G!=="integumentary"});return J.onBeforeCompile=ft=>{ft.uniforms.partState={value:j},ft.uniforms.selectionState={value:ot},ft.uniforms.stateWidth={value:Z},ft.vertexShader=`attribute float partIndex; uniform sampler2D partState; uniform sampler2D selectionState; uniform float stateWidth; varying float partVisible; varying float partSelected;
`+ft.vertexShader,ft.vertexShader=ft.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec2 stateUv = vec2((partIndex + 0.5) / stateWidth, 0.5); vec4 state = texture2D(partState, stateUv); transformed += state.xyz; partVisible = state.w; partSelected = texture2D(selectionState, stateUv).r;`),ft.fragmentShader=`varying float partVisible; varying float partSelected;
`+ft.fragmentShader,ft.fragmentShader=ft.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (partVisible < 0.5) discard;`),ft.fragmentShader=ft.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.85, 0.78), partSelected * 0.75);`)},yt.push(J),J},Ot=new Map(Di.map(G=>[G.id,Ft(G.id)])),Jt=0,Ue=async G=>{let J=e.chunks[G],ft=!!J.gzip&&typeof DecompressionStream<"u",L=await fetch(ft?J.gzip:J.url,{signal:g.signal}),it=await NS(L,J.bytes,ft);if(c)return;let Y=new Map;e.parts.forEach((P,q)=>{if(P.chunk!==G)return;let rt=new pn;rt.setAttribute("position",new Ve(new Float32Array(it,P.positions,P.vertexCount*3),3)),rt.setAttribute("normal",new Ve(new Int16Array(it,P.normals,P.vertexCount*3),3,!0)),rt.setIndex(new Ve(new Uint32Array(it,P.indices,P.indexCount),1)),rt.boundingBox=Et[q].clone(),rt.computeBoundingSphere();let pt=new ie(rt);pt.matrixAutoUpdate=!1,nt[q]=pt,X.push(rt),rt.setAttribute("partIndex",new Ve(new Float32Array(P.vertexCount).fill(q),1));let Kt=Y.get(P.system)??[];Kt.push(rt),Y.set(P.system,Kt)}),Y.forEach((P,q)=>{let rt=US(P,!1);if(!rt)throw new Error("Could not assemble anatomy geometry.");X.push(rt);let pt=new ie(rt,Ot.get(q));pt.frustumCulled=!1,M.add(pt)}),y=null,Jt++,i(Math.round(Jt/e.chunks.length*100)),d=!0};(async()=>{try{let G=0;await Promise.all(Array.from({length:3},async()=>{for(;G<e.chunks.length;){let J=G++;await Ue(J)}})),c||(f=!0,d=!0)}catch(G){c||s(G instanceof Error?G.message:"Could not load the anatomy.")}})();let me=(G,J=0)=>{R.clearViewOffset();let ft=l.clientHeight,L=l.clientWidth,it=Math.max(150,ft-150),Y=J>.1?Math.max(Ut*ft/it,Pt/R.aspect)/(2*Math.tan(_i.degToRad(R.fov/2)))*1.15:Math.max(1.85*ft/it,.85/R.aspect)/(2*Math.tan(_i.degToRad(R.fov/2)))*1.02,P=G==="front"?new U(0,.02,1):G==="back"?new U(0,.02,-1):G==="side"?new U(1,.02,0):new U(.35,.06,1).normalize();E.target.set(0,.93,0),R.position.copy(E.target).addScaledVector(P,Y),E.update(),d=!0},w=()=>{m="",y=null,S.setPixelRatio(Math.min(devicePixelRatio,l.clientWidth<768||l.clientHeight<600?1.5:2)),R.aspect=l.clientWidth/l.clientHeight,R.updateProjectionMatrix(),S.setSize(l.clientWidth,l.clientHeight),me(r.current.view,u)},b=new ResizeObserver(w);b.observe(l);let I=new dh,lt=new Lt,st=new xh,ct=new gi,St=new U,ht=G=>{_t.hidden=!0,st.down(G.pointerId,G.clientX,G.clientY,G.pointerType==="touch"?12:5)},gt=G=>{if(st.move(G.pointerId,G.clientX,G.clientY),G.buttons||u<.5||G.pointerType==="touch"){_t.hidden=!0;return}let J=l.getBoundingClientRect(),ft=G.clientX-J.left,L=G.clientY-J.top,it=ce(ft,L,12);_t.hidden=it<0,S.domElement.style.cursor=it<0?"grab":"pointer",it>=0&&(_t.textContent=e.parts[it].name,_t.style.left=`${Math.max(8,Math.min(ft+14,l.clientWidth-260))}px`,_t.style.top=`${Math.max(8,Math.min(L+18,l.clientHeight-55))}px`)},C=G=>st.cancel(G.pointerId),ut=G=>{if(!st.up(G.pointerId,G.clientX,G.clientY)||!f)return;let ft=S.domElement.getBoundingClientRect();lt.set((G.clientX-ft.left)/ft.width*2-1,-(G.clientY-ft.top)/ft.height*2+1),I.setFromCamera(lt,R);let L=1/0,it=-1,Y=e.parts.some((P,q)=>P.system!=="integumentary"&&et[q*4+3]>.5);nt.forEach((P,q)=>{if(!P||et[q*4+3]<.5||Y&&e.parts[q].system==="integumentary"||(ct.copy(Et[q]).translate(P.position),!I.ray.intersectBox(ct,St)))return;let rt=I.intersectObject(P,!1);rt[0]&&rt[0].distance<L&&(L=rt[0].distance,it=q)}),it<0&&u>.45&&(it=ce(G.clientX-ft.left,G.clientY-ft.top,G.pointerType==="touch"?24:16)),it>=0&&(_t.hidden=!0,o.current(e.parts[it].id))};S.domElement.addEventListener("pointerdown",ht),S.domElement.addEventListener("pointermove",gt),S.domElement.addEventListener("pointerup",ut),S.domElement.addEventListener("pointercancel",C);let $=new fh,Rt=-1,bt=()=>{if(c)return;h=requestAnimationFrame(bt);let G=Math.min($.getDelta(),.05),J=r.current,ft=y?.visible!==J.visible||y?.selected!==J.selected||y?.isolate!==J.isolate,L=Math.abs(u-J.explode)>1e-4;if(L&&(u=_i.damp(u,J.explode,8,G),d=!0),ft||L||Rt<0){let Y=new Set(J.visible),P=new Set(J.selected),q=e.parts.filter(pt=>J.isolate?P.has(pt.id):Y.has(pt.system)||P.has(pt.id)),rt=q.map(pt=>pt.id).join(",")+":"+R.aspect.toFixed(3);if(rt!==m){let pt=DS(q,R.aspect);Pt=pt.width,Ut=pt.height,e.parts.forEach((Kt,ne)=>{let Ht=pt.cells.get(Kt.id);Mt[ne]=Ht?new U(Ht.x,Ht.y+.85,0):mt[ne].clone()}),m=rt,u>.05&&!J.isolate&&me(J.view,Math.max(0,(u-.3)/.7))}e.parts.forEach((pt,Kt)=>{let ne=mt[Kt],Ht=Mt[Kt],re=0,be=0,wn=0;if(u<=.45){let Rn=u/.45,Oi=Di.findIndex(Ba=>Ba.id===pt.system)/Di.length*Math.PI*2;re=Math.sin(Oi)*Rn*.48,be=(ne.y-.85)*Rn*.28,wn=Math.cos(Oi)*Rn*.48}else{let Rn=(u-.45)/.55,Ni=Di.findIndex(Ba=>Ba.id===pt.system),Oi=Ni/Di.length*Math.PI*2;re=_i.lerp(Math.sin(Oi)*.48,Ht.x-ne.x,Rn),be=_i.lerp((ne.y-.85)*.28,Ht.y-ne.y,Rn),wn=_i.lerp(Math.cos(Oi)*.48,-ne.z,Rn)}let ta=P.has(pt.id);et.set([re,be,wn,(J.isolate?ta:Y.has(pt.system)||ta)?1:0],Kt*4),at[Kt*4]=ta?255:0,Ct.set(et[Kt*4+3]>.5?[ne.x+re,ne.y+be,ne.z+wn]:[1e4,1e4,1e4],Kt*3);let ri=nt[Kt];ri&&(ri.position.set(re,be,wn),ri.updateMatrix(),ri.updateMatrixWorld(!0))}),j.needsUpdate=!0,ot.needsUpdate=!0,zt.attributes.position.needsUpdate=!0,y=J,Rt=u,d=!0}(J.view!==p||J.reset!==_)&&(me(J.view,u),p=J.view,_=J.reset),L&&!J.isolate&&me(u>.5?"front":J.view,Math.max(0,(u-.3)/.7));let it=J.isolate?J.selected.join(",")+":"+J.reset+":"+J.inspectorOpen+":"+R.aspect:"";if(it!==v||J.isolate&&L){if(J.isolate){let Y=new gi;if(e.parts.forEach((P,q)=>{J.selected.includes(P.id)&&Y.union(Et[q].clone().translate(new U(et[q*4],et[q*4+1],et[q*4+2])))}),!Y.isEmpty()){let P=Y.getCenter(new U),q=Y.getSize(new U),rt=l.clientWidth,pt=l.clientHeight,Kt=rt<768,ne=rt>pt&&pt<=600,Ht=20,re=rt-20,be=80,wn=pt-90;if(J.inspectorOpen)if(ne)re=rt-335,be=100,wn=pt-125;else if(Kt){let Ni=document.querySelector(".detail-sheet")?.getBoundingClientRect();be=(document.querySelector(".identity")?.getBoundingClientRect()?.bottom??94)+16,wn=(Ni?.top??pt*.58-139)-16}else re=rt-370,Ht=rt>1100?285:25;let ta=Math.max(150,re-Ht),ri=Math.max(40,wn-be);R.setViewOffset(rt,pt,rt/2-(Ht+re)/2,pt/2-(be+wn)/2,rt,pt);let Rn=Math.max(.07,Math.max(q.y*pt/ri,q.x*rt/ta/R.aspect,q.z)/(2*Math.tan(_i.degToRad(R.fov/2)))*1.35);E.maxDistance=Math.max(40,Rn*2),E.target.copy(P),R.position.copy(P).add(new U(.2,.1,1).normalize().multiplyScalar(Rn)),E.update(),d=!0}}else v&&(R.clearViewOffset(),me(J.view,u));v=it}if(E.enableRotate=u<.8,E.mouseButtons.LEFT=u<.8?Li.ROTATE:Li.PAN,E.touches.ONE=u<.8?Ui.ROTATE:Ui.PAN,tt.visible=D.visible=B.visible=Q.visible=u<.5&&!J.isolate,Se.visible=u>.75,E.autoRotate=J.rotate&&!J.isolate&&u<.4,E.autoRotateSpeed=.65,E.update(),E.autoRotate&&(d=!0),d){if(S.render(M,R),Bt=[],u>.45){let Y=e.parts.some((P,q)=>P.system!=="integumentary"&&et[q*4+3]>.5);e.parts.forEach((P,q)=>{if(et[q*4+3]<.5||Y&&P.system==="integumentary")return;let rt=1/0,pt=-1/0,Kt=1/0,ne=-1/0;for(let Ht=0;Ht<8;Ht++){Tt.set(P.bounds[Ht&1?1:0][0]+et[q*4],P.bounds[Ht&2?1:0][1]+et[q*4+1],P.bounds[Ht&4?1:0][2]+et[q*4+2]).project(R);let re=(Tt.x+1)*l.clientWidth/2,be=(1-Tt.y)*l.clientHeight/2;rt=Math.min(rt,re),pt=Math.max(pt,re),Kt=Math.min(Kt,be),ne=Math.max(ne,be)}Tt.copy(mt[q]).add(new U(et[q*4],et[q*4+1],et[q*4+2])).project(R),!(Tt.z<-1||Tt.z>1)&&Bt.push({index:q,x:(Tt.x+1)*l.clientWidth/2,y:(1-Tt.y)*l.clientHeight/2,left:rt,right:pt,top:Kt,bottom:ne})})}d=!1}};bt();let wt=G=>{G.preventDefault(),s("The 3D session was paused by your device. Reload to continue.")};return S.domElement.addEventListener("webglcontextlost",wt),()=>{c=!0,g.abort(),cancelAnimationFrame(h),b.disconnect(),E.dispose(),X.forEach(G=>G.dispose()),yt.forEach(G=>G.dispose()),M.traverse(G=>{G instanceof ie&&!X.includes(G.geometry)&&(G.geometry.dispose(),(Array.isArray(G.material)?G.material:[G.material]).forEach(ft=>ft.dispose()))}),A.dispose(),j.dispose(),ot.dispose(),zt.dispose(),z.dispose(),_t.remove(),S.dispose(),S.domElement.remove()}},[e]),(0,IS.jsx)("div",{className:"scene",ref:a})}var xt=ia(Fl()),bh=new URLSearchParams(location.search).has("compact"),BS={explode:0,visible:["skeletal","cardiac","respiratory","digestive","urinary","nervous"],selected:[],isolate:!1,view:"front",rotate:!1,reset:0};function iC(){let[e,t]=(0,ps.useState)(null),[n,i]=(0,ps.useState)(BS),[s,a]=(0,ps.useState)(0),[r,o]=(0,ps.useState)(""),[l,c]=(0,ps.useState)(""),[h,d]=(0,ps.useState)(""),f=m=>i(u=>({...u,...m}));(0,ps.useEffect)(()=>{fetch("models/atlas.json").then(m=>{if(!m.ok)throw Error("Could not load anatomy index.");return m.json()}).then(t).catch(m=>o(m.message))},[]);let p=e?.parts.find(m=>m.id===n.selected[0]),_=m=>{d("");let u=e?.parts.find(y=>y.id===m);f({selected:[m],visible:u&&!n.visible.includes(u.system)?[...n.visible,u.system]:n.visible})},v=l.trim()&&e?e.concepts.filter(m=>m.name.toLowerCase().includes(l.toLowerCase())).sort((m,u)=>m.name.length-u.name.length).slice(0,25):[];return(0,xt.jsxs)("div",{className:"atlas-app "+(bh?"compact":""),children:[(0,xt.jsxs)("div",{className:"atlas-stage",children:[e&&!r&&(0,xt.jsx)(zm,{atlas:e,state:n,onSelect:_,onProgress:a,onError:o}),(0,xt.jsxs)("div",{className:"atlas-heading",children:[(0,xt.jsx)("span",{children:"PROGNOS / BODY EXPLORER"}),(0,xt.jsx)("h2",{children:bh?"A closer look at you.":"A little curiosity. A clearer picture."}),(0,xt.jsx)("p",{children:"Drag to rotate \xB7 Scroll or pinch to zoom \xB7 Click to select"})]}),(s<100||r)&&(0,xt.jsx)("div",{className:"atlas-loading",role:"status",children:r?(0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)("b",{children:"The 3D viewer is unavailable."}),(0,xt.jsx)("p",{children:r}),(0,xt.jsx)("button",{onClick:()=>location.reload(),children:"Retry"}),(0,xt.jsx)("p",{children:"Use the region buttons below to continue."})]}):(0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)("b",{children:"Preparing your anatomy explorer"}),(0,xt.jsx)("progress",{max:"100",value:s}),(0,xt.jsxs)("span",{children:[s,"% \xB7 Detailed model, approximately 33 MB"]})]})}),p&&(0,xt.jsxs)("div",{className:"atlas-selection","aria-live":"polite",children:[(0,xt.jsx)("span",{children:"SELECTED STRUCTURE"}),(0,xt.jsx)("h3",{children:h||p.name}),(0,xt.jsx)("p",{children:Di.find(m=>m.id===p.system)?.name}),(0,xt.jsx)("button",{onClick:()=>f({isolate:!n.isolate,explode:0}),children:n.isolate?"Show whole body":"Isolate structure"}),(0,xt.jsx)("button",{onClick:()=>f({selected:[],isolate:!1}),children:"Clear"}),(0,xt.jsx)("button",{onClick:()=>{let m=(p.bounds[0][1]+p.bounds[1][1])/2;parent.postMessage({type:"prognos-region",region:/humer|ulna|radius|hand|finger|carpal|brach|forearm/i.test(p.name)?"Arms":m>1.48?"Head":m>1.12?"Chest":m>.94?"Abdomen":m>.75?"Pelvis":"Legs"},location.origin)},children:"Explore this body region "})]}),(0,xt.jsxs)("div",{className:"view-controls",children:[["front","back","side"].map(m=>(0,xt.jsx)("button",{"aria-pressed":n.view===m,onClick:()=>f({view:m,isolate:!1,reset:n.reset+1}),children:m},m)),(0,xt.jsx)("button",{onClick:()=>i({...BS,reset:n.reset+1}),children:"Reset"}),(0,xt.jsx)("button",{"aria-pressed":n.rotate,onClick:()=>f({rotate:!n.rotate}),children:n.rotate?"Pause":"Auto-rotate"})]})]}),!bh&&(0,xt.jsxs)("aside",{className:"atlas-panel",children:[(0,xt.jsx)("span",{className:"eyebrow",children:"LOOK BENEATH THE SURFACE"}),(0,xt.jsx)("h2",{children:"Your anatomy, explored."}),(0,xt.jsx)("p",{className:"atlas-note",children:"Turn layers on or off to discover how structures fit together."}),(0,xt.jsxs)("label",{children:["Find a structure",(0,xt.jsx)("input",{value:l,onChange:m=>c(m.target.value),placeholder:"Try heart, femur, or kidney"})]}),l&&(0,xt.jsx)("div",{className:"atlas-results",children:v.length?v.map(m=>(0,xt.jsx)("button",{onClick:()=>{d(m.name),f({selected:m.elements,isolate:!0,explode:0}),c("")},children:m.name},m.id)):(0,xt.jsx)("p",{children:"No matching structure. Try a shorter name."})}),(0,xt.jsx)("h3",{children:"Body systems"}),(0,xt.jsx)("div",{className:"atlas-systems",children:Di.map(m=>(0,xt.jsxs)("label",{children:[(0,xt.jsx)("input",{type:"checkbox",checked:n.visible.includes(m.id),onChange:()=>f({isolate:!1,selected:[],visible:n.visible.includes(m.id)?n.visible.filter(u=>u!==m.id):[...n.visible,m.id]})}),(0,xt.jsx)("i",{style:{background:m.color}}),m.name]},m.id))}),(0,xt.jsxs)("label",{className:"explode-label",children:["Separate structures ",(0,xt.jsxs)("span",{children:[Math.round(n.explode*100),"%"]}),(0,xt.jsx)("input",{type:"range",min:"0",max:"1",step:".01",value:n.explode,onChange:m=>f({explode:+m.target.value,isolate:!1,rotate:!1})})]}),(0,xt.jsx)("p",{className:"atlas-note",children:"Anatomy shows location, not the cause of pain. Choose a region below to explore Prognos guides."})]}),(0,xt.jsxs)("div",{className:"atlas-bottom",children:[bh?(0,xt.jsx)("a",{href:"../#body",target:"_parent",children:"Open the full 3D explorer "}):(0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)("span",{children:"WHERE DO YOU FEEL IT?"}),(0,xt.jsx)("div",{className:"atlas-regions",children:["Head","Chest","Abdomen","Pelvis","Arms","Legs"].map(m=>(0,xt.jsxs)("button",{onClick:()=>parent.postMessage({type:"prognos-region",region:m},location.origin),children:[m," "]},m))})]}),(0,xt.jsxs)("p",{children:["Adult male reference anatomy \xB7 Educational model, not a diagnosis.",(0,xt.jsx)("br",{}),(0,xt.jsx)("a",{href:"https://github.com/ashemag/human-atlas",target:"_blank",rel:"noopener",children:"Human Atlas"})," \xB7 BodyParts3D \xA9 The Database Center for Life Science \xB7 ",(0,xt.jsx)("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener",children:"CC BY 4.0"})," \xB7 ",(0,xt.jsx)("a",{href:"ATTRIBUTION.md",target:"_blank",children:"Attribution & adaptations"})]})]})]})}(0,FS.createRoot)(document.getElementById("atlas-root")).render((0,xt.jsx)(iC,{}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
