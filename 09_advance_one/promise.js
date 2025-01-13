// First promise
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task (e.g., database or network call)
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise one consumed");
});

// Second promise
new Promise(function (resolve, reject) { // Capitalized 'Promise'
    setTimeout(function () {
        console.log("Async task two");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async task two resolved");
});

const promisethree = new Promise(function(resolve,reject){
    set
})