import{e as d,r as n,u,a as m,j as e,f as p,B as x,F as b,b as i,c as g,T as f,i as j}from"./index-Cy3YeA2Q.js";import{u as h}from"./useBackendService-BS2zoe7N.js";import{U as v}from"./UserForm-C0B2ahLC.js";import"./FormSelect-CCRNEny0.js";import"./getDescendantProp-CvCRrFre.js";import"./index.esm-BY26tlgd.js";import"./chunk-56K2BSAJ-DbQ6m5gF.js";import"./chunk-W7WUSNWJ-B0Aw-vzV.js";import"./zod-Zpv_INGo.js";import"./chunk-NEK3OOAM-CFfO8SV5.js";const S=()=>{const{userId:r}=d(),{getUser:t}=h(),[a,c]=n.useState(null),o=u(),{t:s}=m();if(!r)throw new Error("Missing userId");return n.useEffect(()=>{t(r).then(l=>c(l))},[r,t]),a?e.jsxs(x,{p:8,bg:"primaryNeutral",children:[e.jsxs(b,{justifyContent:"space-between",alignItems:"center",direction:"row",mb:4,flexWrap:"wrap",children:[e.jsxs(i,{bg:"transparent",color:"secondary",gap:"5px",onClick:()=>o("/users"),_hover:{color:"secondary"},_active:{bg:"null"},order:{base:1,md:1},children:[e.jsx(g,{})," ",s("general.main.back")]}),e.jsx(f,{fontSize:"2xl",order:{base:3,md:2},textAlign:"center",width:{base:"100%",md:"auto"},mb:{base:"4",md:"0"},children:s("users.titles.view")}),e.jsxs(i,{bg:"transparent",color:"secondary",gap:"5px",onClick:()=>o(`/users/${r}/edit`),_hover:{color:"secondary"},_active:{bg:"null"},order:{base:2,md:3},children:[e.jsx(j,{})," ",s("general.main.edit")]})]}),e.jsx(v,{defaultValues:a,readonly:!0})]}):e.jsx(p,{})};export{S as default};
