"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var _default=a=>_objectSpread({id:"facebook",name:"Facebook",type:"oauth",version:"2.0",scope:"email",accessTokenUrl:"https://graph.facebook.com/oauth/access_token",authorizationUrl:"https://www.facebook.com/v7.0/dialog/oauth?response_type=code",profileUrl:"https://graph.facebook.com/me?fields=email,name,picture",profile:a=>({id:a.id,name:a.name,email:a.email,image:a.picture.data.url})},a);exports.default=_default;