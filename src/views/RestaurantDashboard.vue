<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
        "updatedAt": "2022-04-22T07:26:39.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        "Comments": [
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
            }
        ]
    }
}
export default {
  data(){
    return {
      restaurant: {
        id:-1,
        name:'',
        viewCounts:0,
        categoryName:'',
        commentsLength:0,
      }
    }
  },
  methods:{
    fetchRestaurant(){
      const {id,name, viewCounts, Category, Comments} = DummyData.restaurant
      this.restaurant = {
        id,
        name,
        viewCounts,
        categoryName: Category.name,
        commentsLength: Comments.length
      }
    }
  },
  created(){
    this.fetchRestaurant()
  }
}
</script>