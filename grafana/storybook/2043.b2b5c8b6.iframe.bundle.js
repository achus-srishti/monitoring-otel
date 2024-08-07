"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2043,4424,9662,7281,4900,2519],{"../../node_modules/@mdx-js/react/lib/index.js":function(L,c,_){_.d(c,{BN:function(){return j},RP:function(){return w},gz:function(){return s},xA:function(){return T}});var h=_("../../node_modules/react/index.js");const j=h.createContext({});function s(m){return b;function b(l){const E=w(l.components);return h.createElement(m,{...l,allComponents:E})}}function w(m){const b=h.useContext(j);return h.useMemo(()=>typeof m=="function"?m(b):{...b,...m},[b,m])}const y={};function T({components:m,children:b,disableParentContext:l}){let E;return l?E=typeof m=="function"?m({}):m||y:E=w(m),h.createElement(j.Provider,{value:E},b)}},"../../node_modules/react-use/lib/misc/util.js":function(L,c){Object.defineProperty(c,"__esModule",{value:!0}),c.isNavigator=c.isBrowser=c.off=c.on=c.noop=void 0;var _=function(){};c.noop=_;function h(s){for(var w=[],y=1;y<arguments.length;y++)w[y-1]=arguments[y];s&&s.addEventListener&&s.addEventListener.apply(s,w)}c.on=h;function j(s){for(var w=[],y=1;y<arguments.length;y++)w[y-1]=arguments[y];s&&s.removeEventListener&&s.removeEventListener.apply(s,w)}c.off=j,c.isBrowser=typeof window<"u",c.isNavigator=typeof navigator<"u"},"../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(L,c,_){Object.defineProperty(c,"__esModule",{value:!0});var h=_("../../node_modules/react/index.js"),j=_("../../node_modules/react-use/lib/misc/util.js"),s=j.isBrowser?h.useLayoutEffect:h.useEffect;c.default=s},"../../node_modules/react-use/lib/useMeasure.js":function(L,c,_){var h;h={value:!0};var j=_("../../node_modules/tslib/tslib.es6.mjs"),s=_("../../node_modules/react/index.js"),w=j.__importDefault(_("../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),y=_("../../node_modules/react-use/lib/misc/util.js"),T={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function m(){var b=s.useState(null),l=b[0],E=b[1],g=s.useState(T),R=g[0],C=g[1],P=s.useMemo(function(){return new window.ResizeObserver(function(F){if(F[0]){var O=F[0].contentRect,B=O.x,G=O.y,X=O.width,z=O.height,x=O.top,K=O.left,U=O.bottom,V=O.right;C({x:B,y:G,width:X,height:z,top:x,left:K,bottom:U,right:V})}})},[]);return w.default(function(){if(l)return P.observe(l),function(){P.disconnect()}},[l]),[E,R]}c.A=y.isBrowser&&typeof window.ResizeObserver<"u"?m:function(){return[y.noop,T]}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(L,c,_){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=_("../../node_modules/react/index.js"),j=Symbol.for("react.element"),s=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,y=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function m(b,l,E){var g,R={},C=null,P=null;E!==void 0&&(C=""+E),l.key!==void 0&&(C=""+l.key),l.ref!==void 0&&(P=l.ref);for(g in l)w.call(l,g)&&!T.hasOwnProperty(g)&&(R[g]=l[g]);if(b&&b.defaultProps)for(g in l=b.defaultProps,l)R[g]===void 0&&(R[g]=l[g]);return{$$typeof:j,type:b,key:C,ref:P,props:R,_owner:y.current}}c.Fragment=s,c.jsx=m,c.jsxs=m},"../../node_modules/react/jsx-runtime.js":function(L,c,_){L.exports=_("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../node_modules/tslib/tslib.es6.mjs":function(L,c,_){_.r(c),_.d(c,{__addDisposableResource:function(){return Q},__assign:function(){return s},__asyncDelegator:function(){return U},__asyncGenerator:function(){return K},__asyncValues:function(){return V},__await:function(){return x},__awaiter:function(){return R},__classPrivateFieldGet:function(){return Y},__classPrivateFieldIn:function(){return J},__classPrivateFieldSet:function(){return H},__createBinding:function(){return P},__decorate:function(){return y},__disposeResources:function(){return Z},__esDecorate:function(){return m},__exportStar:function(){return F},__extends:function(){return j},__generator:function(){return C},__importDefault:function(){return $},__importStar:function(){return W},__makeTemplateObject:function(){return k},__metadata:function(){return g},__param:function(){return T},__propKey:function(){return l},__read:function(){return B},__rest:function(){return w},__runInitializers:function(){return b},__setFunctionName:function(){return E},__spread:function(){return G},__spreadArray:function(){return z},__spreadArrays:function(){return X},__values:function(){return O}});var h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])},h(e,t)};function j(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return s=Object.assign||function(t){for(var r,n=1,u=arguments.length;n<u;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},s.apply(this,arguments)};function w(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)t.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(r[n[u]]=e[n[u]]);return r}function y(e,t,r,n){var u=arguments.length,o=u<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,n);else for(var f=e.length-1;f>=0;f--)(i=e[f])&&(o=(u<3?i(o):u>3?i(t,r,o):i(t,r))||o);return u>3&&o&&Object.defineProperty(t,r,o),o}function T(e,t){return function(r,n){t(r,n,e)}}function m(e,t,r,n,u,o){function i(N){if(N!==void 0&&typeof N!="function")throw new TypeError("Function expected");return N}for(var f=n.kind,S=f==="getter"?"get":f==="setter"?"set":"value",a=!t&&e?n.static?e:e.prototype:null,d=t||(a?Object.getOwnPropertyDescriptor(a,n.name):{}),v,p=!1,D=r.length-1;D>=0;D--){var M={};for(var I in n)M[I]=I==="access"?{}:n[I];for(var I in n.access)M.access[I]=n.access[I];M.addInitializer=function(N){if(p)throw new TypeError("Cannot add initializers after decoration has completed");o.push(i(N||null))};var A=(0,r[D])(f==="accessor"?{get:d.get,set:d.set}:d[S],M);if(f==="accessor"){if(A===void 0)continue;if(A===null||typeof A!="object")throw new TypeError("Object expected");(v=i(A.get))&&(d.get=v),(v=i(A.set))&&(d.set=v),(v=i(A.init))&&u.unshift(v)}else(v=i(A))&&(f==="field"?u.unshift(v):d[S]=v)}a&&Object.defineProperty(a,n.name,d),p=!0}function b(e,t,r){for(var n=arguments.length>2,u=0;u<t.length;u++)r=n?t[u].call(e,r):t[u].call(e);return n?r:void 0}function l(e){return typeof e=="symbol"?e:"".concat(e)}function E(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function g(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function R(e,t,r,n){function u(o){return o instanceof r?o:new r(function(i){i(o)})}return new(r||(r=Promise))(function(o,i){function f(d){try{a(n.next(d))}catch(v){i(v)}}function S(d){try{a(n.throw(d))}catch(v){i(v)}}function a(d){d.done?o(d.value):u(d.value).then(f,S)}a((n=n.apply(e,t||[])).next())})}function C(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,u,o,i;return i={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function f(a){return function(d){return S([a,d])}}function S(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(r=0)),r;)try{if(n=1,u&&(o=a[0]&2?u.return:a[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,a[1])).done)return o;switch(u=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,u=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(d){a=[6,d],u=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var P=Object.create?function(e,t,r,n){n===void 0&&(n=r);var u=Object.getOwnPropertyDescriptor(t,r);(!u||("get"in u?!t.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,u)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};function F(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&P(t,e,r)}function O(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function B(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),u,o=[],i;try{for(;(t===void 0||t-- >0)&&!(u=n.next()).done;)o.push(u.value)}catch(f){i={error:f}}finally{try{u&&!u.done&&(r=n.return)&&r.call(n)}finally{if(i)throw i.error}}return o}function G(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(B(arguments[t]));return e}function X(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),u=0,t=0;t<r;t++)for(var o=arguments[t],i=0,f=o.length;i<f;i++,u++)n[u]=o[i];return n}function z(e,t,r){if(r||arguments.length===2)for(var n=0,u=t.length,o;n<u;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function x(e){return this instanceof x?(this.v=e,this):new x(e)}function K(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),u,o=[];return u={},i("next"),i("throw"),i("return"),u[Symbol.asyncIterator]=function(){return this},u;function i(p){n[p]&&(u[p]=function(D){return new Promise(function(M,I){o.push([p,D,M,I])>1||f(p,D)})})}function f(p,D){try{S(n[p](D))}catch(M){v(o[0][3],M)}}function S(p){p.value instanceof x?Promise.resolve(p.value.v).then(a,d):v(o[0][2],p)}function a(p){f("next",p)}function d(p){f("throw",p)}function v(p,D){p(D),o.shift(),o.length&&f(o[0][0],o[0][1])}}function U(e){var t,r;return t={},n("next"),n("throw",function(u){throw u}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(u,o){t[u]=e[u]?function(i){return(r=!r)?{value:x(e[u](i)),done:!1}:o?o(i):i}:o}}function V(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof O=="function"?O(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=e[o]&&function(i){return new Promise(function(f,S){i=e[o](i),u(f,S,i.done,i.value)})}}function u(o,i,f,S){Promise.resolve(S).then(function(a){o({value:a,done:f})},i)}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var q=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function W(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&P(t,e,r);return q(t,e),t}function $(e){return e&&e.__esModule?e:{default:e}}function Y(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function H(e,t,r,n,u){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!u)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!u:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?u.call(e,r):u?u.value=r:t.set(e,r),r}function J(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function Q(e,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if(typeof n!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var ee=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function Z(e){function t(n){e.error=e.hasError?new ee(n,e.error,"An error was suppressed during disposal."):n,e.hasError=!0}function r(){for(;e.stack.length;){var n=e.stack.pop();try{var u=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(u).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}c.default={__extends:j,__assign:s,__rest:w,__decorate:y,__param:T,__metadata:g,__awaiter:R,__generator:C,__createBinding:P,__exportStar:F,__values:O,__read:B,__spread:G,__spreadArrays:X,__spreadArray:z,__await:x,__asyncGenerator:K,__asyncDelegator:U,__asyncValues:V,__makeTemplateObject:k,__importStar:W,__importDefault:$,__classPrivateFieldGet:Y,__classPrivateFieldSet:H,__classPrivateFieldIn:J,__addDisposableResource:Q,__disposeResources:Z}}}]);
