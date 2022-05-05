<template>
  <div class="col-3">
    <router-link 
      :to="{
        name:'user',
        params: {
          id: user.id
        }
      }"
    >
      <img
        :src="user.image | emptyImage"
        width="140px"
        height="140px"
      >
    </router-link>
    <h2>{{user.name}}</h2>
    <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="unfollow(user.id)"          
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="follow(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>  
</template>

<script>
import {EmptyImageFilter} from './../utils/mixins'
import usersAPI from './../apis/user'
import {Toast} from './../utils/helpers'

export default {
  name: 'usersTopCard',
  mixins: [ EmptyImageFilter ],
  props: {
    initialUser:{
      type: Object,
      required: true
    }
  },
  data(){
    return {
      user: this.initialUser
    }
  },
  methods: {
   async follow(userId){
     try{
       const {data} = await usersAPI.addFollowing(userId)
       if(data.status !== 'success'){
         throw new Error(data.message)
       }
       this.user = {
        ...this.user,
        isFollowed: true,
        FollowerCount: this.user.FollowerCount += 1
       }     
     }catch(error){
       Toast.fire({
         icon: 'warning',
         title: '無法加入追蹤清單，請稍後再試'
       })
     }     
    },
    async unfollow(userId){
      try{
        const {data} = await usersAPI.removeFollowing({userId})
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
        this.user =  {
        ...this.user,
        isFollowed: false,
        FollowerCount: this.user.FollowerCount-= 1
        }
      }catch(error){
        Toast.fire({
         icon: 'warning',
         title: '無法取消追蹤，請稍後再試'
       })
      }    
    }  
  }
}
</script>