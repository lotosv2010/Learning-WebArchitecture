<template>
  <div>
    <input :type="type" :value="value" @input="OnInput">
  </div>
</template>

<script>
export default {
  name: 'GInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    OnInput(e) {
      const value = e.target.value
      this.$emit('input', value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
