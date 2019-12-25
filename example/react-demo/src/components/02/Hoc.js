import React, { Component } from 'react'

const withFirst = (Comp) => {
  console.log("do something");
  const name = 'hoc';
  const NewFirst = (props) => {
    return <Comp {...props} name={name} />
  }
  return NewFirst;
}

const First = (props) => {
  return (
    <div>
      {props.stage} - {props.name}
    </div>
  )
}

// 高阶组件 - 函数组件
const Second = withFirst(First);

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <Second stage="React" />
      </div>
    )
  }
}
