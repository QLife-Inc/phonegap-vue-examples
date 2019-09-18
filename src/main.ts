import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/stores/root";
import VueCordova from "vue-cordova";

Vue.config.productionTip = false;

Vue.use(VueCordova);

const mountElementId = "#app";

const rootComponent = new Vue({
  router,
  store,
  render: h => h(App)
});

document.addEventListener("deviceready", () => {
  rootComponent.$mount(mountElementId);
});

// cordova-plugin-network-information example
import { networkState } from "@/stores/network";
document.addEventListener("offline", () => {
  console.debug("Network is offline");
  networkState.toOffline();
});
document.addEventListener("online", () => {
  console.debug("Network is online");
  networkState.toOnline();
});
