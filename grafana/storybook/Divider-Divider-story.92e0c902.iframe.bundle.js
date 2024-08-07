"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3830],{"../../node_modules/@mdx-js/react/lib/index.js":function(D,v,a){a.d(v,{BN:function(){return p},RP:function(){return s},gz:function(){return f},xA:function(){return n}});var i=a("../../node_modules/react/index.js");const p=i.createContext({});function f(o){return d;function d(t){const u=s(t.components);return i.createElement(o,{...t,allComponents:u})}}function s(o){const d=i.useContext(p);return i.useMemo(()=>typeof o=="function"?o(d):{...d,...o},[d,o])}const x={};function n({components:o,children:d,disableParentContext:t}){let u;return t?u=typeof o=="function"?o({}):o||x:u=s(o),i.createElement(p.Provider,{value:u},d)}},"./src/components/Divider/Divider.story.tsx":function(D,v,a){a.r(v),a.d(v,{Basic:function(){return j},Examples:function(){return y},default:function(){return k}});var i=a("../../node_modules/react/index.js"),p=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),f=a("./src/themes/ThemeContext.tsx");const s=({direction:r="horizontal",spacing:e=2})=>{const l=(0,f.of)(x,e);return r==="vertical"?i.createElement("div",{className:l.verticalDivider}):i.createElement("hr",{className:l.horizontalDivider})};s.displayName="Divider";const x=(r,e)=>({horizontalDivider:(0,p.AH)({borderTop:`1px solid ${r.colors.border.weak}`,margin:r.spacing(e,0),width:"100%"}),verticalDivider:(0,p.AH)({borderRight:`1px solid ${r.colors.border.weak}`,margin:r.spacing(0,e),height:"100%"})});try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:{value:"2"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"4"},{value:"0.25"},{value:"0.5"},{value:"1"},{value:"1.5"},{value:"2.5"},{value:"3"},{value:"5"},{value:"6"},{value:"8"},{value:"10"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:s.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch{}var n=a("../../node_modules/react/jsx-runtime.js"),o=a("../../node_modules/@mdx-js/react/lib/index.js"),d=a("../../node_modules/@storybook/blocks/dist/index.mjs");function t(r){const e=Object.assign({h1:"h1",h3:"h3",h4:"h4",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,o.RP)(),r.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.W8,{title:"MDX|Divider",component:s}),`
`,(0,n.jsx)(e.h1,{id:"divider",children:"Divider"}),`
`,(0,n.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,n.jsx)(e.h4,{id:"when-to-use",children:"When to use"}),`
`,(0,n.jsx)(e.p,{children:"When creating separation between large sections of page content or smaller parts of components like in the page info section of the header."}),`
`,(0,n.jsx)(e.h4,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,n.jsx)(e.p,{children:"Dividers should be used sparingly."}),`
`,(0,n.jsx)(e.p,{children:"Don\u2019t use dividers when white space (padding / margins) is sufficient to separate out sections. When sections are related to each other, they may not need dividers (ex: filtering / search related to a table)."}),`
`,(0,n.jsx)(e.h3,{id:"variants",children:"Variants"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Horizontal"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { Divider } from '@grafana/ui';

    <header>
        <h1>My title here</h1>
        <img src="logo.png" alt="logo" />
    </header>
    <Divider />
    <main>
        <p>Main content goes here</p>
    </main>


`})}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Vertical"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { Divider } from '@grafana/ui';

    <header>
        <h1>My title here</h1>
        <Divider direction="vertical" />
        <img src="logo.png" alt="logo" />
    </header>
    <main>
        <p>Main content goes here</p>
    </main>

`})}),`
`,(0,n.jsx)(e.h3,{id:"modifiers",children:"Modifiers"}),`
`,(0,n.jsxs)(e.p,{children:["Pass a spacing token into the ",(0,n.jsx)(e.code,{children:"spacing"})," prop to adjust the margin."]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { Divider } from '@grafana/ui';

    <header>
        <h1>My title here</h1>
        <Divider direction="vertical" spacing={0.5}/>
        <img src="logo.png" alt="logo" />
    </header>
    <main>
        <p>Main content goes here</p>
    </main>

`})}),`
`,(0,n.jsx)(e.h3,{id:"dos",children:"Dos"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Import and add the Divider component inside the code where you would normally add an hr or a div."}),`
`]}),`
`,(0,n.jsx)(e.h3,{id:"donts",children:"Don'ts"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Do not modify the color of the divider"}),`
`]}),`
`,(0,n.jsx)(e.h3,{id:"props",children:"Props"}),`
`,(0,n.jsx)(d.ov,{of:s})]})}function u(r={}){const{wrapper:e}=Object.assign({},(0,o.RP)(),r.components);return e?(0,n.jsx)(e,Object.assign({},r,{children:(0,n.jsx)(t,r)})):t(r)}var c=u,h=Object.defineProperty,g=Object.defineProperties,_=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,b=(r,e,l)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[e]=l,m=(r,e)=>{for(var l in e||(e={}))R.call(e,l)&&b(r,l,e[l]);if(O)for(var l of O(e))N.call(e,l)&&b(r,l,e[l]);return r},E=(r,e)=>g(r,_(e)),w,P,M,C,T,S;const z={title:"General/Divider",component:s,parameters:{docs:{page:c}}},j=({direction:r,spacing:e})=>i.createElement("div",{style:{display:r==="vertical"?"flex":"block",flexDirection:"row",height:"50px"}},i.createElement("div",null,"My text here"),i.createElement(s,{direction:r,spacing:e}),i.createElement("div",null,"My text here")),y=()=>i.createElement("div",null,i.createElement("p",null,"Text above horizontal divider"),i.createElement(s,null),i.createElement("p",null,"Text below horizontal divider"),i.createElement("div",{style:{display:"flex",flexDirection:"row",height:"50px"}},i.createElement("p",null,"Text aside of vertical divider"),i.createElement(s,{direction:"vertical"}),i.createElement("p",null,"Text aside of vertical divider")));var k=z;j.parameters=E(m({},j.parameters),{docs:E(m({},(w=j.parameters)==null?void 0:w.docs),{source:m({originalSource:`({
  direction,
  spacing
}) => {
  return <div style={{
    display: direction === 'vertical' ? 'flex' : 'block',
    flexDirection: 'row',
    height: '50px'
  }}>
      <div>My text here</div>
      <Divider direction={direction} spacing={spacing} />
      <div>My text here</div>
    </div>;
}`},(M=(P=j.parameters)==null?void 0:P.docs)==null?void 0:M.source)})}),y.parameters=E(m({},y.parameters),{docs:E(m({},(C=y.parameters)==null?void 0:C.docs),{source:m({originalSource:`() => {
  return <div>
      <p>Text above horizontal divider</p>
      <Divider />
      <p>Text below horizontal divider</p>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '50px'
    }}>
        <p>Text aside of vertical divider</p>
        <Divider direction="vertical" />
        <p>Text aside of vertical divider</p>
      </div>
    </div>;
}`},(S=(T=y.parameters)==null?void 0:T.docs)==null?void 0:S.source)})})},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(D,v,a){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=a("../../node_modules/react/index.js"),p=Symbol.for("react.element"),f=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,x=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function o(d,t,u){var c,h={},g=null,_=null;u!==void 0&&(g=""+u),t.key!==void 0&&(g=""+t.key),t.ref!==void 0&&(_=t.ref);for(c in t)s.call(t,c)&&!n.hasOwnProperty(c)&&(h[c]=t[c]);if(d&&d.defaultProps)for(c in t=d.defaultProps,t)h[c]===void 0&&(h[c]=t[c]);return{$$typeof:p,type:d,key:g,ref:_,props:h,_owner:x.current}}v.Fragment=f,v.jsx=o,v.jsxs=o},"../../node_modules/react/jsx-runtime.js":function(D,v,a){D.exports=a("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
