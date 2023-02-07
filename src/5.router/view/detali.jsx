import React, { Fragment, useEffect } from 'react';
import qs from 'qs'
const De = (props) => {


  useEffect(() => {
    // 1.动态路由传参 
    // console.log(props.match.params) // 获取传递的键值对

    // 2. url接收
    // const {search} = props.location  // 将?id= **  解构出来
    // const {id} = qs.parse(search, { ignoreQueryPrefix: true })   // 使用qs插件格式化

    // 3.使用query进行传参接收
    // console.log(props.location.query) // 获取传递的键值对

    // 4.使用state进行传参接收
    // console.log(props.location.state)  // 获取传递的键值对

    // 5.sessionStorage传参
    let id = sessionStorage.getItem('id')
    console.log(id)
  }, [props])

  return (
    <Fragment>
      <div>de</div>
    </Fragment>
  )
}

export default De
