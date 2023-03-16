import { createStore, Store } from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import state from "@/store/state";
import { InjectionKey } from "vue";
import { GlobalState } from "./types";

export const key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
