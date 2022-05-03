<template>
  <div class="container py-5">
    <NavTab />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComment :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTab from './../components/NavTab.vue'
import NewestRestaurants from './../components/NewestRestaurant.vue'
import NewestComment from './../components/NewestComment.vue'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'
export default {
  name: 'RestaurantFeeds',
  components : {
    NavTab,
    NewestRestaurants,
    NewestComment
  },
  data() {
    return {
      restaurants:[],
      comments:[]
    }
  },
  methods: {
    async fetchData() {
        try{
            const response = await restaurantsAPI.getFeeds()
            if(response.statusText !== 'OK') {
                throw new Error(response.statusText)
            }
            const {restaurants, comments} = response.data
            this.restaurants = restaurants
            this.comments = comments.filter(comment => comment.Restaurant && comment.text)  
            // 已移除的餐廳或是沒有評論的資料在回傳資料中會是null，因此這步驟先過濾排除掉
        } catch(err){
            Toast.fire({
                icon: 'error',
                title: '無法取的最新消息，請稍後再試'
            })
        }        
                
    //   const  {restaurants, comments} = dummyData
    //   this.restaurants = restaurants
    //   this.comments = comments.filter(comment => comment.Restaurant && comment.text)  
      // 已移除的餐廳或是沒有評論的資料在回傳資料中會是null，因此這步驟先過濾排除掉
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

