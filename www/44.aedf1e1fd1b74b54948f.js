(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{qCuA:function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",(function(){return y}));var i=t("rePB"),r=t("o0o1"),n=t.n(r),a=t("HaE+"),p=t("1OyB"),s=t("vuIU"),c=t("A36C"),l=t("Zgba"),d=(t("OMvp"),t("btv9")),v=t("fYWy"),h=(t("8RMS"),t("PFXn")),b=t("74mu"),u=t("ZaV5"),f=function(e,o){var t="top",i="left",r=e.querySelector(".popover-content"),n=r.getBoundingClientRect(),a=n.width,p=n.height,s=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,l=o&&o.target&&o.target.getBoundingClientRect(),v=null!=l&&"top"in l?l.top:c/2-p/2,h=null!=l&&"left"in l?l.left:s/2,b=l&&l.width||0,u=l&&l.height||0,f=e.querySelector(".popover-arrow"),x=f.getBoundingClientRect(),g=x.width,w=x.height;null==l&&(f.style.display="none");var y={top:v+u,left:h+b/2-g/2},k={top:v+u+(w-1),left:h+b/2-a/2},j=!1,O=!1;k.left<m+25?(j=!0,k.left=m):a+m+k.left+25>s&&(O=!0,k.left=s-a-m,i="right"),v+u+p>c&&v-p>0?(y.top=v-(w+1),k.top=v-p-(w-1),e.className=e.className+" popover-bottom",t="bottom"):v+u+p>c&&(r.style.bottom=m+"%"),f.style.top=y.top+"px",f.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",j&&(r.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(r.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),r.style.transformOrigin=t+" "+i;var D=Object(d.a)(),P=Object(d.a)(),E=Object(d.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([P,E])},m=5,x=function(e){var o=Object(d.a)(),t=Object(d.a)(),i=Object(d.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,i])},g=function(e,o){var t=e.ownerDocument,i="rtl"===t.dir,r="top",n=i?"right":"left",a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),s=p.width,c=p.height,l=t.defaultView.innerWidth,v=t.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),b=null!=h&&"bottom"in h?h.bottom:v/2-c/2,u=h&&h.height||0,f={top:b,left:null!=h&&"left"in h?i?h.left-s+h.width:h.left:l/2-s/2};f.left<12?(f.left=12,n="left"):s+12+f.left>l&&(f.left=l-s-12,n="right"),b+u+c>v&&b-c>0?(f.top=b-c-u,e.className=e.className+" popover-bottom",r="bottom"):b+u+c>v&&(a.style.bottom="12px");var m=Object(d.a)(),x=Object(d.a)(),g=Object(d.a)(),w=Object(d.a)(),y=Object(d.a)();return x.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:"".concat(f.top,"px"),left:"".concat(f.left,"px"),"transform-origin":"".concat(r," ").concat(n)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),m.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},w=function(e){var o=Object(d.a)(),t=Object(d.a)(),i=Object(d.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,i])},y=function(){function e(o){var t=this;Object(p.a)(this,e),Object(c.o)(this,o),this.didPresent=Object(c.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(c.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(c.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,h.a)},this.onLifecycle=function(e){var o=t.usersElement,i=k[e.type];if(o&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}}}var o,t;return Object(s.a)(e,[{key:"connectedCallback",value:function(){Object(h.f)(this.el)}},{key:"present",value:(t=Object(a.a)(n.a.mark((function e(){var o,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(o=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(u.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t);case 8:return this.usersElement=e.sent,e.next=11,Object(v.f)(this.usersElement);case 11:return e.abrupt("return",Object(h.e)(this,"popoverEnter",f,g,this.event));case 12:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"dismiss",value:(o=Object(a.a)(n.a.mark((function e(o,t){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.g)(this,o,t,"popoverLeave",x,w,this.event);case 2:if(!(i=e.sent)){e.next=6;break}return e.next=6,Object(u.b)(this.delegate,this.usersElement);case 6:return e.abrupt("return",i);case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(h.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(h.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,o=Object(l.b)(this),t=this.onLifecycle;return Object(c.j)(c.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(b.b)(this.cssClass)),(e={},Object(i.a)(e,o,!0),Object(i.a)(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(c.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(c.j)("div",{tabindex:"0"}),Object(c.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(c.j)("div",{class:"popover-arrow"}),Object(c.j)("div",{class:"popover-content"})),Object(c.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(c.k)(this)}}]),e}(),k={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};y.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);