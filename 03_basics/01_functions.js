// console.log("R")
// console.log("I")
// console.log("M")
// console.log("S")
// console.log("H")
// console.log("A")

function sayName(){                       //Function definition
    console.log("R")
    console.log("I")
    console.log("M")
    console.log("S")
    console.log("H")
    console.log("A")
}


// sayName //reference
// () //execute

//sayName()

// function addTwoNumbers(num1,num2){            //In function definition used parameters(num1,num1)
//    console.log (num1+num2)
// }

function addTwoNumbers(num1,num2){            //In function definition used parameters(num1,num1)
        let result = num1+num2
        return result
     }
const result=addTwoNumbers(4,21) //In function call use arguments(4,21)
console.log(result)

function loginUserMessage(username){
    if(username == undefined){           //(!username)
       console.log("user is undefined ") 
    }
    else{
    return `${username} just logged in`
}
}

console.log(loginUserMessage())

function calculateCatPrice(...num1){        //rest operator ,spread(...)
return num1
}
console.log(calculateCatPrice(6,4,5))

// Function with object
const user={
    name:"Rim",
    price:100
}

function handleObject(anyobj){
console.log(`Username is ${anyobj.name} and price id ${anyobj.price}`)
}
handleObject(user)

handleObject({
    name:"rimsha",
    price:987797
})
// Array with objects
const myArr = [4,6,7,4,3,6]
function returnSecondValue(getarray){
return getarray[1]
}
console.log(returnSecondValue(myArr))
console.log(returnSecondValue([5,8,5,2]))