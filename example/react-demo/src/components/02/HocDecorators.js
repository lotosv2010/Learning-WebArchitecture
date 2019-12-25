import React, { Component } from 'react'


const withFirst = (Comp) => {
  console.log("do something");
  // 获取name,name可能来自于接口或其他手段
  const name = 'hoc';
  return class extends Component {
    componentDidMount() {}
    render() {
      return <Comp {...this.props} name={name} />
    }
  }
}

const withLog = Comp => {
  console.log(Comp.name + "渲染了");
  return props => <Comp {...props} />
}

// 高阶组件装饰器写法
// https://www.jianshu.com/p/bddb6d97ccd4
@withLog
@withFirst
@withLog
class First extends Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    )
  }
}

export default class HocDecorators extends Component {
  render() {
    return (
      <div>
        <First stage="React" />
      </div>
    )
  }
}
