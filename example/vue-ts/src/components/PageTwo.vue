<template>
  <div class="page-one">
    <h1>{{ msg }}</h1>
    <h2><span>姓名</span><span>{{ username }}</span></h2>
    <div><input type="text" name="" id="" placeholder="输入一个新特性" @keydown.enter="addFeature"></div>
    <ul>
      <li v-for="(item,index) in features" :key="index">{{ item.name }}</li>
      <li>特性数量：{{featureCount}}</li>
    </ul>
    <div><button @click="delFeature">删除第一个</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'

export class Feature {
  constructor(public id: number, public name: string, public version: string) {}
}

interface Result<T>{
  success: 0 | 1,
  data: T[]
}

function getData<T>(): Promise<Result<T>> {
  const data: any[] = [
    { id: 1, name: "类型注解", version: "2.0" },
    { id: 2, name: "编译型语言", version: "1.0" }
  ];
  return Promise.resolve({ success: 1, data } as Result<T>);
}

@Component
export default class PageTwo extends Vue{
  @Prop() private msg!: string;
  @Prop({ default: 'jack', type: String }) private username?: string;

  // 普通的属性相当于组件data
  private features: Feature[] = [];

  // 生命周期函数
  async created() {
    const res = await getData<Feature>();
    this.features = res.data
  }

  // 计算属性
  get featureCount(): number {
    return this.features.length;
  }

  @Watch('msg')
  onRouteChange(val: string, oldVal: string) {
    console.log(val, oldVal)
  }

  @Emit()
  private addFeature(e: any) {
    // 若没有返回值形参将作为事件参数
    const feature = {
      name: e.target.value,
      id: this.features.length + 1,
      version: '1.0'
    }
    this.features.push(feature);
    e.target.value = '';
    return feature; // 返回值作为事件参数
  }

  // 相当于methods
  delFeature(e: any) {
    console.log(e)
    this.features.shift()
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