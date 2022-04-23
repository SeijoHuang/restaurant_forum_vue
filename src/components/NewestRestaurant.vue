<template>
  <div  class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div  class="card-body">
      <div 
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
      >
        <h4>
          <router-link
            :to="{
              name:'restaurant',
              params: {id: restaurant.id}
            }"
          >
          {{ restaurant.name }}
          </router-link>
          <small>{{restaurant.Category? restaurant.Category.name : '未分類'}}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { FromNowFilter } from './../utils/mixins'
export default {
  name: "NewestRestaurant",
  mixins:[FromNowFilter],
  // 加入props屬性，key跟父元件的key相同，value會對應到父元件傳進來的屬性restaurants的值
  props: {
    restaurants : {
      type: Array, 
      required: true
      //type: 告訴元件傳入的型別是array，檢查如果不是array會報錯，協助debug
      //required: 由於父元件已經v-bind綁定，因次應該會有資料傳入，使用required: true強調這點，若沒有東西傳入，也會報錯
    }
    
  },
  
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>