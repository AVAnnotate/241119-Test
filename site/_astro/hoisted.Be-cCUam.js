import"./hoisted.DrPFa1Qe.js";import{d as c}from"./player.CKjfIk3N.js";import{$ as a}from"./store.aycOQVLs.js";const p=o=>{o.classList.add("hidden"),o.classList.remove("flex")},y=o=>{o.classList.add("flex"),o.classList.remove("hidden")},m="!bg-blue-hover",b=document.querySelectorAll(".playAnnotation");for(let o=0;o<b.length;o++){const s=b[o];if(s.dataset.start&&s.dataset.playerId){const e=a.get()[s.dataset.playerId]?.annotationStarts;e&&(e.push({start:Math.floor(Number(s.dataset.start)),end:Math.floor(Number(s.dataset.end))>Math.floor(Number(s.dataset.start))?Math.floor(Number(s.dataset.end)):void 0}),a.setKey(s.dataset.playerId,{...a.get()[s.dataset.playerId]||c,annotationStarts:e})),s.addEventListener("click",()=>{const r=s.dataset.playerId||"null";a.setKey(r,{...a.get()[r]||c,position:Number(s.dataset.start),seekTo:Number(s.dataset.start),isPlaying:!0})})}}a.listen((o,s,e)=>{if(!e)return null;const r=document.querySelector(`.eventContainer[data-player-id="${e}"]`);if(!r)return console.error(`No event container found for ${e}`),null;const i=r.querySelectorAll(".annotationNode"),l=r.querySelectorAll(".annotationTags"),f=o[e].annotationStarts,d=f?.findIndex((t,n)=>typeof t.end=="number"?t.start<=o[e].position&&t.end>o[e].position:n<f.length-1?t.start<=o[e].position&&f[n+1].start>o[e].position:t.start<=o[e].position);if(typeof d=="number"&&d>=0){const t=i[d];if(t){if(o[e].autoScroll)if(o[e].isEmbed){const n=document.querySelector(`.videoAnnotationContainer[data-player-id="${e}"]`),u=t.offsetTop;n?n.scroll({top:u-n.clientHeight,behavior:"smooth"}):r.scroll({top:u-r.clientHeight/3,behavior:"smooth"})}else t.scrollIntoView({behavior:"smooth",block:"end"});t.classList.add(m)}for(let n=0;n<i.length;n++)n!==d&&i[n].classList.remove(m)}if(o[e].showTags!==s[e]?.showTags)if(o[e].showTags)for(let t=0;t<l.length;t++)y(l[t]);else for(let t=0;t<l.length;t++)p(l[t]);for(const t of i){const n=t.getAttribute("data-uuid");n&&o[e].filteredAnnotations.includes(n)?y(t):p(t)}});