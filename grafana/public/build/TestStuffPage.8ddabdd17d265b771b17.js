"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5354],{65802:(K,_,e)=>{e.r(_),e.d(_,{TestStuffPage:()=>c,default:()=>y,getDefaultState:()=>g});var t=e(96540),f=e(24120),P=e(70713),u=e(85858),D=e(24293),O=e(4402),M=e(80882),v=e(66864),C=e(77093),i=e(55852),m=e(36830),p=e(2913),T=e(3169),R=e(20726),h=e(37464),A=e(80924);const c=()=>{const[r,o]=(0,t.useState)(g()),{queryOptions:a,queryRunner:s}=r,W=()=>{const n={from:"now-1h",to:"now"};s.run({queries:a.queries,datasource:a.dataSource,timezone:"browser",timeRange:{from:u.parse(n.from),to:u.parse(n.to),raw:n},maxDataPoints:a.maxDataPoints??100,minInterval:a.minInterval})},B=n=>{o({...r,queryOptions:n})},L=(0,t.useMemo)(()=>s.getData({withFieldConfig:!0,withTransforms:!0}),[s]),l=(0,f.A)(L),d={id:"test-page",text:"Test page",icon:"dashboard",subTitle:"FOR TESTING!",url:"sandbox/test"},E=(0,T._2)();return t.createElement(m.Y,{navModel:{node:d,main:d}},t.createElement(m.Y.Contents,null,t.createElement(v.Gy,null,t.createElement(I,{extensionPointId:"grafana/sandbox/testing"})),l&&t.createElement(P.Ay,{style:{width:"100%",height:"600px"}},({width:n})=>t.createElement("div",null,t.createElement(R.m,{title:"Hello",pluginId:"timeseries",width:n,height:300,data:l,options:{},fieldConfig:{defaults:{},overrides:[]},timeZone:"browser"}),t.createElement(C.X,{data:l.series[0],width:n,height:300}))),t.createElement("div",{style:{marginTop:"16px",height:"45%"}},t.createElement(h.g,{options:a,queryRunner:s,onRunQueries:W,onOptionsChange:B})),t.createElement("div",{style:{display:"flex",gap:"1em"}},t.createElement(i.$n,{onClick:()=>E.success("Success toast","some more text goes here"),variant:"primary"},"Success"),t.createElement(i.$n,{onClick:()=>E.warning("Warning toast","some more text goes here","bogus-trace-99999"),variant:"secondary"},"Warning"),t.createElement(i.$n,{onClick:()=>E.error("Error toast","some more text goes here","bogus-trace-fdsfdfsfds"),variant:"destructive"},"Error"))))};function g(){const r={fieldConfig:{defaults:{color:{mode:D.Y.PaletteClassic}},overrides:[]},replaceVariables:a=>a,theme:p.$W.theme2},o={getTransformations:()=>[],getFieldOverrideOptions:()=>r,getDataSupport:()=>({annotations:!1,alertStates:!1})};return{queryRunner:new A.Z(o),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100}}}function I({extensionPointId:r}){const{extensions:o}=(0,O.O3)({extensionPointId:r});return o.length===0?null:t.createElement("div",null,o.map((a,s)=>(0,M.D)(a)?t.createElement(i.z9,{href:a.path,title:a.description,key:a.id},a.title):null))}const y=c}}]);

//# sourceMappingURL=TestStuffPage.8ddabdd17d265b771b17.js.map