"use strict";var _cookie=_interopRequireDefault(require("../lib/cookie"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var _default=function(){var a=_asyncToGenerator(function*(a,b,c){var{query:d}=a,{body:e}=a,{cookies:f,site:g,defaultCallbackUrl:h}=c,i=c.callbackUrlHandler||callbackUrlHandlerDefaultFunction,j=h||g,k=e.callbackUrl||d.callbackUrl||null,l=a.cookies[f.callbackUrl.name]||null;return k?j=yield i(k,c):l&&(j=yield i(l,c)),j&&j!==l&&_cookie.default.set(b,f.callbackUrl.name,j,f.callbackUrl.options),Promise.resolve(j)});return function(){return a.apply(this,arguments)}}();exports.default=_default;var callbackUrlHandlerDefaultFunction=(a,b)=>a.startsWith(b.site)?Promise.resolve(a):Promise.resolve(b.site);