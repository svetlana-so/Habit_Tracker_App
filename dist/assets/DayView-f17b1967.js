import{d as k,h as ee,i as te,u as ne,j as ae,s as se}from"./habitUtils-e0696b24.js";import{r as re,c as N,q as oe,o as ie,b as _,d as b,F as z,i as P,e as l,s as w,h as L,a as le,j as V,x as ce,t as S,u as M}from"./index-32ad321d.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";function ue(e){return e==="Health and Fitness"?'<i class="fa-solid fa-dumbbell" style="color: #878282;"></i>':e==="Productivity"?'<i class="fa-solid fa-check-double" style="color: #878282;"></i>':e==="Personal Development"?'<i class="fa-solid fa-person" style="color: #878282;"></i>':e==="Financial"?'<i class="fa-solid fa-coins" style="color: #878282;"></i>':e==="Relationships"?'<i class="fa-solid fa-heart" style="color: #878282;"></i>':e==="Creativity"?'<i class="fa-solid fa-palette" style="color: #878282;"></i>':e==="Organization"?'<i class="fa-solid fa-sitemap" style="color: #878282;"></i>':e==="Hobbies"?'<i class="fa-solid fa-dice-three" style="color: #878282;"></i>':e==="Education"?'<i class="fa-solid fa-book" style="color: #878282;"></i>':e==="Mindset"?'<i class="fa-solid fa-brain" style="color: #878282;"></i>':e==="Other"?'<i class="fa-solid fa-bars-progress" style="color: #878282;"></i>':""}const F=200,fe=800,he=.1,me=.3,H=.5,ye=.5,ge=12,ve=800,xe=1600,_e=150,be=3500,pe=["#FFC700","#FF0000","#2E3191","#41BBC7"];var $={props:{particleCount:{type:Number,default:_e},particleSize:{type:Number,default:ge},duration:{type:Number,default:be},colors:{type:Array,default:pe},force:{type:Number,default:ye},stageHeight:{type:Number,default:ve},stageWidth:{type:Number,default:xe},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(e){const c=re(!0),d=(t,n)=>{U(t,{degree:n})},s=N(()=>h(e.particleCount,e.colors));oe(()=>{e.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉")});const i=N(()=>j(e.particleCount,e.duration,e.colors,e.particleSize,e.force,e.stageHeight,e.stageWidth));ie(async()=>{await f(e.duration),e.shouldDestroyAfterDone&&(c.value=!1)});const h=(t,n)=>{const a=360/t;return Array.from({length:t},(m,u)=>({color:n[u%n.length],degree:u*a}))},f=t=>new Promise(n=>setTimeout(n,t));function r(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((t+Number.EPSILON)*10**n)/10**n}function p(t,n){if(t===n)return!0;if(t==null||n==null||t.length!==n.length)return!1;for(let a=0;a<t.length;a++)if(t[a]!==n[a])return!1;return!0}const E=(t,n,a,m,u)=>(t-n)*(u-m)/(a-n)+m,R=(t,n)=>{const a=t+n;return a>360?a-360:a},O=()=>Math.random()>.5,D=[0,0,1],I=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],D],B=t=>!p(I[t],D)&&O(),g=t=>typeof t>"u",v=t=>{console.error(t)};function j(t,n,a,m,u,x,C){const y=Number.isSafeInteger;return!g(t)&&y(t)&&t<0?(v("particleCount must be a positive integer"),!1):!g(n)&&y(n)&&n<0?(v("duration must be a positive integer"),!1):!g(a)&&!Array.isArray(a)?(v("colors must be an array of strings"),!1):!g(m)&&y(m)&&m<0?(v("particleSize must be a positive integer"),!1):!g(u)&&y(u)&&(u<0||u>1)?(v("force must be a positive integer and should be within 0 and 1"),!1):!g(x)&&typeof x=="number"&&y(x)&&x<0?(v("floorHeight must be a positive integer"),!1):!g(C)&&typeof C=="number"&&y(C)&&C<0?(v("floorWidth must be a positive integer"),!1):!0}function U(t,n){let{degree:a}=n;const m=E(Math.abs(R(a,90)-180),0,180,-e.stageWidth/2,e.stageWidth/2),u=Math.random()*(fe-F)+F,x=Math.round(Math.random()*(I.length-1)),C=e.duration-Math.round(Math.random()*1e3),y=Math.random()<he,T=B(x),A=y?r(Math.random()*me,2):0,Y=A*-1,Z=A,W=r(Math.abs(E(Math.abs(R(a,90)-180),0,180,-1,1)),4),X=r(Math.random()*H,4),q=r(Math.random()*e.force*(O()?1:-1),4),G=H,Q=r(Math.max(E(Math.abs(a-180),0,180,e.force,-e.force),0),4),o=(J,K)=>t==null?void 0:t.style.setProperty(J,K+"");o("--x-landing-point",`${m}px`),o("--duration-chaos",`${C}ms`),o("--x1",`${A}`),o("--x2",`${Y}`),o("--x3",`${Z}`),o("--x4",`${W}`),o("--y1",`${X}`),o("--y2",`${q}`),o("--y3",`${G}`),o("--y4",`${Q}`),o("--width",`${T?e.particleSize:Math.round(Math.random()*4)+e.particleSize/2}px`),o("--height",(T?e.particleSize:Math.round(Math.random()*2)+e.particleSize)+"px"),o("--rotation",`${I[x].join()}`),o("--rotation-duration",`${u}ms`),o("--border-radius",`${T?"50%":"0"}`)}return{isVisible:c,isValid:i,stageHeight:e.stageHeight,particles:s,setItemRef:d}}};function Ce(e,c,d,s,i,h){return s.isVisible&&s.isValid?(_(),b("div",{key:0,class:"confetti-container",style:w(`--floor-height: ${s.stageHeight}px;`)},[(_(!0),b(z,null,P(s.particles,f=>{let{color:r,degree:p}=f;return _(),b("div",{key:p,class:"particle",ref:E=>s.setItemRef(E,p)},[l("div",{style:w(`--bgcolor: ${r};`)},null,4)],512)}),128))],4)):L("",!0)}function Ee(e,c){c===void 0&&(c={});var d=c.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",d==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Me=`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`;Ee(Me);$.render=Ce;$.__scopeId="data-v-4ff796ae";var ke=(()=>{const e=$;return e.install=c=>{c.component("ConfettiExplosion",e)},e})();const Se={components:{ConfettiExplosion:ke},props:{message:String}},Ne={key:0,class:"completion-message flex flex-col items-center"},Ie={class:"confetti-container"};function Te(e,c,d,s,i,h){const f=le("ConfettiExplosion");return d.message?(_(),b("div",Ne,[l("div",Ie,[V(f)]),ce(" "+S(d.message)+" ",1)])):L("",!0)}const Ae=de(Se,[["render",Te]]);const we={class:"m-8 text-center text-2xl text-zinc-400"},$e={class:"m-6 text-base font-medium dark:text-white"},Re={class:"w-full bg-gray-200 rounded-full h-2.5 m-6 dark:bg-gray-700"},Oe={class:"habitsCard flex justify-center"},De={class:"flex items-center ml-4"},Fe=["checked","onChange","disabled"],He=l("label",{for:"teal-checkbox",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},null,-1),ze=["innerHTML"],Pe={class:"text-xl md:text-2xl text-zinc-400"},Le=["onClick"],Ue={__name:"DayView",props:["day"],setup(e){const c=e,d=N(()=>k.value.filter(h=>h.day===c.day)),s=h=>{k.value=k.value.filter(f=>f.txt!==h.txt),se(k.value)},i=N(()=>!Array.isArray(d.value)||d.value.length===0?0:(d.value.filter(f=>f.done).length/d.value.length*100).toFixed(0));return(h,f)=>(_(),b("div",null,[l("h1",we," Yor habits for "+S(M(ee)(c.day)),1),l("div",$e," Your progress for today is "+S(i.value)+"% ",1),l("div",Re,[l("div",{class:"bg-gray-600 h-2.5 rounded-full dark:bg-gray-300",style:w({width:i.value+"%"})},null,4)]),V(Ae,{message:M(te),class:"animate-pulse m-8 text-center text-2xl text-teal-400"},null,8,["message"]),l("div",Oe,[l("ul",null,[(_(!0),b(z,null,P(d.value,r=>(_(),b("li",{key:r.id,class:"card m-4 p-2 space-x-12 flex justify-between"},[l("div",De,[l("input",{id:"teal-checkbox",type:"checkbox",checked:r.done,onChange:p=>M(ne)(r.txt,r.day),disabled:M(ae)(r.day),class:"w-6 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,40,Fe),He]),l("span",{innerHTML:M(ue)(r.category),class:"centered-span"},null,8,ze),l("div",Pe,S(r.txt),1),l("button",{onClick:p=>s(r),type:"button",class:"text-xl md:text-2xl text-zinc-400"}," X ",8,Le)]))),128))])])]))}};export{Ue as default};
