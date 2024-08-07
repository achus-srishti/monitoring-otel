"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[590],{"../../node_modules/@mdx-js/react/lib/index.js":function(E,m,o){o.d(m,{BN:function(){return p},RP:function(){return c},gz:function(){return y},xA:function(){return s}});var i=o("../../node_modules/react/index.js");const p=i.createContext({});function y(r){return a;function a(n){const l=c(n.components);return i.createElement(r,{...n,allComponents:l})}}function c(r){const a=i.useContext(p);return i.useMemo(()=>typeof r=="function"?r(a):{...a,...r},[a,r])}const h={};function s({components:r,children:a,disableParentContext:n}){let l;return n?l=typeof r=="function"?r({}):r||h:l=c(r),i.createElement(p.Provider,{value:l},a)}},"./src/components/EmptySearchResult/EmptySearchResult.story.tsx":function(E,m,o){o.r(m),o.d(m,{Basic:function(){return j},default:function(){return M}});var i=o("../../node_modules/react/index.js"),p=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),y=o("./src/themes/ThemeContext.tsx");const c=({children:e})=>{const t=(0,y.of)(h);return i.createElement("div",{className:t.container},e)},h=e=>({container:(0,p.AH)({borderLeft:`3px solid ${e.colors.info.main}`,backgroundColor:`${e.colors.background.secondary}`,padding:e.spacing(2),minWidth:"350px",borderRadius:e.shape.radius.default,marginBottom:e.spacing(4)})});try{c.displayName="EmptySearchResult",c.__docgenInfo={description:"",displayName:"EmptySearchResult",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/EmptySearchResult/EmptySearchResult.tsx#EmptySearchResult"]={docgenInfo:c.__docgenInfo,name:"EmptySearchResult",path:"src/components/EmptySearchResult/EmptySearchResult.tsx#EmptySearchResult"})}catch{}var s=o("../../node_modules/react/jsx-runtime.js"),r=o("../../node_modules/@mdx-js/react/lib/index.js"),a=o("../../node_modules/@storybook/blocks/dist/index.mjs");function n(e){const t=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,r.RP)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"emptysearchresult",children:"EmptySearchResult"}),`
`,(0,s.jsx)(t.p,{children:"A styled container for a message, displayed when no search results are found. Used in the visualizations search, among others."}),`
`,(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),`
`,(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:`import { EmptySearchResult } from '@grafana/ui';

<EmptySearchResult>Could not find anything matching your query</EmptySearchResult>;
`})}),`
`,(0,s.jsx)(t.h3,{id:"props",children:"Props"}),`
`,(0,s.jsx)(a.ov,{of:c})]})}function l(e={}){const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(n,e)})):n(e)}var u=l,f=Object.defineProperty,_=Object.defineProperties,g=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(e,t,d)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[t]=d,x=(e,t)=>{for(var d in t||(t={}))b.call(t,d)&&R(e,d,t[d]);if(S)for(var d of S(t))D.call(t,d)&&R(e,d,t[d]);return e},v=(e,t)=>_(e,g(t)),O,C,P;const w={title:"Visualizations/EmptySearchResult",component:c,parameters:{docs:{page:u}}},j=()=>i.createElement(c,null,"Could not find anything matching your query");var M=w;j.parameters=v(x({},j.parameters),{docs:v(x({},(O=j.parameters)==null?void 0:O.docs),{source:x({originalSource:`() => {
  return <EmptySearchResult>Could not find anything matching your query</EmptySearchResult>;
}`},(P=(C=j.parameters)==null?void 0:C.docs)==null?void 0:P.source)})})},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(E,m,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=o("../../node_modules/react/index.js"),p=Symbol.for("react.element"),y=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function r(a,n,l){var u,f={},_=null,g=null;l!==void 0&&(_=""+l),n.key!==void 0&&(_=""+n.key),n.ref!==void 0&&(g=n.ref);for(u in n)c.call(n,u)&&!s.hasOwnProperty(u)&&(f[u]=n[u]);if(a&&a.defaultProps)for(u in n=a.defaultProps,n)f[u]===void 0&&(f[u]=n[u]);return{$$typeof:p,type:a,key:_,ref:g,props:f,_owner:h.current}}m.Fragment=y,m.jsx=r,m.jsxs=r},"../../node_modules/react/jsx-runtime.js":function(E,m,o){E.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
