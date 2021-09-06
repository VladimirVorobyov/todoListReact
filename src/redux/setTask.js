import { nanoid } from 'nanoid';

const defaultState = {
  tasks :[
    {id:nanoid(), title:"HTML", done:true},
    {id:nanoid(), title:"CSS", done:true},
    {id:nanoid(), title:"JS", done:false},
    {id:nanoid(), title:"React", done:false},
]} 
const ADD_TASK = 'ADD_TASK';
const FILTER_TASK = 'FILTER_TASK';
const DONE_TASK = 'DONE_TASK';

export const setTask = (state = defaultState, action) => {
  switch(action.type){
    case ADD_TASK : 
     return {...state, tasks:[...state.tasks, action.payload]};
    case FILTER_TASK : 
      return {...state, tasks:state.tasks.filter((el)=>el.id !== action.payload)};
    case DONE_TASK : 
      return {...state, tasks:   
        state.tasks.map((el)=>{
      if(el.id === action.payload){
        el.done = true
      }
        return el})
      }
    default: return state;
  }
}

export const addTaskAction = (payload) => {
  return {type:ADD_TASK, payload }
}

export const filterTaskAction = (payload) => {
  return {type:FILTER_TASK, payload}
}

export const doneTaskAction = (payload) => {
  return { type: DONE_TASK, payload}
}
