<template>
  <div class="about">
    <k-header title="关于">
      <i class="cubeic-tag"></i>
    </k-header>
    <h1>this is about page</h1>
    <cube-button :primary="true" @click="logout">注销</cube-button>
  </div>
</template>
<script>
// import axios from 'axios'
import KHeader from '@/components/Header.vue';
export default {
  components: {
    KHeader
  },
  created(){
    // 获取用户信息
    // axios.get('/api/userinfo')
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
