// (function chai(){                   //global scope ke pollution se bachny ke liye kai bar IIFE use hoti hai 
//     console.log(`DB Connected`);
// })();

(function rim() {
    console.log(`DB Connected two`);
})();

// (function one()=>{              //named iife
//     console.log(`DB Connected two`)
// })()