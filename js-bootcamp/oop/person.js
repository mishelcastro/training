// Prototypal Inheritance
//myPerson --> Person.prototype-- > Object.prototype -> null 


class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName (fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//sub class for person who is an employee

class Employee extends Person {
    constructor(firstName,lastName,age,position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}`
        //Andrew is a (position)
    }
    getYearsLeft(){
        return 65-this.age 
        
    }
}


// const me = new Employee('Mishel', 'Castro', 45, 'Teacher', ['reading','walking'])
// me.setName('Alexis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Clancy','Turner',51)
// console.log(person2.getBio())

//------ CHALLENGE AREA

//1. create class for students
//2. track student grade 0-100
//3. override bio to print a passing or failing message 70 + above = passing
//4. create 'updateGrade' that takes the amount to add or remove from the grade

// create student
// print status (pass or fail)
// change grade to get opposite status 

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName,lastName,age,likes)
        this.grade = grade
    }
 
    updateGrade(change) {
        this.grade += change

    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.fullName} has a ${status} grade`
        //Andrew is a (position)
    }
}
const me = new Employee ('Mishel','Castro', 45, 'Teacher', [])
me.fullName = 'Joe Smith'
console.log(me.getBio())
//me.updateGrade(-20)
//console.log(me.getBio())