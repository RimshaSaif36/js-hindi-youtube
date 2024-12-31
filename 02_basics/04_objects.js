// const tinder=new Object()//singleton object
const tinderUser={}//non singleton object
 tinderUser.id="Bse21042"
 tinderUser.name="Rimsha Eman"
 tinderUser.isLoggedin=false
//console.log(tinderUser)

const user={
    email:"email.com",
    fullName:{
     firstName:"Rimsha",
     lastName:"Eman"
    }
}
//console.log(user)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

const obj3={...obj1,...obj2}// 90% we use this syntax
//console.log(obj3)

//When values come from the database

const dbUser =[

    {
      id:1,
      email:"rim@gmail.com"
    }                        //This is array object

]
//dbUser[1].id
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty(tinderUser))// result in boolean

const course={
courseName:"Js hindi",
Price:3444,
courseInstructor:"SIR QAMAR "

}

const {courseInstructor:instructor} = course
console.log(instructor)

const navbar = () =>{


}
navbar(company = "Ezitech")

// json api

// {                            // object which has no name
//  "name":"Eman",
// "courseName":"js"
// }


// [                          //Array
//   {},
//   {},
//   {}
// ]


