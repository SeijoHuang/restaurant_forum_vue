<template>
  <form @submit.prevent.stop="createComment(restaurantId)">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model.trim="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary mr-0"
      >
        {{isProcessing? '處理中' : 'Submit'}}
      </button>
    </div>
  </form>
</template>

<script>
// 尚未串接API,先用uuid產生id
// import { v4 as uuidv4 } from 'uuid'
import commentAPI from './../apis/comment'
import {Toast} from './../utils/helpers'
export default {
  name:"CreateComment",
  props: {
     restaurantId: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      text:"",
      isProcessing: false
    }
  },
  methods: {
    async  createComment(){
      try{
        if(!this.text.length) {
          Toast.fire({
            icon:'warning',
            title: '請輸入評論'
          })
          return
        }
        this.isProcessing = true
        const {data} = await commentAPI.createComment({
          restaurantId: this.restaurantId,
          text: this.text, 
      })
      if(data.status !== 'success'){
        throw new Error (data.message)
      }      
      // TODO 向API發送POST請求
      this.$emit('after-create-comment', {
          commentId: data.commentId,        
          restaurantId: this.restaurantId,
          text: this.text,
        }
      )
      this.isProcessing = false
      this.text=""
      } catch(error){
        this.isProcessing = false
        Toast.fire({
          icon:'error',
          title: '無法新增評論，請稍後再試'
        })
      }
     
    }
  }
}
</script>