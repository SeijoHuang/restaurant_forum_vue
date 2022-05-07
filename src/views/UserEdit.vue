<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUserData.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img 
        :src="currentUserData.image" alt=""
        class="d-block img-thumbnail mb-3" 
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change.stop.prevent="handleFileChange"
        >
      </div>

      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary"
      >
        {{isProcessing? '處理中' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import userAPI from './../apis/user'
import {Toast} from './../utils/helpers'

export default {
  name: 'UserEdit',
  data(){
    return {
      currentUserData: {
        id: -1,
        name:'',
        image:''
      },
      isProcessing: false
    }
  },
  methods:{
    fetchCurrentUser(){
      //如果路由參數的id 不等於currentUser id 跳轉到not found
      const {id:paramsId} = this.$route.params
      if(paramsId !== this.currentUser.id) {
        this.$router.push({name: 'not_found'})
      }
      const {id, name, image} = this.currentUser
      this.currentUserData = {
        ...this.currentUser,
        id,
        name,
        image: image || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
      }
    },
    handleFileChange(e){     
      const file = e.target.files 
      //如果沒有照片就傳入預設圖     
      if (file.length === 0 ){
        this.currentUserData.image = 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
        return
      } else {
        const imgUrl = window.URL.createObjectURL(file[0])
        this.currentUserData.image = imgUrl
      }
    },
    async handleSubmit(e){
      //TODO  串接API回傳資料給伺服器
      if(!this.currentUserData.name){
        Toast.fire({
          icon:'warning',
          title: '請填入用戶名'
        })
        return
      }
      try{
        this.isProcessing = true
        const form = e.target
        const formData = new FormData(form)
        // for(let [name, value] of formData){
        //   console.log(name,":",value)
        // }
        const {data} = await userAPI.update({
          userId: this.currentUser.id,
          formData
        })
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.isProcessing = false
        this.$router.push(`/user/${this.currentUser.id}`)
      }catch(error){
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法儲存編輯，請稍後再試'
        })
      }
      
    }
  },
  watch:{
    currentUser(newValue){
      this.currentUserData= {
        ...this.currentUser,
        ...newValue
      }
    }
  },
  computed:{
    ...mapState(['currentUser'])
  }, 
  created(){
    this.fetchCurrentUser()
  }
}
</script>
