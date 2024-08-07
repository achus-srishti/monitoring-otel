"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7455],{26423:(de,b,e)=>{e.d(b,{Pc:()=>m,WG:()=>R,uz:()=>$});var a=e(17172),t=e(37534),S=e(99494),x=e(49962);const m="grafana_alerting_v2",C=g=>`/api/plugin-proxy/${S.W.OnCall}${g}`,R=x.H.injectEndpoints({endpoints:g=>({grafanaOnCallIntegrations:g.query({query:()=>({url:C("/api/internal/v1/alert_receive_channels/"),params:{filters:!0,integration:[t.FI,"legacy_grafana_alerting"],skip_pagination:!0},showErrorAlert:!1}),transformResponse:F=>p(F)?F.results:F,providesTags:["OnCallIntegrations"]}),validateIntegrationName:g.query({query:F=>({url:C("/api/internal/v1/alert_receive_channels/validate_name/"),params:{verbal_name:F},showErrorAlert:!1})}),createIntegration:g.mutation({query:F=>({url:C("/api/internal/v1/alert_receive_channels/"),data:F,method:"POST",showErrorAlert:!0}),invalidatesTags:["OnCallIntegrations"]}),features:g.query({query:()=>({url:C("/api/internal/v1/features/"),showErrorAlert:!1})})})});function p(g){return"results"in g&&Array.isArray(g.results)}const{useGrafanaOnCallIntegrationsQuery:h}=R;function $(g){return(0,a.NF)(g)&&"detail"in g.data}},776:(de,b,e)=>{e.d(b,{B:()=>c});var a=e(96540),t=e(42418),S=e(80348),x=e(82843),m=e(23770),C=e(21607),R=e(57220),p=e(72399),h=e(49785),$=e(88575),g=e(10880);const F=({pathPrefix:f,className:T,readOnly:d=!1})=>{const{register:z}=(0,h.xW)();return a.createElement("div",{className:T},a.createElement($.D,{disabled:d},a.createElement(g.S,{...z(`${f}sendResolved`),label:"Send resolved",disabled:d,description:"Whether or not to notify about resolved alerts."})))};var re=e(18022);const _=Object.freeze({__id:"",sendResolved:!0,secureSettings:{},settings:{},secureFields:{},type:"email"}),se=C.r.map(f=>({dto:f})),c=({existing:f,alertManagerSourceName:T,config:d,readOnly:z=!1})=>{const J=(0,S.useDispatch)(),W=(0,R.AL)(T),[X]=(0,a.useMemo)(()=>f?(0,p.Iq)(f,C.r):[void 0,{}],[f]),ee=async B=>{const Y=(0,p.QX)(B,_);await J((0,m.RW)({newConfig:(0,p.jS)(d,Y,f?.name),oldConfig:d,alertManagerSourceName:T,successMessage:f?"Contact point updated.":"Contact point created.",redirectPath:"/alerting/notifications"})).then(()=>{J(x.m.util.invalidateTags(["AlertmanagerConfiguration"]))})},Z=(0,a.useMemo)(()=>d.alertmanager_config.receivers?.map(({name:B})=>B).filter(B=>B!==f?.name)??[],[d,f]),k=!z;return a.createElement(a.Fragment,null,!W&&a.createElement(t.F,{title:"Info",severity:"info"},"Note that empty string values will be replaced with global defaults where appropriate."),a.createElement(re.k,{isEditable:k,isTestable:k,config:d,onSubmit:ee,initialValues:X,notifiers:se,alertManagerSourceName:T,defaultItem:_,takenReceiverNames:Z,commonSettingsComponent:F}))}},17430:(de,b,e)=>{e.d(b,{a:()=>ve});var a=e(96540),t=e(39558),S=e(42418),x=e(80348),m=e(82843),C=e(23770),R=e(57220),p=e(72399),h=e(48205),$=e(37534),g=e(59647),F=e(49785),re=e(88575),_=e(10880);const se=({pathPrefix:i,className:w,readOnly:n=!1})=>{const{register:r}=(0,F.xW)();return a.createElement("div",{className:w},a.createElement(re.D,null,a.createElement(_.S,{...r(`${i}disableResolveMessage`),label:"Disable resolved message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false",disabled:n})))};var c=e(18022),f=e(32196),T=e(40845),d=e(37390),z=e(60029),J=e(94354),W=e(55852),X=e(55740),ee=e(31099),Z=e(54749),k=(i=>(i.predefined="Predefined",i.custom="Custom",i))(k||{});const B=Object.values(k).map(i=>({label:i,value:i})),Y={annotations:[...X.kl],labels:[{key:"",value:""}]},ge=({isOpen:i,onDismiss:w,onTest:n})=>{const[r,s]=(0,a.useState)("Predefined"),I=(0,T.of)(fe),l=(0,F.mN)({defaultValues:Y,mode:"onBlur"}),E=N=>{if(r==="Custom"){const G={annotations:N.annotations.filter(({key:A,value:y})=>!!A&&!!y).reduce((A,{key:y,value:o})=>({...A,[y]:o}),{}),labels:N.labels.filter(({key:A,value:y})=>!!A&&!!y).reduce((A,{key:y,value:o})=>({...A,[y]:o}),{})};n(G)}else n()};return a.createElement(d.a,{onDismiss:w,isOpen:i,title:"Test contact point"},a.createElement("div",{className:I.section},a.createElement(z.J,null,"Notification message"),a.createElement(J.z,{options:B,value:r,onChange:N=>s(N)})),a.createElement(F.Op,{...l},a.createElement("form",{onSubmit:l.handleSubmit(E)},r==="Predefined"&&a.createElement("div",{className:I.section},"You will send a test notification that uses a predefined alert. If you have defined a custom template or message, for better results switch to ",a.createElement("strong",null,"custom")," notification message, from above."),r==="Custom"&&a.createElement(a.Fragment,null,a.createElement("div",{className:I.section},"You will send a test notification that uses the annotations defined below. This is a good option if you use custom templates and messages."),a.createElement("div",{className:I.section},a.createElement(ee.A,null)),a.createElement("div",{className:I.section},a.createElement(Z.A,null))),a.createElement(d.a.ButtonRow,null,a.createElement(W.$n,{type:"submit"},"Send test notification")))))},fe=i=>({flexRow:(0,f.css)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: ${i.spacing(1)};
  `,section:(0,f.css)`
    margin-bottom: ${i.spacing(2)};
  `}),oe=Object.freeze({__id:"",secureSettings:{},settings:{},secureFields:{},disableResolveMessage:!1,type:"email"}),ve=({existing:i,alertManagerSourceName:w,config:n,readOnly:r=!1})=>{const s=(0,x.useDispatch)(),{onCallNotifierMeta:I,extendOnCallNotifierFeatures:l,extendOnCallReceivers:E,onCallFormValidators:N,createOnCallIntegrations:G,isLoadingOnCallIntegration:A,hasOnCallError:y}=(0,g.VY)(),{useGrafanaNotifiersQuery:o}=m.m,{data:K=[],isLoading:V}=o(),[D,P]=(0,a.useState)(),[ie,L]=(0,a.useMemo)(()=>!i||V||A?[void 0,{}]:(0,p.Xo)(E(i),K),[i,V,K,E,A]),le=async u=>{const ce=(0,p.bB)(u,L,oe,K),ae=await G(ce),O=(0,p.jS)(n,ae,i?.name);await s((0,C.RW)({newConfig:O,oldConfig:n,alertManagerSourceName:R.hY,successMessage:i?"Contact point updated.":"Contact point created",redirectPath:"/alerting/notifications"})).then(()=>{s(m.m.util.invalidateTags(["AlertmanagerConfiguration"]))})},Ce=u=>{P(u)},te=u=>{if(D){const ce=L[D.__id],ae=(0,p.qg)(D,oe,"test",ce),O={alertManagerSourceName:w,receivers:[{name:"test",grafana_managed_receiver_configs:[ae]}],alert:u};s((0,C.bO)(O))}},H=(0,a.useMemo)(()=>n.alertmanager_config.receivers?.map(({name:u})=>u).filter(u=>u!==i?.name)??[],[n,i]),ne=i?(i.grafana_managed_receiver_configs??[]).some(u=>!!u.provenance):!1,ue=!r&&!ne,pe=!r;if(V||A)return a.createElement(t._,{text:"Loading notifiers..."});const Ee=K.map(u=>u.type==="oncall"?{dto:l(u),meta:I}:{dto:u});return a.createElement(a.Fragment,null,y&&a.createElement(S.F,{severity:"error",title:"Loading OnCall integration failed"},"Grafana OnCall plugin has been enabled in your Grafana instances but it is not reachable. Please check the plugin configuration"),ne&&a.createElement(h.Yi,{resource:h.hk.ContactPoint}),a.createElement(c.k,{isEditable:ue,isTestable:pe,config:n,onSubmit:le,initialValues:ie,onTestChannel:Ce,notifiers:Ee,alertManagerSourceName:w,defaultItem:{...oe},takenReceiverNames:H,commonSettingsComponent:se,customValidators:{[$.J4.OnCall]:N}}),a.createElement(ge,{onDismiss:()=>P(void 0),isOpen:!!D,onTest:u=>te(u)}))}},18022:(de,b,e)=>{e.d(b,{k:()=>ve});var a=e(32196),t=e(96540),S=e(49785),x=e(17172),m=e(40845),C=e(42418),R=e(88575),p=e(10354),h=e(55852),$=e(3169),g=e(40715),F=e(94954),re=e(25027),_=e(26423),se=e(45124),c=e(56361),f=e(88467),T=e(2543),d=e(16504),z=e(88323),J=e(61410),W=e(59647),X=e(71854);function ee({defaultValues:n,selectedChannelOptions:r,onResetSecureField:s,secureFields:I,errors:l,pathPrefix:E="",readOnly:N=!1,customValidators:G={}}){const{watch:A}=(0,S.xW)(),y=A();return t.createElement(t.Fragment,null,r.map((o,K)=>{const V=`${o.label}-${K}`,D=E.split("."),P=D.length>=2?y.items?.[Number(D[1])].settings?.[o.showWhen.field]:void 0;if(o.showWhen.field&&P!==o.showWhen.is)return null;if(I&&I[o.propertyName])return t.createElement(R.D,{key:V,label:o.label,description:o.description||void 0},t.createElement(p.p,{readOnly:!0,value:"Configured",suffix:N?null:t.createElement(h.$n,{onClick:()=>s(o.propertyName),fill:"text",type:"button",size:"sm"},"Clear")}));const ie=(o.secure?l?.secureSettings:l?.settings)?.[o.propertyName],L=n?.settings?.[o.propertyName];return t.createElement(X.e,{defaultValue:L,readOnly:N,key:V,error:ie,pathPrefix:E,pathSuffix:o.secure?"secureSettings.":"settings.",option:o,customValidator:G[o.propertyName]})}))}var Z=e(14591);function k({defaultValues:n,initialValues:r,pathPrefix:s,onDuplicate:I,onDelete:l,onTest:E,notifiers:N,errors:G,secureFields:A,commonSettingsComponent:y,isEditable:o=!0,isTestable:K,customValidators:V={}}){const D=(0,m.of)(B),P=(0,t.useCallback)(v=>`${s}${v}`,[s]),{control:ie,watch:L,register:le,trigger:Ce,formState:te,setValue:H}=(0,S.xW)(),ne=L(P("type"))??n.type,{loading:ue}=(0,J.$)(v=>v.testReceivers),Ee=L(P("settings.integration_type"))!==W.U0.NewIntegration;(0,t.useEffect)(()=>{le(`${s}.__id`),le(`${s}.secureFields`)},[le,s]),(0,t.useEffect)(()=>{const v=L((j,{name:Q,type:ye})=>{const he=Q?j[Q]:"";r&&Q===P("type")&&he===r.type&&ye==="change"&&H(P("settings"),r.settings),r&&Q===P("settings.integration_type")&&he===W.U0.ExistingIntegration&&H(P("settings.url"),r.settings.url)});return()=>v.unsubscribe()},[ne,r,H,P,L]);const[u,ce]=(0,t.useState)(A??{}),ae=v=>{if(u[v]){const j={...A};delete j[v],ce(j),H(`${s}.secureFields`,j)}},O=(0,t.useMemo)(()=>(0,T.sortBy)(N,({dto:v,meta:j})=>[j?.order??0,v.name]).map(({dto:{name:v,type:j},meta:Q})=>({label:v,value:j,description:Q?.description,isDisabled:Q?!Q.enabled:!1,imgUrl:Q?.iconUrl})),[N]),M=async()=>{await Ce(),Object.keys(te.errors).length===0&&E&&E()},U=N.find(({dto:{type:v}})=>v===ne),me=U?.dto.options.filter(v=>v.required),q=U?.dto.options.filter(v=>!v.required),Oe=`contact-point-type-${s}`;return t.createElement("div",{className:D.wrapper,"data-testid":"item-container"},t.createElement("div",{className:D.topRow},t.createElement("div",null,t.createElement(R.D,{label:"Integration",htmlFor:Oe,"data-testid":`${s}type`},t.createElement(d.e,{name:P("type"),defaultValue:n.type,render:({field:{ref:v,onChange:j,...Q}})=>t.createElement(z.l6,{disabled:!o,inputId:Oe,...Q,width:37,options:O,onChange:ye=>j(ye?.value)}),control:ie,rules:{required:!0}}))),t.createElement("div",{className:D.buttons},K&&E&&Ee&&t.createElement(h.$n,{disabled:ue,size:"xs",variant:"secondary",type:"button",onClick:()=>M(),icon:ue?"spinner":"message"},"Test"),o&&t.createElement(t.Fragment,null,t.createElement(h.$n,{size:"xs",variant:"secondary",type:"button",onClick:()=>I(),icon:"copy"},"Duplicate"),l&&t.createElement(h.$n,{"data-testid":`${s}delete-button`,size:"xs",variant:"secondary",type:"button",onClick:()=>l(),icon:"trash-alt"},"Delete")))),U&&t.createElement("div",{className:D.innerContent},t.createElement(ee,{defaultValues:n,selectedChannelOptions:me?.length?me:q,secureFields:u,errors:G,onResetSecureField:ae,pathPrefix:s,readOnly:!o,customValidators:V}),!!(me?.length&&q?.length)&&t.createElement(Z.i,{label:`Optional ${U.dto.name} settings`},U.dto.info!==""&&t.createElement(C.F,{title:"",severity:"info"},U.dto.info),t.createElement(ee,{defaultValues:n,selectedChannelOptions:q,secureFields:u,onResetSecureField:ae,errors:G,pathPrefix:s,readOnly:!o,customValidators:V})),t.createElement(Z.i,{label:"Notification settings"},t.createElement(y,{pathPrefix:s,readOnly:!o}))))}const B=n=>({buttons:(0,a.css)`
    & > * + * {
      margin-left: ${n.spacing(1)};
    }
  `,innerContent:(0,a.css)`
    max-width: 536px;
  `,wrapper:(0,a.css)`
    margin: ${n.spacing(2,0)};
    padding: ${n.spacing(1)};
    border: solid 1px ${n.colors.border.medium};
    border-radius: ${n.shape.radius.default};
    max-width: ${n.breakpoints.values.xl}${n.breakpoints.unit};
  `,topRow:(0,a.css)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,channelSettingsHeader:(0,a.css)`
    margin-top: ${n.spacing(2)};
  `});function Y({pathPrefix:n}){const{register:r}=(0,S.xW)();return(0,t.useEffect)(()=>{r(`${n}.__id`),r(`${n}.__deleted`)},[r,n]),t.createElement(t.Fragment,null)}function ge(n){if(n)return{...n,items:n.items.map(r=>({...r,settings:{...r.settings,http_config:r.settings?.http_config?fe(r.settings?.http_config):void 0}}))}}function fe(n){return oe(n)?n:{...(0,T.omit)(n,"authorization"),bearer_token:n.authorization?.credentials,bearer_token_file:n.authorization?.credentials_file}}function oe(n){return["bearer_token","bearer_token_file"].some(r=>r in n)}function ve({config:n,initialValues:r,defaultItem:s,notifiers:I,alertManagerSourceName:l,onSubmit:E,onTestChannel:N,takenReceiverNames:G,commonSettingsComponent:A,isEditable:y,isTestable:o,customValidators:K}){const V=(0,$._2)(),D=(0,m.of)(i),ie=ge(r)??{name:"",items:[{...s,__id:String(Math.random())}]},L=(0,S.mN)({defaultValues:structuredClone(ie)});(0,g.o)(O=>O.unifiedAlerting.saveAMConfig=f.jA);const{handleSubmit:le,register:Ce,formState:{errors:te,isSubmitting:H},getValues:ne}=L,{fields:ue,append:pe,remove:Ee}=(0,se.r)({name:"items",formAPI:L,softDelete:!0}),u=(0,t.useCallback)(O=>G.map(M=>M.trim().toLowerCase()).includes(O.trim().toLowerCase())?"Another receiver with this name already exists.":!0,[G]),ce=async O=>{try{await E({...O,items:O.items.filter(M=>!M.__deleted)})}catch(M){if(M instanceof Error||(0,x.NF)(M)){V.error("Failed to save the contact point",w(M));const U=new Error("Failed to save the contact point");U.cause=M,(0,re.vV)(U)}throw M}},ae=()=>{V.error("There are errors in the form. Please correct them and try again!")};return t.createElement(S.Op,{...L},!n.alertmanager_config.route&&t.createElement(C.F,{severity:"warning",title:"Attention"},"Because there is no default policy configured yet, this contact point will automatically be set as default."),t.createElement("form",{onSubmit:le(ce,ae)},t.createElement("h4",{className:D.heading},y?r?"Update contact point":"Create contact point":"Contact point"),t.createElement(R.D,{label:"Name",invalid:!!te.name,error:te.name&&te.name.message,required:!0},t.createElement(p.p,{readOnly:!y,id:"name",...Ce("name",{required:"Name is required",validate:{nameIsAvailable:u}}),width:39,placeholder:"Name"})),ue.map((O,M)=>{const U=`items.${M}.`;if(O.__deleted)return t.createElement(Y,{key:O.__id,pathPrefix:U});const me=r?.items.find(({__id:q})=>q===O.__id);return t.createElement(k,{defaultValues:O,initialValues:me,key:O.__id,onDuplicate:()=>{const q=ne().items[M];pe({...q,__id:String(Math.random())})},onTest:N?()=>{const q=ne().items[M];N(q)}:void 0,onDelete:()=>Ee(M),pathPrefix:U,notifiers:I,secureFields:me?.secureFields,errors:te?.items?.[M],commonSettingsComponent:A,isEditable:y,isTestable:o,customValidators:K?K[O.type]:void 0})}),t.createElement(t.Fragment,null,y&&t.createElement(h.$n,{type:"button",icon:"plus",variant:"secondary",onClick:()=>pe({...s,__id:String(Math.random())})},"Add contact point integration"),t.createElement("div",{className:D.buttons},y&&t.createElement(t.Fragment,null,H&&t.createElement(h.$n,{disabled:!0,icon:"spinner",variant:"primary"},"Saving..."),!H&&t.createElement(h.$n,{type:"submit"},"Save contact point")),t.createElement(h.z9,{disabled:H,variant:"secondary","data-testid":"cancel-button",href:(0,c.nL)("alerting/notifications",l)},"Cancel")))))}const i=n=>({heading:(0,a.css)`
    margin: ${n.spacing(4,0)};
  `,buttons:(0,a.css)`
    margin-top: ${n.spacing(4)};

    & > * + * {
      margin-left: ${n.spacing(1)};
    }
  `});function w(n){return(0,_.uz)(n)?n.data.detail:(0,F.q)(n)}},37534:(de,b,e)=>{e.d(b,{FI:()=>a,J4:()=>t,p8:()=>x});const a="grafana_alerting";var t=(m=>(m.OnCall="oncall",m))(t||{});const S=(m,C)=>C.includes(m),x=(m,C)=>{if(!m.grafana_managed_receiver_configs)return!1;const R=m.grafana_managed_receiver_configs.length===1,p=S(m.grafana_managed_receiver_configs[0]?.settings?.url??"",C.map(h=>h.integration_url));return R&&p}},59647:(de,b,e)=>{e.d(b,{U0:()=>g,VY:()=>se});var a=e(1932),t=e(96540),S=e(17172),x=e(3169),m=e(26423),C=e(12210),R=e(99494),p=e(79851),h=e(86768),$=e(37534),g=(c=>(c.NewIntegration="new_oncall_integration",c.ExistingIntegration="existing_oncall_integration",c))(g||{}),F=(c=>(c.IntegrationType="integration_type",c.IntegrationName="integration_name",c))(F||{}),re=(c=>(c.Disabled="disabled",c.V1="v1",c.V2="v2",c))(re||{});function _(){const{installed:c,loading:f,error:T}=(0,C._)(R.W.OnCall),{data:d=[],error:z,isLoading:J}=m.WG.endpoints.features.useQuery(void 0,{skip:!c}),W=(0,t.useMemo)(()=>c?d.includes(m.Pc)?"v2":"v1":"disabled",[c,d]),X=(0,t.useMemo)(()=>W==="v2",[W]);return{isOnCallEnabled:c,integrationStatus:W,isAlertingV2IntegrationEnabled:X,isOnCallStatusLoading:f||J,onCallError:T??z}}function se(){const c=(0,x._2)(),{isOnCallEnabled:f,integrationStatus:T,isAlertingV2IntegrationEnabled:d,isOnCallStatusLoading:z,onCallError:J}=_(),{useCreateIntegrationMutation:W,useGrafanaOnCallIntegrationsQuery:X,useLazyValidateIntegrationNameQuery:ee}=m.WG,[Z,{isFetching:k}]=ee(),[B]=W(),{data:Y=[],isLoading:ge,isError:fe}=X(void 0,{skip:!d}),oe=(0,t.useMemo)(()=>({integration_name:async n=>{try{return await Z(n).unwrap(),!0}catch(r){if((0,S.NF)(r)&&r.status===409)return"Integration of this name already exists in OnCall";throw c.error("Failed to validate OnCall integration name. Is the OnCall API available?"),r}},url:n=>d?Y.map(r=>r.integration_url).includes(n)?!0:"Selection of existing OnCall integration is required":!0}),[Y,Z,d,c]),ve=(0,t.useCallback)(n=>d?(0,a.jM)(n,r=>{r.grafana_managed_receiver_configs?.forEach(s=>{s.type===$.J4.OnCall&&(s.settings.integration_type="existing_oncall_integration")})}):n,[d]),i=(0,t.useCallback)(async n=>{if(!d)return n;const I=(n.grafana_managed_receiver_configs?.filter(l=>l.type==="oncall")??[]).filter(l=>l.settings.integration_type==="new_oncall_integration").map(async l=>{const E=await B({integration:$.FI,verbal_name:l.settings.integration_name}).unwrap();l.settings.url=E.integration_url});return await Promise.all(I),(0,a.jM)(n,l=>{l.grafana_managed_receiver_configs?.forEach(E=>{E.type===$.J4.OnCall&&(delete E.settings.integration_type,delete E.settings.integration_name)})})},[d,B]),w=(0,t.useCallback)(n=>{if(n.type===$.J4.OnCall&&d){const r=n.options.filter(l=>l.propertyName!=="url"),s={value:"new_oncall_integration",label:"New OnCall integration",description:"A new OnCall integration without escalation chains will be automatically created"},I={value:"existing_oncall_integration",label:"Existing OnCall integration",description:"Use an existing OnCall integration"};return r.unshift((0,p.u)("integration_type","How to connect to OnCall","",{required:!0,element:"radio",defaultValue:s,selectOptions:[s,I]}),(0,p.u)("integration_name","Integration name","The name of the new OnCall integration",{required:!0,showWhen:{field:"integration_type",is:"new_oncall_integration"}}),(0,p.u)("url","OnCall Integration","The OnCall integration to send alerts to",{element:"select",required:!0,showWhen:{field:"integration_type",is:"existing_oncall_integration"},selectOptions:Y.map(l=>({label:l.display_name,description:l.integration_url,value:l.integration_url}))})),{...n,options:r}}return n},[Y,d]);return{integrationStatus:T,onCallNotifierMeta:{enabled:!!f,order:-1,description:f?"Connect effortlessly to Grafana OnCall":"Enable Grafana OnCall plugin to use this integration",iconUrl:h.K[R.W.OnCall]},extendOnCallNotifierFeatures:w,extendOnCallReceivers:ve,createOnCallIntegrations:i,onCallFormValidators:oe,isLoadingOnCallIntegration:ge||z,isValidating:k,hasOnCallError:!!J||fe}}},86768:(de,b,e)=>{e.d(b,{K:()=>t});var a=e(99494);const t={[a.W.OnCall]:"public/img/alerting/oncall_logo.svg",[a.W.Incident]:"",[a.W.MachineLearning]:""}}}]);

//# sourceMappingURL=7455.845968885abe369e6479.js.map