<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button @click="onClick" class="btn">点我</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: "this is home"
    }
  },
  created() {
    this.message = 'created'
  },
  methods: {
    onClick() {
      this.message = 'click message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
