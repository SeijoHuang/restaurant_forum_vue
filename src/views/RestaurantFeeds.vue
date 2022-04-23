<template>
  <div class="container py-5">
    <NavTab />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComment :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTab from './../components/NavTab.vue'
import NewestRestaurants from './../components/NewestRestaurant.vue'
import NewestComment from './../components/NewestComment.vue'
const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Davion Stamm",
            "tel": "1-234-637-3337",
            "address": "6245 Joannie Summit",
            "opening_hours": "08:00",
            "description": "laudantium",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.79875395670301",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 2,
            "name": "Hilbert Sanford",
            "tel": "352.762.0824 x46507",
            "address": "071 Otho Hill",
            "opening_hours": "08:00",
            "description": "commodi assumenda adipisci",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.13807102607181765",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 3,
            "name": "Carolyn Rowe",
            "tel": "(932) 122-3150",
            "address": "194 Omer Manors",
            "opening_hours": "08:00",
            "description": "sit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.077803882773374",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 4,
            "name": "Sylvester Goyette",
            "tel": "1-535-756-8286 x09588",
            "address": "12862 Kassulke Branch",
            "opening_hours": "08:00",
            "description": "Non quae aspernatur sed praesentium reprehenderit repellendus voluptas dolor.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.964355187826342",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 5,
            "name": "Jefferey Huel Jr.",
            "tel": "1-578-102-0795 x017",
            "address": "98996 Lourdes Village",
            "opening_hours": "08:00",
            "description": "Nostrum natus maxime nam voluptatibus molestias dignissimos dicta. Illum quod est dolor impedit. Ut id esse. Exercitationem itaque aut fugiat odio nisi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.36264058352621",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 6,
            "name": "Hazel Schmitt",
            "tel": "1-845-834-6849",
            "address": "86523 McLaughlin Unions",
            "opening_hours": "08:00",
            "description": "qui assumenda molestias",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.747587250004855",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 7,
            "name": "Jovan Kub Jr.",
            "tel": "364-501-7890 x753",
            "address": "3569 Bell Streets",
            "opening_hours": "08:00",
            "description": "Sit animi officia quo quam minima. Rerum aliquid quibusdam nemo voluptatem iste culpa repellat. Esse quam quo odio sapiente nobis. Quia nam modi eligendi mollitia impedit aut veritatis dignissimos. Ipsa quo ut deserunt eligendi vitae ea cupiditate commodi ut. Explicabo qui quos qui quam quia rerum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.0597294905234",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 8,
            "name": "Velva Ankunding",
            "tel": "481-630-5620",
            "address": "66340 Elmer Vista",
            "opening_hours": "08:00",
            "description": "libero sit sapiente",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.15429506263162",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 9,
            "name": "Eula Bednar",
            "tel": "832.278.9113",
            "address": "71920 Grady Village",
            "opening_hours": "08:00",
            "description": "totam aut eaque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.05081248826657",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        },
        {
            "id": 10,
            "name": "Olaf Welch Sr.",
            "tel": "1-506-919-0324 x7974",
            "address": "257 O'Connell Fork",
            "opening_hours": "08:00",
            "description": "expedita aut voluptatem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.06500135961764",
            "viewCounts": 0,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z"
            }
        }
    ],
    "comments": [
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
            },
            "Restaurant": {
                "id": 1,
                "name": "Davion Stamm",
                "tel": "1-234-637-3337",
                "address": "6245 Joannie Summit",
                "opening_hours": "08:00",
                "description": "laudantium",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.79875395670301",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 2,
            "text": "Aut provident sed iste totam.",
            "UserId": 1,
            "RestaurantId": 2,
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
            },
            "Restaurant": {
                "id": 2,
                "name": "Hilbert Sanford",
                "tel": "352.762.0824 x46507",
                "address": "071 Otho Hill",
                "opening_hours": "08:00",
                "description": "commodi assumenda adipisci",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.13807102607181765",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 3,
            "text": "Est atque porro.",
            "UserId": 2,
            "RestaurantId": 3,
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
            },
            "Restaurant": {
                "id": 3,
                "name": "Carolyn Rowe",
                "tel": "(932) 122-3150",
                "address": "194 Omer Manors",
                "opening_hours": "08:00",
                "description": "sit",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.077803882773374",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 4,
            "text": "Ea velit a accusantium voluptatem voluptates dolor et eos.",
            "UserId": 1,
            "RestaurantId": 4,
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
            },
            "Restaurant": {
                "id": 4,
                "name": "Sylvester Goyette",
                "tel": "1-535-756-8286 x09588",
                "address": "12862 Kassulke Branch",
                "opening_hours": "08:00",
                "description": "Non quae aspernatur sed praesentium reprehenderit repellendus voluptas dolor.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.964355187826342",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 5,
            "text": "Voluptate ipsum ut esse quaerat minus aut.",
            "UserId": 2,
            "RestaurantId": 5,
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
            },
            "Restaurant": {
                "id": 5,
                "name": "Jefferey Huel Jr.",
                "tel": "1-578-102-0795 x017",
                "address": "98996 Lourdes Village",
                "opening_hours": "08:00",
                "description": "Nostrum natus maxime nam voluptatibus molestias dignissimos dicta. Illum quod est dolor impedit. Ut id esse. Exercitationem itaque aut fugiat odio nisi.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.36264058352621",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 6,
            "text": "Culpa quidem libero aliquam ab velit sunt.",
            "UserId": 2,
            "RestaurantId": 6,
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
            },
            "Restaurant": {
                "id": 6,
                "name": "Hazel Schmitt",
                "tel": "1-845-834-6849",
                "address": "86523 McLaughlin Unions",
                "opening_hours": "08:00",
                "description": "qui assumenda molestias",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.747587250004855",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 7,
            "text": "Odit dolores vitae quo odit est esse atque delectus voluptatem.",
            "UserId": 1,
            "RestaurantId": 7,
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
            },
            "Restaurant": {
                "id": 7,
                "name": "Jovan Kub Jr.",
                "tel": "364-501-7890 x753",
                "address": "3569 Bell Streets",
                "opening_hours": "08:00",
                "description": "Sit animi officia quo quam minima. Rerum aliquid quibusdam nemo voluptatem iste culpa repellat. Esse quam quo odio sapiente nobis. Quia nam modi eligendi mollitia impedit aut veritatis dignissimos. Ipsa quo ut deserunt eligendi vitae ea cupiditate commodi ut. Explicabo qui quos qui quam quia rerum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.0597294905234",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 8,
            "text": "Cupiditate nihil rerum dolores.",
            "UserId": 2,
            "RestaurantId": 8,
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
            },
            "Restaurant": {
                "id": 8,
                "name": "Velva Ankunding",
                "tel": "481-630-5620",
                "address": "66340 Elmer Vista",
                "opening_hours": "08:00",
                "description": "libero sit sapiente",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.15429506263162",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 9,
            "text": "Ex ea temporibus quae sint impedit praesentium aliquam vel vel.",
            "UserId": 1,
            "RestaurantId": 9,
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
            },
            "Restaurant": {
                "id": 9,
                "name": "Eula Bednar",
                "tel": "832.278.9113",
                "address": "71920 Grady Village",
                "opening_hours": "08:00",
                "description": "totam aut eaque",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.05081248826657",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 10,
            "text": "Vel qui praesentium dolorum sint.",
            "UserId": 3,
            "RestaurantId": 10,
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
            },
            "Restaurant": {
                "id": 10,
                "name": "Olaf Welch Sr.",
                "tel": "1-506-919-0324 x7974",
                "address": "257 O'Connell Fork",
                "opening_hours": "08:00",
                "description": "expedita aut voluptatem",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.06500135961764",
                "viewCounts": 0,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "CategoryId": 3
            }
        }
    ]
  }

export default {
  name: 'RestaurantFeeds',
  components : {
    NavTab,
    NewestRestaurants,
    NewestComment
  },
  data() {
    return {
      restaurants:[],
      comments:[]
    }
  },
  methods: {
    fetchData() {
      const  {restaurants, comments} = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter(comment => comment.Restaurant && comment.text)  
      // 已移除的餐廳或是沒有評論的資料在回傳資料中會是null，因此這步驟先過濾排除掉
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

