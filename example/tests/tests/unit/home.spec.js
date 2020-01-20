import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Home from '@/components/Home.vue'

describe('测试home组件', () => {
  it('测试初始的data', () => {
    expect(Home.data().message).toBe('this is home')
  })
  it('测试完毕后，created生命周期后的数据', () => {
    let vm = new Vue(Home).$mount()
    expect(vm.message).toBe('created')
  })
  it('测试按钮点击后，message的改变', () => {
    let wrapper = mount(Home)
    // 模拟点击
    wrapper.find('.btn').trigger('click')
    expect(wrapper.vm.message).toBe('click message1')
  })
})