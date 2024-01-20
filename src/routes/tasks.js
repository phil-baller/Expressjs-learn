const { Router } = require('express');
const fs = require('fs')

const allTasks = [
    {
        "id": "1",
        "name": "Task 1",
        "description": "Description of Task 1"
    },
    {
        "id": "2",
        "name": "Task 2",
        "description": "Description of Task 2"
    },
    {
        "id": "3",
        "name": "Task 3",
        "description": "Description of Task 3"
    },
    {
        "id": "4",
        "name": "Task 4",
        "description": "Description of Task 4"
    }
]
const task = Router();

//Get Tasks
task.get('/', (req, res) => {
    res.json(allTasks)
})

//Create Task
task.post('/', (req, res) => {
    const newTask = {
        name: req.body.name,
        description: req.body.description,
    }
    allTasks.push(newTask)
    res.json(allTasks)
})

//Delete Task
task.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = allTasks.findIndex(task => task.id === id)
    allTasks.splice(index, 1)
    res.json(allTasks)
})


//Update Task
task.put('/:id', (req, res) => {
    const id = req.params.id
    const taskIndex = allTasks.findIndex(task => task.id === id)
    allTasks[taskIndex].name = req.body.name
    allTasks[taskIndex].description = req.body.description
    res.json(allTasks)
})



module.exports = task;