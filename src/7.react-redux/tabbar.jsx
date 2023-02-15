import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from  './tabbar.module.css'

const Tabbar = () => {

  const history = useHistory()

  const [data, setData] = useState([
    {
      name:'电影',
      path:'/films',
    },
    {
      name:'影院',
      path:'/cinema',
    },
    {
      name:'我的',
      path:'/center'
    }
  ])

  const handlePush = (item) =>{
    history.push(item.path)

  }

  return (
    <Fragment>
      <div>
        <ul className={styles.tabbar}> 
            {
              data.map((item,index)=> {
                return <li onClick={() => handlePush(item)} className={styles.tabbarli} key={index}>{item.name}</li>
              })
            }
        </ul>
      </div>
    </Fragment>
  )
}
 
export default Tabbar
