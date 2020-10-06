let temp = -5

//logical and operator - true if both sides are true, false otherwise
//logical or operator - evaluate each separately 

if(temp>=60 && temp <=90){
    console.log('it is pretty nice out')
}
else if (temp<=0 || temp >=120){
    console.log('do not go outside')
}else{
    console.log('eh do what you want')
}

//challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

//are both vegan? only offer vegan food 

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('only offer vegan')
}else if (isGuestOneVegan || isGuestTwoVegan){
    console.log ("try some vegan things")
}else{
    console.log("have some food")
}
//at least one guest is vegan? offer some vegan
//else if neither are vegan 