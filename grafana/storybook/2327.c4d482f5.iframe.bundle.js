(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2327],{"../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":function(fe,xe,h){"use strict";h.d(xe,{A:function(){return P}});function P(p,_){if(p==null)return{};var Q={},ee=Object.keys(p),te,Y;for(Y=0;Y<ee.length;Y++)te=ee[Y],!(_.indexOf(te)>=0)&&(Q[te]=p[te]);return Q}},"../../node_modules/react-router-dom/esm/react-router-dom.js":function(fe,xe,h){"use strict";h.d(xe,{N_:function(){return ot}});var P=h("../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),p=h("../../node_modules/react/index.js"),_=h("../../node_modules/@babel/runtime/helpers/esm/extends.js");function Q(e){return e.charAt(0)==="/"}function ee(e,t){for(var o=t,r=o+1,n=e.length;r<n;o+=1,r+=1)e[o]=e[r];e.pop()}function te(e,t){t===void 0&&(t="");var o=e&&e.split("/")||[],r=t&&t.split("/")||[],n=e&&Q(e),c=t&&Q(t),a=n||c;if(e&&Q(e)?r=o:o.length&&(r.pop(),r=r.concat(o)),!r.length)return"/";var l;if(r.length){var f=r[r.length-1];l=f==="."||f===".."||f===""}else l=!1;for(var u=0,s=r.length;s>=0;s--){var m=r[s];m==="."?ee(r,s):m===".."?(ee(r,s),u++):u&&(ee(r,s),u--)}if(!a)for(;u--;u)r.unshift("..");a&&r[0]!==""&&(!r[0]||!Q(r[0]))&&r.unshift("");var g=r.join("/");return l&&g.substr(-1)!=="/"&&(g+="/"),g}var Y=te,D=h("../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js");function le(e){return e.charAt(0)==="/"?e:"/"+e}function he(e){return e.charAt(0)==="/"?e.substr(1):e}function me(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function ge(e,t){return me(e,t)?e.substr(t.length):e}function Ae(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function we(e){var t=e||"/",o="",r="",n=t.indexOf("#");n!==-1&&(r=t.substr(n),t=t.substr(0,n));var c=t.indexOf("?");return c!==-1&&(o=t.substr(c),t=t.substr(0,c)),{pathname:t,search:o==="?"?"":o,hash:r==="#"?"":r}}function U(e){var t=e.pathname,o=e.search,r=e.hash,n=t||"/";return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function j(e,t,o,r){var n;return typeof e=="string"?(n=we(e),n.state=t):(n=(0,_.A)({},e),n.pathname===void 0&&(n.pathname=""),n.search?n.search.charAt(0)!=="?"&&(n.search="?"+n.search):n.search="",n.hash?n.hash.charAt(0)!=="#"&&(n.hash="#"+n.hash):n.hash="",t!==void 0&&n.state===void 0&&(n.state=t)),o&&(n.key=o),r?n.pathname?n.pathname.charAt(0)!=="/"&&(n.pathname=Y(n.pathname,r.pathname)):n.pathname=r.pathname:n.pathname||(n.pathname="/"),n}function v(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&valueEqual(e.state,t.state)}function y(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function o(a,l,f,u){if(e!=null){var s=typeof e=="function"?e(a,l):e;typeof s=="string"?typeof f=="function"?f(s,u):u(!0):u(s!==!1)}else u(!0)}var r=[];function n(a){var l=!0;function f(){l&&a.apply(void 0,arguments)}return r.push(f),function(){l=!1,r=r.filter(function(u){return u!==f})}}function c(){for(var a=arguments.length,l=new Array(a),f=0;f<a;f++)l[f]=arguments[f];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:o,appendListener:n,notifyListeners:c}}var w=!!(typeof window<"u"&&window.document&&window.document.createElement);function b(e,t){t(window.confirm(e))}function N(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function i(){return window.navigator.userAgent.indexOf("Trident")===-1}function W(){return window.navigator.userAgent.indexOf("Firefox")===-1}function M(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var de="popstate",I="hashchange";function F(){try{return window.history.state||{}}catch{return{}}}function T(e){e===void 0&&(e={}),w||(0,D.A)(!1);var t=window.history,o=N(),r=!i(),n=e,c=n.forceRefresh,a=c===void 0?!1:c,l=n.getUserConfirmation,f=l===void 0?b:l,u=n.keyLength,s=u===void 0?6:u,m=e.basename?Ae(le(e.basename)):"";function g(C){var $=C||{},d=$.key,x=$.state,S=window.location,O=S.pathname,ue=S.search,ne=S.hash,q=O+ue+ne;return m&&(q=ge(q,m)),j(q,x,d)}function E(){return Math.random().toString(36).substr(2,s)}var R=y();function B(C){(0,_.A)(ce,C),ce.length=t.length,R.notifyListeners(ce.location,ce.action)}function k(C){M(C)||ie(g(C.state))}function V(){ie(g(F()))}var J=!1;function ie(C){if(J)J=!1,B();else{var $="POP";R.confirmTransitionTo(C,$,f,function(d){d?B({action:$,location:C}):ve(C)})}}function ve(C){var $=ce.location,d=K.indexOf($.key);d===-1&&(d=0);var x=K.indexOf(C.key);x===-1&&(x=0);var S=d-x;S&&(J=!0,H(S))}var ae=g(F()),K=[ae.key];function L(C){return m+U(C)}function A(C,$){var d="PUSH",x=j(C,$,E(),ce.location);R.confirmTransitionTo(x,d,f,function(S){if(S){var O=L(x),ue=x.key,ne=x.state;if(o)if(t.pushState({key:ue,state:ne},null,O),a)window.location.href=O;else{var q=K.indexOf(ce.location.key),Te=K.slice(0,q+1);Te.push(x.key),K=Te,B({action:d,location:x})}else window.location.href=O}})}function G(C,$){var d="REPLACE",x=j(C,$,E(),ce.location);R.confirmTransitionTo(x,d,f,function(S){if(S){var O=L(x),ue=x.key,ne=x.state;if(o)if(t.replaceState({key:ue,state:ne},null,O),a)window.location.replace(O);else{var q=K.indexOf(ce.location.key);q!==-1&&(K[q]=x.key),B({action:d,location:x})}else window.location.replace(O)}})}function H(C){t.go(C)}function X(){H(-1)}function se(){H(1)}var be=0;function pe(C){be+=C,be===1&&C===1?(window.addEventListener(de,k),r&&window.addEventListener(I,V)):be===0&&(window.removeEventListener(de,k),r&&window.removeEventListener(I,V))}var Z=!1;function Le(C){C===void 0&&(C=!1);var $=R.setPrompt(C);return Z||(pe(1),Z=!0),function(){return Z&&(Z=!1,pe(-1)),$()}}function Se(C){var $=R.appendListener(C);return pe(1),function(){pe(-1),$()}}var ce={length:t.length,action:"POP",location:ae,createHref:L,push:A,replace:G,go:H,goBack:X,goForward:se,block:Le,listen:Se};return ce}var z="hashchange",re={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+he(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:he,decodePath:le},slash:{encodePath:le,decodePath:le}};function ye(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Pe(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Ce(e){window.location.hash=e}function Ee(e){window.location.replace(ye(window.location.href)+"#"+e)}function Be(e){e===void 0&&(e={}),w||(0,D.A)(!1);var t=window.history,o=W(),r=e,n=r.getUserConfirmation,c=n===void 0?b:n,a=r.hashType,l=a===void 0?"slash":a,f=e.basename?Ae(le(e.basename)):"",u=re[l],s=u.encodePath,m=u.decodePath;function g(){var d=m(Pe());return f&&(d=ge(d,f)),j(d)}var E=y();function R(d){(0,_.A)($,d),$.length=t.length,E.notifyListeners($.location,$.action)}var B=!1,k=null;function V(d,x){return d.pathname===x.pathname&&d.search===x.search&&d.hash===x.hash}function J(){var d=Pe(),x=s(d);if(d!==x)Ee(x);else{var S=g(),O=$.location;if(!B&&V(O,S)||k===U(S))return;k=null,ie(S)}}function ie(d){if(B)B=!1,R();else{var x="POP";E.confirmTransitionTo(d,x,c,function(S){S?R({action:x,location:d}):ve(d)})}}function ve(d){var x=$.location,S=A.lastIndexOf(U(x));S===-1&&(S=0);var O=A.lastIndexOf(U(d));O===-1&&(O=0);var ue=S-O;ue&&(B=!0,se(ue))}var ae=Pe(),K=s(ae);ae!==K&&Ee(K);var L=g(),A=[U(L)];function G(d){var x=document.querySelector("base"),S="";return x&&x.getAttribute("href")&&(S=ye(window.location.href)),S+"#"+s(f+U(d))}function H(d,x){var S="PUSH",O=j(d,void 0,void 0,$.location);E.confirmTransitionTo(O,S,c,function(ue){if(ue){var ne=U(O),q=s(f+ne),Te=Pe()!==q;if(Te){k=ne,Ce(q);var Ie=A.lastIndexOf(U($.location)),at=A.slice(0,Ie+1);at.push(ne),A=at,R({action:S,location:O})}else R()}})}function X(d,x){var S="REPLACE",O=j(d,void 0,void 0,$.location);E.confirmTransitionTo(O,S,c,function(ue){if(ue){var ne=U(O),q=s(f+ne),Te=Pe()!==q;Te&&(k=ne,Ee(q));var Ie=A.indexOf(U($.location));Ie!==-1&&(A[Ie]=ne),R({action:S,location:O})}})}function se(d){t.go(d)}function be(){se(-1)}function pe(){se(1)}var Z=0;function Le(d){Z+=d,Z===1&&d===1?window.addEventListener(z,J):Z===0&&window.removeEventListener(z,J)}var Se=!1;function ce(d){d===void 0&&(d=!1);var x=E.setPrompt(d);return Se||(Le(1),Se=!0),function(){return Se&&(Se=!1,Le(-1)),x()}}function C(d){var x=E.appendListener(d);return Le(1),function(){Le(-1),x()}}var $={length:t.length,action:"POP",location:L,createHref:G,push:H,replace:X,go:se,goBack:be,goForward:pe,block:ce,listen:C};return $}function Me(e,t,o){return Math.min(Math.max(e,t),o)}function De(e){e===void 0&&(e={});var t=e,o=t.getUserConfirmation,r=t.initialEntries,n=r===void 0?["/"]:r,c=t.initialIndex,a=c===void 0?0:c,l=t.keyLength,f=l===void 0?6:l,u=y();function s(A){(0,_.A)(L,A),L.length=L.entries.length,u.notifyListeners(L.location,L.action)}function m(){return Math.random().toString(36).substr(2,f)}var g=Me(a,0,n.length-1),E=n.map(function(A){return typeof A=="string"?j(A,void 0,m()):j(A,void 0,A.key||m())}),R=U;function B(A,G){var H="PUSH",X=j(A,G,m(),L.location);u.confirmTransitionTo(X,H,o,function(se){if(se){var be=L.index,pe=be+1,Z=L.entries.slice(0);Z.length>pe?Z.splice(pe,Z.length-pe,X):Z.push(X),s({action:H,location:X,index:pe,entries:Z})}})}function k(A,G){var H="REPLACE",X=j(A,G,m(),L.location);u.confirmTransitionTo(X,H,o,function(se){se&&(L.entries[L.index]=X,s({action:H,location:X}))})}function V(A){var G=Me(L.index+A,0,L.entries.length-1),H="POP",X=L.entries[G];u.confirmTransitionTo(X,H,o,function(se){se?s({action:H,location:X,index:G}):s()})}function J(){V(-1)}function ie(){V(1)}function ve(A){var G=L.index+A;return G>=0&&G<L.entries.length}function ae(A){return A===void 0&&(A=!1),u.setPrompt(A)}function K(A){return u.appendListener(A)}var L={length:E.length,action:"POP",location:E[g],index:g,entries:E,createHref:R,push:B,replace:k,go:V,goBack:J,goForward:ie,canGo:ve,block:ae,listen:K};return L}var _e=h("../../node_modules/prop-types/index.js"),$e=h.n(_e),We=1073741823,Je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof h.g<"u"?h.g:{};function st(){var e="__global_unique_id__";return Je[e]=(Je[e]||0)+1}function ct(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ut(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(n){return n!==r})},get:function(){return e},set:function(r,n){e=r,t.forEach(function(c){return c(e,n)})}}}function ft(e){return Array.isArray(e)?e[0]:e}function lt(e,t){var o,r,n="__create-react-context-"+st()+"__",c=function(l){(0,P.A)(f,l);function f(){var s;return s=l.apply(this,arguments)||this,s.emitter=ut(s.props.value),s}var u=f.prototype;return u.getChildContext=function(){var m;return m={},m[n]=this.emitter,m},u.componentWillReceiveProps=function(m){if(this.props.value!==m.value){var g=this.props.value,E=m.value,R;ct(g,E)?R=0:(R=typeof t=="function"?t(g,E):We,R|=0,R!==0&&this.emitter.set(m.value,R))}},u.render=function(){return this.props.children},f}(p.Component);c.childContextTypes=(o={},o[n]=$e().object.isRequired,o);var a=function(l){(0,P.A)(f,l);function f(){var s;return s=l.apply(this,arguments)||this,s.state={value:s.getValue()},s.onUpdate=function(m,g){var E=s.observedBits|0;E&g&&s.setState({value:s.getValue()})},s}var u=f.prototype;return u.componentWillReceiveProps=function(m){var g=m.observedBits;this.observedBits=g??We},u.componentDidMount=function(){this.context[n]&&this.context[n].on(this.onUpdate);var m=this.props.observedBits;this.observedBits=m??We},u.componentWillUnmount=function(){this.context[n]&&this.context[n].off(this.onUpdate)},u.getValue=function(){return this.context[n]?this.context[n].get():e},u.render=function(){return ft(this.props.children)(this.state.value)},f}(p.Component);return a.contextTypes=(r={},r[n]=$e().object,r),{Provider:c,Consumer:a}}var ht=p.createContext||lt,dt=ht,vt=h("../../node_modules/react-router/node_modules/path-to-regexp/index.js"),pt=h.n(vt),Lt=h("../../node_modules/react-router/node_modules/react-is/index.js"),Oe=h("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),St=h("../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),Xe=function(t){var o=dt();return o.displayName=t,o},Qe=Xe("Router-History"),oe=Xe("Router"),Ue=function(e){(0,P.A)(t,e),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:n==="/"}};function t(r){var n;return n=e.call(this,r)||this,n.state={location:r.history.location},n._isMounted=!1,n._pendingLocation=null,r.staticContext||(n.unlisten=r.history.listen(function(c){n._pendingLocation=c})),n}var o=t.prototype;return o.componentDidMount=function(){var n=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(c){n._isMounted&&n.setState({location:c})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},o.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},o.render=function(){return p.createElement(oe.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},p.createElement(Qe.Provider,{children:this.props.children||null,value:this.props.history}))},t}(p.Component),Tt=function(e){(0,P.A)(t,e);function t(){for(var r,n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return r=e.call.apply(e,[this].concat(c))||this,r.history=De(r.props),r}var o=t.prototype;return o.render=function(){return p.createElement(Ue,{history:this.history,children:this.props.children})},t}(p.Component),Ye=function(e){(0,P.A)(t,e);function t(){return e.apply(this,arguments)||this}var o=t.prototype;return o.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},o.componentDidUpdate=function(n){this.props.onUpdate&&this.props.onUpdate.call(this,this,n)},o.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},o.render=function(){return null},t}(p.Component);function $t(e){var t=e.message,o=e.when,r=o===void 0?!0:o;return React.createElement(oe.Consumer,null,function(n){if(n||invariant(!1),!r||n.staticContext)return null;var c=n.history.block;return React.createElement(Ye,{onMount:function(l){l.release=c(t)},onUpdate:function(l,f){f.message!==t&&(l.release(),l.release=c(t))},onUnmount:function(l){l.release()},message:t})})}if(!1)var Mt;var Fe={},mt=1e4,Ze=0;function gt(e){if(Fe[e])return Fe[e];var t=pathToRegexp.compile(e);return Ze<mt&&(Fe[e]=t,Ze++),t}function qe(e,t){return e===void 0&&(e="/"),t===void 0&&(t={}),e==="/"?e:gt(e)(t,{pretty:!0})}function _t(e){var t=e.computedMatch,o=e.to,r=e.push,n=r===void 0?!1:r;return React.createElement(oe.Consumer,null,function(c){c||invariant(!1);var a=c.history,l=c.staticContext,f=n?a.push:a.replace,u=createLocation(t?typeof o=="string"?qe(o,t.params):_extends({},o,{pathname:qe(o.pathname,t.params)}):o);return l?(f(u),null):React.createElement(Ye,{onMount:function(){f(u)},onUpdate:function(m,g){var E=createLocation(g.to);locationsAreEqual(E,_extends({},u,{key:E.key}))||f(u)},to:o})})}var et={},yt=1e4,tt=0;function xt(e,t){var o=""+t.end+t.strict+t.sensitive,r=et[o]||(et[o]={});if(r[e])return r[e];var n=[],c=pt()(e,n,t),a={regexp:c,keys:n};return tt<yt&&(r[e]=a,tt++),a}function He(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var o=t,r=o.path,n=o.exact,c=n===void 0?!1:n,a=o.strict,l=a===void 0?!1:a,f=o.sensitive,u=f===void 0?!1:f,s=[].concat(r);return s.reduce(function(m,g){if(!g&&g!=="")return null;if(m)return m;var E=xt(g,{end:c,strict:l,sensitive:u}),R=E.regexp,B=E.keys,k=R.exec(e);if(!k)return null;var V=k[0],J=k.slice(1),ie=e===V;return c&&!ie?null:{path:g,url:g==="/"&&V===""?"/":V,isExact:ie,params:B.reduce(function(ve,ae,K){return ve[ae.name]=J[K],ve},{})}},null)}function wt(e){return p.Children.count(e)===0}function Ot(e,t,o){var r=e(t);return r||null}var Ut=function(e){(0,P.A)(t,e);function t(){return e.apply(this,arguments)||this}var o=t.prototype;return o.render=function(){var n=this;return p.createElement(oe.Consumer,null,function(c){c||(0,D.A)(!1);var a=n.props.location||c.location,l=n.props.computedMatch?n.props.computedMatch:n.props.path?He(a.pathname,n.props):c.match,f=(0,_.A)({},c,{location:a,match:l}),u=n.props,s=u.children,m=u.component,g=u.render;return Array.isArray(s)&&wt(s)&&(s=null),p.createElement(oe.Provider,{value:f},f.match?s?typeof s=="function"?s(f):s:m?p.createElement(m,f):g?g(f):null:typeof s=="function"?s(f):null)})},t}(p.Component);function ke(e){return e.charAt(0)==="/"?e:"/"+e}function Pt(e,t){return e?(0,_.A)({},t,{pathname:ke(e)+t.pathname}):t}function bt(e,t){if(!e)return t;var o=ke(e);return t.pathname.indexOf(o)!==0?t:(0,_.A)({},t,{pathname:t.pathname.substr(o.length)})}function nt(e){return typeof e=="string"?e:U(e)}function Ke(e){return function(){(0,D.A)(!1)}}function rt(){}var Ht=function(e){(0,P.A)(t,e);function t(){for(var r,n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return r=e.call.apply(e,[this].concat(c))||this,r.handlePush=function(l){return r.navigateTo(l,"PUSH")},r.handleReplace=function(l){return r.navigateTo(l,"REPLACE")},r.handleListen=function(){return rt},r.handleBlock=function(){return rt},r}var o=t.prototype;return o.navigateTo=function(n,c){var a=this.props,l=a.basename,f=l===void 0?"":l,u=a.context,s=u===void 0?{}:u;s.action=c,s.location=Pt(f,j(n)),s.url=nt(s.location)},o.render=function(){var n=this.props,c=n.basename,a=c===void 0?"":c,l=n.context,f=l===void 0?{}:l,u=n.location,s=u===void 0?"/":u,m=(0,Oe.A)(n,["basename","context","location"]),g={createHref:function(R){return ke(a+nt(R))},action:"POP",location:bt(a,j(s)),push:this.handlePush,replace:this.handleReplace,go:Ke("go"),goBack:Ke("goBack"),goForward:Ke("goForward"),listen:this.handleListen,block:this.handleBlock};return p.createElement(Ue,(0,_.A)({},m,{history:g,staticContext:f}))},t}(p.Component),jt=function(e){(0,P.A)(t,e);function t(){return e.apply(this,arguments)||this}var o=t.prototype;return o.render=function(){var n=this;return p.createElement(oe.Consumer,null,function(c){c||(0,D.A)(!1);var a=n.props.location||c.location,l,f;return p.Children.forEach(n.props.children,function(u){if(f==null&&p.isValidElement(u)){l=u;var s=u.props.path||u.props.from;f=s?He(a.pathname,(0,_.A)({},u.props,{path:s})):c.match}}),f?p.cloneElement(l,{location:a,computedMatch:f}):null})},t}(p.Component);function Nt(e){var t="withRouter("+(e.displayName||e.name)+")",o=function(n){var c=n.wrappedComponentRef,a=_objectWithoutPropertiesLoose(n,["wrappedComponentRef"]);return React.createElement(oe.Consumer,null,function(l){return l||invariant(!1),React.createElement(e,_extends({},a,l,{ref:c}))})};return o.displayName=t,o.WrappedComponent=e,hoistStatics(o,e)}var je=p.useContext;function It(){return je(Qe)}function At(){return je(oe).location}function Bt(){var e=je(oe).match;return e?e.params:{}}function Dt(e){var t=At(),o=je(oe).match;return e?He(t.pathname,e):o}if(!1)var Wt,Ft,kt,Kt,Gt;var zt=function(e){(0,P.A)(t,e);function t(){for(var r,n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return r=e.call.apply(e,[this].concat(c))||this,r.history=T(r.props),r}var o=t.prototype;return o.render=function(){return p.createElement(Ue,{history:this.history,children:this.props.children})},t}(p.Component),Vt=function(e){(0,P.A)(t,e);function t(){for(var r,n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return r=e.call.apply(e,[this].concat(c))||this,r.history=Be(r.props),r}var o=t.prototype;return o.render=function(){return p.createElement(Ue,{history:this.history,children:this.props.children})},t}(p.Component),Ge=function(t,o){return typeof t=="function"?t(o):t},ze=function(t,o){return typeof t=="string"?j(t,null,null,o):t},Ve=function(t){return t},Re=p.forwardRef;typeof Re>"u"&&(Re=Ve);function Ct(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Et=Re(function(e,t){var o=e.innerRef,r=e.navigate,n=e.onClick,c=(0,Oe.A)(e,["innerRef","navigate","onClick"]),a=c.target,l=(0,_.A)({},c,{onClick:function(u){try{n&&n(u)}catch(s){throw u.preventDefault(),s}!u.defaultPrevented&&u.button===0&&(!a||a==="_self")&&!Ct(u)&&(u.preventDefault(),r())}});return Ve!==Re?l.ref=t||o:l.ref=o,p.createElement("a",l)}),ot=Re(function(e,t){var o=e.component,r=o===void 0?Et:o,n=e.replace,c=e.to,a=e.innerRef,l=(0,Oe.A)(e,["component","replace","to","innerRef"]);return p.createElement(oe.Consumer,null,function(f){f||(0,D.A)(!1);var u=f.history,s=ze(Ge(c,f.location),f.location),m=s?u.createHref(s):"",g=(0,_.A)({},l,{href:m,navigate:function(){var R=Ge(c,f.location),B=U(f.location)===U(ze(R)),k=n||B?u.replace:u.push;k(R)}});return Ve!==Re?g.ref=t||a:g.innerRef=a,p.createElement(r,g)})});if(!1)var Jt,Xt;var it=function(t){return t},Ne=p.forwardRef;typeof Ne>"u"&&(Ne=it);function Rt(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.filter(function(r){return r}).join(" ")}var Qt=Ne(function(e,t){var o=e["aria-current"],r=o===void 0?"page":o,n=e.activeClassName,c=n===void 0?"active":n,a=e.activeStyle,l=e.className,f=e.exact,u=e.isActive,s=e.location,m=e.sensitive,g=e.strict,E=e.style,R=e.to,B=e.innerRef,k=(0,Oe.A)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return p.createElement(oe.Consumer,null,function(V){V||(0,D.A)(!1);var J=s||V.location,ie=ze(Ge(R,J),J),ve=ie.pathname,ae=ve&&ve.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),K=ae?He(J.pathname,{path:ae,exact:f,sensitive:m,strict:g}):null,L=!!(u?u(K,J):K),A=typeof l=="function"?l(L):l,G=typeof E=="function"?E(L):E;L&&(A=Rt(A,c),G=(0,_.A)({},G,a));var H=(0,_.A)({"aria-current":L&&r||null,className:A,style:G,to:ie},k);return it!==Ne?H.ref=t||B:H.innerRef=B,p.createElement(ot,H)})});if(!1)var Yt},"../../node_modules/react-router/node_modules/isarray/index.js":function(fe){fe.exports=Array.isArray||function(xe){return Object.prototype.toString.call(xe)=="[object Array]"}},"../../node_modules/react-router/node_modules/path-to-regexp/index.js":function(fe,xe,h){var P=h("../../node_modules/react-router/node_modules/isarray/index.js");fe.exports=j,fe.exports.parse=_,fe.exports.compile=Q,fe.exports.tokensToFunction=Y,fe.exports.tokensToRegExp=U;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function _(v,y){for(var w=[],b=0,N=0,i="",W=y&&y.delimiter||"/",M;(M=p.exec(v))!=null;){var de=M[0],I=M[1],F=M.index;if(i+=v.slice(N,F),N=F+de.length,I){i+=I[1];continue}var T=v[N],z=M[2],re=M[3],ye=M[4],Pe=M[5],Ce=M[6],Ee=M[7];i&&(w.push(i),i="");var Be=z!=null&&T!=null&&T!==z,Me=Ce==="+"||Ce==="*",De=Ce==="?"||Ce==="*",_e=M[2]||W,$e=ye||Pe;w.push({name:re||b++,prefix:z||"",delimiter:_e,optional:De,repeat:Me,partial:Be,asterisk:!!Ee,pattern:$e?le($e):Ee?".*":"[^"+D(_e)+"]+?"})}return N<v.length&&(i+=v.substr(N)),i&&w.push(i),w}function Q(v,y){return Y(_(v,y),y)}function ee(v){return encodeURI(v).replace(/[\/?#]/g,function(y){return"%"+y.charCodeAt(0).toString(16).toUpperCase()})}function te(v){return encodeURI(v).replace(/[?#]/g,function(y){return"%"+y.charCodeAt(0).toString(16).toUpperCase()})}function Y(v,y){for(var w=new Array(v.length),b=0;b<v.length;b++)typeof v[b]=="object"&&(w[b]=new RegExp("^(?:"+v[b].pattern+")$",me(y)));return function(N,i){for(var W="",M=N||{},de=i||{},I=de.pretty?ee:encodeURIComponent,F=0;F<v.length;F++){var T=v[F];if(typeof T=="string"){W+=T;continue}var z=M[T.name],re;if(z==null)if(T.optional){T.partial&&(W+=T.prefix);continue}else throw new TypeError('Expected "'+T.name+'" to be defined');if(P(z)){if(!T.repeat)throw new TypeError('Expected "'+T.name+'" to not repeat, but received `'+JSON.stringify(z)+"`");if(z.length===0){if(T.optional)continue;throw new TypeError('Expected "'+T.name+'" to not be empty')}for(var ye=0;ye<z.length;ye++){if(re=I(z[ye]),!w[F].test(re))throw new TypeError('Expected all "'+T.name+'" to match "'+T.pattern+'", but received `'+JSON.stringify(re)+"`");W+=(ye===0?T.prefix:T.delimiter)+re}continue}if(re=T.asterisk?te(z):I(z),!w[F].test(re))throw new TypeError('Expected "'+T.name+'" to match "'+T.pattern+'", but received "'+re+'"');W+=T.prefix+re}return W}}function D(v){return v.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function le(v){return v.replace(/([=!:$\/()])/g,"\\$1")}function he(v,y){return v.keys=y,v}function me(v){return v&&v.sensitive?"":"i"}function ge(v,y){var w=v.source.match(/\((?!\?)/g);if(w)for(var b=0;b<w.length;b++)y.push({name:b,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return he(v,y)}function Ae(v,y,w){for(var b=[],N=0;N<v.length;N++)b.push(j(v[N],y,w).source);var i=new RegExp("(?:"+b.join("|")+")",me(w));return he(i,y)}function we(v,y,w){return U(_(v,w),y,w)}function U(v,y,w){P(y)||(w=y||w,y=[]),w=w||{};for(var b=w.strict,N=w.end!==!1,i="",W=0;W<v.length;W++){var M=v[W];if(typeof M=="string")i+=D(M);else{var de=D(M.prefix),I="(?:"+M.pattern+")";y.push(M),M.repeat&&(I+="(?:"+de+I+")*"),M.optional?M.partial?I=de+"("+I+")?":I="(?:"+de+"("+I+"))?":I=de+"("+I+")",i+=I}}var F=D(w.delimiter||"/"),T=i.slice(-F.length)===F;return b||(i=(T?i.slice(0,-F.length):i)+"(?:"+F+"(?=$))?"),N?i+="$":i+=b&&T?"":"(?="+F+"|$)",he(new RegExp("^"+i,me(w)),y)}function j(v,y,w){return P(y)||(w=y||w,y=[]),w=w||{},v instanceof RegExp?ge(v,y):P(v)?Ae(v,y,w):we(v,y,w)}},"../../node_modules/react-router/node_modules/react-is/cjs/react-is.production.min.js":function(fe,xe){"use strict";var h;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,p=P?Symbol.for("react.element"):60103,_=P?Symbol.for("react.portal"):60106,Q=P?Symbol.for("react.fragment"):60107,ee=P?Symbol.for("react.strict_mode"):60108,te=P?Symbol.for("react.profiler"):60114,Y=P?Symbol.for("react.provider"):60109,D=P?Symbol.for("react.context"):60110,le=P?Symbol.for("react.async_mode"):60111,he=P?Symbol.for("react.concurrent_mode"):60111,me=P?Symbol.for("react.forward_ref"):60112,ge=P?Symbol.for("react.suspense"):60113,Ae=P?Symbol.for("react.suspense_list"):60120,we=P?Symbol.for("react.memo"):60115,U=P?Symbol.for("react.lazy"):60116,j=P?Symbol.for("react.block"):60121,v=P?Symbol.for("react.fundamental"):60117,y=P?Symbol.for("react.responder"):60118,w=P?Symbol.for("react.scope"):60119;function b(i){if(typeof i=="object"&&i!==null){var W=i.$$typeof;switch(W){case p:switch(i=i.type,i){case le:case he:case Q:case te:case ee:case ge:return i;default:switch(i=i&&i.$$typeof,i){case D:case me:case U:case we:case Y:return i;default:return W}}case _:return W}}}function N(i){return b(i)===he}h=le,h=he,h=D,h=Y,h=p,h=me,h=Q,h=U,h=we,h=_,h=te,h=ee,h=ge,h=function(i){return N(i)||b(i)===le},h=N,h=function(i){return b(i)===D},h=function(i){return b(i)===Y},h=function(i){return typeof i=="object"&&i!==null&&i.$$typeof===p},h=function(i){return b(i)===me},h=function(i){return b(i)===Q},h=function(i){return b(i)===U},h=function(i){return b(i)===we},h=function(i){return b(i)===_},h=function(i){return b(i)===te},h=function(i){return b(i)===ee},h=function(i){return b(i)===ge},h=function(i){return typeof i=="string"||typeof i=="function"||i===Q||i===he||i===te||i===ee||i===ge||i===Ae||typeof i=="object"&&i!==null&&(i.$$typeof===U||i.$$typeof===we||i.$$typeof===Y||i.$$typeof===D||i.$$typeof===me||i.$$typeof===v||i.$$typeof===y||i.$$typeof===w||i.$$typeof===j)},h=b},"../../node_modules/react-router/node_modules/react-is/index.js":function(fe,xe,h){"use strict";h("../../node_modules/react-router/node_modules/react-is/cjs/react-is.production.min.js")}}]);