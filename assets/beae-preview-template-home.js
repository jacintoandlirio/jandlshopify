
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "697349dc815d2abe79082614";
              window.beaePageSetting.pageTitle = "j&l-homepage_ric-internship "; 
              window.beaePageSetting.pageType = "home";

          let js_RFA961R3 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-nej9oteosection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nej9oteo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nej9oteo');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nej9oteo: ', ex)
      };
    

      try {
        let argid = 'beae-gsbic866block-hot-spot',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gsbic866',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gsbic866');
        args.el = args.els[0];
        ((data) => { const action_type=data.action_type,spot_popover_wrapper=data.el.querySelectorAll(".beae-popover-wrapper"),spot_list=data.el.querySelectorAll(".beae-hot-spot-container"),featured_image=data.el.querySelector(".beae-hot-spot-featured-image");function clearPopover(){spot_popover_wrapper.length>0&&spot_popover_wrapper.forEach(o=>{o.parentElement.classList.remove("hovered"),o.parentElement.classList.remove("active"),o.parentElement.querySelector(".beae-popover-arrow").style.opacity="0",o.parentElement.querySelector(".beae-popover-arrow").style.visibility="hidden",o.style.opacity="0",o.style.visibility="hidden"})}action_type=="click"&&document.addEventListener("click",function(o){o.target.closest(".beae-hot-spot-container")||clearPopover()}),spot_list.forEach((spot,i)=>{const spot_popover_wrapper=spot.querySelector(".beae-popover-wrapper"),parent_spot_popover_wrapper=spot_popover_wrapper.parentElement,spotRect=spot.getBoundingClientRect(),popoverRect=spot_popover_wrapper.getBoundingClientRect(),viewportRect=featured_image.getBoundingClientRect(),spaceLeft=spotRect.left-viewportRect.left,spaceRight=viewportRect.right-spotRect.right,spaceTop=spotRect.top-viewportRect.top,spaceBottom=viewportRect.bottom-spotRect.bottom;let isHovering=!0,hoverTimeout=null,placement="bottom-left";switch(spaceTop>=popoverRect.height&&spaceBottom<popoverRect.height?(parent_spot_popover_wrapper==null||parent_spot_popover_wrapper.classList.add("beae-spot-top"),spaceLeft>=popoverRect.width&&spaceRight<popoverRect.width?placement="top-left":spaceRight>=popoverRect.width&&spaceLeft<popoverRect.width?placement="top-right":placement="top-center"):(parent_spot_popover_wrapper==null||parent_spot_popover_wrapper.classList.remove("beae-spot-top"),spaceLeft>=popoverRect.width&&spaceRight<popoverRect.width?placement="bottom-left":spaceRight>=popoverRect.width&&spaceLeft<popoverRect.width?placement="bottom-right":placement="bottom-center"),placement){case"bottom-left":spot_popover_wrapper.style.left=`calc(100% - ${popoverRect.width}px)`;break;case"bottom-right":spot_popover_wrapper.style.right=`calc(100% - ${popoverRect.width}px)`;break;case"bottom-center":spot_popover_wrapper.style.left=`calc(50% - ${popoverRect.width/2}px)`;break;case"top-left":spot_popover_wrapper.style.left=`calc(100% - ${popoverRect.width}px)`,spot_popover_wrapper.style.top=`calc(100% - ${popoverRect.height}px - 80px)`;break;case"top-right":spot_popover_wrapper.style.right=`calc(100% - ${popoverRect.width}px)`,spot_popover_wrapper.style.top=`calc(100% - ${popoverRect.height}px - 80px)`;break;case"top-center":spot_popover_wrapper.style.left=`calc(50% - ${popoverRect.width/2}px)`,spot_popover_wrapper.style.top=`calc(100% - ${popoverRect.height}px - 80px)`;break}if(window.innerWidth<768){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}spot.onclick=function(o){o.preventDefault();const r=spot.querySelector(".beae-popover-wrapper");data.mode.value!=="builder"&&window.BeaePopupLibrary.createPopup(r,{...extOptions,id:data.id})}}else action_type=="click"?spot.onclick=function(o){if(o.target.closest(".beae-popover-wrapper"))return;if(o.preventDefault(),o.stopPropagation(),spot.classList.contains("active")){clearPopover();return}clearPopover();const r=spot.querySelector(".beae-popover-wrapper"),s=spot.querySelector(".beae-popover-arrow");spot.classList.add("active"),r.style.opacity=1,r.style.visibility="visible",s.style.opacity=1,s.style.visibility="visible"}:(spot.onmouseenter=function(o){o.preventDefault(),o.stopPropagation(),isHovering=!1,clearTimeout(hoverTimeout),spot.classList.add("hovered");const r=spot.querySelector(".beae-popover-wrapper"),s=spot.querySelector(".beae-popover-arrow");r.style.opacity=1,r.style.visibility="visible",s.style.opacity=1,s.style.visibility="visible"},spot.onmouseleave=function(o){o.preventDefault(),o.stopPropagation(),hoverTimeout=setTimeout(()=>{isHovering||clearPopover()},50)})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gsbic866: ', ex)
      };
    

      try {
        let argid = 'beae-0s5labm3block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0s5labm3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0s5labm3');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0s5labm3: ', ex)
      };
    

      try {
        let argid = 'beae-a5wt1oypblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a5wt1oyp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a5wt1oyp');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a5wt1oyp: ', ex)
      };
    

      try {
        let argid = 'beae-0s5labm3block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0s5labm3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0s5labm3');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0s5labm3: ', ex)
      };
    

      try {
        let argid = 'beae-a5wt1oypblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a5wt1oyp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a5wt1oyp');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a5wt1oyp: ', ex)
      };
    

      try {
        let argid = 'beae-0s5labm3block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0s5labm3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0s5labm3');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0s5labm3: ', ex)
      };
    

      try {
        let argid = 'beae-a5wt1oypblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a5wt1oyp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a5wt1oyp');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a5wt1oyp: ', ex)
      };
    

      try {
        let argid = 'beae-0s5labm3block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0s5labm3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0s5labm3');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0s5labm3: ', ex)
      };
    

      try {
        let argid = 'beae-a5wt1oypblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a5wt1oyp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a5wt1oyp');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a5wt1oyp: ', ex)
      };
    

      try {
        let argid = 'beae-0s5labm3block-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0s5labm3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0s5labm3');
        args.el = args.els[4];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0s5labm3: ', ex)
      };
    

      try {
        let argid = 'beae-a5wt1oypblock-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a5wt1oyp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a5wt1oyp');
        args.el = args.els[4];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a5wt1oyp: ', ex)
      };
    

      try {
        let argid = 'beae-egkqp4rvsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-egkqp4rv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-egkqp4rv');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-egkqp4rv: ', ex)
      };
    

      try {
        let argid = 'beae-n8gyu287block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-n8gyu287',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-n8gyu287');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-n8gyu287: ', ex)
      };
    

      try {
        let argid = 'beae-qu6s03fpsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qu6s03fp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qu6s03fp');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qu6s03fp: ', ex)
      };
    

      try {
        let argid = 'beae-w1l7lh14section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-w1l7lh14',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-w1l7lh14');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-w1l7lh14: ', ex)
      };
    

      try {
        let argid = 'beae-diknc2hsblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-diknc2hs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-diknc2hs');
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
        console.error('BEAE JS ERROR ID beae-diknc2hs: ', ex)
      };
    

      try {
        let argid = 'beae-42ytkulablock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-42ytkula',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-42ytkula');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-42ytkula: ', ex)
      };
    

      try {
        let argid = 'beae-twvzung8block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-twvzung8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-twvzung8');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-twvzung8: ', ex)
      };
    

      try {
        let argid = 'beae-diknc2hsblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-diknc2hs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-diknc2hs');
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
        console.error('BEAE JS ERROR ID beae-diknc2hs: ', ex)
      };
    

      try {
        let argid = 'beae-42ytkulablock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-42ytkula',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-42ytkula');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-42ytkula: ', ex)
      };
    

      try {
        let argid = 'beae-twvzung8block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-twvzung8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-twvzung8');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-twvzung8: ', ex)
      };
    

      try {
        let argid = 'beae-diknc2hsblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-diknc2hs',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-diknc2hs');
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
        console.error('BEAE JS ERROR ID beae-diknc2hs: ', ex)
      };
    

      try {
        let argid = 'beae-42ytkulablock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-42ytkula',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-42ytkula');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-42ytkula: ', ex)
      };
    

      try {
        let argid = 'beae-twvzung8block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-twvzung8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-twvzung8');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-twvzung8: ', ex)
      };
    

      try {
        let argid = 'beae-hmoz3nkssection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hmoz3nks',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hmoz3nks');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hmoz3nks: ', ex)
      };
    

      try {
        let argid = 'beae-avatqo4ublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-avatqo4u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-avatqo4u');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-avatqo4u: ', ex)
      };
    

      try {
        let argid = 'beae-ql1t1oofsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ql1t1oof',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ql1t1oof');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),p=y.children;d>=p.length?y.appendChild(h):y.insertBefore(h,p[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ql1t1oof: ', ex)
      };
    

      try {
        let argid = 'beae-ql1t1oofsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ql1t1oof',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ql1t1oof');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ql1t1oof: ', ex)
      };
    

      try {
        let argid = 'beae-e5rcta3dblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e5rcta3d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e5rcta3d');
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
        console.error('BEAE JS ERROR ID beae-e5rcta3d: ', ex)
      };
    

      try {
        let argid = 'beae-cebjhyrdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cebjhyrd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cebjhyrd');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cebjhyrd: ', ex)
      };
    

      try {
        let argid = 'beae-ttqvtl28block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ttqvtl28',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ttqvtl28');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ttqvtl28: ', ex)
      };
    

      try {
        let argid = 'beae-kvxg2ox8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kvxg2ox8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kvxg2ox8');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kvxg2ox8: ', ex)
      };
    

      try {
        let argid = 'beae-z2p2y7kmblock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z2p2y7km',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z2p2y7km');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let S=0;S<v.els.length;S++)if(S==v.loopIndex){const B=v.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let L=B.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=k.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z2p2y7km: ', ex)
      };
    

      try {
        let argid = 'beae-frmvjez9section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-frmvjez9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-frmvjez9');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-frmvjez9: ', ex)
      };
    

      try {
        let argid = 'beae-di463rjeblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-di463rje',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-di463rje');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-di463rje: ', ex)
      };
    

      try {
        let argid = 'beae-ujakfblfblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ujakfblf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ujakfblf');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ujakfblf: ', ex)
      };
    

      try {
        let argid = 'beae-tyjjtkprbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tyjjtkpr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tyjjtkpr');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tyjjtkpr: ', ex)
      };
    

      try {
        let argid = 'beae-315irtatbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-315irtat',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-315irtat');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-315irtat: ', ex)
      };
    

      try {
        let argid = 'beae-7wchrzkpsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7wchrzkp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7wchrzkp');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7wchrzkp: ', ex)
      };
    

      try {
        let argid = 'beae-vohvc97xblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vohvc97x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vohvc97x');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vohvc97x: ', ex)
      };
    

      try {
        let argid = 'beae-qan8a1rdsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qan8a1rd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qan8a1rd');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qan8a1rd: ', ex)
      };
    

      try {
        let argid = 'beae-qan8a1rdsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qan8a1rd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qan8a1rd');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qan8a1rd: ', ex)
      };
    

      try {
        let argid = 'beae-scslqjreblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-scslqjre',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-scslqjre');
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
        console.error('BEAE JS ERROR ID beae-scslqjre: ', ex)
      };
    

      try {
        let argid = 'beae-hime2azdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hime2azd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hime2azd');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hime2azd: ', ex)
      };
    

      try {
        let argid = 'beae-nt7oaem5section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nt7oaem5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nt7oaem5');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nt7oaem5: ', ex)
      };
    

      try {
        let argid = 'beae-ts29exu7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ts29exu7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ts29exu7');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ts29exu7: ', ex)
      };
    

      try {
        let argid = 'beae-7f3h5xelblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7f3h5xel',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7f3h5xel');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7f3h5xel: ', ex)
      };
    

      try {
        let argid = 'beae-2ed0y57oblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2ed0y57o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2ed0y57o');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2ed0y57o: ', ex)
      };
    

      try {
        let argid = 'beae-ovqynp57button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ovqynp57',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ovqynp57');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ovqynp57: ', ex)
      };
    

      try {
        let argid = 'beae-shc97i6rsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-shc97i6r',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-shc97i6r');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),p=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),p){p.setAttribute("data-active","false");const f=s(p);setTimeout(()=>{p.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&u(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function u(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),p=y.children;d>=p.length?y.appendChild(h):y.insertBefore(h,p[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-shc97i6r: ', ex)
      };
    

      try {
        let argid = 'beae-shc97i6rsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-shc97i6r',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-shc97i6r');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-shc97i6r: ', ex)
      };
    

      try {
        let argid = 'beae-aa2lswioblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aa2lswio',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aa2lswio');
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
        console.error('BEAE JS ERROR ID beae-aa2lswio: ', ex)
      };
    

      try {
        let argid = 'beae-axk4xlidblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-axk4xlid',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-axk4xlid');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-axk4xlid: ', ex)
      };
    

      try {
        let argid = 'beae-oy1nnsm7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oy1nnsm7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oy1nnsm7');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oy1nnsm7: ', ex)
      };
    

      try {
        let argid = 'beae-8x5rfx6xblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8x5rfx6x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8x5rfx6x');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8x5rfx6x: ', ex)
      };
    

      try {
        let argid = 'beae-39s2agfublock-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-39s2agfu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-39s2agfu');
        args.el = args.els[0];
        ((v) => { if(v.mode.value=="builder"){if(!v.els)return;for(let S=0;S<v.els.length;S++)if(S==v.loopIndex){const B=v.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let L=B.getAttribute("data-variant-id"),V=M[0];L&&(V=M.find(N=>N.id==L));const T=k.querySelector(".beae-add-to-cart-text-content");V!=null&&V.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-39s2agfu: ', ex)
      };
    

      try {
        let argid = 'beae-3clgd1casection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3clgd1ca',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3clgd1ca');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3clgd1ca: ', ex)
      };
    

      try {
        let argid = 'beae-uv1tfw8nsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uv1tfw8n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uv1tfw8n');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uv1tfw8n: ', ex)
      };
    

      try {
        let argid = 'beae-g0yqatmrblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g0yqatmr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g0yqatmr');
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
        console.error('BEAE JS ERROR ID beae-g0yqatmr: ', ex)
      };
    

      try {
        let argid = 'beae-g0yqatmrblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g0yqatmr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g0yqatmr');
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
        console.error('BEAE JS ERROR ID beae-g0yqatmr: ', ex)
      };
    

      try {
        let argid = 'beae-g0yqatmrblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g0yqatmr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g0yqatmr');
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
        console.error('BEAE JS ERROR ID beae-g0yqatmr: ', ex)
      };
    

      try {
        let argid = 'beae-g0yqatmrblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g0yqatmr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g0yqatmr');
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
        console.error('BEAE JS ERROR ID beae-g0yqatmr: ', ex)
      };
    

      try {
        let argid = 'beae-g0yqatmrblock-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g0yqatmr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g0yqatmr');
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
        console.error('BEAE JS ERROR ID beae-g0yqatmr: ', ex)
      };
    

      try {
        let argid = 'beae-i9anwmbrsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i9anwmbr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i9anwmbr');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i9anwmbr: ', ex)
      };
    

      try {
        let argid = 'beae-9398pxz0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9398pxz0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9398pxz0');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9398pxz0: ', ex)
      };
    

      try {
        let argid = 'beae-jijjojlbblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jijjojlb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jijjojlb');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jijjojlb: ', ex)
      };
    

      try {
        let argid = 'beae-1gszjbtgbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1gszjbtg',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1gszjbtg');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1gszjbtg: ', ex)
      };
    

      try {
        let argid = 'beae-c7gvh8rublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c7gvh8ru',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c7gvh8ru');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c7gvh8ru: ', ex)
      };
    

      try {
        let argid = 'beae-jobmkiayblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jobmkiay',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jobmkiay');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jobmkiay: ', ex)
      };
    

      try {
        let argid = 'beae-1lzrqkx6button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1lzrqkx6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1lzrqkx6');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1lzrqkx6: ', ex)
      };
    

      try {
        let argid = 'beae-etkdw2fiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-etkdw2fi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-etkdw2fi');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-etkdw2fi: ', ex)
      };
    

      try {
        let argid = 'beae-ay74pupvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ay74pupv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ay74pupv');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ay74pupv: ', ex)
      };
    

      try {
        let argid = 'beae-lufoi6mobutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lufoi6mo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lufoi6mo');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lufoi6mo: ', ex)
      };
    

      try {
        let argid = 'beae-nwsqxi4esection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nwsqxi4e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nwsqxi4e');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nwsqxi4e: ', ex)
      };
    

      try {
        let argid = 'beae-xzofkj87section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xzofkj87',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xzofkj87');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xzofkj87: ', ex)
      };
    

      try {
        let argid = 'beae-x4g0k9roblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x4g0k9ro',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x4g0k9ro');
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
        console.error('BEAE JS ERROR ID beae-x4g0k9ro: ', ex)
      };
    

      try {
        let argid = 'beae-687b7jwmblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-687b7jwm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-687b7jwm');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-687b7jwm: ', ex)
      };
    

      try {
        let argid = 'beae-bo8263kmblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bo8263km',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bo8263km');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bo8263km: ', ex)
      };
    

      try {
        let argid = 'beae-05uo1w8obutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-05uo1w8o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-05uo1w8o');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-05uo1w8o: ', ex)
      };
    

      try {
        let argid = 'beae-x4g0k9roblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x4g0k9ro',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x4g0k9ro');
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
        console.error('BEAE JS ERROR ID beae-x4g0k9ro: ', ex)
      };
    

      try {
        let argid = 'beae-687b7jwmblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-687b7jwm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-687b7jwm');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-687b7jwm: ', ex)
      };
    

      try {
        let argid = 'beae-bo8263kmblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bo8263km',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bo8263km');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bo8263km: ', ex)
      };
    

      try {
        let argid = 'beae-05uo1w8obutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-05uo1w8o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-05uo1w8o');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-05uo1w8o: ', ex)
      };
    

      try {
        let argid = 'beae-x4g0k9roblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x4g0k9ro',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x4g0k9ro');
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
        console.error('BEAE JS ERROR ID beae-x4g0k9ro: ', ex)
      };
    

      try {
        let argid = 'beae-687b7jwmblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-687b7jwm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-687b7jwm');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-687b7jwm: ', ex)
      };
    

      try {
        let argid = 'beae-bo8263kmblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bo8263km',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bo8263km');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bo8263km: ', ex)
      };
    

      try {
        let argid = 'beae-05uo1w8obutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-05uo1w8o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-05uo1w8o');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-05uo1w8o: ', ex)
      };
    

      try {
        let argid = 'beae-iw1mk7vysection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-iw1mk7vy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-iw1mk7vy');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-iw1mk7vy: ', ex)
      };
    

      try {
        let argid = 'beae-ohnywsmiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ohnywsmi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ohnywsmi');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ohnywsmi: ', ex)
      };
    

      try {
        let argid = 'beae-c0434ozjblock-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-c0434ozj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-c0434ozj');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),v=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-c0434ozj: ', ex)
      };
    

      try {
        let argid = 'beae-tm55fzvtsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tm55fzvt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tm55fzvt');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tm55fzvt: ', ex)
      };
    

      try {
        let argid = 'beae-u5v9dqgdsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-u5v9dqgd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-u5v9dqgd');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-u5v9dqgd: ', ex)
      };
    

      try {
        let argid = 'beae-6gl1ca0tblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6gl1ca0t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6gl1ca0t');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6gl1ca0t: ', ex)
      };
    

      try {
        let argid = 'beae-i230r1p7block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i230r1p7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i230r1p7');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i230r1p7: ', ex)
      };
    

      try {
        let argid = 'beae-40rgnrs2button-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-40rgnrs2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-40rgnrs2');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-40rgnrs2: ', ex)
      };
    

      try {
        let argid = 'beae-6gl1ca0tblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6gl1ca0t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6gl1ca0t');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6gl1ca0t: ', ex)
      };
    

      try {
        let argid = 'beae-i230r1p7block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i230r1p7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i230r1p7');
        args.el = args.els[1];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i230r1p7: ', ex)
      };
    

      try {
        let argid = 'beae-40rgnrs2button-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-40rgnrs2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-40rgnrs2');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-40rgnrs2: ', ex)
      };
    

      try {
        let argid = 'beae-6gl1ca0tblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6gl1ca0t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6gl1ca0t');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6gl1ca0t: ', ex)
      };
    

      try {
        let argid = 'beae-i230r1p7block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i230r1p7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i230r1p7');
        args.el = args.els[2];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i230r1p7: ', ex)
      };
    

      try {
        let argid = 'beae-40rgnrs2button-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-40rgnrs2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-40rgnrs2');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-40rgnrs2: ', ex)
      };
    

      try {
        let argid = 'beae-6gl1ca0tblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6gl1ca0t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6gl1ca0t');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6gl1ca0t: ', ex)
      };
    

      try {
        let argid = 'beae-i230r1p7block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i230r1p7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i230r1p7');
        args.el = args.els[3];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i230r1p7: ', ex)
      };
    

      try {
        let argid = 'beae-40rgnrs2button-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-40rgnrs2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-40rgnrs2');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-40rgnrs2: ', ex)
      };
    

      try {
        let argid = 'beae-sc7zjekysection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sc7zjeky',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sc7zjeky');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sc7zjeky: ', ex)
      };
    

      try {
        let argid = 'beae-2f2lvym9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2f2lvym9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2f2lvym9');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2f2lvym9: ', ex)
      };
    

      try {
        let argid = 'beae-9ztmhkk8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9ztmhkk8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9ztmhkk8');
        args.el = args.els[0];
        ((P) => { var I;let H=(I=P.el)==null?void 0:I.querySelectorAll(".beae-x-text a");H==null||H.forEach(A=>{let O=A==null?void 0:A.getAttribute("href");A&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&A.addEventListener("click",z=>{let D=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),z.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9ztmhkk8: ', ex)
      };
    }; if (window.BEAEBASE) {js_RFA961R3()} else {window.BEAEPAGEJS.push(js_RFA961R3)} })(); 