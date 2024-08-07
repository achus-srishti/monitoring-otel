"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6576],{82936:(Ee,k,a)=>{a.r(k),a.d(k,{ServiceAccountPageUnconnected:()=>pe,default:()=>Re});var e=a(96540),s=a(69733),h=a(1933),P=a(66864),p=a(55852),g=a(29158),i=a(96374),S=a(36830),f=a(10096),c=a(80348),K=a(5108),F=a(16233);const X=t=>{const n=F.TP.hasPermissionInMetadata(c.AccessControlAction.ServiceAccountsPermissionsWrite,t.serviceAccount);return e.createElement(K.x,{title:"Permissions",addPermissionTitle:"Add permission",buttonLabel:"Add permission",resource:"serviceaccounts",resourceId:t.serviceAccount.id,canSetPermissions:n})};var Z=a(98788),m=a(32196),B=a(72724),u=a(40845),D=a(60029),r=a(72109),l=a(85927),O=a(91634),T=a(10354),A=a(82702);const R=({label:t,value:n,inputType:o,disabled:E,onChange:v})=>{const y=(0,e.useRef)(null),[d,U]=(0,e.useState)(n),[b,C]=(0,e.useState)(!1),N=(0,u.of)(V),ae=`${t}-input`;(0,e.useEffect)(()=>{b&&me()},[b]);const oe=()=>{C(!0)},ie=()=>{C(!1),U(n||"")},se=(Q,W)=>{W!==O.O.Invalid&&U(Q.target.value)},de=(Q,W)=>{W!==O.O.Invalid&&U(Q.target.value)},me=()=>{y?.current?.focus()},ue=()=>{C(!1),v&&v(d)};return e.createElement("tr",null,e.createElement("td",null,e.createElement(D.J,{htmlFor:ae},t)),e.createElement("td",{className:"width-25",colSpan:2},!E&&b?e.createElement(T.p,{id:ae,type:o,defaultValue:n,onBlur:de,onChange:se,ref:y,width:30}):e.createElement("span",{className:(0,m.cx)({[N.disabled]:E})},n)),e.createElement("td",null,v&&e.createElement(A.Z,{closeOnConfirm:!0,confirmText:"Save",onConfirm:ue,onClick:oe,onCancel:ie,disabled:E},"Edit")))},V=t=>({disabled:(0,m.css)`
      color: ${t.colors.text.secondary};
    `});var $=a(89062),z=a(5133);const J=({label:t,serviceAccount:n,roleOptions:o,onRoleChange:E})=>{const v=`${t}-input`,y=f.TP.hasPermissionInMetadata(c.AccessControlAction.ServiceAccountsWrite,n);return e.createElement("tr",null,e.createElement("td",null,e.createElement(D.J,{htmlFor:v},t)),f.TP.licensedAccessControlEnabled()?e.createElement("td",{colSpan:3},e.createElement($.y,{userId:n.id,orgId:n.orgId,basicRole:n.role,onBasicRoleChange:E,roleOptions:o,basicRoleDisabled:!y,disabled:n.isExternal||n.isDisabled})):e.createElement(e.Fragment,null,e.createElement("td",null,e.createElement(z.r,{width:24,inputId:v,"aria-label":"Role",value:n.role,disabled:n.isExternal||n.isDisabled,onChange:E})),e.createElement("td",{colSpan:2})))};function x({serviceAccount:t,timeZone:n,onChange:o}){const E=(0,u.of)(I),v=f.TP.hasPermission(c.AccessControlAction.ServiceAccountsWrite),[y,d]=e.useState([]),U=C=>{o({...t,role:C})},b=C=>{o({...t,name:C})};return e.useEffect(()=>{async function C(){try{if(f.TP.hasPermission(c.AccessControlAction.ActionRolesList)){let N=await(0,l.RL)(t.orgId);d(N)}}catch{console.error("Error loading options for service account")}}f.TP.licensedAccessControlEnabled()&&C()},[t.orgId]),e.createElement("div",{className:E.section},e.createElement("h3",null,"Information"),e.createElement("table",{className:"filter-table"},e.createElement("tbody",null,e.createElement(R,{label:"Name",value:t.name,onChange:t.isExternal?void 0:b,disabled:!v||t.isDisabled}),e.createElement(R,{label:"ID",value:t.login,disabled:t.isDisabled}),e.createElement(J,{label:"Roles",serviceAccount:t,onRoleChange:U,roleOptions:y}),e.createElement(R,{label:"Creation date",value:(0,B.LE)(t.createdAt,{timeZone:n}),disabled:t.isDisabled}),t.isExternal&&t.requiredBy&&e.createElement("tr",null,e.createElement("td",null,e.createElement(D.J,null,"Used by")),e.createElement("td",null,e.createElement(r.Y,{href:`/plugins/${t.requiredBy}`},t.requiredBy))))))}const I=t=>({section:(0,m.css)`
    margin-bottom: ${t.spacing(4)};
  `});var G=a(91605),H=a(56034),_=a(14578);const ee=({tokens:t,timeZone:n,tokenActionsDisabled:o,onDelete:E})=>{const v=(0,u.$j)(),y=L(v);return e.createElement("table",{className:(0,m.cx)(y.section,"filter-table")},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Expires"),e.createElement("th",null,"Created"),e.createElement("th",null,"Last used at"),e.createElement("th",null),e.createElement("th",null))),e.createElement("tbody",null,t.map(d=>e.createElement("tr",{key:d.id,className:y.tableRow(d.hasExpired||d.isRevoked)},e.createElement("td",null,d.name),e.createElement("td",null,e.createElement(re,{timeZone:n,token:d})),e.createElement("td",null,te(n,d.created)),e.createElement("td",null,j(n,d.lastUsedAt)),e.createElement("td",{className:"width-1 text-center"},d.isRevoked&&e.createElement(q,null)),e.createElement("td",null,e.createElement(G.e,{"aria-label":`Delete service account token ${d.name}`,size:"sm",onConfirm:()=>E(d),disabled:o}))))))};function j(t,n){return n?(0,B.LE)(n,{timeZone:t}):"Never"}function te(t,n){return n?(0,B.LE)(n,{timeZone:t}):"No expiration date"}function le(t){const n=Math.ceil(t/86400);return`Expires in ${n>1?`${n} days`:`${n} day`}`}const q=()=>{const t=(0,u.of)(L);return e.createElement("span",{className:t.hasExpired},"Revoked",e.createElement("span",{className:t.tooltipContainer},e.createElement(H.m,{content:"This token has been publicly exposed. Please rotate this token"},e.createElement(_.I,{name:"exclamation-triangle",className:t.toolTipIcon}))))},re=({timeZone:t,token:n})=>{const o=(0,u.of)(L);return n.expiration?n.secondsUntilExpiration?e.createElement("span",{className:o.secondsUntilExpiration},le(n.secondsUntilExpiration)):n.hasExpired?e.createElement("span",{className:o.hasExpired},"Expired",e.createElement("span",{className:o.tooltipContainer},e.createElement(H.m,{content:"This token has expired"},e.createElement(_.I,{name:"exclamation-triangle",className:o.toolTipIcon})))):e.createElement("span",null,te(t,n.expiration)):e.createElement("span",{className:o.neverExpire},"Never")},L=t=>({tableRow:n=>(0,m.css)`
    color: ${n?t.colors.text.secondary:t.colors.text.primary};
  `,tooltipContainer:(0,m.css)`
    margin-left: ${t.spacing(1)};
  `,toolTipIcon:(0,m.css)`
    color: ${t.colors.error.text};
  `,secondsUntilExpiration:(0,m.css)`
    color: ${t.colors.warning.text};
  `,hasExpired:(0,m.css)`
    color: ${t.colors.error.text};
  `,neverExpire:(0,m.css)`
    color: ${t.colors.text.secondary};
  `,section:(0,m.css)`
    margin-bottom: ${t.spacing(4)};
  `});var fe=a(12966),Y=a(17172),Pe=a(12131),ye=a(80714),ne=a(1936);const w="/api/serviceaccounts";function ve(t){return async n=>{n((0,ne.G3)());try{const o=await(0,Y.AI)().get(`${w}/${t}`,(0,ye.F)());n((0,ne.QM)(o))}catch(o){console.error(o)}finally{n((0,ne.aD)())}}}function Ae(t){return async n=>{await(0,Y.AI)().patch(`${w}/${t.id}?accesscontrol=true`,{...t}),n(ve(t.id))}}function he(t){return async()=>{await(0,Y.AI)().delete(`${w}/${t}`),Pe.Ny.push("/org/serviceaccounts")}}function Se(t,n,o){return async E=>{const v=await(0,Y.AI)().post(`${w}/${t}/tokens`,n);o(v.key),E(ce(t))}}function xe(t,n){return async o=>{await(0,Y.AI)().delete(`${w}/${t}/tokens/${n}`),o(ce(t))}}function ce(t){return async n=>{try{const o=await(0,Y.AI)().get(`${w}/${t}/tokens`);n((0,ne.ch)(o))}catch(o){console.error(o)}}}function Ie(t){return{serviceAccount:t.serviceAccountProfile.serviceAccount,tokens:t.serviceAccountProfile.tokens,isLoading:t.serviceAccountProfile.isLoading,timezone:(0,h.O)(t.user)}}const Me={createServiceAccountToken:Se,deleteServiceAccount:he,deleteServiceAccountToken:xe,loadServiceAccount:ve,loadServiceAccountTokens:ce,updateServiceAccount:Ae},Oe=(0,s.connect)(Ie,Me),pe=({match:t,serviceAccount:n,tokens:o,timezone:E,isLoading:v,createServiceAccountToken:y,deleteServiceAccount:d,deleteServiceAccountToken:U,loadServiceAccount:b,loadServiceAccountTokens:C,updateServiceAccount:N})=>{const[ae,oe]=(0,e.useState)(""),[ie,se]=(0,e.useState)(!1),[de,me]=(0,e.useState)(!1),[ue,Q]=(0,e.useState)(!1),W=parseInt(t.params.id,10),De=n.isDisabled||n.isExternal||!f.TP.hasPermission(c.AccessControlAction.ServiceAccountsWrite),Te=f.TP.hasPermission(c.AccessControlAction.ServiceAccountsWrite),$e=f.TP.hasPermissionInMetadata(c.AccessControlAction.ServiceAccountsPermissionsRead,n),Le={text:n.name,img:n.avatarUrl,subTitle:"Manage settings for an individual service account."};(0,e.useEffect)(()=>{b(W),C(W),f.TP.licensedAccessControlEnabled()&&(0,fe.pJ)()},[b,C,W]);const be=M=>{N(M)},ge=M=>()=>{me(M)},Ce=M=>()=>{Q(M)},Ne=()=>{d(n.id)},Be=()=>{N({...n,isDisabled:!0}),Q(!1)},Ue=()=>{N({...n,isDisabled:!1})},We=M=>{U(n?.id,M.id)},ke=M=>{y(n?.id,M,oe)},Ke=()=>{se(!1),oe("")};return e.createElement(S.Y,{navId:"serviceaccounts",pageNav:Le},e.createElement(S.Y.Contents,{isLoading:v},e.createElement("div",null,n&&!n.isExternal&&e.createElement(P.Gy,{spacing:"md",height:"auto",justify:"flex-end"},e.createElement(p.$n,{type:"button",variant:"destructive",onClick:ge(!0),disabled:!f.TP.hasPermission(c.AccessControlAction.ServiceAccountsDelete)},"Delete service account"),n.isDisabled?e.createElement(p.$n,{type:"button",variant:"secondary",onClick:Ue,disabled:!Te},"Enable service account"):e.createElement(p.$n,{type:"button",variant:"secondary",onClick:Ce(!0),disabled:!Te},"Disable service account")),n&&n.isExternal&&e.createElement(P.Gy,{spacing:"md",height:"auto",justify:"flex-end"},e.createElement(g.K,{disabled:!0,name:"lock",size:"md",tooltip:"This is a managed service account and cannot be modified."})),n&&e.createElement(x,{serviceAccount:n,timeZone:E,onChange:be}),e.createElement(P.Gy,{justify:"space-between",height:"auto"},e.createElement("h3",null,"Tokens"),!n.isExternal&&e.createElement(p.$n,{onClick:()=>se(!0),disabled:De},"Add service account token")),o&&e.createElement(ee,{tokens:o,timeZone:E,onDelete:We,tokenActionsDisabled:De}),!n.isExternal&&$e&&e.createElement(X,{serviceAccount:n})),e.createElement(i.u,{isOpen:de,title:"Delete service account",body:"Are you sure you want to delete this service account?",confirmText:"Delete service account",onConfirm:Ne,onDismiss:ge(!1)}),e.createElement(i.u,{isOpen:ue,title:"Disable service account",body:"Are you sure you want to disable this service account?",confirmText:"Disable service account",onConfirm:Be,onDismiss:Ce(!1)}),e.createElement(Z.z,{isOpen:ie,token:ae,serviceAccountLogin:n.login,onCreateToken:ke,onClose:Ke})))},Re=Oe(pe)},98788:(Ee,k,a)=>{a.d(k,{z:()=>Z});var e=a(32196),s=a(96540),h=a(62938),P=a(32264),p=a(40845),g=a(37390),i=a(88575),S=a(10354),f=a(94354),c=a(98239),K=a(55852),F=a(10534);const X=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],Z=({isOpen:u,token:D,serviceAccountLogin:r,onCreateToken:l,onClose:O})=>{const T=new Date;T.setDate(T.getDate()+1);const A=new Date;P.$.tokenExpirationDayLimit!==void 0&&P.$.tokenExpirationDayLimit>-1?A.setDate(A.getDate()+P.$.tokenExpirationDayLimit+1):A.setDate(864e13);const R=P.$.tokenExpirationDayLimit!==void 0&&P.$.tokenExpirationDayLimit>0,[V,$]=(0,s.useState)(""),[z,J]=(0,s.useState)(""),[x,I]=(0,s.useState)(R),[G,H]=(0,s.useState)(T),[_,ee]=(0,s.useState)(G!==""),j=(0,p.of)(B);(0,s.useEffect)(()=>{u&&$(`${r}-${(0,h.A)()}`)},[r,u]);const te=L=>{ee(L!==""),H(L)},le=()=>{l({name:z||V,secondsToLive:x?m(G):void 0})},q=()=>{J(""),$(""),I(R),H(T),ee(G!==""),O()},re=D?"Service account token created":"Add service account token";return s.createElement(g.a,{isOpen:u,title:re,onDismiss:q,className:j.modal,contentClassName:j.modalContent},D?s.createElement(s.Fragment,null,s.createElement(i.D,{label:"Token",description:"Copy the token now as you will not be able to see it again. Losing a token requires creating a new one."},s.createElement("div",{className:j.modalTokenRow},s.createElement(S.p,{name:"tokenValue",value:D,readOnly:!0}),s.createElement(F.b,{className:j.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>D},"Copy clipboard"))),s.createElement(g.a.ButtonRow,null,s.createElement(F.b,{variant:"primary",getText:()=>D,onClipboardCopy:q},"Copy to clipboard and close"),s.createElement(K.$n,{variant:"secondary",onClick:q},"Close"))):s.createElement("div",null,s.createElement(i.D,{label:"Display name",description:"Name to easily identify the token",required:!0},s.createElement(S.p,{name:"tokenName",value:z,placeholder:V,onChange:L=>{J(L.currentTarget.value)}})),s.createElement(i.D,{label:"Expiration"},s.createElement(f.z,{options:X,value:x,onChange:I,size:"md"})),x&&s.createElement(i.D,{label:"Expiration date"},s.createElement(c.l,{onChange:te,value:G,placeholder:"",minDate:T,maxDate:A})),s.createElement(g.a.ButtonRow,null,s.createElement(K.$n,{onClick:le,disabled:x&&!_},"Generate token"))))},m=u=>{const D=new Date(u),r=new Date;return Math.ceil((D.getTime()-r.getTime())/1e3)},B=u=>({modal:(0,e.css)`
      width: 550px;
    `,modalContent:(0,e.css)`
      overflow: visible;
    `,modalTokenRow:(0,e.css)`
      display: flex;
    `,modalCopyToClipboardButton:(0,e.css)`
      margin-left: ${u.spacing(.5)};
    `})},12966:(Ee,k,a)=>{a.d(k,{W4:()=>X,iJ:()=>c,mV:()=>F,nM:()=>B,pJ:()=>f,qS:()=>u,yC:()=>Z,yd:()=>D});var e=a(2543),s=a.n(e),h=a(17172),P=a(85927),p=a(16233),g=a(80348),i=a(1936);const S="/api/serviceaccounts";function f(){return async r=>{try{if(p.TP.licensedAccessControlEnabled()&&p.TP.hasPermission(g.AccessControlAction.ActionRolesList)){const l=await(0,P.RL)();r((0,i.ew)(l))}}catch(l){console.error(l)}}}function c({withLoadingIndicator:r}={withLoadingIndicator:!1}){return async(l,O)=>{try{if(p.TP.hasPermission(g.AccessControlAction.ServiceAccountsRead)){r&&l((0,i.FW)());const{perPage:T,page:A,query:R,serviceAccountStateFilter:V}=O().serviceAccounts,$=await(0,h.AI)().get(`/api/serviceaccounts/search?perpage=${T}&page=${A}&query=${R}${m(V)}&accesscontrol=true`);if(p.TP.licensedAccessControlEnabled()&&p.TP.hasPermission(g.AccessControlAction.ActionUserRolesList)){l((0,i.dJ)());const z=p.TP.user.orgId,J=$?.serviceAccounts.map(I=>I.id),x=await(0,h.AI)().post("/api/access-control/users/roles/search",{userIds:J,orgId:z});$.serviceAccounts.forEach(I=>{I.roles=x?x[I.id]||[]:[]}),l((0,i.jE)())}l((0,i.zh)($))}}catch(T){console.error(T)}finally{l((0,i.Yh)())}}}const K=(0,e.debounce)(r=>r(c()),500,{leading:!0});function F(r){return async l=>{await(0,h.AI)().patch(`${S}/${r.id}?accesscontrol=true`,{...r}),l(c())}}function X(r){return async l=>{await(0,h.AI)().delete(`${S}/${r}`),l(c())}}function Z(r,l,O){return async T=>{const A=await(0,h.AI)().post(`${S}/${r}/tokens`,l);O(A.key),T(c())}}const m=r=>{switch(r){case g.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case g.ServiceAccountStateFilter.Disabled:return"&disabled=true";case g.ServiceAccountStateFilter.External:return"&external=true";default:return""}};function B(r){return async l=>{l((0,i.L5)(r)),K(l)}}function u(r){return async l=>{l((0,i.c3)(r)),l(c())}}function D(r){return async l=>{l((0,i.EC)(r)),l(c())}}}}]);

//# sourceMappingURL=ServiceAccountPage.bc7c35b63b03ccc89628.js.map