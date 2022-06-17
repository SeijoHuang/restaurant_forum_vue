(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca49a1e"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTab"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v(" 人氣餐廳 ")]),a("hr"),a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},t._l(t.restaurants,(function(e){return a("RestaurantsTopCard",{key:e.id,attrs:{"initial-restaurants-top":e},on:{"after-remove-favorite":t.afterRemoveFavorite,"after-add-favorite":t.afterAddFavorite}})})),1)]],2)},n=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("d9e2"),a("d81d"),a("2375")),c=a("fffa"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:t.restaurant.id}}}},[a("img",{staticClass:"card-img",attrs:{src:t._f("emptyImage")(t.restaurant.image)}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.restaurant.name)+" ")]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(t.restaurant.FavoritedUsers.length))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(t.restaurant.description)+" ")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:t.restaurant.id}}}},[t._v(" Show ")]),t.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(e){return t.removeFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addFavorite}},[t._v(" 加到最愛 ")])],1)])])},d=[],l=a("2708"),v={name:"RestaurantsTopCard",mixins:[l["a"]],props:{initialRestaurantsTop:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurantsTop}},methods:{addFavorite:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.restaurant=Object(s["a"])(Object(s["a"])({},t.restaurant),{},{isFavorited:!0}),t.$emit("after-add-favorite",t.restaurant);case 2:case"end":return e.stop()}}),e)})))()},removeFavorite:function(t){this.restaurant=Object(s["a"])(Object(s["a"])({},this.restaurant),{},{isFavorited:!1}),this.$emit("after-remove-favorite",t)}}},m=v,p=a("2877"),f=Object(p["a"])(m,u,d,!1,null,null,null),h=f.exports,b=a("c4c3"),g=a("1602"),w=a("2fa3"),x={name:"RestaurantTop",components:{NavTab:c["a"],RestaurantsTopCard:h,Spinner:o["a"]},data:function(){return{restaurants:[],isLoading:!1}},methods:{fetchRestaurants:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,b["a"].getRestaurantTops();case 4:if(a=e.sent,"OK"===a.statusText){e.next=7;break}throw new Error(a.statusText);case 7:r=a.data.restaurants,t.restaurants=r,t.isLoading=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0),w["a"].fire({icon:"error",title:"無法載入人氣餐廳，請稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()},afterRemoveFavorite:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g["a"].removeFavorite({restaurantId:t});case 3:if(a=e.sent,r=a.data,console.log("remove",r),"success"===r.status){e.next=8;break}throw new Error(r.message);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),w["a"].fire({icon:"error",title:"無法移除我的最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},afterAddFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=t.id,a.next=4,g["a"].addFavorite({restaurantId:r});case 4:if(n=a.sent,i=n.data,console.log(i),"success"===i.status){a.next=9;break}throw new Error(i.message);case 9:e.restaurants=e.restaurants.map((function(e){return e.id!==r?e:Object(s["a"])({},t)})),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),w["a"].fire({icon:"error",title:"無法加入我的最愛，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()}},created:function(){this.fetchRestaurants()}},R=x,k=Object(p["a"])(R,r,n,!1,null,null,null);e["default"]=k.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ca49a1e.9d4fc28c.js.map