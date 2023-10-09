import React, { useEffect, useState } from 'react';
import './App.css';
import Todos from "./component/Todos";
import 'bootstrap/dist/css/bootstrap.min.css'
import { addToDo, getAllTodo} from './component/api';


function App() {
  const [toDos, setTodo] = useState([]);
  const [text, setText] = useState([]);
   
  useEffect(() => {
    getAllTodo(setTodo)
  }, [] )
 


 

  return (
    <>
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input type='text' placeholder='Add Todos...'  value={text} onChange={(e) => setText(e.target.value)}/>
          <div className='add' onClick={() => addToDo(text, setText, setTodo)} >Add</div>
        </div>
<div className='list'>
 {toDos.map((item) => <Todos  key={item._id}   text={item.text}/>)}   
         </div>
    </div>

    </div>
    </>

  );
}

export default App;

