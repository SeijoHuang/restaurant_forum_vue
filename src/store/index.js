import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from './../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:{
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token:''
  },
  getters: {
    
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        //透過API取得currentUser
        ...currentUser
      }
      //登入時將使用者驗證用的token存入state中
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state){
      state.currentUser = {}
      state.isAuthenticated = false
      //登出時清空state裡存的token
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({commit}){
      try{
        const {data} = await userAPI.getCurrentUser()
        const{id,name,email,image,isAdmin} = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      }catch(error){
        console.log(error)
        console.error('can not fetch current user')
        //驗證失敗一併觸發登出行為
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
