(function(e){function t(t){for(var r,n,c=t[0],o=t[1],u=t[2],d=0,l=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-0b12c027":"6084c6f3","chunk-12bd073f":"525f78ff","chunk-2d228901":"074b1d53","chunk-452696c7":"d223249d","chunk-758a1ab6":"9bd65e2f","chunk-2a491fbe":"93cad386","chunk-2d0ab43a":"cd47d48e","chunk-2d0b2357":"cbd3c566","chunk-2d0b2ec8":"084b012e","chunk-2d0d3ff4":"e0e0d33f","chunk-3fdfc446":"f15dd742","chunk-6ca49a1e":"9d4fc28c","chunk-71c50812":"234e19fd","chunk-958bdcfa":"343b32e8","chunk-b0ddebb6":"1a9b7976"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-0b12c027":1,"chunk-2a491fbe":1,"chunk-b0ddebb6":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b12c027":"ef4721dd","chunk-12bd073f":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-758a1ab6":"31d6cfe0","chunk-2a491fbe":"3c4db4ef","chunk-2d0ab43a":"31d6cfe0","chunk-2d0b2357":"31d6cfe0","chunk-2d0b2ec8":"31d6cfe0","chunk-2d0d3ff4":"31d6cfe0","chunk-3fdfc446":"31d6cfe0","chunk-6ca49a1e":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-958bdcfa":"31d6cfe0","chunk-b0ddebb6":"9b279642"}[e]+".css",s=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===r||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/restaurant_forum_vue/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0220":function(e,t,a){"use strict";a("9899")},"0f69":function(e,t,a){},"12ab":function(e,t,a){},1602:function(e,t,a){"use strict";var r=a("2fa3"),n=function(){return localStorage.getItem("token")};t["a"]={addFavorite:function(e){var t=e.restaurantId;return r["b"].post("/favorite/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},removeFavorite:function(e){return r["b"].delete("/favorite/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},addLike:function(e){var t=e.restaurantId;return r["b"].post("/like/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},disLike:function(e){var t=e.restaurantId;return r["b"].delete("/like/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},addFollowing:function(e){return r["b"].post("/following/".concat(e),null,{headers:{Authorization:"Bearer ".concat(n())}})},removeFollowing:function(e){var t=e.userId;return r["b"].delete("/following/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},getTopUsers:function(){return r["b"].get("/users/top",{headers:{Authorization:"Bearer ".concat(n())}})},getCurrentUser:function(){return r["b"].get("/get_current_user",{headers:{Authorization:"Bearer ".concat(n())}})},getUser:function(e){var t=e.userId;return r["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},fetchUser:function(e){var t=e.userId;return r["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.userId,a=e.formData;return r["b"].put("/users/".concat(t),a,{headers:{Authorization:"Bearer ".concat(n())}})}}},"1e45":function(e,t,a){},2375:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s=(a("0220"),a("2877")),i={},c=Object(s["a"])(i,r,n,!1,null,"bd456636",null);t["a"]=c.exports},2708:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));var r=a("c1df"),n=a.n(r),s={filters:{fromNow:function(e){return e?n()(e).fromNow():"-"}}},i={filters:{emptyImage:function(e){return e||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},"2fa3":function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));a("d3b7");var r=a("bc3a"),n=a.n(r),s=a("3d20"),i=a.n(s),c="http://localhost:3000/api",o=n.a.create({baseURL:c});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){Promise.reject(e)}));var u=o,d=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"45bb":function(e,t,a){},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"4a52":function(e,t,a){},5039:function(e,t,a){"use strict";a("58a6")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("NavBar"),a("main",{staticClass:"mt-5 bg-white"},[a("router-view")],1)],1)},s=[],i=(a("ab8b"),a("4989"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin/restaurants"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:{name:"user",params:{id:e.currentUser.id}}}},[e._v(" "+e._s(e.currentUser.name||"使用者")+" 您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.logout.apply(null,arguments)}}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("5530"),u=a("2f62"),d={methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push({name:"sing_in"})}},computed:Object(o["a"])({},Object(u["b"])(["currentUser","isAuthenticated"]))},l=d,f=(a("df8d"),a("2877")),b=Object(f["a"])(l,i,c,!1,null,"97c43336",null),p=b.exports,m={components:{NavBar:p}},g=m,h=(a("c6da"),Object(f["a"])(g,n,s,!1,null,"6c0fa12c",null)),v=h.exports,j=a("1da1"),k=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("b0c0"),a("2532"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("404 Not Found")])},w=[],_={},x=Object(f["a"])(_,y,w,!1,null,null,null),P=x.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/sign_up"}},[e._v("Sign Up")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign In ")])])}],I=(a("d9e2"),a("7696")),E=a("2fa3"),A={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return E["a"].fire({icon:"warning",title:"請輸入帳號密碼"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,I["a"].signIn({email:e.email,password:e.password});case 7:if(a=t.sent,r=a.data,"success"===r.status){t.next=11;break}throw new Error(r.message);case 11:localStorage.setItem("token",r.token),e.$store.commit("setCurrentUser",r.user),e.$router.push("/restaurants"),t.next=22;break;case 16:t.prev=16,t.t0=t["catch"](0),e.isProcessing=!1,e.password="",E["a"].fire({icon:"warning",title:"請輸入正確的帳號密碼"}),console.log("error",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},R=A,z=Object(f["a"])(R,C,O,!1,null,null,null),S=z.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTab"),a("RestaurantsNavPills",{attrs:{categories:e.categories}}),e.isLoading?a("Spinner"):[a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1),a("RestaurantPagination",{attrs:{"total-page":e.totalPage,"previous-page":e.previousPage,"next-page":e.nextPage,"current-page":e.currentPage,"category-id":e.categoryId}}),e.restaurants.length?e._e():a("div",[a("h3",[e._v("目前該類別沒有相關的餐廳資料")])])]],2)},N=[],q=a("fffa"),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e._f("emptyImage")(e.restaurant.image),alt:"Card image cap",width:"286px",height:"180px"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category?e.restaurant.Category.name:"未分類"))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.removeFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.disLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.like(e.restaurant.id)}}},[e._v(" Like ")])])])])},F=[],$=a("2708"),B=a("1602"),T={name:"RestaurantCard",mixins:[$["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},methods:{addFavorite:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,B["a"].addFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"warning",title:"無法新增我的最愛，請稍後再試"}),console.log(a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},removeFavorite:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,console.log("page",e),a.next=5,B["a"].removeFavorite(e);case 5:if(r=a.sent,n=r.data,"success"===n.status){a.next=9;break}throw new Error(n.message);case 9:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),t.isProcessing=!1,a.next=17;break;case 13:a.prev=13,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"warning",title:"無法移除我的最愛，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,13]])})))()},like:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,B["a"].addLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),t.isProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"warning",title:"無法按讚，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},disLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,B["a"].disLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),t.isProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"warning",title:"無法移除，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},D=T,M=(a("897a"),Object(f["a"])(D,L,F,!1,null,"6dec951e",null)),G=M.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/restaurants"}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},K=[],H={props:{categories:{type:Array,required:!0}}},Q=H,V=(a("bc3c"),Object(f["a"])(Q,J,K,!1,null,"061d06e6",null)),W=V.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.totalPage.length?a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Next",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)]):e._e()},Y=[],Z=(a("a9e3"),{props:{totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0},currentPage:{type:Number,default:1},categoryId:{type:[Number,String],default:""}}}),ee=Z,te=(a("91e9"),Object(f["a"])(ee,X,Y,!1,null,"a1b411b0",null)),ae=te.exports,re=a("2375"),ne=a("c4c3"),se={name:"Restaurants",components:{NavTab:q["a"],RestaurantCard:G,RestaurantsNavPills:W,RestaurantPagination:ae,Spinner:re["a"]},data:function(){return{restaurants:[],categories:[],categoryId:"",page:-1,totalPage:[],currentPage:1,previousPage:-1,nextPage:-1,isLoading:!1}},methods:{fetchRestaurants:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c,o,u,d,l,f,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.queryPage,n=e.queryCategoryId,a.prev=1,t.isLoading=!0,a.next=5,ne["a"].getRestaurants({page:r,categoryId:n});case 5:if(s=a.sent,"OK"===s.statusText){a.next=8;break}throw new Error(s.statusText);case 8:i=s.data,c=i.restaurants,o=i.categories,u=i.categoryId,d=i.page,l=i.totalPage,f=i.prev,b=i.next,t.restaurants=c,t.categories=o,t.categoryId=u,t.page=d,t.totalPage=l,t.previousPage=f,t.nextPage=b,t.isLoading=!1,a.next=23;break;case 18:a.prev=18,a.t0=a["catch"](1),t.isLoading=!1,console.log(a.t0),E["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 23:case"end":return a.stop()}}),a,null,[[1,18]])})))()}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,r=e.categoryId,n=void 0===r?"":r;this.fetchRestaurants({queryPage:a,queryCategoryId:n})},beforeRouteUpdate:function(e,t,a){var r=e.query,n=r.page,s=void 0===n?"":n,i=r.categoryId,c=void 0===i?"":i;this.fetchRestaurants({queryPage:s,queryCategoryId:c}),a()}},ie=se,ce=Object(f["a"])(ie,U,N,!1,null,null,null),oe=ce.exports;r["a"].use(u["a"]);var ue=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},getters:{},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(o["a"])(Object(o["a"])({},e.currentUser),t),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,i,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,B["a"].getCurrentUser();case 4:return r=t.sent,n=r.data,s=n.id,i=n.name,c=n.email,o=n.image,u=n.isAdmin,a("setCurrentUser",{id:s,name:i,email:c,image:o,isAdmin:u}),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t["catch"](1),console.log(t.t0),console.error("can not fetch current user"),a("revokeAuthentication"),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},modules:{}});r["a"].use(k["a"]);var de=function(e,t,a){var r=ue.state.currentUser;!r||r.isAdmin?a():a("/404")},le=[{path:"/",name:"root",redirect:"/sign_in"},{path:"/sign_in",name:"sign_in",component:S},{path:"/sign_up",name:"sign_up",component:function(){return a.e("chunk-2d0d3ff4").then(a.bind(null,"5ec1"))}},{path:"/restaurants",name:"restaurants",component:oe},{path:"/restaurants/feeds",name:"restaurant-feeds",component:function(){return a.e("chunk-b0ddebb6").then(a.bind(null,"091e"))}},{path:"/restaurants/top",name:"restaurants-tops",component:function(){return a.e("chunk-6ca49a1e").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return a.e("chunk-0b12c027").then(a.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return a.e("chunk-2d0b2357").then(a.bind(null,"22ab"))}},{path:"/user/:id/edit",name:"user-edit",component:function(){return Promise.all([a.e("chunk-12bd073f"),a.e("chunk-2d228901")]).then(a.bind(null,"da5c"))}},{path:"/user/:id",name:"user",component:function(){return a.e("chunk-2d0ab43a").then(a.bind(null,"1511"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))},beforeEnter:de},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:de},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return Promise.all([a.e("chunk-12bd073f"),a.e("chunk-758a1ab6")]).then(a.bind(null,"b2df"))},beforeEnter:de},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-2a491fbe").then(a.bind(null,"5652"))},beforeEnter:de},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return Promise.all([a.e("chunk-12bd073f"),a.e("chunk-452696c7")]).then(a.bind(null,"6945"))},beforeEnter:de},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return a.e("chunk-3fdfc446").then(a.bind(null,"f91c"))},beforeEnter:de},{path:"*",name:"not_found",component:P}],fe=new k["a"]({linkExactActiveClass:"active",routes:le});fe.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,a,r){var n,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),s=ue.state.token,i=ue.state.isAuthenticated,!n||n===s){e.next=7;break}return e.next=6,ue.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(c=["sign_in","sign_up"],i||c.includes(t.name)){e.next=11;break}return r("/sign_in"),e.abrupt("return");case 11:if(!i||!c.includes(t.name)){e.next=14;break}return r("/restaurants"),e.abrupt("return");case 14:r();case 15:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var be=fe;a("12ab");r["a"].config.productionTip=!1,new r["a"]({router:be,store:ue,render:function(e){return e(v)}}).$mount("#app")},"58a6":function(e,t,a){},7696:function(e,t,a){"use strict";var r=a("5530"),n=a("2fa3");t["a"]={signIn:function(e){var t=e.email,a=e.password;return n["b"].post("/signin",{email:t,password:a})},signUp:function(e){return n["b"].post("/signup",Object(r["a"])({},e))}}},"897a":function(e,t,a){"use strict";a("e5fe")},"91e9":function(e,t,a){"use strict";a("4a52")},9899:function(e,t,a){},bc3c:function(e,t,a){"use strict";a("45bb")},c4c3:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("25f0");var r=a("2fa3");t["a"]={getRestaurants:function(e){var t=e.page,a=e.categoryId,n=new URLSearchParams({page:t,categoryId:a});return r["b"].get("/restaurants?".concat(n.toString()))},get:function(e){var t=e.restaurantId;return r["b"].get("/restaurants/".concat(t))},getFeeds:function(){return r["b"].get("/restaurants/feeds")},getRestaurantTops:function(){return r["b"].get("/restaurants/top")}}},c6da:function(e,t,a){"use strict";a("0f69")},df8d:function(e,t,a){"use strict";a("1e45")},e5fe:function(e,t,a){},fffa:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},n=[],s=a("ec26"),i={data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:"美食達人",path:"/users/top"}]}}},c=i,o=(a("5039"),a("2877")),u=Object(o["a"])(c,r,n,!1,null,"7ccd571a",null);t["a"]=u.exports}});
//# sourceMappingURL=app.2a189ab5.js.map