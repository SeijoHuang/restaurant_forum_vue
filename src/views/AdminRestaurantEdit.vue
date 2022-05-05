<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      :is-processing ="isProcessing"
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>

import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import {Toast} from './../utils/helpers'

export default {
  name:'AdminRestaurantEdit',
  components:{
    AdminRestaurantForm
  },
  data(){
    return {
      restaurant: {
        "id": -1,
        "name": '',
        "tel": '',
        "address": '',
        "openingHours": '',
        "description": '',
        "image": '',
        "CategoryId": '',
      },
      isProcessing: false
    }
  },
  methods: {
    async fetchRestaurant(restaurantId){
      try{
        const response= await adminAPI.restaurants.getDetail({restaurantId})
        if(response.statusText !== 'OK'){
          throw new Error(response.statusText)
        }     
        console.log(response)   
        const {id, name, tel, address, opening_hours:openingHours, description, image, CategoryId } = response.data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          CategoryId
      }
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
      
    },
    async handleAfterSubmit(formData){
      try{
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.update({restaurantId: this.restaurant.id, formData})
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.$router.push({name:'admin-restaurants'})
      }catch(error){
        this.isProcessing = false
        Toast.fire({
          icon:'error',
          title:'無法儲存編輯內容，請稍後再試'
        })
      }
      
    }
  },
  beforeRouteUpdate(to, from, next){
    console.log(to, from)
    const {id} = to.params
    this.fetchRestaurant(id)
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant

    }
    next()
  },
  created() {
    const {id} = this.$route.params
    this.fetchRestaurant(id)
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant

    }
  },
  
}
</script>