

<template>
  <div class="card">
    <img
      :src="imgSrc"
      class="card-img-top"
      style="width: 100%; height: 8rem"
      alt="Image not available"
    />
    <div class="card-body">
      <p class="card-title fw-bold">{{ itemName }}</p>
      <p class="card-text">Price: Php {{ itemPrice }}.00</p>
      <button
        id="decrement1"
        type="button"
        class="btn btn-success"
        v-on:click="decrement"
      >
        -
      </button>
      <input
        class="form-control"
        style="display: inline; width: 60px"
        type="number"
        min="0"
        :max="itemQuantity"
        step="1"
        :value="num"
        v-on:change="qtyChange"
      />
      <button
        id="increment1"
        type="button"
        class="btn btn-success"
        v-on:click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard2",
  props: {
    id: Number,
    imgSrc: String,
    itemName: String,
    itemPrice: Number,
    itemCategory: Array,
    itemQuantity: Number,
    itemDesc: String,
    num: Number,
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.count = parseInt(this.num);
  },
  methods: {
    /* Error protection enabled via HTML attributes and Javascript control */
    increment() {
      this.count++;
      document.getElementById("decrement1").disabled = false;
      if (this.count >= this.itemQuantity) {
        this.count = this.itemQuantity;
        document.getElementById("increment1").disabled = true;
      }
    },
    decrement() {
      this.count--;
      document.getElementById("increment1").disabled = false;
      if (this.count <= 0) {
        this.count = 0;
        document.getElementById("decrement1").disabled = true;
      }
    },
    qtyChange(event) {
      this.count = event.target.value;
      if (this.count >= this.itemQuantity) {
        this.count = this.itemQuantity;
      }
      if (this.count <= 0) {
        this.count = 0;
      }
      var arr = [this.id,this.count]
      this.$emit("update-cart", arr);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: aquamarine;
  width: 29%;
  margin: 2%;
  float: left;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
}
</style>