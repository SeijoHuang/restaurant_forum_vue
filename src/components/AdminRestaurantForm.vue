<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        v-model="restaurant.categoryId"
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option 
          v-for=" category in categories"
          :key=" category.id "
          :value=" category.id"
        >
          {{category.name}}
        </option>       
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.openingHours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img 
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3" 
        width="200"
        height="200"
        alt="restaurant-photo">
      <input
        id="image"
        type="file"
        name="image"
        multiple
        accept="image/*"
        class="form-control-file"
        @change.stop.prevent="handleFileChange"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
    >
      送出
    </button>
  </form>
</template>

<script>
const DummyCategories= {
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        }
    ]
} 
export default {
  name: 'AdminRestaurantForm',
  props: {
    initialRestaurant:{
      type: Object,
      default: () => {
        return {
          // 設定預設值，當沒有資料傳入時，會使用這一組資料，也就是在新增新的餐廳資料時，會帶入此預設值
          name: '',
          categoryId: -1,
          tel: '',
          address: '',
          openingHours: '',
          description: '',
          image: '',
        }
      }
    }    
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant
      }
    }
  },
  methods :{
    fetchCategories() {
      this.categories = DummyCategories.categories
    },
    handleFileChange(e){
    const file = e.target.files //會回傳file物件 
    if(file.length === 0) {
      // 沒有上傳像相片
      this.restaurant.image =''
      return
    } else {
      const imgUrl = window.URL.createObjectURL(file[0]) //取得圖片暫存網址
      this.restaurant.image = imgUrl
    }   
    },
    handleSubmit(e){
      const form = e.target
      const formData = new FormData(form)
      
      this.$emit('after-submit', formData)
    }
  },
  created() {
    this.fetchCategories()
  }
  
}
</script>

