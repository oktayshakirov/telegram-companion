import{e as x,r as c,u as f,a as g,j as s,f as h,B as o,F as j,b,c as v,T as E,g as w}from"./index-Cy3YeA2Q.js";import{u as U}from"./useBackendService-BS2zoe7N.js";import{U as F}from"./UserForm-C0B2ahLC.js";import{u as I}from"./chunk-6RSEZNRH-Coz-uyCJ.js";import"./FormSelect-CCRNEny0.js";import"./getDescendantProp-CvCRrFre.js";import"./index.esm-BY26tlgd.js";import"./chunk-56K2BSAJ-DbQ6m5gF.js";import"./chunk-W7WUSNWJ-B0Aw-vzV.js";import"./zod-Zpv_INGo.js";import"./chunk-NEK3OOAM-CFfO8SV5.js";const _=()=>{const{userId:e}=x(),{getUser:i,updateUser:l}=U(),[r,u]=c.useState(null),n=f(),d=I(),{t}=g();if(!e)throw new Error("Missing userId");c.useEffect(()=>{i(e).then(a=>u(a))},[e,i]);const m=async a=>{if(!r)throw new Error("Invalid state");const p=w.parse(a);await l(e,p),d({title:t("users.toasts.title"),description:t("users.toasts.description"),status:"success",duration:5e3,isClosable:!0}),n("/users")};return r?s.jsxs(o,{p:8,bg:"primaryNeutral",children:[s.jsxs(j,{direction:{base:"column",md:"row"},alignItems:"center",mb:4,children:[s.jsx(o,{flex:"1",children:s.jsxs(b,{bg:"transparent",color:"secondary",gap:"5px",onClick:()=>n("/users"),_hover:{color:"secondary"},_active:{bg:"null"},children:[s.jsx(v,{})," ",t("general.main.back")]})}),s.jsx(o,{alignItems:"center",flex:"2",children:s.jsx(E,{fontSize:{base:"lg",md:"2xl"},as:"span",position:"relative",children:t("users.titles.edit")})})]}),s.jsx(F,{handleValidate:m,defaultValues:r,editMode:!0})]}):s.jsx(h,{})};export{_ as default};
