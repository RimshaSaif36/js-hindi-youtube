// for of  (mostly used in arrays)

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`)
}

// maps (something like arrays)  and map is a object
const map =new Map()
map.set('IN', "India")
map.set('Pak', "Pakistan")
map.set('USA', "United States of America")

console.log(map);

for (const [key, value ]  of map) {   // [key, value ] array de structure
    //console.log(key, ':-' , value)
}

const myobj = {
    'game1': 'PUBG',
    'game2':'snooker'
}

for (const [key,value] of Object.entries(myobj)) {
    console.log(key, ':-' , value)
}
