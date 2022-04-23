<template>
  <div class="card">
      <div class="card-header">
        <strong>11</strong> 收藏的餐廳
      </div>
      <div class="card-body">
          <router-link 
            v-for="restaurant in userFavoritedrestaurants"
            :key="restaurant.id"
            :to="{
              name: 'restaurant',
              id: {id: restaurant.id}
            }"
          >
            <img :src="restaurant.image" width="60" height="60" class="avatar">
          </router-link>
          
      </div>
    </div>
</template>
<script>
export default {
  name:"UserFavoriredRestaurantCard",
  props: {
    userFavoritedrestaurants: {
      type: Array,
      default: () => [] 
    }
  }
}
</script>