<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin? 'admin' : 'user'}}</td>
          <td>
            <template v-if="currentUser.id !== user.id">
              <button
                v-show="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleIsAmin({userId: user.id, isAdmin: user.isAdmin})"
              >
                set as user
              </button>
            </template>
            <button
              v-show="!user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleIsAmin({userId: user.id, isAdmin: user.isAdmin})"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav.vue'
import adminAPI from './../apis/admin'
import {Toast} from './../utils/helpers'
import {mapState} from 'vuex'


export default {
  name:'AdminUsers',
  components:{
    AdminNav
  },
  data() {
    return{
      users: []
    }
  },
  methods: {
    async fetchUsers() {
        try{
            const {data, statusText} = await adminAPI.users.get()
            console.log(statusText)
            if(statusText !== 'OK'){
                throw new Error (statusText)
            }
            const {users} = data
            this.users = users

        }catch(error){
            Toast.fire({
                icon:'error',
                title: '無法載入使用者，請稍後再試'
            })
        }     
    },
    async toggleIsAmin({userId, isAdmin}){
        try{
        
            const willBeAdmin = !isAdmin
             const {data} = await adminAPI.users.update({
                userId,
                isAdmin: willBeAdmin.toString()
            })
            if(data.status !== 'success'){
                throw new Error (data.message)
            }
             this.users = this.users.map(user => {
                if(user.id === userId){
                return {
                    ...user,
                    isAdmin: willBeAdmin
                }
                }
                return user
            })
            
           
           
        }catch(error){
            Toast.fire({
                icon:'error',
                title: '無法修改用戶身份，請稍後再試'
            })
        }
     
    }
  },
  computed:{
      ...mapState(['currentUser'])
  },
  created() {
    this.fetchUsers()
  }
  
}
</script>