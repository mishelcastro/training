//Function - input (argument), code, output (return value)

let greetUser =function(){
    console.log('Welcome User!')
}
greetUser()


let square = function(num){
    let result = num * num
    return (result)
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


//challenge area

//convertFarenheitToCelsius

let convertFarenheitToCelsius = function (farenheit){
    let celcius = (farenheit - 32) * 5 / 9
    return celcius
}
//call a couple of times (32 --> 0, 68 -->20)
let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)
//print converted values
console.log(tempOne)
console.log(tempTwo)