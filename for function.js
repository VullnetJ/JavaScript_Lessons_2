function fun() {
    console.log("Good"); // will not print anything because is not called
}

console.log("bye");

// how to write hundred times 



function printHello() {



for (var i = 1; i<= 100; i++) {
    console.log("Hello");
}
console.log("HUHo");
printHello();  // 
}

// if we want to print one 50 and the second 100; 



function printHello(count) {  // count is a variable in this case; it gets its value from printHello(50); 

    for (var i = 1; i<= count; i++) {
        console.log("Hello");
    }

    printHello(50); // to print 50 ;
    console.log("HUHo");
    printHello(80);  //  to print 80

    printHello(30); // to print for example 30, it is good idea to write the code once, test that it works, and you can call it many times. 
    }

    var a = 3; 
    var b = 5; 
    var c = 1; 
    var d = 2; 
    printMax(a,b);

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}



// we can do by writing a function 
function printMax(x, y){
    if(x>y) {
        console.log(x);
    }
    else{
        console.log(y);
    }
}
   // it will take values from a = 3 and put in x. 


 z = max (a, b);
 p = max(c, d);

 ffunction max(x, y) {
     if (x>y){
         return x;
     }
     else {
         return y;
     }
 }