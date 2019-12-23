import React, { Component } from 'react'

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
        <p>{this.props.title && this.props.title}</p>
        <div><input type="text" value={this.state.text} onChange={this.textChange} /><button onClick={this.addGood}>添加</button></div>
        <ul>
          {this.state.goods.map(good => <li key={good.id}>{good.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Cart;