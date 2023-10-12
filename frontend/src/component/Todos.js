import React from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";


const Todos = ({text, updateMode, deleteToDo}) => {
return (
  
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
      <BsFillPencilFill className="icon"  onClick={updateMode}/>
          <BsFillTrashFill className="icon" onClick={deleteToDo} />
      

      </div>
    </div>
  
  )
} 

export default Todos;