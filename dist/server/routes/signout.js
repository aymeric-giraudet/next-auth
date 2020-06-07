"use strict";var _cookie=_interopRequireDefault(require("../lib/cookie"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var _default=function(){var a=_asyncToGenerator(function*(a,b,c,d){var{adapter:e,cookies:f,callbackUrl:g,csrfTokenVerified:h,baseUrl:i,jwt:j}=c;if(!h)return b.status(302).setHeader("Location","".concat(i,"/signout?csrf=true")),b.end(),d();if(!j){var{deleteSession:k}=yield e.getAdapter(c),l=a.cookies[f.sessionToken.name];try{yield k(l)}catch(a){console.error("SIGNOUT_ERROR",a)}}return _cookie.default.set(b,f.sessionToken.name,"",_objectSpread(_objectSpread({},f.sessionToken.options),{},{maxAge:0})),b.status(302).setHeader("Location",g),b.end(),d()});return function(){return a.apply(this,arguments)}}();exports.default=_default;