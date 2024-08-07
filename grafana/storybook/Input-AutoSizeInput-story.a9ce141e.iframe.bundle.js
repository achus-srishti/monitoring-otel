"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1572],{"./src/components/Input/AutoSizeInput.story.tsx":function(E,S,s){s.r(S),s.d(S,{Simple:function(){return O},default:function(){return ne}});var u=s("../../node_modules/react/index.js"),m=s("./src/utils/measureText.ts"),A=s("./src/components/Input/Input.tsx"),g=Object.defineProperty,v=Object.defineProperties,I=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,x=(t,e,n)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))l.call(e,n)&&x(t,n,e[n]);if(h)for(var n of h(e))c.call(e,n)&&x(t,n,e[n]);return t},a=(t,e)=>v(t,I(e)),i=(t,e)=>{var n={};for(var d in t)l.call(t,d)&&e.indexOf(d)<0&&(n[d]=t[d]);if(t!=null&&h)for(var d of h(t))e.indexOf(d)<0&&c.call(t,d)&&(n[d]=t[d]);return n};const o=u.forwardRef((t,e)=>{const n=t,{defaultValue:d="",minWidth:f=10,maxWidth:$,onCommitChange:z,onKeyDown:U,onBlur:Y}=n,re=i(n,["defaultValue","minWidth","maxWidth","onCommitChange","onKeyDown","onBlur"]),[V,oe]=u.useState(d),[ie,ae]=u.useState(f);return(0,u.useEffect)(()=>{ae(j(V.toString(),f,$))},[V,$,f]),u.createElement(A.p,a(p({},re),{ref:e,value:V.toString(),onChange:y=>{oe(y.currentTarget.value)},width:ie,onBlur:y=>{Y?Y(y):z&&z(y)},onKeyDown:y=>{U?U(y):y.key==="Enter"&&z&&z(y)},"data-testid":"autosize-input"}))});function j(t,e,n){if(!t)return e;const d=3,f=(0,m.kD)(t.toString(),14).width/8+d;return e&&f<e?e:n&&f>n?n:f}o.displayName="AutoSizeInput";try{o.displayName="AutoSizeInput",o.__docgenInfo={description:"",displayName:"AutoSizeInput",props:{minWidth:{defaultValue:null,description:"Sets the min-width to a multiple of 8px. Default value is 10",name:"minWidth",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}},maxWidth:{defaultValue:null,description:"Sets the max-width to a multiple of 8px.",name:"maxWidth",required:!1,type:{name:"number"}},onCommitChange:{defaultValue:null,description:"onChange function that will be run on onBlur and onKeyPress with enter",name:"onCommitChange",required:!1,type:{name:"((event: FormEvent<HTMLInputElement>) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/AutoSizeInput.tsx#AutoSizeInput"]={docgenInfo:o.__docgenInfo,name:"AutoSizeInput",path:"src/components/Input/AutoSizeInput.tsx#AutoSizeInput"})}catch{}var _=s("./src/components/Button/Button.tsx"),w=s("./src/utils/storybook/icons.ts"),r=s("../../node_modules/react/jsx-runtime.js"),B=s("../../node_modules/@mdx-js/react/lib/index.js"),C=s("../../node_modules/@storybook/blocks/dist/index.mjs"),H=s("./src/components/Forms/Field.tsx"),X=s("./src/components/Icon/Icon.tsx");function D(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,B.RP)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"autosizeinput",children:"AutoSizeInput"}),`
`,(0,r.jsxs)(e.p,{children:["You can use it or regular text input. When used, AutoSizeInput resizes itself to the current content. For an array of data or tree-structured data, consider using ",(0,r.jsx)(e.code,{children:"Select"})," or ",(0,r.jsx)(e.code,{children:"Cascader"})," respectively."]}),`
`,(0,r.jsx)(e.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),`
`,(0,r.jsxs)(e.p,{children:["To add more context to the input, you can add either text or an icon before or after the input using the ",(0,r.jsx)(e.code,{children:"prefix"})," and ",(0,r.jsx)(e.code,{children:"suffix"}),". Here are some examples for you to try in the canvas!"]}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:`<AutoSizeInput prefix={<Icon name="search" />} />
`})}),`
`,(0,r.jsx)(C.lN,{children:(0,r.jsx)(o,{prefix:(0,r.jsx)(X.I,{name:"search"})})}),`
`,(0,r.jsx)(e.h2,{id:"usage-in-forms-with-field",children:"Usage in forms with Field"}),`
`,(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"AutoSizeInput"}),"with the",(0,r.jsx)(e.code,{children:"Field"}),"component to get labels and descriptions. Also, you can use",(0,r.jsx)(e.code,{children:"AutoSizeInput"}),"with the",(0,r.jsx)(e.code,{children:"required"}),"attribute for validation. See the",(0,r.jsx)(e.code,{children:"Field"})," component for more information."]}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:`<Field label="Important information" description="This information is very important, so you really need to fill it in">
  <AutoSizeInput name="importantInput" required />
</Field>
`})}),`
`,(0,r.jsx)(C.lN,{children:(0,r.jsx)(H.D,{label:"Important information!",description:"Please enter the relevant information.",children:(0,r.jsx)(o,{name:"importantInput",required:!0})})}),`
`,(0,r.jsx)(C.ov,{of:o})]})}function G(t={}){const{wrapper:e}=Object.assign({},(0,B.RP)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(D,t)})):D(t)}var q=G,T=s("./src/components/Input/storyUtils.tsx"),J=Object.defineProperty,Q=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,N=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&N(t,n,e[n]);if(F)for(var n of F(e))ee.call(e,n)&&N(t,n,e[n]);return t},W=(t,e)=>Q(t,Z(e)),R,M,K;const P=b({},w.a);Object.keys(P).forEach(t=>{P[t]=`icon-${P[t]}`});const L=b({Text:"$"},P),te={title:"Forms/Input/AutoSizeInput",component:o,parameters:{docs:{page:q},controls:{exclude:["prefix","suffix","addonBefore","addonAfter"]}},args:{type:"text",width:40,prefixVisible:"",suffixVisible:"",invalid:!1,loading:!1},argTypes:{prefixVisible:{control:{type:"select",options:L}},suffixVisible:{control:{type:"select",options:L}},type:{control:{type:"select",options:["text","number","password"]}},minWidth:{control:{type:"range",min:10,max:200,step:10}}}},O=t=>{const e=u.createElement(_.$n,{variant:"secondary"},"Load"),n=u.createElement("div",{style:{display:"flex",alignItems:"center",padding:"5px"}},"AutoSizeInput"),d=(0,T.C)(t.prefixVisible),f=(0,T.C)(t.suffixVisible);return u.createElement(o,{disabled:t.disabled,prefix:d,invalid:t.invalid,width:t.width,suffix:f,loading:t.loading,addonBefore:t.before&&n,addonAfter:t.after&&e,type:t.type,placeholder:t.placeholder,minWidth:t.minWidth})};O.args={disabled:!1,before:!1,after:!1,placeholder:"Enter your name here..."};var ne=te;O.parameters=W(b({},O.parameters),{docs:W(b({},(R=O.parameters)==null?void 0:R.docs),{source:b({originalSource:`args => {
  const addonAfter = <Button variant="secondary">Load</Button>;
  const addonBefore = <div style={{
    display: 'flex',
    alignItems: 'center',
    padding: '5px'
  }}>AutoSizeInput</div>;
  const prefix = parseAccessory(args.prefixVisible);
  const suffix = parseAccessory(args.suffixVisible);
  return <AutoSizeInput disabled={args.disabled} prefix={prefix} invalid={args.invalid} width={args.width} suffix={suffix} loading={args.loading} addonBefore={args.before && addonBefore} addonAfter={args.after && addonAfter} type={args.type} placeholder={args.placeholder} minWidth={args.minWidth} />;
}`},(K=(M=O.parameters)==null?void 0:M.docs)==null?void 0:K.source)})})},"./src/utils/measureText.ts":function(E,S,s){s.d(S,{Vr:function(){return h},Yc:function(){return v},kD:function(){return I}});let u;const m=new Map,A=500;let g="";function v(){return u||(u=document.createElement("canvas").getContext("2d")),u}function I(l,c,x=400){const p=`${x} ${c}px 'Inter'`,a=l+p,i=m.get(a);if(i)return i;const o=v();g!==p&&(o.font=g=p);const j=o.measureText(l);return m.size===A&&m.clear(),m.set(a,j),j}function h(l,c,x,p,a,i){const o=I(l,14,i),j=c/(o.width+2)*14,_=x/p,w=Math.min(_,j);return Math.min(w,a??w)}},"./src/utils/storybook/icons.ts":function(E,S,s){s.d(S,{a:function(){return p}});var u=s("./src/types/icon.ts"),m=Object.defineProperty,A=Object.defineProperties,g=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,l=(a,i,o)=>i in a?m(a,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[i]=o,c=(a,i)=>{for(var o in i||(i={}))I.call(i,o)&&l(a,o,i[o]);if(v)for(var o of v(i))h.call(i,o)&&l(a,o,i[o]);return a},x=(a,i)=>A(a,g(i));const p=c({None:void 0},(0,u.GO)().reduce((a,i)=>x(c({},a),{[`Icon: ${i}`]:`${i}`}),{}))}}]);
