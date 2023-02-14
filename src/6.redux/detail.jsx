import React, { Fragment, useEffect, useState } from 'react';
import store  from '../6.redux/store/index';
import {hide, show} from './action/TabbarActionCreator'

const Detali = () => {

  const [data, setData] = useState([])


  useEffect(()=>{
    store.dispatch(hide())
    return () => {
      store.dispatch(show())
    }
  }, [])

  return (
    <Fragment>
      <div>Detali</div>
    </Fragment>
  )
}

export default Detali
