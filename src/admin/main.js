import Vue from 'vue';
import App from './App.vue';
import SimpleVueValidation from 'simple-vue-validator';
import router from './router';
import axios from './requests';
import store from "./store";

store.axios = axios;

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});