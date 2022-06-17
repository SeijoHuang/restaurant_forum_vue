(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c50812"],{"73a3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},n=[],s=a("e04c"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show ")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v(" Edit ")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" # ")]),a("th",{attrs:{scope:"col"}},[t._v(" Category ")]),a("th",{attrs:{scope:"col"}},[t._v(" Name ")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v(" 操作 ")])])])}],u=a("1da1"),o=(a("d9e2"),a("4de4"),a("d3b7"),a("96cf"),a("be6c")),d=a("2fa3"),l={data:function(){return{restaurants:[]}},methods:{fetchRestaurants:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].restaurants.get();case 3:a=e.sent,r=a.data,t.restaurants=r.restaurants,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),d["default"].fire({icon:"error",title:"無法載入餐廳列表，請稍後再試"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deleteRestaurant:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].restaurants.delete({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.filter((function(e){return e.id!==t})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),d["default"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}},created:function(){this.fetchRestaurants()}},m=l,f=a("2877"),h=Object(f["a"])(m,i,c,!1,null,null,null),v=h.exports,b={components:{AdminNav:s["a"],AdminRestaurantsTable:v}},p=b,_=Object(f["a"])(p,r,n,!1,null,null,null);e["default"]=_.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={categories:{get:function(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a},{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e,{headers:{Authorization:"Bearer ".concat(n())}})},get:function(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a,{headers:{Authorization:"Bearer ".concat(n())}})}},users:{get:function(){return r["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a},{headers:{Authorization:"Bearer ".concat(n())}})}}}},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v(" Restaurants ")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v(" Categories ")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v(" Users ")])],1)},n=[],s=a("2877"),i={},c=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-71c50812.234e19fd.js.map