import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as b}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),p=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),T=document.querySelector("span[data-seconds]");let n,a;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],S(a)}};h("#datetime-picker",v);o.addEventListener("click",C);function S(t){t<=new Date?(o.setAttribute("disabled",!0),b.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:"../img/icons/bi_x-octagon.svg"})):o.removeAttribute("disabled")}function r(t){return String(t).padStart(2,"0")}function C(){o.setAttribute("disabled",!0),c.setAttribute("disabled",!0),clearInterval(n);const t=new Date;let e=a.getTime()-t.getTime();n=setInterval(()=>{if(e-=1e3,e<0){clearInterval(n),u({days:0,hours:0,minutes:0,seconds:0}),o.removeAttribute("disabled"),c.removeAttribute("disabled");return}u(D(e))},1e3)}function u({days:t,hours:e,minutes:s,seconds:i}){p.textContent=r(t),y.textContent=r(e),g.textContent=r(s),T.textContent=r(i)}function D(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map