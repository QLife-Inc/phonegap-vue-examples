import Vue from "vue";
import Vuex from "vuex";
import { INetworkState } from "@/stores/network";

Vue.use(Vuex);

export interface IRootState {
  network: INetworkState;
}

export default new Vuex.Store<IRootState>({});
