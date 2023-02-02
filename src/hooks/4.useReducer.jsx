import React, { Fragment, useState, useReducer } from 'react';
import { act } from 'react-dom/test-utils';

// 处理函数
const reducer = (prevState, aciton) => {

  let newState = { ...prevState }
 
  switch (aciton.type) {
    case 'kw':
      newState.count--
      return newState
    case 'wk':
      newState.count++
      return newState
    default:
      return
  }
}

// 外部的对象  
const intialState = {
  count: 0,
}

const Home = () => {

  const [state, dispath] = useReducer(reducer, intialState)

  return (
    <Fragment>
      <div>
        <button onClick={() => {
          dispath({
            type: "kw",

          })
        }}>-</button>
        {state.count}
        <button onClick={() => {
          dispath({
            type: "wk",

          })
        }}>+</button>
      </div>
    </Fragment>
  )
}

export default Home
