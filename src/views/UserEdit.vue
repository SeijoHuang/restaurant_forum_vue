<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUser.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img 
        :src="currentUser.image" alt=""
        class="d-block img-thumbnail mb-3" 
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change.stop.prevent="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const DummyUser = {
  currentUser:{
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
  },
  isAuthenticated: true    
}
export default {
  name: 'UserEdit',
  data(){
    return {
      currentUser: {
        id: -1,
        name:'',
        image:''
      }
    }
  },
  methods:{
    fetchCurrentUser(currentUserId){
      console.log(currentUserId)
      const {currentUser} = DummyUser
      const {id, name, image} = currentUser
      this.currentUser = {
        ...currentUser,
        id,
        name,
        image: image || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
      }
    },
    handleFileChange(e){
      const file = e.target.files      
      if (file.length === 0 ){
        this.currentUser.image = 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
        return
      } else {
        const imgUrl = window.URL.createObjectURL(file[0])
        this.currentUser.image = imgUrl
      }
    },
    handleSubmit(e){
      //TODO  串接API回傳資料給伺服器
      const form = e.target
      const formData = new FormData(form)
      for(let [name, value] of formData){
        console.log(name,":",value)
      }
    }
  },
  created(){
    this.fetchCurrentUser(this.$route.params.id)
  }
}
</script>
