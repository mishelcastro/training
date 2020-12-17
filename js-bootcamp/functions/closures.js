const createCounter = () => {
    let count = 0
    return {
        increment(){
            count ++
        },
        decrement(){
            count --
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//adder
const createAdder = (a) => {
    return (b)=>{
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))

// tipper 

//1. create createTipper which takes in the base tip percent (.15 for 15% tip)
//2. set it up to return a function that takes in the bill amount
//3. call createTipper to generate a few functions for different percentages
//4. use the generated functions to calculate tips + print them

const createTipper = (baseTip) =>{
    return (billAmount) => {
        return baseTip * billAmount
    }
}

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))