let val;

const today = new Date(); //to show the today's date

let birthday = new Date('9-10-1981 11:25');
let birthday = new Date('September 1- 1981');
birthday = new Date('9/10/1988');

val = today.getMonth();
val = today.getDate();
val = today.getDay(); //for example the fourth day
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime(); //it gives the time stamp, the amount of seconds since has passed. 

birthday.setMonth(2); // to change
birthday.setDate(12); //to change the date. 
birthday.setFullYear(1988);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

val = today;

console.log(val);
