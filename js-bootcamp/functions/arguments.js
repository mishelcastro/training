
//multiple arguments
let add = function(a, b, c){
return a + b + c
}

let result = add(10,1, 5);
console.log(result)

//default arguments

let getScoreText = function(name = 'Anonymous',score = 0){
    //return 'Name: ' + name + '-Score: ' + score
    return `name: ${name} - score: ${score}`
}

let scoreText = getScoreText(undefined,99)
console.log(scoreText)

//challenge area
//multiple arguments and default value

//tip calculator

//getTip - two arguments, total, tipPercent (20% or .2) 

//let getTip = function (total, tipPercent = .2) {
   // return total * tipPercent
//}

//let tip = getTip(100,.25) 
//console.log(tip) 

//notes - if you don't define the values in tip they will use default values in func



//single or double quotes are the same, dont use combo though
console.log('Mishel' + 'Castro')
//or
console.log("Mishel")

//template strings
//use backticks

let name = 'Myles'
let age = 12
console.log(`hey, my name is ${name}! I am ${age}`)



//challenge integrate template string for tip 
//a 25% on $40 would be $10

let getTip = function (total, tipPercent = .2) {
   let percent = tipPercent * 100
   let tip = total * tipPercent 
   //can put the functions inside the template string
    //    return `A ${tipPercent * 100}% tip on ${total} would be ${total * tipPercent }`
    return `A ${percent}% tip on ${total} would be ${tip}`
}

let tip = getTip(60)
console.log(tip) 