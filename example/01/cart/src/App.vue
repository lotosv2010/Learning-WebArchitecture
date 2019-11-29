<template>
  <div id="app">
    <h1>开课吧-购物车</h1>
    <hr>
    <h2>添加课程</h2>
    <div>
      <label for="">课程名称</label>
      <input v-model="form.name" type="text">
    </div>
    <div>
      <label for="">课程价格</label>
      <input v-model="form.price" type="text">
    </div>
    <div>
      <button @click="addCourse">添加课程到列表</button>
    </div>
    <hr>
    <table>
      <thead>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in courseList" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><button @click="addToCart(item.id)">添加到购物车</button></td>
        </tr>
      </tbody>
    </table>
    <hr>
    <cart :courseItem="courseItem" @minusCourse="minus" @addCourse="add" />
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    Cart
  },
  data() {
    return {
      form: {
        course: '',
        price: ''
      },
      courseList: [
        {
          id: 0,
          name: 'web全栈开发架构师',
          price: 1000
        },
        {
          id: 1,
          name: 'Python人工智能',
          price: 1000
        }
      ],
      courseItem: []
    }
  },
  methods: {
    addCourse() {
      this.courseList.push({
        id: this.courseList.length,
        name: this.form.name,
        price: this.form.price
      })
    },
    addToCart(id) {
      const item = this.courseList.find((item) => item.id === id)
      const hasCourse = this.courseItem.find((course) => course.id === item.id)
      if(hasCourse) {
        hasCourse.number += 1
      } else {
        this.courseItem.push({
          ...item,
          number: 1,
          isActive: true
        })
      }
    },
    minus(index) {
      const num = this.courseItem[index].number
      if(num > 1) {
        this.courseItem[index].number -= 1
      } else {
        this.courseItem.splice(index, 1)
      }
    },
    add(index) {
      // this.courseItem[id].number += 1
      this.courseItem[index].number += 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
