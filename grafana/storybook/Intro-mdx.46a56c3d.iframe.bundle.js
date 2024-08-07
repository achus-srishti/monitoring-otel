"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4237],{"../../node_modules/@mdx-js/react/lib/index.js":function(f,s,t){t.d(s,{BN:function(){return n},RP:function(){return d},gz:function(){return c},xA:function(){return h}});var i=t("../../node_modules/react/index.js");const n=i.createContext({});function c(o){return e;function e(r){const l=d(r.components);return i.createElement(o,{...r,allComponents:l})}}function d(o){const e=i.useContext(n);return i.useMemo(()=>typeof o=="function"?o(e):{...e,...o},[e,o])}const u={};function h({components:o,children:e,disableParentContext:r}){let l;return r?l=typeof o=="function"?o({}):o||u:l=d(o),i.createElement(n.Provider,{value:l},e)}},"./src/Intro.mdx":function(f,s,t){t.r(s);var i=t("../../node_modules/react/index.js"),n=t("../../node_modules/react/jsx-runtime.js"),c=t("../../node_modules/@mdx-js/react/lib/index.js"),d=t("../../node_modules/@storybook/blocks/dist/index.mjs");function u(o){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",strong:"strong",code:"code"},(0,c.RP)(),o.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.W8,{title:"Docs Overview/Intro",parameters:{options:{isToolshown:!1},id:1}}),`
`,(0,n.jsx)(e.h1,{id:"grafana-react-components",children:"Grafana React Components"}),`
`,(0,n.jsxs)(e.p,{children:["With @grafana/ui, we want to democratize development. This library of reusable ",(0,n.jsx)(e.a,{href:"https://github.com/grafana/grafana",target:"_blank",rel:"nofollow noopener noreferrer",children:"Grafana"})," components and guidelines is part of the ",(0,n.jsx)(e.a,{href:"https://grafana.com/developers/saga/About/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"Saga Design System"})," and should help you with contribution and plugin development."]}),`
`,(0,n.jsx)(e.h2,{id:"our-vision",children:"Our vision"}),`
`,(0,n.jsx)(e.p,{children:"Grafana Labs started @grafana/ui to make contributing to Grafana as easy as possible for Grafanistas and community members of all fields. We want to create a component library that results in:"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Understanding of how each component works and how you can use it to create a great user experience."}),`
`,(0,n.jsx)(e.li,{children:"Short development times and consistent code quality."}),`
`,(0,n.jsx)(e.li,{children:"A beautiful, visually consistent Grafana experience."}),`
`,(0,n.jsx)(e.li,{children:"Transparency about how we work and what we do."}),`
`]}),`
`,(0,n.jsx)(e.h3,{id:"how-to-get-involved",children:"How to get involved"}),`
`,(0,n.jsxs)(e.p,{children:["When we notice that we need to change something, we determine together what the change should be, then we put the change in place and communicate it publicly. Developers and designers create and improve @grafana/ui together. Throughout the process, we strive to involve you and meet your needs. We are looking forward to discussing your design and improvement ideas, find out how you can help in the ",(0,n.jsx)(e.a,{href:"https://grafana.com/developers/saga/contributing",target:"_blank",rel:"nofollow noopener noreferrer",children:"Contribution Guidelines"}),"."]}),`
`,(0,n.jsx)(e.h2,{id:"get-started",children:"Get started"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:[`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Explore UI components"}),`
Click on any of the components in the sidebar to see how they look, and how to configure them. Each component contains documentation of its properties, as well as code examples for how to use it.`]}),`
`]}),`
`,(0,n.jsxs)(e.li,{children:[`
`,(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Try them out"})}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Experiment with different properties, by clicking on each component story."}),`
`,(0,n.jsxs)(e.li,{children:["Change the properties under ",(0,n.jsx)(e.strong,{children:"Controls"})," in the side panel."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(e.li,{children:[`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Use them"}),`
Once you've found the right component for your use case, click the `,(0,n.jsx)(e.strong,{children:"Code"})," tab to see the code implementation, or look at examples under ",(0,n.jsx)(e.strong,{children:"Docs"}),"."]}),`
`,(0,n.jsxs)(e.p,{children:["For more details, refer to the ",(0,n.jsx)(e.a,{href:"https://github.com/grafana/grafana/tree/main/packages/grafana-ui",target:"_blank",rel:"nofollow noopener noreferrer",children:"package source"}),"."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(e.h2,{id:"installation",children:"Installation"}),`
`,(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"yarn add @grafana/ui"})}),`
`,(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"npm install @grafana/ui"})}),`
`,(0,n.jsx)(e.h2,{id:"related-links",children:"Related links"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://grafana.com/developers/plugin-tools/tutorials/build-a-panel-plugin",target:"_blank",rel:"nofollow noopener noreferrer",children:"Build a panel plugin tutorial"})}),`
`,(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://grafana.com/developers/plugin-tools/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Plugin developer guide"})}),`
`,(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://grafana.com/tutorials/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Grafana Tutorials"})}),`
`]})]})}function h(o={}){const{wrapper:e}=Object.assign({},(0,c.RP)(),o.components);return e?(0,n.jsx)(e,Object.assign({},o,{children:(0,n.jsx)(u,o)})):u(o)}s.default=h},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(f,s,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=t("../../node_modules/react/index.js"),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,l){var a,p={},m=null,x=null;l!==void 0&&(m=""+l),r.key!==void 0&&(m=""+r.key),r.ref!==void 0&&(x=r.ref);for(a in r)d.call(r,a)&&!h.hasOwnProperty(a)&&(p[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)p[a]===void 0&&(p[a]=r[a]);return{$$typeof:n,type:e,key:m,ref:x,props:p,_owner:u.current}}s.Fragment=c,s.jsx=o,s.jsxs=o},"../../node_modules/react/jsx-runtime.js":function(f,s,t){f.exports=t("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
