<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    :src="restaurant.image | emptyImage"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{
          name: 'restaurant-dashboard',
          params: {id: restaurant.id}
         }"
      >Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        @click.stop.prevent="removeFavorite(restaurant.id)"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.stop.prevent="addFavorite(restaurant.id)"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        @click.stop.prevent="dislike(restaurant.id)"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        @click.stop.prevent="like(restaurant.id)"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import {EmptyImageFilter} from './../utils/mixins'
import userAPI from './../apis/user'
import {Toast} from './../utils/helpers'
export default {
  name: 'RestaurantDetail',
  mixins: [ EmptyImageFilter ],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      restaurant: {...this.initialRestaurant}
    }
  },
  methods: {
    async addFavorite(restaurantId){
      try{
        const {data} = await userAPI.addFavorite({restaurantId})
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant.isFavorited = true
                
      }catch(error){
        Toast.fire({
          icon:'error',
          title: '無法加入我的最愛，請稍後再試'
        })
      }     
    },
    async removeFavorite(restaurantId){
      try{
        const {data} = await userAPI.removeFavorite(restaurantId)
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant.isFavorited = false
      }catch(error){
        Toast.fire({
          icon:'error',
          title: '無法移除我的最愛，請稍後再試'
        })
      }
    },
    async like(restaurantId){
      try{
        const {data} = await userAPI.addLike({restaurantId})
         if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant.isLiked = true
      }catch(error){
         Toast.fire({
          icon:'error',
          title: '無法按讚，請稍後再試'
        })
      }     
    },
    async dislike(restaurantId){
      try{
        const {data} = await userAPI.disLike({restaurantId})
         if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.restaurant.isLiked = false
      }catch(error){
        Toast.fire({
          icon:'error',
          title: '無法按讚，請稍後再試'
        })
      }
      
    }

  },
  watch:{
    initialRestaurant(newValue){
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  }
  
}
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>