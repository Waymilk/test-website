import{d,r as I,a as u,o as f,c as b,w as _,b as i,e as x,p as k,f as L,g as p,h as g,F as T,i as w,j as A,k as O,t as V,l as P,m as $}from"./vendor.98f440ba.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};R();var v=(c,n)=>{const r=c.__vccOpts||c;for(const[o,e]of n)r[o]=e;return r};const h=c=>(k("data-v-1c755d52"),c=c(),L(),c),j=h(()=>p("span",null,"\u8BA2\u9605",-1)),D=h(()=>p("span",null,"\u884C\u60C5",-1)),N=h(()=>p("span",null,"\u6211\u7684",-1)),B=d({setup(c){const n=I(0);return(r,o)=>{const e=u("Icon"),t=u("van-tabbar-item"),a=u("van-tabbar");return r.$route.meta.showTab?(f(),b(a,{key:0,route:"","active-color":"#C30D23","inactive-color":"#A2AEBF",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),placeholder:"",class:"nav-bar"},{default:_(()=>[i(t,{replace:"",to:"/home"},{icon:_(s=>[i(e,{class:"iconfont home-icon",name:s.active?"icon-logo":"icon-logo-on"},null,8,["name"])]),_:1}),i(t,{replace:"",to:"/subscribe",icon:"cast","icon-prefix":"icon",class:"iconfont"},{icon:_(s=>[i(e,{class:"iconfont",name:s.active?"icon-cast-on":"icon-cast1"},null,8,["name"])]),default:_(()=>[j]),_:1}),i(t,{replace:"",to:"/market",icon:"bar-chart-2","icon-prefix":"icon",class:"iconfont"},{icon:_(s=>[i(e,{class:"iconfont",name:s.active?"icon-chart-on":"icon-chart"},null,8,["name"])]),default:_(()=>[D]),_:1}),i(t,{replace:"",to:"/mine",icon:"user","icon-prefix":"icon",class:"iconfont"},{icon:_(s=>[i(e,{class:"iconfont",name:s.active?"icon-user-on":"icon-user"},null,8,["name"])]),default:_(()=>[N]),_:1})]),_:1},8,["modelValue"])):x("",!0)}}});var C=v(B,[["__scopeId","data-v-1c755d52"]]);const S=d({setup(c){return(n,r)=>{const o=u("router-view");return f(),g(T,null,[i(o),i(C)],64)}}}),F="modulepreload",y={},q="./",l=function(n,r){return!r||r.length===0?n():Promise.all(r.map(o=>{if(o=`${q}${o}`,o in y)return;y[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":F,e||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),e)return new Promise((s,E)=>{a.addEventListener("load",s),a.addEventListener("error",E)})})).then(()=>n())},H=[{path:"/",redirect:"/home"},{path:"/home",name:"home",meta:{showTab:!0},component:()=>l(()=>import("./index.c63d16bf.js"),["assets/index.c63d16bf.js","assets/index.7ff3b0dd.css","assets/InfoList.8227d5be.js","assets/InfoList.d670501b.css","assets/dimond.3e4595ad.js","assets/vendor.98f440ba.js"])},{path:"/subscribe",name:"subscribe",meta:{showTab:!0},component:()=>l(()=>import("./index.91988998.js"),["assets/index.91988998.js","assets/index.b35d8595.css","assets/vendor.98f440ba.js"])},{path:"/market",name:"market",meta:{showTab:!0},component:()=>l(()=>import("./index.ee2f6afc.js"),[])},{path:"/mine",name:"mine",meta:{showTab:!0},component:()=>l(()=>import("./index.b1b624a5.js"),[])},{path:"/detail",name:"detail",component:()=>l(()=>import("./detail.1b6912a4.js"),["assets/detail.1b6912a4.js","assets/detail.73b582fd.css","assets/dimond.3e4595ad.js","assets/vendor.98f440ba.js"])},{path:"/order-confirm",name:"order-confirm",component:()=>l(()=>import("./order-confirm.624a1bbf.js"),["assets/order-confirm.624a1bbf.js","assets/order-confirm.b4383a39.css","assets/vendor.98f440ba.js"])},{path:"/subscribe-confirm",name:"subscribe-confirm",component:()=>l(()=>import("./subscribe-confirm.6442fedb.js"),["assets/subscribe-confirm.6442fedb.js","assets/subscribe-confirm.a1e758b6.css","assets/dimond.3e4595ad.js","assets/vendor.98f440ba.js"])},{path:"/channel-detail",name:"channel-detail",component:()=>l(()=>import("./channel-detail.6174faed.js"),["assets/channel-detail.6174faed.js","assets/channel-detail.164578d0.css","assets/dimond.3e4595ad.js","assets/InfoList.8227d5be.js","assets/InfoList.d670501b.css","assets/vendor.98f440ba.js"])},{path:"/info-list",name:"info-list",component:()=>l(()=>import("./information-list.37697adb.js"),["assets/information-list.37697adb.js","assets/information-list.36669d57.css","assets/vendor.98f440ba.js"])}],W=w({history:A(),routes:H});const z={class:"iconfont","aria-hidden":"true"},K=["xlink:href"],U=d({props:{name:String},setup(c){const n=c,r=()=>`#${n.name}`;return(o,e)=>(f(),g("svg",z,[p("use",{"xlink:href":r()},null,8,K)]))}});var G=v(U,[["__scopeId","data-v-819b6fd6"]]);const J={class:"top-nav-left-txt"},M=d({props:{title:String,showRight:{type:Boolean,default:!0}},setup(c){const n=c,r=()=>{history.back()};return(o,e)=>{const t=u("Icon"),a=u("van-nav-bar");return f(),b(a,{class:"top-nav",placeholder:"","left-arrow":"",onClickLeft:e[0]||(e[0]=s=>r())},O({left:_(()=>[i(t,{name:"icon-back"}),p("span",J,V(n.title),1)]),_:2},[n.showRight?{name:"right",fn:_(()=>[i(t,{name:"icon-more-horizontal"})])}:void 0]),1024)}}});var Q=v(M,[["__scopeId","data-v-68bfcd46"]]);const m=P(S);m.use(W);m.use($);m.component("Icon",G);m.component("TopNav",Q);m.mount("#app");export{v as _};
