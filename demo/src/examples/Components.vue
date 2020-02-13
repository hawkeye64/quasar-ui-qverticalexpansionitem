<template>
  <div style="max-width: 800px; width: 100%;">
    <q-vertical-expansion-group style="height: 400px;">
      <q-vertical-expansion-item
        v-for="tab in tabs"
        :key="tab.index"
        :label="'title - ' + tab.index"
        separator
        icon="calendar_today"
        expandIcon="expand_more"
        expandedIcon="expand_less"
      >
        <template v-if="tab.index === 0">
          <q-table
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
          />
        </template>

        <template v-if="tab.index === 1">
          <q-list padding bordered class="rounded-borders">
            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="perm_identity"
              label="Account settings"
            >
              <q-card>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="signal_wifi_off"
              label="Wifi settings"
            >
              <q-card>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="drafts"
              label="Drafts"
              header-class="text-purple"
            >
              <q-card>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </template>

        <template v-if="tab.index === 2">
          <q-card>
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
              <q-btn
                fab
                color="primary"
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Cafe Basilico
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="place" />
                  250 ft
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">
                $・Italian, Cafe
              </div>
              <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary">
                Reserve
              </q-btn>
            </q-card-actions>
          </q-card>
        </template>

        <template v-if="tab.index === 3">
          <q-card style="height: 100%;">
            <q-tabs
              v-model="tab2"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
            >
              <q-tab name="mails" label="Mails" />
              <q-tab name="alarms" label="Alarms" />
              <q-tab name="movies" label="Movies" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab2" animated>
              <q-tab-panel name="mails" class="q-pa-none">

                <q-splitter
                  v-model="splitterModel"
                  style="height: 250px"
                >

                  <template v-slot:before>
                    <q-tabs
                      v-model="innerTab"
                      vertical
                      class="text-teal"
                    >
                      <q-tab name="innerMails" icon="mail" label="Mails" />
                      <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
                      <q-tab name="innerMovies" icon="movie" label="Movies" />
                    </q-tabs>
                  </template>

                  <template v-slot:after>
                    <q-tab-panels
                      v-model="innerTab"
                      animated
                      transition-prev="slide-down"
                      transition-next="slide-up"
                    >
                      <q-tab-panel name="innerMails">
                        <div class="text-h4 q-mb-md">Mails</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      </q-tab-panel>

                      <q-tab-panel name="innerAlarms">
                        <div class="text-h4 q-mb-md">Alarms</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      </q-tab-panel>

                      <q-tab-panel name="innerMovies">
                        <div class="text-h4 q-mb-md">Movies</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      </q-tab-panel>
                    </q-tab-panels>
                  </template>

                </q-splitter>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </template>
      </q-vertical-expansion-item>
    </q-vertical-expansion-group>
  </div>
</template>

<script>
const model = [...Array(4).keys()].map(i => ({ index: i }))

export default {
  data () {
    return {
      tabs: model,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ex, aliquet sit amet semper a, dapibus id elit. Mauris nibh orci, lacinia at ex ut, mattis ultricies ante. In congue nunc mauris, vehicula aliquam neque pretium non. Aenean interdum a libero in vulputate. Praesent est eros, facilisis ut leo sit amet, ultricies mattis mi. Pellentesque ornare enim ut lacus eleifend, dignissim ornare nisl pharetra. Etiam commodo tortor risus, id feugiat nisi faucibus id. Nunc pellentesque tortor quis iaculis facilisis. Donec accumsan dui vitae orci faucibus, ac lacinia nunc molestie. Morbi mollis commodo ante quis condimentum.',
      stars: 3,
      tab2: 'mails',
      innerTab: 'innerMails',
      splitterModel: 30,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  }
}
</script>
