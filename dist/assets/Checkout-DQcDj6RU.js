import{K as Ee,j as O,N as be,A as xe,M as Pe,_ as Y,O as Oe}from"./index-DI8Lomad.js";import{g as we,b as s,r as ke}from"./react-BbaTowL1.js";import{y as je,u as J}from"./redux-BaaShjVO.js";import{r as Re}from"./features-D8KFa1sJ.js";import"./firebase-DTxrvWAw.js";var te={exports:{}},Ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Te=Ae,Ne=Te;function re(){}function ne(){}ne.resetWarningCache=re;var _e=function(){function r(n,o,a,c,d,i){if(i!==Ne){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function e(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ne,resetWarningCache:re};return t.PropTypes=t,t};te.exports=_e();var Le=te.exports;const u=we(Le);function z(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function V(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?z(Object(t),!0).forEach(function(n){oe(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function W(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?W=function(e){return typeof e}:W=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(r)}function oe(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ae(r,e){return Ie(r)||We(r,e)||Ue(r,e)||De()}function Ie(r){if(Array.isArray(r))return r}function We(r,e){var t=r&&(typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"]);if(t!=null){var n=[],o=!0,a=!1,c,d;try{for(t=t.call(r);!(o=(c=t.next()).done)&&(n.push(c.value),!(e&&n.length===e));o=!0);}catch(i){a=!0,d=i}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw d}}return n}}function Ue(r,e){if(r){if(typeof r=="string")return X(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(r,e)}}function X(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function De(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=function(e,t,n){var o=!!n,a=s.useRef(n);s.useEffect(function(){a.current=n},[n]),s.useEffect(function(){if(!o||!e)return function(){};var c=function(){a.current&&a.current.apply(a,arguments)};return e.on(t,c),function(){e.off(t,c)}},[o,t,e,a])},F=function(e){var t=s.useRef(e);return s.useEffect(function(){t.current=e},[e]),t.current},k=function(e){return e!==null&&W(e)==="object"},qe=function(e){return k(e)&&typeof e.then=="function"},Be=function(e){return k(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},H="[object Object]",Me=function r(e,t){if(!k(e)||!k(t))return e===t;var n=Array.isArray(e),o=Array.isArray(t);if(n!==o)return!1;var a=Object.prototype.toString.call(e)===H,c=Object.prototype.toString.call(t)===H;if(a!==c)return!1;if(!a&&!n)return e===t;var d=Object.keys(e),i=Object.keys(t);if(d.length!==i.length)return!1;for(var m={},h=0;h<d.length;h+=1)m[d[h]]=!0;for(var g=0;g<i.length;g+=1)m[i[g]]=!0;var f=Object.keys(m);if(f.length!==d.length)return!1;var C=e,x=t,b=function(w){return r(C[w],x[w])};return f.every(b)},ie=function(e,t,n){return k(e)?Object.keys(e).reduce(function(o,a){var c=!k(t)||!Me(e[a],t[a]);return n.includes(a)?(c&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),o):c?V(V({},o||{}),{},oe({},a,e[a])):o},null):null},se="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Z=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se;if(e===null||Be(e))return e;throw new Error(t)},Fe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se;if(qe(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(o){return Z(o,t)})};var n=Z(e,t);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},$e=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.8.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.8.0",url:"https://stripe.com/docs/stripe-js/react"}))},U=s.createContext(null);U.displayName="ElementsContext";var ue=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},ce=function(e){var t=e.stripe,n=e.options,o=e.children,a=s.useMemo(function(){return Fe(t)},[t]),c=s.useState(function(){return{stripe:a.tag==="sync"?a.stripe:null,elements:a.tag==="sync"?a.stripe.elements(n):null}}),d=ae(c,2),i=d[0],m=d[1];s.useEffect(function(){var f=!0,C=function(b){m(function(S){return S.stripe?S:{stripe:b,elements:b.elements(n)}})};return a.tag==="async"&&!i.stripe?a.stripePromise.then(function(x){x&&f&&C(x)}):a.tag==="sync"&&!i.stripe&&C(a.stripe),function(){f=!1}},[a,i,n]);var h=F(t);s.useEffect(function(){h!==null&&h!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[h,t]);var g=F(n);return s.useEffect(function(){if(i.elements){var f=ie(n,g,["clientSecret","fonts"]);f&&i.elements.update(f)}},[n,g,i.elements]),s.useEffect(function(){$e(i.stripe)},[i.stripe]),s.createElement(U.Provider,{value:i},o)};ce.propTypes={stripe:u.any,options:u.object};var Ge=function(e){var t=s.useContext(U);return ue(t,e)},Ke=function(){var e=Ge("calls useElements()"),t=e.elements;return t};u.func.isRequired;var le=s.createContext(null);le.displayName="CustomCheckoutSdkContext";var Ye=function(e,t){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CustomCheckoutProvider> provider."));return e},Je=s.createContext(null);Je.displayName="CustomCheckoutContext";u.any,u.shape({clientSecret:u.string.isRequired,elementsOptions:u.object}).isRequired;var $=function(e){var t=s.useContext(le),n=s.useContext(U);if(t&&n)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return t?Ye(t,e):ue(n,e)},ze=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},l=function(e,t){var n="".concat(ze(e),"Element"),o=function(i){var m=i.id,h=i.className,g=i.options,f=g===void 0?{}:g,C=i.onBlur,x=i.onFocus,b=i.onReady,S=i.onChange,w=i.onEscape,D=i.onClick,A=i.onLoadError,q=i.onLoaderStart,me=i.onNetworksChange,ve=i.onConfirm,he=i.onCancel,ye=i.onShippingAddressChange,ge=i.onShippingRateChange,T=$("mounts <".concat(n,">")),N="elements"in T?T.elements:null,_="customCheckoutSdk"in T?T.customCheckoutSdk:null,Ce=s.useState(null),G=ae(Ce,2),v=G[0],Se=G[1],P=s.useRef(null),B=s.useRef(null);y(v,"blur",C),y(v,"focus",x),y(v,"escape",w),y(v,"click",D),y(v,"loaderror",A),y(v,"loaderstart",q),y(v,"networkschange",me),y(v,"confirm",ve),y(v,"cancel",he),y(v,"shippingaddresschange",ye),y(v,"shippingratechange",ge),y(v,"change",S);var M;b&&(e==="expressCheckout"?M=b:M=function(){b(v)}),y(v,"ready",M),s.useLayoutEffect(function(){if(P.current===null&&B.current!==null&&(N||_)){var E=null;_?E=_.createElement(e,f):N&&(E=N.create(e,f)),P.current=E,Se(E),E&&E.mount(B.current)}},[N,_,f]);var K=F(f);return s.useEffect(function(){if(P.current){var E=ie(f,K,["paymentRequest"]);E&&P.current.update(E)}},[f,K]),s.useLayoutEffect(function(){return function(){if(P.current&&typeof P.current.destroy=="function")try{P.current.destroy(),P.current=null}catch{}}},[]),s.createElement("div",{id:m,className:h,ref:B})},a=function(i){$("mounts <".concat(n,">"));var m=i.id,h=i.className;return s.createElement("div",{id:m,className:h})},c=t?a:o;return c.propTypes={id:u.string,className:u.string,onChange:u.func,onBlur:u.func,onFocus:u.func,onReady:u.func,onEscape:u.func,onClick:u.func,onLoadError:u.func,onLoaderStart:u.func,onNetworksChange:u.func,onConfirm:u.func,onCancel:u.func,onShippingAddressChange:u.func,onShippingRateChange:u.func,options:u.object},c.displayName=n,c.__elementType=e,c},p=typeof window>"u",Ve=s.createContext(null);Ve.displayName="EmbeddedCheckoutProviderContext";var Xe=function(){var e=$("calls useStripe()"),t=e.stripe;return t};l("auBankAccount",p);l("card",p);l("cardNumber",p);l("cardExpiry",p);l("cardCvc",p);l("fpxBank",p);l("iban",p);l("idealBank",p);l("p24Bank",p);l("epsBank",p);var He=l("payment",p);l("expressCheckout",p);l("paymentRequestButton",p);l("linkAuthentication",p);l("address",p);l("shippingAddress",p);l("paymentMethodMessaging",p);l("affirmMessage",p);l("afterpayClearpayMessage",p);var pe="https://js.stripe.com/v3",Ze=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Q="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Qe=function(){for(var e=document.querySelectorAll('script[src^="'.concat(pe,'"]')),t=0;t<e.length;t++){var n=e[t];if(Ze.test(n.src))return n}return null},ee=function(e){var t="",n=document.createElement("script");n.src="".concat(pe).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},et=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"4.8.0",startTime:t})},j=null,L=null,I=null,tt=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},rt=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}},nt=function(e){return j!==null?j:(j=new Promise(function(t,n){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe&&e&&console.warn(Q),window.Stripe){t(window.Stripe);return}try{var o=Qe();if(o&&e)console.warn(Q);else if(!o)o=ee(e);else if(o&&I!==null&&L!==null){var a;o.removeEventListener("load",I),o.removeEventListener("error",L),(a=o.parentNode)===null||a===void 0||a.removeChild(o),o=ee(e)}I=rt(t,n),L=tt(n),o.addEventListener("load",I),o.addEventListener("error",L)}catch(c){n(c);return}}),j.catch(function(t){return j=null,Promise.reject(t)}))},ot=function(e,t,n){if(e===null)return null;var o=e.apply(void 0,t);return et(o,n),o},R,fe=!1,de=function(){return R||(R=nt(null).catch(function(e){return R=null,Promise.reject(e)}),R)};Promise.resolve().then(function(){return de()}).catch(function(r){fe||console.warn(r)});var at=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];fe=!0;var o=Date.now();return de().then(function(a){return ot(a,t,o)})};const it=at("pk_test_51N6bmcSDCZ03mZbwGObbi8m3nklGYDc9FRc9A0zz9in3qfqu4sK3RDXyOgGWSZB7MFROrlnpTGXSQJfAQ97BAxIq00eOkJNS06"),st=()=>{const r=xe(),e=Xe(),t=Ke(),n=je(),{user:o}=J(S=>S.userReducer),{shippingInfo:a,cartItems:c,subtotal:d,tax:i,discount:m,shippingCharges:h,total:g}=J(S=>S.cartReducer),[f,C]=ke.useState(!1),[x]=Pe(),b=async S=>{if(S.preventDefault(),!e||!t)return;if(!o||!o._id){Y.error("User not found or invalid. Please log in."),C(!1);return}C(!0);const w={shippingInfo:a,orderItems:c,subtotal:d,tax:i,discount:m,shippingCharges:h,total:g,user:o._id},{paymentIntent:D,error:A}=await e.confirmPayment({elements:t,confirmParams:{return_url:window.location.origin},redirect:"if_required"});if(A)return C(!1),Y.error(A.message||"Something Went Wrong");if(D.status==="succeeded"){const q=await x(w);n(Oe()),Re(q,r,"/orders")}C(!1)};return O.jsx("div",{className:"checkout-container",children:O.jsxs("form",{onSubmit:b,children:[O.jsx(He,{}),O.jsx("button",{type:"submit",disabled:f,children:f?"Processing..":"Pay"})]})})},dt=()=>{const e=Ee().state;return e?O.jsx(ce,{options:{clientSecret:e},stripe:it,children:O.jsx(st,{})}):O.jsx(be,{to:"/shipping"})};export{dt as default};