import{J as l,_ as p,j as e,L as x,S as f}from"./index-DI8Lomad.js";import{r as n}from"./react-BbaTowL1.js";import{A as g}from"./AdminSidebar-DnWKxm2A.js";import{T as h}from"./TableHOC-BS_ZU3BZ.js";import{u as j}from"./redux-BaaShjVO.js";import"./firebase-DTxrvWAw.js";import"./index-67BwcfBo.js";import"./index-D6AXLMh1.js";const H=[{Header:"User",accessor:"user"},{Header:"Amount",accessor:"amount"},{Header:"Discount",accessor:"discount"},{Header:"Quantity",accessor:"quantity"},{Header:"Status",accessor:"status"},{Header:"Action",accessor:"action"}],R=()=>{const{user:t}=j(r=>r.userReducer),{isLoading:c,data:a,isError:d,error:i}=l(t==null?void 0:t._id),[o,u]=n.useState([]);if(d){const r=i;p.error(r.data.message)}n.useEffect(()=>{var r;a&&u((r=a.orders)==null?void 0:r.map(s=>({user:s.user.name,amount:s.total,discount:s.discount,quantity:s.orderItems.length,status:e.jsx("span",{className:s.status==="Processing"?"red":s.status==="Shipped"?"orange":"green",children:s.status}),action:e.jsx(x,{to:`/admin/transaction/${s==null?void 0:s._id}`,children:"Manage"})})))},[a]);const m=h(H,o,"dashboard-product-box","Transactions",o.length>6)();return e.jsxs("div",{className:"admin-container",children:[e.jsx(g,{}),e.jsx("main",{children:c?e.jsx(f,{length:20}):m})]})};export{R as default};