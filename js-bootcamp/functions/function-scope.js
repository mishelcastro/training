//Global Scope (convertFarenheitToCelcius, tempOne, tempTwo)
  //local scope (farenheit, celcius) - includes function argument
    //local scope (isFreezing)



//convertFarenheitToCelsius
let convertFarenheitToCelsius = function (farenheit) {
    let celcius = (farenheit - 32) * 5 / 9
    if (celcius<=0){
        let isFreezing = true
    }
    return celcius
}
//call a couple of times (32 --> 0, 68 -->20)
let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)
//print converted values
console.log(tempOne)
console.log(tempTwo)