webpackJsonp([1],{"8ooB":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"topnavigationbar",data:function(){return{msg:"topnavigationbar",tudouNavList:[{title:"首页",path:"/"},{title:"前端日记",path:"/"},{title:"生活趣事",path:"/"},{title:"自我介绍",path:"/"}]}},mounted:function(){console.log(this.$route),console.log(this.$route.query),console.log(this.$router)},methods:{iconClick:function(){this.$router.replace({path:"/",query:{}})},navtoNextPage:function(t){console.log(t)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-navigation-bar-wrapper"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"tudou-icon",on:{click:t.iconClick}},[n("label",[t._v("技术土豆")]),n("label",{staticClass:"blog"},[t._v("博客")])]),t._v(" "),n("div",{staticClass:"title-des"},[t._v(" 关注前端技术 ")]),t._v(" "),n("div",{staticClass:"tudou-navigation"},t._l(t.tudouNavList.concat().reverse(),function(e){return n("div",{key:e.title},[n("a",{on:{click:function(n){t.navtoNextPage(e)}}},[t._v(t._s(e.title))])])}))])])},staticRenderFns:[]};var a=n("VU/8")(o,i,!1,function(t){n("bBdO")},null,null);e.default=a.exports},bBdO:function(t,e){}});
//# sourceMappingURL=1.5ba7069c85b86a786272.js.map