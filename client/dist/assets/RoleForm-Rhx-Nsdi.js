import{a as d,p as g,s as l,r as o,j as s,F as h,b as f}from"./index-Cy3YeA2Q.js";import{F as x}from"./FormSelect-CCRNEny0.js";import{t as b,a as v}from"./zod-Zpv_INGo.js";import{u as S}from"./useBackendService-BS2zoe7N.js";import{u as j}from"./index.esm-BY26tlgd.js";import{S as F}from"./chunk-NEK3OOAM-CFfO8SV5.js";const q=({defaultValues:m,handleValidate:n,readonly:t})=>{const{t:e}=d(),r=j({resolver:b(l),defaultValues:m??g(l)}),{listPrivileges:i}=S(),[u,p]=o.useState([]);return o.useEffect(()=>{i().then(c=>p(c.content.map(a=>({value:a,label:a.name}))))},[i]),s.jsxs("form",{onSubmit:r.handleSubmit(n),noValidate:!0,children:[s.jsxs(F,{columns:{sm:1,md:2},spacing:5,children:[s.jsx(v,{form:r,name:"name",label:e("roles.keys.name"),helper:e("roles.helpers.name"),isRequired:!0,isDisabled:t===!0}),s.jsx(x,{form:r,name:"privileges",label:e("roles.keys.privileges"),helper:e("roles.helpers.privileges"),placeholder:e("general.main.selectPlaceholder"),options:u,isMulti:!0,isRequired:!0,isDisabled:t===!0})]}),!t&&s.jsx(h,{justifyContent:"center",mt:"40px",children:s.jsx(f,{bg:"gradient",color:"primaryNeutral",type:"submit",size:"lg",_hover:{bg:"null"},isLoading:r.formState.isSubmitting,children:e("general.main.save")})})]})};export{q as R};
