// Create some arrays
const numbers = [43, 56, 33, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mix = [22, 'Hello', true, undefined, null, {a:1, b:1,}, new Date()];

let val; 
// Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);

// Get single value in the row(counting from 0)
val = numbers[3];

// Insert into array (in 2 index position)
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// //Mutating arrays
// //Add on to end
numbers.push(250);

// //Add on to front
numbers.unshift(120);

// //Take off end
numbers.pop();

// // Take off from front (it takes off from the front)
numbers.shift();

// //Splice value (where we want to start and where to end)
// numbers.splice(1, 1);

// // Reverse 
numbers.reverse();

// Concatenate array (both put together)
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// use the 'compare function'
val = numbers.sort(function(x, y){
    return x - y;
})
// Reverse sort
val = numbers.sort(function(x, y){
    return y - x;
})
// find (it is testing) the sorting to be off. 
function under50(num){
    return num < 50;
}
val = numbers.find(under50);





console.log(numbers);
console.log(val);









