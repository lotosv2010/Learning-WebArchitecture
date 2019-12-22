<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 50px;">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PageOne msg="vue ts" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageOne from '@/components/PageOne.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    PageOne
  }
}
</script>
