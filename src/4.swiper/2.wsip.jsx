import Wswiper from './1.swiper'

import React, { Component } from 'react'

export default class APP extends Component {

  state = {
    list: ['1', '2' ,'3']
  }

  render() {
    return (
      <div>
        <Wswiper>
            {
              this.state.list.map(item => {
                return <div className='swiper-slide'>
                  {item}
                </div>
              })
            }
        </Wswiper>
      </div>
    )
  }
}
