<template>
  <div id="ele">
    {{ model }}
    <g-form :model="model" :rules="rules">
      <g-form-item label="用户名" prop="username">
        <g-input v-model="model.username"/>
      </g-form-item>
      <g-form-item label="密码" prop="password">
        <g-input type="password" v-model="model.password"/>
      </g-form-item>
    </g-form>
  </div>
</template>

<script>
import GInput from './components/Input.vue'
import GFormItem from './components/FormItem.vue'
import GForm from './components/Form.vue'

export default {
  name: 'app',
  components: {
    GInput,
    GFormItem,
    GForm
  },
  data() {
    return {
      model: {
        username: 'robin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入活用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style>
#ele {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
