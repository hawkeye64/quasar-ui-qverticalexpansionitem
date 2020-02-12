# Component QVerticalExpansionItem

[![npm](https://img.shields.io/npm/v/quasar-ui-qverticalexpansionitem.svg?label=quasar-ui-qverticalexpansionitem)](https://www.npmjs.com/package/quasar-ui-qverticalexpansionitem)
[![npm](https://img.shields.io/npm/dt/quasar-ui-qverticalexpansionitem.svg)](https://www.npmjs.com/package/quasar-ui-qverticalexpansionitem)

QVerticalExpansionItem is a [Quasar](https://quasar.dev) component. It allows you to have Vertical Expanders for your Quasar App.

# Examples and Documentation
Can be found [here](https://hawkeye64.github.io/quasar-ui-qverticalexpansionitem)

# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-qverticalexpansionitem'
import 'quasar-ui-qverticalexpansionitem/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-qverticalexpansionitem/dist/index.css"></style>

<script>
import { QVerticalExpansionGroup, QVerticalExpansionItem } from 'quasar-ui-qverticalexpansionitem'

export default {
  components: {
    QVerticalExpansionGroup,
    QVerticalExpansionItem
  }
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-qverticalexpansionitem'
import 'quasar-ui-qverticalexpansionitem/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-qverticalexpansionitem/dist/index.css"></style>

<script>
import { QVerticalExpansionGroup, QVerticalExpansionItem } from 'quasar-ui-qverticalexpansionitem'

export default {
  components: {
    QVerticalExpansionGroup,
    QVerticalExpansionItem
  }
}
</script>
```

## UMD variant

Exports `window.QVerticalExpansionItem`.

Add the following tag(s) after the Quasar ones:

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

# Setup
```bash
$ yarn
```

## Developing

In the `ui` folder

```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

## Building package
```bash
$ yarn build

# build just the JSON API
$ yarn build:api
```

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
