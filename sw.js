if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,n,o)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(n.map(r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}})).then(e=>{const r=o(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-a1d34bd3"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"28086721c539ccb5bd61691a5330b25e"},{url:"favicon.png",revision:"41235024c525aa134bc0ea7de5add705"},{url:"favicon.svg",revision:"035726755540dd5d3842b3330df44220"},{url:"index.html",revision:"011f0b79e57a2b662a51c28beb4af363"},{url:"logo.png",revision:"4844695d5716a0d4ed0f77f15e0d30e8"},{url:"logo.svg",revision:"3df232935fa956eb77f13c69adb4ada6"},{url:"main.min.css",revision:"87fa67f3b6b1a24bb188f6f755d96763"},{url:"mask-icon.svg",revision:"173e780e2d6911f25fa712a34f892ceb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts",plugins:[]}),"GET")}));