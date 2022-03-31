const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/create', TaskController.addTask)
router.post('/create', TaskController.addTasksave)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit/:id', TaskController.editTaskSave)
router.post('/delete/:id', TaskController.deleteTask)
router.get('/view/:id', TaskController.showTask)
router.post('/toggleStatus/:id', TaskController.toggleStatus)
router.get('/', TaskController.getTasks)

module.exports = router