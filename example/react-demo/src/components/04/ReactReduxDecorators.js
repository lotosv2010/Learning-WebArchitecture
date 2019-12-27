import React, { Component } from 'react';
import { Button } from 'antd'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../../store/count.redux'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

// const mapDispatchToProps = {
//   minus: () => ({type: 'DECREMENT'}),
//   add: () => ({type: 'INCREMENT'})
// }

const mapDispatchToProps = { add, minus, asyncAdd}

@connect(mapStateToProps, mapDispatchToProps)
class ReactRedux extends Component {
  render() {
    const { counter, minus, add, asyncAdd } = this.props
    return (
      <div>
        <p><Button type="danger" onClick={minus}>-</Button>{counter}<Button type="danger" onClick={asyncAdd}>async +</Button><Button type="danger" onClick={add}>+</Button></p>
      </div>
    )
  }
}

export default ReactRedux

