import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Films from './films'
import Detail from './detail'
import Tabbar from './tabbar';
import store  from '../6.redux/store/index';
const Home = () => {

  const [isShow, setIsShow] = useState()

  useEffect(()=>{
    store.subscribe(() => {
      console.log('订阅', store.getState().show);
      setIsShow(store.getState().show)
    })
  }, [])

  return (
    <Fragment>
      <div>
        <BrowserRouter>
          <Route path="/films" component={Films}/>
          {/* 动态路由 */}{/* <Route path="/detail/:id" component={Detali}/> */}
          <Route path="/detail" component={Detail}/>
        </BrowserRouter>
        {isShow && <Tabbar></Tabbar>}
      </div>
    </Fragment>
  )
}

export default Home
