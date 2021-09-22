import { Commit } from "vuex";

const actions = {
  increment({ commit }: { commit: Commit }) {
    commit("increment");
  },
};

export { actions };
