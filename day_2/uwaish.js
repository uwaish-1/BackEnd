// immediatly invoked function expression(iife)
// types of functions


// 1. DOM MANIPULATION
// 2.  CALLBACK CHAINING
// 3. PROMISE
// 4. ASYNC/AWAIT
// 5. FETCH
// 6. VALIDATION
 


//  2. CALL BACK CHAINING
// console.log("first");

// function rollnumber(num,delay,nextroll){
//     console.log("roll number is;");
// }

// setTimeout(rollnumber,2000)

// console.log("third");



function rollnumber(num,delay,nextroll){
    setTimeout(() =>{
        console.log("roll number is" ,num);
        if(nextroll) nextroll();
    },delay);
}

rollnumber(12,1000, () => {
    rollnumber(13,1000, () => {
        rollnumber(14,1000, () =>{
            rollnumber(15, 1000);
        });
    });
});


// function rollnumber(num,delay){
//     setTimeout(() =>{
//         console.log("roll number is" ,num);
//         if(nextroll) nextroll();
//     },delay);
// }

// rollnumber(12,1000, then(() => {
//     rollnumber(13,2000, then(() => {
//         rollnumber(14,2000)
//         });
//     });

