import { GET_DATA } from "./types";
import { userState } from "./store";

const mutations = {
  [GET_DATA](state: userState, payload: boolean): void {
    console.log("mutations 执行成功")
    state.loading = payload
  }
}

export default mutations