<template>
  <input v-on:input="textChange" class="rounded form-control mt-3 mb-3 " placeholder="Search by item name / ID (1-11) / category... (meat, seafood, fresh, poultry, daity, sauce, seasoning)"/>
</template>

<script>
export default {
  name: 'ItemSearchBar',
  methods:{
      textChange(event){
          this.$emit("input-change",event.target.value);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
