import React, { Component } from 'react'

export default class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: []
    }
  }

  componentDidMount() {
    this.setState({
      moments: [
        { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
      ]
    })
  }

  render() {
    return (
      <div>
        {this.state.moments.map((item, index) => (
          <Comment key={index} {...item} />
        ))}
      </div>
    )
  }
}


const Comment = React.memo(function(props) {
  console.log("render Comment");
  return (
    <div>
      <p>{props.body}---{props.author}</p>
    </div>
  )
})