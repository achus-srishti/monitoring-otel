"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7930],{25913:(C,o,a)=>{a.r(o),a.d(o,{NewOrgPage:()=>E,default:()=>u});var n=a(96540),i=a(69733),_=a(51253),l=a(84167),s=a(88575),g=a(10354),c=a(55852),r=a(36830),m=a(2913),O=a(32931);const P={createOrganization:O.EC},d=(0,i.connect)(void 0,P),D={icon:"building",id:"org-new",text:"New organization"},E=({createOrganization:M})=>{const h=async e=>{await M(e),window.location.href=(0,m.zj)().appSubUrl+"/org"};return n.createElement(r.Y,{navId:"global-orgs",pageNav:D},n.createElement(r.Y.Contents,null,n.createElement("p",{className:"muted"},"Each organization contains their own dashboards, data sources, and configuration, which cannot be shared shared between organizations. While users might belong to more than one organization, multiple organizations are most frequently used in multi-tenant deployments."),n.createElement(_.l,{onSubmit:h},({register:e,errors:t})=>n.createElement(n.Fragment,null,n.createElement(l.n,null,n.createElement(s.D,{label:"Organization name",invalid:!!t.name,error:t.name&&t.name.message},n.createElement(g.p,{placeholder:"Org name",...e("name",{required:"Organization name is required"})}))),n.createElement(c.$n,{type:"submit"},"Create")))))},u=d(E)}}]);

//# sourceMappingURL=NewOrgPage.2bb0e1cab09f0cbd0310.js.map