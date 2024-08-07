"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9299],{51372:(R,g,s)=>{s.r(g),s.d(g,{ServerStats:()=>x});var o=s(32196),t=s(96540),y=s(32264),u=s(40845),i=s(55852),l=s(80348),d=s(16233),f=s(70255),S=s(10860),h=s(67061),p=s(56034),E=s(14578);const m=({content:e,footer:n,isLoading:c})=>{const r=(0,u.of)(A);return t.createElement(S.Z,{className:r.container},e.map((a,v)=>t.createElement(h.B,{key:v,justifyContent:"space-between",alignItems:"center"},t.createElement(h.B,{alignItems:"center"},t.createElement("span",{className:(0,o.cx)({[r.indent]:!!a.indent})},a.name),a.tooltip&&t.createElement(p.m,{content:String(a.tooltip),placement:"auto-start"},t.createElement(E.I,{name:"info-circle",className:r.tooltip}))),c?t.createElement(f.A,{width:60}):t.createElement("span",{className:a.highlight?r.highlight:""},a.value))),n&&t.createElement("div",null,n))},A=e=>({container:(0,o.css)({display:"flex",flexDirection:"column",gap:e.spacing(2),padding:e.spacing(2)}),indent:(0,o.css)({marginLeft:e.spacing(2)}),tooltip:(0,o.css)({color:e.colors.secondary.text}),highlight:(0,o.css)({color:e.colors.warning.text,padding:`${e.spacing(.5)} ${e.spacing(1)}`,marginRight:`-${e.spacing(1)}`})});var D=s(17172);const C=async()=>(0,D.AI)().get("api/admin/stats").catch(e=>(console.error(e),null)),x=()=>{const[e,n]=(0,t.useState)(null),[c,r]=(0,t.useState)(!0),a=(0,u.of)(N),v=d.TP.hasPermission(l.AccessControlAction.DataSourcesRead),P=d.TP.hasPermission(l.AccessControlAction.UsersRead);return(0,t.useEffect)(()=>{d.TP.hasPermission(l.AccessControlAction.ActionServerStatsRead)&&C().then($=>{n($),r(!1)})},[]),d.TP.hasPermission(l.AccessControlAction.ActionServerStatsRead)?t.createElement(t.Fragment,null,t.createElement("h2",{className:a.title},"Instance statistics"),!c&&!e?t.createElement("p",{className:a.notFound},"No stats found."):t.createElement("div",{className:a.row},t.createElement(m,{isLoading:c,content:[{name:"Dashboards (starred)",value:`${e?.dashboards} (${e?.stars})`},{name:"Tags",value:e?.tags},{name:"Playlists",value:e?.playlists},{name:"Snapshots",value:e?.snapshots}],footer:t.createElement(i.z9,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),t.createElement("div",{className:a.doubleRow},t.createElement(m,{isLoading:c,content:[{name:"Data sources",value:e?.datasources}],footer:v&&t.createElement(i.z9,{href:"/datasources",variant:"secondary"},"Manage data sources")}),t.createElement(m,{isLoading:c,content:[{name:"Alerts",value:e?.alerts}],footer:t.createElement(i.z9,{href:"/alerting/list",variant:"secondary"},"Manage alerts")})),t.createElement(m,{isLoading:c,content:[{name:"Organisations",value:e?.orgs},{name:"Users total",value:e?.users},{name:"Active sessions",value:e?.activeSessions},{name:"Active users in last 30 days",value:e?.activeUsers},...T(e,y.$)],footer:P&&t.createElement(i.z9,{href:"/admin/users",variant:"secondary"},"Manage users")}))):null},T=(e,n)=>!n.anonymousEnabled||!n.featureToggles.displayAnonymousStats||!e?.activeDevices?[]:n.anonymousDeviceLimit?[{name:"Active anonymous devices",value:`${e.activeDevices} / ${n.anonymousDeviceLimit}`,tooltip:"Detected devices that are not logged in, in last 30 days.",highlight:e.activeDevices>n.anonymousDeviceLimit}]:[{name:"Active anonymous devices",value:`${e.activeDevices}`,tooltip:"Detected devices that are not logged in, in last 30 days."}],N=e=>({title:(0,o.css)({marginBottom:e.spacing(4)}),row:(0,o.css)({display:"flex",justifyContent:"space-between",width:"100%","& > div:not(:last-of-type)":{marginRight:e.spacing(2)},"& > div":{width:"33.3%"}}),doubleRow:(0,o.css)({display:"flex",flexDirection:"column","& > div:first-of-type":{marginBottom:e.spacing(2)}}),notFound:(0,o.css)({fontSize:e.typography.h6.fontSize,textAlign:"center",height:"290px"})})}}]);

//# sourceMappingURL=ServerStats.3fbd2493deb8f4598755.js.map