import React from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";


const Card = (text, updateMode, deleteTodo) => {
  return (
     <div className='todo-container'>
    <div className='text'>{text}</div>
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='icons'>
          <BsFillPencilFill className="icon" onClick={updateMode} />
          <BsFillTrashFill className="icon" onClick={deleteTodo} />
        </div>
      </div>
    </div></div>
  )
}

export default Card