import store from "@/stores/root";
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";

export interface INetworkState {
  online: boolean;
  stateText: string;
}

@Module({ dynamic: true, store, name: "network", namespaced: true })
class NetworkStateModule extends VuexModule implements INetworkState {
  private _online = false;

  get online() {
    return this._online;
  }

  get stateText() {
    return this.online ? "online" : "offline";
  }

  @Mutation
  setOnline(isOnline: boolean) {
    this._online = isOnline;
  }

  @Action({ commit: "setOnline" })
  toOffline() {
    return false;
  }

  @Action({ commit: "setOnline" })
  toOnline() {
    return true;
  }
}

export const networkState = getModule(NetworkStateModule);
