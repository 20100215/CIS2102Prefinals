<template>
  <div class="home">
    <Intro />
    <ItemSearchBar v-on:input-change="updateQuery"/>
    <div style="display: flow-root">
      <ItemCard
        v-for="(item, index) in filteredItemList"
        :key="index"
        :id="item.id"
        :imgSrc="item.img"
        :itemName="item.name"
        :itemPrice="item.price"
        :itemCategory="item.category"
        :itemQuantity="item.quantity"
        :itemDesc="item.desc"
      />
      <h4 v-if="filteredItemList.length==0" class="mt-3" style="color:red">No items to display. Please try again.</h4>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import ItemSearchBar from "@/components/ItemSearchBar.vue";
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: "Home",
  components: {
    Intro,
    ItemSearchBar,
    ItemCard,
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
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 8,
          category: ["Seafood", "Fresh"],
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
          desc: "Fresh fish is expensive and is among the most perishable food we eat. It is best to cook fresh fish within two days after you bring it home.",
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
          desc: "Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising chickens",
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 0,
          category: ["Meat"],
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
          desc: "Beef is the culinary name for meat from cattle. In prehistoric times, humans hunted aurochs and later domesticated them.",
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 42,
          category: ["Sauce", "Seasoning"],
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
          desc: "Soy sauce is a liquid condiment of Chinese origin. It is considered to contain a strong umami flavor.",
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 22,
          category: ["Dairy"],
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
          desc: "Eggs are among the most nutritious foods on the planet. A whole egg contains all the nutrients required to energize ourselves.",
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 4,
          category: ["Meat"],
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
          desc: "Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products.",
        },
      ],
      query:"",
    };
  },
  methods: {
    updateQuery(text){
     this.query=text;
   }
  },
  computed: {
    filteredItemList(){
      if(this.query===""){
        return this.itemList.filter(e=>e.quantity>0);
      } else {
        /* Query search -> by name, id, and category (ES6) */
        return this.itemList.filter(
          a=> ((a.name).toLowerCase().startsWith(this.query.toLowerCase())
          || a.id == this.query
          || a.category.some(x=>(x.toLowerCase()).startsWith(this.query.toLowerCase())))
          && a.quantity>0
        )
      }
    }
  }
};
</script>
