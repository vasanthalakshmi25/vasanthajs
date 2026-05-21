/* functions used for code reusuable, 
to do a task multiple times we need  a function and for creating small pieces of code so that large code is diveded into soma parts*/

//creating a function
/*funtion functionname(){
    ----
}
functionname(); function calling */

function welcome(){
    console.log('Hi')
}
welcome();

function add(x,y){            // here x,y are arguments
    console.log(x+y);  
}
add(2,3)      // here 2,3 are  parameters

function add1(x,y){
    console.log(x+y);
    return;
}
const data=add(4,5);
console.log(data)

//Arrow function
//syntax  nameof varaiabledeclare varaibalename=() =>{};

var username=()=>'vasantha'+'lakshmi';
console.log(username())