(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3718],{13718:function(Oe,yt,ae){(function(ie,m){Oe.exports=m(ae(96540),ae(2543))})(this,function(ie,m){"use strict";function Pe(e){var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var Ne=Pe(ie),a={React:void 0,options:void 0,origCreateElement:void 0,origCreateFactory:void 0,origCloneElement:void 0,componentsMap:new WeakMap,ownerDataMap:new WeakMap,hooksPerRender:[]};function be(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,i,s,f=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(f.push(n.value),f.length!==t);u=!0);}catch(p){c=!0,o=p}finally{try{if(!u&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw o}}return f}}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?se(Object(r),!0).forEach(function(n){R(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _e(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fe(e){var t=_e(e,"string");return typeof t=="symbol"?t:String(t)}function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function Se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,fe(n.key),n)}}function Ce(e,t,r){return t&&ue(e.prototype,t),r&&ue(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function R(e,t,r){return t=fe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Te(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},E(e)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},L(e,t)}function je(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xe(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function He(e){var t=je();return function(){var n=E(e),o;if(t){var i=E(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return xe(this,o)}}function Fe(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=E(e),e!==null););return e}function P(){return typeof Reflect<"u"&&Reflect.get?P=Reflect.get.bind():P=function(t,r,n){var o=Fe(t,r);if(o){var i=Object.getOwnPropertyDescriptor(o,r);return i.get?i.get.call(arguments.length<3?t:n):i.value}},P.apply(this,arguments)}function F(e,t){return We(e)||be(e,t)||B(e,t)||Le()}function g(e){return Ye(e)||Me(e)||B(e)||Ie()}function Ye(e){if(Array.isArray(e))return G(e)}function We(e){if(Array.isArray(e))return e}function Me(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function B(e,t){if(e){if(typeof e=="string")return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}}function G(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ie(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=B(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,s=!1,f;return{s:function(){r=r.call(e)},n:function(){var u=r.next();return i=u.done,u},e:function(u){s=!0,f=u},f:function(){try{!i&&r.return!=null&&r.return()}finally{if(s)throw f}}}}var l={different:"different",deepEquals:"deepEquals",date:"date",regex:"regex",reactElement:"reactElement",function:"function",same:"same"},ce=R(R(R(R(R(R(R({},l.different,"different objects"),l.deepEquals,"different objects that are equal by value"),l.date,"different date objects with the same value"),l.regex,"different regular expressions with the same value"),l.reactElement,"different React elements (remember that the <jsx/> syntax always produces a *NEW* immutable React element so a component that receives <jsx/> as props always re-renders)"),l.function,"different functions with the same name"),l.same,"same objects by ref (===)"),pe=typeof Symbol=="function"&&Symbol.for,Be=pe?Symbol.for("react.memo"):60115,Ge=pe?Symbol.for("react.forward_ref"):60112,Ve=8,$e=typeof Element<"u",Ae=typeof Symbol=="function"&&Symbol.for,qe=Ae?Symbol.for("react.element"):60103,le=function(t){return t.$$typeof===qe};function y(e,t,r,n,o){return r.push({diffType:o,pathString:n,prevValue:e,nextValue:t}),o!==l.different}function ze(e,t){return!!Object.getOwnPropertyDescriptor(e,t).get}var V=new WeakMap;function j(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=arguments.length>4?arguments[4]:void 0,i=o.detailed;if(e===t)return i&&y(e,t,r,n,l.same),!0;if(!e||!t)return y(e,t,r,n,l.different);if(m.isArray(e)&&m.isArray(t)){var s=e.length;if(s!==t.length)return y(g(e),g(t),r,n,l.different);for(var f=[],u=0,c=s;c--;c>0){var p=j(e[c],t[c],f,"".concat(n,"[").concat(c,"]"),{detailed:i});p&&u++}return(i||u!==s)&&r.push.apply(r,f),u===s?y(g(e),g(t),r,n,l.deepEquals):y(g(e),g(t),r,n,l.different)}if(m.isSet(e)&&m.isSet(t)){if(e.size!==t.size)return y(new Set(e),new Set(t),r,n,l.different);var d=Ue(e),h;try{for(d.s();!(h=d.n()).done;){var v=h.value;if(!t.has(v))return y(new Set(e),new Set(t),r,n,l.different)}}catch(I){d.e(I)}finally{d.f()}return y(new Set(e),new Set(t),r,n,l.deepEquals)}if(m.isDate(e)&&m.isDate(t))return e.getTime()===t.getTime()?y(new Date(e),new Date(t),r,n,l.date):y(new Date(e),new Date(t),r,n,l.different);if(m.isRegExp(e)&&m.isRegExp(t))return e.toString()===t.toString()?y(e,t,r,n,l.regex):y(e,t,r,n,l.different);if($e&&e instanceof Element&&t instanceof Element)return y(e,t,r,n,l.different);if(le(e)&&le(t)){if(e.type!==t.type)return y(e,t,r,n,l.different);var k=j(e.props,t.props,[],"".concat(n,".props"),{detailed:i});return k?y(e,t,r,n,l.reactElement):y(e,t,r,n,l.different)}if(m.isFunction(e)&&m.isFunction(t)){if(e.name!==t.name)return y(e,t,r,n,l.different);var w=V.get(e),D=V.get(t);if(w&&D){var S=j(w.deps,D.deps,r,"".concat(n,":parent-hook-").concat(w.hookName,"-deps"),{detailed:i});return S?y(e,t,r,n,l.function):y(e,t,r,n,l.different)}return y(e,t,r,n,l.function)}if(H(e)==="object"&&H(t)==="object"&&Object.getPrototypeOf(e)===Object.getPrototypeOf(t)){var C=Object.getOwnPropertyNames(e),De=Object.getOwnPropertyNames(t),K=m.uniq([].concat(g(C),g(De))),Y=m.isPlainObject(e)?T({},e):e,W=m.isPlainObject(t)?T({},t):t;if(K.length!==C.length||K.length!==De.length)return y(Y,W,r,n,l.different);for(var ee=K.filter(function(I){return!(I==="stack"&&m.isError(e)||ze(e,I))}),M=ee.length,te=M;te--;te>0)if(!m.has(t,ee[te]))return y(Y,W,r,n,l.different);for(var Ee=[],re=0,ne=M;ne--;ne>0){var oe=ee[ne],mt=j(e[oe],t[oe],Ee,"".concat(n,".").concat(oe),{detailed:i});mt&&re++}return(i||re!==M)&&r.push.apply(r,Ee),re===M?y(Y,W,r,n,l.deepEquals):y(Y,W,r,n,l.different)}return y(e,t,r,n,l.different)}function $(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=n.detailed,i=o===void 0?!1:o;try{var s=[];return j(e,t,s,r,{detailed:i}),s}catch(f){if(f.message&&f.message.match(/stack|recursion/i)||f.number===-2146828260)return console.warn("Warning: why-did-you-render couldn't handle circular references in props.",f.name,f.message),!1;throw f}}function Je(e,t,r){var n=r.pathString,o=r.consoleLog,i=$(e,t,n,{detailed:!0}),s=Math.max.apply(Math,g(i.map(function(f){return f.pathString.length})))+2;Object.entries(m.groupBy(m.sortBy(i,"pathString"),"diffType")).forEach(function(f){var u=F(f,2),c=u[0],p=u[1];o("%c".concat(ce[c],":"),"text-decoration: underline; color: blue;"),p.forEach(function(d){o("".concat(d.pathString,":").padEnd(s," "),d.prevValue)})})}var A="http://bit.ly/wdyr02",Qe="http://bit.ly/wdyr3",Xe=!1;function Ze(e,t){if(Xe)return!1;if(a.options.logOnDifferentValues||t.whyDidYouRender&&t.whyDidYouRender.logOnDifferentValues)return!0;var r=e.propsDifferences&&e.propsDifferences.some(function(n){return n.diffType===l.different})||e.stateDifferences&&e.stateDifferences.some(function(n){return n.diffType===l.different})||e.hookDifferences&&e.hookDifferences.some(function(n){return n.diffType===l.different});return!r}function N(e){var t=e.Component,r=e.displayName,n=e.hookName,o=e.prefixMessage,i=e.diffObjType,s=e.differences,f=e.values;s&&s.length>0?(a.options.consoleLog(R({},r,t),"".concat(o," of ").concat(i," changes:")),s.forEach(function(u){var c=u.pathString,p=u.diffType,d=u.prevValue,h=u.nextValue;function v(){Je(d,h,{pathString:c,consoleLog:a.options.consoleLog})}a.options.consoleGroup("%c".concat(i==="hook"?"[hook ".concat(n," result]"):"".concat(i,"."),"%c").concat(c,"%c"),"color:".concat(a.options.diffNameColor,";"),"color:".concat(a.options.diffPathColor,";"),"color:default;"),a.options.consoleLog("".concat(ce[p],". (more info at ").concat(n?Qe:A,")")),a.options.consoleLog(R({},"prev ".concat(c),d),"!==",R({},"next ".concat(c),h)),p===l.deepEquals&&a.options.consoleLog({"For detailed diff, right click the following fn, save as global, and run: ":v}),a.options.consoleGroupEnd()})):s&&(a.options.consoleLog(R({},r,t),"".concat(o," the ").concat(i," object itself changed but its values are all equal."),i==="props"?"This could have been avoided by making the component pure, or by preventing its father from re-rendering.":"This usually means this component called setState when no changes in its state actually occurred.","More info at ".concat(A)),a.options.consoleLog("prev ".concat(i,":"),f.prev," !== ",f.next,":next ".concat(i)))}function de(e){var t=e.Component,r=e.displayName,n=e.hookName,o=e.prevProps,i=e.prevState,s=e.prevHook,f=e.nextProps,u=e.nextState,c=e.nextHook,p=e.reason;if(Ze(p,t,a.options)){a.options.consoleGroup("%c".concat(r),"color: ".concat(a.options.titleColor,";"));var d="Re-rendered because";if(p.propsDifferences&&(N({Component:t,displayName:r,prefixMessage:d,diffObjType:"props",differences:p.propsDifferences,values:{prev:o,next:f}}),d="And because"),p.stateDifferences&&N({Component:t,displayName:r,prefixMessage:d,diffObjType:"state",differences:p.stateDifferences,values:{prev:i,next:u}}),p.hookDifferences&&N({Component:t,displayName:r,prefixMessage:d,diffObjType:"hook",differences:p.hookDifferences,values:{prev:s,next:c},hookName:n}),p.propsDifferences&&p.ownerDifferences){var h=a.ownerDataMap.get(o),v=a.ownerDataMap.get(f);a.options.consoleGroup("Rendered by ".concat(v.displayName));var k="Re-rendered because";p.ownerDifferences.propsDifferences&&(N({Component:v.Component,displayName:v.displayName,prefixMessage:k,diffObjType:"props",differences:p.ownerDifferences.propsDifferences,values:{prev:h.props,next:v.props}}),k="And because"),p.ownerDifferences.stateDifferences&&N({Component:v.Component,displayName:v.displayName,prefixMessage:k,diffObjType:"state",differences:p.ownerDifferences.stateDifferences,values:{prev:h.state,next:v.state}}),p.ownerDifferences.hookDifferences&&p.ownerDifferences.hookDifferences.forEach(function(w,D){var S=w.hookName,C=w.differences;return N({Component:v.Component,displayName:v.displayName,prefixMessage:k,diffObjType:"hook",differences:C,values:{prev:h.hooks[D].result,next:v.hooks[D].result},hookName:S})}),a.options.consoleGroupEnd()}!p.propsDifferences&&!p.stateDifferences&&!p.hookDifferences&&a.options.consoleLog(R({},r,t),"Re-rendered although props and state objects are the same.","This usually means there was a call to this.forceUpdate() inside the component.","more info at ".concat(A)),a.options.consoleGroupEnd()}}function Ke(e){return de}var et=function(){};function tt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=console.group,r=console.groupEnd;e.collapseGroups?t=console.groupCollapsed:e.onlyLogs&&(t=console.log,r=et);var n=e.notifier||Ke("hotReloadBufferMs"in e?e.hotReloadBufferMs:500);return T({include:null,exclude:null,notifier:n,onlyLogs:!1,consoleLog:console.log,consoleGroup:t,consoleGroupEnd:r,logOnDifferentValues:!1,logOwnerReasons:!0,trackHooks:!0,titleColor:"#058",diffNameColor:"blue",diffPathColor:"red",trackExtraHooks:[],trackAllPureComponents:!1},e)}function O(e){return e.displayName||e.name||e.type&&O(e.type)||e.render&&O(e.render)||(m.isString(e)?e:"Unknown")}function q(e){return e.defaultProps||e.type&&q(e.type)||e.render&&q(e.render)||{}}var me={};function b(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.shallow,o=n===void 0?!0:n;if(e===t)return!1;if(!o)return $(e,t);var i=e||me,s=t||me,f=Object.keys(T(T({},i),s));return m.reduce(f,function(u,c){var p=$(i[c],s[c],c);return p&&(u=[].concat(g(u),g(p))),u},[])}function rt(e){var t=e.prevOwnerData,r=e.nextOwnerData;if(!t||!r)return!1;var n=t.hooks.length===r.hooks.length*2?t.hooks.slice(t.hooks.length/2):t.hooks,o=n.map(function(i,s){var f=i.hookName,u=i.result;return{hookName:f,differences:b(u,r.hooks[s].result,{shallow:!1})}});return{propsDifferences:b(t.props,r.props),stateDifferences:b(t.state,r.state),hookDifferences:o.length>0?o:!1}}function nt(e,t,r,n,o,i){var s=a.ownerDataMap.get(e),f=a.ownerDataMap.get(n);return{propsDifferences:b(e,n),stateDifferences:b(t,o),hookDifferences:b(r,i,{shallow:!1}),ownerDifferences:rt({prevOwnerData:s,nextOwnerData:f})}}function z(e){var t=e.Component,r=e.displayName,n=e.hookName,o=e.prevProps,i=e.prevState,s=e.prevHook,f=e.nextProps,u=e.nextState,c=e.nextHook;return{Component:t,displayName:r,hookName:n,prevProps:o,prevState:i,prevHook:s,nextProps:f,nextState:u,nextHook:c,reason:nt(o,i,s,f,u,c)}}function ot(e){for(var t=e&&(e._reactInternalFiber||e._reactInternals);t;){if(t.mode&Ve)return!0;t=t.return}return!1}function ye(e){return e.prototype&&!!e.prototype.isReactComponent}function x(e){return e.$$typeof===Be}function J(e){return e.$$typeof===Ge}function at(e){return a.options.include&&a.options.include.length>0&&a.options.include.some(function(t){return t.test(e)})}function it(e){return a.options.exclude&&a.options.exclude.length>0&&a.options.exclude.some(function(t){return t.test(e)})}function ve(e,t){var r=t.isHookChange,n=O(e);return it(n)||e.whyDidYouRender===!1||r&&e.whyDidYouRender&&e.whyDidYouRender.trackHooks===!1?!1:!!(e.whyDidYouRender||a.options.trackAllPureComponents&&(e&&e.prototype instanceof a.React.PureComponent||x(e))||at(n))}function he(e,t){var r=t.displayName,n=t.defaultProps,o=function(i){Te(f,i);var s=He(f);function f(u,c){var p,d;Se(this,f),d=s.call(this,u,c),d._WDYR={renderNumber:0};var h=P((p=U(d),E(f.prototype)),"render",p)||d.render,v=h!==e.prototype.render;return v&&(d.render=function(){return f.prototype.render.apply(U(d)),h()}),d}return Ce(f,[{key:"render",value:function(){if(this._WDYR.renderNumber++,"isStrictMode"in this._WDYR||(this._WDYR.isStrictMode=ot(this)),!(this._WDYR.isStrictMode&&this._WDYR.renderNumber%2===1)){if(this._WDYR.prevProps){var c=z({Component:e,displayName:r,prevProps:this._WDYR.prevProps,prevState:this._WDYR.prevState,nextProps:this.props,nextState:this.state});a.options.notifier(c)}this._WDYR.prevProps=this.props,this._WDYR.prevState=this.state}return P(E(f.prototype),"render",this)?P(E(f.prototype),"render",this).call(this):null}}]),f}(e);try{o.displayName=r}catch{}return o.defaultProps=n,m.defaults(o,e),o}var st=function(t){return function(r){return a.React.createElement(t,r)}};function Q(e,t){var r=t.isPure,n=t.displayName,o=t.defaultProps,i=typeof e=="string"?st(e):e;function s(){var f=arguments[0],u=a.React.useRef(),c=u.current;if(u.current=f,c){var p=z({Component:i,displayName:n,prevProps:c,nextProps:f}),d=!p.reason.propsDifferences||r&&p.reason.propsDifferences.length===0;d||a.options.notifier(p)}return i.apply(void 0,arguments)}try{s.displayName=n}catch{}return s.defaultProps=o,s.ComponentForHooksTracking=i,m.defaults(s,i),s}function ge(e,t){var r=t.displayName,n=t.defaultProps,o=e.type,i=ye(o),s=J(o),f=x(o),u=s?o.render:o,c=i?he(u,{displayName:r,defaultProps:n}):f?ge(u,{displayName:r,defaultProps:n}):Q(u,{displayName:r,isPure:!0});try{c.displayName=O(u)}catch{}c.ComponentForHooksTracking=e,m.defaults(c,u);var p=a.React.memo(s?a.React.forwardRef(c):c,e.compare);try{p.displayName=r}catch{}return p.defaultProps=n,m.defaults(p,e),p}function ft(e,t){var r=t.displayName,n=t.defaultProps,o=e.render,i=x(o),s=i?o.type:o,f=Q(s,{isPure:i,displayName:r});f.displayName=O(s),f.ComponentForHooksTracking=s,m.defaults(f,s);var u=a.React.forwardRef(i?a.React.memo(f,o.compare):f);try{u.displayName=r}catch{}return u.defaultProps=n,m.defaults(u,e),u}var Re=Symbol("initial-hook-value");function ut(e,t,r){var n=t.path,o=n?m.get(r,n):r,i=a.React.useRef(!0),s=a.hooksPerRender[0]&&a.hooksPerRender[0].renderNumberForTheHook!==i.current;s&&(a.hooksPerRender=[]),a.hooksPerRender.push({hookName:e,result:o,renderNumberForTheHook:i.current}),i.current++;var f=a.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED&&a.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current,u=a.React.useRef(Re);if(!f)return r;var c=f.type.ComponentForHooksTracking||f.type,p=O(c),d=ve(c,{isHookChange:!0});if(!d)return r;var h=u.current;if(u.current=r,h!==Re){var v=z({Component:c,displayName:p,hookName:e,prevHook:n?m.get(h,n):h,nextHook:o});v.reason.hookDifferences&&a.options.notifier(v)}return r}function ct(e,t){var r=t.displayName,n=t.defaultProps;return x(e)?ge(e,{displayName:r,defaultProps:n}):J(e)?ft(e,{displayName:r,defaultProps:n}):ye(e)?he(e,{displayName:r,defaultProps:n}):Q(e,{displayName:r,defaultProps:n,isPure:!1})}function pt(e,t){var r=t.displayName,n=t.defaultProps;if(a.componentsMap.has(e))return a.componentsMap.get(e);var o=ct(e,{displayName:r,defaultProps:n});return a.componentsMap.set(e,o),o}function X(e){if(!e)return!1;if(x(e))return X(e.type);if(J(e))return X(e.render);if(typeof e=="function")return!0}var we={useState:{path:"0"},useReducer:{path:"0"},useContext:void 0,useSyncExternalStore:void 0,useMemo:{dependenciesPath:"1",dontReport:!0},useCallback:{dependenciesPath:"1",dontReport:!0}};function Z(e){var t=a.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current;if(t){var r=t.type.ComponentForHooksTracking||t.type,n=O(r),o={};a.options.getAdditionalOwnerData&&(o=a.options.getAdditionalOwnerData(e)),a.ownerDataMap.set(e.props,{Component:r,displayName:n,props:t.pendingProps,state:t.stateNode?t.stateNode.state:null,hooks:a.hooksPerRender,additionalOwnerData:o})}}function lt(){var e=null;a.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED&&Object.defineProperty(a.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,"current",{get:function(){return e},set:function(r){e=r,a.hooksPerRender=[]}})}function dt(){var e=!!a.React.useState;if(a.options.trackHooks&&e){var t=Object.entries(we).map(function(n){var o=F(n,2),i=o[0],s=o[1];return[a.React,i,s]}),r=[].concat(g(t),g(a.options.trackExtraHooks));r.forEach(function(n){var o=F(n,3),i=o[0],s=o[1],f=o[2],u=f===void 0?{}:f,c=i[s],p=s[0].toUpperCase()+s.slice(1),d=function(){for(var v=arguments.length,k=new Array(v),w=0;w<v;w++)k[w]=arguments[w];var D=c.call.apply(c,[this].concat(k)),S=u.dependenciesPath,C=u.dontReport;return S&&m.isFunction(D)&&V.set(D,{hookName:s,deps:m.get(k,S)}),C||ut(s,u,D),D};Object.defineProperty(d,"name",{value:p,writable:!1}),Object.assign(d,{originalHook:c}),i[s]=d})}}function ke(e){var t=X(e)&&ve(e,{isHookChange:!1});if(!t)return null;var r=e&&e.whyDidYouRender&&e.whyDidYouRender.customName||O(e),n=q(e),o=pt(e,{displayName:r,defaultProps:n});return o}function _(e,t){if(!e.__IS_WDYR__)return e.__IS_WDYR__=!0,Object.assign(a,{React:e,options:tt(t),origCreateElement:e.createElement,origCreateFactory:e.createFactory,origCloneElement:e.cloneElement,componentsMap:new WeakMap}),lt(),e.createElement=function(r){for(var n=ke(r),o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];if(n)try{var f=a.origCreateElement.apply(e,[n].concat(i));return a.options.logOwnerReasons&&Z(f),f}catch(u){a.options.consoleLog("whyDidYouRender error. Please file a bug at https://github.com/welldone-software/why-did-you-render/issues.",{errorInfo:{error:u,componentNameOrComponent:r,rest:i,options:a.options}})}return a.origCreateElement.apply(e,[r].concat(i))},Object.assign(e.createElement,a.origCreateElement),e.createFactory=function(r){var n=e.createElement.bind(null,r);return n.type=r,n},Object.assign(e.createFactory,a.origCreateFactory),e.cloneElement=function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=a.origCloneElement.apply(e,n);return a.options.logOwnerReasons&&Z(i),i},Object.assign(e.cloneElement,a.origCloneElement),dt(),e.__REVERT_WHY_DID_YOU_RENDER__=function(){Object.assign(e,{createElement:a.origCreateElement,createFactory:a.origCreateFactory,cloneElement:a.origCloneElement}),a.componentsMap=null;var r=[].concat(g(Object.keys(we).map(function(n){return[e,n]})),g(a.options.trackExtraHooks));r.forEach(function(n){var o=F(n,2),i=o[0],s=o[1];i[s].originalHook&&(i[s]=i[s].originalHook)}),delete e.__REVERT_WHY_DID_YOU_RENDER__,delete e.__IS_WDYR__},e}return _.defaultNotifier=de,_.wdyrStore=a,_.storeOwnerData=Z,_.getWDYRType=ke,Object.assign(_,Ne),_})}}]);

//# sourceMappingURL=3718.3993946b7a0eb8f64b4d.js.map