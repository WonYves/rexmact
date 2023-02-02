import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: 'kerwin'
  }
  componentDidMount(){
    this.setState({
      name: 'xiaoming'
    })
    console.log(this.state.name);
  }
  constructor(){
    super()
    console.log(this.state.name);
  }
  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}
