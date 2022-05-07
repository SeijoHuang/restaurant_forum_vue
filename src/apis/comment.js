import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  createComment({ restaurantId, text }) {
    return apiHelper.post('/comments', { restaurantId, text }, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  delete({restaurantId, commentId}){
    return apiHelper.delete(`/comments/${restaurantId, commentId}`, {
      headers: { 
        Authorization: `Bearer ${getToken()}` 
      }
    })
  }
}
