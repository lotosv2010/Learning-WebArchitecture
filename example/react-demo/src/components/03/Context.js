import React, { useContext } from 'react';

// 1.创建上下文
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

// Consumer消费
function Child(props) {
  return <div>Child: {props.foo}</div>
}

// 使用hook消费
function Child2() {
  const context = useContext(MyContext);
  return  <div>Child2: {context.foo}</div>
}

class Child3 extends React.Component {
  // 设置静态属性通知编译器获取上下文中数据并赋值给this.context
  static contextType = MyContext
  render() {
    return(
      <div>Child3: {this.context.foo}</div>
    )
  }
}

// 使用class指定静态contextType
export default function Context() {
  return(
    <div>
      <Provider  value={{foo: 'bar'}}>
        {/* 消费方法1：Consumer */}
        <Consumer>
          {value => <Child {...value} />}
        </Consumer>
        {/* 消费方法2：hook */}
        <Child2 />
        {/* 消费方法3：contextType */}
        <Child3 />
      </Provider>
    </div>
  )
}