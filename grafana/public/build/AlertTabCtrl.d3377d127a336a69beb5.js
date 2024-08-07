"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[587],{8678:(E,g,i)=>{i.d(g,{F:()=>o});const o=_=>v=>v.finally(_.$evalAsync)},9244:(E,g,i)=>{i.r(g),i.d(g,{AlertTabCtrl:()=>M,alertTab:()=>P});var o=i(2543),_=i.n(o),v=i(65879),T=i(17172),p=i(67982),A=i(8678),h=i(28138),f=i(2913),m=i(1062),l=i(80348),s=i(28444),n=i(21468),u=i(14333),d=i(55907);class M{constructor(e,t,a,r){this.$scope=e,this.dashboardSrv=t,this.uiSegmentSrv=a,this.datasourceSrv=r,this.enable=()=>{this.panel.alert={},this.initModel(),this.panel.alert.for="5m"},this.panelCtrl=e.ctrl,this.panel=this.panelCtrl.panel,this.$scope.ctrl=this,this.subTabIndex=0,this.evalFunctions=d.A.evalFunctions,this.evalOperators=d.A.evalOperators,this.conditionTypes=d.A.conditionTypes,this.noDataModes=d.A.noDataModes,this.executionErrorModes=d.A.executionErrorModes,this.appSubUrl=f.Ay.appSubUrl,this.panelCtrl._enableAlert=this.enable,this.alertingMinIntervalSecs=f.Ay.alertingMinInterval,this.alertingMinInterval=v.secondsToHms(f.Ay.alertingMinInterval)}$onInit(){this.addNotificationSegment=this.uiSegmentSrv.newPlusButton();const e=this.graphThresholdChanged.bind(this);return this.panelCtrl.events.on(l.CoreEvents.u4,e),this.$scope.$on("$destroy",()=>{this.panelCtrl.events.off(l.CoreEvents.u4,e),this.panelCtrl.editingThresholds=!1,this.panelCtrl.render()}),this.notifications=[],this.alertNotifications=[],this.alertHistory=[],(0,A.F)(this.$scope)((0,T.AI)().get("/api/alert-notifications/lookup").then(t=>{this.notifications=t,this.initModel(),this.validateModel()}))}getAlertHistory(){(0,A.F)(this.$scope)((0,T.AI)().get(`/api/annotations?dashboardId=${this.panelCtrl.dashboard.id}&panelId=${this.panel.id}&limit=50&type=alert`).then(e=>{this.alertHistory=(0,o.map)(e,t=>(t.time=this.dashboardSrv.getCurrent()?.formatDate(t.time,"MMM D, YYYY HH:mm:ss"),t.stateModel=d.A.getStateDisplayModel(t.newState),t.info=d.A.getAlertAnnotationInfo(t),t))}))}getNotificationIcon(e){switch(e){case"email":return"envelope";case"slack":return"slack";case"victorops":return"fa fa-pagelines";case"webhook":return"cube";case"pagerduty":return"fa fa-bullhorn";case"opsgenie":return"bell";case"hipchat":return"fa fa-mail-forward";case"pushover":return"mobile-android";case"kafka":return"arrow-random";case"teams":return"fa fa-windows"}return"bell"}getNotifications(){return Promise.resolve(this.notifications.map(e=>this.uiSegmentSrv.newSegment(e.name)))}notificationAdded(){const e=(0,o.find)(this.notifications,{name:this.addNotificationSegment.value});e&&(this.alertNotifications.push({name:e.name,iconClass:this.getNotificationIcon(e.type),isDefault:!1,uid:e.uid}),(0,o.find)(this.alert.notifications,t=>t.id===e.id||t.uid===e.uid)||this.alert.notifications.push({uid:e.uid}),this.addNotificationSegment.value=this.uiSegmentSrv.newPlusButton().value,this.addNotificationSegment.html=this.uiSegmentSrv.newPlusButton().html,this.addNotificationSegment.fake=!0)}removeNotification(e){(0,o.remove)(this.alert.notifications,t=>t.uid===e.uid||t.id===e.id),(0,o.remove)(this.alertNotifications,t=>t.uid===e.uid||t.id===e.id)}addAlertRuleTag(){this.newAlertRuleTag.name&&(this.alert.alertRuleTags[this.newAlertRuleTag.name]=this.newAlertRuleTag.value),this.newAlertRuleTag.name="",this.newAlertRuleTag.value=""}removeAlertRuleTag(e){delete this.alert.alertRuleTags[e]}initModel(){const e=this.alert=this.panel.alert;if(!e)return;this.checkFrequency(),e.conditions=e.conditions||[],e.conditions.length===0&&e.conditions.push((0,n.X)()),e.noDataState=e.noDataState||f.Ay.alertingNoDataOrNullValues,e.executionErrorState=e.executionErrorState||f.Ay.alertingErrorOrTimeout,e.frequency=e.frequency||"1m",e.handler=e.handler||1,e.notifications=e.notifications||[],e.for=e.for||"0m",e.alertRuleTags=e.alertRuleTags||{};const t=this.panel.title+" alert";e.name=e.name||t,this.conditionModels=(0,o.reduce)(e.conditions,(a,r)=>(a.push(this.buildConditionModel(r)),a),[]),u.X.alertToGraphThresholds(this.panel);for(const a of e.notifications){let r=a.uid,c=(0,o.find)(this.notifications,{uid:r});!c&&a.id&&(r=a.id,c=(0,o.find)(this.notifications,{id:r})),c||h.A.publish(new s.bY({title:"Notifier with invalid identifier is detected",text:`Do you want to delete notifier with invalid identifier: ${r} from the dashboard JSON?`,text2:"After successful deletion, make sure to save the dashboard for storing the update JSON.",icon:"trash-alt",confirmText:"Delete",yesText:"Delete",onConfirm:async()=>{this.removeNotification(a)}})),c&&c.isDefault===!1&&(c.iconClass=this.getNotificationIcon(c.type),this.alertNotifications.push(c))}for(const a of this.notifications)a.isDefault&&(a.iconClass=this.getNotificationIcon(a.type),this.alertNotifications.push(a));this.panelCtrl.editingThresholds=!0,this.panelCtrl.render()}checkFrequency(){if(this.frequencyWarning="",!!this.alert.frequency){if(!this.alert.frequency.match(/^\d+([dhms])$/)){this.frequencyWarning='Invalid frequency, has to be numeric followed by one of the following units: "d, h, m, s"';return}try{v.intervalToSeconds(this.alert.frequency)<this.alertingMinIntervalSecs&&(this.frequencyWarning="A minimum evaluation interval of "+this.alertingMinInterval+" have been configured in Grafana and will be used for this alert rule. Please contact the administrator to configure a lower interval.")}catch(e){this.frequencyWarning=e}}}graphThresholdChanged(e){for(const t of this.alert.conditions)if(t.type==="query"){t.evaluator.params[e.handleIndex]=e.threshold.value,this.evaluatorParamsChanged();break}}validateModel(){if(!this.alert)return;let e,t=null;const a=[];for(const r of this.alert.conditions){if(r.type!=="query")continue;for(const y of this.panel.targets)if(e||(e=y),r.query.params[0]===y.refId){t=y;break}if(!t)if(e)r.query.params[0]=e.refId,t=e;else{this.error="Could not find any metric queries";return}const c=t.datasource||this.panel.datasource;a.push(this.datasourceSrv.get(c).then((y=>C=>{if(C.meta.alerting){if(C.targetContainsTemplate&&C.targetContainsTemplate(y))return Promise.reject("Template variables are not supported in alert queries")}else return Promise.reject("The datasource does not support alerting queries");return Promise.resolve()})(t)))}Promise.all(a).then(()=>{this.error="",this.$scope.$apply()},r=>{this.error=r,this.$scope.$apply()})}buildConditionModel(e){const t={source:e,type:e.type};return t.queryPart=new m.kW(e.query,d.A.alertQueryDef),t.reducerPart=d.A.createReducerPart(e.reducer),t.evaluator=e.evaluator,t.operator=e.operator,t}handleQueryPartEvent(e,t){switch(t.name){case"action-remove-part":break;case"get-part-actions":return Promise.resolve([]);case"part-param-changed":this.validateModel();case"get-param-options":{const a=this.panel.targets.map(r=>this.uiSegmentSrv.newSegment({value:r.refId}));return Promise.resolve(a)}default:return Promise.resolve()}return Promise.resolve()}handleReducerPartEvent(e,t){switch(t.name){case"action":{e.source.reducer.type=t.action.value,e.reducerPart=d.A.createReducerPart(e.source.reducer),this.evaluatorParamsChanged();break}case"get-part-actions":{const a=[];for(const r of d.A.reducerTypes)r.value!==e.source.reducer.type&&a.push(r);return Promise.resolve(a)}}return Promise.resolve()}addCondition(e){const t=(0,n.X)();this.alert.conditions.push(t),this.conditionModels.push(this.buildConditionModel(t))}removeCondition(e){this.alert.conditions.splice(e,1),this.conditionModels.splice(e,1)}delete(){h.A.publish(new s.bY({title:"Delete Alert",text:"Are you sure you want to delete this alert rule?",text2:"You need to save dashboard for the delete to take effect",icon:"trash-alt",yesText:"Delete",onConfirm:()=>{delete this.panel.alert,this.alert=null,this.panel.thresholds=[],this.conditionModels=[],this.panelCtrl.alertState=null,this.panelCtrl.render()}}))}evaluatorParamsChanged(){u.X.alertToGraphThresholds(this.panel),this.panelCtrl.render()}evaluatorTypeChanged(e){switch(e.type){case"lt":case"gt":{e.params=[e.params[0]];break}case"within_range":case"outside_range":{e.params=[e.params[0],e.params[1]];break}case"no_value":e.params=[]}this.evaluatorParamsChanged()}clearHistory(){h.A.publish(new s.bY({title:"Delete Alert History",text:"Are you sure you want to remove all history & annotations for this alert?",icon:"trash-alt",yesText:"Yes",onConfirm:()=>{(0,A.F)(this.$scope)((0,T.AI)().post("/api/annotations/mass-delete",{dashboardId:this.panelCtrl.dashboard.id,panelId:this.panel.id}).then(()=>{this.alertHistory=[],this.panelCtrl.refresh()}))}}))}}M.$inject=["$scope","dashboardSrv","uiSegmentSrv","datasourceSrv"];function P(){"use strict";return{restrict:"E",scope:!0,templateUrl:"public/app/features/alerting/partials/alert_tab.html",controller:M}}p.Ay.directive("alertTab",P)},14333:(E,g,i)=>{i.d(g,{X:()=>v});var o=i(2913);const _=["percent_diff","percent_diff_abs"];class v{static alertToGraphThresholds(p){if(!p.alert||o.$W.unifiedAlertingEnabled)return!1;for(let h=0;h<p.alert.conditions.length;h++){const f=p.alert.conditions[h];if(f.type!=="query")continue;const m=f.evaluator,l=p.thresholds=[],s=_.indexOf(f.reducer?.type)===-1;switch(m.type){case"gt":{const n=m.params[0];l.push({value:n,op:"gt",visible:s});break}case"lt":{const n=m.params[0];l.push({value:n,op:"lt",visible:s});break}case"outside_range":{const n=m.params[0],u=m.params[1];n>u?(l.push({value:n,op:"gt",visible:s}),l.push({value:u,op:"lt",visible:s})):(l.push({value:n,op:"lt",visible:s}),l.push({value:u,op:"gt",visible:s}));break}case"within_range":{const n=m.params[0],u=m.params[1];n>u?(l.push({value:n,op:"lt",visible:s}),l.push({value:u,op:"gt",visible:s})):(l.push({value:n,op:"gt",visible:s}),l.push({value:u,op:"lt",visible:s}));break}}break}for(const h of p.thresholds)h.fill=p.options.alertThreshold,h.line=p.options.alertThreshold,h.colorMode="critical";return!0}}}}]);

//# sourceMappingURL=AlertTabCtrl.d3377d127a336a69beb5.js.map