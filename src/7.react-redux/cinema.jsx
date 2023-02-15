import React, { Fragment, useState, useEffect } from 'react';
import  getCinemaListAciton  from './action/getCinemaListAciton'
import { connect } from 'react-redux';
const Cinema = (props) => {

  const {list, getCinemaListAciton} = props

  useEffect(() => {
    if (list.length === 0) {
     getCinemaListAciton()
    }else{
      console.log(list);
    }
  }, [list, getCinemaListAciton])

  return (
    <Fragment>
      <div>
        <ul>
          {
            list.map((item) => {
              return <li key={item.filmId}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </Fragment>
  )
}

const mapdispatchList = {
  getCinemaListAciton
}

const mapgetCinemaList = (state) => {
  return {
    list: state.CinemalistReducer.list
  }
} 

export default connect(mapgetCinemaList, mapdispatchList)(Cinema)
