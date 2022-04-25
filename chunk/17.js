/*! For license information please see 17.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"144":function(r,t,e){"use strict";e.r(t),e.d(t,"taro_scroll_view_core",(function(){return u}));var c=e(45),s=e(159);function easeOutScroll(r,t,e){if(r!==t&&"number"==typeof r){var c=t-r,s=Date.now(),u=t>=r;!function n(){r=function i(r,t,e,c){return e*r/c+t}(Date.now()-s,r,c,500),u&&r>=t||!u&&t>=r?e(t):(e(r),requestAnimationFrame(n))}()}}var u=function(){function l(r){var t=this;Object(c.g)(this,r),this.onScroll=Object(c.c)(this,"scroll",3),this.onScrollToUpper=Object(c.c)(this,"scrolltoupper",3),this.onScrollToLower=Object(c.c)(this,"scrolltolower",3),this.scrollX=!1,this.scrollY=!1,this.upperThreshold=50,this.lowerThreshold=50,this.scrollWithAnimation=!1,this.handleScroll=function(r){if(!(r instanceof CustomEvent)){var e=t.el,c=e.scrollLeft,s=e.scrollTop,u=e.scrollHeight,a=e.scrollWidth;t._scrollLeft=c,t._scrollTop=s,t.uperAndLower(),t.onScroll.emit({"scrollLeft":c,"scrollTop":s,"scrollHeight":u,"scrollWidth":a})}},this.uperAndLower=function debounce(r,t){var e;return function(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];clearTimeout(e),e=setTimeout((function(){r.apply(void 0,c)}),t)}}((function(){var r=t.el,e=r.offsetWidth,c=r.offsetHeight,s=r.scrollLeft,u=r.scrollTop,a=r.scrollHeight,h=r.scrollWidth,p=Number(t.lowerThreshold),f=Number(t.upperThreshold);!isNaN(p)&&(t.scrollY&&c+u+p>=a||t.scrollX&&e+s+p>=h)&&t.onScrollToLower.emit({"direction":t.scrollX?"right":t.scrollY?"bottom":""}),!isNaN(f)&&(t.scrollY&&u<=f||t.scrollX&&s<=f)&&t.onScrollToUpper.emit({"direction":t.scrollX?"left":t.scrollY?"top":""})}),200)}return l.prototype.watchScrollLeft=function(r){var t=this,e=Number(r);this.scrollX&&!isNaN(e)&&e!==this._scrollLeft&&(this.scrollWithAnimation?easeOutScroll(this._scrollLeft,e,(function(r){return t.el.scrollLeft=r})):this.el.scrollLeft=e,this._scrollLeft=e)},l.prototype.watchScrollTop=function(r){var t=this,e=Number(r);this.scrollY&&!isNaN(e)&&e!==this._scrollTop&&(this.scrollWithAnimation?easeOutScroll(this._scrollTop,e,(function(r){return t.el.scrollTop=r})):this.el.scrollTop=e,this._scrollTop=e)},l.prototype.watchScrollIntoView=function(r){var t;"string"==typeof r&&r&&(null===(t=document.querySelector("#"+r))||void 0===t||t.scrollIntoView({"behavior":"smooth","block":"center","inline":"start"}))},l.prototype.componentDidLoad=function(){var r=this,t=this,e=t.scrollY,c=t.scrollX,s=t.scrollWithAnimation,u=Number(this.mpScrollTop),a=Number(this.mpScrollLeft);e&&!isNaN(u)&&(s?easeOutScroll(0,u,(function(t){return r.el.scrollTop=t})):this.el.scrollTop=u,this._scrollTop=u),c&&!isNaN(a)&&(s?easeOutScroll(0,a,(function(t){return r.el.scrollLeft=t})):this.el.scrollLeft=a,this._scrollLeft=a)},l.prototype.render=function(){var r=this.scrollX,t=this.scrollY,e=Object(s.a)({"taro-scroll-view__scroll-x":r,"taro-scroll-view__scroll-y":t});return Object(c.e)(c.a,{"class":e,"onScroll":this.handleScroll},Object(c.e)("slot",null))},Object.defineProperty(l.prototype,"el",{"get":function(){return Object(c.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(l,"watchers",{"get":function(){return{"mpScrollLeft":["watchScrollLeft"],"mpScrollTop":["watchScrollTop"],"mpScrollIntoView":["watchScrollIntoView"]}},"enumerable":!1,"configurable":!0}),l}();u.style="taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}"},"159":function(r,t,e){"use strict";e.d(t,"a",(function(){return c}));var c=function createCommonjsModule(r,t,e){return r(e={"path":t,"exports":{},"require":function(r,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}((function(r){!function(){var t={}.hasOwnProperty;function o(){for(var r=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var s=typeof c;if("string"===s||"number"===s)r.push(c);else if(Array.isArray(c)){if(c.length){var u=o.apply(null,c);u&&r.push(u)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var a in c)t.call(c,a)&&c[a]&&r.push(a);else r.push(c.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))}}]);