<template>
  <hero>
    <q-markdown :src="markdown" toc @data="onToc" />
    <json-api-viewer
      title="QVerticalExpansionGroup API"
      :json="json"
    />
    <json-api-viewer
      title="QVerticalExpansionItem API"
      :json="json2"
    />
    <q-markdown>
# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

---

This page created with [QMarkdown](https://quasarframework.github.io/quasar-ui-qmarkdown), another great Quasar App Extension.
    </q-markdown>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn
        fab
        icon="keyboard_arrow_up"
        :class="{ 'text-black bg-grey-4': $q.dark.isActive, 'text-white bg-primary': !$q.dark.isActive }"
      />
    </q-page-scroller>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import markdown from '../markdown/markdown.md'
import Api1 from 'quasar-ui-qverticalexpansionitem/dist/api/QVerticalExpansionGroup.json'
import Api2 from 'quasar-ui-qverticalexpansionitem/dist/api/QVerticalExpansionItem.json'

export default {
  name: 'PageIndex',

  components: {
    Hero
  },

  data () {
    return {
      markdown: markdown,
      json: Api1,
      json2: Api2
    }
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    onToc (toc) {
      // add the manual ones
      toc.push({ id: 'QVerticalExpansionGroup-API', label: 'QVerticalExpansionGroup API', level: 1, children: Array(0) })
      toc.push({ id: 'QVerticalExpansionItem-API', label: 'QVerticalExpansionItem API', level: 1, children: Array(0) })
      toc.push({ id: 'Donate', label: 'Donate', level: 1, children: Array(0) })

      this.toc = toc
    }
  }
}
</script>
