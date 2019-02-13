import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
    num: 222
  },
  mutations: {
    add(state, num) {
      state.count += num;
    },
    addNum(state, num2) {
      state.num += num2;
    }
  },
  actions: {
    addActionwhy({ commit }) {
      commit("add", 20);
    },
    addActionNum({commit}){
      commit("addNum",222);
    }
  },
  getters: {
    count1(state) {
      return state.count + 1000;
    }

    
  }
});
