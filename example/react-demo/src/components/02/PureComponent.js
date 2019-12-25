import React, { Component } from 'react'

export default class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        moments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
        ]
      })
    }, 1000)
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


// class Comment extends React.PureComponent { // 报错
class Comment extends React.Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps.body === this.props.body &&
      nextProps.author === this.props.author) {
      return false;
    }
    return true;
  }

  render() {
    console.log('render comment');
    return (
      <div>
        <p>{this.props.body}---{this.props.author}</p>
      </div>
    )
  }
}