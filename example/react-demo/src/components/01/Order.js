import React, { Component } from 'react';
import { Button } from 'antd';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>{ this.props.title && this.props.title }</div>
        <table>
          <thead>
            <tr>
              <td>名称</td>
              <td>数量</td>
            </tr>
          </thead>
          <tbody>
            {this.props.carts.map(cart => 
              (<tr key={cart.id}>
                <td>{cart.name}</td>
                <td>
                  <Button type="danger" size="small" onClick={() => this.props.minus(cart)}>-</Button>
                  {cart.count}
                  <Button type="danger" size="small" onClick={() => this.props.add(cart)}>+</Button>
                </td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
