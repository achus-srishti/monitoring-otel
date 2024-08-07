"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8777],{4244:(A,E,l)=>{l.d(E,{b:()=>f});var D=l(95344),P=l(76885),o=l(12131);const y={http:80,https:443,ftp:21};class f{constructor(){this.absUrl=this.wrapInDeprecationWarning(this.absUrl),this.hash=this.wrapInDeprecationWarning(this.hash),this.host=this.wrapInDeprecationWarning(this.host),this.path=this.wrapInDeprecationWarning(this.path),this.port=this.wrapInDeprecationWarning(this.port,"window.location"),this.protocol=this.wrapInDeprecationWarning(this.protocol,"window.location"),this.replace=this.wrapInDeprecationWarning(this.replace),this.search=this.wrapInDeprecationWarning(this.search),this.state=this.wrapInDeprecationWarning(this.state),this.url=this.wrapInDeprecationWarning(this.url)}wrapInDeprecationWarning(p,C){let M=this;return function(){return(0,D.l)("$location",p.name,C||"locationService"),p.apply(M,arguments)}}absUrl(){return`${window.location.origin}${this.url()}`}hash(p){if((0,o.Lc)("AngularLocationWrapper",!1,"Angular compat layer: hash"),p)throw new Error("AngularLocationWrapper method not implemented.");return o.Ny.getLocation().hash.slice(1)}host(){return new URL(window.location.href).hostname}path(p){(0,o.Lc)("AngularLocationWrapper",!1,"Angular compat layer: path");const C=o.Ny.getLocation();if(p!=null){let M=String(p);M=M.startsWith("/")?M:`/${M}`;const i=new URL(`${window.location.origin}${M}`);return o.Ny.push({pathname:i.pathname,search:i.search.length>0?i.search:C.search,hash:i.hash.length>0?i.hash:C.hash}),this}return p===null?(o.Ny.push("/"),this):C.pathname}port(){const p=new URL(window.location.href);return parseInt(p.port,10)||y[p.protocol]||null}protocol(){return new URL(window.location.href).protocol.slice(0,-1)}replace(){throw new Error("AngularLocationWrapper method not implemented.")}search(p,C){if((0,o.Lc)("AngularLocationWrapper",!1,"Angular compat layer: search"),!p)return o.Ny.getSearchObject();if(p&&arguments.length>1)return o.Ny.partial({[p]:C}),this;if(p){let M;typeof p=="object"?M={...p}:M=(0,o.SE)(p);for(const u of Object.keys(M))(M[u]===null||M[u]===void 0)&&delete M[u];const i=P.kM.renderUrl(o.Ny.getLocation().pathname,M);o.Ny.push(i)}return this}state(p){throw(0,o.Lc)("AngularLocationWrapper",!1,"Angular compat layer: state"),new Error("AngularLocationWrapper method not implemented.")}url(p){if((0,o.Lc)("AngularLocationWrapper",!1,"Angular compat layer: url"),p!==void 0)return p.startsWith("#")?o.Ny.push({...o.Ny.getLocation(),hash:p}):p.startsWith("?")?o.Ny.push({...o.Ny.getLocation(),search:p}):p.trim().length===0?o.Ny.push("/"):o.Ny.push(p),o.Ny;const C=o.Ny.getLocation();return`${C.pathname}${C.search}${C.hash}`}}},75519:(A,E,l)=>{l.d(E,{F:()=>C});var D=l(2543),P=l.n(D),o=l(39070),y=l(14236),f=l(26272),x=l(70225),p=l(19752);class C extends x.y{constructor(i,u){super(i,u),this.skipDataOnInit=!1,this.dataList=[],this.useDataFrames=!1,this.panelDataObserver={next:m=>{if(this.panelData=m,m.state===o.Gu.Error&&(this.loading=!1,this.processDataError(m.error)),m.state===o.Gu.Loading){this.loading=!0,this.angularDirtyCheck();return}if(m.request){const{timeInfo:T}=m.request;T&&(this.timeInfo=T)}if(m.timeRange&&(this.range=m.timeRange),this.useDataFrames)this.handleDataFrames(m.series);else{const T=m.series.map(L=>(0,y.w3)(L));this.handleQueryResult({data:T})}this.angularDirtyCheck()}},this.contextSrv=u.get("contextSrv"),this.datasourceSrv=u.get("datasourceSrv"),this.timeSrv=u.get("timeSrv"),this.templateSrv=u.get("templateSrv"),this.panel.datasource=this.panel.datasource||null,this.events.on(f.ee.refresh,this.onMetricsPanelRefresh.bind(this)),this.events.on(f.ee.panelTeardown,this.onPanelTearDown.bind(this)),this.events.on(f.ee.componentDidMount,this.onMetricsPanelMounted.bind(this))}onMetricsPanelMounted(){const i=this.panel.getQueryRunner();this.querySubscription=i.getData({withTransforms:!0,withFieldConfig:!0}).subscribe(this.panelDataObserver)}onPanelTearDown(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onMetricsPanelRefresh(){if(!this.otherPanelInFullscreenMode()){if(this.panel.snapshotData){this.updateTimeRange();let i=this.panel.snapshotData;return(0,D.isArray)(i)||(i=i.data),this.panelData={state:o.Gu.Done,series:i,timeRange:this.range},this.$timeout(()=>{this.events.emit(f.ee.dataSnapshotLoad,i)})}return delete this.error,this.loading=!0,this.datasourceSrv.get(this.panel.datasource,this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(i=>{this.processDataError(i)})}}processDataError(i){if(i.cancelled){console.log("Panel request cancelled",i);return}this.error=i.message||"Request Error",i.data&&(i.data.message?this.error=i.data.message:i.data.error&&(this.error=i.data.error)),this.angularDirtyCheck()}angularDirtyCheck(){this.$scope.$root.$$phase||this.$scope.$digest()}updateTimeRange(i){this.datasource=i||this.datasource,this.range=this.timeSrv.timeRange();const u=(0,p.nk)(this.panel,this.range);this.timeInfo=u.timeInfo,this.range=u.timeRange}issueQueries(i){this.updateTimeRange(i),this.datasource=i;const u=this.panel;return u.getQueryRunner().run({datasource:u.datasource,queries:u.targets,panelId:u.id,dashboardUID:this.dashboard.uid,timezone:this.dashboard.getTimezone(),timeInfo:this.timeInfo,timeRange:this.range,maxDataPoints:u.maxDataPoints||this.width,minInterval:u.interval,scopedVars:u.scopedVars,cacheTimeout:u.cacheTimeout,queryCachingTTL:u.queryCachingTTL,transformations:u.transformations})}handleDataFrames(i){this.loading=!1,this.dashboard&&this.dashboard.snapshot&&(this.panel.snapshotData=i.map(u=>(0,y.Kl)(u)));try{this.events.emit(f.ee.dataFramesReceived,i)}catch(u){this.processDataError(u)}}handleQueryResult(i){this.loading=!1,this.dashboard.snapshot&&(this.panel.snapshotData=i.data),(!i||!i.data)&&(console.log("Data source query result invalid, missing data field:",i),i={data:[]});try{this.events.emit(f.ee.dataReceived,i.data)}catch(u){this.processDataError(u)}}}},70225:(A,E,l)=>{l.d(E,{y:()=>C});var D=l(2543),P=l.n(D),o=l(18226),y=l(26272),f=l(4244),x=l(2913),p=l(10096);class C{constructor(i,u){this.pluginName="",this.pluginId="",this.editModeInitiated=!1,this.loading=!1,this.onPluginTypeChange=T=>{},this.panel=this.panel??i.$parent.panel,this.dashboard=this.dashboard??i.$parent.dashboard,this.$injector=u,this.$scope=i,this.$timeout=u.get("$timeout"),this.editorTabs=[],this.$location=new f.b,this.events=new o.o,this.timing={};const m=x.Ay.panels[this.panel.type];m&&(this.pluginId=m.id,this.pluginName=m.name),i.$on(y.ee.componentDidMount.name,()=>this.panelDidMount())}panelDidMount(){this.events.emit(y.ee.componentDidMount),this.events.emit(y.ee.initialized),this.dashboard.panelInitialized(this.panel)}renderingCompleted(){p.Ef.renderingCompleted()}refresh(){this.panel.refresh()}publishAppEvent(i,u){this.$scope.$root.appEvent(i,u)}initEditMode(){this.editModeInitiated||(this.editModeInitiated=!0,this.events.emit(y.ee.editModeInitialized))}addEditorTab(i,u,m,T){const L={title:i,directiveFn:u,icon:T};(0,D.isString)(u)&&(L.directiveFn=()=>({templateUrl:u})),m?this.editorTabs.splice(m,0,L):this.editorTabs.push(L)}getExtendedMenu(){const i=[];return this.events.emit(y.ee.initPanelActions,i),i}async getAdditionalMenuItems(){return[]}otherPanelInFullscreenMode(){return this.dashboard.otherPanelInFullscreen(this.panel)}render(i){this.events.emit(y.ee.render,i)}}},59559:(A,E,l)=>{l.d(E,{a:()=>o});var D=l(2543),P=l.n(D);class o{constructor(f,x){this.$scope=f,this.$injector=x,this.panelCtrl=this.panelCtrl??f.ctrl.panelCtrl,this.target=this.target??f.ctrl.target,this.datasource=this.datasource??f.ctrl.datasource,this.panel=this.panelCtrl?.panel??f.ctrl.panelCtrl.panel,this.isLastQuery=(0,D.indexOf)(this.panel.targets,this.target)===this.panel.targets.length-1}refresh(){this.panelCtrl.refresh()}}},78491:(A,E,l)=>{l.r(E),l.d(E,{TablePanelCtrl:()=>Y,plugin:()=>$});var D=l(34796),P=l.n(D),o=l(2543),y=l(26272),f=l(14236),x=l(65158),p=l(2913),C=l(26260),M=l(5808),i=l(99140),u=l(83195);const m=class{constructor(n){n.editor=this,this.activeStyleIndex=0,this.panelCtrl=n.ctrl,this.panel=this.panelCtrl.panel,this.unitFormats=(0,u.Ke)(),this.colorModes=[{text:"Disabled",value:null},{text:"Cell",value:"cell"},{text:"Value",value:"value"},{text:"Row",value:"row"}],this.columnTypes=[{text:"Number",value:"number"},{text:"String",value:"string"},{text:"Date",value:"date"},{text:"Hidden",value:"hidden"}],this.fontSizes=["80%","90%","100%","110%","120%","130%","150%","160%","180%","200%","220%","250%"],this.dateFormats=[{text:"YYYY-MM-DD HH:mm:ss",value:"YYYY-MM-DD HH:mm:ss"},{text:"YYYY-MM-DD HH:mm:ss.SSS",value:"YYYY-MM-DD HH:mm:ss.SSS"},{text:"MM/DD/YY h:mm:ss a",value:"MM/DD/YY h:mm:ss a"},{text:"MMMM D, YYYY LT",value:"MMMM D, YYYY LT"},{text:"YYYY-MM-DD",value:"YYYY-MM-DD"}],this.mappingTypes=[{text:"Value to text",value:1},{text:"Range to text",value:2}],this.alignTypes=m.alignTypesEnum,this.getColumnNames=()=>this.panelCtrl.table?(0,o.map)(this.panelCtrl.table.columns,e=>e.text):[],this.onColorChange=this.onColorChange.bind(this)}render(){this.panelCtrl.render()}setUnitFormat(n){return e=>{n.unit=e,this.panelCtrl.render()}}addColumnStyle(){const n={unit:"short",type:"number",alias:"",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"",dateFormat:"YYYY-MM-DD HH:mm:ss",thresholds:[],mappingType:1,align:"auto"},e=this.panel.styles,t=e.length;let s=t;t>0&&e[t-1].pattern==="/.*/"&&(s=t-1),e.splice(s,0,n),this.activeStyleIndex=s}removeColumnStyle(n){this.panel.styles=(0,o.without)(this.panel.styles,n)}invertColorOrder(n){const e=this.panel.styles[n].colors,t=e[0];e[0]=e[2],e[2]=t,this.panelCtrl.render()}onColorChange(n,e){return t=>{n.colors[e]=t,this.render()}}addValueMap(n){n.valueMaps||(n.valueMaps=[]),n.valueMaps.push({value:"",text:""}),this.panelCtrl.render()}removeValueMap(n,e){n.valueMaps.splice(e,1),this.panelCtrl.render()}addRangeMap(n){n.rangeMaps||(n.rangeMaps=[]),n.rangeMaps.push({from:"",to:"",text:""}),this.panelCtrl.render()}removeRangeMap(n,e){n.rangeMaps.splice(e,1),this.panelCtrl.render()}};let T=m;T.alignTypesEnum=[{text:"auto",value:""},{text:"left",value:"left"},{text:"center",value:"center"},{text:"right",value:"right"}],T.$inject=["$scope"];function L(){"use strict";return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/table-old/column_options.html",controller:T}}var H=l(91950),Z=l(31140),K=l(78827);const I={},_=n=>Array.isArray(n)?n.reduce((e,t)=>t.datapoints?e.concat(t):e,[]):n.datapoints?[n]:[],V=n=>Array.isArray(n)?n.reduce((e,t)=>t.columns?e.concat(t):e,[]):n.columns?[n]:[];I.timeseries_to_rows={description:"Time series to rows",getColumns:()=>[],transform:(n,e,t)=>{t.columns=[{text:"Time",type:"date"},{text:"Metric"},{text:"Value"}];const s=_(n);for(let r=0;r<s.length;r++){const a=s[r];for(let h=0;h<a.datapoints.length;h++){const c=a.datapoints[h];t.rows.push([c[1],a.target,c[0]])}}}},I.timeseries_to_columns={description:"Time series to columns",getColumns:()=>[],transform:(n,e,t)=>{t.columns.push({text:"Time",type:"date"});const s={},r=_(n);for(let a=0;a<r.length;a++){const h=r[a];t.columns.push({text:h.target});for(let c=0;c<h.datapoints.length;c++){const d=h.datapoints[c],b=d[1].toString();s[b]||(s[b]={time:d[1]}),s[b][a]=d[0]}}for(const a in s){const h=s[a],c=[h.time];for(let d=0;d<r.length;d++){const b=h[d];c.push(b)}t.rows.push(c)}}},I.timeseries_aggregations={description:"Time series aggregations",getColumns:()=>[{text:"Avg",value:"avg"},{text:"Min",value:"min"},{text:"Max",value:"max"},{text:"Total",value:"total"},{text:"Current",value:"current"},{text:"Count",value:"count"}],transform:(n,e,t)=>{let s,r;for(t.columns.push({text:"Metric"}),s=0;s<e.columns.length;s++)t.columns.push({text:e.columns[s].text});const a=_(n);for(s=0;s<a.length;s++){const h=new Z.A({datapoints:a[s].datapoints,alias:a[s].target});h.getFlotPairs("connected");const c=[h.alias];for(r=0;r<e.columns.length;r++)c.push(h.stats[e.columns[r].value]);t.rows.push(c)}}},I.annotations={description:"Annotations",getColumns:()=>[],transform:(n,e,t)=>{if(t.columns.push({text:"Time",type:"date"}),t.columns.push({text:"Title"}),t.columns.push({text:"Text"}),t.columns.push({text:"Tags"}),!(!n||!n.annotations||n.annotations.length===0))for(let s=0;s<n.annotations.length;s++){const r=n.annotations[s];t.rows.push([r.time,r.title,r.text,r.tags])}}},I.table={description:"Table",getColumns:n=>{if(!n||n.length===0)return[];if(n.length===1)return[...n[0].columns];const e=V(n),t={};return e.reduce((r,a)=>(a.columns.forEach(h=>{const{text:c}=h;t[c]===void 0&&(t[c]=r.length,r.push(h))}),r),[])},transform:(n,e,t)=>{if(!n||n.length===0)return;const s=V(n),r=(0,o.findIndex)(s,a=>"columns"in a&&"rows"in a);if(r<0)throw{message:`Result of query #${String.fromCharCode(65+r)} is not in table format, try using another transform.`};(0,H.f)(t,...s)}},I.json={description:"JSON Data",getColumns:n=>{if(!n||n.length===0)return[];const e={};for(let t=0;t<n.length;t++){const s=n[t];if(s.type!=="docs")continue;const r=Math.min(s.datapoints.length,100);for(let a=0;a<r;a++){const h=s.datapoints[a],c=(0,K.default)(h,{});for(const d in c)e[d]=!0}}return(0,o.map)(e,(t,s)=>({text:s,value:s}))},transform:(n,e,t)=>{let s,r,a;for(const h of e.columns){const c={text:h.text};n.length>0&&n[0].filterable&&(c.filterable=!0),t.columns.push(c)}for(t.columns.length===0&&t.columns.push({text:"JSON"}),s=0;s<n.length;s++){const h=n[s];for(r=0;r<h.datapoints.length;r++){const c=h.datapoints[r],d=[];if((0,o.isObject)(c)&&e.columns.length>0){const b=(0,K.default)(c);for(a=0;a<e.columns.length;a++)d.push(b[e.columns[a].value])}else d.push(JSON.stringify(c));t.rows.push(d)}}}};function J(n,e){const t=new H.A;if(!n||n.length===0)return t;const s=I[e.transform];if(!s)throw{message:"Transformer "+e.transform+" not found"};return s.transform(n,e,t),t}class j{constructor(e,t){this.uiSegmentSrv=t,this.canSetColumns=!1,this.columnsHelpMessage="",e.editor=this,this.panelCtrl=e.ctrl,this.panel=this.panelCtrl.panel,this.transformers=I,this.fontSizes=["80%","90%","100%","110%","120%","130%","150%","160%","180%","200%","220%","250%"],this.addColumnSegment=t.newPlusButton(),this.updateTransformHints()}updateTransformHints(){switch(this.canSetColumns=!1,this.columnsHelpMessage="",this.panel.transform){case"timeseries_aggregations":{this.canSetColumns=!0;break}case"json":{this.canSetColumns=!0;break}case"table":this.columnsHelpMessage="Columns and their order are determined by the data query"}}getColumnOptions(){if(!this.panelCtrl.dataRaw)return Promise.resolve([]);const e=this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw),t=(0,o.map)(e,s=>this.uiSegmentSrv.newSegment({value:s.text}));return Promise.resolve(t)}addColumn(){const e=I[this.panel.transform].getColumns(this.panelCtrl.dataRaw),t=(0,o.find)(e,{text:this.addColumnSegment.value});t&&(this.panel.columns.push(t),this.render());const s=this.uiSegmentSrv.newPlusButton();this.addColumnSegment.html=s.html,this.addColumnSegment.value=s.value}transformChanged(){this.panel.columns=[],this.panel.transform==="annotations"?this.panelCtrl.refresh():(this.panel.transform==="timeseries_aggregations"&&this.panel.columns.push({text:"Avg",value:"avg"}),this.updateTransformHints(),this.render())}render(){this.panelCtrl.render()}removeColumn(e){this.panel.columns=(0,o.without)(this.panel.columns,e),this.panelCtrl.render()}}j.$inject=["$scope","uiSegmentSrv"];function G(){"use strict";return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/table-old/editor.html",controller:j}}var W=l(54479),F=l(40672),Q=l(72724),X=l(72574);class q{constructor(e,t,s,r,a=(0,X.w)(),h){this.panel=e,this.table=t,this.timeZone=s,this.sanitize=r,this.templateSrv=a,this.theme=h,this.formatters=[],this.colorState={},this.initColumns()}setTable(e){this.table=e,this.initColumns()}initColumns(){this.formatters=[],this.colorState={};for(let e=0;e<this.table.columns.length;e++){const t=this.table.columns[e];t.title=t.text;for(let s=0;s<this.panel.styles.length;s++){const r=this.panel.styles[s],a=(0,W.AP)(r.pattern)?r.pattern:(0,W.jD)((0,W.xb)(r.pattern)),h=(0,W.dO)(a);if(t.text.match(h)){t.style=r,r.alias&&(t.title=F.sQ.escapeHtml(t.text.replace(h,r.alias)));break}}this.formatters[e]=this.createColumnFormatter(t)}}getColorForValue(e,t){if(!t.thresholds||!t.colors)return null;for(let s=t.thresholds.length;s>0;s--)if(e>=t.thresholds[s-1])return this.theme.visualization.getColorByName(t.colors[s]);return this.theme.visualization.getColorByName((0,o.first)(t.colors))}defaultCellFormatter(e,t){return e==null||e===void 0?"":((0,o.isArray)(e)&&(e=e.join(", ")),t&&t.sanitize?this.sanitize(e):(0,o.escape)(e))}createColumnFormatter(e){if(!e.style)return this.defaultCellFormatter;if(e.style.type==="hidden")return t=>{};if(e.style.type==="date")return t=>t==null?"-":((0,o.isArray)(t)&&(t=t[0]),(0,o.isString)(t)&&!isNaN(t)&&t.length>12&&(t=parseInt(t,10)),e.style.dateFormat?(0,Q.LE)(t,{format:e.style.dateFormat,timeZone:this.timeZone}):(0,Q.M7)(t,{timeZone:this.timeZone}));if(e.style.type==="string")return t=>{(0,o.isArray)(t)&&(t=t.join(", "));const s=e.style.mappingType||0;if(s===1&&e.style.valueMaps)for(let r=0;r<e.style.valueMaps.length;r++){const a=e.style.valueMaps[r];if(t===null){if(a.value==="null")return a.text;continue}if(!(0,o.isString)(t)&&Number(a.value)===Number(t)||a.value===t)return this.setColorState(t,e.style),this.defaultCellFormatter(a.text,e.style)}if(s===2&&e.style.rangeMaps)for(let r=0;r<e.style.rangeMaps.length;r++){const a=e.style.rangeMaps[r];if(t===null){if(a.from==="null"&&a.to==="null")return a.text;continue}if(Number(a.from)<=Number(t)&&Number(a.to)>=Number(t))return this.setColorState(t,e.style),this.defaultCellFormatter(a.text,e.style)}return t==null?"-":(this.setColorState(t,e.style),this.defaultCellFormatter(t,e.style))};if(e.style.type==="number"){const t=(0,u.j_)(e.unit||e.style.unit);return s=>s==null?"-":isNaN(s)||(0,o.isArray)(s)?this.defaultCellFormatter(s,e.style):(this.setColorState(s,e.style),(0,u.cN)(t(s,e.style.decimals,null)))}return t=>this.defaultCellFormatter(t,e.style)}setColorState(e,t){if(!t.colorMode||e==null||(0,o.isArray)(e))return;const s=Number(e);isNaN(s)||(this.colorState[t.colorMode]=this.getColorForValue(s,t))}renderRowVariables(e){const t={};let s;const r=this.table.rows[e];for(let a=0;a<r.length;a++)s=`__cell_${a}`,t[s]={value:r[a],text:r[a]?r[a].toString():""};return t}formatColumnValue(e,t){const s=this.formatters[e];return s?s(t):t}renderCell(e,t,s,r=!1){s=this.formatColumnValue(e,s);const a=this.table.columns[e],h=[];let c="";const d=[];let b="";this.colorState.cell?(h.push("background-color:"+this.colorState.cell),d.push("table-panel-color-cell"),this.colorState.cell=null):this.colorState.value&&(h.push("color:"+this.colorState.value),this.colorState.value=null);let g="";if(r&&(g='<div class="table-panel-width-hack">'+this.table.columns[e].title+"</div>"),s===void 0?(h.push("display:none"),a.hidden=!0):a.hidden=!1,a.hidden===!0)return"";if(a.style&&a.style.preserveFormat&&d.push("table-panel-cell-pre"),a.style&&a.style.align){const S=(0,o.find)(T.alignTypesEnum,["text",a.style.align]);S&&S.value&&h.push(`text-align:${S.value}`)}if(h.length&&(c=' style="'+h.join(";")+'"'),a.style&&a.style.link){const S=this.renderRowVariables(t);S.__cell={value:s,text:s?s.toString():""};const w=this.templateSrv.replace(a.style.linkUrl,S,encodeURIComponent),U=F.sQ.sanitizeUrl(w),B=F.sQ.escapeHtml(this.templateSrv.replace(a.style.linkTooltip,S)),v=a.style.linkTargetBlank?"_blank":"";d.push("table-panel-cell-link"),g+=`<a href="${U}" target="${v}" data-link-tooltip data-original-title="${B}" data-placement="right"${c}>`,g+=`${s}`,g+="</a>"}else g+=s;return a.filterable&&(d.push("table-panel-cell-filterable"),g+=`<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter out value" data-placement="bottom"
           data-row="${t}" data-column="${e}" data-operator="!=">`,g+='<i class="fa fa-search-minus"></i>',g+="</a>",g+=`<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter for value" data-placement="bottom"
           data-row="${t}" data-column="${e}" data-operator="=">`,g+='<i class="fa fa-search-plus"></i>',g+="</a>"),d.length&&(b=' class="'+d.join(" ")+'"'),g="<td"+b+c+">"+g+"</td>",g}render(e){const t=this.panel.pageSize||100,s=e*t,r=Math.min(s+t,this.table.rows.length);let a="";for(let h=s;h<r;h++){const c=this.table.rows[h];let d="",b="";const g=[];let S="";for(let w=0;w<this.table.columns.length;w++)d+=this.renderCell(w,h,c[w],h===s);this.colorState.row&&(b=' style="background-color:'+this.colorState.row+'"',g.push("table-panel-color-row"),this.colorState.row=null),g.length&&(S=' class="'+g.join(" ")+'"'),a+="<tr "+S+b+">"+d+"</tr>"}return a}render_values(){const e=[],t=this.table.columns.filter(s=>!s.hidden);for(let s=0;s<this.table.rows.length;s++){const r=this.table.rows[s],a=[];for(let h=0;h<this.table.columns.length;h++)this.table.columns[h].hidden||a.push(this.formatColumnValue(h,r[h]));e.push(a)}return{columns:t,rows:e}}}class Y extends M.MetricsPanelCtrl{constructor(e,t,s,r){super(e,t),this.annotationsSrv=s,this.$sanitize=r,this.panelDefaults={targets:[{}],transform:"timeseries_to_columns",pageSize:null,showHeader:!0,styles:[{type:"date",pattern:"Time",alias:"Time",dateFormat:"YYYY-MM-DD HH:mm:ss",align:"auto"},{unit:"short",type:"number",alias:"",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"/.*/",thresholds:[],align:"right"}],columns:[],fontSize:"100%",sort:{col:0,desc:!0}},this.pageIndex=0,this.panel.styles===void 0&&(this.panel.styles=this.panel.columns,this.panel.columns=this.panel.fields,delete this.panel.columns,delete this.panel.fields),(0,o.defaults)(this.panel,this.panelDefaults),this.panelHasRowColorMode=!!this.panel.styles.find(a=>a.colorMode==="row"),this.panelHasLinks=!!this.panel.styles.find(a=>a.link),this.events.on(y.ee.dataReceived,this.onDataReceived.bind(this)),this.events.on(y.ee.dataSnapshotLoad,this.onDataReceived.bind(this)),this.events.on(y.ee.editModeInitialized,this.onInitEditMode.bind(this))}onInitEditMode(){this.addEditorTab("Options",G,2),this.addEditorTab("Column Styles",L,3)}migrateToPanel(e){this.onPluginTypeChange(p.Ay.panels[e])}issueQueries(e){return this.pageIndex=0,this.panel.transform==="annotations"?this.annotationsSrv.getAnnotations({dashboard:this.dashboard,panel:this.panel,range:this.range}).then(t=>{this.loading=!1,this.dataRaw=t,this.pageIndex=0,this.render()}):super.issueQueries(e)}onDataReceived(e){this.dataRaw=e,this.pageIndex=0,this.dataRaw&&this.dataRaw.length&&((0,f.pH)(this.dataRaw[0])?this.panel.transform="table":this.dataRaw[0].type==="docs"?this.panel.transform="json":(this.panel.transform==="table"||this.panel.transform==="json")&&(this.panel.transform="timeseries_to_rows")),this.render()}render(){return this.table=J(this.dataRaw,this.panel),this.table.sort(this.panel.sort),this.renderer=new q(this.panel,this.table,this.dashboard.getTimezone(),this.$sanitize,this.templateSrv,p.Ay.theme2),super.render(this.table)}toggleColumnSort(e,t){this.table.columns[this.panel.sort.col]&&(this.table.columns[this.panel.sort.col].sort=!1),this.panel.sort.col===t?this.panel.sort.desc?this.panel.sort.desc=!1:this.panel.sort.col=null:(this.panel.sort.col=t,this.panel.sort.desc=!0),this.render()}link(e,t,s,r){let a;const h=r.panel;let c=0;function d(){let v=r.height;return c>1&&(v-=26),v-31+"px"}function b(v){r.renderer.setTable(a),v.empty(),v.html(r.renderer.render(r.pageIndex))}function g(v){const R=P()(v.currentTarget);r.pageIndex=parseInt(R.text(),10)-1,w()}function S(v){v.empty();const R=h.pageSize||100;if(c=Math.ceil(a.rows.length/R),c===1)return;const O=Math.max(r.pageIndex-3,0),z=Math.min(c,O+9),k=P()("<ul></ul>");for(let N=O;N<z;N++){const tt=N===r.pageIndex?"active":"",et=P()('<li><a class="table-panel-page-link pointer '+tt+'">'+(N+1)+"</a></li>");k.append(et)}v.append(k)}function w(){const v=t.parents(".panel-content"),R=t.find(".table-panel-scroll"),O=t.find("tbody"),z=t.find(".table-panel-footer");t.css({"font-size":h.fontSize}),v.addClass("table-panel-content"),b(O),S(z),R.css({"max-height":d()})}t.tooltip({selector:"[data-link-tooltip]"});function U(v){const R=P()(v.currentTarget).data(),O={datasource:h.datasource,key:a.columns[R.column].text,value:a.rows[R.row][R.column],operator:R.operator};(0,i.JD)((0,C.z_)(O))}t.on("click",".table-panel-page-link",g),t.on("click",".table-panel-filter-link",U);const B=e.$on("$destroy",()=>{t.off("click",".table-panel-page-link"),t.off("click",".table-panel-filter-link"),B()});r.events.on(y.ee.render,v=>{a=v||a,a&&w(),r.renderingCompleted()})}}Y.templateUrl="module.html",Y.$inject=["$scope","$injector","annotationsSrv","$sanitize"];const $=new x.m(null);$.angularPanelCtrl=Y,$.setNoPadding()},5808:(A,E,l)=>{l.r(E),l.d(E,{MetricsPanelCtrl:()=>p,PanelCtrl:()=>x,QueryCtrl:()=>C,loadPluginCss:()=>P.PL});var D=l(92341),P=l(89191),o=l(75519),y=l(70225),f=l(59559);const x=(0,D.Y)(y.y),p=(0,D.Y)(o.F),C=(0,D.Y)(f.a)}}]);

//# sourceMappingURL=tableOldPlugin.8c72b8399d197aeebe16.js.map