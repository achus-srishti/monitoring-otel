"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7620],{84535:($,h,t)=>{t.r(h),t.d(h,{PlaylistEditPage:()=>I,default:()=>A});var e=t(96540),g=t(16817),O=t(12131),b=t(36830),c=t(44836),P=t(23833),D=t(86022);const I=({match:x})=>{const C=(0,D.NF)(),l=(0,g.A)(()=>C.getPlaylist(x.params.uid),[x.params]),M=async p=>{await C.updatePlaylist(p),O.Ny.push("/playlists")},E={text:(0,c.t)("playlist-edit.title","Edit playlist"),subTitle:(0,c.t)("playlist-edit.sub-title","A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors.")};return e.createElement(b.Y,{navId:"dashboards/playlists",pageNav:E},e.createElement(b.Y.Contents,{isLoading:l.loading},l.error&&e.createElement("div",null,e.createElement(c.x6,{i18nKey:"playlist-edit.error-prefix"},"Error loading playlist:"),JSON.stringify(l.error)),l.value&&e.createElement(P.$,{onSubmit:M,playlist:l.value})))},A=I},23833:($,h,t)=>{t.d(h,{$:()=>G});var e=t(96540),g=t(13544),O=t(32264),b=t(51253),c=t(88575),P=t(10354),D=t(84167),I=t(66864),A=t(55852),x=t(59429),C=t(99818),l=t(44836),M=t(24439),E=t(75494),p=t(32196),F=t(55127),S=t.n(F),K=t(40845),N=t(62930),B=t(14578),L=t(29158),R=t(46334);const U=({items:d,onDelete:n})=>{const i=(0,K.of)(W);if(!d?.length)return e.createElement("div",null,e.createElement("em",null,e.createElement(l.x6,{i18nKey:"playlist-edit.form.table-empty"},"Playlist is empty. Add dashboards below.")));const y=a=>{let m=a.type==="dashboard_by_tag"?"apps":"tag-alt";const r=[],s=a.dashboards?.[0];return a.dashboards?a.type==="dashboard_by_tag"?(r.push(e.createElement(R.E,{key:a.value,label:a.value,removeIcon:!1,count:0})),s?r.push(e.createElement("span",{key:"info"},"\xA0 ",S()("dashboard",a.dashboards.length,!0))):(m="exclamation-triangle",r.push(e.createElement("span",{key:"info"},"\xA0 No dashboards found")))):s?r.push(a.dashboards.length>1?e.createElement("span",{key:"info"},"Multiple items found: $",a.value):e.createElement("span",{key:"info"},s.name??a.value)):(m="exclamation-triangle",r.push(e.createElement("span",{key:"info"},"\xA0 Not found: ",a.value))):r.push(e.createElement(N.y,{key:"spinner"})),e.createElement(e.Fragment,null,e.createElement(B.I,{name:m,className:i.rightMargin,key:"icon"}),r)};return e.createElement(e.Fragment,null,d.map((a,m)=>e.createElement(E.sx,{key:`${m}/${a.value}`,draggableId:`${m}`,index:m},r=>e.createElement("div",{className:i.row,ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,role:"row"},e.createElement("div",{className:i.actions,role:"cell","aria-label":`Playlist item, ${a.type}, ${a.value}`},y(a)),e.createElement("div",{className:i.actions},e.createElement(L.K,{name:"times",size:"md",onClick:()=>n(m),"data-testid":g.Tp.pages.PlaylistForm.itemDelete,tooltip:(0,l.t)("playlist-edit.form.table-delete","Delete playlist item")}),e.createElement(B.I,{title:(0,l.t)("playlist-edit.form.table-drag","Drag and drop to reorder"),name:"draggabledots",size:"md"}))))))};function W(d){return{row:(0,p.css)`
      padding: 6px;
      background: ${d.colors.background.secondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3px;

      border: 1px solid ${d.colors.border.medium};
      &:hover {
        border: 1px solid ${d.colors.border.strong};
      }
    `,rightMargin:(0,p.css)`
      margin-right: 5px;
    `,actions:(0,p.css)`
      align-items: center;
      justify-content: center;
      display: flex;
    `,settings:(0,p.css)`
      label: settings;
      text-align: right;
    `}}const z=({items:d,deleteItem:n,moveItem:i})=>{const y=a=>{a.destination&&i(a.source.index,a.destination?.index)};return e.createElement(D.n,{label:(0,l.t)("playlist-edit.form.table-heading","Dashboards")},e.createElement(E.JY,{onDragEnd:y},e.createElement(E.gL,{droppableId:"playlist-list",direction:"vertical"},a=>e.createElement("div",{ref:a.innerRef,...a.droppableProps},e.createElement(U,{items:d,onDelete:n}),a.placeholder))))};var j=t(16817),Y=t(86022);function V(d){const[n,i]=(0,e.useState)(d??[]);(0,j.A)(async()=>{for(const s of n)if(!s.dashboards){i(await(0,Y.qY)(n));return}},[n]);const y=(0,e.useCallback)(s=>{s&&i([...n,{type:"dashboard_by_uid",value:s.uid}])},[n]),a=(0,e.useCallback)(s=>{const o=s[0];if(!o||n.find(v=>v.value===o))return;const u={type:"dashboard_by_tag",value:o};i([...n,u])},[n]),m=(0,e.useCallback)((s,o)=>{if(s===o||!n[s])return;const u=Array.from(n),[v]=u.splice(s,1);u.splice(o,0,v),i(u)},[n]),r=(0,e.useCallback)(s=>{const o=n.slice();o.splice(s,1),i(o)},[n]);return{items:n,addByUID:y,addByTag:a,deleteItem:r,moveItem:m}}const G=({onSubmit:d,playlist:n})=>{const[i,y]=(0,e.useState)(!1),{name:a,interval:m,items:r}=n,s=(0,e.useMemo)(()=>()=>(0,M.getGrafanaSearcher)().tags({kind:["dashboard"]}),[]),{items:o,addByUID:u,addByTag:v,deleteItem:J,moveItem:H}=V(r),X=T=>{y(!0),d({...T,items:o,uid:n.uid})};return e.createElement("div",null,e.createElement(b.l,{onSubmit:X,validateOn:"onBlur"},({register:T,errors:f})=>{const Q=o.length===0||Object.keys(f).length>0;return e.createElement(e.Fragment,null,e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.name-label","Name"),invalid:!!f.name,error:f?.name?.message},e.createElement(P.p,{type:"text",...T("name",{required:(0,l.t)("playlist-edit.form.name-required","Name is required")}),placeholder:(0,l.t)("playlist-edit.form.name-placeholder","Name"),defaultValue:a,"aria-label":g.Tp.pages.PlaylistForm.name})),e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.interval-label","Interval"),invalid:!!f.interval,error:f?.interval?.message},e.createElement(P.p,{type:"text",...T("interval",{required:(0,l.t)("playlist-edit.form.interval-required","Interval is required")}),placeholder:(0,l.t)("playlist-edit.form.interval-placeholder","5m"),defaultValue:m??"5m","aria-label":g.Tp.pages.PlaylistForm.interval})),e.createElement(z,{items:o,deleteItem:J,moveItem:H}),e.createElement(D.n,{label:(0,l.t)("playlist-edit.form.heading","Add dashboards")},e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.add-title-label","Add by title")},e.createElement(x.b,{id:"dashboard-picker",onChange:u,key:o.length})),e.createElement(c.D,{label:(0,l.t)("playlist-edit.form.add-tag-label","Add by tag")},e.createElement(C.$,{isClearable:!0,tags:[],hideValues:!0,tagOptions:s,onChange:v,placeholder:(0,l.t)("playlist-edit.form.add-tag-placeholder","Select a tag")}))),e.createElement(I.Gy,null,e.createElement(A.$n,{type:"submit",variant:"primary",disabled:Q,icon:i?"spinner":void 0},e.createElement(l.x6,{i18nKey:"playlist-edit.form.save"},"Save")),e.createElement(A.z9,{variant:"secondary",href:`${O.$.appSubUrl}/playlists`},e.createElement(l.x6,{i18nKey:"playlist-edit.form.cancel"},"Cancel"))))}))}}}]);

//# sourceMappingURL=PlaylistEditPage.d14b3673a1bb03ca0dbb.js.map