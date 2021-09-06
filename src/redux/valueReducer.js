const defaultState = {
  value : ''
}

const SET_VALUE = "SET_VALUE";
const REMOVE_VALUE = 'REMOVE_VALUE'

export const valueReducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_VALUE : 
      return {...state, value: action.payload}
    case REMOVE_VALUE : 
      return {...state, value: action.payload}
    default: return state 
  }
}

export const valueAction = (payload) => {
  return {type:SET_VALUE, payload}
}

export const removeAction = (payload) => {
  return {type:REMOVE_VALUE, payload}
}