<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div 
      v-for="comment in restaurantComments" 
      :key="comment.id"
    >
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <router-link 
            :to="{
              name: 'user',
              params: {id: comment.User.id}
            }"
          >
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { FromNowFilter } from './../utils/mixins' //載入函式
import commentAPI from './../apis/comment'
import {Toast} from './../utils/helpers'
import {mapState} from 'vuex'

export default {
  name: "RestaurantComments",
  // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [ FromNowFilter ],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed:{
    ...mapState(['currentUser'])
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
       //TODO 請求API伺服器刪除 id 為 commentId的資料
      try{
        const {data} = await commentAPI.delete({
        commentId,
        restaurantId: this.restaurantComments.RestaurantId
        })
        if(data.status !== 'success'){
          throw new Error(data.message)
        }       
        this.$emit('after-delete-comment', commentId)
        //觸發父層事件 ＄emit(事件名稱，傳遞的資料)
      } catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      }
      
      

    }
  }
  
}
</script>