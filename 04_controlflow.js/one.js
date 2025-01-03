//if


// if(true){// body me jain gy

// }

// if(false){// body me nai jain gy 

// }

const isUserLoggin=true //= single operator for assignment
const temp=21

if ( temp < 50 ) {
   console.log("temp less than 50");
}
else{
console.log("temp more than 50");
}

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)


// <,>,<=,>=,==,!=, ===(also check type),!==


//Short hand rotation

const balance =700

//if(balance >500) console.log("test"); // very unreadable code

// nested

// if(balance<500)
// {
// console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200 ")
// }

const userLoggedin = true
const detibCard = true
const logInFromGoogle=false
const logInFromEmail=true
if(userLoggedin && detibCard && 2==2 ){         // && both true=>true
    console.log("Allow to buy course")
}
if(logInFromEmail || logInFromGoogle){  // 
    console.log("User loggedin")
}

//nullish coalescing operator(??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
 val1 = undefined ?? 18 ?? 77
//val1 = null ?? 10 ??77
console.log(val1)
console.log(val1)


//terniry operator

// condition?true :false

const price =100
price >=90 ? console.log("less than 100"):console.log("more than 100")
