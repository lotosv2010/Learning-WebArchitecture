import React, { Component } from 'react'
import moment from 'moment'

export default class Clock extends Component {
  state = {
    date: moment(),
    count: 1
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      // 批量执行
      // this.setState(object, callback) // 传递一个对象
      this.setState({
        date: moment()
      })

      // this.setState(function, callback) // 传递一个函数
      this.setState(pre => ({
        count: pre.count + 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <p>{this.state.date.format('YYYY-MM-DD HH:mm:ss')}</p>
        <p> {this.state.count}</p>
      </div>
    )
  }
}
