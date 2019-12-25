import React, { Component } from 'react'


const withFirst = (Comp) => {
  console.log("do something");
  const name = 'hoc';
  const NewFirst = (props) => {
    return <Comp {...props} name={name} />
  }
  return NewFirst;
}

const withLog = Comp => {
  console.log(Comp.name + "渲染了");
  return props => <Comp {...props} />
}

const First = (props) => {
  console.log("do something");
  return (
    <div>
      {props.stage} - {props.name}
    </div>
  )
}

// 高阶链式调用
const Second = withLog(withFirst(withLog(First)))

export default class HocChaining extends Component {
  render() {
    return (
      <div>
        <Second stage="React" />
      </div>
    )
  }
}
