import OldTasks from "../OldTasks/OldTasks"
import {useSelector } from 'react-redux';

export default function ListTask(){
  const tasks = useSelector(state => state.tasks.tasks)
  const activeTasks = tasks.filter(el=>!el.done);
  const historyTasks = tasks.filter(el=>el.done);
  return(<>
    <h1 className="top">Active task:{activeTasks.length}</h1>
    {[...activeTasks,...historyTasks]
      .map(el=> <OldTasks  key={el.id} name={el.title} el={el}/>)}
    </>)
}