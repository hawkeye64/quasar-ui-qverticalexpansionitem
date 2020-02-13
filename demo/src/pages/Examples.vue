<template>
  <hero>
    <div class="q-markdown">
      <q-markdown>
Two components are used to make the following examples: `QVerticalExpansionGroup` and `QVerticalExpansionItem`. The QVerticalExpansionGroup must always be a parent to QVerticalExpansionItem, but you can have many child QVerticalExpansionItem's that you want.

By default, clicking the titlebar expands/contracts the QVerticalExpansionItem. Also, by default, you can only have one vertical expansion tab panel open at a time. However, you can change these defaults with properties, as explained below.
      </q-markdown>
      <example-title title="QVerticalExpansionItem" />
      <example-viewer title="Basic" file="Basic" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Separator" file="Separator" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Icons" file="Icons" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths">
        <q-markdown>
You can use the `expand-icon` and `expanded-icon` properties to define different icons when the tab panel expended/collapsed.
::: warning
Not all icon sets work with rotation in the collapsed state, so make sure you use ones that work.
:::
        </q-markdown>
      </example-viewer>
      <example-viewer title="Click Icon" file="ClickIcon" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths">
        <q-markdown>
The `click-icon` property only allows the `expand-icon` and `expanded-icon` to be clicked in order to exapnd/collapse the tab panel.
        </q-markdown>
      </example-viewer>
      <example-viewer title="Label" file="Label" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Dense" file="Dense" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Multiple" file="Multiple" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths">
        <q-markdown>
Using the `multiple` property on `QVerticalExpansionGroup` allows you to have multiple tab panels opened at the same time.
        </q-markdown>
      </example-viewer>
      <example-viewer title="Flat" file="Flat" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Disable" file="Disable" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Color" file="Color" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import { slugify } from 'assets/page-utils'
import { version } from 'ui'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle
  },

  data () {
    return {
      tempToc: [],
      locationUrl: 'https://github.com/hawkeye64/quasar-ui-qverticalexpansionitem/tree/dev/demo/src/examples/',
      jsPaths: [
        `https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem@${version}/dist/index.umd.min.js`
      ],
      cssPaths: [
        `https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem@${version}/dist/index.min.css`
      ]
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('QVerticalExpansionItem')
    this.addToToc('Basic', 2)
    this.addToToc('Separator', 2)
    this.addToToc('Icons', 2)
    this.addToToc('Click Icon', 2)
    this.addToToc('Label', 2)
    this.addToToc('Dense', 2)
    this.addToToc('Multiple', 2)
    this.addToToc('Flat', 2)
    this.addToToc('Disable', 2)
    this.addToToc('Color', 2)

    this.toc = this.tempToc
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
    addToToc (name, level = 1) {
      let n = name
      if (level > 1) {
        n = 'example-' + n
      }
      const slug = slugify(n)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>
