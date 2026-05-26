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

 //noraml function 
//function functionName() {}
// function functionName( arg1, arg2){}

// arrow function 
// const arrFun = () => {}
//const arrFun = (arg1, arg2) = > 


// return statment 

// function functioName() { return  somthing} // norml
// const arrowFunc = () =>{ return somthing} // arrow 
// const arrowFunc = () =>{ somthing } // arrow 

// no arguments 

function welcome(){
    console.log(arguments) // it will consider object values 
    console.log(arguments[0])
}
welcome("Hello", "Test");

//this keyword
// normal function
const obj = {
    name:'abcd',
    age: 30,
    print: function(){
        console.log(this)
    }
}

obj.print();

// arrow 
const arrObj = {
    name:'DASA',
    age: 31,
    printArrowFun: () => {
        console.log(this)
    }
}
arrObj.printArrowFun();
// declaration  doesn't throws error in normal function,bcz can access before initialization
declarFun();

function declarFun(){
    console.log('Hello')
};

/*mul();    //throws error in arrow function - cannot access mul before initialiazation 
const mul = () => {
    console.log('hello')
}*/

function passingDefaultParams(arg1, arg2 = "Hi"){ // arg2  = Test || Hi
   console.log(arg1,arg2) 
}
passingDefaultParams('Hello')
passingDefaultParams('Hello', "Test")

function mainFun(){
    function funName(){
        console.log("inside function")
    }
    funName();
    return 'Retuing Main function '
}
console.log(mainFun())

function add(x){
    return function(y){
        return function (z){
               return x + y + z; 
        }
    }
}

console.log(add(2)(3)(4))