import{G as m,C as j,j as e,D as v,_ as l,E as C,H as f,I as G}from"./index-DI8Lomad.js";import{G as F,a as y}from"./firebase-DTxrvWAw.js";import{r as d}from"./react-BbaTowL1.js";import{y as w}from"./redux-BaaShjVO.js";function D(a){return m({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(a)}const E=()=>{const a=w(),[o,h]=d.useState(""),[c,g]=d.useState(""),[u]=j(),p=async()=>{var t;try{const n=new F,{user:s}=await y(v,n),i=await u({name:s.displayName,email:s.email,photo:s.photoURL,gender:o,role:"user",dob:c,_id:s.uid});if("data"in i){l.success(i.data.message);const r=await C(s.uid);a(f(r==null?void 0:r.user))}else{const x=(t=i.error.data)==null?void 0:t.message;l.error(x),a(G())}}catch(n){l.error("Sign In Fail"),console.log(n)}};return e.jsx("div",{className:"login",children:e.jsxs("main",{children:[e.jsx("h1",{className:"heading",children:"Login"}),e.jsxs("div",{children:[e.jsx("label",{children:"Gender"}),e.jsxs("select",{value:o,onChange:t=>h(t.target.value),children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Date of Birth"}),e.jsx("input",{type:"date",value:c,onChange:t=>g(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Already Signed In Once"}),e.jsxs("button",{onClick:p,children:[e.jsx(D,{}),e.jsx("span",{children:"Sign in With Google"})]})]})]})})};export{E as default};
