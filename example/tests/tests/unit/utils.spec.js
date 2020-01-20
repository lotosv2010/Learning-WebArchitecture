
import add from '@/utils/index'
describe('测试加法函数', () => {
  // 分组
  it('一个具体的功能测试，测试数字相加', () => {
    expect(add(1,2)).toBe(3)
  })
  it('一个具体的功能测试，测试数字和字符串相加', () => {
    expect(add(1, '2')).toBe('12')
  })
  it('一个具体的功能测试，测试数字字符串相加', () => {
    expect(add('1', '2')).toBe('12')
  })
})

