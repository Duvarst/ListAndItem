<template>
  <div class="list-block">
    <div class="block-list-title">
      <div
        class="block-list-title__mark"
        @click="flags"
        :style="styleobj"
      ></div>
      <input
        type="checkbox"
        id="checkList"
        v-model="overwriteArr.checked"
        @input="checkedVals"
      />{{ overwriteArr.titleList }}
    </div>
    <div class="items-list-wrap" v-if="flag">
      <div class="item-block" v-for="it in overwriteArr.data" :key="it.idItem">
        <div class="title">
          <input
            type="checkbox"
            id="checkItem"
            @change="check"
            v-model="it.checked"
            ref="inputCheck"
          />
          <span>
            {{ it.titleItem }}
          </span>
        </div>
        <div class="item-block__color-quantity" @click="edit(it.idItem)">
          <div class="quantity">{{ it.quantity }}</div>
          <div class="square" :style="{ background: it.color }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    checkedList: Boolean,
    arr: Object,
  },
  data: function () {
    return {
      flag: false,
    };
  },
  methods: {
    edit(idItem) {
      this.$emit("edit", idItem);
    },
    check() {
      this.arr.data.some((e) => e.checked === true)
        ? this.$emit("listcheck", "checked")
        : this.$emit("listcheck", "nochecked");
    },
    checkedVals() {
      if (!this.arr.checked) {
        this.$emit("clickcheckbox", "checkfalse");
      } else {
        this.$emit("clickcheckbox", "checktrue");
      }
    },
    flags() {
      this.flag = !this.flag;
    },
  },
  computed: {
    overwriteArr() {
      let newObj = this.arr;
      return newObj;
    },
    styleobj() {
      let style = this.flag
        ? "transform: rotate(45deg)"
        : "transform: rotate(-45deg)";
      return style;
    },
  },

  mounted() {
    this.check();
  },
};
</script>
<style scoped>
.block-list-title {
  display: flex;
  align-items: center;
}
.block-list-title__mark {
  height: 0.5rem;
  width: 0.5rem;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: rotate(-45deg);
  margin-right: 5px;
  cursor: pointer;
}
#checkList {
  cursor: pointer;
}
#checkItem {
  cursor: pointer;
}
.items-list-wrap {
  width: 90%;
  margin-left: 5%;
}
.item-block {
  display: flex;
  justify-content: space-between;
}
.square {
  height: 1rem;
  width: 1rem;
  margin-left: 0.3rem;
}
.item-block__color-quantity {
  display: flex;
  cursor: pointer;
}
</style>
