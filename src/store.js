import Vue from "vue";
import Vuex from "vuex";
import Users from "./Users/_store";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: [Users]
});

export default store;
