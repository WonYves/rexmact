import React, { Fragment, useState } from 'react'
import { fromJs } from 'immutable'


const ImMap = () => {

  const [data] = useState({name: 'kerwin',city: ['beijin', 'dalian', 'shanghai']})
  return (
    <Fragment>
      <div>
        <ul>
          {data.city.map((item, index) => <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    </Fragment>
  )
}

export default ImMap
