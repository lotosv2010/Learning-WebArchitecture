<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'GForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      GForm: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>