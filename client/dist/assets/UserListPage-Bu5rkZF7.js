import{a as S,h as j,r as l,j as d,f as k,T}from"./index-Cy3YeA2Q.js";import{s as g,D as U}from"./SearchFilterData-BCIYYHZ7.js";import{T as v}from"./index-T2zhW-2C.js";import{u as y}from"./useBackendService-BS2zoe7N.js";import"./chunk-EL2VKIZQ-0D5iE27d.js";import"./chunk-56K2BSAJ-DbQ6m5gF.js";function w(t,s,o){return Object.keys(t).reduce((n,r)=>(n[r]=o(`${s}.keys.${r}`),n),{})}const B=()=>{const t="users",{t:s}=S(),{getSettingsData:o,setSettingsData:n}=j(),{listUsers:r,deleteUser:h,deleteUsers:b}=y(),[c,m]=l.useState(o(`${t}.filter`,g)),[i,p]=l.useState(null),[E,u]=l.useState(0),[$,f]=l.useState(!1);l.useEffect(()=>{(async()=>{f(!0);const a=await r(c);p(a),f(!1)})()},[E,r]);const x=e=>{m(e),u(a=>a+1),n(`${t}.filter`,e,g.partial())},L=async e=>{Array.isArray(e)?await b(Object.values(e.map(a=>a.id))):await h(e.id),u(a=>a+1)},D=e=>{n(`${t}.headers`,e)};return i?i.content.length==0?d.jsx(T,{children:s(`${t}.errors.noData`)}):d.jsx(U,{data:i.content,filter:c,pagination:i.pagination,headers:w(i.content[0],t,s),visibleHeaders:o(`${t}.headers`),createLinkText:s(`${t}.buttons.create`),element:(e,a)=>d.jsx(v,{field:`${t}.values.${e}`,value:a}),filterEnabled:!0,checkboxEnabled:!0,editEnabled:!0,deleteEnabled:!0,sortingEnabled:!0,pagingEnabled:!0,createEnabled:!0,viewEnabled:!0,isLoading:$,createLink:"create",viewLink:e=>`${e.id}`,onFilterChange:x,onVisibleHeadersChange:D,editLink:e=>`${e.id}/edit`,onDelete:L}):d.jsx(k,{})};export{B as default};