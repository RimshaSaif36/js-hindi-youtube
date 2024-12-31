// array ,  array is object

// shallow and deep array ,   interview question

const myArr = [1,2,3,4,5,6]
const myHeroes = ["Prophet(pbuh)"]

const myArr2 = new Array(6,7,8,8,9,9,0)
// console.log(myArr[2])

// //Array methods

// myArr.push(6)
// myArr.pop()// last value in array delete

// myArr.unshift(8)// add value in start of the array

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(6))
// const newArr=myArr.join()  // gave answer in string

// console.log(myArr)
// console.log(newArr)

//  slice,splice   array methods in JavaScript
console.log("A",myArr)
const myn1=myArr.slice(1,3)//range not include
console.log(myn1)
// console.log("B",myn1)

const myn2=myArr.splice(1,3)//range include
console.log(myn2)
