(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{wHD8:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",(function(){return c}));var n=o("1OyB"),e=o("vuIU"),r=o("A36C"),s=o("Zgba"),c=function(){function i(t){var o=this;Object(n.a)(this,i),Object(r.o)(this,t),this.ionImgWillLoad=Object(r.g)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(r.g)(this,"ionImgDidLoad",7),this.ionError=Object(r.g)(this,"ionError",7),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()}}return Object(e.a)(i,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(r.j)(r.c,{class:Object(s.b)(this)},Object(r.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(r.k)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),i}();c.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);