"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[192],{57029:(C,r,t)=>{t.r(r),t.d(r,{default:()=>A});var e=t(96540),s=t(27746),n=t(44836),o=t(20120),u=t(79938),d=t(57220),c=t(87978),h=t(39558),i=t(67061),m=t(72109),v=t(3704);const f=e.lazy(()=>t.e(617).then(t.bind(t,10153)));function g({dashboardUid:a,onClose:l}){return e.createElement(c._,{title:"Alert rules",subtitle:e.createElement(E,{dashboardUid:a}),onClose:l,size:"lg"},e.createElement(e.Suspense,{fallback:e.createElement(h._,{text:"Loading alert rules"})},e.createElement(f,{dashboardUid:a})))}function E({dashboardUid:a}){const l=new URLSearchParams({search:`dashboard:${a}`});return e.createElement(i.B,{gap:2},e.createElement("div",null,(0,n.t)("dashboard.alert-rules-drawer.subtitle","Alert rules related to this dashboard")),e.createElement(m.Y,{href:(0,v.c)(`/alerting/list/?${l.toString()}`)},(0,n.t)("dashboard.alert-rules-drawer.redirect-link","List in Grafana Alerting")))}function A({dashboardUid:a}){const{showModal:l,hideModal:R}=(0,o.EU)(),{data:S=[]}=u.hK.endpoints.prometheusRuleNamespaces.useQuery({ruleSourceName:d.hY,dashboardUid:a});return S.length===0?null:e.createElement(s.I,{tooltip:(0,n.t)("dashboard.toolbar.alert-rules","Alert rules"),icon:"bell",onClick:()=>l(e.createElement(g,{dashboardUid:a,onClose:R})),key:"button-alerting"})}}}]);

//# sourceMappingURL=alert-rules-toolbar-button.6f275f0d03748b6c297d.js.map