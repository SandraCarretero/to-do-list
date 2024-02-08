(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const f=document.getElementById("tasks"),p=document.getElementById("buttons"),g=document.getElementById("form"),d=document.getElementById("count-task"),k=document.getElementById("delete-task"),m=document.getElementById("mode"),E=p.querySelectorAll(".filter");let i=!1;const T=()=>{i=!i,i?(document.body.classList.add("dark"),m.src="../assets/images/icon-sun.svg"):(document.body.classList.remove("dark"),m.src="../assets/images/icon-moon.svg")};let c=[{id:Date.now(),task:"Make a todo app",completed:!1}];const u=()=>{const e=document.querySelector(".filter--active").dataset.filter;let t=c;return e==="active"?t=c.filter(n=>!n.completed):e==="completed"&&(t=c.filter(n=>n.completed)),t},y=()=>{const e=c.filter(t=>!t.completed).length;c.length===0?d.textContent="No tasks":e===0?d.textContent="All tasks completed!":d.textContent=`${e} items left`},a=e=>{const t=document.createDocumentFragment();e.forEach(n=>{const l=document.createElement("div");l.classList.add("task-container");const s=document.createElement("input");s.classList.add("check-task"),s.type="checkbox",s.checked=n.completed,s.id=n.id;const o=document.createElement("label");o.classList.add("text-task"),o.textContent=n.task,o.htmlFor=n.id;const r=document.createElement("img");r.classList.add("cross-task"),r.src="../assets/images/icon-cross.svg",r.addEventListener("click",()=>h(n.id)),s.addEventListener("change",()=>v(n.id)),l.append(s,o,r),t.append(l)}),f.textContent="",f.append(t),y()},L=e=>{c.push(e);const t=u();a(t)},h=e=>{c=c.filter(t=>t.id!==e),console.log(c),a(c)},v=e=>{c=c.map(n=>(n.id===e&&(n.completed=!n.completed),n));const t=u();a(t)},b=e=>{const t={id:Date.now(),task:e,completed:!1};L(t)},w=e=>{[...E].forEach(t=>{t.classList.remove("filter--active")}),e.classList.add("filter--active")},x=e=>{w(e);const t=u();a(t)},C=()=>{c=c.filter(e=>!e.completed),a(c)};a(c);m.addEventListener("click",T);g.addEventListener("submit",e=>{e.preventDefault(),e.target.task.value!==""&&(b(e.target.task.value),e.target.reset())});k.addEventListener("click",C);p.addEventListener("click",e=>{e.target.tagName==="BUTTON"&&x(e.target)});
