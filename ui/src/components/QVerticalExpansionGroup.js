// import { QBadge, QResizeObserver } from 'quasar'
import { slot } from 'quasar/src/utils/slot.js'

export default {
  name: 'QVerticalExpansionGroup',

  provide () {
    return {
      parent: this
    }
  },

  props: {
    value: [Number, String, Array],
    multiple: Boolean,

    activeColor: String,
    activeBgColor: String,
    inactiveColor: String,
    inactiveBgColor: String,

    dense: Boolean,
    flat: Boolean
  },

  data () {
    return {
      panels: [],
      tabs: {
        current: this.value,
        activeColor: this.activeColor,
        activeBgColor: this.activeBgColor,
        inactiveColor: this.inactiveColor,
        inactiveBgColor: this.inactiveBgColor,
        multiple: this.multiple
      }
    }
  },

  watch: {
    value (name) {
      this.__activateTab(name, true)
    },

    activeColor (v) {
      this.tabs.activeColor = v
    },

    activeBgColor (v) {
      this.tabs.activeBgColor = v
    },

    multiple (v) {
      this.tabs.multiple = v
    }
  },

  methods: {
    openTab (name) {
      this.__activateTab(name, false)
    },

    closeTab (name) {
      this.__deactivateTab(name, false)
    },

    __getTab (name) {
      return this.panels.find(panel => panel.name === name)
    },

    __openTab (name) {
      const tab = this.__getTab(name)
      if (tab !== void 0) {
        tab.__open()
      }
    },

    __closeTab (name) {
      const tab = this.__getTab(name)
      if (tab !== void 0) {
        tab.__close()
      }
    },

    __activateTab (name, skipEmit) {
      if (this.multiple === true) {
        if (Array.isArray(this.tabs.current) !== true) {
          this.tabs.current = []
        }
        if (this.tabs.current.includes(name)) {
          // already accounted for
          return
        }
        this.tabs.current.push(name)
      } else if (this.tabs.current !== name) {
        this.tabs.current = name
        this.__closeAllExcept(name)
      }
      this.__openTab(name)
      skipEmit !== true && this.$emit('input', name)
      skipEmit !== true && this.$emit('open', name)
  },

    __deactivateTab (name, skipEmit) {
      if (this.multiple === true) {
        const ind = this.tabs.current.indexOf(name)
        if (ind === -1) {
          // already accounted for
          return
        }
        this.tabs.current.splice(ind, 1)
      } else {
        if (this.tabs.current === name) {
          this.tabs.current = ''
        }
      }
      this.__closeTab(name)
      skipEmit !== true && this.$emit('close', name)
    },

    __closeAllExcept (name) {
      this.panels.forEach(panel => {
        if (panel.name !== name) {
          panel.__close()
        }
      })
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'q-pa-md row items-start q-gutter-md no-wrap'
    }, slot(this, 'default'))
  }
}
