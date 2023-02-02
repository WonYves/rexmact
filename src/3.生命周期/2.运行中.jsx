import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myname : 'kerwin'
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xiaoming'
          })
        }}>click</button>
        <div id='myname'>{this.state.myname}</div>
      </div>
    )
  }

  UNSAFE_componentWillUpdate(){
    console.log(document.getElementById('myname').innerHTML)
  }
  componentDidUpdate(){
    console.log(document.getElementById('myname').innerHTML)
  }
}
