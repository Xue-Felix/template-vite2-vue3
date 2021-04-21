import { createState } from "./store";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = createState();

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
