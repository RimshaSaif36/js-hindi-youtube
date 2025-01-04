// for in    (mostly use in objects)

const myObj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myObj) {
    console.log(`${key} shortcut is of  ${myObj[key]}`);
}

const programming =["js", "rb", "python","c++","java"]
for (const key in programming) {
    console.log(programming[key])
}

const map =new Map()
map.set('IN', "India")
map.set('Pak', "Pakistan")
map.set('USA', "United States of America")

for (const key in map) {
    console.log(key)   // not print bcz map is not iterative
}