<template>
  <div class="page-one">
    <h1>{{ msg }}</h1>
    <h2><span>姓名</span><span>{{ username }}</span></h2>
    <!-- 方式一 -->
    <!-- <div><input v-model="feature" type="text" name="" id="" placeholder="输入一个新特性" @keydown.enter="addFeatures"></div> -->
    
    <!-- 方式二 -->
    <div><input type="text" name="" id="" placeholder="输入一个新特性" @keydown.enter="addFeatures"></div>
    <ul>
      <li v-for="(item,index) in features" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageOne extends Vue{
  @Prop() private msg!: string;
  @Prop({ default: 'robin', type: String }) private username?: string;

  // 普通的属性相当于组件data
  private features = ['静态类型', '编译']
  private feature:string = ''

  // 生命周期函数
  created() {
    this.features.push('created');
  }

  // 相当于methods
  addFeatures(e: any) {
    console.log(e)
    // 方式一
    // this.features.push(this.feature);
    // this.feature = ''

    // 方式二
    this.features.push(e.target.value)
    e.target.value = ''
  }
}
</script>

<style lang="scss" scoped>
.page-one {
  li {
    list-style: none;
  }
}
</style>