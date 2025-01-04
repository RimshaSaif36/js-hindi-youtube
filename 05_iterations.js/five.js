// for each loop 


 const coding =["javascript", "rb", "python","c++","java"]
// coding.forEach( function (item) {                  // callback function have no name
//  console.log(item);
//  })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr )
// })

const myCoding  =[
    {
   LangName :"javascript",
   LangFileName :"js"
},

{
    LangName :"java",
    LangFileName :"java"
 },

 {
    LangName :"python",
    LangFileName :"py"
 },
]

myCoding.forEach( (item) => {
    console.log(item.LangFileName)
})