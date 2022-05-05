<template>
  <div class="row no-gutters">
    <div class="col-md-4">
        <router-link 
          :to="{
            name: 'restaurant',
            params: {id: restaurant.id}
          }"
        >
          <img
            class="card-img"
            :src="restaurant.image | emptyImage"
          >
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{restaurant.name}}
          </h5>
          <span class="badge badge-secondary">收藏數：{{restaurant.FavoritedUsers.length}}</span>
          <p class="card-text">
            {{restaurant.description}}
          </p>
          <router-link
            :to="{
              name: 'restaurant',
              params: {id: restaurant.id}
            }"
            class="btn btn-primary mr-2"
          >
          Show
          </router-link>

          <button
            v-if="restaurant.isFavorited"
            @click="removeFavorite(restaurant.id)"
            type="button"
            class="btn btn-danger mr-2"
          >
            移除最愛
          </button>
          <button
            v-else
            type="button"
            @click="addFavorite"
            class="btn btn-primary"
          >
            加到最愛
          </button>
        </div>
      </div>
  </div>
  
</template>

<script>
import {EmptyImageFilter} from './../utils/mixins'
export default {
  name:"RestaurantsTopCard",
  mixins: [ EmptyImageFilter ],
  props: {
    initialRestaurantsTop:{
      type: Object,
      required: true
    }
  },
  data(){
    return {
      restaurant: this.initialRestaurantsTop
    }
  },
  methods: {
    async addFavorite(){
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true
      }
      this.$emit('after-add-favorite', this.restaurant)      
    },
    removeFavorite(restaurantId){
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false
      }
      this.$emit('after-remove-favorite', restaurantId)
      
    }
  }
}
</script>