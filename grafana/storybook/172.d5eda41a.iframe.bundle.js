(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[172],{"../../node_modules/@rc-component/portal/es/index.js":function(F,M,e){"use strict";e.d(M,{A:function(){return He}});var i=e("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=e("../../node_modules/react/index.js"),m=e("../../node_modules/react-dom/index.js"),p=e("../../node_modules/rc-util/es/Dom/canUseDom.js"),t=e("../../node_modules/rc-util/es/warning.js"),u=e("../../node_modules/rc-util/es/ref.js"),s=n.createContext(null),h=s,g=e("../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),f=e("../../node_modules/rc-util/es/hooks/useLayoutEffect.js"),E=[];function y(c,o){var d=n.useState(function(){if(!(0,p.A)())return null;var H=document.createElement("div");return H}),C=(0,i.A)(d,1),T=C[0],b=n.useRef(!1),$=n.useContext(h),X=n.useState(E),D=(0,i.A)(X,2),Z=D[0],ue=D[1],le=$||(b.current?void 0:function(H){ue(function(Ae){var ne=[H].concat((0,g.A)(Ae));return ne})});function oe(){T.parentElement||document.body.appendChild(T),b.current=!0}function ee(){var H;(H=T.parentElement)===null||H===void 0||H.removeChild(T),b.current=!1}return(0,f.A)(function(){return c?$?$(oe):oe():ee(),ee},[c]),(0,f.A)(function(){Z.length&&(Z.forEach(function(H){return H()}),ue(E))},[Z]),[T,le]}function x(c,o){if(!c)return!1;if(c.contains)return c.contains(o);for(var d=o;d;){if(d===c)return!0;d=d.parentNode}return!1}var V="data-rc-order",G="data-rc-priority",O="rc-util-key",r=new Map;function Y(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=c.mark;return o?o.startsWith("data-")?o:"data-".concat(o):O}function ce(c){if(c.attachTo)return c.attachTo;var o=document.querySelector("head");return o||document.body}function Te(c){return c==="queue"?"prependQueue":c?"prepend":"append"}function Me(c){return Array.from((r.get(c)||c).children).filter(function(o){return o.tagName==="STYLE"})}function ve(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,p.A)())return null;var d=o.csp,C=o.prepend,T=o.priority,b=T===void 0?0:T,$=Te(C),X=$==="prependQueue",D=document.createElement("style");D.setAttribute(V,$),X&&b&&D.setAttribute(G,"".concat(b)),d!=null&&d.nonce&&(D.nonce=d?.nonce),D.innerHTML=c;var Z=ce(o),ue=Z.firstChild;if(C){if(X){var le=Me(Z).filter(function(oe){if(!["prepend","prependQueue"].includes(oe.getAttribute(V)))return!1;var ee=Number(oe.getAttribute(G)||0);return b>=ee});if(le.length)return Z.insertBefore(D,le[le.length-1].nextSibling),D}Z.insertBefore(D,ue)}else Z.appendChild(D);return D}function me(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=ce(o);return Me(d).find(function(C){return C.getAttribute(Y(o))===c})}function q(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=me(c,o);if(d){var C=ce(o);C.removeChild(d)}}function Ee(c,o){var d=r.get(c);if(!d||!x(document,d)){var C=ve("",o),T=C.parentNode;r.set(c,T),c.removeChild(C)}}function re(){r.clear()}function fe(c,o){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=ce(d);Ee(C,d);var T=me(o,d);if(T){var b,$;if((b=d.csp)!==null&&b!==void 0&&b.nonce&&T.nonce!==(($=d.csp)===null||$===void 0?void 0:$.nonce)){var X;T.nonce=(X=d.csp)===null||X===void 0?void 0:X.nonce}return T.innerHTML!==c&&(T.innerHTML=c),T}var D=ve(c,d);return D.setAttribute(Y(d),o),D}var Ne;function J(c){if(typeof document>"u")return 0;if(c||Ne===void 0){var o=document.createElement("div");o.style.width="100%",o.style.height="200px";var d=document.createElement("div"),C=d.style;C.position="absolute",C.top="0",C.left="0",C.pointerEvents="none",C.visibility="hidden",C.width="200px",C.height="150px",C.overflow="hidden",d.appendChild(o),document.body.appendChild(d);var T=o.offsetWidth;d.style.overflow="scroll";var b=o.offsetWidth;T===b&&(b=d.clientWidth),document.body.removeChild(d),Ne=T-b}return Ne}function de(c){var o=c.match(/^(.*)px$/),d=Number(o?.[1]);return Number.isNaN(d)?J():d}function ge(c){if(typeof document>"u"||!c||!(c instanceof Element))return{width:0,height:0};var o=getComputedStyle(c,"::-webkit-scrollbar"),d=o.width,C=o.height;return{width:de(d),height:de(C)}}function Ie(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Oe="rc-util-locker-".concat(Date.now()),je=0;function Ze(c){var o=!!c,d=n.useState(function(){return je+=1,"".concat(Oe,"_").concat(je)}),C=(0,i.A)(d,1),T=C[0];(0,f.A)(function(){if(o){var b=J(),$=Ie();fe(`
html body {
  overflow-y: hidden;
  `.concat($?"width: calc(100% - ".concat(b,"px);"):"",`
}`),T)}else q(T);return function(){q(T)}},[o,T])}var $e=!1;function Ve(c){return typeof c=="boolean"&&($e=c),$e}var Ke=function(o){return o===!1?!1:!(0,p.A)()||!o?null:typeof o=="string"?document.querySelector(o):typeof o=="function"?o():o},Be=n.forwardRef(function(c,o){var d=c.open,C=c.autoLock,T=c.getContainer,b=c.debug,$=c.autoDestroy,X=$===void 0?!0:$,D=c.children,Z=n.useState(d),ue=(0,i.A)(Z,2),le=ue[0],oe=ue[1],ee=le||d;n.useEffect(function(){(X||d)&&oe(d)},[d,X]);var H=n.useState(function(){return Ke(T)}),Ae=(0,i.A)(H,2),ne=Ae[0],qe=Ae[1];n.useEffect(function(){var l=Ke(T);qe(l??null)});var xe=y(ee&&!ne,b),ke=(0,i.A)(xe,2),Qe=ke[0],en=ke[1],Pe=ne??Qe;Ze(C&&d&&(0,p.A)()&&(Pe===Qe||Pe===document.body));var Ge=null;if(D&&(0,u.f3)(D)&&o){var an=D;Ge=an.ref}var nn=(0,u.xK)(Ge,o);if(!ee||!(0,p.A)()||ne===void 0)return null;var v=Pe===!1||Ve(),a=D;return o&&(a=n.cloneElement(D,{ref:nn})),n.createElement(h.Provider,{value:en},v?a:(0,m.createPortal)(a,Pe))}),Je=Be,He=Je},"../../node_modules/classnames/index.js":function(F,M){var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var n={}.hasOwnProperty;function m(){for(var u="",s=0;s<arguments.length;s++){var h=arguments[s];h&&(u=t(u,p(h)))}return u}function p(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return m.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var s="";for(var h in u)n.call(u,h)&&u[h]&&(s=t(s,h));return s}function t(u,s){return s?u?u+" "+s:u+s:u}F.exports?(m.default=m,F.exports=m):(e=[],i=function(){return m}.apply(M,e),i!==void 0&&(F.exports=i))})()},"../../node_modules/rc-motion/es/index.js":function(F,M,e){"use strict";e.d(M,{A:function(){return nn}});var i=e("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=e("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),m=e("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=e("../../node_modules/@babel/runtime/helpers/esm/typeof.js"),t=e("../../node_modules/react/index.js"),u=e("../../node_modules/rc-util/es/Dom/findDOMNode.js"),s=e("../../node_modules/rc-util/es/ref.js"),h=e("../../node_modules/classnames/index.js"),g=e.n(h),f=e("../../node_modules/rc-util/es/Dom/canUseDom.js");function E(v,a){var l={};return l[v.toLowerCase()]=a.toLowerCase(),l["Webkit".concat(v)]="webkit".concat(a),l["Moz".concat(v)]="moz".concat(a),l["ms".concat(v)]="MS".concat(a),l["O".concat(v)]="o".concat(a.toLowerCase()),l}function y(v,a){var l={animationend:E("Animation","AnimationEnd"),transitionend:E("Transition","TransitionEnd")};return v&&("AnimationEvent"in a||delete l.animationend.animation,"TransitionEvent"in a||delete l.transitionend.transition),l}var x=y((0,f.A)(),typeof window<"u"?window:{}),V={};if((0,f.A)()){var G=document.createElement("div");V=G.style}var O={};function r(v){if(O[v])return O[v];var a=x[v];if(a)for(var l=Object.keys(a),A=l.length,S=0;S<A;S+=1){var N=l[S];if(Object.prototype.hasOwnProperty.call(a,N)&&N in V)return O[v]=a[N],O[v]}return""}var Y=r("animationend"),ce=r("transitionend"),Te=!!(Y&&ce),Me=Y||"animationend",ve=ce||"transitionend";function me(v,a){if(!v)return null;if((0,p.A)(v)==="object"){var l=a.replace(/-\w/g,function(A){return A[1].toUpperCase()});return v[l]}return"".concat(v,"-").concat(a)}var q="none",Ee="appear",re="enter",fe="leave",Ne="none",J="prepare",de="start",ge="active",Ie="end",Oe=e("../../node_modules/rc-util/es/hooks/useState.js"),je=e("../../node_modules/rc-util/es/raf.js"),Ze=function(){var v=t.useRef(null);function a(){je.A.cancel(v.current)}function l(A){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;a();var N=(0,je.A)(function(){S<=1?A({isCanceled:function(){return N!==v.current}}):l(A,S-1)});v.current=N}return t.useEffect(function(){return function(){a()}},[]),[l,a]},$e=(0,f.A)()?t.useLayoutEffect:t.useEffect,Ve=$e,Ke=[J,de,ge,Ie],Be=!1,Je=!0;function He(v){return v===ge||v===Ie}var c=function(v,a){var l=(0,Oe.A)(Ne),A=(0,m.A)(l,2),S=A[0],N=A[1],_=Ze(),I=(0,m.A)(_,2),B=I[0],R=I[1];function P(){N(J,!0)}return Ve(function(){if(S!==Ne&&S!==Ie){var L=Ke.indexOf(S),U=Ke[L+1],j=a(S);j===Be?N(U,!0):B(function(k){function ae(){k.isCanceled()||N(U,!0)}j===!0?ae():Promise.resolve(j).then(ae)})}},[v,S]),t.useEffect(function(){return function(){R()}},[]),[P,S]},o=function(v){var a=(0,t.useRef)(),l=(0,t.useRef)(v);l.current=v;var A=t.useCallback(function(_){l.current(_)},[]);function S(_){_&&(_.removeEventListener(ve,A),_.removeEventListener(Me,A))}function N(_){a.current&&a.current!==_&&S(a.current),_&&_!==a.current&&(_.addEventListener(ve,A),_.addEventListener(Me,A),a.current=_)}return t.useEffect(function(){return function(){S(a.current)}},[]),[N,S]};function d(v,a,l,A){var S=A.motionEnter,N=S===void 0?!0:S,_=A.motionAppear,I=_===void 0?!0:_,B=A.motionLeave,R=B===void 0?!0:B,P=A.motionDeadline,L=A.motionLeaveImmediately,U=A.onAppearPrepare,j=A.onEnterPrepare,k=A.onLeavePrepare,ae=A.onAppearStart,ie=A.onEnterStart,te=A.onLeaveStart,Le=A.onAppearActive,pe=A.onEnterActive,Se=A.onLeaveActive,he=A.onAppearEnd,se=A.onEnterEnd,Re=A.onLeaveEnd,Ce=A.onVisibleChanged,Ye=(0,Oe.A)(),ye=(0,m.A)(Ye,2),K=ye[0],De=ye[1],Ue=(0,Oe.A)(q),_e=(0,m.A)(Ue,2),Q=_e[0],Fe=_e[1],We=(0,Oe.A)(null),sn=(0,m.A)(We,2),vn=sn[0],cn=sn[1],tn=(0,t.useRef)(!1),rn=(0,t.useRef)(null);function ze(){return l()}var fn=(0,t.useRef)(!1);function dn(W){var w=ze();if(!(W&&!W.deadline&&W.target!==w)){var z=fn.current,Xe;Q===Ee&&z?Xe=he?.(w,W):Q===re&&z?Xe=se?.(w,W):Q===fe&&z&&(Xe=Re?.(w,W)),Q!==q&&z&&Xe!==!1&&(Fe(q,!0),cn(null,!0))}}var mn=o(dn),En=(0,m.A)(mn,1),An=En[0],we=t.useMemo(function(){var W,w,z;switch(Q){case Ee:return W={},(0,i.A)(W,J,U),(0,i.A)(W,de,ae),(0,i.A)(W,ge,Le),W;case re:return w={},(0,i.A)(w,J,j),(0,i.A)(w,de,ie),(0,i.A)(w,ge,pe),w;case fe:return z={},(0,i.A)(z,J,k),(0,i.A)(z,de,te),(0,i.A)(z,ge,Se),z;default:return{}}},[Q]),pn=c(Q,function(W){if(W===J){var w=we[J];return w?w(ze()):Be}if(be in we){var z;cn(((z=we[be])===null||z===void 0?void 0:z.call(we,ze(),null))||null)}return be===ge&&(An(ze()),P>0&&(clearTimeout(rn.current),rn.current=setTimeout(function(){dn({deadline:!0})},P))),Je}),ln=(0,m.A)(pn,2),Sn=ln[0],be=ln[1],hn=He(be);fn.current=hn,Ve(function(){De(a);var W=tn.current;if(tn.current=!0,!!v){var w;!W&&a&&I&&(w=Ee),W&&a&&N&&(w=re),(W&&!a&&R||!W&&L&&!a&&R)&&(w=fe),w&&(Fe(w),Sn())}},[a]),(0,t.useEffect)(function(){(Q===Ee&&!I||Q===re&&!N||Q===fe&&!R)&&Fe(q)},[I,N,R]),(0,t.useEffect)(function(){return function(){tn.current=!1,clearTimeout(rn.current)}},[]);var un=t.useRef(!1);(0,t.useEffect)(function(){K&&(un.current=!0),K!==void 0&&Q===q&&((un.current||K)&&Ce?.(K),un.current=!0)},[K,Q]);var on=vn;return we[J]&&be===de&&(on=(0,n.A)({transition:"none"},on)),[Q,be,on,K??a]}var C=e("../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),T=e("../../node_modules/@babel/runtime/helpers/esm/createClass.js"),b=e("../../node_modules/@babel/runtime/helpers/esm/inherits.js"),$=e("../../node_modules/@babel/runtime/helpers/esm/createSuper.js"),X=function(v){(0,b.A)(l,v);var a=(0,$.A)(l);function l(){return(0,C.A)(this,l),a.apply(this,arguments)}return(0,T.A)(l,[{key:"render",value:function(){return this.props.children}}]),l}(t.Component),D=X;function Z(v){var a=v;(0,p.A)(v)==="object"&&(a=v.transitionSupport);function l(S){return!!(S.motionName&&a)}var A=t.forwardRef(function(S,N){var _=S.visible,I=_===void 0?!0:_,B=S.removeOnLeave,R=B===void 0?!0:B,P=S.forceRender,L=S.children,U=S.motionName,j=S.leavedClassName,k=S.eventProps,ae=l(S),ie=(0,t.useRef)(),te=(0,t.useRef)();function Le(){try{return ie.current instanceof HTMLElement?ie.current:(0,u.A)(te.current)}catch{return null}}var pe=d(ae,I,Le,S),Se=(0,m.A)(pe,4),he=Se[0],se=Se[1],Re=Se[2],Ce=Se[3],Ye=t.useRef(Ce);Ce&&(Ye.current=!0);var ye=t.useCallback(function(We){ie.current=We,(0,s.Xf)(N,We)},[N]),K,De=(0,n.A)((0,n.A)({},k),{},{visible:I});if(!L)K=null;else if(he===q||!l(S))Ce?K=L((0,n.A)({},De),ye):!R&&Ye.current?K=L((0,n.A)((0,n.A)({},De),{},{className:j}),ye):P?K=L((0,n.A)((0,n.A)({},De),{},{style:{display:"none"}}),ye):K=null;else{var Ue,_e;se===J?_e="prepare":He(se)?_e="active":se===de&&(_e="start"),K=L((0,n.A)((0,n.A)({},De),{},{className:g()(me(U,he),(Ue={},(0,i.A)(Ue,me(U,"".concat(he,"-").concat(_e)),_e),(0,i.A)(Ue,U,typeof U=="string"),Ue)),style:Re}),ye)}if(t.isValidElement(K)&&(0,s.f3)(K)){var Q=K,Fe=Q.ref;Fe||(K=t.cloneElement(K,{ref:ye}))}return t.createElement(D,{ref:te},K)});return A.displayName="CSSMotion",A}var ue=Z(Te),le=e("../../node_modules/@babel/runtime/helpers/esm/extends.js"),oe=e("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ee="add",H="keep",Ae="remove",ne="removed";function qe(v){var a;return v&&(0,p.A)(v)==="object"&&"key"in v?a=v:a={key:v},(0,n.A)((0,n.A)({},a),{},{key:String(a.key)})}function xe(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return v.map(qe)}function ke(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=[],A=0,S=a.length,N=xe(v),_=xe(a);N.forEach(function(R){for(var P=!1,L=A;L<S;L+=1){var U=_[L];if(U.key===R.key){A<L&&(l=l.concat(_.slice(A,L).map(function(j){return(0,n.A)((0,n.A)({},j),{},{status:ee})})),A=L),l.push((0,n.A)((0,n.A)({},U),{},{status:H})),A+=1,P=!0;break}}P||l.push((0,n.A)((0,n.A)({},R),{},{status:Ae}))}),A<S&&(l=l.concat(_.slice(A).map(function(R){return(0,n.A)((0,n.A)({},R),{},{status:ee})})));var I={};l.forEach(function(R){var P=R.key;I[P]=(I[P]||0)+1});var B=Object.keys(I).filter(function(R){return I[R]>1});return B.forEach(function(R){l=l.filter(function(P){var L=P.key,U=P.status;return L!==R||U!==Ae}),l.forEach(function(P){P.key===R&&(P.status=H)})}),l}var Qe=["component","children","onVisibleChanged","onAllRemoved"],en=["status"],Pe=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function Ge(v){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ue,l=function(A){(0,b.A)(N,A);var S=(0,$.A)(N);function N(){var _;(0,C.A)(this,N);for(var I=arguments.length,B=new Array(I),R=0;R<I;R++)B[R]=arguments[R];return _=S.call.apply(S,[this].concat(B)),_.state={keyEntities:[]},_.removeKey=function(P){var L=_.state.keyEntities,U=L.map(function(j){return j.key!==P?j:(0,n.A)((0,n.A)({},j),{},{status:ne})});return _.setState({keyEntities:U}),U.filter(function(j){var k=j.status;return k!==ne}).length},_}return(0,T.A)(N,[{key:"render",value:function(){var I=this,B=this.state.keyEntities,R=this.props,P=R.component,L=R.children,U=R.onVisibleChanged,j=R.onAllRemoved,k=(0,oe.A)(R,Qe),ae=P||t.Fragment,ie={};return Pe.forEach(function(te){ie[te]=k[te],delete k[te]}),delete k.keys,t.createElement(ae,k,B.map(function(te){var Le=te.status,pe=(0,oe.A)(te,en),Se=Le===ee||Le===H;return t.createElement(a,(0,le.A)({},ie,{key:pe.key,visible:Se,eventProps:pe,onVisibleChanged:function(se){if(U?.(se,{key:pe.key}),!se){var Re=I.removeKey(pe.key);Re===0&&j&&j()}}}),L)}))}}],[{key:"getDerivedStateFromProps",value:function(I,B){var R=I.keys,P=B.keyEntities,L=xe(R),U=ke(P,L);return{keyEntities:U.filter(function(j){var k=P.find(function(ae){var ie=ae.key;return j.key===ie});return!(k&&k.status===ne&&j.status===Ae)})}}}]),N}(t.Component);return l.defaultProps={component:"div"},l}var an=Ge(Te),nn=ue},"../../node_modules/rc-util/es/Dom/canUseDom.js":function(F,M,e){"use strict";e.d(M,{A:function(){return i}});function i(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},"../../node_modules/rc-util/es/Dom/findDOMNode.js":function(F,M,e){"use strict";e.d(M,{A:function(){return p},f:function(){return m}});var i=e("../../node_modules/react/index.js"),n=e("../../node_modules/react-dom/index.js");function m(t){return t instanceof HTMLElement||t instanceof SVGElement}function p(t){return m(t)?t:t instanceof i.Component?n.findDOMNode(t):null}},"../../node_modules/rc-util/es/KeyCode.js":function(F,M){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var m=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||m>=e.F1&&m<=e.F12)return!1;switch(m){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=e.ZERO&&n<=e.NINE||n>=e.NUM_ZERO&&n<=e.NUM_MULTIPLY||n>=e.A&&n<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};M.A=e},"../../node_modules/rc-util/es/hooks/useEvent.js":function(F,M,e){"use strict";e.d(M,{A:function(){return n}});var i=e("../../node_modules/react/index.js");function n(m){var p=i.useRef();p.current=m;var t=i.useCallback(function(){for(var u,s=arguments.length,h=new Array(s),g=0;g<s;g++)h[g]=arguments[g];return(u=p.current)===null||u===void 0?void 0:u.call.apply(u,[p].concat(h))},[]);return t}},"../../node_modules/rc-util/es/hooks/useLayoutEffect.js":function(F,M,e){"use strict";e.d(M,{o:function(){return t}});var i=e("../../node_modules/react/index.js"),n=e("../../node_modules/rc-util/es/Dom/canUseDom.js"),m=(0,n.A)()?i.useLayoutEffect:i.useEffect,p=function(s,h){var g=i.useRef(!0);m(function(){return s(g.current)},h),m(function(){return g.current=!1,function(){g.current=!0}},[])},t=function(s,h){p(function(g){if(!g)return s()},h)};M.A=p},"../../node_modules/rc-util/es/hooks/useMemo.js":function(F,M,e){"use strict";e.d(M,{A:function(){return n}});var i=e("../../node_modules/react/index.js");function n(m,p,t){var u=i.useRef({});return(!("value"in u.current)||t(u.current.condition,p))&&(u.current.value=m(),u.current.condition=p),u.current.value}},"../../node_modules/rc-util/es/hooks/useMergedState.js":function(F,M,e){"use strict";e.d(M,{A:function(){return u}});var i=e("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=e("../../node_modules/rc-util/es/hooks/useEvent.js"),m=e("../../node_modules/rc-util/es/hooks/useLayoutEffect.js"),p=e("../../node_modules/rc-util/es/hooks/useState.js");function t(s){return s!==void 0}function u(s,h){var g=h||{},f=g.defaultValue,E=g.value,y=g.onChange,x=g.postState,V=(0,p.A)(function(){return t(E)?E:t(f)?typeof f=="function"?f():f:typeof s=="function"?s():s}),G=(0,i.A)(V,2),O=G[0],r=G[1],Y=E!==void 0?E:O,ce=x?x(Y):Y,Te=(0,n.A)(y),Me=(0,p.A)([Y]),ve=(0,i.A)(Me,2),me=ve[0],q=ve[1];(0,m.o)(function(){var re=me[0];O!==re&&Te(O,re)},[me]),(0,m.o)(function(){t(E)||r(E)},[E]);var Ee=(0,n.A)(function(re,fe){r(re,fe),q([Y],fe)});return[ce,Ee]}},"../../node_modules/rc-util/es/hooks/useState.js":function(F,M,e){"use strict";e.d(M,{A:function(){return m}});var i=e("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=e("../../node_modules/react/index.js");function m(p){var t=n.useRef(!1),u=n.useState(p),s=(0,i.A)(u,2),h=s[0],g=s[1];n.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function f(E,y){y&&t.current||g(E)}return[h,f]}},"../../node_modules/rc-util/es/raf.js":function(F,M){"use strict";var e=function(s){return+setTimeout(s,16)},i=function(s){return clearTimeout(s)};typeof window<"u"&&"requestAnimationFrame"in window&&(e=function(s){return window.requestAnimationFrame(s)},i=function(s){return window.cancelAnimationFrame(s)});var n=0,m=new Map;function p(u){m.delete(u)}var t=function(s){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;n+=1;var g=n;function f(E){if(E===0)p(g),s();else{var y=e(function(){f(E-1)});m.set(g,y)}}return f(h),g};t.cancel=function(u){var s=m.get(u);return p(s),i(s)},M.A=t},"../../node_modules/rc-util/es/ref.js":function(F,M,e){"use strict";e.d(M,{K4:function(){return u},Xf:function(){return t},f3:function(){return h},xK:function(){return s}});var i=e("../../node_modules/@babel/runtime/helpers/esm/typeof.js"),n=e("../../node_modules/react/index.js"),m=e("../../node_modules/react-is/index.js"),p=e("../../node_modules/rc-util/es/hooks/useMemo.js");function t(f,E){typeof f=="function"?f(E):(0,i.A)(f)==="object"&&f&&"current"in f&&(f.current=E)}function u(){for(var f=arguments.length,E=new Array(f),y=0;y<f;y++)E[y]=arguments[y];var x=E.filter(function(V){return V});return x.length<=1?x[0]:function(V){E.forEach(function(G){t(G,V)})}}function s(){for(var f=arguments.length,E=new Array(f),y=0;y<f;y++)E[y]=arguments[y];return(0,p.A)(function(){return u.apply(void 0,E)},E,function(x,V){return x.length!==V.length||x.every(function(G,O){return G!==V[O]})})}function h(f){var E,y,x=(0,m.isMemo)(f)?f.type.type:f.type;return!(typeof x=="function"&&!((E=x.prototype)!==null&&E!==void 0&&E.render)||typeof f=="function"&&!((y=f.prototype)!==null&&y!==void 0&&y.render))}function g(f){return!isValidElement(f)||isFragment(f)?!1:h(f)}},"../../node_modules/rc-util/es/warning.js":function(F,M,e){"use strict";e.d(M,{$e:function(){return p}});var i={},n=[],m=function(E){n.push(E)};function p(f,E){if(!1)var y}function t(f,E){if(!1)var y}function u(){i={}}function s(f,E,y){!E&&!i[y]&&(f(!1,y),i[y]=!0)}function h(f,E){s(p,f,E)}function g(f,E){s(t,f,E)}h.preMessage=m,h.resetWarned=u,h.noteOnce=g,M.Ay=h},"../../node_modules/react-is/cjs/react-is.production.min.js":function(F,M){"use strict";var e;/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),t=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),h=Symbol.for("react.server_context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),G;G=Symbol.for("react.module.reference");function O(r){if(typeof r=="object"&&r!==null){var Y=r.$$typeof;switch(Y){case i:switch(r=r.type,r){case m:case t:case p:case f:case E:return r;default:switch(r=r&&r.$$typeof,r){case h:case s:case g:case x:case y:case u:return r;default:return Y}}case n:return Y}}}e=s,e=u,e=i,e=g,e=m,e=x,e=y,e=n,e=t,e=p,e=f,e=E,e=function(){return!1},e=function(){return!1},e=function(r){return O(r)===s},e=function(r){return O(r)===u},e=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===i},e=function(r){return O(r)===g},M.isFragment=function(r){return O(r)===m},e=function(r){return O(r)===x},M.isMemo=function(r){return O(r)===y},e=function(r){return O(r)===n},e=function(r){return O(r)===t},e=function(r){return O(r)===p},e=function(r){return O(r)===f},e=function(r){return O(r)===E},e=function(r){return typeof r=="string"||typeof r=="function"||r===m||r===t||r===p||r===f||r===E||r===V||typeof r=="object"&&r!==null&&(r.$$typeof===x||r.$$typeof===y||r.$$typeof===u||r.$$typeof===s||r.$$typeof===g||r.$$typeof===G||r.getModuleId!==void 0)},e=O},"../../node_modules/react-is/index.js":function(F,M,e){"use strict";F.exports=e("../../node_modules/react-is/cjs/react-is.production.min.js")}}]);