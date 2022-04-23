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
          <a href="#">
            {{comment.User.name}}
          </a>
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
const DummyData = {
   currentUser: {
      id: 1,
      name: "root",
      email: "root@example.com",
      isAdmin: true
    },
   isAthenticated: true
}
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
  data(){
    return {
      currentUser: DummyData.currentUser
    }
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log('click delete', commentId)
      //TODO 請求API伺服器刪除 id 為 commentId的資料
      this.$emit('after-delete-comment', commentId)
      //觸發父層事件 ＄emit(事件名稱，傳遞的資料)

    }
  }
  
}
</script>