<template>
  <div class="home">
    <h1>this is home page</h1>
    <cube-button :primary="true" @click="logout">注销</cube-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
