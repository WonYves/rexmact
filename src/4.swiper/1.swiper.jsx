import React, { Component } from 'react'
import Swiper, {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination])
export default class App extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    new Swiper(".swiper", {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: 2000,
    })
  }
  render() {
    return (
      <div>
        <div className="swiper" style={{height : '300px', background: 'pink'}}>
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
