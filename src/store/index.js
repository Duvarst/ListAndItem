import { createStore } from "vuex";
import mainstore from "./mainstore";

const store = createStore({
  modules: {
    mainstore,
  },
});
/*
store.subscribe((mutation, state) => {
  localStorage.setItem("fulldata", JSON.stringify(state));
});*/
export default store;
