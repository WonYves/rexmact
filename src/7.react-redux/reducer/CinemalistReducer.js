

const CinemalistReducer = (prevState = {
  list:[]
}, action) => {
  let newState = {...prevState}
  switch(action.type){
    case  'cinemaList' :
     newState.list = action.payload
     return newState
    default :
    return prevState
  }
}

export default CinemalistReducer