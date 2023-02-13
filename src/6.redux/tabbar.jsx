import React, { Fragment, useState } from 'react';
import styles from  './tabbar.module.css'
const Tabbar = () => {

  const [data, setData] = useState(['电影','影院','我的'])

  return (
    <Fragment>
      <div>
        <ul className={styles.tabbar}> 
          {
            data.map((item,index)=> {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    </Fragment>
  )
}

export default Tabbar
