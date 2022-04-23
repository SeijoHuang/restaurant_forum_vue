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
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
// 尚未串接API,先用uuid產生id
import { v4 as uuidv4 } from 'uuid'
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
      text:""
    }
  },
  methods: {
    createComment(restaurantId){
      if(!this.text.length) return
      console.log('create comment',restaurantId)
      // TODO 向API發送POST請求
      this.$emit('after-create-comment', {
        commentId: uuidv4(),        
        restaurantId: this.restaurantId,
        text: this.text
        }
      )
      this.text=""
    }
  }
}
</script>