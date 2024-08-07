"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2037],{"./src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.story.tsx":function(w,y,e){e.r(y),e.d(y,{Basic:function(){return U},default:function(){return J}});var t=e("../../node_modules/@storybook/addon-actions/dist/index.mjs"),a=e("@storybook/client-api"),g=e("../../node_modules/react/index.js"),d=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),f=e("../grafana-data/src/datetime/moment_wrapper.ts"),h=e("./src/themes/ThemeContext.tsx"),_=e("./src/components/Input/Input.tsx"),I=e("./src/components/DateTimePickers/DatePicker/DatePicker.tsx"),u=Object.defineProperty,b=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,S=(i,s,p)=>s in i?u(i,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):i[s]=p,P=(i,s)=>{for(var p in s||(s={}))x.call(s,p)&&S(i,p,s[p]);if(b)for(var p of b(s))D.call(s,p)&&S(i,p,s[p]);return i},O=(i,s)=>{var p={};for(var k in i)x.call(i,k)&&s.indexOf(k)<0&&(p[k]=i[k]);if(i!=null&&b)for(var k of b(i))s.indexOf(k)<0&&D.call(i,k)&&(p[k]=i[k]);return p};const m=i=>(0,f.KQ)(i).format("L"),n=i=>{var s=i,{value:p,minDate:k,maxDate:Q,onChange:X,closeOnSelect:Z,placeholder:ee="Date"}=s,te=O(s,["value","minDate","maxDate","onChange","closeOnSelect","placeholder"]);const[ae,Y]=g.useState(!1),G=(0,h.of)(l);return g.createElement("div",{className:G.container},g.createElement(_.p,P({type:"text",autoComplete:"off",placeholder:ee,value:p&&m(p),onClick:()=>Y(!0),onChange:F=>{F.target.value===""&&X("")},className:G.input},te)),g.createElement(I.l,{isOpen:ae,value:p&&typeof p!="string"?p:(0,f.KQ)().toDate(),minDate:k,maxDate:Q,onChange:F=>{X(F),Z&&Y(!1)},onClose:()=>Y(!1)}))},l=()=>({container:(0,d.AH)({position:"relative"}),input:(0,d.AH)({"input[type='date']::-webkit-inner-spin-button, input[type='date']::-webkit-calendar-picker-indicator":{display:"none",WebkitAppearance:"none"}})});try{m.displayName="formatDate",m.__docgenInfo={description:"",displayName:"formatDate",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#formatDate"]={docgenInfo:m.__docgenInfo,name:"formatDate",path:"src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#formatDate"})}catch{}try{n.displayName="DatePickerWithInput",n.__docgenInfo={description:"",displayName:"DatePickerWithInput",props:{value:{defaultValue:null,description:"Value selected by the DatePicker",name:"value",required:!1,type:{name:"string | Date"}},minDate:{defaultValue:null,description:"The minimum date the value can be set to",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"The maximum date the value can be set to",name:"maxDate",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Handles changes when a new date is selected",name:"onChange",required:!0,type:{name:"(value: string | Date) => void"}},closeOnSelect:{defaultValue:null,description:"Hide the calendar when date is selected",name:"closeOnSelect",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Date"},description:"Text that appears when the input has no text",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#DatePickerWithInput"]={docgenInfo:n.__docgenInfo,name:"DatePickerWithInput",path:"src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#DatePickerWithInput"})}catch{}var o=e("../../node_modules/react/jsx-runtime.js"),r=e("../../node_modules/@mdx-js/react/lib/index.js"),c=e("../../node_modules/@storybook/blocks/dist/index.mjs");function v(i){const s=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,r.RP)(),i.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"datepickerwithinput",children:"DatePickerWithInput"}),`
`,(0,o.jsx)(s.p,{children:"An input with a calendar view, used to select a date."}),`
`,(0,o.jsx)(s.h3,{id:"usage",children:"Usage"}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { DatePickerWithInput } from '@grafana/ui';

const [date, setDate] = useState<Date | string>(new Date());
return <DatePickerWithInput width={40} value={date} onChange={(newDate) => setDate(newDate)} />;
`})}),`
`,(0,o.jsx)(s.h3,{id:"props",children:"Props"}),`
`,(0,o.jsx)(c.ov,{of:n})]})}function E(i={}){const{wrapper:s}=Object.assign({},(0,r.RP)(),i.components);return s?(0,o.jsx)(s,Object.assign({},i,{children:(0,o.jsx)(v,i)})):v(i)}var R=E,L=Object.defineProperty,T=Object.defineProperties,A=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,j=(i,s,p)=>s in i?L(i,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):i[s]=p,M=(i,s)=>{for(var p in s||(s={}))W.call(s,p)&&j(i,p,s[p]);if(N)for(var p of N(s))K.call(s,p)&&j(i,p,s[p]);return i},B=(i,s)=>T(i,A(s)),V,z,H;const C=new Date,$=new Date;$.setMonth($.getMonth()-1);const q={title:"Pickers and Editors/TimePickers/DatePickerWithInput",component:n,parameters:{docs:{page:R},controls:{exclude:["value","onChange","prefix","suffix","width","invalid","loading","addonBefore","addonAfter"]}},args:{value:C,minDate:$,closeOnSelect:!0,placeholder:"Date"},argTypes:{minDate:{control:"date"}}},U=i=>{const[,s]=(0,a.useArgs)(),p=typeof i.minDate=="number"?new Date(i.minDate):i.minDate;return g.createElement(n,B(M({},i),{width:40,minDate:p,onChange:k=>{(0,t.XI)("on selected")(k),s({value:k})}}))};var J=q;U.parameters=B(M({},U.parameters),{docs:B(M({},(V=U.parameters)==null?void 0:V.docs),{source:M({originalSource:`args => {
  const [, updateArgs] = useArgs();

  // the minDate arg can change from Date object to number, we need to handle this
  // scenario to avoid a crash in the component's story.
  const minDateVal = typeof args.minDate === 'number' ? new Date(args.minDate) : args.minDate;
  return <DatePickerWithInput {...args} width={40} minDate={minDateVal} onChange={newValue => {
    action('on selected')(newValue);
    updateArgs({
      value: newValue
    });
  }} />;
}`},(H=(z=U.parameters)==null?void 0:z.docs)==null?void 0:H.source)})})},"../grafana-data/src/types/dataFrame.ts":function(w,y,e){e.d(y,{Bc:function(){return a},LE:function(){return g},PU:function(){return t}});var t=(f=>(f.time="time",f.number="number",f.string="string",f.boolean="boolean",f.trace="trace",f.geo="geo",f.enum="enum",f.other="other",f.frame="frame",f.nestedFrames="nestedFrames",f))(t||{});const a="Value",g="Time",d="Metric"},"../grafana-data/src/types/icon.ts":function(w,y,e){e.d(y,{Uo:function(){return g},az:function(){return t},n6:function(){return a}});const t={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function a(d){return!d||typeof d!="string"?!1:d in t}function g(d){if(a(d))return d}},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx":function(w,y,e){e.d(y,{N:function(){return a}});var t=e("../../node_modules/react/index.js");class a extends t.PureComponent{constructor(){super(...arguments),this.myRef=(0,t.createRef)(),this.state={hasEventListener:!1},this.onOutsideClick=d=>{const f=this.myRef.current;(!f||d.target instanceof Node&&!f.contains(d.target))&&this.props.onClick()}}componentDidMount(){this.props.parent.addEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.addEventListener("keyup",this.onOutsideClick,this.props.useCapture)}componentWillUnmount(){this.props.parent.removeEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.removeEventListener("keyup",this.onOutsideClick,this.props.useCapture)}render(){return t.createElement("div",{ref:this.myRef},this.props.children)}}a.defaultProps={includeButtonPress:!0,parent:typeof window<"u"?window:void 0,useCapture:!1};try{a.displayName="ClickOutsideWrapper",a.__docgenInfo={description:"",displayName:"ClickOutsideWrapper",props:{onClick:{defaultValue:null,description:"Callback to trigger when clicking outside of current element occurs.",name:"onClick",required:!0,type:{name:"() => void"}},includeButtonPress:{defaultValue:{value:"true"},description:"Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.",name:"includeButtonPress",required:!1,type:{name:"boolean"}},parent:{defaultValue:{value:"typeof window !== 'undefined' ? window : undefined"},description:"Object to attach the click event listener to.",name:"parent",required:!1,type:{name:"Document | Window"}},useCapture:{defaultValue:{value:"false"},description:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.",name:"useCapture",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"]={docgenInfo:a.__docgenInfo,name:"ClickOutsideWrapper",path:"src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"})}catch{}},"./src/components/DateTimePickers/DatePicker/DatePicker.tsx":function(w,y,e){e.d(y,{l:function(){return P}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),g=e("../../node_modules/react-calendar/dist/esm/index.js"),d=e("./src/themes/ThemeContext.tsx"),f=e("./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx"),h=e("./src/components/Icon/Icon.tsx"),_=e("./src/components/DateTimePickers/TimeRangePicker/CalendarBody.tsx"),I=Object.defineProperty,u=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,D=(n,l,o)=>l in n?I(n,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[l]=o,S=(n,l)=>{for(var o in l||(l={}))b.call(l,o)&&D(n,o,l[o]);if(u)for(var o of u(l))x.call(l,o)&&D(n,o,l[o]);return n};const P=(0,a.memo)(n=>{const l=(0,d.of)(m),{isOpen:o,onClose:r}=n;return o?a.createElement(f.N,{useCapture:!0,includeButtonPress:!1,onClick:r},a.createElement("div",{className:l.modal,"data-testid":"date-picker"},a.createElement(O,S({},n)))):null});P.displayName="DatePicker";const O=(0,a.memo)(({value:n,minDate:l,maxDate:o,onChange:r})=>{const c=(0,d.of)(_.h2);return a.createElement(g.Ay,{className:c.body,tileClassName:c.title,value:n||new Date,minDate:l,maxDate:o,nextLabel:a.createElement(h.I,{name:"angle-right"}),prevLabel:a.createElement(h.I,{name:"angle-left"}),onChange:v=>{v&&!Array.isArray(v)&&r(v)},locale:"en"})});O.displayName="Body";const m=n=>({modal:(0,t.AH)({zIndex:n.zIndex.modal,position:"absolute",boxShadow:n.shadows.z3,backgroundColor:n.colors.background.primary,border:`1px solid ${n.colors.border.weak}`,borderTopLeftRadius:n.shape.radius.default,borderBottomLeftRadius:n.shape.radius.default,"button:disabled":{color:n.colors.text.disabled}})});try{P.displayName="DatePicker",P.__docgenInfo={description:"",displayName:"DatePicker",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePicker/DatePicker.tsx#DatePicker"]={docgenInfo:P.__docgenInfo,name:"DatePicker",path:"src/components/DateTimePickers/DatePicker/DatePicker.tsx#DatePicker"})}catch{}},"./src/components/Forms/commonStyles.ts":function(w,y,e){e.d(y,{SM:function(){return I},Xb:function(){return d},g$:function(){return f},gm:function(){return g},lH:function(){return h}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("./src/themes/mixins.ts");const g=u=>(0,t.AH)({"&:focus":(0,a.Hi)(u)}),d=(u,b=!1)=>{const x=b?u.colors.error.border:u.components.input.borderColor,D=b?u.colors.error.shade:u.components.input.borderHover,S=u.components.input.background,P=u.components.input.text,O=u.isDark?"#2e2f35":"#bab4ca";return(0,t.cx)(f(u),(0,t.AH)({background:S,lineHeight:u.typography.body.lineHeight,fontSize:u.typography.size.md,color:P,border:`1px solid ${x}`,"&:-webkit-autofill, &:-webkit-autofill:hover":{boxShadow:`inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${S}!important`,WebkitTextFillColor:`${P} !important`,borderColor:O},"&:-webkit-autofill:focus":{boxShadow:`0 0 0 2px ${u.colors.background.primary}, 0 0 0px 4px ${u.colors.primary.main}, inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${S}!important`,WebkitTextFillColor:`${P} !important`},"&:hover":{borderColor:D},"&:focus":{outline:"none"},"&:disabled":{backgroundColor:u.colors.action.disabledBackground,color:u.colors.action.disabledText,border:`1px solid ${u.colors.action.disabledBackground}`,"&:hover":{borderColor:x}},"&::placeholder":{color:u.colors.text.disabled,opacity:1}}))},f=u=>(0,t.AH)({padding:u.spacing(0,1,0,1)}),h=()=>({sm:(0,t.AH)({width:_("sm")}),md:(0,t.AH)({width:_("md")}),lg:(0,t.AH)({width:_("lg")}),auto:(0,t.AH)({width:_("auto")})}),_=u=>{switch(u){case"sm":return"200px";case"md":return"320px";case"lg":return"580px";case"auto":default:return"auto"}};function I(u,b){switch(u){case"sm":return{padding:1,fontSize:b.typography.size.sm,height:b.components.height.sm};case"lg":return{padding:3,fontSize:b.typography.size.lg,height:b.components.height.lg};case"md":default:return{padding:2,fontSize:b.typography.size.md,height:b.components.height.md}}}},"./src/components/Icon/Icon.tsx":function(w,y,e){e.d(y,{I:function(){return O}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),g=e("../../node_modules/react-inlinesvg/esm/index.js"),d=e("../grafana-data/src/types/icon.ts"),f=e("./src/themes/ThemeContext.tsx"),h=e("./src/components/Icon/utils.ts"),_=Object.defineProperty,I=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,x=(m,n,l)=>n in m?_(m,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):m[n]=l,D=(m,n)=>{for(var l in n||(n={}))u.call(n,l)&&x(m,l,n[l]);if(I)for(var l of I(n))b.call(n,l)&&x(m,l,n[l]);return m},S=(m,n)=>{var l={};for(var o in m)u.call(m,o)&&n.indexOf(o)<0&&(l[o]=m[o]);if(m!=null&&I)for(var o of I(m))n.indexOf(o)<0&&b.call(m,o)&&(l[o]=m[o]);return l};const P=m=>({icon:(0,t.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,t.AH)({fill:m.v1.palette.orange})}),O=a.forwardRef((m,n)=>{var l=m,{size:o="md",type:r="default",name:c,className:v,style:E,title:R=""}=l,L=S(l,["size","type","name","className","style","title"]);const T=(0,f.of)(P);(0,d.n6)(c)||console.warn("Icon component passed an invalid icon name",c);const A=c==="fa fa-spinner"?"spinner":c,N=(0,h.Wj)(),W=(0,h.cs)(o),K=W,j=c.startsWith("gf-bar-align")?16:c.startsWith("gf-interp")?30:W,M=(0,h.Xi)(A,r),B=`${N}${M}/${A}.svg`,V=(0,t.cx)(T.icon,v,r==="mono"?{[T.orange]:c==="favorite"}:"",A==="spinner"&&"fa-spin");return a.createElement(g.A,D({innerRef:n,src:B,width:j,height:K,title:R,className:V,style:E},L))});O.displayName="Icon";try{O.displayName="Icon",O.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:O.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(w,y,e){e.d(y,{Wj:function(){return f},Xi:function(){return a},cs:function(){return g}});const t=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function a(h,_){return h?.startsWith("gf-")?"custom":t.includes(h)?"mono":_==="default"?"unicons":_==="solid"?"solid":"mono"}function g(h){switch(h){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let d;function f(){if(d)return d;const h=typeof window<"u"&&window.__grafana_public_path__;return h?d=h+"img/icons/":d="public/img/icons/",d}},"./src/components/Input/Input.tsx":function(w,y,e){e.d(y,{n:function(){return o},p:function(){return l}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),g=e("../../node_modules/react-use/lib/useMeasure.js"),d=e("./src/themes/ThemeContext.tsx"),f=e("./src/themes/stylesFactory.ts"),h=e("./src/components/Forms/commonStyles.ts"),_=e("./src/components/Spinner/Spinner.tsx"),I=Object.defineProperty,u=Object.defineProperties,b=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(r,c,v)=>c in r?I(r,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):r[c]=v,O=(r,c)=>{for(var v in c||(c={}))D.call(c,v)&&P(r,v,c[v]);if(x)for(var v of x(c))S.call(c,v)&&P(r,v,c[v]);return r},m=(r,c)=>u(r,b(c)),n=(r,c)=>{var v={};for(var E in r)D.call(r,E)&&c.indexOf(E)<0&&(v[E]=r[E]);if(r!=null&&x)for(var E of x(r))c.indexOf(E)<0&&S.call(r,E)&&(v[E]=r[E]);return v};const l=a.forwardRef((r,c)=>{const v=r,{className:E,addonAfter:R,addonBefore:L,prefix:T,suffix:A,invalid:N,loading:W,width:K=0}=v,j=n(v,["className","addonAfter","addonBefore","prefix","suffix","invalid","loading","width"]),[M,B]=(0,g.A)(),[V,z]=(0,g.A)(),H=(0,d.$j)(),C=o({theme:H,invalid:!!N,width:K});return a.createElement("div",{className:(0,t.cx)(C.wrapper,E),"data-testid":"input-wrapper"},!!L&&a.createElement("div",{className:C.addon},L),a.createElement("div",{className:C.inputWrapper},T&&a.createElement("div",{className:C.prefix,ref:M},T),a.createElement("input",m(O({ref:c,className:C.input},j),{style:{paddingLeft:T?B.width+12:void 0,paddingRight:A||W?z.width+12:void 0}})),(A||W)&&a.createElement("div",{className:C.suffix,ref:V},W&&a.createElement(_.y,{className:C.loadingIndicator,inline:!0}),A)),!!R&&a.createElement("div",{className:C.addon},R))});l.displayName="Input";const o=(0,f.N)(({theme:r,invalid:c=!1,width:v})=>{const E="28px",R=(0,t.AH)({position:"absolute",top:0,zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",flexGrow:0,flexShrink:0,fontSize:r.typography.size.md,height:"100%",minWidth:E,color:r.colors.text.secondary});return{wrapper:(0,t.cx)((0,t.AH)({label:"input-wrapper",display:"flex",width:v?r.spacing(v):"100%",height:r.spacing(r.components.height.md),borderRadius:r.shape.radius.default,"&:hover":{"> .prefix, .suffix, .input":{borderColor:c?r.colors.error.border:r.colors.primary.border},"input[type='number']":{appearance:"textfield"},"input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":{WebkitAppearance:"inner-spin-button !important",opacity:1}}})),inputWrapper:(0,t.AH)({label:"input-inputWrapper",position:"relative",flexGrow:1,zIndex:1,"&:not(:first-child):last-child":{"> input":{borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0}},"&:first-child:not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}},"&:not(:first-child):not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}},input:{"&:not(:first-child)":{paddingLeft:E},"&:not(:last-child)":{paddingRight:E},"&[readonly]":{cursor:"default"}}}),input:(0,t.cx)((0,h.gm)(r),(0,h.Xb)(r,c),(0,t.AH)({label:"input-input",position:"relative",zIndex:0,flexGrow:1,borderRadius:r.shape.radius.default,height:"100%",width:"100%"})),inputDisabled:(0,t.AH)({backgroundColor:r.colors.action.disabledBackground,color:r.colors.action.disabledText,border:`1px solid ${r.colors.action.disabledBackground}`,"&:focus":{boxShadow:"none"}}),addon:(0,t.AH)({label:"input-addon",display:"flex",justifyContent:"center",alignItems:"center",flexGrow:0,flexShrink:0,position:"relative","&:first-child":{borderTopRightRadius:0,borderBottomRightRadius:0,"> :last-child":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&:last-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0,"> :first-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0}},"> *:focus":{zIndex:2}}),prefix:(0,t.cx)(R,(0,t.AH)({label:"input-prefix",paddingLeft:r.spacing(1),paddingRight:r.spacing(.5),borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0})),suffix:(0,t.cx)(R,(0,t.AH)({label:"input-suffix",paddingLeft:r.spacing(1),paddingRight:r.spacing(1),marginBottom:"-2px",borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0,right:0})),loadingIndicator:(0,t.AH)({"& + *":{marginLeft:r.spacing(.5)}})}});try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:l.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch{}},"./src/components/Spinner/Spinner.tsx":function(w,y,e){e.d(y,{y:function(){return I}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),g=e("../../node_modules/react-inlinesvg/esm/index.js"),d=e("./src/themes/ThemeContext.tsx"),f=e("./src/types/icon.ts"),h=e("./src/components/Icon/Icon.tsx"),_=e("./src/components/Icon/utils.ts");const I=({className:x,inline:D=!1,iconClassName:S,style:P,size:O="md"})=>{const m=(0,d.of)(u),n=(0,d.of)(b,O);if(typeof O!="string"||!(0,f.rJ)(O)){const l=(0,_.Wj)(),o="spinner",r=(0,_.Xi)(o,"default"),c=`${l}${r}/${o}.svg`;return a.createElement("div",{"data-testid":"Spinner",style:P,className:(0,t.cx)({[m.inline]:D},n.wrapper,x)},a.createElement(g.A,{src:c,width:O,height:O,className:(0,t.cx)("fa-spin",n.icon,x),style:P}))}return a.createElement("div",{"data-testid":"Spinner",style:P,className:(0,t.cx)({[m.inline]:D},x)},a.createElement(h.I,{className:(0,t.cx)("fa-spin",S),name:"spinner",size:O,"aria-label":"loading spinner"}))},u=x=>({inline:(0,t.AH)({display:"inline-block"})}),b=(x,D)=>({wrapper:(0,t.AH)({fontSize:typeof D=="string"?D:`${D}px`}),icon:(0,t.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"})});try{I.displayName="Spinner",I.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"string | number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:I.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch{}},"./src/themes/stylesFactory.ts":function(w,y,e){e.d(y,{N:function(){return g}});var t=e("../../node_modules/micro-memoize/dist/micro-memoize.js"),a=e.n(t);function g(d){return a()(d)}},"./src/types/icon.ts":function(w,y,e){e.d(y,{GO:function(){return d},SS:function(){return f},rJ:function(){return g}});var t=e("../grafana-data/src/types/icon.ts"),a=e("../grafana-data/src/types/dataFrame.ts");const g=_=>["xs","sm","md","lg","xl","xxl","xxxl"].includes(_),d=()=>Object.keys(t.az);function f(_){return h(_?.type)}function h(_){if(_)switch(_){case a.PU.time:return"clock-nine";case a.PU.string:return"font";case a.PU.number:return"calculator-alt";case a.PU.boolean:return"toggle-on";case a.PU.trace:return"info-circle";case a.PU.enum:return"list-ol";case a.PU.geo:return"map-marker";case a.PU.other:return"brackets-curly"}return"question-circle"}}}]);