<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link
            :to="{
              name: 'restaurant',
              params: {id: comment.Restaurant.id}
            }"
          >
          
            {{comment.Restaurant.name}}
          </router-link>
        </h4>
        <p>{{comment.text}}</p>by
        <a href="#">
          {{comment.User.name}}
        </a>
        at {{comment.updatedAt | fromNow }}
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
import { FromNowFilter } from './../utils/mixins'
export default {
  name: "NewsComments",
  mixins: [ FromNowFilter],

  props :{
    comments : {
      type: Array,
      required: true
    }
  },
}
</script>