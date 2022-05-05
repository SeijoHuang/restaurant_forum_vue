<template>
  <div class="container py-5">
    <NavTab />
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
  </div>     
</template>



<script>
import NavTab from './../components/NavTab.vue'
import UsersTopCard from './../components/usersTopCard.vue'
import usersAPI from './../apis/user'
import {Toast} from './../utils/helpers'

export default {
  components : {
    NavTab,
    UsersTopCard
  },
  data(){
    return {
      usersTop: {}
    }
  },
  methods: {
    async fetchUsersTop(){
      try{
        const {data, statusText} = await usersAPI.getTopUsers()
        
        this.usersTop = data.users
        if(statusText !== 'OK'){
          throw new Error(data.message)
        }
      }catch(error){
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