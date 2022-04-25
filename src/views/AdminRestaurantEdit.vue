<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
const DummyData= {
    "restaurant": {
        "id": 2,
        "name": "Hilbert Sanford",
        "tel": "352.762.0824 x46507",
        "address": "071 Otho Hill",
        "opening_hours": "08:00",
        "description": "commodi assumenda adipisci",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.13807102607181765",
        "viewCounts": 1,
        "createdAt": "2022-04-20T13:43:42.000Z",
        "updatedAt": "2022-04-24T07:45:43.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        }
    }
}

import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
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
      }
    }
  },
  methods: {
    fetchRestaurant(restaurantId){
      console.log(restaurantId)
      const {restaurant} = DummyData
      const {id, name, tel, address, opening_hours:openingHours, description, image, CategoryId } = restaurant
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
    },
    handleAfterSubmit(formData){
      
      for(let[name, value] of formData.entries()){
        console.log(name,':',value)
      }
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchRestaurant(id)
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant

    }
  }
}
</script>