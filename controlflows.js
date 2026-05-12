// 1.If statement
var a=20;
var b=30;
if(b<a)
{
    console.log("b is smaller than a");
}  

//2. If-else statement
if(b<a)
{
    console.log("b is smaller than a");
} 
else{
    console.log("b is greater than a");
}

// if-else if statement
let fruit = "apple";

if (fruit === "apple") {
    console.log("Its an apple");
} else if (fruit === "banana") {
    console.log("Its a banana");
} else if (fruit === "orange") {
    console.log("Its an orange");
} else {
    console.log("Unknown fruit");
}

//equality 1.double equality 2.triple equality
var val1= 25;
var val2 ="25";

if(val1 == val2){
    console.log(true);
}

if(val1=== val2)
{
    console.log(true);
}
else{
     console.log(false);
}

//falsy statements
if (false) {
    console.log("This will NOT run");
}

if (0) {
    console.log("This will NOT run");
}

if ("") {
    console.log("This will NOT run");
}

if (null) {
    console.log("This will NOT run");
} 
//all these are falsy, none of console.log statements will execute

console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(123));     // true
console.log(Boolean(0));       // false