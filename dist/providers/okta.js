"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var _default=a=>_objectSpread({id:"okta",name:"Okta",type:"oauth",version:"2.0",scope:"openid profile email",params:{grant_type:"authorization_code",client_id:a.clientId,client_secret:a.clientSecret},accessTokenUrl:"https://".concat(a.domain,"/oauth2/v1/token"),authorizationUrl:"https://".concat(a.domain,"/oauth2/v1/authorize/?response_type=code"),profileUrl:"https://".concat(a.domain,"/oauth2/v1/userinfo/"),profile:a=>_objectSpread(_objectSpread({},a),{},{id:a.sub}),setGetAccessTokenAuthHeader:!1},a);exports.default=_default;