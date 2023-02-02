import React, { Component } from 'react'

export default class APP extends Component {
  render() {
    return (
      <div className='swiper-slide' style={{fontSize: 20}}>
        {this.props.children}
      </div>
    )
  }
}
