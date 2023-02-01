import axios from 'axios'
import React, { Component } from 'react'

export default class cinema extends Component {

  constructor() {
    super()
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8076729',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16717855001049208970805249","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(
      res => {
        console.log(res.data.data.films);
      }
    )
  }
  render() {
    return (
      <div>cinema</div>
    )
  }
}
