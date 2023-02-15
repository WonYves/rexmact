import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store  from '../7.react-redux/store';
import {hide, show} from './action/TabbarActionCreator'
const Detali = (props) => {

  const [data, setData] = useState([])


  useEffect(()=>{
    props.hide()
    return () => {
      props.show()
    }
  }, [])

  return (
    <Fragment>
      <div>Detali</div>
    </Fragment>
  )
}

// 使用对象传递两个函数
// 提前封装好映射的方法
const mapDispatch =  {
    hide,
    show
}

export default  connect(null,mapDispatch)(Detali)
