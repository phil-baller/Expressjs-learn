const { Router } = require('express');
const fs = require('fs')

let data = fs.readFileSync('./src/routes/tasks.json');

let allTasks = JSON.parse(data);

const task = Router();

//Get Tasks
task.get('/', (req, res) => {
    res.json(allTasks)
})

//Create Task
task.post('/', (req, res) => {
    let newTask = {
        id: allTasks.length + 1,
        name: req.body.name,
        description: req.body.description
    }
    allTasks.push(newTask)
    fs.writeFile('./src/routes/tasks.json', JSON.stringify(allTasks), (err) => {
        if (err) throw err;
        console.log(allTasks)
        console.log(newTask)
        console.log('The file has been saved!');
    });
    res.json(allTasks)
})

//Delete Task
task.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = allTasks.findIndex(task => task.id === id);
    if (index !== -1)
        allTasks.splice(index, 1)
    fs.writeFile('./src/routes/tasks.json', JSON.stringify(allTasks), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
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