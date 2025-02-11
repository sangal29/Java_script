// let array = [12,122,34,32.4,678,432];
// console.log(array);

// --------------------------------------------------------------------------------------------------------

//  Looping  in the javascript 

//  let hero = ['sakstiman', 'spiderman' ,'ironman','batman'];
// console.log(hero);
// for(let idx = 0; idx < hero.length; idx++)
// {
//     console.log( hero[idx].toUpperCase());
// }

// for(let heros of hero )
// {
//     console.log(heros)
// }

//  -----------------------------------------------------------------------------------------------------

// problem qution to find the avrage of the student 

// let marks = [85,97, 44, 37, 76, 60];
// let sum = 0;
// for(let ind = 0; ind <marks.length; ind++)
// {

//     let avrg = marks[ind]
//     sum += avrg;
    
// }
// console.log(sum/6);

//  ------------------------------------------------------------------------------------------------------

// problem qution  Qs. For a given array with prices of 5 items ->
//  [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. 
// Change the array to store final price after applyng offer 


// let iteam = [250, 645, 300, 900, 50];
// let idx = 0;
// for( let  val of iteam )
// {
//     console.log( `The value of the ${idx} = ${val} `);
//      let offer = val/10;
//      iteam[idx] = iteam[idx] - offer;
//      console.log(`The apllied offer of 10% = ${iteam[idx]}`);
//     idx++;


// }

// ---------------------------------------------------------------------------------------------------------

//   ARRAY METHODS 

//  ----------------------------- Apllication of Push ---------------------

//  let food_iteams = ["Potato", "chips" , "Banana", "Anar"];

// food_iteams.push("Lichi");
// console.log(food_iteams);
// food_iteams.push("Mango");
// console.log(food_iteams);

//---------------------------------- Application of pop ----------------------------

// let deleted_iteam = food_iteams.pop();
// console.log( "Deleted food iteam is = " , deleted_iteam);
// console.log(food_iteams);

// ----------------------------------Application of toString----------------------------

// let marks = [29, 30, 50, 78, 89];
// console.log(marks.toString());
// console.log(typeof marks)


//------------------------------------ Application of concat ------------------------------------------------

let marvel_heros = ["Spiderman", "Ironman" , "Batman" , "Antman"];
let indian_heros= ["Saktiman" , " toofan" , "Sakal"];
let heros = marvel_heros.concat(indian_heros);
console.log(heros);


// -------------------------------- Application of slice method --------------------

// console.log(heros.slice(1,3));

// console.log(heros.splice(3,0,5,"ram","sita"))

// console.log(heros);
//  ----------------------------------- Application of splice method --------------------------

console.log(heros.splice(2,0,5,6));
console.log(heros);

 
