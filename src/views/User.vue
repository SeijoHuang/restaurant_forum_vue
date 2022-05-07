<template>
<div class="album py-5 bg-light">
  <div class="container">
    <!-- user card -->
    <UserProfileCard 
      :initial-userprofile="user"
      :current-user="currentUser"
    />
    <div class="row">
      <div class="col-md-4">
      <!-- user following -->
        <UserFollowersCard 
          :user-followers="user.Followers"
        />
        <br>
        <!-- user follower -->
        <UserFollowingsCard 
          :user-followings="user.Followings"
        />
      </div>
      <div class="col-md-8">
          <!-- user comment card -->
        <UserCommentsCard
          :user-comments="user.Comments"
        />
        <br>
          <!-- user favorite restaurant card -->
        <UserFavoritedRestaurantsCard 
          :user-favoritedrestaurants="user.FavoritedRestaurants"
        /> 
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import UserProfileCard from './../components/UserProfileCard.vue'
import UserFollowingsCard from './../components/UserFollowingsCard.vue'
import UserFollowersCard from './../components/UserFollowersCard.vue'
import UserCommentsCard from './../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard.vue'
import userAPI from './../apis/user'
import {Toast} from './../utils/helpers'
import {mapState} from 'vuex'


export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      user:{
        id: -1,
        name: '',
        email: '',
        image: '',
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
        isFollowed: ''
      }
     
    }
  },
  computed:{
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUser(userId){
      try{
        const {data, statusText} = await userAPI.getUser({userId})
        if(statusText !== 'OK'){
          throw new Error(statusText)
        }
        const {profile, isFollowed} = data
        const {id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings} = profile
        this.user = {
          id,
          name,
          email,
          image,
          Comments: Comments.filter(comment => comment.Restaurant ),
          FavoritedRestaurants,
          Followers,
          Followings,
          isFollowed
        }
      }catch(error){
        Toast.fire({
          icon: '無法載入用戶資料，請稍後再試'
        })
      }            
    }   
  },
  created (){
    const {id:userId} = this.$route.params
    this.fetchUser(userId)
  },
  // 路由改變時，從新跟伺服器發送請求，渲染收到的資料
  beforeRouteUpdate(to, from, next){
    const {id:userId} = to.params
    this.fetchUser(userId)
    next()
  } 
}
</script>





