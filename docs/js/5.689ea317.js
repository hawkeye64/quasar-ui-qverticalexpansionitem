(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0960":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hero",[a("div",{staticClass:"q-markdown"},[a("q-markdown",[t._v("\nTwo components are used to make the following examples: `QVerticalExpansionGroup` and `QVerticalExpansionItem`. The QVerticalExpansionGroup must always be a parent to QVerticalExpansionItem, but you can have many child QVerticalExpansionItem's that you want.\n\nBy default, clicking the titlebar expands/contracts the QVerticalExpansionItem. Also, by default, you can only have one vertical expansion tab panel open at a time. However, you can change these defaults with properties, as explained below.\n      ")]),a("example-title",{attrs:{title:"QVerticalExpansionItem"}}),a("example-viewer",{attrs:{title:"Basic",file:"Basic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Separator",file:"Separator","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Default Open",file:"DefaultOpened","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Icons",file:"Icons","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nYou can use the `expand-icon` and `expanded-icon` properties to define different icons when the tab panel is expanded/collapsed.\n::: warning\nNot all icon sets work with rotation in the collapsed state, so make sure you use ones that work.\n:::\n        ")])],1),a("example-viewer",{attrs:{title:"Click Icon",file:"ClickIcon","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nThe `click-icon` property only allows the `expand-icon` and `expanded-icon` to be clicked in order to expand/collapse the tab panel.\n        ")])],1),a("example-viewer",{attrs:{title:"Align Label",file:"Label","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Dense",file:"Dense","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Multiple",file:"Multiple","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nUsing the `multiple` property on `QVerticalExpansionGroup` allows you to have multiple tab panels opened at the same time.\n        ")])],1),a("example-viewer",{attrs:{title:"Multiple Opened",file:"MultipleOpened","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Flat",file:"Flat","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Disable",file:"Disable","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Color",file:"Color","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Images",file:"Images","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Images Multiple",file:"ImagesMultiple","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Components",file:"Components","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}})],1)])},i=[],l=a("2514"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},n=[];a("a481");function c(t){var e=window.location.origin+window.location.pathname+"#"+t,a=document.createElement("textarea");a.className="fixed-top",a.value=e,document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function r(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}var p={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return r(this.title)}},methods:{copyHeading:c}},h=p,d=a("2877"),m=Object(d["a"])(h,o,n,!1,null,null,null),u=m.exports,f=a("384e"),x={name:"Examples",components:{Hero:l["a"],ExampleTitle:u},data:function(){return{tempToc:[],locationUrl:"https://github.com/hawkeye64/quasar-ui-qverticalexpansionitem/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem@".concat(f["b"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/quasar-ui-qverticalexpansionitem@".concat(f["b"],"/dist/index.min.css")]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("QVerticalExpansionItem"),this.addToToc("Basic",2),this.addToToc("Separator",2),this.addToToc("Default Open",2),this.addToToc("Icons",2),this.addToToc("Click Icon",2),this.addToToc("Align Label",2),this.addToToc("Dense",2),this.addToToc("Multiple",2),this.addToToc("Multiple Opened",2),this.addToToc("Flat",2),this.addToToc("Disable",2),this.addToToc("Color",2),this.addToToc("Images",2),this.addToToc("Images Multiple",2),this.addToToc("Components",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=t;e>1&&(a="example-"+a);var s=r(a);this.tempToc.push({children:[],id:s,label:t,level:e})}}},v=x,w=Object(d["a"])(v,s,i,!1,null,null,null);e["default"]=w.exports},2514:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"page-header"},[a("div",{staticClass:"donate"},[a("a",{attrs:{href:t.donateUrl,target:"_blank",title:"Donate"}},[a("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),a("div",{staticClass:"text-h1 project-name"},[t._v(t._s(t.title))]),a("div",{staticClass:"text-h2 project-tagline"},[t._v(t._s(t.tagline))]),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),t.hasInteractiveDemo?a("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):t._e(),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),a("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[a("div",{staticClass:"quasar"},[t._v(t._s(t.quasarDesc))]),a("div",{staticClass:"byline"},[t._v(t._s(t.byline)),a("a",{attrs:{href:t.bylineTwitter,target:"_blank",title:"Twitter"}},[a("i",{staticClass:"fab fa-twitter"})])])])],1),a("main",{staticClass:"flex flex-start justify-center inset-shadow"},[a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[t._t("default")],2)])])},i=[],l={name:"Hero",data:function(){return{title:"QVerticalExpansionItem",tagline:"Vertical Expansion tab panels for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/hawkeye64/quasar-ui-qverticalexpansionitem",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!1}}},o=l,n=a("2877"),c=a("eebe"),r=a.n(c),p=a("9c40"),h=Object(n["a"])(o,s,i,!1,null,null,null);e["a"]=h.exports;r()(h,"components",{QBtn:p["a"]})}}]);