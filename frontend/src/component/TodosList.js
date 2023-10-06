import React, { useState } from 'react'
import AddToDos from './ToDos/AddToDos'




const TodosList = () => {
  const [modal, setModal] = useState(false);
  const [todoList, setTodoList] = useState([]);


  const toggle = () => {
    setModal(!modal)
  }

  const saveTodo = (todoObj) => {
    let tempList = todoList
    tempList.push(todoObj)
    setTodoList(tempList)
    setModal(false)
  }

  return (
    <>
      <div className='header text-center'>
        <h3>ToDo List</h3>
        <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Add ToDos</button>
      </div>
     

        {todoList.map((obj) => <li>{obj.Name}</li>)}
    
      <AddToDos toggle={toggle} modal={modal} save={saveTodo} />

    </>
  )
}

export default TodosList