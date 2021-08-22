import OldTasks from "../OldTasks/OldTasks"

export default function ListTask({task,onDelete,onDone}){
  const activeTasks = task.filter(el=>!el.done);
  const historyTasks = task.filter(el=>el.done);
  return(<>
    <h1 className="top">Active task:{activeTasks.length}</h1>
    {[...activeTasks,...historyTasks].map(el=> <OldTasks onDelete={onDelete} onDone={onDone}   key={el.id} name={el.title} el={el}/>)}
    </>)
}