// //For loops, while loops, do loops most common 
// for (let i = 0; i <10; i++) {
//    // 
//     if (i ===2){
//         console.log('2 is my favorite number');
//         continue; // will replace number 2 with the expression
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }

// console.log("Number " + i);

// //i ++  is same as i = i + 1. 
// }

// While loop (for loop is used when you know how much is )

let i = 0;
while(i < 10) {
    console.log('Number ' + 1);
    i++;

}
// Do while
let i = 100;
do {     // always will gonna run. 
    console.log('Number ' + i);
    i++;
}
while(i <10);
// LOOP Through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0, i < cars.length; i++){
//     console.log(cars[i]);

// }
// ForEach loop
// cars.forEach(function(car, index, array){ // self call function use current iterater
//     console.log(`${index} : ${car}`);
    //    console.log(array);
// });

// // MAP
// const users = [
//     {id:1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id:4, name: 'Steve'},
// ];
// const ids = users.map(function(){
//     return users.id;
// })
// console.log(ids);


// // For in loop
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }
// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }