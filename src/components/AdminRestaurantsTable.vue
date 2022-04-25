<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{
              name: 'admin-restaurant',
              params: {id: restaurant.id}
            }"
            class="btn btn-link"
          >Show
          </router-link>

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: {id: restaurant.id}
            }"
            class="btn btn-link"
          >
          Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent=" deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
          "viewCounts": 1,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-22T07:26:39.000Z",
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
      },
      {
          "id": 11,
          "name": "Cali Toy",
          "tel": "(449) 613-2643 x301",
          "address": "6647 Prosacco Orchard",
          "opening_hours": "08:00",
          "description": "non rerum odio",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.47261690189501",
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
          "id": 12,
          "name": "Mr. Dorris Wilkinson",
          "tel": "1-853-940-2178 x212",
          "address": "91037 Janis Expressway",
          "opening_hours": "08:00",
          "description": "Ducimus et sapiente qui est.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.05468386192395",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 13,
          "name": "Emmy Dare",
          "tel": "109-846-6678 x427",
          "address": "240 Steve Freeway",
          "opening_hours": "08:00",
          "description": "perferendis ut et",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.51405238687662",
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
          "id": 14,
          "name": "Nelda Quitzon",
          "tel": "178.165.7067",
          "address": "0486 Gibson Parkways",
          "opening_hours": "08:00",
          "description": "voluptate",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.0228630937962",
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
          "id": 15,
          "name": "Marta Prosacco",
          "tel": "(732) 266-6081",
          "address": "716 Arnoldo Common",
          "opening_hours": "08:00",
          "description": "Eveniet est blanditiis ut aut fuga. Asperiores maxime qui esse. Molestiae voluptate aut maxime et ut nulla nostrum ea voluptas.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.07672464358438",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 16,
          "name": "Faustino Wilderman",
          "tel": "833.966.6716 x9335",
          "address": "3533 Miracle Roads",
          "opening_hours": "08:00",
          "description": "Et sit nemo et.\nIllum inventore minus.\nNatus laborum eos natus ipsum omnis enim occaecati nihil dolor.\nId laudantium ut.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.23888756866118",
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
          "id": 17,
          "name": "Callie Blick",
          "tel": "569-579-9169 x0499",
          "address": "81871 Hermina Ridge",
          "opening_hours": "08:00",
          "description": "Tempore ducimus quod aut. Ea nisi vero consequatur qui magni eos necessitatibus aut necessitatibus. Voluptatem commodi sunt. Quod assumenda voluptas et. Ipsa ipsum consequatur vel aut quia eos corrupti minus ea.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.50418874490643",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 18,
          "name": "Myriam Murphy",
          "tel": "1-727-748-1018 x9530",
          "address": "937 Armstrong Islands",
          "opening_hours": "08:00",
          "description": "In ab placeat reprehenderit quis iure. Qui velit doloremque fugiat assumenda doloremque excepturi iure. Possimus atque rerum. Itaque deleniti inventore et voluptates laborum nostrum sint molestias.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.89157051724538",
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
          "id": 19,
          "name": "Margarett Goyette",
          "tel": "1-998-860-4180 x92647",
          "address": "96201 Walter Lodge",
          "opening_hours": "08:00",
          "description": "quia",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.29142873504755",
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
          "id": 20,
          "name": "Winfield Hane",
          "tel": "220-543-8972",
          "address": "429 Fred Shore",
          "opening_hours": "08:00",
          "description": "Debitis animi omnis. Alias commodi cupiditate aut saepe est quia animi voluptas. Quia in aut perferendis aut id et natus est commodi. Ut consequuntur voluptatem. Neque perferendis nesciunt.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.51128872496758",
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
          "id": 21,
          "name": "Geovany Kassulke",
          "tel": "(793) 869-4032",
          "address": "9558 Casper Forge",
          "opening_hours": "08:00",
          "description": "perferendis quidem facilis",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.8940132229654507",
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
          "id": 22,
          "name": "Nick Cruickshank",
          "tel": "(234) 935-0220 x4151",
          "address": "47909 Swaniawski Station",
          "opening_hours": "08:00",
          "description": "Qui qui aut laboriosam tempora qui exercitationem.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.10121426260272",
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
          "id": 23,
          "name": "Kory Powlowski",
          "tel": "1-789-787-9988 x827",
          "address": "1344 Prohaska Expressway",
          "opening_hours": "08:00",
          "description": "Voluptates in molestiae consectetur dolores provident ducimus. Corporis qui facere consectetur quasi alias ducimus velit. Qui ipsa error harum consequatur doloribus et consequatur dolores repellendus. Quia ipsam odit dolor iure molestias optio atque pariatur sed. Et ullam at molestias est eum odit odio. Nihil aut beatae aut quia perferendis.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.42187249220792",
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
          "id": 24,
          "name": "Delilah Heller",
          "tel": "1-206-035-6909 x9210",
          "address": "62808 Sherwood Station",
          "opening_hours": "08:00",
          "description": "dicta",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.35187120623122",
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
          "id": 25,
          "name": "Paxton Dietrich V",
          "tel": "(778) 613-1595",
          "address": "4703 Leonel Curve",
          "opening_hours": "08:00",
          "description": "Itaque enim vel corrupti quis placeat est nostrum. Placeat sit maxime ut non fugit officia dolores vel vel. Non tenetur nostrum et natus ratione perspiciatis. Non nihil modi quia qui fugit ipsa voluptas voluptates est. Doloremque tempora molestiae labore aut quidem architecto recusandae. Similique nulla omnis praesentium dolorem nemo ipsa quia qui.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.209859588946526",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 26,
          "name": "Rita Bergstrom",
          "tel": "1-833-303-1846",
          "address": "760 Friesen Shores",
          "opening_hours": "08:00",
          "description": "Non ex non voluptatibus expedita hic ipsa maiores in placeat.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.68125758735567",
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
          "id": 27,
          "name": "Miss Verda Greenholt",
          "tel": "1-992-748-4106 x1996",
          "address": "1117 Emmy Point",
          "opening_hours": "08:00",
          "description": "Omnis esse ut eum quaerat. Architecto voluptatem aut est. Rerum quo voluptas quia et molestiae voluptas hic sit nobis. Sequi praesentium voluptate corrupti dolore doloribus illum. Reiciendis cumque eaque velit suscipit totam qui pariatur maxime qui. Quos occaecati possimus sit quae.\n \rQuia cumque odit. Earum minus eveniet sequi non eos dicta dolorum expedita. Eaque sit sit.\n \rDeleniti maxime aspernatur esse distinctio qui cupiditate accusamus dignissimos. Non sed ut. Doloribus similique non inventore.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.64243807278544",
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
          "id": 28,
          "name": "Helena Nikolaus",
          "tel": "1-076-114-3031 x149",
          "address": "77756 Paucek Fields",
          "opening_hours": "08:00",
          "description": "autem illum est",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.86460735392447",
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
          "id": 29,
          "name": "Thomas Rolfson",
          "tel": "(836) 431-9135",
          "address": "97092 Hunter Lake",
          "opening_hours": "08:00",
          "description": "Et quia ut nihil eos aperiam vitae pariatur ipsum consequuntur.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.47638840379553",
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
          "id": 30,
          "name": "Lily Schiller",
          "tel": "1-836-505-9415 x9343",
          "address": "0544 Jerde Pike",
          "opening_hours": "08:00",
          "description": "Et molestiae est quis explicabo fuga. Non sapiente impedit eius facilis tenetur consequatur. Quis voluptatem odio. Autem non asperiores ducimus beatae nisi suscipit quo.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.085074284108984",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 31,
          "name": "Hardy Stiedemann",
          "tel": "791-801-0766 x379",
          "address": "1028 Kameron Causeway",
          "opening_hours": "08:00",
          "description": "Laborum porro sed officia. Soluta odio non aperiam nihil animi. Officia voluptatem corrupti. Rerum dolor accusamus expedita quis. Dignissimos et nihil vel ut est molestias ipsum id tempora. Ut odio sed quia ea pariatur rerum.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.65095655087693",
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
          "id": 32,
          "name": "Rogers Rohan",
          "tel": "206.106.4590 x5253",
          "address": "021 Francis Shoals",
          "opening_hours": "08:00",
          "description": "Facilis quia et dolor et dolorem temporibus deserunt minima.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.52312190538886",
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
          "id": 33,
          "name": "Johnpaul Wyman",
          "tel": "203.720.0534",
          "address": "84293 Naomie Row",
          "opening_hours": "08:00",
          "description": "Velit omnis ipsam eos est doloribus doloremque quia. Illo mollitia neque voluptatem aut. Odit animi quam vero recusandae illum dolores aut esse doloribus. Adipisci nostrum sit quo itaque sunt repellendus. Veritatis impedit nostrum earum et explicabo aliquid. Perspiciatis odit deserunt nihil est ut voluptatem.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.902396034105713",
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
          "id": 34,
          "name": "Karina Rutherford",
          "tel": "760-841-7155 x325",
          "address": "8318 Flatley Hill",
          "opening_hours": "08:00",
          "description": "voluptas",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.8011304066484",
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
          "id": 35,
          "name": "Mckayla Bauch",
          "tel": "147.863.7332 x2624",
          "address": "951 Jenkins Gardens",
          "opening_hours": "08:00",
          "description": "Repellat mollitia iusto quidem sit quos.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.20534485177451",
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
          "id": 36,
          "name": "Alexandra Predovic",
          "tel": "406-247-6711",
          "address": "12192 Dibbert Drives",
          "opening_hours": "08:00",
          "description": "Repudiandae omnis deleniti dolor quibusdam repellat rem porro. Et repudiandae deserunt libero autem. Perspiciatis sint eaque omnis est amet. Ducimus alias sit maiores laboriosam esse eum sit quidem deserunt. Et distinctio consequuntur quisquam. Nobis quod iste.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.1779329046675002",
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
          "id": 37,
          "name": "Sienna Pfannerstill",
          "tel": "094-249-6791",
          "address": "478 Runte Fall",
          "opening_hours": "08:00",
          "description": "Quia officiis in. Vitae tenetur qui aut neque quod debitis ipsam. Dolore sunt a. Qui non modi velit laborum debitis voluptas nihil sit.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.58821712779009",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 38,
          "name": "Quentin Maggio",
          "tel": "(867) 509-7479",
          "address": "3636 Ben Brooks",
          "opening_hours": "08:00",
          "description": "Saepe repellendus fugiat excepturi dicta aut ea modi. Dolores nulla inventore maiores perferendis quibusdam. Architecto cumque eaque voluptatem voluptates commodi. Dolores numquam occaecati in. Repudiandae unde ut veniam at sunt. Minus laudantium et qui quas provident est.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.74399656340013",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 39,
          "name": "Aida Dach",
          "tel": "800-905-6003",
          "address": "5689 Abernathy Field",
          "opening_hours": "08:00",
          "description": "Cumque distinctio dignissimos ipsum ut incidunt quibusdam. Sed aut corrupti et eum deleniti nostrum error et. Optio saepe commodi id inventore illum blanditiis dolores.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.96506212747572",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 40,
          "name": "Faye Simonis",
          "tel": "(737) 415-4941 x0143",
          "address": "78430 Natalie Parkways",
          "opening_hours": "08:00",
          "description": "Fugiat dignissimos vero aut qui. Occaecati et culpa eaque molestias iure provident est laudantium. Eos non a molestiae eaque. Assumenda architecto similique consectetur explicabo iure unde voluptatem quia veniam. Sit quo autem architecto provident distinctio quia corrupti.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.8679404191085",
          "viewCounts": 0,
          "createdAt": "2022-04-20T13:43:42.000Z",
          "updatedAt": "2022-04-20T13:43:42.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
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
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 42,
          "name": "Obie Hickle",
          "tel": "(762) 655-1906",
          "address": "3404 Rolfson Way",
          "opening_hours": "08:00",
          "description": "Sint ratione doloremque quo. Maxime unde tenetur veniam unde laudantium reiciendis voluptatem. At eum reprehenderit doloribus voluptatem incidunt dolorem odit. Molestiae quo consequatur et fugiat debitis. Consequuntur ut nulla id repellat doloremque deserunt atque.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.1070826096412",
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
          "id": 43,
          "name": "Pauline Tromp",
          "tel": "407.922.1811",
          "address": "4496 Thiel Forges",
          "opening_hours": "08:00",
          "description": "Molestias quidem qui. Pariatur consequatur a tempore earum sapiente consequuntur qui dolores ut. Sed beatae voluptatum qui expedita numquam. Eum quibusdam maxime tempore laudantium dolor et iste enim dolores.\n \rLaboriosam sed voluptatem unde saepe aut veniam magni voluptatum. Voluptatibus vel culpa. Porro sit animi dolores ut magnam alias. Inventore cum vel corrupti beatae doloremque quas optio non. Tempora eligendi quaerat.\n \rVoluptatem ducimus odio et at reprehenderit qui quia. Porro laborum suscipit id. Perspiciatis eos sed.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.26169751576539",
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
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
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
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
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
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
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
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 48,
          "name": "Fleta Jast",
          "tel": "532-899-9117",
          "address": "2731 Pedro Extension",
          "opening_hours": "08:00",
          "description": "Libero corporis ratione aut voluptatem facilis omnis corporis laborum ratione. Explicabo nihil ut eius delectus.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.75567337146713",
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
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-04-20T13:43:42.000Z",
              "updatedAt": "2022-04-20T13:43:42.000Z"
          }
      },
      {
          "id": 50,
          "name": "Abigale Turner",
          "tel": "(168) 034-5180 x4314",
          "address": "579 Estel Island",
          "opening_hours": "08:00",
          "description": "Fugit delectus enim. Fugiat consequatur tenetur voluptas ipsam. Molestiae et quidem sint beatae assumenda veritatis. Voluptates eveniet minima dolorum velit esse doloribus dolores aut. Autem natus placeat et non dolor. Itaque reiciendis maiores assumenda hic reiciendis adipisci sunt.\n \rUt quaerat sit dolor necessitatibus aut. Placeat temporibus ex omnis eos quidem mollitia assumenda. Iste dignissimos quo excepturi et quaerat est sunt rerum. Nemo ipsa modi delectus aut quos exercitationem omnis sapiente. Aut consequuntur quod iure veniam facilis. Voluptatem placeat dolores quo qui omnis libero natus.\n \rVelit sequi qui amet quam et qui autem et nihil. Fugiat voluptatem ab et sapiente veniam. Temporibus ut rerum voluptatem accusamus nesciunt quod perferendis asperiores rerum. Omnis aut velit optio ab perspiciatis molestiae voluptate consequatur consectetur. Et ipsa quia labore autem.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.7356667248086",
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
      }
  ]
}

export default {
  data(){
    return {
      restaurants: []
    } 
  },
  methods: {
    fetchRestaurants(){
      this.restaurants = DummyData.restaurants
    },
    deleteRestaurant( restaurantId){
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  },
  created(){
    this.fetchRestaurants()
  }
   
}
</script>