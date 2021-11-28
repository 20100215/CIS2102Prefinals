<template>
  <div id="body">
    <div id="nav">
      <router-link to="/" class="btn btn-outline-primary">Menu</router-link>
      &nbsp;
      <router-link to="/Cart" class="btn btn-outline-primary"
        >View Cart</router-link
      >
    </div>
    <div class="container p-5" id="app">
      <router-view />
      <h6 class="mt-3">
        CIS 2102 Prefinal Exam by Wayne Dayata - Nov 27, 2021
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#body {
  background-image: url("https://media.istockphoto.com/photos/unrecognizable-supermarket-aisle-as-background-picture-id1265272573?b=1&k=20&m=1265272573&s=170667a&w=0&h=vnTLsLiki_HxXVr8MlQBKOqTn8rLx30M63_-2XNVroc=");
  background-repeat: no-repeat;
  background-size: 100% auto;
  min-height:650px;
}

#app {
  font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgba(255, 255, 255, 0.5);
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  min-height:500px;
}

#nav {
  padding: 20px;
  background-color: #c4c4c4;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1ca168;
}
</style>
