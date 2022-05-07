<template>
  <div class="card">
      <div class="card-header">
        <strong>{{ userFollowings.length }}</strong> followings (追蹤者)
      </div>
      <div class="card-body">
          <router-link 
            v-for=" following in userFollowings"
            :key=" following.id"
            :to="{
                name: 'user',
                params: { id: following.id} 
            }"
          >
              <img :src="following.image | emptyImage" width="60" height="60" class="avatar">
          </router-link>
         
      </div>
    </div>
</template>
<script>
import {EmptyImageFilter} from './../utils/mixins'
export default {
    name:"UserFollowingCard",
    mixins: [ EmptyImageFilter ],
    props: {
        userFollowings:{
            type: Array,
            default: () => [] 
            //預設為空陣列  
        }
    },
    watch:{
        // userFollowings(newValue){
        //     this.userFollowings = {
        //         ...this.userFollowings,
        //         ...newValue
        //     }
        // }
    }
}
</script>