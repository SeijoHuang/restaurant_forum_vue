
import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }){
    const searchParams = new URLSearchParams({page, categoryId}) 
    return apiHelper.get(`/restaurants?${searchParams.toString()}`,{
      headers:{Authorization: `Bearer ${getToken()}`}
    })
  },
  get({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { 
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantTops(){
    return apiHelper.get('/restaurants/top',{
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}

