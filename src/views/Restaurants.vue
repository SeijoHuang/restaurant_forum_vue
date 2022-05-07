<template>
  <div class="container py-5">
    <NavTab />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills
      :categories="categories"
    />
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key ="restaurant.id"
        :initial-restaurant="restaurant"
      />
      <!-- 餐廳卡片 RestaurantCard-->
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination 
       
        :total-page="totalPage"
        :previous-page="previousPage"
        :next-page="nextPage"
        :current-page="currentPage"
        :category-id="categoryId"
    />
  </div>
</template>

<script>
import NavTab from './../components/NavTab.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantPagination from './../components/RestaurantPagination.vue'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'

export default { 
    name:'Restaurants',
    components : {
    NavTab,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: '',
      page: -1,
      totalPage: [],
      currentPage: 1,
      previousPage: -1,
      nextPage:-1
    }
  },
  methods: {
   
    async fetchRestaurants({queryPage, queryCategoryId}) {
        try {
            const response = await restaurantsAPI.getRestaurants({
                page: queryPage,
                categoryId: queryCategoryId            
            })
            if (response.statusText !== 'OK'){
                throw new Error(response.statusText)
            }
            
            const {restaurants, categories, categoryId, page, totalPage, prev, next} = response.data

            this.restaurants = restaurants
            this.categories = categories
            this.categoryId = categoryId
            this.page = page
            this.totalPage = totalPage
            this.previousPage = prev,
            this.nextPage = next
        } catch(err){
            console.log(err)
            Toast.fire({
                icon:'error',
                title: '無法取得餐廳資料，請稍後再試'
            })
        }
        
    }

    
  },
  created() {
    const {page = '', categoryId = ''} = this.$route.query
    this.fetchRestaurants({
        queryPage: page,
        queryCategoryId: categoryId
    })  
  },
  beforeRouteUpdate (to, from, next){
//  當沒有query時，通常代表撈全部資料，會回傳undefine，會無法撈資料，故用page=''給予預設值
       const {page ='', categoryId =''} = to.query
       this.fetchRestaurants({queryPage: page, queryCategoryId: categoryId})
       next()
    }
}
</script>