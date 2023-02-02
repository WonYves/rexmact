import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>Child
      {this.props.children}
      </div>
    )
  }
}

export default class App extends Component {
  render() {  
    return (
      <div>
        <Child />
        <div>2222</div>
      </div>
    )
  }
}
