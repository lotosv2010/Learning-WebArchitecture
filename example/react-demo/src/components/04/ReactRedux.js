import React from 'react';
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

function ReactRedux({counter, add, minus, asyncAdd}) {
  return (
    <div>
      <p><Button type="danger" onClick={minus}>-</Button>{counter}<Button type="danger" onClick={add}>+</Button><Button type="danger" onClick={asyncAdd}>async +</Button></p>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactRedux) // 高阶组件

