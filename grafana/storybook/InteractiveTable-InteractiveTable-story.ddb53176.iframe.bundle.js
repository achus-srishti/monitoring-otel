"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9916],{"../../node_modules/@mdx-js/react/lib/index.js":function(V,E,o){o.d(E,{BN:function(){return c},RP:function(){return g},gz:function(){return D},xA:function(){return T}});var t=o("../../node_modules/react/index.js");const c=t.createContext({});function D(i){return u;function u(p){const h=g(p.components);return t.createElement(i,{...p,allComponents:h})}}function g(i){const u=t.useContext(c);return t.useMemo(()=>typeof i=="function"?i(u):{...u,...i},[u,i])}const N={};function T({components:i,children:u,disableParentContext:p}){let h;return p?h=typeof i=="function"?i({}):i||N:h=g(i),t.createElement(c.Provider,{value:h},u)}},"./src/components/InteractiveTable/InteractiveTable.story.tsx":function(V,E,o){o.r(E),o.d(E,{Basic:function(){return te},WithControlledSort:function(){return se},WithCustomCell:function(){return re},WithHeaderTooltips:function(){return ie},WithPagination:function(){return oe},WithRowExpansion:function(){return ne},default:function(){return ca}});var t=o("../../node_modules/react/index.js"),c=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),D=o("../../node_modules/lodash/lodash.js"),g=o("../../node_modules/react-table/index.js"),N=o("../grafana-data/src/types/data.ts"),T=o("./src/themes/ThemeContext.tsx"),i=o("./src/components/Icon/Icon.tsx"),u=o("./src/components/Pagination/Pagination.tsx"),p=o("./src/components/Tooltip/Tooltip.tsx"),h=o("./src/components/IconButton/IconButton.tsx"),y=Object.defineProperty,C=Object.defineProperties,P=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,M=(a,e,r)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,W=(a,e)=>{for(var r in e||(e={}))j.call(e,r)&&M(a,r,e[r]);if(b)for(var r of b(e))x.call(e,r)&&M(a,r,e[r]);return a},z=(a,e)=>C(a,P(e));const w=(0,c.AH)({display:"flex",alignItems:"center",height:"100%"});function m({row:a,__rowID:e}){return t.createElement("div",{className:w},t.createElement(h.K,z(W({tooltip:"toggle row expanded","aria-controls":e,name:a.isExpanded?"angle-down":"angle-right","aria-expanded":a.isExpanded},a.getToggleRowExpandedProps()),{size:"lg"})))}try{m.displayName="ExpanderCell",m.__docgenInfo={description:"",displayName:"ExpanderCell",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"readonly K[]"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"Partial<TableState<K>>"}},stateReducer:{defaultValue:null,description:"",name:"stateReducer",required:!1,type:{name:"((newState: TableState<K>, action: ActionType, previousState: TableState<K>, instance?: TableInstance<K>) => TableState<...>)"}},useControlledState:{defaultValue:null,description:"",name:"useControlledState",required:!1,type:{name:"((state: TableState<K>, meta: MetaBase<K>) => TableState<K>)"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"Partial<Column<K>>"}},getSubRows:{defaultValue:null,description:"",name:"getSubRows",required:!1,type:{name:"((originalRow: K, relativeIndex: number) => K[])"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"((originalRow: K, relativeIndex: number, parent?: Row<K>) => string)"}},autoResetHiddenColumns:{defaultValue:null,description:"",name:"autoResetHiddenColumns",required:!1,type:{name:"boolean"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnInstance<K>"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Row<K>"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"Cell<K, void>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/ExpanderCell.tsx#ExpanderCell"]={docgenInfo:m.__docgenInfo,name:"ExpanderCell",path:"src/components/InteractiveTable/ExpanderCell.tsx#ExpanderCell"})}catch{}var n=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(a,e,r)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,O=(a,e)=>{for(var r in e||(e={}))d.call(e,r)&&f(a,r,e[r]);if(s)for(var r of s(e))v.call(e,r)&&f(a,r,e[r]);return a};const A="__expander";function B(a){return[{id:A,Cell:m,disableSortBy:!0,width:0},...a.map(e=>O({id:e.id,accessor:e.id,Header:e.header||(()=>null),sortType:e.sortType||"alphanumeric",disableSortBy:!e.sortType,width:e.disableGrow?0:void 0,visible:e.visible},e.cell&&{Cell:e.cell}))]}var I=Object.defineProperty,G=Object.defineProperties,ae=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ve=(a,e,r)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,q=(a,e)=>{for(var r in e||(e={}))J.call(e,r)&&ve(a,r,e[r]);if($)for(var r of $(e))pe.call(e,r)&&ve(a,r,e[r]);return a},xe=(a,e)=>G(a,ae(e)),fe=(a,e)=>{var r={};for(var _ in a)J.call(a,_)&&e.indexOf(_)<0&&(r[_]=a[_]);if(a!=null&&$)for(var _ of $(a))e.indexOf(_)<0&&pe.call(a,_)&&(r[_]=a[_]);return r};const Xe=a=>{const e=a.colors.emphasize(a.colors.background.primary,.03);return{container:(0,c.AH)({display:"flex",gap:a.spacing(2),flexDirection:"column",width:"100%",overflowX:"auto"}),table:(0,c.AH)({borderRadius:a.shape.radius.default,width:"100%",td:{padding:a.spacing(1)},"td, th":{minWidth:a.spacing(3)}}),disableGrow:(0,c.AH)({width:0}),header:(0,c.AH)({borderBottom:`1px solid ${a.colors.border.weak}`,"&, & > button":{position:"relative",whiteSpace:"nowrap",padding:a.spacing(1)},"& > button":{"&:after":{content:'"\\00a0"'},width:"100%",height:"100%",background:"none",border:"none",paddingRight:a.spacing(2.5),textAlign:"left",fontWeight:a.typography.fontWeightMedium}}),row:(0,c.AH)({label:"row",borderBottom:`1px solid ${a.colors.border.weak}`,"&:hover":{backgroundColor:e},"&:last-child":{borderBottom:0}}),expandedRow:(0,c.AH)({label:"expanded-row-content",borderBottom:"none"}),expandedContentRow:(0,c.AH)({label:"expanded-row-content",td:{borderBottom:`1px solid ${a.colors.border.weak}`,position:"relative",padding:a.spacing(2,2,2,5),"&:before":{content:'""',position:"absolute",width:"1px",top:0,left:"16px",bottom:a.spacing(2),background:a.colors.border.medium}}}),sortableHeader:(0,c.AH)({"&&":{padding:0}})}};function K({className:a,columns:e,data:r,getRowId:_,headerTooltips:Q,pageSize:k=0,renderExpandedRow:X,fetchData:Y}){const L=(0,T.of)(Xe),ee=(0,t.useMemo)(()=>B(e),[e]),ce=$e(),ge=(0,t.useCallback)(S=>`${ce}-${S.id}`.replace(/\s/g,""),[ce]),Fe=[g.useSortBy,g.useExpanded],da=r.length>k,de=k>0&&da;de&&Fe.push(g.usePagination);const U=(0,g.useTable)({columns:ee,data:r,autoResetExpanded:!1,autoResetSortBy:!1,disableMultiSort:!0,manualSortBy:!!Y,getRowId:_,initialState:{hiddenColumns:[!X&&A,...ee.filter(S=>!(!S.visible||S.visible(r))).map(S=>S.id).filter(N.zz)].filter(N.zz)}},...Fe),{getTableProps:ua,getTableBodyProps:ma,headerGroups:pa,prepareRow:va}=U,{sortBy:Ge}=U.state;return(0,t.useEffect)(()=>{Y&&Y({sortBy:Ge})},[Ge,Y]),(0,t.useEffect)(()=>{de&&U.setPageSize(k)},[de,k,U.setPageSize,U]),t.createElement("div",{className:L.container},t.createElement("table",xe(q({},ua()),{className:(0,c.cx)(L.table,a)}),t.createElement("thead",null,pa.map(S=>{const ue=S.getHeaderGroupProps(),{key:_e}=ue,he=fe(ue,["key"]);return t.createElement("tr",q({key:_e},he),S.headers.map(F=>{const me=F.getHeaderProps(),{key:be}=me,ye=fe(me,["key"]),Te=Q?.[F.id];return t.createElement("th",q(q({key:be,className:(0,c.cx)(L.header,{[L.disableGrow]:F.width===0,[L.sortableHeader]:F.canSort})},ye),F.isSorted&&{"aria-sort":F.isSortedDesc?"descending":"ascending"}),t.createElement(Ye,{column:F,headerTooltip:Te}))}))})),t.createElement("tbody",q({},ma()),(de?U.page:U.rows).map(S=>{va(S);const ue=S.getRowProps(),{key:_e}=ue,he=fe(ue,["key"]),F=ge(S),me=S.isExpanded;return t.createElement(t.Fragment,{key:_e},t.createElement("tr",xe(q({},he),{className:(0,c.cx)(L.row,me&&L.expandedRow)}),S.cells.map(be=>{const ye=be.getCellProps(),{key:Te}=ye,fa=fe(ye,["key"]);return t.createElement("td",q({key:Te},fa),be.render("Cell",{__rowID:F}))})),me&&X&&t.createElement("tr",xe(q({},he),{id:F,className:L.expandedContentRow}),t.createElement("td",{colSpan:S.cells.length},X(S.original))))}))),de&&t.createElement("span",null,t.createElement(u.d,{currentPage:U.state.pageIndex+1,numberOfPages:U.pageOptions.length,onNavigate:S=>U.gotoPage(S-1)})))}const $e=()=>(0,t.useMemo)(()=>(0,D.uniqueId)("InteractiveTable"),[]),qe=a=>({sortIcon:(0,c.AH)({position:"absolute",top:a.spacing(1)}),headerTooltipIcon:(0,c.AH)({marginLeft:a.spacing(.5)})});function Ye({column:{canSort:a,render:e,isSorted:r,isSortedDesc:_,getSortByToggleProps:Q},headerTooltip:k}){const X=(0,T.of)(qe),{onClick:Y}=Q(),L=t.createElement(t.Fragment,null,e("Header"),k&&t.createElement(p.m,{theme:"info-alt",content:k.content,placement:"top-end"},t.createElement(i.I,{className:X.headerTooltipIcon,name:k.iconName||"info-circle","data-testid":"header-tooltip-icon"})),r&&t.createElement("span",{"aria-hidden":"true",className:X.sortIcon},t.createElement(i.I,{name:_?"angle-down":"angle-up"})));return a?t.createElement("button",{type:"button",onClick:Y},L):L}try{K.displayName="InteractiveTable",K.__docgenInfo={description:"",displayName:"InteractiveTable",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"Table's columns definition. Must be memoized.",name:"columns",required:!0,type:{name:"Column<TableData>[]"}},data:{defaultValue:null,description:"The data to display in the table. Must be memoized.",name:"data",required:!0,type:{name:"TableData[]"}},getRowId:{defaultValue:null,description:"Must return a unique id for each row",name:"getRowId",required:!0,type:{name:"((originalRow: TableData, relativeIndex: number, parent?: Row<TableData> | undefined) => string) | undefined"}},headerTooltips:{defaultValue:null,description:"Optional tooltips for the table headers. The key must match the column id.",name:"headerTooltips",required:!1,type:{name:"Record<string, InteractiveTableHeaderTooltip>"}},pageSize:{defaultValue:{value:"0"},description:"Number of rows per page. A value of zero disables pagination. Defaults to 0.",name:"pageSize",required:!1,type:{name:"number"}},renderExpandedRow:{defaultValue:null,description:"Render function for the expanded row. if not provided, the tables rows will not be expandable.",name:"renderExpandedRow",required:!1,type:{name:"((row: TableData) => ReactNode)"}},fetchData:{defaultValue:null,description:`A custom function to fetch data when the table is sorted. If not provided, the table will be sorted client-side.
It's important for this function to have a stable identity, e.g. being wrapped into useCallback to prevent unnecessary
re-renders of the table.`,name:"fetchData",required:!1,type:{name:"FetchDataFunc<TableData>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/InteractiveTable.tsx#InteractiveTable"]={docgenInfo:K.__docgenInfo,name:"InteractiveTable",path:"src/components/InteractiveTable/InteractiveTable.tsx#InteractiveTable"})}catch{}var Je=o("./src/components/Button/Button.tsx"),l=o("../../node_modules/react/jsx-runtime.js"),we=o("../../node_modules/@mdx-js/react/lib/index.js"),Z=o("../../node_modules/@storybook/blocks/dist/index.mjs"),Ze=o("./src/components/Badge/Badge.tsx");function Ee(a){const e=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",h4:"h4",code:"code",h5:"h5",pre:"pre",h2:"h2"},(0,we.RP)(),a.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Z.W8,{title:"MDX|InteractiveTable",component:K}),`
`,(0,l.jsx)(e.h1,{id:"interactivetable",children:"InteractiveTable"}),`
`,(0,l.jsx)(Ze.E,{text:"Alpha",icon:"rocket",color:"blue",tooltip:"This component is still experimental."}),`
`,(0,l.jsx)(e.p,{children:`The InteractiveTable is used to display and select data efficiently.
It allows for the display and modification of detailed information.
With additional functionality it allows for batch editing, as needed by your feature's users.`}),`
`,(0,l.jsxs)(e.p,{children:["It is a wrapper around ",(0,l.jsx)(e.a,{href:"https://react-table-v7.tanstack.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Table"}),", for more information, refer to the ",(0,l.jsx)(e.a,{href:"https://react-table.tanstack.com/docs/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"official documentation"}),"."]}),`
`,(0,l.jsx)(e.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,l.jsx)(e.p,{children:"The InteractiveTable can be used to allow users to perform administrative tasks workflows."}),`
`,(0,l.jsx)(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,l.jsx)(e.p,{children:`Avoid using the InteractiveTable where mobile or responsiveness may be a requirement.
Consider an alternative pattern where the user is presented with a summary list and can click/tap to an individual page for each row in that list.`}),`
`,(0,l.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,l.jsx)(Z.ov,{of:K}),`
`,(0,l.jsxs)(e.h4,{id:"about-columns-and-data-props",children:["About ",(0,l.jsx)(e.code,{children:"columns"})," and ",(0,l.jsx)(e.code,{children:"data"})," Props"]}),`
`,(0,l.jsxs)(e.p,{children:["To avoid unnecessary rerenders, ",(0,l.jsx)(e.code,{children:"columns"})," and ",(0,l.jsx)(e.code,{children:"data"})," must be memoized."]}),`
`,(0,l.jsxs)(e.p,{children:["Columns are rendered in the same order defined in the ",(0,l.jsx)(e.code,{children:"columns"}),` prop.
Each Cell's content is automatically rendered by matching the `,(0,l.jsx)(e.code,{children:"id"})," of the column to the key of each object in the ",(0,l.jsx)(e.code,{children:"data"})," array prop."]}),`
`,(0,l.jsx)(e.h5,{id:"example",children:"Example"}),`
`,(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  projectName: string;
  repository: string;
}

const columns = useMemo<Array<Column<TableData>>>(
  () => [
    id: 'projectName'
    header: "Project Name"
  ],
  [
    id: 'repository',
    header: "Repository"
  ],
  []
);

const data = useMemo<Array<TableData>>(
  () => [
    {
      projectName: 'Grafana',
      repository: 'https://github.com/grafana/grafana',
   }
  ],
  [
    {
      projectName: 'Loki';
      repository: 'https://github.com/grafana/loki';
    }
  ],
  []
);
`})}),`
`,(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),`
`,(0,l.jsx)(e.h3,{id:"with-row-expansion",children:"With row expansion"}),`
`,(0,l.jsx)(e.p,{children:`Individual rows can be expanded to display additional details or reconfigure properties previously defined when the row was created.
The expanded row area should be used to unclutter the primary presentation of data, carefully consider what the user needs to know at first glance and what can be hidden behind the Row Expander button.`}),`
`,(0,l.jsx)(e.p,{children:"In general, data-types that are consistent across all dataset are in the primary table, variances are pushed to the expanded section for each individual row."}),`
`,(0,l.jsx)(Z.gG,{id:"experimental-interactivetable--with-row-expansion"}),`
`,(0,l.jsxs)(e.p,{children:["Row expansion is enabled whenever the ",(0,l.jsx)(e.code,{children:"renderExpanded"})," prop is provided. The ",(0,l.jsx)(e.code,{children:"renderExpanded"})," function is called with the row's data and should return a ReactNode."]}),`
`,(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  datasource: string;
  repo: string;
  description: string;
}

const tableData: TableData[] = [
  //...
];

const columns: Array<Column<TableData>> = [
  //...
];

const ExpandedCell = ({ description }: TableData) => {
  return <p>{description}</p>;
};

export const MyComponent = () => {
  return (
    <InteractiveTable
      columns={columns}
      data={tableData}
      getRowId={(r) => r.datasource}
      renderExpandedRow={ExpandedCell}
    />
  );
};
`})}),`
`,(0,l.jsx)(e.h3,{id:"custom-cell-rendering",children:"Custom Cell Rendering"}),`
`,(0,l.jsxs)(e.p,{children:["Individual cells can be rendered using custom content dy defining a ",(0,l.jsx)(e.code,{children:"cell"})," property on the column definition."]}),`
`,(0,l.jsx)(Z.gG,{id:"experimental-interactivetable--with-custom-cell"}),`
`,(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  datasource: string;
  repo: string;
}

const RepoCell = ({
  row: {
    original: { repo },
  },
}: CellProps<WithCustomCellData, void>) => {
  return (
    <LinkButton href={repo} size="sm" icon="external-link-alt">
      Open on GitHub
    </LinkButton>
  );
};

const tableData: WithCustomCellData[] = [
  {
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus',
  },
  {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki',
  },
  {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo',
  },
];

const columns: Array<Column<WithCustomCellData>> = [
  { id: 'datasource', header: 'Data Source' },
  { id: 'repo', header: 'Repo', cell: RepoCell },
];

export const MyComponent = () => {
  return <InteractiveTable columns={columns} data={tableData} getRowId={(r) => r.datasource} />;
};
`})}),`
`,(0,l.jsx)(e.h3,{id:"with-pagination",children:"With pagination"}),`
`,(0,l.jsxs)(e.p,{children:["The table can be rendered with pagination controls by passing in the ",(0,l.jsx)(e.code,{children:"pageSize"}),` property. All data must be provided as
only client side pagination is supported.`]}),`
`,(0,l.jsx)(Z.gG,{id:"experimental-interactivetable--with-pagination"}),`
`,(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const MyComponent = () => {
  const pageableData: WithPaginationData[] = [
    { id: '48a3926a-e82c-4c26-b959-3a5f473e186e', firstName: 'Brynne', lastName: 'Denisevich', car: 'Cougar', age: 47 },
    {
      id: 'cf281390-adbf-4407-8cf3-a52e012f63e6',
      firstName: 'Aldridge',
      lastName: 'Shirer',
      car: 'Viper RT/10',
      age: 74,
    },
    // ...
    {
      id: 'b9b0b559-acc1-4bd8-b052-160ecf3e4f68',
      firstName: 'Ermanno',
      lastName: 'Sinott',
      car: 'Thunderbird',
      age: 26,
    },
  ];
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name' },
    { id: 'lastName', header: 'Last name' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age', sortType: 'number' },
  ];
  return <InteractiveTable columns={columns} data={pageableData} getRowId={(r) => r.id} pageSize={15} />;
};
`})}),`
`,(0,l.jsx)(e.h3,{id:"with-header-tooltips",children:"With header tooltips"}),`
`,(0,l.jsx)(e.p,{children:"It may be useful to render a tooltip on the header of a column to provide additional information about the data in that column."}),`
`,(0,l.jsx)(Z.gG,{id:"experimental-interactivetable--with-header-tooltips"}),`
`,(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const MyComponent = () => {
  const pageableData: WithPaginationData[] = [
    { id: '48a3926a-e82c-4c26-b959-3a5f473e186e', firstName: 'Brynne', lastName: 'Denisevich', car: 'Cougar', age: 47 },
    {
      id: 'cf281390-adbf-4407-8cf3-a52e012f63e6',
      firstName: 'Aldridge',
      lastName: 'Shirer',
      car: 'Viper RT/10',
      age: 74,
    },
    // ...
    {
      id: 'b9b0b559-acc1-4bd8-b052-160ecf3e4f68',
      firstName: 'Ermanno',
      lastName: 'Sinott',
      car: 'Thunderbird',
      age: 26,
    },
  ];
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name' },
    { id: 'lastName', header: 'Last name' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age', sortType: 'number' },
  ];

  const headerToolTips = {
    age: { content: 'The number of years since the person was born' },
    lastName: {
      content: () => {
        return (
          <>
            <h4>Here is an h4</h4>
            <div>Some content</div>
            <div>Some more content</div>
          </>
        );
      },
      iconName: 'plus-square',
    },
  };
  return (
    <InteractiveTable columns={columns} data={pageableData} getRowId={(r) => r.id} headerToolTips={headerToolTips} />
  );
};
`})}),`
`,(0,l.jsx)(e.h3,{id:"with-controlled-sorting",children:"With controlled sorting"}),`
`,(0,l.jsxs)(e.p,{children:["The default sorting can be changed to controlled sorting by passing in the ",(0,l.jsx)(e.code,{children:"fetchData"})," function, which is called whenever the sorting changes and should return the sorted data. This is useful when the sorting is done server side. It is important to memoize the ",(0,l.jsx)(e.code,{children:"fetchData"})," function to prevent unnecessary rerenders and the possibility of an infinite render loop."]}),`
`,(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const WithControlledSort: StoryFn<typeof InteractiveTable> = (args) => {
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name', sortType: 'string' },
    { id: 'lastName', header: 'Last name', sortType: 'string' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age' },
  ];
  const [data, setData] = useState(pageableData);

  // In production the function will most likely make an API call to fetch the sorted data
  const fetchData = useCallback(({ sortBy }: FetchDataArgs<WithPaginationData>) => {
    if (!sortBy?.length) {
      return setData(pageableData);
    }

    setTimeout(() => {
      const newData = [...pageableData];
      newData.sort((a, b) => {
        const sort = sortBy[0];
        const aData = a[sort.id as keyof Omit<WithPaginationData, 'age'>];
        const bData = b[sort.id as keyof Omit<WithPaginationData, 'age'>];
        if (sort.desc) {
          return bData.localeCompare(aData);
        }
        return aData.localeCompare(bData);
      });
      setData(newData);
    }, 300);
  }, []);

  return <InteractiveTable columns={columns} data={data} getRowId={(r) => r.id} pageSize={15} fetchData={fetchData} />;
};
`})})]})}function Qe(a={}){const{wrapper:e}=Object.assign({},(0,we.RP)(),a.components);return e?(0,l.jsx)(e,Object.assign({},a,{children:(0,l.jsx)(Ee,a)})):Ee(a)}var ea=Qe,aa=Object.defineProperty,ta=Object.defineProperties,na=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,ra=Object.prototype.hasOwnProperty,la=Object.prototype.propertyIsEnumerable,Ie=(a,e,r)=>e in a?aa(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,R=(a,e)=>{for(var r in e||(e={}))ra.call(e,r)&&Ie(a,r,e[r]);if(Ne)for(var r of Ne(e))la.call(e,r)&&Ie(a,r,e[r]);return a},H=(a,e)=>ta(a,na(e)),Ce,De,Pe,Oe,Se,Re,je,Ae,Be,ke,Me,We,Le,ze,Ke,He,Ve,Ue;const oa={title:"Experimental/InteractiveTable",component:K,parameters:{docs:{page:ea},controls:{exclude:["className","renderExpandedRow","getRowId","fetchData"]}},args:{},argTypes:{}},te=a=>{const e=(0,t.useMemo)(()=>[{id:"header2",header:"With missing values",sortType:"number",disableGrow:!0},{id:"noheader",sortType:"number"}],[]),r=(0,t.useMemo)(()=>[{header1:"a",header2:1},{header1:"b",noheader:"This column doesn't have an header"},{header1:"c",noheader:"But it's still sortable"}],[]);return t.createElement(K,{columns:e,data:r,getRowId:_=>_.header1})},ia=({description:a})=>t.createElement("p",null,a),ne=a=>{const e=[{datasource:"Prometheus",repo:"https://github.com/prometheus/prometheus",description:"Open source time series database & alerting."},{datasource:"Loki",repo:"https://github.com/grafana/loki",description:"Like Prometheus but for logs. OSS logging solution from Grafana Labs."},{datasource:"Tempo",repo:"https://github.com/grafana/tempo",description:"High volume, minimal dependency trace storage. OSS tracing solution from Grafana Labs."}],r=[{id:"datasource",header:"Data Source"},{id:"repo",header:"Repo"}];return t.createElement(K,{columns:r,data:e,getRowId:_=>_.datasource,renderExpandedRow:ia})},sa=({row:{original:{repo:a}}})=>t.createElement(Je.z9,{href:a,size:"sm",icon:"external-link-alt"},"Open on GithHub"),re=a=>{const e=[{datasource:"Prometheus",repo:"https://github.com/prometheus/prometheus"},{datasource:"Loki",repo:"https://github.com/grafana/loki"},{datasource:"Tempo",repo:"https://github.com/grafana/tempo"}],r=[{id:"datasource",header:"Data Source"},{id:"repo",header:"Repo",cell:sa}];return t.createElement(K,{columns:r,data:e,getRowId:_=>_.datasource})},le=[{id:"48a3926a-e82c-4c26-b959-3a5f473e186e",firstName:"Brynne",lastName:"Denisevich",car:"Cougar",age:47},{id:"cf281390-adbf-4407-8cf3-a52e012f63e6",firstName:"Aldridge",lastName:"Shirer",car:"Viper RT/10",age:74},{id:"be5736f5-7015-4668-a03d-44b56f2b012c",firstName:"Sonni",lastName:"Hinrich",car:"Ramcharger",age:75},{id:"fdbe3559-c68a-4f2f-b579-48ef02642628",firstName:"Hanson",lastName:"Giraudeau",car:"X5",age:67},{id:"7d0ee01a-7ac5-4e0a-9c73-e864d10c0152",firstName:"Whitman",lastName:"Seabridge",car:"TSX",age:99},{id:"177c2287-b7cb-4b5f-8976-56ee993bed61",firstName:"Aleda",lastName:"Friman",car:"X5",age:44},{id:"87c21e60-c2f4-4a01-b2af-a6d22c196e25",firstName:"Cullen",lastName:"Kobpac",car:"Montero",age:28},{id:"dd89f32d-2ef4-4c35-8e23-a8b2219e3a69",firstName:"Fitz",lastName:"Butterwick",car:"Fox",age:70},{id:"cc1b4de7-8ec5-49bd-93bc-bee9fa1ccf37",firstName:"Jordon",lastName:"Harrington",car:"Elantra",age:39},{id:"34badca2-895f-4dff-bd34-74c1edd5f309",firstName:"Ad",lastName:"Beare",car:"Freestyle",age:58},{id:"8676e97d-b19f-4a98-bbb4-a48c3673c216",firstName:"Tally",lastName:"Prestie",car:"Montero Sport",age:91},{id:"12ea99c6-ccd9-4313-af92-df9141b3d4bd",firstName:"Wendel",lastName:"Chasles",car:"Corvette",age:89},{id:"a153ad38-d9b7-4437-a8ac-c1198f0060ef",firstName:"Lester",lastName:"Klewer",car:"Xterra",age:21},{id:"ead42cd5-dcd9-4886-879a-fce2eacb4c2b",firstName:"Ferd",lastName:"Pasterfield",car:"Tiburon",age:1},{id:"97410315-a0a5-4488-8c91-ba7ff640dd9b",firstName:"Alphonse",lastName:"Espinola",car:"Laser",age:30},{id:"e4d93eab-ca85-47cc-9867-06aeb29951e3",firstName:"Dorry",lastName:"Attew",car:"Tahoe",age:90},{id:"f0047d6f-f517-4f9d-99c2-ce15dcd6a78a",firstName:"Zed",lastName:"McMinn",car:"745",age:96},{id:"5ac3fac4-7caa-4f8e-8fde-115c4a0eca85",firstName:"Fredericka",lastName:"Hains",car:"A6",age:39},{id:"03ffcc41-4a03-46f5-a161-431d331293dd",firstName:"Syd",lastName:"Brixey",car:"Camry Hybrid",age:70},{id:"7086f360-f19d-4b0c-9bce-48b2784f200a",firstName:"Casey",lastName:"Margerrison",car:"NV3500",age:38},{id:"8375ab44-0c61-4987-8154-02d1b2fd12a7",firstName:"Sallyann",lastName:"Northleigh",car:"Tiburon",age:51},{id:"3af1e7cc-92c9-4356-85eb-bdcecbdffcda",firstName:"Yance",lastName:"Nani",car:"F350",age:21},{id:"46cf82f7-d9be-4a1d-b7cc-fc15133353dc",firstName:"Judas",lastName:"Riach",car:"RSX",age:31},{id:"0d10f9cd-78b9-4584-bc01-a35bcae0a14a",firstName:"Mikkel",lastName:"Dellenbrok",car:"VUE",age:53},{id:"1a78e628-6b8b-4d6a-b391-bbfa650b8024",firstName:"Son",lastName:"Vaudin",car:"Sunbird",age:47},{id:"d1349bf6-6dd1-4aed-9788-84e8b642ad63",firstName:"Emilio",lastName:"Liddington",car:"F250",age:2},{id:"14a3a8e8-15d7-469e-87c6-85181e22b3b8",firstName:"Devin",lastName:"Meadley",car:"XT",age:61},{id:"47cccba7-9f9b-44f5-985c-c2e226b2c9e4",firstName:"Harriott",lastName:"Seres",car:"LeSabre",age:11},{id:"e668a9b1-1dcd-4b5d-9d4e-479dc08695d6",firstName:"Elvin",lastName:"Diable",car:"90",age:69},{id:"addf8ee9-934c-4e81-83e8-20f50bbff028",firstName:"Rey",lastName:"Scotford",car:"H1",age:71},{id:"f22dbd3f-8419-4a1c-b542-23c3842cb59b",firstName:"King",lastName:"Catonne",car:"Suburban 2500",age:91},{id:"c85b7547-3654-41f0-94d6-becc832b81fa",firstName:"Barbabas",lastName:"Romeril",car:"Sorento",age:5},{id:"8d83b0eb-635d-452e-9f85-f19216207ad1",firstName:"Hadley",lastName:"Bartoletti",car:"Seville",age:37},{id:"9bdb532a-c747-4288-b2e9-e3f2dc7e0a15",firstName:"Willie",lastName:"Dunkerley",car:"Envoy",age:34},{id:"6b4413dd-1f77-4504-86ee-1ea5b90c6279",firstName:"Annamarie",lastName:"Burras",car:"Elantra",age:12},{id:"f17a5f2a-92a9-48a9-a05c-a3c44c66adb7",firstName:"Rebecca",lastName:"Thomason",car:"Elantra",age:6},{id:"85f7d4d2-3ae6-42ab-88dd-d4e810ebb76c",firstName:"Tatum",lastName:"Monte",car:"Achieva",age:53},{id:"3d374982-6cd9-4e6e-abf1-7de38eee4b68",firstName:"Tallie",lastName:"Goodlet",car:"Integra",age:81},{id:"ccded1ef-f648-4970-ae6e-882ba4d789fb",firstName:"Catrina",lastName:"Thunderman",car:"RX",age:91},{id:"3198513a-b05f-4d0d-8187-214f82f88531",firstName:"Aldric",lastName:"Awton",car:"Swift",age:78},{id:"35c3d0ce-52ea-4f30-8c17-b1e6b9878aa3",firstName:"Garry",lastName:"Ineson",car:"Discovery",age:25},{id:"c5ae799a-983f-4933-8a4d-cda754acedc0",firstName:"Alica",lastName:"Rubinfeld",car:"FX",age:20},{id:"cd9e5476-1ebb-46f0-926e-cee522e8d332",firstName:"Wenonah",lastName:"Blakey",car:"Cooper",age:96},{id:"17449829-4a8f-433c-8cb0-a869f153ea34",firstName:"Bevon",lastName:"Cushe",car:"GTI",age:23},{id:"d20d41a3-d9fe-492d-91df-51a962c515b9",firstName:"Marybeth",lastName:"Gauson",car:"MR2",age:53},{id:"cd046551-5df7-44b5-88b3-d1654a838214",firstName:"Kimball",lastName:"Bellhanger",car:"Ram 1500",age:56},{id:"a8114bdf-911d-410f-b90b-4c8a9c302743",firstName:"Cindelyn",lastName:"Beamont",car:"Monte Carlo",age:99},{id:"e31709ba-bf65-42d1-8c5c-60d461bc3e75",firstName:"Elfreda",lastName:"Riddles",car:"Montero",age:59},{id:"cd67179c-0c49-486d-baa9-8e956b362c2e",firstName:"Chickie",lastName:"Picheford",car:"Legend",age:56},{id:"b9b0b559-acc1-4bd8-b052-160ecf3e4f68",firstName:"Ermanno",lastName:"Sinott",car:"Thunderbird",age:26}],oe=a=>{const e=[{id:"firstName",header:"First name"},{id:"lastName",header:"Last name"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age",sortType:"number"}];return t.createElement(K,{columns:e,data:le,getRowId:r=>r.id,pageSize:15})},ie=a=>{const e=[{id:"firstName",header:"First name"},{id:"lastName",header:"Last name"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age",sortType:"number"}],r={age:{content:"The number of years since the person was born"},lastName:{content:()=>t.createElement(t.Fragment,null,t.createElement("h4",null,"Here is an h4"),t.createElement("div",null,"Some content"),t.createElement("div",null,"Some more content")),iconName:"plus-square"}};return t.createElement(K,{columns:e,data:le.slice(0,10),getRowId:_=>_.id,headerTooltips:r})},se=a=>{const e=[{id:"firstName",header:"First name",sortType:"string"},{id:"lastName",header:"Last name",sortType:"string"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age"}],[r,_]=(0,t.useState)(le),Q=(0,t.useCallback)(({sortBy:k})=>{if(!k?.length)return _(le);setTimeout(()=>{const X=[...le];X.sort((Y,L)=>{const ee=k[0],ce=Y[ee.id],ge=L[ee.id];return ee.desc?ge.localeCompare(ce):ce.localeCompare(ge)}),_(X)},300)},[]);return t.createElement(K,{columns:e,data:r,getRowId:k=>k.id,pageSize:15,fetchData:Q})};var ca=oa;te.parameters=H(R({},te.parameters),{docs:H(R({},(Ce=te.parameters)==null?void 0:Ce.docs),{source:R({originalSource:`args => {
  const columns = useMemo<Array<Column<TableData>>>(() => [{
    id: 'header2',
    header: 'With missing values',
    sortType: 'number',
    disableGrow: true
  }, {
    id: 'noheader',
    sortType: 'number'
  }], []);
  const data: TableData[] = useMemo(() => [{
    header1: 'a',
    header2: 1
  }, {
    header1: 'b',
    noheader: "This column doesn't have an header"
  }, {
    header1: 'c',
    noheader: "But it's still sortable"
  }], []);
  return <InteractiveTable columns={columns} data={data} getRowId={r => r.header1} />;
}`},(Pe=(De=te.parameters)==null?void 0:De.docs)==null?void 0:Pe.source)})}),ne.parameters=H(R({},ne.parameters),{docs:H(R({},(Oe=ne.parameters)==null?void 0:Oe.docs),{source:R({originalSource:`args => {
  const tableData: WithRowExpansionData[] = [{
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus',
    description: 'Open source time series database & alerting.'
  }, {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki',
    description: 'Like Prometheus but for logs. OSS logging solution from Grafana Labs.'
  }, {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo',
    description: 'High volume, minimal dependency trace storage. OSS tracing solution from Grafana Labs.'
  }];
  const columns: Array<Column<WithRowExpansionData>> = [{
    id: 'datasource',
    header: 'Data Source'
  }, {
    id: 'repo',
    header: 'Repo'
  }];
  return <InteractiveTable columns={columns} data={tableData} getRowId={r => r.datasource} renderExpandedRow={ExpandedCell} />;
}`},(Re=(Se=ne.parameters)==null?void 0:Se.docs)==null?void 0:Re.source)})}),re.parameters=H(R({},re.parameters),{docs:H(R({},(je=re.parameters)==null?void 0:je.docs),{source:R({originalSource:`args => {
  const tableData: WithCustomCellData[] = [{
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus'
  }, {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki'
  }, {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo'
  }];
  const columns: Array<Column<WithCustomCellData>> = [{
    id: 'datasource',
    header: 'Data Source'
  }, {
    id: 'repo',
    header: 'Repo',
    cell: RepoCell
  }];
  return <InteractiveTable columns={columns} data={tableData} getRowId={r => r.datasource} />;
}`},(Be=(Ae=re.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source)})}),oe.parameters=H(R({},oe.parameters),{docs:H(R({},(ke=oe.parameters)==null?void 0:ke.docs),{source:R({originalSource:`args => {
  const columns: Array<Column<WithPaginationData>> = [{
    id: 'firstName',
    header: 'First name'
  }, {
    id: 'lastName',
    header: 'Last name'
  }, {
    id: 'car',
    header: 'Car',
    sortType: 'string'
  }, {
    id: 'age',
    header: 'Age',
    sortType: 'number'
  }];
  return <InteractiveTable columns={columns} data={pageableData} getRowId={r => r.id} pageSize={15} />;
}`},(We=(Me=oe.parameters)==null?void 0:Me.docs)==null?void 0:We.source)})}),ie.parameters=H(R({},ie.parameters),{docs:H(R({},(Le=ie.parameters)==null?void 0:Le.docs),{source:R({originalSource:`args => {
  const columns: Array<Column<WithPaginationData>> = [{
    id: 'firstName',
    header: 'First name'
  }, {
    id: 'lastName',
    header: 'Last name'
  }, {
    id: 'car',
    header: 'Car',
    sortType: 'string'
  }, {
    id: 'age',
    header: 'Age',
    sortType: 'number'
  }];
  const headerTooltips: Record<string, InteractiveTableHeaderTooltip> = {
    age: {
      content: 'The number of years since the person was born'
    },
    lastName: {
      content: () => {
        return <>
            <h4>Here is an h4</h4>
            <div>Some content</div>
            <div>Some more content</div>
          </>;
      },
      iconName: 'plus-square'
    }
  };
  return <InteractiveTable columns={columns} data={pageableData.slice(0, 10)} getRowId={r => r.id} headerTooltips={headerTooltips} />;
}`},(Ke=(ze=ie.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source)})}),se.parameters=H(R({},se.parameters),{docs:H(R({},(He=se.parameters)==null?void 0:He.docs),{source:R({originalSource:`args => {
  const columns: Array<Column<WithPaginationData>> = [{
    id: 'firstName',
    header: 'First name',
    sortType: 'string'
  }, {
    id: 'lastName',
    header: 'Last name',
    sortType: 'string'
  }, {
    id: 'car',
    header: 'Car',
    sortType: 'string'
  }, {
    id: 'age',
    header: 'Age'
  }];
  const [data, setData] = useState(pageableData);
  const fetchData = useCallback(({
    sortBy
  }: FetchDataArgs<WithPaginationData>) => {
    if (!sortBy?.length) {
      return setData(pageableData);
    }
    setTimeout(() => {
      const newData = [...pageableData];
      newData.sort((a, b) => {
        const sort = sortBy[0];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const aData = a[(sort.id as keyof Omit<WithPaginationData, 'age'>)];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const bData = b[(sort.id as keyof Omit<WithPaginationData, 'age'>)];
        if (sort.desc) {
          return bData.localeCompare(aData);
        }
        return aData.localeCompare(bData);
      });
      setData(newData);
    }, 300);
  }, []);
  return <InteractiveTable columns={columns} data={data} getRowId={r => r.id} pageSize={15} fetchData={fetchData} />;
}`},(Ue=(Ve=se.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source)})})},"../grafana-data/src/types/data.ts":function(V,E,o){o.d(E,{Gu:function(){return t},UW:function(){return D},zz:function(){return g}});var t=(i=>(i.NotStarted="NotStarted",i.Loading="Loading",i.Streaming="Streaming",i.Done="Done",i.Error="Error",i))(t||{});const c=null;var D=(i=>(i.Null="null",i.Ignore="connected",i.AsZero="null as zero",i))(D||{});const g=i=>!!i;function N(i){return i}function T(i){return typeof i=="object"&&i!==null?!0:!1}},"../grafana-data/src/utils/deprecationWarning.ts":function(V,E,o){o.d(E,{l:function(){return c}});const t={},c=(D,g,N)=>{let T=`[Deprecation warning] ${D}: ${g} is deprecated`;N&&(T+=`. Use ${N} instead`);const i=Date.now(),u=t[T];(!u||i-u>1e4)&&(console.warn(T),t[T]=i)}},"./src/components/Badge/Badge.tsx":function(V,E,o){o.d(E,{E:function(){return W}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),c=o("../../node_modules/react/index.js"),D=o("../../node_modules/react-loading-skeleton/dist/index.js"),g=o("../../node_modules/tinycolor2/esm/tinycolor.js"),N=o("./src/themes/ThemeContext.tsx"),T=o("./src/utils/skeleton.tsx"),i=o("./src/components/Icon/Icon.tsx"),u=o("./src/components/Tooltip/Tooltip.tsx"),p=Object.defineProperty,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(m,n,s)=>n in m?p(m,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[n]=s,b=(m,n)=>{for(var s in n||(n={}))y.call(n,s)&&P(m,s,n[s]);if(h)for(var s of h(n))C.call(n,s)&&P(m,s,n[s]);return m},j=(m,n)=>{var s={};for(var d in m)y.call(m,d)&&n.indexOf(d)<0&&(s[d]=m[d]);if(m!=null&&h)for(var d of h(m))n.indexOf(d)<0&&C.call(m,d)&&(s[d]=m[d]);return s};const x=c.memo(m=>{var n=m,{icon:s,color:d,text:v,tooltip:f,className:O}=n,A=j(n,["icon","color","text","tooltip","className"]);const B=(0,N.of)(w,d),I=c.createElement("div",b({className:(0,t.cx)(B.wrapper,O)},A),s&&c.createElement(i.I,{name:s,size:"sm"}),v);return f?c.createElement(u.m,{content:f,placement:"auto"},I):I});x.displayName="Badge";const M=({rootProps:m})=>{const n=(0,N.of)(z);return c.createElement(D.A,b({width:60,height:22,containerClassName:n.container},m))},W=(0,T.j)(x,M),z=()=>({container:(0,t.AH)({lineHeight:1})}),w=(m,n)=>{let s=m.visualization.getColorByName(n),d="",v="",f="";return m.isDark?(v=(0,g.A)(s).setAlpha(.15).toString(),d=(0,g.A)(s).setAlpha(.25).toString(),f=(0,g.A)(s).lighten(15).toString()):(v=(0,g.A)(s).setAlpha(.15).toString(),d=(0,g.A)(s).setAlpha(.25).toString(),f=(0,g.A)(s).darken(20).toString()),{wrapper:(0,t.AH)({display:"inline-flex",padding:"1px 4px",borderRadius:m.shape.radius.default,background:v,border:`1px solid ${d}`,color:f,fontWeight:m.typography.fontWeightRegular,gap:"2px",fontSize:m.typography.bodySmall.fontSize,lineHeight:m.typography.bodySmall.lineHeight,alignItems:"center"})}};try{W.displayName="Badge",W.__docgenInfo={description:"",displayName:"Badge",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"purple"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:W.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch{}},"./src/components/IconButton/IconButton.tsx":function(V,E,o){o.d(E,{K:function(){return w}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),c=o("../../node_modules/react/index.js"),D=o("../grafana-data/src/utils/deprecationWarning.ts"),g=o("../grafana-data/src/themes/colorManipulator.ts"),N=o("./src/themes/ThemeContext.tsx"),T=o("./src/themes/mixins.ts"),i=o("./src/components/Icon/Icon.tsx"),u=o("./src/components/Icon/utils.ts"),p=o("./src/components/Tooltip/Tooltip.tsx"),h=Object.defineProperty,y=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(n,s,d)=>s in n?h(n,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[s]=d,M=(n,s)=>{for(var d in s||(s={}))b.call(s,d)&&x(n,d,s[d]);if(P)for(var d of P(s))j.call(s,d)&&x(n,d,s[d]);return n},W=(n,s)=>y(n,C(s)),z=(n,s)=>{var d={};for(var v in n)b.call(n,v)&&s.indexOf(v)<0&&(d[v]=n[v]);if(n!=null&&P)for(var v of P(n))s.indexOf(v)<0&&j.call(n,v)&&(d[v]=n[v]);return d};const w=c.forwardRef((n,s)=>{const{size:d="md",variant:v="secondary"}=n;let f;d==="xxl"||d==="xxxl"?((0,D.l)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),f="xl"):f=d;const O=(0,N.of)(m,f,v);let A,B;if("tooltip"in n){const{tooltip:I}=n;A=typeof I=="string"?I:void 0}else if("ariaLabel"in n||"aria-label"in n){const{ariaLabel:I,["aria-label"]:G}=n;A=G||I,B=s}if("tooltip"in n){const I=n,{name:G,iconType:ae,className:$,tooltip:J,tooltipPlacement:pe}=I,ve=z(I,["name","iconType","className","tooltip","tooltipPlacement"]);return c.createElement(p.m,{ref:s,content:J,placement:pe},c.createElement("button",W(M({},ve),{ref:B,"aria-label":A,className:(0,t.cx)(O.button,$),type:"button"}),c.createElement(i.I,{name:G,size:f,className:O.icon,type:ae})))}else{const I=n,{name:G,iconType:ae,className:$}=I,J=z(I,["name","iconType","className"]);return c.createElement("button",W(M({},J),{ref:B,"aria-label":A,className:(0,t.cx)(O.button,$),type:"button"}),c.createElement(i.I,{name:G,size:f,className:O.icon,type:ae}))}});w.displayName="IconButton";const m=(n,s,d)=>{const v=(0,u.cs)(s)+n.spacing.gridSize;let f=n.colors.text.primary;return d==="primary"?f=n.colors.primary.text:d==="destructive"&&(f=n.colors.error.text),{button:(0,t.AH)({zIndex:0,position:"relative",margin:`0 ${n.spacing.x0_5} 0 0`,boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:f,"&[disabled], &:disabled":{cursor:"not-allowed",color:n.colors.action.disabledText,opacity:.65},"&:before":{zIndex:-1,position:"absolute",opacity:0,width:`${v}px`,height:`${v}px`,borderRadius:n.shape.radius.default,content:'""',transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"},"&:focus, &:focus-visible":(0,T.Hi)(n),"&:focus:not(:focus-visible)":(0,T.cr)(n),"&:hover":{"&:before":{backgroundColor:d==="secondary"?n.colors.action.hover:g.X4(f,.12),opacity:1}}}),icon:(0,t.AH)({verticalAlign:"baseline"})}};try{w.displayName="IconButton",w.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:w.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch{}},"./src/components/Pagination/Pagination.tsx":function(V,E,o){o.d(E,{d:function(){return T}});var t=o("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),c=o("../../node_modules/react/index.js"),D=o("./src/themes/ThemeContext.tsx"),g=o("./src/components/Button/Button.tsx"),N=o("./src/components/Icon/Icon.tsx");const T=({currentPage:u,numberOfPages:p,onNavigate:h,hideWhenSinglePage:y,showSmallVersion:C,className:P})=>{const b=(0,D.of)(i),j=C?1:8,x=(0,c.useMemo)(()=>{const M=[...new Array(p).keys()],W=p>j,z=(w,m)=>c.createElement("li",{key:w,className:b.item},c.createElement(g.$n,{size:"sm",variant:m,onClick:()=>h(w)},w));return M.reduce((w,m)=>{const n=m+1,s=n===u?"primary":"secondary",d=j,v=p-j+1,f=v-d,O=n===1||n===p,A=f>-1&&u>=d&&u<=v,B=C?1:3,I=C?0:2;return W?O||u<d&&n<d||f>=0&&u>v&&n>v||f<0&&u>=d&&n>v||A&&n>=u-I&&n<=u+I?w.push(z(n,s)):(n===d&&u<d||n===v&&u>v||A&&(n===u-B||n===u+B))&&w.push(c.createElement("li",{key:n,className:b.item},c.createElement(N.I,{className:b.ellipsis,name:"ellipsis-v"}))):w.push(z(n,s)),w},[])},[u,p,h,j,C,b.ellipsis,b.item]);return y&&p<=1?null:c.createElement("div",{className:(0,t.cx)(b.container,P)},c.createElement("ol",null,c.createElement("li",{className:b.item},c.createElement(g.$n,{"aria-label":"previous page",size:"sm",variant:"secondary",onClick:()=>h(u-1),disabled:u===1},c.createElement(N.I,{name:"angle-left"}))),x,c.createElement("li",{className:b.item},c.createElement(g.$n,{"aria-label":"next page",size:"sm",variant:"secondary",onClick:()=>h(u+1),disabled:u===p},c.createElement(N.I,{name:"angle-right"})))))},i=()=>({container:(0,t.AH)({float:"right"}),item:(0,t.AH)({display:"inline-block",paddingLeft:"10px",marginBottom:"5px"}),ellipsis:(0,t.AH)({transform:"rotate(90deg)"})});try{T.displayName="Pagination",T.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"The current page index being shown.",name:"currentPage",required:!0,type:{name:"number"}},numberOfPages:{defaultValue:null,description:"Number of total pages.",name:"numberOfPages",required:!0,type:{name:"number"}},onNavigate:{defaultValue:null,description:"Callback function for fetching the selected page.",name:"onNavigate",required:!0,type:{name:"(toPage: number) => void"}},hideWhenSinglePage:{defaultValue:null,description:"When set to true and the pagination result is only one page it will not render the pagination at all.",name:"hideWhenSinglePage",required:!1,type:{name:"boolean"}},showSmallVersion:{defaultValue:null,description:"Small version only shows the current page and the navigation buttons.",name:"showSmallVersion",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:T.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch{}},"../../node_modules/react-loading-skeleton/dist/index.js":function(V,E,o){o.d(E,{A:function(){return N}});var t=o("../../node_modules/react/index.js");const c=t.createContext({}),D=!0;function g({baseColor:i,highlightColor:u,width:p,height:h,borderRadius:y,circle:C,direction:P,duration:b,enableAnimation:j=D}){const x={};return P==="rtl"&&(x["--animation-direction"]="reverse"),typeof b=="number"&&(x["--animation-duration"]=`${b}s`),j||(x["--pseudo-element-display"]="none"),(typeof p=="string"||typeof p=="number")&&(x.width=p),(typeof h=="string"||typeof h=="number")&&(x.height=h),(typeof y=="string"||typeof y=="number")&&(x.borderRadius=y),C&&(x.borderRadius="50%"),typeof i<"u"&&(x["--base-color"]=i),typeof u<"u"&&(x["--highlight-color"]=u),x}function N({count:i=1,wrapper:u,className:p,containerClassName:h,containerTestId:y,circle:C=!1,style:P,...b}){var j,x,M;const W=t.useContext(c),z={...b};for(const[f,O]of Object.entries(b))typeof O>"u"&&delete z[f];const w={...W,...z,circle:C},m={...P,...g(w)};let n="react-loading-skeleton";p&&(n+=` ${p}`);const s=(j=w.inline)!==null&&j!==void 0?j:!1,d=[],v=Math.ceil(i);for(let f=0;f<v;f++){let O=m;if(v>i&&f===v-1){const B=(x=O.width)!==null&&x!==void 0?x:"100%",I=i%1,G=typeof B=="number"?B*I:`calc(${B} * ${I})`;O={...O,width:G}}const A=t.createElement("span",{className:n,style:O,key:f},"\u200C");s?d.push(A):d.push(t.createElement(t.Fragment,{key:f},A,t.createElement("br",null)))}return t.createElement("span",{className:h,"data-testid":y,"aria-live":"polite","aria-busy":(M=w.enableAnimation)!==null&&M!==void 0?M:D},u?d.map((f,O)=>t.createElement(u,{key:O},f)):d)}function T({children:i,...u}){return React.createElement(c.Provider,{value:u},i)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(V,E,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o("../../node_modules/react/index.js"),c=Symbol.for("react.element"),D=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,N=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function i(u,p,h){var y,C={},P=null,b=null;h!==void 0&&(P=""+h),p.key!==void 0&&(P=""+p.key),p.ref!==void 0&&(b=p.ref);for(y in p)g.call(p,y)&&!T.hasOwnProperty(y)&&(C[y]=p[y]);if(u&&u.defaultProps)for(y in p=u.defaultProps,p)C[y]===void 0&&(C[y]=p[y]);return{$$typeof:c,type:u,key:P,ref:b,props:C,_owner:N.current}}E.Fragment=D,E.jsx=i,E.jsxs=i},"../../node_modules/react/jsx-runtime.js":function(V,E,o){V.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
