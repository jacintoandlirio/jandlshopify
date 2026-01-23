
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "697349dc815d2abe79082614";
              window.beaePageSetting.pageTitle = "j&l-homepage_ric-internship "; 
              window.beaePageSetting.pageType = "home";

          let js_0UJSTEVJ = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-lcgttxwpsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lcgttxwp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lcgttxwp');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lcgttxwp: ', ex)
      };
    

      try {
        let argid = 'beae-lcgttxwpsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lcgttxwp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lcgttxwp');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lcgttxwp: ', ex)
      };
    

      try {
        let argid = 'beae-m0bii484block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m0bii484',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m0bii484');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m0bii484: ', ex)
      };
    

      try {
        let argid = 'beae-erv6apt2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-erv6apt2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-erv6apt2');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-erv6apt2: ', ex)
      };
    

      try {
        let argid = 'beae-vffww7aiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vffww7ai',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vffww7ai');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vffww7ai: ', ex)
      };
    

      try {
        let argid = 'beae-ptume22zbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ptume22z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ptume22z');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ptume22z: ', ex)
      };
    

      try {
        let argid = 'beae-ajgn5cqdsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ajgn5cqd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ajgn5cqd');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ajgn5cqd: ', ex)
      };
    

      try {
        let argid = 'beae-epjb1jp9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-epjb1jp9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-epjb1jp9');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-epjb1jp9: ', ex)
      };
    

      try {
        let argid = 'beae-lpb4pkj1section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lpb4pkj1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lpb4pkj1');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lpb4pkj1: ', ex)
      };
    

      try {
        let argid = 'beae-h11vrha1section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-h11vrha1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-h11vrha1');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-h11vrha1: ', ex)
      };
    

      try {
        let argid = 'beae-wq4t0q5ssection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wq4t0q5s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wq4t0q5s');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wq4t0q5s: ', ex)
      };
    

      try {
        let argid = 'beae-xz832e5hsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xz832e5h',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xz832e5h');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xz832e5h: ', ex)
      };
    

      try {
        let argid = 'beae-5pr0tp2nblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5pr0tp2n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5pr0tp2n');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5pr0tp2n: ', ex)
      };
    

      try {
        let argid = 'beae-hh0cse0mblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hh0cse0m',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hh0cse0m');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hh0cse0m: ', ex)
      };
    

      try {
        let argid = 'beae-o3l8dpatblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o3l8dpat',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o3l8dpat');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o3l8dpat: ', ex)
      };
    

      try {
        let argid = 'beae-5pr0tp2nblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5pr0tp2n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5pr0tp2n');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5pr0tp2n: ', ex)
      };
    

      try {
        let argid = 'beae-hh0cse0mblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hh0cse0m',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hh0cse0m');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hh0cse0m: ', ex)
      };
    

      try {
        let argid = 'beae-o3l8dpatblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o3l8dpat',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o3l8dpat');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o3l8dpat: ', ex)
      };
    

      try {
        let argid = 'beae-5pr0tp2nblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5pr0tp2n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5pr0tp2n');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5pr0tp2n: ', ex)
      };
    

      try {
        let argid = 'beae-hh0cse0mblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hh0cse0m',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hh0cse0m');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hh0cse0m: ', ex)
      };
    

      try {
        let argid = 'beae-o3l8dpatblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o3l8dpat',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o3l8dpat');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o3l8dpat: ', ex)
      };
    

      try {
        let argid = 'beae-zikrvphgsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zikrvphg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zikrvphg');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zikrvphg: ', ex)
      };
    

      try {
        let argid = 'beae-l5nnuvb7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l5nnuvb7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l5nnuvb7');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l5nnuvb7: ', ex)
      };
    

      try {
        let argid = 'beae-e1hm8ghgsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e1hm8ghg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e1hm8ghg');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),p=y.children;d>=p.length?y.appendChild(h):y.insertBefore(h,p[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e1hm8ghg: ', ex)
      };
    

      try {
        let argid = 'beae-e1hm8ghgsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e1hm8ghg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e1hm8ghg');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e1hm8ghg: ', ex)
      };
    

      try {
        let argid = 'beae-zmz03l0gblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zmz03l0g',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zmz03l0g');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zmz03l0g: ', ex)
      };
    

      try {
        let argid = 'beae-3mtta3d4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3mtta3d4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3mtta3d4');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3mtta3d4: ', ex)
      };
    

      try {
        let argid = 'beae-6gm69h07block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6gm69h07',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6gm69h07');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6gm69h07: ', ex)
      };
    

      try {
        let argid = 'beae-coik7gyrblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-coik7gyr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-coik7gyr');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-coik7gyr: ', ex)
      };
    

      try {
        let argid = 'beae-enuxmeozblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-enuxmeoz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-enuxmeoz');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let S=0;S<v.els.length;S++)if(S==v.loopIndex){const B=v.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let L=B.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=k.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-enuxmeoz: ', ex)
      };
    

      try {
        let argid = 'beae-j2lx2qvlsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j2lx2qvl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j2lx2qvl');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j2lx2qvl: ', ex)
      };
    

      try {
        let argid = 'beae-r9gy9u6eblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r9gy9u6e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r9gy9u6e');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r9gy9u6e: ', ex)
      };
    

      try {
        let argid = 'beae-op871b5oblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-op871b5o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-op871b5o');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-op871b5o: ', ex)
      };
    

      try {
        let argid = 'beae-4nrub9jvbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4nrub9jv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4nrub9jv');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4nrub9jv: ', ex)
      };
    

      try {
        let argid = 'beae-vk9c6tddbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vk9c6tdd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vk9c6tdd');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vk9c6tdd: ', ex)
      };
    

      try {
        let argid = 'beae-d4uq96xwsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-d4uq96xw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-d4uq96xw');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-d4uq96xw: ', ex)
      };
    

      try {
        let argid = 'beae-otldligsblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-otldligs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-otldligs');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-otldligs: ', ex)
      };
    

      try {
        let argid = 'beae-lpprqrfqsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lpprqrfq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lpprqrfq');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lpprqrfq: ', ex)
      };
    

      try {
        let argid = 'beae-lpprqrfqsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lpprqrfq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lpprqrfq');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lpprqrfq: ', ex)
      };
    

      try {
        let argid = 'beae-z1yv2k9pblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z1yv2k9p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z1yv2k9p');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z1yv2k9p: ', ex)
      };
    

      try {
        let argid = 'beae-n0n8myonblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-n0n8myon',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-n0n8myon');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-n0n8myon: ', ex)
      };
    

      try {
        let argid = 'beae-r307lqf1section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r307lqf1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r307lqf1');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r307lqf1: ', ex)
      };
    

      try {
        let argid = 'beae-rdaqcuz1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rdaqcuz1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rdaqcuz1');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rdaqcuz1: ', ex)
      };
    

      try {
        let argid = 'beae-6p1gopa9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6p1gopa9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6p1gopa9');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6p1gopa9: ', ex)
      };
    

      try {
        let argid = 'beae-1xg34vo8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1xg34vo8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1xg34vo8');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1xg34vo8: ', ex)
      };
    

      try {
        let argid = 'beae-fk4qtj7kbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fk4qtj7k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fk4qtj7k');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fk4qtj7k: ', ex)
      };
    

      try {
        let argid = 'beae-ta67zt94section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ta67zt94',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ta67zt94');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),p=y.children;d>=p.length?y.appendChild(h):y.insertBefore(h,p[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ta67zt94: ', ex)
      };
    

      try {
        let argid = 'beae-ta67zt94section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ta67zt94',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ta67zt94');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ta67zt94: ', ex)
      };
    

      try {
        let argid = 'beae-m31itrgiblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m31itrgi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m31itrgi');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m31itrgi: ', ex)
      };
    

      try {
        let argid = 'beae-jdbagxozblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jdbagxoz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jdbagxoz');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jdbagxoz: ', ex)
      };
    

      try {
        let argid = 'beae-svss5py7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-svss5py7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-svss5py7');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-svss5py7: ', ex)
      };
    

      try {
        let argid = 'beae-c34ksstxblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c34ksstx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c34ksstx');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c34ksstx: ', ex)
      };
    

      try {
        let argid = 'beae-18hhxmb3block-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-18hhxmb3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-18hhxmb3');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let S=0;S<v.els.length;S++)if(S==v.loopIndex){const B=v.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let L=B.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=k.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-18hhxmb3: ', ex)
      };
    

      try {
        let argid = 'beae-83b9amewsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-83b9amew',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-83b9amew');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-83b9amew: ', ex)
      };
    

      try {
        let argid = 'beae-glzlxxkqsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-glzlxxkq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-glzlxxkq');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-glzlxxkq: ', ex)
      };
    

      try {
        let argid = 'beae-te7s9opdblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-te7s9opd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-te7s9opd');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-te7s9opd: ', ex)
      };
    

      try {
        let argid = 'beae-te7s9opdblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-te7s9opd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-te7s9opd');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-te7s9opd: ', ex)
      };
    

      try {
        let argid = 'beae-te7s9opdblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-te7s9opd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-te7s9opd');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-te7s9opd: ', ex)
      };
    

      try {
        let argid = 'beae-te7s9opdblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-te7s9opd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-te7s9opd');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-te7s9opd: ', ex)
      };
    

      try {
        let argid = 'beae-te7s9opdblock-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-te7s9opd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-te7s9opd');
        args.el = args.els[4];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-te7s9opd: ', ex)
      };
    

      try {
        let argid = 'beae-91dph1m5section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-91dph1m5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-91dph1m5');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-91dph1m5: ', ex)
      };
    

      try {
        let argid = 'beae-by5ezb30block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-by5ezb30',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-by5ezb30');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-by5ezb30: ', ex)
      };
    

      try {
        let argid = 'beae-8aqc5eq2block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8aqc5eq2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8aqc5eq2');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8aqc5eq2: ', ex)
      };
    

      try {
        let argid = 'beae-3wx12nohbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3wx12noh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3wx12noh');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3wx12noh: ', ex)
      };
    

      try {
        let argid = 'beae-r6ik77hlblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r6ik77hl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r6ik77hl');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r6ik77hl: ', ex)
      };
    

      try {
        let argid = 'beae-tlr367ltblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tlr367lt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tlr367lt');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tlr367lt: ', ex)
      };
    

      try {
        let argid = 'beae-j7tkdjl4button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-j7tkdjl4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-j7tkdjl4');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-j7tkdjl4: ', ex)
      };
    

      try {
        let argid = 'beae-ctr153j3block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ctr153j3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ctr153j3');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ctr153j3: ', ex)
      };
    

      try {
        let argid = 'beae-vn7oiwpzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vn7oiwpz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vn7oiwpz');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vn7oiwpz: ', ex)
      };
    

      try {
        let argid = 'beae-w8q6jj6zbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-w8q6jj6z',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-w8q6jj6z');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-w8q6jj6z: ', ex)
      };
    

      try {
        let argid = 'beae-6xlhscrpsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6xlhscrp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6xlhscrp');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6xlhscrp: ', ex)
      };
    

      try {
        let argid = 'beae-xdwabexmsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xdwabexm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xdwabexm');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xdwabexm: ', ex)
      };
    

      try {
        let argid = 'beae-2gf6wpzvblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2gf6wpzv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2gf6wpzv');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2gf6wpzv: ', ex)
      };
    

      try {
        let argid = 'beae-vpzfmeanblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vpzfmean',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vpzfmean');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vpzfmean: ', ex)
      };
    

      try {
        let argid = 'beae-fy4nisu6block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fy4nisu6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fy4nisu6');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fy4nisu6: ', ex)
      };
    

      try {
        let argid = 'beae-yjxu6j7pbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjxu6j7p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjxu6j7p');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjxu6j7p: ', ex)
      };
    

      try {
        let argid = 'beae-2gf6wpzvblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2gf6wpzv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2gf6wpzv');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2gf6wpzv: ', ex)
      };
    

      try {
        let argid = 'beae-vpzfmeanblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vpzfmean',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vpzfmean');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vpzfmean: ', ex)
      };
    

      try {
        let argid = 'beae-fy4nisu6block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fy4nisu6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fy4nisu6');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fy4nisu6: ', ex)
      };
    

      try {
        let argid = 'beae-yjxu6j7pbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjxu6j7p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjxu6j7p');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjxu6j7p: ', ex)
      };
    

      try {
        let argid = 'beae-2gf6wpzvblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2gf6wpzv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2gf6wpzv');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),I,A=window.innerWidth>=768&&M.autoHover;var L=H.querySelector(".beae-img-ratio-control"),V=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(L&&T){let O=function(z){let D=0,q;R(),A?H.onmouseover=function(W){Z(W)}:z.onmousedown=function(W){Z(W)},H.onmouseup=function(){U()},z.ontouchstart=function(W){Z(W)},H.ontouchend=function(){U()};function R(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),z.style.left&&parseInt(z.style.left)}function Z(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(z.style.left),D=1,H.onmousemove=function(X){j(X)},H.ontouchmove=function(X){j(X)}}function U(){D=0,check=!0}function j(W){if(D==0)return!1;q=G(W),q<0&&(q=0),q>100&&(q=100),F(q)}function G(W){const X=H.getBoundingClientRect(),ae=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(ae*100/I)))}function F(W){z.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,V.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};L&&T&&O(L),window.addEventListener("resize",function(){L&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{I=T.offsetWidth})}).observe(T),O(L))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let I=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(I)return I.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2gf6wpzv: ', ex)
      };
    

      try {
        let argid = 'beae-vpzfmeanblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vpzfmean',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vpzfmean');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vpzfmean: ', ex)
      };
    

      try {
        let argid = 'beae-fy4nisu6block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fy4nisu6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fy4nisu6');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fy4nisu6: ', ex)
      };
    

      try {
        let argid = 'beae-yjxu6j7pbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-yjxu6j7p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-yjxu6j7p');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-yjxu6j7p: ', ex)
      };
    

      try {
        let argid = 'beae-4h9cg1o4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4h9cg1o4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4h9cg1o4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4h9cg1o4: ', ex)
      };
    

      try {
        let argid = 'beae-dqirw58iblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dqirw58i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dqirw58i');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dqirw58i: ', ex)
      };
    

      try {
        let argid = 'beae-fogopej0block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fogopej0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fogopej0');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),v=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fogopej0: ', ex)
      };
    

      try {
        let argid = 'beae-6qk5kz1isection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6qk5kz1i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6qk5kz1i');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6qk5kz1i: ', ex)
      };
    

      try {
        let argid = 'beae-hjsumccesection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hjsumcce',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hjsumcce');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hjsumcce: ', ex)
      };
    

      try {
        let argid = 'beae-e3crva07block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e3crva07',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e3crva07');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e3crva07: ', ex)
      };
    

      try {
        let argid = 'beae-e1nfqbznblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e1nfqbzn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e1nfqbzn');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e1nfqbzn: ', ex)
      };
    

      try {
        let argid = 'beae-dxyrfm6pbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dxyrfm6p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dxyrfm6p');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dxyrfm6p: ', ex)
      };
    

      try {
        let argid = 'beae-e3crva07block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e3crva07',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e3crva07');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e3crva07: ', ex)
      };
    

      try {
        let argid = 'beae-e1nfqbznblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e1nfqbzn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e1nfqbzn');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e1nfqbzn: ', ex)
      };
    

      try {
        let argid = 'beae-dxyrfm6pbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dxyrfm6p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dxyrfm6p');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dxyrfm6p: ', ex)
      };
    

      try {
        let argid = 'beae-e3crva07block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e3crva07',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e3crva07');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e3crva07: ', ex)
      };
    

      try {
        let argid = 'beae-e1nfqbznblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e1nfqbzn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e1nfqbzn');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e1nfqbzn: ', ex)
      };
    

      try {
        let argid = 'beae-dxyrfm6pbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dxyrfm6p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dxyrfm6p');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dxyrfm6p: ', ex)
      };
    

      try {
        let argid = 'beae-e3crva07block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e3crva07',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e3crva07');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e3crva07: ', ex)
      };
    

      try {
        let argid = 'beae-e1nfqbznblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e1nfqbzn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e1nfqbzn');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e1nfqbzn: ', ex)
      };
    

      try {
        let argid = 'beae-dxyrfm6pbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dxyrfm6p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dxyrfm6p');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dxyrfm6p: ', ex)
      };
    

      try {
        let argid = 'beae-s9y1bctisection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s9y1bcti',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s9y1bcti');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s9y1bcti: ', ex)
      };
    

      try {
        let argid = 'beae-b0spt21cblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b0spt21c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b0spt21c');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b0spt21c: ', ex)
      };
    

      try {
        let argid = 'beae-is872a7vblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-is872a7v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-is872a7v');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-is872a7v: ', ex)
      };
    }; if (window.BEAEBASE) {js_0UJSTEVJ()} else {window.BEAEPAGEJS.push(js_0UJSTEVJ)} })(); 