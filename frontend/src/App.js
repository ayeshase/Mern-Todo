import './App.css';
import TodosList from "./component/TodosList";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './component/Card';
import { useEffect, useState  } from 'react';
import { getAllTodo } from './component/api';


function App() {
const [todo, setTodo] = useState([])
useEffect(() => {
  getAllTodo(setTodo)
}, [])

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
<input type='text' placeholder='Add Todos...' />
<div className='add'>Add</div>
        </div>
        <div className='list'>

          <TodosList text="Hi there"/>
        </div>
        </div>

    </div>
  );
}

export default App;

