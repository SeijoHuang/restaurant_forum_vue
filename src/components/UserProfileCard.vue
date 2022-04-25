<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img 
            :src="userProfile.image | emptyImage" 
            width="300px" height="300px"
          >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{userProfile.name}} </h5>
          <p class="card-text">
            {{userProfile.email}}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>
                {{userProfile.Comments.length}}
              </strong> 
              已評論餐廳
            </li>
            <li>
              <strong>
                {{userProfile.FavoritedRestaurants.length}}
              </strong> 
              收藏的餐廳
            </li>
            <li>
              <strong>
                {{userProfile.Followings.length}}
              </strong> 
              followings (追蹤者)
            </li>
            <li>
              <strong>
                {{userProfile.Followers.length}}
              </strong> 
              followers (追隨者)
            </li>
          </ul>
          <form action="/following/1?_method=DELETE" method="POST" style="display: contents;">
            <router-link :to="{
              name:'user-edit',
              params: {id: userProfile.id}
            }"
              v-if= "currentUser.id === userProfile.id"
              @click.stop.prevent="follow(true)"
              type="submit" 
              class="btn btn-primary"
              >
              edit          
            </router-link>
            <div v-else>
              <button 
                v-if="userProfile.isFollowed"
                @click.stop.prevent="unFollow(false)"
                type="submit" 
                class="btn btn-danger">
                取消追蹤            
              </button>
              <button 
                v-else
                @click.stop.prevent="follow(true)"
                type="submit" 
                class="btn btn-primary">
                追蹤            
              </button>
            </div>          
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {EmptyImageFilter} from './../utils/mixins'
export default {
  name: 'UserProfileCard',
  mixins: [ EmptyImageFilter ],
  props: {
    initialUserprofile: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userProfile: this.initialUserprofile
    }
  },
  methods: {
    follow(status){
      //TODO API請求新增最愛
      this.$emit('after-follow', status)
    },
    unFollow(status){
    //TODO API請求移除最愛
      this.$emit('after-unfollow', status)
    }
  }
}
</script>
