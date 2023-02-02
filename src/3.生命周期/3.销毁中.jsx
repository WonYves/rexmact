import React, { Component } from 'react'


class Child extends Component {
  render() {
    return (
      <div>111</div>
    )
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(111);
    }, 1000);
  }

  componentWillUnmount() {
    console.log('有的没的');

    clearInterval(this.timer)
  }

}

export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}>Show</button>
        {this.state.isShow && <Child></Child>}
      </div>
    )
  }

}
