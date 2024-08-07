"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[8926],{"./src/components/Monaco/ReactMonacoEditor.tsx":function(Qt,oe,_){_.r(oe),_.d(oe,{ReactMonacoEditor:function(){return B}});function je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(r),!0).forEach(function(n){je(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Se(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Ee(e,t){if(e==null)return{};var r=Se(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Pe(e,t){return Ce(e)||_e(e,t)||Re(e,t)||Ve()}function Ce(e){if(Array.isArray(e))return e}function _e(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,o=!1,a=void 0;try{for(var c=e[Symbol.iterator](),s;!(n=(s=c.next()).done)&&(r.push(s.value),!(t&&r.length===t));n=!0);}catch(f){o=!0,a=f}finally{try{!n&&c.return!=null&&c.return()}finally{if(o)throw a}}return r}}function Re(e,t){if(e){if(typeof e=="string")return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}}function ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?le(Object(r),!0).forEach(function(n){Te(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ae(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,a){return a(o)},n)}}function R(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,s=new Array(c),f=0;f<c;f++)s[f]=arguments[f];return t.apply(r,[].concat(o,s))}}}function k(e){return{}.toString.call(e).includes("Object")}function Le(e){return!Object.keys(e).length}function I(e){return typeof e=="function"}function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qe(e,t){return k(t)||M("changeType"),Object.keys(t).some(function(r){return!De(e,r)})&&M("changeField"),t}function ke(e){I(e)||M("selectorType")}function Ne(e){I(e)||k(e)||M("handlerType"),k(e)&&Object.values(e).some(function(t){return!I(t)})&&M("handlersType")}function xe(e){e||M("initialIsRequired"),k(e)||M("initialType"),Le(e)&&M("initialContent")}function ze(e,t){throw new Error(e[t]||e.default)}var Be={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},M=R(ze)(Be),N={changes:qe,selector:ke,handler:Ne,initial:xe};function Ue(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};N.initial(e),N.handler(t);var r={current:e},n=R(We)(r,t),o=R(He)(r),a=R(N.changes)(e),c=R(Fe)(r);function s(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(P){return P};return N.selector(y),y(r.current)}function f(y){Ae(n,o,a,c)(y)}return[s,f]}function Fe(e,t){return I(t)?t(e.current):t}function He(e,t){return e.current=se(se({},e.current),t),t}function We(e,t,r){return I(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var $e={create:Ue},Ye=$e,Ke={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},Ge=Ke;function Je(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,s=new Array(c),f=0;f<c;f++)s[f]=arguments[f];return t.apply(r,[].concat(o,s))}}}var Qe=Je;function Xe(e){return{}.toString.call(e).includes("Object")}var Ze=Xe;function et(e){return e||fe("configIsRequired"),Ze(e)||fe("configType"),e.urls?(tt(),{paths:{vs:e.urls.monacoBase}}):e}function tt(){console.warn(de.deprecation)}function rt(e,t){throw new Error(e[t]||e.default)}var de={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fe=Qe(rt)(de),nt={config:et},ot=nt,at=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(a,c){return c(a)},o)}},it=at;function pe(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],pe(e[r],t[r]))}),ie(ie({},e),t)}var ut=pe,ct={type:"cancelation",msg:"operation is manually canceled"};function lt(e){var t=!1,r=new Promise(function(n,o){e.then(function(a){return t?o(ct):n(a)}),e.catch(o)});return r.cancel=function(){return t=!0},r}var H=lt,st=Ye.create({config:Ge,isInitialized:!1,resolve:null,reject:null,monaco:null}),ge=Pe(st,2),V=ge[0],x=ge[1];function dt(e){var t=ot.config(e),r=t.monaco,n=Ee(t,["monaco"]);x(function(o){return{config:ut(o.config,n),monaco:r}})}function ft(){var e=V(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(x({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),H(W);if(window.monaco&&window.monaco.editor)return me(window.monaco),e.resolve(window.monaco),H(W);it(pt,mt)(ht)}return H(W)}function pt(e){return document.body.appendChild(e)}function gt(e){var t=document.createElement("script");return e&&(t.src=e),t}function mt(e){var t=V(function(n){var o=n.config,a=n.reject;return{config:o,reject:a}}),r=gt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function ht(){var e=V(function(r){var n=r.config,o=r.resolve,a=r.reject;return{config:n,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){me(r),e.resolve(r)},function(r){e.reject(r)})}function me(e){V().monaco||x({monaco:e})}function vt(){return V(function(e){var t=e.monaco;return t})}var W=new Promise(function(e,t){return x({resolve:e,reject:t})}),yt={config:dt,init:ft,__getMonacoInstance:vt},$=yt,i=_("../../node_modules/react/index.js"),bt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Y=bt,wt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ot=wt;function Mt({children:e}){return i.createElement("div",{style:Ot.container},e)}var jt=Mt,St=jt;function Et({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:a,wrapperProps:c}){return i.createElement("section",{style:{...Y.wrapper,width:e,height:t},...c},!r&&i.createElement(St,null,n),i.createElement("div",{ref:o,style:{...Y.fullWidth,...!r&&Y.hide},className:a}))}var Pt=Et,he=(0,i.memo)(Pt);function Ct(e){(0,i.useEffect)(e,[])}var K=Ct;function _t(e,t,r=!0){let n=(0,i.useRef)(!0);(0,i.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)}var w=_t;function T(){}function E(e,t,r,n){return Rt(e,n)||It(e,t,r,n)}function Rt(e,t){return e.editor.getModel(ve(e,t))}function It(e,t,r,n){return e.editor.createModel(t,r,n?ve(e,n):void 0)}function ve(e,t){return e.Uri.parse(t)}function Vt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:a,modifiedModelPath:c,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:f=!1,theme:y="light",loading:P="Loading...",options:O={},height:G="100%",width:J="100%",className:Q,wrapperProps:X={},beforeMount:Z=T,onMount:ee=T}){let[b,A]=(0,i.useState)(!1),[L,p]=(0,i.useState)(!0),g=(0,i.useRef)(null),d=(0,i.useRef)(null),D=(0,i.useRef)(null),h=(0,i.useRef)(ee),u=(0,i.useRef)(Z),C=(0,i.useRef)(!1);K(()=>{let l=$.init();return l.then(m=>(d.current=m)&&p(!1)).catch(m=>m?.type!=="cancelation"&&console.error("Monaco initialization: error:",m)),()=>g.current?q():l.cancel()}),w(()=>{if(g.current&&d.current){let l=g.current.getOriginalEditor(),m=E(d.current,e||"",n||r||"text",a||"");m!==l.getModel()&&l.setModel(m)}},[a],b),w(()=>{if(g.current&&d.current){let l=g.current.getModifiedEditor(),m=E(d.current,t||"",o||r||"text",c||"");m!==l.getModel()&&l.setModel(m)}},[c],b),w(()=>{let l=g.current.getModifiedEditor();l.getOption(d.current.editor.EditorOption.readOnly)?l.setValue(t||""):t!==l.getValue()&&(l.executeEdits("",[{range:l.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),l.pushUndoStop())},[t],b),w(()=>{g.current?.getModel()?.original.setValue(e||"")},[e],b),w(()=>{let{original:l,modified:m}=g.current.getModel();d.current.editor.setModelLanguage(l,n||r||"text"),d.current.editor.setModelLanguage(m,o||r||"text")},[r,n,o],b),w(()=>{d.current?.editor.setTheme(y)},[y],b),w(()=>{g.current?.updateOptions(O)},[O],b);let U=(0,i.useCallback)(()=>{if(!d.current)return;u.current(d.current);let l=E(d.current,e||"",n||r||"text",a||""),m=E(d.current,t||"",o||r||"text",c||"");g.current?.setModel({original:l,modified:m})},[r,t,o,e,n,a,c]),F=(0,i.useCallback)(()=>{!C.current&&D.current&&(g.current=d.current.editor.createDiffEditor(D.current,{automaticLayout:!0,...O}),U(),d.current?.editor.setTheme(y),A(!0),C.current=!0)},[O,y,U]);(0,i.useEffect)(()=>{b&&h.current(g.current,d.current)},[b]),(0,i.useEffect)(()=>{!L&&!b&&F()},[L,b,F]);function q(){let l=g.current?.getModel();s||l?.original?.dispose(),f||l?.modified?.dispose(),g.current?.dispose()}return i.createElement(he,{width:J,height:G,isEditorReady:b,loading:P,_ref:D,className:Q,wrapperProps:X})}var Tt=Vt,Xt=(0,i.memo)(Tt);function Zt(){let[e,t]=Ie(ce.__getMonacoInstance());return K(()=>{let r;return e||(r=ce.init(),r.then(n=>{t(n)})),()=>r?.cancel()}),e}var er=null;function At(e){let t=(0,i.useRef)();return(0,i.useEffect)(()=>{t.current=e},[e]),t.current}var Lt=At,z=new Map;function Dt({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:a,theme:c="light",line:s,loading:f="Loading...",options:y={},overrideServices:P={},saveViewState:O=!0,keepCurrentModel:G=!1,width:J="100%",height:Q="100%",className:X,wrapperProps:Z={},beforeMount:ee=T,onMount:b=T,onChange:A,onValidate:L=T}){let[p,g]=(0,i.useState)(!1),[d,D]=(0,i.useState)(!0),h=(0,i.useRef)(null),u=(0,i.useRef)(null),C=(0,i.useRef)(null),U=(0,i.useRef)(b),F=(0,i.useRef)(ee),q=(0,i.useRef)(),l=(0,i.useRef)(n),m=Lt(a),Oe=(0,i.useRef)(!1),te=(0,i.useRef)(!1);K(()=>{let v=$.init();return v.then(j=>(h.current=j)&&D(!1)).catch(j=>j?.type!=="cancelation"&&console.error("Monaco initialization: error:",j)),()=>u.current?Jt():v.cancel()}),w(()=>{let v=E(h.current,e||n||"",t||o||"",a||r||"");v!==u.current?.getModel()&&(O&&z.set(m,u.current?.saveViewState()),u.current?.setModel(v),O&&u.current?.restoreViewState(z.get(a)))},[a],p),w(()=>{u.current?.updateOptions(y)},[y],p),w(()=>{!u.current||n===void 0||(u.current.getOption(h.current.editor.EditorOption.readOnly)?u.current.setValue(n):n!==u.current.getValue()&&(te.current=!0,u.current.executeEdits("",[{range:u.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),u.current.pushUndoStop(),te.current=!1))},[n],p),w(()=>{let v=u.current?.getModel();v&&o&&h.current?.editor.setModelLanguage(v,o)},[o],p),w(()=>{s!==void 0&&u.current?.revealLine(s)},[s],p),w(()=>{h.current?.editor.setTheme(c)},[c],p);let Me=(0,i.useCallback)(()=>{if(!(!C.current||!h.current)&&!Oe.current){F.current(h.current);let v=a||r,j=E(h.current,n||e||"",t||o||"",v||"");u.current=h.current?.editor.create(C.current,{model:j,automaticLayout:!0,...y},P),O&&u.current.restoreViewState(z.get(v)),h.current.editor.setTheme(c),s!==void 0&&u.current.revealLine(s),g(!0),Oe.current=!0}},[e,t,r,n,o,a,y,P,O,c,s]);(0,i.useEffect)(()=>{p&&U.current(u.current,h.current)},[p]),(0,i.useEffect)(()=>{!d&&!p&&Me()},[d,p,Me]),l.current=n,(0,i.useEffect)(()=>{p&&A&&(q.current?.dispose(),q.current=u.current?.onDidChangeModelContent(v=>{te.current||A(u.current.getValue(),v)}))},[p,A]),(0,i.useEffect)(()=>{if(p){let v=h.current.editor.onDidChangeMarkers(j=>{let re=u.current.getModel()?.uri;if(re&&j.find(ne=>ne.path===re.path)){let ne=h.current.editor.getModelMarkers({resource:re});L?.(ne)}});return()=>{v?.dispose()}}return()=>{}},[p,L]);function Jt(){q.current?.dispose(),G?O&&z.set(a,u.current.saveViewState()):u.current.getModel()?.dispose(),u.current.dispose()}return i.createElement(he,{width:J,height:Q,isEditorReady:p,loading:f,_ref:C,className:X,wrapperProps:Z})}var qt=Dt,kt=(0,i.memo)(qt),Nt=kt,xt=_("./src/themes/ThemeContext.tsx"),zt=_("../../node_modules/tinycolor2/esm/tinycolor.js");function Bt(e){if(e===void 0)return{};{const t={"editor.background":e.components.input.background,"minimap.background":e.colors.background.secondary};return Object.keys(t).forEach(r=>{t[r]=S(t[r])}),t}}function S(e){return(0,zt.A)(e).toHexString()}function Ut(e,t){const r=Bt(t);e.editor.defineTheme("grafana-dark",{base:"vs-dark",inherit:!0,colors:r,rules:[{token:"predefined",foreground:S(t?.visualization.getColorByName("purple"))},{token:"operator",foreground:S(t?.visualization.getColorByName("orange"))},{token:"tag",foreground:S(t?.visualization.getColorByName("green"))}]}),e.editor.defineTheme("grafana-light",{base:"vs",inherit:!0,colors:r,rules:[{token:"predefined",foreground:S(t?.visualization.getColorByName("purple"))},{token:"operator",foreground:S(t?.visualization.getColorByName("orange"))},{token:"tag",foreground:S(t?.visualization.getColorByName("green"))}]})}var Ft=Object.defineProperty,Ht=Object.defineProperties,Wt=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,$t=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,be=(e,t,r)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Kt=(e,t)=>{for(var r in t||(t={}))$t.call(t,r)&&be(e,r,t[r]);if(ye)for(var r of ye(t))Yt.call(t,r)&&be(e,r,t[r]);return e},Gt=(e,t)=>Ht(e,Wt(t)),we;$.config({paths:{vs:((we=window.__grafana_public_path__)!=null?we:"public/")+"lib/monaco/min/vs"}});const B=e=>{const{beforeMount:t}=e,r=(0,xt.$j)(),n=(0,i.useCallback)(o=>{Ut(o,r),t?.(o)},[t,r]);return i.createElement(Nt,Gt(Kt({},e),{theme:r.isDark?"grafana-dark":"grafana-light",beforeMount:n}))};try{B.displayName="ReactMonacoEditor",B.__docgenInfo={description:"",displayName:"ReactMonacoEditor",props:{line:{defaultValue:null,description:"The line to jump on it",name:"line",required:!1,type:{name:"number"}},options:{defaultValue:null,description:"IStandaloneEditorConstructionOptions",name:"options",required:!1,type:{name:"IStandaloneEditorConstructionOptions"}},onChange:{defaultValue:null,description:`Signature: function(value: string | undefined, ev: monaco.editor.IModelContentChangedEvent) => void
An event is emitted when the content of the current model is changed`,name:"onChange",required:!1,type:{name:"OnChange"}},className:{defaultValue:null,description:"Class name for the editor container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:'"100%"'},description:"Width of the editor wrapper",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:'"100%"'},description:"Height of the editor wrapper",name:"height",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:"Value of the current model",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value of the current model",name:"defaultValue",required:!1,type:{name:"string"}},loading:{defaultValue:{value:'"Loading..."'},description:"The loading screen before the editor will be mounted",name:"loading",required:!1,type:{name:"ReactNode"}},path:{defaultValue:null,description:"Path of the current model\nWill be passed as the third argument to `.createModel` method\n`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`",name:"path",required:!1,type:{name:"string"}},language:{defaultValue:null,description:"Language of the current model",name:"language",required:!1,type:{name:"string"}},defaultLanguage:{defaultValue:null,description:"Default language of the current model",name:"defaultLanguage",required:!1,type:{name:"string"}},defaultPath:{defaultValue:null,description:"Default path of the current model\nWill be passed as the third argument to `.createModel` method\n`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`",name:"defaultPath",required:!1,type:{name:"string"}},overrideServices:{defaultValue:null,description:"IEditorOverrideServices",name:"overrideServices",required:!1,type:{name:"IEditorOverrideServices"}},saveViewState:{defaultValue:null,description:`Indicator whether to save the models' view states between model changes or not
Defaults to true`,name:"saveViewState",required:!1,type:{name:"boolean"}},keepCurrentModel:{defaultValue:{value:"false"},description:"Indicator whether to dispose the current model when the Editor is unmounted or not",name:"keepCurrentModel",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:"Props applied to the wrapper element",name:"wrapperProps",required:!1,type:{name:"object"}},beforeMount:{defaultValue:null,description:`Signature: function(monaco: Monaco) => void
An event is emitted before the editor is mounted
It gets the monaco instance as a first argument
Defaults to "noop"`,name:"beforeMount",required:!1,type:{name:"BeforeMount"}},onMount:{defaultValue:null,description:`Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void
An event is emitted when the editor is mounted
It gets the editor instance as a first argument and the monaco instance as a second
Defaults to "noop"`,name:"onMount",required:!1,type:{name:"OnMount"}},onValidate:{defaultValue:null,description:`Signature: function(markers: monaco.editor.IMarker[]) => void
An event is emitted when the content of the current model is changed
and the current model markers are ready
Defaults to "noop"`,name:"onValidate",required:!1,type:{name:"OnValidate"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Monaco/ReactMonacoEditor.tsx#ReactMonacoEditor"]={docgenInfo:B.__docgenInfo,name:"ReactMonacoEditor",path:"src/components/Monaco/ReactMonacoEditor.tsx#ReactMonacoEditor"})}catch{}}}]);
