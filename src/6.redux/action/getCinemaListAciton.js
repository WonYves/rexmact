import axios from "axios"


// redux-thunk风格
// const getCinemaListAciton = () => {
  
//   return (dispatch) => {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8076729',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16717855001049208970805249","bc":"310100"}',
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     }).then(res => {
//         dispatch({
//           type:'cinemaList',
//           payload: res.data.data.films
//         })
//       })
//   }
// } 


// redux-promise
async function getCinemaListAciton(){

  let list = await axios({
          url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8076729',
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16717855001049208970805249","bc":"310100"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        }).then(res => {
            return ({
              type:'cinemaList',
              payload: res.data.data.films
            })
          })

  return list
}

export default getCinemaListAciton