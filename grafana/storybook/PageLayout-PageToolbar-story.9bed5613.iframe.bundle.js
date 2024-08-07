"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2233],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function($,k,l){l.d(k,{XI:function(){return c.XI}});var c=l("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),a=(...L)=>{let y=config,i=L;i.length===1&&Array.isArray(i[0])&&([i]=i),i.length!==1&&typeof i[i.length-1]!="string"&&(y={...config,...i.pop()});let h=i[0];(i.length!==1||typeof h=="string")&&(h={},i.forEach(_=>{h[_]=_}));let s={};return Object.keys(h).forEach(_=>{s[_]=action(h[_],y)}),s}},"./src/components/PageLayout/PageToolbar.story.tsx":function($,k,l){l.r(k),l.d(k,{Examples:function(){return T},default:function(){return O}});var c=l("../../node_modules/@storybook/addon-actions/dist/index.mjs"),a=l("../../node_modules/react/index.js"),L=l("./src/components/Layout/Layout.tsx"),y=l("./src/components/ToolbarButton/ToolbarButton.tsx"),i=l("./src/utils/storybook/StoryExample.tsx"),h=l("./src/components/IconButton/IconButton.tsx"),s=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_=l("../grafana-e2e-selectors/src/selectors/index.ts"),j=l("./src/themes/ThemeContext.tsx"),N=l("./src/themes/mixins.ts"),z=l("./src/components/Icon/Icon.tsx"),M=l("./src/components/Link/Link.tsx"),P=l("./src/components/ToolbarButton/ToolbarButtonRow.tsx");const E=a.memo(({title:n,section:d,parent:g,pageIcon:S,onGoBack:D,children:K,titleHref:W,parentHref:w,leftItems:x,isFullscreen:C,className:G,"aria-label":R,buttonOverflowAlignment:U="right",forceShowLeftItems:F=!1})=>{const b=(0,j.of)(H),X=(0,s.cx)("page-toolbar",b.toolbar,{["page-toolbar--fullscreen"]:C,[b.noPageIcon]:!S},G),Y=a.createElement(a.Fragment,null,a.createElement("span",{className:b.truncateText},n),d&&a.createElement("span",{className:b.pre}," / ",d));return a.createElement("nav",{className:X,"aria-label":R},a.createElement("div",{className:b.leftWrapper},S&&!D&&a.createElement("div",{className:b.pageIcon},a.createElement(z.I,{name:S,size:"lg","aria-hidden":!0})),D&&a.createElement("div",{className:b.pageIcon},a.createElement(h.K,{name:"arrow-left",tooltip:"Go back (Esc)",tooltipPlacement:"bottom",size:"xxl","data-testid":_.Tp.components.BackButton.backArrow,onClick:D})),a.createElement("nav",{"aria-label":"Search links",className:b.navElement},g&&w&&a.createElement(a.Fragment,null,a.createElement(M.N,{"aria-label":`Search dashboard in the ${g} folder`,className:(0,s.cx)(b.titleText,b.parentLink,b.titleLink,b.truncateText),href:w},g," ",a.createElement("span",{className:b.parentIcon})),W&&a.createElement("span",{className:(0,s.cx)(b.titleText,b.titleDivider),"aria-hidden":!0},"/")),(n||!!x?.length)&&a.createElement("div",{className:b.titleWrapper},n&&a.createElement("h1",{className:b.h1Styles},W?a.createElement(M.N,{"aria-label":"Search dashboard by name",className:(0,s.cx)(b.titleText,b.titleLink),href:W},Y):a.createElement("div",{className:b.titleText},Y)),x?.map((Q,q)=>a.createElement("div",{className:(0,s.cx)(b.leftActionItem,{[b.forceShowLeftActionItems]:F}),key:q},Q))))),a.createElement(P.U,{alignment:U},a.Children.toArray(K).filter(Boolean)))});E.displayName="PageToolbar";const H=n=>{const{spacing:d,typography:g}=n,S=(0,N.Hi)(n);return{pre:(0,s.AH)({whiteSpace:"pre"}),toolbar:(0,s.AH)({alignItems:"center",background:n.colors.background.canvas,display:"flex",gap:n.spacing(2),justifyContent:"space-between",padding:n.spacing(1.5,2),[n.breakpoints.down("md")]:{paddingLeft:"53px"}}),noPageIcon:(0,s.AH)({[n.breakpoints.down("md")]:{paddingLeft:n.spacing(2)}}),leftWrapper:(0,s.AH)({display:"flex",flexWrap:"nowrap",maxWidth:"70%"}),pageIcon:(0,s.AH)({display:"none",[n.breakpoints.up("sm")]:{display:"flex",paddingRight:n.spacing(1),alignItems:"center"}}),truncateText:(0,s.AH)({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),titleWrapper:(0,s.AH)({display:"flex",margin:0,minWidth:0}),navElement:(0,s.AH)({display:"flex",alignItems:"center",minWidth:0}),h1Styles:(0,s.AH)({margin:d(0,1,0,0),lineHeight:"inherit",flexGrow:1,minWidth:0}),parentIcon:(0,s.AH)({marginLeft:n.spacing(.5)}),titleText:(0,s.AH)({display:"flex",fontSize:g.size.lg,margin:0,borderRadius:n.shape.radius.default}),titleLink:(0,s.AH)({"&:focus-visible":S}),titleDivider:(0,s.AH)({padding:d(0,.5,0,.5),display:"none",[n.breakpoints.up("md")]:{display:"unset"}}),parentLink:(0,s.AH)({display:"none",[n.breakpoints.up("md")]:{display:"unset",flex:1}}),leftActionItem:(0,s.AH)({display:"none",alignItems:"center",paddingRight:d(.5),[n.breakpoints.up("md")]:{display:"flex"}}),forceShowLeftActionItems:(0,s.AH)({display:"flex"})}};try{E.displayName="PageToolbar",E.__docgenInfo={description:"",displayName:"PageToolbar",props:{pageIcon:{defaultValue:null,description:"",name:"pageIcon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},section:{defaultValue:null,description:"",name:"section",required:!1,type:{name:"string"}},parent:{defaultValue:null,description:"",name:"parent",required:!1,type:{name:"string"}},onGoBack:{defaultValue:null,description:"",name:"onGoBack",required:!1,type:{name:"(() => void)"}},titleHref:{defaultValue:null,description:"",name:"titleHref",required:!1,type:{name:"string"}},parentHref:{defaultValue:null,description:"",name:"parentHref",required:!1,type:{name:"string"}},leftItems:{defaultValue:null,description:"",name:"leftItems",required:!1,type:{name:"ReactNode[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFullscreen:{defaultValue:null,description:"",name:"isFullscreen",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},buttonOverflowAlignment:{defaultValue:null,description:"",name:"buttonOverflowAlignment",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},forceShowLeftItems:{defaultValue:null,description:`Forces left items to be visible on small screens.
By default left items are hidden on small screens.`,name:"forceShowLeftItems",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PageLayout/PageToolbar.tsx#PageToolbar"]={docgenInfo:E.__docgenInfo,name:"PageToolbar",path:"src/components/PageLayout/PageToolbar.tsx#PageToolbar"})}catch{}var A=Object.defineProperty,V=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,o=(n,d,g)=>d in n?A(n,d,{enumerable:!0,configurable:!0,writable:!0,value:g}):n[d]=g,p=(n,d)=>{for(var g in d||(d={}))v.call(d,g)&&o(n,g,d[g]);if(f)for(var g of f(d))I.call(d,g)&&o(n,g,d[g]);return n},e=(n,d)=>V(n,u(d)),t,r,m;const B={title:"Layout/PageToolbar",component:E,parameters:{}},T=()=>a.createElement(L.gW,null,a.createElement(i.Q,{name:"With non clickable title"},a.createElement(E,{pageIcon:"bell",title:"Dashboard"},a.createElement(y.I,{icon:"panel-add"}),a.createElement(y.I,{icon:"sync"},"Sync"))),a.createElement(i.Q,{name:"With clickable title and parent"},a.createElement(E,{pageIcon:"apps",title:"A very long dashboard name",parent:"A long folder name",titleHref:"",parentHref:"",leftItems:[a.createElement(h.K,{name:"share-alt",size:"lg",key:"share",tooltip:"Share"}),a.createElement(h.K,{name:"favorite",iconType:"mono",size:"lg",key:"favorite",tooltip:"Add to favourites"})]},a.createElement(y.I,{icon:"panel-add"}),a.createElement(y.I,{icon:"share-alt"}),a.createElement(y.I,{icon:"sync"},"Sync"),a.createElement(y.I,{icon:"cog"},"Settings "))),a.createElement(i.Q,{name:"Go back version"},a.createElement(E,{title:"Service overview / Edit panel",onGoBack:()=>(0,c.XI)("Go back")},a.createElement(y.I,{icon:"cog"}),a.createElement(y.I,{icon:"save"}),a.createElement(y.I,null,"Discard"),a.createElement(y.I,null,"Apply"))));var O=B;T.parameters=e(p({},T.parameters),{docs:e(p({},(t=T.parameters)==null?void 0:t.docs),{source:p({originalSource:`() => {
  return <VerticalGroup>
      <StoryExample name="With non clickable title">
        <PageToolbar pageIcon="bell" title="Dashboard">
          <ToolbarButton icon="panel-add" />
          <ToolbarButton icon="sync">Sync</ToolbarButton>
        </PageToolbar>
      </StoryExample>
      <StoryExample name="With clickable title and parent">
        <PageToolbar pageIcon="apps" title="A very long dashboard name" parent="A long folder name" titleHref="" parentHref="" leftItems={[<IconButton name="share-alt" size="lg" key="share" tooltip="Share" />, <IconButton name="favorite" iconType="mono" size="lg" key="favorite" tooltip="Add to favourites" />]}>
          <ToolbarButton icon="panel-add" />
          <ToolbarButton icon="share-alt" />
          <ToolbarButton icon="sync">Sync</ToolbarButton>
          <ToolbarButton icon="cog">Settings </ToolbarButton>
        </PageToolbar>
      </StoryExample>
      <StoryExample name="Go back version">
        <PageToolbar title="Service overview / Edit panel" onGoBack={() => action('Go back')}>
          <ToolbarButton icon="cog" />
          <ToolbarButton icon="save" />
          <ToolbarButton>Discard</ToolbarButton>
          <ToolbarButton>Apply</ToolbarButton>
        </PageToolbar>
      </StoryExample>
    </VerticalGroup>;
}`},(m=(r=T.parameters)==null?void 0:r.docs)==null?void 0:m.source)})})},"../grafana-data/src/utils/deprecationWarning.ts":function($,k,l){l.d(k,{l:function(){return a}});const c={},a=(L,y,i)=>{let h=`[Deprecation warning] ${L}: ${y} is deprecated`;i&&(h+=`. Use ${i} instead`);const s=Date.now(),_=c[h];(!_||s-_>1e4)&&(console.warn(h),c[h]=s)}},"./src/components/IconButton/IconButton.tsx":function($,k,l){l.d(k,{K:function(){return v}});var c=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=l("../../node_modules/react/index.js"),L=l("../grafana-data/src/utils/deprecationWarning.ts"),y=l("../grafana-data/src/themes/colorManipulator.ts"),i=l("./src/themes/ThemeContext.tsx"),h=l("./src/themes/mixins.ts"),s=l("./src/components/Icon/Icon.tsx"),_=l("./src/components/Icon/utils.ts"),j=l("./src/components/Tooltip/Tooltip.tsx"),N=Object.defineProperty,z=Object.defineProperties,M=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,A=(o,p,e)=>p in o?N(o,p,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[p]=e,V=(o,p)=>{for(var e in p||(p={}))E.call(p,e)&&A(o,e,p[e]);if(P)for(var e of P(p))H.call(p,e)&&A(o,e,p[e]);return o},u=(o,p)=>z(o,M(p)),f=(o,p)=>{var e={};for(var t in o)E.call(o,t)&&p.indexOf(t)<0&&(e[t]=o[t]);if(o!=null&&P)for(var t of P(o))p.indexOf(t)<0&&H.call(o,t)&&(e[t]=o[t]);return e};const v=a.forwardRef((o,p)=>{const{size:e="md",variant:t="secondary"}=o;let r;e==="xxl"||e==="xxxl"?((0,L.l)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),r="xl"):r=e;const m=(0,i.of)(I,r,t);let B,T;if("tooltip"in o){const{tooltip:O}=o;B=typeof O=="string"?O:void 0}else if("ariaLabel"in o||"aria-label"in o){const{ariaLabel:O,["aria-label"]:n}=o;B=n||O,T=p}if("tooltip"in o){const O=o,{name:n,iconType:d,className:g,tooltip:S,tooltipPlacement:D}=O,K=f(O,["name","iconType","className","tooltip","tooltipPlacement"]);return a.createElement(j.m,{ref:p,content:S,placement:D},a.createElement("button",u(V({},K),{ref:T,"aria-label":B,className:(0,c.cx)(m.button,g),type:"button"}),a.createElement(s.I,{name:n,size:r,className:m.icon,type:d})))}else{const O=o,{name:n,iconType:d,className:g}=O,S=f(O,["name","iconType","className"]);return a.createElement("button",u(V({},S),{ref:T,"aria-label":B,className:(0,c.cx)(m.button,g),type:"button"}),a.createElement(s.I,{name:n,size:r,className:m.icon,type:d}))}});v.displayName="IconButton";const I=(o,p,e)=>{const t=(0,_.cs)(p)+o.spacing.gridSize;let r=o.colors.text.primary;return e==="primary"?r=o.colors.primary.text:e==="destructive"&&(r=o.colors.error.text),{button:(0,c.AH)({zIndex:0,position:"relative",margin:`0 ${o.spacing.x0_5} 0 0`,boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:r,"&[disabled], &:disabled":{cursor:"not-allowed",color:o.colors.action.disabledText,opacity:.65},"&:before":{zIndex:-1,position:"absolute",opacity:0,width:`${t}px`,height:`${t}px`,borderRadius:o.shape.radius.default,content:'""',transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"},"&:focus, &:focus-visible":(0,h.Hi)(o),"&:focus:not(:focus-visible)":(0,h.cr)(o),"&:hover":{"&:before":{backgroundColor:e==="secondary"?o.colors.action.hover:y.X4(r,.12),opacity:1}}}),icon:(0,c.AH)({verticalAlign:"baseline"})}};try{v.displayName="IconButton",v.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:v.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch{}},"./src/components/ToolbarButton/ToolbarButton.tsx":function($,k,l){l.d(k,{I:function(){return v}});var c=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=l("../../node_modules/react/index.js"),L=l("../grafana-data/src/types/icon.ts"),y=l("../grafana-e2e-selectors/src/selectors/index.ts"),i=l("./src/themes/ThemeContext.tsx"),h=l("./src/themes/mixins.ts"),s=l("./src/components/Button/Button.tsx"),_=l("./src/components/Icon/Icon.tsx"),j=l("./src/components/Tooltip/Tooltip.tsx"),N=Object.defineProperty,z=Object.defineProperties,M=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&A(e,r,t[r]);if(P)for(var r of P(t))H.call(t,r)&&A(e,r,t[r]);return e},u=(e,t)=>z(e,M(t)),f=(e,t)=>{var r={};for(var m in e)E.call(e,m)&&t.indexOf(m)<0&&(r[m]=e[m]);if(e!=null&&P)for(var m of P(e))t.indexOf(m)<0&&H.call(e,m)&&(r[m]=e[m]);return r};const v=(0,a.forwardRef)((e,t)=>{var r=e,{tooltip:m,icon:B,iconSize:T,className:O,children:n,imgSrc:d,imgAlt:g,fullWidth:S,isOpen:D,narrow:K,variant:W="default",iconOnly:w,"aria-label":x,isHighlighted:C}=r,G=f(r,["tooltip","icon","iconSize","className","children","imgSrc","imgAlt","fullWidth","isOpen","narrow","variant","iconOnly","aria-label","isHighlighted"]);const R=(0,i.of)(p),U=(0,c.cx)({[R.button]:!0,[R.buttonFullWidth]:S,[R.narrow]:K},R[W],O),F=(0,c.cx)({[R.content]:!0,[R.contentWithIcon]:!!B,[R.contentWithRightIcon]:D!==void 0}),b=a.createElement("button",V({ref:t,className:U,"aria-label":I(x,m),"aria-expanded":D},G),o(B,T),d&&a.createElement("img",{className:R.img,src:d,alt:g??""}),n&&!w&&a.createElement("div",{className:F},n),D===!1&&a.createElement(_.I,{name:"angle-down"}),D===!0&&a.createElement(_.I,{name:"angle-up"}),C&&a.createElement("div",{className:R.highlight}));return m?a.createElement(j.m,{ref:t,content:m,placement:"bottom"},b):b});v.displayName="ToolbarButton";function I(e,t){return e||(t?y.Tp.components.PageToolbar.item(t):void 0)}function o(e,t){return e?(0,L.n6)(e)?a.createElement(_.I,{name:e,size:`${t||"lg"}`}):e:null}const p=e=>{const t=(0,s.U_)(e,"primary","solid"),r=(0,s.U_)(e,"destructive","solid"),m=(0,c.AH)({color:e.colors.text.primary,background:e.colors.secondary.main,"&:hover":{color:e.colors.text.primary,background:e.colors.secondary.shade,border:`1px solid ${e.colors.border.medium}`}});return{button:(0,c.AH)({label:"toolbar-button",position:"relative",display:"flex",alignItems:"center",height:e.spacing(e.components.height.md),padding:e.spacing(0,1),borderRadius:e.shape.radius.default,lineHeight:`${e.components.height.md*e.spacing.gridSize-2}px`,fontWeight:e.typography.fontWeightMedium,border:`1px solid ${e.colors.secondary.border}`,whiteSpace:"nowrap",transition:e.transitions.create(["background","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:focus, &:focus-visible":u(V({},(0,h.Hi)(e)),{zIndex:1}),"&:focus:not(:focus-visible)":(0,h.cr)(e),"&:hover":{boxShadow:e.shadows.z1},"&[disabled], &:disabled":{cursor:"not-allowed",opacity:e.colors.action.disabledOpacity,background:e.colors.action.disabledBackground,boxShadow:"none","&:hover":{color:e.colors.text.disabled,background:e.colors.action.disabledBackground,boxShadow:"none"}}}),default:(0,c.AH)({color:e.colors.text.secondary,background:"transparent",border:"1px solid transparent","&:hover":{color:e.colors.text.primary,background:e.colors.background.secondary}}),canvas:m,active:(0,c.cx)(m,(0,c.AH)({"&::before":{display:"block",content:'" "',position:"absolute",left:0,right:0,height:"2px",bottom:0,borderRadius:e.shape.radius.default,backgroundImage:e.colors.gradients.brandHorizontal}})),primary:(0,c.AH)(t),destructive:(0,c.AH)(r),narrow:(0,c.AH)({padding:e.spacing(0,.5)}),img:(0,c.AH)({width:"16px",height:"16px",marginRight:e.spacing(1)}),buttonFullWidth:(0,c.AH)({flexGrow:1}),content:(0,c.AH)({flexGrow:1}),contentWithIcon:(0,c.AH)({display:"none",paddingLeft:e.spacing(1),[`@media ${h.uT(e.v1.breakpoints.md)}`]:{display:"block"}}),contentWithRightIcon:(0,c.AH)({paddingRight:e.spacing(.5)}),highlight:(0,c.AH)({backgroundColor:e.colors.success.main,borderRadius:e.shape.radius.circle,width:"6px",height:"6px",position:"absolute",top:"-3px",right:"-3px",zIndex:1})}};try{v.displayName="ToolbarButton",v.__docgenInfo={description:"",displayName:"ToolbarButton",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!1,type:{name:"ReactNode"}},iconSize:{defaultValue:null,description:"Icon size",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},tooltip:{defaultValue:null,description:"Tooltip",name:"tooltip",required:!1,type:{name:"string"}},imgSrc:{defaultValue:null,description:"For image icons",name:"imgSrc",required:!1,type:{name:"string"}},imgAlt:{defaultValue:null,description:"Alt text for imgSrc",name:"imgAlt",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"if true or false will show angle-down/up",name:"isOpen",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Controls flex-grow: 1",name:"fullWidth",required:!1,type:{name:"boolean"}},narrow:{defaultValue:null,description:"reduces padding to xs",name:"narrow",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'},{value:'"canvas"'},{value:'"default"'},{value:'"active"'}]}},iconOnly:{defaultValue:null,description:"Hide any children and only show icon",name:"iconOnly",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:null,description:"Show highlight dot",name:"isHighlighted",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:v.__docgenInfo,name:"ToolbarButton",path:"src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"})}catch{}},"./src/components/ToolbarButton/ToolbarButtonRow.tsx":function($,k,l){l.d(k,{U:function(){return A}});var c=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=l("../../node_modules/@react-aria/dialog/dist/import.mjs"),L=l("../../node_modules/@react-aria/focus/dist/import.mjs"),y=l("../../node_modules/@react-aria/overlays/dist/import.mjs"),i=l("../../node_modules/react/index.js"),h=l("./src/themes/ThemeContext.tsx"),s=l("./src/components/Portal/Portal.tsx"),_=l("./src/components/ToolbarButton/ToolbarButton.tsx"),j=Object.defineProperty,N=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,P=(u,f,v)=>f in u?j(u,f,{enumerable:!0,configurable:!0,writable:!0,value:v}):u[f]=v,E=(u,f)=>{for(var v in f||(f={}))z.call(f,v)&&P(u,v,f[v]);if(N)for(var v of N(f))M.call(f,v)&&P(u,v,f[v]);return u},H=(u,f)=>{var v={};for(var I in u)z.call(u,I)&&f.indexOf(I)<0&&(v[I]=u[I]);if(u!=null&&N)for(var I of N(u))f.indexOf(I)<0&&M.call(u,I)&&(v[I]=u[I]);return v};const A=(0,i.forwardRef)((u,f)=>{var v=u,{alignment:I="left",className:o,children:p}=v,e=H(v,["alignment","className","children"]);const t=i.Children.toArray(p).filter(w=>w!=null),[r,m]=(0,i.useState)(Array(t.length).fill(!1)),B=(0,i.useRef)(null),[T,O]=(0,i.useState)(!1),n=(0,i.useRef)(null),d=(0,i.createRef)(),{overlayProps:g}=(0,y.e)({onClose:()=>O(!1),isDismissable:!0,isOpen:T,shouldCloseOnInteractOutside:w=>{var x;const C=(0,s.gF)();return!((x=n.current)!=null&&x.contains(w))&&!C.contains(w)}},d),{dialogProps:S}=(0,a.s)({},d),D=(0,h.$j)(),K=I==="left"?r.indexOf(!1)-1:r.length,W=V(D,K,I);return(0,i.useLayoutEffect)(()=>{const w=new IntersectionObserver(x=>{x.forEach(C=>{if(C.target instanceof HTMLElement&&C.target.parentNode){const G=Array.prototype.indexOf.call(C.target.parentNode.children,C.target);m(R=>{const U=[...R];return U[G]=C.isIntersecting,U})}})},{threshold:1,root:B.current});return B.current&&Array.from(B.current.children).forEach(x=>{x instanceof HTMLElement&&x!==n.current&&w.observe(x)}),()=>w.disconnect()},[p]),i.createElement("div",E({ref:B,className:(0,c.cx)(W.container,o)},e),t.map((w,x)=>i.createElement("div",{key:x,style:{order:x,visibility:r[x]?"visible":"hidden"},className:W.childWrapper},w)),r.includes(!1)&&i.createElement("div",{ref:n,className:W.overflowButton},i.createElement(_.I,{variant:T?"active":"default",tooltip:"Show more items",onClick:()=>O(!T),icon:"ellipsis-v",iconOnly:!0,narrow:!0}),T&&i.createElement(L.n1,{contain:!0,autoFocus:!0},i.createElement("div",E(E({className:W.overflowItems,ref:d},g),S),t.map((w,x)=>!r[x]&&w)))))});A.displayName="ToolbarButtonRow";const V=(u,f,v)=>({overflowButton:(0,c.AH)({order:f}),overflowItems:(0,c.AH)({alignItems:"center",backgroundColor:u.colors.background.primary,borderRadius:u.shape.radius.default,boxShadow:u.shadows.z2,display:"flex",flexWrap:"wrap",gap:u.spacing(1),marginTop:u.spacing(1),maxWidth:"80vw",padding:u.spacing(.5,1),position:"absolute",right:0,top:"100%",width:"max-content",zIndex:u.zIndex.dropdown}),container:(0,c.AH)({alignItems:"center",display:"flex",gap:u.spacing(1),justifyContent:v==="left"?"flex-start":"flex-end",minWidth:0,position:"relative"}),childWrapper:(0,c.AH)({alignItems:"center",display:"flex",gap:u.spacing(1)})});try{A.displayName="ToolbarButtonRow",A.__docgenInfo={description:"",displayName:"ToolbarButtonRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alignment:{defaultValue:{value:"left"},description:"Determine flex-alignment of child buttons. Needed for overflow behaviour.",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButtonRow.tsx#ToolbarButtonRow"]={docgenInfo:A.__docgenInfo,name:"ToolbarButtonRow",path:"src/components/ToolbarButton/ToolbarButtonRow.tsx#ToolbarButtonRow"})}catch{}}}]);
