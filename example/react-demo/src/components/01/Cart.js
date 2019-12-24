import React, { Component } from 'react'
import Order from './Order';
import { Button, Input } from 'antd';

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
      text: '',
      carts: [
        {
          id: 1,
          name: 'web',
          count: 1
        }
      ]
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

  addToCart = (e, good) => {
    const newCarts = [...this.state.carts];
    const id = newCarts.findIndex(g => g.id === good.id);
    const item = newCarts[id]
    if(item) {
      newCarts.splice(id, 1, { ...item, count: item.count + 1});
    } else {
      newCarts.push({ ...good, count: 1})
    }
    // 更新
    this.setState({
      carts: newCarts
    })
  }

  add = (good) => {
    const newCarts = [...this.state.carts];
    const id = newCarts.findIndex(g => g.id === good.id);
    const item = newCarts[id]
    if(item) {
      newCarts.splice(id, 1, { ...item, count: item.count + 1});
    }
    // 更新
    this.setState({
      carts: newCarts
    })
  }
  
  minus = (good) => {
    const newCarts = [...this.state.carts];
    const id = newCarts.findIndex(g => g.id === good.id);
    const item = newCarts[id]
    if(item && item.count > 1) {
      newCarts.splice(id, 1, { ...item, count: item.count - 1});
    } else {
      newCarts.splice(id, 1)
    }
    // 更新
    this.setState({
      carts: newCarts
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.title && this.props.title}</p>
        <div><Input type="text" value={this.state.text} onChange={this.textChange} /><Button type="primary" size="small" onClick={this.addGood}>添加商品</Button></div>
        <ul>
          {this.state.goods.map(good => <li key={good.id}>{good.name}<Button type="primary" size="small" onClick={(e) => this.addToCart(e, good)}>添加到购物车</Button></li>)}
        </ul>
        <Order title="购物车" carts={this.state.carts} add={this.add} minus={this.minus} />
      </div>
    );
  }
}

export default Cart;