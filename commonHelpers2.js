import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const t=document.querySelector("form");t.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(t),o=parseInt(s.get("delay")),r=s.get("state")==="fulfilled";new Promise((n,a)=>{setTimeout(()=>{r?n(o):a(o)},o)}).then(l).catch(m)});function l(e){i.show({message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"#59A10D",messageColor:"#fff",position:"topRight"})}function m(e){i.show({message:`❌ Rejected promise in ${e}ms`,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight"})}
//# sourceMappingURL=commonHelpers2.js.map