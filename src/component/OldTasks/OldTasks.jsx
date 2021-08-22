import classes from './OldTasks.module.css';

export default function OldTasks({name,el,onDelete,onDone}){
  const classTask = el.done ? classes.taskDone : classes.task;
  return(<div className={classTask}>
    <p>{name}</p>
    <div className={classes.actionBtn}>
      {!el.done?
      <p onClick={()=>onDone(el)}>✔️</p>
      :<p onClick={()=>onDelete(el)}  >❌</p>
      }
    </div>
  </div>)
}