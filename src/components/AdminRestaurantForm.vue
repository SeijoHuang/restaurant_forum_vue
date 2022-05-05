<template>
  <form
    v-show="!isLoading"
    @submit.stop.prevent="handleSubmit">
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
        v-model="restaurant.CategoryId"
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
      :disabled="isProcessing"
    >
      {{isProcessing? '處理中...':'送出'}}
    </button>
  </form>
</template>

<script>
import adminAPI from './../apis/admin'
import {Toast} from './../utils/helpers'

export default {
  name: 'AdminRestaurantForm',
  props: {
    initialRestaurant:{
      type: Object,
      default: () => {
        return {
          // 設定預設值，當沒有資料傳入時，會使用這一組資料，也就是在新增新的餐廳資料時，會帶入此預設值
          name: '',
          CategoryId: '',
          tel: '',
          address: '',
          openingHours: '',
          description: '',
          image: '',
        }
      }
    } ,
    isProcessing:{
      type: Boolean,
      default: false
    }   
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant
      },
      isLoading: true
    }
  },
  methods :{
    async fetchCategories() {
      try{
        const {data} = await adminAPI.categories.get()
        this.isLoading = false
        this.categories = data.categories
      }catch(error){
        this.isLoading = false
        Toast.fire({
          icon:'error',
          title: '無法載入餐廳類別，請稍後再試'
        })
      }     
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
      if(!this.restaurant.name){
        Toast.fire({
          icon:'warning',
          title:'請輸入餐廳名稱'         
        })
        return
      } else if (!this.restaurant.CategoryId){
        Toast.fire({
          icon:'warning',
          title:'請輸入餐廳類別'
        })
        return
      }
      const form = e.target
      const formData = new FormData(form)
      
      this.$emit('after-submit', formData)
    }
  },
  created() {
    this.fetchCategories()
  },
  watch:{
    // initialRestaurant:{
    //   deep:true,
    //   handler:function(){
    //     this.restaurant = {
    //       ...this.initialRestaurant
    //     }
    //   }
    // }
    initialRestaurant(newValue){
      this.restaurant = {
        //避免新的值有些資料沒有被給到，所以載入舊有的資料，在覆蓋上有更新的新資料
        ...this.restaurant,
        ...newValue
      }

    }
  }
  
}
</script>

