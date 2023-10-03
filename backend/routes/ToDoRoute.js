const {Router} = require('express')
 const {getToDos, saveToDo} = require('../controllers/ToDoController')

const router = Router()
router.get('/', getToDos )
router.post('/save', saveToDo)

module.exports = router;