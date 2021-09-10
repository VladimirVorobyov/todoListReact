import classes from './OldTasks.module.css';
import { useDispatch} from 'react-redux';
import { filterTaskAction,doneTaskAction } from '../../store/app/actions';

export default function OldTasks({name,el}){
  const dispatch = useDispatch();
  const onFilter = (currentEl)=>{
    dispatch(filterTaskAction(currentEl.id))
  }
  const onActiv = (currentEl)=>{
    dispatch(doneTaskAction(currentEl.id))
  }
  const classTask = el.done ? classes.taskDone : classes.task;
  return(<div className={classTask}>
    <p>{name}</p>
    <div className={classes.actionBtn}>
      {!el.done?
      <p onClick={()=>onActiv(el)}>✔️</p>
      :<p onClick={()=>onFilter(el)}  >❌</p>
      }
    </div>
  </div>)
}