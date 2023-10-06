import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const AddToDos = ({ modal, toggle, save }) => {

    const [toDoName, setToDoName] = useState('');
    const [description, setDescription] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "toDoName") {
            setToDoName(value)
        }
        else {
            setDescription(value)
        }
    }
    const handleSave =() =>{
       let todoObj = {}
        todoObj["Name"] = toDoName
        todoObj["Description"] = description
        save(todoObj)
    }


    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Add ToDos</ModalHeader>
            <ModalBody>
                <form>
                    <label>ToDo Name</label>
                    <div className='form-group'>
                        <input type="text" className='form-control' value={toDoName} onChange={handleChange} name='toDoName' />
                    </div>

                    <label htmlFor="floatingTextarea">Description</label>
                    <div className="form-floating">
                 <textarea className="form-control" value={description} id="floatingTextarea"  onChange={handleChange}  ></textarea>
               <label htmlFor="floatingTextarea">Description</label>
              </div>
                </form>
            </ModalBody>


            <ModalFooter>                
                <Button color="primary" onClick={handleSave}>
                    save
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>

        </Modal>



    )
}

export default AddToDos   
