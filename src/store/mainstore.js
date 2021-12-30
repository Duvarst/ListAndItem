import { sendProdArr } from "../api/products.js";
import { searchItem } from "../api/searchItem";
export default {
  namespaced: true,
  state: {
    prodDataArr: [],
    globalId: 0,
    itemObj: {},
  },
  getters: {
    prodData: (state) => state.prodDataArr,
    itemObj: (state) => state.itemObj,
  },
  mutations: {
    setData(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.prodDataArr = data;
    },
    findItem(state, arr) {
      state.itemObj = searchItem(state.prodDataArr, [...arr]);
    },
    setId(state, val) {
      state.globalId = val;
    },
    checkedOperation(state, payload) {
      let obj = state.prodDataArr.find((e) => e.idList === payload.idList);
      obj.checked = payload.bool;
      obj.data.forEach((e) => {
        e.checked = payload.bool;
      });
    },
    listChecked(state, payload) {
      let obj = state.prodDataArr.find((e) => e.idList === payload.idList);
      obj.checked = payload.bool;
    },
    editItemValue(state, arr) {
      state.itemObj.color = arr[1];
      state.itemObj.quantity = arr[0];
    },
    deleteELementInQuantity(state, arr) {
      let obj = searchItem(state.prodDataArr, [...arr]);
      obj.quantity -= 1;
    },
    extractData(state, data) {
      this.replaceState(Object.assign(state, data));
    },
  },
  actions: {
    async load({ commit }) {
      let datainfo = sendProdArr();
      commit("setData", datainfo);
    },
    setId({ commit }, val) {
      commit("setId", val);
    },
    listChecked({ commit }, payload) {
      commit("listChecked", payload);
    },
    findItem({ commit }, arr) {
      commit("findItem", arr);
    },
    async extractData({ commit }) {
      if (localStorage.getItem("fulldata")) {
        let data = await JSON.parse(localStorage.getItem("fulldata"));
        commit("extractData", data);
      }
    },
  },
  watch: {
    prodDataArr() {
      console.log(1111);
    },
    deep: true,
  },
};
