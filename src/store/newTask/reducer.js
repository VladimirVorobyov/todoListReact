import { SET_VALUE, REMOVE_VALUE } from './actions';
const defaultState = {
  value : ''
}

export const valueReducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_VALUE : 
      return {...state, value: action.payload}
    case REMOVE_VALUE : 
      return {...state, value: action.payload}
    default: return state 
  }
}

