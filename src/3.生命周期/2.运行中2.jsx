import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myname: 'kerwin'
  }
  render() {
    console.log('更新了');
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xiaoming'
          })
        }}>11</button>
        {this.state.myname}
      </div>
    )
  }
                        // 新的属性 新的状态
  shouldComponentUpdate(nextProps, nextState){
    // return true //应该更新
    // return false //阻止render更新

    if(this.state.myname !== nextState.myname){
      return true
    }

    return false
  }
}
