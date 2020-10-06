//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = ['Note 1', 'Note 2', 'Note 3']

//console.log(notes.pop())
//notes.push('My new note')

//console.log(notes.shift())
//console.log(notes.unshift('My first note'))

//notes.splice(1,1,'This is the new second item')

notes[2] = 'This is now the new note 3'

notes.forEach(function(item,index){
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

//Counting .... 1
for (let count = 2; count >= 0; count--) {
    console.log(count)
}
//for loops have three arguments: initializer, condition, final expression

//for (let count = 0; count > notes.length; count++){
  //  console.log(notes[count]);
    //estially this is the same as forEach
//}
