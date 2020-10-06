//new challenge 

// 1. convert array of strings to objects -- each object has 2 properties 
//text and completed - true / false

//2. create function that works w/array of objects to remove a todo by text value

const todos = [{
    text: 'Pack',
    completed: false
},{
    text: 'Donate Furniture',
    completed: true
},{
    text: 'Set up mail forward',
    completed: true
},{
    text: 'Stay Calm',
    completed: false
},{
    text: 'Hire bee repair person',
    completed: false
}]

const deleteTodo = function (todos, todosText) {
    const index = todos.findIndex (function(todo){
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index,1)
    }
}
//deleteTodo(todos,'set up mail forward')
//console.log(todos)

//function to show todos that aren't done
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
       return todo.completed === false
    
    }) 
}
//console.log(getThingsToDo(todos))

//use sort method to sort by completed properties, having false ones first

const sortToDos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) { 
            return 1
        } else {
            return 0
        }
    })
}
 sortToDos(todos)
 console.log(todos)

