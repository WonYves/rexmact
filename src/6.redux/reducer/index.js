

const reducer = (prevState = {
  show: true 
}, action) => {
  let newState = {...prevState}
  switch(action.type){
    case  'kerwind' :
     newState.show = false
     return newState
    case  'winkerd' :
     newState.show = true
     return newState
    default :
    return prevState
  }

}

export default reducer