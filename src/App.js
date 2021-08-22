import { useState } from 'react';
import './index.css';
import { nanoid } from 'nanoid';
import ListTask from './component/ListTasks/ListTask';
import NewTask from './component/NewTask/NewTask';

function App() {
  const [task,setTask] = useState([
    {id:nanoid(), title:"HTML", done:true},
    {id:nanoid(), title:"CSS", done:true},
    {id:nanoid(), title:"JS", done:false},
    {id:nanoid(), title:"React", done:false},
  ])

  const createNewTask = (newElem) => {
    setTask([...task,newElem])
  }

  const onFilter = (currentEl)=>{
    setTask(task.filter((el)=>el.id !== currentEl.id))
  }
  const onActiv = (currentEl)=>{
    setTask(task.map((el)=>{
      if(el.id === currentEl.id){
        el.done = true}
        return el
    }))
  }
  return (
    <div className="App">
      <ListTask task={task} onDelete={onFilter} onDone={onActiv} />
      <NewTask create ={createNewTask} />
    </div>
  );
}

export default App;
