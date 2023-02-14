import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Films from './films'
import Detail from './detail'
import Cinema from './cinema'
import Tabbar from './tabbar';
import store  from '../6.redux/store/index';
const Home = () => {

  const [isShow, setIsShow] = useState(store.getState().TabbarReducer.show)

  useEffect(()=>{
    store.subscribe(() => {
      console.log('订阅', store.getState()); 
      setIsShow(store.getState().TabbarReducer.show)
    })
  }, [])

  return (
    <Fragment>
      <div>
        <BrowserRouter>
          <Route path="/films" component={Films}/>
          <Route path="/cinema" component={Cinema}/>
          {/* 动态路由 */}{/* <Route path="/detail/:id" component={Detali}/> */}
          <Route path="/detail" component={Detail}/>
          {isShow && <Tabbar></Tabbar>}
        </BrowserRouter>
      </div>
    </Fragment>
  )
}

export default Home
