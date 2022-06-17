<template>
  <div class="container py-5">
    <Spinner v-if="isLoading"/>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <template v-else>
      <RestaurantDetail
        :initial-restaurant="restaurant"
      />
      <hr>
        <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment 
        :restaurantId="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>

<script>
import Spinner from './../components/Spinner.vue'
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'
import {mapState} from 'vuex'



export default {
  name:'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner
  },
  data(){
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      isLoading: false
    }
  },
  computed:{
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant(restaurantId){
      try{
        this.isLoading = true
        const {data, statusText} = await restaurantsAPI.get({restaurantId})
        if(statusText !== 'OK') {
          throw new Error(statusText)
        }
        const {restaurant, isFavorited,  isLiked} = data      
        const {
          id, 
          name,
          Category, 
          image, 
          opening_hours: openingHours, 
          tel, 
          address, 
          description,
          Comments 
          } = restaurant
        this.restaurant = {
          id,
          name,
          categoryName: Category? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,      
        }
        this.restaurantComments = Comments
        this.isLoading = false
      }catch(error){
        this.isLoading = true
        Toast.fire({
          icon:'error',
          title: '無法載入餐廳資料，請稍後再試'
        })
      }
     
    },
    afterDeleteComment(commentId){
      console.log('after', commentId)
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id != commentId)
    },
    afterCreateComment(payload){
      console.log(this.currentUser)
      const {commentId, text, restaurantId} = payload
      this.restaurantComments.push({
        id: commentId,
        text,
        RestaurantId: restaurantId,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        }
      })
    }

  },
  beforeRouteUpdate(to, from, next){
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  },
  created(){
    const {id} = this.$route.params
    //透過$route拿到網址的參數
    this.fetchRestaurant(id)
  }
}
</script>