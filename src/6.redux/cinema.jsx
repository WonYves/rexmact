import React, { Fragment, useState, useEffect } from 'react';
import store from './store';
import  getCinemaListAciton  from './action/getCinemaListAciton'
const Cinema = () => {

  const [data, setData] = useState(store.getState().CinemalistReducer.list)

  useEffect(() => {
    if (store.getState().CinemalistReducer.list.length === 0) {
      store.dispatch(getCinemaListAciton())
    }else{
      console.log('store缓存');
    }
    let unsubscribe = store.subscribe(() => {
      console.log('cinema订阅');
      setData(store.getState().CinemalistReducer.list)
    })  

    return ()=> {
      unsubscribe()
    }
  }, [])

  return (
    <Fragment>
      <div>
        <ul>
          {
            data.map((item) => {
              return <li key={item.filmId}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </Fragment>
  )
}

export default Cinema
