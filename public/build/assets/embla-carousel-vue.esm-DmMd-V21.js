import{o as Ut,f as $t,b as qt,k as Nt,L as Vt,C as cn,U as un,j as jt}from"./app-BoZk32P-.js";function $n(t,n){return Ut(),$t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[qt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"})])}function qn(t,n){return Ut(),$t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[qt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})])}function an(t){return Object.prototype.toString.call(t)==="[object Object]"}function zt(t){return an(t)||Array.isArray(t)}function fn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tt(t,n){const r=Object.keys(t),s=Object.keys(n);if(r.length!==s.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==o?!1:r.every(e=>{const u=t[e],i=n[e];return typeof u=="function"?`${u}`==`${i}`:!zt(u)||!zt(i)?u===i:Tt(u,i)})}function Gt(t){return t.concat().sort((n,r)=>n.name>r.name?1:-1).map(n=>n.options)}function ln(t,n){if(t.length!==n.length)return!1;const r=Gt(t),s=Gt(n);return r.every((c,o)=>{const e=s[o];return Tt(c,e)})}function It(t){return typeof t=="number"}function Lt(t){return typeof t=="string"}function ht(t){return typeof t=="boolean"}function Ht(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function wt(t){return Math.sign(t)}function at(t,n){return M(t-n)}function dn(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const r=at(M(t),M(n));return M(r/t)}function pn(t){return Math.round(t*100)/100}function ft(t){return lt(t).map(Number)}function j(t){return t[pt(t)]}function pt(t){return Math.max(0,t.length-1)}function Ot(t,n){return n===pt(t)}function Rt(t,n=0){return Array.from(Array(t),(r,s)=>n+s)}function lt(t){return Object.keys(t)}function _t(t,n){return[t,n].reduce((r,s)=>(lt(s).forEach(c=>{const o=r[c],e=s[c],u=Ht(o)&&Ht(e);r[c]=u?_t(o,e):e}),r),{})}function Et(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function mn(t,n){const r={start:s,center:c,end:o};function s(){return 0}function c(i){return o(i)/2}function o(i){return n-i}function e(i,a){return Lt(t)?r[t](i):t(n,i,a)}return{measure:e}}function dt(){let t=[];function n(c,o,e,u={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(o,e,u),i=()=>c.removeEventListener(o,e,u);else{const a=c;a.addListener(e),i=()=>a.removeListener(e)}return t.push(i),s}function r(){t=t.filter(c=>c())}const s={add:n,clear:r};return s}function gn(t,n,r,s){const c=dt(),o=1e3/60;let e=null,u=0,i=0;function a(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function h(){b(),c.clear()}function d(g){if(!i)return;e||(e=g);const f=g-e;for(e=g,u+=f;u>=o;)r(),u-=o;const S=u/o;s(S),i&&(i=n.requestAnimationFrame(d))}function p(){i||(i=n.requestAnimationFrame(d))}function b(){n.cancelAnimationFrame(i),e=null,u=0,i=0}function l(){e=null,u=0}return{init:a,destroy:h,start:p,stop:b,update:r,render:s}}function hn(t,n){const r=n==="rtl",s=t==="y",c=s?"y":"x",o=s?"x":"y",e=!s&&r?-1:1,u=h(),i=d();function a(l){const{height:m,width:g}=l;return s?m:g}function h(){return s?"top":r?"right":"left"}function d(){return s?"bottom":r?"left":"right"}function p(l){return l*e}return{scroll:c,cross:o,startEdge:u,endEdge:i,measureSize:a,direction:p}}function tt(t=0,n=0){const r=M(t-n);function s(a){return a<t}function c(a){return a>n}function o(a){return s(a)||c(a)}function e(a){return o(a)?s(a)?t:n:a}function u(a){return r?a-r*Math.ceil((a-n)/r):a}return{length:r,max:n,min:t,constrain:e,reachedAny:o,reachedMax:c,reachedMin:s,removeOffset:u}}function Kt(t,n,r){const{constrain:s}=tt(0,t),c=t+1;let o=e(n);function e(p){return r?M((c+p)%c):s(p)}function u(){return o}function i(p){return o=e(p),d}function a(p){return h().set(u()+p)}function h(){return Kt(t,u(),r)}const d={get:u,set:i,add:a,clone:h};return d}function Sn(t,n,r,s,c,o,e,u,i,a,h,d,p,b,l,m,g,f,S){const{cross:x,direction:E}=t,A=["INPUT","SELECT","TEXTAREA"],T={passive:!1},v=dt(),L=dt(),I=tt(50,225).constrain(b.measure(20)),k={mouse:300,touch:400},w={mouse:500,touch:600},B=l?43:25;let z=!1,G=0,H=0,Y=!1,J=!1,$=!1,q=!1;function rt(y){if(!S)return;function O(F){(ht(S)||S(y,F))&&it(F)}const P=n;v.add(P,"dragstart",F=>F.preventDefault(),T).add(P,"touchmove",()=>{},T).add(P,"touchend",()=>{}).add(P,"touchstart",O).add(P,"mousedown",O).add(P,"touchcancel",C).add(P,"contextmenu",C).add(P,"click",K,!0)}function R(){v.clear(),L.clear()}function nt(){const y=q?r:n;L.add(y,"touchmove",N,T).add(y,"touchend",C).add(y,"mousemove",N,T).add(y,"mouseup",C)}function et(y){const O=y.nodeName||"";return A.includes(O)}function _(){return(l?w:k)[q?"mouse":"touch"]}function st(y,O){const P=d.add(wt(y)*-1),F=h.byDistance(y,!l).distance;return l||M(y)<I?F:g&&O?F*.5:h.byIndex(P.get(),0).distance}function it(y){const O=Et(y,s);q=O,$=l&&O&&!y.buttons&&z,z=at(c.get(),e.get())>=2,!(O&&y.button!==0)&&(et(y.target)||(Y=!0,o.pointerDown(y),a.useFriction(0).useDuration(0),c.set(e),nt(),G=o.readPoint(y),H=o.readPoint(y,x),p.emit("pointerDown")))}function N(y){if(!Et(y,s)&&y.touches.length>=2)return C(y);const P=o.readPoint(y),F=o.readPoint(y,x),U=at(P,G),Q=at(F,H);if(!J&&!q&&(!y.cancelable||(J=U>Q,!J)))return C(y);const Z=o.pointerMove(y);U>m&&($=!0),a.useFriction(.3).useDuration(.75),u.start(),c.add(E(Z)),y.preventDefault()}function C(y){const P=h.byDistance(0,!1).index!==d.get(),F=o.pointerUp(y)*_(),U=st(E(F),P),Q=dn(F,U),Z=B-10*Q,X=f+Q/50;J=!1,Y=!1,L.clear(),a.useDuration(Z).useFriction(X),i.distance(U,!l),q=!1,p.emit("pointerUp")}function K(y){$&&(y.stopPropagation(),y.preventDefault(),$=!1)}function V(){return Y}return{init:rt,destroy:R,pointerDown:V}}function yn(t,n){let s,c;function o(d){return d.timeStamp}function e(d,p){const l=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Et(d,n)?d:d.touches[0])[l]}function u(d){return s=d,c=d,e(d)}function i(d){const p=e(d)-e(c),b=o(d)-o(s)>170;return c=d,b&&(s=d),p}function a(d){if(!s||!c)return 0;const p=e(c)-e(s),b=o(d)-o(s),l=o(d)-o(c)>170,m=p/b;return b&&!l&&M(m)>.1?m:0}return{pointerDown:u,pointerMove:i,pointerUp:a,readPoint:e}}function bn(){function t(r){const{offsetTop:s,offsetLeft:c,offsetWidth:o,offsetHeight:e}=r;return{top:s,right:c+o,bottom:s+e,left:c,width:o,height:e}}return{measure:t}}function xn(t){function n(s){return t*(s/100)}return{measure:n}}function vn(t,n,r,s,c,o,e){const u=[t].concat(s);let i,a,h=[],d=!1;function p(g){return c.measureSize(e.measure(g))}function b(g){if(!o)return;a=p(t),h=s.map(p);function f(S){for(const x of S){if(d)return;const E=x.target===t,A=s.indexOf(x.target),T=E?a:h[A],v=p(E?t:s[A]);if(M(v-T)>=.5){g.reInit(),n.emit("resize");break}}}i=new ResizeObserver(S=>{(ht(o)||o(g,S))&&f(S)}),r.requestAnimationFrame(()=>{u.forEach(S=>i.observe(S))})}function l(){d=!0,i&&i.disconnect()}return{init:b,destroy:l}}function Ln(t,n,r,s,c,o){let e=0,u=0,i=c,a=o,h=t.get(),d=0;function p(){const T=s.get()-t.get(),v=!i;let L=0;return v?(e=0,r.set(s),t.set(s),L=T):(r.set(t),e+=T/i,e*=a,h+=e,t.add(e),L=h-d),u=wt(L),d=h,A}function b(){const T=s.get()-n.get();return M(T)<.001}function l(){return i}function m(){return u}function g(){return e}function f(){return x(c)}function S(){return E(o)}function x(T){return i=T,A}function E(T){return a=T,A}const A={direction:m,duration:l,velocity:g,seek:p,settled:b,useBaseFriction:S,useBaseDuration:f,useFriction:E,useDuration:x};return A}function En(t,n,r,s,c){const o=c.measure(10),e=c.measure(50),u=tt(.1,.99);let i=!1;function a(){return!(i||!t.reachedAny(r.get())||!t.reachedAny(n.get()))}function h(b){if(!a())return;const l=t.reachedMin(n.get())?"min":"max",m=M(t[l]-n.get()),g=r.get()-n.get(),f=u.constrain(m/e);r.subtract(g*f),!b&&M(g)<o&&(r.set(t.constrain(r.get())),s.useDuration(25).useBaseFriction())}function d(b){i=!b}return{shouldConstrain:a,constrain:h,toggleActive:d}}function Tn(t,n,r,s,c){const o=tt(-n+t,0),e=d(),u=h(),i=p();function a(l,m){return at(l,m)<1}function h(){const l=e[0],m=j(e),g=e.lastIndexOf(l),f=e.indexOf(m)+1;return tt(g,f)}function d(){return r.map((l,m)=>{const{min:g,max:f}=o,S=o.constrain(l),x=!m,E=Ot(r,m);return x?f:E||a(g,S)?g:a(f,S)?f:S}).map(l=>parseFloat(l.toFixed(3)))}function p(){if(n<=t+c)return[o.max];if(s==="keepSnaps")return e;const{min:l,max:m}=u;return e.slice(l,m)}return{snapsContained:i,scrollContainLimit:u}}function In(t,n,r){const s=n[0],c=r?s-t:j(n);return{limit:tt(c,s)}}function wn(t,n,r,s){const o=n.min+.1,e=n.max+.1,{reachedMin:u,reachedMax:i}=tt(o,e);function a(p){return p===1?i(r.get()):p===-1?u(r.get()):!1}function h(p){if(!a(p))return;const b=t*(p*-1);s.forEach(l=>l.add(b))}return{loop:h}}function On(t){const{max:n,length:r}=t;function s(o){const e=o-n;return r?e/-r:0}return{get:s}}function An(t,n,r,s,c){const{startEdge:o,endEdge:e}=t,{groupSlides:u}=c,i=d().map(n.measure),a=p(),h=b();function d(){return u(s).map(m=>j(m)[e]-m[0][o]).map(M)}function p(){return s.map(m=>r[o]-m[o]).map(m=>-M(m))}function b(){return u(a).map(m=>m[0]).map((m,g)=>m+i[g])}return{snaps:a,snapsAligned:h}}function Dn(t,n,r,s,c,o){const{groupSlides:e}=c,{min:u,max:i}=s,a=h();function h(){const p=e(o),b=!t||n==="keepSnaps";return r.length===1?[o]:b?p:p.slice(u,i).map((l,m,g)=>{const f=!m,S=Ot(g,m);if(f){const x=j(g[0])+1;return Rt(x)}if(S){const x=pt(o)-j(g)[0]+1;return Rt(x,j(g)[0])}return l})}return{slideRegistry:a}}function Mn(t,n,r,s,c){const{reachedAny:o,removeOffset:e,constrain:u}=s;function i(l){return l.concat().sort((m,g)=>M(m)-M(g))[0]}function a(l){const m=t?e(l):u(l),g=n.map((S,x)=>({diff:h(S-m,0),index:x})).sort((S,x)=>M(S.diff)-M(x.diff)),{index:f}=g[0];return{index:f,distance:m}}function h(l,m){const g=[l,l+r,l-r];if(!t)return l;if(!m)return i(g);const f=g.filter(S=>wt(S)===m);return f.length?i(f):j(g)-r}function d(l,m){const g=n[l]-c.get(),f=h(g,m);return{index:l,distance:f}}function p(l,m){const g=c.get()+l,{index:f,distance:S}=a(g),x=!t&&o(g);if(!m||x)return{index:f,distance:l};const E=n[f]-S,A=l+h(E,0);return{index:f,distance:A}}return{byDistance:p,byIndex:d,shortcut:h}}function kn(t,n,r,s,c,o,e){function u(d){const p=d.distance,b=d.index!==n.get();o.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(r.set(n.get()),n.set(d.index),e.emit("select"))}function i(d,p){const b=c.byDistance(d,p);u(b)}function a(d,p){const b=n.clone().set(d),l=c.byIndex(b.get(),p);u(l)}return{distance:i,index:a}}function Pn(t,n,r,s,c,o,e,u){const i={passive:!0,capture:!0};let a=0;function h(b){if(!u)return;function l(m){if(new Date().getTime()-a>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const S=r.findIndex(x=>x.includes(m));It(S)&&(c.useDuration(0),s.index(S,0),e.emit("slideFocus"))}o.add(document,"keydown",d,!1),n.forEach((m,g)=>{o.add(m,"focus",f=>{(ht(u)||u(b,f))&&l(g)},i)})}function d(b){b.code==="Tab"&&(a=new Date().getTime())}return{init:h}}function ut(t){let n=t;function r(){return n}function s(i){n=e(i)}function c(i){n+=e(i)}function o(i){n-=e(i)}function e(i){return It(i)?i:i.get()}return{get:r,set:s,add:c,subtract:o}}function Qt(t,n){const r=t.scroll==="x"?e:u,s=n.style;let c=null,o=!1;function e(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(o)return;const b=pn(t.direction(p));b!==c&&(s.transform=r(b),c=b)}function a(p){o=!p}function h(){o||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:h,to:i,toggleActive:a}}function Cn(t,n,r,s,c,o,e,u,i){const h=ft(c),d=ft(c).reverse(),p=f().concat(S());function b(v,L){return v.reduce((I,k)=>I-c[k],L)}function l(v,L){return v.reduce((I,k)=>b(I,L)>0?I.concat([k]):I,[])}function m(v){return o.map((L,I)=>({start:L-s[I]+.5+v,end:L+n-.5+v}))}function g(v,L,I){const k=m(L);return v.map(w=>{const B=I?0:-r,z=I?r:0,G=I?"end":"start",H=k[w][G];return{index:w,loopPoint:H,slideLocation:ut(-1),translate:Qt(t,i[w]),target:()=>u.get()>H?B:z}})}function f(){const v=e[0],L=l(d,v);return g(L,r,!1)}function S(){const v=n-e[0]-1,L=l(h,v);return g(L,-r,!0)}function x(){return p.every(({index:v})=>{const L=h.filter(I=>I!==v);return b(L,n)<=.1})}function E(){p.forEach(v=>{const{target:L,translate:I,slideLocation:k}=v,w=L();w!==k.get()&&(I.to(w),k.set(w))})}function A(){p.forEach(v=>v.translate.clear())}return{canLoop:x,clear:A,loop:E,loopPoints:p}}function Fn(t,n,r){let s,c=!1;function o(i){if(!r)return;function a(h){for(const d of h)if(d.type==="childList"){i.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(h=>{c||(ht(r)||r(i,h))&&a(h)}),s.observe(t,{childList:!0})}function e(){s&&s.disconnect(),c=!0}return{init:o,destroy:e}}function Bn(t,n,r,s){const c={};let o=null,e=null,u,i=!1;function a(){u=new IntersectionObserver(l=>{i||(l.forEach(m=>{const g=n.indexOf(m.target);c[g]=m}),o=null,e=null,r.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(l=>u.observe(l))}function h(){u&&u.disconnect(),i=!0}function d(l){return lt(c).reduce((m,g)=>{const f=parseInt(g),{isIntersecting:S}=c[f];return(l&&S||!l&&!S)&&m.push(f),m},[])}function p(l=!0){if(l&&o)return o;if(!l&&e)return e;const m=d(l);return l&&(o=m),l||(e=m),m}return{init:a,destroy:h,get:p}}function Nn(t,n,r,s,c,o){const{measureSize:e,startEdge:u,endEdge:i}=t,a=r[0]&&c,h=l(),d=m(),p=r.map(e),b=g();function l(){if(!a)return 0;const S=r[0];return M(n[u]-S[u])}function m(){if(!a)return 0;const S=o.getComputedStyle(j(s));return parseFloat(S.getPropertyValue(`margin-${i}`))}function g(){return r.map((S,x,E)=>{const A=!x,T=Ot(E,x);return A?p[x]+h:T?p[x]+d:E[x+1][u]-S[u]}).map(M)}return{slideSizes:p,slideSizesWithGaps:b,startGap:h,endGap:d}}function Vn(t,n,r,s,c,o,e,u,i){const{startEdge:a,endEdge:h,direction:d}=t,p=It(r);function b(f,S){return ft(f).filter(x=>x%S===0).map(x=>f.slice(x,x+S))}function l(f){return f.length?ft(f).reduce((S,x,E)=>{const A=j(S)||0,T=A===0,v=x===pt(f),L=c[a]-o[A][a],I=c[a]-o[x][h],k=!s&&T?d(e):0,w=!s&&v?d(u):0,B=M(I-w-(L+k));return E&&B>n+i&&S.push(x),v&&S.push(f.length),S},[]).map((S,x,E)=>{const A=Math.max(E[x-1]||0);return f.slice(A,S)}):[]}function m(f){return p?b(f,r):l(f)}return{groupSlides:m}}function jn(t,n,r,s,c,o,e){const{align:u,axis:i,direction:a,startIndex:h,loop:d,duration:p,dragFree:b,dragThreshold:l,inViewThreshold:m,slidesToScroll:g,skipSnaps:f,containScroll:S,watchResize:x,watchSlides:E,watchDrag:A,watchFocus:T}=o,v=2,L=bn(),I=L.measure(n),k=r.map(L.measure),w=hn(i,a),B=w.measureSize(I),z=xn(B),G=mn(u,B),H=!d&&!!S,Y=d||!!S,{slideSizes:J,slideSizesWithGaps:$,startGap:q,endGap:rt}=Nn(w,I,k,r,Y,c),R=Vn(w,B,g,d,I,k,q,rt,v),{snaps:nt,snapsAligned:et}=An(w,G,I,k,R),_=-j(nt)+j($),{snapsContained:st,scrollContainLimit:it}=Tn(B,_,et,S,v),N=H?st:et,{limit:C}=In(_,N,d),K=Kt(pt(N),h,d),V=K.clone(),D=ft(r),y=({dragHandler:ot,scrollBody:xt,scrollBounds:vt,options:{loop:mt}})=>{mt||vt.constrain(ot.pointerDown()),xt.seek()},O=({scrollBody:ot,translate:xt,location:vt,offsetLocation:mt,previousLocation:Zt,scrollLooper:Wt,slideLooper:tn,dragHandler:nn,animation:en,eventHandler:kt,scrollBounds:on,options:{loop:Pt}},Ct)=>{const Ft=ot.settled(),rn=!on.shouldConstrain(),Bt=Pt?Ft:Ft&&rn;Bt&&!nn.pointerDown()&&(en.stop(),kt.emit("settle")),Bt||kt.emit("scroll");const sn=vt.get()*Ct+Zt.get()*(1-Ct);mt.set(sn),Pt&&(Wt.loop(ot.direction()),tn.loop()),xt.to(mt.get())},P=gn(s,c,()=>y(bt),ot=>O(bt,ot)),F=.68,U=N[K.get()],Q=ut(U),Z=ut(U),X=ut(U),W=ut(U),ct=Ln(Q,X,Z,W,p,F),St=Mn(d,N,_,C,W),yt=kn(P,K,V,ct,St,W,e),At=On(C),Dt=dt(),Xt=Bn(n,r,e,m),{slideRegistry:Mt}=Dn(H,S,N,it,R,D),Yt=Pn(t,r,Mt,yt,ct,Dt,e,T),bt={ownerDocument:s,ownerWindow:c,eventHandler:e,containerRect:I,slideRects:k,animation:P,axis:w,dragHandler:Sn(w,t,s,c,W,yn(w,c),Q,P,yt,ct,St,K,e,z,b,l,f,F,A),eventStore:Dt,percentOfView:z,index:K,indexPrevious:V,limit:C,location:Q,offsetLocation:X,previousLocation:Z,options:o,resizeHandler:vn(n,e,c,r,w,x,L),scrollBody:ct,scrollBounds:En(C,X,W,ct,z),scrollLooper:wn(_,C,X,[Q,X,Z,W]),scrollProgress:At,scrollSnapList:N.map(At.get),scrollSnaps:N,scrollTarget:St,scrollTo:yt,slideLooper:Cn(w,B,_,J,$,nt,N,X,r),slideFocus:Yt,slidesHandler:Fn(n,e,E),slidesInView:Xt,slideIndexes:D,slideRegistry:Mt,slidesToScroll:R,target:W,translate:Qt(w,n)};return bt}function zn(){let t={},n;function r(a){n=a}function s(a){return t[a]||[]}function c(a){return s(a).forEach(h=>h(n,a)),i}function o(a,h){return t[a]=s(a).concat([h]),i}function e(a,h){return t[a]=s(a).filter(d=>d!==h),i}function u(){t={}}const i={init:r,emit:c,off:e,on:o,clear:u};return i}const Gn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Hn(t){function n(o,e){return _t(o,e||{})}function r(o){const e=o.breakpoints||{},u=lt(e).filter(i=>t.matchMedia(i).matches).map(i=>e[i]).reduce((i,a)=>n(i,a),{});return n(o,u)}function s(o){return o.map(e=>lt(e.breakpoints||{})).reduce((e,u)=>e.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:r,optionsMediaQueries:s}}function Rn(t){let n=[];function r(o,e){return n=e.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(o,t)),e.reduce((u,i)=>Object.assign(u,{[i.name]:i}),{})}function s(){n=n.filter(o=>o.destroy())}return{init:r,destroy:s}}function gt(t,n,r){const s=t.ownerDocument,c=s.defaultView,o=Hn(c),e=Rn(o),u=dt(),i=zn(),{mergeOptions:a,optionsAtMedia:h,optionsMediaQueries:d}=o,{on:p,off:b,emit:l}=i,m=w;let g=!1,f,S=a(Gn,gt.globalOptions),x=a(S),E=[],A,T,v;function L(){const{container:D,slides:y}=x;T=(Lt(D)?t.querySelector(D):D)||t.children[0];const P=Lt(y)?T.querySelectorAll(y):y;v=[].slice.call(P||T.children)}function I(D){const y=jn(t,T,v,s,c,D,i);if(D.loop&&!y.slideLooper.canLoop()){const O=Object.assign({},D,{loop:!1});return I(O)}return y}function k(D,y){g||(S=a(S,D),x=h(S),E=y||E,L(),f=I(x),d([S,...E.map(({options:O})=>O)]).forEach(O=>u.add(O,"change",w)),x.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(V),f.eventHandler.init(V),f.resizeHandler.init(V),f.slidesHandler.init(V),f.options.loop&&f.slideLooper.loop(),T.offsetParent&&v.length&&f.dragHandler.init(V),A=e.init(V,E)))}function w(D,y){const O=R();B(),k(a({startIndex:O},D),y),i.emit("reInit")}function B(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),u.clear()}function z(){g||(g=!0,u.clear(),B(),i.emit("destroy"),i.clear())}function G(D,y,O){!x.active||g||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:x.duration),f.scrollTo.index(D,O||0))}function H(D){const y=f.index.add(1).get();G(y,D,-1)}function Y(D){const y=f.index.add(-1).get();G(y,D,1)}function J(){return f.index.add(1).get()!==R()}function $(){return f.index.add(-1).get()!==R()}function q(){return f.scrollSnapList}function rt(){return f.scrollProgress.get(f.location.get())}function R(){return f.index.get()}function nt(){return f.indexPrevious.get()}function et(){return f.slidesInView.get()}function _(){return f.slidesInView.get(!1)}function st(){return A}function it(){return f}function N(){return t}function C(){return T}function K(){return v}const V={canScrollNext:J,canScrollPrev:$,containerNode:C,internalEngine:it,destroy:z,off:b,on:p,emit:l,plugins:st,previousScrollSnap:nt,reInit:m,rootNode:N,scrollNext:H,scrollPrev:Y,scrollProgress:rt,scrollSnapList:q,scrollTo:G,selectedScrollSnap:R,slideNodes:K,slidesInView:et,slidesNotInView:_};return k(n,r),setTimeout(()=>i.emit("init"),0),V}gt.globalOptions=void 0;function Jt(t={},n=[]){const r=Nt(t),s=Nt(n);let c=r?t.value:t,o=s?n.value:n;const e=Vt(),u=Vt();function i(){u.value&&u.value.reInit(c,o)}return cn(()=>{!fn()||!e.value||(gt.globalOptions=Jt.globalOptions,u.value=gt(e.value,c,o))}),un(()=>{u.value&&u.value.destroy()}),r&&jt(t,a=>{Tt(c,a)||(c=a,i())}),s&&jt(n,a=>{ln(o,a)||(o=a,i())}),[e,u]}Jt.globalOptions=void 0;export{qn as a,Jt as e,$n as r};
