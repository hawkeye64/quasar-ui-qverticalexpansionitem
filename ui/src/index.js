import { version } from '../package.json'

import QVerticalExpansionGroup from './components/QVerticalExpansionGroup'
import QVerticalExpansionItem from './components/QVerticalExpansionItem'


export {
  version,
  QVerticalExpansionGroup,
  QVerticalExpansionItem
}

export default {
  version,
  QVerticalExpansionGroup,

  install (Vue) {
    Vue.component(QVerticalExpansionGroup.name, QVerticalExpansionGroup)
    Vue.component(QVerticalExpansionItem.name, QVerticalExpansionItem)

  }
}
