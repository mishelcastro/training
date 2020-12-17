//1. set up the word instance property as an array of lower case letters
//2. set up another instance property to store guessed letters
//3. create a method that gives you the word puzzle back


const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['c','e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter)=>{
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzle +=  letter
        }else{
            puzzle += '*'
        }

    })
    return puzzle
}

const game1 = new Hangman('Cat', 4)
console.log(game1.getPuzzle())


const game2 = new Hangman('Deciduous', 15)
console.log(game2.getPuzzle())
