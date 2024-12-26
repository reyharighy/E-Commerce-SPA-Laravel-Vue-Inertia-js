import{o as e,f as c,b as r,h as S,g as B,m as Z,Q as w,a as l,u as t,Z as A,c as i,w as a,F as h,r as p,d as g,t as d,i as f,y as v,x as b,l as V,p as D}from"./app-BoZk32P-.js";import{L as N,T as H}from"./Toast-BnPjMgb5.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{y as j,G as z,r as $,j as L,A as C}from"./ChevronDownIcon-BuPPLtHB.js";function U(y,u){return e(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"})])}function G(y,u){return e(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})])}function T(y,u){return e(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}function O(y,u){return e(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})])}const W={class:"flex flex-col h-screen"},q={class:"sticky"},E={class:"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"},I={class:"flex lg:flex-1"},P={key:1},Q={class:"flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"},J={class:"flex-auto"},K={class:"block text-gray-900"},R={class:"mt-1 text-gray-600"},X={key:1},Y={class:"flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"},M={class:"flex-auto"},ee={class:"block text-gray-900"},te={class:"mt-1 text-gray-600"},se={key:2,class:"flex flex-1 justify-end"},ae={key:0,class:"flex justify-around items-center flex-row gap-5"},oe={class:"h-full overflow-auto scrollbar-hide"},re={__name:"UserAuthenticatedLayout",props:{title:{type:String,required:!0}},setup(y){const u=S(()=>{const o=w().props.auth.user;return[{name:"Home",id:"home",href:"home"},{name:"Offers",id:"offers",href:"offers"},{name:"Collection",id:"collection",href:"collection"},...o?[{name:o.name,id:"user"}]:[]]}),x=S(()=>{const o=w().props.auth.user;return{Shop:[{name:"Shop-1",id:"shop-1",description:"Description of Shop-1",href:"/",icon:T},{name:"Shop-2",id:"shop-2",description:"Description of Shop-2",href:"/",icon:T}],...o?{[o.name]:[{name:"Profile",id:"profile",href:"/profile",method:"get",as:"a"},{name:"Log Out",id:"logout",href:"/logout",method:"post",as:"button"}]}:{}}}),_=B(!1);Z.on("finish",()=>{_.value=!!w().props.toast.message});const k=B(!1);return Z.on("finish",()=>{k.value=!!w().props.toast.warning}),(o,m)=>(e(),c(h,null,[l(t(A),{title:y.title},null,8,["title"]),r("div",W,[r("div",q,[r("nav",E,[r("div",I,[l(N)]),o.$page.props.auth.user?(e(),i(t(C),{key:0,class:"items-center justify-around flex gap-x-12"},{default:a(()=>[(e(!0),c(h,null,p(u.value.slice(0,-1),s=>(e(),i(t(j),{class:"relative",key:s.id},{default:a(()=>[x.value[s.name]?(e(),i(t(z),{key:0,class:"flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"},{default:a(()=>[g(d(s.name)+" ",1),l(t($),{class:"size-5 flex-none text-gray-400"})]),_:2},1024)):(e(),c("div",P,[(e(),i(t(f),{class:"block text-sm/1 text-gray-900 space-y-2 py-3",href:s.href==="collection"||s.href==="offers"?o.route(s.href,1):o.route(s.href),key:s.id,as:"a"},{default:a(()=>[g(d(s.name),1)]),_:2},1032,["href"]))])),l(b,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:a(()=>[l(t(L),{class:"absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel"},{default:a(()=>[r("div",null,[(e(!0),c(h,null,p(x.value[s.name],n=>(e(),i(t(f),{class:"group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",key:n.name,href:n.href,as:"a"},{default:a(()=>[r("div",Q,[(e(),i(v(n.icon),{class:"size-6 text-gray-900 group-hover:text-[#00adb5]"}))]),r("div",J,[r("p",K,d(n.name),1),r("p",R,d(n.description),1)])]),_:2},1032,["href"]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(e(),i(t(C),{key:1,class:"items-center justify-around flex gap-x-12"},{default:a(()=>[(e(!0),c(h,null,p(u.value,s=>(e(),i(t(j),{class:"relative",key:s.id},{default:a(()=>[x.value[s.name]?(e(),i(t(z),{key:0,class:"flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"},{default:a(()=>[g(d(s.name)+" ",1),l(t($),{class:"size-5 flex-none text-gray-400"})]),_:2},1024)):(e(),c("div",X,[(e(),i(t(f),{class:"block text-sm/1 text-gray-900 space-y-2 py-3",href:s.href==="collection"||s.href==="offers"?o.route(s.href,1):o.route(s.href),key:s.id,as:"a"},{default:a(()=>[g(d(s.name),1)]),_:2},1032,["href"]))])),l(b,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:a(()=>[l(t(L),{class:"absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel"},{default:a(()=>[r("div",null,[(e(!0),c(h,null,p(x.value[s.name],n=>(e(),i(t(f),{class:"group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50",key:n.name,href:n.href,as:"a"},{default:a(()=>[r("div",Y,[(e(),i(v(n.icon),{class:"size-6 text-gray-900 group-hover:text-[#00adb5]"}))]),r("div",M,[r("p",ee,d(n.name),1),r("p",te,d(n.description),1)])]),_:2},1032,["href"]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})),o.$page.props.canLogin?(e(),c("div",se,[o.$page.props.auth.user?(e(),c("div",ae,[l(t(f),{href:o.route("order.index"),as:"a"},{default:a(()=>[(e(),i(v(t(U)),{class:"size-6 text-gray-900"}))]),_:1},8,["href"]),l(t(f),{href:o.route("wishlist.index"),as:"a"},{default:a(()=>[(e(),i(v(t(G)),{class:"size-6 border-none ring-0 stroke-none fill-red-400"}))]),_:1},8,["href"]),l(t(f),{href:o.route("cart.index"),as:"a"},{default:a(()=>[(e(),i(v(t(O)),{class:"size-6 text-gray-900"}))]),_:1},8,["href"]),l(t(C),{class:"items-center justify-around flex gap-x-12"},{default:a(()=>[(e(!0),c(h,null,p(u.value.slice(-1),s=>(e(),i(t(j),{class:"relative",key:s.id},{default:a(()=>[l(t(z),{class:"flex flex-row items-center w-max gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"},{default:a(()=>[g(d(s.name)+" ",1),l(t($),{class:"size-5 flex-none text-gray-400"})]),_:2},1024),l(b,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:a(()=>[l(t(L),{class:"absolute over-width w-full top-full z-10 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"},{default:a(()=>[(e(!0),c(h,null,p(x.value[s.name],n=>(e(),i(t(f),{class:"flex flex-col items-start w-full rounded-lg px-4 py-3 text-sm/6 text-gray-900 hover:bg-gray-50",key:n.name,href:n.href,method:n.method,as:n.as},{default:a(()=>[g(d(n.name),1)]),_:2},1032,["href","method","as"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])):(e(),i(t(f),{key:1,class:"text-sm/1 pl-5 text-gray-900",href:o.route("login"),as:"a"},{default:a(()=>m[2]||(m[2]=[g(" Log in → ")])),_:1},8,["href"]))])):V("",!0)])]),l(H,{message:o.$page.props.toast.message||"",position:"bottom-right",show:_.value,onHide:m[0]||(m[0]=s=>_.value=!1),type:"Success"},null,8,["message","show"]),l(H,{message:o.$page.props.toast.warning||"",position:"bottom-right",show:k.value,onHide:m[1]||(m[1]=s=>k.value=!1),type:"Warning"},null,8,["message","show"]),r("div",oe,[D(o.$slots,"default",{},void 0,!0)])])],64))}},de=F(re,[["__scopeId","data-v-29bf9242"]]);export{de as U};
