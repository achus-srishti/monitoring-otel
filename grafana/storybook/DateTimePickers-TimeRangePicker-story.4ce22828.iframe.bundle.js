"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3982],{"./src/components/DateTimePickers/TimeRangePicker.story.tsx":function(B,i,a){a.r(i),a.d(i,{Basic:function(){return t}});var r=a("../../node_modules/@storybook/addon-actions/dist/index.mjs"),d=a("@storybook/client-api"),w=a.n(d),p=a("../../node_modules/react/index.js"),f=a("../grafana-data/src/datetime/moment_wrapper.ts"),h=a("../grafana-data/src/types/time.ts"),m=a("./src/components/DateTimePickers/TimeRangePicker.tsx"),E=Object.defineProperty,O=Object.defineProperties,M=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,g=(e,n,o)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,s=(e,n)=>{for(var o in n||(n={}))y.call(n,o)&&g(e,o,n[o]);if(_)for(var o of _(n))C.call(n,o)&&g(e,o,n[o]);return e},c=(e,n)=>O(e,M(n)),l,u,v;const P=(0,f.KQ)(),T=P.subtract(6,"h"),D={title:"Pickers and Editors/TimePickers/TimeRangePicker",component:m.$6,args:{value:{from:T,to:P,raw:{from:"now-6h",to:"now"}},timeZone:h.lE,history:[]},parameters:{controls:{exclude:["onChange","onChangeTimeZone","onChangeFiscalYearStartMonth","onMoveBackward","onMoveForward","onZoom","timeSyncButton"]}}},t=e=>{const[,n]=(0,d.useArgs)();return p.createElement(m.$6,c(s({},e),{onChange:o=>{(0,r.XI)("onChange")(o),n({value:o,history:e.history?[...e.history,o]:[o]})},onChangeTimeZone:o=>{(0,r.XI)("onChangeTimeZone")(o),n({timeZone:o})},onMoveBackward:(0,r.XI)("onMoveBackward"),onMoveForward:(0,r.XI)("onMoveForward"),onZoom:(0,r.XI)("onZoom")}))};i.default=D,t.parameters=c(s({},t.parameters),{docs:c(s({},(l=t.parameters)==null?void 0:l.docs),{source:s({originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <TimeRangePicker {...args} onChange={value => {
    action('onChange')(value);
    updateArgs({
      value,
      history: args.history ? [...args.history, value] : [value]
    });
  }} onChangeTimeZone={timeZone => {
    action('onChangeTimeZone')(timeZone);
    updateArgs({
      timeZone
    });
  }} onMoveBackward={action('onMoveBackward')} onMoveForward={action('onMoveForward')} onZoom={action('onZoom')} />;
}`},(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source)})})}}]);
