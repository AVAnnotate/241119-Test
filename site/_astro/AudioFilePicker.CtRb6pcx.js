import{j as e}from"./jsx-runtime.CIMolHGP.js";import{u as o}from"./index.bM7OrN6I.js";import{s as n,$ as c}from"./store.aycOQVLs.js";import{d,f as m}from"./player.CKjfIk3N.js";import{P as f}from"./play-fill.B_vi0l2m.js";import"./index.DddtCxX5.js";import"./index.DpKhS-qi.js";const N=a=>{const r=(o(c)[a.playerId]||{...d}).avFileUuid||Object.keys(a.event.data.audiovisual_files)[0];return e.jsxs("div",{className:"py-2",children:[e.jsx("p",{children:a.event.data.label}),e.jsx("ol",{className:"flex flex-col gap-2",children:Object.keys(a.event.data.audiovisual_files).map((s,i)=>{const t=a.event.data.audiovisual_files[s],l=s===r;return e.jsxs("li",{className:"flex gap-2 items-center hover:cursor-pointer",onClick:()=>n(s,a.playerId),children:[e.jsx("div",{className:"w-4",children:l&&e.jsx(f,{})}),e.jsxs("span",{className:l?"font-bold":"",children:[i+1,".  ",t.label]}),e.jsx("span",{className:"flex items-center border border-black rounded-[5px] text-xs p-2 font-semibold h-6",children:m(t.duration,!1)})]},s)})})]})};export{N as default};
