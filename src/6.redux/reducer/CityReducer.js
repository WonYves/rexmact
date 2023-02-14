

const CityReducer = (prevState = {
  cityname:'成都'
}, action) => {
  let newState = {...prevState}
  switch(action.type){
    case  'citychange' :
     newState.cityname = action.payload
     return newState
    default :
    return prevState
  }

}

export default CityReducer