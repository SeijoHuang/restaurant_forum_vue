
import { apiHelper } from "../utils/helpers";
// const getToken = () => localStorage.getItem('token')
//已設定interceptors，每次request都會自動帶入把token帶入headers，因此可以省略，其他例如user api、restaurant api也都可以移除了

export default {
  getRestaurants({ page, categoryId }){
    const searchParams = new URLSearchParams({page, categoryId}) 
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  get({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getRestaurantTops(){
    return apiHelper.get('/restaurants/top')
  }
}

