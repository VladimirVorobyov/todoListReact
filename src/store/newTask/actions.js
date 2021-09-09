export const SET_VALUE = "SET_VALUE";
export const REMOVE_VALUE = 'REMOVE_VALUE';

export const valueAction = (payload) => {
  return {type:SET_VALUE, payload}
}

export const removeAction = (payload) => {
  return {type:REMOVE_VALUE, payload}
}