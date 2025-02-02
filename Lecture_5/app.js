 // --------------------- without using parameter ----------------------

//  function myFunction(){
//     console.log("helo this is function defination");

//  }
//  myFunction();

 
 // ----------------------- using Parameter ---------------------------

//  function myNewFunction(msg){
//    console.log(msg);
//  }

//  myNewFunction("This is my javascript");

 // ------------------------- Sum of two number ---------------------

//  function sum( a , b){
//    // the parameter we use in the function they have block level scop and local variable 
//    console.log(a+b);
//  }

//  sum(12,12);

 //  -------------------- Arrow Function -----------------------------

// let arrowSum = (a , b) =>{
//    let sum = a+b;
//    return sum;
// }

// let sum = arrowSum(12 , 13);
// console.log(sum);


// ----------------------------- Practise qution --------------------------

// const vowel = (word) =>{
//    let count = 0;
//    for( let char of word)
//    {
   
//       if (char === "a"|| char === "e" || char === "i" || char ==="o" || char === "u"){
//          count++;
//       }
    
//    }
   
//    console.log(count);
// };

// vowel("hello");


// -----------------------------  For each loop in array ---------------------------

// let arr = [1,2,3,4,5];
// arr.forEach(function myNumber(val){
//    console.log(val);
// })

// arrow function for each loop 

// let array  = [1,2,3,4,5];
// array.forEach((val)=>{
//    console.log(val);
// }
// );

// ---------------------------------------------------------------------------

// Practise Quction: For a given array of number  print the squre of each value value using the forEach loop 

// using for loop 

// let arrayOfSure = [1,2,3,4,5];
// for(let i = 0; i <arrayOfSure.length; i++){
//    console.log(arrayOfSure[i]*arrayOfSure[i]);
// }

// forEach loop 

// let square = [1,2,3,4,5];
// square.forEach((val)=>{
//    console.log(val*val);
//    console.log(val);
// });


// ----------------------- using fillter method ----------------------------
let arr = [3, 6, 9, 12, 15, 18]
// let nums =  arr.filter((val) => {
//    return val %2 === 0;
// })
// console.log(nums)


// ----------------- using reduce method ---------------------------------

let sumoftwo = arr.reduce ((current , result) =>{
   return current + result;
});

console.log(sumoftwo);

