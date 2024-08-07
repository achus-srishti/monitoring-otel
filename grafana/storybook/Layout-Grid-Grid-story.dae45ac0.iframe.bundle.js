"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[183],{"../../node_modules/@mdx-js/react/lib/index.js":function(C,h,l){l.d(h,{BN:function(){return p},RP:function(){return o},gz:function(){return u},xA:function(){return _}});var s=l("../../node_modules/react/index.js");const p=s.createContext({});function u(i){return c;function c(d){const g=o(d.components);return s.createElement(i,{...d,allComponents:g})}}function o(i){const c=s.useContext(p);return s.useMemo(()=>typeof i=="function"?i(c):{...c,...i},[c,i])}const m={};function _({components:i,children:c,disableParentContext:d}){let g;return d?g=typeof i=="function"?i({}):i||m:g=o(i),s.createElement(p.Provider,{value:g},c)}},"./src/components/Layout/Grid/Grid.story.tsx":function(C,h,l){l.r(h),l.d(h,{ColumnsMinWidth:function(){return x},ColumnsNumber:function(){return v},default:function(){return z}});var s=l("../../node_modules/react/index.js"),p=l("./src/themes/ThemeContext.tsx"),u=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),o=l("./src/components/Layout/utils/responsiveness.tsx"),m=Object.defineProperty,_=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(n,e,r)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,O=(n,e)=>{for(var r in e||(e={}))d.call(e,r)&&f(n,r,e[r]);if(c)for(var r of c(e))g.call(e,r)&&f(n,r,e[r]);return n},w=(n,e)=>_(n,i(e)),P=(n,e)=>{var r={};for(var a in n)d.call(n,a)&&e.indexOf(a)<0&&(r[a]=n[a]);if(n!=null&&c)for(var a of c(n))e.indexOf(a)<0&&g.call(n,a)&&(r[a]=n[a]);return r};const y=(0,s.forwardRef)((n,e)=>{const r=n,{children:a,gap:j,columns:H,minColumnWidth:J}=r,Q=P(r,["children","gap","columns","minColumnWidth"]),Z=(0,p.of)(M,j,H,J);return s.createElement("div",w(O({ref:e},Q),{className:Z.grid}),a)});y.displayName="Grid";const M=(n,e,r,a)=>({grid:(0,u.AH)([{display:"grid"},(0,o.Y)(n,e,j=>({gap:n.spacing(j)})),a&&(0,o.Y)(n,a,j=>({gridTemplateColumns:`repeat(auto-fill, minmax(${n.spacing(j)}, 1fr))`})),r&&(0,o.Y)(n,r,j=>({gridTemplateColumns:`repeat(${j}, 1fr)`}))])});try{y.displayName="Grid",y.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"Number of columns",name:"columns",required:!1,type:{name:"ResponsiveProp<2 | 4 | 1 | 3 | 5 | 6 | 8 | 10 | 7 | 9 | 11 | 12>"}},minColumnWidth:{defaultValue:null,description:"For a responsive layout, fit as many columns while maintaining this minimum column width.\nThe real width will be calculated based on the theme spacing tokens: `theme.spacing(minColumnWidth)`",name:"minColumnWidth",required:!1,type:{name:"ResponsiveProp<2 | 1 | 3 | 5 | 8 | 13 | 21 | 34 | 44 | 55 | 72 | 89 | 144>"}},gap:{defaultValue:null,description:"Specifies the gutters between columns and rows. It is overwritten when a column or row gap has a value.",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Grid/Grid.tsx#Grid"]={docgenInfo:y.__docgenInfo,name:"Grid",path:"src/components/Layout/Grid/Grid.tsx#Grid"})}catch{}var t=l("../../node_modules/react/jsx-runtime.js"),S=l("../../node_modules/@mdx-js/react/lib/index.js"),R=l("../../node_modules/@storybook/blocks/dist/index.mjs");function E(n){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},(0,S.RP)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(R.W8,{title:"MDX|Grid",component:y}),`
`,(0,t.jsx)(e.h1,{id:"grid",children:"Grid"}),`
`,(0,t.jsxs)(e.p,{children:["The Grid component is a layout component that allows you to create a grid of columns and rows to organize content and elements. It is a wrapper around the ",(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Grid"})," specification."]}),`
`,(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),`
`,(0,t.jsx)(e.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,t.jsx)(e.p,{children:"Use the Grid component when you want to create structured and organized layouts where content or elements need to be aligned in rows and columns for clarity and consistency."}),`
`,(0,t.jsx)(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,t.jsxs)(e.p,{children:["Use the ",(0,t.jsx)(e.code,{children:"Stack"})," component instead for these use cases:"]}),`
`,(0,t.jsxs)(e.ul,{children:[`
`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Alignment:"})," More options for item alignment."]}),`
`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Flex items:"})," Custom flex basis or configure how items stretch and wrap."]}),`
`]}),`
`,(0,t.jsx)(e.h2,{id:"properties",children:"Properties"}),`
`,(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Note: There is no support for using ",(0,t.jsx)(e.code,{children:"columns"})," and ",(0,t.jsx)(e.code,{children:"minColumnWidth"})," props at the same time. The correct behaviour is working just with one of them not both."]})}),`
`,(0,t.jsx)(R.ov,{of:y})]})}function Y(n={}){const{wrapper:e}=Object.assign({},(0,S.RP)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(E,n)})):E(n)}var X=Y,B=Object.defineProperty,U=Object.defineProperties,F=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,A=(n,e,r)=>e in n?B(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,b=(n,e)=>{for(var r in e||(e={}))$.call(e,r)&&A(n,r,e[r]);if(T)for(var r of T(e))K.call(e,r)&&A(n,r,e[r]);return n},G=(n,e)=>U(n,F(e)),k,N,W,L,D,I;const V={title:"General/Layout/Grid",component:y,parameters:{docs:{page:X}},args:{gap:1}},v=n=>{const e=(0,p.$j)();return s.createElement(y,{gap:n.gap,columns:n.columns},Array.from({length:9}).map((r,a)=>s.createElement("div",{key:a,style:{background:e.colors.background.secondary,textAlign:"center"}},"N# ",a)))};v.args={columns:3},v.parameters={controls:{exclude:["minColumnWidth"]}};const x=n=>{const e=(0,p.$j)();return s.createElement(y,{gap:n.gap,minColumnWidth:n.minColumnWidth},Array.from({length:9}).map((r,a)=>s.createElement("div",{key:a,style:{background:e.colors.background.secondary,textAlign:"center"}},"N# ",a)))};x.args={minColumnWidth:21},x.parameters={controls:{exclude:["columns"]}};var z=V;v.parameters=G(b({},v.parameters),{docs:G(b({},(k=v.parameters)==null?void 0:k.docs),{source:b({originalSource:`args => {
  const theme = useTheme2();
  return <Grid gap={args.gap} columns={args.columns}>
      {Array.from({
      length: 9
    }).map((_, i) => <div key={i} style={{
      background: theme.colors.background.secondary,
      textAlign: 'center'
    }}>
          N# {i}
        </div>)}
    </Grid>;
}`},(W=(N=v.parameters)==null?void 0:N.docs)==null?void 0:W.source)})}),x.parameters=G(b({},x.parameters),{docs:G(b({},(L=x.parameters)==null?void 0:L.docs),{source:b({originalSource:`args => {
  const theme = useTheme2();
  return <Grid gap={args.gap} minColumnWidth={args.minColumnWidth}>
      {Array.from({
      length: 9
    }).map((_, i) => <div key={i} style={{
      background: theme.colors.background.secondary,
      textAlign: 'center'
    }}>
          N# {i}
        </div>)}
    </Grid>;
}`},(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source)})})},"./src/components/Layout/utils/responsiveness.tsx":function(C,h,l){l.d(h,{Y:function(){return p}});function s(u,o,m,_){const i=o[_];if(i!=null)return{[u.breakpoints.up(_)]:m(i)}}function p(u,o,m){return o==null?null:typeof o!="object"||!("xs"in o)?m(o):[s(u,o,m,"xs"),s(u,o,m,"sm"),s(u,o,m,"md"),s(u,o,m,"lg"),s(u,o,m,"xl"),s(u,o,m,"xxl")]}try{p.displayName="getResponsiveStyle",p.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:p.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch{}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(C,h,l){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=l("../../node_modules/react/index.js"),p=Symbol.for("react.element"),u=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function i(c,d,g){var f,O={},w=null,P=null;g!==void 0&&(w=""+g),d.key!==void 0&&(w=""+d.key),d.ref!==void 0&&(P=d.ref);for(f in d)o.call(d,f)&&!_.hasOwnProperty(f)&&(O[f]=d[f]);if(c&&c.defaultProps)for(f in d=c.defaultProps,d)O[f]===void 0&&(O[f]=d[f]);return{$$typeof:p,type:c,key:w,ref:P,props:O,_owner:m.current}}h.Fragment=u,h.jsx=i,h.jsxs=i},"../../node_modules/react/jsx-runtime.js":function(C,h,l){C.exports=l("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
