// Object literal is with currly brackets
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL',
    },
    getBirthYear: function(){
        return 2019 - this.age; //have to use 'this', so it will work.

    }
}
let val;

val = person;
//get a specific value
val = person.firstName; //recommended way 
val = person['firstName'];
val = person.age;
val = person.hobbies[1]; //gives sport
val = person.address.state;
val = person.address['city']; //this also works.
val = person.getBirthYear();



console.log(val);
// loops. 
const people = [
    {name: 'John', age: 30}, 
    {name: 'Mike', age: 23}
];
for(let i = 0; i < people.length; i++){
    console.log(people[i].name); // will print john and mike
}