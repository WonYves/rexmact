import React, { Fragment, useEffect, useState } from 'react';
import store  from '../6.redux/store/index';

const Detali = () => {

  const [data, setData] = useState([])


  useEffect(()=>{
    store.dispatch({
      type: 'kerwind'
    })
    return () => {
      store.dispatch({
        type: 'winkerd'
      })
    }
  }, [])

  return (
    <Fragment>
      <div>Detali</div>
    </Fragment>
  )
}

export default Detali
