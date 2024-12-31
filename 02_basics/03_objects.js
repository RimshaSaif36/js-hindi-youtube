// singleton

//object literals

const mySym= Symbol("key1")

const JsUser={
    name :"Rimsha",
    "full name":"Rimsha Eman",
    [mySym]:"myKey1",
    age :21,
     location:"PU",
     email:"rimsha@google.com",
     isLoggedIn:false,
     lastLogin :["Monday","Tuesday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"])// This is good approach
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// Object.freeze(JsUser)
 JsUser.name="rimshaemankhokhar"

// console.log(JsUser.name)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello world")
}
JsUser.greetingTwo = function(){
    console.log(`Hello world,${this.name}`)
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())