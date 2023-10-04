import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const AddToDos = ({ modal, toggle }) => {

    return (

        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Add ToDos</ModalHeader>
            <ModalBody>

            </ModalBody>
            <ModalFooter>
                <form>

                </form>





                <Button color="primary" onClick={toggle}>
                    Add 
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>



    )
}

export default AddToDos   
