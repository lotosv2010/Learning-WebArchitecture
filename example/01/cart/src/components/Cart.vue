<template>
  <div class="cart">
    <h2>购物车</h2>
    <table>
      <thead>
        <tr>
          <th>勾选</th>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>数量</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in courseItem" :key="index">
          <td><input type="checkbox" v-model="item.isActive"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="minus(index)">-</button>
            {{ item.number }}
            <button @click="add(index)">+</button>
          </td>
          <td>{{ item.price * item.number }}</td>
        </tr>
        <tr>
          <td></td>
          <td>{{ `${isActiveCourse}/${allCourse}` }}</td>
          <td></td>
          <td></td>
          <td>{{ totalPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    courseItem: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isActiveCourse() {
      return this.courseItem.filter((item) => item.isActive).length
    },
    allCourse() {
      return this.courseItem.length
    },
    totalPrice() {
      let num = 0
      this.courseItem.forEach(item => {
        if(item.isActive) {
          num += item.number * item.price
        }
      })
      return num
    }
  },
  methods: {
    minus(id) {
      this.$emit('minusCourse', id)
    },
    add(id) {
      this.$emit('addCourse', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
