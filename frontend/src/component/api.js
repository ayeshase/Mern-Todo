import axios from 'axios'


const baseUrl = "http://localhost:5000"
const getAllTodo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data)
        setToDo(data)


    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))

}


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))

}




export {getAllTodo, addToDo, updateToDo}