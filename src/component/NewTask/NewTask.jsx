import classes from "./NewTask.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function NewTask({create}) {
  const [value, SetValue] = useState('')
  
  const onChange = (e) => {
    SetValue(e.target.value)
  }
  const addTask = () =>{
    if(value.length>0){
      const NewTaskElem = {id:nanoid() ,title:value, done:false};
      create(NewTaskElem)
      SetValue('')
    }
  }
  return <div className={classes.taskInput}>
     <input type="text" value={value} onKeyPress={(e)=>e.code==='Enter' && addTask()} onChange={onChange} />
     <button  onClick={addTask}>🚀</button>
  </div>
}