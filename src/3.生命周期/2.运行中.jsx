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
  componentDidUpdate(prevprpos, prevstate){
    console.log(document.getElementById('myname').innerHTML)
    console.log(prevprpos, prevstate);
    // 更新前的属性 更新前的状态
  }
}
