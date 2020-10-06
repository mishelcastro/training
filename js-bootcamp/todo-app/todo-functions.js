// 1. wire up button event
// 2. remove todo by id
// 3. save + rerender todos list

//remove todo function


//fetch existing todos from localStorage
//getSavedTodos

const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }else {
        return[]
    }
}
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//toggle completed value for completed todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}
//saveTodos from local storage
// saveTodos

const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//render application todos based on filters
//renderTodos

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        //debug here
        //debugger
        return searchTextMatch && hideCompletedMatch
    })



    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

 document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// get the DOM elements for an individual todo
//generateTodosDOM
const generateTodoDOM = function(todo){
   const todoEl = document.createElement ('div')
    const checkbox = document.createElement ('input')
    const todoText = document.createElement ('span')
    const removeButton = document.createElement ('button')

    //setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)

    checkbox.addEventListener('change', function () {
       toggleTodo(todo.id)
       saveTodos(todos)
       renderTodos(todos,filters)
    })

    //setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    
    //setup remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

   removeButton.addEventListener('click',function(){
       removeTodo(todo.id)
       saveTodos(todos)
       renderTodos(todos, filters)
    })
    return todoEl

}


//1. add event handler for checkbox
//2. modify correct objecs completed property 
//3. save and rerender



//get the DOM elements for the list summary
//generateSummaryDOM

//1. setup root div
//2. set up and append a chex (set type attribute)
//someNode.setAttribute('type','checkbox')
//3. setup and append a span (set text)
//4. setup and append a button (set text)

const generateSummaryDOM = function(incompleteTodos){

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}