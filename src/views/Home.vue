<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ItemSearchBar msg="Welcome to Your Vue.js App"/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ItemSearchBar from '@/components/ItemSearchBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, ItemSearchBar
  }
}
</script>
