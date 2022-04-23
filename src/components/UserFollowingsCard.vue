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
              <img :src="following.image" width="60" height="60" class="avatar">
          </router-link>
         
      </div>
    </div>
</template>
<script>
export default {
    name:"UserFollowingCard",
    props: {
        userFollowings:{
            type: Array,
            default: () => [] 
            //預設為空陣列  
        }
    }
}
</script>