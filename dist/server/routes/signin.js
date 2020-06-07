"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _oauth=_interopRequireDefault(require("../lib/signin/oauth")),_email=_interopRequireDefault(require("../lib/signin/email"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var _default=function(){var a=_asyncToGenerator(function*(a,b,c,d){var{provider:e,providers:f,baseUrl:g,csrfTokenVerified:h}=c,i=f[e],{type:j}=i;if(!j)return b.status(500).end("Error: Type not specified for ".concat(i)),d();if("oauth"===j)(0,_oauth.default)(i,(a,c)=>a?(console.error("OAUTH_SIGNIN_ERROR",a),b.status(302).setHeader("Location","".concat(g,"/error?error=OAuthSignin")),b.end(),d()):(b.status(302).setHeader("Location",c),b.end(),d()));else{if("email"===j&&"POST"===a.method){var k=a.body.email?a.body.email.toLowerCase():null;if(!h)return b.status(302).setHeader("Location","".concat(g,"/signin?email=").concat(encodeURIComponent(k),"&csrf=true")),b.end(),d();try{yield(0,_email.default)(k,i,c)}catch(a){return console.error("EMAIL_SIGNIN_ERROR",a),b.status(302).setHeader("Location","".concat(g,"/error?error=EmailSignin")),b.end(),d()}return b.status(302).setHeader("Location","".concat(g,"/verify-request?provider=").concat(encodeURIComponent(i.id),"&type=").concat(encodeURIComponent(i.type))),b.end(),d()}return b.status(302).setHeader("Location","".concat(g,"/signin")),b.end(),d()}});return function(){return a.apply(this,arguments)}}();exports.default=_default;