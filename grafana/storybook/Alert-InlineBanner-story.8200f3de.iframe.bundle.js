"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[21],{"./src/components/Alert/InlineBanner.story.tsx":function(k,m,l){l.r(m),l.d(m,{Basic:function(){return i},Examples:function(){return d},WithActions:function(){return c}});var v=l("../../node_modules/@storybook/addon-actions/dist/index.mjs"),t=l("../../node_modules/react/index.js"),o=l("./src/components/Alert/Alert.tsx"),u=l("./src/components/Layout/Layout.tsx"),p=l("./src/utils/storybook/StoryExample.tsx"),S=l("./src/components/Alert/Alert.mdx"),W=Object.defineProperty,D=Object.defineProperties,R=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,E=(e,r,a)=>r in e?W(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,n=(e,r)=>{for(var a in r||(r={}))I.call(r,a)&&E(e,a,r[a]);if(y)for(var a of y(r))M.call(r,a)&&E(e,a,r[a]);return e},s=(e,r)=>D(e,R(r)),_,h,f,g,A,O,C,P,b;const x=["error","warning","info","success"],B={title:"Overlays/Alert/InlineBanner",component:o.F,parameters:{docs:{page:S.A},controls:{exclude:["onRemove"]}},argTypes:{severity:{control:{type:"select",options:x}}}},i=e=>t.createElement("div",null,t.createElement(o.F,n({},e),t.createElement(u.gW,null,t.createElement("div",null,"Child content that includes some alert details, like maybe what actually happened."))));i.args={severity:"error",title:"Basic"};const c=e=>t.createElement(o.F,n({},e),t.createElement(u.gW,null,t.createElement("div",null,"Child content that includes some alert details, like maybe what actually happened.")));c.args={title:"With action",severity:"error",onRemove:(0,v.XI)("Remove button clicked"),buttonContent:"Close"};const d=()=>t.createElement(u.gW,null,t.createElement(p.Q,{name:"With buttonContent and children"},t.createElement(o.F,{title:"The title of the alert",severity:"error",buttonContent:t.createElement("span",null,"Close"),onRemove:(0,v.XI)("Remove button clicked")},"Child content that includes some alert details, like maybe what actually happened")),t.createElement(p.Q,{name:"No dismiss"},t.createElement(o.F,{title:"No dismiss",severity:"success"})),t.createElement(p.Q,{name:"Severities"},t.createElement(u.gW,null,x.map(e=>t.createElement(o.F,{title:`Severity: ${e}`,severity:e,key:e},"Child content")))));m.default=B,i.parameters=s(n({},i.parameters),{docs:s(n({},(_=i.parameters)==null?void 0:_.docs),{source:n({originalSource:`args => {
  return <div>
      <Alert {...args}>
        <VerticalGroup>
          <div>Child content that includes some alert details, like maybe what actually happened.</div>
        </VerticalGroup>
      </Alert>
    </div>;
}`},(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source)})}),c.parameters=s(n({},c.parameters),{docs:s(n({},(g=c.parameters)==null?void 0:g.docs),{source:n({originalSource:`args => {
  return <Alert {...args}>
      <VerticalGroup>
        <div>Child content that includes some alert details, like maybe what actually happened.</div>
      </VerticalGroup>
    </Alert>;
}`},(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source)})}),d.parameters=s(n({},d.parameters),{docs:s(n({},(C=d.parameters)==null?void 0:C.docs),{source:n({originalSource:`() => {
  return <VerticalGroup>
      <StoryExample name="With buttonContent and children">
        <Alert title={'The title of the alert'} severity={'error'} buttonContent={<span>Close</span>} onRemove={action('Remove button clicked')}>
          Child content that includes some alert details, like maybe what actually happened
        </Alert>
      </StoryExample>
      <StoryExample name="No dismiss">
        <Alert title={'No dismiss'} severity={'success'} />
      </StoryExample>
      <StoryExample name="Severities">
        <VerticalGroup>
          {severities.map(severity => <Alert title={\`Severity: \${severity}\`} severity={severity} key={severity}>
              Child content
            </Alert>)}
        </VerticalGroup>
      </StoryExample>
    </VerticalGroup>;
}`},(b=(P=d.parameters)==null?void 0:P.docs)==null?void 0:b.source)})})}}]);
