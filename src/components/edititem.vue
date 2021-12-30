<template>
  <div class="window-edit">
    <div class="window-edit-bg" @click="windclose"></div>
    <div class="window-edit-wrap">
      <label for="textInp" id="title">Enter a new value</label>
      <input
        type="number"
        id="textInp"
        v-model="newQuantity"
        @change="writNewQuant($event)"
      />
      <label for="colorInp" id="title">Сhoose a new color</label>
      <input
        type="color"
        id="colorInp"
        :value="newColor"
        @change="writNewColor($event)"
      />
      <div class="block-btn">
        <div class="add-new-value" @click="addNewValue">Edit</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {},
  data: function () {
    return {
      newQuantity: null,
      newColor: "",
    };
  },
  methods: {
    windclose() {
      this.$emit("closewindowedit");
    },
    writNewQuant(event) {
      let val = event.target.value;
      this.newQuantity = Math.max(val, 0);
    },
    writNewColor(event) {
      this.newColor = event.target.value;
    },
    addNewValue() {
      if (this.newQuantity !== null && this.newColor !== "") {
        this.$emit("newvalue", [this.newQuantity, this.newColor]);
      }
    },
  },
  computed: {
    ...mapGetters("mainstore", { itemObj: "itemObj" }),
  },
  async mounted() {
    await this.$nextTick(() => {
      this.newQuantity = this.itemObj.quantity;
      this.newColor = this.itemObj.color;
    });
  },
};
</script>
<style scoped>
.block-btn {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 10px;
}
#textInp {
  margin-bottom: 5px;
}
#colorInp {
  width: 100%;
  margin-bottom: 5px;
}
#title {
  font-size: 1.5rem;
  margin: 5px 0px;
}
.del-item {
  cursor: pointer;
  border: 1px solid #000;
  cursor: pointer;
  padding: 0px 10px;
}
.add-new-value {
  border: 1px solid #000;
  cursor: pointer;
  padding: 0px 10px;
}

.window-edit-bg {
  width: 100%;
  height: 100%;
  z-index: inherit;
  position: fixed;
  top: 0;
  left: 0;
}
.window-edit {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.3);
}
.window-edit-wrap {
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 50%;
  padding: 30px 20px;
  margin: 50px auto;
  position: relative;
  z-index: 1020;
}
</style>
