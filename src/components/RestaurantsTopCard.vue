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
            @click="addFavorite(restaurant.id)"
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
    addFavorite(restaurantId){
      //TODO 串API新增我的最愛
      this.$emit('after-add-favorite', restaurantId)
      // 下方程式碼的動作直接在父元件修改資料，子元件會一起連動，故不需要
      // this.restaurant = {
      //   ...this.restaurant,
      //   isFavorited: true
      // }
      
    },
    removeFavorite(restaurantId){
      //TODO 串API移除我的最愛
      this.$emit('after-remove-favorite', restaurantId)
      // 下方程式碼的動作直接在父元件修改資料，子元件會一起連動，故不需要
      // this.restaurant = {
      //   ...this.restaurant,
      //   isFavorited: false
      // }
      
    }
  }
}
</script>