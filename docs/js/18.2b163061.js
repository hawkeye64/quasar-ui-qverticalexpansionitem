(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"713b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{attrs:{view:"HHh LpR fFf"},on:{scroll:e.onScroll}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),r("q-toolbar-title",[e._v("\n        QVerticalExpansionItem "),r("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),r("q-space"),r("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),e.$q.screen.width>500?r("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e(),r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1)],1)],1),r("q-drawer",{staticClass:"menu",attrs:{"show-if-above":"",bordered:"","aria-label":"Menu"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("q-list",[r("q-item-label",{attrs:{header:""}},[e._v("Essential Links")]),r("q-separator")],1),r("essential-links")],1),r("q-drawer",{ref:"drawer",staticClass:"toc",attrs:{"show-if-above":"",side:"right",bordered:"","aria-label":"Table of Contents"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[r("q-scroll-area",{staticClass:"fit"},[r("q-list",{attrs:{dense:""}},e._l(e.toc,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(r){return e.scrollTo(t.id)}}},[t.level>1?r("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),r("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)})),1)],1)],1),r("q-page-container",[r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1)],1)},n=[],o=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(o),s=r("2f62"),c=r("0831"),l=r("384e");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=c["a"].setScrollPosition,d={name:"MainLayout",components:{"essential-links":function(){return r.e(1).then(r.bind(null,"4bd0"))}},data:function(){return{version:l["b"],leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout((function(){e.scrollTo(t)}),200)}},computed:f({},Object(s["b"])({toc:"common/toc"})),methods:{scrollTo:function(e){var t=this;this.activeToc=e;var r=document.getElementById(e);r&&setTimeout((function(){t.scrollPage(r)}),200)},scrollPage:function(e){var t=e.offsetTop-50;p(window,t,500)},onScroll:function(e){var t=e.position;!0!==this.scrollingPage&&this.updateActiveToc(t)},updateActiveToc:function(e){var t,r=this.toc;for(var a in r){var n=r[a],o=document.getElementById(n.id);if(null!==o&&o.offsetTop>=e+50){void 0===t&&(t=n.id);break}}void 0!==t&&(this.activeToc=t)}}},b=d,v=r("2877"),h=r("eebe"),m=r.n(h),w=r("4d5a"),O=r("e359"),g=r("65c6"),q=r("9c40"),k=r("0016"),T=r("6ac5"),y=r("2c91"),D=r("9404"),Q=r("1c1c"),_=r("0170"),j=r("eb85"),P=r("4983"),S=r("66e5"),C=r("4074"),E=r("09e3"),I=r("714f"),$=Object(v["a"])(b,a,n,!1,null,null,null);t["default"]=$.exports;m()($,"components",{QLayout:w["a"],QHeader:O["a"],QToolbar:g["a"],QBtn:q["a"],QIcon:k["a"],QToolbarTitle:T["a"],QSpace:y["a"],QDrawer:D["a"],QList:Q["a"],QItemLabel:_["a"],QSeparator:j["a"],QScrollArea:P["a"],QItem:S["a"],QItemSection:C["a"],QPageContainer:E["a"]}),m()($,"directives",{Ripple:I["a"]})}}]);