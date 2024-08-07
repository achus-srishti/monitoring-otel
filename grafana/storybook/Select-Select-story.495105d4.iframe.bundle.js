"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1348],{"../../node_modules/@mdx-js/react/lib/index.js":function(V,S,r){r.d(S,{BN:function(){return m},RP:function(){return v},gz:function(){return a},xA:function(){return f}});var u=r("../../node_modules/react/index.js");const m=u.createContext({});function a(c){return e;function e(i){const b=v(i.components);return u.createElement(c,{...i,allComponents:b})}}function v(c){const e=u.useContext(m);return u.useMemo(()=>typeof c=="function"?c(e):{...e,...c},[e,c])}const n={};function f({components:c,children:e,disableParentContext:i}){let b;return i?b=typeof c=="function"?c({}):c||n:b=v(c),u.createElement(m.Provider,{value:b},e)}},"../../node_modules/@popperjs/core/lib/enums.js":function(V,S,r){r.d(S,{DD:function(){return x},GM:function(){return j},Mn:function(){return u},OM:function(){return f},Ol:function(){return E},R9:function(){return b},WY:function(){return i},_N:function(){return e},ir:function(){return P},kb:function(){return v},ni:function(){return c},pG:function(){return a},qZ:function(){return n},sQ:function(){return m},xf:function(){return O}});var u="top",m="bottom",a="right",v="left",n="auto",f=[u,m,a,v],c="start",e="end",i="clippingParents",b="viewport",O="popper",P="reference",E=f.reduce(function(A,M){return A.concat([M+"-"+c,M+"-"+e])},[]),x=[].concat(f,[n]).reduce(function(A,M){return A.concat([M,M+"-"+c,M+"-"+e])},[]),I="beforeRead",_="read",g="afterRead",o="beforeMain",p="main",C="afterMain",w="beforeWrite",l="write",d="afterWrite",j=[I,_,g,o,p,C,w,l,d]},"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(V,S,r){r.d(S,{XI:function(){return u.XI}});var u=r("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),m=(...a)=>{let v=config,n=a;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(v={...config,...n.pop()});let f=n[0];(n.length!==1||typeof f=="string")&&(f={},n.forEach(e=>{f[e]=e}));let c={};return Object.keys(f).forEach(e=>{c[e]=action(f[e],v)}),c}},"./src/components/Select/Select.story.tsx":function(V,S,r){r.r(S),r.d(S,{AutoMenuPlacement:function(){return Q},Basic:function(){return q},BasicSelectAsync:function(){return ne},BasicSelectPlainValue:function(){return k},BasicVirtualizedList:function(){return ee},CustomValueCreation:function(){return G},MultiPlainValue:function(){return B},MultiSelectAsync:function(){return Y},MultiSelectBasic:function(){return $},MultiSelectWithOptionGroups:function(){return te},SelectWithOptionDescriptions:function(){return D},WidthAuto:function(){return ae},default:function(){return De}});var u=r("../../node_modules/@popperjs/core/lib/enums.js"),m=r("../../node_modules/@storybook/addon-actions/dist/index.mjs"),a=r("../../node_modules/react/index.js"),v=r("../grafana-data/src/types/icon.ts"),n=r("./src/components/Select/Select.tsx"),f=r("./src/components/Icon/Icon.tsx"),c=r("./src/types/icon.ts"),e=r("../../node_modules/react/jsx-runtime.js"),i=r("../../node_modules/@mdx-js/react/lib/index.js"),b=r("../../node_modules/@storybook/blocks/dist/index.mjs");function O(s){const t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",strong:"strong",pre:"pre"},(0,i.RP)(),s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"select-variants",children:"Select variants"}),`
`,(0,e.jsxs)(t.p,{children:["Select is an input with the ability to search and create new values. It should be used when you have a list of options. If the data has a tree structure, consider using ",(0,e.jsx)(t.code,{children:"Cascader"}),` instead.
Select has some features:`]}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Search a list of values"}),`
`,(0,e.jsx)(t.li,{children:"Select multiple values"}),`
`,(0,e.jsx)(t.li,{children:"Select from async data"}),`
`,(0,e.jsx)(t.li,{children:"Create custom values that aren't in the list"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"select",children:"Select"}),`
`,(0,e.jsxs)(t.p,{children:["Select is the base for every component on this page. The approaches mentioned here are also applicable to ",(0,e.jsx)(t.code,{children:"AsyncSelect"}),", ",(0,e.jsx)(t.code,{children:"MultiSelect"}),", ",(0,e.jsx)(t.code,{children:"AsyncMultiSelect"}),"."]}),`
`,(0,e.jsx)(t.h3,{id:"options-format",children:"Options format"}),`
`,(0,e.jsx)(t.p,{children:"There are four properties for each option:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"label"})," - Text that is visible in the menu."]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"value"})," - Could be anything, but is usually a string. Used to identify what is ",(0,e.jsx)(t.strong,{children:"actually"})," selected."]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"description"})," - Longer description that describes the choice. Use this sparingly."]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"imgUrl"})," - URL to an image. Use this when an image or icon provides more context for the option."]}),`
`]}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`const options = [
  { label: 'Basic option', value: 0 },
  { label: 'Option with description', value: 1, description: 'this is a description' },
  {
    label: 'Option with description and image',
    value: 2,
    description: 'This is a very elaborate description, describing all the wonders in the world.',
    imgUrl: 'https://placekitten.com/40/40',
  },
];
`})}),`
`,(0,e.jsx)(t.h3,{id:"creatable-option",children:"Creatable option"}),`
`,(0,e.jsxs)(t.p,{children:["Creatable option is used when you want to be able to add a custom value to the list of options. ",(0,e.jsx)(t.code,{children:"allowCustomValue"})," needs to be true and you must handle the value creation with ",(0,e.jsx)(t.code,{children:"onCreateOption"}),"."]}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`import { Select } from "@grafana/ui";

const SelectComponent = () => {
  const [value, setValue] = useState<SelectableValue<number>>();

  return (
    <Select
      options={option}
      value={value}
      allowCustomValue
      onCreateOption={customValue => {
        setValue(customValue);
      }}
    />
  );
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"asyncselect",children:"AsyncSelect"}),`
`,(0,e.jsxs)(t.p,{children:["Like regular Select, but handles fetching options asynchronously. Use the ",(0,e.jsx)(t.code,{children:"loadOptions"})," prop for the async function that loads the options. If ",(0,e.jsx)(t.code,{children:"defaultOptions"})," is set to ",(0,e.jsx)(t.code,{children:"true"}),", ",(0,e.jsx)(t.code,{children:"loadOptions"})," will be called when the component is mounted."]}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`
import { AsyncSelect } from '@grafana/ui';

const basicSelectAsync = () => {
  const [value, setValue] = useState<SelectableValue<string>>();

  return (
    <AsyncSelect
      loadOptions={loadAsyncOptions}
      defaultOptions
      value={value}
      onChange={v => {
        setValue(v);
      }}
    />
  );
};

`})}),`
`,(0,e.jsx)(t.p,{children:"Where the async function could look like this:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:`const loadAsyncOptions = () => {
  return new Promise<Array<SelectableValue<string>>>((resolve) => {
    setTimeout(() => {
      resolve(options);
    }, 2000);
  });
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"multiselect",children:"MultiSelect"}),`
`,(0,e.jsx)(t.p,{children:"Possible to Select multiple values at the same time."}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:`import { MultiSelect } from '@grafana/ui';

const multiSelect = () => {
  const [value, setValue] = useState<Array<SelectableValue<string>>>([]);

  return (
    <>
      <MultiSelect
        options={options}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </>
  );
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"asyncmultiselect",children:"AsyncMultiSelect"}),`
`,(0,e.jsxs)(t.p,{children:["Like MultiSelect but handles data asynchronously with the ",(0,e.jsx)(t.code,{children:"loadOptions"})," prop."]}),`
`,(0,e.jsx)(t.h1,{id:"testing",children:"Testing"}),`
`,(0,e.jsxs)(t.p,{children:["Using React Testing Library, you can select the ",(0,e.jsx)(t.code,{children:"<Select />"})," using its matching label, such as the label assigned with the ",(0,e.jsx)(t.code,{children:"inputId"})," prop. Use the ",(0,e.jsx)(t.code,{children:"react-select-event"})," package to select values from the options."]}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-tsx",children:`import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import { Select } from '@grafana/ui';

it('should call onChange', () => {
  const onChange = jest.fn();

  render(
    <>
      <label htmlFor="my-select">My select</label>
      <Select onChange={onChange} options={options} inputId="my-select" />
    </>
  );

  const selectEl = screen.getByLabelText('My select');
  expect(selectEl).toBeInTheDocument();

  await selectEvent.select(selectEl, 'Option 2', { container: document.body });
  expect(onChange).toHaveBeenCalledWith({
    label: 'Option 2',
    value: 2,
  });
});
`})}),`
`,(0,e.jsx)(t.h1,{id:"props",children:"Props"}),`
`,(0,e.jsx)(b.ov,{of:n.l6})]})}function P(s={}){const{wrapper:t}=Object.assign({},(0,i.RP)(),s.components);return t?(0,e.jsx)(t,Object.assign({},s,{children:(0,e.jsx)(O,s)})):O(s)}var E=P,x=r("./src/components/Select/mockOptions.tsx"),I=Object.defineProperty,_=Object.defineProperties,g=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,w=(s,t,h)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:h}):s[t]=h,l=(s,t)=>{for(var h in t||(t={}))p.call(t,h)&&w(s,h,t[h]);if(o)for(var h of o(t))C.call(t,h)&&w(s,h,t[h]);return s},d=(s,t)=>_(s,g(t)),j,A,M,L,W,N,R,U,F,z,H,re,oe,le,se,ie,de,J,ue,ce,X,pe,ve,me,fe,ge,he,_e,ye,be,Se,xe,Oe,Ce,Ee,we,Pe,je,Ie,Ve,Me,Ae;const ke={title:"Forms/Select",component:n.l6,subcomponents:{AsyncSelect:n.DW,MultiSelect:n.KF,AsyncMultiSelect:n.Iv},parameters:{docs:{page:E},controls:{exclude:["getOptionValue","getOptionLabel","formatCreateLabel","filterOption","className","components","defaultValue","id","inputId","onBlur","onChange","onCloseMenu","onCreateOption","onInputChange","onKeyDown","onOpenMenu","prefix","renderControl","options","isOptionDisabled","aria-label","noOptionsMessage","menuPosition","isValidNewOption","value"]}},args:{width:0,disabled:!1,isLoading:!1,invalid:!1,icon:"arrow-down"},argTypes:{width:{control:{type:"range",min:1,max:100}},icon:{control:{type:"select",options:(0,c.GO)()}}}},Te=()=>new Promise(s=>{setTimeout(()=>{s((0,x.Q)())},2e3)}),T=s=>{var t;return a.createElement(f.I,{name:(t=(0,v.Uo)(s))!=null?t:"question-circle"})},q=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement(n.l6,l({options:(0,x.Q)(),value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)}},s)))},ee=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement(n.l6,l({options:(0,x.W)(),virtualized:!0,value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)}},s)))},k=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement(n.l6,l({options:(0,x.Q)(),value:t,onChange:y=>{h(y.value),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s)))},D=s=>{const[t,h]=(0,a.useState)(),y=[{label:"Basic option",value:0},{label:"Option with description",value:1,description:"this is a description"},{label:"Option with description and image",value:2,description:"This is a very elaborate description, describing all the wonders in the world.",imgUrl:"https://placekitten.com/40/40"}];return a.createElement(a.Fragment,null,a.createElement(n.l6,l({options:y,value:t,onChange:K=>{h(K.value),(0,m.XI)("onChange")(K)},prefix:T(s.icon)},s)))},B=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement(n.KF,l({options:(0,x.Q)(),value:t,onChange:y=>{h(y.map(K=>K.value))},prefix:T(s.icon)},s)))},te=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement(n.KF,l({options:[{label:"1",value:"1"},{label:"2",value:"2",options:[{label:"5",value:"5"}]}],value:t,onChange:y=>{h(y.map(K=>K.value)),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s)))},$=s=>{const[t,h]=(0,a.useState)([]);return a.createElement("div",{style:{maxWidth:"450px"}},a.createElement(n.KF,l({options:(0,x.Q)(),value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s)))};$.args={isClearable:!1,closeMenuOnSelect:!1,maxVisibleValues:5,noMultiValueWrap:!1};const Y=s=>{const[t,h]=(0,a.useState)();return a.createElement(n.Iv,l({loadOptions:Te,defaultOptions:!0,value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s))};Y.args={allowCustomValue:!1};const ne=s=>{const[t,h]=(0,a.useState)();return a.createElement(n.DW,l({loadOptions:Te,defaultOptions:!0,value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s))},Q=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"100%",height:"95vh",display:"flex",alignItems:"flex-end"}},a.createElement(n.l6,l({options:(0,x.Q)(),value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s))))};Q.args={menuPlacement:u.qZ};const ae=s=>{const[t,h]=(0,a.useState)();return a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"100%"}},a.createElement(n.l6,d(l({options:(0,x.Q)(),value:t,onChange:y=>{h(y),(0,m.XI)("onChange")(y)},prefix:T(s.icon)},s),{width:"auto"}))))},G=s=>{const[t,h]=(0,a.useState)(),[y,K]=(0,a.useState)([]),Be=(0,x.Q)();return a.createElement(a.Fragment,null,a.createElement(n.l6,l({options:[...Be,...y],value:t,onChange:Z=>{h(Z),(0,m.XI)("onChange")(Z)},allowCustomValue:s.allowCustomValue,onCreateOption:Z=>{const Re={value:Z,label:Z};K([...y,Re]),h(Re),(0,m.XI)("onCreateOption")(Z)},prefix:T(s.icon)},s)))};G.args={allowCustomValue:!0};var De=ke;q.parameters=d(l({},q.parameters),{docs:d(l({},(j=q.parameters)==null?void 0:j.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <Select options={generateOptions()} value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} {...args} />
    </>;
}`},(M=(A=q.parameters)==null?void 0:A.docs)==null?void 0:M.source)})}),ee.parameters=d(l({},ee.parameters),{docs:d(l({},(L=ee.parameters)==null?void 0:L.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <Select options={generateThousandsOfOptions()} virtualized value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} {...args} />
    </>;
}`},(N=(W=ee.parameters)==null?void 0:W.docs)==null?void 0:N.source)})}),k.parameters=d(l({},k.parameters),{docs:d(l({},(R=k.parameters)==null?void 0:R.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<string>();
  return <>
      <Select options={generateOptions()} value={value} onChange={v => {
      setValue(v.value);
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(F=(U=k.parameters)==null?void 0:U.docs)==null?void 0:F.source),description:l({story:"Uses plain values instead of SelectableValue<T>"},(H=(z=k.parameters)==null?void 0:z.docs)==null?void 0:H.description)})}),D.parameters=d(l({},D.parameters),{docs:d(l({},(re=D.parameters)==null?void 0:re.docs),{source:l({originalSource:`args => {
  // TODO this is not working with new Select

  const [value, setValue] = useState<number>();
  const options = [{
    label: 'Basic option',
    value: 0
  }, {
    label: 'Option with description',
    value: 1,
    description: 'this is a description'
  }, {
    label: 'Option with description and image',
    value: 2,
    description: 'This is a very elaborate description, describing all the wonders in the world.',
    imgUrl: 'https://placekitten.com/40/40'
  }];
  return <>
      <Select options={options} value={value} onChange={v => {
      setValue(v.value);
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(le=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:le.source),description:l({story:"Uses plain values instead of SelectableValue<T>"},(ie=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ie.description)})}),B.parameters=d(l({},B.parameters),{docs:d(l({},(de=B.parameters)==null?void 0:de.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<string[]>();
  return <>
      <MultiSelect options={generateOptions()} value={value} onChange={v => {
      setValue(v.map(v => v.value!));
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(ue=(J=B.parameters)==null?void 0:J.docs)==null?void 0:ue.source),description:l({story:"Uses plain values instead of SelectableValue<T>"},(X=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:X.description)})}),te.parameters=d(l({},te.parameters),{docs:d(l({},(pe=te.parameters)==null?void 0:pe.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<string[]>();
  return <>
      <MultiSelect options={[{
      label: '1',
      value: '1'
    }, {
      label: '2',
      value: '2',
      options: [{
        label: '5',
        value: '5'
      }]
    }]} value={value} onChange={v => {
      setValue(v.map(v => v.value!));
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(me=(ve=te.parameters)==null?void 0:ve.docs)==null?void 0:me.source)})}),$.parameters=d(l({},$.parameters),{docs:d(l({},(fe=$.parameters)==null?void 0:fe.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<Array<SelectableValue<string>>>([]);
  return <div style={{
    maxWidth: '450px'
  }}>
      <MultiSelect options={generateOptions()} value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </div>;
}`},(he=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:he.source)})}),Y.parameters=d(l({},Y.parameters),{docs:d(l({},(_e=Y.parameters)==null?void 0:_e.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<Array<SelectableValue<string>>>();
  return <AsyncMultiSelect loadOptions={loadAsyncOptions} defaultOptions value={value} onChange={v => {
    setValue(v);
    action('onChange')(v);
  }} prefix={getPrefix(args.icon)} {...args} />;
}`},(be=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:be.source)})}),ne.parameters=d(l({},ne.parameters),{docs:d(l({},(Se=ne.parameters)==null?void 0:Se.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <AsyncSelect loadOptions={loadAsyncOptions} defaultOptions value={value} onChange={v => {
    setValue(v);
    action('onChange')(v);
  }} prefix={getPrefix(args.icon)} {...args} />;
}`},(Oe=(xe=ne.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source)})}),Q.parameters=d(l({},Q.parameters),{docs:d(l({},(Ce=Q.parameters)==null?void 0:Ce.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <div style={{
      width: '100%',
      height: '95vh',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
        <Select options={generateOptions()} value={value} onChange={v => {
        setValue(v);
        action('onChange')(v);
      }} prefix={getPrefix(args.icon)} {...args} />
      </div>
    </>;
}`},(we=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:we.source)})}),ae.parameters=d(l({},ae.parameters),{docs:d(l({},(Pe=ae.parameters)==null?void 0:Pe.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <div style={{
      width: '100%'
    }}>
        <Select options={generateOptions()} value={value} onChange={v => {
        setValue(v);
        action('onChange')(v);
      }} prefix={getPrefix(args.icon)} {...args} width="auto" />
      </div>
    </>;
}`},(Ie=(je=ae.parameters)==null?void 0:je.docs)==null?void 0:Ie.source)})}),G.parameters=d(l({},G.parameters),{docs:d(l({},(Ve=G.parameters)==null?void 0:Ve.docs),{source:l({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  const [customOptions, setCustomOptions] = useState<Array<SelectableValue<string>>>([]);
  const options = generateOptions();
  return <>
      <Select options={[...options, ...customOptions]} value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} allowCustomValue={args.allowCustomValue} onCreateOption={v => {
      const customValue: SelectableValue<string> = {
        value: v,
        label: v
      };
      setCustomOptions([...customOptions, customValue]);
      setValue(customValue);
      action('onCreateOption')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(Ae=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source)})});try{k.displayName="BasicSelectPlainValue",k.__docgenInfo={description:"Uses plain values instead of SelectableValue<T>",displayName:"BasicSelectPlainValue",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.story.tsx#BasicSelectPlainValue"]={docgenInfo:k.__docgenInfo,name:"BasicSelectPlainValue",path:"src/components/Select/Select.story.tsx#BasicSelectPlainValue"})}catch{}try{D.displayName="SelectWithOptionDescriptions",D.__docgenInfo={description:"Uses plain values instead of SelectableValue<T>",displayName:"SelectWithOptionDescriptions",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.story.tsx#SelectWithOptionDescriptions"]={docgenInfo:D.__docgenInfo,name:"SelectWithOptionDescriptions",path:"src/components/Select/Select.story.tsx#SelectWithOptionDescriptions"})}catch{}try{B.displayName="MultiPlainValue",B.__docgenInfo={description:"Uses plain values instead of SelectableValue<T>",displayName:"MultiPlainValue",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.story.tsx#MultiPlainValue"]={docgenInfo:B.__docgenInfo,name:"MultiPlainValue",path:"src/components/Select/Select.story.tsx#MultiPlainValue"})}catch{}},"../grafana-data/src/types/icon.ts":function(V,S,r){r.d(S,{Uo:function(){return a},az:function(){return u},n6:function(){return m}});const u={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function m(v){return!v||typeof v!="string"?!1:v in u}function a(v){if(m(v))return v}},"./src/components/Forms/commonStyles.ts":function(V,S,r){r.d(S,{SM:function(){return e},Xb:function(){return v},g$:function(){return n},gm:function(){return a},lH:function(){return f}});var u=r("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=r("./src/themes/mixins.ts");const a=i=>(0,u.AH)({"&:focus":(0,m.Hi)(i)}),v=(i,b=!1)=>{const O=b?i.colors.error.border:i.components.input.borderColor,P=b?i.colors.error.shade:i.components.input.borderHover,E=i.components.input.background,x=i.components.input.text,I=i.isDark?"#2e2f35":"#bab4ca";return(0,u.cx)(n(i),(0,u.AH)({background:E,lineHeight:i.typography.body.lineHeight,fontSize:i.typography.size.md,color:x,border:`1px solid ${O}`,"&:-webkit-autofill, &:-webkit-autofill:hover":{boxShadow:`inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${E}!important`,WebkitTextFillColor:`${x} !important`,borderColor:I},"&:-webkit-autofill:focus":{boxShadow:`0 0 0 2px ${i.colors.background.primary}, 0 0 0px 4px ${i.colors.primary.main}, inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${E}!important`,WebkitTextFillColor:`${x} !important`},"&:hover":{borderColor:P},"&:focus":{outline:"none"},"&:disabled":{backgroundColor:i.colors.action.disabledBackground,color:i.colors.action.disabledText,border:`1px solid ${i.colors.action.disabledBackground}`,"&:hover":{borderColor:O}},"&::placeholder":{color:i.colors.text.disabled,opacity:1}}))},n=i=>(0,u.AH)({padding:i.spacing(0,1,0,1)}),f=()=>({sm:(0,u.AH)({width:c("sm")}),md:(0,u.AH)({width:c("md")}),lg:(0,u.AH)({width:c("lg")}),auto:(0,u.AH)({width:c("auto")})}),c=i=>{switch(i){case"sm":return"200px";case"md":return"320px";case"lg":return"580px";case"auto":default:return"auto"}};function e(i,b){switch(i){case"sm":return{padding:1,fontSize:b.typography.size.sm,height:b.components.height.sm};case"lg":return{padding:3,fontSize:b.typography.size.lg,height:b.components.height.lg};case"md":default:return{padding:2,fontSize:b.typography.size.md,height:b.components.height.md}}}},"./src/components/Icon/Icon.tsx":function(V,S,r){r.d(S,{I:function(){return I}});var u=r("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=r("../../node_modules/react/index.js"),a=r("../../node_modules/react-inlinesvg/esm/index.js"),v=r("../grafana-data/src/types/icon.ts"),n=r("./src/themes/ThemeContext.tsx"),f=r("./src/components/Icon/utils.ts"),c=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,O=(_,g,o)=>g in _?c(_,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):_[g]=o,P=(_,g)=>{for(var o in g||(g={}))i.call(g,o)&&O(_,o,g[o]);if(e)for(var o of e(g))b.call(g,o)&&O(_,o,g[o]);return _},E=(_,g)=>{var o={};for(var p in _)i.call(_,p)&&g.indexOf(p)<0&&(o[p]=_[p]);if(_!=null&&e)for(var p of e(_))g.indexOf(p)<0&&b.call(_,p)&&(o[p]=_[p]);return o};const x=_=>({icon:(0,u.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,u.AH)({fill:_.v1.palette.orange})}),I=m.forwardRef((_,g)=>{var o=_,{size:p="md",type:C="default",name:w,className:l,style:d,title:j=""}=o,A=E(o,["size","type","name","className","style","title"]);const M=(0,n.of)(x);(0,v.n6)(w)||console.warn("Icon component passed an invalid icon name",w);const L=w==="fa fa-spinner"?"spinner":w,W=(0,f.Wj)(),N=(0,f.cs)(p),R=N,U=w.startsWith("gf-bar-align")?16:w.startsWith("gf-interp")?30:N,F=(0,f.Xi)(L,C),z=`${W}${F}/${L}.svg`,H=(0,u.cx)(M.icon,l,C==="mono"?{[M.orange]:w==="favorite"}:"",L==="spinner"&&"fa-spin");return m.createElement(a.A,P({innerRef:g,src:z,width:U,height:R,title:j,className:H,style:d},A))});I.displayName="Icon";try{I.displayName="Icon",I.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:I.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(V,S,r){r.d(S,{Wj:function(){return n},Xi:function(){return m},cs:function(){return a}});const u=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function m(f,c){return f?.startsWith("gf-")?"custom":u.includes(f)?"mono":c==="default"?"unicons":c==="solid"?"solid":"mono"}function a(f){switch(f){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let v;function n(){if(v)return v;const f=typeof window<"u"&&window.__grafana_public_path__;return f?v=f+"img/icons/":v="public/img/icons/",v}},"./src/components/Portal/Portal.tsx":function(V,S,r){r.d(S,{ZL:function(){return E},gF:function(){return x}});var u=r("../../node_modules/react/index.js"),m=r("../../node_modules/react-dom/index.js"),a=r("./src/themes/ThemeContext.tsx"),v=Object.defineProperty,n=Object.defineProperties,f=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,b=(g,o,p)=>o in g?v(g,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):g[o]=p,O=(g,o)=>{for(var p in o||(o={}))e.call(o,p)&&b(g,p,o[p]);if(c)for(var p of c(o))i.call(o,p)&&b(g,p,o[p]);return g},P=(g,o)=>n(g,f(o));function E(g){const{children:o,className:p,root:C,forwardedRef:w}=g,l=(0,a.$j)(),d=(0,u.useRef)(null),j=C??x();return d.current||(d.current=document.createElement("div"),p&&(d.current.className=p),d.current.style.position="relative",d.current.style.zIndex=`${l.zIndex.portal}`),(0,u.useLayoutEffect)(()=>(d.current&&j.appendChild(d.current),()=>{d.current&&j.removeChild(d.current)}),[j]),m.createPortal(u.createElement("div",{ref:w},o),d.current)}function x(){var g;return(g=window.document.getElementById("grafana-portal-container"))!=null?g:document.body}function I(){return React.createElement("div",{id:"grafana-portal-container"})}const _=u.forwardRef((g,o)=>u.createElement(E,P(O({},g),{forwardedRef:o})));_.displayName="RefForwardingPortal";try{E.displayName="RefForwardingPortal",E.__docgenInfo={description:"",displayName:"RefForwardingPortal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"HTMLElement"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#RefForwardingPortal"]={docgenInfo:_.__docgenInfo,name:"RefForwardingPortal",path:"src/components/Portal/Portal.tsx#RefForwardingPortal"})}catch{}},"./src/components/Select/mockOptions.tsx":function(V,S,r){r.d(S,{Q:function(){return a},W:function(){return v}});var u=r("../../node_modules/lodash/lodash.js"),m=r.n(u);const a=(n=!1)=>["Sharilyn Markowitz","Naomi Striplin","Beau Bevel","Garrett Starkes","Hildegarde Pedro","Gudrun Seyler","Eboni Raines","Hye Felix","Chau Brito","Heidy Zook","Karima Husain","Virgil Mckinny","Kaley Dodrill","Sharan Ruf","Edgar Loveland","Judie Sanger","Season Bundrick","Ok Vicente","Garry Spitz","Han Harnish","A very long value that is very long and takes up a lot of space and should be truncated preferrably if it does not fit"].map(c=>({value:(0,u.kebabCase)(c),label:c,description:n?`This is a description of ${c}`:void 0})),v=()=>new Array(1e4).fill(null).map((f,c)=>({value:String(c),label:"Option "+c,description:"This is option number "+c}));try{a.displayName="generateOptions",a.__docgenInfo={description:"",displayName:"generateOptions",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/mockOptions.tsx#generateOptions"]={docgenInfo:a.__docgenInfo,name:"generateOptions",path:"src/components/Select/mockOptions.tsx#generateOptions"})}catch{}},"./src/components/Tooltip/Tooltip.tsx":function(V,S,r){r.d(S,{m:function(){return _}});var u=r("../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),m=r("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),a=r("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),v=r("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),n=r("../../node_modules/react/index.js"),f=r("../grafana-e2e-selectors/src/selectors/index.ts"),c=r("./src/themes/ThemeContext.tsx"),e=r("./src/utils/tooltipUtils.ts"),i=r("./src/components/Portal/Portal.tsx"),b=Object.defineProperty,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,x=(o,p,C)=>p in o?b(o,p,{enumerable:!0,configurable:!0,writable:!0,value:C}):o[p]=C,I=(o,p)=>{for(var C in p||(p={}))P.call(p,C)&&x(o,C,p[C]);if(O)for(var C of O(p))E.call(p,C)&&x(o,C,p[C]);return o};const _=n.forwardRef(({children:o,theme:p,interactive:C,show:w,placement:l,content:d},j)=>{const A=(0,n.useRef)(null),[M,L]=(0,n.useState)(w),W=w??M,N=[(0,u.cY)(8),(0,m.UU)({fallbackAxisSideDirection:"end",crossAxis:!1,boundary:document.body}),(0,m.BN)(),(0,a.UE)({element:A})],{context:R,refs:U,floatingStyles:F}=(0,v.we)({open:W,placement:(0,e.O)(l),onOpenChange:L,middleware:N,whileElementsMounted:m.ll}),z=(0,n.useId)(),H=(0,v.Mk)(R,{delay:{close:C?100:0},move:!1}),re=(0,v.iQ)(R),oe=(0,v.s9)(R),{getReferenceProps:le,getFloatingProps:se}=(0,v.bv)([oe,H,re]),ie=typeof d=="function",J=(0,c.of)(g)[p??"info"],ue=(0,n.useCallback)(X=>{U.setReference(X),typeof j=="function"?j(X):j&&(j.current=X)},[j,U]),ce="aria-label"in o.props&&o.props["aria-label"]===d;return n.createElement(n.Fragment,null,n.cloneElement(o,I({ref:ue,tabIndex:0,"aria-describedby":!ce&&W?z:void 0},le())),W&&n.createElement(i.ZL,null,n.createElement("div",I({ref:U.setFloating,style:F},se()),n.createElement(v.ie,{className:J.arrow,ref:A,context:R}),n.createElement("div",{"data-testid":f.Tp.components.Tooltip.container,id:z,role:"tooltip",className:J.container},typeof d=="string"&&d,n.isValidElement(d)&&n.cloneElement(d),ie&&d({})))))});_.displayName="Tooltip";const g=o=>{const p=(0,e.f)(o,o.components.tooltip.background,o.components.tooltip.background,o.components.tooltip.text,{topBottom:.5,rightLeft:1}),C=(0,e.f)(o,o.colors.error.main,o.colors.error.main,o.colors.error.contrastText,{topBottom:.5,rightLeft:1});return{info:p,["info-alt"]:p,error:C}};try{_.displayName="Tooltip",_.__docgenInfo={description:"",displayName:"Tooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"info-alt"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"PopoverContent"}},interactive:{defaultValue:null,description:"Set to true if you want the tooltip to stay long enough so the user can move mouse over content to select text or click a link",name:"interactive",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:_.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch{}},"./src/utils/tooltipUtils.ts":function(V,S,r){r.d(S,{O:function(){return a},f:function(){return v}});var u=r("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=r("../grafana-data/src/themes/colorManipulator.ts");function a(n){switch(n){case"auto":return"bottom";case"auto-start":return"bottom-start";case"auto-end":return"bottom-end";default:return n??"bottom"}}function v(n,f,c,e,i){return{arrow:(0,u.AH)({fill:f}),container:(0,u.AH)({backgroundColor:f,borderRadius:n.shape.radius.default,border:`1px solid ${c}`,boxShadow:n.shadows.z2,color:e,fontSize:n.typography.bodySmall.fontSize,padding:n.spacing(i.topBottom,i.rightLeft),transition:"opacity 0.3s",zIndex:n.zIndex.tooltip,maxWidth:"400px",overflowWrap:"break-word","&[data-popper-interactive='false']":{pointerEvents:"none"},code:{border:"none",display:"inline",background:m.e$(f,.1),color:e,whiteSpace:"normal"},pre:{background:m.e$(f,.1),color:e},a:{color:e,textDecoration:"underline"},"a:hover":{textDecoration:"none"}}),headerClose:(0,u.AH)({color:n.colors.text.secondary,position:"absolute",right:n.spacing(1),top:n.spacing(1.5),backgroundColor:"transparent",border:0}),header:(0,u.AH)({paddingTop:n.spacing(1),paddingBottom:n.spacing(2)}),body:(0,u.AH)({paddingTop:n.spacing(1),paddingBottom:n.spacing(1)}),footer:(0,u.AH)({paddingTop:n.spacing(2),paddingBottom:n.spacing(1)})}}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(V,S,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=r("../../node_modules/react/index.js"),m=Symbol.for("react.element"),a=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,n=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function c(e,i,b){var O,P={},E=null,x=null;b!==void 0&&(E=""+b),i.key!==void 0&&(E=""+i.key),i.ref!==void 0&&(x=i.ref);for(O in i)v.call(i,O)&&!f.hasOwnProperty(O)&&(P[O]=i[O]);if(e&&e.defaultProps)for(O in i=e.defaultProps,i)P[O]===void 0&&(P[O]=i[O]);return{$$typeof:m,type:e,key:E,ref:x,props:P,_owner:n.current}}S.Fragment=a,S.jsx=c,S.jsxs=c},"../../node_modules/react/jsx-runtime.js":function(V,S,r){V.exports=r("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
