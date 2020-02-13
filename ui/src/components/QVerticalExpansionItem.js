import { QCard, QSeparator, QCardSection, QIcon } from 'quasar'
import { slot } from 'quasar/src/utils/slot.js'

let uid = 0

export default {
  name: 'QVerticalExpansionItem',

  inject: {
    parent: {
      default () {
        console.error('QVerticalExpansionItem components need to be child of QVerticalExpansionGroup')
      }
    }
  },

  props: {
    value: Boolean,

    name: {
      type: [Number, String],
      default: () => `t_${uid++}`
    },

    label: String,
    separator: Boolean,
    icon: String,
    expandIcon: String,
    expandedIcon: String,
    iconSize: {
      type: String,
      default: 'sm',
      validator: v => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v)
    },
    clickIcon: Boolean,
    align: {
      type: String,
      default: 'left',
      validator: v => ['left', 'center', 'right'].includes(v)
    },
    disable: Boolean,
    tabindex: [String, Number]
  },

  data () {
    return {
      innerOpened: false
    }
  },

  mounted () {
    if (this.value !== void 0) {
      this.innerOpened = this.value
      if (this.innerOpened === true) {
        this.open()
      }
    }
  },

  computed: {
    computedTabIndex () {
      return this.disable === true || this.innerOpened === true ? -1 : this.tabindex || 0
    },

    openedStyle () {
      let total = this.parent.panels.length
      let opened = this.parent.panels.filter(p => p.innerOpened).length
      let closed = total - opened
      return {
        overflow: 'auto',
        height: '100%',
        width: `calc((100% - ${closed * this.innerWidthHeight}px) / ${opened})`,
        transition: 'all 250ms'
      }
    },

    closedStyle () {
      return {
        height: '100%',
        width: this.innerWidthHeight + 'px',
        transition: 'all 250ms'
      }
    },

    rotatedStyle () {
      if (this.innerOpened !== true) {
        return {
          writingMode: 'vertical-lr'
        }
      }
      return {}
    },

    visibilityStyle() {
      return {
        visibility: (this.innerOpened === true ? 'visible' : 'hidden')
      }
    },

    paddingStyle () {
      return {
        padding: (this.parent.dense ? '3px' : '8px')
      }
    },

    innerWidthHeight () {
      if (this.parent.dense === true) {
        return 43
      }
      return 53
    }
  },

  watch: {
    value (val) {
      val === true
        ? this.parent.__activateTab(this.name, false)
        : this.parent.__deactivateTab(this.name, false)
    }
  },

  methods: {
    isOpen () {
      return this.innerOpened
    },

    open () {
      if (this.disable !== true) {
        this.parent.__activateTab(this.name, false)
      }
    },

    __open () {
      if (this.disable !== true) {
        this.innerOpened = true
        this.$emit('input', this.innerOpened)
        this.$emit('open')
        return true
      }
      return false
    },

    close () {
      this.parent.__deactivateTab(this.name, false)
    },

    __close () {
      this.innerOpened = false
      this.$emit('input', this.innerOpened)
      this.$emit('close')
    },

    toggle () {
      this.innerOpened !== true
      ? this.parent.__activateTab(this.name, false)
      : this.parent.__deactivateTab(this.name, false)
    },

    __findPanel () {
      // find this panel in list of panels
      return this.parent.panels.find(panel => panel.name === this.name)
    },

    __renderTitlebar (h) {
      const iconSlot = slot(this, 'icon')
      const labelSlot = slot(this, 'label')

      const combinedStyle = Object.assign(this.rotatedStyle, this.paddingStyle)
      if (this.disable === true) {
        combinedStyle.opacity = '0.5'
      }

      const onClick = {
        click: () => { this.toggle() }
      }

      const cursor =
        this.disable === true && this.clickIcon !== true
          ? ' cursor-not-allowed'
          : this.disable !== true && this.clickIcon !== true
            ? ' cursor-pointer'
            : ''

      return h('div', {
          staticClass: 'row justify-evenly items-center'
            + cursor
            + (this.innerOpened === true ? '' : ' full-height')
            + (this.innerOpened === true && this.parent.activeColor !== void 0 ? ' text-' + this.parent.activeColor : '')
            + (this.innerOpened === true && this.parent.activeBgColor !== void 0 ? ' bg-' + this.parent.activeBgColor : '')
            + (this.innerOpened !== true && this.parent.inactiveColor !== void 0 ? ' text-' + this.parent.inactiveColor : '')
            + (this.innerOpened !== true && this.parent.inactiveBgColor !== void 0 ? ' bg-' + this.parent.inactiveBgColor : ''),
          style: combinedStyle,
          on: (this.disable !== true && this.clickIcon !== true ? onClick : {})
        }, [
          iconSlot && iconSlot(),
          iconSlot === void 0 && this.icon !== void 0 && h(QIcon, {
            staticClass: 'col-shrink',
            style: combinedStyle,
            props: {
              name: this.icon,
              size: this.iconSize
            }
          }),
          labelSlot && labelSlot(),
          labelSlot === void 0 && h('div', {
            staticClass: 'no-wrap col-grow text-subtitle1'
              + ' text-' + this.align,
            style: combinedStyle,
          }, this.label),
          this.innerOpened !== true && this.expandIcon !== void 0 && h(QIcon, {
            staticClass: 'col-shrink'
              + (this.disable === true && this.clickIcon === true ? ' cursor-not-allowed' : '' )
              + (this.disable !== true && this.clickIcon === true ? ' cursor-pointer' : '' ),
            style: combinedStyle,
            props: {
              name: this.expandIcon,
              size: this.iconSize
            },
            on: (this.disable !== true && this.clickIcon === true ? onClick : {})
          }),
          this.innerOpened === true && this.expandedIcon !== void 0 && h(QIcon, {
            staticClass: 'col-shrink'
              + (this.disable === true && this.clickIcon === true ? ' cursor-not-allowed' : '' )
              + (this.disable !== true && this.clickIcon === true ? ' cursor-pointer' : '' ),
          style: combinedStyle,
            props: {
              name: this.expandedIcon,
              size: this.iconSize
            },
            on: (this.disable !== true && this.clickIcon === true ? onClick : {})
          })
        ])
    },

    __renderBody (h) {
      return h(QCardSection, {
        style: this.visibilityStyle
      }, slot(this, 'default'))
    }
  },

  render (h) {
    const panel = this.__findPanel()
    if (panel === void 0) {
      // add this panel
      this.parent.panels.push(this)
    }

    const titlebar = slot(this, 'titlebar')

    return h(QCard, {
      staticClass: 'q-ma-none',
      style: (this.innerOpened === true ? this.openedStyle : this.closedStyle),
      props: {
        square: true,
        flat: this.parent.flat
      },
      attrs: {
        tabindex: this.computedTabIndex,
        role: 'tab',
        'aria-selected': this.innerOpened
      },
    }, [
      titlebar && titlebar({ label: this.label, opened: this.innerOpened, expand: this.expand, expanded: this.expanded }),
      titlebar === void 0 && this.__renderTitlebar(h),
      this.separator === true && h(QSeparator, {
        style: this.visibilityStyle
      }),
      this.__renderBody(h)
    ])
  }
}
