const name ="Rimsha "
const repo= 2
console.log(name + repo )

console.log(`my name is ${name} and I have ${repo} kids`)  // string interpretation

const Name = new String("Eman-hc-com")  // string is object
console.log(Name)
console.log(Name[0])
console.log(Name.__proto__)
console.log(Name.length)
console.log(Name.toUpperCase())
console.log(Name.charAt(3))
console.log(Name.indexOf("E")) 

// slice

const newString =Name.substring(0,2) //ignore negative value
console.log(newString)

const newwString =Name.slice(-3,3)//uses negative value 
console.log(newwString)

const newStringOne = "  RIMSHA   "
console.log(newStringOne)
console.log(newStringOne.trim()) // remove whitespace

const url= "https://rimsha.com/rimsha%20khokhar"
console.log(url.replace('%20','-'))

console.log(url.includes('rimsha'))
console.log(Name.split('-'))