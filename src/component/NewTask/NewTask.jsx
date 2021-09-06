import classes from "./NewTask.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { valueAction,removeAction } from "../../redux/valueReducer";
export default function NewTask({create}) {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value.value)
  
  const onChange = (e) => {
    dispatch(valueAction(e.target.value))
  }
  const addTask = () =>{
    if(value.length>0){
      const NewTaskElem = {id:nanoid() ,title:value, done:false};
      create(NewTaskElem);
      dispatch(removeAction(''));
    }
  }
  return <div className={classes.taskInput}>
     <input type="text" value={value} onKeyPress={(e)=>e.code==='Enter' && addTask()} onChange={onChange} />
     <button  onClick={addTask}>🚀</button>
  </div>
}