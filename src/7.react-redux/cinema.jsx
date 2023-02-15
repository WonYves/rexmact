import React, { Fragment, useState, useEffect } from 'react';
import getCinemaListAciton from './action/getCinemaListAciton'
import { city } from './action/TabbarActionCreator'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Cinema = (props) => {

  const { list, getCinemaListAciton, cityname } = props
  const history = useHistory()

  useEffect(() => {
    if (list.length === 0) {
      getCinemaListAciton()
    } else {
      console.log(cityname);
    }
  }, [list, getCinemaListAciton, cityname])


  const handlePush = () => {
    history.push('/city')
  }

  return (
    <Fragment>
      <div>
        <div onClick={handlePush}>{cityname}</div >
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
  getCinemaListAciton,
  city
}

const mapgetCinemaList = (state) => {
  return {
    list: state.CinemalistReducer.list,
    cityname: state.CityReducer.cityname
  }
}

export default connect(mapgetCinemaList, mapdispatchList)(Cinema)
