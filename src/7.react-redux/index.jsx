import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Films from './films'
import Detail from './detail'
import Cinema from './cinema'
import Center from './center'
import Tabbar from './tabbar';
import { connect } from 'react-redux';
const Home = (props) => {

  useEffect(()=>{
    console.log(props);
  }, [props])

  return (
    <Fragment>
      <div>
        <BrowserRouter>
          <Route path="/films" component={Films}/>
          <Route path="/cinema" component={Cinema}/>
          <Route path="/center" component={Center}/>
          {/* 动态路由 */}{/* <Route path="/detail/:id" component={Detali}/> */}
          <Route path="/detail" component={Detail}/>
          {props.isShow && <Tabbar></Tabbar>}
        </BrowserRouter>
      </div>
    </Fragment>
  )
}

// 映射
const mapStateStore = (state) => {
  return {
    a:1,
    b:2,
    isShow: state.TabbarReducer.show
  }
}

export default connect(mapStateStore)(Home)
