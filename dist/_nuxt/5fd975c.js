(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{370:function(t,n,e){var content=e(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("c2dac7c2",content,!0,{sourceMap:!1})},374:function(t,n,e){"use strict";e(370)},375:function(t,n,e){var o=e(22)(!1);o.push([t.i,".loading-page[data-v-256b93c4]{position:fixed;z-index:200;top:0;left:0;width:100%;height:100%;text-align:center;vertical-align:middle;background:#000;display:flex;align-items:center;justify-content:center}.loader[data-v-256b93c4]{border-radius:50%;border:16px solid #f3f3f3;border-top-color:#000;width:120px;height:120px;-webkit-animation:spin-data-v-256b93c4 2s linear infinite;animation:spin-data-v-256b93c4 2s linear infinite}@-webkit-keyframes spin-data-v-256b93c4{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin-data-v-256b93c4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=o},384:function(t,n,e){"use strict";e.r(n);e(51);var o={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))}},r=(e(374),e(8)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.loading?e("div",{staticClass:"loading-page"},[e("div",{staticClass:"loader"})]):t._e()}),[],!1,null,"256b93c4",null);n.default=component.exports}}]);