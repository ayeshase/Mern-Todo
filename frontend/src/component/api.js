import axios from 'axios'


const baseUrl = "http://localhost:5000"
const getAllTodo = (setTodo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data)
        setTodo(data)


    })
}

const addToDo = () => {

}
export {getAllTodo, addToDo}