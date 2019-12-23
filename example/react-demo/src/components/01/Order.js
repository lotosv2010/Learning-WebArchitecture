import React, { Component } from 'react'

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
                  <button onClick={() => this.props.minus(cart)}>-</button>
                  {cart.count}
                  <button onClick={() => this.props.add(cart)}>+</button>
                </td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
