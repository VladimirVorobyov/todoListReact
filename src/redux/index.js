import { createStore, combineReducers } from 'redux';
import { setTask } from './setTask';
import { valueReducer } from './valueReducer';

const rootReducer = combineReducers({
  tasks: setTask,
  value : valueReducer
})

export const store = createStore(rootReducer)