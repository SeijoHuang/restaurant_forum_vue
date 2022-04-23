<template>
  <div class="container py-5">
    <NavTab />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills
      :categories="categories"
    />
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key ="restaurant.id"
        :initial-restaurant="restaurant"
      />
      <!-- 餐廳卡片 RestaurantCard-->
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination 
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :current-page="currentPage"
      :category-id="categoryId"
      />
  </div>
</template>

<script>
import NavTab from './../components/NavTab.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantPagination from './../components/RestaurantPagination.vue'

const DummyData = {
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Sylvester Goyette",
            "tel": "1-535-756-8286 x09588",
            "address": "12862 Kassulke Branch",
            "opening_hours": "08:00",
            "description": "Non quae aspernatur sed praesentium reprehenderit ",
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Jefferey Huel Jr.",
            "tel": "1-578-102-0795 x017",
            "address": "98996 Lourdes Village",
            "opening_hours": "08:00",
            "description": "Nostrum natus maxime nam voluptatibus molestias di",
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Jovan Kub Jr.",
            "tel": "364-501-7890 x753",
            "address": "3569 Bell Streets",
            "opening_hours": "08:00",
            "description": "Sit animi officia quo quam minima. Rerum aliquid q",
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
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
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default { 
  components : {
    NavTab,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: '',
      page: -1,
      totalPage: [],
      currentPage: 1,
      previousPage: -1,
      nextPage:-1
    }
  },
  methods: {
    fetchRestaurants() {
      const {restaurants, categories, categoryId, page, totalPage, prev, next} = DummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.page = page
      this.totalPage = totalPage
      this.previousPage = prev,
      this.nextPage = next

    }
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>