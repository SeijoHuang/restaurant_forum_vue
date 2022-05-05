<template>
  <div class="container py-5">
     <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model.trim="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          >
        </div>
        <div class="col-auto">
          <button
            :disabled ="isProcessing"
            @click.stop.prevent="addCategory"
            type="button"
            class="btn btn-primary"
          >
            {{isProcessing? '處理中': '新增'}}
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div
              v-show="!category.isEditing"
              class="category-name">
                {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            >
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent=" handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent=" toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click="updateCategory({ categoryId: category.id, name: category.name })"
            >
              Save
            </button>
            <button
              @click.stop.prevent="deleteCategory(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'
import AdminNav from './../components/AdminNav.vue'
import adminAPI from './../apis/admin'
import {Toast} from './../utils/helpers'


export default {
  components: {
    AdminNav
  },
  data(){
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false
    }
  },
  methods: {
    async fetchCategories(){
      try{
        const response = await adminAPI.categories.get()
        if(response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }
        this.categories = response.data.categories.map(category => ({
        ...category,
        isEditing: false,
        nameCached: ''
      }))
      }catch(error){
        Toast.fire({
          icon:'error', 
          title: '無法載入餐廳類別，請稍後再試'
        })
      }      
    },
    async addCategory(){
      try{
        if(!this.newCategoryName){
          Toast.fire({
            icon: 'warning',
            title: '請輸入餐廳類別'
          })
          return
        }
        // 切換處理中 避免多次點擊
        this.isProcessing = true
        const {data} = await adminAPI.categories.create({
          name: this.newCategoryName
        })
        console.log(data)
        if(data.status !== 'success'){
          throw new Error (data.message)
        }
        // 新類別加入陣列，讓畫面能即時呈現，因為data資料會等頁面重新整理時才會像api載入新的資料
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false
        })
        this.isProcessing = false
        this.newCategoryName = ''
        } catch(error){
          this.isProcessing = false
        Toast.fire({
          icon:'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }    
    },
    deleteCategory(categoryId){
      this.categories = this.categories.filter(category => category.id !== categoryId)
    },
    toggleIsEditing(categoryId){
      this.categories = this.categories.map(category => {
        if(category.id === categoryId){
          return {
            ...category,
            isEditing: !category.isEditing, 
            nameCached: category.name          
          }         
        }
        return category
      })
      
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if(category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached //原本的名稱還回去
          }         
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    },
    updateCategory({categoryId, name }) {  
    //TODO 串接API修改伺服器資料
      console.log(name)
      this.toggleIsEditing(categoryId)   
     
    }
  },
  created(){
    this.fetchCategories()
  }
}
</script>

<style scoped>
  .category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>