// there are different functions, 
//Function Declarations or expressions. 

// function greet(firstName, lastName){ // it is just defined
//     console.log('Hello');
//     if(typeof firstName ==='undefined'){firstName= 'John' } not so good way of doing it. 
//    if(typeof lastName ==='undefined'){firstName= 'Doe' } not so good way of doing it. 
//     return 'Hello ' + firstName + " " + lastName;
// }
//console.log(greet('Steve', 'Smith')); // this is how you call it.// it can override the firstName
// will return Hello Steve Smith
// firstName is a parameter or value;

//you can define in inside function the value. 
function greet(firstName = 'John', lastName= 'Doe')

//Function expressions
const square = function(x=3){
    return x*x;
};
// console.log(square(8));

// Immidiately Invokable function expression - IIFEs

(function(){
    console.log('IIFE Ran..');
})(); // those paranthesis are requried. 
(function(name){
    console.log('Hello ' + name);
})('Brad');

// Property methods

const todo = {
    add: function(id){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);


    }
}
todo.delete =fuction(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();







