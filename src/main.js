import Vue from 'vue'
import App from './App.vue'
// import {
//   createEl
// } from './utils/createEl'
import McreateEl from './utils/McreateEl'

import bus from './utils/bus'



Vue.config.productionTip = false


Vue.use(McreateEl)

Vue.prototype.$bus = new bus()
// Vue.prototype.$createEl = createEl


new Vue({
  render: h => h(App)
}).$mount('#app')