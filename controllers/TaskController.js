const Task = require('../models/Task')

module.exports = class TaskController {
    static async getTasks (req, res){
        const tasks = await Task.findAll({raw: true})
        console.log(tasks)
        res.render('tasks/allTasks', {layout: 'main', tasks})
    } 
    static addTask (req, res){
        res.render('tasks/createTask', {layout: 'main'})
    }
    static async addTasksave(req, res){
        const task = {
            name: req.body.name,
            description: req.body.description,
            done: false
        }
        console.log(task)
        await Task.create(task)
        res.redirect('/tasks')
    }
    static async editTask (req, res){
        const id = req.params.id
        const task = await Task.findOne({where: {id:id}, raw:true})
        console.log(task)
        res.render('tasks/editTask', {layout: 'main', task})
    }
    static async editTaskSave (req, res){
        const id = req.params.id
        const task = {
            name: req.body.name,
            description: req.body.description,
            done: req.body.done
        }
        await Task.update(task, {where: {id:id}})
        res.redirect('/tasks')

    }
    static async deleteTask(req, res){
        const id = req.params.id
        await Task.destroy({where: {id: id}})
        res.redirect('/tasks')
    }
    static async showTask (req, res){
        const id = req.params.id
        const task = await Task.findOne({where: {id:id}, raw:true})
        res.render('tasks/task', {layout: 'main', task})
    }
    static async toggleStatus (req, res){
        const id = req.params.id
        const task = await Task.findOne({where: {id:id}, raw:true})
        console.log(task)
        task.done = task.done == 0 ? 1 : 0
        console.log(task)
        await Task.update(task, {where: {id:id}})
        res.redirect('/tasks')
    }
}