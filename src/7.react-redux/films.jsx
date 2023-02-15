import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {

  const history = useHistory()
  const [data, setData] = useState([
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
    {
      id: 3,
      name: 'c',
    },
    {
      id: 4,
      name: 'd',
    },
    {
      id: 5,
      name: 'e',
    },
    {
      id: 6,
      name: 'f',
    },
  ])

  const handlePush = (record) => {
    // history.push(`detail/${record.id}`) //动态路由传参
    history.push('/detail?id=' + record.id)   // 通过url传参 props.location.search
    // history.push({pathname: '/detail' , query: {id :record.id}})  // 通过query进行传参 props.location.query
    // history.push({pathname: '/detail', state: {id: record.id}}) // 通过state进行传参 props.location.state
    // history.push('/detail')
    // sessionStorage.setItem('id', record.id)
  }

  return (
    <Fragment>
      <div>
        <ul>
          {
            data.map(item => <li
              onClick={handlePush.bind(null, item)}
              key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    </Fragment>
  )
}

export default Home
