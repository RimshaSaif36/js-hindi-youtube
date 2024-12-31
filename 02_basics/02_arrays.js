const myHero=["Thar","Ironman"]
const dc=["superman","spiderman"]
// myHero.push(dc)//        good approach is concat
// console.log(myHero)

const allArr=myHero.concat(dc)//
// console.log(allArr)

const array=[32,6,86,[5,3,9],87,[56,[67,9]],8]
const real_array=array.flat(Infinity)// spread out all values
// console.log(real_array)

console.log(Array.isArray("Rimsha"))
console.log(Array.from("Rimsha"))
console.log(Array.from({name:"Rimsha"}))// empty   

let score1 =10
let score2 =20
let score3 =30

console.log(Array.of(score1,score2,score3)) //Creates a new array with the provided arguments as elements.