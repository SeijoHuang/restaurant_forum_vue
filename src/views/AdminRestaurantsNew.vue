<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
      @after-submit="afterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
export default {
  name: "AdminRestaurantsNew",
  components: {
    AdminRestaurantForm
  },
  methods: {
    afterSubmit(formData){
    //TODO 透過API將表單傳到伺服器
    for(let[name, value] of formData.entries()){
        console.log(name,':',value)
      }
    }
  }
}
</script>
