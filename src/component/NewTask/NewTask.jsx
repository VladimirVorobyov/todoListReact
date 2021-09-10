import classes from "./NewTask.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { valueAction,removeAction } from "../../store/newTask/actions";
import { addTaskAction } from '../../store/app/actions';
export default function NewTask() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value.value);
  const createNewTask = (newElem) => {
    dispatch(addTaskAction(newElem))
  }
  
  const onChange = (e) => {
    dispatch(valueAction(e.target.value))
  }
  const addTask = () =>{
    if(value.length>0){
      const NewTaskElem = {id:nanoid() ,title:value, done:false};
      createNewTask(NewTaskElem);
      dispatch(removeAction(''));
    }
  }
  return <div className={classes.taskInput}>
     <input type="text" value={value} onKeyPress={(e)=>e.code==='Enter' && addTask()} onChange={onChange} />
     <button  onClick={addTask}>🚀</button>
  </div>
}