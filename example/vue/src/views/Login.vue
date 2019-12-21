<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"
      :immediate-validate="false"
      :options="options"
      @validate="validateHandler"
      @submit="submitHandler"
      @reset="resetHandler"
    ></cube-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        username: 'kaikeba',
        passwd: '123'
      },
      schema: {
        groups: [
          {
            legend: '用户登陆',
            fields: [
              {
                type: 'input',
                modelKey: 'username',
                label: '用户名',
                props: {
                  placeholder: '请输入用户名'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'passwd',
                label: '密码',
                props: {
                  placeholder: '请输入密码'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              }
            ]
          },
          {
            fields: [
              {
                type: 'submit',
                label: 'Submit'
              },
              {
                type: 'reset',
                label: 'Reset'
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      }
    }
  },
  mounted() {
    // this.login()
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      // window.console.log('submit', this.model)
      // {username: 'kaikeba', passwd: '123'}
      this.login(this.model)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      window.console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    resetHandler(e) {
      window.console.log('reset', e)
    },
    async login(user) {
      try {
        const res = await this.$store.dispatch('login', user)
        window.console.log(res)
        if(res.code) {
          this.message('登陆成功', 'correct')
          this.$router.push('/')
        } else {
          this.message(res.message, 'error');
        }
      } catch (error) {
        // 有错误发生或者登录失败
        const msg = error.message || error.response.data.message || "登录失败";
        this.message(msg, 'error');
        window.console.error(error)
      }
    },
    message(msg, type) {
      // 有错误发生或者登录失败
      const toast = this.$createToast({
        time: 2000,
        txt: msg,
        type: type
      });
      toast.show();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>