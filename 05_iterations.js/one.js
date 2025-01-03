//for

// for (let index = 0; index < 10; index++){
//     const element = index;
//     if(index == 5){
//         //console.log("5 is best number")
//     }
//     //console.log(element);
// }

for (let i = 0; i <= 10; i++){
    //console.log(`outer loop :${i}`);
    for (let j = 0; j <= 10; j++){
            //console.log(`inner value ${j} inner loop ${i}`) ;
            //console.log(i + '*' + j + ' = ' + i*j);
}}
   
let myArray = ['flash', 'batman' , 'superman']
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected")
        break             //Terminates the current loop entirely.
    }
    console.log(`Value of i is ${index}`); 
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected")
        continue         //Skips the rest of the current iteration and moves to the next one.
    }
    console.log(`Value of i is ${index}`); 
}