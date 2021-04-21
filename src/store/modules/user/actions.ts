import { GET_DATA } from "./types";
import { ActionContext } from "vuex";
import { userState } from "./store";


export default {
  [GET_DATA]({ commit }: ActionContext<userState, unknown>):void {
    console.log("action执行成功");
    setTimeout(() => {
      const payload = false;
      commit(GET_DATA, payload);
    }, 1000)
  }
}

