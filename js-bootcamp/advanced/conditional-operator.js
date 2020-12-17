// const myAge = 4
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

const myAge = 20
const showPage = ()=>{
    return 'Showing the page'
}
const showErrorPage = ()=>{
  return 'Showing error page'
}
const message = myAge>=21 ? showPage() : showErrorPage()
console.log(message)




const team = ['Tyler','Porter','Mary','Gert','Mishel']

console.log(team.length<=4 ? `Team Size: ${team.length}` : 'Too mamy people!')

//1. print "Team Size: 3" if less than / equal to 4
// 2. print "Too mmany people on your team" otherwise

