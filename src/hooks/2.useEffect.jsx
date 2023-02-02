import React, { Fragment, useEffect, useState } from 'react';

const Home = () => {

  useEffect(() => {
    console.log(11);
  } , [])
  
  return (
    <Fragment>
      <div>Home</div>
    </Fragment>
  )
}

export default Home
