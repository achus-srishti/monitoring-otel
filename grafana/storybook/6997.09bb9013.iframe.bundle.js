"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6997],{"../../node_modules/@storybook/components/dist/OverlayScrollbars-GZGLA7DL.mjs":function(Xn,vr,$t){$t.r(vr),$t.d(vr,{OverlayScrollbars:function(){return Nn},default:function(){return Vn}});var ee=$t("../../node_modules/react/index.js");function B(e,t){if(ot(e))for(let r=0;r<e.length&&t(e[r],r,e)!==!1;r++);else e&&B(Object.keys(e),r=>t(e[r],r,e));return e}function re(e,t){let r=Re(t);if(me(t)||r){let l=r?"":{};if(e){let n=window.getComputedStyle(e,null);l=r?Ar(e,n,t):t.reduce((o,i)=>(o[i]=Ar(e,n,i),o),l)}return l}e&&B(ue(t),l=>Rl(e,l,t[l]))}var he=(e,t)=>{let{o:r,u:l,_:n}=e,o=r,i,s=(a,c)=>{let d=o,f=a,p=c||(l?!l(d,f):d!==f);return(p||n)&&(o=f,i=d),[o,p,i]};return[t?a=>s(t(o,i),a):s,a=>[o,!!a,i]]},Ge=()=>typeof window<"u",hr=Ge()&&Node.ELEMENT_NODE,{toString:ml,hasOwnProperty:Lt}=Object.prototype,Ee=e=>e===void 0,it=e=>e===null,wl=e=>Ee(e)||it(e)?`${e}`:ml.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),ze=e=>typeof e=="number",Re=e=>typeof e=="string",At=e=>typeof e=="boolean",ge=e=>typeof e=="function",me=e=>Array.isArray(e),Qe=e=>typeof e=="object"&&!me(e)&&!it(e),ot=e=>{let t=!!e&&e.length,r=ze(t)&&t>-1&&t%1==0;return me(e)||!ge(e)&&r?t>0&&Qe(e)?t-1 in e:!0:!1},Pt=e=>{if(!e||!Qe(e)||wl(e)!=="object")return!1;let t,r="constructor",l=e[r],n=l&&l.prototype,o=Lt.call(e,r),i=n&&Lt.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(t in e);return Ee(t)||Lt.call(e,t)},at=e=>{let t=HTMLElement;return e?t?e instanceof t:e.nodeType===hr:!1},st=e=>{let t=Element;return e?t?e instanceof t:e.nodeType===hr:!1},Ht=(e,t,r)=>e.indexOf(t,r),W=(e,t,r)=>(!r&&!Re(t)&&ot(t)?Array.prototype.push.apply(e,t):e.push(t),e),Be=e=>{let t=Array.from,r=[];return t&&e?t(e):(e instanceof Set?e.forEach(l=>{W(r,l)}):B(e,l=>{W(r,l)}),r)},It=e=>!!e&&e.length===0,Se=(e,t,r)=>{B(e,l=>l&&l.apply(void 0,t||[])),!r&&(e.length=0)},ct=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),ue=e=>e?Object.keys(e):[],U=(e,t,r,l,n,o,i)=>{let s=[t,r,l,n,o,i];return(typeof e!="object"||it(e))&&!ge(e)&&(e={}),B(s,a=>{B(ue(a),c=>{let d=a[c];if(e===d)return!0;let f=me(d);if(d&&(Pt(d)||f)){let p=e[c],u=p;f&&!me(p)?u=[]:!f&&!Pt(p)&&(u={}),e[c]=U(u,d)}else e[c]=d})}),e},zt=e=>{for(let t in e)return!1;return!0},gr=(e,t,r,l)=>{if(Ee(l))return r?r[e]:t;r&&(Re(l)||ze(l))&&(r[e]=l)},le=(e,t,r)=>{if(Ee(r))return e?e.getAttribute(t):null;e&&e.setAttribute(t,r)},ae=(e,t)=>{e&&e.removeAttribute(t)},De=(e,t,r,l)=>{if(r){let n=le(e,t)||"",o=new Set(n.split(" "));o[l?"add":"delete"](r);let i=Be(o).join(" ").trim();le(e,t,i)}},yl=(e,t,r)=>{let l=le(e,t)||"";return new Set(l.split(" ")).has(r)},we=(e,t)=>gr("scrollLeft",0,e,t),$e=(e,t)=>gr("scrollTop",0,e,t),Rt=Ge()&&Element.prototype,mr=(e,t)=>{let r=[],l=t?st(t)?t:null:document;return l?W(r,l.querySelectorAll(e)):r},Sl=(e,t)=>{let r=t?st(t)?t:null:document;return r?r.querySelector(e):null},dt=(e,t)=>st(e)?(Rt.matches||Rt.msMatchesSelector).call(e,t):!1,kt=e=>e?Be(e.childNodes):[],Le=e=>e?e.parentElement:null,Xe=(e,t)=>{if(st(e)){let r=Rt.closest;if(r)return r.call(e,t);do{if(dt(e,t))return e;e=Le(e)}while(e)}return null},xl=(e,t,r)=>{let l=e&&Xe(e,t),n=e&&Sl(r,l),o=Xe(n,t)===l;return l&&n?l===e||n===e||o&&Xe(Xe(e,r),t)!==l:!1},Mt=(e,t,r)=>{if(r&&e){let l=t,n;ot(r)?(n=document.createDocumentFragment(),B(r,o=>{o===l&&(l=o.previousSibling),n.appendChild(o)})):n=r,t&&(l?l!==t&&(l=l.nextSibling):l=e.firstChild),e.insertBefore(n,l||null)}},pe=(e,t)=>{Mt(e,null,t)},Ol=(e,t)=>{Mt(Le(e),e,t)},wr=(e,t)=>{Mt(Le(e),e&&e.nextSibling,t)},xe=e=>{if(ot(e))B(Be(e),t=>xe(t));else if(e){let t=Le(e);t&&t.removeChild(e)}},Ne=e=>{let t=document.createElement("div");return e&&le(t,"class",e),t},yr=e=>{let t=Ne();return t.innerHTML=e.trim(),B(kt(t),r=>xe(r))},Tt=e=>e.charAt(0).toUpperCase()+e.slice(1),Cl=()=>Ne().style,El=["-webkit-","-moz-","-o-","-ms-"],$l=["WebKit","Moz","O","MS","webkit","moz","o","ms"],_t={},Bt={},Ll=e=>{let t=Bt[e];if(ct(Bt,e))return t;let r=Tt(e),l=Cl();return B(El,n=>{let o=n.replace(/-/g,"");return!(t=[e,n+e,o+r,Tt(o)+r].find(i=>l[i]!==void 0))}),Bt[e]=t||""},et=e=>{if(Ge()){let t=_t[e]||window[e];return ct(_t,e)||(B($l,r=>(t=t||window[r+Tt(e)],!t)),_t[e]=t),t}},Al=et("MutationObserver"),Sr=et("IntersectionObserver"),qe=et("ResizeObserver"),xr=et("cancelAnimationFrame"),Or=et("requestAnimationFrame"),ut=Ge()&&window.setTimeout,Dt=Ge()&&window.clearTimeout,Pl=/[^\x20\t\r\n\f]+/g,Cr=(e,t,r)=>{let l=e&&e.classList,n,o=0,i=!1;if(l&&t&&Re(t)){let s=t.match(Pl)||[];for(i=s.length>0;n=s[o++];)i=!!r(l,n)&&i}return i},Nt=(e,t)=>{Cr(e,t,(r,l)=>r.remove(l))},Ae=(e,t)=>(Cr(e,t,(r,l)=>r.add(l)),Nt.bind(0,e,t)),ft=(e,t,r,l)=>{if(e&&t){let n=!0;return B(r,o=>{let i=l?l(e[o]):e[o],s=l?l(t[o]):t[o];i!==s&&(n=!1)}),n}return!1},Er=(e,t)=>ft(e,t,["w","h"]),$r=(e,t)=>ft(e,t,["x","y"]),Hl=(e,t)=>ft(e,t,["t","r","b","l"]),Lr=(e,t,r)=>ft(e,t,["width","height"],r&&(l=>Math.round(l))),be=()=>{},We=e=>{let t,r=e?ut:Or,l=e?Dt:xr;return[n=>{l(t),t=r(n,ge(e)?e():e)},()=>l(t)]},Vt=(e,t)=>{let r,l,n,o=be,{v:i,g:s,p:a}=t||{},c=function(u){o(),Dt(r),r=l=void 0,o=be,e.apply(this,u)},d=u=>a&&l?a(l,u):u,f=()=>{o!==be&&c(d(n)||n)},p=function(){let u=Be(arguments),v=ge(i)?i():i;if(ze(v)&&v>=0){let C=ge(s)?s():s,P=ze(C)&&C>=0,$=v>0?ut:Or,g=v>0?Dt:xr,y=d(u)||u,A=c.bind(0,y);o();let H=$(A,v);o=()=>g(H),P&&!r&&(r=ut(f,C)),l=n=y}else c(u)};return p.m=f,p},Il={opacity:1,zindex:1},pt=(e,t)=>{let r=t?parseFloat(e):parseInt(e,10);return r===r?r:0},zl=(e,t)=>!Il[e.toLowerCase()]&&ze(t)?`${t}px`:t,Ar=(e,t,r)=>t!=null?t[r]||t.getPropertyValue(r):e.style[r],Rl=(e,t,r)=>{try{let{style:l}=e;Ee(l[t])?l.setProperty(t,r):l[t]=zl(t,r)}catch{}},tt=e=>re(e,"direction")==="rtl",Pr=(e,t,r)=>{let l=t?`${t}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,s=`${l}bottom${n}`,a=`${l}left${n}`,c=re(e,[o,i,s,a]);return{t:pt(c[o],!0),r:pt(c[i],!0),b:pt(c[s],!0),l:pt(c[a],!0)}},{round:Hr}=Math,Ft={w:0,h:0},rt=e=>e?{w:e.offsetWidth,h:e.offsetHeight}:Ft,bt=e=>e?{w:e.clientWidth,h:e.clientHeight}:Ft,vt=e=>e?{w:e.scrollWidth,h:e.scrollHeight}:Ft,ht=e=>{let t=parseFloat(re(e,"height"))||0,r=parseFloat(re(e,"width"))||0;return{w:r-Hr(r),h:t-Hr(t)}},Oe=e=>e.getBoundingClientRect(),gt,kl=()=>{if(Ee(gt)){gt=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){gt=!0}}))}catch{}}return gt},Ir=e=>e.split(" "),Ml=(e,t,r,l)=>{B(Ir(t),n=>{e.removeEventListener(n,r,l)})},G=(e,t,r,l)=>{var n;let o=kl(),i=(n=o&&l&&l.S)!=null?n:o,s=l&&l.$||!1,a=l&&l.C||!1,c=[],d=o?{passive:i,capture:s}:s;return B(Ir(t),f=>{let p=a?u=>{e.removeEventListener(f,p,s),r&&r(u)}:r;W(c,Ml.bind(null,e,f,p,s)),e.addEventListener(f,p,d)}),Se.bind(0,c)},zr=e=>e.stopPropagation(),Rr=e=>e.preventDefault(),Tl={x:0,y:0},jt=e=>{let t=e?Oe(e):0;return t?{x:t.left+window.pageYOffset,y:t.top+window.pageXOffset}:Tl},kr=(e,t)=>{B(me(t)?t:[t],e)},Xt=e=>{let t=new Map,r=(o,i)=>{if(o){let s=t.get(o);kr(a=>{s&&s[a?"delete":"clear"](a)},i)}else t.forEach(s=>{s.clear()}),t.clear()},l=(o,i)=>{if(Re(o)){let c=t.get(o)||new Set;return t.set(o,c),kr(d=>{ge(d)&&c.add(d)},i),r.bind(0,o,i)}At(i)&&i&&r();let s=ue(o),a=[];return B(s,c=>{let d=o[c];d&&W(a,l(c,d))}),Se.bind(0,a)},n=(o,i)=>{let s=t.get(o);B(Be(s),a=>{i&&!It(i)?a.apply(0,i):a()})};return l(e||{}),[l,r,n]},Mr=e=>JSON.stringify(e,(t,r)=>{if(ge(r))throw new Error;return r}),_l={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Tr=(e,t)=>{let r={},l=ue(t).concat(ue(e));return B(l,n=>{let o=e[n],i=t[n];if(Qe(o)&&Qe(i))U(r[n]={},Tr(o,i)),zt(r[n])&&delete r[n];else if(ct(t,n)&&i!==o){let s=!0;if(me(o)||me(i))try{Mr(o)===Mr(i)&&(s=!1)}catch{}s&&(r[n]=i)}}),r},_r="os-environment",Br=`${_r}-flexbox-glue`,Bl=`${Br}-max`,Dr="os-scrollbar-hidden",qt="data-overlayscrollbars-initialize",ye="data-overlayscrollbars",Nr=`${ye}-overflow-x`,Vr=`${ye}-overflow-y`,Ue="overflowVisible",Dl="scrollbarHidden",Fr="scrollbarPressed",mt="updating",ke="data-overlayscrollbars-viewport",Wt="arrange",jr="scrollbarHidden",Ke=Ue,Ut="data-overlayscrollbars-padding",Nl=Ke,Xr="data-overlayscrollbars-content",Kt="os-size-observer",Vl=`${Kt}-appear`,Fl=`${Kt}-listener`,jl="os-trinsic-observer",Xl="os-no-css-vars",ql="os-theme-none",se="os-scrollbar",Wl=`${se}-rtl`,Ul=`${se}-horizontal`,Kl=`${se}-vertical`,qr=`${se}-track`,Jt=`${se}-handle`,Jl=`${se}-visible`,Yl=`${se}-cornerless`,Wr=`${se}-transitionless`,Ur=`${se}-interaction`,Kr=`${se}-unusable`,Jr=`${se}-auto-hidden`,Yr=`${se}-wheel`,Zl=`${qr}-interactive`,Gl=`${Jt}-interactive`,Zr={},Ve=()=>Zr,Ql=e=>{let t=[];return B(me(e)?e:[e],r=>{let l=ue(r);B(l,n=>{W(t,Zr[n]=r[n])})}),t},en="__osOptionsValidationPlugin",tn="__osSizeObserverPlugin",Yt="__osScrollbarsHidingPlugin",rn="__osClickScrollPlugin",Zt,Gr=(e,t,r,l)=>{pe(e,t);let n=bt(t),o=rt(t),i=ht(r);return l&&xe(t),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},ln=e=>{let t=!1,r=Ae(e,Dr);try{t=re(e,Ll("scrollbar-width"))==="none"||window.getComputedStyle(e,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return r(),t},nn=(e,t)=>{let r="hidden";re(e,{overflowX:r,overflowY:r,direction:"rtl"}),we(e,0);let l=jt(e),n=jt(t);we(e,-999);let o=jt(t);return{i:l.x===n.x,n:n.x!==o.x}},on=(e,t)=>{let r=Ae(e,Br),l=Oe(e),n=Oe(t),o=Lr(n,l,!0),i=Ae(e,Bl),s=Oe(e),a=Oe(t),c=Lr(a,s,!0);return r(),i(),o&&c},an=()=>{let{body:e}=document,t=yr(`<div class="${_r}"><div></div></div>`)[0],r=t.firstChild,[l,,n]=Xt(),[o,i]=he({o:Gr(e,t,r),u:$r},Gr.bind(0,e,t,r,!0)),[s]=i(),a=ln(t),c={x:s.x===0,y:s.y===0},d={elements:{host:null,padding:!a,viewport:$=>a&&$===$.ownerDocument.body&&$,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=U({},_l),p=U.bind(0,{},f),u=U.bind(0,{},d),v={k:s,A:c,I:a,L:re(t,"zIndex")==="-1",B:nn(t,r),V:on(t,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:u,q:$=>U(d,$)&&u(),F:p,G:$=>U(f,$)&&p(),X:U({},d),U:U({},f)},C=window.addEventListener,P=Vt($=>n($?"z":"r"),{v:33,g:99});if(ae(t,"style"),xe(t),C("resize",P.bind(0,!1)),!a&&(!c.x||!c.y)){let $;C("resize",()=>{let g=Ve()[Yt];$=$||g&&g.R(),$&&$(v,o,P.bind(0,!0))})}return v},ce=()=>(Zt||(Zt=an()),Zt),Gt=(e,t)=>ge(t)?t.apply(0,e):t,sn=(e,t,r,l)=>{let n=Ee(l)?r:l;return Gt(e,n)||t.apply(0,e)},Qr=(e,t,r,l)=>{let n=Ee(l)?r:l,o=Gt(e,n);return!!o&&(at(o)?o:t.apply(0,e))},cn=(e,t,r)=>{let{nativeScrollbarsOverlaid:l,body:n}=r||{},{A:o,I:i}=ce(),{nativeScrollbarsOverlaid:s,body:a}=t,c=l??s,d=Ee(n)?a:n,f=(o.x||o.y)&&c,p=e&&(it(d)?!i:d);return!!f||!!p},Qt=new WeakMap,dn=(e,t)=>{Qt.set(e,t)},un=e=>{Qt.delete(e)},el=e=>Qt.get(e),tl=(e,t)=>e?t.split(".").reduce((r,l)=>r&&ct(r,l)?r[l]:void 0,e):void 0,er=(e,t,r)=>l=>[tl(e,l),r||tl(t,l)!==void 0],rl=e=>{let t=e;return[()=>t,r=>{t=U({},t,r)}]},wt="tabindex",yt=Ne.bind(0,""),tr=e=>{pe(Le(e),kt(e)),xe(e)},fn=e=>{let t=ce(),{N:r,I:l}=t,n=Ve()[Yt],o=n&&n.T,{elements:i}=r(),{host:s,padding:a,viewport:c,content:d}=i,f=at(e),p=f?{}:e,{elements:u}=p,{host:v,padding:C,viewport:P,content:$}=u||{},g=f?e:p.target,y=dt(g,"textarea"),A=g.ownerDocument,H=A.documentElement,_=g===A.body,R=A.defaultView,I=sn.bind(0,[g]),F=Qr.bind(0,[g]),Z=Gt.bind(0,[g]),j=I.bind(0,yt,c),z=F.bind(0,yt,d),w=j(P),b=w===g,x=b&&_,h=!b&&z($),m=!b&&at(w)&&w===h,E=m&&!!Z(d),S=E?j():w,O=E?h:z(),L=x?H:m?S:w,N=y?I(yt,s,v):g,k=x?L:N,T=m?O:h,X=A.activeElement,q=!b&&R.top===R&&X===g,M={W:g,Z:k,J:L,K:!b&&F(yt,a,C),tt:T,nt:!b&&!l&&o&&o(t),ot:x?H:L,st:x?A:L,et:R,ct:A,rt:y,it:_,lt:f,ut:b,dt:m,ft:(te,fe)=>yl(L,b?ye:ke,b?fe:te),_t:(te,fe,oe)=>De(L,b?ye:ke,b?fe:te,oe)},V=ue(M).reduce((te,fe)=>{let oe=M[fe];return W(te,oe&&!Le(oe)?oe:!1)},[]),K=te=>te?Ht(V,te)>-1:null,{W:J,Z:Y,K:ne,J:D,tt:Q,nt:ie}=M,de=[()=>{ae(Y,ye),ae(Y,qt),ae(J,qt),_&&(ae(H,ye),ae(H,qt))}],Fe=y&&K(Y),_e=y?J:kt([Q,D,ne,Y,J].find(te=>K(te)===!1)),Je=x?J:Q||D;return[M,()=>{le(Y,ye,b?"viewport":"host"),le(ne,Ut,""),le(Q,Xr,""),b||le(D,ke,"");let te=_&&!b?Ae(Le(g),Dr):be;if(Fe&&(wr(J,Y),W(de,()=>{wr(Y,J),xe(Y)})),pe(Je,_e),pe(Y,ne),pe(ne||Y,!b&&D),pe(D,Q),W(de,()=>{te(),ae(ne,Ut),ae(Q,Xr),ae(D,Nr),ae(D,Vr),ae(D,ke),K(Q)&&tr(Q),K(D)&&tr(D),K(ne)&&tr(ne)}),l&&!b&&(De(D,ke,jr,!0),W(de,ae.bind(0,D,ke))),ie&&(Ol(D,ie),W(de,xe.bind(0,ie))),q){let fe=le(D,wt);le(D,wt,"-1"),D.focus();let oe=()=>fe?le(D,wt,fe):ae(D,wt),je=G(A,"pointerdown keydown",()=>{oe(),je()});W(de,[oe,je])}else X&&X.focus&&X.focus();_e=0},Se.bind(0,de)]},pn=(e,t)=>{let{tt:r}=e,[l]=t;return n=>{let{V:o}=ce(),{ht:i}=l(),{vt:s}=n,a=(r||!o)&&s;return a&&re(r,{height:i?"":"100%"}),{gt:a,wt:a}}},bn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,ut:s}=e,[a,c]=he({u:Hl,o:Pr()},Pr.bind(0,n,"padding",""));return(d,f,p)=>{let[u,v]=c(p),{I:C,V:P}=ce(),{bt:$}=r(),{gt:g,wt:y,yt:A}=d,[H,_]=f("paddingAbsolute");(g||v||!P&&y)&&([u,v]=a(p));let R=!s&&(_||A||v);if(R){let I=!H||!o&&!C,F=u.r+u.l,Z=u.t+u.b,j={marginRight:I&&!$?-F:0,marginBottom:I?-Z:0,marginLeft:I&&$?-F:0,top:I?-u.t:0,right:I?$?-u.r:"auto":0,left:I?$?"auto":-u.l:0,width:I?`calc(100% + ${F}px)`:""},z={paddingTop:I?u.t:0,paddingRight:I?u.r:0,paddingBottom:I?u.b:0,paddingLeft:I?u.l:0};re(o||i,j),re(i,z),l({K:u,St:!I,P:o?z:U({},j,z)})}return{xt:R}}},{max:rr}=Math,Me=rr.bind(0,0),ll="visible",nl="hidden",vn=42,St={u:Er,o:{w:0,h:0}},hn={u:$r,o:{x:nl,y:nl}},gn=(e,t)=>{let r=window.devicePixelRatio%1!==0?1:0,l={w:Me(e.w-t.w),h:Me(e.h-t.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},xt=e=>e.indexOf(ll)===0,mn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,nt:s,ut:a,_t:c,it:d,et:f}=e,{k:p,V:u,I:v,A:C}=ce(),P=Ve()[Yt],$=!a&&!v&&(C.x||C.y),g=d&&a,[y,A]=he(St,ht.bind(0,i)),[H,_]=he(St,vt.bind(0,i)),[R,I]=he(St),[F,Z]=he(St),[j]=he(hn),z=(E,S)=>{if(re(i,{height:""}),S){let{St:O,K:L}=r(),{$t:N,D:k}=E,T=ht(n),X=bt(n),q=re(i,"boxSizing")==="content-box",M=O||q?L.b+L.t:0,V=!(C.x&&q);re(i,{height:X.h+T.h+(N.x&&V?k.x:0)-M})}},w=(E,S)=>{let O=!v&&!E?vn:0,L=(J,Y,ne)=>{let D=re(i,J),Q=(S?S[J]:D)==="scroll";return[D,Q,Q&&!v?Y?O:ne:0,Y&&!!O]},[N,k,T,X]=L("overflowX",C.x,p.x),[q,M,V,K]=L("overflowY",C.y,p.y);return{Ct:{x:N,y:q},$t:{x:k,y:M},D:{x:T,y:V},M:{x:X,y:K}}},b=(E,S,O,L)=>{let N=(M,V)=>{let K=xt(M),J=V&&K&&M.replace(`${ll}-`,"")||"";return[V&&!K?M:"",xt(J)?"hidden":J]},[k,T]=N(O.x,S.x),[X,q]=N(O.y,S.y);return L.overflowX=T&&X?T:k,L.overflowY=q&&k?q:X,w(E,L)},x=(E,S,O,L)=>{let{D:N,M:k}=E,{x:T,y:X}=k,{x:q,y:M}=N,{P:V}=r(),K=S?"marginLeft":"marginRight",J=S?"paddingLeft":"paddingRight",Y=V[K],ne=V.marginBottom,D=V[J],Q=V.paddingBottom;L.width=`calc(100% + ${M+-1*Y}px)`,L[K]=-M+Y,L.marginBottom=-q+ne,O&&(L[J]=D+(X?M:0),L.paddingBottom=Q+(T?q:0))},[h,m]=P?P.H($,u,i,s,r,w,x):[()=>$,()=>[be]];return(E,S,O)=>{let{gt:L,Ot:N,wt:k,xt:T,vt:X,yt:q}=E,{ht:M,bt:V}=r(),[K,J]=S("showNativeOverlaidScrollbars"),[Y,ne]=S("overflow"),D=K&&C.x&&C.y,Q=!a&&!u&&(L||k||N||J||X),ie=xt(Y.x),de=xt(Y.y),Fe=ie||de,_e=A(O),Je=_(O),te=I(O),fe=Z(O),oe;if(J&&v&&c(jr,Dl,!D),Q&&(oe=w(D),z(oe,M)),L||T||k||q||J){Fe&&c(Ke,Ue,!1);let[Pe,He]=m(D,V,oe),[ve,nt]=_e=y(O),[Ie,Fn]=Je=H(O),fr=bt(i),pr=Ie,br=fr;Pe(),(Fn||nt||J)&&He&&!D&&h(He,Ie,ve,V)&&(br=bt(i),pr=vt(i));let jn={w:Me(rr(Ie.w,pr.w)+ve.w),h:Me(rr(Ie.h,pr.h)+ve.h)},gl={w:Me((g?f.innerWidth:br.w+Me(fr.w-Ie.w))+ve.w),h:Me((g?f.innerHeight+ve.h:br.h+Me(fr.h-Ie.h))+ve.h)};fe=F(gl),te=R(gn(jn,gl),O)}let[je,lt]=fe,[Ye,Ze]=te,[or,ar]=Je,[sr,cr]=_e,Ce={x:Ye.w>0,y:Ye.h>0},Et=ie&&de&&(Ce.x||Ce.y)||ie&&Ce.x&&!Ce.y||de&&Ce.y&&!Ce.x;if(T||q||cr||ar||lt||Ze||ne||J||Q){let Pe={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},He=b(D,Ce,Y,Pe),ve=h(He,or,sr,V);a||x(He,V,ve,Pe),Q&&z(He,M),a?(le(n,Nr,Pe.overflowX),le(n,Vr,Pe.overflowY)):re(i,Pe)}De(n,ye,Ue,Et),De(o,Ut,Nl,Et),a||De(i,ke,Ke,Fe);let[dr,ur]=j(w(D).Ct);return l({Ct:dr,zt:{x:je.w,y:je.h},Tt:{x:Ye.w,y:Ye.h},Et:Ce}),{It:ur,At:lt,Lt:Ze}}},il=(e,t,r)=>{let l={},n=t||{},o=ue(e).concat(ue(n));return B(o,i=>{let s=e[i],a=n[i];l[i]=!!(r||s||a)}),l},wn=(e,t)=>{let{W:r,J:l,_t:n,ut:o}=e,{I:i,A:s,V:a}=ce(),c=!i&&(s.x||s.y),d=[pn(e,t),bn(e,t),mn(e,t)];return(f,p,u)=>{let v=il(U({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},p),{},u),C=c||!a,P=C&&we(l),$=C&&$e(l);n("",mt,!0);let g=v;return B(d,y=>{g=il(g,y(g,f,!!u)||{},u)}),we(l,P),$e(l,$),n("",mt),o||(we(r,0),$e(r,0)),g}},yn=(e,t,r)=>{let l,n=!1,o=()=>{n=!0},i=s=>{if(r){let a=r.reduce((c,d)=>{if(d){let[f,p]=d,u=p&&f&&(s?s(f):mr(f,e));u&&u.length&&p&&Re(p)&&W(c,[u,p.trim()],!0)}return c},[]);B(a,c=>B(c[0],d=>{let f=c[1],p=l.get(d)||[];if(e.contains(d)){let u=G(d,f,v=>{n?(u(),l.delete(d)):t(v)});l.set(d,W(p,u))}else Se(p),l.delete(d)}))}};return r&&(l=new WeakMap,i()),[o,i]},ol=(e,t,r,l)=>{let n=!1,{Ht:o,Pt:i,Dt:s,Mt:a,Rt:c,kt:d}=l||{},f=Vt(()=>{n&&r(!0)},{v:33,g:99}),[p,u]=yn(e,f,s),v=o||[],C=i||[],P=v.concat(C),$=(y,A)=>{let H=c||be,_=d||be,R=new Set,I=new Set,F=!1,Z=!1;if(B(y,j=>{let{attributeName:z,target:w,type:b,oldValue:x,addedNodes:h,removedNodes:m}=j,E=b==="attributes",S=b==="childList",O=e===w,L=E&&Re(z)?le(w,z):0,N=L!==0&&x!==L,k=Ht(C,z)>-1&&N;if(t&&(S||!O)){let T=!E,X=E&&N,q=X&&a&&dt(w,a),M=(q?!H(w,z,x,L):T||X)&&!_(j,!!q,e,l);B(h,V=>R.add(V)),B(m,V=>R.add(V)),Z=Z||M}!t&&O&&N&&!H(w,z,x,L)&&(I.add(z),F=F||k)}),R.size>0&&u(j=>Be(R).reduce((z,w)=>(W(z,mr(j,w)),dt(w,j)?W(z,w):z),[])),t)return!A&&Z&&r(!1),[!1];if(I.size>0||F){let j=[Be(I),F];return!A&&r.apply(0,j),j}},g=new Al(y=>$(y));return g.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:t,childList:t,characterData:t}),n=!0,[()=>{n&&(p(),g.disconnect(),n=!1)},()=>{if(n){f.m();let y=g.takeRecords();return!It(y)&&$(y,!0)}}]},Ot=3333333,Ct=e=>e&&(e.height||e.width),al=(e,t,r)=>{let{Bt:l=!1,Vt:n=!1}=r||{},o=Ve()[tn],{B:i}=ce(),s=yr(`<div class="${Kt}"><div class="${Fl}"></div></div>`)[0],a=s.firstChild,c=tt.bind(0,e),[d]=he({o:void 0,_:!0,u:(v,C)=>!(!v||!Ct(v)&&Ct(C))}),f=v=>{let C=me(v)&&v.length>0&&Qe(v[0]),P=!C&&At(v[0]),$=!1,g=!1,y=!0;if(C){let[A,,H]=d(v.pop().contentRect),_=Ct(A),R=Ct(H);$=!H||!_,g=!R&&_,y=!$}else P?[,y]=v:g=v===!0;if(l&&y){let A=P?v[0]:tt(s);we(s,A?i.n?-Ot:i.i?0:Ot:Ot),$e(s,Ot)}$||t({gt:!P,Yt:P?v:void 0,Vt:!!g})},p=[],u=n?f:!1;return[()=>{Se(p),xe(s)},()=>{if(qe){let v=new qe(f);v.observe(a),W(p,()=>{v.disconnect()})}else if(o){let[v,C]=o.O(a,f,n);u=v,W(p,C)}if(l){let[v]=he({o:void 0},c);W(p,G(s,"scroll",C=>{let P=v(),[$,g,y]=P;g&&(Nt(a,"ltr rtl"),$?Ae(a,"rtl"):Ae(a,"ltr"),f([!!$,g,y])),zr(C)}))}u&&(Ae(s,Vl),W(p,G(s,"animationstart",u,{C:!!qe}))),(qe||o)&&pe(e,s)}]},Sn=e=>e.h===0||e.isIntersecting||e.intersectionRatio>0,xn=(e,t)=>{let r,l=Ne(jl),n=[],[o]=he({o:!1}),i=(a,c)=>{if(a){let d=o(Sn(a)),[,f]=d;if(f)return!c&&t(d),[d]}},s=(a,c)=>{if(a&&a.length>0)return i(a.pop(),c)};return[()=>{Se(n),xe(l)},()=>{if(Sr)r=new Sr(a=>s(a),{root:e}),r.observe(l),W(n,()=>{r.disconnect()});else{let a=()=>{let f=rt(l);i(f)},[c,d]=al(l,a);W(n,c),d(),a()}pe(e,l)},()=>{if(r)return s(r.takeRecords(),!0)}]},sl=`[${ye}]`,On=`[${ke}]`,lr=["tabindex"],cl=["wrap","cols","rows"],nr=["id","class","style","open"],Cn=(e,t,r)=>{let l,n,o,{Z:i,J:s,tt:a,rt:c,ut:d,ft:f,_t:p}=e,{V:u}=ce(),[v]=he({u:Er,o:{w:0,h:0}},()=>{let b=f(Ke,Ue),x=f(Wt,""),h=x&&we(s),m=x&&$e(s);p(Ke,Ue),p(Wt,""),p("",mt,!0);let E=vt(a),S=vt(s),O=ht(s);return p(Ke,Ue,b),p(Wt,"",x),p("",mt),we(s,h),$e(s,m),{w:S.w+E.w+O.w,h:S.h+E.h+O.h}}),C=c?cl:nr.concat(cl),P=Vt(r,{v:()=>l,g:()=>n,p(b,x){let[h]=b,[m]=x;return[ue(h).concat(ue(m)).reduce((E,S)=>(E[S]=h[S]||m[S],E),{})]}}),$=b=>{B(b||lr,x=>{if(Ht(lr,x)>-1){let h=le(i,x);Re(h)?le(s,x,h):ae(s,x)}})},g=(b,x)=>{let[h,m]=b,E={vt:m};return t({ht:h}),!x&&r(E),E},y=({gt:b,Yt:x,Vt:h})=>{let m=!b||h?r:P,E=!1;if(x){let[S,O]=x;E=O,t({bt:S})}m({gt:b,yt:E})},A=(b,x)=>{let[,h]=v(),m={wt:h};return h&&!x&&(b?r:P)(m),m},H=(b,x,h)=>{let m={Ot:x};return x?!h&&P(m):d||$(b),m},[_,R,I]=a||!u?xn(i,g):[be,be,be],[F,Z]=d?[be,be]:al(i,y,{Vt:!0,Bt:!0}),[j,z]=ol(i,!1,H,{Pt:nr,Ht:nr.concat(lr)}),w=d&&qe&&new qe(y.bind(0,{gt:!0}));return w&&w.observe(i),$(),[()=>{_(),F(),o&&o[0](),w&&w.disconnect(),j()},()=>{Z(),R()},()=>{let b={},x=z(),h=I(),m=o&&o[1]();return x&&U(b,H.apply(0,W(x,!0))),h&&U(b,g.apply(0,W(h,!0))),m&&U(b,A.apply(0,W(m,!0))),b},b=>{let[x]=b("update.ignoreMutation"),[h,m]=b("update.attributes"),[E,S]=b("update.elementEvents"),[O,L]=b("update.debounce"),N=S||m,k=T=>ge(x)&&x(T);if(N&&(o&&(o[1](),o[0]()),o=ol(a||s,!0,A,{Ht:C.concat(h||[]),Dt:E,Mt:sl,kt:(T,X)=>{let{target:q,attributeName:M}=T;return(!X&&M&&!d?xl(q,sl,On):!1)||!!Xe(q,`.${se}`)||!!k(T)}})),L)if(P.m(),me(O)){let T=O[0],X=O[1];l=ze(T)&&T,n=ze(X)&&X}else ze(O)?(l=O,n=!1):(l=!1,n=!1)}]},dl={x:0,y:0},En=e=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:dl,Tt:dl,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:tt(e.Z)}),$n=(e,t)=>{let r=er(t,{}),[l,n,o]=Xt(),[i,s,a]=fn(e),c=rl(En(i)),[d,f]=c,p=wn(i,c),u=(y,A,H)=>{let _=ue(y).some(R=>y[R])||!zt(A)||H;return _&&o("u",[y,A,H]),_},[v,C,P,$]=Cn(i,f,y=>u(p(r,y),{},!1)),g=d.bind(0);return g.jt=y=>l("u",y),g.Nt=()=>{let{W:y,J:A}=i,H=we(y),_=$e(y);C(),s(),we(A,H),$e(A,_)},g.qt=i,[(y,A)=>{let H=er(t,y,A);return $(H),u(p(H,P(),A),y,!!A)},g,()=>{n(),v(),a()}]},{round:ul}=Math,Ln=e=>{let{width:t,height:r}=Oe(e),{w:l,h:n}=rt(e);return{x:ul(t)/l||1,y:ul(r)/n||1}},An=(e,t,r)=>{let l=t.scrollbars,{button:n,isPrimary:o,pointerType:i}=e,{pointers:s}=l;return n===0&&o&&l[r?"dragScroll":"clickScroll"]&&(s||[]).includes(i)},Pn=(e,t)=>G(e,"mousedown",G.bind(0,t,"click",zr,{C:!0,$:!0}),{$:!0}),fl="pointerup pointerleave pointercancel lostpointercapture",Hn=(e,t,r,l,n,o,i)=>{let{B:s}=ce(),{Ft:a,Gt:c,Xt:d}=l,f=`scroll${i?"Left":"Top"}`,p=`client${i?"X":"Y"}`,u=i?"width":"height",v=i?"left":"top",C=i?"w":"h",P=i?"x":"y",$=(g,y)=>A=>{let{Tt:H}=o(),_=rt(c)[C]-rt(a)[C],R=y*A/_*H[P],I=tt(d)&&i?s.n||s.i?1:-1:1;n[f]=g+R*I};return G(c,"pointerdown",g=>{let y=Xe(g.target,`.${Jt}`)===a,A=y?a:c;if(De(t,ye,Fr,!0),An(g,e,y)){let H=!y&&g.shiftKey,_=()=>Oe(a),R=()=>Oe(c),I=(S,O)=>(S||_())[v]-(O||R())[v],F=$(n[f]||0,1/Ln(n)[P]),Z=g[p],j=_(),z=R(),w=j[u],b=I(j,z)+w/2,x=Z-z[v],h=y?0:x-b,m=S=>{Se(E),A.releasePointerCapture(S.pointerId)},E=[De.bind(0,t,ye,Fr),G(r,fl,m),G(r,"selectstart",S=>Rr(S),{S:!1}),G(c,fl,m),G(c,"pointermove",S=>{let O=S[p]-Z;(y||H)&&F(h+O)})];if(H)F(h);else if(!y){let S=Ve()[rn];S&&W(E,S.O(F,I,h,w,x))}A.setPointerCapture(g.pointerId)}})},In=(e,t)=>(r,l,n,o,i,s)=>{let{Xt:a}=r,[c,d]=We(333),f=!!i.scrollBy,p=!0;return Se.bind(0,[G(a,"pointerenter",()=>{l(Ur,!0)}),G(a,"pointerleave pointercancel",()=>{l(Ur)}),G(a,"wheel",u=>{let{deltaX:v,deltaY:C,deltaMode:P}=u;f&&p&&P===0&&Le(a)===o&&i.scrollBy({left:v,top:C,behavior:"smooth"}),p=!1,l(Yr,!0),c(()=>{p=!0,l(Yr)}),Rr(u)},{S:!1,$:!0}),Pn(a,n),Hn(e,o,n,r,i,t,s),d])},{min:ir,max:pl,abs:zn,round:Rn}=Math,bl=(e,t,r,l)=>{if(l){let s=r?"x":"y",{Tt:a,zt:c}=l,d=c[s],f=a[s];return pl(0,ir(1,d/(d+f)))}let n=r?"width":"height",o=Oe(e)[n],i=Oe(t)[n];return pl(0,ir(1,o/i))},kn=(e,t,r,l,n,o)=>{let{B:i}=ce(),s=o?"x":"y",a=o?"Left":"Top",{Tt:c}=l,d=Rn(c[s]),f=zn(r[`scroll${a}`]),p=o&&n,u=i.i?f:d-f,v=ir(1,(p?u:f)/d),C=bl(e,t,o);return 1/C*(1-C)*v},Mn=(e,t,r)=>{let{N:l,L:n}=ce(),{scrollbars:o}=l(),{slot:i}=o,{ct:s,W:a,Z:c,J:d,lt:f,ot:p,it:u,ut:v}=t,{scrollbars:C}=f?{}:e,{slot:P}=C||{},$=Qr([a,c,d],()=>v&&u?a:c,i,P),g=(h,m,E)=>{let S=E?Ae:Nt;B(h,O=>{S(O.Xt,m)})},y=(h,m)=>{B(h,E=>{let[S,O]=m(E);re(S,O)})},A=(h,m,E)=>{y(h,S=>{let{Ft:O,Gt:L}=S;return[O,{[E?"width":"height"]:`${(100*bl(O,L,E,m)).toFixed(3)}%`}]})},H=(h,m,E)=>{let S=E?"X":"Y";y(h,O=>{let{Ft:L,Gt:N,Xt:k}=O,T=kn(L,N,p,m,tt(k),E);return[L,{transform:T===T?`translate${S}(${(100*T).toFixed(3)}%)`:""}]})},_=[],R=[],I=[],F=(h,m,E)=>{let S=At(E),O=S?E:!0,L=S?!E:!0;O&&g(R,h,m),L&&g(I,h,m)},Z=h=>{A(R,h,!0),A(I,h)},j=h=>{H(R,h,!0),H(I,h)},z=h=>{let m=h?Ul:Kl,E=h?R:I,S=It(E)?Wr:"",O=Ne(`${se} ${m} ${S}`),L=Ne(qr),N=Ne(Jt),k={Xt:O,Gt:L,Ft:N};return n||Ae(O,Xl),pe(O,L),pe(L,N),W(E,k),W(_,[xe.bind(0,O),r(k,F,s,c,p,h)]),k},w=z.bind(0,!0),b=z.bind(0,!1),x=()=>{pe($,R[0].Xt),pe($,I[0].Xt),ut(()=>{F(Wr)},300)};return w(),b(),[{Ut:Z,Wt:j,Zt:F,Jt:{Kt:R,Qt:w,tn:y.bind(0,R)},nn:{Kt:I,Qt:b,tn:y.bind(0,I)}},x,Se.bind(0,_)]},Tn=(e,t,r,l)=>{let n,o,i,s,a,c=0,d=rl({}),[f]=d,[p,u]=We(),[v,C]=We(),[P,$]=We(100),[g,y]=We(100),[A,H]=We(()=>c),[_,R,I]=Mn(e,r.qt,In(t,r)),{Z:F,J:Z,ot:j,st:z,ut:w,it:b}=r.qt,{Jt:x,nn:h,Zt:m,Ut:E,Wt:S}=_,{tn:O}=x,{tn:L}=h,N=M=>{let{Xt:V}=M,K=w&&!b&&Le(V)===Z&&V;return[K,{transform:K?`translate(${we(j)}px, ${$e(j)}px)`:""}]},k=(M,V)=>{if(H(),M)m(Jr);else{let K=()=>m(Jr,!0);c>0&&!V?A(K):K()}},T=()=>{s=o,s&&k(!0)},X=[$,H,y,C,u,I,G(F,"pointerover",T,{C:!0}),G(F,"pointerenter",T),G(F,"pointerleave",()=>{s=!1,o&&k(!1)}),G(F,"pointermove",()=>{n&&p(()=>{$(),k(!0),g(()=>{n&&k(!1)})})}),G(z,"scroll",M=>{v(()=>{S(r()),i&&k(!0),P(()=>{i&&!s&&k(!1)})}),l(M),w&&O(N),w&&L(N)})],q=f.bind(0);return q.qt=_,q.Nt=R,[(M,V,K)=>{let{At:J,Lt:Y,It:ne,yt:D}=K,{A:Q}=ce(),ie=er(t,M,V),de=r(),{Tt:Fe,Ct:_e,bt:Je}=de,[te,fe]=ie("showNativeOverlaidScrollbars"),[oe,je]=ie("scrollbars.theme"),[lt,Ye]=ie("scrollbars.visibility"),[Ze,or]=ie("scrollbars.autoHide"),[ar]=ie("scrollbars.autoHideDelay"),[sr,cr]=ie("scrollbars.dragScroll"),[Ce,Et]=ie("scrollbars.clickScroll"),dr=J||Y||D,ur=ne||Ye,Pe=te&&Q.x&&Q.y,He=(ve,nt)=>{let Ie=lt==="visible"||lt==="auto"&&ve==="scroll";return m(Jl,Ie,nt),Ie};if(c=ar,fe&&m(ql,Pe),je&&(m(a),m(oe,!0),a=oe),or&&(n=Ze==="move",o=Ze==="leave",i=Ze!=="never",k(!i,!0)),cr&&m(Gl,sr),Et&&m(Zl,Ce),ur){let ve=He(_e.x,!0),nt=He(_e.y,!1);m(Yl,!(ve&&nt))}dr&&(E(de),S(de),m(Kr,!Fe.x,!0),m(Kr,!Fe.y,!1),m(Wl,Je&&!b))},q,Se.bind(0,X)]},vl=(e,t,r)=>{ge(e)&&e(t||void 0,r||void 0)},Te=(e,t,r)=>{let{F:l,N:n,Y:o,j:i}=ce(),s=Ve(),a=at(e),c=a?e:e.target,d=el(c);if(t&&!d){let f=!1,p=w=>{let b=Ve()[en],x=b&&b.O;return x?x(w,!0):w},u=U({},l(),p(t)),[v,C,P]=Xt(r),[$,g,y]=$n(e,u),[A,H,_]=Tn(e,u,g,w=>P("scroll",[z,w])),R=(w,b)=>$(w,!!b),I=R.bind(0,{},!0),F=o(I),Z=i(I),j=w=>{un(c),F(),Z(),_(),y(),f=!0,P("destroyed",[z,!!w]),C()},z={options(w,b){if(w){let x=b?l():{},h=Tr(u,U(x,p(w)));zt(h)||(U(u,h),R(h))}return U({},u)},on:v,off:(w,b)=>{w&&b&&C(w,b)},state(){let{zt:w,Tt:b,Ct:x,Et:h,K:m,St:E,bt:S}=g();return U({},{overflowEdge:w,overflowAmount:b,overflowStyle:x,hasOverflow:h,padding:m,paddingAbsolute:E,directionRTL:S,destroyed:f})},elements(){let{W:w,Z:b,K:x,J:h,tt:m,ot:E,st:S}=g.qt,{Jt:O,nn:L}=H.qt,N=T=>{let{Ft:X,Gt:q,Xt:M}=T;return{scrollbar:M,track:q,handle:X}},k=T=>{let{Kt:X,Qt:q}=T,M=N(X[0]);return U({},M,{clone:()=>{let V=N(q());return A({},!0,{}),V}})};return U({},{target:w,host:b,padding:x||h,viewport:h,content:m||h,scrollOffsetElement:E,scrollEventElement:S,scrollbarHorizontal:k(O),scrollbarVertical:k(L)})},update:w=>R({},w),destroy:j.bind(0)};return g.jt((w,b,x)=>{A(b,x,w)}),dn(c,z),B(ue(s),w=>vl(s[w],0,z)),cn(g.qt.it,n().cancel,!a&&e.cancel)?(j(!0),z):(g.Nt(),H.Nt(),P("initialized",[z]),g.jt((w,b,x)=>{let{gt:h,yt:m,vt:E,At:S,Lt:O,It:L,wt:N,Ot:k}=w;P("updated",[z,{updateHints:{sizeChanged:h,directionChanged:m,heightIntrinsicChanged:E,overflowEdgeChanged:S,overflowAmountChanged:O,overflowStyleChanged:L,contentMutation:N,hostMutation:k},changedOptions:b,force:x}])}),z.update(!0),z)}return d};Te.plugin=e=>{B(Ql(e),t=>vl(t,Te))},Te.valid=e=>{let t=e&&e.elements,r=ge(t)&&t();return Pt(r)&&!!el(r.target)},Te.env=()=>{let{k:e,A:t,I:r,B:l,V:n,L:o,X:i,U:s,N:a,q:c,F:d,G:f}=ce();return U({},{scrollbarsSize:e,scrollbarsOverlaid:t,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,staticDefaultInitialization:i,staticDefaultOptions:s,getDefaultInitialization:a,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:f})};var _n=()=>{if(typeof window>"u"){let c=()=>{};return[c,c]}let e,t,r=window,l=typeof r.requestIdleCallback=="function",n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,s=l?r.cancelIdleCallback:o,a=()=>{s(e),o(t)};return[(c,d)=>{a(),e=i(l?()=>{a(),t=n(c)}:c,typeof d=="object"?d:{timeout:2233})},a]},Bn=e=>{let{options:t,events:r,defer:l}=e||{},[n,o]=(0,ee.useMemo)(_n,[]),i=(0,ee.useRef)(null),s=(0,ee.useRef)(l),a=(0,ee.useRef)(t),c=(0,ee.useRef)(r);return(0,ee.useEffect)(()=>{s.current=l},[l]),(0,ee.useEffect)(()=>{let{current:d}=i;a.current=t,Te.valid(d)&&d.options(t||{},!0)},[t]),(0,ee.useEffect)(()=>{let{current:d}=i;c.current=r,Te.valid(d)&&d.on(r||{},!0)},[r]),(0,ee.useEffect)(()=>()=>{var d;o(),(d=i.current)==null||d.destroy()},[]),(0,ee.useMemo)(()=>[d=>{let f=i.current;if(Te.valid(f))return;let p=s.current,u=a.current||{},v=c.current||{},C=()=>i.current=Te(d,u,v);p?n(C,p):C()},()=>i.current],[])},Dn=(e,t)=>{let{element:r="div",options:l,events:n,defer:o,children:i,...s}=e,a=r,c=(0,ee.useRef)(null),d=(0,ee.useRef)(null),[f,p]=Bn({options:l,events:n,defer:o});return(0,ee.useEffect)(()=>{let{current:u}=c,{current:v}=d;return u&&v&&f({target:u,elements:{viewport:v,content:v}}),()=>{var C;return(C=p())==null?void 0:C.destroy()}},[f,r]),(0,ee.useImperativeHandle)(t,()=>({osInstance:p,getElement:()=>c.current}),[]),ee.createElement(a,{"data-overlayscrollbars-initialize":"",ref:c,...s},ee.createElement("div",{ref:d},i))},hl=(0,ee.forwardRef)(Dn),Nn=hl,Vn=hl}}]);