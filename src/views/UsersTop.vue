<template>
  <div class="container py-5">
    <NavTab />
    <Spinner v-if="isLoading" />
    <template  v-else>
      <h1 class="mt-5">
        美食達人
      </h1>
      <hr>
      <div class="row text-center">
        <users-top-card 
          v-for="user in usersTop"
          :key="user.id"
          :initial-user="user"
        />
      </div> 
    </template>   
  </div>     
</template>



<script>
import Spinner from './../components/Spinner.vue'
import NavTab from './../components/NavTab.vue'
import UsersTopCard from './../components/usersTopCard.vue'
import usersAPI from './../apis/user'
import {Toast} from './../utils/helpers'

export default {
  components : {
    NavTab,
    UsersTopCard,
    Spinner
  },
  data(){
    return {
      usersTop: {},
      isLoading: false
    }
  },
  methods: {
    async fetchUsersTop(){
      try{
        this.isLoading = true
        const {data, statusText} = await usersAPI.getTopUsers()        
        this.usersTop = data.users
        if(statusText !== 'OK'){
          throw new Error(data.message)
        }
        this.isLoading = false
      }catch(error){
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法取得美食達人，請稍後再試'
        })
      }
      
    }
  },
  created(){
    this.fetchUsersTop()
  }
}
</script>