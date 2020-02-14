QVerticalExpansionItem
===

**QVerticalExpansionItem** along with **QVerticalExpansionGroup** are components for managing a group of Vertical Expansion tab panels in your Quasar application.

# Installation Types

## Quasar CLI

**App Extension**

:::
#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add qverticalexpansionitem
```

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove qverticalexpansionitem
```

#### Describe
When installed as an App Extension, you can use `quasar describe QVerticalExpandionItem` or `quasar describe QVerticalExpandionGroup`
:::

**OR**:

:::
Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-qverticalexpansionitem'
import 'quasar-ui-qverticalexpansionitem/dist/index.css'

Vue.use(Plugin)
```
:::

**OR**:

:::
```html
<style src="quasar-ui-qverticalexpansionitem/dist/index.css"></style>

<script>
import { QVerticalExpansionItem, QVerticalExpansionGroup } from 'quasar-ui-qverticalexpansionitem'

export default {
  components: {
    QVerticalExpansionItem,
    QVerticalExpansionGroup
  }
}
</script>
```
:::

## Vue CLI project

:::
```js
import Vue from 'vue'
import Plugin from 'quasar-ui-qverticalexpansionitem'
import 'quasar-ui-qverticalexpansionitem/dist/index.css'

Vue.use(Plugin)
```
:::

**OR**:

:::
```html
<style src="quasar-ui-qverticalexpansionitem/dist/index.css"></style>

<script>
import { QVerticalExpansionItem, QVerticalExpansionGroup } from 'quasar-ui-qverticalexpansionitem'

export default {
  components: {
    QVerticalExpansionItem,
    QVerticalExpansionGroup
  }
}
</script>
```
:::

## UMD variant

Exports `window.QVerticalExpansionItem`.

Add the following tag(s) after the Quasar ones:

:::
```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```
:::

## Testing on Codepen
[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/wvBKVNB)

# Docs
Can be found [here](https://hawkeye64.github.io/quasar-ui-qverticalexpansionitem).

# Examples
Can be found [here](https://hawkeye64.github.io/quasar-ui-qverticalexpansionitem/examples).

# Demo (source) Project
Can be found [here](https://github.com/hawkeye64/quasar-ui-qverticalexpansionitem/tree/master/demo).

~~~