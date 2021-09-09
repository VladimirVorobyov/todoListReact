import { nanoid } from 'nanoid';
import { ADD_TASK, FILTER_TASK,DONE_TASK } from './actions';
const defaultState = {
  tasks :[
    {id:nanoid(), title:"HTML", done:true},
    {id:nanoid(), title:"CSS", done:true},
    {id:nanoid(), title:"JS", done:false},
    {id:nanoid(), title:"React", done:false},
]} 


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


