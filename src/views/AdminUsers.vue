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
            <template v-if="currentUserId !== user.id">
              <button
                v-show="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleIsAmin(user.id)"
              >
                set as user
              </button>
            </template>
            <button
              v-show="!user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleIsAmin(user.id)"
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
const DummyUser = {
    "profile": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$9lld7VMc6O3ejw7RYM/fyOoko6qLHjKskCxSTNN/0b.XvURZYMDxW",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-04-20T13:43:41.000Z",
        "updatedAt": "2022-04-20T13:43:41.000Z",
        "Comments": [
            {
                "id": 2,
                "text": "Aut provident sed iste totam.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
                    "id": 2,
                    "name": "Hilbert Sanford",
                    "tel": "352.762.0824 x46507",
                    "address": "071 Otho Hill",
                    "opening_hours": "08:00",
                    "description": "commodi assumenda adipisci",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.13807102607181765",
                    "viewCounts": 1,
                    "createdAt": "2022-04-20T13:43:42.000Z",
                    "updatedAt": "2022-04-24T07:45:43.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 4,
                "text": "Ea velit a accusantium voluptatem voluptates dolor et eos.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
                "id": 7,
                "text": "Odit dolores vitae quo odit est esse atque delectus voluptatem.",
                "UserId": 1,
                "RestaurantId": 7,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
                "id": 9,
                "text": "Ex ea temporibus quae sint impedit praesentium aliquam vel vel.",
                "UserId": 1,
                "RestaurantId": 9,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
                "id": 13,
                "text": "Consequatur quia quidem ab.",
                "UserId": 1,
                "RestaurantId": 13,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 15,
                "text": "Dolorem nihil corrupti soluta et quod.",
                "UserId": 1,
                "RestaurantId": 15,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 16,
                "text": "Maxime temporibus rerum est atque a magni est.",
                "UserId": 1,
                "RestaurantId": 16,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 17,
                "text": "Sequi tempora tempora laudantium nobis voluptatum.",
                "UserId": 1,
                "RestaurantId": 17,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 27,
                "text": "Doloremque enim aliquam a et.",
                "UserId": 1,
                "RestaurantId": 27,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 32,
                "text": "Et deserunt modi repellat molestias eos ab.",
                "UserId": 1,
                "RestaurantId": 32,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 36,
                "text": "Vitae ab reprehenderit voluptates ducimus consectetur fuga autem quisquam.",
                "UserId": 1,
                "RestaurantId": 36,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 38,
                "text": "Laborum autem atque earum sapiente fuga ut alias.",
                "UserId": 1,
                "RestaurantId": 38,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 42,
                "text": "Distinctio tempore assumenda dolore odit quas.",
                "UserId": 1,
                "RestaurantId": 42,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 43,
                "text": "Aut eum voluptatibus fuga qui ut nulla omnis.",
                "UserId": 1,
                "RestaurantId": 43,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 44,
                "text": "Veritatis repudiandae velit in voluptates libero ut repudiandae ab.",
                "UserId": 1,
                "RestaurantId": 44,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 45,
                "text": "Non est recusandae unde earum nesciunt voluptates.",
                "UserId": 1,
                "RestaurantId": 45,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 47,
                "text": "Maxime suscipit hic magnam ut modi atque quas quidem.",
                "UserId": 1,
                "RestaurantId": 47,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 51,
                "text": "Consectetur id est et consequuntur ab amet provident.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 55,
                "text": "Eos vel commodi voluptas.",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
                "id": 58,
                "text": "Rerum illo ut voluptatem tempora.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
                "id": 60,
                "text": "Neque rem dicta tempore quaerat voluptatum iste qui.",
                "UserId": 1,
                "RestaurantId": 10,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
            },
            {
                "id": 63,
                "text": "Aperiam molestias earum placeat ipsa reprehenderit tempore eum.",
                "UserId": 1,
                "RestaurantId": 13,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 64,
                "text": "Reiciendis in vero.",
                "UserId": 1,
                "RestaurantId": 14,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 65,
                "text": "Itaque omnis vel quo voluptates minima quia adipisci voluptas.",
                "UserId": 1,
                "RestaurantId": 15,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 68,
                "text": "Amet maiores nobis deleniti iure hic.",
                "UserId": 1,
                "RestaurantId": 18,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 71,
                "text": "Aspernatur est qui ducimus doloremque qui.",
                "UserId": 1,
                "RestaurantId": 21,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 72,
                "text": "Cum ducimus quia maiores quas illo corrupti.",
                "UserId": 1,
                "RestaurantId": 22,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 76,
                "text": "Et quibusdam itaque.",
                "UserId": 1,
                "RestaurantId": 26,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 79,
                "text": "Pariatur modi aspernatur omnis fugiat dolorem aut aut voluptate.",
                "UserId": 1,
                "RestaurantId": 29,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 80,
                "text": "Et illum quam praesentium quas non corporis corrupti unde ullam.",
                "UserId": 1,
                "RestaurantId": 30,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 89,
                "text": "Consequatur est adipisci accusantium eum voluptatibus.",
                "UserId": 1,
                "RestaurantId": 39,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 90,
                "text": "Quae minus dolore placeat et sed saepe reprehenderit.",
                "UserId": 1,
                "RestaurantId": 40,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 91,
                "text": "Ea excepturi quo pariatur repudiandae et nesciunt qui aut consequuntur.",
                "UserId": 1,
                "RestaurantId": 41,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 93,
                "text": "Totam cumque id ratione sunt assumenda incidunt maxime sunt qui.",
                "UserId": 1,
                "RestaurantId": 43,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 96,
                "text": "Et eligendi minima ipsam id voluptatem odit porro perspiciatis.",
                "UserId": 1,
                "RestaurantId": 46,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 108,
                "text": "Esse nesciunt ut natus et aut numquam id.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
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
                "id": 112,
                "text": "Ipsam illo aut at et cupiditate consequatur.",
                "UserId": 1,
                "RestaurantId": 12,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 113,
                "text": "Quas excepturi sed.",
                "UserId": 1,
                "RestaurantId": 13,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 114,
                "text": "Odit aut minima repudiandae quos animi alias est.",
                "UserId": 1,
                "RestaurantId": 14,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 119,
                "text": "Enim maxime nesciunt sed.",
                "UserId": 1,
                "RestaurantId": 19,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 120,
                "text": "Ea et id quis voluptas dolorum in sit est.",
                "UserId": 1,
                "RestaurantId": 20,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 126,
                "text": "Quisquam id ut.",
                "UserId": 1,
                "RestaurantId": 26,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 127,
                "text": "Optio qui aspernatur velit.",
                "UserId": 1,
                "RestaurantId": 27,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 138,
                "text": "Ea iusto iste voluptas omnis est aut.",
                "UserId": 1,
                "RestaurantId": 38,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 142,
                "text": "Sint natus consequuntur aut delectus odit perspiciatis enim minima.",
                "UserId": 1,
                "RestaurantId": 42,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 143,
                "text": "Quis veniam et ipsum numquam et quam vel.",
                "UserId": 1,
                "RestaurantId": 43,
                "createdAt": "2022-04-20T13:43:42.000Z",
                "updatedAt": "2022-04-20T13:43:42.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            }
        ],
        "FavoritedRestaurants": [],
        "Followers": [],
        "Followings": []
    },
    "isFollowed": false
}
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$9lld7VMc6O3ejw7RYM/fyOoko6qLHjKskCxSTNN/0b.XvURZYMDxW",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-04-20T13:43:41.000Z",
            "updatedAt": "2022-04-20T13:43:41.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$yN9JXedUr/Nhw7hnWSMWmeQfa3oSA9XIcg9URoYP.hKiMlxwn01FG",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$8l3gfhD2zHyMgAxFMJlI6uMO6rPD5ug4chgehEP7hYB2hrELJFIGG",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-04-20T13:43:42.000Z",
            "updatedAt": "2022-04-20T13:43:42.000Z"
        }
    ]
}
export default {
  components:{
    AdminNav
  },
  data() {
    return{
      users: [],
      currentUserId: -1
    }
  },
  methods: {
    fetchUsers() {
      const {users} = dummyData
      this.users = users
    },
    fetchCurrentUser() {
      const {profile} = DummyUser
      const {id: currentUserId} = profile
      this.currentUserId = currentUserId    
    },
    toggleIsAmin(userId){
      console.log(userId)
      this.users = this.users.map(user => {
        if(user.id === userId){
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  },
  created() {
    this.fetchUsers()
    this.fetchCurrentUser()
  }
  
}
</script>