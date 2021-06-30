import Vue from 'vue';
import router from './router/index'
import App from './App.vue'
import EldanUi from '../src/entry.esm'

Vue.use(EldanUi)

const vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


export default vue;