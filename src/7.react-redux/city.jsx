import React, { Fragment, useState } from 'react';
import { city } from './action/TabbarActionCreator'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function City(props) {
  const { city } = props
  const [citylist] = useState(['北京', '深圳', '成都', '杭州'])

  const history = useHistory()

  const handleChange = (item) => {
    city(item)
    history.goBack()
  }

  return (
    <>
      <div>
        <ul>
          {citylist.map((item, index) => {
            return <li onClick={handleChange.bind(null, item)} key={index}>{item}</li>
          })}
        </ul>
      </div>
    </>
  )
}

const mapChangeCity = {
  city
}

export default connect(null, mapChangeCity)(City)