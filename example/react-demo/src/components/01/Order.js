import React, { Component } from 'react';
import { Button/*, Table*/ } from 'antd';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '数量',
          dataIndex: 'count',
          key: 'count',
          render: val => (
            <div>
              <Button type="danger" size="small" onClick={() => this.props.minus(val)}>-</Button>
              {val}
              <Button type="danger" size="small" onClick={() => this.props.add(val)}>+</Button>
            </div>
          )
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <div>{ this.props.title && this.props.title }</div>
        {/* <Table columns={this.state.columns} dataSource={this.props.carts} /> */}
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
