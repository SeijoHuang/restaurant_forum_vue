<template>
  <div class="container py-5">
    <NavTab />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
     <div class="row text-center">
      <users-top-card 
        v-for="user in usersTop"
        :key="user.id"
        :initial-user="user"
      />
    </div>    
  </div>     
</template>



<script>
import NavTab from './../components/NavTab.vue'
import UsersTopCard from './../components/usersTopCard.vue'

const DummyData = {
    "users": [
        {
            "id": 1,
            "name": "Hana",
            "email": "root@example.com",
            "password": "$2a$10$9lld7VMc6O3ejw7RYM/fyOoko6qLHjKskCxSTNN/0b.XvURZYMDxW",
            "isAdmin": true,
            "image": "https://i.pinimg.com/564x/31/21/f3/3121f3dbdc4ac509f8be6d23305e54d4.jpg",
            "createdAt": "2022-04-20T13:43:41.000Z",
            "updatedAt": "2022-04-20T13:43:41.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "Black",
            "email": "user1@example.com",
            "password": "$2a$10$yN9JXedUr/Nhw7hnWSMWmeQfa3oSA9XIcg9URoYP.hKiMlxwn01FG",
            "isAdmin": false,
            "image": "https://i.pinimg.com/564x/b9/11/fa/b911fa3c568da96fc59ea5c7372d95a7.jpg",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "Golden",
            "email": "user2@example.com",
            "password": "$2a$10$8l3gfhD2zHyMgAxFMJlI6uMO6rPD5ug4chgehEP7hYB2hrELJFIGG",
            "isAdmin": false,
            "image": "https://i.pinimg.com/564x/f9/f6/13/f9f613745cad6759e8e83399e1e1105b.jpg",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  components : {
    NavTab,
    UsersTopCard
  },
  data(){
    return {
      usersTop: {}
    }
  },
  methods: {
    fetchUsersTop(){
      this.usersTop = {...DummyData.users}
    }
  },
  created(){
    this.fetchUsersTop()
  }
}
</script>