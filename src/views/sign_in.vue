<template>
  <div class="container py-5"> 
    <form  @submit.prevent.stop="handleSubmit" class="w-100" >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
            Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button        
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/sign_up">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>  
</template>

<script>
import authorizationAPI from "../apis/authorization"
import {Toast} from "../utils/helpers"
export default {
  data(){
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit(){
      try{
        if(!this.email || !this.password){
        Toast.fire({
          icon:'warning',
          title: '請輸入帳號密碼'
        })
        return
      }
      // disable button 避免重複點擊
      this.isProcessing = true 

      const response = await authorizationAPI.signIn({
        email: this.email,
        password: this.password
      })
      const {data} = response 
      if(data.status !== 'success'){
        throw new Error(data.message)
      }
      //伺服器回傳的token存進localStorage                  
      localStorage.setItem('token', data.token)
      //setCurrentUser方法把使用者資料傳入vuex的state中
      this.$store.commit('setCurrentUser', data.user)
      this.$router.push('/restaurants')
      } catch (error) {
        this.isProcessing = false
      // 清空密碼欄位
      this.password = ""
      // sweet alert
      Toast.fire({
        icon: "warning",
        title:"請輸入正確的帳號密碼"
      })
      console.log('error', error)
      }
      

    }
    // promise
    // handleSubmit(){
    //   // console.log('submit')
    //   // const data = JSON.stringify({
    //   //   email: this.email,
    //   //   password: this.password
    //   // })
    //   // console.log(data)
    //   if(!this.email || !this.password){
    //     Toast.fire({
    //       icon:'error',
    //       title: '請輸入帳號密碼'
    //     })
    //     return
    //   }
    //   // disable button 避免重複點擊
    //   this.isProcessing = true 

    //   authorizationAPI
    //   .signIn({
    //   email: this.email,
    //   password: this.password
    //   })
    //   .then( response => {
    //   const {data} = response 
    //   if(data.status !== 'success'){
    //     throw new Error(data.message)
    //   }                  
    //   localStorage.setItem('token', data.token)
    //   this.$router.push('/restaurants')
    //   })
    //   .catch(error => {
    //   this.isProcessing = false
    //   // 清空密碼欄位
    //   this.password = ""
    //   // sweet alert
    //   Toast.fire({
    //     icon: "warning",
    //     title:"請輸入正確的帳號密碼"
    //   })
    //   console.log('error', error)
    //   })
    // }
  }
}
</script>