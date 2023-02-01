import React, { Component } from 'react'
import '../1.css/1.卖座.css'
import Film from './maizuocomponent/film'
import Cinema from './maizuocomponent/cinema'
import Center from './maizuocomponent/center'


export default class App extends Component {

  state = {
    count: 0 ,
    list: [
      {
        id: 1,
        text: '电影',
      },
      {
        id: 2,
        text: '影院',
      },
      {
        id: 3,
        text: '我的',
      },
    ]
  }


  render() {
    return (
      <div> 
        {this.thereswitch()}
        <ul>
          {
            this.state.list.map((item, index) => {
             return(
              <li
               key={item.id} 
               className={this.state.count === index ? 'active' : null}
               onClick={this.handleClick.bind(null, index)}
               >{item.text}</li>
             )
            })
          }
        </ul>
      </div>
    )
  }

  thereswitch = () => {
    switch(this.state.count){
      case 0 :
        return <Film></Film> 
      case 1 :
        return <Cinema></Cinema> 
      case 2 :
        return <Center></Center> 
      default :
      return null
    }
  }

  handleClick = (index) => {
   this.setState({
    count: index
   })
  }
}
