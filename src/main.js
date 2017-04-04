import Vue from 'vue'
import App from './App.vue'
import Table from './table.vue'

Vue.component('my-table', Table);

const vm = new Vue({
  el: '#app',
  render: h => h(App)
});

