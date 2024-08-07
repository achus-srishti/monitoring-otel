"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1216],{42952:(j,y,f)=>{f.d(y,{T:()=>P,f:()=>v});var v=(b=>(b.Code="code",b.Builder="builder",b))(v||{});const P="Binary operations"},97535:(j,y,f)=>{f.d(y,{Bb:()=>K,Cs:()=>S,Ed:()=>V,N4:()=>A,P7:()=>C,Qn:()=>x,WV:()=>t,qv:()=>c,sM:()=>G,tY:()=>W,tt:()=>U});var v=f(2543),P=f.n(v),b=f(73372),R=f(43269);function $(u){return E(u/1e3)}function E(u){return Math.floor(u/60)}function t(u,g){if(u&&g){const m=$(u.from.valueOf())===$(g.from.valueOf()),_=$(u.to.valueOf())===$(g.to.valueOf());return!(m&&_)}return!1}const F=/[*+?()|\\.\[\]{}^$]/g;function N(u){return u.replace(F,"\\$&")}function x(u){return u.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')}function c(u){return u.replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}function S(u){return x(N(u))}function K(u,g){return A(g)?S(u):x(u)}function A(u){return!!(u&&(u.includes("=~")||u.includes("!~")))}function W(u){const g=["b","kib","Kib","kb","KB","mib","Mib","mb","MB","gib","Gib","gb","GB","tib","Tib","tb","TB","pib","Pib","pb","PB","eib","Eib","eb","EB"],m=new RegExp(`^(?:-?\\d+(?:\\.\\d+)?)(?:${g.join("|")})$`);return!!u.match(m)}function V(u,g,m){if(!g||m===void 0)return null;const _=g.fields.find(p=>p.name==="labelTypes")?.values[m];if(!_)return null;switch(_[u]){case"I":return R.HD.Indexed;case"S":return R.HD.StructuredMetadata;case"P":return R.HD.Parsed;default:return null}}const B={[b.D_.Equal]:"=",[b.D_.NotEqual]:"!=",[b.D_.EqualRegEx]:"=~",[b.D_.NotEqualRegEx]:"!~"},G=(0,v.invert)(B);function U(u){const g=u.labelMatchers.map(m=>{const _=B[m.operator];return _?`${m.name}${_}"${m.value}"`:""}).filter(m=>m!=="").join(", ");return g?`{${g}}`:""}function C(u){const g={};u.forEach(_=>{Object.keys(_).forEach(p=>{g[p]||(g[p]=new Set),g[p].has(_[p])||g[p].add(_[p])})});const m={};return D(Object.keys(g)).forEach(_=>{m[_]=D(Array.from(g[_]))}),{values:m,keys:Object.keys(m)}}const T=1e4;function D(u){return u.slice(0,T)}},11216:(j,y,f)=>{f.d(y,{af:()=>T,VR:()=>D,G3:()=>q,jC:()=>L,fu:()=>S,yD:()=>K,iZ:()=>w,UF:()=>u,OS:()=>m,hh:()=>B,sn:()=>V,EP:()=>G});var v=f(2543),P=f(55127),b=f.n(P),R=f(97535),$=f(71713),E=f(96540),t=f(88323);const F=({onChange:e,index:n,operationId:r,value:a,query:s,datasource:i,queryModeller:o})=>{const[l,d]=(0,E.useState)({});return E.createElement(t.l6,{inputId:m(r,n),autoFocus:a==="",openMenuOnFocus:!0,onOpenMenu:async()=>{d({isLoading:!0});const h=await N(s,i,o);d({options:h,isLoading:void 0})},isLoading:l.isLoading,allowCustomValue:!0,noOptionsMessage:"No labels found",loadingMessage:"Loading labels",options:l.options,value:x(a),onChange:h=>e(n,h.value)})};async function N(e,n,r){let a=e.labels;const s=r.renderLabels(a),i=await n.languageProvider.fetchSeriesLabels(s);return Object.keys(i).map(o=>({label:o,value:o}))}const x=e=>({label:e?.toString(),value:e});var c=f(54623);function S(e,n){const r=[g()],a=["$__auto"];let s;return e===c.EF.QuantileOverTime&&(a.push("0.95"),r.push({name:"Quantile",type:"number"})),n&&(r.push({name:"By label",type:"string",restParam:!0,optional:!0}),s=_(`__${e}_by`)),{id:e,name:M(e),params:r,defaultParams:a,alternativesKey:"range function",category:c.Ln.RangeFunctions,orderRank:c.h5.RangeVectorFunction,renderer:W,addOperationHandler:T,paramChangedHandler:s,explainHandler:(i,o)=>{let l=$.AW.find(d=>d.insertText===i.id)?.documentation??"";return i.params[0]==="$__auto"?`${l} \`$__auto\` is a variable that will be replaced with the [value of step](https://grafana.com/docs/grafana/next/datasources/loki/query-editor/#options) for range queries and with the value of the selected time range (calculated to - from) for instant queries.`:`${l} The [range vector](https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation) is set to \`${i.params[0]}\`.`}}}function K(e){const n=S(e,!0),r=n.params.slice(0,-1);return[n,{id:`__${e}_by`,name:`${M(e)} by`,params:[...r,{name:"Label",type:"string",restParam:!0,optional:!0,editor:F}],defaultParams:[...n.defaultParams,""],alternativesKey:"range function with grouping",category:c.Ln.RangeFunctions,renderer:A(e,"by"),paramChangedHandler:H(e),explainHandler:p(e,"by"),addOperationHandler:T,hideFromList:!0},{id:`__${e}_without`,name:`${M(e)} without`,params:[...r,{name:"Label",type:"string",restParam:!0,optional:!0,editor:F}],defaultParams:[...n.defaultParams,""],alternativesKey:"range function with grouping",category:c.Ln.RangeFunctions,renderer:A(e,"without"),paramChangedHandler:H(e),explainHandler:p(e,"without"),addOperationHandler:T,hideFromList:!0}]}function A(e,n){return function(a,s,i){const o=s.params.findIndex(h=>h.restParam),l=a.params.slice(0,o),d=a.params.slice(o);return l.length===2&&e===c.EF.QuantileOverTime?`${e}(${l[1]}, ${i} [${l[0]}]) ${n} (${d.join(", ")})`:`${e}(${i} [${l[0]}]) ${n} (${d.join(", ")})`}}function W(e,n,r){const a=e.params??[],s=a[0]??"$__auto";if(a.length===2&&e.id===c.EF.QuantileOverTime){const i=a[1];return`${e.id}(${i}, ${r} [${s}])`}return`${e.id}(${r} [${a[0]??"$__auto"}])`}function V(e,n,r){return["<","<=",">",">="].includes(String(e.params[1]))?`${r} | ${e.params[0]} ${e.params[1]} ${e.params[2]}`:`${r} | ${e.params[0]} ${e.params[1]} \`${e.params[2]}\``}function B(e,n){if(!e)return!1;const r=e.params[1].toString().startsWith("!");return n.filter(i=>i.id===c.EF.LabelFilter&&i.params[0]===e.params[0]&&i.params[2]===e.params[2]).some(i=>!!(r&&i.params[1].toString().startsWith("!")===!1||r===!1&&i.params[1].toString().startsWith("!")))}function G(e,n,r){switch(e.id){case c.EF.Logfmt:const[a=!1,s=!1,...i]=e.params;return`${r} | logfmt${a?" --strict":""}${s?" --keep-empty":""} ${i.filter(o=>o).join(", ")}`.trim();case c.EF.Json:return`${r} | json ${e.params.filter(o=>o).join(", ")}`.trim();case c.EF.Drop:return`${r} | drop ${e.params.filter(o=>o).join(", ")}`.trim();case c.EF.Keep:return`${r} | keep ${e.params.filter(o=>o).join(", ")}`.trim();default:return`${r} | ${e.id}`}}function U(e){return e.category===c.Ln.RangeFunctions}function C(e,n,r){const a=e.findIndex(s=>{const i=n.getOperationDefinition(s.id);return i?r(i):!1});return a===-1?e.length:a}function T(e,n,r){const a={id:e.id,params:e.defaultParams},s=[...n.operations],i=s.find(o=>{const l=r.getOperationDefinition(o.id);return l?U(l):!1});switch(e.category){case c.Ln.Aggregations:case c.Ln.Functions:if(!i){const l=C(s,r,d=>d.category===c.Ln.Functions);s.splice(l,0,{id:c.EF.Rate,params:["$__auto"]})}s.push(a);break;case c.Ln.RangeFunctions:if(i){const l=s.indexOf(i);s[l]=a;break}default:const o=C(s,r,l=>(e.orderRank??100)<(l.orderRank??100));s.splice(o,0,a);break}return{...n,operations:s}}function D(e,n){return{...n,binaryQueries:[...n.binaryQueries??[],{operator:"/",query:n}]}}function u(e,n){return function(a,s,i){const o=a.params.some(h=>typeof h=="string"&&h.includes("`")),l=o?'"':"`";let d;return o?d=a.params.map(h=>typeof h=="string"?(0,R.Qn)(h):h):d=a.params,n?`${i} ${e} ${l}(?i)${d.join(`${l} or ${l}(?i)`)}${l}`:`${i} ${e} ${l}${d.join(`${l} or ${l}`)}${l}`}}function g(){return{name:"Range",type:"string",options:["$__auto","1m","5m","10m","1h","24h"]}}function m(e,n){return`operations.${e}.param.${n}`}function _(e){return function(r,a,s){return a.params.length===s.params.length?{...a,id:e}:a}}function p(e,n){return function(a){const s=a.params.map(o=>`\`${o}\``).join(" and "),i=b()("label",a.params.length);switch(n){case"by":return`Calculates ${e} over dimensions while preserving ${i} ${s}.`;case"without":return`Calculates ${e} over the dimensions ${s}. All other labels are preserved.`;default:return`Calculates ${e} over the dimensions.`}}}function H(e){return function(r,a,s){return a.params.length<s.params.length?{...a,id:e}:a}}function M(e){return(0,v.capitalize)(e.replace(/_/g," "))}function w(e,n){const r={id:e.id,params:e.defaultParams};return{...n,operations:[...n.operations,r]}}function q(e,n={}){return[{id:e,name:M(e),params:[{name:"By label",type:"string",restParam:!0,optional:!0}],defaultParams:[],alternativesKey:"plain aggregations",category:c.Ln.Aggregations,renderer:Q,paramChangedHandler:_(`__${e}_by`),explainHandler:p(e,""),addOperationHandler:w,...n},{id:`__${e}_by`,name:`${M(e)} by`,params:[{name:"Label",type:"string",restParam:!0,optional:!0,editor:F}],defaultParams:[""],alternativesKey:"aggregations by",category:c.Ln.Aggregations,renderer:Z(e),paramChangedHandler:H(e),explainHandler:p(e,"by"),addOperationHandler:w,hideFromList:!0,...n},{id:`__${e}_without`,name:`${M(e)} without`,params:[{name:"Label",type:"string",restParam:!0,optional:!0,editor:F}],defaultParams:[""],alternativesKey:"aggregations by",category:c.Ln.Aggregations,renderer:Y(e),paramChangedHandler:H(e),explainHandler:p(e,"without"),addOperationHandler:w,hideFromList:!0,...n}]}function Y(e){return function(r,a,s){return`${e} without(${r.params.join(", ")}) (${s})`}}function Q(e,n,r){const a=J(e,n,r),s=e.id+"(";return r&&a.push(r),s+a.join(", ")+")"}function J(e,n,r){return(e.params??[]).map((a,s)=>n.params[s].type==="string"?'"'+a+'"':a)}function Z(e){return function(r,a,s){return`${e} by(${r.params.join(", ")}) (${s})`}}function L(e,n,r={}){const a=q(e,r);return a[0].params.unshift(...n.params),a[1].params.unshift(...n.params),a[2].params.unshift(...n.params),a[0].defaultParams=n.defaultParams,a[1].defaultParams=[...n.defaultParams,""],a[2].defaultParams=[...n.defaultParams,""],a[1].renderer=z(e),a[2].renderer=z(e),a}function z(e){return function(r,a,s){const i=a.params.findIndex(d=>d.restParam),o=r.params.slice(0,i),l=r.params.slice(i);return`${e} by(${l.join(", ")}) (${o.map((d,h)=>a.params[h].type==="string"?`"${d}"`:d).join(", ")}, ${s})`}}},54623:(j,y,f)=>{f.d(y,{EF:()=>R,IQ:()=>P,Ln:()=>b,NS:()=>E,h5:()=>$});var v=f(42952),P=(t=>(t.Log="log",t.Metric="metric",t))(P||{}),b=(t=>(t.Aggregations="Aggregations",t.RangeFunctions="Range functions",t.Functions="Functions",t.Formats="Formats",t.LineFilters="Line filters",t.LabelFilters="Label filters",t[t.BinaryOps=v.T]="BinaryOps",t))(b||{}),R=(t=>(t.Json="json",t.Logfmt="logfmt",t.Regexp="regexp",t.Pattern="pattern",t.Unpack="unpack",t.LineFormat="line_format",t.LabelFormat="label_format",t.Decolorize="decolorize",t.Drop="drop",t.Keep="keep",t.Rate="rate",t.RateCounter="rate_counter",t.CountOverTime="count_over_time",t.SumOverTime="sum_over_time",t.AvgOverTime="avg_over_time",t.MaxOverTime="max_over_time",t.MinOverTime="min_over_time",t.FirstOverTime="first_over_time",t.LastOverTime="last_over_time",t.StdvarOverTime="stdvar_over_time",t.StddevOverTime="stddev_over_time",t.QuantileOverTime="quantile_over_time",t.BytesRate="bytes_rate",t.BytesOverTime="bytes_over_time",t.AbsentOverTime="absent_over_time",t.Sum="sum",t.Avg="avg",t.Min="min",t.Max="max",t.Stddev="stddev",t.Stdvar="stdvar",t.Count="count",t.TopK="topk",t.BottomK="bottomk",t.LineContains="__line_contains",t.LineContainsNot="__line_contains_not",t.LineContainsCaseInsensitive="__line_contains_case_insensitive",t.LineContainsNotCaseInsensitive="__line_contains_not_case_insensitive",t.LineMatchesRegex="__line_matches_regex",t.LineMatchesRegexNot="__line_matches_regex_not",t.LineFilterIpMatches="__line_filter_ip_matches",t.LabelFilter="__label_filter",t.LabelFilterNoErrors="__label_filter_no_errors",t.LabelFilterIpMatches="__label_filter_ip_marches",t.Unwrap="unwrap",t.SumBy="__sum_by",t.SumWithout="__sum_without",t.Addition="__addition",t.Subtraction="__subtraction",t.MultiplyBy="__multiply_by",t.DivideBy="__divide_by",t.Modulo="__modulo",t.Exponent="__exponent",t.NestedQuery="__nested_query",t.EqualTo="__equal_to",t.NotEqualTo="__not_equal_to",t.GreaterThan="__greater_than",t.LessThan="__less_than",t.GreaterOrEqual="__greater_or_equal",t.LessOrEqual="__less_or_equal",t))(R||{}),$=(t=>(t[t.LineFilters=1]="LineFilters",t[t.Parsers=2]="Parsers",t[t.PipeOperations=3]="PipeOperations",t[t.Unwrap=4]="Unwrap",t[t.NoErrors=5]="NoErrors",t[t.RangeVectorFunction=5]="RangeVectorFunction",t[t.Last=6]="Last",t))($||{});const E={equals:{label:"=",value:"=",description:"Equals",isMultiValue:!1},doesNotEqual:{label:"!=",value:"!=",description:"Does not equal",isMultiValue:!1},matchesRegex:{label:"=~",value:"=~",description:"Matches regex",isMultiValue:!0},doesNotMatchRegex:{label:"!~",value:"!~",description:"Does not match regex",isMultiValue:!0},greaterThan:{label:">",value:">",description:"Greater than",isMultiValue:!1},greaterThanOrEqual:{label:">=",value:">=",description:"Greater than or equal to",isMultiValue:!1},lessThan:{label:"<",value:"<",description:"Less than",isMultiValue:!1},lessThanOrEqual:{label:"<=",value:"<=",description:"Less than or equal to",isMultiValue:!1},contains:{label:"|=",value:"|=",description:"Contains",isMultiValue:!1},doesNotContain:{label:"!=",value:"!=",description:"Does not contain",isMultiValue:!1}}}}]);

//# sourceMappingURL=1216.ddb58ad09e0c4e3f4079.js.map