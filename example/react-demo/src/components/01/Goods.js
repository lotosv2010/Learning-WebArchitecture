import React, { Component } from 'react';
import { Button, Input, List } from 'antd';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          id: 1,
          name: 'web'
        },
        {
          id: 2,
          name: 'python'
        }
      ],
      text: ''
    };
    this.addGood = this.addGood.bind(this);
  }

  textChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  // 不用箭头函数时：button 调用了 addGood方法，
  // 此时this指向button
  // 解决方案：
  // 在constructor绑定this：this.addGood = this.addGood.bind(this);
  addGood() {
    this.state.text && this.setState(pre => {
      // pre.goods.push({id: pre.goods.length + 1, name: pre.text})
      return {
        goods: [
          ...pre.goods,
          {
            id: pre.goods.length + 1,
            name: pre.text
          }
        ]}
    })
  }

  render() {
    return (
      <div>
        <List
          header={<div>{this.props.title && this.props.title}</div>}
          footer={<div><Input type="text" value={this.state.text} onChange={this.textChange} /><Button type="primary" size="small" onClick={this.addGood}>添加</Button></div>}
          bordered
          dataSource={this.state.goods}
          renderItem={good => (
            <List.Item key={good.id}>
              <List.Item.Meta title={good.name}></List.Item.Meta>
            </List.Item>
          )}
        ></List>
      </div>
    );
  }
}

export default Cart;