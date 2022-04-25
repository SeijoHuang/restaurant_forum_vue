<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initial-restaurant="restaurant"
    />
     <hr>
      <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'

const DummyData = {
    "restaurant": {
        "id": 1,
        "name": "Davion Stamm",
        "tel": "1-234-637-3337",
        "address": "6245 Joannie Summit",
        "opening_hours": "08:00",
        "description": "laudantium",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.79875395670301",
        "viewCounts": 1,
        "createdAt": "2022-04-20T13:43:42.000Z",
        "updatedAt": "2022-04-22T07:26:39.214Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 101,
                "text": "Libero nihil itaque non.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$yN9JXedUr/Nhw7hnWSMWmeQfa3oSA9XIcg9URoYP.hKiMlxwn01FG",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-20T13:43:42.000Z",
                    "updatedAt": "2022-04-20T13:43:42.000Z"
                }
            },
            {
                "id": 51,
                "text": "Consectetur id est et consequuntur ab amet provident.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$9lld7VMc6O3ejw7RYM/fyOoko6qLHjKskCxSTNN/0b.XvURZYMDxW",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-04-20T13:43:41.000Z",
                    "updatedAt": "2022-04-20T13:43:41.000Z"
                }
            },
            {
                "id": 1,
                "text": "Sapiente tenetur voluptatibus laboriosam sunt qui.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$8l3gfhD2zHyMgAxFMJlI6uMO6rPD5ug4chgehEP7hYB2hrELJFIGG",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-04-20T13:43:42.000Z",
                    "updatedAt": "2022-04-20T13:43:42.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}
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
  name:'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data(){
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: DummyUser.currentUser
    }
  },
  methods: {
    /* eslint-disable */
    fetchRestaurant(restaurantId){
      const {restaurant, isFavorited,  isLiked} = DummyData
      const {
        id, 
        name,
        Category, 
        image, 
        opening_hours: openingHours, 
        tel, 
        address, 
        description,
        Comments 
        } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,      
      }
      this.restaurantComments = Comments
    },
    afterDeleteComment(commentId){
      console.log('after', commentId)
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id != commentId)
    },
    afterCreateComment(payload){
      console.log('comment')
      const {commentId, text, restaurantId} = payload
      this.restaurantComments.push({
        id: commentId,
        text,
        RestaurantId: restaurantId,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        }
      })
    }

  },
  created(){
    const {id} = this.$route.params
    //透過$route拿到網址的參數
    this.fetchRestaurant(id)
  }
}
</script>