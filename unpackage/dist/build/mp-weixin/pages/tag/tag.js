(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tag/tag"],{1439:function(t,e,a){"use strict";a.r(e);var i=a("aa56"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=n.a},"6a50":function(t,e,a){"use strict";a("9471");var i=c(a("b0ce")),n=c(a("f0e1"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},aa56:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{data:[{type:"动物",id:1,icon:"http://placehold.it/150x150"},{type:"风景",id:2,icon:"http://placehold.it/150x150"},{type:"建筑",id:3,icon:"http://placehold.it/150x150"},{type:"美女",id:4,icon:"http://placehold.it/150x150"},{type:"汽车",id:5,icon:"http://placehold.it/150x150"},{type:"运动",id:6,icon:"http://placehold.it/150x150"},{type:"动物",id:1,icon:"http://placehold.it/150x150"},{type:"风景",id:2,icon:"http://placehold.it/150x150"}]}},methods:{goList:function(e){t.navigateTo({url:"../list/list?type="+e.type+"&id="+e.id})}}};e.default=a}).call(this,a("543d")["default"])},f0e1:function(t,e,a){"use strict";a.r(e);var i=a("f9c0"),n=a("1439");for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);var o=a("2877"),l=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},f9c0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index"},[a("view",{staticClass:"tags"},t._l(t.data,function(e,i){return a("block",{key:i},[a("view",{staticClass:"tag",attrs:{eventid:"498d4e70-0-"+i},on:{tap:function(a){t.goList(e)}}},[a("image",{staticClass:"tag-img",attrs:{src:e.icon}}),a("text",{staticClass:"tag-text"},[t._v(t._s(e.type))])])])}))])},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})}},[["6a50","common/runtime","common/vendor"]]]);