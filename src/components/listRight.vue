<template>
  <div class="list-block">
    <div>{{ arr.titleList }}</div>
    <div class="items-list-wrap" v-for="it in arr.data" :key="it.idItem">
      <div class="item-block" v-if="it.checked">
        <div class="title">{{ it.titleItem }}</div>
        <div class="item-block__color-quantity">
          <div
            class="square"
            v-for="(el, i) in quantityInArr(it.quantity)"
            :key="i"
            @click="delEl(it.idItem)"
            :style="{ background: it.color }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    arr: Object,
  },
  methods: {
    quantityInArr(val) {
      let arr = [];
      for (let i = 0; i <= val; i++) {
        arr.push(i);
      }
      return arr;
    },
    delEl(idItem) {
      this.$emit("clickOnSquare", idItem);
    },
  },
  computed: {},
};
</script>
<style scoped>
.list-block {
  border: 1px solid #000;
  margin-bottom: 15px;
  padding: 5px;
}
.items-list-wrap {
  width: 90%;
  margin-left: 5%;
}
.item-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.square {
  height: 1rem;
  width: 1rem;
  margin: 0.1rem;
  cursor: pointer;
}
.item-block__color-quantity {
  display: flex;
  flex-wrap: wrap;
}
</style>
