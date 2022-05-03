import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({page, categoryId}){
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`,{
      headers:{Authorization: `Bearer ${getToken()}`}
    })
  },
  getFeeds() {
    // const searchParams = new URLSearchParams({restaurantId})
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}

