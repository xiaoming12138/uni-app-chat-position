(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"09b5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("f3d3")),u=r(n("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}o.default.use(u.default);var a=new u.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",user:{home:{id:1,name:"tax",img:"static/chat/homeHL.png"},customer:{id:2,name:"customer",img:"static/chat/customerHL.png"}}},mutations:{login:function(e,t){e.userName=t||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1}}}),c=a;t.default=c},"6c35":function(e,t,n){"use strict";n.r(t);var o=n("75d4");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("e565");var r,a,c=n("2877"),f=Object(c["a"])(o["default"],r,a,!1,null,null,null);t["default"]=f.exports},"75d4":function(e,t,n){"use strict";n.r(t);var o=n("81f5"),u=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=u.a},"81f5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=o},dbcd:function(e,t,n){},e565:function(e,t,n){"use strict";var o=n("dbcd"),u=n.n(o);u.a},f625:function(e,t,n){"use strict";n("9471");var o=a(n("f3d3")),u=a(n("6c35")),r=a(n("09b5"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.config.productionTip=!1,o.default.prototype.$store=r.default,o.default.prototype.$serverUrl="https://unidemo.dcloud.net.cn",u.default.mpType="app";var i=new o.default(c({store:r.default},u.default));i.$mount()}},[["f625","common/runtime","common/vendor"]]]);