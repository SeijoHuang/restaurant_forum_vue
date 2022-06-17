<template>
  <div class="container py-5">
    <NavTab />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">
        人氣餐廳
      </h1>

      <hr>
      <div
        class="card mb-3"
        style="max-width: 540px;margin: auto;"
      >  
        <RestaurantsTopCard 
          v-for=" restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurants-top="restaurant"
          @after-remove-favorite="afterRemoveFavorite"
          @after-add-favorite="afterAddFavorite"
        />
        
      </div>
    </template>
  </div>
</template>

<script>
import Spinner from './../components/Spinner.vue'
import NavTab from './../components/NavTab.vue'
import RestaurantsTopCard from './../components/RestaurantsTopCard.vue'
import restaurantsAPI from './../apis/restaurants'
import usersAPI from './../apis/user'
import {Toast} from './../utils/helpers'


export default {
  name: "RestaurantTop",
  components : {
    NavTab,
    RestaurantsTopCard,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: false
    }
  },
  methods: {
    async fetchRestaurants(){
      try{
        this.isLoading = true
        const response = await restaurantsAPI.getRestaurantTops()
        if (response.statusText !== 'OK'){
          throw new Error(response.statusText)
        }
        const {restaurants} = response.data
        this.restaurants = restaurants
         this.isLoading = false
      }catch(error){
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法載入人氣餐廳，請稍後再試'
        })
      }
      
    },

    async afterRemoveFavorite(restaurantId){
      try{
        const {data} = await usersAPI.removeFavorite({restaurantId})
        console.log('remove',data)
        if (data.status !== 'success'){
          throw new Error(data.message)
        }
      }catch(error){
        Toast.fire({
          icon:'error',
          title: '無法移除我的最愛，請稍後再試'
        })
      }    
    },
   async afterAddFavorite(payload){
     try{
       const {id: restaurantId} = payload
       const {data} = await usersAPI.addFavorite({restaurantId})  
        console.log(data)
        if(data.status !== 'success'){
          throw new Error(data.message)
        }  
        this.restaurants = this.restaurants.map( restaurant => {
          if(restaurant.id !== restaurantId){
          return restaurant  
          }
          return {
            ...payload
          }
        })   
      
     }catch(error){
       Toast.fire({
         icon:'error',
         title: '無法加入我的最愛，請稍後再試'
       })
     }
      
      
    }
  },
  created(){
    this.fetchRestaurants()
  }
}
</script>