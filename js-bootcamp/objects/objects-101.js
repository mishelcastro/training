let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
//use dot notation to get into object property values
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

//challenge area

//name, age, location
// end result should be the string - Mishel is 45 and lives in Philadelphia.
//increase age by 1 + reprint message


let person = {
    personName: 'Mishel',
    age: 45,
    location: 'Philadelphia'

}

console.log (`${person.personName} is ${person.age} and lives in ${person.location}.`)

person.age = person.age +1
console.log(`${person.personName} is ${person.age} and lives in ${person.location}.`)
