<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
      :is-processing="isProcessing"
      @after-submit="afterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import {Toast} from './../utils/helpers'
export default {
  name: "AdminRestaurantsNew",
  data(){
    return {
      isProcessing: false
    }
  },
  components: {
    AdminRestaurantForm
  },
  methods: {
    async afterSubmit(formData){
      try{
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.create({formData})
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants'})
      }catch(error){
        this.isProcessing = false
        Toast.fire({
          icon:'error',
          title: '無法新增餐廳，請稍後再試'
        })
      }    
    }
  }
}
</script>
