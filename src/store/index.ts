import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";

import { mutations } from "./mutations";
import { actions } from "./actions";

export interface Article {
  id: string;
  title: string;
  url: string;
  author: string;
  description: string;
  publishedAt: string;
  urlToImage?: string;
  source: {
    name: string;
  };
}

export interface State {}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

const state: State = {};

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<State>({
  state() {
    return state;
  },
  mutations,
  actions,
});
