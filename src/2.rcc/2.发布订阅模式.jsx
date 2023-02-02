import React, { Component } from 'react'

export default class APP extends Component {
  render() {
    return (
      <div>APP</div>
    )
  }
}

// 调度中心
const bus = {

  list: [],
  // 订阅
  subscribe(callback){
    this.list.push(callback)
  },
  
  // 发布
  pulish(text){
    // 遍历所有的list 将回调函数执行 
    this.list.forEach((callback) => {
      callback && callback(text)
    })
  }

}

// 订阅者
bus.subscribe((value)=>{
  console.log(111111, value);
})

bus.subscribe((value)=>{
  console.log(2222, value);
})

// 发布者
setTimeout(() => {
  bus.pulish('kerwin')
}, 1000)