import React, { Component } from 'react';
import { Button } from 'antd'
import store from '../../store/redux'

export default class Redux extends Component {
  render() {
    return (
      <div>
        <p><Button type="danger" onClick={() => store.dispatch({type: 'DECREMENT'})}>-</Button>{store.getState()}<Button type="danger" onClick={() => store.dispatch({type: 'INCREMENT'})}>+</Button></p>
      </div>
    )
  }
}
