import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Toasted from "vue-toasted";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueFileAgent from "vue-file-agent";
import "vue-file-agent/dist/vue-file-agent.css";

Vue.use(VueFileAgent);
Vue.use(Toasted, {
  position: "top-right",
  duration: 2000,
  theme: "bubble",
});
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
