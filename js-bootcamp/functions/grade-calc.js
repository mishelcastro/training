//create grade calculator

//two arguments - students score, total possible score
//generate grade, score student got 
//ex: 15/20 - You got a C (75%) 
//A 90-100, B 80-90, C 70-80, D 60-70, F 0-50

let getGrade = function (studentScore, totalScore = 20){
    let percent = (studentScore / totalScore) * 100
    let grade = percent
    if (percent <= 50){
        grade = 'F'
    }else if (percent <=69 && percent>=60){
        grade = 'D'
    } else if (percent <= 79 && percent>= 70) {
        grade = 'C'
    } else if (percent <= 89 && percent>= 80) {
        grade = 'B'
    } else if (percent <= 100 && percent>= 90) {
        grade = 'A'
    }
    return `You got a ${grade} (${percent}%)!`
}
let grade = getGrade (19)
console.log(grade)


 