import{j as t,M as C,L,b,N as y,O as $,P as E,a as S,Q as P,B as T,F as V,h as B,r as c,f as M,T as k}from"./index-Cy3YeA2Q.js";import{s as g,D as w}from"./SearchFilterData-BCIYYHZ7.js";import{T as H}from"./index-T2zhW-2C.js";import{u as I}from"./useBackendService-BS2zoe7N.js";import{g as x}from"./getDescendantProp-CvCRrFre.js";import{C as N,F as O,u as z}from"./index.esm-BY26tlgd.js";import{F as R,a as _}from"./chunk-56K2BSAJ-DbQ6m5gF.js";import"./chunk-EL2VKIZQ-0D5iE27d.js";const q=e=>{const{formState:{errors:r},control:o}=e.form;return t.jsxs(R,{isInvalid:!!x(r,e.name),isRequired:e.isRequired,isDisabled:e.form.formState.isSubmitting||!!e.isDisabled,children:[t.jsx(N,{name:e.name,control:o,defaultValue:e.defaultValue,render:({field:{onChange:n,value:a,ref:s}})=>t.jsxs(C,{children:[t.jsx(L,{color:"secondary",bg:"transparent",variant:"standard",size:"sm",w:"155px",as:b,rightIcon:t.jsx(y,{}),border:"1px solid",children:a?e.options.find(i=>i.value===a)?.label:e.placeholder||"Select"}),t.jsx($,{bg:"primaryNeutral",children:e.options.map(i=>t.jsx(E,{color:"secondary",bg:"primaryNeutral",_hover:{bg:"tercer"},fontSize:"md",fontWeight:"500",onClick:()=>n(i.value),children:i.label},i.value))})]})}),e.helper&&t.jsx(_,{children:e.helper}),t.jsx(O,{children:x(r,e.name)?.message??""})]})},U=({defaultValues:e,handleValidate:r,readonly:o,item:n})=>{const{t:a}=S(),s=z({defaultValues:{status:n?.status||e}}),i=Object.values(P.Values).map(d=>({value:d,label:a("partitions.values.status",{context:d})})),m=!o&&e!==s.watch("status");return t.jsxs(T,{as:"form",onSubmit:s.handleSubmit(r),noValidate:!0,autoComplete:"off",width:"155px",children:[t.jsx(q,{form:s,name:"status",label:"",placeholder:a("general.main.selectPlaceholder"),options:i}),m&&t.jsx(V,{justifyContent:"center",mt:"10px",children:t.jsx(b,{bg:"gradient",color:"primaryNeutral",type:"submit",width:"155px",size:"sm",_hover:{bg:"null"},isLoading:s.formState.isSubmitting,children:a("general.main.save")})})]})};function A(e,r,o){return Object.keys(e).reduce((n,a)=>(n[a]=o(`${r}.keys.${a}`),n),{})}const ee=()=>{const e="partitions",{t:r}=S(),{getSettingsData:o,setSettingsData:n}=B(),{listPartitions:a}=I(),[s,i]=c.useState(null),[m,d]=c.useState(o(`${e}.filter`,g)),[j,p]=c.useState(0),[F,f]=c.useState(!1);c.useEffect(()=>{(async()=>{f(!0);const u=await a();i(u),f(!1)})()},[j,a]);const v=l=>{d(l),p(u=>u+1),n(`${e}.filter`,l,g.partial())},D=l=>{n(`${e}.headers`,l)};return s?s.content.length==0?t.jsx(k,{children:r(`${e}.errors.noData`)}):t.jsx(w,{data:s.content,filter:m,pagination:s.pagination,headers:A(s.content[0],e,r),visibleHeaders:o(`${e}.headers`),refreshLinkText:r(`${e}.buttons.refresh`),element:(l,u,h)=>l!=="status"?t.jsx(H,{field:`${e}.values.${l}`,value:u}):t.jsx(U,{item:h,defaultValues:h?.status}),filterEnabled:!0,refreshEnabled:!0,sortingEnabled:!0,pagingEnabled:!0,isLoading:F,onFilterChange:v,onVisibleHeadersChange:D}):t.jsx(M,{})};export{ee as default};