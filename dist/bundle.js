(()=>{"use strict";var e={246:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},574:e=>{e.exports=function(e){return e[1]}},338:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(574),o=n.n(r),a=n(246),i=n.n(a)()(o());i.push([e.id,"h1{color:gray}h2{color:red}",""]);const c=i},929:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(574),o=n.n(r),a=n(246),i=n.n(a)()(o());i.push([e.id,".hello-world-button{font-size:20px;padding:8px;background-color:teal;color:#fff;outline:none}.hello-world-text{font-weight:bold}",""]);const c=i},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],u=r.base?l[0]+r.base:l[0],s=a[u]||0,f="".concat(u," ").concat(s);a[u]=s+1;var d=n(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var v=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:v,references:1})}i.push(f)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),u=0;u<a.length;u++){var s=n(a[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),l=n.n(c),u=n(216),s=n.n(u),f=n(589),d=n.n(f),p=n(929),v={};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function b(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}v.styleTagTransform=d(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=s(),t()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;const h=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,r="hello-world-button",(n=b(n="buttonCssClass"))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n;return t=e,(n=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass),e.style.cursor="pointer",e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello World",e.classList.add("hello-world-text"),t.appendChild(e)};var t=document.querySelector("body");t.appendChild(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var g=n(338),w={};function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}w.styleTagTransform=d(),w.setAttributes=l(),w.insert=i().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=s(),t()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;const C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"render",value:function(){var e=document.createElement("h1"),t=document.querySelector("body");e.innerHTML="Webpack is awesome",t.appendChild(e)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=n.p+"5c3c77468b8cd4e45e2d.png";var E=new h;E.render(),(new C).render(),function(){var e=document.createElement("img");e.alt="Avatar",e.width=300,e.src=T;var t=document.createElement("h2");t.textContent="data:text/plain;base64,SXQncyB3b3JrISEh";var n=document.querySelector("body");n.appendChild(e),n.appendChild(t)}(),alert("Development mode is enabled"),E.methodThatDoesNotExist})()})();