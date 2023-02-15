
export const hide = () => {
  return {
    type: 'kerwind'
  }
}

export const show = () => {
  return {
    type: 'winkerd'
  }
}

export const city = (payload) => {
  return{
    type: 'citychange',
    payload
  }
}