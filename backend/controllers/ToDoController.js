const ToDoModel = require('../models/ToDoModel')


module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos)
}
module.exports.saveToDo =(req, res) => {
    
    const { text } = req.body

    ToDoModel.create({text })
        .then((data) => {
            console.log('Sucssesfully saved....')
            console.log(data);
            res.send(data)           
        })
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndDelete(_id, {text})
    .then(()=> res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

