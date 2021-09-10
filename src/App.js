import './index.css';
import ListTask from './component/ListTasks/ListTask';
import NewTask from './component/NewTask/NewTask';

function App() {
  return (
    <div className="App">
      <ListTask />
      <NewTask/>
    </div>
  );
}

export default App;
