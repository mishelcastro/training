let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    //console.log(e.target.elements.addedTodo.value)
    todos.push({
        id: uuidv4(),
        text: e.target.elements.addedTodo.value,
        completed: false
    })
saveTodos(todos)
    renderTodos(todos,filters)
    e.target.elements.addedTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
     filters.hideCompleted = e.target.checked
     renderTodos(todos,filters)
})

//refactor challenge


