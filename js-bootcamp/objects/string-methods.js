
// documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let name = '  Mishel Castro '

//length property 
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//includes method
let password = 'abc12343jfds0989'
console.log (password.includes('password'))

//trim - removes extra white space from both ends
console.log(name.trim())

//challenge area
//isValidPassword function
//return true if length is more than 8 & it doesn't contain word password

//below is simplifed - can also do if / else statement returning boolean

let isValidPassword = function(pass){ 
    return pass.length > 8 && !pass.includes('password')
}
console.log(isValidPassword('fsksf'))
console.log(isValidPassword('abcde3123'))
console.log(isValidPassword('sfkdjfjsalfjdkjdspassword'))




