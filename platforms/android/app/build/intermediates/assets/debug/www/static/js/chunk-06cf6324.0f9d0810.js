(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06cf6324"],{"386d":function(e,t,n){"use strict";var s=n("cb7c"),i=n("83a1"),r=n("5f1b");n("214f")("search",1,function(e,t,n,a){return[function(n){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s):new RegExp(n)[t](String(s))},function(e){var t=a(n,e,this);if(t.done)return t.value;var o=s(e),c=String(this),l=o.lastIndex;i(l,0)||(o.lastIndex=0);var u=r(o,c);return i(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]})},"4b96":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-splitter",[n("v-ons-splitter-side",{attrs:{swipeable:"",width:"150px",collapse:"",side:"left",open:e.openSide},on:{"update:open":function(t){e.openSide=t}}},[n("v-ons-page",[n("v-ons-list",[n("v-ons-list-item",{staticClass:"bg-dark text-white"},[n("div",{staticClass:"center"},[e._v("Hi "+e._s(e.User.nickName)+" !")])]),n("section",{directives:[{name:"show",rawName:"v-show",value:!e.backend,expression:"!backend"}]},[n("v-ons-list-item",{staticClass:"bg-secondary text-white"},[e._v("Game")]),n("v-ons-list-item",{attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"betting"})}}},[e._v("Betting")])]),n("v-ons-list-item",{staticClass:"bg-secondary text-white"},[e._v("Report")]),n("v-ons-list-item",{attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"bet-report"})}}},[e._v("Bet Report")])]),n("v-ons-list-item",{attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"transfer-report"})}}},[e._v("Transfer Report\n              ")])]),n("v-ons-list-item",{attrs:{tappable:""}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"history-lottery"})}}},[e._v("History Numbers\n              ")])]),n("v-ons-list-item",{staticClass:"bg-secondary text-white"},[e._v("Point")]),n("v-ons-list-item",{attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"transfer-point"})}}},[e._v("Transfer Point\n              ")])]),n("v-ons-list-item",{staticClass:"bg-secondary text-white"},[e._v("System")]),n("v-ons-list-item",{attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"update-myself"})}}},[e._v("Update Profile")])]),n("v-ons-list-item",{directives:[{name:"show",rawName:"v-show",value:e.User.isManager,expression:"User.isManager"}],attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.backend=!e.backend}}},[e.User.isManager?n("span",[e._v("Backend")]):e._e()])]),n("v-ons-list-item",{attrs:{tappable:""}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.logout()}}},[e._v("Logout")])])],1),n("section",{directives:[{name:"show",rawName:"v-show",value:e.backend,expression:"backend"}]},[n("v-ons-list-item",{staticClass:"bg-secondary text-white"},[e._v("Backend")]),n("v-ons-list-item",{directives:[{name:"show",rawName:"v-show",value:e.User.isSupplier,expression:"User.isSupplier"}],attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"create-user"})}}},[e.User.isSupplier?n("span",[e._v("Create User")]):e._e()])]),n("v-ons-list-item",{directives:[{name:"show",rawName:"v-show",value:e.User.isAdmin,expression:"User.isAdmin"}],attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"add-point"})}}},[e.User.isAdmin?n("span",[e._v("Add Point")]):e._e()])]),n("v-ons-list-item",{directives:[{name:"show",rawName:"v-show",value:e.User.isAdmin,expression:"User.isAdmin"}],attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"store-report"})}}},[e.User.isAdmin?n("span",[e._v("Store Report")]):e._e()])]),n("v-ons-list-item",{directives:[{name:"show",rawName:"v-show",value:e.User.isAdmin,expression:"User.isAdmin"}],attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"user-manage"})}}},[e.User.isAdmin?n("span",[e._v("User Manage")]):e._e()])]),n("v-ons-list-item",{directives:[{name:"show",rawName:"v-show",value:e.User.isAdmin,expression:"User.isAdmin"}],attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.openSide=!1,e.$router.push({name:"fetch-numbers"})}}},[e.User.isAdmin?n("span",[e._v("Fetch Numbers")]):e._e()])]),n("v-ons-list-item",{attrs:{tappable:"",modifier:"chevron"}},[n("div",{staticClass:"center",on:{click:function(t){e.backend=!e.backend}}},[e._v("Back")])])],1)],1)],1)],1),n("v-ons-splitter-content",[n("v-ons-page",[n("v-ons-toolbar",[n("div",{staticClass:"left"},[n("v-ons-toolbar-button",{attrs:{icon:"ion-navicon, material: md-menu"},on:{click:function(t){e.openSide=!e.openSide}}})],1),n("div",{staticClass:"center"},[e._v("Vietnam Lottery")]),n("div",{staticClass:"right"},[n("div",{staticClass:"text-danger",staticStyle:{padding:"0 10px"}},[e._v("\n              "+e._s(e.User.point)+"\n            ")])])]),n("div",{staticClass:"container"},[n("router-view")],1)],1)],1)],1)},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},8022:function(e,t,n){"use strict";(function(e,s){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("386d"),n("96cf");var r=i(n("1da1")),a=i(n("efa8")),o={mixins:[a.default],methods:{callApi:function(){var e=(0,r.default)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$loading(),e.prev=1,e.next=4,t();case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e["catch"](1),this.$loading.close(),e.t0;case 10:this.$loading.close();case 11:case"end":return e.stop()}},e,this,[[1,6]])}));function t(t){return e.apply(this,arguments)}return t}(),sMsg:function(){this.$message({type:"success",message:"success"})},fMsg:function(){this.$message({type:"error",message:"error"})},doSearch:function(){var t=this;this.callApi((0,r.default)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.all([t.getDatas(),t.getTotal()]);case 2:case"end":return n.stop()}},n,this)})))},doRefresh:function(){var e=this;this.callApi((0,r.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDatas();case 2:case"end":return t.stop()}},t,this)})))},doPageChange:function(e,t){this.paginate.page=e,this.callApi(t)}},computed:{requestBody:function(){return s.assign({},this.search,this.paginate)}}};t.default=o}).call(this,n("bc3a"),n("2ef0"))},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},ac8a:function(e,t,n){"use strict";n.r(t);var s=n("fdaf"),i=n.n(s);for(var r in s)"default"!==r&&function(e){n.d(t,e,function(){return s[e]})}(r);t["default"]=i.a},e5ee:function(e,t,n){"use strict";n.r(t);var s=n("4b96"),i=n("ac8a");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);var a=n("2877"),o=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,null,null);o.options.__file="Main.vue",t["default"]=o.exports},efa8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{paginate:{total:0,page:1,perPage:20}}},computed:{lastPage:function(){return Math.ceil(this.paginate.total/this.paginate.perPage)}}};t.default=s},fdaf:function(e,t,n){"use strict";var s=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=s(n("1da1"));n("cadf"),n("551c"),n("097d");var r=s(n("8022")),a=n("7fa2"),o=n("92ab"),c={mixins:[r.default],data:function(){return{openSide:!1,scroller:null,backend:!1}},methods:{onScroll:function(e){e.target.scrollTop+e.target.clientHeight===e.target.scrollHeight&&this.$bus.emit("onBottom")},getUserInfo:function(){var e=this;this.callApi((0,i.default)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.user.getUserInfo();case 2:n=t.sent,e.$store.commit(a.UserType.setInfo,n.data);case 4:case"end":return t.stop()}},t,this)})))},logout:function(){this.$store.commit(o.LoginType.clearAccessToken),this.$store.commit(a.UserType.clearInfo)}},mounted:function(){this.getUserInfo(),this.scroller=document.querySelector(".container").parentNode,this.scroller.addEventListener("scroll",this.onScroll,!0),this.$bus.on("getUserInfo",this.getUserInfo)},beforeDestroy:function(){this.scroller.removeEventListener("scroll",this.onScroll),this.$bus.off("getUserInfo")}};t.default=c}}]);
//# sourceMappingURL=chunk-06cf6324.0f9d0810.js.map