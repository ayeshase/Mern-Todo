import { useEffect, useState } from 'react';
import './App.css';
import Todos from "./component/Todos";
import 'bootstrap/dist/css/bootstrap.min.css'
import { getAllTodo } from './component/api';


function App() {
  const[todo, setTodo] = useState([])

   useEffect (() => {
    getAllTodo(setTodo)

  }, [])

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input type='text' placeholder='Add Todos...' />
          <div className='add' >Add</div>
        </div>
        <div className='list'>
          {todo.map((item) => <Todos key={item.id} text={item.text}/>)}
<div className='text'>hi</div>
          



        </div>
      </div>

    </div>
  );
}

export default App;

