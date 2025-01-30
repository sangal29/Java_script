// let array = [12,122,34,32.4,678,432];
// console.log(array);



//  Looping  in the javascript 

let hero = ['sakstiman', 'spiderman' ,'ironman','batman'];
// console.log(hero);
// for(let idx = 0; idx < hero.length; idx++)
// {
//     console.log( hero[idx].toUpperCase());
// }

// for(let heros of hero )
// {
//     console.log(heros)
// }



// problem qution to find the avrage of the student 

let marks = [85,97, 44, 37, 76, 60];
let sum = 0;
for(let ind = 0; ind <marks.length; ind++)
{

    let avrg = marks[ind]
    sum += avrg;
    
}
console.log(sum%6);