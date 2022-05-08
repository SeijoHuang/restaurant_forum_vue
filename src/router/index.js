import Vue from 'vue'
import VueRouter from 'vue-router'
import not_found from '../views/not_found.vue'
import sign_in from '../views/sign_in.vue'
import Restaurants from '../views/Restaurants.vue'
import store from './../store'
//載入vuex store

Vue.use(VueRouter)
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if(currentUser && !currentUser.isAdmin){
    next('/404')
    return
  }
  next()
}
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/sign_in'
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: sign_in
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: () => import('../views/sign_up.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurant-feeds',
    component: () => import('../views/RestaurantFeeds')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop')
  },
  {
    path: '/user/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants',
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantsNew'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '*',
    name: 'not_found',
    component: not_found
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active', //預設為 ‘’router-link-exact-active
  routes
})
//每次路由切換時都會向伺服器發送請求取得當前使用者資料，並且可以全域使用
router.beforeEach( async (to, from, next) => {
  //網址跳轉時先取出token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  //使用者認證從state中取得
  let isAuthenticated = store.state.isAuthenticated

  //如果有token = 已經通過使用者認證，那就呼叫store裡的action傳送請求到伺服器取得當前使用者資料，且因為在action中有設定取得成功會return true，因此isAuthenticated狀態會切換為true

//先比對state裡的token和localStorage裡的token是否一樣，如果不一樣再重新發送請求
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore){
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  //對於不需要驗證token的頁面
  const pathWithoutAuthentication = ['sign_in', 'sign_up']
//如果token無效，未通過使用者認證，且又訪問其他頁面時，導回sign in頁面，注意如果只有!isAuthenticated 一個判斷，會陷入無窮迴圈，因為使用者被導回sign in頁面，但又沒有通過使用者驗證，又再導回sign in的無限循環 
  if (!isAuthenticated && !pathWithoutAuthentication.includes(to.name) ) {
    next('/sign_in')
    return
  }
  // if(!isAuthenticated && to.name !== 'sign_in'){
  //   next('/sign_in')
  //   return
  // }
  //如果token有效，成功登入，轉址到restaurants頁面，且要避免以登入的使用者又進入到 sign in 頁面
  if (isAuthenticated && pathWithoutAuthentication.includes(to.name) ) {
    next('/restaurants')
    return
  }
  // if(isAuthenticated && to.name === 'sign_in'){
  //   next('/restaurants')
  //   return
  // }
 
  next()
})

export default router
