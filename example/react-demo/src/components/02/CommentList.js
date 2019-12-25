import React, { Component } from 'react'

// 容器组件
export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    // setInterval(() => {
    setTimeout(() => {
      this.setState({
        comments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
        ]
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.comments.map((item, index) => (
          <Comment key={index} {...item} />
        ))}
      </div>
    )
  }
}

// 展示组件
// 普通组件，多次调用
function Comment(props) {
  console.log('render Comment');
  return(
    <div>
      <p>{props.body} --- {props.author}</p>
    </div>
  )
}
