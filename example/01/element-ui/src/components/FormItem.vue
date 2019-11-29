<template>
  <div>
    <label for="">{{ label }}</label>
    <div>
      <slot></slot>
      <p v-show="errorStatus">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'GFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  inject: ['GForm'],
  data() {
    return {
      errorMessage: '',
      errorStatus: false
    }
  },
  mounted() {
    this.$on('validate', this.validator)
  },
  methods: {
    validator() {
      const rules = this.GForm.rules[this.prop]
      const value = this.GForm.model[this.prop]

      // 描述对象
      const descriptor = {
        [this.prop]: rules
      }
      const schema = new Schema(descriptor)
      schema.validate({
        [this.prop]: value
      },
      error => {
        this.errorMessage = error ? error[0].message : ''
        this.errorStatus = error ? true : ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>