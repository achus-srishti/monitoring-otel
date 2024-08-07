"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[84],{20027:(Oe,x)=>{var g;g={value:!0},x.xN=x.r0=void 0,x.r0={wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"},{open:"<",close:">"}],folding:{}};var k=["sum","avg","min","max","stddev","stdvar","count","topk","bottomk"],_=["json","logfmt","regexp","unpack","pattern"],N=["line_format","label_format"],R=["count_over_time","rate","bytes_over_time","bytes_rate","avg_over_time","sum_over_time","min_over_time","max_over_time","stdvar_over_time","stddev_over_time","quantile_over_time","first_over_time","last_over_time","absent_over_time"],Q=["by","without"],se="(".concat(Q.reduce(function(oe,ae){return"".concat(oe,"|").concat(ae)}),")"),s=["+","-","*","/","%","^","==","!=",">","<",">=","<=","|=","!=","|~","!~","and","or","unless","|"],q=k.concat(_).concat(N).concat(R).concat(Q);x.xN={ignoreCase:!1,defaultToken:"",tokenPostfix:".logql",keywords:q,operators:s,vectorMatching:se,symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/@vectorMatching\s*(?=\()/,"type","@clauses"],[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/(^#.*$)/,"comment"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"type","@default":"identifier"}}],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+(?:ms|[smhdwy])/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/\{\{(.*?)\}\}/,{token:"number"}],[/[^\\"]/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\{\{(.*?)\}\}/,{token:"number"}],[/[^\\`]/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}}},51639:(Oe,x,g)=>{g.r(x),g.d(x,{default:()=>at,defaultWordPattern:()=>rt});var k=g(32196),_=g(2543),N=g(96540),R=g(39554),Q=g(62938),se=g(13544),s=g(36195),q=g(20027),oe=g(40845),ae=g(85828);function xe(){const e=new Map;return e.set("expandSuggestionDocs",(!0).toString()),{onDidChangeValue:t=>{},onDidChangeTarget:t=>{},onWillSaveState:t=>{},get:(t,n,r)=>e.get(t)??r,getBoolean:(t,n,r)=>{const o=e.get(t);return o!==void 0?o==="true":r},getNumber:(t,n,r)=>{const o=e.get(t);return o!==void 0?parseInt(o,10):r},store:(t,n,r,o)=>{n==null?e.delete(t):e.set(t,n.toString())},remove:(t,n)=>{e.delete(t)},keys:(t,n)=>Array.from(e.keys()),logStorage:()=>{console.log("logStorage: not implemented")},migrate:()=>Promise.resolve(void 0),isNew:t=>!0,flush:t=>Promise.resolve(void 0)}}let Me={storageService:xe()};function _e(){return Me}var le=g(97535);class we{constructor(t,n={current:[]},r){this.languageProvider=t,this.historyRef=n,this.timeRange=r,this.queryToLabelKeysCache=new Map}buildSelector(t){return`{${t.map(r=>`${r.name}${r.op}"${(0,le.Qn)(r.value)}"`).join(",")}}`}getHistory(){return(0,_.chain)(this.historyRef.current).map(t=>t.query.expr).filter().uniq().value()}async getLabelNames(t=[]){if(t.length===0)return this.languageProvider.getLabelKeys();const n=await this.getSeriesLabels(t),r=Object.keys(n),o=new Set(t.map(i=>i.name));return r.filter(i=>!o.has(i))}async getLabelValues(t,n){return n.length===0?await this.languageProvider.fetchLabelValues(t,{timeRange:this.timeRange}):(await this.getSeriesLabels(n))[t]??[]}async getParserAndLabelKeys(t){const r=this.queryToLabelKeysCache.has(t)?this.queryToLabelKeysCache.get(t):null;if(r)return r;{if(this.queryToLabelKeysCache.size>=2){const f=this.queryToLabelKeysCache.keys().next().value;this.queryToLabelKeysCache.delete(f)}const o=await this.languageProvider.getParserAndLabelKeys(t,{timeRange:this.timeRange});return this.queryToLabelKeysCache.set(t,o),o}}async getSeriesLabels(t){return await this.languageProvider.fetchSeriesLabels(this.buildSelector(t),{timeRange:this.timeRange}).then(n=>n??{})}}class me extends Error{constructor(t){super(`Unexpected case in switch statement: ${JSON.stringify(t)}`)}}var $=g(56587),A=g(83657),I=g(54623),ie=g(71713);const Fe=[{type:"PATTERN",label:"{}",insertText:"{$0}",isSnippet:!0,triggerOnInsert:!0}],he=ie.dZ.map(e=>({type:"FUNCTION",label:e.label,insertText:`${e.insertText??""}($0)`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation})),ye=ie.RQ.map(e=>({type:"FUNCTION",label:e.label,insertText:`${e.insertText??""}({$0}[\\$__auto])`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation})),Ke=ie.fV.map(e=>({type:"FUNCTION",label:e.label,insertText:`${e.insertText??""}($0)`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation})),De=["$__auto","1m","5m","10m","30m","1h","1d"].map(e=>({type:"DURATION",label:e,insertText:e})),$e=[{type:"FUNCTION",label:"duration_seconds",documentation:"Will convert the label value in seconds from the go duration format (e.g 5m, 24s30ms).",insertText:"duration_seconds()"},{type:"FUNCTION",label:"duration",documentation:"Short version of duration_seconds().",insertText:"duration()"},{type:"FUNCTION",label:"bytes",documentation:"Will convert the label value to raw bytes applying the bytes unit (e.g. 5 MiB, 3k, 1G).",insertText:"bytes()"}],Ee=[{type:"FUNCTION",label:"--strict",documentation:"Strict parsing. The logfmt parser stops scanning the log line and returns early with an error when it encounters any poorly formatted key/value pair.",insertText:"--strict"},{type:"FUNCTION",label:"--keep-empty",documentation:"Retain standalone keys with empty value. The logfmt parser retains standalone keys (keys without a value) as labels with value set to empty string.",insertText:"--keep-empty"}],Ue=[{operator:"|=",documentation:(0,A.y6)(I.EF.LineContains),afterPipe:!0},{operator:"!=",documentation:(0,A.y6)(I.EF.LineContainsNot)},{operator:"|~",documentation:(0,A.y6)(I.EF.LineMatchesRegex),afterPipe:!0},{operator:"!~",documentation:(0,A.y6)(I.EF.LineMatchesRegexNot)}];function We(e){return Ue.filter(t=>!e||t.afterPipe).map(({operator:t,documentation:n})=>({type:"LINE_FILTER",label:`${t} ""`,insertText:`${e?t.replace("|",""):t} "$0"`,isSnippet:!0,documentation:n}))}function Le(e=""){const t=[];return t.push({type:"PIPE_OPERATION",label:"line_format",insertText:`${e}line_format "{{.$0}}"`,isSnippet:!0,documentation:(0,A.y6)(I.EF.LineFormat)}),t.push({type:"PIPE_OPERATION",label:"label_format",insertText:`${e}label_format`,isSnippet:!0,documentation:(0,A.y6)(I.EF.LabelFormat)}),t.push({type:"PIPE_OPERATION",label:"unwrap",insertText:`${e}unwrap`,documentation:(0,A.y6)(I.EF.Unwrap)}),t.push({type:"PIPE_OPERATION",label:"decolorize",insertText:`${e}decolorize`,documentation:(0,A.y6)(I.EF.Decolorize)}),t.push({type:"PIPE_OPERATION",label:"drop",insertText:`${e}drop`,documentation:(0,A.y6)(I.EF.Drop)}),t.push({type:"PIPE_OPERATION",label:"keep",insertText:`${e}keep`,documentation:(0,A.y6)(I.EF.Keep)}),t}async function Be(e){return(await e.getHistory()).map(n=>({type:"HISTORY",label:n,insertText:n}))}async function ke(e,t){return(await t.getLabelNames(e)).map(r=>({type:"LABEL_NAME",label:r,insertText:`${r}=`,triggerOnInsert:!0}))}async function j(e,t){const{extractedLabelKeys:n}=await t.getParserAndLabelKeys(e);return n.map(r=>({type:"LABEL_NAME",label:r,insertText:r,triggerOnInsert:!1}))}const ve=["json","logfmt","pattern","regexp","unpack"];async function Ce(e,t,n,r,o,i){const f=new Set(ve),h=[],C=o.some(L=>L==="level");if(t){const L=i?"":" (detected)";r?(f.delete("unpack"),h.push({type:"PARSER",label:`unpack${L}`,insertText:`${e}unpack`,documentation:(0,A.y6)(I.EF.Unpack)})):(f.delete("json"),h.push({type:"PARSER",label:`json${L}`,insertText:`${e}json`,documentation:C?"Use it to get log-levels in the histogram":(0,A.y6)(I.EF.Json)}))}if(n){f.delete("logfmt");const L=i?"":" (detected)";h.push({type:"PARSER",label:`logfmt${L}`,insertText:`${e}logfmt`,documentation:C?"Get detected levels in the histogram":(0,A.y6)(I.EF.Logfmt)})}return Array.from(f).sort().forEach(L=>{h.push({type:"PARSER",label:L,insertText:`${e}${L}`,documentation:(0,A.y6)(L)})}),h}async function Qe(e,t,n,r){let o=e;t&&(o=(0,_.trimEnd)(e,"| "));const{extractedLabelKeys:i,structuredMetadataKeys:f,hasJSON:h,hasLogfmt:C,hasPack:S}=await r.getParserAndLabelKeys(o),L=(0,$.MX)(o).queryWithParser,O=`${n?"":" "}${t?"":"| "}`,T=await Ce(O,h,C,S,i,L),W=Le(O),K=[...T,...W];return f.forEach(D=>{K.push({type:"LABEL_NAME",label:`${D} (detected)`,insertText:`${O}${D}`,documentation:`"${D}" was suggested based on structured metadata attached to your loglines.`})}),L&&i.forEach(D=>{K.push({type:"LABEL_NAME",label:`${D} (detected)`,insertText:`${O}${D}`,documentation:`"${D}" was suggested based on the content of your log lines for the label filter expression.`})}),L?[...K]:[...t&&n?[]:We(t),...K]}async function Ge(e,t,n,r,o,i){let f=[];n&&(e=(0,_.trimEnd)(e,", "));const{extractedLabelKeys:h,hasJSON:C,hasLogfmt:S,hasPack:L}=await i.getParserAndLabelKeys(e),O=Le("| ");if(!n&&!t&&(f=[...Ee]),!n&&r){const y=o.length>0?await Ce("| ",C,S,L,h,!0):[];f=[...f,...y,...O]}const T=h.filter(y=>!o.includes(y));let W="";o.length>0&&r&&(W=n?"":", ");const K=T.map(y=>({type:"LABEL_NAME",label:y,insertText:W+y,triggerOnInsert:!1}));return f=[...f,...K],f}async function je(e,t,n,r){return(await r.getLabelValues(e,n)).map(i=>({type:"LABEL_VALUE",label:i,insertText:t?(0,le.Qn)(i):`"${(0,le.Qn)(i)}"`}))}async function Ve(e,t){const{unwrapLabelKeys:n}=await t.getParserAndLabelKeys(e);return[...n.map(o=>({type:"LABEL_NAME",label:o,insertText:o,triggerOnInsert:!1})),...$e]}async function u(e,t){const{extractedLabelKeys:n}=await t.getParserAndLabelKeys(e);return[...n.map(o=>({type:"LABEL_NAME",label:o,insertText:o,triggerOnInsert:!1}))]}async function a(e,t){switch(e.type){case"EMPTY":case"AT_ROOT":return[...await Be(t),...Fe,...he,...Ke,...ye];case"IN_RANGE":return De;case"IN_GROUPING":return j(e.logQuery,t);case"IN_LABEL_SELECTOR_NO_LABEL_NAME":return ke(e.otherLabels,t);case"IN_LABEL_SELECTOR_WITH_LABEL_NAME":return je(e.labelName,e.betweenQuotes,e.otherLabels,t);case"AFTER_SELECTOR":return Qe(e.logQuery,e.afterPipe,e.hasSpace,t);case"AFTER_UNWRAP":return Ve(e.logQuery,t);case"IN_AGGREGATION":return[...ye,...he];case"AFTER_KEEP_AND_DROP":return u(e.logQuery,t);case"IN_LOGFMT":return Ge(e.logQuery,e.flags,e.trailingComma,e.trailingSpace,e.otherLabels,t);default:throw new me(e)}}function c(e,t){return e[t]}function d(e,t){let r=l(e,t);for(;r;){let o=l(r,t);if(o)r=o;else return r}return null}function l(e,t){let n=e;for(const[r,o]of t)if(n=c(n,r),n===null||n.type.id!==o)return null;return n}function p(e,t){return t.slice(e.from,e.to)}function b(e){const t=e.slice(1,e.length-1);if(e.startsWith('"')&&e.endsWith('"'))return t.replace(/\\"/gm,'"');if(e.startsWith("'")&&e.endsWith("'"))return t.replace(/\\'/gm,"'");if(e.startsWith("`")&&e.endsWith("`"))return t;throw new Error(`Invalid string literal: ${e}`)}function P(e,t){return e.every((n,r)=>n===t[r])}const m=0,z=[{paths:[[s.MD],[s.MD,s.sq],[s.sq],[m,s.sq,s.MD]],fun:X},{paths:[[s.K0],[s.h1],[m,s.xo,s.h1],[m,s.I4],[s.xo],[m,s.I4],[s.I4],[s.Tz]],fun:He},{paths:[[s.K0],[m,s.MD]],fun:E},{paths:[[s.Qf,s.g$]],fun:Ne},{paths:[[s.aU]],fun:te},{paths:[[s.xo]],fun:ne},{paths:[[m,s.g$],[m,s.sq,s.MD]],fun:Ne},{paths:[[m,s.Q6]],fun:M},{paths:[[m,s.xo]],fun:re},{paths:[[m,s.Nl,s.Yw,s.Rh]],fun:()=>({type:"IN_AGGREGATION"})},{paths:[[m,s.t3,s.AL],[s.t3,s.AL]],fun:w},{paths:[[m,s.HV],[s.HV]],fun:ce},{paths:[[m,s.i8],[m,s.LQ],[m,s.UP],[m,s.J3]],fun:de}],ue=new Map([["Eq","="],["Re","=~"],["Neq","!="],["Nre","!~"]]);function be(e){return ue.get(e.name)??null}function Z(e,t){if(e.type.id!==s.g$)return null;const n=l(e,[["firstChild",s.gw]]);if(n===null)return null;const r=n.nextSibling;if(r===null)return null;const o=be(r);if(o===null)return null;const i=l(e,[["lastChild",s.Qf]]);if(i===null)return null;const f=p(n,t),h=b(p(i,t));return{name:f,value:h,op:o}}function ee(e,t){if(e.type.id!==s.MD&&e.type.id!==s.sq)return[];let n=null;e?.parent?.type.id===s.MD?n=e:n=d(e,[["parent",s.sq]])??l(e,[["firstChild",s.sq]])??l(e,[["lastChild",s.sq]]);const r=[];for(;n!==null;){const o=l(n,[["lastChild",s.g$]]);if(o!==null){const i=Z(o,t);i!==null&&r.push(i)}n=l(n,[["firstChild",s.sq]])}return r.reverse(),r}function ce(e,t,n){return{type:"AFTER_UNWRAP",logQuery:(0,$.g5)(t,n).trim()}}function w(e,t,n){let r=null;return e.type.id===m?r=l(e,[["parent",s.t3],["parent",s.AL]]):e.type.id===s.t3&&(r=l(e,[["parent",s.AL]])),r?.parent?.type.id===s.UK||r?.parent?.type.id===s.xo?U(r.parent,t,n,!0):null}function te(e,t,n){const r=l(e,[["parent",s.Rh]]);if(r===null)return null;const o=r.getChild("MetricExpr");return o===null||l(o,[["firstChild",s.h1],["lastChild",s.xo],["firstChild",s.MD]])===null?null:{type:"IN_GROUPING",logQuery:(0,$.g5)(t,n).trim()}}function Ne(e,t,n){const r=!e.type.isError,o=l(e,[["parent",s.g$]]);if(o===null)return null;const i=l(o,[["firstChild",s.gw]]);if(i===null)return null;const f=p(i,t),h=l(o,[["parent",s.sq]]);if(h===null)return null;let C=h,S=null;for(;S===null;){const T=C.parent;if(T===null)return null;switch(T.type.id){case s.sq:C=T;continue;case s.MD:S=T;continue;default:return null}}const O=ee(S,t).filter(T=>T.name!==f);return{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",labelName:f,betweenQuotes:r,otherLabels:O}}function He(e,t,n){const r=s.K3.parse(t),o=t.substring(0,n).trimEnd().length,i=o<n?o:n,f=r.cursorAt(i),h=[s.c$,s.ov,s.Gn,s.I4];let C=!1;do{const{node:y}=f;if(h.includes(y.type.id)&&f.from<=i&&f.to>=i){C=!0;break}}while(f.next());if(!C)return null;const S=(0,$.QH)(t,[s.ov]).length>1,O=(0,$.QH)(t,[s.Gn]).map(y=>y.getChild(s.gw)).filter(y=>y!==null).map(y=>p(y,t)),T=(0,$.g5)(t,i).trim(),W=t.charAt(n-1)===" ",K=t.trimEnd().charAt(i-1)===",";return{type:"IN_LOGFMT",otherLabels:O,flags:S,trailingSpace:W,trailingComma:K,logQuery:T}}function E(e,t,n){const r=l(e,[["lastChild",s.GN],["lastChild",s.UK]]);return r!=null&&t.endsWith(" ")?U(r,t,n,!1):l(e,[["firstChild",m],["firstChild",s.gw]])!=null?{type:"AT_ROOT"}:null}function M(e,t,n){return{type:"IN_RANGE"}}function ne(e,t,n){const o=t.substring(0,n).trimEnd().endsWith("|");return U(e,t,n,o)}function re(e,t,n){const r=l(e,[["parent",s.xo]]);if(r===null)return null;const i=t.substring(0,n).trimEnd().endsWith("|");return U(r,t,n,i)}function U(e,t,n,r){const o=l(e,[["firstChild",s.MD]]);return!o||o.to>n?null:{type:"AFTER_SELECTOR",afterPipe:r,hasSpace:t.charAt(n-1)===" ",logQuery:(0,$.g5)(t,n).trim()}}function X(e,t,n){const r=l(e,[["firstChild",s.sq]]);if(r!==null&&!t.slice(r.from,n).trim().endsWith(","))return null;const o=e.type.id===m?l(e,[["parent",s.sq],["parent",s.MD]]):e;return o?{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",otherLabels:ee(o,t)}:null}function de(e,t,n){let r=(0,$.g5)(t,n).trim(),o=null,i=e.parent;for(;i!==null;){if(i.type.id===s.t3){o=i;break}i=i.parent}return o?.type.id===s.t3&&(r=r.slice(0,o.from)),{type:"AFTER_KEEP_AND_DROP",logQuery:r}}function Te(e,t){const n=e.trimEnd().length,r=n<t?n:t,o=s.K3.parse(e),i=o.cursorAt(r);do if(i.from===r&&i.to===r&&i.node.type.isError)return i;while(i.next());return o.cursorAt(r)}function G(e,t){if(e==="")return{type:"EMPTY"};const n=Te(e,t),r=n.node,o=[n.type.id];for(;n.parent();)o.push(n.type.id);for(let i of z)for(let f of i.paths)if(P(f,o)){const h=i.fun(r,e,t);if(h)return h}return null}const F=4;function V(){return{showWords:!1}}function Ae(e,t){switch(e){case"DURATION":return t.languages.CompletionItemKind.Unit;case"FUNCTION":return t.languages.CompletionItemKind.Variable;case"HISTORY":return t.languages.CompletionItemKind.Snippet;case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;case"PATTERN":return t.languages.CompletionItemKind.Constructor;case"PARSER":return t.languages.CompletionItemKind.Class;case"LINE_FILTER":return t.languages.CompletionItemKind.TypeParameter;case"PIPE_OPERATION":return t.languages.CompletionItemKind.Interface;default:throw new me(e)}}function ze(e,t){return{triggerCharacters:["{",",","[","(","=","~"," ",'"',"|"],provideCompletionItems:(r,o)=>{const i=r.getWordAtPosition(o),f=r.getWordUntilPosition(o),h={column:o.column,lineNumber:o.lineNumber},C=r.getOffsetAt(h),S=G(r.getValue(),C),L=Se(S,i,f,e,o);return(S!=null?a(S,t):Promise.resolve([])).then(T=>{const W=T.length.toString().length;return{suggestions:T.map((y,D)=>({kind:Ae(y.type,e),label:y.label,insertText:y.insertText,insertTextRules:y.isSnippet?F:void 0,detail:y.detail,documentation:y.documentation,sortText:D.toString().padStart(W,"0"),range:L,command:y.triggerOnInsert?{id:"editor.action.triggerSuggest",title:""}:void 0}))}})}}}const Se=(e,t,n,r,o)=>{if(e&&e?.type==="IN_LABEL_SELECTOR_WITH_LABEL_NAME"&&"betweenQuotes"in e&&e.betweenQuotes){const i=n?.word?.indexOf('"')??0,f=t?.word?.lastIndexOf('"')??0,h=t?.word.indexOf("="),C=t?.word.lastIndexOf("=");if(C===h&&i!==-1&&f!==-1&&C!==-1)return t!=null?r.Range.lift({startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:n.startColumn+i+1,endColumn:n.startColumn+f}):r.Range.fromPositions(o)}return e&&e.type==="IN_LABEL_SELECTOR_WITH_LABEL_NAME"?t!=null?r.Range.lift({startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:n.endColumn,endColumn:n.endColumn}):r.Range.fromPositions(o):t!=null?r.Range.lift({startLineNumber:o.lineNumber,endLineNumber:o.lineNumber,startColumn:t.startColumn,endColumn:t.endColumn}):r.Range.fromPositions(o)};var Ie=g(20065);const tt={codeLens:!1,contextmenu:!1,fixedOverflowWidgets:!0,folding:!1,fontSize:14,lineDecorationsWidth:8,lineNumbers:"off",minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:4,bottom:5},renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0,alwaysConsumeMouseWheel:!1},scrollBeyondLastLine:!1,suggest:V(),suggestFontSize:12,wordWrap:"on"},nt=2,ge="logql";let Xe=!1;const rt=/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g;function st(e){Xe===!1&&(Xe=!0,e.languages.register({id:ge}),e.languages.setMonarchTokensProvider(ge,q.xN),e.languages.setLanguageConfiguration(ge,{...q.r0,wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()+\[{\]}\\|;:',.<>\/?\s]+)/g}))}const ot=(e,t)=>({container:(0,k.css)`
      border-radius: ${e.shape.radius.default};
      border: 1px solid ${e.components.input.borderColor};
      width: 100%;
      .monaco-editor .suggest-widget {
        min-width: 50%;
      }
    `,placeholder:(0,k.css)`
      ::after {
        content: '${t}';
        font-family: ${e.typography.fontFamilyMonospace};
        opacity: 0.3;
      }
    `}),at=({history:e,onBlur:t,onRunQuery:n,initialValue:r,datasource:o,placeholder:i,onChange:f,timeRange:h})=>{const C=(0,Q.A)(),S=(0,N.useRef)(_e()),L=(0,N.useRef)(null),O=(0,R.A)(o.languageProvider),T=(0,R.A)(e),W=(0,R.A)(n),K=(0,R.A)(t),y=(0,N.useRef)(null),D=(0,oe.$j)(),Ye=ot(D,i);(0,N.useEffect)(()=>()=>{y.current?.()},[]);const lt=(v,B)=>{const Re=[{range:new v.Range(1,1,1,1),options:{className:Ye.placeholder,isWholeLine:!0}}];let Pe=[];const fe=()=>{const pe=B.getModel();if(!pe)return;const qe=pe.getValueLength()===0?Re:[];Pe=pe.deltaDecorations(Pe,qe)};fe(),B.onDidChangeModelContent(fe)},it=(0,_.debounce)(async v=>{f(v)},1e3);return N.createElement("div",{"data-testid":se.Tp.components.QueryField.container,className:Ye.container,ref:L},N.createElement(ae.m,{overrideServices:S.current,options:tt,language:ge,value:r,beforeMount:v=>{st(v)},onMount:(v,B)=>{const Re=v.createContextKey("isEditorFocused"+C,!1);v.onDidBlurEditorWidget(()=>{Re.set(!1),K.current(v.getValue())}),v.onDidChangeModelContent(Y=>{const H=v.getModel();if(!H)return;const J=H.getValue(),ut=((0,Ie.B)(J,o.interpolateString(J,Ie.a),H.getLinesContent(),s.K3)||[]).map(({error:et,...ct})=>({message:`${et?`Error parsing "${et}"`:"Parse error"}. The query appears to be incorrect and could fail to be executed.`,severity:B.MarkerSeverity.Error,...ct}));it(J),B.editor.setModelMarkers(H,"owner",ut)});const Pe=new we(O.current,T,h),fe=ze(B,Pe),pe={...fe,provideCompletionItems:(Y,H,J,Ze)=>v.getModel()?.id!==Y.id?{suggestions:[]}:fe.provideCompletionItems(Y,H,J,Ze)},{dispose:qe}=B.languages.registerCompletionItemProvider(ge,pe);y.current=qe;const Je=()=>{const Y=L.current;if(Y!==null){const H=v.getContentHeight();Y.style.height=`${H+nt}px`;const J=Y.clientWidth;v.layout({width:J,height:H})}};v.onDidContentSizeChange(Je),Je(),v.addCommand(B.KeyMod.Shift|B.KeyCode.Enter,()=>{W.current(v.getValue())},"isEditorFocused"+C),v.onDidFocusEditorText(()=>{Re.set(!0),v.getValue().trim()===""&&v.trigger("","editor.action.triggerSuggest",{})}),lt(B,v)}}))}},61226:(Oe,x,g)=>{g.r(x),g.d(x,{default:()=>Ve,defaultWordPattern:()=>Ce});var k=g(32196),_=g(2543),N=g(96540),R=g(39554),Q=g(62938),se=g(13544),s=g(36195),q=g(20027),oe=g(40845),ae=g(85828);function xe(){const u=new Map;return u.set("expandSuggestionDocs",(!0).toString()),{onDidChangeValue:a=>{},onDidChangeTarget:a=>{},onWillSaveState:a=>{},get:(a,c,d)=>u.get(a)??d,getBoolean:(a,c,d)=>{const l=u.get(a);return l!==void 0?l==="true":d},getNumber:(a,c,d)=>{const l=u.get(a);return l!==void 0?parseInt(l,10):d},store:(a,c,d,l)=>{c==null?u.delete(a):u.set(a,c.toString())},remove:(a,c)=>{u.delete(a)},keys:(a,c)=>Array.from(u.keys()),logStorage:()=>{console.log("logStorage: not implemented")},migrate:()=>Promise.resolve(void 0),isNew:a=>!0,flush:a=>Promise.resolve(void 0)}}let Me={storageService:xe()};function _e(){return Me}class le extends Error{constructor(a){super(`Unexpected case in switch statement: ${JSON.stringify(a)}`)}}const we=(u,a)=>({type:"EMPTY"}),me=["$__auto","1m","5m","10m","30m","1h","1d"].map(u=>({type:"DURATION",label:u,insertText:u})),$=async(u,a)=>me,A=4;function I(){return{showWords:!1}}function ie(u,a){switch(u){case"DURATION":return a.languages.CompletionItemKind.Unit;case"FUNCTION":return a.languages.CompletionItemKind.Variable;case"HISTORY":return a.languages.CompletionItemKind.Snippet;case"LABEL_NAME":return a.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return a.languages.CompletionItemKind.EnumMember;case"PATTERN":return a.languages.CompletionItemKind.Constructor;case"PARSER":return a.languages.CompletionItemKind.Class;case"LINE_FILTER":return a.languages.CompletionItemKind.TypeParameter;case"PIPE_OPERATION":return a.languages.CompletionItemKind.Interface;default:throw new le(u)}}function Fe(u,a){return{triggerCharacters:["{",",","[","(","=","~"," ",'"',"|"],provideCompletionItems:(d,l)=>{const p=d.getWordAtPosition(l),b=d.getWordUntilPosition(l),P={column:l.column,lineNumber:l.lineNumber},m=d.getOffsetAt(P),z=we(d.getValue(),m),ue=he(z,p,b,u,l);return(z!=null?$(z,a):Promise.resolve([])).then(Z=>{const ee=Z.length.toString().length;return{suggestions:Z.map((w,te)=>({kind:ie(w.type,u),label:w.label,insertText:w.insertText,insertTextRules:w.isSnippet?A:void 0,detail:w.detail,documentation:w.documentation,sortText:te.toString().padStart(ee,"0"),range:ue,command:w.triggerOnInsert?{id:"editor.action.triggerSuggest",title:""}:void 0}))}})}}}const he=(u,a,c,d,l)=>{if(u&&u?.type==="IN_LABEL_SELECTOR_WITH_LABEL_NAME"&&"betweenQuotes"in u&&u.betweenQuotes){const p=c?.word?.indexOf('"')??0,b=a?.word?.lastIndexOf('"')??0,P=a?.word.indexOf("="),m=a?.word.lastIndexOf("=");if(m===P&&p!==-1&&b!==-1&&m!==-1)return a!=null?d.Range.lift({startLineNumber:l.lineNumber,endLineNumber:l.lineNumber,startColumn:c.startColumn+p+1,endColumn:c.startColumn+b}):d.Range.fromPositions(l)}return u&&u.type==="IN_LABEL_SELECTOR_WITH_LABEL_NAME"?a!=null?d.Range.lift({startLineNumber:l.lineNumber,endLineNumber:l.lineNumber,startColumn:c.endColumn,endColumn:c.endColumn}):d.Range.fromPositions(l):a!=null?d.Range.lift({startLineNumber:l.lineNumber,endLineNumber:l.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn}):d.Range.fromPositions(l)};function ye(u){return u.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')}class Ke{constructor(a,c={current:[]}){this.languageProvider=a,this.historyRef=c,this.queryToLabelKeysCache=new Map}buildSelector(a){return`{${a.map(d=>`${d.name}${d.op}"${ye(d.value)}"`).join(",")}}`}getHistory(){return(0,_.chain)(this.historyRef.current).map(a=>a.query.expr).filter().uniq().value()}async getLabelNames(a=[]){if(a.length===0)return this.languageProvider.getLabelKeys();const c=await this.getSeriesLabels(a),d=Object.keys(c),l=new Set(a.map(p=>p.name));return d.filter(p=>!l.has(p))}async getLabelValues(a,c){return c.length===0?await this.languageProvider.fetchLabelValues(a):(await this.getSeriesLabels(c))[a]??[]}async getParserAndLabelKeys(a){const d=this.queryToLabelKeysCache.has(a)?this.queryToLabelKeysCache.get(a):null;if(d)return d;{if(this.queryToLabelKeysCache.size>=2){const b=this.queryToLabelKeysCache.keys().next().value;this.queryToLabelKeysCache.delete(b)}const l=await this.languageProvider.getParserAndLabelKeys(a);return this.queryToLabelKeysCache.set(a,l),l}}async getSeriesLabels(a){return await this.languageProvider.fetchSeriesLabels(this.buildSelector(a)).then(c=>c??{})}}const De=0;function $e(u,a,c,d){if(!u)return!1;const l=Ee(a,d);if(!l.length)return!1;let p=l;if(u!==a){const b=Ee(u,d);p=l.flatMap(P=>b.filter(m=>P.text===m.text)||P)}return p.map(b=>Ue(u,c,b)).filter(We)}function Ee(u,a){const c=[];return a.parse(u).iterate({enter:l=>{if(l.type.id===De){const p=l.node;c.push({node:p,text:u.substring(p.from,p.to)})}}}),c}function Ue(u,a,c){if(a.length===1){const p=c.node.from===c.node.to,b=p&&c.node.parent?c.node.parent:c.node,P=p?u.substring(b.from,b.to):c.text;return{startLineNumber:1,startColumn:b.from+1,endLineNumber:1,endColumn:b.to+1,error:P}}let d=0,l=0;for(let p=0;p<a.length;p++){if(l=d+a[p].length,c.node.from>l){d+=a[p].length+1;continue}return{startLineNumber:p+1,startColumn:c.node.from-d+1,endLineNumber:p+1,endColumn:c.node.to-d+1,error:c.text}}return null}function We(u){return u!==null}const Le={__interval:{text:"1s",value:"1s"},__rate_interval:{text:"1s",value:"1s"},__auto:{text:"1s",value:"1s"},__interval_ms:{text:"1000",value:1e3},__range_ms:{text:"1000",value:1e3},__range_s:{text:"1",value:1},__range:{text:"1s",value:"1s"}},Be={codeLens:!1,contextmenu:!1,fixedOverflowWidgets:!0,folding:!1,fontSize:14,lineDecorationsWidth:8,lineNumbers:"off",minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:4,bottom:5},renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0,alwaysConsumeMouseWheel:!1},scrollBeyondLastLine:!1,suggest:I(),suggestFontSize:12,wordWrap:"on"},ke=2,j="logql";let ve=!1;const Ce=/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g;function Qe(u){ve===!1&&(ve=!0,u.languages.register({id:j}),u.languages.setMonarchTokensProvider(j,q.xN),u.languages.setLanguageConfiguration(j,{...q.r0,wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()+\[{\]}\\|;:',.<>\/?\s]+)/g}))}const Ge=(u,a)=>({container:(0,k.css)`
      border-radius: ${u.shape.radius.default};
      border: 1px solid ${u.components.input.borderColor};
      width: 100%;
      .monaco-editor .suggest-widget {
        min-width: 50%;
      }
    `,placeholder:(0,k.css)`
      ::after {
        content: '${a}';
        font-family: ${u.typography.fontFamilyMonospace};
        opacity: 0.3;
      }
    `}),Ve=({history:u,onBlur:a,onRunQuery:c,initialValue:d,datasource:l,placeholder:p,onChange:b})=>{const P=(0,Q.A)(),m=(0,N.useRef)(_e()),z=(0,N.useRef)(null),ue=(0,R.A)(l.languageProvider),be=(0,R.A)(u),Z=(0,R.A)(c),ee=(0,R.A)(a),ce=(0,N.useRef)(null),w=(0,oe.$j)(),te=Ge(w,p);(0,N.useEffect)(()=>()=>{ce.current?.()},[]);const Ne=(E,M)=>{const ne=[{range:new E.Range(1,1,1,1),options:{className:te.placeholder,isWholeLine:!0}}];let re=[];const U=()=>{const X=M.getModel();if(!X)return;const de=X.getValueLength()===0?ne:[];re=X.deltaDecorations(re,de)};U(),M.onDidChangeModelContent(U)},He=(0,_.debounce)(async E=>{b(E)},1e3);return N.createElement("div",{"aria-label":se.Tp.components.QueryField.container,className:te.container,ref:z},N.createElement(ae.m,{overrideServices:m.current,options:Be,language:j,value:d,beforeMount:E=>{Qe(E)},onMount:(E,M)=>{const ne=E.createContextKey("isEditorFocused"+P,!1);E.onDidBlurEditorWidget(()=>{ne.set(!1),ee.current(E.getValue())}),E.onDidChangeModelContent(G=>{const F=E.getModel();if(!F)return;const V=F.getValue(),ze=($e(V,l.interpolateString(V,Le),F.getLinesContent(),s.K3)||[]).map(({error:Se,...Ie})=>({message:`${Se?`Error parsing "${Se}"`:"Parse error"}. The query appears to be incorrect and could fail to be executed.`,severity:M.MarkerSeverity.Error,...Ie}));He(V),M.editor.setModelMarkers(F,"owner",ze)});const re=new Ke(ue.current,be),U=Fe(M,re),X={...U,provideCompletionItems:(G,F,V,Ae)=>E.getModel()?.id!==G.id?{suggestions:[]}:U.provideCompletionItems(G,F,V,Ae)},{dispose:de}=M.languages.registerCompletionItemProvider(j,X);ce.current=de;const Te=()=>{const G=z.current;if(G!==null){const F=E.getContentHeight();G.style.height=`${F+ke}px`;const V=G.clientWidth;E.layout({width:V,height:F})}};E.onDidContentSizeChange(Te),Te(),E.addCommand(M.KeyMod.Shift|M.KeyCode.Enter,()=>{Z.current(E.getValue())},"isEditorFocused"+P),E.onDidFocusEditorText(()=>{ne.set(!0),E.getValue().trim()===""&&E.trigger("","editor.action.triggerSuggest",{})}),Ne(M,E)}}))}},39554:(Oe,x,g)=>{g.d(x,{A:()=>N});var k=g(96540),_=function(R){var Q=(0,k.useRef)(R);return Q.current=R,Q};const N=_}}]);

//# sourceMappingURL=84.a6f8658e6a033d642231.js.map