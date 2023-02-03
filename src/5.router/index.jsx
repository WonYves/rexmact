import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Films from './view/film'
import Detali from './view/detali'
const Home = () => {

  return (
    <Fragment>
      <div>
        <HashRouter>
          <Route path="/films" component={Films}/>
          {/* 动态路由 */}
          {/* <Route path="/detail/:id" component={Detali}/> */}
          <Route path="/detail" component={Detali}/>
        </HashRouter>
      </div>
    </Fragment>
  )
}

export default Home
