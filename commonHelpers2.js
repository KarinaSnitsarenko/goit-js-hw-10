import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector("form");s.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(s),o=t.get("delay"),r=t.get("state")==="fulfilled";new Promise((n,l)=>{setTimeout(()=>{r?n(`✅ Fulfilled promise in ${o}ms`):l(`❌ Rejected promise in ${o}ms`)},o)}).then(a).catch(f)});function a(e){i.show({message:e,backgroundColor:"#59A10D",messageColor:"#fff",position:"topRight"})}function f(e){i.show({message:e,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight"})}
//# sourceMappingURL=commonHelpers2.js.map
