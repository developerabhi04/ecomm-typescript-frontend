import{J as l,_ as p,j as e,L as h,S as x}from"./index-DI8Lomad.js";import{r as n}from"./react-BbaTowL1.js";import{T as f}from"./TableHOC-BS_ZU3BZ.js";import{u as g}from"./redux-BaaShjVO.js";import"./firebase-DTxrvWAw.js";import"./index-67BwcfBo.js";const j=[{Header:"ID",accessor:"_id"},{Header:"Quantity",accessor:"quantity"},{Header:"Amount",accessor:"amount"},{Header:"Status",accessor:"status"},{Header:"Action",accessor:"action"}],E=()=>{const{user:t}=g(r=>r.userReducer),{isLoading:c,data:a,isError:d,error:u}=l(t==null?void 0:t._id),[o,i]=n.useState([]);if(d){const r=u;p.error(r.data.message)}n.useEffect(()=>{var r;a&&i((r=a.orders)==null?void 0:r.map(s=>({_id:s._id,quantity:s.orderItems.length,amount:s.total,status:e.jsx("span",{className:s.status==="Processing"?"red":s.status==="Shipped"?"green":"purple",children:s.status}),action:e.jsx(h,{to:`/admin/transaction/${s==null?void 0:s._id}`,children:"Manage"})})))},[a]);const m=f(j,o,"dashboard-product-box","Orders",o.length>6)();return e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"My Orders"}),c?e.jsx(x,{length:20}):m]})};export{E as default};