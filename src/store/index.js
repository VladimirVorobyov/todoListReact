import { createStore, combineReducers } from 'redux';
import { setTask } from './app/reducer';
import { valueReducer } from './newTask/reducer';

const rootReducer = combineReducers({
  tasks: setTask,
  value : valueReducer
})

export const store = createStore(rootReducer)