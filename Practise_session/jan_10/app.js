// method in array 

// map.()

// let array_1 = [12,34,56,76,345,234,321];
// let new_array = array_1.map(function(indx , itema){
//     return indx*2;
// })
// console.log(array_1);
// console.log(new_array);


// fillter()

// it will retunr a new array and give the truthy value only 


let array_2 = [10,20,30,40,50,55];
let new_array_2 = array_2.filter(function(value , index){

    return value%6 == 0;
})
console.log(array_2);
console.log(new_array_2);