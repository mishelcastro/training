// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
   render()
})



const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

game1.puzzle.split('').forEach((letter) =>{
    const letterEl = document.createElement ('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
})

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman (puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// getPuzzle('2').then((puzzle) =>{
//     console.log(puzzle)
// }).catch((err)=>{
//     console.log(`error: ${err}`)
// })





//fetch API - takes two arguments, first is http request URL, second is 

// fetch('http://puzzle.mead.io/puzzle', {}).then ((response)=>{
//     if (response.status === 200){
//        return response.json()
//     } else{
//         throw new Error ('unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error)=>{
//     console.log(error)
// })


//PROMISE CHALLENGE
// creat new function called getlocation  which gets no arguments (in requests.js)
// setup get location to the url http://ipinfo.io/json?token=0b83d298eb8f93 + parse the data
// use getlocation in app.js and then take geo info response to print city, region, country  

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region} in the ${location.country}`)
// }).catch((err) => {
//     console.log(`error: ${err}`)
// })

//1. convert getPuzzle to use fetch & return a promise
//2. make sure getCountry still resolves w/the country that matches
//3. change getCountry usage to use catch in func below

// getCountry(location.country).then((country) => {
//     console.log(location.name)
// }).catch((err) => {
//     console.log(`error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })


// //chain promise to get country code
// getLocation().then((location) => {
//     return getCountry(location.country)
//     //console.log(`You are currently in ${location.city}, ${location.region} in the ${location.country}`)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })