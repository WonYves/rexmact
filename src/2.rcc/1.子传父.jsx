import React, { Component } from 'react'


class Navbar extends Component {

  render() {
    return <div style={{ background: 'pink' }}>
      <button onClick={this.handleClick}>click</button>
      <span>navbar</span>
    </div>
  }


  handleClick = () => {
    this.props.event()
  }
}

class Sidebar extends Component {
  render() {
    return <div style={{ background: 'gray', width: 200 }}>
      <ul>
        <li>silderbar</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
    </div>
  }
}

export default class App extends Component {
  state = {
    isShow: false
  }
  render() {
    return (
      <div>
        <Navbar event={this.handleIsShow}></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }

  handleIsShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
