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
      <router-link
        :to="{
          name: 'ItemInfo',
          params: {
            id: id,
            itemName: itemName,
            itemPrice: itemPrice,
            imgSrc: imgSrc,
            itemDesc: itemDesc,
            itemCategory: itemCategory,
            itemQuantity: itemQuantity,
          },
        }"
        class="btn btn-warning"
        >View item details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    id: Number,
    imgSrc: String,
    itemName: String,
    itemPrice: Number,
    itemCategory: Array,
    itemQuantity: Number,
    itemDesc: String,
  },
};
</script>

<style scoped>
.card {
  background-color: aquamarine;
  width: 21%;
  margin: 2%;
  float: left;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
}
</style>