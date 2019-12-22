<template>
  <div id="app">
    <!-- <layout /> -->
    <shop />
  </div>
</template>

<script>
// import Layout from './layout/Index.vue'
import Shop from './views/Shop'
export default {
  name: 'app',
  components: {
    // Layout,
    Shop
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
