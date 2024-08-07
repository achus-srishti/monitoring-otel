"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2959],{"./src/components/UsersIndicator/UserIcon.story.tsx":function(V,d,t){t.r(d),t.d(d,{Basic:function(){return o},default:function(){return T}});var f=t("../../node_modules/react/index.js"),a=t("./src/components/UsersIndicator/UserIcon.tsx"),n=t("../../node_modules/react/jsx-runtime.js"),l=t("../../node_modules/@mdx-js/react/lib/index.js"),u=t("../../node_modules/@storybook/blocks/dist/index.mjs");function p(s){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,l.RP)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.W8,{title:"MDX|UserIcon",component:a.n}),`
`,(0,n.jsx)(e.h1,{id:"usericon",children:"UserIcon"}),`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"UserIcon"})," a component that takes in the ",(0,n.jsx)(e.code,{children:"UserIconProps"})," interface as a prop. It renders a user icon and displays the user's name or initials along with the user's active status or last viewed date."]}),`
`,(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),`
`,(0,n.jsxs)(e.p,{children:["To use the ",(0,n.jsx)(e.code,{children:"UserIcon"})," component, import it and pass in the required ",(0,n.jsx)(e.code,{children:"UserIconProps"}),". The component can be used as follows:"]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { UserIcon } from '@grafana/ui';

const ExampleComponent = () => {
  const userView = {
    user: { id: 1, name: 'John Smith', avatarUrl: 'https://example.com/avatar.png' },
    lastActiveAt: '2023-04-18T15:00:00.000Z',
  };

  return (
    <div>
      <UserIcon userView={userView} showTooltip={true} className={styles.custom} />
    </div>
  );
};
`})}),`
`,(0,n.jsxs)(e.h3,{id:"with-custom-children",children:["With custom ",(0,n.jsx)(e.code,{children:"children"})]}),`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"children"})," prop can be used to display a custom content inside ",(0,n.jsx)(e.code,{children:"UserIcon"}),". This is useful to show the data about extra users."]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { UserIcon } from '@grafana/ui';

const ExampleComponent = () => {
  const userView = {
    user: { id: 1, name: 'John Smith', avatarUrl: 'https://example.com/avatar.png' },
    lastActiveAt: '2023-04-18T15:00:00.000Z',
  };

  return (
    <div>
      <UserIcon userView={userView} showTooltip={false}>
        +10
      </UserIcon>
    </div>
  );
};
`})}),`
`,(0,n.jsx)(u.ov,{of:a.n}),`
`,(0,n.jsx)(e.h2,{id:"userview-type",children:"UserView type"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { DateTimeInput } from '@grafana/data';

export interface UserView {
  user: {
    /** User's name, containing first + last name */
    name: string;
    /** URL to the user's avatar */
    avatarUrl?: string;
  };
  /** Datetime string when the user was last active */
  lastActiveAt: DateTimeInput;
}
`})})]})}function g(s={}){const{wrapper:e}=Object.assign({},(0,l.RP)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(p,s)})):p(s)}var U=g,w=Object.defineProperty,I=Object.defineProperties,y=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,m=(s,e,r)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,c=(s,e)=>{for(var r in e||(e={}))P.call(e,r)&&m(s,r,e[r]);if(h)for(var r of h(e))O.call(e,r)&&m(s,r,e[r]);return s},i=(s,e)=>I(s,y(e)),v,x,j;const b={title:"General/UsersIndicator/UserIcon",component:a.n,argTypes:{},parameters:{docs:{page:U},knobs:{disabled:!0},controls:{exclude:["className","onClick"]},actions:{disabled:!0}},args:{showTooltip:!1,onClick:void 0}},o=s=>{const e={user:{name:"John Smith",avatarUrl:"https://picsum.photos/id/1/200/200"},lastActiveAt:"2023-04-18T15:00:00.000Z"};return f.createElement(a.n,i(c({},s),{userView:e}))};o.args={showTooltip:!0,onClick:void 0};var T=b;o.parameters=i(c({},o.parameters),{docs:i(c({},(v=o.parameters)==null?void 0:v.docs),{source:c({originalSource:`args => {
  const userView = {
    user: {
      name: 'John Smith',
      avatarUrl: 'https://picsum.photos/id/1/200/200'
    },
    lastActiveAt: '2023-04-18T15:00:00.000Z'
  };
  return <UserIcon {...args} userView={userView} />;
}`},(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source)})})}}]);
