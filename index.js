!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("object-bystring",[],e):"object"==typeof exports?exports["object-bystring"]=e():t["object-bystring"]=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){Object.prototype.byString||(Object.prototype.byString=function(t,e,r){var n=r||this;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var o=t.split("."),i=0;i<o.length;++i){var c=o[i];if(!(c in n))return;n.hasOwnProperty(c)&&(void 0!==e&&i===o.length-1&&(n[c]=e),n=n[c])}return n})}])});