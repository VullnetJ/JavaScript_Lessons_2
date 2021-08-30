// if(soemthing) {
//     do soemthing
// } else {
//     do something else
// }

const id = 100; //this is assigning, it doesnt mantter if is a string or a number. 

// Equal to
if (id == 100){     //equal to,
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Not Equal to
if (id != 101){     //equal to,
    console.log('Correct');
} else {
    console.log('Incorrect');
}
// three equal signs to check if is equal. 
if (id === 100){     // if is a string will not be correct
    console.log('Correct');
} else {
    console.log('Incorrect');
}
if (id !== 100){     // will be correct if is a string
    console.log('Correct');
} else {
    console.log('Incorrect');
}


//Test if undefind
// if(typeof id !== 'undefined'){ //to test if is not defined (it has to include typeof otherwise it will make an error)
//     console.log(`The ID is ${id}`); // will get an error if id is not deffined. 
// } else {
//     console.log('NO ID');
// }

// IF ELSE
const color = 'red';

if (color === 'red') {
    console.log('color is red');
} else if(color === 'blue'){
    console.log('Color is blue');
} else {
    console.log('color is not red or blue');
}

// Logical operators
const name = 'Steve';
const age = 20;

//AND
if(age > 0 && age <12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <=19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}
// OR ||

if(age < 16 || age> 65){
    console.log(`${name} can not run in race`);
} else{
    console.log(`${name} is registered for the race`);
}

// Ternary Operater
console.log(id ===100 ? 'Correct': 'Incorrect'); // to check if is correct or not. 

//Without Braces it works also, but not recommended. 
if(id === 100)
    console.log('Correct');
    else
    console.log('Incorrect');














