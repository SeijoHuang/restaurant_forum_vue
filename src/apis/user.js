import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite({restaurantId}){
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
    //加我的最愛不需要data所以用null
  },
  removeFavorite(restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantId}){
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers:{ Authorization: `Bearer ${getToken()}`}
    })
  },
  disLike({restaurantId}) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollowing(userId){
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  removeFollowing({userId}){
    return apiHelper.delete(`/following/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }) 
  },
  getTopUsers(){
    return apiHelper.get('/users/top',{
      headers: { Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getCurrentUser(){
    return apiHelper.get('/get_current_user', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUser({userId}){
    return apiHelper.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  fetchUser({userId}){
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}`}
      
    })
  },
  update({userId, formData}){
    return apiHelper.put(`/users/${userId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` 
      }
    })
  }

  
  
} 