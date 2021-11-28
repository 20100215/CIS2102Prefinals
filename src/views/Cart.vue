<template>
  <div class="home">
    <h3>Check out</h3>
    <h3>Here you may review your purchases and input your credentials.</h3>
    <div class="row align-items-center" style="min-height: 300px">
      <div class="col-md-8">
        <div style="display: flow-root">
          <ItemCard2
            v-for="(item, index) in filteredItemList"
            :key="index"
            :id="item.id"
            :imgSrc="item.img"
            :itemName="item.name"
            :itemPrice="item.price"
            :itemCategory="item.category"
            :itemQuantity="item.quantity"
            :itemDesc="item.desc"
            :num="item.count"
            v-on:update-cart="updateCartStatus"
          />
          <h4
            v-if="filteredItemList.length == 0"
            class="mt-3"
            style="color: red"
          >
            No items added to cart yet.
          </h4>
        </div>
      </div>

      <div class="col-md-4">
        <h4>PURCHASE SUMMARY</h4><br>

        <table
          class="table table-hover table-secondary text-start align-middle"
          style="height: 100px"
        >
          <tr>
            <td>Total:</td>
            <td class="text-end">P{{ oldTotal }}.00</td>
          </tr>
          <tr>
            <td class="align-middle">
              Enter Coupon code:<br /><span style="font-size: 10px; background-color:rgba(0,0,0,0)"
                >(Press Enter to confirm)</span
              >
            </td>
            <td style="float: right">
              <input
                class="form-control"
                style="width: 120px"
                v-on:change="checkDiscount"
              />
            </td>
          </tr>
          <tr v-if="discount > 0">
            <td>Discount:</td>
            <td class="text-end">(P{{ discount }}.00)</td>
          </tr>
          <tr>
            <td>Balance:</td>
            <td class="text-end">P{{ newTotal }}.00</td>
          </tr>
          <tr>
            <td>Input cash:<br /><span style="font-size: 10px; background-color:rgba(0,0,0,0)"
                >(Press Enter to confirm)</span
              ></td>
            <td class="text-end">
              P
              <input
                type="number"
                class="form-control"
                style="
                  display: inline;
                  width: 100px;
                  -webkit-appearance: none;
                  margin: 0;
                "
                v-on:change="checkCash"
              />.00
            </td>
          </tr>
        </table>

        <!-- button appears only when amount>0 and >= cash given -->
        <router-link
          :to="{ name: 'Success', params: { change: change } }"
          class="btn btn-primary"
          v-if="newTotal > 0 && cash >= newTotal"
          >CONFIRM PAYMENT</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCard2 from "@/components/ItemCard2.vue";

export default {
  name: "Cart",
  components: {
    ItemCard2,
  },
  props: {
    curId: { type: Number, default: 0 },
    curCount: { type: Number, default: 0 },
  },
  data() {
    return {
      itemList: [
        {
          id: 1,
          name: "Bacon",
          price: 250,
          quantity: 32,
          category: ["Meat"],
          img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
          desc: "Bacon is a type of salt-cured pork made from various cuts, typically the belly or less fatty parts of the back.",
          count: 0,
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 8,
          category: ["Seafood", "Fresh"],
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
          desc: "Fresh fish is expensive and is among the most perishable food we eat. It is best to cook fresh fish within two days after you bring it home.",
          count: 0,
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
          desc: "Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising chickens",
          count: 0,
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 0,
          category: ["Meat"],
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
          desc: "Beef is the culinary name for meat from cattle. In prehistoric times, humans hunted aurochs and later domesticated them.",
          count: 0,
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 42,
          category: ["Sauce", "Seasoning"],
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
          desc: "Soy sauce is a liquid condiment of Chinese origin. It is considered to contain a strong umami flavor.",
          count: 0,
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 22,
          category: ["Dairy"],
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
          desc: "Eggs are among the most nutritious foods on the planet. A whole egg contains all the nutrients required to energize ourselves.",
          count: 0,
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 4,
          category: ["Meat"],
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
          desc: "Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products.",
          count: 0,
        },
      ],
      discount: 0,
      cash: 0,
      change: 0,
    };
  },
  methods: {
    adjustArray() {
      for (var ctr = 0; ctr < this.itemList.length; ctr++) {
        if (this.itemList[ctr].id == this.curId) {
          this.itemList[ctr].count = this.curCount;
        }
      }
    },
    adjust(arr) {
      for (var ctr = 0; ctr < this.itemList.length; ctr++) {
        if (this.itemList[ctr].id == arr[0]) {
          this.itemList[ctr].count = arr[1];
        }
      }
    },
    updateCartStatus(arr) {
      this.adjust(arr);
    },
    checkDiscount(event) {
      switch (event.target.value) {
        case "menu50":
          this.discount = parseInt(this.oldTotal * 0.5);
          break;
        case "menu20":
          this.discount = parseInt(this.oldTotal * 0.2);
          break;
        case "menu10":
          this.discount = parseInt(this.oldTotal * 0.1);
          break;
        case "menu200flat":
          this.discount = this.oldTotal > 1000 ? 200 : 0;
          break;
        default:
          this.discount = 0;
          break;
      }
    },
    checkCash(event) {
      this.cash=event.target.value
      this.change=this.cash-this.newTotal
    },
  },
  created() {
    this.adjustArray();
  },
  updated() {
    this.adjustArray();
  },
  beforeUpdate() {
    this.adjustArray();
  },
  computed: {
    filteredItemList() {
      return this.itemList.filter((a) => a.count > 0);
    },
    oldTotal() {
      var sum = 0;
      for (var x of this.filteredItemList) {
        sum += x.price * x.count;
      }
      return sum;
    },
    newTotal() {
      return this.oldTotal - this.discount;
    },
  },
};
</script>

<style scoped>
td:nth-child(1) {
  font-weight: bold;
}
</style>