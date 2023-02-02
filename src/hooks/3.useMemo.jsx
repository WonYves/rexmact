import React, { Fragment, useState, useClaback, useMemo } from 'react';

const Home = () => {

  const [data, setData] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleAdd = () => {
    setList([...list, data])
    setData('')
  }

  const handleDelete = useClaback((index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }, [list])

  return (
    <Fragment>
      <div>
        <input onChange={handleChange} value={data} type="text" />
        <button onClick={handleAdd}>add</button>
        {
          list.map((item, index) => {
            return (
              <li key={index}>{item} <button onClick={handleDelete.bind(null, index)}>del</button></li>
            )
          })
        }
       { list.length === 0 ? <div>待办事项空空如也</div> : null}
      </div>
    </Fragment>
  )
}

export default Home
