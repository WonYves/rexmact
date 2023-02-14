import React, { Fragment, useState, useEffect } from 'react';
import store from './store';
const Cinema = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    console.log(store.getState());
  }, [])

  return (
    <Fragment>
      <div>Cinema</div>
    </Fragment>
  )
}

export default Cinema
