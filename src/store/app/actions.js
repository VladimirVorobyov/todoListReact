export const ADD_TASK = 'ADD_TASK';
export const FILTER_TASK = 'FILTER_TASK';
export const DONE_TASK = 'DONE_TASK';

export const addTaskAction = (payload) => {
  return {type:ADD_TASK, payload }
}

export const filterTaskAction = (payload) => {
  return {type:FILTER_TASK, payload}
}

export const doneTaskAction = (payload) => {
  return { type: DONE_TASK, payload}
}