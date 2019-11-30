<template>
  <div class="router">
    <el-link type="success"><router-link to="/vr/robin/children">{{ username }} child 1</router-link></el-link>
    <el-link type="danger"><router-link to="/vr/robin/children2">{{ username }} child 2</router-link></el-link>
    <div>user name is <el-link type="success">{{ user }}</el-link></div>
    <router-view></router-view>
    <router-view name="children2"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vrouter',
    props: ['username'],
    computed: {
      user() {
        return this.$route.params.username
      }
    },
    beforeRouteEnter(to, from, next) {
      window.console.log('beforeRouteEnter', to, from)
      next()
    },
    beforeRouteUpdate(to, from, next) {
      window.console.log('beforeRouteUpdate', to, from)
      next()
    },
    beforeRouteLeave(to, from, next) {
      window.console.log('beforeRouteLeave', to, from)
      next()
    }
  }
</script>

<style lang="scss" scoped>

</style>