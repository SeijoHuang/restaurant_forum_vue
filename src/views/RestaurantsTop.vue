<template>
  <div class="container py-5">
    <NavTab />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >  
      <RestaurantsTopCard 
        v-for=" restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurants-top="restaurant"
        @after-remove-favorite="afterRemoveFavorite"
        @after-add-favorite="afterAddFavorite"
      />
      
    </div>
  </div>
</template>

<script>
import NavTab from './../components/NavTab.vue'
import RestaurantsTopCard from './../components/RestaurantsTopCard.vue'

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
const DummyData = {
  "restaurants": [
      {
          "id": 50,
          "name": "Abigale Turner",
          "tel": "(168) 034-5180 x4314",
          "address": "579 Estel Island",
          "opening_hours": "08:00",
          "description": "Fugit delectus enim. Fugiat consequatur tenetur vo",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.7356667248086",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 49,
          "name": "Aurore Huels",
          "tel": "175-043-3265 x52089",
          "address": "784 Ondricka Valley",
          "opening_hours": "08:00",
          "description": "Iste consequuntur voluptas.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.56877092410605",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 48,
          "name": "Fleta Jast",
          "tel": "532-899-9117",
          "address": "2731 Pedro Extension",
          "opening_hours": "08:00",
          "description": "Libero corporis ratione aut voluptatem facilis omn",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.75567337146713",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 47,
          "name": "Viva Eichmann",
          "tel": "1-866-736-7418 x08609",
          "address": "704 Kiehn Mountains",
          "opening_hours": "08:00",
          "description": "Similique eligendi rerum.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.25913002374038",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 46,
          "name": "Brannon VonRueden",
          "tel": "385.347.2220 x90067",
          "address": "555 Flatley Union",
          "opening_hours": "08:00",
          "description": "Delectus dolorum commodi.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.70240339079885",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 2,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 45,
          "name": "Damien Eichmann",
          "tel": "1-958-413-2426 x83286",
          "address": "19030 Abdiel Road",
          "opening_hours": "08:00",
          "description": "dolores",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.813501529374378",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 44,
          "name": "Talia Kautzer",
          "tel": "(078) 019-1156 x964",
          "address": "10679 Allan Common",
          "opening_hours": "08:00",
          "description": "Molestias numquam velit veritatis pariatur.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.77652755052982",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 43,
          "name": "Pauline Tromp",
          "tel": "407.922.1811",
          "address": "4496 Thiel Forges",
          "opening_hours": "08:00",
          "description": "Molestias quidem qui. Pariatur consequatur a tempo",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.26169751576539",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 42,
          "name": "Obie Hickle",
          "tel": "(762) 655-1906",
          "address": "3404 Rolfson Way",
          "opening_hours": "08:00",
          "description": "Sint ratione doloremque quo. Maxime unde tenetur v",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.1070826096412",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 41,
          "name": "Miss Annamae Reichel",
          "tel": "373.720.5254 x0195",
          "address": "4573 Lubowitz Branch",
          "opening_hours": "08:00",
          "description": "Ut accusantium minima neque.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.50776745290933",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      }
  ]
}
export default {
  name: "RestaurantTop",
  components : {
    NavTab,
    RestaurantsTopCard,
  },
  data() {
    return {
      restaurants: [],
      currentUser: DummyUser.currentUser
    }
  },
  methods: {
    fetchRestaurants(){
      const {restaurants} = DummyData
      this.restaurants = restaurants
    },
    afterRemoveFavorite(restaurantId){
      this.restaurants =  this.restaurants.map(restaurant => {
        if(restaurant.id === restaurantId) {
          const currentUserIndex = restaurant.FavoritedUsers.indexOf(this.currentUser.id)
          restaurant.FavoritedUsers.splice(currentUserIndex, 1)
          restaurant.isFavorited = false
        }    
        return restaurant
      })
      
    },
    afterAddFavorite(restaurantId){
      this.restaurants = this.restaurants.map(restaurant => {
        if(restaurant.id === restaurantId) {
          console.log(this.currentUser.id)
          restaurant.FavoritedUsers.push(this.currentUser.id)
          restaurant.isFavorited = true         
        }
        return restaurant       
      })
      console.log(this.restaurants)
      
    }
  },
  created(){
    this.fetchRestaurants()
  }
}
</script>