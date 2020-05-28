import Vue from "vue";
import Vuex from "vuex";
import restCon from "../logic/restCon.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async DoRestCall(link, method) {
      var toReturn = "";
      await restCon.methods.makeRESTcall(link, method).then((response) => {
        toReturn = response;
      });
      return toReturn;
    },
  },
  modules: {},
});
