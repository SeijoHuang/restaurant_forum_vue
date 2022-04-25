<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
   
    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
             to="/admin/restaurants" 
             class="text-white mr-3"
             v-if="currentUser.isAdmin"
        >
         管理員後台
       </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated"> 
          <router-link
             :to="{
               name: 'user',
               params: {id: currentUser.id}
             }" 
             class="text-white mr-3"
          > 
           {{ currentUser.name || '使用者' }} 您好
         </router-link>
         <button
           type="button" 
           class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
           登出
          </button>
         </template>
      </div>
    </div>
   
    
  </nav>
</template>

<script>
// seed data
// 假資料，未串接API時先使用這組資料模擬登錄
const dummyData = {
   currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  data() {
    return {
      // vue在沒有資料時使用此預設值，有外部資歷進來，就會被覆寫
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  methods: {
    // 向後端拉取資料
    fetchUser(){
      this.currentUser = {
        ...this.currentUser,
        ...dummyData.currentUser
      }
      this.isAuthenticated = dummyData.isAuthenticated      
    }
  },
  created(){
    this.fetchUser()
  }
}
</script>