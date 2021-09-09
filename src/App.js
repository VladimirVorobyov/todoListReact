import './index.css';
import ListTask from './component/ListTasks/ListTask';
import NewTask from './component/NewTask/NewTask';
import { useDispatch} from 'react-redux';
import { addTaskAction, filterTaskAction,doneTaskAction } from './store/app/actions';

function App() {
  const dispatch = useDispatch();
  const createNewTask = (newElem) => {
    dispatch(addTaskAction(newElem))
  }
  const onFilter = (currentEl)=>{
    dispatch(filterTaskAction(currentEl.id))
  }
  const onActiv = (currentEl)=>{
    dispatch(doneTaskAction(currentEl.id))
  }
  return (
    <div className="App">
      <ListTask  onDelete={onFilter} onDone={onActiv} />
      <NewTask create ={createNewTask} />
    </div>
  );
}

export default App;
