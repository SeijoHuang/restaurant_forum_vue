import Vue from 'vue'
import VueRouter from 'vue-router'
import not_found from '../views/not_found.vue'
import sign_in from '../views/sign_in.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },
  {
    path: '/sign_in',
    name: 'sing_in',
    component: sign_in
  },
  {
    path: '/sign_up',
    name: 'sing_up',
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
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User')
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

export default router
