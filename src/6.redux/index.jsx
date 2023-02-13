import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Films from './films'
import Detail from './detail'
import Tabbar from './tabbar';
const Home = () => {

  return (
    <Fragment>
      <div>
        <BrowserRouter>
          <Route path="/films" component={Films}/>
          {/* 动态路由 */}{/* <Route path="/detail/:id" component={Detali}/> */}
          <Route path="/detail" component={Detail}/>
        </BrowserRouter>
        <Tabbar></Tabbar>
      </div>
    </Fragment>
  )
}

export default Home
