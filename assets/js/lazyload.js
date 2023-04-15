!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.lazyLoad=t()}(this,function(){var e,t,a,n,r,o={pageUpdatedEventName:"page:updated",elements:"img[data-src], img[data-srcset], source[data-srcset], iframe[data-src], video[data-src], [data-lazyload]",rootMargin:"0px",threshold:0,maxFrameCount:10},i=[];function d(e){var t=(e="SOURCE"===e.tagName?e.parentNode:e).getBoundingClientRect();return t.bottom>0&&t.right>0&&t.left<(window.innerWidth||document.documentElement.clientWidth)&&t.top<(window.innerHeight||document.documentElement.clientHeight)}function l(e){e.removeAttribute("data-src"),e.removeAttribute("data-srcset"),e.removeAttribute("data-lazyload")}function s(){this.removeEventListener("load",s),l(this)}function c(e){var t=e.getAttribute("data-srcset"),a=e.getAttribute("data-src"),n=null!==e.getAttribute("data-lazyload");t&&(e.setAttribute("srcset",t),window.picturefill&&window.picturefill({elements:[e]})),a&&(e.src=a),n&&(e.setAttribute("data-lazyloaded",""),e.removeEventListener("load",s),l(e))}function u(e){0===a&&n.disconnect();for(var t=0;t<e.length;t++){var r=e[t];r.intersectionRatio>0&&(a--,n.unobserve(r.target),r.target.addEventListener("load",s,!1),c(r.target))}}function f(){if("old"===r)try{cancelAnimationFrame(e)}catch(f){}else if("new"===r)try{n.disconnect()}catch(m){}a=(i=function e(t){var a=[],n=0;for(a=[],n=t.length;n;)a[--n]=t[n];return a}(document.querySelectorAll(o.elements))).length,t=o.maxFrameCount,function f(){var m;if("really-old"===r){for(m=0,a=i.length;m<a;m++)i[m]&&(c(i[m]),l(i[m]));i=[]}else if("old"===r){if(t===o.maxFrameCount){for(m=0,a=i.length;m<a;m++)if(i[m]&&void 0===i[m].lazyloaded&&d(i[m])){var v=i[m];i[m]=void 0,v.lazyloaded=!0,v.addEventListener("load",s,!1),c(v)}for(m=0;m<a;m++)void 0===i[m]&&i.splice(m,1);a=i.length,t=-1}a>0&&(t++,e=window.requestAnimationFrame(f))}else if("new"===r)for(m=0,n=new IntersectionObserver(u,{rootMargin:o.rootMargin,threshold:o.threshold}),a=i.length;m<a;m++)i[m]&&void 0===i[m].lazyloaded&&n.observe(i[m])}()}return function(e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);r="addEventListener"in window&&window.requestAnimationFrame&&(document.body.getBoundingClientRect,1)?"IntersectionObserver"in window?"new":"old":"really-old",f(),o.pageUpdatedEventName&&document.addEventListener(o.pageUpdatedEventName,f,!0)}}),lazyLoad();