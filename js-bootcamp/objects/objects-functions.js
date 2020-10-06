let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary (otherBook)
 
console.log (bookSummary.pageCountSummary)

//challenge area - create a function that calls an object
//create function - take farenheit in and return object with f, celsius + kelvin converted values
let tempConversion = function (farenheit){
    return{
        farenheit: farenheit,
        celcius: (farenheit - 32) * 5 / 9,
        kelvin: (farenheit + 459.67) * 5 / 9
    }
}
let temps = tempConversion(74)

console.log(temps)