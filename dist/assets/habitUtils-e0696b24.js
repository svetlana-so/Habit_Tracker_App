import{r as c,c as n}from"./index-32ad321d.js";function f(t){const a=["SUN","MON","TUE","WED","THU","FRI","SAT"][t.getDay()],o=t.getDate();return{day:a,dayOfMonth:o}}const D=t=>{const e={month:"long",day:"numeric"};return new Date(t).toLocaleDateString("en-US",e)},r=c(new Date),g=n(()=>r.value.toISOString().split("T")[0]),y=n(()=>r.value.toLocaleDateString(void 0,{weekday:"long"})),m=n(()=>r.value.toLocaleDateString(void 0,{month:"long"})),S=n(()=>r.value.getDate()),p=t=>{const e=new Date(t),a=new Date;return a.setDate(a.getDate()+1),a.setHours(0,0,0,0),e>a},s=c([]),l=t=>{localStorage.setItem("dailyHabits",JSON.stringify(t))},b=()=>{const t=localStorage.getItem("dailyHabits");return t?JSON.parse(t):[]},h=(t,e,a)=>{if(t&&e){for(let i=0;i<7;i++){const d=new Date(a.getTime()+i*24*60*60*1e3);s.value.push({txt:e.toUpperCase(),category:t,day:d.toISOString().split("T")[0],done:!1})}l(s.value)}else window.alert("Please select a category and enter a habit.")},v=(t,e)=>{const a=s.value.find(o=>o.txt===t&&o.day===e);a&&(a.done=!a.done,l(s.value))},T=n(()=>{const t={};for(const e of s.value)e.done&&(t[e.txt]||(t[e.txt]=[]),t[e.txt].push(e));for(const e in t)if(t[e].length>=7)return`Congratulations! You've successfully completed the habit '${e}' for seven days in a row. Keep going!`;return null});export{y as a,m as b,h as c,s as d,S as e,g as f,f as g,D as h,T as i,p as j,b as l,l as s,v as u};
