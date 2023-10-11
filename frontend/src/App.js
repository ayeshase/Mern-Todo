import React, { useEffect, useState } from 'react';
import './App.css';
import Todos from "./component/Todos";
import 'bootstrap/dist/css/bootstrap.min.css'
import { addToDo, getAllTodo,  updateToDo, deleteTodo} from './component/api';


function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")


  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

  const updateMode = (id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(id)


  }

 





  return (
    <>
      <div className="App">
        <div className='container'>
          <h1>ToDo App</h1>
          <div className='top'>
            <input type='text' placeholder='Add Todos...' value={text} onChange={(e) => setText(e.target.value)} />
            <div className='add' onClick={isUpdating ?
               () =>updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)} >
              {isUpdating ? "Update" : "Add"}

            </div >
          </div>
          <div className='list'>
            {toDo.map((item) =>  
             < Todos key={item.id} 
             text={item.text}
             updateMode = {() => updateMode(item.id, item.text) }
             
             />)}
          </div>
        </div>

      </div>
    </>

  );
}

export default App;

