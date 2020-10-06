//create an array of 5 things to do
//print a message including the length 
//print first + second to last items --> format with 'To do:'

const todo = ['Pack', 'Donate furniture', 'Set up mail forward', 'Stay calm', 'Hire bee repair person']
//console.log('You have ' + todo.length + ' things to do.')
// can also use template string
//console.log (`You have $(todo.length) to do.`)
//console.log ('To do: ' + todo[0] + ', ' + todo[3])
//end former challenge

//new challenge - delete 3rd item
//add new item to end 
//remove first item from list

todo.splice(2,1)
todo.push('Stay sane')
todo.shift()
//console.log (`You have ${todo.length} things to do.`)
//console.log(todo)

//replace last console log  w/forEach 
//1. First Item, 
//2. Second item,

//todo.forEach(function(item,index){
    //console.log((index + 1) + '. ' + item)
//})
//to use template string & var for the index
//const num = index + 1
//console.log (`${num}. ${todo}`)

//new exercise
//Use same output but with for loop
 
//for (let count = 0; count < todo.length; count++) {
   // console.log(todo[count]);
    //essentially this is the same as forEach
    // const num = count + 1
    // const todos = todo[count]
   // console.log (`${num}. ${todos}`)
//}

//mdn for to get documentation 

