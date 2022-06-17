(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),r("td",[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.isAdmin?"admin":"user"))]),r("td",[t.currentUser.id!==e.id?[r("button",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin,expression:"user.isAdmin"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleIsAmin({userId:e.id,isAdmin:e.isAdmin})}}},[t._v(" set as user ")])]:t._e(),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.isAdmin,expression:"!user.isAdmin"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleIsAmin({userId:e.id,isAdmin:e.isAdmin})}}},[t._v(" set as admin ")])],2)])})),0)])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v(" # ")]),r("th",{attrs:{scope:"col"}},[t._v(" Email ")]),r("th",{attrs:{scope:"col"}},[t._v(" Role ")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v(" Action ")])])])}],s=r("5530"),i=r("1da1"),o=(r("96cf"),r("d9e2"),r("d3b7"),r("25f0"),r("d81d"),r("e04c")),c=r("be6c"),u=r("2fa3"),d=r("2f62"),m={name:"AdminUsers",components:{AdminNav:o["a"]},data:function(){return{users:[]}},methods:{fetchUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].users.get();case 3:if(r=e.sent,a=r.data,n=r.statusText,console.log(n),"OK"===n){e.next=9;break}throw new Error(n);case 9:s=a.users,t.users=s,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:"無法載入使用者，請稍後再試"});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},toggleIsAmin:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,d;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.userId,n=t.isAdmin,r.prev=1,i=!n,r.next=5,c["a"].users.update({userId:a,isAdmin:i.toString()});case 5:if(o=r.sent,d=o.data,"success"===d.status){r.next=9;break}throw new Error(d.message);case 9:e.users=e.users.map((function(t){return t.id===a?Object(s["a"])(Object(s["a"])({},t),{},{isAdmin:i}):t})),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](1),u["a"].fire({icon:"error",title:"無法修改用戶身份，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[1,12]])})))()}},computed:Object(s["a"])({},Object(d["b"])(["currentUser"])),created:function(){this.fetchUsers()}},l=m,h=r("2877"),f=Object(h["a"])(l,a,n,!1,null,null,null);e["default"]=f.exports},be6c:function(t,e,r){"use strict";r("b0c0");var a=r("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={categories:{get:function(){return a["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.name;return a["b"].post("/admin/categories",{name:e},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.categoryId;return a["b"].delete("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.categoryId,r=t.name;return a["b"].put("/admin/categories/".concat(e),{name:r},{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{getDetail:function(t){var e=t.restaurantId;return a["b"].get("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.formData;return a["b"].post("/admin/restaurants",e,{headers:{Authorization:"Bearer ".concat(n())}})},get:function(){return a["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.restaurantId;return a["b"].delete("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.restaurantId,r=t.formData;return a["b"].put("/admin/restaurants/".concat(e),r,{headers:{Authorization:"Bearer ".concat(n())}})}},users:{get:function(){return a["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.userId,r=t.isAdmin;return a["b"].put("/admin/users/".concat(e),{isAdmin:r},{headers:{Authorization:"Bearer ".concat(n())}})}}}},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,s=r("1dde"),i=s("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v(" Restaurants ")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v(" Categories ")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users"}},[t._v(" Users ")])],1)},n=[],s=r("2877"),i={},o=Object(s["a"])(i,a,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-958bdcfa.343b32e8.js.map