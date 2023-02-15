import React, { Fragment, useState } from 'react'
import { fromJs } from 'immutable'


const ImMap = () => {

  const [data] = useState({name: 'kerwin',city: ['beijin', 'dalian', 'shanghai']})
  // setIn(['name'], 'kerwin')
  // undateIn(['city'], (list) => {
  //   list.splice(index,1)
  // })
  return (
    <Fragment>
      <div>
        <ul>
          {data.city.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </Fragment>
  )
}

export default ImMap
