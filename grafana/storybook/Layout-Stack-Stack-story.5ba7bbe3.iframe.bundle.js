"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6869],{"../../node_modules/@mdx-js/react/lib/index.js":function(C,w,i){i.d(w,{BN:function(){return u},RP:function(){return n},gz:function(){return g},xA:function(){return _}});var e=i("../../node_modules/react/index.js");const u=e.createContext({});function g(l){return y;function y(d){const k=n(d.components);return e.createElement(l,{...d,allComponents:k})}}function n(l){const y=e.useContext(u);return e.useMemo(()=>typeof l=="function"?l(y):{...y,...l},[y,l])}const a={};function _({components:l,children:y,disableParentContext:d}){let k;return d?k=typeof l=="function"?l({}):l||a:k=n(l),e.createElement(u.Provider,{value:k},y)}},"./src/components/Layout/Stack/Stack.story.tsx":function(C,w,i){i.r(w),i.d(w,{AlignItemsExamples:function(){return T},Basic:function(){return R},DirectionExamples:function(){return M},GapExamples:function(){return D},JustifyContentExamples:function(){return B},WrapExamples:function(){return L},default:function(){return ee}});var e=i("../../node_modules/react/index.js"),u=i("./src/themes/ThemeContext.tsx"),g=i("./src/utils/storybook/themeStorybookControls.tsx"),n=i("./src/components/Layout/Stack/Stack.tsx"),a=i("../../node_modules/react/jsx-runtime.js"),_=i("../../node_modules/@mdx-js/react/lib/index.js"),l=i("../../node_modules/@storybook/blocks/dist/index.mjs");function y(r){const t=Object.assign({h1:"h1",p:"p",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,_.RP)(),r.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.W8,{title:"MDX|Stack",component:n.B}),`
`,(0,a.jsx)(t.h1,{id:"stack",children:"Stack"}),`
`,(0,a.jsx)(t.p,{children:"The Stack component is a simple wrapper around the flexbox layout model that allows to easily create responsive and flexible layouts. It provides a simple and intuitive way to align and distribute items within a container either horizontally or vertically."}),`
`,(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),`
`,(0,a.jsx)(t.h4,{id:"when-to-use",children:"When to use"}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsx)(t.li,{children:"For creating responsive and flexible layouts that can adapt to different screen sizes and orientations."}),`
`,(0,a.jsx)(t.li,{children:"When needing a simple and intuitive way to align and distribute items within a container either horizontally or vertically."}),`
`,(0,a.jsx)(t.li,{children:"To easily reorder and rearrange elements without changing the HTML structure."}),`
`,(0,a.jsx)(t.li,{children:"When aiming to create equal height columns."}),`
`,(0,a.jsx)(t.li,{children:"To create a grid-like structure with automatic wrapping and sizing of items based on the available space."}),`
`]}),`
`,(0,a.jsx)(t.h4,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,a.jsxs)(t.ul,{children:[`
`,(0,a.jsx)(t.li,{children:"For complex multi-dimensional layouts with intricate requirements that are better suited for CSS frameworks or grid systems."}),`
`,(0,a.jsx)(t.li,{children:"When precise control over spacing and positioning of elements is necessary."}),`
`]}),`
`,(0,a.jsx)(t.h3,{id:"props",children:"Props"}),`
`,(0,a.jsx)(l.ov,{of:n.B})]})}function d(r={}){const{wrapper:t}=Object.assign({},(0,_.RP)(),r.components);return t?(0,a.jsx)(t,Object.assign({},r,{children:(0,a.jsx)(y,r)})):y(r)}var k=d,j=Object.defineProperty,S=Object.defineProperties,O=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(r,t,o)=>t in r?j(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,c=(r,t)=>{for(var o in t||(t={}))f.call(t,o)&&h(r,o,t[o]);if(s)for(var o of s(t))m.call(t,o)&&h(r,o,t[o]);return r},x=(r,t)=>S(r,O(t)),I,b,P,A,p,Y,F,N,V,K,U,X,$,G,J,z,H,q;const v=({color:r,text:t,height:o})=>e.createElement("div",{style:{width:"5em",height:o,backgroundColor:r,display:"flex",alignItems:"center",justifyContent:"center"}},t&&e.createElement("h3",{style:{color:"black"}},t)),Z={title:"General/Layout/Stack",component:n.B,parameters:{docs:{page:k}}},R=({direction:r,wrap:t,alignItems:o,justifyContent:W,gap:E})=>{const te=(0,u.$j)();return e.createElement("div",{style:{width:"600px",height:"600px",border:"1px solid grey"}},e.createElement(n.B,{direction:r,wrap:t,alignItems:o,justifyContent:W,gap:E},Array.from({length:5}).map((ne,Q)=>e.createElement(v,{key:Q,color:te.colors.warning.main,text:Q+1}))))};R.argTypes={gap:g.C,direction:{control:"select",options:["row","row-reverse","column","column-reverse"]},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},alignItems:{control:"select",options:["stretch","flex-start","flex-end","center","baseline","start","end","self-start","self-end"]},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly","start","end","left","right"]}};const T=()=>{const r=(0,u.$j)();return e.createElement("div",{style:{width:"600px"}},e.createElement("p",null,"Align items flex-start"),e.createElement(n.B,{direction:"row",wrap:"wrap",alignItems:"flex-start",justifyContent:"start",gap:2},Array.from({length:5}).map((t,o)=>e.createElement(v,{key:o,color:r.colors.error.main,text:o+1}))),e.createElement("p",null,"Align items flex-end"),e.createElement(n.B,{direction:"row",wrap:"wrap",alignItems:"flex-end",justifyContent:"end",gap:2},Array.from({length:5}).map((t,o)=>e.createElement(v,{key:o,color:r.colors.error.main,text:o+1}))),e.createElement("p",null,"Align items baseline"),e.createElement(n.B,{direction:"row",wrap:"nowrap",alignItems:"baseline",justifyContent:"center",gap:2},Array.from({length:5}).map((t,o)=>e.createElement(v,{key:o,color:r.colors.error.main,text:o+1}))),e.createElement("p",null,"Align items center"),e.createElement(n.B,{direction:"row",wrap:"wrap",alignItems:"center",justifyContent:"center",gap:2},Array.from({length:5}).map((t,o)=>e.createElement(v,{key:o,color:r.colors.error.main,text:o+1}))),e.createElement("p",null,"Align items stretch"),e.createElement(n.B,{direction:"row",wrap:"wrap",alignItems:"stretch",justifyContent:"center",gap:2},e.createElement(v,{color:r.colors.error.main,height:"10em"}),e.createElement(v,{color:r.colors.error.main}),e.createElement(v,{color:r.colors.error.main,height:"3em"}),e.createElement(v,{color:r.colors.error.main}),e.createElement(v,{color:r.colors.error.main})))},B=()=>{const r=(0,u.$j)(),t=["space-between","space-around","space-evenly","flex-start","flex-end","center"];return e.createElement("div",{style:{width:"600px"}},t.map(o=>e.createElement(e.Fragment,null,e.createElement("p",null,"Justify Content ",o),e.createElement(n.B,{direction:"row",wrap:"wrap",alignItems:"center",justifyContent:o,gap:2},Array.from({length:5}).map((W,E)=>e.createElement(v,{key:E,color:r.colors.warning.main,text:E+1}))))))},D=()=>{const r=(0,u.$j)(),t=[2,8,10];return e.createElement("div",{style:{width:"800px"}},t.map(o=>e.createElement(e.Fragment,null,e.createElement("p",null,"Gap with spacingToken set to ",o),e.createElement(n.B,{direction:"row",wrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start",gap:o},Array.from({length:5}).map((W,E)=>e.createElement(v,{key:E,color:r.colors.error.main,text:E+1}))))))},L=()=>{const r=(0,u.$j)(),t=["nowrap","wrap","wrap-reverse"];return e.createElement("div",{style:{width:"600px"}},t.map(o=>e.createElement(e.Fragment,null,e.createElement("p",null,"Wrap examples with ",o," and gap set to spacingToken 2 (16px)"),e.createElement(n.B,{direction:"row",wrap:o,alignItems:"center",justifyContent:"center",gap:2},Array.from({length:10}).map((W,E)=>e.createElement(v,{key:E,color:r.colors.warning.main,text:E+1}))))))},M=()=>{const r=(0,u.$j)(),t=["row","row-reverse","column","column-reverse"];return e.createElement("div",{style:{width:"600px"}},t.map(o=>e.createElement(e.Fragment,null,e.createElement("p",null,"Direction ",o),e.createElement(n.B,{direction:o,wrap:"wrap",alignItems:"center",justifyContent:"center",gap:2},Array.from({length:5}).map((W,E)=>e.createElement(v,{key:E,color:r.colors.warning.main,text:E+1}))))))};var ee=Z;R.parameters=x(c({},R.parameters),{docs:x(c({},(I=R.parameters)==null?void 0:I.docs),{source:c({originalSource:`({
  direction,
  wrap,
  alignItems,
  justifyContent,
  gap
}) => {
  const theme = useTheme2();
  return <div style={{
    width: '600px',
    height: '600px',
    border: '1px solid grey'
  }}>
      <Stack direction={direction} wrap={wrap} alignItems={alignItems} justifyContent={justifyContent} gap={gap}>
        {Array.from({
        length: 5
      }).map((_, i) => <Item key={i} color={theme.colors.warning.main} text={i + 1} />)}
      </Stack>
    </div>;
}`},(P=(b=R.parameters)==null?void 0:b.docs)==null?void 0:P.source)})}),T.parameters=x(c({},T.parameters),{docs:x(c({},(A=T.parameters)==null?void 0:A.docs),{source:c({originalSource:`() => {
  const theme = useTheme2();
  return <div style={{
    width: '600px'
  }}>
      <p>Align items flex-start</p>
      <Stack direction="row" wrap="wrap" alignItems="flex-start" justifyContent="start" gap={2}>
        {Array.from({
        length: 5
      }).map((_, i) => <Item key={i} color={theme.colors.error.main} text={i + 1} />)}
      </Stack>
      <p>Align items flex-end</p>
      <Stack direction="row" wrap="wrap" alignItems="flex-end" justifyContent="end" gap={2}>
        {Array.from({
        length: 5
      }).map((_, i) => <Item key={i} color={theme.colors.error.main} text={i + 1} />)}
      </Stack>
      <p>Align items baseline</p>
      <Stack direction="row" wrap="nowrap" alignItems="baseline" justifyContent="center" gap={2}>
        {Array.from({
        length: 5
      }).map((_, i) => <Item key={i} color={theme.colors.error.main} text={i + 1} />)}
      </Stack>
      <p>Align items center</p>
      <Stack direction="row" wrap="wrap" alignItems="center" justifyContent="center" gap={2}>
        {Array.from({
        length: 5
      }).map((_, i) => <Item key={i} color={theme.colors.error.main} text={i + 1} />)}
      </Stack>
      <p>Align items stretch</p>
      <Stack direction="row" wrap="wrap" alignItems="stretch" justifyContent="center" gap={2}>
        <Item color={theme.colors.error.main} height="10em" />
        <Item color={theme.colors.error.main} />
        <Item color={theme.colors.error.main} height="3em" />
        <Item color={theme.colors.error.main} />
        <Item color={theme.colors.error.main} />
      </Stack>
    </div>;
}`},(Y=(p=T.parameters)==null?void 0:p.docs)==null?void 0:Y.source)})}),B.parameters=x(c({},B.parameters),{docs:x(c({},(F=B.parameters)==null?void 0:F.docs),{source:c({originalSource:`() => {
  const theme = useTheme2();
  const justifyContentOptions: JustifyContent[] = ['space-between', 'space-around', 'space-evenly', 'flex-start', 'flex-end', 'center'];
  return <div style={{
    width: '600px'
  }}>
      {justifyContentOptions.map(justifyContent => <>
          <p>Justify Content {justifyContent}</p>
          <Stack direction="row" wrap="wrap" alignItems="center" justifyContent={justifyContent} gap={2}>
            {Array.from({
          length: 5
        }).map((_, i) => <Item key={i} color={theme.colors.warning.main} text={i + 1} />)}
          </Stack>
        </>)}
    </div>;
}`},(V=(N=B.parameters)==null?void 0:N.docs)==null?void 0:V.source)})}),D.parameters=x(c({},D.parameters),{docs:x(c({},(K=D.parameters)==null?void 0:K.docs),{source:c({originalSource:`() => {
  const theme = useTheme2();
  const gapOptions: ThemeSpacingTokens[] = [2, 8, 10];
  return <div style={{
    width: '800px'
  }}>
      {gapOptions.map(gap => <>
          <p>Gap with spacingToken set to {gap}</p>
          <Stack direction="row" wrap="wrap" alignItems="flex-start" justifyContent="flex-start" gap={gap}>
            {Array.from({
          length: 5
        }).map((_, i) => <Item key={i} color={theme.colors.error.main} text={i + 1} />)}
          </Stack>
        </>)}
    </div>;
}`},(X=(U=D.parameters)==null?void 0:U.docs)==null?void 0:X.source)})}),L.parameters=x(c({},L.parameters),{docs:x(c({},($=L.parameters)==null?void 0:$.docs),{source:c({originalSource:`() => {
  const theme = useTheme2();
  const wrapOptions: Wrap[] = ['nowrap', 'wrap', 'wrap-reverse'];
  return <div style={{
    width: '600px'
  }}>
      {wrapOptions.map(wrap => <>
          <p>Wrap examples with {wrap} and gap set to spacingToken 2 (16px)</p>
          <Stack direction="row" wrap={wrap} alignItems="center" justifyContent="center" gap={2}>
            {Array.from({
          length: 10
        }).map((_, i) => <Item key={i} color={theme.colors.warning.main} text={i + 1} />)}
          </Stack>
        </>)}
    </div>;
}`},(J=(G=L.parameters)==null?void 0:G.docs)==null?void 0:J.source)})}),M.parameters=x(c({},M.parameters),{docs:x(c({},(z=M.parameters)==null?void 0:z.docs),{source:c({originalSource:`() => {
  const theme = useTheme2();
  const directionOptions: Direction[] = ['row', 'row-reverse', 'column', 'column-reverse'];
  return <div style={{
    width: '600px'
  }}>
      {directionOptions.map(direction => <>
          <p>Direction {direction}</p>
          <Stack direction={direction} wrap="wrap" alignItems="center" justifyContent="center" gap={2}>
            {Array.from({
          length: 5
        }).map((_, i) => <Item key={i} color={theme.colors.warning.main} text={i + 1} />)}
          </Stack>
        </>)}
    </div>;
}`},(q=(H=M.parameters)==null?void 0:H.docs)==null?void 0:q.source)})})},"./src/components/Layout/Stack/Stack.tsx":function(C,w,i){i.d(w,{B:function(){return S}});var e=i("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),u=i("../../node_modules/react/index.js"),g=i("./src/themes/ThemeContext.tsx"),n=i("./src/components/Layout/utils/responsiveness.tsx"),a=Object.defineProperty,_=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,d=(s,f,m)=>f in s?a(s,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[f]=m,k=(s,f)=>{for(var m in f||(f={}))l.call(f,m)&&d(s,m,f[m]);if(_)for(var m of _(f))y.call(f,m)&&d(s,m,f[m]);return s},j=(s,f)=>{var m={};for(var h in s)l.call(s,h)&&f.indexOf(h)<0&&(m[h]=s[h]);if(s!=null&&_)for(var h of _(s))f.indexOf(h)<0&&y.call(s,h)&&(m[h]=s[h]);return m};const S=u.forwardRef((s,f)=>{const m=s,{gap:h=1,alignItems:c,justifyContent:x,direction:I,wrap:b,children:P,grow:A,shrink:p,basis:Y,flex:F}=m,N=j(m,["gap","alignItems","justifyContent","direction","wrap","children","grow","shrink","basis","flex"]),V=(0,g.of)(O,h,c,x,I,b,A,p,Y,F);return u.createElement("div",k({ref:f,className:V.flex},N),P)});S.displayName="Stack";const O=(s,f,m,h,c,x,I,b,P,A)=>({flex:(0,e.AH)([{display:"flex"},(0,n.Y)(s,c,p=>({flexDirection:p})),(0,n.Y)(s,x,p=>({flexWrap:p})),(0,n.Y)(s,m,p=>({alignItems:p})),(0,n.Y)(s,h,p=>({justifyContent:p})),(0,n.Y)(s,f,p=>({gap:s.spacing(p)})),(0,n.Y)(s,I,p=>({flexGrow:p})),(0,n.Y)(s,b,p=>({flexShrink:p})),(0,n.Y)(s,P,p=>({flexBasis:p})),(0,n.Y)(s,A,p=>({flex:p}))])});try{S.displayName="Stack",S.__docgenInfo={description:"",displayName:"Stack",props:{gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"ResponsiveProp<Wrap>"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Stack/Stack.tsx#Stack"]={docgenInfo:S.__docgenInfo,name:"Stack",path:"src/components/Layout/Stack/Stack.tsx#Stack"})}catch{}},"./src/components/Layout/utils/responsiveness.tsx":function(C,w,i){i.d(w,{Y:function(){return u}});function e(g,n,a,_){const l=n[_];if(l!=null)return{[g.breakpoints.up(_)]:a(l)}}function u(g,n,a){return n==null?null:typeof n!="object"||!("xs"in n)?a(n):[e(g,n,a,"xs"),e(g,n,a,"sm"),e(g,n,a,"md"),e(g,n,a,"lg"),e(g,n,a,"xl"),e(g,n,a,"xxl")]}try{u.displayName="getResponsiveStyle",u.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:u.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch{}},"./src/utils/storybook/themeStorybookControls.tsx":function(C,w,i){i.d(w,{C:function(){return e}});const e={control:"select",options:[0,.25,.5,1,1.5,2,3,4,5,6,8,10]}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(C,w,i){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=i("../../node_modules/react/index.js"),u=Symbol.for("react.element"),g=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function l(y,d,k){var j,S={},O=null,s=null;k!==void 0&&(O=""+k),d.key!==void 0&&(O=""+d.key),d.ref!==void 0&&(s=d.ref);for(j in d)n.call(d,j)&&!_.hasOwnProperty(j)&&(S[j]=d[j]);if(y&&y.defaultProps)for(j in d=y.defaultProps,d)S[j]===void 0&&(S[j]=d[j]);return{$$typeof:u,type:y,key:O,ref:s,props:S,_owner:a.current}}w.Fragment=g,w.jsx=l,w.jsxs=l},"../../node_modules/react/jsx-runtime.js":function(C,w,i){C.exports=i("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
