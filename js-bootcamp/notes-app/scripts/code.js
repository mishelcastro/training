//Unix epoch - January 1 1970 00:00:00
// 0 is the epoch's moment in time; future from that in MS


const now = new Date()
 const timeStamp = now.getTime()

 const myDate = new Date(timeStamp)
 console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// 1. create two dates in the past (use string for date)
// 2. get timestamps for both
// 3. figure out which is first and print its time (use toString)


const dateOne = new Date('February 25, 2017 0:00:00')
const dateTwo = new Date()

const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dateTwoTimeStamp){
    console.log (dateOne.toString())
} else if (dateTwoTimeStamp > dateOneTimeStamp){
    console.log(dateTwo.toString())
}

