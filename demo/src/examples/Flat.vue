<template>
  <div style="max-width: 800px; width: 100%;">
    <q-vertical-expansion-group
      flat
      style="height: 400px;"
    >
      <q-vertical-expansion-item
        v-for="tab in tabs"
        :key="tab.index"
        :label="'title - ' + tab.index"
        separator
        icon="calendar_today"
        expandIcon="expand_more"
        expandedIcon="expand_less"
      >
        <div class="fit q-pa-md" >{{ lorem }}</div>
      </q-vertical-expansion-item>
    </q-vertical-expansion-group>

    <p>Flat no separator</p>
    <q-vertical-expansion-group
      flat
      style="height: 400px;"
    >
      <q-vertical-expansion-item
        v-for="tab in tabs"
        :key="tab.index"
        :label="'title - ' + tab.index"
        icon="calendar_today"
        expandIcon="expand_more"
        expandedIcon="expand_less"
      >
        <div class="fit q-pa-md" >{{ lorem }}</div>
      </q-vertical-expansion-item>
    </q-vertical-expansion-group>

    <p>Flat dense</p>
    <q-vertical-expansion-group
      flat
      dense
      style="height: 400px;"
    >
      <q-vertical-expansion-item
        v-for="tab in tabs"
        :key="tab.index"
        :label="'title - ' + tab.index"
        separator
        icon="calendar_today"
        expandIcon="expand_more"
        expandedIcon="expand_less"
      >
        <div class="fit q-pa-md" >{{ lorem }}</div>
      </q-vertical-expansion-item>
    </q-vertical-expansion-group>
  </div>
</template>

<script>
const model = [...Array(7).keys()].map(i => ({ index: i }))

export default {
  data () {
    return {
      tabs: model,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ex, aliquet sit amet semper a, dapibus id elit. Mauris nibh orci, lacinia at ex ut, mattis ultricies ante. In congue nunc mauris, vehicula aliquam neque pretium non. Aenean interdum a libero in vulputate. Praesent est eros, facilisis ut leo sit amet, ultricies mattis mi. Pellentesque ornare enim ut lacus eleifend, dignissim ornare nisl pharetra. Etiam commodo tortor risus, id feugiat nisi faucibus id. Nunc pellentesque tortor quis iaculis facilisis. Donec accumsan dui vitae orci faucibus, ac lacinia nunc molestie. Morbi mollis commodo ante quis condimentum.'
    }
  }
}
</script>
