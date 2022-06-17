<template>
  <div id="restaurant-forum">
    <NavBar />
    <main class="mt-5 bg-white">  
      <router-view/>
    </main>
    
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import  NavBar from './components/NavBar.vue'

export default{
 components: {
   NavBar : NavBar    //nav_bar : nav_bar 縮寫
 }
}
</script>


<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>