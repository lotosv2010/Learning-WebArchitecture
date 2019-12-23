import React, { Component } from 'react'

export function CompTypeFunc(props) {
return <div>hello, { props.name }</div>
}

export default class CompType extends Component {
  render() {
    return (
      <div>
        <div>hello, { this.props.name }</div>
      </div>
    )
  }
}
