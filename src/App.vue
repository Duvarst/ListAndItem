<template>
  <div id="app">
    <main class="main-block">
      <div class="left-block">
        <div class="list-block" v-for="it in prodData" :key="it.idList">
          <listleft
            :arr="it"
            :checkedList="it.checked"
            @listcheck="callItemCheck(it.idList, $event)"
            @edit="callEditItemWindow(it.idList, $event)"
            @clickcheckbox="callFncheckOperation(it.idList, $event)"
          ></listleft>
        </div>
      </div>
      <div class="right-block">
        <div class="list-block" v-for="it in prodData" :key="it.idList">
          <listright
            :arr="it"
            @clickOnSquare="deleteEl(it.idList, $event)"
          ></listright>
        </div>
      </div>
      <edititem
        v-if="editWindFlag"
        @newvalue="newItemVal($event)"
        @closewindowedit="closeEditItemWind()"
      ></edititem>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import listleft from "./components/listLeft.vue";
import listright from "./components/listRight.vue";
import edititem from "./components/edititem.vue";
//import { searchItem } from "./api/searchItem";

export default {
  components: {
    listleft,
    listright,
    edititem,
  },
  data: function () {
    return {
      editWindFlag: false,
      quantity: null,
      color: "",
    };
  },
  methods: {
    ...mapActions("mainstore", { findItem: "findItem" }),
    ...mapMutations("mainstore", { delELInQuan: "deleteELementInQuantity" }),
    ...mapMutations("mainstore", { editItemValue: "editItemValue" }),
    ...mapMutations("mainstore", { checkedOperation: "checkedOperation" }),
    ...mapActions("mainstore", { listChecked: "listChecked" }),
    deleteEl(idList, idItem) {
      this.delELInQuan([idList, idItem]);
    },
    callEditItemWindow(idList, idItem) {
      this.editWindFlag = true;
      this.findItem([idList, idItem]);
    },
    closeEditItemWind() {
      this.editWindFlag = false;
    },
    newItemVal(arr) {
      if (arr) {
        this.editItemValue(arr);
        this.closeEditItemWind();
      }
    },
    callFncheckOperation(idList, str) {
      str === "checkfalse"
        ? this.checkedOperation({ idList, bool: true })
        : this.checkedOperation({ idList, bool: false });
    },
    callItemCheck(idList, val) {
      val === "checked"
        ? this.listChecked({ idList, bool: true })
        : this.listChecked({ idList, bool: false });
    },
  },
  computed: {
    ...mapGetters("mainstore", { prodData: "prodData" }),
  },
};
</script>

<style scoped>
.main-block {
  display: flex;

  justify-content: space-between;
  padding: 10px;
  border: 1px solid #000;
}
.left-block {
  width: 45%;
  padding: 10px;
  border: 2px solid #000;
}
.right-block {
  width: 45%;
  padding: 10px;
  border: 2px solid #000;
}
</style>
