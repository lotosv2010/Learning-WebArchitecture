<template>
  <div>
    <h1>{{ projectName }}</h1>
    <h2>{{ count }}</h2>
    <div><el-input-number v-model="num" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'vx',
  data() {
    return {
      num: 0
    }
  },
  computed: {
    ...mapGetters([
      'projectName',
      'count'
    ])
  },
  mounted() {
    this.setProjectName()
  },
  methods: {
    // setProjectName() {
    //   this.$store.dispatch('setProjectName')
    // },
    // handleChange(value) {
    //   // this.$store.dispatch('setCount', value)
    //   this.setCount(value)
    // },
    ...mapActions([
      'setProjectName'
    ]),
    ...mapActions({
      handleChange: 'setCount'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>