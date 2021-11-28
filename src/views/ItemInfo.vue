<template>
    <Intro/>
    <div class="item-info">
        <div class="row mx-5">
            <div class="col-md-4 p-4">
              <img :src="imgSrc" class="w-100 border border-rounded" style="box-shadow: 0 3px 10px rgb(0 0 0 / 1); height:20rem;">
            </div>
            <div class="col-md-8 p-4">

              <table class="table table-hover table-borderless text-start" style="">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{{itemName}}</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>P {{itemPrice}}.00</td>
                  </tr>
                  <tr>
                    <td>Qty in Stock:</td>
                    <td>{{itemQuantity}}</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td><span v-for="(a,index) of itemCategory" :key="index">{{a}} </span> </td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>{{itemDesc}}</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center fw-bold">
                Add to cart: &nbsp; &nbsp; 
                <button id="decrement" type="button" class="btn btn-success" v-on:click="decrement" disabled> - </button>
                <input class="form-control" style="display:inline; width:60px;" type="number" min="0" :max="itemQuantity" step="1" :value="count" v-on:change="qtyChange"/>
                <button id="increment" type="button" class="btn btn-success" v-on:click="increment"> + </button>
              </div>
               
              <h5 style="color:blue" class="my-2" v-if="count>0">Item successfully added to cart!</h5>
              <h5 style="color:blue" class="my-2" v-else> &nbsp; </h5>

            </div>
        </div>
        <router-link to="/" class="btn btn-warning mr-2">Return to menu</router-link>
        <router-link to="/Cart" class="btn btn-warning ms-2">Check out</router-link>
        
    </div>
</template>

<script>
import Intro from "@/components/Intro.vue";

export default {
  name: "ItemInfo",
  components: {
    Intro,
  },
  props: {
    imgSrc: String,
    itemName: String,
    itemPrice: Number,
    itemQuantity: Number,
    itemCategory: Array,
    itemDesc: String,
  },
  data(){
    return {
      count:0,
    }
  },
  methods:{
    /* Error protection enabled via HTML attributes and Javascript control */
    increment(){
      this.count++;
      document.getElementById("decrement").disabled = false;
      if(this.count >= this.itemQuantity){
        this.count = this.itemQuantity
        document.getElementById("increment").disabled = true;
      }
    },
    decrement(){
      this.count--;
      document.getElementById("increment").disabled = false;
      if(this.count <= 0){
        this.count = 0
        document.getElementById("decrement").disabled = true;
      }
    },
    qtyChange(event){
      this.count=event.target.value;
      if(this.count >= this.itemQuantity){
        this.count = this.itemQuantity
        document.getElementById("increment").disabled = true;
      }
      if(this.count <= 0){
        this.count = 0
        document.getElementById("decrement").disabled = true;
      }
      this.$emit("update-cart",this.id,this.count);
    }
  }
};
</script>

<style>
  td:nth-child(1){
    font-weight: bold;
  }
</style>
