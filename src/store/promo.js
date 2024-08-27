import * as promoAPI from "src/api/referrals";

export default {
  namespaced: true,
  state: {
    balance: null,
  },
  getters: {

  },
  mutations: {
    setBalance(state, payload) {
      if (typeof payload !== "object") return;
      state.balance = payload;
    },
  },
  actions: {

    async getBalance({ commit }) {
      const { data } = await promoAPI.bounty();

      commit("setBalance", data);

      return data;
    },
  },
};
