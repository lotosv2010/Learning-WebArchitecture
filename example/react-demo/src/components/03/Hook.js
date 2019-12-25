import React, { useState, useEffect } from 'react';
import { Button, Input, List } from 'antd'

// 自定义hook是一个函数，名称用“use"开头，函数内部可以调用其他钩子
function useAge() {
  const [age, setAge] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAge(20)
    }, 2000)
  })
  return age;
}

export default function Hook(){
  const [count, setCount] = useState(0);

  // 副作用钩子会在每次渲染时都执行
  useEffect(() => {
    document.title = `您点击了${count}次`;
  },[count]);

  //   如果仅打算执行一次，传递第二个参数为[]
  //   componentDidMount
  useEffect(() => {
    console.log('useEffect');
  },[]);

  // 多个状态
  const age = useAge();
  const [fruit, setFruit] = useState('banana');
  const [fruits, setFruits] = useState(['apple', 'orange'])
  const [input, setInput] = useState('')

  return (
    <div>
      <p>You clicked {count} times<Button type="primary" onClick={() => setCount(count + 1)}>点击</Button></p>
      <p>年龄： {age ? age : 'loading...'}</p>
      <p>选择的水果：{fruit}</p>
      <p>
        <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button type="primary" onClick={() => setFruits([...fruits, input])}>新增水果</Button>
      </p>
      <div>
        <List
          bordered
          dataSource={fruits}
          renderItem={f => (
            <List.Item key={f} onClick={() => setFruit(f)}>
              <List.Item.Meta title={f}></List.Item.Meta>
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  )
}