import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css';

export default class App extends Component {

  state = {
    list: ['111', '222', '333']
  }

  componentDidMount(){
    const swiper = new Swiper(".swiper")
  }
  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            {
              this.state.list.map(item => {
                return (
                  <div className='swiper-slide' 
                  key={item}>{item}</div>
                )
              })  
            }
          </div>
        </div>
      </div>
    )
  }
}
