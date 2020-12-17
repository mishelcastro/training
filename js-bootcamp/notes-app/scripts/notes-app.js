'use strict'

let notes = getSavedNotes()

// making a change

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e)=> {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',  (e)=> {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',  (e) =>{
    //console.log(e.target.value)
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})

window.addEventListener('storage', (e)=>{
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

//https://momentjs.com/docs/

// 1 add createdAt and updatedAt to the new notes + store timestamp
// 2 update updatedAt when someomne edits a title or body
// 3 delete all old notes before testing

