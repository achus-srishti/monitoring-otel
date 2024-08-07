"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1039],{"../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":function(I,p,l){l.d(p,{A:function(){return r}});function r(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")}},"../../node_modules/@babel/runtime/helpers/esm/createClass.js":function(I,p,l){l.d(p,{A:function(){return s}});var r=l("../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function u(n,d){for(var f=0;f<d.length;f++){var i=d[f];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(0,r.A)(i.key),i)}}function s(n,d,f){return d&&u(n.prototype,d),f&&u(n,f),Object.defineProperty(n,"prototype",{writable:!1}),n}},"../../node_modules/@babel/runtime/helpers/esm/createSuper.js":function(I,p,l){l.d(p,{A:function(){return f}});var r=l("../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),u=l("../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js"),s=l("../../node_modules/@babel/runtime/helpers/esm/typeof.js"),n=l("../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");function d(i,v){if(v&&((0,s.A)(v)==="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(0,n.A)(i)}function f(i){var v=(0,u.A)();return function(){var R=(0,r.A)(i),E;if(v){var $=(0,r.A)(this).constructor;E=Reflect.construct(R,arguments,$)}else E=R.apply(this,arguments);return d(this,E)}}},"../../node_modules/@babel/runtime/helpers/esm/inherits.js":function(I,p,l){l.d(p,{A:function(){return u}});var r=l("../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function u(s,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),n&&(0,r.A)(s,n)}},"./src/components/Slider/RangeSlider.story.tsx":function(I,p,l){l.r(p),l.d(p,{Basic:function(){return N},Vertical:function(){return D},default:function(){return Oe}});var r=l("../../node_modules/react/index.js"),u=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),s=l("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=l("../../node_modules/rc-slider/es/index.js"),d=l("./src/themes/ThemeContext.tsx"),f=l("../../node_modules/classnames/index.js"),i=l.n(f);function v(t){var e=t.children,o=t.prefixCls,a=t.id,y=t.overlayInnerStyle,O=t.className,g=t.style;return r.createElement("div",{className:i()("".concat(o,"-content"),O),style:g},r.createElement("div",{className:"".concat(o,"-inner"),id:a,role:"tooltip",style:y},typeof e=="function"?e():e))}var L=l("../../node_modules/@babel/runtime/helpers/esm/extends.js"),R=l("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),E=l("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),$=l("../../node_modules/@rc-component/trigger/es/index.js"),P={shiftX:64,adjustY:1},T={adjustX:1,shiftY:!0},m=[0,0],le={left:{points:["cr","cl"],overflow:T,offset:[-4,0],targetOffset:m},right:{points:["cl","cr"],overflow:T,offset:[4,0],targetOffset:m},top:{points:["bc","tc"],overflow:P,offset:[0,-4],targetOffset:m},bottom:{points:["tc","bc"],overflow:P,offset:[0,4],targetOffset:m},topLeft:{points:["bl","tl"],overflow:P,offset:[0,-4],targetOffset:m},leftTop:{points:["tr","tl"],overflow:T,offset:[-4,0],targetOffset:m},topRight:{points:["br","tr"],overflow:P,offset:[0,-4],targetOffset:m},rightTop:{points:["tl","tr"],overflow:T,offset:[4,0],targetOffset:m},bottomRight:{points:["tr","br"],overflow:P,offset:[0,4],targetOffset:m},rightBottom:{points:["bl","br"],overflow:T,offset:[4,0],targetOffset:m},bottomLeft:{points:["tl","bl"],overflow:P,offset:[0,4],targetOffset:m},leftBottom:{points:["br","bl"],overflow:T,offset:[-4,0],targetOffset:m}},De=null,ae=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],ie=function(e,o){var a=e.overlayClassName,y=e.trigger,O=y===void 0?["hover"]:y,g=e.mouseEnterDelay,V=g===void 0?0:g,x=e.mouseLeaveDelay,w=x===void 0?.1:x,H=e.overlayStyle,C=e.prefixCls,b=C===void 0?"rc-tooltip":C,S=e.children,K=e.onVisibleChange,c=e.afterVisibleChange,A=e.transitionName,xe=e.animation,we=e.motion,q=e.placement,Ce=q===void 0?"right":q,ee=e.align,Ae=ee===void 0?{}:ee,te=e.destroyTooltipOnHide,Re=te===void 0?!1:te,Ee=e.defaultVisible,Pe=e.getTooltipContainer,Te=e.overlayInnerStyle,He=e.arrowContent,je=e.overlay,Ve=e.id,re=e.showArrow,Ie=re===void 0?!0:re,$e=(0,E.A)(e,ae),oe=(0,r.useRef)(null);(0,r.useImperativeHandle)(o,function(){return oe.current});var ne=(0,R.A)({},$e);"visible"in e&&(ne.popupVisible=e.visible);var Ne=function(){return r.createElement(v,{key:"content",prefixCls:b,id:Ve,overlayInnerStyle:Te},je)};return r.createElement($.A,(0,L.A)({popupClassName:a,prefixCls:b,popup:Ne,action:O,builtinPlacements:le,popupPlacement:Ce,ref:oe,popupAlign:Ae,getPopupContainer:Pe,onPopupVisibleChange:K,afterPopupVisibleChange:c,popupTransitionName:A,popupAnimation:xe,popupMotion:we,defaultPopupVisible:Ee,autoDestroy:Re,mouseLeaveDelay:w,popupStyle:H,mouseEnterDelay:V,arrow:Ie},ne),S)},se=(0,r.forwardRef)(ie),de=se,ue=Object.defineProperty,z=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,k=(t,e,o)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ce=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&k(t,o,e[o]);if(z)for(var o of z(e))F.call(e,o)&&k(t,o,e[o]);return t},pe=(t,e)=>{var o={};for(var a in t)M.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&z)for(var a of z(t))e.indexOf(a)<0&&F.call(t,a)&&(o[a]=t[a]);return o};const B=t=>{const e=t,{value:o,children:a,visible:y,placement:O,tipFormatter:g}=e,V=pe(e,["value","children","visible","placement","tipFormatter"]),x=(0,r.useRef)(null),w=(0,r.useRef)(null),H=(0,d.of)(fe);function C(){w.current!==null&&cancelAnimationFrame(w.current)}function b(){w.current=requestAnimationFrame(()=>{var S;(S=x.current)==null||S.forceAlign()})}return(0,r.useEffect)(()=>(y?b():C(),C),[o,y]),r.createElement(de,ce({overlayClassName:H.tooltip,placement:O,overlay:g??o,overlayInnerStyle:{minHeight:"auto"},ref:x,visible:y},V),a)},fe=t=>({tooltip:(0,u.AH)({position:"absolute",display:"block",visibility:"visible",fontSize:t.typography.bodySmall.fontSize,opacity:.9,padding:3,zIndex:t.zIndex.tooltip})});var me=B;try{B.displayName="HandleTooltip",B.__docgenInfo={description:"",displayName:"HandleTooltip",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'}]}},tipFormatter:{defaultValue:null,description:"",name:"tipFormatter",required:!1,type:{name:"(() => ReactNode)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Slider/HandleTooltip.tsx#HandleTooltip"]={docgenInfo:B.__docgenInfo,name:"HandleTooltip",path:"src/components/Slider/HandleTooltip.tsx#HandleTooltip"})}catch{}var ve=l("./src/components/Slider/styles.ts");const _=({min:t,max:e,onChange:o,onAfterChange:a,orientation:y="horizontal",reverse:O,step:g,formatTooltipResult:V,value:x,tooltipAlwaysVisible:w=!0})=>{const H=(0,r.useCallback)(c=>{o?.(typeof c=="number"?[c,c]:c)},[o]),C=(0,r.useCallback)(c=>{a?.(typeof c=="number"?[c,c]:c)},[a]),b=y==="horizontal",S=(0,d.of)(ve.$,b),K=(c,A)=>r.createElement(me,{value:A.value,visible:w||A.dragging,tipFormatter:V?()=>V(A.value):void 0,placement:b?"top":"right"},c);return r.createElement("div",{className:(0,u.cx)(S.container,S.slider)},r.createElement(s.mL,{styles:S.tooltip}),r.createElement(n.A,{min:t,max:e,step:g,defaultValue:x,range:!0,onChange:H,onChangeComplete:C,vertical:!b,reverse:O,handleRender:K}))};_.displayName="RangeSlider";try{_.displayName="RangeSlider",_.__docgenInfo={description:"",displayName:"RangeSlider",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number[]) => void)"}},onAfterChange:{defaultValue:null,description:"",name:"onAfterChange",required:!1,type:{name:"((value?: number[]) => void)"}},formatTooltipResult:{defaultValue:null,description:"",name:"formatTooltipResult",required:!1,type:{name:"((value: number) => string | number)"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},reverse:{defaultValue:null,description:"Set current positions of handle(s). If only 1 value supplied, only 1 handle displayed.",name:"reverse",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},tooltipAlwaysVisible:{defaultValue:{value:"true"},description:"",name:"tooltipAlwaysVisible",required:!1,type:{name:"boolean"}},marks:{defaultValue:null,description:"Marks on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.",name:"marks",required:!1,type:{name:"SliderMarks"}},included:{defaultValue:null,description:"If the value is true, it means a continuous value interval, otherwise, it is a independent value.",name:"included",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Slider/RangeSlider.tsx#RangeSlider"]={docgenInfo:_.__docgenInfo,name:"RangeSlider",path:"src/components/Slider/RangeSlider.tsx#RangeSlider"})}catch{}var ye=Object.defineProperty,ge=Object.defineProperties,he=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Y=(t,e,o)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,h=(t,e)=>{for(var o in e||(e={}))be.call(e,o)&&Y(t,o,e[o]);if(W)for(var o of W(e))Se.call(e,o)&&Y(t,o,e[o]);return t},j=(t,e)=>ge(t,he(e)),U,X,G,J,Q,Z;const _e={title:"Forms/Slider/Range",component:_,parameters:{controls:{exclude:["tooltipAlwaysVisible"]}},argTypes:{orientation:{control:{type:"select",options:["horizontal","vertical"]}},step:{control:{type:"number",min:1}}},args:{min:0,max:100,orientation:"horizontal",reverse:!1,step:void 0}},N=t=>r.createElement("div",{style:{width:"200px",height:"200px"}},r.createElement(_,j(h({},t),{value:[10,62]}))),D=t=>r.createElement("div",{style:{width:"200px",height:"200px"}},r.createElement(_,j(h({},t),{value:[10,62],orientation:"vertical"})));var Oe=_e;N.parameters=j(h({},N.parameters),{docs:j(h({},(U=N.parameters)==null?void 0:U.docs),{source:h({originalSource:`args => {
  return <div style={{
    width: '200px',
    height: '200px'
  }}>
      <RangeSlider {...args} value={[10, 62]} />
    </div>;
}`},(G=(X=N.parameters)==null?void 0:X.docs)==null?void 0:G.source)})}),D.parameters=j(h({},D.parameters),{docs:j(h({},(J=D.parameters)==null?void 0:J.docs),{source:h({originalSource:`args => {
  return <div style={{
    width: '200px',
    height: '200px'
  }}>
      <RangeSlider {...args} value={[10, 62]} orientation="vertical" />
    </div>;
}`},(Z=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Z.source)})})},"./src/components/Slider/styles.ts":function(I,p,l){l.d(p,{$:function(){return s}});var r=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),u=l("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const s=(n,d,f=!1)=>{const{spacing:i}=n,v=n.colors.border.strong,L=n.colors.primary.main,R=n.colors.primary.main,$=`box-shadow: 0px 0px 0px 6px ${n.colors.primary.transparent}`;return{container:(0,r.AH)({width:"100%",margin:d?"inherit":i(1,3,1,1),paddingBottom:d&&f?n.spacing(1):"inherit",height:d?"auto":"100%"}),slider:(0,r.AH)`
      .rc-slider {
        display: flex;
        flex-grow: 1;
        margin-left: 7px; // half the size of the handle to align handle to the left on 0 value
      }
      .rc-slider-mark {
        top: ${n.spacing(1.75)};
      }
      .rc-slider-mark-text {
        color: ${n.colors.text.disabled};
        font-size: ${n.typography.bodySmall.fontSize};
      }
      .rc-slider-mark-text-active {
        color: ${n.colors.text.primary};
      }
      .rc-slider-handle {
        border: none;
        background-color: ${R};
        box-shadow: ${n.shadows.z1};
        cursor: pointer;
        opacity: 1;
      }

      .rc-slider-handle:hover,
      .rc-slider-handle:active,
      .rc-slider-handle-click-focused:focus {
        ${$};
      }

      // The triple class names is needed because that's the specificity used in the source css :(
      .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging,
      .rc-slider-handle:focus-visible {
        box-shadow: 0 0 0 5px ${n.colors.text.primary};
      }

      .rc-slider-dot,
      .rc-slider-dot-active {
        background-color: ${n.colors.text.primary};
        border-color: ${n.colors.text.primary};
      }

      .rc-slider-track {
        background-color: ${L};
      }
      .rc-slider-rail {
        background-color: ${v};
        cursor: pointer;
      }
    `,tooltip:(0,u.AH)`
      body {
        .rc-slider-tooltip {
          cursor: grab;
          user-select: none;
          z-index: ${n.zIndex.tooltip};
        }

        .rc-slider-tooltip-inner {
          color: ${n.colors.text.primary};
          background-color: transparent !important;
          border-radius: 0;
          box-shadow: none;
        }

        .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
          display: none;
        }

        .rc-slider-tooltip-placement-top {
          padding: 0;
        }
      }
    `,sliderInput:(0,r.AH)({display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}),sliderInputVertical:(0,r.AH)({flexDirection:"column",height:"100%",".rc-slider":{margin:0,order:2}}),sliderInputField:(0,r.AH)({marginLeft:n.spacing(3),width:"60px",input:{textAlign:"center"}}),sliderInputFieldVertical:(0,r.AH)({margin:`0 0 ${n.spacing(3)} 0`,order:1})}}}}]);
