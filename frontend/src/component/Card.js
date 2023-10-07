import React from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";


const Card = (text, updateMode, deleteTodo, todoObj, save) => {


    
  return (
     <div className='todo-container'>
    <div className='text'>{text}</div>
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{todoObj.name}</h5>
        <p class="card-text">{todoObj.description}</p>
        <div className='icons'>
          <BsFillPencilFill className="icon" onClick={updateMode} />
          <BsFillTrashFill className="icon" onClick={deleteTodo} />
        </div>
      </div>
    </div></div>
  )
}

export default Card