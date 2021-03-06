import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import messagePlugin from "@/utils/message.plugin";
import titlePlugin from "@/utils/title.plugin";
import Loader from "@/components/app/Loader";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyBi1HRVr6Wjde4FOZvApUqzrO06VP8PjKE",
  authDomain: "vue-crm-3492f.firebaseapp.com",
  databaseURL: "https://vue-crm-3492f.firebaseio.com",
  projectId: "vue-crm-3492f",
  storageBucket: "vue-crm-3492f.appspot.com",
  messagingSenderId: "47463304442",
  appId: "1:47463304442:web:fc029259dee64e8f594d43",
  measurementId: "G-GSDFRT2R31"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
