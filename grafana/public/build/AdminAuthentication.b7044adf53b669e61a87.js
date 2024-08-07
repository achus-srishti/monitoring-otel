"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5592],{10437:(Q,v,a)=>{a.r(v),a.d(v,{AuthConfigPageUnconnected:()=>ae,default:()=>ne});var e=a(96540),C=a(69733),x=a(14110),d=a(72109),P=a(71259),D=a(36830),w=a(32196),R=a(40845),$=a(67061),E=a(14578),l=a(94753);const f=()=>{const u=(0,R.of)(g);return e.createElement("div",{className:u.container},e.createElement($.B,{gap:1,alignItems:"center"},e.createElement(E.I,{name:"cog"}),e.createElement(l.E,null,"Configuration required")),e.createElement(l.E,{variant:"bodySmall",color:"secondary"},"You have no authentication configuration created at the moment."),e.createElement(d.Y,{href:"https://grafana.com/docs/grafana/latest/auth/overview/",external:!0},"Refer to the documentation on how to configure authentication"))},g=u=>({container:(0,w.css)({display:"flex",flexDirection:"column",gap:u.spacing(2),backgroundColor:u.colors.background.secondary,borderRadius:u.shape.radius.default,padding:u.spacing(3),width:"max-content",margin:u.spacing(3,"auto")})}),G=f;var U=a(8887),y=a(10860),W=a(39938),ee=a(7250),te=a(5328);function ie({providerId:u,enabled:M,configPath:A,authType:I,onClick:Y}){const H=(0,te.h)({configPath:A,id:u}),[k,V]=ee.L[u]||["lock",u.toUpperCase()];return e.createElement(y.Z,{href:H,onClick:Y},e.createElement(y.Z.Heading,null,V),e.createElement(y.Z.Meta,null,I),(0,U.n6)(k)&&e.createElement(y.Z.Figure,null,e.createElement(E.I,{name:k,size:"xxxl"})),e.createElement(y.Z.Actions,null,e.createElement(W.E,{text:M?"Enabled":"Not enabled",color:M?"green":"blue"})))}var le=a(60610),ue=a(73399);function ce(u){const{isLoading:M,providerStatuses:A,providers:I}=u.authConfig;return{isLoading:M,providerStatuses:A,providers:I}}const de={loadSettings:le.M5},me=(0,C.connect)(ce,de),ae=({providerStatuses:u,isLoading:M,loadSettings:A,providers:I})=>{(0,e.useEffect)(()=>{A()},[A]);const H=(0,ue.getRegisteredAuthProviders)().filter(m=>!u[m.id]?.hide),k=m=>{(0,x.rR)("authentication_ui_provider_clicked",{provider:m})},V=H.length?[...H.map(m=>({provider:m.id,settings:{...u[m.id],configPath:m.configPath,type:m.type}})),...I]:I;return e.createElement(D.Y,{navId:"authentication",subTitle:e.createElement(e.Fragment,null,"Manage your auth settings and configure single sign-on. Find out more in our"," ",e.createElement(d.Y,{external:!0,href:"https://grafana.com/docs/grafana/next/setup-grafana/configure-security/configure-authentication"},"documentation"),".")},e.createElement(D.Y.Contents,{isLoading:M},V.length?e.createElement(P.x,{gap:3,minColumnWidth:34},V.filter(({provider:m})=>!["grafana_com"].includes(m)).map(({provider:m,settings:q})=>e.createElement(ie,{key:m,authType:q.type||"OAuth",providerId:m,enabled:q.enabled,onClick:()=>k(m),configPath:q.configPath}))):e.createElement(G,null)))},ne=me(ae)},22468:(Q,v,a)=>{a.r(v),a.d(v,{ProviderConfigPage:()=>pe,default:()=>Oe});var e=a(96540),C=a(69733),x=a(36830),d=a(49785),P=a(26272),D=a(3591),w=a(17172),R=a(14110),$=a(12131),E=a(88575),l=a(15292),f=a(67061),g=a(57418),G=a(90613),U=a(55852),y=a(96374),W=a(32196),ee=a(24180),te=a(37390);const ie=({confirmRedirect:n,onDiscard:t,onLocationChange:r})=>{const[o,h]=(0,e.useState)(!1),[b,p]=(0,e.useState)(null),[N,J]=(0,e.useState)(!1);(0,e.useEffect)(()=>{const s=O=>{n&&(O.preventDefault(),O.returnValue="")};return window.addEventListener("beforeunload",s),()=>{window.removeEventListener("beforeunload",s)}},[n]);const j=s=>{const O=window.location.pathname,i=s.pathname;if(O===i)return!0;const z=r?.(s);let T=n&&!N;return z!==void 0&&(T=T&&z),T?(h(!0),p(s),!1):(z&&t(),!0)},Z=()=>{h(!1),p(null)},L=()=>{h(!1),J(!0),t()};return e.createElement(e.Fragment,null,e.createElement(ee.XG,{when:!0,message:j}),b&&N&&e.createElement(ee.rd,{to:b}),e.createElement(le,{isOpen:o,onDiscard:L,onBackToForm:Z}))},le=({onDiscard:n,onBackToForm:t,isOpen:r})=>e.createElement(te.a,{isOpen:r,title:"Leave page?",onDismiss:t,icon:"exclamation-triangle",className:(0,W.css)({width:"500px"})},e.createElement("h5",null,"Changes that you made may not be saved."),e.createElement(te.a.ButtonRow,null,e.createElement(U.$n,{variant:"secondary",onClick:t,fill:"outline"},"Continue editing"),e.createElement(U.$n,{variant:"destructive",onClick:n},"Discard unsaved changes")));var ue=a(40845),ce=a(10354),de=a(9226),me=a(88323),ae=a(10880),ne=a(8227),u=a(72109),M=a(10096);function A(n){return Array.isArray(n)&&n.every(t=>typeof t=="object"&&t!==null&&"value"in t)}var I=a(5328);const Y={github:["name","clientId","clientSecret","teamIds","allowedOrganizations"],google:["name","clientId","clientSecret","allowedDomains"],gitlab:["name","clientId","clientSecret","allowedOrganizations","teamIds"],azuread:["name","clientId","clientSecret","authUrl","tokenUrl","scopes","allowedGroups","allowedDomains"],okta:["name","clientId","clientSecret","authUrl","tokenUrl","apiUrl","roleAttributePath","allowedGroups","allowedDomains"]},H={generic_oauth:[{name:"General settings",id:"general",fields:["name","clientId","clientSecret","authStyle","scopes","authUrl","tokenUrl","apiUrl","allowSignUp","autoLogin","signoutRedirectUrl"]},{name:"User mapping",id:"user",fields:["nameAttributePath","loginAttributePath","emailAttributeName","emailAttributePath","idTokenAttributeName","roleAttributePath","roleAttributeStrict","allowAssignGrafanaAdmin","skipOrgRoleSync"]},{name:"Extra security measures",id:"extra",fields:["allowedOrganizations","allowedDomains","defineAllowedGroups",{name:"allowedGroups",dependsOn:"defineAllowedGroups"},{name:"groupsAttributePath",dependsOn:"defineAllowedGroups"},"defineAllowedTeamsIds",{name:"teamIds",dependsOn:"defineAllowedTeamsIds"},{name:"teamsUrl",dependsOn:"defineAllowedTeamsIds"},{name:"teamIdsAttributePath",dependsOn:"defineAllowedTeamsIds"},"usePkce","useRefreshToken"]},{name:"TLS",id:"tls",fields:["tlsSkipVerifyInsecure","tlsClientCert","tlsClientKey","tlsClientCa"]}]};function k(n){return{clientId:{label:"Client Id",type:"text",description:"The client Id of your OAuth2 app.",validation:{required:!0,message:"This field is required"}},clientSecret:{label:"Client secret",type:"secret",description:"The client secret of your OAuth2 app."},allowedOrganizations:{label:"Allowed organizations",type:"select",description:`List of comma- or space-separated organizations. The user should be a member 
of at least one organization to log in.`,multi:!0,allowCustomValue:!0,options:[],placeholder:"Enter organizations (my-team, myteam...) and press Enter to add"},allowedDomains:{label:"Allowed domains",type:"select",description:`List of comma- or space-separated domains. The user should belong to at least 
one domain to log in.`,multi:!0,allowCustomValue:!0,options:[]},authUrl:{label:"Auth URL",type:"text",description:"The authorization endpoint of your OAuth2 provider.",validation:{required:!0,validate:t=>(0,I.K)(t),message:"This field is required and must be a valid URL."}},authStyle:{label:"Auth style",type:"select",description:"It determines how client_id and client_secret are sent to Oauth2 provider. Default is AutoDetect.",multi:!1,options:[{value:"AutoDetect",label:"AutoDetect"},{value:"InParams",label:"InParams"},{value:"InHeader",label:"InHeader"}],defaultValue:{value:"AutoDetect",label:"AutoDetect"}},tokenUrl:{label:"Token URL",type:"text",description:"The token endpoint of your OAuth2 provider.",validation:{required:!0,validate:t=>(0,I.K)(t),message:"This field is required and must be a valid URL."}},scopes:{label:"Scopes",type:"select",description:"List of comma- or space-separated OAuth2 scopes.",multi:!0,allowCustomValue:!0,options:[]},allowedGroups:{label:"Allowed groups",type:"select",description:e.createElement(e.Fragment,null,"List of comma- or space-separated groups. The user should be a member of at least one group to log in."," ",n==="generic_oauth"&&"If you configure allowed_groups, you must also configure groups_attribute_path."),multi:!0,allowCustomValue:!0,options:[],validation:n==="azuread"?{validate:t=>typeof t=="string"?(0,ne.A)(t):A(t)?t.every(r=>r?.value&&(0,ne.A)(r.value)):!0,message:"Allowed groups must be Object Ids."}:void 0},apiUrl:{label:"API URL",type:"text",description:e.createElement(e.Fragment,null,"The user information endpoint of your OAuth2 provider. Information returned by this endpoint must be compatible with"," ",e.createElement(u.Y,{href:"https://connect2id.com/products/server/docs/api/userinfo",external:!0,variant:"bodySmall"},"OpenID UserInfo"),"."),validation:{required:!1,validate:t=>typeof t!="string"?!1:t.length?(0,I.K)(t):!0,message:"This field must be a valid URL if set."}},roleAttributePath:{label:"Role attribute path",description:"JMESPath expression to use for Grafana role lookup.",type:"text",validation:{required:!1}},name:{label:"Display name",description:'Will be displayed on the login page as "Sign in with ...". Helpful if you use more than one identity providers or SSO protocols.',type:"text"},allowSignUp:{label:"Allow sign up",description:"If not enabled, only existing Grafana users can log in using OAuth.",type:"switch"},autoLogin:{label:"Auto login",description:"Log in automatically, skipping the login screen.",type:"switch"},signoutRedirectUrl:{label:"Sign out redirect URL",description:"The URL to redirect the user to after signing out from Grafana.",type:"text",validation:{required:!1}},emailAttributeName:{label:"Email attribute name",description:"Name of the key to use for user email lookup within the attributes map of OAuth2 ID token.",type:"text"},emailAttributePath:{label:"Email attribute path",description:"JMESPath expression to use for user email lookup from the user information.",type:"text"},nameAttributePath:{label:"Name attribute path",description:`JMESPath expression to use for user name lookup from the user ID token. 
This name will be used as the user\u2019s display name.`,type:"text"},loginAttributePath:{label:"Login attribute path",description:"JMESPath expression to use for user login lookup from the user ID token.",type:"text"},idTokenAttributeName:{label:"ID token attribute name",description:"The name of the key used to extract the ID token from the returned OAuth2 token.",type:"text"},roleAttributeStrict:{label:"Role attribute strict mode",description:"If enabled, denies user login if the Grafana role cannot be extracted using Role attribute path.",type:"switch"},allowAssignGrafanaAdmin:{label:"Allow assign Grafana admin",description:"If enabled, it will automatically sync the Grafana server administrator role.",type:"switch",hidden:!M.TP.isGrafanaAdmin},skipOrgRoleSync:{label:"Skip organization role sync",description:"Prevent synchronizing users\u2019 organization roles from your IdP.",type:"switch"},defineAllowedGroups:{label:"Define allowed groups",type:"switch"},defineAllowedTeamsIds:{label:"Define allowed teams ids",type:"switch"},usePkce:{label:"Use PKCE",description:e.createElement(e.Fragment,null,"If enabled, Grafana will use"," ",e.createElement(u.Y,{external:!0,variant:"bodySmall",href:"https://datatracker.ietf.org/doc/html/rfc7636"},"Proof Key for Code Exchange (PKCE)")," ","with the OAuth2 Authorization Code Grant."),type:"checkbox"},useRefreshToken:{label:"Use refresh token",description:"If enabled, Grafana will fetch a new access token using the refresh token provided by the OAuth2 provider.",type:"checkbox"},tlsClientCa:{label:"TLS client ca",description:"The file path to the trusted certificate authority list. Is not applicable on Grafana Cloud.",type:"text"},tlsClientCert:{label:"TLS client cert",description:"The file path to the certificate. Is not applicable on Grafana Cloud.",type:"text"},tlsClientKey:{label:"TLS client key",description:"The file path to the key. Is not applicable on Grafana Cloud.",type:"text"},tlsSkipVerifyInsecure:{label:"TLS skip verify",description:`If enabled, the client accepts any certificate presented by the server and any host 
name in that certificate. You should only use this for testing, because this mode leaves 
SSL/TLS susceptible to man-in-the-middle attacks.`,type:"switch"},groupsAttributePath:{label:"Groups attribute path",description:`JMESPath expression to use for user group lookup. If you configure allowed_groups, 
you must also configure groups_attribute_path.`,type:"text"},teamsUrl:{label:"Teams URL",description:e.createElement(e.Fragment,null,"The URL used to query for Team Ids. If not set, the default value is /teams."," ",n==="generic_oauth"&&"If you configure teams_url, you must also configure team_ids_attribute_path."),type:"text",validation:{validate:(t,r)=>{let o=!0;return r.teamIds.length&&(o=!!t),typeof t=="string"&&t.length&&(o=(0,I.K)(t)),o},message:"This field must be set if Team Ids are configured and must be a valid URL."}},teamIdsAttributePath:{label:"Team Ids attribute path",description:"The JMESPath expression to use for Grafana Team Id lookup within the results returned by the teams_url endpoint.",type:"text",validation:{validate:(t,r)=>r.teamIds.length?!!t:!0,message:"This field must be set if Team Ids are configured."}},teamIds:{label:"Team Ids",type:"select",description:e.createElement(e.Fragment,null,n==="github"?"Integer":"String"," list of Team Ids. If set, the user must be a member of one of the given teams to log in."," ",n==="generic_oauth"&&"If you configure team_ids, you must also configure teams_url and team_ids_attribute_path."),multi:!0,allowCustomValue:!0,options:[],placeholder:"Enter Team Ids and press Enter to add",validation:n==="github"?{validate:t=>typeof t=="string"?V(t):A(t)?t.every(r=>r?.value&&V(r.value)):!0,message:"Team Ids must be numbers."}:void 0}}}function V(n){return/^-?\d+$/.test(n)}const m=({field:n,register:t,errors:r,watch:o,setValue:h,control:b,unregister:p,secretConfigured:N,provider:J})=>{const[j,Z]=(0,e.useState)(N),L=typeof n!="string",s=L?n.name:n,O=L?o(n.dependsOn):null,i=k(J)[s],z=(0,ue.$j)();if((0,e.useEffect)(()=>{L&&(O||p(s))},[p,s,O,L]),!n)return console.log("missing field:",s),null;if(i.hidden||L&&!o(n.dependsOn))return null;const T={label:i.label,required:!!i.validation?.required,invalid:!!r[s],error:i.validation?.message,key:s,description:i.description,defaultValue:i.defaultValue?.value};switch(i.type){case"text":return e.createElement(E.D,{...T},e.createElement(ce.p,{...t(s,i.validation),type:i.type,id:s,autoComplete:"off"}));case"secret":return e.createElement(E.D,{...T,htmlFor:s},e.createElement(d.xI,{name:s,control:b,rules:i.validation,render:({field:{ref:oe,value:B,...K}})=>e.createElement(de.L4,{...K,autoComplete:"off",id:s,value:typeof B=="string"?B:"",isConfigured:j,onReset:()=>{Z(!1),h(s,"")}})}));case"select":const X=o(s);let _=i.options;return i.options?.length||(_=A(X)?X:[]),e.createElement(E.D,{...T,htmlFor:s},e.createElement(d.xI,{rules:i.validation,name:s,control:b,render:({field:{ref:oe,onChange:B,...K},fieldState:{invalid:fe}})=>e.createElement(me.l6,{...K,placeholder:i.placeholder,isMulti:i.multi,invalid:fe,inputId:s,options:_,allowCustomValue:!!i.allowCustomValue,defaultValue:i.defaultValue,onChange:B,onCreateOption:se=>{const c={value:se,label:se};B([..._||[],c])}})}));case"switch":return e.createElement(E.D,{...T},e.createElement(l.d,{...t(s),id:s}));case"checkbox":return e.createElement(ae.S,{...t(s),id:s,...T,className:(0,W.css)({marginBottom:z.spacing(2)})});default:return console.error(`Unknown field type: ${i.type}`),null}},q={allowAssignGrafanaAdmin:!1,allowSignUp:!1,allowedDomains:[],allowedGroups:[],allowedOrganizations:[],apiUrl:"",authStyle:"",authUrl:"",autoLogin:!1,clientId:"",clientSecret:"",emailAttributeName:"",emailAttributePath:"",emptyScopes:!1,enabled:!1,extra:{},groupsAttributePath:"",hostedDomain:"",icon:"shield",name:"",roleAttributePath:"",roleAttributeStrict:!1,scopes:[],signoutRedirectUrl:"",skipOrgRoleSync:!1,teamIds:[],teamIdsAttributePath:"",teamsUrl:"",tlsClientCa:"",tlsClientCert:"",tlsClientKey:"",tlsSkipVerify:!1,tokenUrl:"",type:"",usePkce:!1,useRefreshToken:!1},ye=n=>n?.length?Array.isArray(n)?n.map(t=>({label:t,value:t})):n.split(/[\s,]/).map(t=>({label:t,value:t})):[];function ve(n){if(!n)return q;const t=he(k(n.provider)),r={...n.settings};for(const o of t)r[o]=ye(r[o]);return r}const be=n=>n.map(({value:t})=>t).join(","),Ee=(n,t)=>{if(!t)return n;let r={};for(const o of t)r[o]=n[o];return r};function Ae(n,t){const r=he(k(t));let o=n;Y[t]&&(o=Ee(n,[...Y[t],"enabled"]));const h={...o};for(const b of r){const p=o[b];p&&(A(p)?h[b]=be(p):A([p])&&(h[b]=p.value))}return h}function he(n){return Object.entries(n).filter(([t,r])=>r.type==="select").map(([t])=>t)}const re=(0,D.J7)(),Se=({config:n,provider:t,isLoading:r})=>{const{register:o,handleSubmit:h,control:b,reset:p,watch:N,setValue:J,unregister:j,formState:{errors:Z,dirtyFields:L,isSubmitted:s}}=(0,d.mN)({defaultValues:ve(n),mode:"onSubmit",reValidateMode:"onChange"}),[O,i]=(0,e.useState)(!1),z=Y[t],[T,X]=(0,e.useState)(!1),_=s&&!T,oe=H[t],[B,K]=(0,e.useState)(!1),fe=async c=>{i(!0),X(!1);const F=Ae(c,t);try{await(0,w.AI)().put(`/api/v1/sso-settings/${t}`,{id:n?.id,provider:n?.provider,settings:{...F}},{showErrorAlert:!1}),(0,R.rR)("grafana_authentication_ssosettings_saved",{provider:t,enabled:F.enabled}),re.publish({type:P.r1.alertSuccess.name,payload:["Settings saved"]}),p(c),setTimeout(()=>{$.Ny.push("/admin/authentication")},300)}catch(S){let ge="";(0,w.NF)(S)?ge=S.data.message:S instanceof Error&&(ge=S.message),re.publish({type:P.r1.alertError.name,payload:[ge]}),X(!0),i(!1)}},se=async()=>{try{await(0,w.AI)().delete(`/api/v1/sso-settings/${t}`,void 0,{showSuccessAlert:!1}),(0,R.rR)("grafana_authentication_ssosettings_removed",{provider:t}),re.publish({type:P.r1.alertSuccess.name,payload:["Settings reset to defaults"]}),setTimeout(()=>{$.Ny.push("/admin/authentication")})}catch(c){let F="";(0,w.NF)(c)?F=c.data.message:c instanceof Error&&(F=c.message),re.publish({type:P.r1.alertError.name,payload:[F]})}};return e.createElement(x.Y.Contents,{isLoading:r},e.createElement("form",{onSubmit:h(fe),style:{maxWidth:"600px"}},e.createElement(e.Fragment,null,e.createElement(ie,{confirmRedirect:!!Object.keys(L).length&&!_,onDiscard:()=>{(0,R.rR)("grafana_authentication_ssosettings_abandoned",{provider:t}),p()}}),e.createElement(E.D,{label:"Enabled"},e.createElement(l.d,{...o("enabled"),id:"enabled",label:"Enabled"})),oe?e.createElement(f.B,{gap:2,direction:"column"},oe.filter(c=>!c.hidden).map((c,F)=>e.createElement(g.M,{label:c.name,isOpen:F===0,key:c.name},c.fields.filter(S=>typeof S!="string"?!S.hidden:!0).map(S=>e.createElement(m,{key:typeof S=="string"?S:S.name,field:S,control:b,errors:Z,setValue:J,register:o,watch:N,unregister:j,provider:t,secretConfigured:!!n?.settings.clientSecret}))))):e.createElement(e.Fragment,null,z.map(c=>e.createElement(m,{key:c,field:c,control:b,errors:Z,setValue:J,register:o,watch:N,unregister:j,provider:t,secretConfigured:!!n?.settings.clientSecret}))),e.createElement(G.a,{display:"flex",gap:2,marginTop:6},e.createElement(E.D,null,e.createElement(U.$n,{type:"submit",disabled:O},O?"Saving...":"Save")),e.createElement(E.D,null,e.createElement(U.z9,{href:"/admin/authentication",variant:"secondary"},"Discard")),e.createElement(E.D,null,e.createElement(U.$n,{variant:"secondary",hidden:n?.source==="system",onClick:c=>{K(!0)}},"Reset"))))),B&&e.createElement(y.u,{isOpen:!0,icon:"trash-alt",title:"Reset",body:e.createElement(f.B,{direction:"column",gap:3},e.createElement("span",null,"Are you sure you want to reset this configuration?"),e.createElement("small",null,"After resetting these settings Grafana will use the provider configuration from the system (config file/environment variables) if any.")),confirmText:"Reset",onDismiss:()=>K(!1),onConfirm:async()=>{await se(),K(!1)}}))};var Ce=a(7250),Pe=a(60610);const Ie=n=>{if(!n)return{text:"Authentication",subTitle:"Configure authentication providers",icon:"shield",id:"authentication"};const t=Ce.L[n.provider][1]||n.provider.toUpperCase();return{text:t||"",subTitle:`To configure ${t} OAuth2 you must register your application with ${t}. The provider will generate a Client ID and Client Secret for you to use.`,icon:n.settings.icon||"shield",id:n.provider}};function Te(n,t){const{isLoading:r,providers:o}=n.authConfig,{provider:h}=t.match.params;return{config:o.find(p=>p.provider===h),isLoading:r,provider:h}}const xe={loadProviders:Pe.TD},De=(0,C.connect)(Te,xe),pe=({config:n,loadProviders:t,isLoading:r,provider:o})=>{const h=Ie(n);return(0,e.useEffect)(()=>{t(o)},[t,o]),n?e.createElement(x.Y,{navId:"authentication",pageNav:h},e.createElement(Se,{config:n,isLoading:r,provider:o})):null},Oe=De(pe)},7250:(Q,v,a)=>{a.d(v,{L:()=>C,o:()=>e});const e="admin/authentication/",C={github:["github","GitHub"],gitlab:["gitlab","GitLab"],google:["google","Google"],generic_oauth:["lock","Generic OAuth"],grafana_com:["grafana","Grafana.com"],azuread:["microsoft","Azure AD"],okta:["okta","Okta"]}},60610:(Q,v,a)=>{a.d(v,{M5:()=>w,TD:()=>R});var e=a(17172),C=a(32264),x=a(10096),d=a(80348),P=a(73399),D=a(20604);function w(){return async l=>{if(x.TP.hasPermission(d.AccessControlAction.SettingsRead)){l((0,D.sr)()),l(R());const f=await(0,e.AI)().get("/api/admin/settings");return l((0,D.jA)(f)),await l($()),l((0,D.MH)()),f}}}function R(l=""){return async f=>{if(!C.$.featureToggles.ssoSettingsApi)return[];const g=await(0,e.AI)().get(`/api/v1/sso-settings${l?`/${l}`:""}`);return f((0,D.Oy)(l?[g]:g)),g}}function $(){return async l=>{const f=(0,P.getRegisteredAuthProviders)(),g={},G=[];for(const y of f)G.push((0,P.getAuthProviderStatus)(y.id));const U=await Promise.all(G);for(let y=0;y<f.length;y++){const W=f[y];g[W.id]=U[y]}l((0,D.TO)(g))}}function E(l){return async f=>{if(contextSrv.hasPermission(AccessControlAction.SettingsWrite))try{return await lastValueFrom(getBackendSrv().fetch({url:"/api/admin/settings",method:"PUT",data:l,showSuccessAlert:!1,showErrorAlert:!1})),f(resetError()),!0}catch(g){if(console.log(g),isFetchError(g)){g.isHandled=!0;const G={message:g.data?.message,errors:g.data?.errors};return f(setError(G)),!1}}return!1}}},5328:(Q,v,a)=>{a.d(v,{K:()=>x,h:()=>C});var e=a(7250);function C(d){return e.o+(d.configPath||d.id)}const x=d=>{if(typeof d!="string")return!1;try{return new URL(d).protocol.includes("http")}catch{return!1}}},8227:(Q,v,a)=>{a.d(v,{A:()=>x});const e=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function C(d){return typeof d=="string"&&e.test(d)}const x=C}}]);

//# sourceMappingURL=AdminAuthentication.b7044adf53b669e61a87.js.map