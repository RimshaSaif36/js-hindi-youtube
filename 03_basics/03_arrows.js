const user ={
    name:"rim",
    price:45,

    welcomeMessage: function(){
        console.log(`${this.name} ,welcome to website`)
        //console.log(this)
    }
}
user.welcomeMessage()
//console.log(this)

// function one(){
//     let name="rimsha"
//     console.log(this.name)
// }
//one()

// const chai=function(){
//     let name="rimsha"
//     console.log(this.name)
// }

// const chai=()=>{
//     let name="rimsha"
//     console.log(this)
// }
// chai()


//explicit return
// const addTwo = (num1,num2) => { 
//      return num1+num2
// }
// console.log(addTwo)
// implicit return

// const addTwo = (num1,num2) =>  num1+num2

// const addTwo = (num1,num2) => ( num1+num2)

   
// console.log(addTwo(7,9))


const addTwo = (num1,num2) => ( {username:"RimshaSaif"})

   
 console.log(addTwo(7,9))
