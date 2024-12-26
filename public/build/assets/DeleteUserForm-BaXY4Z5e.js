import{g as c,T as y,f as w,b as t,a as o,w as r,s as _,o as g,d as i,u as a,K as x,n as v}from"./app-BoZk32P-.js";import{D as m}from"./DangerButton-C8RLlZHH.js";import{_ as k,a as D,b}from"./TextInput-D7Qs5wWh.js";import{a as C,_ as V}from"./SecondaryButton-C-s5NXMj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"space-y-6"},U={class:"p-6"},$={class:"mt-6"},A={class:"mt-6 flex justify-end"},I={__name:"DeleteUserForm",setup(E){const l=c(!1),n=c(null),s=y({password:""}),p=()=>{l.value=!0,_(()=>n.value)},u=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>n.value,onFinish:()=>s.reset()})},d=()=>{l.value=!1,s.clearErrors(),s.reset()};return(K,e)=>(g(),w("section",B,[e[6]||(e[6]=t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"}," Delete Account "),t("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),o(m,{onClick:p},{default:r(()=>e[1]||(e[1]=[i("Delete Account")])),_:1}),o(C,{show:l.value,onClose:d},{default:r(()=>[t("div",U,[e[4]||(e[4]=t("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=t("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),t("div",$,[o(k,{for:"password",value:"Password",class:"sr-only"}),o(D,{id:"password",ref_key:"passwordInput",ref:n,modelValue:a(s).password,"onUpdate:modelValue":e[0]||(e[0]=f=>a(s).password=f),type:"password",class:"mt-1 block w-3/4 text-gray-700",placeholder:"Password",onKeyup:x(u,["enter"])},null,8,["modelValue"]),o(b,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),t("div",A,[o(V,{onClick:d},{default:r(()=>e[2]||(e[2]=[i(" Cancel ")])),_:1}),o(m,{class:v(["ms-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:u},{default:r(()=>e[3]||(e[3]=[i(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{I as default};
