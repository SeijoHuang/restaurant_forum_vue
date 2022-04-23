<template>
  <div class="row no-gutters">
    <div class="col-md-4">
        <a href="#">
          <img
            class="card-img"
            :src="restaurant.image"
          >
        </a>
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

export default {
  name:"RestaurantsTopCard",
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
      console.log('add')
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true
      }
      //TODO 串API新增我的最愛
      console.log('add',restaurantId)
      this.$emit('after-add-favorite', restaurantId)
    },
    removeFavorite(restaurantId){
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false
      }
      //TODO 串API移除我的最愛
      console.log(restaurantId)
      this.$emit('after-remove-favorite', restaurantId)
    }
  }
}
</script>