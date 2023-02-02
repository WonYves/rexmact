import Wswiper from './1.swiper'
import WswiperItem from './1.swiperItem'
import React, { Component } from 'react'
import axios from 'axios'
export default class APP extends Component {

  state = {
    list: ['1', '2' ,'3'],
    datalist :[] 
  }

  componentDidMount(){
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8076729',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16717855001049208970805249","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
        console.log(res.data.data.films);
        this.setState({
          datalist: res.data.data.films
        })
      }
    )
  }

  render() {
    return (
      <div>
        <Wswiper>
            {
              this.state.datalist.map((item, index) => {
                return <WswiperItem key={index}>
                  <img src={item.poster} alt={item.name} />
                </WswiperItem>
              })
            }
        </Wswiper>
      </div>
    )
  }
}
