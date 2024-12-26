import{Q as te,g as b,h as T,T as P,c as S,w as c,o as l,b as e,a as n,u as o,f as i,r as v,F as _,n as h,t as d,i as V,l as se,e as A,d as y,q as E,z as N,m as O,s as W}from"./app-BoZk32P-.js";import{U as le}from"./UserAuthenticatedLayout-B1OtNgB2.js";import{_ as w}from"./PrimaryButton--ycFbq9I.js";import{e as oe,r as ae,a as re}from"./embla-carousel-vue.esm-DmMd-V21.js";import{_ as B,a as M}from"./SecondaryButton-C-s5NXMj.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as ne}from"./ChevronDoubleRightIcon-CEQLt3Mh.js";import{r as U}from"./StarIcon-DyfA7U_r.js";import"./Toast-BnPjMgb5.js";import"./ChevronDownIcon-BuPPLtHB.js";import"./keyboard-CQk8tYLo.js";const de={class:"flex flex-col gap-10 mt-5"},ce={class:"flex justify-around w-full h-fit px-8 gap-5"},ue={class:"w-1/3 flex flex-col justify-start items-center gap-5 py-5 flex-shrink-0"},fe={class:"flex justify-evenly items-center gap-3"},me={class:"embla__container"},pe=["src"],ve={class:"flex justify-center gap-2 mt-4"},_e=["onClick"],ge=["src"],xe={class:"w-full flex flex-col justify-start items-center p-5 gap-5"},he={class:"flex w-full justify-between font-bold text-gray-900 text-2xl"},ye={key:0,class:"flex gap-2"},be={class:"line-through"},we={class:"text-red-500"},ke={key:1},je={class:"flex w-full justify-between text-gray-900 text-sm font-semibold"},Ce={class:"flex"},ze={class:"mr-2"},Te={class:"flex mr-5"},Se={key:0,class:"text-red-500"},$e={class:"flex flex-col text-gray-900 font-semibold gap-2 w-full"},Fe={class:"flex flex-row gap-2"},Ie={class:"flex flex-col gap-1 items-center"},De={class:"flex min-w-14 justify-center items-center rounded-lg bg-[#00adb5] text-white font-normal text-sm"},Pe={class:"px-5 py-2"},Ve={class:"h-1/2 w-1/2"},Ae={class:"px-5 py-2"},Ee={class:"flex flex-col w-full gap-2 justify-between"},Ne={class:"text-gray-500 font-normal text-sm leading-6"},Oe={class:"flex gap-5 mt-5 w-1/3"},We={class:"p-5 text-gray-900"},Be=["value"],Me={class:"mt-6 flex justify-end"},Ue={class:"p-5 text-gray-900"},qe=["value"],Ye={class:"mt-6 flex justify-end"},Le={methods:{asset(g){return`/${g}`}}},Re=Object.assign(Le,{__name:"Details",props:{data:{type:Object,required:!0}},setup(g){const a=g,$=te().props.auth.user,[q,x]=oe({loop:!0}),f=b(0),Y=T({set:r=>f.value=r}),L=T({set:r=>{f.value+r>2?f.value=0:f.value++}}),R=T({set:r=>{f.value-r<0?f.value=2:f.value--}}),Q=r=>{x.value&&(x.value.scrollTo(r),Y.value=r)},G=()=>{x.value&&(x.value.scrollPrev(),R.value=1)},H=()=>{x.value&&(x.value.scrollNext(),L.value=1)},J=r=>r>0,k=b(!1),F=b(null),m=P({size:"",productID:a.data.id}),K=()=>{$?k.value=!0:O.get(route("login")),W(()=>F.value)},X=()=>{m.post(route("wishlist.store"),{preserveScroll:!0,onSuccess:()=>j(),onError:()=>F.value,onFinish:()=>m.reset()})},j=()=>{k.value=!1,m.clearErrors(),m.reset()},C=b(!1),I=b(null),p=P({size:"",productID:a.data.id}),Z=()=>{$?C.value=!0:O.get(route("login")),W(()=>I.value)},ee=()=>{p.post(route("cart.store"),{preserveScroll:!0,onSuccess:()=>z(),onError:()=>I.value,onFinish:()=>p.reset()})},z=()=>{C.value=!1,p.clearErrors(),p.reset()},D=Object.fromEntries(Object.entries(a.data.sizes).filter(([r,t])=>t>0));return(r,t)=>(l(),S(le,{title:"Details"},{default:c(()=>[e("div",de,[e("div",ce,[e("div",ue,[e("div",fe,[e("div",{class:"rounded-lg hover:cursor-pointer hover:bg-gray-100",onClick:G},[n(o(ae),{class:"size-8 text-[#008a8e]"})]),e("div",{class:"embla w-4/5 max-h-svh rounded-lg",ref_key:"emblaRef",ref:q},[e("div",me,[(l(),i(_,null,v(3,s=>e("div",{class:"embla__slide",key:s},[e("img",{class:"w-full h-96 object-center object-cover",src:r.asset(g.data.imageurl.slice(36))},null,8,pe)])),64))])],512),e("div",{class:"rounded-lg hover:cursor-pointer hover:bg-gray-100",onClick:H},[n(o(ne),{class:"size-8 text-[#008a8e]"})])]),e("div",ve,[(l(),i(_,null,v(3,s=>e("div",{key:s,class:h(["thumbnail max-h-20 rounded-lg hover:bg-gray-100",{selected:f.value.valueOf()===s-1}]),onClick:u=>Q(s-1)},[(l(),i("img",{class:"w-full h-full object-center object-cover rounded-lg",key:s,src:r.asset(g.data.imageurl.slice(36))},null,8,ge))],10,_e)),64))])]),e("div",xe,[e("div",he,[e("p",null,d(a.data.name),1),J(g.data.discount)?(l(),i("div",ye,[e("p",be," $"+d(a.data.price),1),e("p",we," $"+d((a.data.price*(100-a.data.discount)/100).toFixed(2)),1)])):(l(),i("p",ke,"$"+d(a.data.price),1))]),e("div",je,[e("div",Ce,[e("p",ze,d(a.data.ratings),1),e("div",Te,[(l(!0),i(_,null,v(parseInt(a.data.ratings),s=>(l(),S(o(U),{class:"size-5 fill-yellow-500 text-transparent"}))),256)),(l(!0),i(_,null,v(5-parseInt(a.data.ratings),s=>(l(),S(o(U),{class:"size-5 fill-gray-300 text-transparent"}))),256))]),n(o(V),{class:"text-[#008a8e]",href:"#"},{default:c(()=>[e("p",null,"See all "+d(a.data.reviews)+" reviews",1)]),_:1})]),a.data.discount>0?(l(),i("div",Se,d(a.data.discount)+" % discount ",1)):se("",!0)]),e("div",$e,[t[2]||(t[2]=e("p",null,"Sizes/Stocks",-1)),e("div",Fe,[(l(!0),i(_,null,v(a.data.sizes,(s,u)=>(l(),i("div",Ie,[e("div",De,[e("p",Pe,d(u),1)]),e("div",Ve,[n(o(re))]),e("div",{class:h(["flex min-w-14 justify-center items-center rounded-lg text-white font-normal text-sm",s>10?"bg-[#00adb5]":"bg-red-500"])},[e("p",Ae,d(s),1)],2)]))),256))])]),e("div",Ee,[t[3]||(t[3]=e("p",{class:"text-gray-900 font-semibold"},"Description",-1)),e("p",Ne,d(a.data.description),1)]),e("div",Oe,[n(o(V),{class:"mt-5 w-full",href:"#"},{default:c(()=>[n(w,{class:"hover:bg-blue-500 w-full justify-center","bg-color":"bg-blue-400",onClick:A(K,["prevent"])},{default:c(()=>t[4]||(t[4]=[y(" wishlist ")])),_:1})]),_:1}),e("div",{class:"mt-5 w-1/2",onClick:A(Z,["prevent"])},[n(w,{class:"text-nowrap justify-center"},{default:c(()=>t[5]||(t[5]=[y(" add to cart ")])),_:1})]),n(M,{"max-width":"sm",show:k.value,onClose:j},{default:c(()=>[e("div",We,[t[8]||(t[8]=e("h2",{class:"text-lg font-medium text-gray-900"}," Please specify the size ",-1)),t[9]||(t[9]=e("p",{class:"mt-1 text-sm text-gray-600 mb-5"}," You can only select the product size in stock. ",-1)),E(e("select",{class:h(["rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full","focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o(m).size=s)},[(l(!0),i(_,null,v(o(D),(s,u)=>(l(),i("option",{value:u,key:u},d(u),9,Be))),128))],512),[[N,o(m).size]]),e("div",Me,[n(B,{onClick:j},{default:c(()=>t[6]||(t[6]=[y(" Cancel ")])),_:1}),n(w,{class:h(["ms-3 hover:bg-blue-500 justify-center",{"opacity-25":o(m).processing}]),"bg-color":"bg-blue-400",disabled:o(m).processing,onClick:X},{default:c(()=>t[7]||(t[7]=[y(" add to wishlist ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"]),n(M,{"max-width":"sm",show:C.value,onClose:z},{default:c(()=>[e("div",Ue,[t[12]||(t[12]=e("h2",{class:"text-lg font-medium text-gray-900"}," Please specify the size ",-1)),t[13]||(t[13]=e("p",{class:"mt-1 text-sm text-gray-600 mb-5"}," You can only select the product size in stock. For selected size added to your cart, the quantity will be automatically set to 1 item. You can furtherly edit it in your cart. ",-1)),E(e("select",{class:h(["rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full","focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o(p).size=s)},[(l(!0),i(_,null,v(o(D),(s,u)=>(l(),i("option",{value:u,key:u},d(u),9,qe))),128))],512),[[N,o(p).size]]),e("div",Ye,[n(B,{onClick:z},{default:c(()=>t[10]||(t[10]=[y(" Cancel ")])),_:1}),n(w,{class:h(["ms-3",{"opacity-25":o(p).processing}]),disabled:o(p).processing,onClick:ee},{default:c(()=>t[11]||(t[11]=[y(" add to cart ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])])])])])]),_:1}))}}),ot=ie(Re,[["__scopeId","data-v-ad489b71"]]);export{ot as default};
