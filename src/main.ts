import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/stores/root";

Vue.config.productionTip = false;

const mountElementId = "#app";

const rootComponent = new Vue({
  router,
  store,
  render: h => h(App)
});

document.addEventListener("deviceready", () => {
  rootComponent.$mount(mountElementId);
});
