(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{ff85:function(e,n,i){"use strict";i.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-vertical-expansion-group\n      v-model="tab"\n      multiple\n      style="height: 400px;">\n      <q-vertical-expansion-item\n        v-for="tab in tabs"\n        :key="tab.index"\n        :label="\'title - \' + tab.index"\n        separator\n        icon="calendar_today"\n        expandIcon="expand_more"\n        expandedIcon="expand_less"\n        :name="tab.name"\n      >\n        <div class="fit q-pa-md" >{{ lorem }}</div>\n      </q-vertical-expansion-item>\n    </q-vertical-expansion-group>\n  </div>\n</template>\n\n<script>\nconst model = [...Array(7).keys()].map(i => ({ index: i, name: `tab-${i}` }))\n\nexport default {\n  data () {\n    return {\n      tab: [\'tab-2\', \'tab-4\'],\n      tabs: model,\n      lorem: \'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ex, aliquet sit amet semper a, dapibus id elit. Mauris nibh orci, lacinia at ex ut, mattis ultricies ante. In congue nunc mauris, vehicula aliquam neque pretium non. Aenean interdum a libero in vulputate. Praesent est eros, facilisis ut leo sit amet, ultricies mattis mi. Pellentesque ornare enim ut lacus eleifend, dignissim ornare nisl pharetra. Etiam commodo tortor risus, id feugiat nisi faucibus id. Nunc pellentesque tortor quis iaculis facilisis. Donec accumsan dui vitae orci faucibus, ac lacinia nunc molestie. Morbi mollis commodo ante quis condimentum.\'\n    }\n  }\n}\n<\/script>\n'}}]);