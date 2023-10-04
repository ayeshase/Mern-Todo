import React, { useState } from 'react'
import AddToDos from './ToDos/AddToDos'

const MyTodos = () => {
const [modal, setModal] = useState(false);

const toggle = () => {
    setModal(!modal)
}

  return (
    <>
    <div className='header text-center'>
        <h3>Add ToDo</h3>
        <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Add ToDos</button>
 </div>
 <div className='todo-container'>

 </div>
<AddToDos toggle={toggle} modal={modal}/>

</>
  )
}

export default MyTodos