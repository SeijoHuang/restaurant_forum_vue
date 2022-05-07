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
    isAuthenticated: false
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
      state.isAuthenticated = true
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

      }catch(error){
        console.log(error)
        console.error('can not fetch current user')
      }
    }
  },
  modules: {
  }
})
