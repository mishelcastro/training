//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//array of objects

//docs for sort method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


//File for 'searching for array's module

const notes = [{
    title:'my next trip',
    body: 'I would like to go to Romania'
},{
        title: 'Habits to work on',
        body: 'Exercise, Eating better'
},{
        title: 'Office modifications',
        body: 'Get a new desk.'
}]
  //  const findNote = function(notes,noteTitle){
       // const index = notes.findIndex(function (note,index){
       //     return note.title.toLowerCase() === noteTitle.toLowerCase()
      //  })
      //  return notes[index]
   // }

// use find for the same thing - once it returns true for func it stops


const sortNotes = function (notes){
    notes.sort(function(a,b){
        if (a.title.toLowerCase()< b.title.toLowerCase()){
           return -1 
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else  {
            return 0
        }
    })
}


const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    
}

sortNotes(notes)
console.log(notes)

//console.log(findNotes(notes,'eating'))
//const note = findNote(notes,'some other office modifications')
//console.log(note)


//console.log(notes.length)
//console.log(notes)

//use findIndex when finding index for object
//const index = notes.findIndex(function(note,index){
   // console.log(note)
    //return note.title === 'Habits to work on'
//})
//console.log(index)


