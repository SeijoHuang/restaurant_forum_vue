<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;"
        >
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr>
    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >回上一頁</button>
  </div>
</template>
<script>
import {EmptyImageFilter} from './../utils/mixins'

const DummyData = {
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

export default {
  name: 'AdminRestaurant',
  mixins: [ EmptyImageFilter ],
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        tel: '',
        address:'',
        description: '',
        image: '',
        categoryName:'',
        openingHours: '',
      }
    }
  },
  methods: {
    fetchRestaurant(fetchRestaurantId) {
      console.log(fetchRestaurantId)
      const {restaurant} = DummyData
      const {id, name, tel, address, description, image, Category, opening_hours: openingHours } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        description,
        image,
        categoryName: Category? Category.name : '未分類',
        openingHours
      }
    } 
  },
  mounted() {
    const {id: restaurantId} = this.$route.params
    this.fetchRestaurant(restaurantId)
  }  
}
</script>