"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[960],{"../../node_modules/@mdx-js/react/lib/index.js":function(x,f,t){t.d(f,{BN:function(){return p},RP:function(){return u},gz:function(){return a},xA:function(){return d}});var c=t("../../node_modules/react/index.js");const p=c.createContext({});function a(i){return l;function l(s){const m=u(s.components);return c.createElement(i,{...s,allComponents:m})}}function u(i){const l=c.useContext(p);return c.useMemo(()=>typeof i=="function"?i(l):{...l,...i},[l,i])}const h={};function d({components:i,children:l,disableParentContext:s}){let m;return s?m=typeof i=="function"?i({}):i||h:m=u(i),c.createElement(p.Provider,{value:m},l)}},"./src/components/DateTimePickers/TimeRangeInput.story.tsx":function(x,f,t){t.r(f),t.d(f,{Basic:function(){return k},default:function(){return ie}});var c=t("../../node_modules/@storybook/addon-actions/dist/index.mjs"),p=t("@storybook/client-api"),a=t("../../node_modules/react/index.js"),u=t("../grafana-data/src/datetime/moment_wrapper.ts"),h=t("../grafana-data/src/types/time.ts"),d=t("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("../grafana-e2e-selectors/src/selectors/index.ts"),l=t("./src/themes/ThemeContext.tsx"),s=t("./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx"),m=t("./src/components/Icon/Icon.tsx"),g=t("./src/components/Input/Input.tsx"),C=t("./src/components/DateTimePickers/TimeRangePicker/TimePickerContent.tsx"),R=t("./src/components/DateTimePickers/TimeRangePicker.tsx"),v=t("./src/components/DateTimePickers/utils.ts");const P=(0,a.memo)(function({hideText:n,value:r,timeZone:b="browser",placeholder:S="No time range selected",className:j}){const _=(0,l.of)(U);return n?null:a.createElement("span",{className:j},(0,v.X)(r)?a.createElement(R._8,{value:r,timeZone:b}):a.createElement("span",{className:_.placeholder},S))}),U=e=>({placeholder:(0,d.AH)({color:e.colors.text.disabled,opacity:1})});try{P.displayName="TimeRangeLabel",P.__docgenInfo={description:"",displayName:"TimeRangeLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TimeRange"}},hideText:{defaultValue:null,description:"",name:"hideText",required:!1,type:{name:"boolean"}},timeZone:{defaultValue:null,description:"",name:"timeZone",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeRangePicker/TimeRangeLabel.tsx#TimeRangeLabel"]={docgenInfo:P.__docgenInfo,name:"TimeRangeLabel",path:"src/components/DateTimePickers/TimeRangePicker/TimeRangeLabel.tsx#TimeRangeLabel"})}catch{}var Y=t("./src/components/DateTimePickers/options.ts");const Q=()=>{},T=({value:e,onChange:n,onChangeTimeZone:r=Q,clearable:b,hideTimeZone:S=!0,timeZone:j="browser",placeholder:_="Select time range",isReversed:le=!0,hideQuickRanges:ce=!1,disabled:A=!1,showIcon:ue=!1})=>{const[w,z]=(0,a.useState)(!1),y=(0,l.of)(F,A),de=O=>{O.stopPropagation(),O.preventDefault(),!A&&z(!w)},K=()=>{z(!1)},pe=O=>{K(),n(O)},me=O=>{O.stopPropagation();const X=(0,u.KQ)(null),H=(0,u.KQ)(null);n({from:X,to:H,raw:{from:X,to:H}})};return a.createElement("div",{className:y.container},a.createElement("button",{type:"button",className:y.pickerInput,"data-testid":i.Tp.components.TimePicker.openButton,onClick:de},ue&&a.createElement(m.I,{name:"clock-nine",size:"sm",className:y.icon}),a.createElement(P,{value:e,timeZone:j,placeholder:_}),!A&&a.createElement("span",{className:y.caretIcon},(0,v.X)(e)&&b&&a.createElement(m.I,{className:y.clearIcon,name:"times",size:"lg",onClick:me}),a.createElement(m.I,{name:w?"angle-up":"angle-down",size:"lg"}))),w&&a.createElement(s.N,{includeButtonPress:!1,onClick:K},a.createElement(C.r,{timeZone:j,value:(0,v.X)(e)?e:(0,h.E2)(),onChange:pe,quickOptions:Y.o,onChangeTimeZone:r,className:y.content,hideTimeZone:S,isReversed:le,hideQuickRanges:ce})))},F=(e,n=!1)=>{const r=(0,g.n)({theme:e,invalid:!1});return{container:(0,d.AH)({display:"flex",position:"relative"}),content:(0,d.AH)({marginLeft:0,position:"absolute",top:"116%",zIndex:e.zIndex.dropdown}),pickerInput:(0,d.cx)(r.input,n&&r.inputDisabled,r.wrapper,(0,d.AH)({display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",paddingRight:0,lineHeight:`${e.spacing.gridSize*4-2}px`})),caretIcon:(0,d.cx)(r.suffix,(0,d.AH)({position:"relative",top:"-1px",marginLeft:e.spacing(.5)})),clearIcon:(0,d.AH)({marginRight:e.spacing(.5),"&:hover":{color:e.colors.text.maxContrast}}),placeholder:(0,d.AH)({color:e.colors.text.disabled,opacity:1}),icon:(0,d.AH)({marginRight:e.spacing(.5)})}};try{T.displayName="TimeRangeInput",T.__docgenInfo={description:"",displayName:"TimeRangeInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TimeRange"}},timeZone:{defaultValue:{value:"browser"},description:"",name:"timeZone",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timeRange: TimeRange) => void"}},onChangeTimeZone:{defaultValue:{value:"() => {}"},description:"",name:"onChangeTimeZone",required:!1,type:{name:"((timeZone: string) => void)"}},hideTimeZone:{defaultValue:{value:"true"},description:"",name:"hideTimeZone",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Select time range"},description:"",name:"placeholder",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:{value:"true"},description:"Controls horizontal alignment of the picker menu",name:"isReversed",required:!1,type:{name:"boolean"}},hideQuickRanges:{defaultValue:{value:"false"},description:"Controls visibility of the preset time ranges (e.g. **Last 5 minutes**) in the picker menu",name:"hideQuickRanges",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"false"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeRangeInput.tsx#TimeRangeInput"]={docgenInfo:T.__docgenInfo,name:"TimeRangeInput",path:"src/components/DateTimePickers/TimeRangeInput.tsx#TimeRangeInput"})}catch{}var o=t("../../node_modules/react/jsx-runtime.js"),D=t("../../node_modules/@mdx-js/react/lib/index.js"),$=t("../../node_modules/@storybook/blocks/dist/index.mjs");function L(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},(0,D.RP)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"timerangeinput",children:"TimeRangeInput"}),`
`,(0,o.jsxs)(n.p,{children:["A variant of ",(0,o.jsx)(n.code,{children:"TimeRangePicker"})," for use in forms."]}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dateTime(null)"})," can be used to provide empty time range value. The shape of the return value on input clear is:"]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:`{
  from: dateTime(null),
  to: dateTime(null),
  raw: {
    from: dateTime(null),
    to: dateTime(null),
  },
};
`})}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dateMath.isValid()"})," from ",(0,o.jsx)(n.code,{children:"@grafana/data"})," can be used to check for a valid time range value."]}),`
`,(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:`import { TimeRangeInput } from '@grafana/ui';

<TimeRangeInput
  value={timeRange}
  onChange={(range) => console.log('range', range)}
  onChangeTimeZone={(tz) => console.log('timezone', tz)}
/>;
`})}),`
`,(0,o.jsx)(n.h3,{id:"props",children:"Props"}),`
`,(0,o.jsx)($.ov,{of:T})]})}function q(e={}){const{wrapper:n}=Object.assign({},(0,D.RP)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(L,e)})):L(e)}var G=q,J=Object.defineProperty,ee=Object.defineProperties,ne=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,V=(e,n,r)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,I=(e,n)=>{for(var r in n||(n={}))te.call(n,r)&&V(e,r,n[r]);if(N)for(var r of N(n))re.call(n,r)&&V(e,r,n[r]);return e},E=(e,n)=>ee(e,ne(n)),W,B,Z;const M=(0,u.KQ)(Date.now()),ae=e=>!e.from.isValid()&&!e.to.isValid()&&(0,u.Ar)(e.raw.from)&&!e.raw.from.isValid()&&(0,u.Ar)(e.raw.to)&&!e.raw.to.isValid(),oe={from:null,to:null,raw:{from:null,to:null}},se={title:"Pickers and Editors/TimePickers/TimeRangeInput",component:T,parameters:{controls:{exclude:["onChange","onChangeTimeZone"]},docs:{page:G}},args:{value:{from:M.subtract(6,"h"),to:M,raw:{from:"now-6h",to:"now"}},timeZone:h.lE}},k=e=>{const[,n]=(0,p.useArgs)();return a.createElement(T,E(I({},e),{onChange:r=>{(0,c.XI)("onChange fired")(r),n({value:ae(r)?oe:r})},onChangeTimeZone:r=>{(0,c.XI)("onChangeTimeZone fired")(r),n({timeZone:r})}}))};var ie=se;k.parameters=E(I({},k.parameters),{docs:E(I({},(W=k.parameters)==null?void 0:W.docs),{source:I({originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <TimeRangeInput {...args} onChange={value => {
    action('onChange fired')(value);
    // Need some special logic to handle when the range is cleared since
    // storybook controls don't support null datetimes
    updateArgs({
      value: isOnRangeClear(value) ? nullRange : value
    });
  }} onChangeTimeZone={timeZone => {
    action('onChangeTimeZone fired')(timeZone);
    updateArgs({
      timeZone
    });
  }} />;
}`},(Z=(B=k.parameters)==null?void 0:B.docs)==null?void 0:Z.source)})})},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx":function(x,f,t){t.d(f,{N:function(){return p}});var c=t("../../node_modules/react/index.js");class p extends c.PureComponent{constructor(){super(...arguments),this.myRef=(0,c.createRef)(),this.state={hasEventListener:!1},this.onOutsideClick=u=>{const h=this.myRef.current;(!h||u.target instanceof Node&&!h.contains(u.target))&&this.props.onClick()}}componentDidMount(){this.props.parent.addEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.addEventListener("keyup",this.onOutsideClick,this.props.useCapture)}componentWillUnmount(){this.props.parent.removeEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.removeEventListener("keyup",this.onOutsideClick,this.props.useCapture)}render(){return c.createElement("div",{ref:this.myRef},this.props.children)}}p.defaultProps={includeButtonPress:!0,parent:typeof window<"u"?window:void 0,useCapture:!1};try{p.displayName="ClickOutsideWrapper",p.__docgenInfo={description:"",displayName:"ClickOutsideWrapper",props:{onClick:{defaultValue:null,description:"Callback to trigger when clicking outside of current element occurs.",name:"onClick",required:!0,type:{name:"() => void"}},includeButtonPress:{defaultValue:{value:"true"},description:"Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.",name:"includeButtonPress",required:!1,type:{name:"boolean"}},parent:{defaultValue:{value:"typeof window !== 'undefined' ? window : undefined"},description:"Object to attach the click event listener to.",name:"parent",required:!1,type:{name:"Document | Window"}},useCapture:{defaultValue:{value:"false"},description:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.",name:"useCapture",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"]={docgenInfo:p.__docgenInfo,name:"ClickOutsideWrapper",path:"src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"})}catch{}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(x,f,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=t("../../node_modules/react/index.js"),p=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,h=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(l,s,m){var g,C={},R=null,v=null;m!==void 0&&(R=""+m),s.key!==void 0&&(R=""+s.key),s.ref!==void 0&&(v=s.ref);for(g in s)u.call(s,g)&&!d.hasOwnProperty(g)&&(C[g]=s[g]);if(l&&l.defaultProps)for(g in s=l.defaultProps,s)C[g]===void 0&&(C[g]=s[g]);return{$$typeof:p,type:l,key:R,ref:v,props:C,_owner:h.current}}f.Fragment=a,f.jsx=i,f.jsxs=i},"../../node_modules/react/jsx-runtime.js":function(x,f,t){x.exports=t("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
