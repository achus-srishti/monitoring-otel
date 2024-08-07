"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9388],{"../../node_modules/@mdx-js/react/lib/index.js":function(T,b,l){l.d(b,{BN:function(){return p},RP:function(){return d},gz:function(){return v},xA:function(){return L}});var o=l("../../node_modules/react/index.js");const p=o.createContext({});function v(a){return u;function u(n){const m=d(n.components);return o.createElement(a,{...n,allComponents:m})}}function d(a){const u=o.useContext(p);return o.useMemo(()=>typeof a=="function"?a(u):{...u,...a},[u,a])}const C={};function L({components:a,children:u,disableParentContext:n}){let m;return n?m=typeof a=="function"?a({}):a||C:m=d(a),o.createElement(p.Provider,{value:m},u)}},"./src/components/Forms/RadioButtonList/RadioButtonList.story.tsx":function(T,b,l){l.r(b),l.d(b,{ControlledComponent:function(){return x},Default:function(){return h},DisabledCheckedOption:function(){return _},DisabledList:function(){return R},DisabledOptions:function(){return O},Dots:function(){return j},LongLabels:function(){return S},WithDescriptions:function(){return E},default:function(){return ve}});var o=l("../../node_modules/react/index.js"),p=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),v=l("./src/themes/ThemeContext.tsx");const d=({id:t,name:e,label:s,checked:B,value:w,disabled:A,description:k,onChange:N})=>{const P=(0,v.of)(C);return o.createElement("label",{title:k,className:P.label},o.createElement("input",{id:t,name:e,type:"radio",checked:B,value:w,disabled:A,className:P.input,onChange:()=>N&&N(t)}),o.createElement("div",null,s,k&&o.createElement("div",{className:P.description},k)))},C=t=>({input:(0,p.AH)({position:"relative",appearance:"none",outline:"none",backgroundColor:t.colors.background.canvas,width:`${t.spacing(2)} !important`,height:t.spacing(2),border:`1px solid ${t.colors.border.medium}`,borderRadius:t.shape.radius.circle,margin:"3px 0",":checked":{backgroundColor:t.v1.palette.white,border:`5px solid ${t.colors.primary.main}`},":disabled":{backgroundColor:`${t.colors.action.disabledBackground} !important`,borderColor:t.colors.border.weak},":disabled:checked":{border:`1px solid ${t.colors.border.weak}`},":disabled:checked::after":{content:'""',width:"6px",height:"6px",backgroundColor:t.colors.text.disabled,borderRadius:t.shape.radius.circle,display:"inline-block",position:"absolute",top:"4px",left:"4px"},":focus":{outline:"none !important",boxShadow:`0 0 0 1px ${t.colors.background.canvas}, 0 0 0 3px ${t.colors.primary.main}`}}),label:(0,p.AH)({fontSize:t.typography.fontSize,lineHeight:"22px",display:"grid",gridTemplateColumns:`${t.spacing(2)} auto`,gap:t.spacing(1)}),description:(0,p.AH)({fontSize:t.typography.size.sm,color:t.colors.text.secondary})});try{d.displayName="RadioButtonDot",d.__docgenInfo={description:"",displayName:"RadioButtonDot",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonList/RadioButtonDot.tsx#RadioButtonDot"]={docgenInfo:d.__docgenInfo,name:"RadioButtonDot",path:"src/components/Forms/RadioButtonList/RadioButtonDot.tsx#RadioButtonDot"})}catch{}var L=l("../../node_modules/lodash/lodash.js");function a({name:t,id:e,options:s,value:B,onChange:w,className:A,disabled:k,disabledOptions:N=[]}){const P=(0,v.of)(u),ye=e??(0,L.uniqueId)("radiogroup-list-");return o.createElement("div",{id:e,className:(0,p.cx)(P.container,A),role:"radiogroup"},s.map((g,ue)=>{const xe=`${ye}-${ue}`,Oe=B&&B===g.value,_e=k||N.some(je=>je===g.value),Re=()=>w&&g.value&&w(g.value);return o.createElement(d,{key:ue,id:xe,name:t,label:g.label,description:g.description,checked:Oe,value:g.value,disabled:_e,onChange:Re})}))}const u=t=>({container:(0,p.AH)({display:"grid",gap:t.spacing(1)})});try{a.displayName="RadioButtonList",a.__docgenInfo={description:"",displayName:"RadioButtonList",props:{name:{defaultValue:null,description:"A name of a radio group. Used to group multiple radio inputs into a single group",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"An array of available options",name:"options",required:!0,type:{name:"SelectableValue<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},disabled:{defaultValue:null,description:"Disables all elements in the list",name:"disabled",required:!1,type:{name:"boolean"}},disabledOptions:{defaultValue:{value:"[]"},description:"Disables subset of elements in the list. Compares values using the === operator",name:"disabledOptions",required:!1,type:{name:"T[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonList/RadioButtonList.tsx#RadioButtonList"]={docgenInfo:a.__docgenInfo,name:"RadioButtonList",path:"src/components/Forms/RadioButtonList/RadioButtonList.tsx#RadioButtonList"})}catch{}var n=l("../../node_modules/react/jsx-runtime.js"),m=l("../../node_modules/@mdx-js/react/lib/index.js"),c=l("../../node_modules/@storybook/blocks/dist/index.mjs");function f(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,m.RP)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.W8,{title:"MDX|RadioButtonList",component:a}),`
`,(0,n.jsx)(e.h1,{id:"radiobuttonlist",children:"RadioButtonList"}),`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"RadioButtonList"})," is used to select a single value from multiple mutually exclusive options usually in a vertical manner."]}),`
`,(0,n.jsx)(e.h2,{id:"when-to-use",children:"When to use"}),`
`,(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"RadioButtonList"}),` for mutually exclusive selections.
Contrary to the `,(0,n.jsx)(e.a,{href:"?path=/docs/forms-radiobuttongroup--radio-buttons",children:"RadioButtonGroup"})," component, ",(0,n.jsx)(e.code,{children:"RadioButtonList"})," can contain more than four options because by default it lays out the items vertically."]}),`
`,(0,n.jsxs)(e.p,{children:["This component should be used instead of ",(0,n.jsx)(e.a,{href:"?path=/docs/forms-select--basic",children:"Select"})," when there is a need for the user to see all of the options available without clicking and scrolling the dropdown."]}),`
`,(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),`
`,(0,n.jsx)(e.h3,{id:"basic-radio-group",children:"Basic radio group"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

<RadioButtonGroup options={...} value={...} onChange={...} />

`})}),`
`,(0,n.jsx)(e.h3,{id:"disabled-options",children:"Disabled options"}),`
`,(0,n.jsxs)(e.p,{children:["You can disable some options by passing them to the ",(0,n.jsx)(e.code,{children:"disabledOptions"}),` prop.
Keep in mind the `,(0,n.jsx)(e.code,{children:"disabledOptions"})," are compared with options' values by the ",(0,n.jsx)(e.code,{children:"==="})," operator."]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

const options = [
  { label: 'Prometheus', value: 'prometheus' },
  { label: 'Graphite', value: 'graphite' },
  { label: 'Elastic', value: 'elastic' },
  { label: 'InfluxDB', value: 'influx' },
];

const disabledOptions = ['prometheus', 'elastic'];


<RadioButtonGroup
  options={options}
  disabledOptions={disabledOptions}
  value={...}
  onChange={...}
/>
`})}),`
`,(0,n.jsx)(e.h3,{id:"options-with-descriptions",children:"Options with descriptions"}),`
`,(0,n.jsx)(e.p,{children:`You can add descriptions to the options by passing them to the option's description property.
Descriptions should be short and concise. Try to avoid multiline text.`}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

const options = [
  { label: 'Prometheus', value: 'prometheus', description: 'Monitoring system & TSDB' },
  { label: 'Loki', value: 'loki', description: 'Log aggregation system' },
];

const disabledOptions = ['prometheus', 'elastic'];


<RadioButtonGroup
  options={options}
  disabledOptions={disabledOptions}
  value={...}
  onChange={...}
/>
`})}),`
`,(0,n.jsx)(e.h3,{id:"changing-layout",children:"Changing layout"}),`
`,(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"RadioButtonList"})," layout uses CSS Grid, so it is effortless to split the list into multiple columns"]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

<RadioButtonGroup
  options={...}
  value={...}
  onChange={...}
  className={css\`
    grid-template-columns: 1fr 1fr 1fr;
  \`}
/>

`})}),`
`,(0,n.jsx)(c.ov,{of:a})]})}function D(t={}){const{wrapper:e}=Object.assign({},(0,m.RP)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(f,t)})):f(t)}var q=D,ce=Object.defineProperty,pe=Object.defineProperties,me=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,W=(t,e,s)=>e in t?ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var s in e||(e={}))be.call(e,s)&&W(t,s,e[s]);if(V)for(var s of V(e))fe.call(e,s)&&W(t,s,e[s]);return t},r=(t,e)=>pe(t,me(e)),I,M,$,F,X,G,U,Y,K,z,H,J,Q,Z,ee,te,ne,oe,ae,ie,se,le,re,de;const y=[{label:"Option 1",value:"opt-1"},{label:"Option 2",value:"opt-2"},{label:"Option 3",value:"opt-3"},{label:"Option 4",value:"opt-4"},{label:"Option 5",value:"opt-5"}],he={title:"Forms/RadioButtonList",component:a,parameters:{controls:{exclude:["name","id","keySelector","onChange","className","value"]},docs:{page:q}},argTypes:{value:{options:y.map(t=>t.value)},disabledOptions:{control:"multi-select",options:y.map(t=>t.value)}},args:{options:y,disabled:!1}},ge=[{value:"opt-1",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},{value:"opt-2",label:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{value:"opt-3",label:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},{value:"opt-4",label:"Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Congue quisque egestas diam in. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Augue lacus viverra vitae congue eu consequat ac."},{value:"opt-5",label:"Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Elit eget gravida cum sociis natoque penatibus et magnis dis. Varius sit amet mattis vulputate. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend."}],h=({disabled:t,disabledOptions:e})=>o.createElement("div",null,o.createElement(a,{name:"default",options:y,disabled:t,disabledOptions:e})),S=({disabled:t,disabledOptions:e})=>o.createElement("div",null,o.createElement(a,{name:"default",options:ge,disabled:t,disabledOptions:e})),E=({disabled:t,disabledOptions:e})=>o.createElement("div",null,o.createElement(a,{name:"withDescriptions",options:[{label:"Prometheus",value:"prometheus",description:"Monitoring system & TSDB"},{label:"Loki",value:"loki",description:"Log aggregation system"}]})),x=({disabled:t,disabledOptions:e})=>{const[s,B]=(0,o.useState)(y[0].value);return o.createElement("div",null,o.createElement(a,{name:"default",options:y,value:s,onChange:B,disabled:t,disabledOptions:e}))},O=h.bind({});O.args={disabledOptions:["opt-4","opt-5"]};const _=x.bind({});_.args={value:"opt-2",disabledOptions:["opt-1","opt-2","opt-3"]};const R=h.bind({});R.args={disabled:!0};const j=()=>{const t=({title:e,children:s})=>o.createElement("div",{style:{marginBottom:20}},o.createElement("h5",null,e),s);return o.createElement("div",null,o.createElement(t,{title:"Default"},o.createElement(d,{id:"1",name:"default-empty",label:"Radio label",checked:!1})),o.createElement(t,{title:"Checked"},o.createElement(d,{id:"2",name:"default-checked",label:"Radio label",checked:!0})),o.createElement(t,{title:"Disabled default"},o.createElement(d,{id:"3",name:"disabled-default-empty",label:"Radio label",disabled:!0})),o.createElement(t,{title:"Disabled checked"},o.createElement(d,{id:"4",name:"disabled-default-checked",label:"Radio label",checked:!0,disabled:!0})))};j.parameters={controls:{hideNoControlsWarning:!0}};var ve=he;h.parameters=r(i({},h.parameters),{docs:r(i({},(I=h.parameters)==null?void 0:I.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={defaultOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},($=(M=h.parameters)==null?void 0:M.docs)==null?void 0:$.source)})}),S.parameters=r(i({},S.parameters),{docs:r(i({},(F=S.parameters)==null?void 0:F.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={longTextOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(G=(X=S.parameters)==null?void 0:X.docs)==null?void 0:G.source)})}),E.parameters=r(i({},E.parameters),{docs:r(i({},(U=E.parameters)==null?void 0:U.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="withDescriptions" options={[{
    label: 'Prometheus',
    value: 'prometheus',
    description: 'Monitoring system & TSDB'
  }, {
    label: 'Loki',
    value: 'loki',
    description: 'Log aggregation system'
  }]} />
  </div>`},(K=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:K.source)})}),x.parameters=r(i({},x.parameters),{docs:r(i({},(z=x.parameters)==null?void 0:z.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => {
  const [selected, setSelected] = useState<string>(defaultOptions[0].value!);
  return <div>
      <RadioButtonList name="default" options={defaultOptions} value={selected} onChange={setSelected} disabled={disabled} disabledOptions={disabledOptions} />
    </div>;
}`},(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source)})}),O.parameters=r(i({},O.parameters),{docs:r(i({},(Q=O.parameters)==null?void 0:Q.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={defaultOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})}),_.parameters=r(i({},_.parameters),{docs:r(i({},(te=_.parameters)==null?void 0:te.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => {
  const [selected, setSelected] = useState<string>(defaultOptions[0].value!);
  return <div>
      <RadioButtonList name="default" options={defaultOptions} value={selected} onChange={setSelected} disabled={disabled} disabledOptions={disabledOptions} />
    </div>;
}`},(oe=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:oe.source)})}),R.parameters=r(i({},R.parameters),{docs:r(i({},(ae=R.parameters)==null?void 0:ae.docs),{source:i({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={defaultOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(se=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:se.source)})}),j.parameters=r(i({},j.parameters),{docs:r(i({},(le=j.parameters)==null?void 0:le.docs),{source:i({originalSource:`() => {
  const Wrapper = ({
    title,
    children
  }: React.PropsWithChildren<{
    title: string;
  }>) => <div style={{
    marginBottom: 20
  }}>
      <h5>{title}</h5>
      {children}
    </div>;
  return <div>
      <Wrapper title="Default">
        <RadioButtonDot id="1" name="default-empty" label="Radio label" checked={false} />
      </Wrapper>

      <Wrapper title="Checked">
        <RadioButtonDot id="2" name="default-checked" label="Radio label" checked />
      </Wrapper>

      <Wrapper title="Disabled default">
        <RadioButtonDot id="3" name="disabled-default-empty" label="Radio label" disabled />
      </Wrapper>

      <Wrapper title="Disabled checked">
        <RadioButtonDot id="4" name="disabled-default-checked" label="Radio label" checked disabled />
      </Wrapper>
    </div>;
}`},(de=(re=j.parameters)==null?void 0:re.docs)==null?void 0:de.source)})})},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(T,b,l){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=l("../../node_modules/react/index.js"),p=Symbol.for("react.element"),v=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function a(u,n,m){var c,f={},D=null,q=null;m!==void 0&&(D=""+m),n.key!==void 0&&(D=""+n.key),n.ref!==void 0&&(q=n.ref);for(c in n)d.call(n,c)&&!L.hasOwnProperty(c)&&(f[c]=n[c]);if(u&&u.defaultProps)for(c in n=u.defaultProps,n)f[c]===void 0&&(f[c]=n[c]);return{$$typeof:p,type:u,key:D,ref:q,props:f,_owner:C.current}}b.Fragment=v,b.jsx=a,b.jsxs=a},"../../node_modules/react/jsx-runtime.js":function(T,b,l){T.exports=l("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
